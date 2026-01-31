import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/sonner';

// Lazy load pages
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Courses = lazy(() => import('@/pages/Courses'));
const Achievements = lazy(() => import('@/pages/Achievements'));
const Gallery = lazy(() => import('@/pages/Gallery'));
const Contact = lazy(() => import('@/pages/Contact'));

// Loading fallback
const LoadingPage = () => (
  <div className="h-screen w-full flex items-center justify-center bg-background">
    <div className="flex flex-col items-center gap-4">
      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      <span className="text-sm font-bold tracking-widest text-primary uppercase animate-pulse">Loading Excellence...</span>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<LoadingPage />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:type" element={<Courses />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              {/* Fallback */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <Toaster position="top-right" richColors />
      </div>
    </Router>
  );
}

export default App;
