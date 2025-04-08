import { Link, Outlet, useNavigate } from 'react-router-dom';

function Layout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#003f8a',
        color: 'white',
        fontFamily: 'Arial',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* TopNav */}
      <div
        style={{
          backgroundColor: '#002f6c',
          padding: '1rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <button onClick={() => navigate('/home')} style={topNavButtonStyle}>
          🏠 Home
        </button>
        <button onClick={handleLogout} style={topNavButtonStyle}>
          🚪 Logout
        </button>
      </div>

      {/* Sidebar + Content */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Sidebar */}
        <div
          style={{
            width: '220px',
            backgroundColor: '#002f6c',
            padding: '2rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>📋 Menü</h2>
          <Link to="/rangordnung" style={linkStyle}>
            📊 Rangordnung
          </Link>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '6px',
  backgroundColor: '#004b99',
};

const topNavButtonStyle = {
  backgroundColor: 'white',
  color: '#003f8a',
  border: 'none',
  borderRadius: '6px',
  padding: '0.5rem 1rem',
  fontWeight: 'bold',
  cursor: 'pointer',
};

export default Layout;
