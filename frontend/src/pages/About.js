import React, { useState } from "react";

const teamMembers = [
  {
    name: "Eka Setyabudi",
    role: "Backend Developer",
    desc: "Pengembang perangkat lunak berpengalaman dalam membangun sistem backend yang efisien dan skalabel untuk aplikasi berteknologi berkelanjutan.",
    img: "/images/general/Picture-Avatar.png",
  },
  {
    name: "Michael Fernando King Luise",
    role: "Frontend Developer",
    desc: "Pengembang berpengalaman dalam menciptakan antarmuka pengguna yang responsif dan intuitif untuk aplikasi berbasis teknologi berkelanjutan.",
    img: "/images/general/Picture-Avatar.png",
  },
  {
    name: "Muhammad Rashif Aminurrohim",
    role: "Frontend Developer",
    desc: "Pengembang berpengalaman dalam menciptakan antarmuka pengguna yang responsif dan intuitif untuk aplikasi berbasis teknologi berkelanjutan.",
    img: "/images/general/Picture-Avatar.png",
  },
  {
    name: "Berlian Delta Septana",
    role: "Machine Learning Engineer",
    desc: "Insinyur yang ahli dalam membangun, menguji, dan mengoptimalkan model pembelajaran mesin untuk meningkatkan kinerja dan akurasi aplikasi berbasis data.",
    img: "/images/general/Picture-Avatar.png",
  },
  {
    name: "Ardiana Dwi Cahyanisa",
    role: "Machine Learning Engineer",
    desc: "Insinyur yang ahli dalam membangun, menguji, dan mengoptimalkan model pembelajaran mesin untuk meningkatkan kinerja dan akurasi aplikasi berbasis data.",
    img: "/images/general/Picture-Avatar.png",
  },
  {
    name: "Salma Zhafira Muchtar",
    role: "Machine Learning Engineer",
    desc: "Insinyur yang ahli dalam membangun, menguji, dan mengoptimalkan model pembelajaran mesin untuk meningkatkan kinerja dan akurasi aplikasi berbasis data.",
    img: "/images/general/Picture-Avatar.png",
  },
];

