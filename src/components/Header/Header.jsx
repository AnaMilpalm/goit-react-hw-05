import css from "./Header.module.css";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <Navigation />
      </nav>
    </header>
  );
};

export default Header;
