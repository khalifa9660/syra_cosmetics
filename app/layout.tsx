import type { Metadata } from "next";
import { Cormorant_Garamond, Libre_Baskerville, DM_Sans } from "next/font/google";
import "./globals.css";
import { Preloader } from "./_components/ui/Preloader";
import { CustomCursor } from "./_components/ui/CustomCursor";
import { GrainOverlay } from "./_components/ui/GrainOverlay";
import { ThemeToggle } from "./_components/ui/ThemeToggle";
import { ScrollObserver } from "./_components/ui/ScrollObserver";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Syra Cosmetics — Cosmétiques de Haute Facture",
  description:
    "Là où la science rencontre l'élégance, chaque formule devient une œuvre. Des actifs rares, une exigence absolue. Découvrez la haute cosmétique par Syra.",
  keywords: [
    "cosmétiques",
    "luxe",
    "soins",
    "sérum",
    "haute cosmétique",
    "Syra",
    "beauté",
  ],
  openGraph: {
    title: "Syra Cosmetics — Cosmétiques de Haute Facture",
    description:
      "Là où la science rencontre l'élégance, chaque formule devient une œuvre.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${cormorantGaramond.variable} ${libreBaskerville.variable} ${dmSans.variable}`}
    >
      <body>
        <Preloader />
        <CustomCursor />
        <GrainOverlay />
        <ThemeToggle />
        <ScrollObserver />
        {children}
      </body>
    </html>
  );
}
