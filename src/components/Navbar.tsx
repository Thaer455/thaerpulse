import { useLanguage } from "../i18n";

type NavbarProps = {
  theme: "dark" | "light";
  onToggleTheme: () => void;
};

function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a className="logo" href="#home">
          Thaer Issa
        </a>

        <nav className="nav-links">
          <a href="#about">
            {language === "de" ? "Über mich" : "About"}
          </a>

          <a href="#skills">
            Skills
          </a>

          <a href="#projects">
            {language === "de" ? "Projekte" : "Projects"}
          </a>

          <a href="#contact">
            {language === "de" ? "Kontakt" : "Contact"}
          </a>
        </nav>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={
              theme === "dark"
                ? "Light mode aktivieren"
                : "Dark mode aktivieren"
            }
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>

          <div className="language-switcher">
            <button
              className={language === "de" ? "active" : ""}
              onClick={() => setLanguage("de")}
              aria-label="Deutsch"
            >
              DE
            </button>

            <span>/</span>

            <button
              className={language === "en" ? "active" : ""}
              onClick={() => setLanguage("en")}
              aria-label="English"
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
