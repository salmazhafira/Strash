import React, { useState } from "react";
// Import ViewTransitionLink if it's a custom component, otherwise use standard Link
// import ViewTransitionLink from '../components/ViewTransitionLink';

const ScanSampahView = () => {
  // State to manage the current view/status: 'initial', 'scanning', 'result', 'error'
  const [scanStatus, setScanStatus] = useState("initial");

  // Dummy data for result state
  const dummyResult = {
    jenis: "Plastik",
    akurasi: "95%",
    poin: "+3",
    rekomendasi: "Daur ulang di tempat pembuangan khusus plastik",
    dampak:
      "Sampah plastik membutuhkan waktu hingga 450 tahun untuk terurai di alam.\nDengan mendaur ulang, Anda membantu mengurangi polusi tanah dan air.",
    cara_pemilahan:
      "Pisahkan plastik dari sampah lain dan pastikan plastik bersih serta kering sebelum didaur ulang.",
    lokasi_tpa: {
      nama: "Bank Sampah Berseri",
      alamat: "Jl. Raya Pembuangan No. 123",
      jarak: "2.5 km dari lokasi Anda",
    },
  };

  // Function to handle the scan button click
  const handleScanClick = () => {
    setScanStatus("scanning");
    // Simulate scanning process
    setTimeout(() => {
      // After scanning, set to result or error
      setScanStatus("result"); // or 'error' for demonstration
    }, 3000); // Simulate 3 seconds scanning time
  };

  // Function to handle gallery button click
  const handleGalleryClick = () => {
    // Handle opening gallery
    console.log("Gallery button clicked");
    // For dummy, might just show initial or a specific error state
    setScanStatus("initial");
  };

  // Function to handle flash button click
  const handleFlashClick = () => {
    // Handle toggling flash
    console.log("Flash button clicked");
  };

  // Render content based on scanStatus
  const renderResultArea = () => {
    switch (scanStatus) {
      case "initial":
        return (
          <div className="flex flex-col items-center justify-center h-full text-center text-primary">
            {/* Placeholder Icon */}
            <img
              src="/images/icons/Camera.svg"
              alt="Camera Icon"
              className="w-16 h-16 mb-4 opacity-50"
            />
            <p className="text-sm font-semibold">Belum ada hasil pemindaian</p>
            <p className="text-xs text-gray-600 mt-1">
              Tekan tombol "Scan Sampah" untuk mulai memindai
            </p>
          </div>
        );
      case "scanning":
        return (
          <div className="flex flex-col items-center justify-center h-full text-center text-primary">
            {/* Loading Spinner Placeholder */}
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mb-4"></div>
            <p className="text-sm font-semibold">
              Sedang menganalisis sampah...
            </p>
          </div>
        );
      case "result":
        const result = dummyResult; // Use dummy data for now
        return (
          <div className="flex flex-col gap-4">
            {/* Hasil Pemindaian */}
            <div className="bg-green-100 p-4 rounded-lg">
              <h3 className="text-lg font-bold text-primary mb-2">
                Hasil Pemindaian
              </h3>
              {/* Jenis Sampah */}
              <div className="flex justify-between text-sm text-primary mb-1">
                <span className="font-semibold">Jenis Sampah:</span>
                <span>{result.jenis}</span>
              </div>
              {/* Akurasi */}
              <div className="flex justify-between items-center text-sm text-primary mb-1">
                <span className="font-semibold">Akurasi:</span>
                <div className="flex items-center gap-2">
                  {/* Accuracy Bar Container */}
                  <div className="w-24 h-2 bg-white rounded-full overflow-hidden shadow-inner">
                    {/* Filled Accuracy Bar */}
                    <div
                      className="h-full bg-primary"
                      style={{ width: `${parseInt(result.akurasi, 10)}%` }}
                    ></div>
                  </div>
                  <span>{result.akurasi}</span>
                </div>
              </div>
              {/* Poin */}
              <div className="flex justify-between text-sm text-primary mb-4">
                <span className="font-semibold">Poin:</span>
                <span>{result.poin}</span>
              </div>

              {/* Separator Line */}
              <div className="border-t border-gray-300 my-4"></div>

              {/* Rekomendasi */}
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  Rekomendasi:
                </h3>
                <p className="text-sm text-primary">{result.rekomendasi}</p>
              </div>
            </div>

            {/* Dampak Lingkungan */}
            <div className="bg-green-100 p-4 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold text-primary mb-2">
                Dampak Lingkungan
              </h3>
              <p className="text-sm text-primary whitespace-pre-line">
                {result.dampak}
              </p>
            </div>

            {/* Cara Pemilahan */}
            <div className="bg-green-100 p-4 rounded-lg border border-gray-200 flex flex-col">
              <h3 className="text-lg font-bold text-primary mb-2">
                Cara Pemilahan
              </h3>
              <p className="text-sm text-primary mb-2">
                {result.cara_pemilahan}
              </p>
              {/* Button Link to Edukasi */}
              <button className="mt-2 bg-primary text-white text-sm font-semibold py-2 px-4 rounded-lg w-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
                Lihat Selengkapnya
              </button>
            </div>

            {/* Lokasi TPA Terdekat */}
            <div className="bg-green-100 p-4 rounded-lg border border-gray-200 flex flex-col">
              <h3 className="text-lg font-bold text-primary mb-2">
                Lokasi TPA Terdekat:
              </h3>
              {/* Container for address/distance and button */}
              <div className="flex items-center justify-between">
                {/* Address and Distance */}
                <div className="flex flex-col text-sm text-primary">
                  <p className="font-semibold">{result.lokasi_tpa.nama}</p>
                  <p>{result.lokasi_tpa.alamat}</p>
                  <p>{result.lokasi_tpa.jarak}</p>
                </div>
                {/* Arah Button */}
                <button className="bg-primary text-white text-sm font-semibold flex items-center justify-center self-end gap-1 px-4 py-2 rounded-lg self-start hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
                  Arah{" "}
                  <img
                    src="/images/icons/Route-2.svg"
                    alt="Route Icon"
                    className="w-4 h-4"
                  />
                </button>
              </div>
            </div>
          </div>
        );
      case "error":
        return (
          <div className="flex flex-col items-center justify-center h-full text-center text-primary">
            {/* Error Icon Placeholder */}
            <img
              src="/images/icons/Error.svg"
              alt="Error Icon"
              className="w-16 h-16 mb-4 opacity-50"
            />
            <p className="text-sm font-semibold">Gagal memindai sampah.</p>
            <p className="text-xs text-gray-600 mt-1">Silakan coba lagi.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white min-h-screen pt-20 z-50 font-nunito">
      <section className="w-full pt-8 px-8 md:pt-16 md:px-10 lg:px-16 mb-8">
        <h1 className="text-2xl font-bold mb-2 text-primary text-center">
          Scan Sampah
        </h1>
        <p className="text-primary font-semibold mb-8 text-center">
          Arahkan kamera ke sampah untuk mendapatkan informasi jenis sampah dan
          cara penanganannya
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column: Camera View and Controls */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            {/* Camera View Area */}
            <div
              className={`relative w-full bg-gray-200 rounded-lg flex items-center justify-center h-96`}
            >
              {" "}
              {/* 
               {/* Status indicator */}
              <span className="absolute top-4 left-4 font-semibold px-3 py-1.5 rounded-full z-10 flex items-center gap-2 bg-white text-sm">
                {scanStatus === "initial" && (
                  <>
                    <img
                      src="/images/icons/Elips.svg"
                      alt="Status Siap Icon"
                      className="w-3 h-3"
                    />
                    <span className="text-gray-800">Siap</span>
                  </>
                )}
                {scanStatus === "scanning" && (
                  <>
                    <img
                      src="/images/icons/Elips-2.svg"
                      alt="Status Memindai Icon"
                      className="w-3 h-3"
                    />
                    <span className="text-gray-800">Memindai</span>
                  </>
                )}
                {scanStatus === "result" && (
                  <>
                    <img
                      src="/images/icons/Elips-3.svg"
                      alt="Status Selesai Icon"
                      className="w-3 h-3"
                    />
                    <span className="text-gray-800">Selesai</span>
                  </>
                )}
                {scanStatus === "error" && (
                  <>
                    <span className="text-red-600">●</span>
                    <span className="text-gray-800">Error</span>
                  </>
                )}
              </span>
              {/* Placeholder text/icon when camera not available or initial */}
              {scanStatus !== "scanning" && (
                <div className="text-center text-primary opacity-50">
                  <img
                    src="/images/icons/Camera.svg"
                    alt="Camera Placeholder"
                    className="w-16 h-16 mx-auto"
                  />
                  <p className="mt-2 text-sm font-semibold">
                    Kamera tidak tersedia
                  </p>
                </div>
              )}
              {/* Actual camera feed would go here */}
            </div>

            {/* Control Buttons */}
            <div className="flex gap-4">
              <button
                className="flex-1 flex items-center justify-center gap-2 bg-primary text-white font-semibold py-3 px-4 rounded-lg hover:bg-green-700"
                onClick={handleFlashClick}
              >
                {/* Flash Icon */}
                <img
                  src="/images/icons/Flash.svg"
                  alt="Flash Icon"
                  className="w-5 h-5"
                />
                Flash
              </button>
              <button
                className="flex-1 flex items-center justify-center gap-2 bg-primary text-white font-semibold py-3 px-4 rounded-lg hover:bg-green-700"
                onClick={handleScanClick}
                disabled={scanStatus === "scanning"}
              >
                {" "}
                {/* Disable while scanning */}
                Scan Sampah
              </button>
              <button
                className="flex-1 flex items-center justify-center gap-2 bg-primary text-white font-semibold py-3 px-4 rounded-lg hover:bg-green-700"
                onClick={handleGalleryClick}
              >
                {/* Gallery Icon */}
                <img
                  src="/images/icons/Gallery.svg"
                  alt="Gallery Icon"
                  className="w-5 h-5"
                />
                Galeri
              </button>
            </div>

            {/* Tips Pemindaian */}
            <div className="bg-green-100 p-4 mt-6 rounded-lg">
              <h3 className="text-lg font-bold text-primary mb-3">
                Tips Pemindaian:
              </h3>
              <ul className="list-none p-0 m-0">
                <li className="flex items-center text-sm text-primary mb-4">
                  <img
                    src="/images/icons/Tips.svg"
                    alt="Check Icon"
                    className="w-4 h-4 mr-2"
                  />
                  Pastikan sampah berada dalam kotak pemindaian
                </li>
                <li className="flex items-center text-sm text-primary mb-4">
                  <img
                    src="/images/icons/Tips.svg"
                    alt="Check Icon"
                    className="w-4 h-4 mr-2"
                  />
                  Hindari cahaya yang terlalu terang atau terlalu gelap
                </li>
                <li className="flex items-center text-sm text-primary">
                  <img
                    src="/images/icons/Tips.svg"
                    alt="Check Icon"
                    className="w-4 h-4 mr-2"
                  />
                  Tahan kamera dengan stabil selama pemindaian
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Scan Results */}
          <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-primary">
              Hasil Pemindaian
            </h2>
            {renderResultArea()}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScanSampahView;
