import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { appRoutes } from "./routes";
import "../styles/theme.css";

function App() {
  const location = useLocation();
  const [theme, setTheme] = useState(() => localStorage.getItem("site-theme") || "ocean");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("site-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const y = targetElement.getBoundingClientRect().top + window.scrollY - 16;
        window.scrollTo({ top: y, behavior: "smooth" });
        return;
      }
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div className="app-orb app-orb-a" aria-hidden="true" />
      <div className="app-orb app-orb-b" aria-hidden="true" />

      <div className="ui-chrome" aria-hidden="true">
        <div className="scroll-meter" style={{ width: `${scrollProgress}%` }} />
      </div>

      <button
        type="button"
        className="theme-toggle"
        onClick={() => setTheme((current) => (current === "ocean" ? "sunset" : "ocean"))}
      >
        {theme === "ocean" ? "Switch to Sunset" : "Switch to Ocean"}
      </button>

      <Routes>
        {appRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
