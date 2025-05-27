# Waste Classification App

Aplikasi klasifikasi sampah berbasis web yang menggunakan teknologi machine learning untuk mengidentifikasi jenis sampah dari gambar. Aplikasi ini dibangun dengan React.js untuk frontend dan Hapi.js untuk backend.

## Fitur Utama

- **Klasifikasi Sampah**
  - Upload gambar atau gunakan kamera
  - Klasifikasi sampah menggunakan model TensorFlow.js
  - Hasil klasifikasi dengan persentase kepercayaan
  - Rekomendasi penanganan sampah

- **Riwayat Klasifikasi**
  - Menyimpan hasil klasifikasi
  - Filter berdasarkan tanggal
  - Detail hasil klasifikasi

- **Leaderboard**
  - Peringkat pengguna berdasarkan jumlah klasifikasi
  - Tampilan responsif
  - Update real-time

- **Edukasi**
  - Berita terkini tentang pengelolaan sampah
  - Sumber berita dari News API
  - Desain card modern dengan animasi
  - Responsif untuk mobile dan desktop

- **Autentikasi**
  - Login dan registrasi pengguna
  - Proteksi endpoint dengan Firebase
  - Manajemen sesi pengguna

## Teknologi yang Digunakan

### Frontend
- React.js
- TensorFlow.js untuk klasifikasi gambar
- Tailwind CSS untuk styling
- News API untuk konten edukasi
- Firebase Authentication

### Backend
- Hapi.js
- Firebase Firestore
- Firebase Admin SDK





## Penggunaan

1. Buka aplikasi di browser (default: http://localhost:3000)
2. Buat akun atau login
3. Pilih menu "Klasifikasi" untuk memulai klasifikasi sampah
4. Upload gambar atau gunakan kamera
5. Lihat hasil klasifikasi dan rekomendasi
6. Cek riwayat klasifikasi di menu "Riwayat"
7. Lihat peringkat di menu "Leaderboard"
8. Baca artikel edukasi di menu "Edukasi"

## Kontribusi

1. Fork repository
2. Buat branch fitur baru (`git checkout -b fitur-baru`)
3. Commit perubahan (`git commit -m 'Menambahkan fitur baru'`)
4. Push ke branch (`git push origin fitur-baru`)
5. Buat Pull Request




