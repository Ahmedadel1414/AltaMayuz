"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import PageHero from "@/components/PageHero";
import { Shield, Lock, Eye, UserCheck, FileText, Clock } from "lucide-react";

const PrivacyPolicyPage = () => {
  const t = useTranslations("privacyPolicy");

  const sections = [
    {
      icon: FileText,
      title: t("sections.overview.title"),
      content: t("sections.overview.content"),
    },
    {
      icon: UserCheck,
      title: t("sections.dataCollection.title"),
      content: t("sections.dataCollection.content"),
    },
    {
      icon: Eye,
      title: t("sections.dataUsage.title"),
      content: t("sections.dataUsage.content"),
    },
    {
      icon: Shield,
      title: t("sections.dataProtection.title"),
      content: t("sections.dataProtection.content"),
    },
    {
      icon: Lock,
      title: t("sections.dataSecurity.title"),
      content: t("sections.dataSecurity.content"),
    },
    {
      icon: Clock,
      title: t("sections.dataRetention.title"),
      content: t("sections.dataRetention.content"),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen">
      <PageHero
        title={t("title")}
        subtitle={t("subtitle")}
        imageSrc="/contact-us-hero-image.jpg"
      />

      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-corn/20 dark:bg-corn/10 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-corn" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">{t("intro.title")}</h2>
                <p className="text-muted-foreground">{t("intro.lastUpdated")}</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {t("intro.description")}
            </p>
          </div>
        </motion.div>

        {/* Privacy Policy Sections */}
        <motion.div
          className="max-w-4xl mx-auto space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card border border-border/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-tradewind/20 dark:bg-tradewind/10 rounded-xl flex items-center justify-center shrink-0 mt-1">
                  <section.icon className="w-6 h-6 text-tradewind" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {section.title}
                  </h3>
                  <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.div
          className="max-w-4xl mx-auto mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-linear-to-br from-corn/10 via-tradewind/10 to-san-marino/10 border border-border/50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t("contact.title")}
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t("contact.description")}
            </p>
            <motion.a
              href="mailto:privacy@altamayuz.com"
              className="inline-flex items-center space-x-2 bg-corn hover:bg-corn/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{t("contact.email")}</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
