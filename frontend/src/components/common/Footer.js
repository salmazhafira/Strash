import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ViewTransitionLink from "./ViewTransitionLink";

const footerLinks = [
  {
    links: [
      { label: "Beranda", href: "/" },
      { label: "Scan", href: "/classify" },
      { label: "Riwayat", href: "/history" },
      { label: "Edukasi", href: "/education" },
      { label: "Peringkat", href: "/leaderboard" },
      { label: "Profil", href: "/profile" },
    ]
  },
  {
    links: [
      { label: "Tentang Kami", href: "/about" },
      { label: "Fitur", href: "/#features" },
      { label: "Cara Kerja", href: "/#steps" },
      { label: "Testimoni", href: "/#testimonials" },
      { label: "Hubungi Kami", href: "/#contact" },
    ]
  },
  {
    links: [
      { label: "LinkedIn", href: "#", icon: "LinkedIn", isSocial: true },
      { label: "Facebook", href: "#", icon: "Facebook", isSocial: true },
      { label: "Twitter", href: "#", icon: "Twitter", isSocial: true },
      { label: "Instagram", href: "#", icon: "Instagram", isSocial: true },
      { label: "TikTok", href: "#", icon: "TikTok", isSocial: true },
    ]
  },
  {
    links: [
      { label: "Pengaturan Notifikasi", href: "/profile", isSettings: true, type: "notifications" },
      { label: "Preferensi Privasi", href: "/profile", isSettings: true, type: "privacy" },
      { label: "Bahasa Aplikasi", href: "/profile", isSettings: true, type: "language" },
      { label: "Bantuan & Dukungan", href: "/profile", isSettings: true, type: "help" },
    ]
  },
];

const Footer = () => {
  const navigate = useNavigate();

  const handleSocialClick = (e, platform) => {
    e.preventDefault();
    Swal.fire({
      title: 'Fitur Segera Hadir!',
      text: `Media sosial ${platform} akan segera hadir. Mohon tunggu update selanjutnya.`,
      icon: 'info',
      confirmButtonText: 'Mengerti',
      confirmButtonColor: '#2C6B3F',
      customClass: {
        popup: 'rounded-3xl',
        title: 'text-[#2C6B3F] font-bold text-2xl',
        confirmButton: 'rounded-xl',
      }
    });
  };

  const handleSettingsClick = (e, type) => {
    e.preventDefault();
    navigate('/profile', { state: { activeTab: type } });
  };

  return (
    <footer className="w-full bg-white text-[#2C6B3F] pt-12 pb-0 px-8 md:px-10 lg:px-14" role="contentinfo">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Logo kiri */}
        <div className="flex-1 flex items-center md:justify-start justify-center mb-2 md:mb-0">
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
        {/* 4 kolom link */}
        <nav className="flex-[3] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8" aria-label="Footer Navigation">
          {footerLinks.map((section, i) => (
            <div key={i} className="flex flex-col gap-y-4">
              <ul className="flex flex-col gap-y-4 text-base font-semibold text-[#2C6B3F]">
                {section.links.map((link, j) => (
                  <li key={j}>
                    {link.isSocial ? (
                      <button
                        onClick={(e) => handleSocialClick(e, link.label)}
                        className="transition font-semibold hover:font-extrabold text-left"
                        aria-label={link.icon ? `${link.label} di ${link.icon}` : link.label}
                      >
                        {link.label}
                      </button>
                    ) : link.isSettings ? (
                      <button
                        onClick={(e) => handleSettingsClick(e, link.type)}
                        className="transition font-semibold hover:font-extrabold text-left"
                        aria-label={link.label}
                      >
                        {link.label}
                      </button>
                    ) : link.href.startsWith("/") || link.href === "#" ? (
                      <ViewTransitionLink
                        to={link.href}
                        className="transition font-semibold hover:font-extrabold"
                        aria-label={link.icon ? `${link.label} di ${link.icon}` : link.label}
                      >
                        {link.label}
                      </ViewTransitionLink>
                    ) : (
                      <a
                        href={link.href}
                        className="transition font-semibold hover:font-extrabold"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.icon ? `${link.label} di ${link.icon}` : link.label}
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      {/* Garis horizontal */}
      <div className="w-full border-t border-[#2C6B3F]/40 mt-12" role="separator" aria-hidden="true" />
      {/* Copyright */}
      <div className="text-center text-[#2C6B3F] text-base font-normal py-6">
        <p>&copy; 2025 Strash, Semua hak cipta dilindungi.</p>
      </div>
    </footer>
  );
};

export default Footer;