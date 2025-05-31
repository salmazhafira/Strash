import React from "react";
import ViewTransitionLink from "./ViewTransitionLink.jsx";

const footerLinks = [
  {
    title: "Navigasi Utama",
    links: [
      { label: "Beranda", href: "/" },
      { label: "Riwayat", href: "/history" },
      { label: "Peringkat", href: "/ranking" },
      { label: "Lokasi TPA", href: "/location" },
      { label: "Donasi", href: "/donation" },
      { label: "Akun", href: "/account" },
    ]
  },
  {
    title: "Tentang Strash",
    links: [
      { label: "Tentang Kami", href: "/about" },
      { label: "Fitur", href: "/#features" },
      { label: "Cara Kerja Strash", href: "/#steps" },
      { label: "Testimoni", href: "/#testimonials" },
      { label: "Hubungi Kami", href: "/#team" },
    ]
  },
  {
    title: "Media Sosial",
    links: [
      { label: "Linkedin", href: "#", icon: "LinkedIn" },
      { label: "Facebook", href: "#", icon: "Facebook" },
      { label: "Twitter", href: "#", icon: "Twitter" },
      { label: "Instagram", href: "#", icon: "Instagram" },
      { label: "Tiktok", href: "#", icon: "TikTok" },
    ]
  },
  {
    title: "Pengaturan",
    links: [
      { label: "Pengaturan Notifikasi", href: "/account#notifications" },
      { label: "Preferensi Privasi", href: "/account#privacy" },
      { label: "Bahasa Aplikasi", href: "/account#language" },
      { label: "Bantuan & Dukungan", href: "/account#help" },
    ]
  },
];

const Footer = () => (
  <footer className="w-full bg-white text-primary pt-12 pb-0 px-8 md:px-10 lg:px-14" role="contentinfo">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-0">
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
            <h2 className="text-lg font-bold text-primary mb-2">{section.title}</h2>
            <ul className="flex flex-col gap-y-4 text-base font-semibold text-primary">
              {section.links.map((link, j) => (
                <li key={j}>
                  {link.href.startsWith("/") || link.href === "#" ? (
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
    <div className="w-full border-t border-primary/40 mt-12" role="separator" aria-hidden="true" />
    {/* Copyright */}
    <div className="text-center text-primary text-base font-normal py-6">
      <p>&copy; 2025 Strash, Semua hak cipta dilindungi.</p>
    </div>
  </footer>
);

export default Footer;
