// --- ISHARE APP: ASL & OFFICIAL ISL (ISLRTC STANDARDS) DATA ---

const aslUniversalData = [
    {
        id: 'asl-alpha-a',
        category: 'alphabet',
        titleEn: 'Letter A',
        titleHi: 'वर्ण A',
        descEn: 'Make a fist with the thumb resting straight up against the side of the index finger.',
        hiDescEn: 'Muthi band karein aur anguthe ko index finger ke sath bilkul seedha khada rakhein.',
        grade: 'Grade 1 - Early Literacy',
        hiGrade: 'कक्षा 1 - शुरुआती साक्षरता',
        educatorNote: 'Ensure student keeps the thumb straight, not wrapped across fingers.',
        hiEducatorNote: 'Dhyan dein ki angutha seedha ho, ungliyon ke upar na muda ho.'
    },
    {
        id: 'asl-alpha-b',
        category: 'alphabet',
        titleEn: 'Letter B',
        titleHi: 'वर्ण B',
        descEn: 'Hold hand upright, fingers together pointing up, thumb folded across the palm.',
        hiDescEn: 'Haath upar rakhein, ungliyan aapas mein mili hui upar ki taraf, angutha hatheli par muda hua.',
        grade: 'Grade 1 - Early Literacy',
        hiGrade: 'कक्षा 1 - शुरुआती साक्षरता',
        educatorNote: 'Common error: student might curve fingers. Keep them straight.',
        hiEducatorNote: 'Aam galti: bacha ungliyan mod sakta hai. Unhe bilkul seedha rakhwayein.'
    },
    {
        id: 'asl-water',
        category: 'daily',
        titleEn: 'Water',
        titleHi: 'पानी',
        descEn: 'Form a "W" with three fingers up, tap chin twice with the index finger.',
        hiDescEn: 'Teen ungliyon se "W" banayein, index finger se thodi (chin) ko do baar chhuayein.',
        grade: 'Grade 1-3 - Daily Survival Vocabulary',
        hiGrade: 'कक्षा 1-3 - दैनिक शब्दावली',
        educatorNote: 'Essential for inclusive classrooms for hydration requests.',
        hiEducatorNote: 'Paani ki maang ke liye inclusive classroom mein yeh sabse zaroori hai.'
    },
    {
        id: 'asl-count-1',
        category: 'counting',
        titleEn: 'Number 1',
        titleHi: 'संख्या 1',
        descEn: 'Hold hand up with index finger pointing straight up, palm facing inward.',
        hiDescEn: 'Index finger ko upar ki taraf seedha khada rakhein, hatheli andar ki taraf.',
        grade: 'Grade 1 - Basic Math',
        hiGrade: 'कक्षा 1 - गणित बुनियादी',
        educatorNote: 'Keep other fingers folded tightly into the palm.',
        hiEducatorNote: 'Baaki ungliyon ko hatheli mein mazbooti se mod kar rakhein.'
    },
    {
        id: 'asl-emo-happy',
        category: 'emotions',
        titleEn: 'Happy',
        titleHi: 'खुश',
        descEn: 'Brush flat hands upward against the chest twice with a smiling expression.',
        hiDescEn: 'Chapti hatheliyon ko chhaati par do baar upar ki taraf le jayein, muskurate hue.',
        grade: 'Social-Emotional Learning',
        hiGrade: 'सामाजिक-भावनात्मक शिक्षण',
        educatorNote: 'Facial expressions are vital for conveying emotion signs accurately.',
        hiEducatorNote: 'Bhavnao ko sahi se darshane ke liye chehre ke hav-bhav mahatvapurna hain.'
    }
];

