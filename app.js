// --- ISHARE APP: FULL SCRIPT & BILINGUAL DATA ---

const aslUniversalData = [
    { id: 'asl-a', category: 'alphabet', titleEn: 'Letter A', titleHi: 'वर्ण A', descEn: 'Make a fist with the thumb resting straight up against the side of the index finger.', hiDescEn: 'Muthi band karein aur anguthe ko index finger ke sath bilkul seedha khada rakhein.', grade: 'Grade 1 - Early Literacy', hiGrade: 'कक्षा 1 - शुरुआती साक्षरता', educatorNote: 'Ensure the student keeps the thumb straight and upright.', hiEducatorNote: 'Dhyan dein ki angutha seedha ho.' },
    { id: 'asl-b', category: 'alphabet', titleEn: 'Letter B', titleHi: 'वर्ण B', descEn: 'Hold hand upright, fingers together pointing straight up, thumb folded across the palm.', hiDescEn: 'Haath upar rakhein, ungliyan aapas mein mili hui upar ki taraf, angutha hatheli par.', grade: 'Grade 1 - Early Literacy', hiGrade: 'कक्षा 1 - शुरुआती साक्षरता', educatorNote: 'Keep fingers firm and straight.', hiEducatorNote: 'Ungliyon ko seedha rakhein.' },
    { id: 'asl-c', category: 'alphabet', titleEn: 'Letter C', titleHi: 'वर्ण C', descEn: 'Curve your hand and fingers to form the shape of the letter C.', hiDescEn: 'Apne haath aur ungliyon ko C ka aakar dene ke liye modein.', grade: 'Grade 1 - Early Literacy', hiGrade: 'कक्षा 1 - शुरुआती साक्षरता', educatorNote: 'Curve should resemble a clear semicircle.', hiEducatorNote: 'Curve ekdam saaf semicircle jaisa ho.' },
    { id: 'asl-d', category: 'alphabet', titleEn: 'Letter D', titleHi: 'वर्ण D', descEn: 'Point index finger straight up, thumb and other fingers touch to form a circle.', hiDescEn: 'Index finger seedha upar, angutha aur baaki ungliyan circle banayein.', grade: 'Grade 1 - Early Literacy', hiGrade: 'कक्षा 1 - शुरुआती साक्षरता', educatorNote: 'Check for a clear circular gap.', hiEducatorNote: 'Gol gap ko check karein.' },
    { id: 'asl-e', category: 'alphabet', titleEn: 'Letter E', titleHi: 'वर्ण E', descEn: 'Curl all fingers down towards palm, thumb tucked horizontally.', hiDescEn: 'Sabhi ungliyan hatheli ki taraf modein, angutha neeche horizontally ho.', grade: 'Grade 1 - Early Literacy', hiGrade: 'कक्षा 1 - शुरुआती साक्षरता', educatorNote: 'Fingertips rest gently on thumb tip.', hiEducatorNote: 'Sire anguthe par halke tikey hon.' },
    { id: 'asl-f', category: 'alphabet', titleEn: 'Letter F', titleHi: 'वर्ण F', descEn: 'Touch index tip to thumb tip, other three fingers extended.', hiDescEn: 'Index tip ko anguthe se chhuayein, teen ungliyan upar rahengi.', grade: 'Grade 1 - Early Literacy', hiGrade: 'कक्षा 1 - शुरुआती साक्षरता', educatorNote: 'Looks like OK sign shape.', hiEducatorNote: 'OK sign jaisa dikhta hai.' },
    { id: 'asl-g', category: 'alphabet', titleEn: 'Letter G', titleHi: 'वर्ण G', descEn: 'Point index and thumb horizontally forward, parallel.', hiDescEn: 'Index aur anguthe ko samne horizontal rakhein.', grade: 'Grade 1 - Early Literacy', hiGrade: 'कक्षा 1 - शुरुआती साक्षरता', educatorNote: 'Hand is oriented sideways.', hiEducatorNote: 'Haath side ki taraf hota hai.' },
    { id: 'asl-h', category: 'alphabet', titleEn: 'Letter H', titleHi: 'वर्ण H', descEn: 'Extend index and middle fingers horizontally together.', hiDescEn: 'Index aur middle finger ko horizontal side ki taraf failayein.', grade: 'Grade 1 - Early Literacy', hiGrade: 'कक्षा 1 - शुरुआती साक्षरता', educatorNote: 'Keep fingers parallel and close.', hiEducatorNote: 'Ungliyon ko satakar rakhein.' },
    { id: 'asl-i', category: 'alphabet', titleEn: 'Letter I', titleHi: 'वर्ण I', descEn: 'Extend only little finger straight up, others in fist.', hiDescEn: 'Sirf pinky finger seedha upar, baaki muthi mein.', grade: 'Grade 1 - Early Literacy', hiGrade: 'कक्षा 1 - शुरुआती साक्षरता', educatorNote: 'Palm should face outward.', hiEducatorNote: 'Hatheli samne honi chahiye.' },
    { id: 'asl-j', category: 'alphabet', titleEn: 'Letter J', titleHi: 'वर्ण J', descEn: 'Start with letter I handshape and trace a J in air.', hiDescEn: 'I handshape se shuru karke hawa mein J banayein.', grade: 'Grade 1 - Early Literacy', hiGrade: 'कक्षा 1 - शुरुआती साक्षरता', educatorNote: 'Dynamic motion sign.', hiEducatorNote: 'Yeh ek motion sign hai.' },
    { id: 'asl-k', category: 'alphabet', titleEn: 'Letter K', titleHi: 'वर्ण K', descEn: 'Point index and middle fingers upward in V-shape with thumb between.', hiDescEn: 'Index aur middle finger V-shape mein, angutha beech mein.', grade: 'Grade 1 - Early Literacy', hiGrade: 'कक्षा 1 - शुरुआती साक्षरता', educatorNote: 'Requires finger independence.', hiEducatorNote: 'Finger independence chahiye.' },
    { id: 'asl-l', category: 'alphabet', titleEn: 'Letter L', titleHi: 'वर्ण L', descEn: 'Extend index finger up and thumb to side forming L.', hiDescEn: 'Index upar aur angutha side mein, L banayein.', grade: 'Grade 1 - Early Literacy', hiGrade: 'कक्षा 1 - शुरुआती साक्षरता', educatorNote: 'Easy visual shape.', hiEducatorNote: 'Aasan visual shape hai.' },
    { id: 'asl-m', category: 'alphabet', titleEn: 'Letter M', titleHi: 'वर्ण M', descEn: 'Fold fingers down over thumb tucked underneath.', hiDescEn: 'Teen ungliyan anguthe ke upar modein.', grade: 'Grade 1 - Early Literacy', hiGrade: 'कक्षा 1 - शुरुआती साक्षरता', educatorNote: 'Three fingers cover thumb.', hiEducatorNote: 'Teen ungliyan anguthe ko dhakti hain.' },
    { id: 'asl-n', category: 'alphabet', titleEn: 'Letter N', titleHi: 'वर्ण N', descEn: 'Fold first two fingers down over thumb.', hiDescEn: 'Pehli do ungliyan anguthe ke upar modein.', grade: 'Grade 1 - Early Literacy', hiGrade: 'कक्षा 1 - शुरुआती साक्षरता', educatorNote: 'Uses two fingers covering thumb.', hiEducatorNote: 'Do ungliyan anguthe ko dhakti hain.' },
    { id: 'asl-o', category: 'alphabet', titleEn: 'Letter O', titleHi: 'वर्ण O', descEn: 'Curve all fingers and thumb together to touch tips.', hiDescEn: 'Sabhi ungliyan aur angutha mila kar O banayein.', grade: 'Grade 1 - Early Literacy', hiGrade: 'कक्षा 1 - शुरुआती साक्षरता', educatorNote: 'Clear round opening in center.', hiEducatorNote: 'Beech mein gol opening ho.' },
    { id: 'asl-p', category: 'alphabet', titleEn: 'Letter P', titleHi: 'वर्ण P', descEn: 'Point index forward/down, middle sideways.', hiDescEn: 'Index samne/niche, middle side mein.', grade: 'Grade 1 - Early Literacy', hiGrade: 'कक्षा 1 - शुरुआती साक्षरता', educatorNote: 'Inverted letter K pointing down.', hiEducatorNote: 'K ka ulta roop hai.' },
    { id: 'asl-q', category: 'alphabet', titleEn: 'Letter Q', titleHi: 'वर्ण Q', descEn: 'Point index and thumb straight down.', hiDescEn: 'Index aur angutha bilkul niche ki taraf.', grade: 'Grade 1 - Early Literacy', hiGrade: 'कक्षा 1 - शुरुआती साक्षरता', educatorNote: 'Like G pointing down.', hiEducatorNote: 'G jaisa jo niche point kare.' },
    { id: 'asl-r', category: 'alphabet', titleEn: 'Letter R', titleHi: 'वर्ण R', descEn: 'Cross index and middle fingers upward.', hiDescEn: 'Index aur middle finger cross karein.', grade: 'Grade 1 - Early Literacy', hiGrade: 'कक्षा 1 - शुरुआती साक्षरता', educatorNote: 'Fingers intertwined tightly.', hiEducatorNote: 'Ungliyan cross hoti hain.' },
    { id: 'asl-s', category: 'alphabet', titleEn: 'Letter S', titleHi: 'वर्ण S', descEn: 'Make tight fist with thumb across front.', hiDescEn: 'Muthi banayein angutha samne ho.', grade: 'Grade 1 - Early Literacy', hiGrade: 'कक्षा 1 - शुरुआती साक्षरता', educatorNote: 'Thumb must be outside across fingers.', hiEducatorNote: 'Angutha bahar samne ho.' },
    { id: 'asl-t', category: 'alphabet', titleEn: 'Letter T', titleHi: 'वर्ण T', descEn: 'Make fist with thumb tucked between index and middle.', hiDescEn: 'Angutha index aur middle ke beech mein ho.', grade: 'Grade 1 - Early Literacy', hiGrade: 'कक्षा 1 - शुरुआती साक्षरता', educatorNote: 'Thumb tip peeks out.', hiEducatorNote: 'Angutha thoda bahar dikhe.' },
    { id: 'asl-u', category: 'alphabet', titleEn: 'Letter U', titleHi: 'वर्ण U', descEn: 'Extend index and middle fingers straight up, pressed together.', hiDescEn: 'Index aur middle upar, aapas mein satakar.', grade: 'Grade 1 - Early Literacy', hiGrade: 'कक्षा 1 - शुरुआती साक्षरता', educatorNote: 'Two fingers must touch completely.', hiEducatorNote: 'Dono ungliyan judi hon.' },
    { id: 'asl-v', category: 'alphabet', titleEn: 'Letter V', titleHi: 'वर्ण V', descEn: 'Extend index and middle fingers in separated V-shape.', hiDescEn: 'Index aur middle V-shape mein kholkar.', grade: 'Grade 1 - Early Literacy', hiGrade: 'कक्षा 1 - शुरुआती साक्षरता', educatorNote: 'Clear V-spread.', hiEducatorNote: 'Saaf V-spread ho.' },
    { id: 'asl-w', category: 'alphabet', titleEn: 'Letter W', titleHi: 'वर्ण W', descEn: 'Extend index, middle, and ring fingers spread out.', hiDescEn: 'Teen ungliyan failakar upar.', grade: 'Grade 1 - Early Literacy', hiGrade: 'कक्षा 1 - शुरुआती साक्षरता', educatorNote: 'Thumb and pinky touch.', hiEducatorNote: 'Angutha aur pinky touch hon.' },
    { id: 'asl-x', category: 'alphabet', titleEn: 'Letter X', titleHi: 'वर्ण X', descEn: 'Hook index finger inward like a bent hook.', hiDescEn: 'Index finger ko hook ki tarah modein.', grade: 'Grade 1 - Early Literacy', hiGrade: 'कक्षा 1 - शुरुआती साक्षरता', educatorNote: 'Pirate hook gesture.', hiEducatorNote: 'Pirate hook jaisa.' },
    { id: 'asl-y', category: 'alphabet', titleEn: 'Letter Y', titleHi: 'वर्ण Y', descEn: 'Extend thumb and pinky outward to sides.', hiDescEn: 'Angutha aur pinky side mein bahar.', grade: 'Grade 1 - Early Literacy', hiGrade: 'कक्षा 1 - शुरुआती साक्षरता', educatorNote: 'Used for cool or phone sign.', hiEducatorNote: 'Phone sign jaisa.' },
    { id: 'asl-z', category: 'alphabet', titleEn: 'Letter Z', titleHi: 'वर्ण Z', descEn: 'Point index and trace zig-zag shape of Z.', hiDescEn: 'Hawa mein Z ka zig-zag banayein.', grade: 'Grade 1 - Early Literacy', hiGrade: 'कक्षा 1 - शुरुआती साक्षरता', educatorNote: 'Motion sign tracing path.', hiEducatorNote: 'Motion sign hai.' }
];

