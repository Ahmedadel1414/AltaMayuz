"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { servicesCards } from "@/constants/servicesCardsItems";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const ServicesSection = () => {
  const t = useTranslations("ServicesSection");
  const locale = useLocale();
  const router = useRouter();
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
      transition: { delayChildren: 0.2, staggerChildren: 0.1 },
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

  const displayedCards = servicesCards.slice(0, 6);

  return (
    <section className="relative w-full overflow-hidden py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-3 sm:px-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8"
        >
          <motion.div variants={item} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-linear-to-r from-corn via-nugget to-tradewind bg-clip-text text-transparent">
                {t("title")}
              </span>
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              {t("description")}
            </p>
          </motion.div>

          <motion.div
            variants={container}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          >
            {displayedCards.map((card) => {
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

          <motion.div variants={item} className="flex justify-center mt-8">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                onClick={() => router.push("/our-services")}
                className="bg-linear-to-r from-corn to-nugget hover:from-nugget hover:to-corn text-white font-semibold"
              >
                {t("viewAll")}
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="ml-2"
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
