import React, { useState, useEffect } from 'react';

export default function EventCarousel({ openModal }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const lineOaUrl = 'https://lin.ee/YcqOqt1';

  const slides = [
    {
      eyebrow: 'Highlight event',
      title: <>Global<br /><em>Investment Night.</em></>,
      description: 'A private evening for clients exploring international property, residency and investment migration opportunities.',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1800&q=90',
      modalType: 'event'
    },
    {
      eyebrow: 'Highlight event',
      title: <>London Prime<br /><em>Private Showcase.</em></>,
      description: 'Exclusive off-market residential developments in Central London, curated for high-net-worth investors.',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=90',
      modalType: 'london'
    },
    {
      eyebrow: 'Highlight event',
      title: <>Dubai Golden Visa<br /><em>Executive Forum.</em></>,
      description: 'Direct consultation with legal & tax specialists on UAE strategic residency and wealth structuring.',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1800&q=90',
      modalType: 'dubai'
    }
  ];

  // 🔄 ระบบ Auto Play: สลับสไลด์เองทุกๆ 5000ms (5 วินาที)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer); // เคลียร์ interval เมื่อ unmount หรือวนลูปใหม่
  }, [slides.length]);

  const handleReserve = (modalType) => {
    window.open(lineOaUrl, '_blank', 'noopener,noreferrer');
    if (openModal) openModal(modalType);
  };

  return (
    <section className="event-carousel" id="eventCarousel">
      <div className="event-slides">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`event-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <div className="eventImg" style={{ backgroundImage: `url('${slide.image}')` }}></div>
            <div className="eventCopy">
              <div className="ey">{slide.eyebrow}</div>
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <button 
                className="pill" 
                style={{ width: 'max-content' }} 
                onClick={() => handleReserve(slide.modalType)}
              >
                Reserve interest ↗
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="event-dots">
        {slides.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === currentSlide ? 'active' : ''}`} 
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}