import { HeroSection } from "@/components/sections/HeroSection";
import { PortalSection } from "@/components/sections/PortalSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <PortalSection />
      <StatsSection />
      <NewsletterSection />
    </main>
  );
}
