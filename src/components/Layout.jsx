import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";


function Layout() {
  return (
    <div className="panel">
      <Sidebar />
      <div className="panel__cuerpo">
        <Topbar titulo="Asignación Clases" />
        <main className="contenido">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
