import React from 'react';
import EditEmployeePage from './pages/editEmployeePage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Sidebar from './layouts/sidebar';
import TopBar from './layouts/topBar';
import NotFoundPage from './pages/notFoundPage';

function App() {
  return (
    <Router>
    <div className="bg-inactive" style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
          <Routes>
            <Route path="/" element={<EditEmployeePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
    </div>
  </Router>
  );
}

export default App;
