import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="container flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-black text-xl text-navy-900">
            ludobric<span className="text-brand-700">opro</span>
          </p>
          <p className="mt-1 text-sm text-navy-900/45">Un seul pro, pour tout entreprendre.</p>
        </div>
        <div className="text-sm text-navy-900/50">
          Nettoyage · Petit bricolage · Entretien · Saintes & alentours
        </div>
      </div>
      <div className="container mt-6 flex flex-wrap gap-x-4 gap-y-1.5 border-t border-slate-100 pt-5 text-xs text-navy-900/45">
        <Link href="/mentions-legales" className="hover:text-navy-900 transition">
          Mentions légales
        </Link>
        <Link href="/cgv" className="hover:text-navy-900 transition">
          Conditions générales
        </Link>
        <Link href="/confidentialite" className="hover:text-navy-900 transition">
          Confidentialité
        </Link>
        <span>© {new Date().getFullYear()} LUDOBRICOPRO</span>
      </div>
    </footer>
  );
}
