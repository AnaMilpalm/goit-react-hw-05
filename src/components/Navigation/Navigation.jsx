import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  return (
    <>
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="movies" className={buildLinkClass}>
        Movies
      </NavLink>
    </>
  );
};

export default Navigation;
