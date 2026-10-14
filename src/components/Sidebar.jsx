import { NavLink } from "react-router-dom";


function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__usuario">Usuario:Fernando Ponce 01010200204044</div>

      <nav className="sidebar__nav">
        <NavLink to="/" end className="sidebar__link">
          Inicio
        </NavLink>
        <NavLink to="/clases" className="sidebar__link">
          Mis Clases
        </NavLink>
        <NavLink to="/docentes" className="sidebar__link">
          Docentes
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
