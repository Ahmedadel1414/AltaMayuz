"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { useRouter } from "next/navigation";
import { useThemeStore } from "@/stores/theme-store";
import { motion } from "framer-motion";

const HeroSection = () => {
  const t = useTranslations("HeroSection");
  const router = useRouter();
  const { resolvedTheme } = useThemeStore();

  const videoSource =
    resolvedTheme === "light"
      ? "/landing-page-video-light.mp4"
      : "/landing-page-video-dark.mp4";

  const handleContactUs = () => {
    router.push("/contact-us");
  };

  const handleOurServices = () => {
    router.push("/our-services");
  };

  // Animation variants
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const buttonVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const featureVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative h-[calc(100vh-4rem)] w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        key={videoSource}
      >
        <source src={videoSource} type="video/mp4" />
        {t("videoNotSupported")}
      </video>

      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <motion.div
          className="max-w-4xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Title */}
          <motion.h1
            className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            <motion.span
              className="bg-gradient-to-r from-corn via-nugget to-tradewind bg-clip-text text-transparent"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{ backgroundSize: "200% 200%" }}
            >
              {t("title")}
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="mb-8 text-lg text-gray-200 md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            {t("description")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                size="lg"
                onClick={handleOurServices}
                className="bg-gradient-to-r from-corn to-nugget hover:from-nugget hover:to-corn text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl"
              >
                {t("ourServices")}
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.div>
              </Button>
            </motion.div>

            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                variant="outline"
                size="lg"
                onClick={handleContactUs}
                className="border-2 border-tradewind text-tradewind hover:bg-tradewind hover:text-white font-semibold px-8 py-4 text-lg bg-white/10 backdrop-blur-sm"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Phone className="mr-2 h-5 w-5" />
                </motion.div>
                {t("contactUs")}
              </Button>
            </motion.div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-300"
            variants={itemVariants}
          >
            <motion.div
              className="flex items-center gap-2"
              variants={featureVariants}
            >
              <motion.div
                className="h-2 w-2 rounded-full bg-corn"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span>{t("feature1")}</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              variants={featureVariants}
            >
              <motion.div
                className="h-2 w-2 rounded-full bg-tradewind"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              <span>{t("feature2")}</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              variants={featureVariants}
            >
              <motion.div
                className="h-2 w-2 rounded-full bg-san-marino"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
              <span>{t("feature3")}</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div
          onClick={handleScroll}
          className="h-8 w-5 rounded-full border-2 border-white/50 flex justify-center"
        >
          <motion.div
            className="h-2 w-1 bg-white/70 rounded-full mt-2"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
