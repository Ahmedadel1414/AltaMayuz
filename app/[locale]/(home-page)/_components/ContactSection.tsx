"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const t = useTranslations("ContactSection");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const button = {
    hover: { scale: 1.03 },
    tap: { scale: 0.97 },
  };

  return (
    <section className="relative w-full overflow-hidden h-full">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 py-10 md:py-16">
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
                {t("description")}
              </span>
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              {t("description2")}
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-8 min-w-0"
          >
            <motion.div variants={container} className="space-y-4 md:space-y-6">
              <motion.div
                variants={item}
                whileHover={{
                  y: -4,
                  boxShadow: "0 10px 25px rgb(0 0 0 / 0.08)",
                }}
                className="rounded-lg border bg-card p-5 md:p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="rounded-md bg-tradewind/15 p-2.5 md:p-3 text-tradewind"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Phone className="h-5 w-5 md:h-6 md:w-6" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold">{t("phoneLabel")}</h3>
                    <p className="text-muted-foreground">+966 50 000 0000</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={item}
                whileHover={{
                  y: -4,
                  boxShadow: "0 10px 25px rgb(0 0 0 / 0.08)",
                }}
                className="rounded-lg border bg-card p-5 md:p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="rounded-md bg-corn/15 p-2.5 md:p-3 text-corn"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  >
                    <Mail className="h-5 w-5 md:h-6 md:w-6" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold">{t("emailLabel")}</h3>
                    <p className="text-muted-foreground">info@altamayuz.sa</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={item}
                whileHover={{
                  y: -4,
                  boxShadow: "0 10px 25px rgb(0 0 0 / 0.08)",
                }}
                className="rounded-lg border bg-card p-5 md:p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="rounded-md bg-san-marino/15 p-2.5 md:p-3 text-san-marino"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  >
                    <MapPin className="h-5 w-5 md:h-6 md:w-6" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold">{t("addressLabel")}</h3>
                    <p className="text-muted-foreground">{t("addressValue")}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.form
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -2 }}
              className="rounded-lg border bg-card p-5 md:p-6 shadow-sm space-y-4 min-w-0"
            >
              <motion.div
                variants={item}
                className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 min-w-0"
              >
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t("name")}</label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm md:text-base outline-none focus:ring-2 focus:ring-tradewind min-w-0"
                    placeholder={t("namePlaceholder")}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t("email")}</label>
                  <input
                    type="email"
                    className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm md:text-base outline-none focus:ring-2 focus:ring-tradewind min-w-0"
                    placeholder={t("emailPlaceholder")}
                  />
                </div>
              </motion.div>
              <motion.div variants={item} className="space-y-2">
                <label className="text-sm font-medium">{t("message")}</label>
                <textarea
                  className="min-h-28 sm:min-h-32 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm md:text-base outline-none focus:ring-2 focus:ring-tradewind min-w-0"
                  placeholder={t("messagePlaceholder")}
                />
              </motion.div>
              <motion.div
                variants={item}
                className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MessageSquare className="h-4 w-4" />
                  <span className="text-sm">{t("responseNote")}</span>
                </div>
                <motion.div
                  variants={button}
                  whileHover="hover"
                  whileTap="tap"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    className="w-full bg-linear-to-r from-corn to-nugget hover:from-nugget hover:to-corn text-white font-semibold"
                  >
                    {t("send")}
                    <motion.span
                      animate={{ x: [0, 6, 0] }}
                      transition={{ duration: 1.4, repeat: Infinity }}
                      className="ml-2 inline-flex"
                    >
                      <Send className="h-5 w-5" />
                    </motion.span>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
