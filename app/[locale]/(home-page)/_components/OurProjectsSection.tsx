"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { projectsCards } from "@/constants/ourProjectsCardsItems";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";
import { useRouter } from "next/navigation";

const OurProjectsSection = () => {
  const t = useTranslations("OurProjectsSection");
  const locale = useLocale();
  const router = useRouter();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.12 },
    },
  };

  const item = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const displayedCards = projectsCards.slice(0, 6);

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
              <span className="bg-linear-to-r from-san-marino via-tradewind to-corn bg-clip-text text-transparent">
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
              const isHovered = hoveredCard === card.id;
              const title = locale === "ar" ? card.titleAr : card.titleEn;
              const desc = locale === "ar" ? card.descAr : card.descEn;
              const category = locale === "ar" ? card.categoryAr : card.category;
              const client = locale === "ar" ? card.clientAr : card.client;

              return (
                <motion.div
                  key={card.id}
                  variants={item}
                  onHoverStart={() => setHoveredCard(card.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="group relative rounded-lg overflow-hidden shadow-lg min-w-0 cursor-pointer"
                >
                  {/* Image Container */}
                  <div className="relative w-full h-64 overflow-hidden">
                    <Image
                      src={card.image}
                      alt={title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                    
                    {/* Category Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="absolute top-4 left-4 px-3 py-1 rounded-full bg-tradewind/90 backdrop-blur-sm text-white text-xs font-semibold"
                    >
                      {category}
                    </motion.div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <h3 className="text-lg md:text-xl font-bold mb-2 line-clamp-2">
                        {title}
                      </h3>
                      
                      {/* Info Row */}
                      <div className="flex items-center gap-4 text-sm text-gray-200 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{card.year}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span className="line-clamp-1">{client}</span>
                        </div>
                      </div>

                      {/* Description - Shows on hover */}
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: isHovered ? 1 : 0,
                          height: isHovered ? "auto" : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="text-sm text-gray-300 line-clamp-3 overflow-hidden"
                      >
                        {desc}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div variants={item} className="flex justify-center mt-8">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                onClick={() => router.push("/our-projects")}
                className="bg-linear-to-r from-san-marino to-tradewind hover:from-tradewind hover:to-san-marino text-white font-semibold"
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

export default OurProjectsSection;
