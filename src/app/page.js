"use client";

import { useState, useEffect } from "react";

const CONTACT_URL = "https://www.mukeshgraphics.com/contact-us.html";
const NAV = ["home","about","services","portfolio","clients","contact"];

// Unsplash images – all reliable, no auth needed
const HERO = [
  "https://images.unsplash.com/photo-1614032686163-bdc24c13d0b6?w=1000&q=80",
  "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1000&q=80",
  "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1000&q=80",
  "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1000&q=80",
];

const SERVICES = [
  { title:"Packaging Design", tag:"Design", desc:"Premium FMCG, food, pharma & industrial packaging with world-class finishing.", img:"https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80" },
  { title:"Offset Printing",  tag:"Print",  desc:"5-color offset printing with online coating for vibrant, consistent results.", img:"https://images.unsplash.com/photo-1586339392738-bc59ba0f5f76?w=800&q=80" },
  { title:"Brand Identity",   tag:"Brand",  desc:"Letterheads, menu cards & promotional materials — your brand elevated.",      img:"https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&q=80" },
];

const PORTFOLIO = [
  { img:"https://images.unsplash.com/photo-1614032686163-bdc24c13d0b6?w=900&q=80",  label:"Pharma Packaging",  wide:true  },
  { img:"https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80",  label:"Food Boxes"                    },
  { img:"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&q=80",  label:"Gift Packaging"                },
  { img:"https://images.unsplash.com/photo-1595246140520-1991cca1aaaa?w=600&q=80",  label:"Retail Boxes"                  },
  { img:"https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80",  label:"Luxury Print"                  },
  { img:"https://images.unsplash.com/photo-1604754742629-3e5728249d73?w=900&q=80",  label:"FMCG Packaging",   wide:true  },
  { img:"https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600&q=80",  label:"Brand Identity"                },
  { img:"https://images.unsplash.com/photo-1586339392738-bc59ba0f5f76?w=600&q=80",  label:"Offset Printing"               },
  { img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",     label:"Masala Boxes"                  },
  { img:"https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=600&q=80",  label:"Menu Cards"                    },
];

const ABOUT_GRID = [
  "https://images.unsplash.com/photo-1595246140520-1991cca1aaaa?w=700&q=80",
  "https://images.unsplash.com/photo-1604754742629-3e5728249d73?w=700&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
  "https://images.unsplash.com/photo-1586339392738-bc59ba0f5f76?w=700&q=80",
];

const CLIENTS = [
  { name:"Sun Pharma", logo:"https://logo.clearbit.com/sunpharma.com"        },
  { name:"Cipla",      logo:"https://logo.clearbit.com/cipla.com"            },
  { name:"Zydus",      logo:"https://logo.clearbit.com/zyduslife.com"        },
  { name:"Torrent",    logo:"https://logo.clearbit.com/torrentpharma.com"    },
  { name:"Ajanta",     logo:"https://logo.clearbit.com/ajantapharma.com"     },
  { name:"Lupin",      logo:"https://logo.clearbit.com/lupin.com"            },
];

// Simple image with cover fill – no wrapper component needed
function CoverImg({ src, alt, style }) {
  return (
    <img
      src={src}
      alt={alt || ""}
      style={{
        width:"100%", height:"100%",
        objectFit:"cover", objectPosition:"center",
        display:"block",
        ...style,
      }}
    />
  );
}

export default function Page() {
  const [sy,   setSy]  = useState(0);
  const [hi,   setHi]  = useState(0);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name:"", email:"", phone:"", message:"" });
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setSy(window.scrollY);
      const hit = NAV.map(id => document.getElementById(id))
        .filter(Boolean)
        .findLast(el => el.getBoundingClientRect().top <= 90);
      if (hit) setActive(hit.id);
    };
    window.addEventListener("scroll", onScroll, { passive:true });
    const t = setInterval(() => setHi(i => (i+1) % HERO.length), 4000);
    return () => { window.removeEventListener("scroll", onScroll); clearInterval(t); };
  }, []);

  const go = id => { document.getElementById(id)?.scrollIntoView({ behavior:"smooth" }); setOpen(false); };
  const solid = sy > 50;

  // ─── tiny style helpers ───────────────────────────────────────────────────
  const S = {
    lbl:  { fontFamily:"'Outfit',sans-serif", fontSize:11, letterSpacing:4, color:"#aaa", textTransform:"uppercase", fontWeight:500 },
    h2:   { fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"clamp(34px,4vw,52px)", fontWeight:700, color:"#0d0d0d", lineHeight:1.1 },
    body: { fontFamily:"'Outfit',sans-serif", fontSize:15, color:"#666", lineHeight:1.85 },
    div:  { width:32, height:2, background:"#0d0d0d", margin:"12px 0 20px" },
  };

  return (
    <main style={{ background:"#fff", color:"#111", overflowX:"hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,700&family=Outfit:wght@300;400;500;600;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        body{background:#fff;}
        @keyframes ticker{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
        .tick{display:flex;animation:ticker 50s linear infinite;width:max-content;}
        .fu1{animation:fadeUp .55s .05s both;}
        .fu2{animation:fadeUp .55s .18s both;}
        .fu3{animation:fadeUp .55s .32s both;}
        .fu4{animation:fadeUp .55s .46s both;}
        /* image hover zoom */
        .zoom-wrap{overflow:hidden;}
        .zoom-wrap img{transition:transform .5s ease;}
        .zoom-wrap:hover img{transform:scale(1.06);}
        /* card lift */
        .lift{transition:transform .28s ease,box-shadow .28s ease;}
        .lift:hover{transform:translateY(-6px);box-shadow:0 18px 48px rgba(0,0,0,0.11);}
        /* nav underline */
        .ni{background:none;border:none;cursor:pointer;font-family:'Outfit',sans-serif;font-size:13.5px;font-weight:500;color:#666;padding:4px 0;position:relative;transition:color .2s;}
        .ni::after{content:'';position:absolute;bottom:0;left:0;width:0;height:1.5px;background:#0d0d0d;transition:width .25s;}
        .ni:hover,.ni.on{color:#0d0d0d;}
        .ni:hover::after,.ni.on::after{width:100%;}
        /* pill buttons */
        .btn-dark{display:inline-flex;align-items:center;gap:6px;padding:11px 26px;border-radius:100px;background:#0d0d0d;color:#fff;border:1.5px solid #0d0d0d;font-family:'Outfit',sans-serif;font-size:13.5px;font-weight:600;cursor:pointer;text-decoration:none;transition:background .2s,border-color .2s;}
        .btn-dark:hover{background:#333;border-color:#333;}
        .btn-out{display:inline-flex;align-items:center;gap:6px;padding:11px 26px;border-radius:100px;background:transparent;color:#0d0d0d;border:1.5px solid #ccc;font-family:'Outfit',sans-serif;font-size:13.5px;font-weight:600;cursor:pointer;text-decoration:none;transition:border-color .2s;}
        .btn-out:hover{border-color:#0d0d0d;}
        /* form fields */
        .fld{width:100%;padding:13px 16px;border-radius:10px;border:1.5px solid #e4e4e4;font-size:14px;font-family:'Outfit',sans-serif;background:#fafafa;color:#111;outline:none;transition:border-color .2s;}
        .fld:focus{border-color:#0d0d0d;background:#fff;}
        /* hamburger lines */
        .hbl{display:block;width:22px;height:1.5px;background:#111;transition:all .3s;}
        /* footer links */
        .fl{display:block;font-family:'Outfit',sans-serif;font-size:13.5px;color:rgba(255,255,255,.42);margin-bottom:11px;text-decoration:none;transition:color .2s;}
        .fl:hover{color:rgba(255,255,255,.9);}
      `}</style>

      {/* ══ NAVBAR ══════════════════════════════════════════════════════════ */}
      <header style={{
        position:"fixed",top:0,left:0,width:"100%",zIndex:200,
        background: solid ? "rgba(255,255,255,.96)" : "transparent",
        backdropFilter: solid ? "blur(18px)" : "none",
        borderBottom: solid ? "1px solid #ececec" : "none",
        transition:"all .35s ease",
      }}>
        <div style={{ maxWidth:1300,margin:"0 auto",padding:"0 36px",height:68,display:"flex",alignItems:"center",justifyContent:"space-between" }}>

          {/* Logo */}
          <button onClick={() => go("home")} style={{ background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:10 }}>
            <div style={{ width:34,height:34,background:"#0d0d0d",borderRadius:9,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
              <span style={{ color:"#fff",fontSize:12,fontWeight:700,fontFamily:"'Outfit',sans-serif",letterSpacing:"-.3px" }}>MG</span>
            </div>
            <span style={{ fontFamily:"'Cormorant Garamond',serif",fontWeight:700,fontSize:21,color:"#0d0d0d",letterSpacing:"-.2px",whiteSpace:"nowrap" }}>
              Mukesh Graphics
            </span>
          </button>

          {/* Desktop nav */}
          <nav style={{ display:"flex",gap:28,alignItems:"center" }}>
            {NAV.map(s => (
              <button key={s} className={`ni${active===s?" on":""}`} onClick={() => go(s)}>
                {s[0].toUpperCase()+s.slice(1)}
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div style={{ display:"flex",alignItems:"center",gap:14 }}>
            <a href="tel:+919426272081" style={{ fontFamily:"'Outfit',sans-serif",fontSize:13,fontWeight:600,color:"#555",textDecoration:"none",display:"flex",alignItems:"center",gap:5 }}>
              <span>📞</span> +91 94262 72081
            </a>
            <a href={CONTACT_URL} target="_blank" rel="noopener" className="btn-dark" style={{ padding:"9px 22px",fontSize:13 }}>
              Book Service
            </a>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {open && (
        <div style={{ position:"fixed",inset:0,background:"rgba(255,255,255,.97)",zIndex:190,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:32 }}>
          {NAV.map(s => (
            <button key={s} onClick={() => go(s)}
              style={{ background:"none",border:"none",cursor:"pointer",fontFamily:"'Cormorant Garamond',serif",fontWeight:700,fontSize:36,color:"#0d0d0d" }}>
              {s[0].toUpperCase()+s.slice(1)}
            </button>
          ))}
          <a href={CONTACT_URL} target="_blank" rel="noopener" className="btn-dark" style={{ marginTop:8 }}>Book Service</a>
        </div>
      )}

      {/* ══ HERO ═════════════════════════════════════════════════════════════ */}
      <section id="home" style={{ minHeight:"100vh",display:"grid",gridTemplateColumns:"1fr 1fr",alignItems:"center",maxWidth:1300,margin:"0 auto",padding:"90px 36px 60px",gap:64 }}>

        {/* Left copy */}
        <div>
          <p className="fu1" style={S.lbl}>Premium Printing & Packaging · Bhavnagar, Gujarat</p>
          <h1 className="fu2" style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(52px,6.5vw,88px)",fontWeight:700,lineHeight:1.02,color:"#0d0d0d",marginTop:18,marginBottom:24 }}>
            Our Passion<br/>Is Your<br/><em style={{ fontStyle:"italic",color:"#555" }}>Impression</em>
          </h1>
          <p className="fu3" style={{ ...S.body,maxWidth:400,marginBottom:36 }}>
            Mukesh Graphics delivers luxury packaging, 5-color offset printing, and brand identity solutions crafted for modern businesses.
          </p>
          <div className="fu4" style={{ display:"flex",gap:10,flexWrap:"wrap" }}>
            <a href={CONTACT_URL} target="_blank" rel="noopener" className="btn-dark">Request a Quote →</a>
            <button className="btn-out" onClick={() => go("portfolio")}>View Portfolio</button>
          </div>
          {/* Stats */}
          <div className="fu4" style={{ display:"flex",gap:0,marginTop:52,paddingTop:40,borderTop:"1px solid #eee" }}>
            {[["20+","Years"],["500+","Clients"],["5-Color","Offset Press"]].map(([n,l],i) => (
              <div key={l} style={{ flex:1,paddingRight:24,borderRight:i<2?"1px solid #eee":"none",paddingLeft:i>0?24:0 }}>
                <div style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:36,fontWeight:700,color:"#0d0d0d",lineHeight:1 }}>{n}</div>
                <div style={{ fontFamily:"'Outfit',sans-serif",fontSize:12,color:"#aaa",marginTop:5,letterSpacing:.4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right – image carousel */}
        <div style={{ position:"relative",height:580 }}>
          {/* Main frame */}
          <div className="zoom-wrap" style={{ borderRadius:28,height:"100%",border:"1px solid #eee",overflow:"hidden",position:"relative" }}>
            {HERO.map((src,i) => (
              <img key={src} src={src} alt="packaging"
                style={{ position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",
                         opacity:hi===i?1:0,transition:"opacity .8s ease",borderRadius:28 }} />
            ))}
          </div>
          {/* Badge */}
          <div style={{ position:"absolute",bottom:28,left:28,background:"rgba(255,255,255,.95)",backdropFilter:"blur(12px)",padding:"13px 18px",borderRadius:14,boxShadow:"0 8px 28px rgba(0,0,0,.13)",display:"flex",alignItems:"center",gap:12 }}>
            <div style={{ width:38,height:38,background:"#0d0d0d",borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,flexShrink:0 }}>📦</div>
            <div>
              <div style={{ fontFamily:"'Outfit',sans-serif",fontWeight:700,fontSize:13,color:"#0d0d0d" }}>5-Color Offset Press</div>
              <div style={{ fontFamily:"'Outfit',sans-serif",fontSize:11,color:"#888",marginTop:2 }}>With Online Coater</div>
            </div>
          </div>
          {/* Dots */}
          <div style={{ position:"absolute",bottom:32,right:28,display:"flex",gap:6 }}>
            {HERO.map((_,i) => (
              <button key={i} onClick={() => setHi(i)}
                style={{ width:hi===i?22:7,height:7,borderRadius:4,background:hi===i?"#0d0d0d":"rgba(0,0,0,.22)",border:"none",cursor:"pointer",transition:"all .3s",padding:0 }}/>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TICKER ══════════════════════════════════════════════════════════ */}
      <div style={{ background:"#0d0d0d",padding:"13px 0",overflow:"hidden" }}>
        <div className="tick">
          {Array(2).fill(["Packaging Design","Offset Printing","Brand Identity","Pharma Boxes","FMCG Packaging","Food Boxes","Menu Cards","Masala Boxes","Agricultural Packaging","Candy Boxes","Letterheads","Luxury Print"]).flat().map((t,i) => (
            <span key={i} style={{ color:"#fff",fontSize:11,fontWeight:500,letterSpacing:3,textTransform:"uppercase",marginRight:52,whiteSpace:"nowrap",fontFamily:"'Outfit',sans-serif" }}>✦ {t}</span>
          ))}
        </div>
      </div>

      {/* ══ ABOUT ═══════════════════════════════════════════════════════════ */}
      <section id="about" style={{ padding:"100px 36px",maxWidth:1300,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:80,alignItems:"center" }}>

        {/* 2×2 image grid */}
        <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:14 }}>
          {ABOUT_GRID.map((src,i) => (
            <a key={src} href={CONTACT_URL} target="_blank" rel="noopener" className="lift zoom-wrap"
              style={{ display:"block",borderRadius:18,overflow:"hidden",border:"1px solid #eee",height:220,marginTop:i%2===1?28:0,textDecoration:"none" }}>
              <CoverImg src={src} alt="about" />
            </a>
          ))}
        </div>

        <div>
          <p style={S.lbl}>About Us</p>
          <div style={S.div}/>
          <h2 style={{ ...S.h2,marginBottom:20 }}>Precision Craftsmanship for Modern Brands</h2>
          <p style={{ ...S.body,marginBottom:16 }}>
            Based in Bhavnagar, Gujarat, Mukesh Graphics has served hundreds of brands across pharma, FMCG, food, agriculture and retail with premium offset printing and bespoke packaging.
          </p>
          <p style={{ ...S.body,marginBottom:36 }}>
            Our in-house 5-color offset press with online coating ensures every box, card and label leaves our facility with flawless quality and on-time delivery.
          </p>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:14 }}>
            {[["◈","High-Quality Printing","Premium materials & exceptional finishing."],["⚙","In-House Machinery","State-of-the-art equipment for precision."],["✓","100% Satisfaction","Quality guarantee on every order."],["◉","Online Support","Dedicated assistance for all your needs."]].map(([ic,t,d]) => (
              <div key={t} style={{ padding:"18px 20px",background:"#f9f9f9",borderRadius:14,border:"1px solid #eee" }}>
                <div style={{ fontSize:17,marginBottom:8 }}>{ic}</div>
                <div style={{ fontFamily:"'Outfit',sans-serif",fontWeight:600,fontSize:13,marginBottom:4 }}>{t}</div>
                <div style={{ fontFamily:"'Outfit',sans-serif",fontSize:12,color:"#888",lineHeight:1.6 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICES ════════════════════════════════════════════════════════ */}
      <section id="services" style={{ padding:"100px 36px",background:"#f9f9f9",borderTop:"1px solid #eee",borderBottom:"1px solid #eee" }}>
        <div style={{ maxWidth:1300,margin:"0 auto" }}>
          <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:52 }}>
            <div>
              <p style={S.lbl}>What We Do</p>
              <div style={S.div}/>
              <h2 style={S.h2}>Our Services</h2>
            </div>
            <a href={CONTACT_URL} target="_blank" rel="noopener" className="btn-out">All Services →</a>
          </div>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:22 }}>
            {SERVICES.map(sv => (
              <a key={sv.title} href={CONTACT_URL} target="_blank" rel="noopener"
                className="lift zoom-wrap"
                style={{ display:"block",textDecoration:"none",borderRadius:22,overflow:"hidden",border:"1px solid #eee",background:"#fff" }}>
                {/* image */}
                <div style={{ height:250,overflow:"hidden",position:"relative" }}>
                  <CoverImg src={sv.img} alt={sv.title}/>
                </div>
                <div style={{ padding:"22px 26px 28px" }}>
                  <span style={{ fontFamily:"'Outfit',sans-serif",fontSize:10,letterSpacing:3,color:"#aaa",textTransform:"uppercase" }}>{sv.tag}</span>
                  <h3 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:26,fontWeight:700,margin:"8px 0 10px",color:"#0d0d0d" }}>{sv.title}</h3>
                  <p style={{ ...S.body,fontSize:14,margin:0 }}>{sv.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PORTFOLIO ═══════════════════════════════════════════════════════ */}
      <section id="portfolio" style={{ padding:"100px 36px" }}>
        <div style={{ maxWidth:1300,margin:"0 auto" }}>
          <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:48 }}>
            <div>
              <p style={S.lbl}>Our Work</p>
              <div style={S.div}/>
              <h2 style={S.h2}>Portfolio</h2>
            </div>
            <a href="https://www.mukeshgraphics.com/portfolio.html" target="_blank" rel="noopener"
              style={{ fontFamily:"'Outfit',sans-serif",fontSize:13,fontWeight:600,color:"#0d0d0d",textDecoration:"none",borderBottom:"1.5px solid #0d0d0d",paddingBottom:2 }}>
              View All →
            </a>
          </div>

          {/* 4-col masonry-style grid */}
          <div style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:14,gridAutoRows:"220px" }}>
            {PORTFOLIO.map((p,i) => (
              <a key={i} href={CONTACT_URL} target="_blank" rel="noopener"
                className="lift zoom-wrap"
                style={{ display:"block",textDecoration:"none",borderRadius:18,overflow:"hidden",border:"1px solid #eee",
                         gridColumn:p.wide?"span 2":"span 1",
                         gridRow:p.wide?"span 1":"span 1",
                         height:p.wide?300:220 }}>
                <CoverImg src={p.img} alt={p.label}/>
                {/* label overlay */}
                <div style={{ position:"absolute",bottom:0,left:0,right:0,padding:"28px 16px 14px",
                              background:"linear-gradient(transparent,rgba(0,0,0,.45))",
                              fontFamily:"'Outfit',sans-serif",fontSize:12,fontWeight:600,color:"#fff",letterSpacing:.3 }}>
                  {p.label}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CLIENTS ═════════════════════════════════════════════════════════ */}
      <section id="clients" style={{ padding:"90px 36px",background:"#f9f9f9",borderTop:"1px solid #eee" }}>
        <div style={{ maxWidth:1300,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:48 }}>
            <p style={{ ...S.lbl,display:"block",textAlign:"center" }}>Trusted Partners</p>
            <div style={{ ...S.div,margin:"12px auto 0" }}/>
            <h2 style={{ ...S.h2,marginTop:4 }}>Our Clients</h2>
          </div>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(6,1fr)",gap:14 }}>
            {CLIENTS.map(c => (
              <a key={c.name} href={CONTACT_URL} target="_blank" rel="noopener"
                className="lift"
                style={{ background:"#fff",border:"1.5px solid #e8e8e8",borderRadius:14,padding:"18px 16px",display:"flex",alignItems:"center",justifyContent:"center",textDecoration:"none",minHeight:72 }}>
                <img src={c.logo} alt={c.name} style={{ maxHeight:38,maxWidth:"100%",objectFit:"contain" }}
                  onError={e => { e.currentTarget.style.display="none"; e.currentTarget.nextSibling.style.display="block"; }}/>
                <span style={{ display:"none",fontFamily:"'Outfit',sans-serif",fontWeight:700,fontSize:12,color:"#666",textAlign:"center" }}>{c.name}</span>
              </a>
            ))}
          </div>

          {/* Banner */}
          <a href={CONTACT_URL} target="_blank" rel="noopener"
            className="zoom-wrap"
            style={{ display:"block",marginTop:48,borderRadius:22,overflow:"hidden",position:"relative",height:280,textDecoration:"none" }}>
            <CoverImg src="https://images.unsplash.com/photo-1586339392738-bc59ba0f5f76?w=1400&q=80" alt="printing"/>
            <div style={{ position:"absolute",inset:0,background:"linear-gradient(90deg,rgba(0,0,0,.78) 0%,transparent 60%)",display:"flex",alignItems:"center",padding:"0 52px" }}>
              <div>
                <h3 style={{ fontFamily:"'Cormorant Garamond',serif",color:"#fff",fontSize:38,fontWeight:700,margin:"0 0 10px" }}>5-Color Offset Printing</h3>
                <p style={{ fontFamily:"'Outfit',sans-serif",color:"rgba(255,255,255,.72)",fontSize:15,margin:"0 0 22px",maxWidth:380 }}>With online coater for FMCG, pharma, food & industrial packaging.</p>
                <span className="btn-dark" style={{ background:"#fff",color:"#0d0d0d",borderColor:"#fff" }}>Get a Quote →</span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* ══ CONTACT ══════════════════════════════════════════════════════════ */}
      <section id="contact" style={{ padding:"100px 36px" }}>
        <div style={{ maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1.35fr",gap:52,alignItems:"start" }}>

          <div>
            <p style={S.lbl}>Get In Touch</p>
            <div style={S.div}/>
            <h2 style={{ ...S.h2,marginBottom:16 }}>Let's Build Something Great</h2>
            <p style={{ ...S.body,marginBottom:36 }}>Contact us for packaging and printing solutions tailored to your brand.</p>

            {[
              { name:"Mr. Bhupat", phone:"+91 9426272081", email:"info@mukeshgraphics.com",  role:"General Inquiries" },
              { name:"Mr. Yagnik", phone:"+91 9825982727", email:"sales@mukeshgraphics.com", role:"Sales" },
            ].map(c => (
              <a key={c.name} href={CONTACT_URL} target="_blank" rel="noopener"
                style={{ display:"block",padding:"24px 28px",borderRadius:16,border:"1.5px solid #e4e4e4",textDecoration:"none",marginBottom:14,transition:"border-color .2s,box-shadow .2s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor="#0d0d0d"; e.currentTarget.style.boxShadow="0 6px 24px rgba(0,0,0,.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor="#e4e4e4"; e.currentTarget.style.boxShadow="none"; }}>
                <div style={{ fontFamily:"'Outfit',sans-serif",fontSize:10,letterSpacing:3,color:"#aaa",textTransform:"uppercase",marginBottom:8 }}>{c.role}</div>
                <div style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:22,fontWeight:700,color:"#0d0d0d",marginBottom:10 }}>{c.name}</div>
                <div style={{ fontFamily:"'Outfit',sans-serif",fontSize:13.5,color:"#666",lineHeight:1.9 }}>📞 {c.phone}<br/>✉ {c.email}</div>
              </a>
            ))}

            <div style={{ padding:"20px 24px",borderRadius:14,background:"#f9f9f9",border:"1px solid #eee",fontFamily:"'Outfit',sans-serif",fontSize:13.5,color:"#666",lineHeight:1.85 }}>
              <strong style={{ color:"#0d0d0d",display:"block",marginBottom:4 }}>📍 Address</strong>
              Plot No. 58, Vishwakarma Estate, Chitra GIDC,<br/>Bhavnagar, Gujarat 364004
              <strong style={{ color:"#0d0d0d",display:"block",margin:"12px 0 4px" }}>🕐 Hours</strong>
              Mon–Fri: 9 AM – 7 PM &nbsp;·&nbsp; Sat: 9 AM – 5 PM
            </div>
          </div>

          {/* Form */}
          <div style={{ background:"#fff",padding:"40px 44px",borderRadius:22,border:"1px solid #e8e8e8",boxShadow:"0 8px 48px rgba(0,0,0,.06)" }}>
            <h3 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:30,fontWeight:700,marginBottom:28,color:"#0d0d0d" }}>Send a Message</h3>
            <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:14 }}>
              <input className="fld" placeholder="Your Name"     value={form.name}  onChange={e=>setForm(p=>({...p,name:e.target.value}))}/>
              <input className="fld" placeholder="Email Address" value={form.email} onChange={e=>setForm(p=>({...p,email:e.target.value}))}/>
            </div>
            <input  className="fld" placeholder="Phone Number"  value={form.phone}   onChange={e=>setForm(p=>({...p,phone:e.target.value}))}   style={{ marginBottom:14 }}/>
            <textarea className="fld" rows={5} placeholder="Your Message" value={form.message} onChange={e=>setForm(p=>({...p,message:e.target.value}))} style={{ resize:"vertical",marginBottom:20 }}/>
            <a href={CONTACT_URL} target="_blank" rel="noopener" className="btn-dark"
              style={{ display:"block",textAlign:"center",padding:"14px",borderRadius:10,fontSize:14,letterSpacing:.3 }}>
              Send Message →
            </a>
            <div style={{ textAlign:"center",marginTop:18,fontFamily:"'Outfit',sans-serif",fontSize:13,color:"#aaa" }}>
              Or WhatsApp us at{" "}
              <a href="https://wa.me/919426272081" style={{ color:"#0d0d0d",fontWeight:600,textDecoration:"none" }}>+91 94262 72081</a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ═══════════════════════════════════════════════════════════ */}
      <footer style={{ background:"#0d0d0d" }}>
        {/* Main grid */}
        <div style={{ maxWidth:1300,margin:"0 auto",padding:"52px 36px 40px",display:"grid",gridTemplateColumns:"1.8fr 1fr 1fr 1fr",gap:48,borderBottom:"1px solid rgba(255,255,255,.08)" }}>

          {/* Brand col */}
          <div>
            <div style={{ display:"flex",alignItems:"center",gap:10,marginBottom:18 }}>
              <div style={{ width:34,height:34,background:"#fff",borderRadius:9,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                <span style={{ color:"#0d0d0d",fontSize:12,fontWeight:700,fontFamily:"'Outfit',sans-serif" }}>MG</span>
              </div>
              <span style={{ fontFamily:"'Cormorant Garamond',serif",fontWeight:700,fontSize:20,color:"#fff" }}>Mukesh Graphics</span>
            </div>
            <p style={{ fontFamily:"'Outfit',sans-serif",fontSize:13.5,color:"rgba(255,255,255,.38)",lineHeight:1.85,maxWidth:270,marginBottom:22 }}>
              Premium printing, packaging & designing company delivering quality, precision and innovation from Bhavnagar, Gujarat.
            </p>
            <a href="https://wa.me/919426272081"
              style={{ display:"inline-flex",alignItems:"center",gap:8,background:"rgba(255,255,255,.08)",border:"1px solid rgba(255,255,255,.12)",padding:"8px 16px",borderRadius:8,fontFamily:"'Outfit',sans-serif",fontSize:12.5,color:"rgba(255,255,255,.65)",textDecoration:"none",transition:"background .2s" }}
              onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,.15)"}
              onMouseLeave={e=>e.currentTarget.style.background="rgba(255,255,255,.08)"}>
              💬 WhatsApp Us
            </a>
          </div>

          {/* Link cols */}
          {[
            { hd:"Navigate", links:[["Home","https://www.mukeshgraphics.com/index.html"],["Portfolio","https://www.mukeshgraphics.com/portfolio.html"],["Clients","https://www.mukeshgraphics.com/Our-Clints.html"],["About Us","https://www.mukeshgraphics.com/about-us.html"],["Contact","https://www.mukeshgraphics.com/contact-us.html"]] },
            { hd:"Services", links:[["Packaging Design","#services"],["Offset Printing","#services"],["Brand Identity","#services"],["Pharma Boxes","#portfolio"],["FMCG Packaging","#portfolio"]] },
            { hd:"Contact",  links:[["+91 9426272081","tel:+919426272081"],["+91 9825982727","tel:+919825982727"],["info@mukeshgraphics.com","mailto:info@mukeshgraphics.com"],["sales@mukeshgraphics.com","mailto:sales@mukeshgraphics.com"]] },
          ].map(col => (
            <div key={col.hd}>
              <div style={{ fontFamily:"'Outfit',sans-serif",fontSize:11,fontWeight:600,letterSpacing:3,color:"rgba(255,255,255,.28)",textTransform:"uppercase",marginBottom:20 }}>{col.hd}</div>
              {col.links.map(([txt,href]) => (
                <a key={txt} href={href} className="fl" target={href.startsWith("http")?"_blank":"_self"} rel="noopener">{txt}</a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ maxWidth:1300,margin:"0 auto",padding:"16px 36px",display:"flex",justifyContent:"space-between",alignItems:"center" }}>
          <span style={{ fontFamily:"'Outfit',sans-serif",fontSize:12,color:"rgba(255,255,255,.22)" }}>© 2026 Mukesh Graphics. All Rights Reserved.</span>
          <span style={{ fontFamily:"'Outfit',sans-serif",fontSize:12,color:"rgba(255,255,255,.22)" }}>Bhavnagar, Gujarat, India</span>
        </div>
      </footer>

    </main>
  );
}
