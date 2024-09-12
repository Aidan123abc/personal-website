import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage'; // Import your Homepage component
import Projects from './pages/Projects'; // Import the Projects component
import Resume from './pages/Resume'; // Import the Resume component
import Internships from './pages/Internships'; // Import the Internships component
import PersonalStatement from './pages/PersonalStatement'; // Import the Personal Statement component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/personal" element={<PersonalStatement />} />
      </Routes>
    </Router>
  );
}

export default App;