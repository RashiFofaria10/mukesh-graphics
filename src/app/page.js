"use client";

import { useState, useEffect } from "react";

const CONTACT_URL = "https://www.mukeshgraphics.com/contact-us.html";
const PHONE = "+91 94262 72081";
const NAV = ["home", "about", "why us", "services", "portfolio", "clients", "contact"];

// High-quality, professional printing and packaging imagery
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1586339392738-bc59ba0f5f76?w=1200&q=80", // Offset machinery
  about: "https://images.unsplash.com/photo-1614032686163-bdc24c13d0b6?w=1000&q=80", // Premium boxes
  packaging: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80",
  offset: "https://images.unsplash.com/photo-1604754742629-3e5728249d73?w=800&q=80",
  brand: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&q=80"
};

const FEATURES = [
  { title: "High-Quality Printing", desc: "Quality that makes your brand stand out with premium materials and exceptional finishing." },
  { title: "In-House Tech & Machinery", desc: "State-of-the-art 5-color offset press with online coater for precision and consistency." },
  { title: "100% Satisfaction Assured", desc: "Your complete satisfaction is our promise with strict quality guarantees and reliable dispatch." },
  { title: "Dedicated Support", desc: "Outstanding premium support with dedicated assistance for all your packaging and printing needs." },
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
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Poppins:wght@400;500;600;700&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Inter', sans-serif; -webkit-font-smoothing: antialiased; background-color: #ffffff; }
        
        h1, h2, h3, h4, .font-heading { font-family: 'Poppins', sans-serif; letter-spacing: -0.02em; }
        
        /* Typography Variables */
        :root {
          --black: #0a0a0a;
          --dark: #111827;
          --gray: #4b5563;
          --light-gray: #f3f4f6;
          --white: #ffffff;
        }

        /* Buttons */
        .btn-dark {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          padding: 14px 28px; border-radius: 4px;
          background-color: var(--black); color: var(--white);
          font-family: 'Inter', sans-serif; font-weight: 500; font-size: 15px;
          text-decoration: none; border: 1px solid var(--black); cursor: pointer;
          transition: all 0.2s ease;
        }
        .btn-dark:hover { background-color: var(--white); color: var(--black); }
        
        .btn-outline {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          padding: 14px 28px; border-radius: 4px;
          background-color: transparent; color: var(--black);
          font-family: 'Inter', sans-serif; font-weight: 500; font-size: 15px;
          text-decoration: none; border: 1px solid #d1d5db; cursor: pointer;
          transition: all 0.2s ease;
        }
        .btn-outline:hover { border-color: var(--black); }

        /* Nav Links */
        .nav-link {
          font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 500;
          color: var(--gray); text-transform: capitalize;
          background: none; border: none; cursor: pointer;
          padding: 8px 0; position: relative; transition: color 0.2s;
        }
        .nav-link:hover, .nav-link.active { color: var(--black); }
        .nav-link::after {
          content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 1px;
          background: var(--black); transition: width 0.3s ease;
        }
        .nav-link.active::after, .nav-link:hover::after { width: 100%; }

        /* Minimal Cards */
        .min-card {
          background: var(--white); border: 1px solid #e5e7eb; padding: 40px 30px;
          transition: all 0.3s ease;
        }
        .min-card:hover { border-color: var(--black); transform: translateY(-4px); }

        .img-wrap { overflow: hidden; }
        .img-wrap img { transition: transform 0.6s ease; width: 100%; height: 100%; object-fit: cover; }
        .img-wrap:hover img { transform: scale(1.05); }

        /* Layout Utility */
        .container { max-width: 1280px; margin: 0 auto; padding: 0 24px; }
        .section-padding { padding: 120px 0; }
        .section-header { margin-bottom: 60px; max-width: 600px; }
        .subtitle { font-family: 'Inter', sans-serif; color: var(--gray); font-weight: 500; font-size: 13px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 16px; display: block; }
        .title { font-size: clamp(32px, 4vw, 42px); color: var(--black); font-weight: 600; line-height: 1.1; margin-bottom: 24px; }
        .text-body { color: var(--gray); font-size: 16px; line-height: 1.7; }
        
        /* Grid Helpers */
        .grid-2 { display: grid; grid-template-columns: 1fr; gap: 60px; }
        @media (min-width: 900px) { .grid-2 { grid-template-columns: 1fr 1fr; } }
      `}</style>

      {/* 🧭 NAVIGATION */}
      <header style={{
        position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1000,
        backgroundColor: "var(--white)",
        borderBottom: isScrolled ? "1px solid #e5e7eb" : "1px solid transparent",
        transition: "all 0.2s ease", padding: "16px 0"
      }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <div onClick={() => scrollTo("home")} style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer" }}>
            <span className="font-heading" style={{ fontSize: "22px", fontWeight: "600", color: "var(--black)" }}>
              Mukesh Graphics.
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
            <a href={`tel:${PHONE.replace(/\s+/g, '')}`} className="desktop-nav" style={{ color: "var(--black)", textDecoration: "none", fontWeight: "500", fontSize: "14px", display: "none", alignItems: "center", gap: "6px" }}>
              📞 {PHONE}
            </a>
            <a href={CONTACT_URL} target="_blank" rel="noopener" className="btn-dark" style={{ padding: "10px 20px", fontSize: "13px" }}>
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
            <button key={item} onClick={() => scrollTo(item)} className="font-heading" style={{ background: "none", border: "none", fontSize: "24px", color: "var(--black)", textTransform: "capitalize" }}>
              {item}
            </button>
          ))}
          <a href={`tel:${PHONE.replace(/\s+/g, '')}`} className="font-heading" style={{ fontSize: "20px", color: "var(--gray)", textDecoration: "none", marginTop: "20px" }}>Call: {PHONE}</a>
          <button onClick={() => setMobileNavOpen(false)} style={{ position: "absolute", top: "24px", right: "24px", background: "none", border: "none", fontSize: "36px", color: "var(--gray)" }}>×</button>
        </div>
      )}

      {/* 🎯 HERO SECTION */}
      <section id="home" style={{ paddingTop: "140px", paddingBottom: "80px", backgroundColor: "var(--white)" }}>
        <div className="container grid-2" style={{ alignItems: "center" }}>
          <div style={{ paddingRight: "4vw" }}>
            <span className="subtitle">Premium Printing & Packaging</span>
            <h1 className="font-heading" style={{ fontSize: "clamp(42px, 5vw, 60px)", fontWeight: "600", color: "var(--black)", lineHeight: "1.05", marginBottom: "24px" }}>
              Creative Printing That Elevates Your Brand.
            </h1>
            <p className="text-body" style={{ fontSize: "18px", marginBottom: "40px" }}>
              Mukesh Graphics delivers innovative packaging and printing solutions with premium quality, precise detailing, and on-time production.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a href={`tel:${PHONE.replace(/\s+/g, '')}`} className="btn-dark">
                📞 Call Now
              </a>
              <a href={CONTACT_URL} target="_blank" rel="noopener" className="btn-outline">
                Request a Quote
              </a>
            </div>
            
            {/* Quick Trust Stats */}
            <div style={{ display: "flex", gap: "40px", marginTop: "60px", paddingTop: "32px", borderTop: "1px solid #f3f4f6" }}>
              {[["20+", "Years Exp."], ["500+", "Clients"], ["5-Color", "Offset"]].map(([num, text]) => (
                <div key={text}>
                  <div className="font-heading" style={{ fontSize: "24px", color: "var(--black)" }}>{num}</div>
                  <div style={{ fontSize: "13px", color: "var(--gray)" }}>{text}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="img-wrap" style={{ height: "600px" }}>
            <img src={IMAGES.hero} alt="Professional Offset Printing Machine" />
          </div>
        </div>
      </section>

      {/* ✨ WHY CHOOSE US */}
      <section id="why-us" className="section-padding" style={{ backgroundColor: "var(--light-gray)" }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: "center", margin: "0 auto 60px auto" }}>
            <span className="subtitle">Why Choose Us</span>
            <h2 className="title">Built on Precision & Trust</h2>
            <p className="text-body">We don't just print; we ensure every box, card, and label leaves our facility with flawless quality and on-time delivery.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
            {FEATURES.map((feat, i) => (
              <div key={i} className="min-card">
                <h3 className="font-heading" style={{ fontSize: "18px", marginBottom: "12px" }}>{feat.title}</h3>
                <p className="text-body" style={{ fontSize: "15px" }}>{feat.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <a href={`tel:${PHONE.replace(/\s+/g, '')}`} className="btn-outline" style={{ backgroundColor: "var(--white)" }}>Speak to an Expert</a>
          </div>
        </div>
      </section>

      {/* 🏢 ABOUT US */}
      <section id="about" className="section-padding" style={{ backgroundColor: "var(--white)" }}>
        <div className="container grid-2" style={{ alignItems: "center" }}>
          <div className="img-wrap" style={{ height: "500px" }}>
            <img src={IMAGES.about} alt="Premium Packaging" />
          </div>
          <div style={{ paddingLeft: "2vw" }}>
            <span className="subtitle">About Mukesh Graphics</span>
            <h2 className="title">Precision Craftsmanship for Modern Brands</h2>
            <p className="text-body" style={{ marginBottom: "24px" }}>
              Based in Bhavnagar, Gujarat, Mukesh Graphics has served hundreds of brands across pharma, FMCG, food, agriculture and retail with premium offset printing and bespoke packaging.
            </p>
            <p className="text-body" style={{ marginBottom: "32px" }}>
              Our in-house 5-color offset press with online coating ensures exceptional results. Your complete satisfaction is our promise with strict quality guarantees and reliable dispatch.
            </p>
            <a href={CONTACT_URL} target="_blank" rel="noopener" className="btn-dark">Contact Our Team</a>
          </div>
        </div>
      </section>

      {/* 📦 SERVICES */}
      <section id="services" className="section-padding" style={{ backgroundColor: "var(--white)", borderTop: "1px solid #f3f4f6" }}>
        <div className="container">
          <div className="section-header">
            <span className="subtitle">What We Do</span>
            <h2 className="title">Our Core Services</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px" }}>
            {SERVICES.map((srv, i) => (
              <div key={i} className="img-wrap" style={{ border: "1px solid #e5e7eb" }}>
                <div style={{ height: "260px", overflow: "hidden" }}>
                  <img src={srv.img} alt={srv.title} />
                </div>
                <div style={{ padding: "30px", backgroundColor: "var(--white)" }}>
                  <h3 className="font-heading" style={{ fontSize: "20px", marginBottom: "12px" }}>{srv.title}</h3>
                  <p className="text-body" style={{ fontSize: "15px", marginBottom: "24px" }}>{srv.desc}</p>
                  <a href={CONTACT_URL} target="_blank" rel="noopener" style={{ color: "var(--black)", fontWeight: "500", textDecoration: "none", fontSize: "14px", borderBottom: "1px solid var(--black)", paddingBottom: "2px" }}>
                    Get a quote →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🤝 CLIENTS & TESTIMONIALS */}
      <section id="clients" className="section-padding" style={{ backgroundColor: "var(--light-gray)" }}>
        <div className="container">
          
          {/* Clients Logos */}
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <span className="subtitle">Trusted By Industry Leaders</span>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "40px", marginTop: "40px" }}>
              {CLIENTS.map(client => (
                <div key={client.name} style={{ width: "120px", display: "flex", alignItems: "center", justifyContent: "center", filter: "grayscale(100%)", opacity: 0.6, transition: "all 0.3s" }} onMouseEnter={e => { e.currentTarget.style.filter = "none"; e.currentTarget.style.opacity = 1; }} onMouseLeave={e => { e.currentTarget.style.filter = "grayscale(100%)"; e.currentTarget.style.opacity = 0.6; }}>
                  <img src={client.logo} alt={client.name} style={{ maxWidth: "100%", maxHeight: "36px", objectFit: "contain" }} onError={e => { e.currentTarget.style.display="none"; }}/>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="section-header" style={{ textAlign: "center", margin: "0 auto 60px auto" }}>
            <h2 className="title">Client Testimonials</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            {TESTIMONIALS.map((test, i) => (
              <div key={i} className="min-card">
                <div style={{ color: "#d1d5db", fontSize: "32px", lineHeight: "1", marginBottom: "16px", fontFamily: "serif" }}>"</div>
                <p className="text-body" style={{ fontStyle: "italic", marginBottom: "24px" }}>{test.text}</p>
                <div>
                  <div className="font-heading" style={{ fontSize: "15px", color: "var(--black)" }}>{test.author}</div>
                  <div style={{ fontSize: "13px", color: "var(--gray)" }}>{test.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📞 CONTACT */}
      <section id="contact" className="section-padding" style={{ backgroundColor: "var(--white)" }}>
        <div className="container grid-2">
          
          <div>
            <span className="subtitle">Get In Touch</span>
            <h2 className="title">Ready to start your next project?</h2>
            <p className="text-body" style={{ marginBottom: "40px" }}>
              Contact us today for custom packaging and commercial printing quotes. Our team is ready to deliver flawless results.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <a href={`tel:${PHONE.replace(/\s+/g, '')}`} style={{ display: "flex", alignItems: "center", gap: "20px", padding: "24px", border: "1px solid #e5e7eb", textDecoration: "none", color: "inherit", transition: "border-color 0.2s" }} onMouseEnter={e=>e.currentTarget.style.borderColor="var(--black)"} onMouseLeave={e=>e.currentTarget.style.borderColor="#e5e7eb"}>
                <div style={{ fontSize: "24px" }}>📞</div>
                <div>
                  <div style={{ fontSize: "13px", color: "var(--gray)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>Call Us Directly</div>
                  <h4 className="font-heading" style={{ fontSize: "18px", margin: 0 }}>+91 94262 72081</h4>
                </div>
              </a>
              
              <a href="mailto:info@mukeshgraphics.com" style={{ display: "flex", alignItems: "center", gap: "20px", padding: "24px", border: "1px solid #e5e7eb", textDecoration: "none", color: "inherit", transition: "border-color 0.2s" }} onMouseEnter={e=>e.currentTarget.style.borderColor="var(--black)"} onMouseLeave={e=>e.currentTarget.style.borderColor="#e5e7eb"}>
                <div style={{ fontSize: "24px" }}>✉️</div>
                <div>
                  <div style={{ fontSize: "13px", color: "var(--gray)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>Email Us</div>
                  <h4 className="font-heading" style={{ fontSize: "18px", margin: 0 }}>info@mukeshgraphics.com</h4>
                </div>
              </a>
            </div>
          </div>

          {/* Minimal Form */}
          <div style={{ padding: "40px", backgroundColor: "var(--light-gray)" }}>
            <h3 className="font-heading" style={{ fontSize: "22px", marginBottom: "24px" }}>Request a Quote</h3>
            <form onSubmit={e => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <input style={{ padding: "16px", border: "1px solid #d1d5db", backgroundColor: "var(--white)", fontFamily: "Inter", fontSize: "15px", outline: "none" }} placeholder="Your Name" />
              <input style={{ padding: "16px", border: "1px solid #d1d5db", backgroundColor: "var(--white)", fontFamily: "Inter", fontSize: "15px", outline: "none" }} placeholder="Phone Number" type="tel" />
              <input style={{ padding: "16px", border: "1px solid #d1d5db", backgroundColor: "var(--white)", fontFamily: "Inter", fontSize: "15px", outline: "none" }} placeholder="Email Address" type="email" />
              <textarea style={{ padding: "16px", border: "1px solid #d1d5db", backgroundColor: "var(--white)", fontFamily: "Inter", fontSize: "15px", outline: "none", resize: "vertical" }} placeholder="Project Details..." rows={4} />
              <button className="btn-dark" style={{ width: "100%", marginTop: "8px", padding: "18px" }}>Send Request</button>
            </form>
          </div>
        </div>
      </section>

      {/* 🏁 MINIMAL FOOTER */}
      <footer style={{ backgroundColor: "var(--white)", borderTop: "1px solid #e5e7eb", paddingTop: "80px", paddingBottom: "40px" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "60px", paddingBottom: "60px" }}>
          
          <div style={{ gridColumn: "1 / -1", maxWidth: "400px" }}>
            <span className="font-heading" style={{ fontSize: "24px", fontWeight: "600", display: "block", marginBottom: "16px" }}>Mukesh Graphics.</span>
            <p className="text-body" style={{ fontSize: "15px", marginBottom: "24px" }}>
              Premium printing, packaging & designing company delivering quality, precision, and innovation from Bhavnagar, Gujarat.
            </p>
            <a href="https://wa.me/919426272081" target="_blank" rel="noopener" className="btn-outline">
              Chat on WhatsApp
            </a>
          </div>

        </div>
        
        <div className="container" style={{ borderTop: "1px solid #e5e7eb", paddingTop: "32px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", color: "var(--gray)", fontSize: "14px" }}>
          <span>© 2026 Mukesh Graphics. All Rights Reserved.</span>
          <span>Plot No. 58, Vishwakarma Estate, Bhavnagar, Gujarat 364004</span>
        </div>
      </footer>
    </main>
  );
}
