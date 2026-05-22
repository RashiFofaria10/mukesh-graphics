"use client";

import { useState, useEffect } from "react";

const CONTACT_URL = "https://www.mukeshgraphics.com/contact-us.html";
const PHONE = "+91 94262 72081";
const NAV = ["home", "about", "why us", "services", "portfolio", "clients", "contact"];

// High-quality, professional printing and packaging imagery
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1586339392738-bc59ba0f5f76?w=1200&q=80", 
  about: "https://images.unsplash.com/photo-1614032686163-bdc24c13d0b6?w=1000&q=80", 
  packaging: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80",
  offset: "https://images.unsplash.com/photo-1604754742629-3e5728249d73?w=800&q=80",
  brand: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&q=80"
};

const FEATURES = [
  { title: "High-Quality Printing", desc: "Quality that makes your brand stand out with premium materials and exceptional finishing.", icon: "✨" },
  { title: "In-House Tech & Machinery", desc: "State-of-the-art 5-color offset press with online coater for precision and consistency.", icon: "⚙️" },
  { title: "100% Satisfaction Assured", desc: "Your complete satisfaction is our promise with strict quality guarantees and reliable dispatch.", icon: "🤝" },
  { title: "Dedicated Support", desc: "Outstanding premium support with dedicated assistance for all your packaging and printing needs.", icon: "📞" },
];

const SERVICES = [
  { title: "Packaging Design", desc: "Premium FMCG, food, pharma & industrial packaging with world-class finishing.", img: IMAGES.packaging },
  { title: "5-Color Offset Printing", desc: "Flawless offset printing with online coating for vibrant, consistent, and fast results.", img: IMAGES.offset },
  { title: "Brand Identity", desc: "Letterheads, menu cards, and promotional materials designed to elevate your brand.", img: IMAGES.brand },
];

const CLIENTS = [
  { name: "Sun Pharma", logo: "https://logo.clearbit.com/sunpharma.com" },
  { name: "Cipla", logo: "https://logo.clearbit.com/cipla.com" },
  { name: "Zydus", logo: "https://logo.clearbit.com/zyduslife.com" },
  { name: "Torrent", logo: "https://logo.clearbit.com/torrentpharma.com" },
  { name: "Ajanta", logo: "https://logo.clearbit.com/ajantapharma.com" },
  { name: "Lupin", logo: "https://logo.clearbit.com/lupin.com" },
];

const TESTIMONIALS = [
  { text: "Mukesh Graphics transformed our product packaging. The precision of their 5-color offset printing is unmatched in Gujarat.", author: "Rajesh Patel", role: "Procurement Manager, PharmaCorp" },
  { text: "We rely on them for all our FMCG food boxes. Timely delivery, competitive pricing, and exceptional print quality every single time.", author: "Anita Sharma", role: "Director, FreshFoods" },
  { text: "Their brand identity materials gave our retail business the premium look we desperately needed. Highly recommended!", author: "Vikram Singh", role: "Founder, RetailEdge" },
];

