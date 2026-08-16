// ==========================================
// 1. Navigation & Custom Cursor Elements
// ==========================================
const nav = document.getElementById('nav');
const c = document.getElementById('cur');
const r = document.getElementById('ring');
const bg = document.getElementById('bg');

// Scroll behavior for Navbar
window.addEventListener('scroll', () => {
  if (nav) nav.classList.toggle('light', window.scrollY > 70);
});

// Custom Cursor & Parallax Background
window.addEventListener('mousemove', e => {
  if (c && r) {
    c.style.left = r.style.left = e.clientX + 'px';
    c.style.top = r.style.top = e.clientY + 'px';
  }
  if (bg) {
    bg.style.transform = `scale(1.08) translate(${-(e.clientX - window.innerWidth / 2) / window.innerWidth * 12}px, ${-(e.clientY - window.innerHeight / 2) / window.innerHeight * 8}px)`;
  }
});

// Scroll Reveal Animation
const io = new IntersectionObserver(entries => {
  entries.forEach(e => e.isIntersecting && e.target.classList.add('show'));
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(e => io.observe(e));

// ==========================================
// 2. Google Translate Widget
// ==========================================
function googleTranslateElementInit() {
  if (window.google && window.google.translate) {
    new window.google.translate.TranslateElement({
      pageLanguage: 'en',
      includedLanguages: 'en,th,zh-CN,ar',
      autoDisplay: false
    }, 'google_translate_element');
  }
}

function toggleLangDropdown() {
  const dropdown = document.getElementById('langDropdown');
  if (dropdown) dropdown.classList.toggle('show');
}

window.addEventListener('click', function(e) {
  if (!e.target.closest('.lang-selector')) {
    const dropdown = document.getElementById('langDropdown');
    if (dropdown && dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
  }
});

function changeLanguage(langCode, label) {
  const selectElem = document.querySelector('.goog-te-combo');
  if (selectElem) {
    selectElem.value = langCode;
    selectElem.dispatchEvent(new Event('change'));
    
    const currentLangEl = document.getElementById('currentLang');
    if (currentLangEl) currentLangEl.textContent = label;
  }
  
  const dropdown = document.getElementById('langDropdown');
  if (dropdown) dropdown.classList.remove('show');
}

// ==========================================
// 3. Modal Control System
// ==========================================
const modalData = {
  property: [
    'International Property',
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=90',
    'Curated residential, commercial and income-producing opportunities across selected global markets.'
  ],
  citizenship: [
    'Citizenship by Investment',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=90',
    'A strategy-led introduction to government-approved investment migration routes for eligible clients.'
  ],
  residency: [
    'Long-Term Residency',
    'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=90',
    'Residency strategies aligned to lifestyle, education, business and family objectives.'
  ],
  london: [
    'London',
    'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1600&q=90',
    'Prime residences, new-build opportunities and selected investment property across London.'
  ],
  dubai: [
    'Dubai',
    'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=90',
    'Property, lifestyle, business and long-term residency opportunities.'
  ],
  greece: [
    'Greece',
    'https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?auto=format&fit=crop&w=1600&q=90',
    'European lifestyle and selected residency opportunities subject to current rules.'
  ],
  japan: [
    'Japan',
    'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=90',
    'Tokyo and Japan property opportunities with long-term value considerations.'
  ],
  project: [
    'Featured Project',
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=90',
    'Prototype project detail area — connect to CMS in production.'
  ],
  event: [
    'Global Investment Night',
    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=90',
    'Prototype event detail area — connect to booking/CRM in production.'
  ],
  commercial: [
    'Commercial Opportunities',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=90',
    'Premium commercial and income-producing opportunities.'
  ],
  contact: [
    'Private Consultation',
    null,
    'Tell us about your objective and the advisory team can follow up with the right next step.'
  ]
};

function openModal(key) {
  const x = modalData[key] || ['Private Enquiry', null, 'Contact our advisory team.'];
  const formHtml = key === 'contact' ? `
    <form class="form" onsubmit="event.preventDefault(); alert('Demo enquiry submitted.'); closeModal();">
      <input required placeholder="Full name">
      <input required type="email" placeholder="Email">
      <input placeholder="Phone / WhatsApp">
      <select>
        <option>International Property</option>
        <option>Citizenship by Investment</option>
        <option>Long-Term Residency</option>
        <option>Not sure yet</option>
      </select>
      <textarea placeholder="What are you looking to achieve?"></textarea>
      <button>Send private enquiry ↗</button>
    </form>
  ` : '';

  const mb = document.getElementById('mb');
  if (mb) {
    mb.innerHTML = `
      <div class="ey">GLOBAL ASSETS PALETTE</div>
      <h2>${x[0]}</h2>
      ${x[1] ? `<img src="${x[1]}" alt="${x[0]}">` : ''}
      <p>${x[2]}</p>
      ${formHtml}
    `;
  }
  const modal = document.getElementById('modal');
  if (modal) modal.classList.add('open');
}

function closeModal() {
  const modal = document.getElementById('modal');
  if (modal) modal.classList.remove('open');
}

// ==========================================
// 4. Personal Route Finder Logic
// ==========================================
function updateBudgetSlider(val) {
  const badge = document.getElementById('budgetValue');
  if (badge) {
    const formatted = parseInt(val, 10).toLocaleString();
    badge.textContent = `USD ${formatted}`;
  }
}

function toggleFamily(btn) {
  btn.classList.toggle('active');
}

function selectGoal(card, goalKey) {
  document.querySelectorAll('.editorial-grid .ed-card').forEach(c => c.classList.remove('active'));
  card.classList.add('active');
}

function selectRegion(btn, regionKey) {
  const container = btn.closest('.pill-group');
  if (container) {
    container.querySelectorAll('.editorial-pill').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
}

function startMatcherQuiz() {
  document.getElementById('matcherIntroArea').style.display = 'none';
  document.getElementById('matcherFormArea').style.display = 'block';
  document.getElementById('matcherResultArea').style.display = 'none';
}

function returnToIntro() {
  document.getElementById('matcherFormArea').style.display = 'none';
  document.getElementById('matcherIntroArea').style.display = 'block';
  document.getElementById('matcherResultArea').style.display = 'none';
}

function generateMatches() {
  document.getElementById('matcherFormArea').style.display = 'none';
  document.getElementById('matcherResultArea').style.display = 'block';
  document.getElementById('match').scrollIntoView({ behavior: 'smooth' });
}

function resetMatcher() {
  document.getElementById('matcherResultArea').style.display = 'none';
  document.getElementById('matcherFormArea').style.display = 'block';
}

// ==========================================
// 5. Section 07: Highlight Event Carousel
// ==========================================
let currentEventSlide = 0;
let eventInterval;
let eventSlides = [];
let eventDots = [];

const defaultCMSEvents = [
  { tag: 'Highlight event · 01', title: 'Global<br><em>Investment Night.</em>', desc: 'A private evening for clients exploring international property, residency and investment migration opportunities.', img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1800&q=90' },
  { tag: 'Highlight event · 02', title: 'London Prime<br><em>Private Showcase.</em>', desc: 'Exclusive off-market residential developments in Central London, curated for high-net-worth investors.', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=90' },
  { tag: 'Highlight event · 03', title: 'Dubai Golden Visa<br><em>Executive Forum.</em>', desc: 'Direct consultation with legal & tax specialists on UAE strategic residency and wealth structuring.', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1800&q=90' }
];

function renderDynamicEvents() {
  let storedEvents = localStorage.getItem('gbl_cms_events');
  
  if (!storedEvents) {
    localStorage.setItem('gbl_cms_events', JSON.stringify(defaultCMSEvents));
    storedEvents = JSON.stringify(defaultCMSEvents);
  }

  try {
    const events = JSON.parse(storedEvents);
    const slidesContainer = document.querySelector('.event-slides');
    const dotsContainer = document.querySelector('.event-dots');

    if (!slidesContainer || !dotsContainer) return;

    slidesContainer.innerHTML = '';
    dotsContainer.innerHTML = '';

    if (Array.isArray(events) && events.length > 0) {
      events.forEach((ev, i) => {
        slidesContainer.innerHTML += `
          <div class="event-slide ${i === 0 ? 'active' : ''}">
            <div class="eventImg" style="background-image: url('${ev.img}');"></div>
            <div class="eventCopy">
              <div class="ey">${ev.tag || ''}</div>
              <h2>${ev.title || ''}</h2>
              <p>${ev.desc || ''}</p>
              <button class="pill" style="width:max-content" onclick="openModal('contact')">Reserve interest ↗</button>
            </div>
          </div>
        `;

        dotsContainer.innerHTML += `
          <span class="dot ${i === 0 ? 'active' : ''}" onclick="setEventSlide(${i})"></span>
        `;
      });
    }
  } catch (err) {
    console.error('Error rendering CMS events:', err);
  }
}

function showEventSlide(index) {
  if (!eventSlides || eventSlides.length === 0) return;

  if (index >= eventSlides.length) currentEventSlide = 0;
  else if (index < 0) currentEventSlide = eventSlides.length - 1;
  else currentEventSlide = index;

  eventSlides.forEach((slide, i) => {
    slide.classList.toggle('active', i === currentEventSlide);
  });

  eventDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentEventSlide);
  });
}

function nextEventSlide() {
  showEventSlide(currentEventSlide + 1);
}

function setEventSlide(index) {
  showEventSlide(index);
  resetEventTimer();
}

function startEventTimer() {
  clearInterval(eventInterval);
  if (eventSlides.length > 1) {
    eventInterval = setInterval(nextEventSlide, 4500);
  }
}

function resetEventTimer() {
  clearInterval(eventInterval);
  startEventTimer();
}

function initEventsCarousel() {
  renderDynamicEvents();

  eventSlides = document.querySelectorAll('.event-slide');
  eventDots = document.querySelectorAll('.event-dots .dot');

  if (eventSlides.length > 0) {
    showEventSlide(0);
    const eventCarouselEl = document.getElementById('eventCarousel');
    if (eventCarouselEl) {
      eventCarouselEl.addEventListener('mouseenter', () => clearInterval(eventInterval));
      eventCarouselEl.addEventListener('mouseleave', startEventTimer);
    }
    startEventTimer();
  }
}

// ==========================================
// 6. Section 05: Minimal Flat Projects Carousel
// ==========================================
let currentFlatIndex = 0;

function updateFlatCarousel() {
  const track = document.getElementById('flatTrack');
  const cards = document.querySelectorAll('.flat-card');
  const dots = document.querySelectorAll('.f-dot');
  if (!track || cards.length === 0) return;

  const cardWidth = cards[0].getBoundingClientRect().width;
  const gap = 24;
  const maxIndex = window.innerWidth <= 850 ? cards.length - 1 : cards.length - 3;

  if (currentFlatIndex > maxIndex) currentFlatIndex = 0;
  if (currentFlatIndex < 0) currentFlatIndex = maxIndex;

  const moveDistance = (cardWidth + gap) * currentFlatIndex;
  track.style.transform = `translateX(-${moveDistance}px)`;

  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentFlatIndex);
  });
}

function nextFlatSlide() {
  currentFlatIndex++;
  updateFlatCarousel();
}

function prevFlatSlide() {
  currentFlatIndex--;
  updateFlatCarousel();
}

function setFlatSlide(index) {
  currentFlatIndex = index;
  updateFlatCarousel();
}

window.addEventListener('resize', updateFlatCarousel);

// ==========================================
// 7. Web Chatbot & Admin Sync System
// ==========================================
const defaultBotRules = [
  { keywords: ['ราคา', 'price', 'cost', 'เท่าไหร่'], response: 'ราคาและเงื่อนไขการลงทุนเริ่มต้นที่ USD 100k - 2M+ ขึ้นอยู่กับโครงการและประเทศที่คุณสนใจครับ สามารถเลือกดูรายละเอียดที่เมนู Advisory ได้ครับ' },
  { keywords: ['london', 'ลอนดอน', 'uk', 'อังกฤษ'], response: 'สำหรับอสังหาริมทรัพย์ใน London เรามี Prime Residences และ Off-market opportunities ย่านใจกลางเมืองครับ สนใจดูรายละเอียดหรือนัดรับคำปรึกษาเพิ่มเติมไหมครับ?' },
  { keywords: ['dubai', 'ดูไบ', 'golden visa'], response: 'โปรแกรม Dubai Golden Visa ให้สิทธิพำนักระยะยาวเมื่อลงทุนในอสังหาริมทรัพย์เริ่มต้นประมาณ 2M AED ครับ' },
  { keywords: ['สวัสดี', 'hello', 'hi', 'หวัดดี'], response: 'สวัสดีครับ ยินดีต้อนรับสู่ Global Assets Palette ต้องการสอบถามข้อมูลด้านอสังหาริมทรัพย์ Residency หรือ Citizenship ประเทศใดเป็นพิเศษไหมครับ?' }
];

function getBotRules() {
  const stored = localStorage.getItem('gbl_bot_rules');
  return stored ? JSON.parse(stored) : defaultBotRules;
}

function toggleChat() {
  const chat = document.getElementById('chat');
  if (chat) chat.classList.toggle('open');
}

function sendChat() {
  const input = document.getElementById('ci');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;

  appendChatMessage(text, 'u');
  input.value = '';

  syncWebChatToAdmin(text, 'user');

  setTimeout(() => {
    const botReply = matchBotKeyword(text);
    if (botReply) {
      appendChatMessage(botReply, 'bot');
      syncWebChatToAdmin(botReply, 'bot');
    }
  }, 600);
}

function appendChatMessage(text, sender) {
  const msgs = document.getElementById('msgs');
  if (!msgs) return;
  const msgClass = sender === 'u' ? 'msg u' : 'msg';
  msgs.innerHTML += `<div class="${msgClass}">${text}</div>`;
  msgs.scrollTop = msgs.scrollHeight;
}

function matchBotKeyword(userText) {
  const rules = getBotRules();
  const lowerText = userText.toLowerCase();

  for (let rule of rules) {
    const match = rule.keywords.some(kw => lowerText.includes(kw.toLowerCase()));
    if (match) {
      return rule.response;
    }
  }
  return "ขอบคุณสำหรับข้อความครับ ทีมงาน Advisor กำลังรับเรื่องและจะเข้ามาตอบกลับคุณในช่องทางนี้โดยเร็วที่สุดครับ";
}

function syncWebChatToAdmin(text, sender) {
  let chats = JSON.parse(localStorage.getItem('gbl_web_chat_history') || '[]');
  chats.push({
    sender: sender,
    text: text,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  });
  localStorage.setItem('gbl_web_chat_history', JSON.stringify(chats));
}

// ==========================================
// 8. Storage Sync & Initialization
// ==========================================
window.addEventListener('storage', (e) => {
  if (e.key === 'gbl_cms_events') {
    initEventsCarousel();
  }
  if (e.key === 'gbl_web_chat_history') {
    const chats = JSON.parse(e.newValue || '[]');
    const lastMsg = chats[chats.length - 1];
    if (lastMsg && lastMsg.sender === 'admin') {
      appendChatMessage(lastMsg.text, 'admin');
    }
  }
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initEventsCarousel();
    updateFlatCarousel();
  });
} else {
  initEventsCarousel();
  updateFlatCarousel();
}