export default function Advisory({ openModal, setCurrentPage }) {
  return (
    <section className="dark" id="advisory">
      <div className="wrap reveal">
        <div className="ey">02 — Advisory</div>
        <h2 className="title">OUR<br /><em>Services</em></h2>
        
        <div className="services-horizontal">
          {/* 🟢 ใช้ setCurrentPage?.('property') เพื่อความปลอดภัย */}
          <div className="service-h-card" onClick={() => setCurrentPage?.('property')}>
            <div className="service-img-box" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=90')` }}>
              <span className="service-num">01</span>
            </div>
            <div className="service-info">
              <h3>International Property</h3>
              <p>Prime residences, income-producing assets and selected opportunities across strategic global markets.</p>
              <div className="service-link">
                <span>Explore route</span>
                <b className="arrow">↗</b>
              </div>
            </div>
          </div>

          <div className="service-h-card" onClick={() => setCurrentPage?.('citizenship')}>
            <div className="service-img-box" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=90')` }}>
              <span className="service-num">02</span>
            </div>
            <div className="service-info">
              <h3>Citizenship by Investment</h3>
              <p>Government-approved investment migration routes for eligible investors and families.</p>
              <div className="service-link">
                <span>Explore route</span>
                <b className="arrow">↗</b>
              </div>
            </div>
          </div>

          <div className="service-h-card" onClick={() => setCurrentPage?.('residency')}>
            <div className="service-img-box" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=90')` }}>
              <span className="service-num">03</span>
            </div>
            <div className="service-info">
              <h3>Long-Term Residency</h3>
              <p>Residency strategies aligned to lifestyle, education, business and legacy objectives.</p>
              <div className="service-link">
                <span>Explore route</span>
                <b className="arrow">↗</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}