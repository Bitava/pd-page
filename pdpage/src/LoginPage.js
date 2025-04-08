// src/LoginPage.js
import { useState } from 'react';
import users from './users.json';

function LoginPage() {
  const [abteilung, setAbteilung] = useState('');
  const [rang, setRang] = useState('');
  const [nummer, setNummer] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginName = `${abteilung}-${rang.padStart(2, '0')}-${nummer.padStart(2, '0')}`;

    const userFound = users.find(
      (user) =>
        user.loginName.toUpperCase() === loginName.toUpperCase() &&
        user.password === password
    );

    if (!userFound) {
      setError('Falsche Eingabedaten');
    } else {
      setError('');
      localStorage.setItem('isLoggedIn', 'true');
      window.location.href = '/home'; 
    }
  };

  return (
    <div
      style={{
        backgroundColor: '#003f8a',
        minHeight: '100vh',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Arial',
      }}
    >
      <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Willkommen</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Geben Sie Ihre Daten ein</p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
          <input type="text" maxLength={2} value={abteilung} onChange={(e) => setAbteilung(e.target.value.toUpperCase())} placeholder="Ab" style={inputStyle} required />
          <span>-</span>
          <input type="number" max="99" value={rang} onChange={(e) => setRang(e.target.value.slice(0, 2))} placeholder="00" style={inputStyle} required />
          <span>-</span>
          <input type="number" max="99" value={nummer} onChange={(e) => setNummer(e.target.value.slice(0, 2))} placeholder="00" style={inputStyle} required />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Passwort" style={{ ...inputStyle, width: '10rem' }} required />
        </div>

        {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}

        <button type="submit" style={buttonStyle}>Einloggen</button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: '3rem',
  textAlign: 'center',
  padding: '0.4rem',
  borderRadius: '6px',
  border: 'none',
  backgroundColor: '#f0f0f0',
  color: '#333',
};

const buttonStyle = {
  padding: '0.6rem 1.2rem',
  backgroundColor: 'white',
  color: '#003f8a',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '1rem',
};

export default LoginPage;
