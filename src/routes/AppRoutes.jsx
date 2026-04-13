import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard';
import Registration from '../pages/Registration/Registration';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/register" element={<Registration />} />
      
      {/* 
          Bonus: Redirect any unknown path to dashboard 
          Could also be a 404 page 
      */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;

