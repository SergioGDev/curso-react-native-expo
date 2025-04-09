import { useState } from "react";
import { useColorScheme } from "nativewind";

import ThemeCard from "@/presentation/shared/ThemeCard";
import ThemedView from "@/presentation/shared/ThemedView";
import ThemeSwitch from "@/presentation/shared/ThemeSwitch";
import { useThemeChangerContext } from "@/presentation/context/ThemeChangerContext";

const ThemesScreen = () => {
  // const { colorScheme, setColorScheme } = useColorScheme();
  const { currentTheme, toggleTheme, setSystemTheme } =
    useThemeChangerContext();

  const [darkModeSettings, setDarkModeSettings] = useState({
    darkMode: currentTheme === "dark",
    systemMode: false,
  });

  const setDarkMode = (value: boolean) => {
    // setColorScheme(value ? "dark" : "light");
    toggleTheme();
    setDarkModeSettings({
      darkMode: value,
      systemMode: false,
    });
  };

  const setSystemMode = (value: boolean) => {
    // setColorScheme(value ? )
    if (value) {
      setDarkModeSettings({
        darkMode: darkModeSettings.darkMode,
        systemMode: true,
      });
      setSystemTheme();
    }
  };

  return (
    <ThemedView margin>
      <ThemeCard className="mt-5 p-5">
        <ThemeSwitch
          text="Dark Mode"
          className="mb-5"
          value={darkModeSettings.darkMode}
          onValueChange={setDarkMode}
        />
        <ThemeSwitch
          text="System Mode"
          value={darkModeSettings.systemMode}
          onValueChange={setSystemMode}
        />
      </ThemeCard>
    </ThemedView>
  );
};
export default ThemesScreen;
