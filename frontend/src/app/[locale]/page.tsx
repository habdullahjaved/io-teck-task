import HeroSection from "@/components/sections/HeroSection";
import TeamSection from "@/components/sections/TeamSection";
import Testimonials from "@/components/sections/Testimonials";
import { useLocale, useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  return (
    <>
      <HeroSection />
      <TeamSection />
      <Testimonials />
    </>
  );
}
