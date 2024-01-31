const Names = require("./assets/data/names.json");

const NamesOfAllah = {
  1: {
    Name: "الرَّحْمَنُ",
    Transliteration: "AR-RAHMAAN",
    Meaning: "The Beneficent",
  },
  2: {
    Name: "الرَّحِيمُ",
    Transliteration: "AR-RAHEEM",
    Meaning: "The Merciful",
  },
  3: { Name: "الْمَلِكُ", Transliteration: "AL-MALIK", Meaning: "The King" },
  4: {
    Name: "الْقُدُّوسُ",
    Transliteration: "AL-QUDDUS",
    Meaning: "The Most Sacred",
  },
  5: {
    Name: "السَّلاَمُ",
    Transliteration: "AS-SALAM",
    Meaning: "The Source of Peace, The Flawless",
  },
  6: {
    Name: "الْمُؤْمِنُ",
    Transliteration: "AL-MU’MIN",
    Meaning: "The Infuser of Faith",
  },
  7: {
    Name: "الْمُهَيْمِنُ",
    Transliteration: "AL-MUHAYMIN",
    Meaning: "The Preserver of Safety",
  },
  8: { Name: "الْعَزِيزُ", Transliteration: "AL-AZIZ", Meaning: "All Mighty" },
  9: {
    Name: "الْجَبَّارُ",
    Transliteration: "AL-JABBAR",
    Meaning: "The Compeller, The Restorer",
  },
  10: {
    Name: "الْمُتَكَبِّر",
    Transliteration: "AL-MUTAKABBIR",
    Meaning: "The Supreme, The Majestic",
  },
  11: {
    Name: "الْخَالِقُ",
    Transliteration: "AL-KHAALIQ",
    Meaning: "The Creator, The Maker",
  },
  12: {
    Name: "الْبَارِئُ",
    Transliteration: "AL-BAARI",
    Meaning: "The Evolver",
  },
  13: {
    Name: "الْمُصَوِّرُ",
    Transliteration: "AL-MUSAWWIR",
    Meaning: "The Fashioner",
  },
  14: {
    Name: "الْغَفَّارُ",
    Transliteration: "AL-GHAFFAR",
    Meaning: "The Constant Forgiver",
  },
  15: {
    Name: "الْقَهَّارُ",
    Transliteration: "AL-QAHHAR",
    Meaning: "The All-Prevailing One",
  },
  16: {
    Name: "الْوَهَّابُ",
    Transliteration: "AL-WAHHAAB",
    Meaning: "The Supreme Bestower",
  },
  17: {
    Name: "الرَّزَّاقُ",
    Transliteration: "AR-RAZZAAQ",
    Meaning: "The Provider",
  },
  18: {
    Name: "الْفَتَّاحُ",
    Transliteration: "AL-FATTAAH",
    Meaning: "The Supreme Solver",
  },
  19: {
    Name: "اَلْعَلِيْمُ",
    Transliteration: "AL-‘ALEEM",
    Meaning: "The All-Knowing",
  },
  20: {
    Name: "الْقَابِضُ",
    Transliteration: "AL-QAABID",
    Meaning: "The Withholder",
  },
  21: {
    Name: "الْبَاسِطُ",
    Transliteration: "AL-BAASIT",
    Meaning: "The Extender",
  },
  22: {
    Name: "الْخَافِضُ",
    Transliteration: "AL-KHAAFIDH",
    Meaning: "The Reducer",
  },
  23: {
    Name: "الرَّافِعُ",
    Transliteration: "AR-RAAFI’",
    Meaning: "The Exalter, The Elevator",
  },
  24: {
    Name: "الْمُعِزُّ",
    Transliteration: "AL-MU’IZZ",
    Meaning: "The Honourer, The Bestower",
  },
  25: {
    Name: "ٱلْمُذِلُّ",
    Transliteration: "AL-MUZIL",
    Meaning: "The Dishonourer",
  },
  26: {
    Name: "السَّمِيعُ",
    Transliteration: "AS-SAMEE’",
    Meaning: "The All-Hearing",
  },
  27: {
    Name: "الْبَصِيرُ",
    Transliteration: "AL-BASEER",
    Meaning: "The All-Seeing",
  },
  28: {
    Name: "الْحَكَمُ",
    Transliteration: "AL-HAKAM",
    Meaning: "The Impartial Judge",
  },
  29: {
    Name: "الْعَدْلُ",
    Transliteration: "AL-‘ADL",
    Meaning: "The Utterly Just",
  },
  30: {
    Name: "اللَّطِيفُ",
    Transliteration: "AL-LATEEF",
    Meaning: "The Subtle One, The Most Gentle",
  },
  31: {
    Name: "الْخَبِيرُ",
    Transliteration: "AL-KHABEER",
    Meaning: "The All-Aware",
  },
  32: {
    Name: "الْحَلِيمُ",
    Transliteration: "AL-HALEEM",
    Meaning: "The Most Forbearing",
  },
  33: {
    Name: "الْعَظِيمُ",
    Transliteration: "AL-‘AZEEM",
    Meaning: "The Magnificent, The Supreme",
  },
  34: {
    Name: "الْغَفُور",
    Transliteration: "AL-GHAFOOR",
    Meaning: "The Great Forgiver",
  },
  35: {
    Name: "الشَّكُورُ",
    Transliteration: "ASH-SHAKOOR",
    Meaning: "The Most Appreciative",
  },
  36: {
    Name: "الْعَلِيُّ",
    Transliteration: "AL-‘ALEE",
    Meaning: "The Most High, The Exalted",
  },
  37: {
    Name: "الْكَبِيرُ",
    Transliteration: "AL-KABEER",
    Meaning: "The Most Great",
  },
  38: {
    Name: "الْحَفِيظُ",
    Transliteration: "AL-HAFEEDH",
    Meaning: "The Preserver",
  },
  39: {
    Name: "المُقيِت",
    Transliteration: "AL-MUQEET",
    Meaning: "The Sustainer",
  },
  40: {
    Name: "اﻟْﺣَسِيبُ",
    Transliteration: "AL-HASEEB",
    Meaning: "The Reckoner",
  },
  41: {
    Name: "الْجَلِيلُ",
    Transliteration: "AL-JALEEL",
    Meaning: "The Majestic",
  },
  42: {
    Name: "الْكَرِيمُ",
    Transliteration: "AL-KAREEM",
    Meaning: "The Most Generous, The Most Esteemed",
  },
  43: {
    Name: "الرَّقِيبُ",
    Transliteration: "AR-RAQEEB",
    Meaning: "The Watchful",
  },
  44: {
    Name: "ٱلْمُجِيبُ",
    Transliteration: "AL-MUJEEB",
    Meaning: "The Responsive One",
  },
  45: {
    Name: "الْوَاسِعُ",
    Transliteration: "AL-WAASI’",
    Meaning: "The All-Encompassing, the Boundless",
  },
  46: {
    Name: "الْحَكِيمُ",
    Transliteration: "AL-HAKEEM",
    Meaning: "The All-Wise",
  },
  47: {
    Name: "الْوَدُودُ",
    Transliteration: "AL-WADUD",
    Meaning: "The Most Loving",
  },
  48: {
    Name: "الْمَجِيدُ",
    Transliteration: "AL-MAJEED",
    Meaning: "The Glorious, The Most Honorable",
  },
  49: {
    Name: "الْبَاعِثُ",
    Transliteration: "AL-BA’ITH",
    Meaning: "The Infuser of New Life",
  },
  50: {
    Name: "الشَّهِيدُ",
    Transliteration: "ASH-SHAHEED",
    Meaning: "The All Observing Witnessing",
  },
  51: {
    Name: "الْحَقُ",
    Transliteration: "AL-HAQQ",
    Meaning: "The Absolute Truth",
  },
  52: {
    Name: "الْوَكِيلُ",
    Transliteration: "AL-WAKEEL",
    Meaning: "The Trustee, The Disposer of Affairs",
  },
  53: {
    Name: "الْقَوِيُّ",
    Transliteration: "AL-QAWIYY",
    Meaning: "The All-Strong",
  },
  54: {
    Name: "الْمَتِينُ",
    Transliteration: "AL-MATEEN",
    Meaning: "The Firm, The Steadfast",
  },
  55: {
    Name: "الْوَلِيُّ",
    Transliteration: "AL-WALIYY",
    Meaning: "The Protecting Associate",
  },
  56: {
    Name: "الْحَمِيدُ",
    Transliteration: "AL-HAMEED",
    Meaning: "The Praiseworthy",
  },
  57: {
    Name: "الْمُحْصِي",
    Transliteration: "AL-MUHSEE",
    Meaning: "The All-Enumerating, The Counter",
  },
  58: {
    Name: "الْمُبْدِئُ",
    Transliteration: "AL-MUBDI",
    Meaning: "The Originator, The Initiator",
  },
  59: {
    Name: "ٱلْمُعِيدُ",
    Transliteration: "AL-MUEED",
    Meaning: "The Restorer, The Reinstater",
  },
  60: {
    Name: "الْمُحْيِي",
    Transliteration: "AL-MUHYI",
    Meaning: "The Giver of Life",
  },
  61: {
    Name: "اَلْمُمِيتُ",
    Transliteration: "AL-MUMEET",
    Meaning: "The Creator of Death",
  },
  62: {
    Name: "الْحَيُّ",
    Transliteration: "AL-HAYY",
    Meaning: "The Ever-Living",
  },
  63: {
    Name: "الْقَيُّومُ",
    Transliteration: "AL-QAYYOOM",
    Meaning: "The Sustainer, The Self-Subsisting",
  },
  64: {
    Name: "الْوَاجِدُ",
    Transliteration: "AL-WAAJID",
    Meaning: "The Perceiver",
  },
  65: {
    Name: "الْمَاجِدُ",
    Transliteration: "AL-MAAJID",
    Meaning: "The Illustrious, the Magnificent",
  },
  66: { Name: "الْواحِدُ", Transliteration: "AL-WAAHID", Meaning: "The One" },
  67: {
    Name: "اَلاَحَدُ",
    Transliteration: "AL-AHAD",
    Meaning: "The Unique, The Only One",
  },
  68: {
    Name: "الصَّمَدُ",
    Transliteration: "AS-SAMAD",
    Meaning: "The Eternal, Satisfier of Needs",
  },
  69: {
    Name: "الْقَادِرُ",
    Transliteration: "AL-QADEER",
    Meaning: "The Omnipotent One",
  },
  70: {
    Name: "الْمُقْتَدِّمُ",
    Transliteration: "AL-MUQTADIR",
    Meaning: "The Powerful",
  },
  71: {
    Name: "الْمُقَدِّمُ",
    Transliteration: "AL-MUQADDIM",
    Meaning: "The Expediter, The Promoter",
  },
  72: {
    Name: "الْمُؤَخِّرُ",
    Transliteration: "AL-MU’AKHKHIR",
    Meaning: "The Delayer",
  },
  73: { Name: "الأوَّلُ", Transliteration: "AL-AWWAL", Meaning: "The First" },
  74: { Name: "الآخِرُ", Transliteration: "AL-AAKHIR", Meaning: "The Last" },
  75: {
    Name: "الظَّاهِرُ",
    Transliteration: "AZ-ZAAHIR",
    Meaning: "The Manifest",
  },
  76: {
    Name: "الْبَاطِنُ",
    Transliteration: "AL-BAATIN",
    Meaning: "The Hidden One, Knower of the Hidden",
  },
  77: {
    Name: "الْوَالِي",
    Transliteration: "AL-WAALI",
    Meaning: "The Sole Governor",
  },
  78: {
    Name: "الْمُتَعَالِي",
    Transliteration: "AL-MUTA’ALI",
    Meaning: "The Self Exalted",
  },
  79: {
    Name: "الْبَرُّ",
    Transliteration: "AL-BARR",
    Meaning: "The Source of All Goodness",
  },
  80: {
    Name: "التَّوَابُ",
    Transliteration: "AT-TAWWAB",
    Meaning: "The Ever-Pardoning",
  },
  81: {
    Name: "الْمُنْتَقِمُ",
    Transliteration: "AL-MUNTAQIM",
    Meaning: "The Avenger",
  },
  82: {
    Name: "العَفُوُّ",
    Transliteration: "AL-‘AFUWW",
    Meaning: "The Pardoner",
  },
  83: {
    Name: "الرَّؤُوفُ",
    Transliteration: "AR-RA’OOF",
    Meaning: "The Most Kind",
  },
  84: {
    Name: "مَالِكُ ٱلْمُلْكُ",
    Transliteration: "MAALIK-UL-MULK",
    Meaning: "Master of the Kingdom, Owner of the Dominion",
  },
  85: {
    Name: "ذُوالْجَلاَلِ وَالإكْرَامِ",
    Transliteration: "DHUL-JALAALI WAL-IKRAAM",
    Meaning: "Lord of Glory and Honour, Lord of Majesty and Generosity",
  },
  86: {
    Name: "الْمُقْسِطُ",
    Transliteration: "AL-MUQSIT",
    Meaning: "The Just One",
  },
  87: {
    Name: "الْجَامِعُ",
    Transliteration: "AL-JAAMI’",
    Meaning: "The Gatherer, the Uniter",
  },
  88: {
    Name: "ٱلْغَنيُّ",
    Transliteration: "AL-GHANIYY",
    Meaning: "The Self-Sufficient, The Wealthy",
  },
  89: {
    Name: "ٱلْمُغْنِيُّ",
    Transliteration: "AL-MUGHNI",
    Meaning: "The Enricher",
  },
  90: {
    Name: "اَلْمَانِعُ",
    Transliteration: "AL-MANI’",
    Meaning: "The Withholder",
  },
  91: {
    Name: "الضَّارَ",
    Transliteration: "AD-DHARR",
    Meaning: "The Distresser",
  },
  92: {
    Name: "النَّافِعُ",
    Transliteration: "AN-NAFI’",
    Meaning: "The Propitious, the Benefactor",
  },
  93: {
    Name: "النُّورُ",
    Transliteration: "AN-NUR",
    Meaning: "The Light, The Illuminator",
  },
  94: { Name: "الْهَادِي", Transliteration: "AL-HAADI", Meaning: "The Guide" },
  95: {
    Name: "الْبَدِيعُ",
    Transliteration: "AL-BADEE’",
    Meaning: "The Incomparable Originator",
  },
  96: {
    Name: "اَلْبَاقِي",
    Transliteration: "AL-BAAQI",
    Meaning: "The Everlasting",
  },
  97: {
    Name: "الْوَارِثُ",
    Transliteration: "AL-WAARITH",
    Meaning: "The Inheritor, The Heir",
  },
  98: {
    Name: "الرَّشِيدُ",
    Transliteration: "AR-RASHEED",
    Meaning: "The Guide, Infallible Teacher",
  },
  99: {
    Name: "الصَّبُورُ",
    Transliteration: "AS-SABOOR",
    Meaning: "The Forbearing, The Patient",
  },
};

const modifiedNames = { ...Names };

Object.keys(modifiedNames).forEach((key) => {
  modifiedNames[key].english_roman = NamesOfAllah[key].Transliteration;
  modifiedNames[key].english_meaning = NamesOfAllah[key].Meaning;
  modifiedNames[key].arabic = NamesOfAllah[key].Name;
});

const fs = require("fs");
fs.writeFileSync("./assets/data/names.json", JSON.stringify(modifiedNames));
