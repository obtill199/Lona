import { useState } from "react";


const ASSET = import.meta.env.BASE_URL + "assets/";
const BOOK = "https://www.vagaro.com/tribeandtruesalon/book-now";
const INSTAGRAM = "https://www.instagram.com/locks.by.lona/";
const LINKS = {
  blonde: "https://www.instagram.com/locks.by.lona/p/DeZ4KvioEJZ/",
  copper: "https://www.instagram.com/locks.by.lona/p/DcRrdYEjiPG/",
  extensions: "https://www.instagram.com/locks.by.lona/p/DbhJxxAIBeB/",
  review: "https://docs.google.com/forms/d/e/1FAIpQLScuDW4YZ_2H8YbOplsgRjm0LpwIk9x2-qMcWYcVN5KxzIzQMA/viewform",
  favorites: "https://www.amazon.com/shop/locks.by.lona",
  policies: "https://www.instagram.com/stories/highlights/17963492057212679/",
};

function ExternalArrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="preview-strip"><span>Website concept for Locks by Lona</span><span>Preview only · not the official website</span></div>
      <header className="site-header" id="top">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="Locks by Lona, home"><span className="brand-star" aria-hidden="true">✳</span><span>LOCKS<br /><small>BY LONA</small></span></a>
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "Close" : "Menu"} <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span></button>
          <nav className={menuOpen ? "site-nav is-open" : "site-nav"} id="site-nav" aria-label="Main navigation">
            <a href="#specialties" onClick={() => setMenuOpen(false)}>Specialties</a>
            <a href="#work" onClick={() => setMenuOpen(false)}>The work</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>Meet Lona</a>
            <a href="#visit" onClick={() => setMenuOpen(false)}>Visit</a>
          </nav>
          <a className="header-book" href={BOOK} target="_blank" rel="noopener noreferrer">Book with Alona <ExternalArrow /></a>
        </div>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="hero-kicker">ALONA SWAYNE · DERBY, KANSAS</p>
              <h1 id="hero-title">Good hair.<br /><em>Better company.</em></h1>
              <p className="hero-lead">Blondes, extensions, and color you can live in. Come sit in my chair and leave feeling more like yourself.</p>
              <div className="hero-actions">
                <a className="hero-book" href={BOOK} target="_blank" rel="noopener noreferrer">Book with Alona <ExternalArrow /></a>
                <a className="hero-work" href="#work">See the work <span aria-hidden="true">↓</span></a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-flower" aria-hidden="true">✳</div>
              <a className="hero-photo" href={LINKS.blonde} target="_blank" rel="noopener noreferrer" aria-label="View Lona's blonde hair work on Instagram">
                <img src={ASSET + "blonde.webp"} alt="Warm dimensional blonde waves styled by Alona Swayne" fetchPriority="high" />
              </a>
              <a className="hero-photo-small" href={LINKS.copper} target="_blank" rel="noopener noreferrer" aria-label="View Lona's copper color work on Instagram">
                <img src={ASSET + "copper.webp"} alt="Copper waves styled by Alona Swayne" />
                <span>more color, please</span>
              </a>
            </div>
          </div>
          <div className="hero-ticker" aria-hidden="true"><span>BLONDES ✳ EXTENSIONS ✳ LOW MAINTENANCE COLOR ✳ GOOD VIBES ✳</span></div>
        </section>

        <section className="specialties" id="specialties" aria-labelledby="specialties-title">
          <div className="section-shell">
            <div className="specialties-intro"><p className="section-note">THE GOOD STUFF</p><h2 id="specialties-title">Hair that fits<br /><em>your real life.</em></h2><p>Whether you want brighter blonde, fuller hair, or dimension that grows out beautifully, let's find the right plan for you.</p></div>
            <div className="service-list">
              <div className="service-row"><span className="service-mark">✳</span><div><h3>Blondes</h3><p>Bright, soft, dimensional, or somewhere in between.</p></div><span className="service-end">01</span></div>
              <div className="service-row"><span className="service-mark">✳</span><div><h3>Extensions</h3><p>Thoughtful length and fullness, matched to your hair and routine.</p></div><span className="service-end">02</span></div>
              <div className="service-row"><span className="service-mark">✳</span><div><h3>Low maintenance color</h3><p>Lived-in dimension made to look beautiful beyond appointment day.</p></div><span className="service-end">03</span></div>
            </div>
            <p className="service-footnote">Not sure what to book? <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">Ask Alona on Instagram <ExternalArrow /></a></p>
          </div>
        </section>

        <section className="work" id="work" aria-labelledby="work-title">
          <div className="section-shell">
            <div className="work-heading"><div><p className="section-note">FROM THE CHAIR</p><h2 id="work-title">The hair speaks<br />for itself<span className="pink-dot">.</span></h2></div><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">More on Instagram <ExternalArrow /></a></div>
            <div className="work-grid">
              <a className="work-card work-blonde" href={LINKS.blonde} target="_blank" rel="noopener noreferrer"><img src={ASSET + "blonde.webp"} alt="Dimensional warm blonde hair by Alona" loading="lazy" /><span className="work-card-caption"><strong>Warm blonde</strong><span>View original post ↗</span></span></a>
              <a className="work-card work-extensions" href={LINKS.extensions} target="_blank" rel="noopener noreferrer"><img src={ASSET + "extensions.webp"} alt="Long brunette extensions by Alona" loading="lazy" /><span className="work-card-caption"><strong>Length and fullness</strong><span>View original post ↗</span></span></a>
              <a className="work-card work-copper" href={LINKS.copper} target="_blank" rel="noopener noreferrer"><img src={ASSET + "copper.webp"} alt="Copper hair color by Alona" loading="lazy" /><span className="work-card-caption"><strong>Copper glow</strong><span>View original post ↗</span></span></a>
            </div>
            <p className="work-credit">Photos from Alona's public Instagram, shown here for this website concept. Each image opens her original post.</p>
          </div>
        </section>

        <section className="about" id="about" aria-labelledby="about-title">
          <div className="section-shell about-layout">
            <div className="about-stamp" aria-hidden="true"><span>YOU'RE<br />REALLY<br />PRETTY</span><b>☺</b></div>
            <div className="about-copy">
              <p className="section-note">HI, I'M ALONA</p>
              <h2 id="about-title">Your hair girl<br />in Derby<span className="pink-dot">.</span></h2>
              <p>I'm Alona Swayne, the stylist behind Locks by Lona at Tribe &amp; True Salon. I love blondes, extensions, low maintenance color, and the conversations that happen along the way.</p>
              <blockquote>“I live for girl talk during our appointments!” <a href="https://www.instagram.com/locks.by.lona/p/Db4BOWfoP14/" target="_blank" rel="noopener noreferrer">Alona on Instagram <ExternalArrow /></a></blockquote>
              <a className="about-instagram" href={INSTAGRAM} target="_blank" rel="noopener noreferrer">Follow @locks.by.lona <ExternalArrow /></a>
            </div>
          </div>
        </section>

        <section className="visit" id="visit" aria-labelledby="visit-title">
          <div className="section-shell visit-layout">
            <div className="visit-lead"><p className="section-note">YOUR NEXT GOOD HAIR DAY</p><h2 id="visit-title">See you in<br /><em>the chair.</em></h2><a className="visit-book" href={BOOK} target="_blank" rel="noopener noreferrer">Book with Alona <ExternalArrow /></a><p className="booking-note">Booking opens Tribe &amp; True Salon on Vagaro. Choose Alona Swayne as your stylist.</p></div>
            <div className="visit-detail"><h3>Come find me</h3><p>Tribe &amp; True Salon<br />818 N Baltimore Ave<br />Derby, KS 67037</p><a href="https://www.google.com/maps/search/?api=1&query=818+N+Baltimore+Ave+Derby+KS+67037" target="_blank" rel="noopener noreferrer">Get directions <ExternalArrow /></a><hr /><h3>A little more</h3><a href={LINKS.policies} target="_blank" rel="noopener noreferrer">Policies on Instagram <ExternalArrow /></a><a href={LINKS.favorites} target="_blank" rel="noopener noreferrer">Shop my favorites <ExternalArrow /></a><a href={LINKS.review} target="_blank" rel="noopener noreferrer">Leave a review <ExternalArrow /></a></div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="section-shell footer-inner"><a href="#top" className="footer-brand">LOCKS BY LONA <span>✳</span></a><p>Hair by Alona Swayne at Tribe &amp; True Salon, Derby, Kansas.</p><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">Instagram <ExternalArrow /></a></div><p className="concept-note">Concept preview. Not Alona's official website. Portfolio images are credited to her public Instagram.</p></footer>
      <a className="mobile-book" href={BOOK} target="_blank" rel="noopener noreferrer">Book with Alona <ExternalArrow /></a>
    </>
  );
}
