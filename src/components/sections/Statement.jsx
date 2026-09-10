import React from 'react';

export default function Statement({ openModal }) {
  const lineOaUrl = 'https://lin.ee/YcqOqt1';

  const handleConsultation = () => {
    // เปิด LINE OA ในแท็บใหม่
    window.open(lineOaUrl, '_blank', 'noopener,noreferrer');
    
    // เรียกใช้ openModal หากต้องการรันฟังก์ชันเดิมควบคู่กัน
    if (openModal) {
      openModal('contact');
    }
  };

  return (
    <section className="statement">
      <div className="wrap reveal">
        <div className="ey">Contact Us</div>
        <h2 className="title">
          Your next chapter<br />can be <em>global.</em>
        </h2>
        <p>
          Tell us where you want to go, what you want to protect and what you want your capital to achieve. We will help map the route via our private LINE Official Advisory.
        </p>
        
        <button 
          className="pill" 
          onClick={handleConsultation}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer'
          }}
        >
          <span>Connect via LINE Official ↗</span>
        </button>
      </div>
    </section>
  );
}