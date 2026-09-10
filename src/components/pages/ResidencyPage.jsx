import React, { useState } from 'react';

export default function ResidencyPage({ setCurrentPage, openModal }) {
  const [activeTab, setActiveTab] = useState('all');

  const programs = [
    {
      id: 'greece',
      region: 'europe',
      country: 'Greece Golden Visa',
      timeline: '6–9 Months',
      minInvestment: 'EUR 250,000',
      tag: 'Schengen Access',
      image: 'https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?auto=format&fit=crop&w=1200&q=90',
      summary: 'One of Europe\'s most attractive Residency by Investment programs, offering Schengen access through real estate investment with no minimum stay requirement.',
      highlights: [
        'Unrestricted travel across the Europe Schengen Area',
        'Zero physical presence or stay requirements',
        'Full family inclusion: spouse, children & parents of both spouses',
        'Indefinitely renewable as long as the investment is held'
      ],
      investments: [
        { label: 'Conversion/Restoration Real Estate', price: 'EUR 250,000' },
        { label: 'Regional Property Investment', price: 'EUR 400,000' },
        { label: 'Prime Locations (Athens/Mykonos)', price: 'EUR 500,000–800,000' }
      ]
    },
    {
      id: 'portugal',
      region: 'europe',
      country: 'Portugal Golden Visa',
      timeline: '12–24 Months',
      minInvestment: 'EUR 250,000',
      tag: 'Citizenship Pathway',
      image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1200&q=90',
      summary: 'Flexible residency with a clear pathway to EU citizenship after 5 years, subject to eligibility, with minimal physical stay requirements.',
      highlights: [
        'Schengen Area travel privileges & EU citizenship route after 5 years',
        'Ultra-low physical stay requirement (only 7 days per year)',
        'Comprehensive family inclusion available across all dependents'
      ],
      investments: [
        { label: 'Cultural & Heritage Donation', price: 'EUR 250,000' },
        { label: 'Qualified Regulated Investment Funds', price: 'EUR 500,000' }
      ]
    },
    {
      id: 'malta',
      region: 'europe',
      country: 'Malta Permanent Residency',
      timeline: '6–12 Months',
      minInvestment: 'EUR 300,000+',
      tag: 'Permanent Residency',
      image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=90',
      summary: 'A secure permanent residency route in an English-speaking EU and Schengen jurisdiction with no ongoing stay requirement.',
      highlights: [
        'Immediate lifetime permanent residency status in the EU',
        'Full access to Schengen zone without minimum stay rules',
        'Includes 4 generations: spouse, children, parents & grandparents'
      ],
      investments: [
        { label: 'Property Leasing / Purchase Route', price: 'From EUR 300,000' },
        { label: 'Government Contribution & Charity', price: 'Varies by route' }
      ]
    },
    {
      id: 'italy',
      region: 'europe',
      country: 'Italy Investor Visa',
      timeline: '2–3 Months',
      minInvestment: 'EUR 250,000',
      tag: 'Fast-Track Europe',
      image: 'https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1200&q=90',
      summary: 'A prestigious European residency route for investors seeking a strategic base in one of the world\'s most culturally rich economies.',
      highlights: [
        'Fast 2-3 month approval timeframe with Schengen travel access',
        'Right to live and conduct business across Italy',
        'No initial Italian language proficiency requirements'
      ],
      investments: [
        { label: 'Innovative Startup Equity', price: 'EUR 250,000' },
        { label: 'Italian Corporate Equity', price: 'EUR 500,000' },
        { label: 'Italian Government Bonds', price: 'EUR 2,000,000' }
      ]
    },
    {
      id: 'uae',
      region: 'middle-east',
      country: 'UAE Golden Visa',
      timeline: '1–3 Months',
      minInvestment: 'AED 2,000,000',
      tag: 'Zero Personal Tax',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=90',
      summary: 'Long-term 10-year renewable residency in one of the world\'s leading business, lifestyle, and tax-neutral financial hubs.',
      highlights: [
        '0% Personal Income, Capital Gains & Wealth Tax for residents',
        '10-Year renewable residency with 100% foreign business ownership',
        'Includes spouse, dependent children of any age & parents'
      ],
      investments: [
        { label: 'Freehold Real Estate Asset', price: 'AED 2,000,000' },
        { label: 'Fixed Capital Deposit / Financial Route', price: 'AED 2,000,000' }
      ]
    },
    {
      id: 'thailand',
      region: 'asia',
      country: 'Thailand Elite Visa',
      timeline: '1–3 Months',
      minInvestment: 'THB 650,000',
      tag: 'Lifestyle & Mobility',
      image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=90',
      summary: 'Offers 5 to 20 years of long-term residency with premium concierge perks, ideal for digital nomads, retirees, and global professionals.',
      highlights: [
        '5 to 20-Year multi-entry residency with zero stay requirements',
        'VIP airport fast-tracking, luxury concierge & health privileges',
        'Covers spouse, children, step-children & parents'
      ],
      investments: [
        { label: 'Bronze Card (5-Year Residency)', price: 'THB 650,000' },
        { label: 'Gold Card (5-Year Residency)', price: 'THB 900,000' },
        { label: 'Platinum Card (10-Year Residency)', price: 'THB 1,500,000' },
        { label: 'Diamond Card (15-Year Residency)', price: 'THB 2,500,000' },
        { label: 'Reserve Card (20-Year Invitation Only)', price: 'THB 5,000,000' }
      ]
    },
    {
      id: 'malaysia',
      region: 'asia',
      country: 'Malaysia (PVIP / MM2H)',
      timeline: '~3 Months',
      minInvestment: 'USD 150,000+',
      tag: 'Tropical Base',
      image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=90',
      summary: 'Long-term multi-year residency for families seeking an affordable, safe, and modern Southeast Asian hub with world-class healthcare.',
      highlights: [
        'Flexible long-term stay with zero physical stay rules (PVIP)',
        'English-speaking business environment & premier healthcare',
        'Includes spouse, unmarried children up to 21 & parents'
      ],
      investments: [
        { label: 'MM2H Route (Deposit + Real Estate)', price: 'USD 150,000 + RM 600K' },
        { label: 'PVIP Premium Visa (Bank Deposit)', price: 'RM 1,000,000' }
      ]
    },
    {
      id: 'mauritius',
      region: 'africa',
      country: 'Mauritius Residency',
      timeline: '1–2 Months',
      minInvestment: 'USD 375,000',
      tag: 'Tax-Efficient Island',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=90',
      summary: 'Residency through approved property acquisition in a safe, tax-efficient tropical island nation with modern business infrastructure.',
      highlights: [
        'Favourable corporate & personal tax ecosystem',
        'Safe, politically stable, and English/French speaking jurisdiction',
        'Covers spouse, children up to age 24 & dependent parents'
      ],
      investments: [
        { label: 'Approved Real Estate Schemes (IRS/RES/PDS)', price: 'USD 375,000' }
      ]
    },
    {
      id: 'new-zealand',
      region: 'pacific',
      country: 'New Zealand Active Investor',
      timeline: '3 Years Route',
      minInvestment: 'NZD 5,000,000',
      tag: 'Sovereign Haven',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=90',
      summary: 'The Active Investor Plus Visa offers residency in one of the world\'s safest, most stable nations paired with high-growth direct investment.',
      highlights: [
        'Fast-track route to permanent residency & potential citizenship after 5 years',
        'Ultra-flexible physical stay rule (only 21 days over 3 years)',
        'Access to top-tier global education & lifestyle safety'
      ],
      investments: [
        { label: 'Growth Category (Direct / Managed Funds)', price: 'NZD 5,000,000' },
        { label: 'Balanced Category (Equities / Property Dev)', price: 'NZD 10,000,000' }
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
              03 — OFFICIAL ADVISORY ROUTES
            </div>
            <h1 className="title" style={{ fontSize: 'clamp(44px, 5.5vw, 84px)', color: '#FFFFFF', margin: 0, lineHeight: '0.92' }}>
              Long-Term<br /><em style={{ color: '#FE6E46', fontStyle: 'italic' }}>Residency Programs.</em>
            </h1>
          </div>
          <div>
            <p style={{ color: 'rgba(244,241,232,0.7)', fontSize: '15px', lineHeight: '1.8', margin: 0 }}>
              Curated strategic residency options offering global freedom of movement, personal tax optimization, and long-term security across Europe, Asia, the Middle East, and beyond.
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
            { id: 'europe', label: 'European Union' },
            { id: 'middle-east', label: 'Middle East & Africa' },
            { id: 'asia', label: 'Asia & Pacific' }
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
                    <h2 style={{ font: '500 32px/1 var(--font-serif)', color: '#FFFFFF', margin: 0 }}>
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
                      Key Strategic Benefits
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
                    fontWeight: '700'
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