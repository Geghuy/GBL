/* ==========================================
   GLOBAL ASSET PALETTE - MASTER INTERACTION
   ========================================== */

// 1. CUSTOM CURSOR
document.addEventListener('mousemove', (e) => {
  const cursor = document.getElementById('cur');
  const ring = document.getElementById('ring');
  if (cursor && ring) {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
    ring.style.left = `${e.clientX}px`;
    ring.style.top = `${e.clientY}px`;
  }
});

// 2. LANGUAGE DROPDOWN
function toggleLangDropdown() {
  const dropdown = document.getElementById('langDropdown');
  if (dropdown) dropdown.classList.toggle('show');
}

function changeLanguage(langCode, langText) {
  const currentLang = document.getElementById('currentLang');
  if (currentLang) currentLang.innerText = langText;
  
  const dropdown = document.getElementById('langDropdown');
  if (dropdown) dropdown.classList.remove('show');

  // Integrated Google Translate Handler
  const googleSelect = document.querySelector('.goog-te-combo');
  if (googleSelect) {
    googleSelect.value = langCode;
    googleSelect.dispatchEvent(new Event('change'));
  }
}

// Close dropdown on outside click
window.addEventListener('click', (e) => {
  if (!e.target.closest('.lang-selector')) {
    const dropdown = document.getElementById('langDropdown');
    if (dropdown) dropdown.classList.remove('show');
  }
});

// 3. HIGHLIGHT EVENT CAROUSEL (Section 07)
let currentEventSlide = 0;
function setEventSlide(index) {
  const slides = document.querySelectorAll('.event-slide');
  const dots = document.querySelectorAll('.event-dots .dot');
  if (!slides.length) return;

  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
  currentEventSlide = index;
}

// 4. ROUTE FINDER INTERACTIVE QUIZ (Section 04)
function startMatcherQuiz() {
  document.getElementById('matcherIntroArea').style.display = 'none';
  document.getElementById('matcherFormArea').style.display = 'block';
}

function returnToIntro() {
  document.getElementById('matcherFormArea').style.display = 'none';
  document.getElementById('matcherIntroArea').style.display = 'block';
}

function updateBudgetSlider(val) {
  const display = document.getElementById('budgetValue');
  if (display) {
    const formatted = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
    display.innerText = formatted;
  }
}

function toggleFamily(btn) {
  btn.classList.toggle('active');
}

function selectGoal(card, goal) {
  const cards = document.querySelectorAll('.editorial-grid .ed-card');
  cards.forEach(c => c.classList.remove('active'));
  card.classList.add('active');
}

function selectRegion(btn, region) {
  const pills = btn.parentElement.querySelectorAll('.editorial-pill');
  pills.forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
}

function generateMatches() {
  document.getElementById('matcherFormArea').style.display = 'none';
  document.getElementById('matcherResultArea').style.display = 'block';
}

function resetMatcher() {
  document.getElementById('matcherResultArea').style.display = 'none';
  document.getElementById('matcherFormArea').style.display = 'block';
}

// 5. PROJECTS FLAT CAROUSEL (Section 05)
let currentFlatSlide = 0;
function updateFlatCarousel() {
  const track = document.getElementById('flatTrack');
  const dots = document.querySelectorAll('#flatDots .f-dot');
  if (!track) return;

  const cardWidth = track.querySelector('.flat-card')?.offsetWidth || 300;
  const gap = 24;
  track.style.transform = `translateX(-${currentFlatSlide * (cardWidth + gap)}px)`;

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentFlatSlide);
  });
}

function nextFlatSlide() {
  const totalCards = document.querySelectorAll('.flat-card').length;
  if (currentFlatSlide < totalCards - 1) {
    currentFlatSlide++;
    updateFlatCarousel();
  }
}

function prevFlatSlide() {
  if (currentFlatSlide > 0) {
    currentFlatSlide--;
    updateFlatCarousel();
  }
}

function setFlatSlide(index) {
  currentFlatSlide = index;
  updateFlatCarousel();
}

// 6. DYNAMIC MODAL SYSTEM
const modalTemplates = {
  contact: `
    <h2>Private Consultation</h2>
    <p>Please enter your credentials below. An advisor will contact you within 24 hours.</p>
    <form class="form" onsubmit="event.preventDefault(); alert('Request submitted successfully.'); closeModal();">
      <input type="text" placeholder="Full Name" required />
      <input type="email" placeholder="Email Address" required />
      <input type="tel" placeholder="Phone Number" required />
      <textarea placeholder="Tell us about your objectives..."></textarea>
      <button type="submit">Submit Request ↗</button>
    </form>
  `,
  event: `
    <h2>Reserve Interest</h2>
    <p>Exclusive Invitation: Global Investment & Residency Night Showcase.</p>
    <form class="form" onsubmit="event.preventDefault(); alert('Interest reserved.'); closeModal();">
      <input type="text" placeholder="Full Name" required />
      <input type="email" placeholder="Email Address" required />
      <button type="submit">Confirm Reservation ↗</button>
    </form>
  `,
  property: `
    <h2>International Property Portfolio</h2>
    <p>Access off-market prime residences and yield-generating commercial real estate globally.</p>
    <button class="pill" onclick="closeModal(); openModal('contact');">Request Private Catalog ↗</button>
  `
};

function openModal(type) {
  const modal = document.getElementById('modal');
  const body = document.getElementById('mb');
  if (modal && body) {
    body.innerHTML = modalTemplates[type] || modalTemplates['contact'];
    modal.classList.add('open');
  }
}

function closeModal() {
  const modal = document.getElementById('modal');
  if (modal) modal.classList.remove('open');
}

// 7. CHAT CONCIERGE DRAWER
function toggleChat() {
  const chat = document.getElementById('chat');
  if (chat) chat.classList.toggle('open');
}

function sendChat() {
  const input = document.getElementById('ci');
  const msgs = document.getElementById('msgs');
  if (!input || !input.value.trim() || !msgs) return;

  // Add User Message
  const userMsg = document.createElement('div');
  userMsg.className = 'msg u';
  userMsg.innerText = input.value;
  msgs.appendChild(userMsg);

  const text = input.value;
  input.value = '';
  msgs.scrollTop = msgs.scrollHeight;

  // Simulated Auto-Reply
  setTimeout(() => {
    const botMsg = document.createElement('div');
    botMsg.className = 'msg';
    botMsg.innerText = `Thank you for your enquiry regarding "${text}". An advisor is reviewing your request.`;
    msgs.appendChild(botMsg);
    msgs.scrollTop = msgs.scrollHeight;
  }, 1000);
}