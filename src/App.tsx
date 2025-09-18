import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import Home from './pages/Home';
import OurTeam from './pages/OurTeam';
import About from './pages/About';
import TermsPrivacy from './pages/TermsPrivacy';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/Pieces/BackToTop/BackToTop';

// Language

import "./i18n"

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="/" element={<Home />} /> 
                    <Route path="/our-team" element={<OurTeam />} />
                    <Route path='/about-us' element={<About />} />
                    <Route path="/terms-and-privacy" element={<TermsPrivacy /> } />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
