
import { NavLink, Route, Routes } from 'react-router-dom'
import clsx from 'clsx';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import NotFound from './pages/NotFound/NotFound';
import css from './App.module.css';


const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active)
}

function App() {
 

  return (
    <div>
      <nav>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={buildLinkClass}>
          About
        </NavLink>
      </nav>

    <div>
      <Routes path='/' element={<Home />}>
        <Route path='/about' element={<About />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    
    </div>
    </div>
  );
};

export default App;