const islOfficialData = [
    { id: 'isl-a', category: 'alphabet', titleEn: 'ISL Letter A (ISLRTC)', titleHi: 'ISL वर्ण अ / A (ISLRTC मानक)', descEn: 'Closed fist with thumb resting on side pointing upward per ISLRTC.', hiDescEn: 'ISLRTC ke anusar angutha side mein upar ki taraf.', grade: 'ISL Level 1 - Basic Handshapes', hiGrade: 'ISL स्तर 1 - बुनियादी आकृतियाँ', educatorNote: 'Official ISL manual alphabet reference.', hiEducatorNote: 'Aadhikarik ISL manual alphabet sandarbh.' },
    { id: 'isl-b', category: 'alphabet', titleEn: 'ISL Letter B (ISLRTC)', titleHi: 'ISL वर्ण ब / B (ISLRTC मानक)', descEn: 'Palm facing forward with fingers extended upward and relaxed.', hiDescEn: 'Hatheri samne aur ungliyan upar ki taraf.', grade: 'ISL Level 1 - Basic Handshapes', hiGrade: 'ISL स्तर 1 - बुनियादी आकृतियाँ', educatorNote: 'Ensure correct palm orientation.', hiEducatorNote: 'Hatheli ki sahi disha rakhein.' },
    { id: 'isl-c', category: 'alphabet', titleEn: 'ISL Letter C (ISLRTC)', titleHi: 'ISL वर्ण स / C (ISLRTC मानक)', descEn: 'Curved handshape forming an outward-facing C profile.', hiDescEn: 'Bahar ki taraf C profile banane wali curved hatheli.', grade: 'ISL Level 1 - Basic Handshapes', hiGrade: 'ISL स्तर 1 - बुनियादी आकृतियाँ', educatorNote: 'Aligned with regional training.', hiEducatorNote: 'Kshetriya prashikshan ke anuroop.' },
    { id: 'isl-d', category: 'alphabet', titleEn: 'ISL Letter D (ISLRTC)', titleHi: 'ISL वर्ण ड / D (ISLRTC मानक)', descEn: 'Index finger pointing upright with remaining fingers forming loop.', hiDescEn: 'Index finger upar aur baaki ungliyan loop banayein.', grade: 'ISL Level 1 - Basic Handshapes', hiGrade: 'ISL स्तर 1 - बुनियादी आकृतियाँ', educatorNote: 'Fundamental ISL finger posture.', hiEducatorNote: 'Buniyadi ISL uungli ki mudra.' }
];

