export default function Hero() {
  return (
    <header className="hero" id="home">
      <div className="bg" id="bg"></div>
      <div className="glow"></div>
      <div className="hc">
        <div className="ey">Boutique International Advisory · Real Estate · Residency · Citizenship</div>
        <h1>
          <div><span>GLOBAL</span></div>
          <div><span>ASSETS</span></div>
        </h1>
        <div className="heroFoot">
          <p>Strategic international solutions for private clients and families seeking greater mobility, investment opportunity and long-term security — curated with discretion.</p>
          <div className="actions">
            <button className="pill" onClick={() => document.getElementById('match').scrollIntoView()}>Discover your route ↗</button>
            <button className="pill alt" onClick={() => openModal('contact')}>Private consultation</button>
          </div>
        </div>
      </div>
      <div className="heroBottom">
        <span>Build a global life</span>
        <span className="scroll"></span>
        <span>Bangkok · London · Global</span>
      </div>
    </header>
  );
}