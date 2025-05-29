import React, { useState } from "react";
import ViewTransitionLink from "../components/ViewTransitionLink.jsx";

const FILTER_WAKTU = ["Semua Waktu", "Hari Ini", "Bulan Ini", "Tahun Ini"];
const FILTER_KATEGORI = [
  "Semua Kategori",
  "Plastik",
  "Kertas",
  "Logam",
  "Kaca",
  "Organik",
];

const summary = [
  { icon: "/images/icons/Star-2.svg", label: "Total Poin", value: 155 },
  { icon: "/images/icons/Task.svg", label: "Total Aktivitas", value: 8 },
];

const activities = [
  {
    id: 1,
    icon: "/images/icons/Plastic.svg",
    kategori: "Plastik",
    waktu: "14 Mei 2025 • 09:30",
    poin: 3,
    status: "Selesai",
  },
  {
    id: 2,
    icon: "/images/icons/Paper.svg",
    kategori: "Kertas",
    waktu: "10 Mei 2025 • 14:15",
    poin: 6,
    status: "Selesai",
  },
  {
    id: 3,
    icon: "/images/icons/Metal.svg",
    kategori: "Logam",
    waktu: "05 Mei 2025 • 11:45",
    poin: 15,
    status: "Selesai",
  },
  {
    id: 4,
    icon: "/images/icons/Glass.svg",
    kategori: "Kaca",
    waktu: "28 April 2025 • 16:20",
    poin: 12,
    status: "Selesai",
  },
  {
    id: 5,
    icon: "/images/icons/Organic.svg",
    kategori: "Organik",
    waktu: "22 April 2025 • 10:00",
    poin: 12,
    status: "Selesai",
  },
  {
    id: 6,
    icon: "/images/icons/Plastic.svg",
    kategori: "Plastik",
    waktu: "15 April 2025 • 13:30",
    poin: 3,
    status: "Selesai",
  },
];

const info = {
  cara: [
    "Daur ulang plastik: 10 poin",
    "Daur ulang kertas: 5 poin",
    "Daur ulang logam: 15 poin",
    "Daur ulang kaca: 8 poin",
    "Daur ulang organik: 3 poin",
  ],
  penukaran: [
    "100 poin: Voucher belanja Rp 50.000",
    "500 poin: Voucher belanja Rp 100.000",
    "1000 poin: Voucher belanja Rp 200.000",
    "3000 poin: Voucher belanja Rp 500.000",
    "Semua poin: Dapat didonasikan untuk program lingkungan",
  ],
};

