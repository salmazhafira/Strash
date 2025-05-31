import React, { useState } from "react";

const Donasi = () => {
  const [selectedNominal, setSelectedNominal] = useState(null);
  const [formNama, setFormNama] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formTelepon, setFormTelepon] = useState("");
  const [formMetodePembayaran, setFormMetodePembayaran] = useState("");
  const [showManualNominalInput, setShowManualNominalInput] = useState(false);
  const [manualNominal, setManualNominal] = useState("");

  const handleNominalSelect = (nominal) => {
    setSelectedNominal(nominal.value);
    if (nominal.value === 'other') {
      setShowManualNominalInput(true);
    } else {
      setShowManualNominalInput(false);
      setManualNominal(""); // Clear manual input if another option is selected
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const finalNominal = selectedNominal === 'other' ? manualNominal : selectedNominal;
    console.log("Form submitted:", {
      selectedNominal: finalNominal,
      formNama,
      formEmail,
      formTelepon,
      formMetodePembayaran,
    });
    // Reset form or show success message
  };

  return (
    <div className="bg-white min-h-screen pt-20 z-50 font-nunito">
      <section className="w-full pt-8 px-8 md:pt-16 md:px-10 lg:px-16 mb-8">
        <h1 className="text-2xl font-bold mb-4 text-primary text-center">
          Mari Berdonasi untuk Lingkungan
        </h1>
        <p className="text-primary font-semibold mb-8 text-center mx-auto max-w-3xl">
          Donasi Anda akan membantu kami mengelola sampah dengan lebih baik dan menciptakan lingkungan yang
          lebih bersih untuk masa depan.
        </p>

        <div className="flex flex-col md:flex-row gap-8 mb-8">
          {/* Form Donasi Section */}
          <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-primary">Form Donasi</h2>

            {/* Pilih Nominal Donasi */}
            <div className="mb-4">
              <label className="block text-primary font-semibold mb-2">Pilih Nominal Donasi</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {[
                  { value: 50000, label: "Rp 50.000" },
                  { value: 100000, label: "Rp 100.000" },
                  { value: 200000, label: "Rp 200.000" },
                  { value: "other", label: "Nominal Lainnya" },
                ].map((nominal) => (
                  <button
                    key={nominal.value}
                    className={`px-4 py-2 rounded-lg border text-sm ${selectedNominal === nominal.value ? "bg-primary text-white border-primary" : "bg-white text-primary border-gray-300 hover:bg-gray-100"}`}
                    onClick={() => handleNominalSelect(nominal)}
                  >
                    {nominal.label}
                  </button>
                ))}
              </div>
              {showManualNominalInput && (
                <input
                  type="number"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm mt-4"
                  placeholder="Masukkan nominal donasi"
                  value={manualNominal}
                  onChange={(e) => setManualNominal(e.target.value)}
                  required={showManualNominalInput} // Make required only when visible
                  min="1"
                />
              )}
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="nama" className="block text-primary font-semibold mb-2 text-sm">Nama</label>
                <input
                  type="text"
                  id="nama"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  placeholder="Masukkan nama lengkap"
                  value={formNama}
                  onChange={(e) => setFormNama(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-primary font-semibold mb-2 text-sm">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  placeholder="Masukkan alamat email"
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="telepon" className="block text-primary font-semibold mb-2 text-sm">No. Telepon</label>
                <input
                  type="tel"
                  id="telepon"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  placeholder="Masukkan nomor telepon"
                  value={formTelepon}
                  onChange={(e) => setFormTelepon(e.target.value)}
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="metodePembayaran" className="block text-primary font-semibold mb-2 text-sm">Metode Pembayaran</label>
                <div className="relative">
                  <select
                    id="metodePembayaran"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm appearance-none pr-8"
                    value={formMetodePembayaran}
                    onChange={(e) => setFormMetodePembayaran(e.target.value)}
                    required
                  >
                    <option value="" disabled selected>Pilih metode pembayaran</option>
                    {/* Add payment method options here */}
                    <option value="bank_transfer">Transfer Bank</option>
                    <option value="ewallet">E-wallet</option>
                  </select>
                  <img alt="Dropdown" className="w-4 h-4 text-primary absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" src="/images/icons/Dropdown.svg"/>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-900 hover:font-bold focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Kirim Donasi
              </button>
            </form>
          </div>

          {/* Informasi Donasi Section */}
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            {/* Informasi Donasi Card */}
            <div className="w-full bg-white p-6 rounded-lg shadow-md flex flex-col gap-4">
              <h2 className="text-xl font-bold mb-2 text-primary">Informasi Donasi</h2>

              {/* Tujuan Penggunaan Dana */}
              <div>
                <div className="flex items-center mb-2">
                  {/* Replace span with img tag using local icon file */}
                  <img src="/images/icons/Target-2.svg" alt="Target Icon" className="w-5 h-5 text-primary mr-3"/>
                  <h3 className="text-lg font-semibold text-primary">Tujuan Penggunaan Dana</h3>
                </div>
                <p className="text-primary text-sm">
                  Dana yang terkumpul akan digunakan untuk program pengelolaan sampah, edukasi masyarakat, dan pengembangan
                  teknologi daur ulang.
                </p>
              </div>

              {/* Keamanan Donasi */}
              <div>
                <div className="flex items-center mb-2">
                   {/* Replace span with img tag using local icon file */}
                  <img src="/images/icons/Shield.svg" alt="Shield Icon" className="w-5 h-5 text-primary mr-3"/>
                  <h3 className="text-lg font-semibold text-primary">Keamanan Donasi</h3>
                </div>
                <p className="text-primary text-sm">
                  Seluruh transaksi donasi diproses melalui sistem pembayaran
                  yang aman dan terenkripsi. Data pribadi Anda terlindungi.
                </p>
              </div>

              {/* Kontak Informasi */}
              <div>
                <div className="flex items-center mb-2">
                  {/* Replace span with img tag using local icon file */}
                  <img src="/images/icons/Phone-2.svg" alt="Phone Icon" className="w-5 h-5 text-primary mr-3"/>
                  <h3 className="text-lg font-semibold text-primary">Kontak Informasi</h3>
                </div>
                <p className="text-primary text-sm">
                  Untuk informasi lebih lanjut, hubungi tim kami di:
                  <br/>Email: <a href="mailto:donasi@strash.id" className="text-primary hover:underline">donasi@strash.id</a>
                  <br/>Telepon: +62 812-3456-7890
                </p>
              </div>
            </div>

            {/* Testimoni Donatur Card */}
             <div className="w-full bg-white p-6 rounded-lg shadow-md">
               <div className="flex items-center mb-2">
                  {/* Replace span with img tag using local icon file */}
                  <img src="/images/icons/Heart.svg" alt="Heart Icon" className="w-5 h-5 text-primary mr-3"/>
                  <h3 className="text-lg font-semibold text-primary">Testimoni Donatur</h3>
               </div>
               <p className="text-primary text-sm italic mb-2">
                 "Saya senang bisa berkontribusi untuk program pengelolaan sampah
                 Strash. Prosesnya mudah dan transparan. Terima kasih Strash!"
               </p>
               <p className="text-primary text-sm font-semibold">- Budi Santoso</p>
             </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Donasi; 