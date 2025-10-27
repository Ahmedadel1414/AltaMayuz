"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { testimonialsItems } from "@/constants/testimonialsItems";
import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const t = useTranslations("TestimonialsSection");
  const locale = useLocale();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

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
              <span className="bg-linear-to-r from-tradewind via-san-marino to-nugget bg-clip-text text-transparent">
                {t("title")}
              </span>
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              {t("description")}
            </p>
          </motion.div>

          <motion.div
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
          >
            {testimonialsItems.map((testimonial) => {
              const name = locale === "ar" ? testimonial.nameAr : testimonial.nameEn;
              const position = locale === "ar" ? testimonial.positionAr : testimonial.positionEn;
              const company = locale === "ar" ? testimonial.companyAr : testimonial.companyEn;
              const text = locale === "ar" ? testimonial.testimonialAr : testimonial.testimonialEn;

              return (
                <motion.div
                  key={testimonial.id}
                  variants={item}
                  whileHover={{ y: -5, boxShadow: "0 20px 40px rgb(0 0 0 / 0.1)" }}
                  className="relative rounded-lg border bg-card p-6 md:p-8 shadow-sm min-w-0"
                >
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 opacity-10">
                    <Quote className="h-12 w-12 text-tradewind" />
                  </div>

                  {/* Content */}
                  <div className="relative space-y-4">
                    {/* Rating */}
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-nugget text-nugget"
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-muted-foreground leading-relaxed">
                      &ldquo;{text}&rdquo;
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-4 pt-4 border-t">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-semibold text-foreground">{name}</h4>
                        <p className="text-sm text-muted-foreground truncate">
                          {position} {t("at")} {company}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