const RiwayatView = () => {
  const [waktu, setWaktu] = useState(FILTER_WAKTU[0]);
  const [kategori, setKategori] = useState(FILTER_KATEGORI[0]);
  const [search, setSearch] = useState("");

  return (
    <section className="bg-white min-h-screen pt-20 z-50 font-nunito">
      <header className="max-w-full mx-auto pt-8 px-8 md:pt-16 px-10 lg:px-16">
        <h1 className="text-2xl md:text-3xl font-extrabold text-primary mb-4">
          Riwayat Aktivitas
        </h1>
        <p className="text-primary text-base font-medium mb-6">
          Lihat riwayat aktivitas daur ulang dan transaksi poin Anda
        </p>
        <form
          className="flex flex-col gap-3 bg-[#E8F5E9] rounded-xl p-3 md:flex-row md:items-center md:gap-4 md:p-4 md:flex-nowrap"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col gap-2 md:flex-row md:gap-4">
            {/* Select Waktu */}
            <div className="relative w-full md:w-auto md:max-w-[200px]">
              <select
                value={waktu}
                onChange={(e) => setWaktu(e.target.value)}
                className="w-full bg-white rounded-lg border border-primary px-3 pr-8 py-2 text-primary font-semibold appearance-none outline-none mr-2"
                aria-label="Filter Waktu"
              >
                {FILTER_WAKTU.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
              <img
                src="/images/icons/Dropdown.svg"
                alt="Dropdown"
                className="w-4 h-4 text-primary absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
              />
            </div>
            {/* Select Kategori */}
            <div className="relative w-full md:w-auto md:max-w-[200px]">
              <select
                value={kategori}
                onChange={(e) => setKategori(e.target.value)}
                className="w-full bg-white rounded-lg border border-primary px-3 pr-8 py-2 text-primary font-semibold appearance-none outline-none mr-2"
                aria-label="Filter Kategori"
              >
                {FILTER_KATEGORI.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
              <img
                src="/images/icons/Dropdown.svg"
                alt="Dropdown"
                className="w-4 h-4 text-primary absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
              />
            </div>
          </div>
          {/* Search */}
          <div className="flex-1 flex justify-end w-full md:w-auto">
            <div className="relative w-full md:w-72">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 flex items-center">
                <img
                  src="/images/icons/Search.svg"
                  alt="Cari"
                  className="w-5 h-5 text-primary"
                />
              </span>
              <input
                type="text"
                placeholder="Cari aktivitas..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-lg border border-primary pl-10 py-2 pr-4 text-primary font-medium focus:ring-2 focus:ring-primary"
                aria-label="Cari aktivitas"
              />
            </div>
          </div>
        </form>
      </header>
      <section className="max-w-full mx-auto pt-12 px-10 lg:px-16">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {summary.map((s, i) => (
            <article
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-6 flex items-center gap-5 shadow-sm"
            >
              <span
                className="flex items-center justify-center h-16 w-16 rounded-full"
                style={{ background: "#E8F5E9" }}
              >
                <img src={s.icon} alt={s.label} className="h-7 w-7" />
              </span>
              <div>
                <div className="text-primary text-3xl font-extrabold leading-tight">
                  {s.value}
                </div>
                <div className="text-primary text-base font-semibold mt-1">
                  {s.label}
                </div>
              </div>
            </article>
          ))}
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {activities.map((a, i) => (
            <article
              key={a.id}
              className="bg-white border border-gray-200 rounded-xl flex flex-col shadow-sm overflow-hidden"
            >
              <div className="flex flex-row items-start gap-4 p-6 pb-0 flex-1">
                <span
                  className="flex items-center justify-center h-16 w-16 rounded-lg"
                  style={{ background: "#E8F5E9" }}
                >
                  <img src={a.icon} alt={a.kategori} className="h-7 w-7" />
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-primary font-bold text-lg truncate">
                      {a.kategori}
                    </span>
                    <span className="ml-2 bg-[#E8F5E9] text-primary text-xs font-bold rounded-lg px-3 py-1 ml-auto">
                      {a.status}
                    </span>
                  </div>
                  <div className="text-primary text-sm font-medium opacity-70 mb-2 truncate">
                    {a.waktu}
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src="/images/icons/Star-2.svg"
                      alt="Poin"
                      className="h-5 w-5"
                    />
                    <span className="text-primary font-semibold text-base">
                      {a.poin} Poin
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-[#F5F6F7] w-full px-6 py-3 flex justify-end items-center mt-6">
                <button className="text-primary font-semibold text-sm flex items-center gap-1 hover:font-bold">
                  Lihat Gambar
                  <img
                    src="/images/icons/Arrow-Right-3.svg"
                    alt="Lihat"
                    className="h-3 w-3"
                  />
                </button>
              </div>
            </article>
          ))}
        </section>
        {/* Pagination */}
        <nav
          className="flex justify-center items-center gap-4 mb-12"
          aria-label="Pagination"
        >
          {/* Arrow kiri */}
          {(() => {
            const [hoverLeft, setHoverLeft] = useState(false);
            const [hoverRight, setHoverRight] = useState(false);
            return (
              <>
                <button
                  className={`w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center bg-white text-primary transition-colors duration-150 ${hoverLeft ? "bg-[#E8F5E9] text-white" : ""}`}
                  aria-label="Sebelumnya"
                  onMouseEnter={() => setHoverLeft(true)}
                  onMouseLeave={() => setHoverLeft(false)}
                >
                  <img
                    src="/images/icons/Arrow-Left-2.svg"
                    alt="Sebelumnya"
                    className="w-4 h-4"
                  />
                </button>
                {/* Page 1 (active) */}
                <button
                  className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center bg-[#E8F5E9] text-primary transition-colors duration-150 hover:bg-[#E8F5E9]"
                  aria-current="page"
                >
                  1
                </button>
                {/* Page 2 */}
                <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center bg-white text-primary transition-colors duration-150 hover:bg-[#E8F5E9]">
                  2
                </button>
                {/* Arrow kanan */}
                <button
                  className={`w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center bg-white text-primary transition-colors duration-150 ${hoverRight ? "bg-[#E8F5E9] text-white" : ""}`}
                  aria-label="Berikutnya"
                  onMouseEnter={() => setHoverRight(true)}
                  onMouseLeave={() => setHoverRight(false)}
                >
                  <img
                    src="/images/icons/Arrow-Right-3.svg"
                    alt="Berikutnya"
                    className="w-4 h-4"
                  />
                </button>
              </>
            );
          })()}
        </nav>
        {/* Info Section */}
        <section className="bg-[#E8F5E9] rounded-xl p-8 mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
            Tentang Poin Daur Ulang
          </h2>
          <p className="text-primary text-base mb-6">
            Poin yang Anda peroleh dari aktivitas daur ulang dapat ditukarkan
            dengan berbagai hadiah menarik atau donasi untuk program lingkungan.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="bg-white rounded-xl border border-primary p-6 flex flex-col gap-2">
              <div className="flex items-center gap-3 mb-2">
                <img
                  src="/images/icons/Recycle-3.svg"
                  alt="Poin"
                  className="h-6 w-6"
                />
                <span className="font-bold text-primary text-lg">
                  Cara Mendapatkan Poin
                </span>
              </div>
              <ul className="list-disc pl-6 text-primary text-base font-medium">
                {info.cara.map((item, i) => (
                  <li key={i} className="mb-2 last:mb-0">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="bg-white rounded-xl border border-primary p-6 flex flex-col gap-2">
              <div className="flex items-center gap-3 mb-2">
                <img
                  src="/images/icons/Gift.svg"
                  alt="Penukaran"
                  className="h-6 w-6"
                />
                <span className="font-bold text-primary text-lg">
                  Penukaran Poin
                </span>
              </div>
              <ul className="list-disc pl-6 text-primary text-base font-medium">
                {info.penukaran.map((item, i) => (
                  <li key={i} className="mb-2 last:mb-0">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      </section>
    </section>
  );
};

export default RiwayatView;
