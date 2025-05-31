import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ViewTransitionLink from "./ViewTransitionLink.jsx";
import Swal from "sweetalert2";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(true);
    Swal.fire({
      title: "Menu Navigasi",
      html: `
        <nav class="flex flex-col gap-4 text-center" role="navigation" aria-label="Menu Utama">
          <a href="/" class="text-primary text-lg font-semibold hover:font-extrabold transition py-2 ${location.pathname === "/" ? "font-extrabold" : ""}" aria-current="${location.pathname === "/" ? "page" : "false"}">Beranda</a>
          <a href="/history" class="text-primary text-lg font-semibold hover:font-extrabold transition py-2 ${location.pathname === "/history" ? "font-extrabold" : ""}" aria-current="${location.pathname === "/history" ? "page" : "false"}">Riwayat</a>
          <a href="/ranking" class="text-primary text-lg font-semibold hover:font-extrabold transition py-2 ${location.pathname === "/ranking" ? "font-extrabold" : ""}" aria-current="${location.pathname === "/ranking" ? "page" : "false"}">Peringkat</a>
          <a href="/location" class="text-primary text-lg font-semibold hover:font-extrabold transition py-2 ${location.pathname === "/location" ? "font-extrabold" : ""}" aria-current="${location.pathname === "/location" ? "page" : "false"}">Lokasi TPA</a>
          <a href="/donation" class="text-primary text-lg font-semibold hover:font-extrabold transition py-2 ${location.pathname === "/donation" ? "font-extrabold" : ""}" aria-current="${location.pathname === "/donation" ? "page" : "false"}">Donasi</a>
          <a href="/login" class="text-primary text-lg font-semibold hover:font-extrabold transition py-2 ${location.pathname === "/login" ? "font-extrabold" : ""}" aria-current="${location.pathname === "/login" ? "page" : "false"}">Masuk</a>
        </nav>
      `,
      showConfirmButton: false,
      showCloseButton: true,
      customClass: {
        popup: "rounded-3xl",
        closeButton: "text-primary hover:text-green-800",
        title: "text-primary font-bold text-2xl",
        htmlContainer: "mt-4",
      },
      background: "#ffffff",
      width: "90%",
      padding: "2rem",
      position: "top",
      backdrop: `
        rgba(0,0,0,0.4)
      `,
      didClose: () => setIsMenuOpen(false)
    });
  };

  return (
    <header className="w-full bg-white fixed top-0 left-0 z-50 font-nunito">
      <nav className="w-full flex items-center justify-between px-8 md:px-10 lg:px-14" aria-label="Navigasi Utama">
        <div className="flex items-center gap-2">
          <ViewTransitionLink to="/" aria-label="Beranda">
            <img
              src="/images/logo/Logo.png"
              alt="Strash Logo"
              className="h-24 md:h-32 w-auto"
              width="128"
              height="128"
            />
          </ViewTransitionLink>
        </div>
        <ul className="hidden md:flex gap-10 text-primary font-semibold text-base" role="menubar">
          <li role="none">
            <ViewTransitionLink
              to="/"
              className={`transition hover:font-extrabold ${
                location.pathname === "/" ? "font-extrabold" : "font-semibold"
              }`}
              role="menuitem"
              aria-current={location.pathname === "/" ? "page" : undefined}
            >
              Beranda
            </ViewTransitionLink>
          </li>
          <li role="none">
            <ViewTransitionLink
              to="/history"
              className={`transition hover:font-extrabold ${
                location.pathname === "/history"
                  ? "font-extrabold"
                  : "font-semibold"
              }`}
              role="menuitem"
              aria-current={location.pathname === "/history" ? "page" : undefined}
            >
              Riwayat
            </ViewTransitionLink>
          </li>
          <li role="none">
            <ViewTransitionLink
              to="/ranking"
              className={`transition hover:font-extrabold ${
                location.pathname === "/ranking"
                  ? "font-extrabold"
                  : "font-semibold"
              }`}
              role="menuitem"
              aria-current={location.pathname === "/ranking" ? "page" : undefined}
            >
              Peringkat
            </ViewTransitionLink>
          </li>
          <li role="none">
            <ViewTransitionLink
              to="/location"
              className={`transition hover:font-extrabold ${
                location.pathname === "/location"
                  ? "font-extrabold"
                  : "font-semibold"
              }`}
              role="menuitem"
              aria-current={location.pathname === "/location" ? "page" : undefined}
            >
              Lokasi TPA
            </ViewTransitionLink>
          </li>
          <li role="none">
            <ViewTransitionLink
              to="/donation"
              className={`transition hover:font-extrabold ${
                location.pathname === "/donation"
                  ? "font-extrabold"
                  : "font-semibold"
              }`}
              role="menuitem"
              aria-current={location.pathname === "/donation" ? "page" : undefined}
            >
              Donasi
            </ViewTransitionLink>
          </li>
          <li role="none">
            <ViewTransitionLink
              to="/login"
              className={`transition hover:font-extrabold ${
                location.pathname === "/login"
                  ? "font-extrabold"
                  : "font-semibold"
              }`}
              role="menuitem"
              aria-current={location.pathname === "/login" ? "page" : undefined}
            >
              Masuk
            </ViewTransitionLink>
          </li>
        </ul>
        <button 
          className="md:hidden p-2" 
          onClick={handleMenuClick}
          aria-label="Buka menu navigasi"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <img 
            src="/images/icons/Menu.svg" 
            alt="" 
            className="w-6 h-6"
            aria-hidden="true"
          />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
