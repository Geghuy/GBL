import React, { useState } from 'react';

export default function CitizenshipPage({ setCurrentPage, openModal }) {
  const [activeTab, setActiveTab] = useState('all');

  const programs = [
    {
      id: 'st-kitts',
      region: 'caribbean',
      country: 'St. Kitts & Nevis',
      timeline: '6–8 Months',
      minInvestment: 'USD 250,000',
      tag: 'Most Reputable',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=90',
      summary: 'Home to the world\'s longest-standing Citizenship by Investment program (est. 1984). Unmatched global stability and heritage.',
      highlights: [
        'Visa-free/on-arrival to 148+ countries (UK, Schengen, HK)',
        'Full family inclusion: spouse, kids <25, parents 55+',
        'Complete tax neutrality (No wealth, gift, or capital gains tax)'
      ],
      investments: [
        { label: 'Island Contribution (SISC)', price: 'USD 250,000' },
        { label: 'Approved Real Estate', price: 'USD 325,000' }
      ]
    },
    {
      id: 'dominica',
      region: 'caribbean',
      country: 'Dominica',
      timeline: '6–9 Months',
      minInvestment: 'USD 200,000',
      tag: 'Best Value Single',
      image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1200&q=90',
      summary: 'One of the most efficient and cost-effective Caribbean routes. Straightforward processing with zero stay requirements.',
      highlights: [
        'Visa-free access to 136+ destinations including Schengen & China',
        'Lowest entry threshold for single applicants',
        'Zero physical residency or visit requirements'
      ],
      investments: [
        { label: 'Government Donation', price: 'USD 200,000' },
        { label: 'Approved Real Estate Equity', price: 'USD 200,000' }
      ]
    },
    {
      id: 'grenada',
      region: 'caribbean',
      country: 'Grenada',
      timeline: '9–12 Months',
      minInvestment: 'USD 235,000',
      tag: 'USA E-2 Treaty Route',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=90',
      summary: 'A strategic gateway citizenship offering direct access to China and eligibility for the United States E-2 Investor Visa.',
      highlights: [
        'Unlocks USA E-2 Investor Visa pathway after 3 years',
        'Visa-free access to China, UK & Schengen Area',
        'Broad family inclusion including unmarried siblings'
      ],
      investments: [
        { label: 'National Transformation Fund', price: 'USD 235,000' },
        { label: 'Approved Resort Real Estate', price: 'USD 270,000' }
      ]
    },
    {
      id: 'st-lucia',
      region: 'caribbean',
      country: 'St. Lucia',
      timeline: '6–9 Months',
      minInvestment: 'USD 240,000',
      tag: 'Government Bond Option',
      image: 'https://images.unsplash.com/photo-1548574505-5e238690323f?auto=format&fit=crop&w=1200&q=90',
      summary: 'A modern, flexible Caribbean jurisdiction providing government bond options alongside property and donation routes.',
      highlights: [
        'Visa-free access to 141+ global destinations',
        'Includes government bonds with capital return after 5 years',
        'Favourable tax regime with zero residency required'
      ],
      investments: [
        { label: 'National Economic Fund', price: 'USD 240,000' },
        { label: 'National Government Bonds', price: 'USD 300,000' }
      ]
    },
    {
      id: 'antigua',
      region: 'caribbean',
      country: 'Antigua & Barbuda',
      timeline: '6–12 Months',
      minInvestment: 'USD 230,000',
      tag: 'Best for Large Families',
      image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1200&q=90',
      summary: 'The ultimate family-centric passport. Exceptional value for large families with broad dependent inclusions.',
      highlights: [
        'Visa-free to 145+ destinations (UK, Schengen, Singapore)',
        'Unmatched capital efficiency for families of 6+ members',
        'Minimal physical presence (only 5 days in first 5 years)'
      ],
      investments: [
        { label: 'National Development Donation', price: 'USD 230,000' },
        { label: 'UWI Fund (Families of 6+)', price: 'USD 260,000' }
      ]
    },
    {
      id: 'vanuatu',
      region: 'pacific',
      country: 'Vanuatu',
      timeline: '2–3 Months',
      minInvestment: 'USD 130,000',
      tag: 'Fastest Processing',
      image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1200&q=90',
      summary: 'The fastest citizenship-by-investment route globally. Perfect for clients prioritizing immediate execution and privacy.',
      highlights: [
        'Full citizenship approval in as fast as 30–60 days',
        'Visa-free travel to Hong Kong, Singapore & Malaysia',
        'Zero income, wealth, inheritance, or capital gains tax'
      ],
      investments: [
        { label: 'Development Support Program (DSP)', price: 'USD 130,000' },
        { label: 'Capital Investment Plan (CIIP)', price: 'USD 165,000' }
      ]
    },
    {
      id: 'turkey',
      region: 'pacific',
      country: 'Turkey',
      timeline: '3–6 Months',
      minInvestment: 'USD 400,000',
      tag: 'Real Estate Equity',
      image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=90',
      summary: 'Eurasian citizenship combining prime real estate asset ownership in Istanbul with direct EU market trade privileges.',
      highlights: [
        'Full asset recovery — Property resalable after 3 years',
        'Strategic bridge between European & Asian commercial markets',
        'Direct EU market privileges via Customs Union'
      ],
      investments: [
        { label: 'Real Estate Asset (3-Year Hold)', price: 'USD 400,000' },
        { label: 'Fixed Bank Deposit (3-Year Hold)', price: 'USD 500,000' }
      ]
    },
    {
      id: 'egypt',
      region: 'africa',
      country: 'Egypt',
      timeline: '9–12 Months',
      minInvestment: 'USD 250,000',
      tag: 'Transcontinental Gateway',
      image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1200&q=90',
      summary: 'Established under Parliament Law No. 140 of 2019. Offers a streamlined path to dual nationality in a country of historic significance.',
      highlights: [
        'Visa-free or visa-on-arrival to 60+ countries including Hong Kong',
        'Full family inclusion: spouse & dependent children under 21',
        'Zero residency requirement & full dual citizenship permitted'
      ],
      investments: [
        { label: 'Government Donation', price: 'USD 250,000' },
        { label: 'Real Estate Investment (5-Year Hold)', price: 'USD 300,000' },
        { label: 'Bank Deposit (3-Year Hold)', price: 'USD 500,000' }
      ]
    },
    {
      id: 'sierra-leone',
      region: 'africa',
      country: 'Sierra Leone',
      timeline: '3–4 Months',
      minInvestment: 'USD 140,000',
      tag: 'ECOWAS Regional Access',
      image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=90',
      summary: 'A fast-track African citizenship option with no residency requirements. Benefits from ECOWAS regional travel privileges across West Africa.',
      highlights: [
        'Visa-free/on-arrival to 66+ countries (Singapore, Malaysia & ECOWAS)',
        'Includes spouse, dependent children, and parents',
        'Fast-track application process with full dual citizenship'
      ],
      investments: [
        { label: 'National Development Donation', price: 'USD 140,000' }
      ]
    },
    {
      id: 'sao-tome',
      region: 'africa',
      country: 'São Tomé & Príncipe',
      timeline: '~2 Months',
      minInvestment: 'USD 90,000',
      tag: 'Budget Accessible',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=90',
      summary: 'An emerging, highly discreet African sovereignty route offering unparalleled speed and low entry capital thresholds.',
      highlights: [
        'Lowest barrier to entry globally (Sub-100K USD)',
        'Accelerated approval process (~60 days)',
        'Full dual citizenship permitted with zero stay required'
      ],
      investments: [
        { label: 'National Fund (Single Applicant)', price: 'USD 90,000' },
        { label: 'National Fund (Family of 4)', price: 'USD 95,000' }
      ]
    }
  ];

  const filteredPrograms = activeTab === 'all' 
    ? programs 
    : programs.filter(p => p.region === activeTab);

  return (
    <div style={{ background: '#0F0F2E', color: '#F4F1E8', minHeight: '100vh', paddingTop: '120px', paddingBottom: '140px' }}>
      <div className="wrap" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Navigation Back Button */}
        <button 
          className="pill-back-btn" 
          onClick={() => setCurrentPage && setCurrentPage('home')}
          style={{ 
            color: '#F4F1E8', 
            borderColor: 'rgba(255,255,255,0.2)', 
            marginBottom: '40px',
            padding: '10px 24px',
            fontSize: '10px',
            letterSpacing: '0.2em'
          }}
        >
          ← BACK TO OVERVIEW
        </button>

        {/* Hero Editorial Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '60px', alignItems: 'end', marginBottom: '60px' }}>
          <div>
            <div className="ey" style={{ color: '#C09E5D', letterSpacing: '0.25em', marginBottom: '16px', fontWeight: 700 }}>
              02 — OFFICIAL ADVISORY ROUTES
            </div>
            <h1 className="title" style={{ fontSize: 'clamp(44px, 5.5vw, 84px)', color: '#FFFFFF', margin: 0, lineHeight: '0.92' }}>
              Citizenship by<br /><em style={{ color: '#FE6E46', fontStyle: 'italic' }}>Investment.</em>
            </h1>
          </div>
          <div>
            <p style={{ color: 'rgba(244,241,232,0.7)', fontSize: '15px', lineHeight: '1.8', margin: 0 }}>
              Curated government-approved investment migration pathways designed for sovereign asset protection, expanded mobility, and multi-generational security.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div style={{
          display: 'flex',
          gap: '12px',
          paddingBottom: '20px',
          marginBottom: '50px',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          overflowX: 'auto'
        }}>
          {[
            { id: 'all', label: `All Global Routes (${programs.length})` },
            { id: 'caribbean', label: 'Caribbean Region' },
            { id: 'pacific', label: 'Pacific & Asia' },
            { id: 'africa', label: 'Africa & Middle East' }
          ].map(tab => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '14px 28px',
                fontSize: '11px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                borderRadius: '100px',
                background: activeTab === tab.id ? '#FE6E46' : 'rgba(255, 255, 255, 0.03)',
                color: activeTab === tab.id ? '#0F0F2E' : '#F4F1E8',
                border: activeTab === tab.id ? '1px solid #FE6E46' : '1px solid rgba(255,255,255,0.1)',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Luxury Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '32px' }}>
          {filteredPrograms.map((prog) => (
            <div 
              key={prog.id}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
              }}
              className="service-h-card"
            >
              <div>
                {/* Card Header Image Overlay */}
                <div style={{
                  height: '230px',
                  width: '100%',
                  backgroundImage: `linear-gradient(to bottom, rgba(15,15,46,0.15), rgba(15,15,46,0.92)), url(${prog.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxSizing: 'border-box'
                }}>
                  {/* Top Badges */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ 
                      fontSize: '8px', 
                      letterSpacing: '0.22em', 
                      color: '#FE6E46', 
                      background: 'rgba(15, 15, 46, 0.85)',
                      backdropFilter: 'blur(10px)',
                      padding: '6px 14px',
                      borderRadius: '100px',
                      fontWeight: 700,
                      border: '1px solid rgba(254, 110, 70, 0.3)',
                      textTransform: 'uppercase'
                    }}>
                      {prog.tag}
                    </span>
                    <span style={{ 
                      fontSize: '9px', 
                      fontWeight: 700, 
                      letterSpacing: '0.1em', 
                      color: '#FFFFFF',
                      background: 'rgba(192, 158, 93, 0.9)',
                      backdropFilter: 'blur(8px)',
                      padding: '5px 12px',
                      borderRadius: '100px'
                    }}>
                      ⏱ {prog.timeline}
                    </span>
                  </div>

                  {/* Title & Min Price Banner */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <h2 style={{ font: '500 34px/1 var(--font-serif)', color: '#FFFFFF', margin: 0 }}>
                      {prog.country}
                    </h2>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ display: 'block', fontSize: '8px', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase' }}>FROM</span>
                      <span style={{ fontSize: '18px', font: '500 18px var(--font-serif)', color: '#C09E5D', fontWeight: 600 }}>{prog.minInvestment}</span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div style={{ padding: '30px 28px 20px' }}>
                  <p style={{ fontSize: '13px', lineHeight: '1.7', color: 'rgba(244, 241, 232, 0.7)', marginBottom: '28px', minHeight: '62px' }}>
                    {prog.summary}
                  </p>

                  {/* Key Advantages Box */}
                  <div style={{ 
                    marginBottom: '26px', 
                    background: 'rgba(255,255,255,0.025)', 
                    padding: '18px 20px', 
                    borderRadius: '16px', 
                    border: '1px solid rgba(255,255,255,0.05)' 
                  }}>
                    <div style={{ fontSize: '8px', letterSpacing: '0.22em', color: '#FE6E46', fontWeight: 700, marginBottom: '12px', textTransform: 'uppercase' }}>
                      Key Strategic Highlights
                    </div>
                    <ul style={{ paddingLeft: '0', margin: 0, fontSize: '12px', color: '#F4F1E8', lineHeight: '1.8', listStyle: 'none' }}>
                      {prog.highlights.map((h, idx) => (
                        <li key={idx} style={{ marginBottom: '6px', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                          <span style={{ color: '#FE6E46', fontSize: '10px' }}>✦</span>
                          <span style={{ color: 'rgba(244,241,232,0.9)' }}>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing Matrix Breakdown */}
                  <div style={{ marginBottom: '28px' }}>
                    <div style={{ fontSize: '8px', letterSpacing: '0.22em', color: '#C09E5D', fontWeight: 700, marginBottom: '12px', textTransform: 'uppercase' }}>
                      Investment Routes
                    </div>
                    {prog.investments.map((inv, idx) => (
                      <div key={idx} style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center', 
                        padding: '8px 0', 
                        borderBottom: '1px solid rgba(255,255,255,0.06)',
                        fontSize: '12px'
                      }}>
                        <span style={{ color: 'rgba(244,241,232,0.7)' }}>{inv.label}</span>
                        <span style={{ color: '#FFFFFF', fontWeight: '600' }}>{inv.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button CTA */}
              <div style={{ padding: '0 28px 32px' }}>
                <button
                  onClick={() => openModal && openModal('contact')}
                  className="hero-reveal-btn"
                  style={{
                    width: '100%',
                    padding: '18px 0',
                    fontSize: '10px',
                    letterSpacing: '0.2em',
                    borderRadius: '100px',
                    textAlign: 'center',
                    fontWeight: '700',
                  }}
                >
                  REQUEST PRIVATE DOSSIER ↗
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}