import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PoemsPage from './pages/PoemsPage';
import PoemDetailPage from './pages/PoemDetailPage';
import ThoughtsPage from './pages/ThoughtsPage';
import ThoughtDetailPage from './pages/ThoughtDetailPage';
import AboutPage from './pages/AboutPage';
import SupportPage from './pages/SupportPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="poems" element={<PoemsPage />} />
        <Route path="poems/:id" element={<PoemDetailPage />} />
        <Route path="thoughts" element={<ThoughtsPage />} />
        <Route path="thoughts/:id" element={<ThoughtDetailPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="support" element={<SupportPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
