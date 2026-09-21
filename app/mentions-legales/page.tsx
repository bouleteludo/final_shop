import type { Metadata } from "next";

export const metadata: Metadata = { title: "Mentions légales" };

function env(key: string, fallback = "À compléter avant mise en ligne") {
  return process.env[key] ?? fallback;
}

export default function MentionsLegalesPage() {
  return (
    <main className="container max-w-3xl py-16 sm:py-20">
      <h1 className="text-4xl font-black tracking-tight text-navy-900">Mentions légales</h1>
      <div className="prose prose-slate mt-8 max-w-none prose-headings:font-black prose-headings:text-navy-900">
        <h2>Éditeur du site</h2>
        <ul>
          <li>
            <strong>Nom / raison sociale :</strong> {env("LEGAL_COMPANY_NAME", "LUDOBRICOPRO")}
          </li>
          <li>
            <strong>Forme juridique :</strong> {env("LEGAL_COMPANY_FORM", "Auto-entrepreneur")}
          </li>
          <li>
            <strong>Adresse :</strong> {env("LEGAL_ADDRESS")}
          </li>
          <li>
            <strong>SIRET :</strong> {env("LEGAL_SIRET")}
          </li>
          <li>
            <strong>Téléphone :</strong> 06 15 64 68 80
          </li>
          <li>
            <strong>Email :</strong> ludo172300@gmail.com
          </li>
        </ul>

        <h2>Hébergement</h2>
        <ul>
          <li>
            <strong>Hébergeur :</strong> Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
          </li>
        </ul>

        <h2>Médiation de la consommation</h2>
        <p>
          Conformément à l&apos;article L.616-1 du Code de la consommation, tout consommateur a le droit
          de recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable d&apos;un
          litige. Coordonnées du médiateur : {env("LEGAL_MEDIATOR")}.
        </p>
      </div>
    </main>
  );
}
