import type { Metadata } from "next";

export const metadata: Metadata = { title: "Politique de confidentialité" };

export default function ConfidentialitePage() {
  return (
    <main className="container max-w-3xl py-16 sm:py-20">
      <h1 className="text-4xl font-black tracking-tight text-navy-900">Politique de confidentialité</h1>
      <div className="prose prose-slate mt-8 max-w-none prose-headings:font-black prose-headings:text-navy-900">
        <p>
          LUDOBRICOPRO traite les données transmises via le formulaire de devis de ce site uniquement
          pour répondre à votre demande. Contact : ludo172300@gmail.com.
        </p>

        <h2>Données traitées</h2>
        <p>
          Nom, téléphone, email, prestation demandée et message transmis via le formulaire de devis.
          L&apos;envoi passe par votre propre messagerie (mailto) : ces données ne transitent par aucun
          serveur tiers ni base de données de ce site.
        </p>

        <h2>Destinataires des données</h2>
        <p>Les informations envoyées via le formulaire ne sont accessibles qu&apos;à LUDOBRICOPRO.</p>

        <h2>Vos droits</h2>
        <p>
          Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement et
          d&apos;opposition sur vos données personnelles. Pour l&apos;exercer, contactez-nous à
          ludo172300@gmail.com.
        </p>
      </div>
    </main>
  );
}
