"use client";

import { useState, useEffect } from "react";

import clsx from "clsx";

import { DarkIcon, LightIcon } from "@/components/icons";

import { buttonStyles, iconContainerStyles } from "./styles";

const DarkModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("theme") === "dark";
    setIsDarkMode(savedMode);
    document.documentElement.classList.toggle("dark", savedMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <button onClick={toggleDarkMode} className={clsx(buttonStyles)}>
      <div
        className={clsx(
          iconContainerStyles,
          isDarkMode ? "translate-x-10" : "translate-x-0"
        )}
      >
        {isDarkMode ? <LightIcon /> : <DarkIcon />}
      </div>
    </button>
  );
};

export default DarkModeButton;
