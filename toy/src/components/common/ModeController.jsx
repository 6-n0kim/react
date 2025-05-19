import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";

const ModeController = () => {
  const [darkMode, setDarkMode] = useState(true);
  //const [] useEffect();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark"); //html 태그에 클래스 추가
      document.documentElement.style.setProperty("color-scheme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.setProperty("color-scheme", "light");
    }
  }, [darkMode]);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-md dark:bg-neutral-300 dark:text-neutral-950
      bg-neutral-950 text-neutral-50"
    >
      {darkMode ? <Sun /> : <Moon />}
    </button>
  );
};

export default ModeController;
