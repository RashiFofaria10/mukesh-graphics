"use client";

import { useState, useEffect } from "react";

const CONTACT_URL = "https://www.mukeshgraphics.com/contact-us.html";
const NAV = ["home", "about", "features", "services", "portfolio", "clients", "contact"];

// Unsplash high-quality relevant images
const HERO_BG = "https://images.unsplash.com/photo-1620325867502-221ddb5b4f24?w=1600&q=80"; // Abstract premium paper layers

const FEATURES = [
  { icon: "💎", title: "High-Quality Printing", desc: "Quality that makes your brand stand out with premium materials and exceptional finishing." },
  { icon: "⚙️", title: "In-House Machinery", desc: "State-of-the-art 5-color offset press with online coater for precision and consistency." },
  { icon: "🤝", title: "100% Satisfaction", desc: "Your complete satisfaction is our promise with strict quality guarantees and reliable service." },
  { icon: "🎧", title: "Support Online", desc: "Outstanding premium support with dedicated assistance for all your printing needs." },
];

const SERVICES = [
  { icon: "📦", title: "Packaging Design", desc: "Premium FMCG, food, pharma & industrial packaging with world-class finishing.", img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80" },
  { icon: "🖨️", title: "5-Color Offset Printing", desc: "Flawless offset printing with online coating for vibrant, consistent, and fast results.", img: "https://images.unsplash.com/photo-1586339392738-bc59ba0f5f76?w=800&q=80" },
  { icon: "✨", title: "Brand Identity", desc: "Letterheads, menu cards, and promotional materials designed to elevate your brand.", img: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&q=80" },
];

const PORTFOLIO = [
  { img: "https://images.unsplash.com/photo-1614032686163-bdc24c13d0b6?w=800&q=80", label: "Pharma Packaging" },
  { img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80", label: "Gift & Luxury Boxes" },
  { img: "https://images.unsplash.com/photo-1595246140520-1991cca1aaaa?w=800&q=80", label: "Retail & Apparel" },
  { img: "https://images.unsplash.com/photo-1604754742629-3e5728249d73?w=800&q=80", label: "FMCG Packaging" },
  { img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", label: "Food & Masala Boxes" },
  { img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&q=80", label: "Menu Cards & Prints" },
];

// Based on original pharmaceutical & corporate clients
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

function CoverImg({ src, alt, className }) {
  return (
    <img
      src={src}
      alt={alt || ""}
      loading="lazy"
      className={className}
      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
    />
  );
}

export default function Page() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const hit = NAV.map(id => document.getElementById(id))
        .filter(Boolean)
        .findLast(el => el.getBoundingClientRect().top <= 120);
      if (hit) setActiveSection(hit.id);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileNavOpen(false);
  };

  const isScrolled = scrollY > 50;

  return (
    <main style={{ backgroundColor: "#f8fafc", color: "#1e293b", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@500;600;700;800&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Inter', sans-serif; -webkit-font-smoothing: antialiased; background-color: #f8fafc; }
        
        h1, h2, h3, h4, .font-heading { font-family: 'Poppins', sans-serif; }
        
        /* Typography Variables */
        :root {
          --primary: #0f172a;    /* Deep Slate */
          --accent: #2563eb;     /* Modern Blue */
          --accent-hover: #1d4ed8;
          --bg: #ffffff;
          --bg-alt: #f8fafc;
          --text-main: #334155;
          --text-light: #64748b;
        }

        /* Animations */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }

        /* Buttons */
        .btn-primary {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 14px 28px; border-radius: 8px;
          background-color: var(--accent); color: #fff;
          font-family: 'Inter', sans-serif; font-weight: 600; font-size: 15px;
          text-decoration: none; border: none; cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.25);
        }
        .btn-primary:hover {
          background-color: var(--accent-hover);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37, 99, 235, 0.35);
        }
        .btn-outline {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 14px 28px; border-radius: 8px;
          background-color: transparent; color: var(--primary);
          font-family: 'Inter', sans-serif; font-weight: 600; font-size: 15px;
          text-decoration: none; border: 2px solid #e2e8f0; cursor: pointer;
          transition: all 0.3s ease;
        }
        .btn-outline:hover {
          border-color: var(--primary);
          background-color: var(--primary);
          color: #fff;
        }

        /* Nav Links */
        .nav-link {
          font-family: 'Inter', sans-serif; font-size: 14.5px; font-weight: 500;
          color: var(--text-main); text-transform: capitalize;
          background: none; border: none; cursor: pointer;
          padding: 8px 12px; position: relative; transition: color 0.3s;
        }
        .nav-link:hover, .nav-link.active { color: var(--accent); }
        .nav-link::after {
          content: ''; position: absolute; bottom: 0; left: 50%; width: 0; height: 2px;
          background: var(--accent); transition: all 0.3s ease; transform: translateX(-50%);
        }
        .nav-link.active::after, .nav-link:hover::after { width: 80%; }

        /* Cards & Hover Effects */
        .card {
          background: var(--bg); border-radius: 16px; border: 1px solid #f1f5f9;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          border-color: #e2e8f0;
        }
        
        /* Image Zoom Wrap */
        .img-zoom { overflow: hidden; border-radius: 16px 16px 0 0; }
        .img-zoom img { transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
        .card:hover .img-zoom img { transform: scale(1.08); }

        /* Form Inputs */
        .input-field {
          width: 100%; padding: 14px 18px; border-radius: 8px;
          border: 1px solid #cbd5e1; background: #f8fafc;
          font-family: 'Inter', sans-serif; font-size: 15px; color: var(--primary);
          transition: all 0.3s ease; outline: none;
        }
        .input-field:focus {
          border-color: var(--accent); background: #fff;
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
        }

        /* Layout Utility */
        .container { max-width: 1240px; margin: 0 auto; padding: 0 24px; }
        .section-padding { padding: 100px 0; }
        .section-header { text-align: center; margin-bottom: 60px; }
        .subtitle { font-family: 'Inter', sans-serif; color: var(--accent); font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 12px; display: block; }
        .title { font-size: clamp(32px, 4vw, 44px); color: var(--primary); font-weight: 700; line-height: 1.2; }
      `}</style>

      {/* 🧭 NAVIGATION */}
      <header style={{
        position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1000,
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.95)" : "transparent",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        boxShadow: isScrolled ? "0 1px 3px rgba(0,0,0,0.05)" : "none",
        transition: "all 0.3s ease",
        padding: isScrolled ? "14px 0" : "24px 0"
      }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <div onClick={() => scrollTo("home")} style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer" }}>
            <div style={{ background: "var(--accent)", color: "#fff", width: "40px", height: "40px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "18px" }}>
              MG
            </div>
            <span className="font-heading" style={{ fontSize: "22px", fontWeight: "700", color: isScrolled ? "var(--primary)" : "#fff" }}>
              Mukesh Graphics
            </span>
          </div>

          {/* Desktop Nav */}
          <nav style={{ display: "none", md: "flex", gap: "24px" }} className="desktop-nav">
            <style>{`@media (min-width: 900px) { .desktop-nav { display: flex !important; } .mobile-btn { display: none !important; } }`}</style>
            {NAV.map(item => (
              <button key={item} className={`nav-link ${activeSection === item ? "active" : ""}`}
                      style={{ color: isScrolled ? "var(--text-main)" : "rgba(255,255,255,0.9)" }}
                      onClick={() => scrollTo(item)}>
                {item}
              </button>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <a href={CONTACT_URL} target="_blank" rel="noopener" className="btn-primary" style={{ padding: "10px 20px", fontSize: "14px" }}>
              Get a Quote
            </a>
            <button className="mobile-btn" onClick={() => setMobileNavOpen(!mobileNavOpen)} style={{ background: "none", border: "none", fontSize: "28px", color: isScrolled ? "var(--primary)" : "#fff", cursor: "pointer" }}>
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileNavOpen && (
        <div style={{ position: "fixed", inset: 0, backgroundColor: "#fff", zIndex: 999, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "24px" }}>
          {NAV.map(item => (
            <button key={item} onClick={() => scrollTo(item)} className="font-heading" style={{ background: "none", border: "none", fontSize: "28px", color: "var(--primary)", textTransform: "capitalize" }}>
              {item}
            </button>
          ))}
          <button onClick={() => setMobileNavOpen(false)} style={{ position: "absolute", top: "24px", right: "24px", background: "none", border: "none", fontSize: "36px", color: "var(--text-main)" }}>×</button>
        </div>
      )}

      {/* 🎯 HERO SECTION */}
      <section id="home" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "80px" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <CoverImg src={HERO_BG} alt="Hero Background" />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.6) 100%)" }} />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 1, width: "100%" }}>
          <div style={{ maxWidth: "700px" }}>
            <span className="subtitle animate-fade-up" style={{ color: "#93c5fd" }}>Premium Printing & Packaging</span>
            <h1 className="title animate-fade-up delay-1" style={{ color: "#fff", fontSize: "clamp(40px, 6vw, 64px)", marginBottom: "24px" }}>
              Creative Printing That <span style={{ color: "var(--accent)" }}>Elevates</span> Your Brand.
            </h1>
            <p className="animate-fade-up delay-2" style={{ color: "#cbd5e1", fontSize: "18px", lineHeight: "1.7", marginBottom: "40px", maxWidth: "600px" }}>
              Mukesh Graphics delivers innovative packaging and printing solutions with premium quality, precise detailing, and on-time production for every business need.
            </p>
            <div className="animate-fade-up delay-3" style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <button onClick={() => scrollTo("services")} className="btn-primary">Explore Services</button>
              <button onClick={() => scrollTo("portfolio")} className="btn-outline" style={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}>View Portfolio</button>
            </div>
            
            <div className="animate-fade-up delay-3" style={{ display: "flex", gap: "40px", marginTop: "60px", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "32px" }}>
              {[["20+", "Years Experience"], ["500+", "Happy Clients"], ["5-Color", "Offset Machinery"]].map(([num, text]) => (
                <div key={text}>
                  <div className="font-heading" style={{ fontSize: "28px", color: "#fff" }}>{num}</div>
                  <div style={{ fontSize: "13px", color: "#94a3b8" }}>{text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ✨ WHY CHOOSE US (Features) */}
      <section id="features" className="section-padding" style={{ backgroundColor: "#fff" }}>
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Why Choose Us</span>
            <h2 className="title">Our Key Features</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px" }}>
            {FEATURES.map((feat, i) => (
              <div key={i} className="card" style={{ padding: "40px 30px", textAlign: "center", border: "none", backgroundColor: "var(--bg-alt)" }}>
                <div style={{ fontSize: "40px", marginBottom: "20px" }}>{feat.icon}</div>
                <h3 className="font-heading" style={{ fontSize: "20px", marginBottom: "12px" }}>{feat.title}</h3>
                <p style={{ color: "var(--text-light)", fontSize: "15px", lineHeight: "1.6" }}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🏢 ABOUT US */}
      <section id="about" className="section-padding">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "60px", alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <img src="https://images.unsplash.com/photo-1595246140520-1991cca1aaaa?w=800&q=80" alt="About Factory" style={{ width: "90%", borderRadius: "16px", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }} loading="lazy" />
            <div style={{ position: "absolute", bottom: "-30px", right: "0", background: "var(--accent)", color: "#fff", padding: "30px", borderRadius: "16px", maxWidth: "220px", boxShadow: "0 10px 30px rgba(37,99,235,0.3)" }}>
              <h4 className="font-heading" style={{ fontSize: "36px", color: "#fff", margin: 0 }}>100%</h4>
              <p style={{ margin: 0, fontSize: "14px", opacity: 0.9 }}>Client Satisfaction Rate</p>
            </div>
          </div>
          
          <div>
            <span className="subtitle">About Us</span>
            <h2 className="title" style={{ marginBottom: "24px" }}>Precision Craftsmanship for Modern Brands</h2>
            <p style={{ color: "var(--text-main)", fontSize: "16px", lineHeight: "1.8", marginBottom: "20px" }}>
              Based in Bhavnagar, Gujarat, Mukesh Graphics has served hundreds of brands across pharma, FMCG, food, agriculture and retail with premium offset printing and bespoke packaging.
            </p>
            <p style={{ color: "var(--text-light)", fontSize: "16px", lineHeight: "1.8", marginBottom: "32px" }}>
              Our in-house 5-color offset press with online coating ensures every box, card, and label leaves our facility with flawless quality and on-time delivery. We don't just print; we elevate your brand's physical presence.
            </p>
            <ul style={{ listStyle: "none", marginBottom: "40px" }}>
              {["Premium Quality Materials", "Modern Packaging Concepts", "Fast & Reliable Dispatch"].map(item => (
                <li key={item} style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px", fontWeight: "500" }}>
                  <span style={{ color: "var(--accent)", fontSize: "20px" }}>✓</span> {item}
                </li>
              ))}
            </ul>
            <a href={CONTACT_URL} target="_blank" rel="noopener" className="btn-primary">Discuss Your Project</a>
          </div>
        </div>
      </section>

      {/* 📦 SERVICES */}
      <section id="services" className="section-padding" style={{ backgroundColor: "#fff" }}>
        <div className="container">
          <div className="section-header">
            <span className="subtitle">What We Do</span>
            <h2 className="title">Our Core Services</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px" }}>
            {SERVICES.map((srv, i) => (
              <a key={i} href={CONTACT_URL} target="_blank" rel="noopener" className="card" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                <div className="img-zoom" style={{ height: "220px" }}>
                  <CoverImg src={srv.img} alt={srv.title} />
                </div>
                <div style={{ padding: "30px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                    <span style={{ fontSize: "24px" }}>{srv.icon}</span>
                    <h3 className="font-heading" style={{ fontSize: "22px" }}>{srv.title}</h3>
                  </div>
                  <p style={{ color: "var(--text-light)", fontSize: "15px", lineHeight: "1.6", marginBottom: "20px" }}>{srv.desc}</p>
                  <span style={{ color: "var(--accent)", fontWeight: "600", fontSize: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
                    Learn more <span>→</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 🖼️ PORTFOLIO */}
      <section id="portfolio" className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Our Work</span>
            <h2 className="title">Featured Projects</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px" }}>
            {PORTFOLIO.map((item, i) => (
              <div key={i} className="card" style={{ overflow: "hidden", position: "relative", height: "300px", borderRadius: "16px" }}>
                <CoverImg src={item.img} alt={item.label} className="img-zoom-target" />
                {/* Overlay */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,23,42,0.8) 0%, transparent 60%)", display: "flex", alignItems: "flex-end", padding: "24px" }}>
                  <h4 className="font-heading" style={{ color: "#fff", fontSize: "20px", m: 0 }}>{item.label}</h4>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <a href="https://www.mukeshgraphics.com/portfolio.html" target="_blank" rel="noopener" className="btn-outline">View All Projects</a>
          </div>
        </div>
      </section>

      {/* 🤝 CLIENTS & TESTIMONIALS */}
      <section id="clients" className="section-padding" style={{ backgroundColor: "#fff" }}>
        <div className="container">
          {/* Clients Logos */}
          <div className="section-header" style={{ marginBottom: "40px" }}>
            <span className="subtitle">Trusted By</span>
            <h2 className="title" style={{ fontSize: "28px" }}>Our Premium Clients</h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "30px", marginBottom: "100px" }}>
            {CLIENTS.map(client => (
              <div key={client.name} style={{ width: "140px", height: "80px", display: "flex", alignItems: "center", justifyContent: "center", filter: "grayscale(100%) opacity(60%)", transition: "all 0.3s" }} 
                   onMouseEnter={e => { e.currentTarget.style.filter = "grayscale(0%) opacity(100%)" }}
                   onMouseLeave={e => { e.currentTarget.style.filter = "grayscale(100%) opacity(60%)" }}>
                <img src={client.logo} alt={client.name} style={{ maxHeight: "40px", maxWidth: "100%", objectFit: "contain" }} onError={e => { e.currentTarget.style.display="none"; e.currentTarget.nextSibling.style.display="block"; }}/>
                <span className="font-heading" style={{ display: "none", color: "var(--text-light)", fontSize: "18px" }}>{client.name}</span>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div style={{ background: "var(--primary)", borderRadius: "24px", padding: "60px 40px", color: "#fff" }}>
            <div className="section-header" style={{ marginBottom: "40px" }}>
              <span className="subtitle" style={{ color: "#93c5fd" }}>Testimonials</span>
              <h2 className="title" style={{ color: "#fff" }}>What They Say</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
              {TESTIMONIALS.map((test, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.05)", padding: "30px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <div style={{ color: "#fbbf24", fontSize: "20px", marginBottom: "16px" }}>★★★★★</div>
                  <p style={{ fontStyle: "italic", fontSize: "15px", lineHeight: "1.7", color: "#cbd5e1", marginBottom: "24px" }}>"{test.text}"</p>
                  <div>
                    <div className="font-heading" style={{ fontSize: "16px", color: "#fff" }}>{test.author}</div>
                    <div style={{ fontSize: "13px", color: "#94a3b8" }}>{test.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 📞 CONTACT */}
      <section id="contact" className="section-padding">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "60px" }}>
          
          <div>
            <span className="subtitle">Get In Touch</span>
            <h2 className="title" style={{ marginBottom: "24px" }}>Let's Build Something Great Together</h2>
            <p style={{ color: "var(--text-light)", fontSize: "16px", lineHeight: "1.8", marginBottom: "40px" }}>
              Contact us for bespoke packaging and commercial printing solutions tailored to your brand's specific needs.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {[
                { name: "Mr. Bhupat", role: "General Inquiries", phone: "+91 9426272081", email: "info@mukeshgraphics.com" },
                { name: "Mr. Yagnik", role: "Sales & Orders", phone: "+91 9825982727", email: "sales@mukeshgraphics.com" }
              ].map(person => (
                <div key={person.name} className="card" style={{ padding: "24px", display: "flex", gap: "16px", alignItems: "center" }}>
                  <div style={{ width: "50px", height: "50px", borderRadius: "50%", background: "var(--bg-alt)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px" }}>
                    👤
                  </div>
                  <div>
                    <div style={{ fontSize: "12px", color: "var(--accent)", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px" }}>{person.role}</div>
                    <h4 className="font-heading" style={{ fontSize: "18px", margin: "4px 0" }}>{person.name}</h4>
                    <div style={{ fontSize: "14px", color: "var(--text-light)" }}>{person.phone} | {person.email}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="card" style={{ padding: "40px", backgroundColor: "#fff" }}>
            <h3 className="font-heading" style={{ fontSize: "24px", marginBottom: "24px" }}>Send a Message</h3>
            <form onSubmit={e => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <input className="input-field" placeholder="First Name" value={form.name} onChange={e=>setForm({...form, name: e.target.value})} />
                <input className="input-field" placeholder="Email Address" type="email" value={form.email} onChange={e=>setForm({...form, email: e.target.value})} />
              </div>
              <input className="input-field" placeholder="Phone Number" type="tel" value={form.phone} onChange={e=>setForm({...form, phone: e.target.value})} />
              <textarea className="input-field" placeholder="Tell us about your project..." rows={5} style={{ resize: "vertical" }} value={form.message} onChange={e=>setForm({...form, message: e.target.value})} />
              <button className="btn-primary" style={{ width: "100%", marginTop: "10px", padding: "16px" }}>Submit Request</button>
            </form>
            <div style={{ textAlign: "center", marginTop: "24px", fontSize: "14px", color: "var(--text-light)" }}>
              Or message us directly on <a href="https://wa.me/919426272081" target="_blank" rel="noopener" style={{ color: "#25D366", fontWeight: "600", textDecoration: "none" }}>WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      {/* 🏁 FOOTER */}
      <footer style={{ backgroundColor: "var(--primary)", color: "#fff", paddingTop: "80px", paddingBottom: "30px" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "50px", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "50px", marginBottom: "30px" }}>
          
          <div style={{ gridColumn: "span 2" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ background: "var(--accent)", color: "#fff", width: "40px", height: "40px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "18px" }}>MG</div>
              <span className="font-heading" style={{ fontSize: "22px", fontWeight: "700" }}>Mukesh Graphics</span>
            </div>
            <p style={{ color: "#94a3b8", fontSize: "15px", lineHeight: "1.7", maxWidth: "300px", marginBottom: "24px" }}>
              Premium printing, packaging & designing company delivering quality, precision, and innovation from Bhavnagar, Gujarat.
            </p>
            <a href="https://wa.me/919426272081" target="_blank" rel="noopener" className="btn-primary" style={{ backgroundColor: "#25D366", boxShadow: "none", padding: "10px 20px" }}>
              Chat on WhatsApp
            </a>
          </div>

          <div>
            <h4 className="font-heading" style={{ fontSize: "16px", marginBottom: "20px", color: "#fff" }}>Quick Links</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {["Home", "About Us", "Features", "Portfolio", "Contact"].map(link => (
                <li key={link}><button onClick={() => scrollTo(link.toLowerCase().replace(" ", ""))} style={{ background: "none", border: "none", color: "#94a3b8", cursor: "pointer", fontSize: "15px", transition: "color 0.2s" }} onMouseEnter={e=>e.target.style.color="#fff"} onMouseLeave={e=>e.target.style.color="#94a3b8"}>{link}</button></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading" style={{ fontSize: "16px", marginBottom: "20px", color: "#fff" }}>Contact Info</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", color: "#94a3b8", fontSize: "15px" }}>
              <li>📍 Plot No. 58, Vishwakarma Estate, Chitra GIDC, Bhavnagar, Gujarat 364004</li>
              <li>📞 +91 9426272081</li>
              <li>✉️ info@mukeshgraphics.com</li>
            </ul>
          </div>
        </div>
        
        <div className="container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", color: "#64748b", fontSize: "14px" }}>
          <span>© 2026 Mukesh Graphics. All Rights Reserved.</span>
          <span>Designed with precision in India</span>
        </div>
      </footer>
    </main>
  );
}
