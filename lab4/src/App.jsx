import { Routes, Route } from 'react-router';
import AppLayout from './layout/AppLayout';
import HomePage from './pages/HomePage';
import TrafficLightPage from './pages/TrafficLightPage';
import StatsPage from './pages/StatsPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/traffic-light" element={<TrafficLightPage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}