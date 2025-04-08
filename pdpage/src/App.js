// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import Rangordnung from './Rangordnung';
import ProtectedRoute from './ProtectedRoute';
import Layout from './Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="home" element={<HomePage />} />
          <Route path="rangordnung" element={<Rangordnung />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
