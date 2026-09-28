// --- ISHARE APP: FINAL MERGED CODE ---

const aslUniversalData = [
    {
        id: 'alpha-a',
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
        id: 'alpha-b',
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
        id: 'word-water',
        category: 'daily',
        titleEn: 'Water',
        titleHi: 'पानी',
        descEn: 'Form a "W" with three fingers up, tap chin twice with the index finger.',
        hiDescEn: 'Teen ungliyon se "W" banayein, index finger se thodi (chin) ko do baar chhuayein.',
        grade: 'Grade 1-3 - Daily Survival Vocabulary',
        hiGrade: 'कक्षा 1-3 - दैनिक शब्दावली',
        educatorNote: 'Essential for inclusive classrooms for hydration requests.',
        hiEducatorNote: 'Paani ki maang ke liye inclusive classroom mein yeh sabse zaroori hai.'
    }
];

const islOfficialData = [
    {
        id: 'isl-a',
        category: 'alphabet',
        titleEn: 'ISL Letter A',
        titleHi: 'ISL वर्ण A',
        descEn: 'Closed fist with the thumb resting on the side pointing upward (ISLRTC Standard).',
        hiDescEn: 'Muthi band aur angutha side mein upar ki taraf (ISLRTC मानक).',
        grade: 'ISL Level 1 - Basic Handshapes',
        hiGrade: 'ISL स्तर 1 - बुनियादी आकृतियाँ',
        educatorNote: 'Official ISL manual alphabet reference for certified training.',
        hiEducatorNote: 'Prashikshit shikshakon ke liye aadhikarik ISL manual alphabet sandarbh.'
    },
    {
        id: 'isl-water',
        category: 'daily',
        titleEn: 'ISL Water',
        titleHi: 'ISL पानी',
        descEn: 'Bring the right hand index finger pointing sideways near the mouth, simulating drinking motion.',
        hiDescEn: 'Daye haath ki index finger ko muh ke paas rakh kar peene ka ishara karein.',
        grade: 'ISL Everyday Communication',
        hiGrade: 'ISL दैनिक संवाद',
        educatorNote: 'Strictly aligned with Indian Sign Language regional training modules.',
        hiEducatorNote: 'Bharatiya Sanket Bhasha ke kshetriya prashikshan modules ke anuroop.'
    }
];

let currentMode = 'asl';
let currentLang = 'en';
let activeCategory = 'all';

// DOM Elements
const searchInput = document.getElementById('searchInput');
const cardsGrid = document.getElementById('cardsGrid');
const langToggleBtn = document.getElementById('langToggleBtn');
const modeToggleBtn = document.getElementById('modeToggleBtn');
const tabBtns = document.querySelectorAll('.tab-btn');

// Modals
const welcomeModal = document.getElementById('welcomeModal');
const closeWelcome = document.getElementById('closeWelcome');
const gotItBtn = document.getElementById('gotItBtn');

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
        cardsGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #64748b;">🔍 ${currentLang === 'en' ? 'No signs found.' : 'Koi sign nahi mila.'}</div>`;
        return;
    }

    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'sign-card';
        
        const title = currentLang === 'en' ? item.titleEn : item.titleHi;
        const desc = currentLang === 'en' ? item.descEn : item.hiDescEn;

        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                <span style="background: ${currentMode === 'isl' ? '#2e7d32' : '#4f46e5'}; color: white; padding: 2px 8px; border-radius: 4px; font-size: 11px; font-weight:600;">✨ ${currentMode.toUpperCase()}</span>
                <span style="font-size: 12px; color: #64748b; font-weight: 500;">🏷️ ${item.category.toUpperCase()}</span>
            </div>
            <h3 style="margin: 0 0 8px 0; font-size: 18px; color: #1e293b;">📖 ${title}</h3>
            <p style="color: #475569; font-size: 14px; margin: 0 0 15px 0; line-height: 1.4;">💬 ${desc}</p>
            <div style="font-size: 13px; color: var(--primary-color); font-weight: 600;">👁️ ${currentLang === 'en' ? 'View Details & Notes →' : 'विवरण और नोट्स देखें →'}</div>
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

function toggleMode() {
    currentMode = currentMode === 'asl' ? 'isl' : 'asl';
    if (modeToggleBtn) {
        modeToggleBtn.textContent = currentMode === 'isl' ? '🟢 ISL Mode' : '🔵 ASL Mode';
        modeToggleBtn.style.background = currentMode === 'isl' ? '#2e7d32' : '#1976d2';
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

    detailModal.style.display = 'flex';
}

function setupEventListeners() {
    if (searchInput) searchInput.addEventListener('input', renderCards);
    if (langToggleBtn) langToggleBtn.addEventListener('click', toggleLanguage);
    if (modeToggleBtn) modeToggleBtn.addEventListener('click', toggleMode);

    // Category Tabs
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCategory = btn.getAttribute('data-category');
            renderCards();
        });
    });

    // Welcome Modal Closing logic (Fixed)
    const closeWelcomePopup = () => {
        if (welcomeModal) welcomeModal.style.display = 'none';
    };
    if (closeWelcome) closeWelcome.addEventListener('click', closeWelcomePopup);
    if (gotItBtn) gotItBtn.addEventListener('click', closeWelcomePopup);

    // Detail Modal Closing
    if (closeModalBtn) closeModalBtn.addEventListener('click', () => detailModal.style.display = 'none');

    // Request Modal Open/Close
    if (openRequestModalBtn && requestModal) {
        openRequestModalBtn.addEventListener('click', () => requestModal.style.display = 'flex');
    }
    if (closeRequestModal && requestModal) {
        closeRequestModal.addEventListener('click', () => requestModal.style.display = 'none');
    }

    // Window click outside modals to close
    window.addEventListener('click', (e) => {
        if (e.target === detailModal) detailModal.style.display = 'none';
        if (e.target === requestModal) requestModal.style.display = 'none';
        if (e.target === welcomeModal) welcomeModal.style.display = 'none';
    });
}

window.onload = initApp;