const islOfficialData = [
    {
        id: 'isl-alpha-a',
        category: 'alphabet',
        titleEn: 'ISL Letter A (ISLRTC)',
        titleHi: 'ISL वर्ण अ / A (मानक)',
        descEn: 'Closed fist with the thumb resting on the side pointing upward, as per ISLRTC standard guidelines.',
        hiDescEn: 'ISLRTC मानक दिशानिर्देशों के अनुसार, अंगूठे को तर्जनी के पास ऊपर की ओर रखते हुए बंद मुट्ठी।',
        grade: 'ISL Level 1 - Basic Handshapes',
        hiGrade: 'ISL स्तर 1 - बुनियादी आकृतियाँ',
        educatorNote: 'Official Indian Sign Language manual alphabet reference for certified training.',
        hiEducatorNote: 'प्रमाणित प्रशिक्षण के लिए आधिकारिक भारतीय सांकेतिक भाषा मैन्युअल वर्णमाला संदर्भ।'
    },
    {
        id: 'isl-water',
        category: 'daily',
        titleEn: 'ISL Water (Paani)',
        titleHi: 'ISL पानी',
        descEn: 'Bring the right hand index finger pointing sideways near the mouth, simulating drinking motion (ISLRTC Lexicon).',
        hiDescEn: 'दाहिने हाथ की तर्जनी को मुंह के पास क्षैतिज रूप से रखकर पीने की क्रिया का संकेत (ISLRTC शब्दकोश)।',
        grade: 'ISL Everyday Communication',
        hiGrade: 'ISL दैनिक संवाद',
        educatorNote: 'Strictly aligned with Indian Sign Language regional training modules.',
        hiEducatorNote: 'भारतीय सांकेतिक भाषा के क्षेत्रीय प्रशिक्षण मॉड्यूल के बिल्कुल अनुरूप।'
    },
    {
        id: 'isl-hindi-a',
        category: 'hindi',
        titleEn: 'ISL Vowel - अ',
        titleHi: 'ISL स्वर - अ',
        descEn: 'Standard regional hand gesture representing the Hindi vowel sound "A" in inclusive institutions.',
        hiDescEn: 'समावेशी संस्थानों में हिंदी स्वर ध्वनि "अ" का प्रतिनिधित्व करने वाला मानक क्षेत्रीय संकेत।',
        grade: 'ISL Foundation - Varnmala',
        hiGrade: 'ISL फाउंडेशन - वर्णमाला',
        educatorNote: 'Connects phonetic pronunciation with tactile sign recognition.',
        hiDescEn: 'ध्वन्यात्मक उच्चारण को स्पर्शनीय संकेत पहचान के साथ जोड़ता है।'
    },
    {
        id: 'isl-count-1',
        category: 'counting',
        titleEn: 'ISL Number 1',
        titleHi: 'ISL संख्या 1',
        descEn: 'Index finger extended upward from a closed fist with palm oriented toward the recipient.',
        hiDescEn: 'प्राप्तकर्ता की ओर हथेली करते हुए बंद मुट्ठी से तर्जनी को ऊपर की ओर फैलाना।',
        grade: 'ISL Numeracy Level 1',
        hiGrade: 'ISL संख्यात्मकता स्तर 1',
        educatorNote: 'Fundamental building block for classroom attendance and counting exercises.',
        hiEducatorNote: 'कक्षा की उपस्थिति और गिनती के अभ्यास के लिए बुनियादी आधार।'
    }
];

let currentMode = 'asl'; // 'asl' or 'isl'
let currentLang = 'en';
let activeCategory = 'all';

// DOM Elements
const searchInput = document.getElementById('searchInput');
const cardsGrid = document.getElementById('cardsGrid');
const langToggleBtn = document.getElementById('langToggleBtn');
const aslTabBtn = document.getElementById('aslTabBtn');
const islTabBtn = document.getElementById('islTabBtn');
const tabBtns = document.querySelectorAll('.tab-btn');