const About = () => {
  const [arrowHover, setArrowHover] = useState(false);
  return (
    <section className="bg-white min-h-screen z-50 font-nunito">
      {/* Hero Section */}
      <div className="max-w-full mx-auto flex flex-col pb-0 md:flex-row items-center gap-8 lg:pb-16">
        <div className="flex-1 flex flex-col gap-4 w-full md:gap-2">
          <span className="text-xs md:text-sm text-primary font-semibold tracking-widest mb-2">
            TENTANG Strash
          </span>
          <h1 className="text-3xl md:text-4xl max-w-sm font-extrabold text-primary leading-[2.5rem] md:leading-[3.5rem] mb-2">
            Memimpin Revolusi Pengelolaan Sampah Digital
          </h1>
          <p className="font-medium text-primary text-sm md:text-base mb-4 max-w-lg">
            Kami menggabungkan teknologi AI dengan kesadaran lingkungan untuk
            menciptakan solusi pengelolaan sampah yang inovatif dan
            berkelanjutan.
          </p>
          <a
            href="#mission"
            className="w-max bg-white border border-primary text-primary font-semibold rounded-lg px-5 py-3 flex items-center gap-3 hover:bg-primary hover:text-white transition"
            onMouseEnter={() => setArrowHover(true)}
            onMouseLeave={() => setArrowHover(false)}
            onClick={(e) => {
              e.preventDefault();
              const missionContainer = document.getElementById('mission-container');
              if (missionContainer) {
                missionContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }}
          >
            Bergabung Bersama Kami
            <img
              src={
                arrowHover
                  ? "/images/icons/Arrow-Right-Up-2.svg"
                  : "/images/icons/Arrow-Right-Up.svg"
              }
              alt="Arrow"
              className="w-3 h-3"
            />
          </a>
        </div>
        <div className="hidden md:flex flex justify-center items-center">
          <img
            src="/images/general/Splash-Screen-6.png"
            alt="Laptop"
            className="max-w-xs md:max-w-md lg:max-w-lg w-full"
          />
        </div>
      </div>

      {/* Visi & Misi */}
      <section className="relative py-16 overflow-hidden w-full max-w-full">
        <div className="w-full px-0 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16">
          {/* Gambar kiri */}
          <div className="hidden md:flex justify-center items-center h-full order-1">
            <img
              src="/images/general/Splash-Screen-3.png"
              alt="Ilustrasi Visi Misi"
              className="w-full max-w-[480px] h-auto object-contain"
            />
          </div>
          {/* Konten kanan (teks dan icon) */}
          <div className="flex flex-col gap-3 z-10 order-2">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-2 md:mb-0 text-left leading-[2.5rem] md:leading-[3.5rem]">
              Visi & Misi
            </h2>
            <p className="font-medium text-primary text-sm md:text-base mb-4">
              Visi kami adalah menciptakan ekosistem pengelolaan sampah yang
              cerdas dan berkelanjutan melalui integrasi teknologi dan kesadaran
              lingkungan.
            </p>
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-6">
                <span className="flex items-center justify-center h-14 w-14 md:h-16 md:w-16 rounded-full bg-primary shrink-0 mt-1">
                  <img
                    src="/images/icons/Target.svg"
                    alt="Inovasi Teknologi"
                    className="h-7 w-7 md:h-8 md:w-8 text-white"
                  />
                </span>
                <div>
                  <h3 className="font-bold text-primary text-lg md:text-xl mb-1">
                    Inovasi Teknologi
                  </h3>
                  <p className="text-primary text-base md:text-lg font-normal">
                    Mengembangkan solusi AI canggih untuk mengoptimalkan proses
                    pemilahan dan pengelolaan sampah.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <span className="flex items-center justify-center h-14 w-14 md:h-16 md:w-16 rounded-full bg-primary shrink-0 mt-1">
                  <img
                    src="/images/icons/People.svg"
                    alt="Pemberdayaan Masyarakat"
                    className="h-7 w-7 md:h-8 md:w-8 text-white"
                  />
                </span>
                <div>
                  <h3 className="font-bold text-primary text-lg md:text-xl mb-1">
                    Pemberdayaan Masyarakat
                  </h3>
                  <p className="text-primary text-base md:text-lg font-normal">
                    Mengedukasi dan memotivasi masyarakat untuk berpartisipasi
                    aktif dalam pengelolaan sampah.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <span className="flex items-center justify-center h-14 w-14 md:h-16 md:w-16 rounded-full bg-primary shrink-0 mt-1">
                  <img
                    src="/images/icons/Earth.svg"
                    alt="Dampak Lingkungan"
                    className="h-7 w-7 md:h-8 md:w-8 text-white"
                  />
                </span>
                <div>
                  <h3 className="font-bold text-primary text-lg md:text-xl mb-1">
                    Dampak Lingkungan
                  </h3>
                  <p className="text-primary text-base md:text-lg font-normal">
                    Berkontribusi pada pengurangan emisi karbon dan pencemaran
                    lingkungan melalui pengelolaan sampah yang efektif.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perjalanan Kami */}
      <section className="max-w-full mx-auto mt-0 md:mt-20">
        <h2 className="text-3xl mb-8 md:text-4xl font-extrabold text-primary mb-16 text-center">
          Perjalanan Kami
        </h2>
        <div className="relative w-full min-h-[900px] flex flex-col items-center">
          {/* Garis timeline vertikal */}
          <div
            className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-1 bg-primary z-0"
            style={{ minHeight: "100%" }}
          />
          {/* Timeline cards, grid 1 kolom, offset kiri/kanan, icon di tengah card */}
          <div className="w-full flex flex-col gap-y-32 relative z-10">
            {/* Card kiri atas */}
            <div className="hidden md:flex w-full mt-8">
              {/* Card kiri */}
              <div className="flex-1 flex">
                <div className="bg-primary text-white rounded-xl shadow-lg p-8 w-full max-w-xl">
                  <span className="font-bold text-lg md:text-xl mb-1 block text-left">
                    April 2025 - Lahirnya Visi
                  </span>
                  <p className="font-normal text-base md:text-lg text-left">
                    Berawal dari keprihatinan terhadap krisis sampah di
                    Indonesia, tim pendiri Strash mulai mengembangkan konsep
                    revolusioner yang menggabungkan AI dengan pengelolaan
                    sampah.
                  </p>
                </div>
              </div>
              {/* Icon tengah */}
              <div className="flex flex-col items-center justify-center w-32 shrink-0 relative">
                {/* Icon oval hanya di desktop */}
                <span className="hidden md:flex h-24 w-14 rounded-[32px] bg-primary shadow-lg items-center justify-center">
                  <img
                    src="/images/icons/Lamp.svg"
                    alt="Lamp"
                    className="h-7 w-7"
                  />
                </span>
                {/* Garis timeline di mobile */}
                <span className="block md:hidden w-1 h-full bg-primary mx-auto absolute left-1/2 top-0 -translate-x-1/2"></span>
              </div>
              {/* Kosong kanan */}
              <div className="flex-1"></div>
            </div>
            {/* Card kanan atas */}
            <div className="hidden md:flex w-full mt-8">
              {/* Kosong kiri */}
              <div className="flex-1"></div>
              {/* Icon tengah */}
              <div className="flex flex-col items-center justify-center w-32 shrink-0 relative">
                <span className="hidden md:flex h-24 w-14 rounded-[32px] bg-primary shadow-lg items-center justify-center">
                  <img
                    src="/images/icons/Chip.svg"
                    alt="Chip"
                    className="h-7 w-7"
                  />
                </span>
                <span className="block md:hidden w-1 h-full bg-primary mx-auto absolute left-1/2 top-0 -translate-x-1/2"></span>
              </div>
              {/* Card kanan */}
              <div className="flex-1 flex justify-end">
                <div className="bg-primary text-white rounded-xl shadow-lg p-8 w-full max-w-xl">
                  <span className="font-bold text-lg md:text-xl mb-1 block text-left">
                    Mei 2025 - Pengembangan Teknologi
                  </span>
                  <p className="font-normal text-base md:text-lg text-left">
                    Tim teknis kami berhasil mengembangkan algoritma AI dengan
                    akurasi 85% dalam mengidentifikasi dan mengklasifikasikan
                    berbagai jenis sampah melalui gambar.
                  </p>
                </div>
              </div>
            </div>
            {/* Card kiri bawah */}
            <div className="hidden md:flex w-full mt-8">
              {/* Card kiri */}
              <div className="flex-1 flex">
                <div className="bg-primary text-white rounded-xl shadow-lg p-8 w-full max-w-xl">
                  <span className="font-bold text-lg md:text-xl mb-1 block text-left">
                    Juni 2025 - Peluncuran Beta
                  </span>
                  <p className="font-normal text-base md:text-lg text-left">
                    Aplikasi Strash versi beta diluncurkan secara Beta. Feedback
                    positif dan antusiasme yang tinggi mendorong kami untuk
                    melakukan pengembangan lebih lanjut.
                  </p>
                </div>
              </div>
              {/* Icon tengah */}
              <div className="flex flex-col items-center justify-center w-32 shrink-0 relative">
                <span className="hidden md:flex h-24 w-14 rounded-[32px] bg-primary shadow-lg items-center justify-center">
                  <img
                    src="/images/icons/Launch.svg"
                    alt="Launch"
                    className="h-7 w-7"
                  />
                </span>
                <span className="block md:hidden w-1 h-full bg-primary mx-auto absolute left-1/2 top-0 -translate-x-1/2"></span>
              </div>
              {/* Kosong kanan */}
              <div className="flex-1"></div>
            </div>
            {/* Card kanan bawah */}
            <div className="hidden md:flex w-full my-8">
              {/* Kosong kiri */}
              <div className="flex-1"></div>
              {/* Icon tengah */}
              <div className="flex flex-col items-center justify-center w-32 shrink-0 relative">
                <span className="hidden md:flex h-24 w-14 rounded-[32px] bg-primary shadow-lg items-center justify-center">
                  <img
                    src="/images/icons/Star.svg"
                    alt="Star"
                    className="h-7 w-7"
                  />
                </span>
                <span className="block md:hidden w-1 h-full bg-primary mx-auto absolute left-1/2 top-0 -translate-x-1/2"></span>
              </div>
              {/* Card kanan */}
              <div className="flex-1 flex justify-end">
                <div className="bg-primary text-white rounded-xl shadow-lg p-8 w-full max-w-xl">
                  <span className="font-bold text-lg md:text-xl mb-1 block text-left">
                    Segera - Peluncuran Final
                  </span>
                  <p className="font-normal text-base md:text-lg text-left">
                    Peluncuran final Strash akan dilakukan segera setelah tahap
                    pengembangan selesai dan semua fitur siap diluncurkan,
                    memastikan aplikasi optimal dan memberikan pengalaman
                    terbaik bagi pengguna.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* MOBILE: Timeline 1 kolom, card > garis > card, tanpa icon oval */}
          <div className="flex flex-col gap-8 md:hidden gap-12">
            <div className="bg-primary text-white rounded-xl shadow-lg p-8 w-full max-w-xl mx-auto">
              <span className="font-bold text-lg md:text-xl mb-1 block text-center">
                April 2025 - Lahirnya Visi
              </span>
              <p className="font-normal text-base md:text-lg text-center">
                Berawal dari keprihatinan terhadap krisis sampah di Indonesia,
                tim pendiri Strash mulai mengembangkan konsep revolusioner yang
                menggabungkan AI dengan pengelolaan sampah.
              </p>
            </div>
            <span className="w-1 h-12 bg-primary mx-auto"></span>
            <div className="bg-primary text-white rounded-xl shadow-lg p-8 w-full max-w-xl mx-auto">
              <span className="font-bold text-lg md:text-xl mb-1 block text-center">
                Mei 2025 - Pengembangan Teknologi
              </span>
              <p className="font-normal text-base md:text-lg text-center">
                Tim teknis kami berhasil mengembangkan algoritma AI dengan
                akurasi 85% dalam mengidentifikasi dan mengklasifikasikan
                berbagai jenis sampah melalui gambar.
              </p>
            </div>
            <span className="w-1 h-12 bg-primary mx-auto"></span>
            <div className="bg-primary text-white rounded-xl shadow-lg p-8 w-full max-w-xl mx-auto">
              <span className="font-bold text-lg md:text-xl mb-1 block text-center">
                Juni 2025 - Peluncuran Beta
              </span>
              <p className="font-normal text-base md:text-lg text-center">
                Aplikasi Strash versi beta diluncurkan secara Beta. Feedback
                positif dan antusiasme yang tinggi mendorong kami untuk
                melakukan pengembangan lebih lanjut.
              </p>
            </div>
            <span className="w-1 h-12 bg-primary mx-auto"></span>
            <div className="bg-primary text-white rounded-xl shadow-lg p-8 w-full max-w-xl mx-auto">
              <span className="font-bold text-lg md:text-xl mb-1 block text-center">
                Segera - Peluncuran Final
              </span>
              <p className="font-normal text-base md:text-lg text-center">
                Peluncuran final Strash akan dilakukan segera setelah tahap
                pengembangan selesai dan semua fitur siap diluncurkan,
                memastikan aplikasi optimal dan memberikan pengalaman terbaik
                bagi pengguna.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nilai-Nilai Kami */}
      <section className="max-w-full mx-auto mt-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-10">
          Nilai-Nilai Kami
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Keberlanjutan */}
          <article className="bg-white border border-primary rounded-2xl p-6 flex flex-col items-start gap-2">
            <span
              className="rounded-full p-4 mb-4 flex items-center justify-center"
              style={{ background: "#2c6b3f" }}
            >
              <img
                src="/images/icons/Recycle-2.svg"
                alt="Recycle"
                className="w-6 h-6"
              />
            </span>
            <h3 className="font-bold text-primary text-xl mb-1">
              Keberlanjutan
            </h3>
            <p className="font-medium text-primary text-base">
              Kami berkomitmen untuk menciptakan solusi yang tidak hanya
              menyelesaikan masalah hari ini, tetapi juga memastikan masa depan
              yang lebih baik untuk generasi mendatang.
            </p>
          </article>
          {/* Inovasi */}
          <article className="bg-white border border-primary rounded-2xl p-6 flex flex-col items-start gap-2">
            <span
              className="rounded-full p-4 mb-4 flex items-center justify-center"
              style={{ background: "#2c6b3f" }}
            >
              <img
                src="/images/icons/Lamp.svg"
                alt="Lamp"
                className="w-6 h-6"
              />
            </span>
            <h3 className="font-bold text-primary text-xl mb-1">Inovasi</h3>
            <p className="font-medium text-primary text-base">
              Kami terus mendorong batas-batas teknologi dan berinovasi untuk
              mengembangkan solusi yang relevan, efektif, dan mudah diakses oleh
              semua lapisan masyarakat.
            </p>
          </article>
          {/* Kolaborasi */}
          <article className="bg-white border border-primary rounded-2xl p-6 flex flex-col items-start gap-2">
            <span
              className="rounded-full p-4 mb-4 flex items-center justify-center"
              style={{ background: "#2c6b3f" }}
            >
              <img
                src="/images/icons/Collab.svg"
                alt="Handshake"
                className="w-6 h-6"
              />
            </span>
            <h3 className="font-bold text-primary text-xl mb-1">Kolaborasi</h3>
            <p className="font-medium text-primary text-base">
              Kami percaya bahwa masalah lingkungan hanya dapat diselesaikan
              melalui kolaborasi antara individu, komunitas, pemerintah, dan
              sektor swasta.
            </p>
          </article>
        </div>
      </section>

      {/* Tim Kami */}
      <section className="max-w-full mx-auto mt-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-10">
          Tim Kami
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <article
              key={idx}
              className="bg-white border border-primary rounded-2xl p-6 flex flex-col items-center text-center"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 rounded-full object-cover mb-4"
              />
              <h3 className="font-bold text-primary text-lg mb-1">
                {member.name}
              </h3>
              <span className="text-primary text-base mb-2">{member.role}</span>
              <p className="text-primary text-base">{member.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section id="mission" className="max-w-5xl mx-auto mt-20">
        <div id="mission-container" className="bg-white border border-primary rounded-2xl px-16 py-10 flex flex-col items-center text-center shadow-sm">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">
            Bergabunglah dalam Misi Kami
          </h2>
          <p className="text-primary text-base md:text-lg max-w-4xl mx-auto mb-6">
            Kami mengundang Anda untuk bergabung dengan tim Strash dalam
            menciptakan dunia yang lebih bersih dan berkelanjutan. Dengan
            bergabung bersama kami, Anda akan berkontribusi langsung pada
            pengembangan solusi teknologi cerdas dalam pengelolaan sampah, serta
            membantu mewujudkan visi global untuk keberlanjutan. Bersama, kita
            akan menghadapi tantangan lingkungan dengan inovasi, menciptakan
            dampak positif, dan berkolaborasi untuk masa depan yang lebih hijau
            dan ramah lingkungan.
          </p>
          <a
            href="mailto:strash@gmail.com"
            className="w-max bg-white border border-primary text-primary font-semibold rounded-lg px-5 py-3 flex items-center gap-3 hover:bg-primary hover:text-white transition"
            onMouseEnter={() => setArrowHover(true)}
            onMouseLeave={() => setArrowHover(false)}
          >
            Hubungi Kami
            <img
              src={
                arrowHover
                  ? "/images/icons/Arrow-Right-Up-2.svg"
                  : "/images/icons/Arrow-Right-Up.svg"
              }
              alt="Arrow"
              className="w-3 h-3"
            />
          </a>
        </div>
      </section>
    </section>
  );
};

export default About; 