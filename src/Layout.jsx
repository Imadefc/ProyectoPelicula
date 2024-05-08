import { useState } from 'react';
import { ThemeContext } from "./providers/ThemeProvider";
import "./style/Theme.css";

export function Layout({ children }) {
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    if (theme == "dark") {
      setTheme("light");
    } else if (theme == "light") {
      setTheme("dark");
    }
  }

  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      <div className={theme == "dark" ? "theme-dark" : ""}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}