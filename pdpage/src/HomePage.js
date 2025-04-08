// src/HomePage.js
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  const goHome = () => {
    navigate('/home');
  };

  return (
    <div
      style={{
        backgroundColor: '#003f8a',
        minHeight: '100vh',
        color: 'white',
        fontFamily: 'Arial',
      }}
    >
      {/* Nav */}
      

      {/* Content */}
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Willkommen auf der Startseite 🎉</h1>
        <p>Du bist erfolgreich eingeloggt.</p>
      </div>
    </div>
  );
}


export default HomePage;
