import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Camera from '../utils/camera';

const MainLayout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Matikan semua stream saat route berubah
    Camera.stopAllStreams();
  }, [location]);
  return (
    <div className="min-h-screen flex-1 flex-col items-center">
      <Navbar /> 
      <main className="min-h-screen flex flex-col pt-4 pb-8 px-8 md:px-10 md:pt-12 lg:px-14 bg-white mt-24 items-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout; 