let currentMode = 'asl';
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
    if (!cardsGrid) return;
    cardsGrid.innerHTML = '';
    const dataset = getActiveDataset();
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

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
    if (aslTabBtn && islTabBtn) {
        if (mode === 'asl') {
            aslTabBtn.classList.add('active');
            islTabBtn.classList.remove('active');
        } else {
            islTabBtn.classList.add('active');
            aslTabBtn.classList.remove('active');
        }
    }
    renderCards();
}

function openDetailModal(id) {
    const dataset = getActiveDataset();
    const item = dataset.find(i => i.id === id);
    if (!item || !detailModal) return;

    if (modalTitle) modalTitle.textContent = `📖 ${currentLang === 'en' ? item.titleEn : item.titleHi}`;
    if (modalCategory) modalCategory.textContent = `🏷️️ Category: ${item.category.toUpperCase()} (${currentMode.toUpperCase()})`;
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

    if (aslTabBtn) aslTabBtn.addEventListener('click', () => switchPrimaryMode('asl'));
    if (islTabBtn) islTabBtn.addEventListener('click', () => switchPrimaryMode('isl'));

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCategory = btn.getAttribute('data-category');
            renderCards();
        });
    });

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => detailModal.classList.remove('active'));
    }

    if (openRequestModalBtn && requestModal) {
        openRequestModalBtn.addEventListener('click', () => requestModal.classList.add('active'));
    }
    if (closeRequestModal && requestModal) {
        closeRequestModal.addEventListener('click', () => requestModal.classList.remove('active'));
    }

    window.addEventListener('click', (e) => {
        if (e.target === detailModal) detailModal.classList.remove('active');
        if (e.target === requestModal) requestModal.classList.remove('active');
    });
}

window.onload = initApp;
