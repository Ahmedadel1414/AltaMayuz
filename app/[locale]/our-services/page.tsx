"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { servicesCards } from "@/constants/servicesCardsItems";
import PageHero from "@/components/PageHero";

const OurServicesPage = () => {
  const t = useTranslations("OurServicesPage");
  const locale = useLocale();
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const toggleExpand = (id: number) => {
    setExpandedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.1, staggerChildren: 0.08 },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="flex flex-col pb-10">
      <PageHero
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        imageSrc="/our-services-hero-image.jpeg"
      />
      <section className="relative w-full py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-3 sm:px-4">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={item} className="text-center">
              <motion.p
                variants={item}
                className="mt-3 text-muted-foreground max-w-2xl mx-auto"
              >
                {t("subtitle")}
              </motion.p>
            </motion.div>

            <motion.div
              variants={container}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
            >
              {servicesCards.map((card) => {
                const isExpanded = expandedCards.has(card.id);
                const title = locale === "ar" ? card.titleAr : card.titleEn;
                const desc = locale === "ar" ? card.descAr : card.descEn;
                const displayDesc = isExpanded ? desc : truncateText(desc, 10);

                return (
                  <motion.div
                    key={card.id}
                    variants={item}
                    whileHover={{
                      y: -4,
                      boxShadow: "0 10px 25px rgb(0 0 0 / 0.08)",
                    }}
                    className="rounded-lg border bg-card p-5 md:p-6 shadow-sm flex flex-col min-w-0"
                  >
                    <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
                      <Image
                        src={card.image}
                        alt={title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">
                      {title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 grow">
                      {displayDesc}
                    </p>
                    {desc.split(" ").length > 10 && (
                      <button
                        onClick={() => toggleExpand(card.id)}
                        className="text-sm text-tradewind hover:text-corn transition-colors self-start font-medium"
                      >
                        {isExpanded ? t("seeLess") : t("seeMore")}
                      </button>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurServicesPage;
