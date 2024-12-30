import EmployeePage from '../pages/employeePage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Sidebar from '../layouts/sidebar.layout';
import NotFoundPage from '../pages/notFoundPage';
import DepartmentsPage from '../pages/departmentsPage';
import HomePage from '../pages/homePage';
import NotificationsPage from '../pages/notificationsPage';
import HistoricPage from '../pages/historicPage';
import ProfilePage from '../pages/profilePage';

function Routers() {
  return (
    <Router>
      <main className="main d-flex overflow-hidden" style={{ maxHeight: "100vh" }}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/employees" element={<EmployeePage />} />
          <Route path="/departments" element={<DepartmentsPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/historic" element={<HistoricPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default Routers;
