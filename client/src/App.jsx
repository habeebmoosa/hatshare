import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Navbar } from './components/Navbar';
import { Download } from './pages/Download';
import { Footer } from './components/Footer';
import { SiteLayout } from './layouts/SiteLayout';

function App() {
    return (
        <div className="app">
            <Navbar />
            <Routes element={SiteLayout}>
                <Route path="/" element={<Home />} />
                <Route path="/download/:uid" element={<Download />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;