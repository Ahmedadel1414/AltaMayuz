"use client";

import { useTranslations } from "next-intl";
import ContactSection from "../(home-page)/_components/ContactSection";
import PageHero from "@/components/PageHero";

const ContactUsPage = () => {
  const t = useTranslations("ContactUsPage");

  return (
    <div className="flex flex-col pb-10">
      <PageHero
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        imageSrc="/contact-us-hero-image.jpg"
      />
      <ContactSection />
    </div>
  );
};

export default ContactUsPage;
