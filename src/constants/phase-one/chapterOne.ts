import { LevelNode, Word } from '../../config/types';

/**
 * Chapter 1: Demonstrative Pronouns
 * Phase 1: Foundation
 * 
 * What this chapter teaches:
 * Words that point to things or people.
 * 
 * Examples: This, That, These, Those, He who, Those who
 * 
 * Purpose:
 * Teaches how Qur'an refers to people, groups, objects, and concepts.
 */

const words: Word[] = [
  {
    id: 'p1-ch1-w1',
    arabic: 'هٰذَا',
    transliteration: 'Hādhā',
    translations: {
      en: 'This (masc.)',
      ur: 'یہ (مذکر)',
      ur_en: 'Yeh (muzakkar)'
    },
    gender: 'male',
    examples: [
      {
        arabic: 'قَالُواْ هَٰذَا ٱلَّذِي رُزِقْنَا مِن قَبْلُ',
        translation: 'They will say, "This is what we were provided with before,"',
        translations: {
          en: 'They will say, "This is what we were provided with before, "',
          ur: 'وہ کہیں گے، یہ وہی ہے جو ہمیں پہلے دیا گیا تھا',
          ur_en: 'Woh kahenge, yeh wahi hai jo hamein pehle diya gaya tha'
        },
        ref: '2:25'
      },
      {
        arabic: 'مَاذَآ أَرَادَ ٱللَّهُ بِهَٰذَا مَثَلًا',
        translation: 'What did Allah intend by this example?',
        translations: {
          en: 'What did Allah intend by this example?',
          ur: 'اللہ کا اس مثال سے کیا ارادہ ہے؟',
          ur_en: 'Allah ka is misaal se kya irada hai?'
        },
        ref: '2:26'
      },
      {
        arabic: 'فَهَٰذَا يَوۡمُ ٱلۡبَعۡثِ',
        translation: 'This is the Day of Resurrection',
        translations: {
          en: 'This is the Day of Resurrection',
          ur: 'یہ قیامت کا دن ہے',
          ur_en: 'Yeh Qayamat ka din hai'
        },
        ref: '30:56'
      }
    ]
  },
  {
    id: 'p1-ch1-w2',
    arabic: 'ذٰلِكَ',
    transliteration: 'Dhālika',
    translations: {
      en: 'That (masc.)',
      ur: 'وہ (مذکر)',
      ur_en: 'Woh (muzakkar)'
    },
    gender: 'male',
    examples: [
      {
        arabic: 'ذَٰلِكَ ٱلۡكِتَٰبُ لَا رَيۡبَۛ فِيهِۛ',
        translation: 'This [that] is the Book in which there is no doubt',
        translations: {
          en: 'This [that] is the Book in which there is no doubt',
          ur: 'یہ (وہ) کتاب ہے جس میں کوئی شک نہیں',
          ur_en: 'Yeh (woh) kitab hai jis mein koi shak nahi'
        },
        ref: '2:2'
      },
      {
        arabic: 'وَمَا لَهُم بِذَٰلِكَ مِنۡ عِلۡمٍ إِنۡ هُمۡ إِلَّا يَظُنُّونَ',
        translation: 'Of that they have no knowledge; they are only assuming.',
        translations: {
          en: 'Of that they have no knowledge; they are only assuming.',
          ur: 'اس کا انہیں کوئی علم نہیں؛ وہ صرف گمان کرتے ہیں',
          ur_en: 'Is ka unhein koi ilm nahi; woh sirf guman karte hain'
        },
        ref: '45:24'
      },
      {
        arabic: 'فَذَٰلِكَ يَوۡمَئِذٖ يَوۡمٌ عَسِيرٌ',
        translation: 'That Day will be a difficult day.',
        translations: {
          en: 'That Day will be a difficult day.',
          ur: 'وہ دن ایک مشکل دن ہوگا',
          ur_en: 'Woh din ek mushkil din hoga'
        },
        ref: '74:9'
      }
    ]
  },
  {
    id: 'p1-ch1-w3',
    arabic: 'هٰذِهِ',
    transliteration: 'Hādhihi',
    translations: {
      en: 'This (fem.)',
      ur: 'یہ (مونث)',
      ur_en: 'Yeh (monas)'
    },
    gender: 'female',
    examples: [
      {
        arabic: 'وَلَا تَقۡرَبَا هَٰذِهِ ٱلشَّجَرَةَ',
        translation: 'But do not approach this tree',
        translations: {
          en: 'But do not approach this tree',
          ur: 'اور اس درخت کے قریب مت جانا',
          ur_en: 'Aur is darakht ke qareeb mat jana'
        },
        ref: '7:19'
      },
      {
        arabic: 'لِّلَّذِينَ أَحۡسَنُواْ فِي هَٰذِهِ ٱلدُّنۡيَا حَسَنَةٌ',
        translation: 'For those who do good in this world, is goodness.',
        translations: {
          en: 'For those who do good in this world, is goodness.',
          ur: 'جو لوگ اس دنیا میں بھلا کرتے ہیں، ان کے لیے بھلائی ہے',
          ur_en: 'Jo log is duniya mein bhala karte hain, un ke liye bhalai hai'
        },
        ref: '16:30'
      },
      {
        arabic: 'قَالَ هَٰذِهِۦ نَاقَةٌ لَّهَا شِرۡبٌ',
        translation: 'This is a she-camel, she has her turn of drinking.',
        translations: {
          en: 'This is a she-camel, she has her turn of drinking.',
          ur: 'یہ ایک اونٹنی ہے، اس کے لیے پینے کی باری ہے',
          ur_en: 'Yeh ek oontni hai, is ke liye peene ki baari hai'
        },
        ref: '26:155'
      }
    ]
  },
  {
    id: 'p1-ch1-w4',
    arabic: 'تِلْكَ',
    transliteration: 'Tilka',
    translations: {
      en: 'That (fem.)',
      ur: 'وہ (مونث)',
      ur_en: 'Woh (monas)'
    },
    gender: 'female',
    examples: [
      {
        arabic: 'تِلۡكَ أُمَّةٞ قَدۡ خَلَتۡ',
        translation: 'That was a nation that has passed on.',
        translations: {
          en: 'That was a nation that has passed on.',
          ur: 'وہ ایک امت تھی جو گزر گئی',
          ur_en: 'Woh ek ummat thi jo guzar gayi'
        },
        ref: '2:134'
      },
      {
        arabic: 'وَتِلۡكَ حُجَّتُنَآ ءَاتَيۡنَٰهَآ إِبۡرَٰهِيمَ عَلَىٰ قَوۡمِهِۦ',
        translation: 'That was Our argument which We gave to Abraham against his people.',
        translations: {
          en: 'That was Our argument which We gave to Abraham against his people.',
          ur: 'اور یہ ہماری دلیل تھی جو ہم نے ابراہیم کو ان کی قوم کے مقابلے میں دی',
          ur_en: 'Aur yeh hamari daleel thi jo hum ne Ibrahim ko un ki qaum ke muqable mein di'
        },
        ref: '6:83'
      }
    ]
  },
  {
    id: 'p1-ch1-w5',
    arabic: 'هٰؤُلَاءِ',
    transliteration: 'Hā\'ulā\'i',
    translations: {
      en: 'These',
      ur: 'یہ سب',
      ur_en: 'Yeh sab'
    },
    gender: 'plural',
    examples: [
      {
        arabic: 'وَجِئۡنَا بِكَ عَلَىٰ هَٰٓؤُلَآءِ شَهِيدٗا',
        translation: 'and We bring you as a witness against these?',
        translations: {
          en: 'and We bring you as a witness against these?',
          ur: 'اور ہم آپ کو ان لوگوں پر گواہ بنا کر لائیں گے؟',
          ur_en: 'Aur hum aap ko in logon par gawah bana kar layenge?'
        },
        ref: '4:41'
      },
      {
        arabic: 'لِيَقُولُوٓاْ أَهَٰٓؤُلَآءِ مَنَّ ٱللَّهُ عَلَيۡهِم',
        translation: 'Are these the ones whom Allah has favored from among us?',
        translations: {
          en: 'Are these the ones whom Allah has favored from among us?',
          ur: 'کیا یہ وہی لوگ ہیں جن پر اللہ نے ہم میں سے احسان کیا؟',
          ur_en: 'Kya yeh wahi log hain jin par Allah ne hum mein se ehsan kiya?'
        },
        ref: '6:53'
      }
    ]
  },
  {
    id: 'p1-ch1-w6',
    arabic: 'أُوْلٰئِكَ',
    transliteration: '\'Ulā\'ika',
    translations: {
      en: 'Those',
      ur: 'وہ سب',
      ur_en: 'Woh sab'
    },
    gender: 'plural',
    examples: [
      {
        arabic: 'أُوْلٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمۡ وَأُوْلٰئِكَ هُمُ ٱلۡمُفۡلِحُونَ',
        translation: 'Those are upon [right] guidance from their Lord, and it is those who are the successful.',
        translations: {
          en: 'Those are upon [right] guidance from their Lord, and it is those who are the successful.',
          ur: 'یہی لوگ اپنے رب کی طرف سے ہدایت پر ہیں اور یہی لوگ کامیاب ہیں',
          ur_en: 'Yahi log apne Rab ki taraf se hidayat par hain aur yahi log kamyab hain'
        },
        ref: '2:5'
      },
      {
        arabic: 'فَأُوْلٰئِكَ أَتُوبُ عَلَيۡهِمۡ وَأَنَا ٱلتَّوَّابُ ٱلرَّحِيمُ',
        translation: 'Those—I will accept their repentance. I am the Acceptor of Repentance, the Merciful.',
        translations: {
          en: 'Those—I will accept their repentance. I am the Acceptor of Repentance, the Merciful.',
          ur: 'یہ وہ لوگ ہیں جن کی میں توبہ قبول کروں گا، اور میں توبہ قبول کرنے والا، رحم کرنے والا ہوں',
          ur_en: 'Yeh woh log hain jin ki main tauba qabool karunga, aur main tauba qabool karne wala hun'
        },
        ref: '2:160'
      }
    ]
  },
  {
    id: 'p1-ch1-w7',
    arabic: 'الَّذِي',
    transliteration: 'Alladhī',
    translations: {
      en: 'He who / The one who',
      ur: 'وہ جو (مذکر)',
      ur_en: 'Jo (muzakkar)'
    },
    gender: 'male',
    examples: [
      {
        arabic: 'مَثَلُهُمۡ كَمَثَلِ ٱلَّذِي ٱسۡتَوۡقَدَ نَارٗا',
        translation: 'Their likeness is that of a person who kindled a fire',
        translations: {
          en: 'Their likeness is that of a person who kindled a fire',
          ur: 'ان کی مثال اس شخص کی سی ہے جس نے آگ جلائی',
          ur_en: 'Un ki misaal us shakhs ki si hai jis ne aag jalayi'
        },
        ref: '2:17'
      },
      {
        arabic: 'أَوۡ كَٱلَّذِي مَرَّ عَلَىٰ قَرۡيَةٖ',
        translation: 'Or like him who passed by a town',
        translations: {
          en: 'Or like him who passed by a town',
          ur: 'یا اس شخص کی طرح جو ایک بستی سے گزرا',
          ur_en: 'Ya us shakhs ki tarah jo ek basti se guzra'
        },
        ref: '2:259'
      },
      {
        arabic: 'ءَامِنُواْ بِٱلَّذِيٓ أُنزِلَ عَلَى ٱلَّذِينَ ءَامَنُواْ',
        translation: 'Believe in that which was revealed to the believers',
        translations: {
          en: 'Believe in that which was revealed to the believers',
          ur: 'اس چیز پر ایمان لاؤ جو مومنوں پر نازل کی گئی',
          ur_en: 'Us cheez par imaan lao jo mominon par naazil ki gayi'
        },
        ref: '3:72'
      }
    ]
  },
  {
    id: 'p1-ch1-w8',
    arabic: 'الَّتِي',
    transliteration: 'Allatī',
    translations: {
      en: 'She who / The one who',
      ur: 'وہ جو (مونث)',
      ur_en: 'Jo (monas)'
    },
    gender: 'female',
    examples: [
      {
        arabic: 'وَٱتَّقُواْ ٱلنَّارَ ٱلَّتِيٓ أُعِدَّتۡ لِلۡكَٰفِرِينَ',
        translation: 'And guard yourselves against the Fire that is prepared for the disbelievers.',
        translations: {
          en: 'And guard yourselves against the Fire that is prepared for the disbelievers.',
          ur: 'اور اس آگ سے بچو جو کافروں کے لیے تیار کی گئی ہے',
          ur_en: 'Aur us aag se bacho jo kafiron ke liye tayyar ki gayi hai'
        },
        ref: '3:131'
      },
      {
        arabic: 'ٱدۡفَعۡ بِٱلَّتِي هِيَ أَحۡسَنُ ٱلسَّيِّئَةَ',
        translation: 'Repel evil by what is better. We are aware of what they describe.',
        translations: {
          en: 'Repel evil by what is better. We are aware of what they describe.',
          ur: 'برائی کو اس طریقے سے دور کرو جو سب سے اچھا ہو',
          ur_en: 'Burai ko us tareeqay se door karo jo sab se acha ho'
        },
        ref: '23:96'
      },
      {
        arabic: 'وَلَا تَكُونُواْ كَٱلَّتِي نَقَضَتۡ غَزۡلَهَا',
        translation: 'And do not be like her who untwisted her spun thread',
        translations: {
          en: 'And do not be like her who untwisted her spun thread',
          ur: 'اور اس عورت کی طرح نہ ہو جاؤ جس نے اپنا سوت توڑ دیا',
          ur_en: 'Aur us aurat ki tarah na ho jao jis ne apna soot tod diya'
        },
        ref: '16:92'
      }
    ]
  },
  {
    id: 'p1-ch1-w9',
    arabic: 'الَّذِينَ',
    transliteration: 'Alladhīna',
    translations: {
      en: 'Those who (masc. pl.)',
      ur: 'وہ جو (جمع)',
      ur_en: 'Woh log jo'
    },
    gender: 'plural',
    examples: [
      {
        arabic: 'صِرَٰطَ ٱلَّذِينَ أَنۡعَمۡتَ عَلَيۡهِمۡ',
        translation: 'The path of those whom You have blessed',
        translations: {
          en: 'The path of those whom You have blessed',
          ur: 'ان لوگوں کا راستہ جن پر تو نے انعام کیا',
          ur_en: 'Un logon ka raasta jin par to ne inaam kiya'
        },
        ref: '1:7'
      },
      {
        arabic: 'وَلَا تَكُونُواْ كَٱلَّذِينَ تَفَرَّقُواْ',
        translation: 'And do not be like those who became divided',
        translations: {
          en: 'And do not be like those who became divided',
          ur: 'اور ان لوگوں کی طرح نہ ہو جانا جو فرقوں میں بٹ گئے',
          ur_en: 'Aur un logon ki tarah na ho jana jo firqon mein bat gaye'
        },
        ref: '3:105'
      },
      {
        arabic: 'فَحَاقَ بِٱلَّذِينَ سَخِرُواْ مِنۡهُم',
        translation: 'But those who mocked them were enveloped by what they used to ridicule.',
        translations: {
          en: 'But those who mocked them were enveloped by what they used to ridicule.',
          ur: 'تو جن لوگوں نے ان کا مذاق اڑایا تھا انہیں اس چیز نے گھیر لیا',
          ur_en: 'To jin logon ne un ka mazaq udaya tha unhein us cheez ne gher liya'
        },
        ref: '6:10'
      }
    ]
  },
  {
    id: 'p1-ch1-w10',
    arabic: 'الَّتِي',
    transliteration: 'Allatī',
    translations: {
      en: 'Those who (fem. pl.)',
      ur: 'وہ جو (جمع مونث)',
      ur_en: 'Woh khawateen jo'
    },
    gender: 'plural',
    examples: [
      {
        arabic: 'وَيَضَعُ عَنۡهُمۡ إِصۡرَهُمۡ وَٱلۡأَغۡلَٰلَ ٱلَّتِي كَانَتۡ عَلَيۡهِمۡ',
        translation: 'And relieves them of their burden and the shackles which were upon them.',
        translations: {
          en: 'And relieves them of their burden and the shackles which were upon them.',
          ur: 'اور ان بوجھوں اور طوقوں کو اتارتا ہے جو ان پر تھے',
          ur_en: 'Aur un bojhau aur tauqon ko utarta hai jo un par thay'
        },
        ref: '7:157'
      },
      {
        arabic: 'فَمَآ أَغۡنَتۡ عَنۡهُمۡ ءَالِهَتُهُمُ ٱلَّتِي يَدۡعُونَ مِن دُونِ ٱللَّهِ',
        translation: 'And they were not availed at all by their gods which they invoked other than Allah.',
        translations: {
          en: 'And they were not availed at all by their gods which they invoked other than Allah.',
          ur: 'اور ان کے معبود جنہیں وہ اللہ کے سوا پکارتے تھے',
          ur_en: 'Aur un ke mabood jinhein woh Allah ke siwa pukartay thay'
        },
        ref: '11:101'
      }
    ]
  },
  {
    id: 'p1-ch1-w11',
    arabic: 'هَٰذِهِ',
    transliteration: 'Hādhihi',
    translations: {
      en: 'These',
      ur: 'یہ سب',
      ur_en: 'Yeh sab'
    },
    gender: 'plural',
    examples: [
      {
        arabic: 'وَقَالُواْ هَٰذِهِۦٓ أَنۡعَٰمٞ وَحَرۡثٌ حِجۡرٌ',
        translation: 'And they say, "These animals and crops are forbidden"',
        translations: {
          en: 'And they say, "These animals and crops are forbidden"',
          ur: 'اور وہ کہتے ہیں کہ یہ جانور اور کھیتی حرام ہے',
          ur_en: 'Aur woh kehte hain ke yeh jaanwar aur kheti haraam hai'
        },
        ref: '6:138'
      },
      {
        arabic: 'مَا هَٰذِهِ ٱلتَّمَاثِيلُ ٱلَّتِيٓ أَنتُمۡ لَهَا عَٰكِفُونَ',
        translation: 'What are these statues to which you are devoted?',
        translations: {
          en: 'What are these statues to which you are devoted?',
          ur: 'یہ مورتیاں کیا ہیں جن کے تم مجاور بنے بیٹھے ہو؟',
          ur_en: 'Yeh moortiyan kya hain jin ke tum majawar banay baithay ho?'
        },
        ref: '21:52'
      }
    ]
  },
  {
    id: 'p1-ch1-w12',
    arabic: 'تِلْكَ',
    transliteration: 'Tilka',
    translations: {
      en: 'Those',
      ur: 'وہ سب',
      ur_en: 'Woh sab'
    },
    gender: 'plural',
    examples: [
      {
        arabic: 'تِلۡكَ أَمَانِيُّهُمۡ',
        translation: 'Those are their wishes.',
        translations: {
          en: 'Those are their wishes.',
          ur: 'یہ ان کی آرزوئیں ہیں',
          ur_en: 'Yeh un ki aarzu\'ein hain'
        },
        ref: '2:111'
      },
      {
        arabic: 'تِلۡكَ حُدُودُ ٱللَّهِ',
        translation: 'Those are the bounds set by Allah.',
        translations: {
          en: 'Those are the bounds set by Allah.',
          ur: 'یہ اللہ کی مقرر کردہ حدود ہیں',
          ur_en: 'Yeh Allah ki muqarrar karda hudood hain'
        },
        ref: '4:13'
      }
    ]
  },
];

export const CHAPTER_ONE: LevelNode = {
  id: 'chapter-1',
  section: 'Phase 1: Foundation',
  title: 'Demonstrative Pronouns',
  description: 'Words that point to people, groups, objects, and concepts.',
  icon: '👆',
  color: 'bg-green-500',
  locked: false,
  words: words
};

