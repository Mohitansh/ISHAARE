// ISHAARE - Main Application Data & Logic
const signsData = [
    // --- DAILY USE ---
    {
        id: "daily-thankyou",
        category: "daily",
        title: "Thank You (धन्यवाद)",
        gesture: "Touch fingertips to chin and move hand outward.",
        hindiGesture: "उंगलियों के सिरों को ठोड़ी से छूकर हाथ को सामने की ओर लाएं।"
    },
    {
        id: "daily-please",
        category: "daily",
        title: "Please (कृपया)",
        gesture: "Rub flat hand in a circular motion on your chest.",
        hindiGesture: "चपटे हाथ को सीने पर गोलाकार घुमाएं।"
    },
    {
        id: "daily-sorry",
        category: "daily",
        title: "Sorry (माफ़ कीजिए)",
        gesture: "Make a fist and rub it in a circular motion on your chest.",
        hindiGesture: "मुट्ठी बंद करके सीने पर गोलाकार घुमाएं।"
    },
    {
        id: "daily-eat",
        category: "daily",
        title: "Eat / Food (खाना)",
        gesture: "Tap fingertips to your mouth twice.",
        hindiGesture: "उंगलियों के सिरों को मुंह के पास दो बार स्पर्श करें।"
    },
    {
        id: "daily-sleep",
        category: "daily",
        title: "Sleep (सोना)",
        gesture: "Tilt head and rest flat hands side-by-side next to your cheek.",
        hindiGesture: "सिर झुकाकर दोनों चपटे हाथों को गाल के पास रखें।"
    },
    {
        id: "daily-walk",
        category: "daily",
        title: "Walk (चलना)",
        gesture: "Move flat hands alternately forward and backward.",
        hindiGesture: "चपटे हाथों को आगे-पीछे चलाएं।"
    },
    {
        id: "daily-think",
        category: "daily",
        title: "Think (सोचना)",
        gesture: "Tap index finger gently on the side of your forehead.",
        hindiGesture: "तर्जनी उंगली को माथे के साइड में हल्के से छुएं।"
    },
    {
        id: "daily-bedroom",
        category: "daily",
        title: "Bedroom (शयनकक्ष)",
        gesture: "Rest hands together against cheek as sleeping, then trace a 'B' shape for room.",
        hindiGesture: "गाल पर हाथ रखकर सोने का संकेत दें, फिर 'Room' बनाएं।"
    },
    {
        id: "daily-livingroom",
        category: "daily",
        title: "Living Room (बैठक)",
        gesture: "Sign 'L' for living, then make a box shape with hands for room.",
        hindiGesture: "'L' संकेत बनाकर हाथों से कमरे का चौकोर आकार बनाएं।"
    },
    {
        id: "daily-help",
        category: "daily",
        title: "Help (मदद)",
        gesture: "Place fist on a flat palm and lift both upward.",
        hindiGesture: "चपटे हाथ पर मुट्ठी रखकर दोनों को ऊपर उठाएं।"
    },
    {
        id: "daily-water",
        category: "daily",
        title: "Water (पानी)",
        gesture: "Tap index finger of a 'W' handshape against your chin twice.",
        hindiGesture: "'W' आकार की उंगली को ठोड़ी पर दो बार लगाएं।"
    },

    // --- EMOTIONS & FAMILY ---
    {
        id: "emo-happy",
        category: "emotions",
        title: "Happy (खुश)",
        gesture: "Brush open hands upward on your chest repeatedly.",
        hindiGesture: "सीने पर खुले हाथों को ऊपर की ओर उठाएं।"
    },
    {
        id: "emo-sad",
        category: "emotions",
        title: "Sad (दुखी)",
        gesture: "Trace hands downward in front of your face with a sad expression.",
        hindiGesture: "उदास चेहरे के साथ हाथों को चेहरे के सामने नीचे की ओर लाएं।"
    },
    {
        id: "emo-angry",
        category: "emotions",
        title: "Angry (गुस्सा)",
        gesture: "Clench hands like claws and pull them away from your face.",
        hindiGesture: "हाथों को पंजे की तरह बंद करके चेहरे के सामने से खींचें।"
    },
    {
        id: "emo-scared",
        category: "emotions",
        title: "Scared (डर हुआ)",
        gesture: "Bring both hands crossed in front of your chest and shake them slightly.",
        hindiGesture: "दोनों हाथों को सीने के सामने क्रॉस करके हल्का सा हिलाएं।"
    },
    {
        id: "emo-excited",
        category: "emotions",
        title: "Excited (उत्साहित)",
        gesture: "Alternate middle fingers brushing upward on your chest.",
        hindiGesture: "मध्य उंगलियों से सीने पर ऊपर की ओर स्पर्श करें।"
    },
    {
        id: "emo-tired",
        category: "emotions",
        title: "Tired (थका हुआ)",
        gesture: "Place curved hands on your chest and let them drop slightly.",
        hindiGesture: "हाथों को मोड़कर सीने पर रखें और थोड़ा नीचे झुकाएं।"
    },
    {
        id: "fam-mother",
        category: "emotions",
        title: "Mother / Mom (माँ)",
        gesture: "Tap thumb of open hand against your chin.",
        hindiGesture: "खुले हाथ के अंगूठे को ठोड़ी पर स्पर्श करें।"
    },
    {
        id: "fam-father",
        category: "emotions",
        title: "Father / Dad (पिता)",
        gesture: "Tap thumb of open hand against your forehead.",
        hindiGesture: "खुले हाथ के अंगूठे को माथे पर स्पर्श करें।"
    },
    {
        id: "fam-brother",
        category: "emotions",
        title: "Brother (भाई)",
        gesture: "Bring index fingers together from forehead pointing forward.",
        hindiGesture: "माथे से तर्जनी उंगलियों को आगे की ओर लाएं।"
    },
    {
        id: "fam-sister",
        category: "emotions",
        title: "Sister (बहन)",
        gesture: "Slide thumb of one hand down the index finger of the other hand.",
        hindiGesture: "एक हाथ के अंगूठे को दूसरे हाथ की तर्जनी उंगली पर नीचे लाएं।"
    },
    {
        id: "fam-friend",
        category: "emotions",
        title: "Friend (दोस्त)",
        gesture: "Hook index fingers together back and forth.",
        hindiGesture: "दोनों हाथों की तर्जनी उंगलियों को आपस में हुक करें।"
    },
    {
        id: "fam-brotherinlaw",
        category: "emotions",
        title: "Brother-in-Law (साला / जीजा)",
        gesture: "Sign 'B' combined with relative sign indicator.",
        hindiGesture: "'B' का संकेत बनाकर रिश्ते का इशारा करें।"
    },
    {
        id: "fam-fatherinlaw",
        category: "emotions",
        title: "Father-in-Law (ससुर)",
        gesture: "Sign 'F' combined with relative sign indicator.",
        hindiGesture: "'F' का संकेत बनाकर आगे का इशारा जोड़ें।"
    },
    {
        id: "fam-sisterinlaw",
        category: "emotions",
        title: "Sister-in-Law (साली / भाभी)",
        gesture: "Sign 'Sister' combined with relation indicator.",
        hindiGesture: "बहन का संकेत बनाकर रिश्ते का इशारा करें।"
    },
    {
        id: "fam-uncle",
        category: "emotions",
        title: "Uncle (चाचा / ताऊ / मामा)",
        gesture: "Tap thumb of a modified 'U' hand against the side of your head.",
        hindiGesture: "सिर के पास 'U' आकार के हाथ से इशारा करें।"
    },
    {
        id: "fam-aunt",
        category: "emotions",
        title: "Aunt (चाची / ताए / मामी)",
        gesture: "Tap thumb of a modified 'A' hand against the side of your chin.",
        hindiGesture: "गाल के पास 'A' आकार के हाथ से इशारा करें।"
    },

    // --- COLORS ---
    {
        id: "col-red",
        category: "colors",
        title: "Red (लाल)",
        gesture: "Draw index finger down from lips twice.",
        hindiGesture: "तर्जनी उंगली को होंठों से नीचे की ओर दो बार चलाएं।"
    },
    {
        id: "col-blue",
        category: "colors",
        title: "Blue (नीला)",
        gesture: "Shake a 'B' handshape slightly back and forth.",
        hindiGesture: "हाथ को 'B' आकार में रखकर हल्का सा हवा में hilaen।"
    },
    {
        id: "col-green",
        category: "colors",
        title: "Green (हरा)",
        gesture: "Shake a 'G' handshape slightly back and forth.",
        hindiGesture: "हाथ को 'G' आकार में रखकर हल्का सा हिलाएं।"
    },
    {
        id: "col-yellow",
        category: "colors",
        title: "Yellow (पीला)",
        gesture: "Twist a 'Y' handshape back and forth near the side.",
        hindiGesture: "हाथ को 'Y' आकार में रखकर कलाई को घुमाएं।"
    },
    {
        id: "col-black",
        category: "colors",
        title: "Black (काला)",
        gesture: "Draw index finger across the forehead.",
        hindiGesture: "तर्जनी उंगली को माथे के पार क्षैतिज रूप से ले जाएं।"
    },
    {
        id: "col-white",
        category: "colors",
        title: "White (सफेद)",
        gesture: "Pull fingertips away from the chest while changing hand shape.",
        hindiGesture: "उंगलियों के सिरों को सीने से आगे की ओर खींचें।"
    },
    {
        id: "col-orange",
        category: "colors",
        title: "Orange (नारंगी)",
        gesture: "Squeeze and relax a fist in front of the chin.",
        hindiGesture: "ठोड़ी के सामने मुट्ठी को सिकोड़ें और खोलें।"
    },
    {
        id: "col-pink",
        category: "colors",
        title: "Pink (गुलाबी)",
        gesture: "Touch chin with the middle finger of a 'P' handshape.",
        hindiGesture: "'P' आकार की उंगली से ठोड़ी को छूएं।"
    },

    // --- NUMBERS (0-9) ---
    {
        id: "num-0",
        category: "numbers",
        title: "0 (शून्य - Zero)",
        gesture: "Form an 'O' shape with thumb and fingers.",
        hindiGesture: "अंगूठे और उंगलियों से 'O' आकार बनाएं।"
    },
    {
        id: "num-1",
        category: "numbers",
        title: "1 (एक - One)",
        gesture: "Hold up index finger pointing up.",
        hindiGesture: "तर्जनी उंगली को ऊपर की ओर खड़ा करें।"
    },
    {
        id: "num-2",
        category: "numbers",
        title: "2 (दो - Two)",
        gesture: "Hold up index and middle fingers in a 'V' shape.",
        hindiGesture: "तर्जनी और मध्य उंगली से 'V' आकार बनाएं।"
    },
    {
        id: "num-3",
        category: "numbers",
        title: "3 (तीन - Three)",
        gesture: "Hold up thumb, index, and middle fingers.",
        hindiGesture: "अंगूठा, तर्जनी और मध्य उंगली को खड़ा करें।"
    },
    {
        id: "num-4",
        category: "numbers",
        title: "4 (चार - Four)",
        gesture: "Hold up four fingers with thumb folded inward.",
        hindiGesture: "अंगूठे को अंदर मोड़कर चार उंगलियां खड़ी करें।"
    },
    {
        id: "num-5",
        category: "numbers",
        title: "5 (पाँच - Five)",
        gesture: "Spread all five fingers open.",
        hindiGesture: "पांचों उंगलियों को फैलाकर दिखाएं।"
    },
    {
        id: "num-6",
        category: "numbers",
        title: "6 (छः - Six)",
        gesture: "Touch thumb tip to little finger tip.",
        hindiGesture: "अंगूठे के सिरे को सबसे छोटी उंगली के सिरे से छुएं।"
    },
    {
        id: "num-7",
        category: "numbers",
        title: "7 (सात - Seven)",
        gesture: "Touch thumb tip to ring finger tip.",
        hindiGesture: "अंगूठे के सिरे को अनामिका उंगली के सिरे से छुएं।"
    },
    {
        id: "num-8",
        category: "numbers",
        title: "8 (आठ - Eight)",
        gesture: "Touch thumb tip to middle finger tip.",
        hindiGesture: "अंगूठे के सिरे को मध्य उंगली के सिरे से छुएं।"
    },
    {
        id: "num-9",
        category: "numbers",
        title: "9 (नौ - Nine)",
        gesture: "Touch thumb tip to index finger tip.",
        hindiGesture: "अंगूठे के सिरे को तर्जनी उंगली के सिरे से छुएं।"
    }
];

// UI Rendering & Event Listeners Logic
document.addEventListener('DOMContentLoaded', () => {
    renderSigns(signsData);
    setupFilters();
    setupSearch();
});

function renderSigns(data) {
    const grid = document.getElementById('signsGrid');
    if (!grid) return;
    
    grid.innerHTML = data.map(item => `
        <div class="sign-card" data-category="${item.category}">
            <h3>${item.title}</h3>
            <p class="gesture-en"><strong>EN:</strong> ${item.gesture}</p>
            <p class="gesture-hi"><strong>HI:</strong> ${item.hindiGesture}</p>
        </div>
    `).join('');
}

function setupFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.getAttribute('data-filter');
            const cards = document.querySelectorAll('.sign-card');
            
            cards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = signsData.filter(item => 
            item.title.toLowerCase().includes(query) || 
            item.gesture.toLowerCase().includes(query) ||
            item.hindiGesture.includes(query)
        );
        renderSigns(filtered);
    });
}
