import React from 'react';

export default function PropertyPage({ setCurrentPage, openModal }) {
  const propertyMarkets = [
    {
      id: 'london',
      city: 'London',
      country: 'UNITED KINGDOM',
      tag: 'PRIME RESIDENTIAL',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=90',
      description: "London remains one of the world's most established and resilient property markets, offering long-term value, international demand, strong rental appeal, and global prestige.",
      highlights: [
        'Access to selected new-build & off-market prime opportunities',
        'High-growth central and prime London locations',
        'Strong capital appreciation & stable currency hedging',
        'Ideal for education, family residence & portfolio growth'
      ],
      metrics: { yield: '4.5% – 6.0%', horizon: 'Long-Term Growth', holding: 'Freehold / Leasehold' }
    },
    {
      id: 'dubai',
      city: 'Dubai',
      country: 'UNITED ARAB EMIRATES',
      tag: 'TAX-EFFICIENT YIELD',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=90',
      description: "Dubai offers a dynamic property market with attractive rental yields, tax-efficient ownership, world-class infrastructure, and growing demand from international investors.",
      highlights: [
        'High rental yields with 0% personal income & property tax',
        'Qualifies for UAE 10-Year Golden Visa residency route',
        'Trusted tier-1 developers & prime waterfront districts',
        'Strong capital gains in rapid-expansion zones'
      ],
      metrics: { yield: '6.5% – 9.0%', horizon: 'High Yield & Growth', holding: 'Freehold' }
    },
    {
      id: 'japan',
      city: 'Tokyo & Japan',
      country: 'JAPAN',
      tag: 'STABLE CURRENCY ENTRY',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=90',
      description: "Japan offers a unique and compelling property investment market — combining stable long-term values, strong rental demand in key cities, and a weaker yen creating attractive entry points for international investors.",
      highlights: [
        'Selected residential assets across Tokyo & high-growth hubs',
        'Attractive currency entry point with historical stability',
        'Consistently high tenant occupancy rates in prime urban hubs',
        'Transparent ownership rights for international buyers'
      ],
      metrics: { yield: '4.8% – 6.5%', horizon: 'Capital Preservation', holding: 'Freehold' }
    },
    {
      id: 'uk-commercial',
      city: 'UK Commercial & Bulk',
      country: 'UNITED KINGDOM',
      tag: 'INSTITUTIONAL ASSETS',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=90',
      description: "For qualified investors, Global Assets can source larger-scale residential blocks and commercial property opportunities across London and major UK regional cities — designed for income generation, capital growth, and long-term portfolio diversification.",
      highlights: [
        'Bulk residential blocks & multi-family units',
        'Income-generating commercial & logistics assets',
        'Strategic allocation in major UK regional growth cities',
        'Tailored structuring for private wealth & family offices'
      ],
      metrics: { yield: '7.0% – 10.5%', horizon: 'Income & Scale', holding: 'Freehold / Long Lease' }
    }
  ];

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

        {/* Hero Section */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '60px', alignItems: 'end', marginBottom: '80px' }}>
          <div>
            <div className="ey" style={{ color: '#C09E5D', letterSpacing: '0.25em', marginBottom: '16px', fontWeight: 700 }}>
              01 — BOUTIQUE ADVISORY
            </div>
            <h1 className="title" style={{ fontSize: 'clamp(44px, 5.5vw, 84px)', color: '#FFFFFF', margin: 0, lineHeight: '0.92' }}>
              International<br /><em style={{ color: '#FE6E46', fontStyle: 'italic' }}>Real Estate.</em>
            </h1>
          </div>
          <div>
            <p style={{ color: 'rgba(244,241,232,0.85)', fontSize: '16px', lineHeight: '1.8', margin: 0, fontWeight: 300 }}>
              Global Assets specialises in premium international real estate, with a strong focus on the UK and UAE. We support clients seeking lifestyle residences, rental income, capital appreciation, and long-term portfolio diversification.
            </p>
          </div>
        </div>

        {/* Highlight Stats Bar */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '20px', 
          padding: '30px 0', 
          borderTop: '1px solid rgba(255,255,255,0.1)', 
          borderBottom: '1px solid rgba(255,255,255,0.1)', 
          marginBottom: '80px' 
        }}>
          <div>
            <span style={{ display: 'block', fontSize: '9px', letterSpacing: '0.2em', color: '#FE6E46', fontWeight: 700 }}>CORE MARKETS</span>
            <b style={{ font: '500 28px/1.3 var(--font-serif)', color: '#FFFFFF' }}>UK, UAE & Japan</b>
          </div>
          <div>
            <span style={{ display: 'block', fontSize: '9px', letterSpacing: '0.2em', color: '#C09E5D', fontWeight: 700 }}>STRATEGIC FOCUS</span>
            <b style={{ font: '500 28px/1.3 var(--font-serif)', color: '#FFFFFF' }}>Prime & Off-Market</b>
          </div>
          <div>
            <span style={{ display: 'block', fontSize: '9px', letterSpacing: '0.2em', color: '#FE6E46', fontWeight: 700 }}>TARGET RETURNS</span>
            <b style={{ font: '500 28px/1.3 var(--font-serif)', color: '#FFFFFF' }}>4.5% – 10.5% Yield</b>
          </div>
          <div>
            <span style={{ display: 'block', fontSize: '9px', letterSpacing: '0.2em', color: '#C09E5D', fontWeight: 700 }}>SERVICE SCOPE</span>
            <b style={{ font: '500 28px/1.3 var(--font-serif)', color: '#FFFFFF' }}>End-to-End Advisory</b>
          </div>
        </div>

        {/* Property Markets Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px' }}>
          {propertyMarkets.map((market) => (
            <div 
              key={market.id}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.35)',
                transition: 'transform 0.4s ease, border-color 0.4s ease'
              }}
              className="service-h-card"
            >
              <div>
                {/* Image Header with Badge Overlays */}
                <div style={{
                  height: '260px',
                  width: '100%',
                  backgroundImage: `linear-gradient(to bottom, rgba(15,15,46,0.2), rgba(15,15,46,0.9)), url(${market.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxSizing: 'border-box'
                }}>
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
                      {market.tag}
                    </span>
                    <span style={{ 
                      fontSize: '9px', 
                      fontWeight: 700, 
                      letterSpacing: '0.15em', 
                      color: '#FFFFFF',
                      background: 'rgba(192, 158, 93, 0.85)',
                      backdropFilter: 'blur(8px)',
                      padding: '5px 12px',
                      borderRadius: '100px'
                    }}>
                      {market.country}
                    </span>
                  </div>

                  <h2 style={{ font: '500 40px/1 var(--font-serif)', color: '#FFFFFF', margin: 0 }}>
                    {market.city}
                  </h2>
                </div>

                {/* Card Content Body */}
                <div style={{ padding: '32px 30px 20px' }}>
                  <p style={{ fontSize: '14px', lineHeight: '1.75', color: 'rgba(244, 241, 232, 0.75)', marginBottom: '28px', minHeight: '70px' }}>
                    {market.description}
                  </p>

                  {/* Highlights Bullet Box */}
                  <div style={{ 
                    marginBottom: '28px', 
                    background: 'rgba(255,255,255,0.025)', 
                    padding: '20px 22px', 
                    borderRadius: '16px', 
                    border: '1px solid rgba(255,255,255,0.05)' 
                  }}>
                    <div style={{ fontSize: '8px', letterSpacing: '0.22em', color: '#FE6E46', fontWeight: 700, marginBottom: '12px', textTransform: 'uppercase' }}>
                      Key Strategic Advantages
                    </div>
                    <ul style={{ paddingLeft: '0', margin: 0, fontSize: '12px', color: '#F4F1E8', lineHeight: '1.85', listStyle: 'none' }}>
                      {market.highlights.map((h, idx) => (
                        <li key={idx} style={{ marginBottom: '6px', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                          <span style={{ color: '#FE6E46', fontSize: '10px' }}>✦</span>
                          <span style={{ color: 'rgba(244,241,232,0.9)' }}>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Investment Profile Matrix */}
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(3, 1fr)', 
                    gap: '12px', 
                    padding: '16px 0', 
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                    marginBottom: '20px' 
                  }}>
                    <div>
                      <span style={{ display: 'block', fontSize: '8px', letterSpacing: '0.15em', color: '#C09E5D', textTransform: 'uppercase' }}>EST. YIELD</span>
                      <b style={{ fontSize: '12px', color: '#FFFFFF', fontWeight: 600 }}>{market.metrics.yield}</b>
                    </div>
                    <div>
                      <span style={{ display: 'block', fontSize: '8px', letterSpacing: '0.15em', color: '#C09E5D', textTransform: 'uppercase' }}>HORIZON</span>
                      <b style={{ fontSize: '12px', color: '#FFFFFF', fontWeight: 600 }}>{market.metrics.horizon}</b>
                    </div>
                    <div>
                      <span style={{ display: 'block', fontSize: '8px', letterSpacing: '0.15em', color: '#C09E5D', textTransform: 'uppercase' }}>TENURE</span>
                      <b style={{ fontSize: '12px', color: '#FFFFFF', fontWeight: 600 }}>{market.metrics.holding}</b>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div style={{ padding: '0 30px 32px' }}>
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
                    fontWeight: '700'
                  }}
                >
                  ENQUIRE OPPORTUNITIES ↗
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}