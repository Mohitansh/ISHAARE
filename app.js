// Mega Complete Sign Database: ISHAARE (Bilingual with Educator Notes & Curriculum Tagging)
const signData = [
    // --- English Alphabets (A to Z) ---
    { 
        id: 1, enTitle: "Alphabet: A", hiTitle: "वर्णमाला: A", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "A", 
        enDesc: "Make a fist with thumb resting straight against the side of the index finger.", 
        hiDesc: "मुट्ठी बंद करें और अंगूठे को तर्जनी उंगली के साथ सीधा सटाकर रखें।",
        grade: "Foundation / Grade 1-2", hiGrade: "फाउंडेशन / कक्षा 1-2",
        educatorNote: "Essential for early letter recognition and finger dexterity.", hiEducatorNote: "प्रारंभिक अक्षर पहचान और उंगलियों के लचीलेपन के लिए आवश्यक है।"
    },
    { 
        id: 2, enTitle: "Alphabet: B", hiTitle: "वर्णमाला: B", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "B", 
        enDesc: "Hold hand up palm facing forward, fingers straight together, thumb folded across palm.", 
        hiDesc: "हथेली आगे रखें, उंगलियां सीधी और साथ हों, अंगूठा हथेली के पार मुड़ा हो।",
        grade: "Foundation / Grade 1-2", hiGrade: "फाउंडेशन / कक्षा 1-2",
        educatorNote: "Helps children learn flat hand orientation and spatial alignment.", hiEducatorNote: "बच्चों को चपटे हाथ की स्थिति और स्थानिक सं라인 सीखने में मदद करता है।"
    },
    { id: 3, enTitle: "Alphabet: C", hiTitle: "वर्णमाला: C", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "C", enDesc: "Curve your hand and fingers into the shape of the letter 'C'.", hiDesc: "हाथ और उंगलियों को 'C' के आकार में मोड़ें।", grade: "Foundation / Grade 1-2", hiGrade: "फाउंडेशन / कक्षा 1-2", educatorNote: "Encourages fine motor curving skills.", hiEducatorNote: "बारीक मोटर कौशल को बढ़ावा देता है।" },
    { id: 4, enTitle: "Alphabet: D", hiTitle: "वर्णमाला: D", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "D", enDesc: "Point index finger up, other fingers curl to touch the thumb forming a circle.", hiDesc: "तर्जनी ऊपर रखें, बाकी उंगलियां अंगूठा छूकर गोला बनाएं।", grade: "Foundation / Grade 1-2", hiGrade: "फाउंडेशन / कक्षा 1-2", educatorNote: "Focuses on isolated index finger movement.", hiEducatorNote: "अकेली तर्जनी उंगली की गति पर ध्यान केंद्रित करता है।" },
    { id: 5, enTitle: "Alphabet: E", hiTitle: "वर्णमाला: E", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "E", enDesc: "Curve all fingers down, thumb tucked underneath across the palm.", hiDesc: "सभी उंगलियां नीचे मोड़ें, अंगूठा हथेली के नीचे हो।", grade: "Foundation / Grade 1-2", hiGrade: "फाउंडेशन / कक्षा 1-2", educatorNote: "Great for finger flexibility exercises.", hiEducatorNote: "उंगलियों के लचीलेपन के व्यायाम के लिए बढ़िया है।" },
    { id: 6, enTitle: "Alphabet: F", hiTitle: "वर्णमाला: F", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "F", enDesc: "Touch index finger tip to thumb tip, other three fingers extended straight up.", hiDesc: "तर्जनी का सिरा अंगूठे से मिलाएं, बाकी तीन उंगलियां सीधी ऊपर हों।", grade: "Foundation / Grade 1-2", hiGrade: "फाउंडेशन / कक्षा 1-2", educatorNote: "Practices precise pinch and touch coordination.", hiEducatorNote: "सटीक चुटकी और स्पर्श समन्वय का अभ्यास कराता है।" },
    { id: 7, enTitle: "Alphabet: G", hiTitle: "वर्णमाला: G", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "G", enDesc: "Point index finger and thumb horizontally forward, parallel to each other.", hiDesc: "तर्जनी और अंगूठा सामने की ओर क्षैतिज रूप से सीधा रखें।", grade: "Primary / Grade 3", hiGrade: "प्राथमिक / कक्षा 3", educatorNote: "Introduces horizontal directional alignment.", hiEducatorNote: "क्षैतिज दिशात्मक संरेखण से परिचित कराता है।" },
    { id: 8, enTitle: "Alphabet: H", hiTitle: "वर्णमाला: H", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "H", enDesc: "Extend index and middle fingers horizontally together, other fingers folded.", hiDesc: "तर्जनी और मध्यमा को साथ में क्षैतिज रखें, बाकी उंगलियां मुड़ी हों।", grade: "Primary / Grade 3", hiGrade: "प्राथमिक / कक्षा 3", educatorNote: "Teaches dual finger parallel coordination.", hiEducatorNote: "दो उंगलियों के समानांतर समन्वय को सिखाता है।" },
    { id: 9, enTitle: "Alphabet: I", hiTitle: "वर्णमाला: I", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "I", enDesc: "Hold pinky finger straight up, make a fist with other fingers, thumb over them.", hiDesc: "कनिष्ठिका (छोटी उंगली) सीधी ऊपर रखें, बाकी मुट्ठी बंद हो।", grade: "Primary / Grade 3", hiGrade: "प्राथमिक / कक्षा 3", educatorNote: "Targets isolated pinky finger control.", hiEducatorNote: "छोटी उंगली के अकेले नियंत्रण को लक्षित करता है।" },
    { id: 10, enTitle: "Alphabet: J", hiTitle: "वर्णमाला: J", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "J", enDesc: "Start with 'I' pinky gesture and trace a 'J' shape hook in the air.", hiDesc: "छोटी उंगली ऊपर रखकर हवा में 'J' का आकार बनाएं।", grade: "Primary / Grade 3", hiGrade: "प्राथमिक / कक्षा 3", educatorNote: "Combines static posture with dynamic wrist motion.", hiEducatorNote: "स्थिर मुद्रा को गतिशील कलाई की गति के साथ जोड़ता है।" },
    { id: 11, enTitle: "Alphabet: K", hiTitle: "वर्णमाला: K", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "K", enDesc: "Hold index and middle fingers up in 'V', place thumb between them pointing forward.", hiDesc: "दो उंगलियां 'V' आकार में रखें, अंगूठा उनके बीच सामने हो।", grade: "Primary / Grade 3", hiGrade: "प्राथमिक / कक्षा 3", educatorNote: "Complex inter-finger thumb placement practice.", hiEducatorNote: "अंगूठे को उंगलियों के बीच रखने का जटिल अभ्यास।" },
    { id: 12, enTitle: "Alphabet: L", hiTitle: "वर्णमाला: L", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "L", enDesc: "Extend index finger up and thumb out to the side forming a clear 'L' shape.", hiDesc: "तर्जनी ऊपर और अंगूठा साइड में करके 'L' का आकार बनाएं।", grade: "Foundation / Grade 1-2", hiGrade: "फाउंडेशन / कक्षा 1-2", educatorNote: "Fundamental right-angle hand geometry.", hiEducatorNote: "मौलिक समकोण हाथ की ज्यामिति।" },
    { id: 13, enTitle: "Alphabet: M", hiTitle: "वर्णमाला: M", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "M", enDesc: "Fold thumb under the first three fingers (index, middle, ring).", hiDesc: "अंगूठे को पहली तीन उंगलियों के नीचे दबाएं।", grade: "Primary / Grade 3", hiGrade: "प्राथमिक / कक्षा 3", educatorNote: "Teaches multi-finger pressure distribution.", hiEducatorNote: "कई उंगलियों पर दबाव के वितरण को सिखाता है।" },
    { id: 14, enTitle: "Alphabet: N", hiTitle: "वर्णमाला: N", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "N", enDesc: "Fold thumb under index and middle fingers only.", hiDesc: "अंगूठे को केवल तर्जनी और मध्यमा उंगली के नीचे दबाएं।", grade: "Primary / Grade 3", hiGrade: "प्राथमिक / कक्षा 3", educatorNote: "Variation of finger tucking for vocabulary building.", hiEducatorNote: "शब्दावली निर्माण के लिए उंगली मोड़ने का प्रकार।" },
    { id: 15, enTitle: "Alphabet: O", hiTitle: "वर्णमाला: O", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "O", enDesc: "Curve all fingers and thumb to touch tips together forming an 'O' circle.", hiDesc: "सभी उंगलियों और अंगूठे के सिरों को मिलाकर 'O' का गोला बनाएं।", grade: "Foundation / Grade 1-2", hiGrade: "फाउंडेशन / कक्षा 1-2", educatorNote: "Improves circular hand closure and precision.", hiEducatorNote: "गोलाकार हाथ की बनावट और सटीकता में सुधार करता है।" },
    { id: 16, enTitle: "Alphabet: P", hiTitle: "वर्णमाला: P", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "P", enDesc: "Like 'K' sign but point the hand and thumb downward toward the ground.", hiDesc: "'K' की तरह हाथ रखें लेकिन उंगलियों और अंगूठे को नीचे ज़मीन की तरफ झुकाएं।", grade: "Primary / Grade 3", hiGrade: "प्राथमिक / कक्षा 3", educatorNote: "Inverted spatial orientation practice.", hiEducatorNote: "उल्टी स्थानिक दिशा का अभ्यास।" },
    { id: 17, enTitle: "Alphabet: Q", hiTitle: "वर्णमाला: Q", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "Q", enDesc: "Like 'G' sign but point index finger and thumb downward.", hiDesc: "'G' की तरह हाथ रखें लेकिन तर्जनी और अंगूठे को नीचे की ओर इंगित करें।", grade: "Primary / Grade 3", hiGrade: "प्राथमिक / कक्षा 3", educatorNote: "Downward directional pointing exercise.", hiEducatorNote: "नीचे की ओर इशारा करने का अभ्यास।" },
    { id: 18, enTitle: "Alphabet: R", hiTitle: "वर्णमाला: R", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "R", enDesc: "Cross your index and middle fingers over each other like a wishbone.", hiDesc: "तर्जनी और मध्यमा उंगली को आपस में क्रॉस करें।", grade: "Middle / Grade 4-5", hiGrade: "मिडिल / कक्षा 4-5", educatorNote: "Advanced finger crossing dexterity.", hiEducatorNote: "उंगलियों को क्रॉस करने का उन्नत कौशल।" },
    { id: 19, enTitle: "Alphabet: S", hiTitle: "वर्णमाला: S", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "S", enDesc: "Make a tight fist with your thumb wrapped across the front of your fingers.", hiDesc: "मुट्ठी बंद करें और अंगूठे को उंगलियों के आगे क्षैतिज रूप से रखें।", grade: "Foundation / Grade 1-2", hiGrade: "फाउंडेशन / कक्षा 1-2", educatorNote: "Standard fist formation test.", hiEducatorNote: "मानक मुट्ठी बनाने का परीक्षण।" },
    { id: 20, enTitle: "Alphabet: T", hiTitle: "वर्णमाला: T", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "T", enDesc: "Make a fist with the thumb tucked neatly underneath the index finger.", hiDesc: "मुट्ठी बंद करें और अंगूठे को तर्जनी के ठीक नीचे दबाएं।", grade: "Foundation / Grade 1-2", hiGrade: "फाउंडेशन / कक्षा 1-2", educatorNote: "Distinguishes 'S' and 'T' thumb positioning.", hiEducatorNote: "'S' और 'T' में अंगूठे की स्थिति का अंतर स्पष्ट करता है।" },
    { id: 21, enTitle: "Alphabet: U", hiTitle: "वर्णमाला: U", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "U", enDesc: "Hold index and middle fingers straight up together side-by-side.", hiDesc: "तर्जनी और मध्यमा उंगली को एक साथ सीधा ऊपर रखें।", grade: "Foundation / Grade 1-2", hiGrade: "फाउंडेशन / कक्षा 1-2", educatorNote: "Teaches parallel vertical extension.", hiEducatorNote: "समानांतर ऊर्ध्वाधर फैलाव सिखाता है।" },
    { id: 22, enTitle: "Alphabet: V", hiTitle: "वर्णमाला: V", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "V", enDesc: "Hold index and middle fingers up spread apart in a 'V' victory sign.", hiDesc: "तर्जनी और मध्यमा को फैलाकर 'V' (विक्ट्री) का निशान बनाएं।", grade: "Foundation / Grade 1-2", hiGrade: "फाउंडेशन / कक्षा 1-2", educatorNote: "Common universal sign for spatial spreading.", hiEducatorNote: "स्थानिक फैलाव के लिए सामान्य सार्वभौमिक संकेत।" },
    { id: 23, enTitle: "Alphabet: W", hiTitle: "वर्णमाला: W", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "W", enDesc: "Hold index, middle, and ring fingers up spread apart like a 'W'.", hiDesc: "तीन उंगलियों (तर्जनी, मध्यमा, अनामिका) को फैलाकर 'W' बनाएं।", grade: "Primary / Grade 3", hiGrade: "प्राथमिक / कक्षा 3", educatorNote: "Three-finger independent separation practice.", hiEducatorNote: "तीन उंगलियों को स्वतंत्र रूप से अलग करने का अभ्यास।" },
    { id: 24, enTitle: "Alphabet: X", hiTitle: "वर्णमाला: X", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "X", enDesc: "Curve your index finger like a small hook, other fingers in a loose fist.", hiDesc: "तर्जनी को हुक की तरह मोड़ें, बाकी उंगलियां ढीली मुट्ठी में हों।", grade: "Primary / Grade 3", hiGrade: "प्राथमिक / कक्षा 3", educatorNote: "Single finger hook articulation.", hiEducatorNote: "एक उंगली के हुक का आकार।" },
    { id: 25, enTitle: "Alphabet: Y", hiTitle: "वर्णमाला: Y", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "Y", enDesc: "Extend thumb and pinky finger out to the sides, other fingers folded.", hiDesc: "अंगूठा और कनिष्ठिका (छोटी उंगली) बाहर फैलाएं, बाकी मुड़ी हों।", grade: "Primary / Grade 3", hiGrade: "प्राथमिक / कक्षा 3", educatorNote: "Opposing dual-digit extension.", hiEducatorNote: "विपरीत दो-अंगुलियों का विस्तार।" },
    { id: 26, enTitle: "Alphabet: Z", hiTitle: "वर्णमाला: Z", enCat: "English A-Z", hiCat: "अंग्रेजी वर्णमाला", icon: "Z", enDesc: "Draw the zigzag shape of the letter 'Z' in the air with your index finger.", hiDesc: "तर्जनी उंगली से हवा में 'Z' का ज़िग-जैग आकार बनाएं।", grade: "Primary / Grade 3", hiGrade: "प्राथमिक / कक्षा 3", educatorNote: "Dynamic air-tracing and pattern memory.", hiEducatorNote: "हवा में गतिशीलता से रेखांकन और पैटर्न की स्मृति।" },

    // --- Complete Hindi Varnmala (Swar & Vyanjan अ से ज्ञ) ---
    { id: 27, enTitle: "Hindi Swar: अ", hiTitle: "हिंदी स्वर: अ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "अ", enDesc: "Sign reference for foundational vowel sound 'A'.", hiDesc: "स्वर ध्वनि 'अ' के लिए पारंपरिक सांकेतिक मुद्रा।", grade: "Foundation / Grade 1", hiGrade: "फाउंडेशन / कक्षा 1", educatorNote: "Foundational phonics & visual sign introduction for Hindi learners.", hiEducatorNote: "हिंदी शिक्षार्थियों के लिए बुनियादी ध्वन्यात्मकता और दृश्य संकेत परिचय।" },
    { id: 28, enTitle: "Hindi Swar: आ", hiTitle: "हिंदी वर्णमाला: आ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "आ", enDesc: "Sign reference for extended vowel sound 'Aa'.", hiDesc: "दीर्घ स्वर ध्वनि 'आ' के लिए विस्तारित संकेत।", grade: "Foundation / Grade 1", hiGrade: "फाउंडेशन / कक्षा 1", educatorNote: "Teaches vowel elongation concepts.", hiEducatorNote: "स्वर दीर्घीकरण की अवधारणा सिखाता है।" },
    { id: 29, enTitle: "Hindi Swar: इ", hiTitle: "हिंदी वर्णमाला: इ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "इ", enDesc: "Sign reference for vowel sound 'I'.", hiDesc: "स्वर ध्वनि 'इ' को दर्शाने के लिए संकेत।", grade: "Foundation / Grade 1", hiGrade: "फाउंडेशन / कक्षा 1", educatorNote: "Core regional language visual association.", hiEducatorNote: "क्षेत्रीय भाषा का मुख्य दृश्य संयोजन।" },
    { id: 30, enTitle: "Hindi Swar: ई", hiTitle: "हिंदी वर्णमाला: ई", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ई", enDesc: "Sign reference for long vowel sound 'Ee'.", hiDesc: "दीर्घ स्वर ध्वनि 'ई' के लिए संकेत।", grade: "Foundation / Grade 1", hiGrade: "फाउंडेशन / कक्षा 1", educatorNote: "Advanced vowel distinction.", hiEducatorNote: "उन्नत स्वर भेद।" },
    { id: 31, enTitle: "Hindi Swar: उ", hiTitle: "हिंदी वर्णमाला: उ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "उ", enDesc: "Sign reference for vowel sound 'U'.", hiDesc: "स्वर ध्वनि 'उ' के लिए सांकेतिक मुद्रा।", grade: "Foundation / Grade 1", hiGrade: "फाउंडेशन / कक्षा 1", educatorNote: "Primary phonics integration.", hiEducatorNote: "प्राथमिक ध्वन्यात्मकता एकीकरण।" },
    { id: 32, enTitle: "Hindi Swar: ऊ", hiTitle: "हिंदी वर्णमाला: ऊ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ऊ", enDesc: "Sign reference for long vowel sound 'Oo'.", hiDesc: "दीर्घ स्वर ध्वनि 'ऊ' के लिए संकेत।", grade: "Primary / Grade 2", hiGrade: "प्राथमिक / कक्षा 2", educatorNote: "Expanded vowel sign practice.", hiEducatorNote: "विस्तृत स्वर संकेत अभ्यास।" },
    { id: 33, enTitle: "Hindi Swar: ऋ", hiTitle: "हिंदी वर्णमाला: ऋ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ऋ", enDesc: "Sign reference for vowel 'Ri'.", hiDesc: "स्वर 'ऋ' को दर्शाने के लिए संकेत।", grade: "Primary / Grade 2", hiGrade: "प्राथमिक / कक्षा 2", educatorNote: "Special vowel sign representation.", hiEducatorNote: "विशेष स्वर संकेत प्रतिनिधित्व।" },
    { id: 34, enTitle: "Hindi Swar: ए", hiTitle: "हिंदी वर्णमाला: ए", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ए", enDesc: "Sign reference for vowel 'E'.", hiDesc: "स्वर 'ए' के लिए सांकेतिक मुद्रा।", grade: "Primary / Grade 2", hiGrade: "प्राथमिक / कक्षा 2", educatorNote: "Standard phonetic training.", hiEducatorNote: "मानक ध्वन्यात्मक प्रशिक्षण।" },
    { id: 35, enTitle: "Hindi Swar: ऐ", hiTitle: "हिंदी वर्णमाला: ऐ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ऐ", enDesc: "Sign reference for vowel 'Ai'.", hiDesc: "स्वर 'ऐ' के लिए संकेत।", grade: "Primary / Grade 2", hiGrade: "प्राथमिक / कक्षा 2", educatorNote: "Bilingual phonetic mapping.", hiEducatorNote: "द्विभाषी ध्वन्यात्मक मैपिंग।" },
    { id: 36, enTitle: "Hindi Swar: ओ", hiTitle: "हिंदी वर्णमाला: ओ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ओ", enDesc: "Sign reference for vowel 'O'.", hiDesc: "स्वर 'ओ' के लिए सांकेतिक मुद्रा।", grade: "Primary / Grade 2", hiGrade: "प्राथमिक / कक्षा 2", educatorNote: "Round vowel sound sign practice.", hiEducatorNote: "गोल स्वर ध्वनि संकेत अभ्यास।" },
    { id: 37, enTitle: "Hindi Swar: औ", hiTitle: "हिंदी वर्णमाला: औ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "औ", enDesc: "Sign reference for vowel 'Au'.", hiDesc: "स्वर 'औ' के लिए संकेत।", grade: "Primary / Grade 2", hiGrade: "प्राथमिक / कक्षा 2", educatorNote: "Complex vowel sign reference.", hiEducatorNote: "जटिल स्वर संकेत संदर्भ।" },
    { id: 38, enTitle: "Hindi Swar: अं", hiTitle: "हिंदी वर्णमाला: अं", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "अं", enDesc: "Sign reference for Anusvara 'Am'.", hiDesc: "अनुस्वार 'अं' के लिए संकेत।", grade: "Primary / Grade 3", hiGrade: "प्राथमिक / कक्षा 3", educatorNote: "Nasal sound representation.", hiEducatorNote: "नासिक्य ध्वनि प्रतिनिधित्व।" },
    { id: 39, enTitle: "Hindi Swar: अः", hiTitle: "हिंदी वर्णमाला: अः", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "अः", enDesc: "Sign reference for Visarga 'Aha'.", hiDesc: "विसर्ग 'अः' के लिए संकेत।", grade: "Primary / Grade 3", hiGrade: "प्राथमिक / कक्षा 3", educatorNote: "Visarga sound visualization.", hiEducatorNote: "विसर्ग ध्वनि का दृश्यीकरण।" },

    { id: 40, enTitle: "Hindi Vyanjan: क", hiTitle: "हिंदी व्यंजन: क", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "क", enDesc: "Structured hand posture for consonant 'Ka'.", hiDesc: "व्यंजन 'क' को दर्शाने के लिए हथेली का संकेत।", grade: "Foundation / Grade 1-2", hiGrade: "फाउंडेशन / कक्षा 1-2", educatorNote: "Consonant sign foundation for Indian sign language modules.", hiEducatorNote: "भारतीय सांकेतिक भाषा मॉड्यूल के लिए व्यंजन संकेत आधार।" },
    { id: 41, enTitle: "Hindi Vyanjan: ख", hiTitle: "हिंदी व्यंजन: ख", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ख", enDesc: "Structured hand posture for consonant 'Kha'.", hiDesc: "व्यंजन 'ख' के लिए संकेत।", grade: "Foundation / Grade 1-2", hiGrade: "फाउंडेशन / कक्षा 1-2", educatorNote: "Consonant progression step 2.", hiEducatorNote: "व्यंजन क्रम का दूसरा चरण।" },
    { id: 42, enTitle: "Hindi Vyanjan: ग", hiTitle: "हिंदी व्यंजन: ग", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ग", enDesc: "Structured hand posture for consonant 'Ga'.", hiDesc: "व्यंजन 'ग' के लिए संकेत।", grade: "Foundation / Grade 1-2", hiGrade: "फाउंडेशन / कक्षा 1-2", educatorNote: "Consonant progression step 3.", hiEducatorNote: "व्यंजन क्रम का तीसरा चरण।" },
    { id: 43, enTitle: "Hindi Vyanjan: घ", hiTitle: "हिंदी व्यंजन: घ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "घ", enDesc: "Structured hand posture for consonant 'Gha'.", hiDesc: "व्यंजन 'घ' के लिए संकेत।", grade: "Primary / Grade 3", hiGrade: "प्राथमिक / कक्षा 3", educatorNote: "Consonant progression step 4.", hiEducatorNote: "व्यंजन क्रम का चौथा चरण।" },
    { id: 44, enTitle: "Hindi Vyanjan: ङ", hiTitle: "हिंदी व्यंजन: ङ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ङ", enDesc: "Structured hand posture for consonant 'Nga'.", hiDesc: "व्यंजन 'ङ' के लिए संकेत।", grade: "Primary / Grade 3", hiGrade: "प्राथमिक / कक्षा 3", educatorNote: "Nasals sign training.", hiEducatorNote: "नासिक्य संकेत प्रशिक्षण।" },
    { id: 45, enTitle: "Hindi Vyanjan: च", hiTitle: "हिंदी व्यंजन: च", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "च", enDesc: "Structured hand posture for consonant 'Cha'.", hiDesc: "व्यंजन 'च' के लिए संकेत।", grade: "Foundation / Grade 1-2", hiGrade: "फाउंडेशन / कक्षा 1-2", educatorNote: "Ch-class consonant sign.", hiEducatorNote: "च-वर्ग व्यंजन संकेत।" },
    { id: 46, enTitle: "Hindi Vyanjan: छ", hiTitle: "हिंदी व्यंजन: छ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "छ", enDesc: "Structured hand posture for consonant 'Chha'.", hiDesc: "व्यंजन 'छ' के लिए संकेत।", grade: "Primary / Grade 3", hiGrade: "प्राथमिक / कक्षा 3", educatorNote: "Chha consonant sign.", hiEducatorNote: "छ व्यंजन संकेत।" },
    { id: 47, enTitle: "Hindi Vyanjan: ज", hiTitle: "हिंदी व्यंजन: ज", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ज", enDesc: "Structured hand posture for consonant 'Ja'.", hiDesc: "व्यंजन 'ज' के लिए संकेत।", grade: "Foundation / Grade 1-2", hiGrade: "फाउंडेशन / कक्षा 1-2", educatorNote: "Ja consonant sign.", hiEducatorNote: "ज व्यंजन संकेत।" },
    { id: 48, enTitle: "Hindi Vyanjan: झ", hiTitle: "हिंदी व्यंजन: झ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "झ", enDesc: "Structured hand posture for consonant 'Jha'.", hiDesc: "व्यंजन 'झ' के लिए संकेत।", grade: "Primary / Grade 3", hiGrade: "प्राथमिक / कक्षा 3", educatorNote: "Jha consonant sign.", hiEducatorNote: "झ व्यंजन संकेत।" },
    { id: 49, enTitle: "Hindi Vyanjan: ञ", hiTitle: "हिंदी व्यंजन: ञ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ञ", enDesc: "Structured hand posture for consonant 'Nya'.", hiDesc: "व्यंजन 'ञ' के लिए संकेत।", grade: "Primary / Grade 3", hiGrade: "प्राथमिक / कक्षा 3", educatorNote: "Nya consonant sign.", hiEducatorNote: "ञ व्यंजन संकेत।" },
    { id: 50, enTitle: "Hindi Vyanjan: ट", hiTitle: "हिंदी व्यंजन: ट", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ट", enDesc: "Structured hand posture for consonant 'Ta'.", hiDesc: "व्यंजन 'ट' के लिए संकेत।", grade: "Foundation / Grade 1-2", hiGrade: "फाउंडेशन / कक्षा 1-2", educatorNote: "Retroflex consonant series.", hiEducatorNote: "मूर्धन्य व्यंजन श्रृंखला।" },
    { id: 51, enTitle: "Hindi Vyanjan: ठ", hiTitle: "हिंदी व्यंजन: ठ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ठ", enDesc: "Structured hand posture for consonant 'Ttha'.", hiDesc: "व्यंजन 'ठ' के लिए संकेत।", grade: "Primary / Grade 3", hiGrade: "प्राथमिक / कक्षा 3", educatorNote: "Ttha sign practice.", hiEducatorNote: "ठ संकेत अभ्यास।" },
    { id: 52, enTitle: "Hindi Vyanjan: ड", hiTitle: "हिंदी व्यंजन: ड", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ड", enDesc: "Structured hand posture for consonant 'Da'.", hiDesc: "व्यंजन 'ड' के लिए संकेत।", grade: "Foundation / Grade 1-2", hiGrade: "फाउंडेशन / कक्षा 1-2", educatorNote: "Da sign practice.", hiEducatorNote: "ड संकेत अभ्यास।" },
    { id: 53, enTitle: "Hindi Vyanjan: ढ", hiTitle: "हिंदी व्यंजन: ढ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ढ", enDesc: "Structured hand posture for consonant 'Dha'.", hiDesc: "व्यंजन 'ढ' के लिए संकेत।", grade: "Primary / Grade 3", hiGrade: "प्राथमिक / कक्षा 3", educatorNote: "Dha retroflex sign.", hiEducatorNote: "ढ मूर्धन्य संकेत।" },
    { id: 54, enTitle: "Hindi Vyanjan: ण", hiTitle: "हिंदी व्यंजन: ण", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ण", enDesc: "Structured hand posture for consonant 'Na'.", hiDesc: "व्यंजन 'ण' के लिए संकेत।", grade: "Primary / Grade 3", hiGrade: "प्राथमिक / कक्षा 3", educatorNote: "Na retroflex sign.", hiEducatorNote: "ण मूर्धन्य संकेत।" },
    { id: 55, enTitle: "Hindi Vyanjan: त", hiTitle: "हिंदी व्यंजन: त", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "त", enDesc: "Structured hand posture for consonant 'Ta'.", hiDesc: "व्यंजन 'त' के लिए संकेत।", grade: "Foundation / Grade 1-2", hiGrade: "फाउंडेशन / कक्षा 1-2", educatorNote: "Dental consonant series.", hiEducatorNote: "दन्तव्य व्यंजन श्रृंखला।" },
    { id: 56, enTitle: "Hindi Vyanjan: थ", hiTitle: "हिंदी व्यंजन: थ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "थ", enDesc: "Structured hand posture for consonant 'Tha'.", hiDesc: "व्यंजन 'थ' के लिए संकेत।", grade: "Primary / Grade 3", hiGrade: "प्राथमिक / कक्षा 3", educatorNote: "Tha dental sign.", hiEducatorNote: "थ दन्तव्य संकेत।" },
    { id: 57, enTitle: "Hindi Vyanjan: द", hiTitle: "हिंदी व्यंजन: द", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "द", enDesc: "Structured hand posture for consonant 'Da'.", hiDesc: "व्यंजन 'द' के लिए संकेत।", grade: "Foundation / Grade 1-2", hiGrade: "फाउंडेशन / कक्षा 1-2", educatorNote: "Da dental sign.", hiEducatorNote: "द दन्तव्य संकेत।" },
    { id: 58, enTitle: "Hindi Vyanjan: ध", hiTitle: "हिंदी व्यंजन: ध", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ध", enDesc: "Structured hand posture for consonant 'Dha'.", hiDesc: "व्यंजन 'ध' के लिए संकेत।", grade: "Primary / Grade 3", hiGrade: "प्राथमिक / कक्षा 3", educatorNote: "Dha dental sign.", hiEducatorNote: "ध दन्तव्य संकेत।" },
    { id: 59, enTitle: "Hindi Vyanjan: न", hiTitle: "हिंदी व्यंजन: न", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "न", enDesc: "Structured hand posture for consonant 'Na'.", hiDesc: "व्यंजन 'न' के लिए संकेत।", grade: "Foundation / Grade 1-2", hiGrade: "फाउंडेशन / कक्षा 1-2", educatorNote: "Na dental sign.", hiEducatorNote: "न दन्तव्य संकेत।" },
    { id: 60, enTitle: "Hindi Vyanjan: प", hiTitle: "हिंदी व्यंजन: प", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "प", enDesc: "Structured hand posture for consonant 'Pa'.", hiDesc: "व्यंजन 'प' के लिए संकेत।", grade: "Foundation / Grade 1-2", hiGrade: "फाउंडेशन / कक्षा 1-2", educatorNote: "Labial consonant series.", hiEducatorNote: "ओष्ठ्य व्यंजन श्रृंखला।" },
    { id: 61, enTitle: "Hindi Vyanjan: फ", hiTitle: "हिंदी व्यंजन: फ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "फ", enDesc: "Structured hand posture for consonant 'Pha'.", hiDesc: "व्यंजन 'फ' के लिए संकेत।", grade: "Primary / Grade 3", hiGrade: "प्राथमिक / कक्षा 3", educatorNote: "Pha labial sign.", hiEducatorNote: "फ ओष्ठ्य संकेत।" },
    { id: 62, enTitle: "Hindi Vyanjan: ब", hiTitle: "हिंदी व्यंजन: ब", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ब", enDesc: "Structured hand posture for consonant 'Ba'.", hiDesc: "व्यंजन 'ब' के लिए संकेत।", grade: "Foundation / Grade 1-2", hiGrade: "फाउंडेशन / कक्षा 1-2", educatorNote: "Ba labial sign.", hiEducatorNote: "ब ओष्ठ्य संकेत।" },
    { id: 63, enTitle: "Hindi Vyanjan: भ", hiTitle: "हिंदी व्यंजन: भ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "भ", enDesc: "Structured hand posture for consonant 'Bha'.", hiDesc: "व्यंजन 'भ' के लिए संकेत।", grade: "Primary / Grade 3", hiGrade: "प्राथमिक / कक्षा 3", educatorNote: "Bha labial sign.", hiEducatorNote: "भ ओष्ठ्य संकेत।" },
    { id: 64, enTitle: "Hindi Vyanjan: म", hiTitle: "हिंदी व्यंजन: म", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "म", enDesc: "Structured hand posture for consonant 'Ma'.", hiDesc: "व्यंजन 'म' के लिए संकेत।", grade: "Foundation / Grade 1-2", hiGrade: "फाउंडेशन / कक्षा 1-2", educatorNote: "Ma labial sign.", hiEducatorNote: "म ओष्ठ्य संकेत।" },
    { id: 65, enTitle: "Hindi Vyanjan: य", hiTitle: "हिंदी व्यंजन: य", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "य", enDesc: "Structured hand posture for consonant 'Ya'.", hiDesc: "व्यंजन 'य' के लिए संकेत।", grade: "Primary / Grade 3", hiGrade: "प्राथमिक / कक्षा 3", educatorNote: "Semi-vowel sign series.", hiEducatorNote: "अर्धस्वर संकेत श्रृंखला।" },
    { id: 66, enTitle: "Hindi Vyanjan: र", hiTitle: "हिंदी व्यंजन: र", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "र", enDesc: "Structured hand posture for consonant 'Ra'.", hiDesc: "व्यंजन 'र' के लिए संकेत।", grade: "Foundation / Grade 1-2", hiGrade: "फाउंडेशन / कक्षा 1-2", educatorNote: "Ra liquid consonant.", hiEducatorNote: "र लुठित व्यंजन।" },
    { id: 67, enTitle: "Hindi Vyanjan: ल", hiTitle: "हिंदी व्यंजन: ल", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ल", enDesc: "Structured hand posture for consonant 'La'.", hiDesc: "व्यंजन 'ल' के लिए संकेत।", grade: "Foundation / Grade 1-2", hiGrade: "फाउंडेशन / कक्षा 1-2", educatorNote: "La liquid consonant.", hiEducatorNote: "ल पार्श्विक व्यंजन।" },
    { id: 68, enTitle: "Hindi Vyanjan: व", hiTitle: "हिंदी व्यंजन: व", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "व", enDesc: "Structured hand posture for consonant 'Va'.", hiDesc: "व्यंजन 'व' के लिए संकेत।", grade: "Primary / Grade 3", hiGrade: "प्राथमिक / कक्षा 3", educatorNote: "Va semi-vowel sign.", hiEducatorNote: "व अर्धस्वर संकेत।" },
    { id: 69, enTitle: "Hindi Vyanjan: श", hiTitle: "हिंदी व्यंजन: श", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "श", enDesc: "Structured hand posture for consonant 'Sha'.", hiDesc: "व्यंजन 'श' के लिए संकेत।", grade: "Primary / Grade 3", hiGrade: "प्राथमिक / कक्षा 3", educatorNote: "Sibilant sign series.", hiEducatorNote: "ऊष्म व्यंजन संकेत श्रृंखला।" },
    { id: 70, enTitle: "Hindi Vyanjan: ष", hiTitle: "हिंदी व्यंजन: ष", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ष", enDesc: "Structured hand posture for consonant 'Shha'.", hiDesc: "व्यंजन 'ष' के लिए संकेत।", grade: "Primary / Grade 3", hiGrade: "प्राथमिक / कक्षा 3", educatorNote: "Retroflex sibilant sign.", hiEducatorNote: "मूर्धन्य ऊष्म संकेत।" },
    { id: 71, enTitle: "Hindi Vyanjan: स", hiTitle: "हिंदी व्यंजन: स", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "स", enDesc: "Structured hand posture for consonant 'Sa'.", hiDesc: "व्यंजन 'स' के लिए संकेत।", grade: "Foundation / Grade 1-2", hiGrade: "फाउंडेशन / कक्षा 1-2", educatorNote: "Dental sibilant sign.", hiEducatorNote: "दन्तव्य ऊष्म संकेत।" },
    { id: 72, enTitle: "Hindi Vyanjan: ह", hiTitle: "हिंदी व्यंजन: ह", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ह", enDesc: "Structured hand posture for consonant 'Ha'.", hiDesc: "व्यंजन 'ह' के लिए संकेत।", grade: "Foundation / Grade 1-2", hiGrade: "फाउंडेशन / कक्षा 1-2", educatorNote: "Glottal fricative sign.", hiEducatorNote: "स्वरयंत्रिय संघर्षी संकेत।" },
    { id: 73, enTitle: "Hindi Vyanjan: क्ष", hiTitle: "हिंदी व्यंजन: क्ष", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "क्ष", enDesc: "Structured hand posture for consonant 'Ksha'.", hiDesc: "व्यंजन 'क्ष' के लिए संकेत।", grade: "Middle / Grade 4-5", hiGrade: "मिडिल / कक्षा 4-5", educatorNote: "Compound consonant sign.", hiEducatorNote: "संयुक्त व्यंजन संकेत।" },
    { id: 74, enTitle: "Hindi Vyanjan: त्र", hiTitle: "हिंदी व्यंजन: त्र", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "त्र", enDesc: "Structured hand posture for consonant 'Tra'.", hiDesc: "व्यंजन 'त्र' के लिए संकेत।", grade: "Middle / Grade 4-5", hiGrade: "मिडिल / कक्षा 4-5", educatorNote: "Compound consonant sign.", hiEducatorNote: "संयुक्त व्यंजन संकेत।" },
    { id: 75, enTitle: "Hindi Vyanjan: ज्ञ", hiTitle: "हिंदी व्यंजन: ज्ञ", enCat: "Hindi Varnmala", hiCat: "हिंदी वर्णमाला", icon: "ज्ञ", enDesc: "Structured hand posture for consonant 'Gya'.", hiDesc: "व्यंजन 'ज्ञ' के लिए संकेत।", grade: "Middle / Grade 4-5", hiGrade: "मिडिल / कक्षा 4-5", educatorNote: "Compound consonant sign.", hiEducatorNote: "संयुक्त व्यंजन संकेत।" },

    // --- Number Counting (1 to 10) ---
    { id: 76, enTitle: "Number: 1", hiTitle: "गिनती: 1", enCat: "Counting", hiCat: "गिनती", icon: "1️⃣", enDesc: "Index finger pointing straight up.", hiDesc: "तर्जनी उंगली सीधे ऊपर।", grade: "Foundation / Grade 1", hiGrade: "फाउंडेशन / कक्षा 1", educatorNote: "Basic mathematical numerical sign introductory level.", hiEducatorNote: "बुनियादी गणितीय संख्या संकेत शुरुआती स्तर।" },
    { id: 77, enTitle: "Number: 2", hiTitle: "गिनती: 2", enCat: "Counting", hiCat: "गिनती", icon: "2️⃣", enDesc: "Index and middle fingers up in 'V'.", hiDesc: "तर्जनी और मध्यमा 'V' आकार में।", grade: "Foundation / Grade 1", hiGrade: "फाउंडेशन / कक्षा 1", educatorNote: "Early numeracy concept.", hiEducatorNote: "प्रारंभिक संख्यात्मक अवधारणा।" },
    { id: 78, enTitle: "Number: 3", hiTitle: "गिनती: 3", enCat: "Counting", hiCat: "गिनती", icon: "3️⃣", enDesc: "Thumb, index, and middle fingers extended.", hiDesc: "अंगूठा, तर्जनी और मध्यमा खुली हों।", grade: "Foundation / Grade 1", hiGrade: "फाउंडेशन / कक्षा 1", educatorNote: "Tri-digit counting practice.", hiEducatorNote: "तीन-अंकीय गिनती का अभ्यास।" },
    { id: 79, enTitle: "Number: 4", hiTitle: "गिनती: 4", enCat: "Counting", hiCat: "गिनती", icon: "4️⃣", enDesc: "Four fingers up, thumb folded across palm.", hiDesc: "चारों उंगलियां ऊपर, अंगूठा हथेली पर।", grade: "Foundation / Grade 1", hiGrade: "फाउंडेशन / कक्षा 1", educatorNote: "Quad-digit number representation.", hiEducatorNote: "चार-अंकीय संख्या प्रतिनिधित्व।" },
    { id: 80, enTitle: "Number: 5", hiTitle: "गिनती: 5", enCat: "Counting", hiCat: "गिनती", icon: "5️⃣", enDesc: "All five fingers open and spread out.", hiDesc: "पांचों उंगलियां खुली और फैली हुई।", grade: "Foundation / Grade 1", hiGrade: "फाउंडेशन / कक्षा 1", educatorNote: "Full palm open sign.", hiEducatorNote: "पूरा खुला हुआ हथेली का संकेत।" },
    { id: 81, enTitle: "Number: 6", hiTitle: "गिनती: 6", enCat: "Counting", hiCat: "गिनती", icon: "6️⃣", enDesc: "Thumb touching pinky tip, three fingers up.", hiDesc: "अंगूठा छोटी उंगली के सिरे को छुए, तीन उंगलियां ऊपर।", grade: "Primary / Grade 2", hiGrade: "प्राथमिक / कक्षा 2", educatorNote: "Advanced number coordination.", hiEducatorNote: "उन्नत संख्या समन्वय।" },
    { id: 82, enTitle: "Number: 7", hiTitle: "गिनती: 7", enCat: "Counting", hiCat: "गिनती", icon: "7️⃣", enDesc: "Thumb touching ring finger tip.", hiDesc: "अंगूठा अनामिका (रिंग फिंगर) के सिरे को छुए।", grade: "Primary / Grade 2", hiGrade: "प्राथमिक / कक्षा 2", educatorNote: "Ring finger precision count.", hiEducatorNote: "रिंग फिंगर सटीकता गिनती।" },
    { id: 83, enTitle: "Number: 8", hiTitle: "गिनती: 8", enCat: "Counting", hiCat: "गिनती", icon: "8️⃣", enDesc: "Thumb touching middle finger tip.", hiDesc: "अंगूठा मध्यमा उंगली के सिरे को छुए।", grade: "Primary / Grade 2", hiGrade: "प्राथमिक / कक्षा 2", educatorNote: "Middle finger precision count.", hiEducatorNote: "मध्यमा उंगली सटीकता गिनती।" },
    { id: 84, enTitle: "Number: 9", hiTitle: "गिनती: 9", enCat: "Counting", hiCat: "गिनती", icon: "9️⃣", enDesc: "Thumb touching index finger tip.", hiDesc: "अंगूठा तर्जनी उंगली के सिरे को छुए।", grade: "Primary / Grade 2", hiGrade: "प्राथमिक / कक्षा 2", educatorNote: "Index finger precision count.", hiEducatorNote: "तर्जनी उंगली सटीकता गिनती।" },
    { id: 85, enTitle: "Number: 10", hiTitle: "गिनती: 10", enCat: "Counting", hiCat: "गिनती", icon: "🔟", enDesc: "Make a fist and shake thumb slightly side to side.", hiDesc: "मुट्ठी बंद करें और अंगूठे को हल्का सा हिलाएं।", grade: "Primary / Grade 2", hiGrade: "प्राथमिक / कक्षा 2", educatorNote: "Double digit transition sign.", hiEducatorNote: "दोहरे अंक का संक्रमण संकेत।" },

    // --- Daily Classroom Commands & Needs ---
    { id: 86, enTitle: "Help", hiTitle: "मदद (Madad)", enCat: "Daily Use", hiCat: "दैनिक उपयोग", icon: "🤝", enDesc: "Place your fist with thumb up onto the palm of your other hand.", hiDesc: "एक हाथ की हथेली पर दूसरे हाथ की मुट्ठी (अंगूठा ऊपर) रखें।", grade: "Foundation / All Grades", hiGrade: "फाउंडेशन / सभी कक्षाएं", educatorNote: "Crucial classroom survival sign for seeking assistance.", hiEducatorNote: "सहायता मांगने के लिए महत्वपूर्ण कक्षा जीवन रक्षा संकेत।" },
    { id: 87, enTitle: "Water / Drink", hiTitle: "पानी / प्यास", enCat: "Daily Use", hiCat: "दैनिक उपयोग", icon: "💧", enDesc: "Tap chin twice with index and middle fingers shaped like 'W'.", hiDesc: "'W' आकार की उंगलियों से ठोड़ी को दो बार थपथपाएं।", grade: "Foundation / All Grades", hiGrade: "फाउंडेशन / सभी कक्षाएं", educatorNote: "Essential daily hydration need sign.", hiEducatorNote: "दैनिक पानी की आवश्यकता का आवश्यक संकेत।" },
    { id: 88, enTitle: "Restroom", hiTitle: "शौचालय", enCat: "Daily Use", hiCat: "दैनिक उपयोग", icon: "🚻", enDesc: "Form a 'T' with hands and shake gently.", hiDesc: "हाथों से 'T' का आकार बनाकर हल्का सा हिलाएं।", grade: "Foundation / All Grades", hiGrade: "फाउंडेशन / सभी कक्षाएं", educatorNote: "Essential personal care classroom sign.", hiEducatorNote: "व्यक्तिगत देखभाल का आवश्यक कक्षा संकेत।" },
    { id: 89, enTitle: "Finish / Done", hiTitle: "समाप्त / हो गया", enCat: "Daily Use", hiCat: "दैनिक उपयोग", icon: "✨", enDesc: "Twist both hands outward palms facing chest.", hiDesc: "दोनों हाथों को बाहर की ओर घुमाएं।", grade: "Primary / All Grades", hiGrade: "प्राथमिक / सभी कक्षाएं", educatorNote: "Task completion acknowledgment.", hiEducatorNote: "कार्य पूरा होने की स्वीकृति।" },

    // --- Emotions & Family ---
    { id: 90, enTitle: "Happy", hiTitle: "खुश", enCat: "Emotions & Desires", hiCat: "भावनाएं व इच्छाएं", icon: "😊", enDesc: "Brush open hands upward on your chest repeatedly.", hiDesc: "सीने पर खुले हाथों को ऊपर की ओर उठाएं।", grade: "Foundation / Grade 1", hiGrade: "फाउंडेशन / कक्षा 1", educatorNote: "Helps children express positive emotional states.", hiEducatorNote: "बच्चों को सकारात्मक भावनात्मक स्थिति व्यक्त करने में मदद करता है।" },
    { id: 91, enTitle: "Sad", hiTitle: "दुखी", enCat: "Emotions & Desires", hiCat: "भावनाएं व इच्छाएं", icon: "😢", enDesc: "Trace hands downward in front of your face with a sad expression.", hiDesc: "उदास चेहरे के साथ हाथों को चेहरे के सामने नीचे की ओर लाएं।", grade: "Foundation / Grade 1", hiGrade: "फाउंडेशन / कक्षा 1", educatorNote: "Emotional expression and empathy building.", hiEducatorNote: "भावनाओं की अभिव्यक्ति और सहानुभूति का निर्माण।" },
    { id: 92, enTitle: "Angry", hiTitle: "गुस्सा", enCat: "Emotions & Desires", hiCat: "भावनाएं व इच्छाएं", icon: "😡", enDesc: "Clench hands like claws and pull them away from your face.", hiDesc: "हाथों को पंजे की तरह बंद करके चेहरे के सामने से खींचें।", grade: "Primary / Grade 2", hiGrade: "प्राथमिक / कक्षा 2", educatorNote: "Helps children communicate frustration constructively.", hiEducatorNote: "बच्चों को रचनात्मक रूप से निराशा संवाद करने में मदद करता है।" },
    { id: 93, enTitle: "Mother / Mom", hiTitle: "माँ", enCat: "Emotions & Desires", hiCat: "भावनाएं व परिवार", icon: "👩", enDesc: "Tap thumb of open hand against your chin.", hiDesc: "खुले हाथ के अंगूठे को ठोड़ी पर स्पर्श करें।", grade: "Foundation / Grade 1", hiGrade: "फाउंडेशन / कक्षा 1", educatorNote: "Core family vocabulary.", hiEducatorNote: "मुख्य पारिवारिक शब्दावली।" },
    { id: 94, enTitle: "Father / Dad", hiTitle: "पिता", enCat: "Emotions & Desires", hiCat: "भावनाएं व परिवार", icon: "👨", enDesc: "Tap thumb of open hand against your forehead.", hiDesc: "खुले हाथ के अंगूठे को माथे पर स्पर्श करें।", grade: "Foundation / Grade 1", hiGrade: "फाउंडेशन / कक्षा 1", educatorNote: "Core family vocabulary.", hiEducatorNote: "मुख्य पारिवारिक शब्दावली।" },
    { id: 95, enTitle: "Brother", hiTitle: "भाई", enCat: "Emotions & Desires", hiCat: "भावनाएं व परिवार", icon: "👦", enDesc: "Bring index fingers together from forehead pointing forward.", hiDesc: "माथे से तर्जनी उंगलियों को आगे की ओर लाएं।", grade: "Primary / Grade 2", hiGrade: "प्राथमिक / कक्षा 2", educatorNote: "Extended family sign relationship.", hiEducatorNote: "विस्तृत परिवार संबंध संकेत।" },
    { id: 96, enTitle: "Sister", hiTitle: "बहन", enCat: "Emotions & Desires", hiCat: "भावनाएं व परिवार", icon: "👧", enDesc: "Slide thumb of one hand down the index finger of the other hand.", hiDesc: "एक हाथ के अंगूठे को दूसरे हाथ की तर्जनी उंगली पर नीचे लाएं।", grade: "Primary / Grade 2", hiGrade: "प्राथमिक / कक्षा 2", educatorNote: "Extended family sign relationship.", hiEducatorNote: "विस्तृत परिवार संबंध संकेत।" },
    { id: 97, enTitle: "Friend", hiTitle: "दोस्त", enCat: "Emotions & Desires", hiCat: "भावनाएं व परिवार", icon: "🤝", enDesc: "Hook index fingers together back and forth.", hiDesc: "दोनों हाथों की तर्जनी उंगलियों को आपस में हुक करें।", grade: "Primary / Grade 2", hiGrade: "प्राथमिक / कक्षा 2", educatorNote: "Social interaction and peer bonding sign.", hiEducatorNote: "सामाजिक संपर्क और सहकर्मी बंधन संकेत।" },

    // --- Colors ---
    { id: 98, enTitle: "Red", hiTitle: "लाल", enCat: "Colors", hiCat: "रंग", icon: "🔴", enDesc: "Draw index finger down from lips twice.", hiDesc: "तर्जनी उंगली को होंठों से नीचे की ओर दो बार चलाएं।", grade: "Foundation / Grade 1", hiGrade: "फाउंडेशन / कक्षा 1", educatorNote: "Primary color identification sign.", hiEducatorNote: "प्राथमिक रंग पहचान संकेत।" },
    { id: 99, enTitle: "Blue", hiTitle: "नीला", enCat: "Colors", hiCat: "रंग", icon: "🔵", enDesc: "Shake a 'B' handshape slightly back and forth.", hiDesc: "हाथ को 'B' आकार में रखकर हल्का सा हवा में हिलाएं।", grade: "Foundation / Grade 1", hiGrade: "फाउंडेशन / कक्षा 1", educatorNote: "Primary color identification sign.", hiEducatorNote: "प्राथमिक रंग पहचान संकेत।" },
    { id: 100, enTitle: "Green", hiTitle: "हरा", enCat: "Colors", hiCat: "रंग", icon: "🟢", enDesc: "Shake a 'G' handshape slightly back and forth.", hiDesc: "हाथ को 'G' आकार में रखकर हल्का सा हिलाएं।", grade: "Foundation / Grade 1", hiGrade: "फाउंडेशन / कक्षा 1", educatorNote: "Primary color identification sign.", hiEducatorNote: "प्राथमिक रंग पहचान संकेत।" },
    { id: 101, enTitle: "Yellow", hiTitle: "पीला", enCat: "Colors", hiCat: "रंग", icon: "🟡", enDesc: "Twist a 'Y' handshape back and forth near the side.", hiDesc: "हाथ को 'Y' आकार में रखकर कलाई को घुमाएं।", grade: "Foundation / Grade 1", hiGrade: "फाउंडेशन / कक्षा 1", educatorNote: "Primary color identification sign.", hiEducatorNote: "प्राथमिक रंग पहचान संकेत।" },

    // --- Pronouns ---
    { id: 102, enTitle: "Me / I", hiTitle: "मैं / मुझे", enCat: "Pronouns", hiCat: "सर्वनाम", icon: "🙋‍♂️", enDesc: "Point your index finger directly at your own chest.", hiDesc: "तर्जनी उंगली से सीधे अपने सीने की ओर इशारा करें।", grade: "Foundation / Grade 1", hiGrade: "फाउंडेशन / कक्षा 1", educatorNote: "Foundational self-reference pronoun.", hiEducatorNote: "बुनियादी आत्म-संदर्भ सर्वनाम।" },
    { id: 103, enTitle: "You", hiTitle: "तुम / आप", enCat: "Pronouns", hiCat: "सर्वनाम", icon: "🫵", enDesc: "Point your index finger forward toward the other person.", hiDesc: "तर्जनी उंगली से सामने वाले व्यक्ति की ओर इशारा करें।", grade: "Foundation / Grade 1", hiGrade: "फाउंडेशन / कक्षा 1", educatorNote: "Direct second-person reference.", hiEducatorNote: "प्रत्यक्ष द्वितीय-पुरुष संदर्भ।" },
    { id: 104, enTitle: "He / She / It", hiTitle: "वह / यह", enCat: "Pronouns", hiCat: "सर्वनाम", icon: "👉", enDesc: "Point your index finger toward the side or someone else.", hiDesc: "तर्जनी उंगली से साइड में या किसी अन्य व्यक्ति की ओर इशारा करें।", grade: "Primary / Grade 2", hiGrade: "प्राथमिक / कक्षा 2", educatorNote: "Third-person spatial reference.", hiEducatorNote: "तृतीय-पुरुष स्थानिक संदर्भ।" },
    { id: 105, enTitle: "We / Us", hiTitle: "हम", enCat: "Pronouns", hiCat: "सर्वनाम", icon: "👥", enDesc: "Point index finger to your right shoulder, then sweep across to your left shoulder.", hiDesc: "तर्जनी से अपने दाहिने कंधे से बाएं कंधे की तरफ अर्धवृत्त बनाएं।", grade: "Primary / Grade 2", hiGrade: "प्राथमिक / कक्षा 2", educatorNote: "Inclusive plural pronoun.", hiEducatorNote: "समावेशी बहुवचन सर्वनाम।" },
    { id: 106, enTitle: "They / Them", hiTitle: "वे / उन्हें", enCat: "Pronouns", hiCat: "सर्वनाम", icon: "👉👥", enDesc: "Point index finger and sweep it in an arc toward a group of people.", hiDesc: "तर्जनी उंगली से लोगों के समूह की ओर घुमावदार इशारा करें।", grade: "Primary / Grade 2", hiGrade: "प्राथमिक / कक्षा 2", educatorNote: "Group plural pronoun.", hiEducatorNote: "समूह बहुवचन सर्वनाम।" },

    // --- Greetings & Polite Phrases ---
    { id: 107, enTitle: "Hello", hiTitle: "नमस्ते / हैलो", enCat: "Greetings", hiCat: "अभिवादन", icon: "👋", enDesc: "Raise your hand near your head and wave it side to side.", hiDesc: "सिर के पास हाथ उठाकर बाएं-दाएं हिलाएं।", grade: "Foundation / All Grades", hiGrade: "फाउंडेशन / सभी कक्षाएं", educatorNote: "Universal social greeting sign.", hiEducatorNote: "सार्वभौमिक सामाजिक अभिवादन संकेत।" },
    { id: 108, enTitle: "Goodbye", hiTitle: "अलविदा / बाय", enCat: "Greetings", hiCat: "अभिवादन", icon: "🙋", enDesc: "Raise hand and open/close fingers repeatedly as a waving gesture.", hiDesc: "हाथ उठाकर उंगलियों को बार-बार खोलें और बंद करें।", grade: "Foundation / All Grades", hiGrade: "फाउंडेशन / सभी कक्षाएं", educatorNote: "Universal social departure sign.", hiEducatorNote: "सार्वभौमिक सामाजिक विदाई संकेत।" },
    { id: 109, enTitle: "Nice to meet you", hiTitle: "आपसे मिलकर खुशी हुई", enCat: "Greetings", hiCat: "अभिवादन", icon: "🤝", enDesc: "Slide flat dominant hand across the palm of the non-dominant hand, then point to person.", hiDesc: "एक हाथ की हथेली पर दूसरे हाथ को चलाएं और सामने वाले की तरफ इशारा करें।", grade: "Primary / Grade 2", hiGrade: "प्राथमिक / कक्षा 2", educatorNote: "Social etiquette and conversational courtesy.", hiEducatorNote: "सामाजिक शिष्टाचार और संवादात्मक सौजन्य।" },
    { id: 110, enTitle: "Thank You", hiTitle: "धन्यवाद", enCat: "Greetings", hiCat: "अभिवादन", icon: "🙏", enDesc: "Touch fingertips to chin and move hand outward.", hiDesc: "उंगलियों के सिरों को ठोड़ी से छूकर हाथ को सामने की ओर लाएं।", grade: "Foundation / All Grades", hiGrade: "फाउंडेशन / सभी कक्षाएं", educatorNote: "Core polite classroom expression.", hiEducatorNote: "मुख्य विनम्र कक्षा अभिव्यक्ति।" },
    { id: 111, enTitle: "Please", hiTitle: "कृपया", enCat: "Greetings", hiCat: "अभिवादन", icon: "🤲", enDesc: "Rub flat hand in a circular motion on your chest.", hiDesc: "चपटे हाथ को सीने पर गोलाकार घुमाएं।", grade: "Foundation / All Grades", hiGrade: "फाउंडेशन / सभी कक्षाएं", educatorNote: "Core polite classroom expression.", hiEducatorNote: "मुख्य विनम्र कक्षा अभिव्यक्ति।" },
    { id: 112, enTitle: "Sorry", hiTitle: "माफ़ कीजिए", enCat: "Greetings", hiCat: "अभिवादन", icon: "🙇", enDesc: "Make a fist and rub it in a circular motion on your chest.", hiDesc: "मुट्ठी बंद करके सीने पर गोलाकार घुमाएं।", grade: "Foundation / All Grades", hiGrade: "फाउंडेशन / सभी कक्षाएं", educatorNote: "Accountability and emotional regulation sign.", hiEducatorNote: "उत्तरदायित्व और भावनात्मक विनियमन संकेत।" },

    // --- Questions & Conversational ---
    { id: 113, enTitle: "What", hiTitle: "क्या", enCat: "Questions", hiCat: "प्रश्न व बातचीत", icon: "❓", enDesc: "Hold both open hands palms up and shake them slightly side to side with a questioning look.", hiDesc: "दोनों खुले हाथों को ऊपर की ओर रखकर हल्का सा हवा में हिलाएं।", grade: "Primary / Grade 2", hiGrade: "प्राथमिक / कक्षा 2", educatorNote: "Fundamental interrogative sign.", hiEducatorNote: "मौलिक प्रश्नवाचक संकेत।" },
    { id: 114, enTitle: "Where", hiTitle: "कहाँ", enCat: "Questions", hiCat: "प्रश्न व बातचीत", icon: "📍", enDesc: "Point index finger up and shake it back and forth horizontally.", hiDesc: "तर्जनी उंगली को ऊपर रखकर क्षैतिज रूप से आ-जा कर हिलाएं।", grade: "Primary / Grade 2", hiGrade: "प्राथमिक / कक्षा 2", educatorNote: "Spatial interrogative sign.", hiEducatorNote: "स्थानिक प्रश्नवाचक संकेत।" },
    { id: 115, enTitle: "Who", hiTitle: "कौन", enCat: "Questions", hiCat: "प्रश्न व बातचीत", icon: "👤", enDesc: "Trace a small circle around your mouth with the tip of your index finger.", hiDesc: "तर्जनी उंगली के सिरे से मुंह के चारों ओर छोटा गोला बनाएं।", grade: "Primary / Grade 2", hiGrade: "प्राथमिक / कक्षा 2", educatorNote: "Person identification interrogative sign.", hiEducatorNote: "व्यक्ति की पहचान का प्रश्नवाचक संकेत।" },
    { id: 116, enTitle: "How are you?", hiTitle: "आप कैसे हैं?", enCat: "Questions", hiCat: "प्रश्न व बातचीत", icon: "🤝", enDesc: "Place both flat hands against your chest, roll them outward and forward.", hiDesc: "दोनों चपटे हाथों को सीने पर रखकर आगे की ओर घुमाएं।", grade: "Primary / Grade 2", hiGrade: "प्राथमिक / कक्षा 2", educatorNote: "Standard conversational wellness check.", hiEducatorNote: "मानक संवादात्मक स्वास्थ्य जाँच।" },
    { id: 117, enTitle: "Do you need help?", hiTitle: "क्या आपको मदद चाहिए?", enCat: "Questions", hiCat: "प्रश्न व बातचीत", icon: "🙋‍♂️", enDesc: "Sign 'You', then make the 'Help' sign with a questioning facial expression.", hiDesc: "'आप' का इशारा करें, फिर चेहरे पर सवालिया भाव के साथ 'मदद' का संकेत दें।", grade: "Primary / Grade 2", hiGrade: "प्राथमिक / कक्षा 2", educatorNote: "Supportive inclusive interaction sign.", hiEducatorNote: "सहायक समावेशी अंतःक्रिया संकेत।" },

    // --- Emotions, Expressions & Desires ---
    { id: 118, enTitle: "I Love You", hiTitle: "मैं तुमसे प्यार करता हूँ", enCat: "Emotions & Desires", hiCat: "भावनाएं व इच्छाएं", icon: "🤟", enDesc: "Extend thumb, index finger, and pinky finger out together (ASL sign for ILY).", hiDesc: "अंगूठा, तर्जनी और छोटी उंगली को एक साथ बाहर फैलाएं।", grade: "Foundation / All Grades", hiGrade: "फाउंडेशन / सभी कक्षाएं", educatorNote: "Popular positive affection sign.", hiEducatorNote: "लोकप्रिय सकारात्मक स्नेह संकेत।" },
    { id: 119, enTitle: "Love", hiTitle: "प्यार / प्रेम", enCat: "Emotions & Desires", hiCat: "भावनाएं व इच्छाएं", icon: "❤️", enDesc: "Cross both arms tightly across your chest over your heart.", hiDesc: "दोनों हाथों को सीने पर दिल के पास क्रॉस करके रखें।", grade: "Foundation / Grade 1", hiGrade: "फाउंडेशन / कक्षा 1", educatorNote: "Affection and emotional warmth sign.", hiEducatorNote: "स्नेह और भावनात्मक गर्ماहट का संकेत।" },
    { id: 120, enTitle: "Like", hiTitle: "पसंद करना", enCat: "Emotions & Desires", hiCat: "भावनाएं व इच्छाएं", icon: "👍", enDesc: "Pull thumb and middle finger away from your chest while extending other fingers.", hiDesc: "अंगूठा और मध्यमा उंगली को सीने से आगे की ओर खींचें।", grade: "Foundation / Grade 1", hiGrade: "फाउंडेशन / कक्षा 1", educatorNote: "Preference expression sign.", hiEducatorNote: "पसंद व्यक्त करने का संकेत।" },
    { id: 121, enTitle: "Want", hiTitle: "चाहना", enCat: "Emotions & Desires", hiCat: "भावनाएं व इच्छाएं", icon: "🤲", enDesc: "Hold both clawed hands out and pull them inward toward your body.", hiDesc: "दोनों हाथों को पंजों की तरह आगे रखकर अपनी ओर खींचें।", grade: "Foundation / Grade 1", hiGrade: "फाउंडेशन / कक्षा 1", educatorNote: "Desire and need communication sign.", hiEducatorNote: "इच्छा और आवश्यकता संवाद संकेत।" },
    { id: 122, enTitle: "Need", hiTitle: "जरूरत है", enCat: "Emotions & Desires", hiCat: "भावनाएं व इच्छाएं", icon: "❗", enDesc: "Bend your index finger like a hook and press it downward slightly.", hiDesc: "तर्जनी उंगली को हुक की तरह मोड़कर नीचे की ओर हल्का सा दबाएं।", grade: "Foundation / Grade 1", hiGrade: "फाउंडेशन / कक्षा 1", educatorNote: "Essential requirement expression.", hiEducatorNote: "आवश्यक जरूरत की अभिव्यक्ति।" },

    // --- Academics (Math & Science) ---
    { 
        id: 123, enTitle: "Addition (+)", hiTitle: "जोड़ / गणित", enCat: "Academics", hiCat: "शैक्षणिक", icon: "➕", 
        enDesc: "Cross your index fingers like a plus sign.", 
        hiDesc: "अपनी तर्जनी उंगलियों को प्लस के निशान की तरह क्रॉस करें।",
        grade: "Primary / Grade 3", hiGrade: "प्राथमिक / कक्षा 3",
        educatorNote: "Great for early math concepts in inclusive mathematics classes.", hiEducatorNote: "समावेशी गणित कक्षाओं में शुरुआती गणित अवधारणाओं के लिए बेहतरीन।" 
    },
    { 
        id: 124, enTitle: "Atom", hiTitle: "परमाणु (Atom)", enCat: "Academics", hiCat: "शैक्षणिक", icon: "⚛️", 
        enDesc: "Draw a small circular motion with index finger representing orbits.", 
        hiDesc: "हवा में तर्जनी उंगली से कक्षा को दर्शाने वाला गोलाकार चक्कर बनाएं।",
        grade: "Middle / Grade 6-8", hiGrade: "मिडिल / कक्षा 6-8",
        educatorNote: "Visual science concept reference for upper primary students.", hiEducatorNote: "उच्च प्राथमिक छात्रों के लिए दृश्य विज्ञान अवधारणा संदर्भ।" 
    },
    { 
        id: 125, enTitle: "Photosynthesis", hiTitle: "प्रकाश संश्लेषण", enCat: "Academics", hiCat: "शैक्षणिक", icon: "🌱", 
        enDesc: "Simulate plant growing upwards absorbing sunlight.", 
        hiDesc: "हथेलियों को फैलाकर पौधे के ऊपर बढ़ने का अभिनय करें।",
        grade: "Middle / Grade 6-8", hiGrade: "मिडिल / कक्षा 6-8",
        educatorNote: "Interactive biology concept demonstration for science educators.", hiEducatorNote: "विज्ञान शिक्षकों के लिए इंटरैक्टिव जीवविज्ञान अवधारणा प्रदर्शन।" 
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
            
            // Bilingual Educator Notes & Curriculum Grade Level Injection
            const gradeText = currentLang === 'en' ? item.grade : (item.hiGrade || item.grade);
            const noteText = currentLang === 'en' ? item.educatorNote : (item.hiEducatorNote || item.educatorNote);
            const gradeLabel = currentLang === 'en' ? "🎯 Curriculum / Grade:" : "🎯 पाठ्यक्रम / कक्षा:";
            const noteLabel = currentLang === 'en' ? "💡 Educator Note:" : "💡 शिक्षक नोट:";

            if (gradeText && noteText) {
                educatorNoteBox.style.display = 'block';
                educatorNoteBox.innerHTML = `
                    <p><strong>${gradeLabel}</strong> ${gradeText}</p>
                    <p><strong>${noteLabel}</strong> ${noteText}</p>
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
