import React from 'react';
import EditEmployeePage from './pages/editEmployeePage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Sidebar from './layouts/sidebar';
import TopBar from './layouts/topBar';

function App() {
  return (
    <Router>
    <div className="bg-inactive" style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar Fixa */}
      <Sidebar />
      {/* Conteúdo Rotável */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <div  style={{ padding: "20px", overflow: "auto" }}>
          <Routes>
            <Route path="/" element={<EditEmployeePage />} />
          </Routes>
        </div>
      </div>
    </div>
  </Router>
  );
}

export default App;
