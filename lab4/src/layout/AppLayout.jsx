import { NavLink, Outlet } from 'react-router';
import './AppLayout.css';

export default function AppLayout() {
  return (
    <div className="app-layout">
      <nav className="navbar">
        <NavLink to="/" end className="nav-link">
          Головна
        </NavLink>
        <NavLink to="/traffic-light" className="nav-link">
          Світлофор
        </NavLink>
        <NavLink to="/stats" className="nav-link">
          Статистика
        </NavLink>
      </nav>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}