import HeroSection from "./_components/Hero/HeroSection";
import AboutSection from "./_components/AboutSection";
import SponsorSection from "./_components/Sponsor/SponsorSection";
import FAQSection from "./_components/FAQSection";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* TODO: Remove the minimum heights when working on these sections */}
      <AboutSection />

      <SponsorSection />

      <FAQSection />
    </>
  );
}
