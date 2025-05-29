import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ViewTransitionLink from './ViewTransitionLink.jsx';
import Swal from 'sweetalert2';

const Navbar = () => {
  const location = useLocation();

  const handleMenuClick = () => {
    Swal.fire({
      title: 'Menu',
      html: `
        <div class="flex flex-col gap-4 text-center">
          <a href="/" class="text-primary text-lg font-semibold hover:font-extrabold transition py-2 ${location.pathname === '/' ? 'font-extrabold' : ''}">Beranda</a>
          <a href="/history" class="text-primary text-lg font-semibold hover:font-extrabold transition py-2 ${location.pathname === '/riwayat' ? 'font-extrabold' : ''}">Riwayat</a>
          <a href="#" class="text-primary text-lg font-semibold hover:font-extrabold transition py-2">Peringkat</a>
          <a href="#" class="text-primary text-lg font-semibold hover:font-extrabold transition py-2">Lokasi TPA</a>
          <a href="#" class="text-primary text-lg font-semibold hover:font-extrabold transition py-2">Donasi</a>
          <a href="/login" class="text-primary text-lg font-semibold hover:font-extrabold transition py-2 ${location.pathname === '/login' ? 'font-extrabold' : ''}">Masuk</a>
        </div>
      `,
      showConfirmButton: false,
      showCloseButton: true,
      customClass: {
        popup: 'rounded-3xl',
        closeButton: 'text-primary hover:text-green-800',
        title: 'text-primary font-bold text-2xl',
        htmlContainer: 'mt-4'
      },
      background: '#ffffff',
      width: '90%',
      padding: '2rem',
      position: 'top',
      backdrop: `
        rgba(0,0,0,0.4)
      `
    });
  };

  return (
    <nav className="w-full flex items-center justify-between px-8 md:px-10 lg:px-14 bg-white fixed top-0 left-0 z-50 font-nunito">
      <div className="flex items-center gap-2">
        <ViewTransitionLink to="/">
          <img src="/images/logo/Logo.png" alt="Strash Logo" className="h-24 md:h-32 w-auto" />
        </ViewTransitionLink>
      </div>
      <ul className="hidden md:flex gap-10 text-primary font-semibold text-base">
        <li>
          <ViewTransitionLink 
            to="/" 
            className={`transition hover:font-extrabold ${
              location.pathname === '/' ? 'font-extrabold' : 'font-semibold'
            }`}
          >
            Beranda
          </ViewTransitionLink>
        </li>
        <li>
          <ViewTransitionLink 
            to="/history" 
            className={`transition hover:font-extrabold ${
              location.pathname === '/history' ? 'font-extrabold' : 'font-semibold'
            }`}
          >
            Riwayat
          </ViewTransitionLink>
        </li>
        <li><a href="#" className="transition font-semibold hover:font-extrabold">Peringkat</a></li>
        <li><a href="#" className="transition font-semibold hover:font-extrabold">Lokasi TPA</a></li>
        <li><a href="#" className="transition font-semibold hover:font-extrabold">Donasi</a></li>
        <li>
          <ViewTransitionLink 
            to="/login" 
            className={`transition hover:font-extrabold ${
              location.pathname === '/login' ? 'font-extrabold' : 'font-semibold'
            }`}
          >
            Masuk
          </ViewTransitionLink>
        </li>
      </ul>
      <button className="md:hidden" onClick={handleMenuClick}>
        <img src="/images/icons/Menu.svg" alt="Menu" className="w-6 h-6" />
      </button>
    </nav>
  );
};

export default Navbar; 