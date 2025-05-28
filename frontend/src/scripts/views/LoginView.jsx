import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginView = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white font-nunito py-12 px-8 md:py-24">
      {/* Logo & Heading */}
      <div className="flex flex-col items-center mt-8 z-50">
        <img
          src="/images/logo/Logo_Icon.png"
          alt="Strash Icon"
          className="h-16 w-16 md:h-20 md:w-20 mb-4"
        />
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary mb-2 text-center">
          Masuk ke Strash
        </h1>
        <p className="font-medium text-primary text-sm md:text-base text-center max-w-md">
          Selamat datang kembali! Silakan masukkan detail Anda.
        </p>
      </div>

      {/* Card */}
      <form className="w-full max-w-xl bg-white rounded-2xl shadow-lg px-4 py-6 md:px-8 md:py-10 mb-6">
        {/* Email */}
        <div className="mb-5">
          <label htmlFor="email" className="block text-primary font-semibold mb-2 text-sm md:text-base">
            Alamat Email
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary">
              <img src="/images/icons/Email.svg" alt="Email" className="h-5 w-5" />
            </span>
            <input
              type="email"
              id="email"
              className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition font-bold text-primary text-sm md:text-base placeholder:font-medium text-primary text-base"
              placeholder="contoh@email.com"
            />
          </div>
        </div>
        {/* Password */}
        <div className="mb-3">
          <label htmlFor="password" className="block text-primary font-semibold mb-2 text-sm md:text-base">
            Kata Sandi
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary">
              <img src="/images/icons/Password.svg" alt="Password" className="h-5 w-5" />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full pl-11 pr-10 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition font-bold text-primary text-sm md:text-base placeholder:font-medium text-primary text-base"
              placeholder="***********"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-primary focus:outline-none"
              onClick={() => setShowPassword((v) => !v)}
              tabIndex={-1}
            >
              <img
                src={showPassword ? "/images/icons/Password-Open.svg" : "/images/icons/Password-Hide.svg"}
                alt={showPassword ? "Tutup Sandi" : "Lihat Sandi"}
                className="h-5 w-5"
              />
            </button>
          </div>
        </div>
        {/* Remember & Forgot */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-6">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input type="checkbox" className="accent-primary h-5 w-5 rounded" />
            <span className="text-primary font-medium text-sm md:text-base">Ingat Saya</span>
          </label>
          <a href="#" className="text-primary text-sm font-medium hover:font-bold">
            Lupa kata sandi?
          </a>
        </div>
        {/* Button Masuk */}
        <button
          type="submit"
          className="w-full relative flex items-center bg-primary text-white py-4 md:py-5 rounded-lg font-bold text-base md:text-lg shadow hover:bg-green-800 transition mb-6"
        >
          <span className="flex items-center justify-center w-12 z-10">
            <img src="/images/icons/Enter.svg" alt="Masuk" className="w-5 h-5" />
          </span>
          <span className="absolute left-0 top-0 w-full h-full flex items-center justify-center font-semibold">
            Masuk
          </span>
        </button>
        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="mx-4 text-gray-500 font-medium text-sm md:text-base">Atau lanjutkan dengan</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>
        {/* Social Buttons */}
        <div className="flex flex-col gap-3 md:flex-row md:gap-4 mb-2">
          <button className="flex-1 border-2 border-primary rounded-lg py-3 flex items-center justify-center hover:bg-primary/10 transition" onClick={e => e.preventDefault()}>
            <img src="/images/icons/Google.svg" alt="Google" className="h-4 w-4" />
          </button>
          <button className="flex-1 border-2 border-primary rounded-lg py-3 flex items-center justify-center hover:bg-primary/10 transition" onClick={e => e.preventDefault()}>
            <img src="/images/icons/Facebook.svg" alt="Facebook" className="h-4 w-4" />
          </button>
          <button className="flex-1 border-2 border-primary rounded-lg py-3 flex items-center justify-center hover:bg-primary/10 transition" onClick={e => e.preventDefault()}>
            <img src="/images/icons/iCloud.svg" alt="Apple" className="h-4 w-4" />
          </button>
        </div>
      </form>
      {/* Register Link */}
      <p className="mt-2 text-center text-primary font-medium text-sm md:text-base">
        Belum punya akun? <Link to="/register" className="font-bold hover:font-extrabold">Daftar</Link>
      </p>
      {/* Fitur bawah */}
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-8 mt-8 text-primary text-xs md:text-sm font-medium">
        <div className="flex items-center gap-2 justify-center">
          <img src="/images/icons/Shield.svg" alt="Login Aman" className="h-5 w-5" />
          Login Aman
        </div>
        <div className="flex items-center gap-2 justify-center">
          <img src="/images/icons/Lock.svg" alt="Privasi Terlindungi" className="h-5 w-5" />
          Privasi Terlindungi
        </div>
        <div className="flex items-center gap-2 justify-center">
          <img src="/images/icons/Headphone-CS.svg" alt="Dukungan 24/7" className="h-5 w-5" />
          Dukungan 24/7
        </div>
      </div>
    </div>
  );
};

export default LoginView; 