// Modals
const detailModal = document.getElementById('detailModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalDesc = document.getElementById('modalDesc');
const educatorNoteBox = document.getElementById('educatorNoteBox');

const requestModal = document.getElementById('requestModal');
const openRequestModalBtn = document.getElementById('openRequestModalBtn');
const closeRequestModal = document.getElementById('closeRequestModal');

function initApp() {
    renderCards();
    setupEventListeners();
}

function getActiveDataset() {
    return currentMode === 'isl' ? islOfficialData : aslUniversalData;
}

function renderCards() {
    cardsGrid.innerHTML = '';
    const dataset = getActiveDataset();
    const query = searchInput.value.toLowerCase().trim();

    const filtered = dataset.filter(item => {
        const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
        const titleMatch = item.titleEn.toLowerCase().includes(query) || item.titleHi.toLowerCase().includes(query);
        const descMatch = item.descEn.toLowerCase().includes(query) || item.hiDescEn.toLowerCase().includes(query);
        return matchesCategory && (titleMatch || descMatch);
    });

    if (filtered.length === 0) {
        cardsGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #64748b;">🔍 ${currentLang === 'en' ? 'No signs found in this category.' : 'Is category mein koi sign nahi mila.'}</div>`;
        return;
    }

    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'sign-card';
        
        const title = currentLang === 'en' ? item.titleEn : item.titleHi;
        const desc = currentLang === 'en' ? item.descEn : item.hiDescEn;
        const badgeColor = currentMode === 'isl' ? '#059669' : '#4f46e5';

        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                <span style="background: ${badgeColor}; color: white; padding: 2px 8px; border-radius: 4px; font-size: 11px; font-weight:600;">✨ ${currentMode.toUpperCase()}</span>
                <span style="font-size: 12px; color: #64748b; font-weight: 500;">🏷️ ${item.category.toUpperCase()}</span>
            </div>
            <h3 style="margin: 0 0 8px 0; font-size: 18px; color: #1e293b;">📖 ${title}</h3>
            <p style="color: #475569; font-size: 14px; margin: 0 0 15px 0; line-height: 1.4;">💬 ${desc}</p>
            <div style="font-size: 13px; color: ${badgeColor}; font-weight: 600;">👁️ ${currentLang === 'en' ? 'View Details & Notes →' : 'विवरण और नोट्स देखें →'}</div>
        `;
        
        card.addEventListener('click', () => openDetailModal(item.id));
        cardsGrid.appendChild(card);
    });
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'hi' : 'en';
    if (langToggleBtn) {
        langToggleBtn.textContent = currentLang === 'en' ? '🇮🇳 हिंदी / EN' : '🇬🇧 English / HI';
    }
    renderCards();
}

function switchPrimaryMode(mode) {
    currentMode = mode;
    if (mode === 'asl') {
        aslTabBtn.classList.add('active');
        islTabBtn.classList.remove('active');
    } else {
        islTabBtn.classList.add('active');
        aslTabBtn.classList.remove('active');
    }
    renderCards();
}

function openDetailModal(id) {
    const dataset = getActiveDataset();
    const item = dataset.find(i => i.id === id);
    if (!item || !detailModal) return;

    if (modalTitle) modalTitle.textContent = `📖 ${currentLang === 'en' ? item.titleEn : item.titleHi}`;
    if (modalCategory) modalCategory.textContent = `🏷️ Category: ${item.category.toUpperCase()} (${currentMode.toUpperCase()})`;
    if (modalDesc) modalDesc.textContent = `💬 ${currentLang === 'en' ? item.descEn : item.hiDescEn}`;

    const gradeText = currentLang === 'en' ? item.grade : (item.hiGrade || item.grade);
    const noteText = currentLang === 'en' ? item.educatorNote : (item.hiEducatorNote || item.educatorNote);
    const gradeLabel = currentLang === 'en' ? "🎯 Curriculum / Grade:" : "🎯 पाठ्यक्रम / कक्षा:";
    const noteLabel = currentLang === 'en' ? "💡 Educator Note:" : "💡 शिक्षक नोट:";

    if (educatorNoteBox) {
        if (gradeText && noteText) {
            educatorNoteBox.style.display = 'block';
            educatorNoteBox.innerHTML = `
                <p style="margin-bottom: 8px;"><strong>${gradeLabel}</strong> ${gradeText}</p>
                <p style="margin: 0;"><strong>${noteLabel}</strong> ${noteText}</p>
            `;
        } else {
            educatorNoteBox.style.display = 'none';
        }
    }

    detailModal.classList.add('active');
}

function setupEventListeners() {
    if (searchInput) searchInput.addEventListener('input', renderCards);
    if (langToggleBtn) langToggleBtn.addEventListener('click', toggleLanguage);

    // Primary Mode Switcher Listeners
    if (aslTabBtn) aslTabBtn.addEventListener('click', () => switchPrimaryMode('asl'));
    if (islTabBtn) islTabBtn.addEventListener('click', () => switchPrimaryMode('isl'));

    // Sub-Category Tabs Listeners
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCategory = btn.getAttribute('data-category');
            renderCards();
        });
    });

    // Detail Modal Closing
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => detailModal.classList.remove('active'));
    }

    // Request Modal Open/Close
    if (openRequestModalBtn && requestModal) {
        openRequestModalBtn.addEventListener('click', () => requestModal.classList.add('active'));
    }
    if (closeRequestModal && requestModal) {
        closeRequestModal.addEventListener('click', () => requestModal.classList.remove('active'));
    }

    // Window click outside modals to close
    window.addEventListener('click', (e) => {
        if (e.target === detailModal) detailModal.classList.remove('active');
        if (e.target === requestModal) requestModal.classList.remove('active');
    });
}

window.onload = initApp;
