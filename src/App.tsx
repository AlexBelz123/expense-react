import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Graph from './pages/Graph/Graph';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="graph" element={<Graph />} />
      </Routes>
    </>
  );
}

export default App;
