"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { navigationItems } from "@/constants/navigationItems";
const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const t = useTranslations("Navigation");
  const pathname = usePathname();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Image
              src="/logo2.png"
              alt="AltaMayuz Logo"
              width={46}
              height={46}
              className="rounded-lg transition-all duration-200 group-hover:scale-105"
            />
            <span className="font-bold text-xl transition-colors duration-200 group-hover:text-primary">
              AltaMayuz
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden min-[860px]:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-muted/50 hover:scale-105 ${
                  pathname === item.href
                    ? "text-primary-foreground bg-primary shadow-lg ring-2 ring-primary/30 font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t(item.key)}
                {pathname === item.href && (
                  <>
                    <div className="absolute bottom-0 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-primary-foreground shadow-sm"></div>
                    <div className="absolute inset-0 rounded-lg bg-linear-to-r from-primary/20 via-primary/10 to-primary/20 pointer-events-none"></div>
                  </>
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Controls */}
          <div className="hidden min-[860px]:flex items-center space-x-4">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleSidebar}
            className="min-[860px]:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 hover:bg-muted hover:scale-105 active:scale-95"
            aria-label="Toggle menu"
          >
            {isSidebarOpen ? null : (
              <Menu className="w-6 h-6 transition-transform duration-200" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-80 transform bg-background border-l border-border transition-transform duration-300 ease-in-out min-[860px]:hidden ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center space-x-2 group">
              <Image
                src="/logo2.png"
                alt="AltaMayuz Logo"
                width={46}
                height={46}
                className="rounded-lg transition-all duration-200 group-hover:scale-105"
              />
              <span className="font-bold text-xl transition-colors duration-200 group-hover:text-primary">
                AltaMayuz
              </span>
            </div>
            <button
              onClick={toggleSidebar}
              className="flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 hover:bg-muted hover:scale-105 active:scale-95"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 transition-transform duration-200 hover:rotate-90" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    onClick={toggleSidebar}
                    className={`relative flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-[1.02] hover:shadow-sm ${
                      pathname === item.href
                        ? "bg-primary text-primary-foreground shadow-lg ring-2 ring-primary/30 font-semibold"
                        : "text-foreground hover:bg-muted/70 hover:text-primary"
                    }`}
                  >
                    {pathname === item.href && (
                      <>
                        <div className="absolute left-0 top-1/2 h-8 w-1.5 -translate-y-1/2 rounded-r-full bg-primary-foreground shadow-sm"></div>
                        <div className="absolute inset-0 rounded-lg bg-linear-to-r from-primary/20 via-primary/10 to-primary/20 pointer-events-none"></div>
                      </>
                    )}
                    <span className={pathname === item.href ? "ml-3" : ""}>
                      {t(item.key)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sidebar Footer with Controls */}
          <div className="p-4 border-t border-border space-y-4">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Header;
