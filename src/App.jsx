import { NavLink, Route, Routes } from "react-router-dom";
import clsx from "clsx";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import css from "./App.module.css";
// import Products from "./pages/Products/Products";
// import Blog from "./pages/Blog/Blog";
// import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Users from "./pages/Users/Users";
import UserDetails from "./pages/UserDetails/UserDetails";
import Posts from "./pages/Posts/Posts";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

function App() {
  return (
    <div className={css.wrapper}>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="about" className={buildLinkClass}>
          About
        </NavLink>
        <NavLink to="products" className={buildLinkClass}>
          Products
        </NavLink>
        <NavLink to="users" className={buildLinkClass}>
          Users
        </NavLink>
      </nav>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:userId" element={<UserDetails />}>
            <Route path="info" element={<h2>test info</h2>} />
            <Route path="posts" element={<Posts />} />
          </Route>
          <Route path="about" element={<About />}>
            <Route path="aim" element={<h2>Aim</h2>} />
            <Route path="company" element={<h2>Company</h2>} />
            <Route path="team" element={<h2>Team</h2>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
