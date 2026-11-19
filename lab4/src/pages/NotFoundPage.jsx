import { Link } from 'react-router';

export default function NotFoundPage() {
  return (
    <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '10px' }}>
      <h2>404 — Сторінку не знайдено</h2>
      <p>Ви перейшли за неіснуючою адресою.</p>
      <Link to="/" style={{ color: '#007bff', fontWeight: 'bold' }}>
        Повернутися на головну сторінку
      </Link>
    </div>
  );
}