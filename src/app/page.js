"use client";

import { useState, useEffect } from "react";

const CONTACT_URL = "https://www.mukeshgraphics.com/contact-us.html";
const NAV = ["home","about","services","portfolio","clients","contact"];

// SAFE + STABLE HERO IMAGES
const HERO = [
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1604754742629-3e5728249d73?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1400&q=80",
];

const SERVICES = [
  {
    title:"Packaging Design",
    tag:"Design",
    desc:"Premium FMCG, food, pharma & industrial packaging with world-class finishing.",
    img:"https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title:"Offset Printing",
    tag:"Print",
    desc:"5-color offset printing with online coating for vibrant, consistent results.",
    img:"https://images.unsplash.com/photo-1586339392738-bc59ba0f5f76?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title:"Brand Identity",
    tag:"Brand",
    desc:"Letterheads, menu cards & promotional materials — your brand elevated.",
    img:"https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1200&q=80"
  },
];

// CLEAN PORTFOLIO (HIGH QUALITY + STABLE LINKS)
const PORTFOLIO = [
  { img:"https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&q=80", label:"Pharma Packaging", wide:true },
  { img:"https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80", label:"Food Boxes" },
  { img:"https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1200&q=80", label:"Gift Packaging" },
  { img:"https://images.unsplash.com/photo-1604754742629-3e5728249d73?auto=format&fit=crop&w=1200&q=80", label:"Retail Boxes" },
  { img:"https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1200&q=80", label:"Luxury Print" },
  { img:"https://images.unsplash.com/photo-1586339392738-bc59ba0f5f76?auto=format&fit=crop&w=1200&q=80", label:"Offset Printing", wide:true },
  { img:"https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&q=80", label:"Brand Identity" },
  { img:"https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80", label:"Masala Boxes" },
  { img:"https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1200&q=80", label:"Menu Cards" },
];

// ABOUT GRID (STABLE)
const ABOUT_GRID = [
  "https://images.unsplash.com/photo-1604754742629-3e5728249d73?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1586339392738-bc59ba0f5f76?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1000&q=80",
];

// FIXED LOGOS (STABLE CDN + FALLBACK HANDLED)
const CLIENTS = [
  { name:"Sun Pharma", logo:"https://cdn.simpleicons.org/sunpharma" },
  { name:"Cipla", logo:"https://cdn.simpleicons.org/cipla" },
  { name:"Zydus", logo:"https://cdn.simpleicons.org/zydus" },
  { name:"Torrent", logo:"https://cdn.simpleicons.org/torrent" },
  { name:"Ajanta", logo:"https://cdn.simpleicons.org/ajantapharma" },
  { name:"Lupin", logo:"https://cdn.simpleicons.org/lupin" },
];

function CoverImg({ src, alt, style }) {
  return (
    <img
      src={src}
      alt={alt || ""}
      style={{
        width:"100%",
        height:"100%",
        objectFit:"cover",
        objectPosition:"center",
        display:"block",
        ...style,
      }}
    />
  );
}

export default function Page() {
  const [sy, setSy] = useState(0);
  const [hi, setHi] = useState(0);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name:"", email:"", phone:"", message:"" });
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setSy(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive:true });
    const t = setInterval(() => setHi(i => (i+1) % HERO.length), 4000);
    return () => { window.removeEventListener("scroll", onScroll); clearInterval(t); };
  }, []);

  const go = id => document.getElementById(id)?.scrollIntoView({ behavior:"smooth" });

  const solid = sy > 50;

  return (
    <main style={{ background:"#fff", overflowX:"hidden" }}>

      {/* HERO */}
      <section id="home" style={{ minHeight:"100vh", display:"grid", gridTemplateColumns:"1fr 1fr" }}>

        <div>
          <h1>Mukesh Graphics</h1>
        </div>

        <div style={{ position:"relative", height:500 }}>
          {HERO.map((src,i)=>(
            <img
              key={src}
              src={src}
              style={{
                position:"absolute",
                inset:0,
                width:"100%",
                height:"100%",
                objectFit:"cover",
                opacity: hi===i ? 1 : 0,
                transition:"opacity 0.8s ease"
              }}
            />
          ))}
        </div>

      </section>

      {/* SERVICES */}
      <section id="services">
        {SERVICES.map(s=>(
          <div key={s.title}>
            <img src={s.img} style={{ width:"100%", height:200, objectFit:"cover" }} />
            <h3>{s.title}</h3>
          </div>
        ))}
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio">
        {PORTFOLIO.map(p=>(
          <img key={p.img} src={p.img} style={{ width:300 }} />
        ))}
      </section>

      {/* CLIENTS */}
      <section id="clients">
        {CLIENTS.map(c=>(
          <div key={c.name}>
            <img
              src={c.logo}
              alt={c.name}
              style={{ height:40 }}
              onError={(e)=>{
                e.currentTarget.style.display="none";
              }}
            />
            <span>{c.name}</span>
          </div>
        ))}
      </section>

    </main>
  );
}
