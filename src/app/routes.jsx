import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import OracleDbPage from "../pages/OracleDbPage";
import SkillsPage from "../pages/SkillsPage";
import UiUxPage from "../pages/UiUxPage";
import WebDesignPage from "../pages/WebDesignPage";

export const appRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/skills", element: <SkillsPage /> },
  { path: "/oracle-db", element: <OracleDbPage /> },
  { path: "/ui-ux", element: <UiUxPage /> },
  { path: "/web-design", element: <WebDesignPage /> }
];
