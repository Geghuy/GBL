import React, { useState } from 'react';

export default function ProjectsCarousel({ openModal }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'white-city-living',
      title: 'White City Living',
      location: '54 Wood Lane, London W12 7RQ',
      badge: 'Zone 2 · London',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=90',
      summary: 'Adjacent to White City & Wood Lane Tube stations. Near Westfield shopping centre and Imperial College London. Features 8 acres of landscaped gardens with a 5-acre park.',
      tenure: '999-Year Leasehold (from Jan 2019)',
      serviceCharge: 'Est. £5.50 / sq ft / annum',
      completion: 'Westmont Q2 2024–Q1 2025 | Cascade 1 & 2 Q1 2024–Q2 2025',
      parking: 'Secure parking from £55k',
      facilities: 'The Club 39,000 sq ft (Concierge, Pool, Hydropool, Gym, Spa, Private Dining, Cinemas, Business Lounge)',
      pricing: [
        { type: '1 Bed', price: '36 MB', size: '55 sqm' },
        { type: '2 Bed', price: '53 MB', size: '75 sqm' },
        { type: '3 Bed', price: '102 MB', size: '128 sqm' }
      ]
    },
    {
      id: 'fulham-reach',
      title: 'Fulham Reach',
      location: 'Distillery Wharf, Parr’s Way, London W6 9GD',
      badge: 'Zone 2 · River Thames',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=90',
      summary: 'Prime riverside living on the north bank of the Thames. 4 mins walk to Hammersmith Station connecting 4 Tube lines.',
      tenure: '999-Year Leasehold (from 2011)',
      serviceCharge: '£5.55 – £7.72 / sq ft / annum',
      completion: 'Completed / Palmer House Q1–Q2 2026',
      parking: 'Right to park service charge £571.14/pa',
      facilities: '24-Hour Concierge, Tamesis Club Spa, Sauna, Pool, Virtual Golf, Snooker Room, Wine Cellar, Private Cinema',
      pricing: [
        { type: '1 Bed', price: '43 MB', size: '66 sqm' },
        { type: '2 Bed', price: '66 MB', size: '96 sqm' },
        { type: '3 Bed', price: '98 MB', size: '115 sqm' }
      ]
    },
    {
      id: 'kings-road-park',
      title: 'King’s Road Park',
      location: 'Fulham SW6 2FP',
      badge: 'Zone 2 · Fulham',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=90',
      summary: 'Last project of its scale in South Fulham Riverside Regeneration Area. 750m to Fulham Broadway & 450m to Imperial Wharf overground.',
      tenure: '999-Year Leasehold',
      serviceCharge: 'Est. £5.00 / sq ft / annum',
      completion: 'The Wren/Windsor/Beaumont (Completed) | The Charlton Q3/Q4 2026',
      parking: 'Permit from £50,000 (for 2-3 bed)',
      facilities: '24-Hour Concierge, 2,270 sqm Podium Gardens, 25m Pool, Vitality Pool, Gym, Virtual Golf, 2 Cinema Rooms',
      pricing: [
        { type: '1 Bed', price: '36 MB', size: '48 sqm' },
        { type: '2 Bed', price: '78 MB', size: '81 sqm' },
        { type: '3 Bed', price: '90 MB', size: '94.3 sqm' }
      ]
    },
    {
      id: '250-city-road',
      title: '250 City Road',
      location: 'City Road, London EC1V 2QQ',
      badge: 'Zone 1 · City of London',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=90',
      summary: 'Heart of London Zone 1 within walking distance of Old Street, Angel, and the financial district. High-rise luxury living with rooftop vistas.',
      tenure: '999-Year Leasehold (from 2019)',
      serviceCharge: 'Est. £6.30 / sq ft / annum',
      completion: 'Valencia Tower & Siena House (Completed)',
      parking: 'Parking permit from £50,000',
      facilities: 'Level 7 Gym, Lounge, Karaoke Room, Rooftop Terrace, 20m Pool & Underground Spa',
      pricing: [
        { type: '1 Bed', price: '39 MB', size: '50 sqm' },
        { type: '2 Bed', price: '56 MB', size: '75 sqm' },
        { type: '3 Bed', price: '79 MB', size: 'Varied' }
      ]
    },
    {
      id: 'west-end-gate',
      title: 'West End Gate',
      location: 'Paddington Green, London W2',
      badge: 'Zone 1 · West End',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=90',
      summary: 'Prime Zone 1 location near Paddington Station (Crossrail 11 mins walk). Features a new public piazza with landscaped water features.',
      tenure: '999-Year Leasehold',
      serviceCharge: 'Est. £6.59 / sq ft / annum',
      completion: 'Dec 2025 – May 2026',
      parking: 'General Right to Park at £75,000',
      facilities: '24-Hour Concierge, Swimming Pool, Gym, Cinema, Landscaped Piazza & Courtyard',
      pricing: [
        { type: '1 Bed', price: '43 MB', size: '50 sqm' },
        { type: '2 Bed', price: 'POA', size: '79 sqm' },
        { type: '3 Bed', price: 'POA', size: '134 sqm' }
      ]
    },
    {
      id: 'battersea-power-station',
      title: 'Battersea Power Station',
      location: 'Circus Rd W, London SW11 8DD',
      badge: 'Zone 1 · Iconic Landmark',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=90',
      summary: 'Only 254 homes exist inside this iconic Grade II* listed London landmark. Connected via Northern Line Extension & river boat.',
      tenure: '997-Year Leasehold',
      serviceCharge: 'Est. £9.78 / sq ft / annum',
      completion: 'Completed & Ready to Move In',
      parking: 'Phase 3B parking space at £85,000',
      facilities: 'Private Sky Lounge, Sunset Bar, Workspaces, Luxury Cinema, Roof Gardens with Sun Lawns & Gym',
      pricing: [
        { type: '1 Bed', price: '39 MB', size: '36 sqm' },
        { type: '2 Bed', price: '58 MB', size: '50 sqm' }
      ]
    },
    {
      id: 'the-sky-residences',
      title: 'The Sky Residences',
      location: '80 Houndsditch, City of London EC3A 7AB',
      badge: 'Zone 1 · Financial Hub',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=90',
      summary: 'Residences from levels 21 to 41 above Pan Pacific London hotel. Unrivalled views of St Paul’s, Tower Bridge & The Gherkin.',
      tenure: '999-Year Leasehold',
      serviceCharge: 'Est. £11.70 / sq ft / annum',
      completion: 'Completed & Ready to Move In',
      parking: 'Valet Parking Available',
      facilities: 'Pan Pacific Hotel 5-Star Amenities (Pool, Spa, Gym, Lounge Bar, Ballroom, Butler & In-room Dining)',
      pricing: [
        { type: '1 Bed', price: '62 MB', size: '59 sqm' },
        { type: '2 Bed', price: '84 MB', size: '80 sqm' },
        { type: '3 Bed', price: '175 MB', size: '132 sqm' }
      ]
    },
    {
      id: 'damac-tower',
      title: 'Damac Tower Nine Elms',
      location: '71 Bondway, London SW8 1SF',
      badge: 'Zone 1 · Versace Home',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=90',
      summary: '50-storey ultra-luxury tower with interiors designed by Versace Home. Situated between Vauxhall and Battersea.',
      tenure: '999-Year Leasehold',
      serviceCharge: 'Est. £11.96 / sq ft / annum',
      completion: 'Completed & Ready to Move In',
      parking: 'Parking available for 3 Beds+ (£150k)',
      facilities: 'Versace Home Interiors, Indoor Pool, Jacuzzi, 8,010 sq ft Roof Gardens, Gym, Children’s Play Area',
      pricing: [
        { type: '1 Bed', price: '35 MB', size: '54 sqm' },
        { type: '2 Bed', price: '51 MB', size: '86 sqm' },
        { type: '3 Bed', price: '81 MB', size: '133 sqm' },
        { type: '5 Bed', price: '347 MB', size: '289 sqm' }
      ]
    },
    {
      id: 'aspen-canary-wharf',
      title: 'Aspen Canary Wharf',
      location: 'Canary Wharf, London E14',
      badge: 'Zone 2 · Financial District',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=90',
      summary: 'Nestled in Canary Wharf alongside the Thames. Short walk to DLR, Canary Wharf Underground and Elizabeth Line.',
      tenure: '999-Year Leasehold',
      serviceCharge: 'Est. £6.95 / sq ft / annum',
      completion: 'Spring / Summer 2024',
      parking: 'Car-Free Development',
      facilities: 'The Aspen Club (Private Dining, Wine Tasting, Screening Room, Winter Garden, Spa Pool) + Dorsett Hotel Access',
      pricing: [
        { type: '1 Bed', price: '39 MB', size: '36 sqm' },
        { type: '2 Bed', price: '58 MB', size: '50 sqm' }
      ]
    },
    {
      id: 'poplar-riverside',
      title: 'Poplar Riverside',
      location: 'Leven Road, London E14',
      badge: 'Zone 2/3 · Waterfront',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=90',
      summary: '20-acre riverside regeneration zone featuring 2,800 homes, 2.5-acre park and 500m riverside walkway. 12 mins cycle to Canary Wharf.',
      tenure: '999-Year Leasehold',
      serviceCharge: 'Est. £3.87 / sq ft / annum',
      completion: 'Calico House (Completed / Q3 2024)',
      parking: 'Basement Parking Options',
      facilities: '16,000 sq ft Riverside Club (Co-working, Terrace Bar, Great Room, Cinema, 20m Pool, Salt Steam Spa)',
      pricing: [
        { type: '1 Bed', price: '24 MB', size: '67 sqm' },
        { type: '2 Bed', price: '31 MB', size: '71 sqm' },
        { type: '3 Bed', price: '44 MB', size: '90 sqm' }
      ]
    },
    {
      id: 'bow-green',
      title: 'Bow Green',
      location: 'Bow Common Lane, London E3 4BH',
      badge: 'Zone 2 · Parkside',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=90',
      summary: '1,450 new homes set within 9 acres of landscaped grounds including 5 acres of green park. 3 Tube stations within 10 mins walk.',
      tenure: '999-Year Leasehold',
      serviceCharge: 'Est. £4.85 / sq ft / annum',
      completion: 'Bow Apartments Q1/Q2 2026 | Botanical Q4 2026',
      parking: 'Cycle Storage / Public Transport Hub',
      facilities: 'Residents’ Pool, Gym, Canopy Lounge, Cinema, On-site Restaurant & Convenience Store',
      pricing: [
        { type: '1 Bed', price: '23 MB', size: '57 sqm' },
        { type: '2 Bed', price: '29 MB', size: '70-80 sqm' },
        { type: '3 Bed', price: '44 MB', size: '90 sqm' }
      ]
    },
    {
      id: 'the-green-quarter',
      title: 'The Green Quarter',
      location: 'Southall, West London UB1',
      badge: 'Zone 4 · Crossrail Hub',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=90',
      summary: 'Located directly opposite Southall Station on the Elizabeth Line (Crossrail). Quick access to Heathrow Airport and Central London.',
      tenure: '999-Year Leasehold',
      serviceCharge: 'Est. £4.32 / sq ft / annum',
      completion: 'Parkside East (Completed) | Parkside Central Feb-Apr 2024',
      parking: 'Right to Park at £20,000',
      facilities: 'Swimming Pool, Screening Room, Gym with Open Studio, Co-working Space, Concierge, Car Club',
      pricing: [
        { type: '1 Bed', price: '19 MB', size: '63 sqm' },
        { type: '2 Bed', price: '24 MB', size: '71 sqm' },
        { type: '3 Bed', price: '33 MB', size: '90 sqm' }
      ]
    },
    {
      id: 'earlsfield-springfield',
      title: 'Springfield Place, Earlsfield',
      location: 'Bicknell Way, Earlsfield SW17 0FD',
      badge: 'Zone 3 · Springfield Park',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=90',
      summary: 'Situated alongside a brand-new 32-acre park (Springfield Park). 19 mins walk to Earlsfield Mainline Station.',
      tenure: 'Apartments: 999 Years | Houses: Freehold',
      serviceCharge: 'Est. £1.55 – £2.50 / sq ft / annum',
      completion: 'Starting from Q3 2025',
      parking: 'Available on Selected Units',
      facilities: '32-Acre Springfield Park, Resident Green Spaces, Concierge & On-site Retail',
      pricing: [
        { type: '1 Bed Apt', price: '28 MB', size: '60 sqm' },
        { type: '2 Bed Apt', price: '34 MB', size: '78 sqm' },
        { type: '4 Bed Villa', price: '92 MB', size: '216 sqm' },
        { type: '5 Bed Villa', price: '108 MB', size: '244 sqm' }
      ]
    },
    {
      id: 'riverscape',
      title: 'Riverscape',
      location: 'Royal Wharf, London E16',
      badge: 'Zone 3 · Royal Wharf',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=90',
      summary: 'Direct Thames frontage next to Royal Wharf Pier (Uber Boat) and 2 mins walk to West Silvertown DLR.',
      tenure: '999-Year Leasehold',
      serviceCharge: 'Est. £5.06 / sq ft / annum',
      completion: 'Phases 1 & 2 Completed | Phase 3 Q3/Q4 2024',
      parking: 'Underground Parking Available',
      facilities: 'The Clubhouse (25m Pool, Jacuzzi, Sauna, Sky Lounge, Gym, Riverside Walkway & Gardens)',
      pricing: [
        { type: '1 Bed', price: '20 MB', size: '57 sqm' },
        { type: '2 Bed', price: '26 MB', size: '75 sqm' },
        { type: '3 Bed', price: '31 MB', size: '98 sqm' }
      ]
    },
    {
      id: 'glass-water-lock',
      title: 'Glass Water Lock',
      location: 'Belmont Row, Birmingham B4 7RQ',
      badge: 'Birmingham · HS2 Hub',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=90',
      summary: 'Located in Birmingham’s Learning Quarter near the upcoming HS2 Curzon Street station. 155m of canal-side frontage.',
      tenure: '250-Year Leasehold',
      serviceCharge: 'Est. £3.90 / sq ft / annum',
      completion: 'Ashted & Belmont Q1/Q2 2025 | Curzon Wharf Q3/Q4 2025',
      parking: 'Underground Parking Space at £30,000',
      facilities: 'Canal-Side Club, Courtyard Gardens, 24-Hr Concierge, Co-working Lounge, Cinema, Gym',
      pricing: [
        { type: '1 Bed', price: '12 MB', size: '45 sqm' },
        { type: '2 Bed', price: '18 MB', size: '63 sqm' }
      ]
    },
    {
      id: 'london-square-croydon',
      title: 'London Square Croydon',
      location: 'Station Road, Croydon CR0 2RB',
      badge: 'Greater London · 14 mins to City',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=90',
      summary: 'Dynamic London business hub just 14 mins by train to Central London or Gatwick Airport. Car-free green development.',
      tenure: '999-Year Leasehold',
      serviceCharge: 'Est. £4.00 / sq ft / annum',
      completion: 'Completed & Ready to Move In',
      parking: 'Car-Free Development (204 Cycle Spaces)',
      facilities: '24-Hr Concierge, 1st Floor Resident Terrace, Two Roof Terraces on Level 20, Zipcar Membership',
      pricing: [
        { type: '1 Bed', price: '17 MB', size: '50 sqm' },
        { type: '2 Bed', price: '21 MB', size: '70 sqm' },
        { type: '3 Bed', price: '28 MB', size: '93 sqm' }
      ]
    }
  ];

  const nextSlide = () => {
    if (currentSlide < projects.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  return (
    <section className="white" id="projects">
      <div className="wrap reveal">
        {/* Section Header */}
        <div className="projectHead">
          <div className="ey">Private opportunities</div>
          <h2 className="title">Selected<br /><em>projects.</em></h2>
          <p className="muted">Featured developments and off-market residential opportunities across London and major UK cities.</p>
        </div>

        {/* Flat Carousel Slider Container */}
        <div className="flat-carousel-wrapper">
          {/* Navigation Arrows */}
          <button 
            className="flat-arrow left" 
            onClick={prevSlide} 
            disabled={currentSlide === 0} 
            aria-label="Previous"
            style={{ opacity: currentSlide === 0 ? 0.3 : 1, cursor: currentSlide === 0 ? 'default' : 'pointer' }}
          >
            ←
          </button>
          
          <button 
            className="flat-arrow right" 
            onClick={nextSlide} 
            disabled={currentSlide === projects.length - 1} 
            aria-label="Next"
            style={{ opacity: currentSlide === projects.length - 1 ? 0.3 : 1, cursor: currentSlide === projects.length - 1 ? 'default' : 'pointer' }}
          >
            →
          </button>

          {/* Viewport and Track */}
          <div className="flat-carousel-viewport">
            <div 
              className="flat-carousel-track" 
              id="flatTrack"
              style={{ transform: `translateX(-${currentSlide * 384}px)` }}
            >
              {projects.map((proj) => (
                <div 
                  key={proj.id} 
                  className="flat-card"
                  onClick={() => setSelectedProject(proj)}
                  style={{ cursor: 'pointer' }}
                >
                  {/* Image & Badge */}
                  <div className="flat-card-img" style={{ backgroundImage: `url('${proj.image}')` }}>
                    <span className="slide-badge">{proj.badge}</span>
                  </div>

                  {/* Minimal Body Content */}
                  <div className="flat-card-body">
                    <div>
                      <h3>{proj.title}</h3>
                      <p style={{ fontSize: '10px', color: '#FE6E46', fontWeight: 700, margin: '0 0 10px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        📍 {proj.location}
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '1.6', color: 'rgba(22, 22, 64, 0.75)', margin: '0 0 20px' }}>
                        {proj.summary}
                      </p>
                    </div>

                    <button className="pill" onClick={(e) => { e.stopPropagation(); setSelectedProject(proj); }}>
                      View Full Specification ↗
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-mask left"></div>
          <div className="fade-mask right"></div>

          {/* Dots Indicator */}
          <div className="flat-dots" id="flatDots">
            {projects.slice(0, 8).map((_, index) => (
              <span 
                key={index} 
                className={`f-dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>

      {/* Detail Modal Overlay */}
      {selectedProject && (
        <div className="modal open" style={{ display: 'grid' }} onClick={() => setSelectedProject(null)}>
          <div className="modalCard" style={{ background: '#FFFFFF', color: '#0F0F2E', maxWidth: '750px', borderRadius: '24px', padding: '36px' }} onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setSelectedProject(null)}>×</button>
            
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ background: '#FE6E46', color: '#0F0F2E', fontSize: '9px', fontWeight: 700, padding: '4px 12px', borderRadius: '100px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                {selectedProject.badge}
              </span>
            </div>

            <h2 style={{ font: '500 36px/1.1 var(--font-serif)', color: '#0F0F2E', margin: '0 0 8px' }}>
              {selectedProject.title}
            </h2>
            <p style={{ fontSize: '11px', color: '#FE6E46', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>
              📍 {selectedProject.location}
            </p>

            <img src={selectedProject.image} alt={selectedProject.title} style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: '16px', marginBottom: '24px' }} />

            <p style={{ fontSize: '13px', lineHeight: '1.7', color: 'rgba(15, 15, 46, 0.8)', marginBottom: '24px' }}>
              {selectedProject.summary}
            </p>

            {/* Pricing Matrix */}
            <div style={{ background: '#F4F1E8', padding: '18px', borderRadius: '16px', marginBottom: '24px' }}>
              <div style={{ fontSize: '9px', letterSpacing: '0.18em', color: '#FE6E46', fontWeight: 700, marginBottom: '10px', textTransform: 'uppercase' }}>
                STARTING PRICES & TYPOLOGY
              </div>
              {selectedProject.pricing.map((p, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', padding: '6px 0', borderBottom: '1px dashed rgba(15, 15, 46, 0.15)' }}>
                  <span style={{ color: '#0F0F2E', fontWeight: 600 }}>{p.type} ({p.size})</span>
                  <span style={{ color: '#FE6E46', fontWeight: 700 }}>Starting {p.price}</span>
                </div>
              ))}
            </div>

            {/* Detailed Key Specs */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', fontSize: '12px', color: 'rgba(15, 15, 46, 0.8)', marginBottom: '24px', background: 'rgba(15, 15, 46, 0.03)', padding: '16px', borderRadius: '12px' }}>
              <div><strong>Service Charge:</strong><br />{selectedProject.serviceCharge}</div>
              <div><strong>Tenure:</strong><br />{selectedProject.tenure}</div>
              <div><strong>Completion:</strong><br />{selectedProject.completion}</div>
              <div><strong>Parking:</strong><br />{selectedProject.parking}</div>
            </div>

            <div style={{ fontSize: '12px', color: 'rgba(15, 15, 46, 0.8)', marginBottom: '28px', background: 'rgba(15, 15, 46, 0.03)', padding: '16px', borderRadius: '12px' }}>
              <strong>Facilities & Amenities:</strong><br />{selectedProject.facilities}
            </div>

            <button 
              className="hero-reveal-btn" 
              onClick={() => { setSelectedProject(null); openModal && openModal('contact'); }}
              style={{ width: '100%', padding: '16px 0', fontSize: '10px', borderRadius: '100px', textAlign: 'center' }}
            >
              REQUEST OFFICIAL DOSSIER & AVAILABILITY ↗
            </button>
          </div>
        </div>
      )}
    </section>
  );
}