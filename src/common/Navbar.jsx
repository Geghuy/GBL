import React, { useState } from 'react';

export default function Navbar({ openModal, setCurrentPage }) {
  const [langDropdown, setLangDropdown] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');
  const lineOaUrl = 'https://lin.ee/YcqOqt1';

  // ฟังก์ชันช่วยสลับหน้าพร้อมเลื่อน Scroll ไปยังจุดที่ต้องการ
  const handleNavClick = (page, sectionId) => {
    if (setCurrentPage) setCurrentPage(page);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  // ฟังก์ชันเปิด LINE OA
  const handleConsultation = () => {
    window.open(lineOaUrl, '_blank', 'noopener,noreferrer');
    if (openModal) openModal('contact');
  };

  return (
    <nav className="nav" id="nav">
      {/* Brand Logo / Home Trigger */}
      <a 
        className="brand" 
        href="#home" 
        onClick={(e) => { e.preventDefault(); handleNavClick('home', 'home'); }}
      >
        <img src="/GBL.png" alt="GLOBAL ASSETS" className="brand-logo" />
      </a>

      {/* Navigation Links */}
      <div className="links" style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
        <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('home', 'about'); }}>About</a>
        <a href="#advisory" onClick={(e) => { e.preventDefault(); handleNavClick('home', 'advisory'); }}>Advisory</a>
        {/* แก้ตรงนี้: เปลี่ยนจาก 'route-finder' เป็น 'match' */}
        <a href="#match" onClick={(e) => { e.preventDefault(); handleNavClick('home', 'match'); }}>Route Finder</a>
        <a href="#projects" onClick={(e) => { e.preventDefault(); handleNavClick('home', 'projects'); }}>Projects</a>
        <a href="#intelligence" onClick={(e) => { e.preventDefault(); handleNavClick('home', 'intelligence'); }}>Intelligence</a>
      </div>

      {/* Right Controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {/* Language Selector */}
        <div className="lang-selector">
          <button 
            type="button" 
            className="lang-btn" 
            onClick={() => setLangDropdown(!langDropdown)}
          >
            <span>{currentLang}</span> ▾
          </button>

          {langDropdown && (
            <div className="lang-dropdown show">
              <a href="#en" onClick={(e) => { e.preventDefault(); setCurrentLang('EN'); setLangDropdown(false); }}>English</a>
              <a href="#th" onClick={(e) => { e.preventDefault(); setCurrentLang('TH'); setLangDropdown(false); }}>ไทย</a>
              <a href="#zh" onClick={(e) => { e.preventDefault(); setCurrentLang('ZH'); setLangDropdown(false); }}>中文</a>
            </div>
          )}
        </div>

        {/* Action Button (LINE OA) */}
        <button 
          className="pill-cta"
          onClick={handleConsultation}
        >
          PRIVATE CONSULTATION ↗
        </button>
      </div>
    </nav>
  );
}