// Mega Complete Sign Database: ISHAARE
const signData = [
    // --- English Alphabets (A to Z) ---
    { id: 1, enTitle: "Alphabet: A", hiTitle: "वर्णमाला: A", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "A", enDesc: "Make a fist with thumb resting straight against the side of the index finger.", hiDesc: "मुट्ठी बंद करें और अंगूठे को तर्जनी उंगली के साथ सीधा सटाकर रखें।" },
    { id: 2, enTitle: "Alphabet: B", hiTitle: "वर्णमाला: B", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "B", enDesc: "Hold hand up palm facing forward, fingers straight together, thumb folded across palm.", hiDesc: "हथेली आगे रखें, उंगलियां सीधी और साथ हों, अंगूठा हथेली के पार मुड़ा हो।" },
    { id: 3, enTitle: "Alphabet: C", hiTitle: "वर्णमाला: C", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "C", enDesc: "Curve your hand and fingers into the shape of the letter 'C'.", hiDesc: "हाथ और उंगलियों को 'C' के आकार में मोड़ें।" },
    { id: 4, enTitle: "Alphabet: D", hiTitle: "वर्णमाला: D", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "D", enDesc: "Point index finger up, other fingers curl to touch the thumb forming a circle.", hiDesc: "तर्जनी ऊपर रखें, बाकी उंगलियां अंगूठा छूकर गोला बनाएं।" },
    { id: 5, enTitle: "Alphabet: E", hiTitle: "वर्णमाला: E", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "E", enDesc: "Curve all fingers down, thumb tucked underneath across the palm.", hiDesc: "सभी उंगलियां नीचे मोड़ें, अंगूठा हथेली के नीचे हो।" },
    { id: 6, enTitle: "Alphabet: F", hiTitle: "वर्णमाला: F", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "F", enDesc: "Touch index finger tip to thumb tip, other three fingers extended straight up.", hiDesc: "तर्जनी का सिरा अंगूठे से मिलाएं, बाकी तीन उंगलियां सीधी ऊपर हों।" },
    { id: 7, enTitle: "Alphabet: G", hiTitle: "वर्णमाला: G", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "G", enDesc: "Point index finger and thumb horizontally forward, parallel to each other.", hiDesc: "तर्जनी और अंगूठा सामने की ओर क्षैतिज रूप से सीधा रखें।" },
    { id: 8, enTitle: "Alphabet: H", hiTitle: "वर्णमाला: H", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "H", enDesc: "Extend index and middle fingers horizontally together, other fingers folded.", hiDesc: "तर्जनी और मध्यमा को साथ में क्षैतिज रखें, बाकी उंगलियां मुड़ी हों।" },
    { id: 9, enTitle: "Alphabet: I", hiTitle: "वर्णमाला: I", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "I", enDesc: "Hold pinky finger straight up, make a fist with other fingers, thumb over them.", hiDesc: "कनिष्ठिका (छोटी उंगली) सीधी ऊपर रखें, बाकी मुट्ठी बंद हो।" },
    { id: 10, enTitle: "Alphabet: J", hiTitle: "वर्णमाला: J", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "J", enDesc: "Start with 'I' pinky gesture and trace a 'J' shape hook in the air.", hiDesc: "छोटी उंगली ऊपर रखकर हवा में 'J' का आकार बनाएं।" },
    { id: 11, enTitle: "Alphabet: K", hiTitle: "वर्णमाला: K", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "K", enDesc: "Hold index and middle fingers up in 'V', place thumb between them pointing forward.", hiDesc: "दो उंगलियां 'V' आकार में रखें, अंगूठा उनके बीच सामने हो।" },
    { id: 12, enTitle: "Alphabet: L", hiTitle: "वर्णमाला: L", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "L", enDesc: "Extend index finger up and thumb out to the side forming a clear 'L' shape.", hiDesc: "तर्जनी ऊपर और अंगूठा साइड में करके 'L' का आकार बनाएं।" },
    { id: 13, enTitle: "Alphabet: M", hiTitle: "वर्णमाला: M", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "M", enDesc: "Fold thumb under the first three fingers (index, middle, ring).", hiDesc: "अंगूठे को पहली तीन उंगलियों के नीचे दबाएं।" },
    { id: 14, enTitle: "Alphabet: N", hiTitle: "वर्णमाला: N", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "N", enDesc: "Fold thumb under index and middle fingers only.", hiDesc: "अंगूठे को केवल तर्जनी और मध्यमा उंगली के नीचे दबाएं।" },
    { id: 15, enTitle: "Alphabet: O", hiTitle: "वर्णमाला: O", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "O", enDesc: "Curve all fingers and thumb to touch tips together forming an 'O' circle.", hiDesc: "सभी उंगलियों और अंगूठे के सिरों को मिलाकर 'O' का गोला बनाएं।" },
    { id: 16, enTitle: "Alphabet: P", hiTitle: "वर्णमाला: P", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "P", enDesc: "Like 'K' sign but point the hand and thumb downward toward the ground.", hiDesc: "'K' की तरह हाथ रखें लेकिन उंगलियों और अंगूठे को नीचे ज़मीन की तरफ झुकाएं।" },
    { id: 17, enTitle: "Alphabet: Q", hiTitle: "वर्णमाला: Q", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "Q", enDesc: "Like 'G' sign but point index finger and thumb downward.", hiDesc: "'G' की तरह हाथ रखें लेकिन तर्जनी और अंगूठे को नीचे की ओर इंगित करें।" },
    { id: 18, enTitle: "Alphabet: R", hiTitle: "वर्णमाला: R", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "R", enDesc: "Cross your index and middle fingers over each other like a wishbone.", hiDesc: "तर्जनी और मध्यमा उंगली को आपस में क्रॉस करें।" },
    { id: 19, enTitle: "Alphabet: S", hiTitle: "वर्णमाला: S", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "S", enDesc: "Make a tight fist with your thumb wrapped across the front of your fingers.", hiDesc: "मुट्ठी बंद करें और अंगूठे को उंगलियों के आगे क्षैतिज रूप से रखें।" },
    { id: 20, enTitle: "Alphabet: T", hiTitle: "वर्णमाला: T", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "T", enDesc: "Make a fist with the thumb tucked neatly underneath the index finger.", hiDesc: "मुट्ठी बंद करें और अंगूठे को तर्जनी के ठीक नीचे दबाएं।" },
    { id: 21, enTitle: "Alphabet: U", hiTitle: "वर्णमाला: U", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "U", enDesc: "Hold index and middle fingers straight up together side-by-side.", hiDesc: "तर्जनी और मध्यमा उंगली को एक साथ सीधा ऊपर रखें।" },
    { id: 22, enTitle: "Alphabet: V", hiTitle: "वर्णमाला: V", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "V", enDesc: "Hold index and middle fingers up spread apart in a 'V' victory sign.", hiDesc: "तर्जनी और मध्यमा को फैलाकर 'V' (विक्ट्री) का निशान बनाएं।" },
    { id: 23, enTitle: "Alphabet: W", hiTitle: "वर्णमाला: W", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "W", enDesc: "Hold index, middle, and ring fingers up spread apart like a 'W'.", hiDesc: "तीन उंगलियों (तर्जनी, मध्यमा, अनामिका) को फैलाकर 'W' बनाएं।" },
    { id: 24, enTitle: "Alphabet: X", hiTitle: "वर्णमाला: X", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "X", enDesc: "Curve your index finger like a small hook, other fingers in a loose fist.", hiDesc: "तर्जनी को हुक की तरह मोड़ें, बाकी उंगलियां ढीली मुट्ठी में हों।" },
    { id: 25, enTitle: "Alphabet: Y", hiTitle: "वर्णमाला: Y", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "Y", enDesc: "Extend thumb and pinky finger out to the sides, other fingers folded.", hiDesc: "अंगूठा और कनिष्ठिका (छोटी उंगली) बाहर फैलाएं, बाकी मुड़ी हों।" },
    { id: 26, enTitle: "Alphabet: Z", hiTitle: "वर्णमाला: Z", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "Z", enDesc: "Draw the zigzag shape of the letter 'Z' in the air with your index finger.", hiDesc: "तर्जनी उंगली से हवा में 'Z' का ज़िग-जैग आकार बनाएं।" },

    // --- Complete Hindi Varnmala (Swar & Vyanjan अ से ज्ञ) ---
    { id: 27, enTitle: "Hindi Swar: अ", hiTitle: "हिंदी स्वर: अ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "अ", enDesc: "Sign reference for foundational vowel sound 'A'.", hiDesc: "स्वर ध्वनि 'अ' के लिए पारंपरिक सांकेतिक मुद्रा।" },
    { id: 28, enTitle: "Hindi Swar: आ", hiTitle: "हिंदी स्वर: आ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "आ", enDesc: "Sign reference for extended vowel sound 'Aa'.", hiDesc: "दीर्घ स्वर ध्वनि 'आ' के लिए विस्तारित संकेत।" },
    { id: 29, enTitle: "Hindi Swar: इ", hiTitle: "हिंदी स्वर: इ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "इ", enDesc: "Sign reference for vowel sound 'I'.", hiDesc: "स्वर ध्वनि 'इ' को दर्शाने के लिए संकेत।" },
    { id: 30, enTitle: "Hindi Swar: ई", hiTitle: "हिंदी स्वर: ई", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ई", enDesc: "Sign reference for long vowel sound 'Ee'.", hiDesc: "दीर्घ स्वर ध्वनि 'ई' के लिए संकेत।" },
    { id: 31, enTitle: "Hindi Swar: उ", hiTitle: "हिंदी स्वर: उ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "उ", enDesc: "Sign reference for vowel sound 'U'.", hiDesc: "स्वर ध्वनि 'उ' के लिए सांकेतिक मुद्रा।" },
    { id: 32, enTitle: "Hindi Swar: ऊ", hiTitle: "हिंदी स्वर: ऊ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ऊ", enDesc: "Sign reference for long vowel sound 'Oo'.", hiDesc: "दीर्घ स्वर ध्वनि 'ऊ' के लिए संकेत।" },
    { id: 33, enTitle: "Hindi Swar: ऋ", hiTitle: "हिंदी स्वर: ऋ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ऋ", enDesc: "Sign reference for vowel 'Ri'.", hiDesc: "स्वर 'ऋ' को दर्शाने के लिए संकेत।" },
    { id: 34, enTitle: "Hindi Swar: ए", hiTitle: "हिंदी स्वर: ए", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ए", enDesc: "Sign reference for vowel 'E'.", hiDesc: "स्वर 'ए' के लिए सांकेतिक मुद्रा।" },
    { id: 35, enTitle: "Hindi Swar: ऐ", hiTitle: "हिंदी स्वर: ऐ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ऐ", enDesc: "Sign reference for vowel 'Ai'.", hiDesc: "स्वर 'ऐ' के लिए संकेत।" },
    { id: 36, enTitle: "Hindi Swar: ओ", hiTitle: "हिंदी स्वर: ओ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ओ", enDesc: "Sign reference for vowel 'O'.", hiDesc: "स्वर 'ओ' के लिए सांकेतिक मुद्रा।" },
    { id: 37, enTitle: "Hindi Swar: औ", hiTitle: "हिंदी स्वर: औ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "औ", enDesc: "Sign reference for vowel 'Au'.", hiDesc: "स्वर 'औ' के लिए संकेत।" },
    { id: 38, enTitle: "Hindi Swar: अं", hiTitle: "हिंदी स्वर: अं", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "अं", enDesc: "Sign reference for Anusvara 'Am'.", hiDesc: "अनुस्वार 'अं' के लिए संकेत।" },
    { id: 39, enTitle: "Hindi Swar: अः", hiTitle: "हिंदी स्वर: अः", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "अः", enDesc: "Sign reference for Visarga 'Aha'.", hiDesc: "विसर्ग 'अः' के लिए संकेत।" },

    { id: 40, enTitle: "Hindi Vyanjan: क", hiTitle: "हिंदी व्यंजन: क", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "क", enDesc: "Structured hand posture for consonant 'Ka'.", hiDesc: "व्यंजन 'क' को दर्शाने के लिए हथेली का संकेत।" },
    { id: 41, enTitle: "Hindi Vyanjan: ख", hiTitle: "हिंदी व्यंजन: ख", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ख", enDesc: "Structured hand posture for consonant 'Kha'.", hiDesc: "व्यंजन 'ख' के लिए संकेत।" },
    { id: 42, enTitle: "Hindi Vyanjan: ग", hiTitle: "हिंदी व्यंजन: ग", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ग", enDesc: "Structured hand posture for consonant 'Ga'.", hiDesc: "व्यंजन 'ग' के लिए संकेत।" },
    { id: 43, enTitle: "Hindi Vyanjan: घ", hiTitle: "हिंदी व्यंजन: घ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "घ", enDesc: "Structured hand posture for consonant 'Gha'.", hiDesc: "व्यंजन 'घ' के लिए संकेत।" },
    { id: 44, enTitle: "Hindi Vyanjan: ङ", hiTitle: "हिंदी व्यंजन: ङ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ङ", enDesc: "Structured hand posture for consonant 'Nga'.", hiDesc: "व्यंजन 'ङ' के लिए संकेत।" },
    { id: 45, enTitle: "Hindi Vyanjan: च", hiTitle: "हिंदी व्यंजन: च", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "च", enDesc: "Structured hand posture for consonant 'Cha'.", hiDesc: "व्यंजन 'च' के लिए संकेत।" },
    { id: 46, enTitle: "Hindi Vyanjan: छ", hiTitle: "हिंदी व्यंजन: छ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "छ", enDesc: "Structured hand posture for consonant 'Chha'.", hiDesc: "व्यंजन 'छ' के लिए संकेत।" },
    { id: 47, enTitle: "Hindi Vyanjan: ज", hiTitle: "हिंदी व्यंजन: ज", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ज", enDesc: "Structured hand posture for consonant 'Ja'.", hiDesc: "व्यंजन 'ज' के लिए संकेत।" },
    { id: 48, enTitle: "Hindi Vyanjan: झ", hiTitle: "हिंदी व्यंजन: झ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "झ", enDesc: "Structured hand posture for consonant 'Jha'.", hiDesc: "व्यंजन 'झ' के लिए संकेत।" },
    { id: 49, enTitle: "Hindi Vyanjan: ञ", hiTitle: "हिंदी व्यंजन: ञ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ञ", enDesc: "Structured hand posture for consonant 'Nya'.", hiDesc: "व्यंजन 'ञ' के लिए संकेत।" },
    { id: 50, enTitle: "Hindi Vyanjan: ट", hiTitle: "हिंदी व्यंजन: ट", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ट", enDesc: "Structured hand posture for consonant 'Ta'.", hiDesc: "व्यंजन 'ट' के लिए संकेत।" },
    { id: 51, enTitle: "Hindi Vyanjan: ठ", hiTitle: "हिंदी व्यंजन: ठ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ठ", enDesc: "Structured hand posture for consonant 'Ttha'.", hiDesc: "व्यंजन 'ठ' के लिए संकेत।" },
    { id: 52, enTitle: "Hindi Vyanjan: ड", hiTitle: "हिंदी व्यंजन: ड", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ड", enDesc: "Structured hand posture for consonant 'Da'.", hiDesc: "व्यंजन 'ड' के लिए संकेत।" },
    { id: 53, enTitle: "Hindi Vyanjan: ढ", hiTitle: "हिंदी व्यंजन: ढ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ढ", enDesc: "Structured hand posture for consonant 'Dha'.", hiDesc: "व्यंजन 'ढ' के लिए संकेत।" },
    { id: 54, enTitle: "Hindi Vyanjan: ण", hiTitle: "हिंदी व्यंजन: ण", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ण", enDesc: "Structured hand posture for consonant 'Na'.", hiDesc: "व्यंजन 'ण' के लिए संकेत।" },
    { id: 55, enTitle: "Hindi Vyanjan: त", hiTitle: "हिंदी व्यंजन: त", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "त", enDesc: "Structured hand posture for consonant 'Ta'.", hiDesc: "व्यंजन 'त' के लिए संकेत।" },
    { id: 56, enTitle: "Hindi Vyanjan: थ", hiTitle: "हिंदी व्यंजन: थ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "थ", enDesc: "Structured hand posture for consonant 'Tha'.", hiDesc: "व्यंजन 'थ' के लिए संकेत।" },
    { id: 57, enTitle: "Hindi Vyanjan: द", hiTitle: "हिंदी व्यंजन: द", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "द", enDesc: "Structured hand posture for consonant 'Da'.", hiDesc: "व्यंजन 'द' के लिए संकेत।" },
    { id: 58, enTitle: "Hindi Vyanjan: ध", hiTitle: "हिंदी व्यंजन: ध", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ध", enDesc: "Structured hand posture for consonant 'Dha'.", hiDesc: "व्यंजन 'ध' के लिए संकेत।" },
    { id: 59, enTitle: "Hindi Vyanjan: न", hiTitle: "हिंदी व्यंजन: न", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "न", enDesc: "Structured hand posture for consonant 'Na'.", hiDesc: "व्यंजन 'न' के लिए संकेत।" },
    { id: 60, enTitle: "Hindi Vyanjan: प", hiTitle: "हिंदी व्यंजन: प", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "प", enDesc: "Structured hand posture for consonant 'Pa'.", hiDesc: "व्यंजन 'प' के लिए संकेत।" },
    { id: 61, enTitle: "Hindi Vyanjan: फ", hiTitle: "हिंदी व्यंजन: फ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "फ", enDesc: "Structured hand posture for consonant 'Pha'.", hiDesc: "व्यंजन 'फ' के लिए संकेत।" },
    { id: 62, enTitle: "Hindi Vyanjan: ब", hiTitle: "हिंदी व्यंजन: ब", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ब", enDesc: "Structured hand posture for consonant 'Ba'.", hiDesc: "व्यंजन 'ब' के लिए संकेत।" },
    { id: 63, enTitle: "Hindi Vyanjan: भ", hiTitle: "हिंदी व्यंजन: भ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "भ", enDesc: "Structured hand posture for consonant 'Bha'.", hiDesc: "व्यंजन 'भ' के लिए संकेत।" },
    { id: 64, enTitle: "Hindi Vyanjan: म", hiTitle: "हिंदी व्यंजन: म", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "म", enDesc: "Structured hand posture for consonant 'Ma'.", hiDesc: "व्यंजन 'म' के लिए संकेत।" },
    { id: 65, enTitle: "Hindi Vyanjan: य", hiTitle: "हिंदी व्यंजन: य", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "य", enDesc: "Structured hand posture for consonant 'Ya'.", hiDesc: "व्यंजन 'य' के लिए संकेत।" },
    { id: 66, enTitle: "Hindi Vyanjan: र", hiTitle: "हिंदी व्यंजन: र", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "र", enDesc: "Structured hand posture for consonant 'Ra'.", hiDesc: "व्यंजन 'र' के लिए संकेत।" },
    { id: 67, enTitle: "Hindi Vyanjan: ल", hiTitle: "हिंदी व्यंजन: ल", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ल", enDesc: "Structured hand posture for consonant 'La'.", hiDesc: "व्यंजन 'ल' के लिए संकेत।" },
    { id: 68, enTitle: "Hindi Vyanjan: व", hiTitle: "हिंदी व्यंजन: व", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "व", enDesc: "Structured hand posture for consonant 'Va'.", hiDesc: "व्यंजन 'व' के लिए संकेत।" },
    { id: 69, enTitle: "Hindi Vyanjan: श", hiTitle: "हिंदी व्यंजन: श", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "श", enDesc: "Structured hand posture for consonant 'Sha'.", hiDesc: "व्यंजन 'श' के लिए संकेत।" },
    { id: 70, enTitle: "Hindi Vyanjan: ष", hiTitle: "हिंदी व्यंजन: ष", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ष", enDesc: "Structured hand posture for consonant 'Shha'.", hiDesc: "व्यंजन 'ष' के लिए संकेत।" },
    { id: 71, enTitle: "Hindi Vyanjan: स", hiTitle: "हिंदी व्यंजन: स", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "स", enDesc: "Structured hand posture for consonant 'Sa'.", hiDesc: "व्यंजन 'स' के लिए संकेत।" },
    { id: 72, enTitle: "Hindi Vyanjan: ह", hiTitle: "हिंदी व्यंजन: ह", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ह", enDesc: "Structured hand posture for consonant 'Ha'.", hiDesc: "व्यंजन 'ह' के लिए संकेत।" },
    { id: 73, enTitle: "Hindi Vyanjan: क्ष", hiTitle: "हिंदी व्यंजन: क्ष", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "क्ष", enDesc: "Structured hand posture for consonant 'Ksha'.", hiDesc: "व्यंजन 'क्ष' के लिए संकेत।" },
    { id: 74, enTitle: "Hindi Vyanjan: त्र", hiTitle: "हिंदी व्यंजन: त्र", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "त्र", enDesc: "Structured hand posture for consonant 'Tra'.", hiDesc: "व्यंजन 'त्र' के लिए संकेत।" },
    { id: 75, enTitle: "Hindi Vyanjan: ज्ञ", hiTitle: "हिंदी व्यंजन: ज्ञ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ज्ञ", enDesc: "Structured hand posture for consonant 'Gya'.", hiDesc: "व्यंजन 'ज्ञ' के लिए संकेत।" },

    // --- Number Counting (1 to 10) ---
    { id: 76, enTitle: "Number: 1", hiTitle: "गिनती: 1", enCat: "Counting", hiCat: "गिनती", icon: "1️⃣", enDesc: "Index finger pointing straight up.", hiDesc: "तर्जनी उंगली सीधे ऊपर।" },
    { id: 77, enTitle: "Number: 2", hiTitle: "गिनती: 2", enCat: "Counting", hiCat: "गिनती", icon: "2️⃣", enDesc: "Index and middle fingers up in 'V'.", hiDesc: "तर्जनी और मध्यमा 'V' आकार में।" },
    { id: 78, enTitle: "Number: 3", hiTitle: "गिनती: 3", enCat: "Counting", hiCat: "गिनती", icon: "3️⃣", enDesc: "Thumb, index, and middle fingers extended.", hiDesc: "अंगूठा, तर्जनी और मध्यमा खुली हों।" },
    { id: 79, enTitle: "Number: 4", hiTitle: "गिनती: 4", enCat: "Counting", hiCat: "गिनती", icon: "4️⃣", enDesc: "Four fingers up, thumb folded across palm.", hiDesc: "चारों उंगलियां ऊपर, अंगूठा हथेली पर।" },
    { id: 80, enTitle: "Number: 5", hiTitle: "गिनती: 5", enCat: "Counting", hiCat: "गिनती", icon: "5️⃣", enDesc: "All five fingers open and spread out.", hiDesc: "पांचों उंगलियां खुली और फैली हुई।" },
    { id: 81, enTitle: "Number: 6", hiTitle: "गिनती: 6", enCat: "Counting", hiCat: "गिनती", icon: "6️⃣", enDesc: "Thumb touching pinky tip, three fingers up.", hiDesc: "अंगूठा छोटी उंगली के सिरे को छुए, तीन उंगलियां ऊपर।" },
    { id: 82, enTitle: "Number: 7", hiTitle: "गिनती: 7", enCat: "Counting", hiCat: "गिनती", icon: "7️⃣", enDesc: "Thumb touching ring finger tip.", hiDesc: "अंगूठा अनामिका (रिंग फिंगर) के सिरे को छुए।" },
    { id: 83, enTitle: "Number: 8", hiTitle: "गिनती: 8", enCat: "Counting", hiCat: "गिनती", icon: "8️⃣", enDesc: "Thumb touching middle finger tip.", hiDesc: "अंगूठा मध्यमा उंगली के सिरे को छुए।" },
    { id: 84, enTitle: "Number: 9", hiTitle: "गिनती: 9", enCat: "Counting", hiCat: "गिनती", icon: "9️⃣", enDesc: "Thumb touching index finger tip.", hiDesc: "अंगूठा तर्जनी उंगली के सिरे को छुए।" },
    { id: 85, enTitle: "Number: 10", hiTitle: "गिनती: 10", enCat: "Counting", hiCat: "गिनती", icon: "🔟", enDesc: "Make a fist and shake thumb slightly side to side.", hiDesc: "मुट्ठी बंद करें और अंगूठे को हल्का सा हिलाएं।" },

    // --- 1. Emotions & Feelings (भावनाएँ) ---
    { id: 86, enTitle: "Emotion: Happy", hiTitle: "भावना: खुश", enCat: "Emotions", hiCat: "भावनाएँ", icon: "😊", enDesc: "Brush flat hand upward on your chest twice.", hiDesc: "चपटे हाथ को सीने पर ऊपर की ओर दो बार घुमाएं।" },
    { id: 87, enTitle: "Emotion: Sad", hiTitle: "भावना: उदास", enCat: "Emotions", hiCat: "भावनाएँ", icon: "😢", enDesc: "Move open hands downward past your face.", hiDesc: "खुले हाथों को चेहरे के सामने से नीचे की तरफ लाएं।" },
    { id: 88, enTitle: "Emotion: Angry", hiTitle: "भावना: गुस्सा", enCat: "Emotions", hiCat: "भावनाएँ", icon: "😡", enDesc: "Claw hands in front of face as if showing frustration.", hiDesc: "चेहरे के सामने उंगलियों को पंजे की तरह फैलाकर नाराजगी दिखाएं।" },
    { id: 89, enTitle: "Emotion: Confused", hiTitle: "भावना: भ्रमित", enCat: "Emotions", hiCat: "भावनाएँ", icon: "😕", enDesc: "Twist your hand near your forehead.", hiDesc: "माथे के पास हाथ को घुमाकर उलझन दर्शाएं।" },

    // --- 2. Family & Relations (रिश्ते) ---
    { id: 90, enTitle: "Family: Mother", hiTitle: "रिश्ता: माँ", enCat: "Family", hiCat: "रिश्ते", icon: "👩", enDesc: "Tap thumb of open hand gently on your chin.", hiDesc: "खुले हाथ के अंगूठे को अपनी ठोड़ी पर हल्के से स्पर्श करें।" },
    { id: 91, enTitle: "Family: Father", hiTitle: "रिश्ता: पिता", enCat: "Family", hiCat: "रिश्ते", icon: "👨", enDesc: "Tap thumb of open hand gently on your forehead.", hiDesc: "खुले हाथ के अंगूठे को अपने माथे पर हल्के से स्पर्श करें।" },
    { id: 92, enTitle: "Family: Teacher", hiTitle: "रिश्ता: शिक्षक", enCat: "Family", hiCat: "रिश्ते", icon: "🧑‍🏫", enDesc: "Bring both flat hands outward from temples like teaching gestures.", hiDesc: "दोनों हाथों को माथे के पास से आगे की ओर ले जाएं।" },

    // --- 3. Colors & Basics (रंग और बुनियादी शब्द) ---
    { id: 93, enTitle: "Color: Red", hiTitle: "रंग: लाल", enCat: "Colors", hiCat: "रंग", icon: "🔴", enDesc: "Stroke index finger down your lips once.", hiDesc: "तर्जनी उंगली को होठों पर एक बार नीचे की ओर फेरें।" },
    { id: 94, enTitle: "Color: Blue", hiTitle: "रंग: नीला", enCat: "Colors", hiCat: "रंग", icon: "🔵", enDesc: "Shake a 'B' hand shape slightly side to side.", hiDesc: "'B' आकार के हाथ को हल्का सा दाएं-बाएं हिलाएं।" },
    { id: 95, enTitle: "Basic: Yes", hiTitle: "बुनियादी: हाँ", enCat: "Daily Use", hiCat: "दैनिक उपयोग", icon: "✅", enDesc: "Make a fist and nod it up and down like a head nodding.", hiDesc: "मुट्ठी बंद करके सिर की तरह ऊपर-नीचे हिलाएं।" },
    { id: 96, enTitle: "Basic: No", hiTitle: "बुनियादी: नहीं", enCat: "Daily Use", hiCat: "दैनिक उपयोग", icon: "❌", enDesc: "Tap index and middle fingers against thumb.", hiDesc: "तर्जनी और मध्यमा को अंगूठे से आपस में मिलाएं।" },

    // --- Daily Classroom Commands & Needs ---
    { id: 97, enTitle: "Help", hiTitle: "मदद (Madad)", enCat: "Daily Use", hiCat: "दैनिक उपयोग", icon: "🤝", enDesc: "Place your fist with thumb up onto the palm of your other hand.", hiDesc: "एक हाथ की हथेली पर दूसरे हाथ की मुट्ठी (अंगूठा ऊपर) रखें।" },
    { id: 98, enTitle: "Water / Drink", hiTitle: "पानी / प्यास", enCat: "Daily Use", hiCat: "दैनिक उपयोग", icon: "💧", enDesc: "Tap chin twice with index and middle fingers shaped like 'W'.", hiDesc: "'W' आकार की उंगलियों से ठोड़ी को दो बार थपथपाएं।" },
    { id: 99, enTitle: "Restroom", hiTitle: "शौचालय", enCat: "Daily Use", hiCat: "दैनिक उपयोग", icon: "🚻", enDesc: "Form a 'T' with hands and shake gently.", hiDesc: "हाथों से 'T' का आकार बनाकर हल्का सा हिलाएं।" },
    { id: 100, enTitle: "Finish / Done", hiTitle: "समाप्त / हो गया", enCat: "Daily Use", hiCat: "दैनिक उपयोग", icon: "✨", enDesc: "Twist both hands outward palms facing chest.", hiDesc: "दोनों हाथों को बाहर की ओर घुमाएं।" },

    // --- Academics (Math & Science) ---
    { id: 101, enTitle: "Addition (+)", hiTitle: "जोड़ / गणित", enCat: "Academics", hiCat: "शैक्षणिक", icon: "➕", enDesc: "Cross your index fingers like a plus sign.", hiDesc: "अपनी तर्जनी उंगलियों को प्लस के निशान की तरह क्रॉस करें।" },
    { id: 102, enTitle: "Atom", hiTitle: "परमाणु (Atom)", enCat: "Academics", hiCat: "शैक्षणिक", icon: "⚛️", enDesc: "Draw a small circular motion with index finger representing orbits.", hiDesc: "हवा में तर्जनी उंगली से कक्षा को दर्शाने वाला गोलाकार चक्कर बनाएं।" },
    { id: 103, enTitle: "Photosynthesis", hiTitle: "प्रकाश संश्लेषण", enCat: "Academics", hiCat: "शैक्षणिक", icon: "🌱", enDesc: "Simulate plant growing upwards absorbing sunlight.", hiDesc: "हथेलियों को फैलाकर पौधे के ऊपर बढ़ने का अभिनय करें।" }
];

let currentLang = 'en';
let activeCategory = 'all';

const cardGrid = document.getElementById('cardGrid');
const searchInput = document.getElementById('searchInput');
const langToggleBtn = document.getElementById('langToggleBtn');
const openRequestModalBtn = document.getElementById('openRequestModalBtn');
const tabButtons = document.querySelectorAll('.tab-btn');

// Welcome Modal Elements
const welcomeModal = document.getElementById('welcomeModal');
const closeWelcome = document.getElementById('closeWelcome');
const gotItBtn = document.getElementById('gotItBtn');

const cardModal = document.getElementById('cardModal');
const closeModal = document.getElementById('closeModal');
const requestModal = document.getElementById('requestModal');
const closeRequestModal = document.getElementById('closeRequestModal');

const modalEmoji = document.getElementById('modalEmoji');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalDesc = document.getElementById('modalDesc');

function renderCards(data) {
    cardGrid.innerHTML = '';
    if (data.length === 0) {
        cardGrid.innerHTML = `<p style="grid-column: span 2; text-align: center; color: var(--text-secondary); padding: 20px;">No signs found.</p>`;
        return;
    }

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        
        const title = currentLang === 'en' ? item.enTitle : item.hiTitle;
        const category = currentLang === 'en' ? item.enCat : item.hiCat;
        const desc = currentLang === 'en' ? item.enDesc : item.hiDesc;

        card.innerHTML = `
            <div class="card-icon">${item.icon}</div>
            <h3>${title}</h3>
            <span>${category}</span>
        `;
        
        card.addEventListener('click', () => {
            modalEmoji.textContent = item.icon;
            modalTitle.textContent = title;
            modalCategory.textContent = category;
            modalDesc.textContent = desc;
            cardModal.style.display = 'flex';
        });

        cardGrid.appendChild(card);
    });
}

function filterAndRender() {
    const query = searchInput.value.toLowerCase();
    
    const filteredData = signData.filter(item => {
        const matchesCategory = (activeCategory === 'all' || item.enCat === activeCategory);
        const matchesSearch = (
            item.enTitle.toLowerCase().includes(query) || 
            item.hiTitle.toLowerCase().includes(query) || 
            item.enCat.toLowerCase().includes(query) || 
            item.hiCat.toLowerCase().includes(query)
        );
        return matchesCategory && matchesSearch;
    });

    renderCards(filteredData);
}

// Initial Render
filterAndRender();

// Welcome Modal Controls
closeWelcome.addEventListener('click', () => {
    welcomeModal.style.display = 'none';
});

gotItBtn.addEventListener('click', () => {
    welcomeModal.style.display = 'none';
});

// Tab Click Events
tabButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        tabButtons.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        activeCategory = e.target.getAttribute('data-cat');
        filterAndRender();
    });
});

// Language Toggle
langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'hi' : 'en';
    langToggleBtn.textContent = currentLang === 'en' ? 'HI / EN' : 'EN / HI';
    searchInput.placeholder = currentLang === 'en' ? "Search signs..." : "संकेत खोजें...";
    filterAndRender();
});

// Search Input Event
searchInput.addEventListener('input', () => {
    filterAndRender();
});

// Modal Controls
closeModal.addEventListener('click', () => cardModal.style.display = 'none');
closeRequestModal.addEventListener('click', () => requestModal.style.display = 'none');
openRequestModalBtn.addEventListener('click', () => requestModal.style.display = 'flex');

window.addEventListener('click', (e) => {
    if (e.target === cardModal) cardModal.style.display = 'none';
    if (e.target === requestModal) requestModal.style.display = 'none';
    if (e.target === welcomeModal) welcomeModal.style.display = 'none';
});
