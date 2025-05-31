import React, { useState } from "react";

const Location = () => {
  // Dummy data for demonstration
  const tpaList = [
    {
      id: 1,
      name: "TPA Bantar Gebang",
      status: "Buka",
      address: "Jl. Raya Bantar Gebang, Bekasi, Jawa Barat",
      distance: "5.2 km dari lokasi Anda",
      hours: "07:00 - 17:00",
      image: "/images/general/TPA-Bantar-Gebang.jpg",
    },
    {
      id: 2,
      name: "TPA Rawa Kucing",
      status: "Buka",
      address: "Jl. Rawa Kucing, Tangerang, Banten",
      distance: "8.7 km dari lokasi Anda",
      hours: "08:00 - 16:00",
      image: "/images/general/TPA-Rawa-Kucing.jpg",
    },
    {
      id: 3,
      name: "TPA Cipayung",
      status: "Tutup",
      address: "Jl. Cipayung Raya, Depok, Jawa Barat",
      distance: "12.3 km dari lokasi Anda",
      hours: "07:00 - 16:00",
      image: "/images/general/TPA-Cipayung.jpg",
    },
  ];

  const [detailHover, setDetailHover] = useState(false);
  const [terdekatHover, setTerdekatHover] = useState(false);
  const [bukaSekarangHover, setBukaSekarangHover] = useState(false);
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);
  const [hoveredRuteButtonId, setHoveredRuteButtonId] = useState(null);

  return (
    <div className="bg-white min-h-screen pt-20 z-50 font-nunito">
      <section className="w-full pt-8 px-8 md:pt-16 md:px-10 lg:px-16 mb-8">
        <h1 className="text-2xl font-bold mb-2 text-primary">Lokasi TPA</h1>
        <p className="text-primary font-semibold mb-4">
          Temukan tempat pembuangan sampah terdekat
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="relative flex-grow w-full md:w-auto">
            <input
              type="search"
              placeholder="Cari lokasi TPA.."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Cari lokasi TPA"
            />
            <img
              src="/images/icons/Search.svg"
              alt="Search Icon"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary w-5 h-5"
            />
          </div>
          <div className="w-full flex flex-col md:flex-row md:w-max gap-2">
            <button
              className="text-white px-4 py-2 rounded-lg hover:bg-green-700 w-full md:w-auto"
              style={{ backgroundColor: "#2C6B3F" }}
            >
              Semua
            </button>
            <button
              className={`flex justify-center items-center gap-2 border px-4 py-2 rounded-lg w-full md:w-auto ${terdekatHover ? "bg-primary text-white" : "hover:bg-gray-100 text-primary"}`}
              onMouseEnter={() => setTerdekatHover(true)}
              onMouseLeave={() => setTerdekatHover(false)}
              style={{ backgroundColor: terdekatHover ? "#2C6B3F" : "" }}
            >
              <img
                src={
                  terdekatHover
                    ? "/images/icons/Location-2.svg"
                    : "/images/icons/Location.svg"
                }
                alt="Location Icon"
                className="w-4 h-4"
              />
              Terdekat
            </button>
            <button
              className={`flex justify-center items-center gap-2 border px-4 py-2 rounded-lg w-full md:w-auto ${bukaSekarangHover ? "bg-primary text-white" : "hover:bg-gray-100 text-primary"}`}
              onMouseEnter={() => setBukaSekarangHover(true)}
              onMouseLeave={() => setBukaSekarangHover(false)}
              style={{ backgroundColor: bukaSekarangHover ? "#2C6B3F" : "" }}
            >
              <img
                src={
                  bukaSekarangHover
                    ? "/images/icons/Time-2.svg"
                    : "/images/icons/Time.svg"
                }
                alt="Time Icon"
                className="w-4 h-4"
              />
              Buka Sekarang
            </button>
          </div>
        </div>
      </section>

      {/* Map Canvas Placeholder */}
      <section className="w-full px-8 md:px-10 lg:px-16 mb-8">
        <div className="bg-gray-200 h-96 rounded-3xl">
          {/* This is where the map component will be integrated */}
        </div>
      </section>

      <section className="w-full px-8 md:px-10 lg:px-16">
        <h2 className="text-xl font-bold mb-4 text-primary">
          Daftar Lokasi TPA
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tpaList.map((tpa) => (
            <article
              key={tpa.id}
              className="border rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={tpa.image}
                alt={`Image of ${tpa.name}`}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-primary">
                    {tpa.name}
                  </h3>
                  <span
                    className={`text-sm font-medium px-2 py-1 rounded ${tpa.status === "Buka" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"}`}
                  >
                    {tpa.status}
                  </span>
                </div>
                <p className="text-primary font-semibold text-sm mb-6 flex items-center gap-2">
                  <img
                    src="/images/icons/Location.svg"
                    alt="Location Icon"
                    className="w-4 h-4"
                  />
                  {tpa.address}
                </p>
                <p className="text-primary font-semibold text-sm mb-6 flex items-center gap-2">
                  <img
                    src="/images/icons/Distance.svg"
                    alt="Distance Icon"
                    className="w-4 h-4"
                  />
                  {tpa.distance}
                </p>
                <p className="text-primary font-semibold text-sm mb-6 flex items-center gap-2">
                  <img
                    src="/images/icons/Time.svg"
                    alt="Time Icon"
                    className="w-4 h-4"
                  />
                  {tpa.hours}
                </p>
                <div className="flex gap-2">
                  <button
                    className={`flex-1 flex items-center justify-center gap-2 border border-green-600 px-4 py-2 rounded-lg ${detailHover ? "bg-white text-primary" : "bg-[#2C6B3F] text-white"}`}
                  >
                    <img
                      src={
                        detailHover
                          ? "/images/icons/Info-2.svg"
                          : "/images/icons/Info.svg"
                      }
                      alt="Detail Icon"
                      className="w-4 h-4"
                    />
                    Detail
                  </button>
                  <button
                    className={`flex-1 flex items-center justify-center gap-2 border border-green-600 px-4 py-2 rounded-lg ${hoveredRuteButtonId === tpa.id ? "bg-[#2C6B3F] text-white" : "bg-white text-primary hover:bg-[#2C6B3F] hover:text-white"}`}
                    onMouseEnter={() => setHoveredRuteButtonId(tpa.id)}
                    onMouseLeave={() => setHoveredRuteButtonId(null)}
                  >
                    <img
                      src={
                        hoveredRuteButtonId === tpa.id
                          ? "/images/icons/Route-2.svg"
                          : "/images/icons/Route.svg"
                      }
                      alt="Route Icon"
                      className="w-4 h-4"
                    />
                    Rute
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <nav
          className="flex justify-center items-center gap-4 mt-8 mb-12"
          aria-label="Pagination"
        >
          <button
            className={`w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center bg-white text-primary transition-colors duration-150 ${hoverLeft ? "bg-[#E8F5E9]" : ""}`}
            aria-label="Sebelumnya"
            onMouseEnter={() => setHoverLeft(true)}
            onMouseLeave={() => setHoverLeft(false)}
          >
            <img
              src="/images/icons/Arrow-Left-2.svg"
              alt="Previous Page"
              className="w-4 h-4"
            />
          </button>
          {/* Page 1 (active) */}
          <button
            className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center bg-[#E8F5E9] text-primary transition-colors duration-150 hover:bg-[#E8F5E9]"
            aria-current="page"
            style={{ backgroundColor: "#2C6B3F", color: "white" }}
          >
            1
          </button>
          {/* Page 2 */}
          <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center bg-white text-primary transition-colors duration-150 hover:bg-[#2C6B3F] hover:text-white">
            2
          </button>
          {/* Arrow kanan */}
          <button
            className={`w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center bg-white text-primary transition-colors duration-150 ${hoverRight ? "bg-[#E8F5E9]" : ""}`}
            aria-label="Berikutnya"
            onMouseEnter={() => setHoverRight(true)}
            onMouseLeave={() => setHoverRight(false)}
          >
            <img
              src="/images/icons/Arrow-Right-3.svg"
              alt="Next Page"
              className="w-4 h-4"
            />
          </button>
        </nav>
      </section>
    </div>
  );
};

export default Location;
