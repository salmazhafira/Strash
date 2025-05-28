import React from "react";

const footerLinks = [
  [
    { label: "Beranda", href: "#" },
    { label: "Riwayat", href: "#" },
    { label: "Peringkat", href: "#" },
    { label: "Lokasi TPA", href: "#" },
    { label: "Donasi", href: "#" },
    { label: "Akun", href: "#" },
  ],
  [
    { label: "Tentang Kami", href: "#" },
    { label: "Fitur", href: "#" },
    { label: "Cara Kerja Strash", href: "#" },
    { label: "Testimoni", href: "#" },
    { label: "Hubungi Kami", href: "#" },
  ],
  [
    { label: "Linkedin", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Tiktok", href: "#" },
  ],
  [
    { label: "Pengaturan Notifikasi", href: "#" },
    { label: "Preferensi Privasi", href: "#" },
    { label: "Bahasa Aplikasi", href: "#" },
    { label: "Bantuan & Dukungan", href: "#" },
  ],
];

const Footer = () => (
  <footer className="w-full bg-white text-primary pt-12 pb-0 px-8 md:px-10 lg:px-14">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-0">
      {/* Logo kiri */}
      <div className="flex-1 flex items-center md:justify-start justify-center mb-2 md:mb-0">
        <img
          src="/images/logo/Logo.png"
          alt="Strash Logo"
          className="h-24 md:h-32 w-auto"
        />
      </div>
      {/* 4 kolom link */}
      <div className="flex-[3] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {footerLinks.map((col, i) => (
          <ul
            key={i}
            className="flex flex-col gap-y-4 text-base font-semibold text-primary"
          >
            {col.map((link, j) => (
              <li key={j}>
                <a href={link.href} className="transition font-semibold hover:font-extrabold">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
    {/* Garis horizontal */}
    <div className="w-full border-t border-primary/40 mt-12" />
    {/* Copyright */}
    <div className="text-center text-primary text-base font-normal py-6">
      &copy; 2025 Strash, Semua hak cipta dilindungi.
    </div>
  </footer>
);

export default Footer;
