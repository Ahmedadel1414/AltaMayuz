'use client';

import { useTranslations } from "next-intl";

const Home = () => {
  const t = useTranslations("HomePage");
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-background to-muted">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          {t("title")}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Experience the power of modern web development with internationalization and theming.
        </p>
      </div>
    </div>
  );
};

export default Home;
