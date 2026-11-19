import { Link } from 'react-router';

export default function HomePage() {
  return (
    <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <h1>Лабораторна робота №4: SPA та спільний стан</h1>
      <p>
        Цей застосунок демонструє роботу односторінкового застосунку (SPA) з маршрутизацією 
        та спільним станом через React Context.
      </p>
      <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '20px' }}>
        <Link to="/traffic-light" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold' }}>
          Перейти до світлофора
        </Link>
        <Link to="/stats" style={{ padding: '10px 20px', backgroundColor: '#28a745', color: 'white', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold' }}>
          Переглянути статистику
        </Link>
      </div>
    </div>
  );
}