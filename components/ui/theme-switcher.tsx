"use client";

import { useThemeStore, type Theme } from "@/stores/theme-store";
import { useTranslations } from "next-intl";
import { Sun, Moon, Monitor, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const themes: { value: Theme; icon: React.ComponentType<{ className?: string }>; label: string }[] = [
  { value: "light", icon: Sun, label: "light" },
  { value: "dark", icon: Moon, label: "dark" },
  { value: "system", icon: Monitor, label: "system" },
];

export function ThemeSwitcher() {
  const { theme, setTheme } = useThemeStore();
  const t = useTranslations("Theme");

  const currentTheme = themes.find((t) => t.value === theme);
  const CurrentIcon = currentTheme?.icon || Monitor;

  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="gap-2 w-full">
            <CurrentIcon className="h-4 w-4" />
            <span className="hidden sm:inline">{t(theme)}</span>
            <ChevronDown className="h-3 w-3" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[var(--radix-dropdown-menu-trigger-width)] min-w-0">
          {themes.map(({ value, icon: Icon, label }) => (
            <DropdownMenuItem
              key={value}
              onClick={() => setTheme(value)}
              className="gap-2 w-full"
            >
              <Icon className="h-4 w-4" />
              <span>{t(label)}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
