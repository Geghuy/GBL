import React, { useState } from 'react';

// ฐานข้อมูลโปรแกรมทั้งหมดที่ดึงมาจาก CitizenshipPage & ResidencyPage
const PROGRAM_DATABASE = [
  // --- CARIBBEAN ---
  {
    id: 'antigua',
    country: 'Antigua & Barbuda',
    type: 'Citizenship',
    minBudget: 230000,
    region: 'Caribbean',
    timeline: '6–12 Months',
    access: '145+ destinations',
    features: 'Best for large families · 5 days stay in 5 years',
    tag: 'FAMILY FAVORITE',
    goals: ['Mobility', 'Education', 'Plan B'],
    investLabel: 'USD 230,000'
  },
  {
    id: 'st-kitts',
    country: 'St. Kitts & Nevis',
    type: 'Citizenship',
    minBudget: 250000,
    region: 'Caribbean',
    timeline: '6–8 Months',
    access: '148+ destinations',
    features: 'Longest-established CBI · Platinum standard mobility',
    tag: 'MOST REPUTABLE',
    goals: ['Mobility', 'Tax', 'Plan B'],
    investLabel: 'USD 250,000'
  },
  {
    id: 'grenada',
    country: 'Grenada',
    type: 'Citizenship',
    minBudget: 235000,
    region: 'Caribbean',
    timeline: '9–12 Months',
    access: '141+ destinations & USA E-2 Route',
    features: 'USA E-2 Treaty access · China visa-free',
    tag: 'US GATEWAY',
    goals: ['Mobility', 'Education', 'Plan B'],
    investLabel: 'USD 235,000'
  },
  {
    id: 'dominica',
    country: 'Dominica',
    type: 'Citizenship',
    minBudget: 200000,
    region: 'Caribbean',
    timeline: '6–9 Months',
    access: '136+ destinations',
    features: 'Cost-effective single applicant route · Zero stay',
    tag: 'BEST VALUE',
    goals: ['Plan B', 'Tax'],
    investLabel: 'USD 200,000'
  },

  // --- PACIFIC & ASIA ---
  {
    id: 'vanuatu',
    country: 'Vanuatu',
    type: 'Citizenship',
    minBudget: 130000,
    region: 'Pacific',
    timeline: '2–3 Months',
    access: '94+ destinations',
    features: 'Fastest processing globally · Zero tax burden',
    tag: 'FASTEST APPROVAL',
    goals: ['Plan B', 'Tax'],
    investLabel: 'USD 130,000'
  },
  {
    id: 'turkey',
    country: 'Turkey',
    type: 'Citizenship',
    minBudget: 400000,
    region: 'Pacific',
    timeline: '3–6 Months',
    access: '110+ destinations & EU Trade',
    features: 'Real Estate Equity · Resalable after 3 years',
    tag: 'ASSET BACKED',
    goals: ['Plan B', 'Education', 'Tax'],
    investLabel: 'USD 400,000'
  },

  // --- EUROPE ---
  {
    id: 'greece-golden',
    country: 'Greece Golden Visa',
    type: 'Residency',
    minBudget: 250000,
    region: 'Europe',
    timeline: '3–6 Months',
    access: 'Schengen Area Freedom',
    features: 'European Real Estate ownership · No stay required',
    tag: 'BEST EU ENTRY',
    goals: ['Mobility', 'Plan B', 'Education'],
    investLabel: 'EUR 250,000 (~USD 270k)'
  },
  {
    id: 'portugal-golden',
    country: 'Portugal Golden Visa',
    type: 'Residency',
    minBudget: 500000,
    region: 'Europe',
    timeline: '18–24 Months',
    access: 'Schengen Area Visa-Free',
    features: 'Pathway to EU Citizenship after 5 years · 7 days stay/yr',
    tag: 'EU CITIZENSHIP PATH',
    goals: ['Mobility', 'Education', 'Plan B'],
    investLabel: 'EUR 500,000 (~USD 540k)'
  },

  // --- MIDDLE EAST & AFRICA ---
  {
    id: 'uae-golden',
    country: 'UAE Golden Visa (Dubai)',
    type: 'Residency',
    minBudget: 545000,
    region: 'Africa',
    timeline: '1–2 Months',
    access: '10-Year Renewable Residency',
    features: '0% Income & Capital Tax · World-class luxury lifestyle',
    tag: 'TAX HAVEN LUXURY',
    goals: ['Tax', 'Plan B', 'Education'],
    investLabel: 'USD 545,000 (Property)'
  },
  {
    id: 'egypt',
    country: 'Egypt',
    type: 'Citizenship',
    minBudget: 250000,
    region: 'Africa',
    timeline: '9–12 Months',
    access: '60+ destinations including Hong Kong',
    features: 'Law No. 140 of 2019 · Dual Nationality & Historic Prestige',
    tag: 'NORTH AFRICA GATEWAY',
    goals: ['Plan B', 'Tax'],
    investLabel: 'USD 250,000'
  },
  {
    id: 'sao-tome',
    country: 'São Tomé & Príncipe',
    type: 'Citizenship',
    minBudget: 90000,
    region: 'Africa',
    timeline: '~2 Months',
    access: '70+ destinations',
    features: 'Lowest entry threshold globally · Accelerated path',
    tag: 'BUDGET ENTRY',
    goals: ['Plan B', 'Tax'],
    investLabel: 'USD 90,000'
  }
];

