import React from 'react';

export default function Intelligence({ openModal }) {
  const lineOaUrl = 'https://lin.ee/YcqOqt1';

  const handleAction = () => {
    window.open(lineOaUrl, '_blank', 'noopener,noreferrer');
    if (openModal) openModal('contact');
  };

  const differentiators = [
    {
      num: '01',
      title: 'Boutique, Personalized Service',
      desc: 'Every client journey begins with a private consultation to understand objectives, family structure, risk appetite, and long-term goals.'
    },
    {
      num: '02',
      title: 'Integrated Solutions',
      desc: 'We combine real estate, citizenship, and residency planning under one advisory platform for more strategic international decisions.'
    },
    {
      num: '03',
      title: 'Global Expertise',
      desc: 'UK and international experience supported by trusted legal, property, and program partners across key jurisdictions.'
    },
    {
      num: '04',
      title: 'Strict Confidentiality',
      desc: 'All client information is handled with the highest level of discretion from consultation through completion.'
    },
    {
      num: '05',
      title: 'Exclusive Access',
      desc: 'Selected property opportunities, government-approved programs, and trusted international partners.'
    },
    {
      num: '06',
      title: 'Proven Track Record',
      desc: 'Over £100 million in real estate investment advised and successful citizenship, residency, and property journeys supported.'
    }
  ];

  return (
    <section id="intelligence">
      <div className="wrap reveal">
        <div className="ey">06 — Why Choose Us</div>
        <div className="projectHead">
          <h2 className="title">
            What Sets<br />
            <em>Us Apart.</em>
          </h2>
          <p className="muted">
            Delivering bespoke global property and asset solutions backed by international expertise, absolute discretion, and end-to-end strategic advisory.
          </p>
        </div>

        <div className="insights">
          {differentiators.map((item) => (
            <article 
              key={item.num} 
              className="insight" 
              onClick={handleAction} 
              style={{ cursor: 'pointer' }}
            >
              <small>{item.num} · OUR ADVANTAGE</small>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span>Connect via LINE ↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}