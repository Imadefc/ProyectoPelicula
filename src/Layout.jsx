import { useEffect, useState } from 'react';
import { ThemeContext } from "./providers/ThemeProvider";
import "./style/Theme.css";

export function Layout({ children }) {
  const [theme, setTheme] = useState('light');
  
  useEffect(()=>{
    const tema = localStorage.getItem("theme")
    if (tema){
      setTheme(tema)
    }
    },[])

  function toggleTheme() {
    if (theme == "dark") {
      setTheme("light");
      localStorage.setItem("theme","light")
    } else if (theme == "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark")
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