export default function RouteFinder({ openModal }) {
  const [screen, setScreen] = useState('intro');
  
  // Parameters
  const [budgetValue, setBudgetValue] = useState(300000);
  const [selectedGoal, setSelectedGoal] = useState('Mobility');
  const [selectedRegion, setSelectedRegion] = useState('Caribbean');
  const [familyMembers, setFamilyMembers] = useState(['Spouse', 'Children']);

  // Results
  const [matchResults, setMatchResults] = useState([]);

  // Toggle Family
  const toggleFamily = (member) => {
    if (familyMembers.includes(member)) {
      setFamilyMembers(familyMembers.filter(m => m !== member));
    } else {
      setFamilyMembers([...familyMembers, member]);
    }
  };

  // 🧠 REAL CALCULATOR LOGIC
  const calculateMatches = () => {
    const scored = PROGRAM_DATABASE.map((prog) => {
      let score = 30; // Base score

      // 1. REGION MATCH (+40 Points) — ให้ผลสำคัญสุด
      if (selectedRegion === 'Open') {
        score += 30;
      } else if (prog.region === selectedRegion) {
        score += 40;
      } else {
        score -= 25; // หักคะแนนถ้าไม่ใช่ภูมิภาคที่เลือก
      }

      // 2. GOAL MATCH (+25 Points)
      if (prog.goals.includes(selectedGoal)) {
        score += 25;
      }

      // 3. BUDGET MATCH (+20 Points)
      if (budgetValue >= prog.minBudget) {
        score += 20;
        if (budgetValue - prog.minBudget <= 150000) {
          score += 10; // โบนัสถ้าราคาอยู่ในงบอย่างเหมาะสม
        }
      } else {
        score -= 40; // หักคะแนนหนักถ้างบไม่ถึง
      }

      // 4. FAMILY MATCH (+10 Points)
      if (familyMembers.length >= 3 && (prog.id === 'antigua' || prog.id === 'grenada' || prog.id === 'portugal-golden')) {
        score += 10;
      }

      // ตีกรอบ % คะแนน
      const finalScore = Math.min(98, Math.max(42, score));

      return {
        ...prog,
        matchScore: finalScore
      };
    });

    // เรียงจาก % สูงไปต่ำ
    scored.sort((a, b) => b.matchScore - a.matchScore);
    
    // อัปเดต State ผลลัพธ์
    setMatchResults(scored.slice(0, 3));
    setScreen('result');
  };

  return (
    <section className="blue" id="match">
      <div className="wrap reveal">
        <div className="editorial-matcher">
          
          {/* INTRO SCREEN */}
          {screen === 'intro' && (
            <div id="matcherIntroArea" className="matcher-intro-screen">
              <div className="ey" style={{ color: '#0F0F2E', opacity: 0.6 }}> Personal route finder</div>
              <h2 className="title">Find your<br /><em>global route.</em></h2>
              <p className="muted">Answer four discreet parameters to receive a real-time calculated shortlist tailored to your investment & residency strategy.</p>

              <div className="intro-stats-row">
                <div className="i-stat"><b>20+</b><small>Global Routes</small></div>
                <div className="i-stat"><b>04</b><small>Quick Questions</small></div>
                <div className="i-stat"><b>100%</b><small>Discreet & Instant</small></div>
              </div>

              <div className="cta-submit-center">
                <button className="hero-reveal-btn" onClick={() => setScreen('form')}>Start Route Matching ↗</button>
              </div>
            </div>
          )}

          {/* QUESTIONS FORM */}
          {screen === 'form' && (
            <div id="matcherFormArea">
              <div className="matcher-form-head">
                <div className="ey" style={{ color: '#0F0F2E', opacity: 0.6 }}>04 — Personal route finder</div>
                <h3 className="form-title">Customize Your Investment Parameters</h3>
              </div>

              <div className="questions-onepage-grid">
                {/* Q1: BUDGET */}
                <div className="ed-form-card">
                  <div className="q-tag">01 · INVESTMENT BUDGET</div>
                  <h3>How much are you prepared to invest?</h3>
                  <div className="slider-box">
                    <div className="val-display">
                      USD {Number(budgetValue).toLocaleString()}
                    </div>
                    <input 
                      type="range" 
                      min="100000" 
                      max="1000000" 
                      step="25000" 
                      value={budgetValue} 
                      className="luxury-range" 
                      onChange={(e) => setBudgetValue(Number(e.target.value))} 
                    />
                    <div className="range-labels">
                      <span>USD 100K</span>
                      <span>USD 1M+</span>
                    </div>
                  </div>
                </div>

                {/* Q2: FAMILY */}
                <div className="ed-form-card">
                  <div className="q-tag">02 · FAMILY INCLUSION</div>
                  <h3>Who travels with you?</h3>
                  <p className="q-sub">Select all dependent family members included in the application.</p>
                  <div className="pill-group">
                    {['Spouse', 'Children', 'Parents', 'Siblings'].map((member) => (
                      <button 
                        key={member}
                        type="button" 
                        className={`editorial-pill ${familyMembers.includes(member) ? 'active' : ''}`} 
                        onClick={() => toggleFamily(member)}
                      >
                        {member}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Q3: GOAL */}
                <div className="ed-form-card">
                  <div className="q-tag">03 · PRIMARY OBJECTIVE</div>
                  <h3>What matters most to your portfolio?</h3>
                  <div className="editorial-grid">
                    {[
                      { id: 'Mobility', num: '01', title: 'Global Mobility', sub: 'Visa-free travel' },
                      { id: 'Plan B', num: '02', title: 'Plan B Security', sub: 'Sovereignty & Safety' },
                      { id: 'Tax', num: '03', title: 'Tax Efficiency', sub: '0% Wealth / Income tax' },
                      { id: 'Education', num: '04', title: 'Family Legacy', sub: 'Top EU/UK Education' }
                    ].map((item) => (
                      <div 
                        key={item.id}
                        className={`ed-card ${selectedGoal === item.id ? 'active' : ''}`} 
                        onClick={() => setSelectedGoal(item.id)}
                      >
                        <b>{item.num}</b>
                        <h4>{item.title}</h4>
                        <p>{item.sub}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Q4: REGION */}
                <div className="ed-form-card">
                  <div className="q-tag">04 · PREFERRED REGION</div>
                  <h3>Any preference in geography?</h3>
                  <p className="q-sub">Choose your target region for residency or citizenship.</p>
                  <div className="pill-group">
                    {[
                      { id: 'Caribbean', label: 'Caribbean' },
                      { id: 'Europe', label: 'Europe' },
                      { id: 'Pacific', label: 'Asia-Pacific' },
                      { id: 'Africa', label: 'Africa & Mid-East' },
                      { id: 'Open', label: 'Open to all' }
                    ].map((reg) => (
                      <button 
                        key={reg.id}
                        type="button" 
                        className={`editorial-pill ${selectedRegion === reg.id ? 'active' : ''}`} 
                        onClick={() => setSelectedRegion(reg.id)}
                      >
                        {reg.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="cta-submit-center flex-btns">
                <button className="pill-back-btn" onClick={() => setScreen('intro')}>← Back</button>
                <button className="hero-reveal-btn" onClick={calculateMatches}>Analyze & Match Routes ✦</button>
              </div>
            </div>
          )}

          {/* DYNAMIC RESULTS AREA */}
          {screen === 'result' && matchResults.length > 0 && (
            <div id="matcherResultArea">
              <div className="result-header">
                <span className="q-tag">MATCH RESULTS</span>
                <h3 className="result-main-title">Top Recommended Programmes For You</h3>
                <p style={{ fontSize: '13px', color: '#161640', opacity: 0.7, marginTop: '8px' }}>
                  Based on Budget: <strong>USD {budgetValue.toLocaleString()}</strong> · Goal: <strong>{selectedGoal}</strong> · Region: <strong>{selectedRegion}</strong>
                </p>
              </div>

              {/* Top 3 Cards */}
              <div className="ranked-cards-list">
                {matchResults.map((item, index) => (
                  <div key={item.id} className={`rank-card ${index === 0 ? 'best' : ''}`}>
                    <div className="rank-score">
                      {item.matchScore}<sup>%</sup>
                    </div>
                    <div className="rank-info">
                      {index === 0 && <span className="rank-badge">{item.tag}</span>}
                      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <h4>{item.country}</h4>
                        <span style={{ fontSize: '10px', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.1em' }}>({item.type})</span>
                      </div>
                      <p>{item.investLabel} · {item.access} · {item.features}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dynamic Comparison Table */}
              <div className="comparison-card">
                <h4 className="comp-title">Side-by-Side Comparison</h4>
                <div className="table-scroll-wrapper">
                  <table className="editorial-table">
                    <thead>
                      <tr>
                        <th>CRITERION</th>
                        <th className="highlight-col">{matchResults[0]?.country} (Top 1)</th>
                        <th>{matchResults[1]?.country} (Top 2)</th>
                        <th>{matchResults[2]?.country} (Top 3)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>PROGRAM TYPE</td>
                        <td className="highlight-col">{matchResults[0]?.type}</td>
                        <td>{matchResults[1]?.type}</td>
                        <td>{matchResults[2]?.type}</td>
                      </tr>
                      <tr>
                        <td>MIN. INVESTMENT</td>
                        <td className="highlight-col">{matchResults[0]?.investLabel}</td>
                        <td>{matchResults[1]?.investLabel}</td>
                        <td>{matchResults[2]?.investLabel}</td>
                      </tr>
                      <tr>
                        <td>EST. TIMELINE</td>
                        <td className="highlight-col">{matchResults[0]?.timeline}</td>
                        <td>{matchResults[1]?.timeline}</td>
                        <td>{matchResults[2]?.timeline}</td>
                      </tr>
                      <tr>
                        <td>GLOBAL ACCESS / MOBILITY</td>
                        <td className="highlight-col">{matchResults[0]?.access}</td>
                        <td>{matchResults[1]?.access}</td>
                        <td>{matchResults[2]?.access}</td>
                      </tr>
                      <tr>
                        <td>PRIMARY ADVANTAGE</td>
                        <td className="highlight-col">{matchResults[0]?.features}</td>
                        <td>{matchResults[1]?.features}</td>
                        <td>{matchResults[2]?.features}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="result-bottom-actions">
                <button className="pill-back-btn" onClick={() => setScreen('form')}>← Re-adjust Parameters</button>
                <button 
                  className="hero-reveal-btn" 
                  onClick={() => {
                    window.open('https://lin.ee/YcqOqt1', '_blank');
                    if (openModal) openModal('contact');
                  }}
                >
                  Request Official Match Dossier ↗
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}