"use client";
import Link from "next/link";
import {useState} from "react";

export function Header(){
  const [open,setOpen]=useState(false);
  const nav=[["#services","Services"],["#realisations","Réalisations"],["#zone","Zone d'intervention"],["#devis","Devis gratuit"],["#contact","Contact"]];
  return <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
    <div className="container flex items-center justify-between py-3.5">
      <Link href="/" className="flex items-center gap-3" aria-label="LUDOBRICOPRO accueil">
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-navy-700 to-brand-500 text-white font-black shadow-glow">LB</span>
        <span className="leading-none"><strong className="block text-lg tracking-tight text-navy-900">ludobric<span className="text-brand-700">opro</span></strong><small className="text-[11px] text-navy-700/55">Un seul pro, pour tout entreprendre</small></span>
      </Link>
      <nav className="hidden lg:block"><ul className="flex items-center gap-7 text-sm font-semibold text-navy-900/70">{nav.map(([href,label])=><li key={href}><Link href={href} className="hover:text-navy-900 transition">{label}</Link></li>)}</ul></nav>
      <div className="flex items-center gap-2"><a href="tel:0615646880" className="hidden sm:inline-flex rounded-full bg-navy-700 px-4 py-2.5 text-sm font-bold text-white hover:bg-navy-900 transition">06 15 64 68 80</a><button className="lg:hidden h-10 w-10 rounded-full border border-slate-200" onClick={()=>setOpen(v=>!v)} aria-label="Menu">{open?"×":"☰"}</button></div>
    </div>
    <div className={`lg:hidden overflow-hidden transition-all ${open?"max-h-96 border-t":"max-h-0"}`}><ul className="container py-3">{nav.map(([href,label])=><li key={href}><Link href={href} onClick={()=>setOpen(false)} className="block py-3 font-semibold">{label}</Link></li>)}<li><Link href="tel:0615646880" className="block py-3 font-bold text-navy-700">📞 06 15 64 68 80</Link></li></ul></div>
  </header>
}
