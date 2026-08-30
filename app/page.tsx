import { HeroSection } from "@/components/sections/HeroSection";
import { HowSection } from "@/components/sections/HowSection";
import { PortalSection } from "@/components/sections/PortalSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <HowSection />
      <PortalSection />
      <StatsSection />
      <NewsletterSection />
    </main>
  );
}