export default function Page() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const hit = NAV.map(id => document.getElementById(id.replace(" ", "-")))
        .filter(Boolean)
        .findLast(el => el && el.getBoundingClientRect().top <= 150);
      if (hit) setActiveSection(hit.id.replace("-", " "));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.replace(" ", "-"))?.scrollIntoView({ behavior: "smooth" });
    setMobileNavOpen(false);
  };

  const isScrolled = scrollY > 30;

  return (
    <main style={{ backgroundColor: "#ffffff", color: "#111827", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Inter', sans-serif; -webkit-font-smoothing: antialiased; background-color: #fcfcfc; }
        
        h1, h2, h3, h4, .font-heading { font-family: 'Playfair Display', serif; }
        
        /* Typography Variables */
        :root {
          --brand-primary: #1e3a8a; /* Deep Trust Blue */
          --brand-accent: #d97706; /* Premium Gold/Amber */
          --black: #0f172a;
          --dark: #1e293b;
          --gray: #64748b;
          --light-gray: #f8fafc;
          --white: #ffffff;
          --shadow-sm: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
          --shadow-md: 0 10px 25px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025);
        }

        /* Buttons */
        .btn-dark {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          padding: 16px 32px; border-radius: 8px;
          background-color: var(--brand-primary); color: var(--white);
          font-family: 'Inter', sans-serif; font-weight: 500; font-size: 15px;
          text-decoration: none; border: 1px solid var(--brand-primary); cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: var(--shadow-sm);
        }
        .btn-dark:hover { 
          background-color: #172554; border-color: #172554;
          transform: translateY(-2px); box-shadow: var(--shadow-md);
        }
        
        .btn-outline {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          padding: 16px 32px; border-radius: 8px;
          background-color: transparent; color: var(--brand-primary);
          font-family: 'Inter', sans-serif; font-weight: 600; font-size: 15px;
          text-decoration: none; border: 2px solid var(--brand-primary); cursor: pointer;
          transition: all 0.3s ease;
        }
        .btn-outline:hover { 
          background-color: var(--brand-primary); color: var(--white); 
          transform: translateY(-2px);
        }

        /* Nav Links */
        .nav-link {
          font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 500;
          color: var(--gray); text-transform: uppercase; letter-spacing: 0.5px;
          background: none; border: none; cursor: pointer;
          padding: 8px 0; position: relative; transition: color 0.3s;
        }
        .nav-link:hover, .nav-link.active { color: var(--brand-primary); font-weight: 600; }
        .nav-link::after {
          content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 2px;
          background: var(--brand-accent); transition: width 0.3s ease;
        }
        .nav-link.active::after, .nav-link:hover::after { width: 100%; }

        /* Minimal Cards */
        .min-card {
          background: var(--white); border: 1px solid #e2e8f0; 
          padding: 40px 32px; border-radius: 12px;
          transition: all 0.4s ease;
        }
        .min-card:hover { 
          border-color: #cbd5e1; transform: translateY(-6px);
          box-shadow: var(--shadow-md);
        }

        .img-wrap { overflow: hidden; border-radius: 12px; }
        .img-wrap img { transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1); width: 100%; height: 100%; object-fit: cover; }
        .img-wrap:hover img { transform: scale(1.08); }

        /* Layout Utility */
        .container { max-width: 1280px; margin: 0 auto; padding: 0 24px; }
        .section-padding { padding: 120px 0; }
        .section-header { margin-bottom: 60px; max-width: 650px; }
        .subtitle { 
          font-family: 'Inter', sans-serif; color: var(--brand-accent); 
          font-weight: 600; font-size: 13px; text-transform: uppercase; 
          letter-spacing: 2.5px; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;
        }
        .subtitle::before { content: ''; width: 24px; height: 2px; background-color: var(--brand-accent); display: inline-block; }
        .title { font-size: clamp(36px, 4vw, 48px); color: var(--black); font-weight: 700; line-height: 1.15; margin-bottom: 24px; }
        .text-body { color: var(--gray); font-size: 17px; line-height: 1.7; }
        
        /* Form Inputs */
        .input-field {
          padding: 16px 20px; border: 1px solid #cbd5e1; border-radius: 8px;
          background-color: var(--light-gray); font-family: 'Inter'; font-size: 15px;
          outline: none; transition: all 0.2s;
        }
        .input-field:focus {
          border-color: var(--brand-primary); background-color: var(--white);
          box-shadow: 0 0 0 3px rgba(30, 58, 138, 0.1);
        }

        /* Grid Helpers */
        .grid-2 { display: grid; grid-template-columns: 1fr; gap: 60px; }
        @media (min-width: 900px) { .grid-2 { grid-template-columns: 1fr 1fr; } }
      `}</style>

      {/* 🧭 NAVIGATION */}
      <header style={{
        position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1000,
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.9)" : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(226, 232, 240, 0.8)" : "1px solid transparent",
        transition: "all 0.3s ease", padding: isScrolled ? "16px 0" : "24px 0"
      }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <div onClick={() => scrollTo("home")} style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer" }}>
            <span className="font-heading" style={{ fontSize: "24px", fontWeight: "700", color: "var(--brand-primary)", letterSpacing: "-0.5px" }}>
              Mukesh Graphics<span style={{ color: "var(--brand-accent)" }}>.</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav style={{ display: "none", gap: "32px", alignItems: "center" }} className="desktop-nav">
            <style>{`@media (min-width: 1024px) { .desktop-nav { display: flex !important; } .mobile-btn { display: none !important; } }`}</style>
            {NAV.map(item => (
              <button key={item} className={`nav-link ${activeSection === item ? "active" : ""}`} onClick={() => scrollTo(item)}>
                {item}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <a href={`tel:${PHONE.replace(/\s+/g, '')}`} className="desktop-nav" style={{ color: "var(--black)", textDecoration: "none", fontWeight: "600", fontSize: "14px", display: "none", alignItems: "center", gap: "6px" }}>
              📞 {PHONE}
            </a>
            <a href={CONTACT_URL} target="_blank" rel="noopener" className="btn-dark" style={{ padding: "12px 24px", fontSize: "14px" }}>
              Request Quote
            </a>
            <button className="mobile-btn" onClick={() => setMobileNavOpen(!mobileNavOpen)} style={{ background: "none", border: "none", fontSize: "28px", color: "var(--black)", cursor: "pointer" }}>
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileNavOpen && (
        <div style={{ position: "fixed", inset: 0, backgroundColor: "var(--white)", zIndex: 999, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "32px" }}>
          {NAV.map(item => (
            <button key={item} onClick={() => scrollTo(item)} className="font-heading" style={{ background: "none", border: "none", fontSize: "28px", color: "var(--brand-primary)", textTransform: "capitalize", fontWeight: "600" }}>
              {item}
            </button>
          ))}
          <a href={`tel:${PHONE.replace(/\s+/g, '')}`} className="font-heading" style={{ fontSize: "20px", color: "var(--brand-accent)", textDecoration: "none", marginTop: "20px" }}>Call: {PHONE}</a>
          <button onClick={() => setMobileNavOpen(false)} style={{ position: "absolute", top: "24px", right: "24px", background: "none", border: "none", fontSize: "36px", color: "var(--gray)" }}>×</button>
        </div>
      )}

      {/* 🎯 HERO SECTION */}
      <section id="home" style={{ paddingTop: "180px", paddingBottom: "100px", backgroundColor: "var(--light-gray)", position: "relative", overflow: "hidden" }}>
        {/* Abstract Background Element */}
        <div style={{ position: "absolute", top: "-10%", right: "-5%", width: "40vw", height: "40vw", background: "radial-gradient(circle, rgba(30,58,138,0.05) 0%, rgba(255,255,255,0) 70%)", borderRadius: "50%", zIndex: 0 }} />
        
        <div className="container grid-2" style={{ alignItems: "center", position: "relative", zIndex: 1 }}>
          <div style={{ paddingRight: "4vw" }}>
            <div style={{ display: "inline-block", padding: "6px 12px", backgroundColor: "rgba(217, 119, 6, 0.1)", color: "var(--brand-accent)", borderRadius: "20px", fontSize: "13px", fontWeight: "600", marginBottom: "24px", letterSpacing: "0.5px" }}>
              🏆 Award-Winning Press
            </div>
            <h1 className="font-heading" style={{ fontSize: "clamp(46px, 5vw, 68px)", fontWeight: "700", color: "var(--black)", lineHeight: "1.1", marginBottom: "24px" }}>
              Packaging That Elevates Your Brand.
            </h1>
            <p className="text-body" style={{ fontSize: "19px", marginBottom: "40px", color: "#475569" }}>
              Mukesh Graphics delivers innovative printing solutions with world-class materials, precise detailing, and impeccable production standards.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a href={CONTACT_URL} target="_blank" rel="noopener" className="btn-dark">
                Request a Quote
              </a>
              <a href={`tel:${PHONE.replace(/\s+/g, '')}`} className="btn-outline">
                Speak to us
              </a>
            </div>
            
            {/* Quick Trust Stats */}
            <div style={{ display: "flex", gap: "40px", marginTop: "60px", paddingTop: "32px", borderTop: "1px solid #e2e8f0" }}>
              {[["20+", "Years Exp."], ["500+", "Premium Brands"], ["5-Color", "Offset Tech"]].map(([num, text]) => (
                <div key={text}>
                  <div className="font-heading" style={{ fontSize: "28px", color: "var(--brand-primary)", fontWeight: "700" }}>{num}</div>
                  <div style={{ fontSize: "14px", color: "var(--gray)", fontWeight: "500", marginTop: "4px" }}>{text}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="img-wrap" style={{ height: "650px", boxShadow: "var(--shadow-md)" }}>
            <img src={IMAGES.hero} alt="Professional Offset Printing Machine" />
          </div>
        </div>
      </section>

      {/* ✨ WHY CHOOSE US */}
      <section id="why-us" className="section-padding" style={{ backgroundColor: "var(--white)" }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: "center", margin: "0 auto 60px auto" }}>
            <span className="subtitle" style={{ justifyContent: "center" }}>Why Choose Us</span>
            <h2 className="title">Built on Precision & Trust</h2>
            <p className="text-body">We don't just print; we ensure every box, card, and label leaves our facility reflecting the premium standard of your brand.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "32px" }}>
            {FEATURES.map((feat, i) => (
              <div key={i} className="min-card">
                <div style={{ fontSize: "32px", marginBottom: "20px" }}>{feat.icon}</div>
                <h3 className="font-heading" style={{ fontSize: "22px", marginBottom: "12px", color: "var(--black)" }}>{feat.title}</h3>
                <p className="text-body" style={{ fontSize: "16px" }}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🏢 ABOUT US */}
      <section id="about" className="section-padding" style={{ backgroundColor: "var(--light-gray)" }}>
        <div className="container grid-2" style={{ alignItems: "center" }}>
          <div className="img-wrap" style={{ height: "550px", boxShadow: "var(--shadow-md)" }}>
            <img src={IMAGES.about} alt="Premium Packaging" />
          </div>
          <div style={{ paddingLeft: "2vw" }}>
            <span className="subtitle">About Mukesh Graphics</span>
            <h2 className="title">Precision Craftsmanship for Modern Brands</h2>
            <p className="text-body" style={{ marginBottom: "24px" }}>
              Based in Bhavnagar, Gujarat, Mukesh Graphics has established itself as a premier partner for hundreds of brands across pharma, FMCG, food, agriculture, and retail sectors.
            </p>
            <p className="text-body" style={{ marginBottom: "40px" }}>
              Equipped with our in-house 5-color offset press and online coating technology, we maintain total control over production—guaranteeing exceptional vibrance, consistency, and timely dispatch.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <a href={CONTACT_URL} target="_blank" rel="noopener" className="btn-dark">Discover Our Process</a>
            </div>
          </div>
        </div>
      </section>

      {/* 📦 SERVICES */}
      <section id="services" className="section-padding" style={{ backgroundColor: "var(--white)" }}>
        <div className="container">
          <div className="section-header">
            <span className="subtitle">What We Do</span>
            <h2 className="title">Our Core Services</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px" }}>
            {SERVICES.map((srv, i) => (
              <div key={i} className="img-wrap min-card" style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ height: "280px", overflow: "hidden" }}>
                  <img src={srv.img} alt={srv.title} />
                </div>
                <div style={{ padding: "40px 32px", backgroundColor: "var(--white)", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3 className="font-heading" style={{ fontSize: "24px", marginBottom: "16px", color: "var(--black)" }}>{srv.title}</h3>
                  <p className="text-body" style={{ fontSize: "16px", marginBottom: "32px", flex: 1 }}>{srv.desc}</p>
                  <a href={CONTACT_URL} target="_blank" rel="noopener" style={{ color: "var(--brand-primary)", fontWeight: "600", textDecoration: "none", fontSize: "15px", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    Get a quote <span style={{ transition: "transform 0.2s" }} className="arrow">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🤝 CLIENTS & TESTIMONIALS */}
      <section id="clients" className="section-padding" style={{ backgroundColor: "var(--brand-primary)", color: "var(--white)" }}>
        <div className="container">
          
          {/* Clients Logos */}
          <div style={{ textAlign: "center", marginBottom: "100px" }}>
            <span className="subtitle" style={{ justifyContent: "center", color: "rgba(255,255,255,0.7)" }}>Trusted By Industry Leaders</span>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "60px", marginTop: "50px" }}>
              {CLIENTS.map(client => (
                <div key={client.name} style={{ width: "130px", display: "flex", alignItems: "center", justifyContent: "center", filter: "brightness(0) invert(1)", opacity: 0.5, transition: "opacity 0.3s cursor-pointer" }} onMouseEnter={e => { e.currentTarget.style.opacity = 1; }} onMouseLeave={e => { e.currentTarget.style.opacity = 0.5; }}>
                  <img src={client.logo} alt={client.name} style={{ maxWidth: "100%", maxHeight: "40px", objectFit: "contain" }} onError={e => { e.currentTarget.style.display="none"; }}/>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="section-header" style={{ textAlign: "center", margin: "0 auto 60px auto" }}>
            <h2 className="title" style={{ color: "var(--white)" }}>Client Testimonials</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
            {TESTIMONIALS.map((test, i) => (
              <div key={i} className="min-card" style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)", color: "var(--white)" }}>
                <div style={{ color: "var(--brand-accent)", fontSize: "48px", lineHeight: "1", marginBottom: "16px", fontFamily: "serif" }}>"</div>
                <p className="text-body" style={{ fontStyle: "italic", marginBottom: "32px", color: "rgba(255,255,255,0.9)", fontSize: "16px" }}>{test.text}</p>
                <div>
                  <div className="font-heading" style={{ fontSize: "18px", color: "var(--white)", fontWeight: "600" }}>{test.author}</div>
                  <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", marginTop: "4px" }}>{test.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📞 CONTACT */}
      <section id="contact" className="section-padding" style={{ backgroundColor: "var(--light-gray)" }}>
        <div className="container grid-2">
          
          <div style={{ paddingRight: "2vw" }}>
            <span className="subtitle">Get In Touch</span>
            <h2 className="title">Ready to elevate your packaging?</h2>
            <p className="text-body" style={{ marginBottom: "48px" }}>
              Contact us today for custom packaging and commercial printing quotes. Our production specialists are ready to deliver flawless results for your next run.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <a href={`tel:${PHONE.replace(/\s+/g, '')}`} style={{ display: "flex", alignItems: "center", gap: "24px", padding: "32px", backgroundColor: "var(--white)", borderRadius: "12px", border: "1px solid #e2e8f0", textDecoration: "none", color: "inherit", transition: "all 0.3s", boxShadow: "var(--shadow-sm)" }} onMouseEnter={e=> { e.currentTarget.style.borderColor="var(--brand-primary)"; e.currentTarget.style.transform="translateX(8px)"; }} onMouseLeave={e=> { e.currentTarget.style.borderColor="#e2e8f0"; e.currentTarget.style.transform="translateX(0)"; }}>
                <div style={{ fontSize: "32px" }}>📞</div>
                <div>
                  <div style={{ fontSize: "13px", color: "var(--gray)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px", fontWeight: "600" }}>Call Us Directly</div>
                  <h4 className="font-heading" style={{ fontSize: "20px", margin: 0, color: "var(--black)" }}>+91 94262 72081</h4>
                </div>
              </a>
              
              <a href="mailto:info@mukeshgraphics.com" style={{ display: "flex", alignItems: "center", gap: "24px", padding: "32px", backgroundColor: "var(--white)", borderRadius: "12px", border: "1px solid #e2e8f0", textDecoration: "none", color: "inherit", transition: "all 0.3s", boxShadow: "var(--shadow-sm)" }} onMouseEnter={e=> { e.currentTarget.style.borderColor="var(--brand-primary)"; e.currentTarget.style.transform="translateX(8px)"; }} onMouseLeave={e=> { e.currentTarget.style.borderColor="#e2e8f0"; e.currentTarget.style.transform="translateX(0)"; }}>
                <div style={{ fontSize: "32px" }}>✉️</div>
                <div>
                  <div style={{ fontSize: "13px", color: "var(--gray)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px", fontWeight: "600" }}>Email Us</div>
                  <h4 className="font-heading" style={{ fontSize: "20px", margin: 0, color: "var(--black)" }}>info@mukeshgraphics.com</h4>
                </div>
              </a>
            </div>
          </div>

          {/* Premium Form */}
          <div style={{ padding: "48px", backgroundColor: "var(--white)", borderRadius: "16px", boxShadow: "var(--shadow-md)", border: "1px solid #e2e8f0" }}>
            <h3 className="font-heading" style={{ fontSize: "28px", marginBottom: "32px", color: "var(--black)" }}>Request a Fast Quote</h3>
            <form onSubmit={e => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <input className="input-field" placeholder="Your Full Name" />
              <input className="input-field" placeholder="Phone Number" type="tel" />
              <input className="input-field" placeholder="Email Address" type="email" />
              <textarea className="input-field" placeholder="Tell us about your project (quantity, material, timeline)..." rows={5} style={{ resize: "vertical" }} />
              <button className="btn-dark" style={{ width: "100%", marginTop: "12px", padding: "20px", fontSize: "16px" }}>Send Quote Request</button>
            </form>
          </div>
        </div>
      </section>

      {/* 🏁 MINIMAL FOOTER */}
      <footer style={{ backgroundColor: "var(--black)", color: "var(--white)", paddingTop: "100px", paddingBottom: "40px" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "80px", paddingBottom: "80px" }}>
          
          <div style={{ gridColumn: "1 / -1", maxWidth: "450px" }}>
            <span className="font-heading" style={{ fontSize: "28px", fontWeight: "700", display: "block", marginBottom: "24px" }}>
              Mukesh Graphics<span style={{ color: "var(--brand-accent)" }}>.</span>
            </span>
            <p style={{ fontSize: "16px", marginBottom: "32px", color: "rgba(255,255,255,0.7)", lineHeight: "1.8" }}>
              A premium printing, packaging & designing company delivering quality, precision, and innovation out of Bhavnagar, Gujarat.
            </p>
            <a href="https://wa.me/919426272081" target="_blank" rel="noopener" className="btn-outline" style={{ borderColor: "rgba(255,255,255,0.2)", color: "var(--white)" }}>
              Chat on WhatsApp
            </a>
          </div>

        </div>
        
        <div className="container" style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "32px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", color: "rgba(255,255,255,0.5)", fontSize: "14px", gap: "16px" }}>
          <span>© {new Date().getFullYear()} Mukesh Graphics. All Rights Reserved.</span>
          <span>Plot No. 58, Vishwakarma Estate, Bhavnagar, Gujarat 364004</span>
        </div>
      </footer>
    </main>
  );
}
