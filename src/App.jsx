import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Signature from './pages/Signature';
import AntiAging from './pages/AntiAging';
import GalleryPage from './pages/GalleryPage';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="signature/titanium" element={<Signature />} />
          <Route path="anti-aging" element={<AntiAging />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
