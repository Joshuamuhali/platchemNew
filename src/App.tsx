
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Index from './pages/Index';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import CaseStudies from './pages/CaseStudies';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';
import ErrorBoundary from './components/ErrorBoundary';

const App: React.FC = () => (
  <BrowserRouter>
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Layout><Index /></Layout>} />
        <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/case-studies" element={<Layout><CaseStudies /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<Layout><NotFound /></Layout>} />
      </Routes>
    </ErrorBoundary>
  </BrowserRouter>
);

export default App;
