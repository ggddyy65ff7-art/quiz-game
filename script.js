const Q=QUESTIONS.map((q,idx)=>({...q,_id:idx}));
const CATS=[...new Set(Q.map(x=>x.category))];
const CN={'معلومات عامة':'General knowledge','جغرافيا':'Geography','تاريخ':'History','علوم':'Science','حيوانات':'Animals','رياضة':'Sports','تكنولوجيا':'Technology','دول وعواصم':'Countries & capitals'};
const ICO={'جغرافيا':'🌍','تاريخ':'📜','علوم':'🔬','حيوانات':'🐾','رياضة':'⚽','تكنولوجيا':'💻','دول وعواصم':'🏳️','معلومات عامة':'💡'};
const BG={'جغرافيا':['#00897B','#004D40'],'تاريخ':['#8D6E63','#4E342E'],'علوم':['#039BE5','#01579B'],'حيوانات':['#43A047','#1B5E20'],'رياضة':['#FB8C00','#E65100'],'تكنولوجيا':['#5E35B1','#311B92'],'دول وعواصم':['#D81B60','#880E4F'],'معلومات عامة':['#3949AB','#1A237E']};
const $=id=>document.getElementById(id);
function shuf(arr){const a=arr.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
const DEF={sound:true,timer:true,count:10,diff:'all',cat:'all',lang:'ar',lives:false};
let S={...DEF};
try{Object.assign(S,JSON.parse(localStorage.getItem('s')||'{}'))}catch(e){}
const L=(a,e)=>S.lang=='ar'?a:e;
const cn=k=>S.lang=='ar'?k:(CN[k]||k);
const DN=()=>({all:L('الكل','All'),easy:L('سهل','Easy'),medium:L('متوسط','Medium'),hard:L('صعب','Hard'),expert:L('خبير','Expert')});
const save=()=>{try{localStorage.setItem('s',JSON.stringify(S))}catch(e){}};
const res=()=>{try{return JSON.parse(localStorage.getItem('r')||'[]')}catch(e){return[]}};
const stats=()=>{try{return Object.assign({games:0,correct:0,wrong:0,catCount:{}},JSON.parse(localStorage.getItem('st')||'{}'))}catch(e){return{games:0,correct:0,wrong:0,catCount:{}}}};
const saveStats=v=>{try{localStorage.setItem('st',JSON.stringify(v))}catch(e){}};
const draw=h=>{document.documentElement.dir=S.lang=='ar'?'rtl':'ltr';document.documentElement.lang=S.lang;$('app').innerHTML=h;scrollTo(0,0)};
let qs,i,score,ok,t0,left,tm,corr,opts,done,streak,lives,isDaily=false;
let usedIds=new Set();
let notice='';
let autoNext=null;
function actx(){try{return window._actx||(window._actx=new(window.AudioContext||window.webkitAudioContext)())}catch(e){return null}}
function tone(seq,type){const c=actx();if(!c)return;seq.forEach(([f,t])=>{const o=c.createOscillator(),v=c.createGain(),n=c.currentTime+t;o.type=type;o.frequency.value=f;
v.gain.setValueAtTime(.0001,n);v.gain.exponentialRampToValueAtTime(.22,n+.03);v.gain.exponentialRampToValueAtTime(.0001,n+.22);
o.connect(v);v.connect(c.destination);o.start(n);o.stop(n+.25)})}
function beep(g){if(!S.sound)return;tone(g?[[523,0],[659,.12],[784,.24],[1047,.36]]:[[196,0],[147,.18]],g?'triangle':'sawtooth')}
function click(){if(!S.sound)return;tone([[700,0]],'sine')}
document.addEventListener('click',e=>{if(e.target.tagName==='BUTTON')click()},true);
function tog(s){S.lang=S.lang=='ar'?'en':'ar';save();s?sets():home()}
function home(){clearInterval(tm);document.body.style.background=`linear-gradient(160deg,var(--g1),var(--g2))`;const b=res()[0];
draw(`<div class="ico bigicon" style="font-size:60px">🧠</div><h1>${L('لعبة الأسئلة','Quiz Game')}</h1><div class="sub">${L('نسخة تجريبية للويب','Web preview')}</div><div class="badge">🏆 ${L('أفضل نتيجة','Best score')}: ${b?b.score:0}</div>
<button onclick="start()">🚀 ${L('ابدأ اللعبة','Start game')}</button>
<button class="gold" onclick="daily()">📅 ${L('تحدي اليوم','Daily challenge')}</button>
<button onclick="cats()">🗂️ ${L('اختيار التصنيف','Choose category')}</button>
<button class="s" onclick="sets()">⚙️ ${L('الإعدادات','Settings')}</button>
<button class="s" onclick="best()">🏆 ${L('أفضل النتائج','Best results')}</button>
<button class="s" onclick="statsScreen()">📊 ${L('الإحصائيات','Statistics')}</button>
<button class="s" onclick="about()">ℹ️ ${L('حول اللعبة','About')}</button>
<button class="s" onclick="tog()">🌐 ${L('English','العربية')}</button>
<button class="r" onclick="quit()">🚪 ${L('خروج','Exit')}</button>`)}
function quit(){clearInterval(tm);try{window.close()}catch(e){}draw(`<h1>👋</h1><h2>${L('شكراً للعب!','Thanks for playing!')}</h2><button onclick="home()">${L('العودة للرئيسية','Back to home')}</button>`)}
function about(){draw(`<div class="ico" style="font-size:56px">ℹ️</div><h2>${L('حول اللعبة','About')}</h2>
<div class="card"><p>${L('لعبة أسئلة عربية تعمل بالكامل دون إنترنت. جميع بياناتك (النتائج والإحصائيات) تُحفظ على جهازك فقط ولا تُرسل لأي خادم.','An offline Arabic quiz game. All your data (scores & stats) stays on your device and is never sent anywhere.')}</p>
<p class="small">${L('لا حسابات، لا إعلانات، لا تتبع.','No accounts, no ads, no tracking.')}</p></div>
<button class="s" onclick="home()">↩️ ${L('رجوع','Back')}</button>`)}
function statsScreen(){const s=stats();const top=Object.entries(s.catCount).sort((a,b)=>b[1]-a[1])[0];
const total=s.correct+s.wrong;
draw(`<div class="ico" style="font-size:56px">📊</div><h2>${L('الإحصائيات','Statistics')}</h2>
<div class="card"><p>🎮 ${L('عدد الجولات','Games played')}: ${s.games}</p>
<p>✅ ${L('إجمالي الإجابات الصحيحة','Total correct answers')}: ${s.correct}</p>
<p>📈 ${L('نسبة الدقة الكلية','Overall accuracy')}: ${total?Math.round(s.correct*100/total):0}%</p>
<p>⭐ ${L('التصنيف الأقوى لديك','Your strongest category')}: ${top?cn(top[0]):L('لا يوجد بعد','None yet')}</p></div>
<button class="s" onclick="home()">↩️ ${L('رجوع','Back')}</button>`)}
function cats(){draw(`<h2>🗂️ ${L('اختر التصنيف','Pick a category')}</h2>`+['all',...CATS].map(k=>`<button class="${S.cat==k?'g':''}" onclick="S.cat='${k}';save();home()">${k=='all'?'🌈 '+L('كل التصنيفات','All categories'):(ICO[k]||'❓')+' '+cn(k)}</button>`).join('')+`<button class="s" onclick="home()">↩️ ${L('رجوع','Back')}</button>`)}
function sets(){const o=v=>v?L('مفعّل','On'):L('متوقف','Off');draw(`<div class="ico" style="font-size:52px">⚙️</div><h2>${L('الإعدادات','Settings')}</h2>
<button onclick="tog(1)">🌐 ${L('اللغة: العربية','Language: English')}</button>
<button onclick="S.sound=!S.sound;save();sets()">🔊 ${L('المؤثرات الصوتية','Sound effects')}: ${o(S.sound)}</button>
<button onclick="S.timer=!S.timer;save();sets()">⏱️ ${L('المؤقت','Timer')}: ${o(S.timer)}</button>
<button onclick="S.lives=!S.lives;save();sets()">❤️ ${L('وضع الأرواح (3 أخطاء تنهي الجولة)','Lives mode (3 mistakes ends round)')}: ${o(S.lives)}</button>
<div class="row"><button onclick="S.count=Math.max(1,S.count-1);save();sets()">➖</button><div class="badge val">${L('عدد الأسئلة','Questions')}: ${S.count}</div><button onclick="S.count=Math.min(Q.length,S.count+1);save();sets()">➕</button></div>
<button onclick="const d=['all','easy','medium','hard','expert'];S.diff=d[(d.indexOf(S.diff)+1)%5];save();sets()">${L('الصعوبة','Difficulty')}: ${DN()[S.diff]}</button>
<button class="r" onclick="S={...DEF,lang:S.lang};save();sets()">${L('إعادة الإعدادات للافتراضي','Reset settings')}</button><button class="s" onclick="home()">${L('رجوع','Back')}</button>`)}
function best(){const r=res();draw(`<div class="ico" style="font-size:52px">🏆</div><h2>${L('أفضل النتائج','Best results')}</h2>`+(r.length?`<div class="card">`+r.map((x,n)=>`<p>${['🥇','🥈','🥉'][n]||'🎯'} ${x.score} ${L('نقطة','pts')} — ${x.ok}/${x.total} — ${x.date}${x.daily?' 📅':''}</p>`).join('')+`</div>`:`<p>${L('لا توجد نتائج بعد','No results yet')}</p>`)+`<button class="s" onclick="home()">↩️ ${L('رجوع','Back')}</button>`)}
function daily(){isDaily=true;
const d=new Date();const seed=d.getFullYear()*372+d.getMonth()*31+d.getDate();
function srand(s){let x=Math.sin(s)*10000;return x-Math.floor(x)}
let pool=Q.slice();let sIdx=seed;
for(let k=pool.length-1;k>0;k--){const j=Math.floor(srand(sIdx++)*(k+1));[pool[k],pool[j]]=[pool[j],pool[k]]}
qs=pool.slice(0,10);notice='';streak=0;lives=3;i=0;score=0;ok=0;t0=Date.now();ask()}
function start(){isDaily=false;
let p=Q.filter(x=>(S.cat=='all'||x.category==S.cat)&&(S.diff=='all'||x.difficulty==S.diff));
let short=p.length<S.count && S.diff!=='all';
if(short){const byCat=Q.filter(x=>S.cat=='all'||x.category==S.cat);if(byCat.length>p.length)p=byCat}
if(!p.length)p=Q;
const want=Math.min(S.count,p.length);
notice=want<S.count?`${L('التصنيف المختار فيه','This selection has only')} ${p.length} ${L('سؤال فقط، فبدأنا بكل ما توفر','questions, so we started with all of them')}`:'';
let unseen=p.filter(x=>!usedIds.has(x._id));
if(unseen.length<want){usedIds.clear();unseen=p}
qs=shuf(unseen).slice(0,want);
qs.forEach(x=>usedIds.add(x._id));
streak=0;lives=3;i=0;score=0;ok=0;t0=Date.now();ask()}
function ask(){const q=qs[i],idx=shuf([0,1,2,3]),ol=S.lang=='ar'?q.options:(q.en_o&&q.en_o.length==4?q.en_o:q.options);opts=idx.map(k=>ol[k]);corr=idx.indexOf(q.correct);done=false;
const g=BG[q.category]||BG['معلومات عامة'];document.body.style.background=`linear-gradient(160deg,${g[0]},${g[1]})`;
const pct=Math.round((i)/qs.length*100);
const hearts=S.lives?`<div class="hearts">${'❤️'.repeat(lives)}${'🖤'.repeat(3-lives)}</div>`:'';
const streakBadge=streak>=2?`<div class="badge gold">🔥 ${L('سلسلة','Streak')} x${streak}</div>`:'';
draw(`${isDaily?'<div class="badge gold">📅 '+L('تحدي اليوم','Daily challenge')+'</div>':''}${(i==0&&notice)?`<div class="badge gold">⚠️ ${notice}</div>`:''}
<div class="badge">${L('السؤال','Question')} ${i+1} / ${qs.length}</div><div class="badge" id="sc">⭐ ${L('النقاط','Score')}: ${score}</div>${streakBadge}
${hearts}
<div class="barwrap"><div class="bar" style="width:${pct}%"></div></div>
${S.timer?'<div class="badge" id="tt"></div>':''}
<div class="ico bigicon">${q.icon||'❓'}</div><div class="card center"><h2 style="margin:0">${S.lang=='ar'?q.question:(q.en_q||q.question)}</h2></div>
${opts.map((o,k)=>`<button id="b${k}" onclick="ans(${k})">${o}</button>`).join('')}
<div class="card" id="exp" style="display:none"></div>
<h3 id="fb"></h3><button id="nx" style="display:none" onclick="nxt()">${i==qs.length-1?L('عرض النتيجة','Show result'):L('السؤال التالي','Next question')}</button><button class="r" onclick="home()">${L('خروج','Exit')}</button>`);
clearInterval(tm);clearTimeout(autoNext);if(S.timer){left=15;tick();tm=setInterval(()=>{left--;tick();if(left<=0)ans(-1)},1000)}}
function tick(){$('tt').textContent=L('الوقت','Time')+': '+left+' '+L('ثانية','s')}
function ans(s){if(done)return;done=true;clearInterval(tm);const r=s==corr,f=$('fb'),q=qs[i];
const st=stats();st.catCount[q.category]=(st.catCount[q.category]||0)+(r?1:0);
if(r){ok++;streak++;st.correct++;const mult=streak>=5?3:streak>=3?2:1;const p=(10+(S.timer?Math.floor(left/3):0))*mult;score+=p;
f.textContent=L('إجابة صحيحة ✓','Correct ✓')+' (+'+p+(mult>1?' ⚡x'+mult:'')+')';f.style.color='#B9F6CA'}
else{streak=0;st.wrong++;if(S.lives)lives--;
f.innerHTML=(s<0?L('انتهى الوقت ✗',"Time's up ✗"):L('إجابة خاطئة ✗','Wrong ✗'))+'<br>'+L('الإجابة الصحيحة','Correct answer')+': '+opts[corr];f.style.color='#FFCDD2'}
saveStats(st);
const ex=S.lang=='ar'?q.explain:(q.en_explain||q.explain);
if(ex){$('exp').style.display='block';$('exp').innerHTML='💡 '+ex}
for(let k=0;k<4;k++){const b=$('b'+k);b.disabled=true;b.style.opacity=(k==corr||k==s)?1:.5;if(k==corr){b.style.background='var(--ok)';b.classList.add('pulse')}else if(k==s){b.style.background='var(--no)';b.classList.add('shake')}}
$('sc').textContent=L('النقاط','Score')+': '+score;$('nx').style.display='block';beep(r);
clearTimeout(autoNext);
if(S.lives&&lives<=0){autoNext=setTimeout(result,r?1400:2600);return}
autoNext=setTimeout(nxt,r?1400:2600)}
function nxt(){clearTimeout(autoNext);i++;i<qs.length?ask():result()}
function shareText(t,ok,total){return L(`لعبت "لعبة الأسئلة" وحصلت على ${t} نقطة (${ok}/${total} إجابة صحيحة)! 🧠🎮`,`I played Quiz Game and scored ${t} points (${ok}/${total} correct)! 🧠🎮`)}
function share(){const txt=$('_sharetxt').textContent;
if(navigator.share){navigator.share({text:txt}).catch(()=>{})}
else{navigator.clipboard&&navigator.clipboard.writeText(txt).then(()=>alert(L('تم نسخ النتيجة!','Result copied!')))}}
function result(){clearTimeout(autoNext);const t=qs.length,secs=Math.round((Date.now()-t0)/1000),pb=(res()[0]||{score:0}).score;
const stt=stats();stt.games++;saveStats(stt);
try{localStorage.setItem('r',JSON.stringify([...res(),{score,ok,total:t,date:new Date().toLocaleDateString('en-CA'),daily:isDaily}].sort((a,b)=>b.score-a.score).slice(0,10)))}catch(e){}
const txt=shareText(score,ok,t);
draw(`<div class="ico" style="font-size:60px">${ok*100/t>=80?'🏆':ok*100/t>=50?'🎉':'👍'}</div><h1>${L('انتهت الجولة','Round over')}</h1>
<div class="card center"><h2 style="margin:0 0 8px">⭐ ${score} ${L('نقطة','pts')}</h2>
<div class="barwrap"><div class="bar" style="width:${t?Math.round(ok*100/t):0}%"></div></div>
<p>${L('الإجابات الصحيحة','Correct answers')}: ${ok} &nbsp;|&nbsp; ${L('الإجابات الخاطئة','Wrong answers')}: ${t-ok}</p>
<p>${L('النسبة','Accuracy')}: ${t?Math.round(ok*100/t):0}% &nbsp;|&nbsp; ${L('الوقت المستخدم','Time used')}: ${secs}${L('ث','s')}</p>
<p>🏆 ${L('أفضل نتيجة','Best score')}: ${Math.max(pb,score)}</p></div>
<span id="_sharetxt" style="display:none">${txt}</span>
<button onclick="share()">📤 ${L('مشاركة النتيجة','Share result')}</button>
<button onclick="${isDaily?'daily()':'start()'}">🔁 ${L('إعادة اللعب','Play again')}</button><button class="s" onclick="home()">🏠 ${L('العودة للرئيسية','Back to home')}</button>`)}
home();
try{const a=new URLSearchParams(location.search).get('action');if(a==='daily')daily();else if(a==='start')start();}catch(e){}
