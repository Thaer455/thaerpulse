type NavbarProps = {
  theme: "dark" | "light";
  onToggleTheme: () => void;
};

function Navbar({ theme, onToggleTheme }: NavbarProps) {
  return (
    <header className="navbar">
      <a className="logo" href="#home">
        Thaer Issa
      </a>

      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="nav-actions">
        <button
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label="Toggle color theme"
        >
          {theme === "dark" ? "☀" : "☾"}
        </button>

        <a className="nav-cta" href="#contact">
          Let's talk <span>↗</span>
        </a>
      </div>
    </header>
  );
}

export default Navbar;
