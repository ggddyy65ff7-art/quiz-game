// بنك الأسئلة - يمكنك إضافة أسئلة جديدة بنفس الصيغة
const QUESTIONS = [
 {
  "question": "أين يقع البحر الميت؟",
  "options": [
   "العراق",
   "الأردن وفلسطين",
   "مصر",
   "السعودية"
  ],
  "correct": 1,
  "category": "جغرافيا",
  "difficulty": "easy",
  "icon": "🌊",
  "en_q": "Where is the Dead Sea located?",
  "en_o": [
   "Iraq",
   "Jordan and Palestine",
   "Egypt",
   "Saudi Arabia"
  ],
  "explain": "يقع بين الأردن وفلسطين وهو أخفض نقطة يابسة على سطح الأرض.",
  "en_explain": "It lies between Jordan and Palestine and is the lowest point on Earth's land surface."
 },
 {
  "question": "ما أطول نهر في العالم؟",
  "options": [
   "النيل",
   "الفرات",
   "الأمازون",
   "دجلة"
  ],
  "correct": 0,
  "category": "جغرافيا",
  "difficulty": "medium",
  "icon": "🏞️",
  "en_q": "What is the longest river in the world?",
  "en_o": [
   "The Nile",
   "The Euphrates",
   "The Amazon",
   "The Tigris"
  ],
  "explain": "يمتد نهر النيل نحو 6650 كم عبر عدة دول أفريقية.",
  "en_explain": "The Nile stretches about 6,650 km through several African countries."
 },
 {
  "question": "ما أكبر قارة في العالم مساحة؟",
  "options": [
   "أفريقيا",
   "آسيا",
   "أوروبا",
   "أمريكا الشمالية"
  ],
  "correct": 1,
  "category": "جغرافيا",
  "difficulty": "easy",
  "icon": "🌏",
  "en_q": "Which is the largest continent by area?",
  "en_o": [
   "Africa",
   "Asia",
   "Europe",
   "North America"
  ],
  "explain": "تغطي آسيا نحو 30% من مساحة اليابسة في العالم.",
  "en_explain": "Asia covers about 30% of the world's land area."
 },
 {
  "question": "في أي دولة يقع جبل كليمنجارو؟",
  "options": [
   "كينيا",
   "تنزانيا",
   "أوغندا",
   "إثيوبيا"
  ],
  "correct": 1,
  "category": "جغرافيا",
  "difficulty": "hard",
  "icon": "🏔️",
  "en_q": "In which country is Mount Kilimanjaro?",
  "en_o": [
   "Kenya",
   "Tanzania",
   "Uganda",
   "Ethiopia"
  ],
  "explain": "يقع في تنزانيا وهو أعلى جبل في أفريقيا.",
  "en_explain": "It's in Tanzania and is Africa's highest mountain."
 },
 {
  "question": "من هو أول الخلفاء الراشدين؟",
  "options": [
   "عمر بن الخطاب",
   "عثمان بن عفان",
   "أبو بكر الصديق",
   "علي بن أبي طالب"
  ],
  "correct": 2,
  "category": "تاريخ",
  "difficulty": "easy",
  "icon": "🕌",
  "en_q": "Who was the first Rashidun caliph?",
  "en_o": [
   "Umar ibn al-Khattab",
   "Uthman ibn Affan",
   "Abu Bakr al-Siddiq",
   "Ali ibn Abi Talib"
  ],
  "explain": "تولى أبو بكر الصديق الخلافة بعد وفاة النبي ﷺ مباشرة.",
  "en_explain": "Abu Bakr became caliph immediately after the Prophet's death."
 },
 {
  "question": "في أي عام سقطت القسطنطينية على يد محمد الفاتح؟",
  "options": [
   "1453",
   "1258",
   "1492",
   "1517"
  ],
  "correct": 0,
  "category": "تاريخ",
  "difficulty": "medium",
  "icon": "🏰",
  "en_q": "In what year did Mehmed the Conqueror take Constantinople?",
  "en_o": [
   "1453",
   "1258",
   "1492",
   "1517"
  ],
  "explain": "كان ذلك عام 1453م، وأنهى الإمبراطورية البيزنطية.",
  "en_explain": "This was in 1453 CE, ending the Byzantine Empire."
 },
 {
  "question": "من بنى الأهرامات في الجيزة؟",
  "options": [
   "الرومان",
   "المصريون القدماء",
   "الفرس",
   "الإغريق"
  ],
  "correct": 1,
  "category": "تاريخ",
  "difficulty": "easy",
  "icon": "🔺",
  "en_q": "Who built the pyramids of Giza?",
  "en_o": [
   "The Romans",
   "The ancient Egyptians",
   "The Persians",
   "The Greeks"
  ],
  "explain": "بناها المصريون القدماء كمقابر للفراعنة قبل آلاف السنين.",
  "en_explain": "Built by ancient Egyptians as tombs for pharaohs thousands of years ago."
 },
 {
  "question": "في أي عام انتهت الحرب العالمية الثانية؟",
  "options": [
   "1918",
   "1939",
   "1945",
   "1950"
  ],
  "correct": 2,
  "category": "تاريخ",
  "difficulty": "medium",
  "icon": "🌍",
  "en_q": "In what year did World War II end?",
  "en_o": [
   "1918",
   "1939",
   "1945",
   "1950"
  ],
  "explain": "انتهت عام 1945 باستسلام ألمانيا ثم اليابان.",
  "en_explain": "It ended in 1945 with Germany's then Japan's surrender."
 },
 {
  "question": "ما الرمز الكيميائي للماء؟",
  "options": [
   "CO2",
   "H2O",
   "O2",
   "NaCl"
  ],
  "correct": 1,
  "category": "علوم",
  "difficulty": "easy",
  "icon": "💧",
  "en_q": "What is the chemical formula of water?",
  "en_o": [
   "CO2",
   "H2O",
   "O2",
   "NaCl"
  ],
  "explain": "جزيء الماء يتكون من ذرتي هيدروجين وذرة أكسجين واحدة.",
  "en_explain": "A water molecule has two hydrogen atoms and one oxygen atom."
 },
 {
  "question": "ما أقرب كوكب إلى الشمس؟",
  "options": [
   "الزهرة",
   "الأرض",
   "عطارد",
   "المريخ"
  ],
  "correct": 2,
  "category": "علوم",
  "difficulty": "easy",
  "icon": "☀️",
  "en_q": "Which planet is closest to the Sun?",
  "en_o": [
   "Venus",
   "Earth",
   "Mercury",
   "Mars"
  ],
  "explain": "عطارد هو أصغر كواكب المجموعة الشمسية وأقربها للشمس.",
  "en_explain": "Mercury is the smallest planet and closest to the Sun."
 },
 {
  "question": "كم عدد عظام جسم الإنسان البالغ تقريباً؟",
  "options": [
   "106",
   "206",
   "306",
   "406"
  ],
  "correct": 1,
  "category": "علوم",
  "difficulty": "medium",
  "icon": "🦴",
  "en_q": "About how many bones does an adult human have?",
  "en_o": [
   "106",
   "206",
   "306",
   "406"
  ],
  "explain": "يولد الإنسان بعظام أكثر لكنها تندمج مع النمو لتصبح 206.",
  "en_explain": "Humans are born with more bones, which fuse into 206 as they grow."
 },
 {
  "question": "ما الغاز الأكثر وجوداً في الغلاف الجوي للأرض؟",
  "options": [
   "الأكسجين",
   "ثاني أكسيد الكربون",
   "النيتروجين",
   "الهيدروجين"
  ],
  "correct": 2,
  "category": "علوم",
  "difficulty": "hard",
  "icon": "🌬️",
  "en_q": "What is the most abundant gas in Earth's atmosphere?",
  "en_o": [
   "Oxygen",
   "Carbon dioxide",
   "Nitrogen",
   "Hydrogen"
  ],
  "explain": "يشكل النيتروجين نحو 78% من الغلاف الجوي.",
  "en_explain": "Nitrogen makes up about 78% of the atmosphere."
 },
 {
  "question": "ما أسرع حيوان بري؟",
  "options": [
   "الأسد",
   "الفهد",
   "الحصان",
   "الغزال"
  ],
  "correct": 1,
  "category": "حيوانات",
  "difficulty": "easy",
  "icon": "🐆",
  "en_q": "What is the fastest land animal?",
  "en_o": [
   "Lion",
   "Cheetah",
   "Horse",
   "Gazelle"
  ],
  "explain": "يستطيع الفهد الوصول لسرعة تفوق 100 كم/س.",
  "en_explain": "Cheetahs can exceed 100 km/h in short bursts."
 },
 {
  "question": "ما أكبر حيوان في العالم؟",
  "options": [
   "الفيل",
   "القرش الأبيض",
   "الحوت الأزرق",
   "الزرافة"
  ],
  "correct": 2,
  "category": "حيوانات",
  "difficulty": "easy",
  "icon": "🐋",
  "en_q": "What is the largest animal in the world?",
  "en_o": [
   "Elephant",
   "Great white shark",
   "Blue whale",
   "Giraffe"
  ],
  "explain": "يمكن أن يصل طول الحوت الأزرق إلى 30 متراً تقريباً.",
  "en_explain": "Blue whales can reach nearly 30 meters in length."
 },
 {
  "question": "كم عدد أرجل العنكبوت؟",
  "options": [
   "6",
   "8",
   "10",
   "12"
  ],
  "correct": 1,
  "category": "حيوانات",
  "difficulty": "medium",
  "icon": "🕷️",
  "en_q": "How many legs does a spider have?",
  "en_o": [
   "6",
   "8",
   "10",
   "12"
  ],
  "explain": "العناكب من فئة العنكبوتيات التي تتميز بثمانية أرجل.",
  "en_explain": "Spiders are arachnids, characterized by eight legs."
 },
 {
  "question": "أي من هذه الحيوانات من الثدييات؟",
  "options": [
   "الدلفين",
   "القرش",
   "السلمون",
   "الأخطبوط"
  ],
  "correct": 0,
  "category": "حيوانات",
  "difficulty": "hard",
  "icon": "🐬",
  "en_q": "Which of these animals is a mammal?",
  "en_o": [
   "Dolphin",
   "Shark",
   "Salmon",
   "Octopus"
  ],
  "explain": "الدلافين ثدييات بحرية تتنفس الهواء وترضع صغارها.",
  "en_explain": "Dolphins are marine mammals that breathe air and nurse their young."
 },
 {
  "question": "كم عدد لاعبي فريق كرة القدم داخل الملعب؟",
  "options": [
   "9",
   "10",
   "11",
   "12"
  ],
  "correct": 2,
  "category": "رياضة",
  "difficulty": "easy",
  "icon": "⚽",
  "en_q": "How many football players per team are on the pitch?",
  "en_o": [
   "9",
   "10",
   "11",
   "12"
  ],
  "explain": "كل فريق يضم 11 لاعباً بينهم حارس مرمى.",
  "en_explain": "Each team fields 11 players, including a goalkeeper."
 },
 {
  "question": "أي دولة استضافت كأس العالم 2022؟",
  "options": [
   "روسيا",
   "قطر",
   "البرازيل",
   "ألمانيا"
  ],
  "correct": 1,
  "category": "رياضة",
  "difficulty": "easy",
  "icon": "🏆",
  "en_q": "Which country hosted the 2022 World Cup?",
  "en_o": [
   "Russia",
   "Qatar",
   "Brazil",
   "Germany"
  ],
  "explain": "كانت قطر أول دولة عربية تستضيف كأس العالم.",
  "en_explain": "Qatar was the first Arab country to host the World Cup."
 },
 {
  "question": "كل كم سنة تقام الألعاب الأولمبية الصيفية؟",
  "options": [
   "2",
   "3",
   "4",
   "5"
  ],
  "correct": 2,
  "category": "رياضة",
  "difficulty": "medium",
  "icon": "🥇",
  "en_q": "How often are the Summer Olympics held (in years)?",
  "en_o": [
   "2",
   "3",
   "4",
   "5"
  ],
  "explain": "تقام كل 4 سنوات، وقد تتأجل لظروف استثنائية كالأوبئة.",
  "en_explain": "Held every 4 years, though exceptional events can delay them."
 },
 {
  "question": "في أي رياضة يُستخدم مصطلح 'الإرسال الساحق' (Ace)؟",
  "options": [
   "كرة القدم",
   "التنس",
   "السباحة",
   "الملاكمة"
  ],
  "correct": 1,
  "category": "رياضة",
  "difficulty": "hard",
  "icon": "🎾",
  "en_q": "In which sport is the term \"ace\" used?",
  "en_o": [
   "Football",
   "Tennis",
   "Swimming",
   "Boxing"
  ],
  "explain": "في التنس، يعني فوز اللاعب بالنقطة مباشرة من الإرسال دون أن يلمس الخصم الكرة.",
  "en_explain": "In tennis, it means winning the point directly off the serve."
 },
 {
  "question": "ماذا يعني الاختصار CPU؟",
  "options": [
   "وحدة المعالجة المركزية",
   "ذاكرة الوصول العشوائي",
   "بطاقة الرسوميات",
   "القرص الصلب"
  ],
  "correct": 0,
  "category": "تكنولوجيا",
  "difficulty": "easy",
  "icon": "💻",
  "en_q": "What does CPU stand for?",
  "en_o": [
   "Central Processing Unit",
   "Random Access Memory",
   "Graphics Card",
   "Hard Drive"
  ],
  "explain": "هي 'العقل' الذي ينفذ تعليمات البرامج داخل الحاسوب.",
  "en_explain": "It's the 'brain' that executes program instructions inside a computer."
 },
 {
  "question": "أي لغة برمجة تُستخدم رسمياً لتطوير تطبيقات Android الحديثة؟",
  "options": [
   "Kotlin",
   "Swift",
   "Ruby",
   "Perl"
  ],
  "correct": 0,
  "category": "تكنولوجيا",
  "difficulty": "medium",
  "icon": "📱",
  "en_q": "Which language is officially used for modern Android apps?",
  "en_o": [
   "Kotlin",
   "Swift",
   "Ruby",
   "Perl"
  ],
  "explain": "تبنّت جوجل Kotlin كلغة رسمية مفضّلة لتطوير Android منذ 2019.",
  "en_explain": "Google made Kotlin the preferred official language for Android since 2019."
 },
 {
  "question": "ماذا يعني الاختصار WWW؟",
  "options": [
   "World Wide Web",
   "Web World Wide",
   "Wide Web World",
   "World Web Wide"
  ],
  "correct": 0,
  "category": "تكنولوجيا",
  "difficulty": "easy",
  "icon": "🌐",
  "en_q": "What does WWW stand for?",
  "en_o": [
   "World Wide Web",
   "Web World Wide",
   "Wide Web World",
   "World Web Wide"
  ],
  "explain": "اخترعه تيم بيرنرز-لي عام 1989 لربط صفحات الإنترنت.",
  "en_explain": "Invented by Tim Berners-Lee in 1989 to link internet pages."
 },
 {
  "question": "كم بت في البايت الواحد؟",
  "options": [
   "4",
   "8",
   "16",
   "32"
  ],
  "correct": 1,
  "category": "تكنولوجيا",
  "difficulty": "hard",
  "icon": "🔢",
  "en_q": "How many bits are in one byte?",
  "en_o": [
   "4",
   "8",
   "16",
   "32"
  ],
  "explain": "البايت الواحد هو أصغر وحدة تخزين قابلة للعنونة في الحاسوب.",
  "en_explain": "A byte is the smallest addressable storage unit in a computer."
 },
 {
  "question": "ما عاصمة مصر؟",
  "options": [
   "الإسكندرية",
   "القاهرة",
   "الجيزة",
   "أسوان"
  ],
  "correct": 1,
  "category": "دول وعواصم",
  "difficulty": "easy",
  "icon": "🇪🇬",
  "en_q": "What is the capital of Egypt?",
  "en_o": [
   "Alexandria",
   "Cairo",
   "Giza",
   "Aswan"
  ],
  "explain": "القاهرة أكبر مدن مصر والوطن العربي من حيث عدد السكان.",
  "en_explain": "Cairo is the largest city in Egypt and the Arab world by population."
 },
 {
  "question": "ما عاصمة اليابان؟",
  "options": [
   "أوساكا",
   "كيوتو",
   "طوكيو",
   "سول"
  ],
  "correct": 2,
  "category": "دول وعواصم",
  "difficulty": "easy",
  "icon": "🇯🇵",
  "en_q": "What is the capital of Japan?",
  "en_o": [
   "Osaka",
   "Kyoto",
   "Tokyo",
   "Seoul"
  ],
  "explain": "طوكيو من أكبر المدن اكتظاظاً بالسكان في العالم.",
  "en_explain": "Tokyo is one of the most densely populated cities in the world."
 },
 {
  "question": "ما عاصمة المغرب؟",
  "options": [
   "الدار البيضاء",
   "الرباط",
   "مراكش",
   "فاس"
  ],
  "correct": 1,
  "category": "دول وعواصم",
  "difficulty": "medium",
  "icon": "🇲🇦",
  "en_q": "What is the capital of Morocco?",
  "en_o": [
   "Casablanca",
   "Rabat",
   "Marrakesh",
   "Fez"
  ],
  "explain": "الرباط هي العاصمة الإدارية بينما الدار البيضاء الأكبر اقتصادياً.",
  "en_explain": "Rabat is the administrative capital while Casablanca is the economic hub."
 },
 {
  "question": "ما عاصمة أستراليا؟",
  "options": [
   "سيدني",
   "ملبورن",
   "كانبرا",
   "بيرث"
  ],
  "correct": 2,
  "category": "دول وعواصم",
  "difficulty": "hard",
  "icon": "🇦🇺",
  "en_q": "What is the capital of Australia?",
  "en_o": [
   "Sydney",
   "Melbourne",
   "Canberra",
   "Perth"
  ],
  "explain": "كانبرا اختيرت كحل وسط بين سيدني وملبورن المتنافستين.",
  "en_explain": "Canberra was chosen as a compromise between rival cities Sydney and Melbourne."
 },
 {
  "question": "كم عدد أيام السنة الكبيسة؟",
  "options": [
   "364",
   "365",
   "366",
   "367"
  ],
  "correct": 2,
  "category": "معلومات عامة",
  "difficulty": "easy",
  "icon": "📅",
  "en_q": "How many days are in a leap year?",
  "en_o": [
   "364",
   "365",
   "366",
   "367"
  ],
  "explain": "تحدث كل 4 سنوات لتعويض الفارق الفلكي في دوران الأرض حول الشمس.",
  "en_explain": "It occurs every 4 years to compensate for Earth's orbital period."
 },
 {
  "question": "ما لون خليط الأزرق والأصفر؟",
  "options": [
   "الأخضر",
   "البنفسجي",
   "البرتقالي",
   "الوردي"
  ],
  "correct": 0,
  "category": "معلومات عامة",
  "difficulty": "easy",
  "icon": "🎨",
  "en_q": "What color do you get by mixing blue and yellow?",
  "en_o": [
   "Green",
   "Purple",
   "Orange",
   "Pink"
  ],
  "explain": "يعرف هذا بالخلط الطرحي للألوان في الرسم.",
  "en_explain": "This is known as subtractive color mixing in painting."
 },
 {
  "question": "كم عدد الألوان في قوس قزح؟",
  "options": [
   "5",
   "6",
   "7",
   "8"
  ],
  "correct": 2,
  "category": "معلومات عامة",
  "difficulty": "medium",
  "icon": "🌈",
  "en_q": "How many colors are in a rainbow?",
  "en_o": [
   "5",
   "6",
   "7",
   "8"
  ],
  "explain": "يُقسَّم تقليدياً إلى سبعة ألوان حسب إسحاق نيوتن.",
  "en_explain": "Traditionally divided into seven colors, following Isaac Newton."
 },
 {
  "question": "ما العملة الرسمية لليابان؟",
  "options": [
   "اليوان",
   "الوون",
   "الين",
   "الروبية"
  ],
  "correct": 2,
  "category": "معلومات عامة",
  "difficulty": "hard",
  "icon": "💴",
  "en_q": "What is the official currency of Japan?",
  "en_o": [
   "Yuan",
   "Won",
   "Yen",
   "Rupee"
  ],
  "explain": "الين من أكثر العملات تداولاً في العالم.",
  "en_explain": "The yen is one of the most traded currencies globally."
 },
 {
  "question": "ما أكبر صحراء حارة في العالم؟",
  "options": [
   "الصحراء الكبرى",
   "الربع الخالي",
   "صحراء جوبي",
   "كالاهاري"
  ],
  "correct": 0,
  "category": "جغرافيا",
  "difficulty": "easy",
  "icon": "🏜️",
  "en_q": "What is the largest hot desert in the world?",
  "en_o": [
   "The Sahara",
   "Rub' al Khali",
   "The Gobi",
   "The Kalahari"
  ],
  "explain": "تغطي الصحراء الكبرى معظم شمال أفريقيا.",
  "en_explain": "The Sahara covers most of North Africa."
 },
 {
  "question": "ما أعلى قمة جبل في العالم؟",
  "options": [
   "كي 2",
   "إيفرست",
   "كليمنجارو",
   "مونبلان"
  ],
  "correct": 1,
  "category": "جغرافيا",
  "difficulty": "easy",
  "icon": "⛰️",
  "en_q": "What is the highest mountain in the world?",
  "en_o": [
   "K2",
   "Everest",
   "Kilimanjaro",
   "Mont Blanc"
  ],
  "explain": "يرتفع إيفرست نحو 8849 متراً فوق سطح البحر.",
  "en_explain": "Everest rises about 8,849 meters above sea level."
 },
 {
  "question": "أي محيط هو الأكبر؟",
  "options": [
   "الأطلسي",
   "الهندي",
   "الهادئ",
   "المتجمد الشمالي"
  ],
  "correct": 2,
  "category": "جغرافيا",
  "difficulty": "easy",
  "icon": "🌐",
  "en_q": "Which ocean is the largest?",
  "en_o": [
   "Atlantic",
   "Indian",
   "Pacific",
   "Arctic"
  ],
  "explain": "يغطي المحيط الهادئ مساحة أكبر من كل اليابسة مجتمعة.",
  "en_explain": "The Pacific covers a larger area than all land combined."
 },
 {
  "question": "أي بحر يفصل بين أفريقيا وشبه الجزيرة العربية؟",
  "options": [
   "البحر الأحمر",
   "البحر الأسود",
   "بحر قزوين",
   "بحر البلطيق"
  ],
  "correct": 0,
  "category": "جغرافيا",
  "difficulty": "medium",
  "icon": "🌴",
  "en_q": "Which sea separates Africa from the Arabian Peninsula?",
  "en_o": [
   "Red Sea",
   "Black Sea",
   "Caspian Sea",
   "Baltic Sea"
  ],
  "explain": "يُعد ممراً بحرياً مهماً بين آسيا وأفريقيا.",
  "en_explain": "It's an important maritime route between Asia and Africa."
 },
 {
  "question": "في أي قارة تقع البرازيل؟",
  "options": [
   "أفريقيا",
   "أمريكا الجنوبية",
   "آسيا",
   "أوروبا"
  ],
  "correct": 1,
  "category": "جغرافيا",
  "difficulty": "easy",
  "icon": "🇧🇷",
  "en_q": "Which continent is Brazil in?",
  "en_o": [
   "Africa",
   "South America",
   "Asia",
   "Europe"
  ],
  "explain": "أكبر دولة في أمريكا الجنوبية من حيث المساحة والسكان.",
  "en_explain": "The largest country in South America by area and population."
 },
 {
  "question": "من هو مؤسس الدولة الأموية؟",
  "options": [
   "معاوية بن أبي سفيان",
   "عبد الملك بن مروان",
   "أبو العباس السفاح",
   "هارون الرشيد"
  ],
  "correct": 0,
  "category": "تاريخ",
  "difficulty": "medium",
  "icon": "👑",
  "en_q": "Who founded the Umayyad caliphate?",
  "en_o": [
   "Muawiyah ibn Abi Sufyan",
   "Abd al-Malik ibn Marwan",
   "Abu al-Abbas al-Saffah",
   "Harun al-Rashid"
  ],
  "explain": "أسسها بعد توليه الخلافة عام 661م وجعل دمشق عاصمة لها.",
  "en_explain": "He founded it after becoming caliph in 661 CE, making Damascus its capital."
 },
 {
  "question": "في أي عام هاجر النبي ﷺ إلى المدينة؟",
  "options": [
   "610م",
   "622م",
   "632م",
   "570م"
  ],
  "correct": 1,
  "category": "تاريخ",
  "difficulty": "medium",
  "icon": "🕋",
  "en_q": "In what year did the Prophet migrate to Medina?",
  "en_o": [
   "610 CE",
   "622 CE",
   "632 CE",
   "570 CE"
  ],
  "explain": "هذا الحدث هو بداية التقويم الهجري.",
  "en_explain": "This event marks the start of the Islamic (Hijri) calendar."
 },
 {
  "question": "من قاد المسلمين في معركة حطين؟",
  "options": [
   "صلاح الدين الأيوبي",
   "قطز",
   "طارق بن زياد",
   "خالد بن الوليد"
  ],
  "correct": 0,
  "category": "تاريخ",
  "difficulty": "medium",
  "icon": "⚔️",
  "en_q": "Who led the Muslims at the Battle of Hattin?",
  "en_o": [
   "Saladin",
   "Qutuz",
   "Tariq ibn Ziyad",
   "Khalid ibn al-Walid"
  ],
  "explain": "انتصر فيها على الصليبيين وفتح بعدها القدس.",
  "en_explain": "He defeated the Crusaders there and later liberated Jerusalem."
 },
 {
  "question": "من هو أول إنسان مشى على سطح القمر؟",
  "options": [
   "نيل أرمسترونغ",
   "يوري غاغارين",
   "باز ألدرين",
   "جون غلين"
  ],
  "correct": 0,
  "category": "تاريخ",
  "difficulty": "medium",
  "icon": "🌕",
  "en_q": "Who was the first human to walk on the Moon?",
  "en_o": [
   "Neil Armstrong",
   "Yuri Gagarin",
   "Buzz Aldrin",
   "John Glenn"
  ],
  "explain": "كان ذلك في مهمة أبولو 11 عام 1969.",
  "en_explain": "This happened during the Apollo 11 mission in 1969."
 },
 {
  "question": "في أي دولة تقع مدينة بابل القديمة؟",
  "options": [
   "العراق",
   "سوريا",
   "مصر",
   "إيران"
  ],
  "correct": 0,
  "category": "تاريخ",
  "difficulty": "hard",
  "icon": "🏛️",
  "en_q": "In which country is ancient Babylon located?",
  "en_o": [
   "Iraq",
   "Syria",
   "Egypt",
   "Iran"
  ],
  "explain": "كانت إحدى أهم مدن بلاد الرافدين القديمة.",
  "en_explain": "It was one of the most important cities of ancient Mesopotamia."
 },
 {
  "question": "كم عدد كواكب المجموعة الشمسية؟",
  "options": [
   "7",
   "8",
   "9",
   "10"
  ],
  "correct": 1,
  "category": "علوم",
  "difficulty": "easy",
  "icon": "🪐",
  "en_q": "How many planets are in the Solar System?",
  "en_o": [
   "7",
   "8",
   "9",
   "10"
  ],
  "explain": "أُعيد تصنيف بلوتو كوكباً قزماً عام 2006 فصار العدد 8.",
  "en_explain": "Pluto was reclassified as a dwarf planet in 2006, leaving 8."
 },
 {
  "question": "ما أكبر كوكب في المجموعة الشمسية؟",
  "options": [
   "زحل",
   "المشتري",
   "نبتون",
   "الأرض"
  ],
  "correct": 1,
  "category": "علوم",
  "difficulty": "easy",
  "icon": "🌌",
  "en_q": "What is the largest planet in the Solar System?",
  "en_o": [
   "Saturn",
   "Jupiter",
   "Neptune",
   "Earth"
  ],
  "explain": "يمكن أن يتسع المشتري لأكثر من ألف كرة أرضية بداخله.",
  "en_explain": "Jupiter could fit more than a thousand Earths inside it."
 },
 {
  "question": "ما الغاز الذي تمتصه النباتات في البناء الضوئي؟",
  "options": [
   "الأكسجين",
   "ثاني أكسيد الكربون",
   "النيتروجين",
   "الهيليوم"
  ],
  "correct": 1,
  "category": "علوم",
  "difficulty": "medium",
  "icon": "🌱",
  "en_q": "Which gas do plants absorb during photosynthesis?",
  "en_o": [
   "Oxygen",
   "Carbon dioxide",
   "Nitrogen",
   "Helium"
  ],
  "explain": "تحوّله النباتات مع الماء وضوء الشمس إلى غذاء وأكسجين.",
  "en_explain": "Plants convert it with water and sunlight into food and oxygen."
 },
 {
  "question": "ما الرمز الكيميائي للذهب؟",
  "options": [
   "Ag",
   "Au",
   "Fe",
   "Gd"
  ],
  "correct": 1,
  "category": "علوم",
  "difficulty": "hard",
  "icon": "🪙",
  "en_q": "What is the chemical symbol for gold?",
  "en_o": [
   "Ag",
   "Au",
   "Fe",
   "Gd"
  ],
  "explain": "يأتي الرمز Au من الكلمة اللاتينية 'Aurum'.",
  "en_explain": "The symbol Au comes from the Latin word 'Aurum'."
 },
 {
  "question": "كم درجة غليان الماء بالسلسيوس عند مستوى سطح البحر؟",
  "options": [
   "90",
   "100",
   "110",
   "120"
  ],
  "correct": 1,
  "category": "علوم",
  "difficulty": "easy",
  "icon": "🔥",
  "en_q": "What is the boiling point of water in Celsius at sea level?",
  "en_o": [
   "90",
   "100",
   "110",
   "120"
  ],
  "explain": "تنخفض درجة الغليان كلما ارتفعنا وقل الضغط الجوي.",
  "en_explain": "Boiling point drops at higher altitudes with lower air pressure."
 },
 {
  "question": "أي حيوان يُلقب بسفينة الصحراء؟",
  "options": [
   "الحصان",
   "الجمل",
   "الحمار",
   "الفيل"
  ],
  "correct": 1,
  "category": "حيوانات",
  "difficulty": "easy",
  "icon": "🐪",
  "en_q": "Which animal is called the ship of the desert?",
  "en_o": [
   "Horse",
   "Camel",
   "Donkey",
   "Elephant"
  ],
  "explain": "يتحمل الجمل العطش لأيام طويلة بفضل سنامه المخزّن للدهون.",
  "en_explain": "Camels endure long thirst thanks to fat stored in their hump."
 },
 {
  "question": "كم عدد قلوب الأخطبوط؟",
  "options": [
   "1",
   "2",
   "3",
   "4"
  ],
  "correct": 2,
  "category": "حيوانات",
  "difficulty": "hard",
  "icon": "🐙",
  "en_q": "How many hearts does an octopus have?",
  "en_o": [
   "1",
   "2",
   "3",
   "4"
  ],
  "explain": "قلبان يضخان الدم للخياشيم وقلب رئيسي لبقية الجسم.",
  "en_explain": "Two pump blood to the gills and one to the rest of the body."
 },
 {
  "question": "أي من هذه الطيور لا يستطيع الطيران؟",
  "options": [
   "النسر",
   "البطريق",
   "الصقر",
   "الحمام"
  ],
  "correct": 1,
  "category": "حيوانات",
  "difficulty": "easy",
  "icon": "🐧",
  "en_q": "Which of these birds cannot fly?",
  "en_o": [
   "Eagle",
   "Penguin",
   "Falcon",
   "Pigeon"
  ],
  "explain": "تكيّف البطريق للسباحة بدلاً من الطيران في الماء البارد.",
  "en_explain": "Penguins adapted to swim instead of fly in cold waters."
 },
 {
  "question": "أي حيوان يُلقب بملك الغابة؟",
  "options": [
   "النمر",
   "الأسد",
   "الذئب",
   "الدب"
  ],
  "correct": 1,
  "category": "حيوانات",
  "difficulty": "easy",
  "icon": "🦁",
  "en_q": "Which animal is called the king of the jungle?",
  "en_o": [
   "Tiger",
   "Lion",
   "Wolf",
   "Bear"
  ],
  "explain": "رغم اللقب، يعيش الأسد غالباً في السافانا لا الغابات.",
  "en_explain": "Despite the title, lions mostly live in savannas, not jungles."
 },
 {
  "question": "ما الحيوان الذي يتغذى على الخيزران غالباً؟",
  "options": [
   "الباندا",
   "الكنغر",
   "الزرافة",
   "الذئب"
  ],
  "correct": 0,
  "category": "حيوانات",
  "difficulty": "medium",
  "icon": "🐼",
  "en_q": "Which animal mainly eats bamboo?",
  "en_o": [
   "Panda",
   "Kangaroo",
   "Giraffe",
   "Wolf"
  ],
  "explain": "يقضي الباندا معظم يومه في الأكل بسبب قيمة الخيزران الغذائية المنخفضة.",
  "en_explain": "Pandas spend most of their day eating due to bamboo's low nutrition."
 },
 {
  "question": "كم مدة مباراة كرة القدم الأساسية؟",
  "options": [
   "60 دقيقة",
   "80 دقيقة",
   "90 دقيقة",
   "120 دقيقة"
  ],
  "correct": 2,
  "category": "رياضة",
  "difficulty": "easy",
  "icon": "⏱️",
  "en_q": "How long is a standard football match?",
  "en_o": [
   "60 minutes",
   "80 minutes",
   "90 minutes",
   "120 minutes"
  ],
  "explain": "تُقسَّم إلى شوطين مدة كل منهما 45 دقيقة.",
  "en_explain": "Split into two 45-minute halves."
 },
 {
  "question": "في أي رياضة تُستخدم الريشة والشبكة؟",
  "options": [
   "التنس",
   "الريشة الطائرة",
   "الاسكواش",
   "الجولف"
  ],
  "correct": 1,
  "category": "رياضة",
  "difficulty": "medium",
  "icon": "🏸",
  "en_q": "In which sport are a shuttlecock and net used?",
  "en_o": [
   "Tennis",
   "Badminton",
   "Squash",
   "Golf"
  ],
  "explain": "تُعتبر من أسرع الرياضات من حيث سرعة الكرة (الريشة).",
  "en_explain": "Considered one of the fastest sports by shuttlecock speed."
 },
 {
  "question": "كم عدد لاعبي فريق كرة السلة داخل الملعب؟",
  "options": [
   "4",
   "5",
   "6",
   "7"
  ],
  "correct": 1,
  "category": "رياضة",
  "difficulty": "easy",
  "icon": "🏀",
  "en_q": "How many players per team are on court in basketball?",
  "en_o": [
   "4",
   "5",
   "6",
   "7"
  ],
  "explain": "يشارك 5 لاعبين من كل فريق في الملعب بأي وقت.",
  "en_explain": "Each team has 5 players on court at any time."
 },
 {
  "question": "أي دولة فازت بأكثر عدد من كؤوس العالم لكرة القدم؟",
  "options": [
   "ألمانيا",
   "الأرجنتين",
   "البرازيل",
   "إيطاليا"
  ],
  "correct": 2,
  "category": "رياضة",
  "difficulty": "medium",
  "icon": "🏆",
  "en_q": "Which country has won the most football World Cups?",
  "en_o": [
   "Germany",
   "Argentina",
   "Brazil",
   "Italy"
  ],
  "explain": "فازت البرازيل بالبطولة 5 مرات حتى الآن.",
  "en_explain": "Brazil has won the tournament 5 times so far."
 },
 {
  "question": "ما لون بطاقة الطرد في كرة القدم؟",
  "options": [
   "الأصفر",
   "الأحمر",
   "الأزرق",
   "الأخضر"
  ],
  "correct": 1,
  "category": "رياضة",
  "difficulty": "easy",
  "icon": "🟥",
  "en_q": "What color is the red card in football?",
  "en_o": [
   "Yellow",
   "Red",
   "Blue",
   "Green"
  ],
  "explain": "تعني طرد اللاعب فوراً من المباراة.",
  "en_explain": "It means the player is sent off immediately."
 },
 {
  "question": "ما اسم نظام التشغيل الذي تصنعه Apple للآيفون؟",
  "options": [
   "Android",
   "iOS",
   "Windows",
   "Linux"
  ],
  "correct": 1,
  "category": "تكنولوجيا",
  "difficulty": "easy",
  "icon": "🍎",
  "en_q": "What is the name of Apple's operating system for iPhone?",
  "en_o": [
   "Android",
   "iOS",
   "Windows",
   "Linux"
  ],
  "explain": "يُحدَّث سنوياً مع كل جيل جديد من الآيفون.",
  "en_explain": "Updated annually with each new iPhone generation."
 },
 {
  "question": "ما وحدة قياس سرعة المعالج؟",
  "options": [
   "الهرتز",
   "الفولت",
   "الواط",
   "البيكسل"
  ],
  "correct": 0,
  "category": "تكنولوجيا",
  "difficulty": "medium",
  "icon": "⚡",
  "en_q": "What is the unit of processor speed?",
  "en_o": [
   "Hertz",
   "Volt",
   "Watt",
   "Pixel"
  ],
  "explain": "تقاس عادة بالجيجاهرتز في المعالجات الحديثة.",
  "en_explain": "Usually measured in gigahertz in modern processors."
 },
 {
  "question": "من أسس شركة مايكروسوفت؟",
  "options": [
   "ستيف جوبز",
   "بيل غيتس",
   "مارك زوكربيرغ",
   "إيلون ماسك"
  ],
  "correct": 1,
  "category": "تكنولوجيا",
  "difficulty": "medium",
  "icon": "🖥️",
  "en_q": "Who founded Microsoft?",
  "en_o": [
   "Steve Jobs",
   "Bill Gates",
   "Mark Zuckerberg",
   "Elon Musk"
  ],
  "explain": "أسسها مع بول ألين عام 1975.",
  "en_explain": "He co-founded it with Paul Allen in 1975."
 },
 {
  "question": "ما محرك البحث الأشهر في العالم؟",
  "options": [
   "Bing",
   "Google",
   "Yahoo",
   "DuckDuckGo"
  ],
  "correct": 1,
  "category": "تكنولوجيا",
  "difficulty": "easy",
  "icon": "🔎",
  "en_q": "What is the most popular search engine in the world?",
  "en_o": [
   "Bing",
   "Google",
   "Yahoo",
   "DuckDuckGo"
  ],
  "explain": "يعالج مليارات عمليات البحث يومياً حول العالم.",
  "en_explain": "It processes billions of searches daily worldwide."
 },
 {
  "question": "ماذا يعني الاختصار AI؟",
  "options": [
   "الذكاء الاصطناعي",
   "الإنترنت الآلي",
   "المعالج المتقدم",
   "الوصول الفوري"
  ],
  "correct": 0,
  "category": "تكنولوجيا",
  "difficulty": "easy",
  "icon": "🤖",
  "en_q": "What does AI stand for?",
  "en_o": [
   "Artificial Intelligence",
   "Automated Internet",
   "Advanced Processor",
   "Instant Access"
  ],
  "explain": "يهدف لمحاكاة القدرات الذهنية البشرية بواسطة الحواسيب.",
  "en_explain": "It aims to simulate human-like cognitive abilities using computers."
 },
 {
  "question": "ما عاصمة السعودية؟",
  "options": [
   "جدة",
   "الرياض",
   "مكة",
   "الدمام"
  ],
  "correct": 1,
  "category": "دول وعواصم",
  "difficulty": "easy",
  "icon": "🇸🇦",
  "en_q": "What is the capital of Saudi Arabia?",
  "en_o": [
   "Jeddah",
   "Riyadh",
   "Mecca",
   "Dammam"
  ],
  "explain": "الرياض هي أكبر مدن المملكة ومقر الحكومة.",
  "en_explain": "Riyadh is the kingdom's largest city and seat of government."
 },
 {
  "question": "ما عاصمة فرنسا؟",
  "options": [
   "ليون",
   "مرسيليا",
   "باريس",
   "نيس"
  ],
  "correct": 2,
  "category": "دول وعواصم",
  "difficulty": "easy",
  "icon": "🇫🇷",
  "en_q": "What is the capital of France?",
  "en_o": [
   "Lyon",
   "Marseille",
   "Paris",
   "Nice"
  ],
  "explain": "تشتهر بمعالم مثل برج إيفل ومتحف اللوفر.",
  "en_explain": "Famous for landmarks like the Eiffel Tower and the Louvre."
 },
 {
  "question": "ما عاصمة تركيا؟",
  "options": [
   "إسطنبول",
   "أنقرة",
   "إزمير",
   "بورصة"
  ],
  "correct": 1,
  "category": "دول وعواصم",
  "difficulty": "medium",
  "icon": "🇹🇷",
  "en_q": "What is the capital of Turkey?",
  "en_o": [
   "Istanbul",
   "Ankara",
   "Izmir",
   "Bursa"
  ],
  "explain": "أنقرة هي العاصمة بينما إسطنبول الأكبر سكاناً واقتصادياً.",
  "en_explain": "Ankara is the capital while Istanbul is larger economically."
 },
 {
  "question": "ما عاصمة كندا؟",
  "options": [
   "تورنتو",
   "فانكوفر",
   "مونتريال",
   "أوتاوا"
  ],
  "correct": 3,
  "category": "دول وعواصم",
  "difficulty": "hard",
  "icon": "🇨🇦",
  "en_q": "What is the capital of Canada?",
  "en_o": [
   "Toronto",
   "Vancouver",
   "Montreal",
   "Ottawa"
  ],
  "explain": "أوتاوا تقع في مقاطعة أونتاريو قرب الحدود مع كيبك.",
  "en_explain": "Ottawa is located in Ontario near the Quebec border."
 },
 {
  "question": "ما عاصمة الإمارات العربية المتحدة؟",
  "options": [
   "دبي",
   "أبوظبي",
   "الشارقة",
   "العين"
  ],
  "correct": 1,
  "category": "دول وعواصم",
  "difficulty": "medium",
  "icon": "🇦🇪",
  "en_q": "What is the capital of the United Arab Emirates?",
  "en_o": [
   "Dubai",
   "Abu Dhabi",
   "Sharjah",
   "Al Ain"
  ],
  "explain": "أبوظبي هي المقر السياسي، بينما دبي المركز التجاري الأشهر.",
  "en_explain": "Abu Dhabi is the political seat, while Dubai is the famous commercial hub."
 },
 {
  "question": "كم عدد أشهر السنة؟",
  "options": [
   "10",
   "11",
   "12",
   "13"
  ],
  "correct": 2,
  "category": "معلومات عامة",
  "difficulty": "easy",
  "icon": "🗓️",
  "en_q": "How many months are in a year?",
  "en_o": [
   "10",
   "11",
   "12",
   "13"
  ],
  "explain": "يعتمد التقويم الميلادي على 12 شهراً مقسمة حسب دورة القمر تاريخياً.",
  "en_explain": "The Gregorian calendar has 12 months, historically tied to lunar cycles."
 },
 {
  "question": "كم ساعة في اليوم الواحد؟",
  "options": [
   "12",
   "24",
   "36",
   "48"
  ],
  "correct": 1,
  "category": "معلومات عامة",
  "difficulty": "easy",
  "icon": "⏰",
  "en_q": "How many hours are in a day?",
  "en_o": [
   "12",
   "24",
   "36",
   "48"
  ],
  "explain": "يقسَّم إلى 24 ساعة بناءً على دوران الأرض حول محورها.",
  "en_explain": "Divided into 24 hours based on Earth's rotation on its axis."
 },
 {
  "question": "ما أكبر عضو في جسم الإنسان؟",
  "options": [
   "الكبد",
   "الجلد",
   "الرئة",
   "القلب"
  ],
  "correct": 1,
  "category": "معلومات عامة",
  "difficulty": "hard",
  "icon": "🧍",
  "en_q": "What is the largest organ of the human body?",
  "en_o": [
   "Liver",
   "Skin",
   "Lung",
   "Heart"
  ],
  "explain": "يغطي الجلد كامل الجسم ويحميه من العوامل الخارجية.",
  "en_explain": "Skin covers the entire body and protects it from external factors."
 },
 {
  "question": "كم عدد أيام الأسبوع؟",
  "options": [
   "5",
   "6",
   "7",
   "8"
  ],
  "correct": 2,
  "category": "معلومات عامة",
  "difficulty": "easy",
  "icon": "📆",
  "en_q": "How many days are in a week?",
  "en_o": [
   "5",
   "6",
   "7",
   "8"
  ],
  "explain": "نظام الأسبوع السباعي قديم جداً ويعود لحضارات بلاد الرافدين.",
  "en_explain": "The seven-day week is ancient, tracing back to Mesopotamian civilizations."
 },
 {
  "question": "ما اللغة الرسمية في البرازيل؟",
  "options": [
   "الإسبانية",
   "البرتغالية",
   "الإنجليزية",
   "الفرنسية"
  ],
  "correct": 1,
  "category": "معلومات عامة",
  "difficulty": "medium",
  "icon": "🇧🇷",
  "en_q": "What is the official language of Brazil?",
  "en_o": [
   "Spanish",
   "Portuguese",
   "English",
   "French"
  ],
  "explain": "البرازيل الدولة الوحيدة الناطقة بالبرتغالية في أمريكا الجنوبية.",
  "en_explain": "Brazil is the only Portuguese-speaking country in South America."
 },
 {
  "question": "ما اسم أطول سلسلة جبال في العالم فوق سطح الماء؟",
  "options": [
   "جبال الأنديز",
   "جبال الألب",
   "جبال الهيمالايا",
   "جبال روكي"
  ],
  "correct": 0,
  "category": "جغرافيا",
  "difficulty": "expert",
  "icon": "🏔️",
  "en_q": "ما اسم أطول سلسلة جبال في العالم فوق سطح الماء؟",
  "en_o": [
   "جبال الأنديز",
   "جبال الألب",
   "جبال الهيمالايا",
   "جبال روكي"
  ],
  "explain": "سلسلة الأنديز تمتد أكثر من 7000 كم عبر أمريكا الجنوبية.",
  "en_explain": "The Andes stretch over 7,000 km through South America."
 },
 {
  "question": "أي دولة تضم أكبر عدد من الجزر في العالم؟",
  "options": [
   "السويد",
   "إندونيسيا",
   "الفلبين",
   "كندا"
  ],
  "correct": 0,
  "category": "جغرافيا",
  "difficulty": "expert",
  "icon": "🏝️",
  "en_q": "أي دولة تضم أكبر عدد من الجزر في العالم؟",
  "en_o": [
   "السويد",
   "إندونيسيا",
   "الفلبين",
   "كندا"
  ],
  "explain": "تضم السويد أكثر من 250 ألف جزيرة رسمياً.",
  "en_explain": "Sweden officially has over 250,000 islands."
 },
 {
  "question": "ما اسم أعمق نقطة معروفة في محيطات العالم؟",
  "options": [
   "خندق ماريانا",
   "خندق بورتوريكو",
   "خندق طونغا",
   "خندق اليابان"
  ],
  "correct": 0,
  "category": "جغرافيا",
  "difficulty": "hard",
  "icon": "🌊",
  "en_q": "ما اسم أعمق نقطة معروفة في محيطات العالم؟",
  "en_o": [
   "خندق ماريانا",
   "خندق بورتوريكو",
   "خندق طونغا",
   "خندق اليابان"
  ],
  "explain": "يقع في المحيط الهادئ ويصل عمقه لأكثر من 10 كم.",
  "en_explain": "Located in the Pacific, it exceeds 10 km in depth."
 },
 {
  "question": "ما أصغر دولة في العالم من حيث المساحة؟",
  "options": [
   "موناكو",
   "الفاتيكان",
   "سان مارينو",
   "ليختنشتاين"
  ],
  "correct": 1,
  "category": "جغرافيا",
  "difficulty": "medium",
  "icon": "⛪",
  "en_q": "ما أصغر دولة في العالم من حيث المساحة؟",
  "en_o": [
   "موناكو",
   "الفاتيكان",
   "سان مارينو",
   "ليختنشتاين"
  ],
  "explain": "تبلغ مساحة الفاتيكان أقل من نصف كيلومتر مربع.",
  "en_explain": "Vatican City is less than half a square kilometer."
 },
 {
  "question": "في أي قارة يقع خط الاستواء عبر أكبر عدد من الدول؟",
  "options": [
   "أفريقيا",
   "آسيا",
   "أمريكا الجنوبية",
   "أوروبا"
  ],
  "correct": 0,
  "category": "جغرافيا",
  "difficulty": "hard",
  "icon": "🌍",
  "en_q": "في أي قارة يقع خط الاستواء عبر أكبر عدد من الدول؟",
  "en_o": [
   "أفريقيا",
   "آسيا",
   "أمريكا الجنوبية",
   "أوروبا"
  ],
  "explain": "يمر خط الاستواء عبر 11 دولة أفريقية.",
  "en_explain": "The equator crosses 11 African countries."
 },
 {
  "question": "من هو مكتشف قارة أمريكا رسمياً في التاريخ الأوروبي؟",
  "options": [
   "فاسكو دي جاما",
   "كريستوفر كولومبوس",
   "ماجلان",
   "أميريغو فيسبوتشي"
  ],
  "correct": 1,
  "category": "تاريخ",
  "difficulty": "medium",
  "icon": "⛵",
  "en_q": "من هو مكتشف قارة أمريكا رسمياً في التاريخ الأوروبي؟",
  "en_o": [
   "فاسكو دي جاما",
   "كريستوفر كولومبوس",
   "ماجلان",
   "أميريغو فيسبوتشي"
  ],
  "explain": "وصل كولومبوس إلى الأمريكتين عام 1492 بحثاً عن طريق للهند.",
  "en_explain": "Columbus reached the Americas in 1492 seeking a route to India."
 },
 {
  "question": "في أي عام بدأت الثورة الفرنسية؟",
  "options": [
   "1789",
   "1776",
   "1799",
   "1804"
  ],
  "correct": 0,
  "category": "تاريخ",
  "difficulty": "hard",
  "icon": "🇫🇷",
  "en_q": "في أي عام بدأت الثورة الفرنسية؟",
  "en_o": [
   "1789",
   "1776",
   "1799",
   "1804"
  ],
  "explain": "أطاحت بالنظام الملكي وأثّرت في أفكار الحرية حول العالم.",
  "en_explain": "It overthrew the monarchy and influenced ideas of liberty worldwide."
 },
 {
  "question": "من هو القائد الذي وحّد شبه الجزيرة العربية في العصر الحديث؟",
  "options": [
   "الملك عبدالعزيز آل سعود",
   "صدام حسين",
   "جمال عبدالناصر",
   "الحسين بن علي"
  ],
  "correct": 0,
  "category": "تاريخ",
  "difficulty": "medium",
  "icon": "🏜️",
  "en_q": "من هو القائد الذي وحّد شبه الجزيرة العربية في العصر الحديث؟",
  "en_o": [
   "الملك عبدالعزيز آل سعود",
   "صدام حسين",
   "جمال عبدالناصر",
   "الحسين بن علي"
  ],
  "explain": "أسس المملكة العربية السعودية عام 1932.",
  "en_explain": "He founded the Kingdom of Saudi Arabia in 1932."
 },
 {
  "question": "ما اسم الحرب التي استمرت 100 عام تقريباً بين إنجلترا وفرنسا؟",
  "options": [
   "حرب المائة عام",
   "الحرب الأهلية",
   "حرب الورود",
   "الحروب الصليبية"
  ],
  "correct": 0,
  "category": "تاريخ",
  "difficulty": "expert",
  "icon": "⚔️",
  "en_q": "ما اسم الحرب التي استمرت 100 عام تقريباً بين إنجلترا وفرنسا؟",
  "en_o": [
   "حرب المائة عام",
   "الحرب الأهلية",
   "حرب الورود",
   "الحروب الصليبية"
  ],
  "explain": "استمرت من 1337 إلى 1453 بشكل متقطع.",
  "en_explain": "It lasted intermittently from 1337 to 1453."
 },
 {
  "question": "من هو مخترع الطباعة بالحروف المتحركة؟",
  "options": [
   "يوهان غوتنبرغ",
   "توماس إديسون",
   "ليوناردو دافنشي",
   "نيوتن"
  ],
  "correct": 0,
  "category": "تاريخ",
  "difficulty": "medium",
  "icon": "🖨️",
  "en_q": "من هو مخترع الطباعة بالحروف المتحركة؟",
  "en_o": [
   "يوهان غوتنبرغ",
   "توماس إديسون",
   "ليوناردو دافنشي",
   "نيوتن"
  ],
  "explain": "اختراعه في القرن الخامس عشر غيّر طريقة نشر المعرفة للأبد.",
  "en_explain": "His 15th-century invention forever changed how knowledge spread."
 },
 {
  "question": "ما اسم العالم الذي وضع نظرية الجاذبية؟",
  "options": [
   "إسحاق نيوتن",
   "ألبرت أينشتاين",
   "غاليليو",
   "كوبرنيكوس"
  ],
  "correct": 0,
  "category": "علوم",
  "difficulty": "medium",
  "icon": "🍎",
  "en_q": "ما اسم العالم الذي وضع نظرية الجاذبية؟",
  "en_o": [
   "إسحاق نيوتن",
   "ألبرت أينشتاين",
   "غاليليو",
   "كوبرنيكوس"
  ],
  "explain": "قيل إن سقوط تفاحة ألهمه للتفكير في الجاذبية.",
  "en_explain": "A falling apple is said to have inspired his thinking on gravity."
 },
 {
  "question": "ما وحدة قياس شدة التيار الكهربائي؟",
  "options": [
   "فولت",
   "أمبير",
   "أوم",
   "واط"
  ],
  "correct": 1,
  "category": "علوم",
  "difficulty": "hard",
  "icon": "⚡",
  "en_q": "ما وحدة قياس شدة التيار الكهربائي؟",
  "en_o": [
   "فولت",
   "أمبير",
   "أوم",
   "واط"
  ],
  "explain": "سُمّيت تكريماً للعالم الفرنسي أندريه أمبير.",
  "en_explain": "Named after French scientist André-Marie Ampère."
 },
 {
  "question": "كم عدد الكروموسومات في الخلية البشرية العادية؟",
  "options": [
   "44",
   "46",
   "48",
   "50"
  ],
  "correct": 1,
  "category": "علوم",
  "difficulty": "expert",
  "icon": "🧬",
  "en_q": "كم عدد الكروموسومات في الخلية البشرية العادية؟",
  "en_o": [
   "44",
   "46",
   "48",
   "50"
  ],
  "explain": "23 زوجاً من الكروموسومات، نصفها من كل والد.",
  "en_explain": "23 pairs of chromosomes, half from each parent."
 },
 {
  "question": "ما اسم أصغر وحدة بناء في الكائنات الحية؟",
  "options": [
   "الذرة",
   "الخلية",
   "الجزيء",
   "النواة"
  ],
  "correct": 1,
  "category": "علوم",
  "difficulty": "easy",
  "icon": "🔬",
  "en_q": "ما اسم أصغر وحدة بناء في الكائنات الحية؟",
  "en_o": [
   "الذرة",
   "الخلية",
   "الجزيء",
   "النواة"
  ],
  "explain": "تُعتبر الخلية الوحدة الأساسية للحياة.",
  "en_explain": "The cell is considered the basic unit of life."
 },
 {
  "question": "ما العنصر الأكثر وفرة في الكون؟",
  "options": [
   "الأكسجين",
   "الهيدروجين",
   "الكربون",
   "الهيليوم"
  ],
  "correct": 1,
  "category": "علوم",
  "difficulty": "expert",
  "icon": "✨",
  "en_q": "ما العنصر الأكثر وفرة في الكون؟",
  "en_o": [
   "الأكسجين",
   "الهيدروجين",
   "الكربون",
   "الهيليوم"
  ],
  "explain": "يشكل الهيدروجين نحو 75% من المادة العادية في الكون.",
  "en_explain": "Hydrogen makes up about 75% of ordinary matter in the universe."
 },
 {
  "question": "ما اسم أكبر طائر في العالم من حيث الحجم ولا يستطيع الطيران؟",
  "options": [
   "النعامة",
   "البطريق الإمبراطور",
   "الدج دو",
   "النسر"
  ],
  "correct": 0,
  "category": "حيوانات",
  "difficulty": "easy",
  "icon": "🦤",
  "en_q": "ما اسم أكبر طائر في العالم من حيث الحجم ولا يستطيع الطيران؟",
  "en_o": [
   "النعامة",
   "البطريق الإمبراطور",
   "الدج دو",
   "النسر"
  ],
  "explain": "يمكن أن يصل ارتفاع النعامة إلى 2.7 متر.",
  "en_explain": "Ostriches can reach up to 2.7 meters in height."
 },
 {
  "question": "كم متوسط عمر السلحفاة العملاقة تقريباً؟",
  "options": [
   "50 سنة",
   "100 سنة",
   "150 سنة فأكثر",
   "30 سنة"
  ],
  "correct": 2,
  "category": "حيوانات",
  "difficulty": "hard",
  "icon": "🐢",
  "en_q": "كم متوسط عمر السلحفاة العملاقة تقريباً؟",
  "en_o": [
   "50 سنة",
   "100 سنة",
   "150 سنة فأكثر",
   "30 سنة"
  ],
  "explain": "بعض السلاحف العملاقة تجاوزت 150 عاماً في العمر الموثق.",
  "en_explain": "Some giant tortoises have documented lifespans over 150 years."
 },
 {
  "question": "أي حيوان يستطيع تغيير لون جلده للتمويه؟",
  "options": [
   "الحرباء",
   "الأرنب",
   "القط",
   "الكلب"
  ],
  "correct": 0,
  "category": "حيوانات",
  "difficulty": "easy",
  "icon": "🦎",
  "en_q": "أي حيوان يستطيع تغيير لون جلده للتمويه؟",
  "en_o": [
   "الحرباء",
   "الأرنب",
   "القط",
   "الكلب"
  ],
  "explain": "تستخدم الحرباء خلايا خاصة تعكس الضوء بطرق مختلفة.",
  "en_explain": "Chameleons use special cells that reflect light differently."
 },
 {
  "question": "ما هو الحيوان الوحيد الذي لا يستطيع القفز؟",
  "options": [
   "الفيل",
   "النمر",
   "الأسد",
   "القرد"
  ],
  "correct": 0,
  "category": "حيوانات",
  "difficulty": "expert",
  "icon": "🐘",
  "en_q": "ما هو الحيوان الوحيد الذي لا يستطيع القفز؟",
  "en_o": [
   "الفيل",
   "النمر",
   "الأسد",
   "القرد"
  ],
  "explain": "يعود ذلك لثقل وزنه وبنية عظام أرجله.",
  "en_explain": "This is due to its weight and leg bone structure."
 },
 {
  "question": "كم عدد أسنان القرش الأبيض تقريباً على مدار حياته؟",
  "options": [
   "50 سناً",
   "300 سن",
   "3000 سن أو أكثر",
   "1000 سن"
  ],
  "correct": 2,
  "category": "حيوانات",
  "difficulty": "expert",
  "icon": "🦈",
  "en_q": "كم عدد أسنان القرش الأبيض تقريباً على مدار حياته؟",
  "en_o": [
   "50 سناً",
   "300 سن",
   "3000 سن أو أكثر",
   "1000 سن"
  ],
  "explain": "يستبدل القرش أسنانه المفقودة باستمرار طوال حياته.",
  "en_explain": "Sharks continuously replace lost teeth throughout their lives."
 },
 {
  "question": "في أي دولة أقيمت أول ألعاب أولمبية حديثة؟",
  "options": [
   "فرنسا",
   "اليونان",
   "إيطاليا",
   "ألمانيا"
  ],
  "correct": 1,
  "category": "رياضة",
  "difficulty": "medium",
  "icon": "🏛️",
  "en_q": "في أي دولة أقيمت أول ألعاب أولمبية حديثة؟",
  "en_o": [
   "فرنسا",
   "اليونان",
   "إيطاليا",
   "ألمانيا"
  ],
  "explain": "أقيمت في أثينا عام 1896 إحياءً للتقليد الإغريقي القديم.",
  "en_explain": "Held in Athens in 1896, reviving the ancient Greek tradition."
 },
 {
  "question": "كم عدد الحلقات في شعار الألعاب الأولمبية؟",
  "options": [
   "4",
   "5",
   "6",
   "7"
  ],
  "correct": 1,
  "category": "رياضة",
  "difficulty": "easy",
  "icon": "⭕",
  "en_q": "كم عدد الحلقات في شعار الألعاب الأولمبية؟",
  "en_o": [
   "4",
   "5",
   "6",
   "7"
  ],
  "explain": "ترمز الحلقات الخمس إلى القارات المأهولة المشاركة.",
  "en_explain": "The five rings represent the inhabited participating continents."
 },
 {
  "question": "ما هي الرياضة التي يُلعب فيها 'الشطرنج على الجليد'؟",
  "options": [
   "الكيرلنغ",
   "الهوكي",
   "التزلج الفني",
   "الكيرلنغ الجليدي"
  ],
  "correct": 0,
  "category": "رياضة",
  "difficulty": "expert",
  "icon": "🥌",
  "en_q": "ما هي الرياضة التي يُلعب فيها 'الشطرنج على الجليد'؟",
  "en_o": [
   "الكيرلنغ",
   "الهوكي",
   "التزلج الفني",
   "الكيرلنغ الجليدي"
  ],
  "explain": "تعتمد على الدقة والاستراتيجية أكثر من القوة البدنية.",
  "en_explain": "It relies more on precision and strategy than physical power."
 },
 {
  "question": "من الذي يُلقب بـ'أسطورة الملاكمة' وفاز بلقب العالم 3 مرات؟",
  "options": [
   "محمد علي كلاي",
   "مايك تايسون",
   "فلويد مايويذر",
   "روكي مارسيانو"
  ],
  "correct": 0,
  "category": "رياضة",
  "difficulty": "medium",
  "icon": "🥊",
  "en_q": "من الذي يُلقب بـ'أسطورة الملاكمة' وفاز بلقب العالم 3 مرات؟",
  "en_o": [
   "محمد علي كلاي",
   "مايك تايسون",
   "فلويد مايويذر",
   "روكي مارسيانو"
  ],
  "explain": "حمل لقب وزن ثقيل العالم ثلاث مرات في مسيرته.",
  "en_explain": "He held the world heavyweight title three times in his career."
 },
 {
  "question": "كم طول ملعب كرة القدم القياسي تقريباً؟",
  "options": [
   "90 متراً",
   "105 أمتار",
   "120 متراً",
   "80 متراً"
  ],
  "correct": 1,
  "category": "رياضة",
  "difficulty": "hard",
  "icon": "📏",
  "en_q": "كم طول ملعب كرة القدم القياسي تقريباً؟",
  "en_o": [
   "90 متراً",
   "105 أمتار",
   "120 متراً",
   "80 متراً"
  ],
  "explain": "يوصي الاتحاد الدولي لكرة القدم بهذا الطول للمباريات الدولية.",
  "en_explain": "FIFA recommends this length for international matches."
 },
 {
  "question": "من هو مؤسس شركة أبل المشارك؟",
  "options": [
   "ستيف جوبز",
   "بيل غيتس",
   "جيف بيزوس",
   "إيلون ماسك"
  ],
  "correct": 0,
  "category": "تكنولوجيا",
  "difficulty": "easy",
  "icon": "🍏",
  "en_q": "من هو مؤسس شركة أبل المشارك؟",
  "en_o": [
   "ستيف جوبز",
   "بيل غيتس",
   "جيف بيزوس",
   "إيلون ماسك"
  ],
  "explain": "أسسها مع ستيف وزنياك ورونالد واين عام 1976.",
  "en_explain": "He co-founded it with Steve Wozniak and Ronald Wayne in 1976."
 },
 {
  "question": "ماذا يعني الاختصار URL؟",
  "options": [
   "محدد موقع الموارد",
   "بروتوكول نقل الملفات",
   "نظام أسماء النطاقات",
   "لغة ترميز النص"
  ],
  "correct": 0,
  "category": "تكنولوجيا",
  "difficulty": "hard",
  "icon": "🔗",
  "en_q": "ماذا يعني الاختصار URL؟",
  "en_o": [
   "محدد موقع الموارد",
   "بروتوكول نقل الملفات",
   "نظام أسماء النطاقات",
   "لغة ترميز النص"
  ],
  "explain": "يحدد عنوان أي صفحة أو ملف على شبكة الإنترنت.",
  "en_explain": "It identifies the address of any page or file on the internet."
 },
 {
  "question": "ما اسم أول فيروس حاسوب انتشر عالمياً عبر البريد الإلكتروني؟",
  "options": [
   "آي لاف يو",
   "ستكسنت",
   "ملوير بوت",
   "وانا كراي"
  ],
  "correct": 0,
  "category": "تكنولوجيا",
  "difficulty": "expert",
  "icon": "🦠",
  "en_q": "ما اسم أول فيروس حاسوب انتشر عالمياً عبر البريد الإلكتروني؟",
  "en_o": [
   "آي لاف يو",
   "ستكسنت",
   "ملوير بوت",
   "وانا كراي"
  ],
  "explain": "انتشر عام 2000 وسبب أضراراً بمليارات الدولارات.",
  "en_explain": "It spread in 2000, causing billions of dollars in damage."
 },
 {
  "question": "ما الفرق الأساسي بين RAM و ROM؟",
  "options": [
   "RAM دائمة وROM مؤقتة",
   "RAM مؤقتة تُمسح عند الإيقاف وROM دائمة",
   "كلاهما مؤقت",
   "كلاهما دائم"
  ],
  "correct": 1,
  "category": "تكنولوجيا",
  "difficulty": "hard",
  "icon": "💾",
  "en_q": "ما الفرق الأساسي بين RAM و ROM؟",
  "en_o": [
   "RAM دائمة وROM مؤقتة",
   "RAM مؤقتة تُمسح عند الإيقاف وROM دائمة",
   "كلاهما مؤقت",
   "كلاهما دائم"
  ],
  "explain": "تفقد ذاكرة الوصول العشوائي محتواها عند انقطاع الكهرباء.",
  "en_explain": "RAM loses its content when power is cut."
 },
 {
  "question": "ما عاصمة إسبانيا؟",
  "options": [
   "برشلونة",
   "مدريد",
   "إشبيلية",
   "فالنسيا"
  ],
  "correct": 1,
  "category": "دول وعواصم",
  "difficulty": "easy",
  "icon": "🇪🇸",
  "en_q": "ما عاصمة إسبانيا؟",
  "en_o": [
   "برشلونة",
   "مدريد",
   "إشبيلية",
   "فالنسيا"
  ],
  "explain": "مدريد هي أكبر مدن إسبانيا ومركزها السياسي.",
  "en_explain": "Madrid is Spain's largest city and political center."
 },
 {
  "question": "ما عاصمة روسيا؟",
  "options": [
   "سان بطرسبرغ",
   "موسكو",
   "نوفوسيبيرسك",
   "كازان"
  ],
  "correct": 1,
  "category": "دول وعواصم",
  "difficulty": "easy",
  "icon": "🇷🇺",
  "en_q": "ما عاصمة روسيا؟",
  "en_o": [
   "سان بطرسبرغ",
   "موسكو",
   "نوفوسيبيرسك",
   "كازان"
  ],
  "explain": "موسكو أكبر مدن أوروبا من حيث عدد السكان.",
  "en_explain": "Moscow is Europe's largest city by population."
 },
 {
  "question": "ما عاصمة الأرجنتين؟",
  "options": [
   "بوينس آيرس",
   "ريو دي جانيرو",
   "سانتياغو",
   "ليما"
  ],
  "correct": 0,
  "category": "دول وعواصم",
  "difficulty": "medium",
  "icon": "🇦🇷",
  "en_q": "ما عاصمة الأرجنتين؟",
  "en_o": [
   "بوينس آيرس",
   "ريو دي جانيرو",
   "سانتياغو",
   "ليما"
  ],
  "explain": "تُعرف بوينس آيرس بلقب 'باريس أمريكا الجنوبية'.",
  "en_explain": "Buenos Aires is nicknamed the 'Paris of South America'."
 },
 {
  "question": "ما عاصمة نيوزيلندا؟",
  "options": [
   "أوكلاند",
   "ويلينغتون",
   "كرايستشيرش",
   "هاملتون"
  ],
  "correct": 1,
  "category": "دول وعواصم",
  "difficulty": "expert",
  "icon": "🇳🇿",
  "en_q": "ما عاصمة نيوزيلندا؟",
  "en_o": [
   "أوكلاند",
   "ويلينغتون",
   "كرايستشيرش",
   "هاملتون"
  ],
  "explain": "رغم كون أوكلاند أكبر مدنها، ويلينغتون هي العاصمة الرسمية.",
  "en_explain": "Though Auckland is larger, Wellington is the official capital."
 },
 {
  "question": "ما عاصمة جنوب أفريقيا الإدارية؟",
  "options": [
   "بريتوريا",
   "كيب تاون",
   "جوهانسبرغ",
   "ديربان"
  ],
  "correct": 0,
  "category": "دول وعواصم",
  "difficulty": "expert",
  "icon": "🇿🇦",
  "en_q": "ما عاصمة جنوب أفريقيا الإدارية؟",
  "en_o": [
   "بريتوريا",
   "كيب تاون",
   "جوهانسبرغ",
   "ديربان"
  ],
  "explain": "لدى جنوب أفريقيا ثلاث عواصم لوظائف حكومية مختلفة.",
  "en_explain": "South Africa has three capitals for different government functions."
 },
 {
  "question": "ما اللغة الأكثر تحدثاً في العالم كلغة أم؟",
  "options": [
   "الإنجليزية",
   "الماندرين الصينية",
   "الإسبانية",
   "العربية"
  ],
  "correct": 1,
  "category": "معلومات عامة",
  "difficulty": "medium",
  "icon": "🗣️",
  "en_q": "ما اللغة الأكثر تحدثاً في العالم كلغة أم؟",
  "en_o": [
   "الإنجليزية",
   "الماندرين الصينية",
   "الإسبانية",
   "العربية"
  ],
  "explain": "يتحدث بها أكثر من مليار شخص كلغة أم في الصين ومناطق أخرى.",
  "en_explain": "Spoken natively by over a billion people, mainly in China."
 },
 {
  "question": "كم عدد قارات العالم المعترف بها عادة؟",
  "options": [
   "5",
   "6",
   "7",
   "8"
  ],
  "correct": 2,
  "category": "معلومات عامة",
  "difficulty": "easy",
  "icon": "🌎",
  "en_q": "كم عدد قارات العالم المعترف بها عادة؟",
  "en_o": [
   "5",
   "6",
   "7",
   "8"
  ],
  "explain": "تُقسَّم عادة إلى آسيا وأفريقيا وأوروبا وأمريكا الشمالية والجنوبية وأستراليا وأنتاركتيكا.",
  "en_explain": "Usually divided into Asia, Africa, Europe, North & South America, Australia, and Antarctica."
 },
 {
  "question": "ما اسم أطول جدار بناه الإنسان في التاريخ؟",
  "options": [
   "سور الصين العظيم",
   "جدار برلين",
   "سور القدس",
   "خط ماجينو"
  ],
  "correct": 0,
  "category": "معلومات عامة",
  "difficulty": "easy",
  "icon": "🧱",
  "en_q": "ما اسم أطول جدار بناه الإنسان في التاريخ؟",
  "en_o": [
   "سور الصين العظيم",
   "جدار برلين",
   "سور القدس",
   "خط ماجينو"
  ],
  "explain": "يمتد لآلاف الكيلومترات وبُني على مراحل عبر قرون.",
  "en_explain": "It stretches thousands of kilometers, built in stages over centuries."
 }
];
