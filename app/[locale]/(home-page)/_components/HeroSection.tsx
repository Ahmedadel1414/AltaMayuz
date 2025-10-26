"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { useRouter } from "next/navigation";
import { useThemeStore } from "@/stores/theme-store";

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
        <div className="max-w-4xl text-center">
          {/* Main Title */}
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-[#eab905] via-[#c7a420] to-[#63bcaa] bg-clip-text text-transparent">
              {t("title")}
            </span>
          </h1>

          {/* Description */}
          <p className="mb-8 text-lg text-gray-200 md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            {t("description")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={handleOurServices}
              className="bg-gradient-to-r from-[#eab905] to-[#c7a420] hover:from-[#c7a420] hover:to-[#eab905] text-white font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t("ourServices")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={handleContactUs}
              className="border-2 border-[#63bcaa] text-[#63bcaa] hover:bg-[#63bcaa] hover:text-white font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 bg-white/10 backdrop-blur-sm"
            >
              <Phone className="mr-2 h-5 w-5" />
              {t("contactUs")}
            </Button>
          </div>

          {/* Additional Info */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#eab905]" />
              <span>{t("feature1")}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#63bcaa]" />
              <span>{t("feature2")}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#4657a1]" />
              <span>{t("feature3")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="h-8 w-5 rounded-full border-2 border-white/50 flex justify-center">
          <div className="h-2 w-1 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
