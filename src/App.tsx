
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Index from './pages/Index';
import GalleryPage from './pages/GalleryPage';
import Services from './pages/Services';
import CaseStudies from './pages/CaseStudies';
import ContactPage from './pages/ContactPage';
import ProjectDetail from './pages/ProjectDetail';
import EngineeringDetail from './pages/EngineeringDetail';
import MiningDetail from './pages/MiningDetail';
import NotFound from './pages/NotFound';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout><Index /></Layout>} />
      <Route path="/gallery" element={<Layout><GalleryPage /></Layout>} />
      <Route path="/services" element={<Layout><Services /></Layout>} />
      <Route path="/case-studies" element={<Layout><CaseStudies /></Layout>} />
      <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
      <Route path="/projects/:id" element={<Layout><ProjectDetail /></Layout>} />
      <Route path="/services/engineering" element={<Layout><EngineeringDetail /></Layout>} />
      <Route path="/services/mining" element={<Layout><MiningDetail /></Layout>} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<Layout><NotFound /></Layout>} />
    </Routes>
  </BrowserRouter>
);

export default App;
