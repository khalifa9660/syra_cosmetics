import { Navigation } from "./_components/layout/Navigation";
import { Footer } from "./_components/layout/Footer";
import { HeroSection } from "./_components/sections/HeroSection";
import { ManifestoSection } from "./_components/sections/ManifestoSection";
import { CollectionSection } from "./_components/sections/CollectionSection";
import { HeritageSection } from "./_components/sections/HeritageSection";
import { RitualSection } from "./_components/sections/RitualSection";
import { TestimonialSection } from "./_components/sections/TestimonialSection";
import { NewsletterSection } from "./_components/sections/NewsletterSection";
import { GoldDivider } from "./_components/ui/GoldDivider";

/**
 * Page d'accueil Syra Cosmetics — assemblage de toutes les sections.
 */
export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <ManifestoSection />
      <GoldDivider />
      <CollectionSection />
      <GoldDivider />
      <HeritageSection />
      <RitualSection />
      <GoldDivider />
      <TestimonialSection />
      <NewsletterSection />
      <Footer />
    </>
  );
}
