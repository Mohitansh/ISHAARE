// --- ISHARE APP: FULL MERGED CODE WITH DUAL-MODE & EMOJIS ---

// 1. ASL / Universal Dataset (Purana Data)
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

// 2. Official ISL Dataset (Naya Mode Data)
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

// State variables
let currentMode = 'asl'; // 'asl' or 'isl'
let currentLang = 'en';  // 'en' or 'hi'
let activeCategory = 'all';

// DOM Elements
const searchInput = document.getElementById('searchInput');
const cardsGrid = document.getElementById('cardsGrid');
const langToggleBtn = document.getElementById('langToggleBtn');
const modeToggleBtn = document.getElementById('modeToggleBtn');
const categoryBtns = document.querySelectorAll('.category-btn');

// Modal Elements
const detailModal = document.getElementById('detailModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalDesc = document.getElementById('modalDesc');
const educatorNoteBox = document.getElementById('educatorNoteBox');

// Initialize App
function initApp() {
    renderCards();
    setupEventListeners();
}

// Get active dataset based on mode
function getActiveDataset() {
    return currentMode === 'isl' ? islOfficialData : aslUniversalData;
}

// Render Cards
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
        cardsGrid.innerHTML = `<div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 40px; color: #666;">🔍 ${currentLang === 'en' ? 'No signs found.' : 'Koi sign nahi mila.'}</div>`;
        return;
    }

    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'sign-card';
        
        const title = currentLang === 'en' ? item.titleEn : item.titleHi;
        const desc = currentLang === 'en' ? item.descEn : item.hiDescEn;

        card.innerHTML = `
            <div class="card-header" style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                <span class="badge" style="background: ${currentMode === 'isl' ? '#2e7d32' : '#1976d2'}; color: white; padding: 2px 8px; border-radius: 4px; font-size: 11px;">✨ ${currentMode.toUpperCase()}</span>
                <span class="category-tag" style="font-size: 12px; color: #666; font-weight: 500;">🏷️ ${item.category.toUpperCase()}</span>
            </div>
            <h3 style="margin-bottom: 8px; font-size: 18px;">📖 ${title}</h3>
            <p style="color: #444; font-size: 14px; margin-bottom: 15px;">💬 ${desc}</p>
            <button class="view-details-btn" onclick="openDetailModal('${item.id}')" style="width: 100%; padding: 8px; background: #f0f4f8; border: 1px solid #d1d9e0; border-radius: 6px; cursor: pointer; font-weight: 500;">👁️ ${currentLang === 'en' ? 'View Details & Notes' : 'विवरण और नोट्स देखें'}</button>
        `;
        cardsGrid.appendChild(card);
    });
}

// Toggle Language
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'hi' : 'en';
    if (langToggleBtn) {
        langToggleBtn.textContent = currentLang === 'en' ? '🇮🇳 हिंदी' : '🇬🇧 English';
    }
    renderCards();
}

// Toggle Mode (ASL vs ISL)
function toggleMode() {
    currentMode = currentMode === 'asl' ? 'isl' : 'asl';
    if (modeToggleBtn) {
        modeToggleBtn.textContent = currentMode === 'isl' ? '🟢 Mode: ISL (Official)' : '🔵 Mode: ASL / Universal';
        modeToggleBtn.style.background = currentMode === 'isl' ? '#2e7d32' : '#1976d2';
    }
    renderCards();
}

// Open Detail Modal
function openDetailModal(id) {
    const dataset = getActiveDataset();
    const item = dataset.find(i => i.id === id);
    if (!item || !detailModal) return;

    if (modalTitle) modalTitle.textContent = `📖 ${currentLang === 'en' ? item.titleEn : item.titleHi}`;
    if (modalCategory) modalCategory.textContent = `🏷️ Category: ${item.category.toUpperCase()} (${currentMode.toUpperCase()})`;
    if (modalDesc) modalDesc.textContent = `💬 ${currentLang === 'en' ? item.descEn : item.hiDescEn}`;

    // Bilingual Educator Notes & Curriculum Grade Level
    const gradeText = currentLang === 'en' ? item.grade : (item.hiGrade || item.grade);
    const noteText = currentLang === 'en' ? item.educatorNote : (item.hiEducatorNote || item.educatorNote);
    const gradeLabel = currentLang === 'en' ? "🎯 Curriculum / Grade:" : "🎯 पाठ्यक्रम / कक्षा:";
    const noteLabel = currentLang === 'en' ? "💡 Educator Note:" : "💡 शिक्षक नोट:";

    if (educatorNoteBox) {
        if (gradeText && noteText) {
            educatorNoteBox.style.display = 'block';
            educatorNoteBox.innerHTML = `
                <p style="margin-bottom: 8px;"><strong>${gradeLabel}</strong> ${gradeText}</p>
                <p><strong>${noteLabel}</strong> ${noteText}</p>
            `;
        } else {
            educatorNoteBox.style.display = 'none';
        }
    }

    detailModal.style.display = 'flex';
}

// Close Modal Functions
function closeModal() {
    if (detailModal) detailModal.style.display = 'none';
}

// Setup Event Listeners
function setupEventListeners() {
    if (searchInput) searchInput.addEventListener('input', renderCards);
    if (langToggleBtn) langToggleBtn.addEventListener('click', toggleLanguage);
    if (modeToggleBtn) modeToggleBtn.addEventListener('click', toggleMode);

    // Category Buttons Filtering
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCategory = btn.getAttribute('data-category');
            renderCards();
        });
    });

    // Modal Close Listeners
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === detailModal) closeModal();
    });
}

// Run on window load
window.onload = initApp;
