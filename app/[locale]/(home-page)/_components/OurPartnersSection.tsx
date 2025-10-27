"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

const OurPartnersSection = () => {
  const t = useTranslations("OurPartnersSection");

  // Create array of 8 partner logos
  const partners = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    image: "/police-iraq-login-bg.png",
    name: `Partner ${i + 1}`,
  }));

  // Duplicate the array for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="relative w-full overflow-hidden py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-3 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-linear-to-r from-nugget via-corn to-tradewind bg-clip-text text-transparent">
              {t("title")}
            </span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            {t("description")}
          </p>
        </motion.div>

        {/* Infinite Scrolling Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-background to-transparent z-10" />

          {/* Scrolling Track */}
          <motion.div
            className="flex gap-8 md:gap-12"
            animate={{
              x: ["-50%", "0%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="shrink-0 w-32 h-32 md:w-40 md:h-40 relative grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <div className="relative w-full h-full bg-white rounded-lg shadow-md p-4 flex items-center justify-center">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurPartnersSection;
