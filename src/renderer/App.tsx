import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidenav from './Components/Sidenav';
import Home from 


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
