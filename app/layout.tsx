import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";

const siteUrl=process.env.NEXT_PUBLIC_SITE_URL??"https://ludobricopro.fr";
export const metadata:Metadata={
  metadataBase:new URL(siteUrl),
  title:{default:"LUDOBRICOPRO — Nettoyage, entretien & petits travaux",template:"%s · LUDOBRICOPRO"},
  description:"LUDOBRICOPRO : nettoyage, toiture et façade, petit bricolage, dépannage et entretien général autour de Saintes. Devis gratuit.",
  openGraph:{title:"LUDOBRICOPRO — Un seul pro, pour tout entreprendre",description:"Nettoyage, entretien, petits travaux et espaces verts autour de Saintes.",siteName:"LUDOBRICOPRO",locale:"fr_FR",type:"website"},
  robots:{index:true,follow:true}
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr"><body><Header/>{children}</body></html>}
