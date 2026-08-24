// Mega Complete Sign Database: ISHAARE (With Educator Notes & Curriculum Tagging)
const signData = [
    // --- English Alphabets (A to Z) ---
    { 
        id: 1, enTitle: "Alphabet: A", hiTitle: "वर्णमाला: A", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "A", 
        enDesc: "Make a fist with thumb resting straight against the side of the index finger.", 
        hiDesc: "मुट्ठी बंद करें और अंगूठे को तर्जनी उंगली के साथ सीधा सटाकर रखें।",
        grade: "Foundation / Grade 1-2", educatorNote: "Essential for early letter recognition and finger dexterity." 
    },
    { 
        id: 2, enTitle: "Alphabet: B", hiTitle: "वर्णमाला: B", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "B", 
        enDesc: "Hold hand up palm facing forward, fingers straight together, thumb folded across palm.", 
        hiDesc: "हथेली आगे रखें, उंगलियां सीधी और साथ हों, अंगूठा हथेली के पार मुड़ा हो।",
        grade: "Foundation / Grade 1-2", educatorNote: "Helps children learn flat hand orientation and spatial alignment." 
    },
    { id: 3, enTitle: "Alphabet: C", hiTitle: "वर्णमाला: C", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "C", enDesc: "Curve your hand and fingers into the shape of the letter 'C'.", hiDesc: "हाथ और उंगलियों को 'C' के आकार में मोड़ें।", grade: "Foundation / Grade 1-2", educatorNote: "Encourages fine motor curving skills." },
    { id: 4, enTitle: "Alphabet: D", hiTitle: "वर्णमाला: D", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "D", enDesc: "Point index finger up, other fingers curl to touch the thumb forming a circle.", hiDesc: "तर्जनी ऊपर रखें, बाकी उंगलियां अंगूठा छूकर गोला बनाएं।", grade: "Foundation / Grade 1-2", educatorNote: "Focuses on isolated index finger movement." },
    { id: 5, enTitle: "Alphabet: E", hiTitle: "वर्णमाला: E", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "E", enDesc: "Curve all fingers down, thumb tucked underneath across the palm.", hiDesc: "सभी उंगलियां नीचे मोड़ें, अंगूठा हथेली के नीचे हो।", grade: "Foundation / Grade 1-2", educatorNote: "Great for finger flexibility exercises." },
    { id: 6, enTitle: "Alphabet: F", hiTitle: "वर्णमाला: F", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "F", enDesc: "Touch index finger tip to thumb tip, other three fingers extended straight up.", hiDesc: "तर्जनी का सिरा अंगूठे से मिलाएं, बाकी तीन उंगलियां सीधी ऊपर हों।", grade: "Foundation / Grade 1-2", educatorNote: "Practices precise pinch and touch coordination." },
    { id: 7, enTitle: "Alphabet: G", hiTitle: "वर्णमाला: G", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "G", enDesc: "Point index finger and thumb horizontally forward, parallel to each other.", hiDesc: "तर्जनी और अंगूठा सामने की ओर क्षैतिज रूप से सीधा रखें।", grade: "Primary / Grade 3", educatorNote: "Introduces horizontal directional alignment." },
    { id: 8, enTitle: "Alphabet: H", hiTitle: "वर्णमाला: H", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "H", enDesc: "Extend index and middle fingers horizontally together, other fingers folded.", hiDesc: "तर्जनी और मध्यमा को साथ में क्षैतिज रखें, बाकी उंगलियां मुड़ी हों।", grade: "Primary / Grade 3", educatorNote: "Teaches dual finger parallel coordination." },
    { id: 9, enTitle: "Alphabet: I", hiTitle: "वर्णमाला: I", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "I", enDesc: "Hold pinky finger straight up, make a fist with other fingers, thumb over them.", hiDesc: "कनिष्ठिका (छोटी उंगली) सीधी ऊपर रखें, बाकी मुट्ठी बंद हो।", grade: "Primary / Grade 3", educatorNote: "Targets isolated pinky finger control." },
    { id: 10, enTitle: "Alphabet: J", hiTitle: "वर्णमाला: J", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "J", enDesc: "Start with 'I' pinky gesture and trace a 'J' shape hook in the air.", hiDesc: "छोटी उंगली ऊपर रखकर हवा में 'J' का आकार बनाएं।", grade: "Primary / Grade 3", educatorNote: "Combines static posture with dynamic wrist motion." },
    { id: 11, enTitle: "Alphabet: K", hiTitle: "वर्णमाला: K", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "K", enDesc: "Hold index and middle fingers up in 'V', place thumb between them pointing forward.", hiDesc: "दो उंगलियां 'V' आकार में रखें, अंगूठा उनके बीच सामने हो।", grade: "Primary / Grade 3", educatorNote: "Complex inter-finger thumb placement practice." },
    { id: 12, enTitle: "Alphabet: L", hiTitle: "वर्णमाला: L", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "L", enDesc: "Extend index finger up and thumb out to the side forming a clear 'L' shape.", hiDesc: "तर्जनी ऊपर और अंगूठा साइड में करके 'L' का आकार बनाएं।", grade: "Foundation / Grade 1-2", educatorNote: "Fundamental right-angle hand geometry." },
    { id: 13, enTitle: "Alphabet: M", hiTitle: "वर्णमाला: M", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "M", enDesc: "Fold thumb under the first three fingers (index, middle, ring).", hiDesc: "अंगूठे को पहली तीन उंगलियों के नीचे दबाएं।", grade: "Primary / Grade 3", educatorNote: "Teaches multi-finger pressure distribution." },
    { id: 14, enTitle: "Alphabet: N", hiTitle: "वर्णमाला: N", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "N", enDesc: "Fold thumb under index and middle fingers only.", hiDesc: "अंगूठे को केवल तर्जनी और मध्यमा उंगली के नीचे दबाएं।", grade: "Primary / Grade 3", educatorNote: "Variation of finger tucking for vocabulary building." },
    { id: 15, enTitle: "Alphabet: O", hiTitle: "वर्णमाला: O", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "O", enDesc: "Curve all fingers and thumb to touch tips together forming an 'O' circle.", hiDesc: "सभी उंगलियों और अंगूठे के सिरों को मिलाकर 'O' का गोला बनाएं।", grade: "Foundation / Grade 1-2", educatorNote: "Improves circular hand closure and precision." },
    { id: 16, enTitle: "Alphabet: P", hiTitle: "वर्णमाला: P", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "P", enDesc: "Like 'K' sign but point the hand and thumb downward toward the ground.", hiDesc: "'K' की तरह हाथ रखें लेकिन उंगलियों और अंगूठे को नीचे ज़मीन की तरफ झुकाएं।", grade: "Primary / Grade 3", educatorNote: "Inverted spatial orientation practice." },
    { id: 17, enTitle: "Alphabet: Q", hiTitle: "वर्णमाला: Q", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "Q", enDesc: "Like 'G' sign but point index finger and thumb downward.", hiDesc: "'G' की तरह हाथ रखें लेकिन तर्जनी और अंगूठे को नीचे की ओर इंगित करें।", grade: "Primary / Grade 3", educatorNote: "Downward directional pointing exercise." },
    { id: 18, enTitle: "Alphabet: R", hiTitle: "वर्णमाला: R", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "R", enDesc: "Cross your index and middle fingers over each other like a wishbone.", hiDesc: "तर्जनी और मध्यमा उंगली को आपस में क्रॉस करें।", grade: "Middle / Grade 4-5", educatorNote: "Advanced finger crossing dexterity." },
    { id: 19, enTitle: "Alphabet: S", hiTitle: "वर्णमाला: S", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "S", enDesc: "Make a tight fist with your thumb wrapped across the front of your fingers.", hiDesc: "मुट्ठी बंद करें और अंगूठे को उंगलियों के आगे क्षैतिज रूप से रखें।", grade: "Foundation / Grade 1-2", educatorNote: "Standard fist formation test." },
    { id: 20, enTitle: "Alphabet: T", hiTitle: "वर्णमाला: T", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "T", enDesc: "Make a fist with the thumb tucked neatly underneath the index finger.", hiDesc: "मुट्ठी बंद करें और अंगूठे को तर्जनी के ठीक नीचे दबाएं।", grade: "Foundation / Grade 1-2", educatorNote: "Distinguishes 'S' and 'T' thumb positioning." },
    { id: 21, enTitle: "Alphabet: U", hiTitle: "वर्णमाला: U", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "U", enDesc: "Hold index and middle fingers straight up together side-by-side.", hiDesc: "तर्जनी और मध्यमा उंगली को एक साथ सीधा ऊपर रखें।", grade: "Foundation / Grade 1-2", educatorNote: "Teaches parallel vertical extension." },
    { id: 22, enTitle: "Alphabet: V", hiTitle: "वर्णमाला: V", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "V", enDesc: "Hold index and middle fingers up spread apart in a 'V' victory sign.", hiDesc: "तर्जनी और मध्यमा को फैलाकर 'V' (विक्ट्री) का निशान बनाएं।", grade: "Foundation / Grade 1-2", educatorNote: "Common universal sign for spatial spreading." },
    { id: 23, enTitle: "Alphabet: W", hiTitle: "वर्णमाला: W", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "W", enDesc: "Hold index, middle, and ring fingers up spread apart like a 'W'.", hiDesc: "तीन उंगलियों (तर्जनी, मध्यमा, अनामिका) को फैलाकर 'W' बनाएं।", grade: "Primary / Grade 3", educatorNote: "Three-finger independent separation practice." },
    { id: 24, enTitle: "Alphabet: X", hiTitle: "वर्णमाला: X", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "X", enDesc: "Curve your index finger like a small hook, other fingers in a loose fist.", hiDesc: "तर्जनी को हुक की तरह मोड़ें, बाकी उंगलियां ढीली मुट्ठी में हों।", grade: "Primary / Grade 3", educatorNote: "Single finger hook articulation." },
    { id: 25, enTitle: "Alphabet: Y", hiTitle: "वर्णमाला: Y", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "Y", enDesc: "Extend thumb and pinky finger out to the sides, other fingers folded.", hiDesc: "अंगूठा और कनिष्ठिका (छोटी उंगली) बाहर फैलाएं, बाकी मुड़ी हों।", grade: "Primary / Grade 3", educatorNote: "Opposing dual-digit extension." },
    { id: 26, enTitle: "Alphabet: Z", hiTitle: "वर्णमाला: Z", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "Z", enDesc: "Draw the zigzag shape of the letter 'Z' in the air with your index finger.", hiDesc: "तर्जनी उंगली से हवा में 'Z' का ज़िग-जैग आकार बनाएं।", grade: "Primary / Grade 3", educatorNote: "Dynamic air-tracing and pattern memory." },

    // --- Complete Hindi Varnmala (Swar & Vyanjan अ से ज्ञ) ---
    { id: 27, enTitle: "Hindi Swar: अ", hiTitle: "हिंदी स्वर: अ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "अ", enDesc: "Sign reference for foundational vowel sound 'A'.", hiDesc: "स्वर ध्वनि 'अ' के लिए पारंपरिक सांकेतिक मुद्रा।", grade: "Foundation / Grade 1", educatorNote: "Foundational phonics & visual sign introduction for Hindi learners." },
    { id: 28, enTitle: "Hindi Swar: आ", hiTitle: "हिंदी वर्णमाला: आ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "आ", enDesc: "Sign reference for extended vowel sound 'Aa'.", hiDesc: "दीर्घ स्वर ध्वनि 'आ' के लिए विस्तारित संकेत।", grade: "Foundation / Grade 1", educatorNote: "Teaches vowel elongation concepts." },
    { id: 29, enTitle: "Hindi Swar: इ", hiTitle: "हिंदी वर्णमाला: इ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "इ", enDesc: "Sign reference for vowel sound 'I'.", hiDesc: "स्वर ध्वनि 'इ' को दर्शाने के लिए संकेत।", grade: "Foundation / Grade 1", educatorNote: "Core regional language visual association." },
    { id: 30, enTitle: "Hindi Swar: ई", hiTitle: "हिंदी वर्णमाला: ई", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ई", enDesc: "Sign reference for long vowel sound 'Ee'.", hiDesc: "दीर्घ स्वर ध्वनि 'ई' के लिए संकेत।", grade: "Foundation / Grade 1", educatorNote: "Advanced vowel distinction." },
    { id: 31, enTitle: "Hindi Swar: उ", hiTitle: "हिंदी वर्णमाला: उ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "उ", enDesc: "Sign reference for vowel sound 'U'.", hiDesc: "स्वर ध्वनि 'उ' के लिए सांकेतिक मुद्रा।", grade: "Foundation / Grade 1", educatorNote: "Primary phonics integration." },
    { id: 32, enTitle: "Hindi Swar: ऊ", hiTitle: "हिंदी वर्णमाला: ऊ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ऊ", enDesc: "Sign reference for long vowel sound 'Oo'.", hiDesc: "दीर्घ स्वर ध्वनि 'ऊ' के लिए संकेत।", grade: "Primary / Grade 2", educatorNote: "Expanded vowel sign practice." },
    { id: 33, enTitle: "Hindi Swar: ऋ", hiTitle: "हिंदी वर्णमाला: ऋ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ऋ", enDesc: "Sign reference for vowel 'Ri'.", hiDesc: "स्वर 'ऋ' को दर्शाने के लिए संकेत।", grade: "Primary / Grade 2", educatorNote: "Special vowel sign representation." },
    { id: 34, enTitle: "Hindi Swar: ए", hiTitle: "हिंदी वर्णमाला: ए", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ए", enDesc: "Sign reference for vowel 'E'.", hiDesc: "स्वर 'ए' के लिए सांकेतिक मुद्रा।", grade: "Primary / Grade 2", educatorNote: "Standard phonetic training." },
    { id: 35, enTitle: "Hindi Swar: ऐ", hiTitle: "हिंदी वर्णमाला: ऐ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ऐ", enDesc: "Sign reference for vowel 'Ai'.", hiDesc: "स्वर 'ऐ' के लिए संकेत।", grade: "Primary / Grade 2", educatorNote: "Bilingual phonetic mapping." },
    { id: 36, enTitle: "Hindi Swar: ओ", hiTitle: "हिंदी वर्णमाला: ओ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ओ", enDesc: "Sign reference for vowel 'O'.", hiDesc: "स्वर 'ओ' के लिए सांकेतिक मुद्रा।", grade: "Primary / Grade 2", educatorNote: "Round vowel sound sign practice." },
    { id: 37, enTitle: "Hindi Swar: औ", hiTitle: "हिंदी वर्णमाला: औ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "औ", enDesc: "Sign reference for vowel 'Au'.", hiDesc: "स्वर 'औ' के लिए संकेत।", grade: "Primary / Grade 2", educatorNote: "Complex vowel sign reference." },
    { id: 38, enTitle: "Hindi Swar: अं", hiTitle: "हिंदी वर्णमाला: अं", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "अं", enDesc: "Sign reference for Anusvara 'Am'.", hiDesc: "अनुस्वार 'अं' के लिए संकेत।", grade: "Primary / Grade 3", educatorNote: "Nasal sound representation." },
    { id: 39, enTitle: "Hindi Swar: अः", hiTitle: "हिंदी वर्णमाला: अः", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "अः", enDesc: "Sign reference for Visarga 'Aha'.", hiDesc: "विसर्ग 'अः' के लिए संकेत।", grade: "Primary / Grade 3", educatorNote: "Visarga sound visualization." },

    { id: 40, enTitle: "Hindi Vyanjan: क", hiTitle: "हिंदी व्यंजन: क", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "क", enDesc: "Structured hand posture for consonant 'Ka'.", hiDesc: "व्यंजन 'क' को दर्शाने के लिए हथेली का संकेत।", grade: "Foundation / Grade 1-2", educatorNote: "Consonant sign foundation for Indian sign language modules." },
    { id: 41, enTitle: "Hindi Vyanjan: ख", hiTitle: "हिंदी व्यंजन: ख", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ख", enDesc: "Structured hand posture for consonant 'Kha'.", hiDesc: "व्यंजन 'ख' के लिए संकेत।", grade: "Foundation / Grade 1-2", educatorNote: "Consonant progression step 2." },
    { id: 42, enTitle: "Hindi Vyanjan: ग", hiTitle: "हिंदी व्यंजन: ग", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ग", enDesc: "Structured hand posture for consonant 'Ga'.", hiDesc: "व्यंजन 'ग' के लिए संकेत।", grade: "Foundation / Grade 1-2", educatorNote: "Consonant progression step 3." },
    { id: 43, enTitle: "Hindi Vyanjan: घ", hiTitle: "हिंदी व्यंजन: घ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "घ", enDesc: "Structured hand posture for consonant 'Gha'.", hiDesc: "व्यंजन 'घ' के लिए संकेत।", grade: "Primary / Grade 3", educatorNote: "Consonant progression step 4." },
    { id: 44, enTitle: "Hindi Vyanjan: ङ", hiTitle: "हिंदी व्यंजन: ङ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ङ", enDesc: "Structured hand posture for consonant 'Nga'.", hiDesc: "व्यंजन 'ङ' के लिए संकेत।", grade: "Primary / Grade 3", educatorNote: "Nasals sign training." },
    { id: 45, enTitle: "Hindi Vyanjan: च", hiTitle: "हिंदी व्यंजन: च", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "च", enDesc: "Structured hand posture for consonant 'Cha'.", hiDesc: "व्यंजन 'च' के लिए संकेत।", grade: "Foundation / Grade 1-2", educatorNote: "Ch-class consonant sign." },
    { id: 46, enTitle: "Hindi Vyanjan: छ", hiTitle: "हिंदी व्यंजन: छ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "छ", enDesc: "Structured hand posture for consonant 'Chha'.", hiDesc: "व्यंजन 'छ' के लिए संकेत।", grade: "Primary / Grade 3", educatorNote: "Chha consonant sign." },
    { id: 47, enTitle: "Hindi Vyanjan: ज", hiTitle: "हिंदी व्यंजन: ज", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ज", enDesc: "Structured hand posture for consonant 'Ja'.", hiDesc: "व्यंजन 'ज' के लिए संकेत।", grade: "Foundation / Grade 1-2", educatorNote: "Ja consonant sign." },
    { id: 48, enTitle: "Hindi Vyanjan: झ", hiTitle: "हिंदी व्यंजन: झ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "झ", enDesc: "Structured hand posture for consonant 'Jha'.", hiDesc: "व्यंजन 'झ' के लिए संकेत।", grade: "Primary / Grade 3", educatorNote: "Jha consonant sign." },
    { id: 49, enTitle: "Hindi Vyanjan: ञ", hiTitle: "हिंदी व्यंजन: ञ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ञ", enDesc: "Structured hand posture for consonant 'Nya'.", hiDesc: "व्यंजन 'ञ' के लिए संकेत।", grade: "Primary / Grade 3", educatorNote: "Nya consonant sign." },
    { id: 50, enTitle: "Hindi Vyanjan: ट", hiTitle: "हिंदी व्यंजन: ट", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ट", enDesc: "Structured hand posture for consonant 'Ta'.", hiDesc: "व्यंजन 'ट' के लिए संकेत।", grade: "Foundation / Grade 1-2", educatorNote: "Retroflex consonant series." },
    { id: 51, enTitle: "Hindi Vyanjan: ठ", hiTitle: "हिंदी व्यंजन: ठ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ठ", enDesc: "Structured hand posture for consonant 'Ttha'.", hiDesc: "व्यंजन 'ठ' के लिए संकेत।", grade: "Primary / Grade 3", educatorNote: "Ttha sign practice." },
    { id: 52, enTitle: "Hindi Vyanjan: ड", hiTitle: "हिंदी व्यंजन: ड", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ड", enDesc: "Structured hand posture for consonant 'Da'.", hiDesc: "व्यंजन 'ड' के लिए संकेत।", grade: "Foundation / Grade 1-2", educatorNote: "Da sign practice." },
    { id: 53, enTitle: "Hindi Vyanjan: ढ", hiTitle: "हिंदी व्यंजन: ढ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ढ", enDesc: "Structured hand posture for consonant 'Dha'.", hiDesc: "व्यंजन 'ढ' के लिए संकेत।", grade: "Primary / Grade 3", educatorNote: "Dha retroflex sign." },
    { id: 54, enTitle: "Hindi Vyanjan: ण", hiTitle: "हिंदी व्यंजन: ण", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ण", enDesc: "Structured hand posture for consonant 'Na'.", hiDesc: "व्यंजन 'ण' के लिए संकेत।", grade: "Primary / Grade 3", educatorNote: "Na retroflex sign." },
    { id: 55, enTitle: "Hindi Vyanjan: त", hiTitle: "हिंदी व्यंजन: त", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "त", enDesc: "Structured hand posture for consonant 'Ta'.", hiDesc: "व्यंजन 'त' के लिए संकेत।", grade: "Foundation / Grade 1-2", educatorNote: "Dental consonant series." },
    { id: 56, enTitle: "Hindi Vyanjan: थ", hiTitle: "हिंदी व्यंजन: थ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "थ", enDesc: "Structured hand posture for consonant 'Tha'.", hiDesc: "व्यंजन 'थ' के लिए संकेत।", grade: "Primary / Grade 3", educatorNote: "Tha dental sign." },
    { id: 57, enTitle: "Hindi Vyanjan: द", hiTitle: "हिंदी व्यंजन: द", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "द", enDesc: "Structured hand posture for consonant 'Da'.", hiDesc: "व्यंजन 'द' के लिए संकेत।", grade: "Foundation / Grade 1-2", educatorNote: "Da dental sign." },
    { id: 58, enTitle: "Hindi Vyanjan: ध", hiTitle: "हिंदी व्यंजन: ध", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ध", enDesc: "Structured hand posture for consonant 'Dha'.", hiDesc: "व्यंजन 'ध' के लिए संकेत।", grade: "Primary / Grade 3", educatorNote: "Dha dental sign." },
    { id: 59, enTitle: "Hindi Vyanjan: न", hiTitle: "हिंदी व्यंजन: न", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "न", enDesc: "Structured hand posture for consonant 'Na'.", hiDesc: "व्यंजन 'न' के लिए संकेत।", grade: "Foundation / Grade 1-2", educatorNote: "Na dental sign." },
    { id: 60, enTitle: "Hindi Vyanjan: प", hiTitle: "हिंदी व्यंजन: प", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "प", enDesc: "Structured hand posture for consonant 'Pa'.", hiDesc: "व्यंजन 'प' के लिए संकेत।", grade: "Foundation / Grade 1-2", educatorNote: "Labial consonant series." },
    { id: 61, enTitle: "Hindi Vyanjan: फ", hiTitle: "हिंदी व्यंजन: फ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "फ", enDesc: "Structured hand posture for consonant 'Pha'.", hiDesc: "व्यंजन 'फ' के लिए संकेत।", grade: "Primary / Grade 3", educatorNote: "Pha labial sign." },
    { id: 62, enTitle: "Hindi Vyanjan: ब", hiTitle: "हिंदी व्यंजन: ब", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ब", enDesc: "Structured hand posture for consonant 'Ba'.", hiDesc: "व्यंजन 'ब' के लिए संकेत।", grade: "Foundation / Grade 1-2", educatorNote: "Ba labial sign." },
    { id: 63, enTitle: "Hindi Vyanjan: भ", hiTitle: "हिंदी व्यंजन: भ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "भ", enDesc: "Structured hand posture for consonant 'Bha'.", hiDesc: "व्यंजन 'भ' के लिए संकेत।", grade: "Primary / Grade 3", educatorNote: "Bha labial sign." },
    { id: 64, enTitle: "Hindi Vyanjan: म", hiTitle: "हिंदी व्यंजन: म", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "म", enDesc: "Structured hand posture for consonant 'Ma'.", hiDesc: "व्यंजन 'म' के लिए संकेत।", grade: "Foundation / Grade 1-2", educatorNote: "Ma labial sign." },
    { id: 65, enTitle: "Hindi Vyanjan: य", hiTitle: "हिंदी व्यंजन: य", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "य", enDesc: "Structured hand posture for consonant 'Ya'.", hiDesc: "व्यंजन 'य' के लिए संकेत।", grade: "Primary / Grade 3", educatorNote: "Semi-vowel sign series." },
    { id: 66, enTitle: "Hindi Vyanjan: र", hiTitle: "हिंदी व्यंजन: र", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "र", enDesc: "Structured hand posture for consonant 'Ra'.", hiDesc: "व्यंजन 'र' के लिए संकेत।", grade: "Foundation / Grade 1-2", educatorNote: "Ra liquid consonant." },
    { id: 67, enTitle: "Hindi Vyanjan: ल", hiTitle: "हिंदी व्यंजन: ल", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ल", enDesc: "Structured hand posture for consonant 'La'.", hiDesc: "व्यंजन 'ल' के लिए संकेत।", grade: "Foundation / Grade 1-2", educatorNote: "La liquid consonant." },
    { id: 68, enTitle: "Hindi Vyanjan: व", hiTitle: "हिंदी व्यंजन: व", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "व", enDesc: "Structured hand posture for consonant 'Va'.", hiDesc: "व्यंजन 'व' के लिए संकेत।", grade: "Primary / Grade 3", educatorNote: "Va semi-vowel sign." },
    { id: 69, enTitle: "Hindi Vyanjan: श", hiTitle: "हिंदी व्यंजन: श", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "श", enDesc: "Structured hand posture for consonant 'Sha'.", hiDesc: "व्यंजन 'श' के लिए संकेत।", grade: "Primary / Grade 3", educatorNote: "Sibilant sign series." },
    { id: 70, enTitle: "Hindi Vyanjan: ष", hiTitle: "हिंदी व्यंजन: ष", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ष", enDesc: "Structured hand posture for consonant 'Shha'.", hiDesc: "व्यंजन 'ष' के लिए संकेत।", grade: "Primary / Grade 3", educatorNote: "Retroflex sibilant sign." },
    { id: 71, enTitle: "Hindi Vyanjan: स", hiTitle: "हिंदी व्यंजन: स", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "स", enDesc: "Structured hand posture for consonant 'Sa'.", hiDesc: "व्यंजन 'स' के लिए संकेत।", grade: "Foundation / Grade 1-2", educatorNote: "Dental sibilant sign." },
    { id: 72, enTitle: "Hindi Vyanjan: ह", hiTitle: "हिंदी व्यंजन: ह", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ह", enDesc: "Structured hand posture for consonant 'Ha'.", hiDesc: "व्यंजन 'ह' के लिए संकेत।", grade: "Foundation / Grade 1-2", educatorNote: "Glottal fricative sign." },
    { id: 73, enTitle: "Hindi Vyanjan: क्ष", hiTitle: "हिंदी व्यंजन: क्ष", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "क्ष", enDesc: "Structured hand posture for consonant 'Ksha'.", hiDesc: "व्यंजन 'क्ष' के लिए संकेत।", grade: "Middle / Grade 4-5", educatorNote: "Compound consonant sign." },
    { id: 74, enTitle: "Hindi Vyanjan: त्र", hiTitle: "हिंदी व्यंजन: त्र", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "त्र", enDesc: "Structured hand posture for consonant 'Tra'.", hiDesc: "व्यंजन 'त्र' के लिए संकेत।", grade: "Middle / Grade 4-5", educatorNote: "Compound consonant sign." },
    { id: 75, enTitle: "Hindi Vyanjan: ज्ञ", hiTitle: "हिंदी व्यंजन: ज्ञ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ज्ञ", enDesc: "Structured hand posture for consonant 'Gya'.", hiDesc: "व्यंजन 'ज्ञ' के लिए संकेत।", grade: "Middle / Grade 4-5", educatorNote: "Compound consonant sign." },

    // --- Number Counting (1 to 10) ---
    { id: 76, enTitle: "Number: 1", hiTitle: "गिनती: 1", enCat: "Counting", hiCat: "गिनती", icon: "1️⃣", enDesc: "Index finger pointing straight up.", hiDesc: "तर्जनी उंगली सीधे ऊपर।", grade: "Foundation / Grade 1", educatorNote: "Basic mathematical numerical sign introductory level." },
    { id: 77, enTitle: "Number: 2", hiTitle: "गिनती: 2", enCat: "Counting", hiCat: "गिनती", icon: "2️⃣", enDesc: "Index and middle fingers up in 'V'.", hiDesc: "तर्जनी और मध्यमा 'V' आकार में।", grade: "Foundation / Grade 1", educatorNote: "Early numeracy concept." },
    { id: 78, enTitle: "Number: 3", hiTitle: "गिनती: 3", enCat: "Counting", hiCat: "गिनती", icon: "3️⃣", enDesc: "Thumb, index, and middle fingers extended.", hiDesc: "अंगूठा, तर्जनी और मध्यमा खुली हों।", grade: "Foundation / Grade 1", educatorNote: "Tri-digit counting practice." },
    { id: 79, enTitle: "Number: 4", hiTitle: "गिनती: 4", enCat: "Counting", hiCat: "गिनती", icon: "4️⃣", enDesc: "Four fingers up, thumb folded across palm.", hiDesc: "चारों उंगलियां ऊपर, अंगूठा हथेली पर।", grade: "Foundation / Grade 1", educatorNote: "Quad-digit number representation." },
    { id: 80, enTitle: "Number: 5", hiTitle: "गिनती: 5", enCat: "Counting", hiCat: "गिनती", icon: "5️⃣", enDesc: "All five fingers open and spread out.", hiDesc: "पांचों उंगलियां खुली और फैली हुई।", grade: "Foundation / Grade 1", educatorNote: "Full palm open sign." },
    { id: 81, enTitle: "Number: 6", hiTitle: "गिनती: 6", enCat: "Counting", hiCat: "गिनती", icon: "6️⃣", enDesc: "Thumb touching pinky tip, three fingers up.", hiDesc: "अंगूठा छोटी उंगली के सिरे को छुए, तीन उंगलियां ऊपर।", grade: "Primary / Grade 2", educatorNote: "Advanced number coordination." },
    { id: 82, enTitle: "Number: 7", hiTitle: "गिनती: 7", enCat: "Counting", hiCat: "गिनती", icon: "7️⃣", enDesc: "Thumb touching ring finger tip.", hiDesc: "अंगूठा अनामिका (रिंग फिंगर) के सिरे को छुए।", grade: "Primary / Grade 2", educatorNote: "Ring finger precision count." },
    { id: 83, enTitle: "Number: 8", hiTitle: "गिनती: 8", enCat: "Counting", hiCat: "गिनती", icon: "8️⃣", enDesc: "Thumb touching middle finger tip.", hiDesc: "अंगूठा मध्यमा उंगली के सिरे को छुए।", grade: "Primary / Grade 2", educatorNote: "Middle finger precision count." },
    { id: 84, enTitle: "Number: 9", hiTitle: "गिनती: 9", enCat: "Counting", hiCat: "गिनती", icon: "9️⃣", enDesc: "Thumb touching index finger tip.", hiDesc: "अंगूठा तर्जनी उंगली के सिरे को छुए।", grade: "Primary / Grade 2", educatorNote: "Index finger precision count." },
    { id: 85, enTitle: "Number: 10", hiTitle: "गिनती: 10", enCat: "Counting", hiCat: "गिनती", icon: "🔟", enDesc: "Make a fist and shake thumb slightly side to side.", hiDesc: "मुट्ठी बंद करें और अंगूठे को हल्का सा हिलाएं।", grade: "Primary / Grade 2", educatorNote: "Double digit transition sign." },

    // --- Daily Classroom Commands & Needs ---
    { id: 86, enTitle: "Help", hiTitle: "मदद (Madad)", enCat: "Daily Use", hiCat: "दैनिक उपयोग", icon: "🤝", enDesc: "Place your fist with thumb up onto the palm of your other hand.", hiDesc: "एक हाथ की हथेली पर दूसरे हाथ की मुट्ठी (अंगूठा ऊपर) रखें।", grade: "Foundation / All Grades", educatorNote: "Crucial classroom survival sign for seeking assistance." },
    { id: 87, enTitle: "Water / Drink", hiTitle: "पानी / प्यास", enCat: "Daily Use", hiCat: "दैनिक उपयोग", icon: "💧", enDesc: "Tap chin twice with index and middle fingers shaped like 'W'.", hiDesc: "'W' आकार की उंगलियों से ठोड़ी को दो बार थपथपाएं।", grade: "Foundation / All Grades", educatorNote: "Essential daily hydration need sign." },
    { id: 88, enTitle: "Restroom", hiTitle: "शौचालय", enCat: "Daily Use", hiCat: "दैनिक उपयोग", icon: "🚻", enDesc: "Form a 'T' with hands and shake gently.", hiDesc: "हाथों से 'T' का आकार बनाकर हल्का सा हिलाएं।", grade: "Foundation / All Grades", educatorNote: "Essential personal care classroom sign." },
    { id: 89, enTitle: "Finish / Done", hiTitle: "समाप्त / हो गया", enCat: "Daily Use", hiCat: "दैनिक उपयोग", icon: "✨", enDesc: "Twist both hands outward palms facing chest.", hiDesc: "दोनों हाथों को बाहर की ओर घुमाएं।", grade: "Primary / All Grades", educatorNote: "Task completion acknowledgment." },

    // --- Emotions & Family ---
    { id: 90, enTitle: "Happy", hiTitle: "खुश", enCat: "Emotions & Desires", hiCat: "भावनाएं व इच्छाएं", icon: "😊", enDesc: "Brush open hands upward on your chest repeatedly.", hiDesc: "सीने पर खुले हाथों को ऊपर की ओर उठाएं।", grade: "Foundation / Grade 1", educatorNote: "Helps children express positive emotional states." },
    { id: 91, enTitle: "Sad", hiTitle: "दुखी", enCat: "Emotions & Desires", hiCat: "भावनाएं व इच्छाएं", icon: "😢", enDesc: "Trace hands downward in front of your face with a sad expression.", hiDesc: "उदास चेहरे के साथ हाथों को चेहरे के सामने नीचे की ओर लाएं।", grade: "Foundation / Grade 1", educatorNote: "Emotional expression and empathy building." },
    { id: 92, enTitle: "Angry", hiTitle: "गुस्सा", enCat: "Emotions & Desires", hiCat: "भावनाएं व इच्छाएं", icon: "😡", enDesc: "Clench hands like claws and pull them away from your face.", hiDesc: "हाथों को पंजे की तरह बंद करके चेहरे के सामने से खींचें।", grade: "Primary / Grade 2", educatorNote: "Helps children communicate frustration constructively." },
    { id: 93, enTitle: "Mother / Mom", hiTitle: "माँ", enCat: "Emotions & Desires", hiCat: "भावनाएं व परिवार", icon: "👩", enDesc: "Tap thumb of open hand against your chin.", hiDesc: "खुले हाथ के अंगूठे को ठोड़ी पर स्पर्श करें।", grade: "Foundation / Grade 1", educatorNote: "Core family vocabulary." },
    { id: 94, enTitle: "Father / Dad", hiTitle: "पिता", enCat: "Emotions & Desires", hiCat: "भावनाएं व परिवार", icon: "👨", enDesc: "Tap thumb of open hand against your forehead.", hiDesc: "खुले हाथ के अंगूठे को माथे पर स्पर्श करें।", grade: "Foundation / Grade 1", educatorNote: "Core family vocabulary." },
    { id: 95, enTitle: "Brother", hiTitle: "भाई", enCat: "Emotions & Desires", hiCat: "भावनाएं व परिवार", icon: "👦", enDesc: "Bring index fingers together from forehead pointing forward.", hiDesc: "माथे से तर्जनी उंगलियों को आगे की ओर लाएं।", grade: "Primary / Grade 2", educatorNote: "Extended family sign relationship." },
    { id: 96, enTitle: "Sister", hiTitle: "बहन", enCat: "Emotions & Desires", hiCat: "भावनाएं व परिवार", icon: "👧", enDesc: "Slide thumb of one hand down the index finger of the other hand.", hiDesc: "एक हाथ के अंगूठे को दूसरे हाथ की तर्जनी उंगली पर नीचे लाएं।", grade: "Primary / Grade 2", educatorNote: "Extended family sign relationship." },
    { id: 97, enTitle: "Friend", hiTitle: "दोस्त", enCat: "Emotions & Desires", hiCat: "भावनाएं व परिवार", icon: "🤝", enDesc: "Hook index fingers together back and forth.", hiDesc: "दोनों हाथों की तर्जनी उंगलियों को आपस में हुक करें।", grade: "Primary / Grade 2", educatorNote: "Social interaction and peer bonding sign." },

    // --- Colors ---
    { id: 98, enTitle: "Red", hiTitle: "लाल", enCat: "Colors", hiCat: "रंग", icon: "🔴", enDesc: "Draw index finger down from lips twice.", hiDesc: "तर्जनी उंगली को होंठों से नीचे की ओर दो बार चलाएं।", grade: "Foundation / Grade 1", educatorNote: "Primary color identification sign." },
    { id: 99, enTitle: "Blue", hiTitle: "नीला", enCat: "Colors", hiCat: "रंग", icon: "🔵", enDesc: "Shake a 'B' handshape slightly back and forth.", hiDesc: "हाथ को 'B' आकार में रखकर हल्का सा हवा में हिलाएं।", grade: "Foundation / Grade 1", educatorNote: "Primary color identification sign." },
    { id: 100, enTitle: "Green", hiTitle: "हरा", enCat: "Colors", hiCat: "रंग", icon: "🟢", enDesc: "Shake a 'G' handshape slightly back and forth.", hiDesc: "हाथ को 'G' आकार में रखकर हल्का सा हिलाएं।", grade: "Foundation / Grade 1", educatorNote: "Primary color identification sign." },
    { id: 101, enTitle: "Yellow", hiTitle: "पीला", enCat: "Colors", hiCat: "रंग", icon: "🟡", enDesc: "Twist a 'Y' handshape back and forth near the side.", hiDesc: "हाथ को 'Y' आकार में रखकर कलाई को घुमाएं।", grade: "Foundation / Grade 1", educatorNote: "Primary color identification sign." },

    // --- Pronouns ---
    { id: 102, enTitle: "Me / I", hiTitle: "मैं / मुझे", enCat: "Pronouns", hiCat: "सर्वनाम", icon: "🙋‍♂️", enDesc: "Point your index finger directly at your own chest.", hiDesc: "तर्जनी उंगली से सीधे अपने सीने की ओर इशारा करें।", grade: "Foundation / Grade 1", educatorNote: "Foundational self-reference pronoun." },
    { id: 103, enTitle: "You", hiTitle: "तुम / आप", enCat: "Pronouns", hiCat: "सर्वनाम", icon: "🫵", enDesc: "Point your index finger forward toward the other person.", hiDesc: "तर्जनी उंगली से सामने वाले व्यक्ति की ओर इशारा करें।", grade: "Foundation / Grade 1", educatorNote: "Direct second-person reference." },
    { id: 104, enTitle: "He / She / It", hiTitle: "वह / यह", enCat: "Pronouns", hiCat: "सर्वनाम", icon: "👉", enDesc: "Point your index finger toward the side or someone else.", hiDesc: "तर्जनी उंगली से साइड में या किसी अन्य व्यक्ति की ओर इशारा करें।", grade: "Primary / Grade 2", educatorNote: "Third-person spatial reference." },
    { id: 105, enTitle: "We / Us", hiTitle: "हम", enCat: "Pronouns", hiCat: "सर्वनाम", icon: "👥", enDesc: "Point index finger to your right shoulder, then sweep across to your left shoulder.", hiDesc: "तर्जनी से अपने दाहिने कंधे से बाएं कंधे की तरफ अर्धवृत्त बनाएं।", grade: "Primary / Grade 2", educatorNote: "Inclusive plural pronoun." },
    { id: 106, enTitle: "They / Them", hiTitle: "वे / उन्हें", enCat: "Pronouns", hiCat: "सर्वनाम", icon: "👉👥", enDesc: "Point index finger and sweep it in an arc toward a group of people.", hiDesc: "तर्जनी उंगली से लोगों के समूह की ओर घुमावदार इशारा करें।", grade: "Primary / Grade 2", educatorNote: "Group plural pronoun." },

    // --- Greetings & Polite Phrases ---
    { id: 107, enTitle: "Hello", hiTitle: "नमस्ते / हैलो", enCat: "Greetings", hiCat: "अभिवादन", icon: "👋", enDesc: "Raise your hand near your head and wave it side to side.", hiDesc: "सिर के पास हाथ उठाकर बाएं-दाएं हिलाएं।", grade: "Foundation / All Grades", educatorNote: "Universal social greeting sign." },
    { id: 108, enTitle: "Goodbye", hiTitle: "अलविदा / बाय", enCat: "Greetings", hiCat: "अभिवादन", icon: "🙋", enDesc: "Raise hand and open/close fingers repeatedly as a waving gesture.", hiDesc: "हाथ उठाकर उंगलियों को बार-बार खोलें और बंद करें।", grade: "Foundation / All Grades", educatorNote: "Universal social departure sign." },
    { id: 109, enTitle: "Nice to meet you", hiTitle: "आपसे मिलकर खुशी हुई", enCat: "Greetings", hiCat: "अभिवादन", icon: "🤝", enDesc: "Slide flat dominant hand across the palm of the non-dominant hand, then point to person.", hiDesc: "एक हाथ की हथेली पर दूसरे हाथ को चलाएं और सामने वाले की तरफ इशारा करें।", grade: "Primary / Grade 2", educatorNote: "Social etiquette and conversational courtesy." },
    { id: 110, enTitle: "Thank You", hiTitle: "धन्यवाद", enCat: "Greetings", hiCat: "अभिवादन", icon: "🙏", enDesc: "Touch fingertips to chin and move hand outward.", hiDesc: "उंगलियों के सिरों को ठोड़ी से छूकर हाथ को सामने की ओर लाएं।", grade: "Foundation / All Grades", educatorNote: "Core polite classroom expression." },
    { id: 111, enTitle: "Please", hiTitle: "कृपया", enCat: "Greetings", hiCat: "अभिवादन", icon: "🤲", enDesc: "Rub flat hand in a circular motion on your chest.", hiDesc: "चपटे हाथ को सीने पर गोलाकार घुमाएं।", grade: "Foundation / All Grades", educatorNote: "Core polite classroom expression." },
    { id: 112, enTitle: "Sorry", hiTitle: "माफ़ कीजिए", enCat: "Greetings", hiCat: "अभिवादन", icon: "🙇", enDesc: "Make a fist and rub it in a circular motion on your chest.", hiDesc: "मुट्ठी बंद करके सीने पर गोलाकार घुमाएं।", grade: "Foundation / All Grades", educatorNote: "Accountability and emotional regulation sign." },

    // --- Questions & Conversational ---
    { id: 113, enTitle: "What", hiTitle: "क्या", enCat: "Questions", hiCat: "प्रश्न व बातचीत", icon: "❓", enDesc: "Hold both open hands palms up and shake them slightly side to side with a questioning look.", hiDesc: "दोनों खुले हाथों को ऊपर की ओर रखकर हल्का सा हवा में हिलाएं।", grade: "Primary / Grade 2", educatorNote: "Fundamental interrogative sign." },
    { id: 114, enTitle: "Where", hiTitle: "कहाँ", enCat: "Questions", hiCat: "प्रश्न व बातचीत", icon: "📍", enDesc: "Point index finger up and shake it back and forth horizontally.", hiDesc: "तर्जनी उंगली को ऊपर रखकर क्षैतिज रूप से आ-जा कर हिलाएं।", grade: "Primary / Grade 2", educatorNote: "Spatial interrogative sign." },
    { id: 115, enTitle: "Who", hiTitle: "कौन", enCat: "Questions", hiCat: "प्रश्न व बातचीत", icon: "👤", enDesc: "Trace a small circle around your mouth with the tip of your index finger.", hiDesc: "तर्जनी उंगली के सिरे से मुंह के चारों ओर छोटा गोला बनाएं।", grade: "Primary / Grade 2", educatorNote: "Person identification interrogative sign." },
    { id: 116, enTitle: "How are you?", hiTitle: "आप कैसे हैं?", enCat: "Questions", hiCat: "प्रश्न व बातचीत", icon: "🤝", enDesc: "Place both flat hands against your chest, roll them outward and forward.", hiDesc: "दोनों चपटे हाथों को सीने पर रखकर आगे की ओर घुमाएं।", grade: "Primary / Grade 2", educatorNote: "Standard conversational wellness check." },
    { id: 117, enTitle: "Do you need help?", hiTitle: "क्या आपको मदद चाहिए?", enCat: "Questions", hiCat: "प्रश्न व बातचीत", icon: "🙋‍♂️", enDesc: "Sign 'You', then make the 'Help' sign with a questioning facial expression.", hiDesc: "'आप' का इशारा करें, फिर चेहरे पर सवालिया भाव के साथ 'मदद' का संकेत दें।", grade: "Primary / Grade 2", educatorNote: "Supportive inclusive interaction sign." },

    // --- Emotions, Expressions & Desires ---
    { id: 118, enTitle: "I Love You", hiTitle: "मैं तुमसे प्यार करता हूँ", enCat: "Emotions & Desires", hiCat: "भावनाएं व इच्छाएं", icon: "🤟", enDesc: "Extend thumb, index finger, and pinky finger out together (ASL sign for ILY).", hiDesc: "अंगूठा, तर्जनी और छोटी उंगली को एक साथ बाहर फैलाएं।", grade: "Foundation / All Grades", educatorNote: "Popular positive affection sign." },
    { id: 119, enTitle: "Love", hiTitle: "प्यार / प्रेम", enCat: "Emotions & Desires", hiCat: "भावनाएं व इच्छाएं", icon: "❤️", enDesc: "Cross both arms tightly across your chest over your heart.", hiDesc: "दोनों हाथों को सीने पर दिल के पास क्रॉस करके रखें।", grade: "Foundation / Grade 1", educatorNote: "Affection and emotional warmth sign." },
    { id: 120, enTitle: "Like", hiTitle: "पसंद करना", enCat: "Emotions & Desires", hiCat: "भावनाएं व इच्छाएं", icon: "👍", enDesc: "Pull thumb and middle finger away from your chest while extending other fingers.", hiDesc: "अंगूठा और मध्यमा उंगली को सीने से आगे की ओर खींचें।", grade: "Foundation / Grade 1", educatorNote: "Preference expression sign." },
    { id: 121, enTitle: "Want", hiTitle: "चाहना", enCat: "Emotions & Desires", hiCat: "भावनाएं व इच्छाएं", icon: "🤲", enDesc: "Hold both clawed hands out and pull them inward toward your body.", hiDesc: "दोनों हाथों को पंजों की तरह आगे रखकर अपनी ओर खींचें।", grade: "Foundation / Grade 1", educatorNote: "Desire and need communication sign." },
    { id: 122, enTitle: "Need", hiTitle: "जरूरत है", enCat: "Emotions & Desires", hiCat: "भावनाएं व इच्छाएं", icon: "❗", enDesc: "Bend your index finger like a hook and press it downward slightly.", hiDesc: "तर्जनी उंगली को हुक की तरह मोड़कर नीचे की ओर हल्का सा दबाएं।", grade: "Foundation / Grade 1", educatorNote: "Essential requirement expression." },

    // --- Academics (Math & Science) ---
    { 
        id: 123, enTitle: "Addition (+)", hiTitle: "जोड़ / गणित", enCat: "Academics", hiCat: "शैक्षणिक", icon: "➕", 
        enDesc: "Cross your index fingers like a plus sign.", 
        hiDesc: "अपनी तर्जनी उंगलियों को प्लस के निशान की तरह क्रॉस करें।",
        grade: "Primary / Grade 3", educatorNote: "Great for early math concepts in inclusive mathematics classes." 
    },
    { 
        id: 124, enTitle: "Atom", hiTitle: "परमाणु (Atom)", enCat: "Academics", hiCat: "शैक्षणिक", icon: "⚛️", 
        enDesc: "Draw a small circular motion with index finger representing orbits.", 
        hiDesc: "हवा में तर्जनी उंगली से कक्षा को दर्शाने वाला गोलाकार चक्कर बनाएं।",
        grade: "Middle / Grade 6-8", educatorNote: "Visual science concept reference for upper primary students." 
    },
    { 
        id: 125, enTitle: "Photosynthesis", hiTitle: "प्रकाश संश्लेषण", enCat: "Academics", hiCat: "शैक्षणिक", icon: "🌱", 
        enDesc: "Simulate plant growing upwards absorbing sunlight.", 
        hiDesc: "हथेलियों को फैलाकर पौधे के ऊपर बढ़ने का अभिनय करें।",
        grade: "Middle / Grade 6-8", educatorNote: "Interactive biology concept demonstration for science educators." 
    }
];

let currentLang = 'en';
let activeCategory = 'all';

const cardGrid = document.getElementById('cardGrid');
const searchInput = document.getElementById('searchInput');
const langToggleBtn = document.getElementById('langToggleBtn');
const openRequestModalBtn = document.getElementById('openRequestModalBtn');
const tabButtons = document.querySelectorAll('.tab-btn');

// Modals & Elements
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
const educatorNoteBox = document.getElementById('educatorNoteBox');

function renderCards(data) {
    if (!cardGrid) return;
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
            
            // Inject Educator Notes & Curriculum Grade Level
            if (item.grade && item.educatorNote) {
                educatorNoteBox.style.display = 'block';
                educatorNoteBox.innerHTML = `
                    <p><strong>🎯 Curriculum / Grade:</strong> ${item.grade}</p>
                    <p><strong>💡 Educator Note:</strong> ${item.educatorNote}</p>
                `;
            } else {
                educatorNoteBox.style.display = 'none';
            }

            cardModal.style.display = 'flex';
        });

        cardGrid.appendChild(card);
    });
}

function filterAndRender() {
    const query = searchInput ? searchInput.value.toLowerCase() : '';
    
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

// Initial Render on Load
document.addEventListener('DOMContentLoaded', () => {
    filterAndRender();
});

// Welcome Modal Controls
if (closeWelcome) {
    closeWelcome.addEventListener('click', () => {
        welcomeModal.style.display = 'none';
    });
}

if (gotItBtn) {
    gotItBtn.addEventListener('click', () => {
        welcomeModal.style.display = 'none';
    });
}

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
if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'hi' : 'en';
        langToggleBtn.textContent = currentLang === 'en' ? 'HI / EN' : 'EN / HI';
        if (searchInput) {
            searchInput.placeholder = currentLang === 'en' ? "Search signs..." : "संकेत खोजें...";
        }
        filterAndRender();
    });
}

// Search Input Event
if (searchInput) {
    searchInput.addEventListener('input', () => {
        filterAndRender();
    });
}

// Modal Controls
if (closeModal) closeModal.addEventListener('click', () => cardModal.style.display = 'none');
if (closeRequestModal) closeRequestModal.addEventListener('click', () => requestModal.style.display = 'none');
if (openRequestModalBtn) openRequestModalBtn.addEventListener('click', () => requestModal.style.display = 'flex');

window.addEventListener('click', (e) => {
    if (e.target === cardModal) cardModal.style.display = 'none';
    if (e.target === requestModal) requestModal.style.display = 'none';
    if (e.target === welcomeModal) welcomeModal.style.display = 'none';
});
