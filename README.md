# Portfolio — Nabilah Fitriani

Website portfolio personal bertema **Marvel Dark / JARVIS-inspired** untuk fresh graduate Teknik Informatika.
Dibangun dengan **React + Vite + Tailwind CSS**, tanpa backend dan tanpa database.

---

## 1. Struktur Folder Project

```
Portfolio/
├─ index.html                  # HTML utama + pemuatan font
├─ tailwind.config.js          # Warna, font, dan animasi tema Marvel Dark
├─ postcss.config.js
├─ vercel.json                 # Konfigurasi deploy Vercel
├─ public/
│  ├─ favicon.svg
│  ├─ profile.png              # <-- TARUH FOTO PROFIL ANDA DI SINI
│  └─ images/
│     ├─ companies/            # <-- TARUH LOGO PERUSAHAAN DI SINI
│     └─ education/            # <-- TARUH LOGO KAMPUS DI SINI
└─ src/
   ├─ main.jsx                 # Entry point React
   ├─ App.jsx                  # Susunan section halaman
   ├─ index.css                # Style dasar + komponen HUD
   ├─ data/                    # ===== SEMUA DATA YANG PERLU ANDA EDIT =====
   │  ├─ profile.js            # Nama, email, GitHub, LinkedIn, lokasi
   │  ├─ education.js          # Data pendidikan (About, kolom kiri)
   │  ├─ experience.js         # Data pengalaman kerja/magang (About, kolom kanan)
   │  ├─ interests.js          # Daftar minat (About, kolom kiri)
   │  ├─ projects.js           # Data + dokumentasi proyek
   │  ├─ certificates.js       # Data sertifikat
   │  ├─ awards.js             # Data penghargaan
   │  ├─ techStack.js          # Daftar teknologi
   │  └─ imageUrl.js           # Helper pembuat URL gambar
   ├─ i18n/
   │  ├─ translations.js       # Kamus bahasa English & Indonesia
   │  ├─ localized.js          # Helper teks dua bahasa (en/id)
   │  └─ LanguageContext.jsx   # Penyimpan bahasa (localStorage)
   ├─ hooks/
   │  └─ useActiveSection.js   # Scroll-spy untuk menu navbar
   └─ components/
      ├─ Navbar.jsx            # Menu + language switcher + hamburger
      ├─ Hero.jsx              # Home + efek scan JARVIS pada foto
      ├─ Portfolio.jsx         # Tab: Projects/Certificates/Awards/Tech Stack
      ├─ Contact.jsx
      ├─ ThankYou.jsx          # Section penutup + footer
      ├─ SectionHeading.jsx
      ├─ BrandIcon.jsx         # Ikon brand (GitHub, LinkedIn, logo teknologi)
      ├─ about/
      │  ├─ AboutSection.jsx   # Layout About (2 kolom: 35% / 65%)
      │  ├─ EducationCard.jsx  # Pendidikan (kolom kiri)
      │  ├─ InterestsList.jsx  # Minat berbentuk chip (kolom kiri)
      │  ├─ ExperienceList.jsx # Daftar pengalaman (kolom kanan)
      │  ├─ ExperienceItem.jsx # Satu item pengalaman + logo perusahaan
      │  └─ EntityLogo.jsx     # Kotak logo + fallback inisial/ikon
      └─ portfolio/
         ├─ ProjectsTab.jsx
         ├─ ProjectCard.jsx
         ├─ ProjectModal.jsx      # Modal dokumentasi lengkap proyek
         ├─ CertificatesTab.jsx
         ├─ AwardsTab.jsx
         ├─ TechStackTab.jsx
         └─ ImagePreviewModal.jsx # Modal pratinjau sertifikat / penghargaan
```

---

## 2. Cara Menjalankan Project Secara Lokal

Butuh Node.js versi 18 atau lebih baru.

```bash
npm install      # install dependency (sekali saja)
npm run dev      # jalankan di http://localhost:5173
```

Perintah lain:

```bash
npm run build    # build untuk produksi -> folder dist
npm run preview  # cek hasil build secara lokal
```

---

## 3. Cara Mengganti Foto Profil

1. Siapkan foto dengan **background transparan** (file PNG).
2. Beri nama file: **`profile.png`**.
3. Letakkan di folder **`public/`** sehingga menjadi `public/profile.png`.
4. Selesai — tidak perlu mengubah kode. Foto otomatis muncul di Hero.

Selama `public/profile.png` belum ada, website menampilkan frame HUD dengan
inisial nama sebagai fallback (tidak ada gambar rusak).

Kalau ingin memakai nama file atau path lain, ubah baris `photo` di
[src/data/profile.js](src/data/profile.js).

---

## 4. Cara Mengganti Informasi Pribadi

Buka [src/data/profile.js](src/data/profile.js), lalu ubah:

| Field      | Keterangan                                  |
| ---------- | ------------------------------------------- |
| `name`     | Nama yang tampil di navbar dan hero         |
| `initials` | Inisial untuk fallback foto                 |
| `photo`    | Path foto profil                            |
| `email`    | Email — dipakai pada tombol `mailto:`       |
| `github`   | URL profil GitHub                           |
| `linkedin` | URL profil LinkedIn                         |
| `location` | Lokasi                                      |

---

## 5. Cara Mengubah Bagian About (Education, Experience, Interests)

Bagian About memakai **satu panel dengan dua kolom** — kiri (35%) berisi
Education + Interests, kanan (65%) berisi Experience. Semua isinya diambil
dari file data terpisah, jadi Anda **tidak perlu menyentuh komponen**.

### Education — [src/data/education.js](src/data/education.js)

```js
{
  id: 1,
  degree: { en: 'Bachelor of Informatics Engineering', id: 'Sarjana Teknik Informatika' },
  institution: 'Universitas Muhammadiyah Gresik',
  period: '2022 – 2026',
  gpa: '3.92 / 4.00',                        // kosongkan ('') bila tak ingin ditampilkan
  logo: '/images/education/university.png',  // kosongkan ('') -> otomatis ikon toga
},
```

Tambahkan objek baru ke array `education` jika punya pendidikan lain.

### Experience — [src/data/experience.js](src/data/experience.js)

```js
{
  id: 1,
  period: 'Jan 2025 – Apr 2025',
  role: { en: 'Backend Developer Intern', id: 'Magang Backend Developer' },
  company: 'Nama Perusahaan',
  logo: '/images/companies/nama-file.png',   // kosongkan ('') -> fallback inisial
  description: { en: '...', id: '...' },
  technologies: ['Laravel', 'MySQL'],        // boleh dikosongkan: []
},
```

- Tulis pengalaman dari yang **paling baru** ke **paling lama** (paling baru di atas).
- Tambah / hapus / ubah cukup dengan mengedit array `experiences`.
- `role` dan `description` boleh berupa `{ en, id }` (mengikuti language switcher)
  atau teks biasa.

### Interests — [src/data/interests.js](src/data/interests.js)

```js
{ en: 'Software Development', id: 'Pengembangan Perangkat Lunak' },
```

Tambah / hapus item langsung di array `interests`.

### Cara Mengganti Logo Perusahaan / Kampus

1. Siapkan file logo (PNG/SVG, disarankan latar transparan).
2. Simpan ke folder:
   - **Perusahaan**: `public/images/companies/`
   - **Kampus**: `public/images/education/`
3. Isi field `logo` pada file data dengan path `public`-nya, contoh:
   `logo: '/images/companies/bank-jatim.png'`.
4. Selesai — logo tampil `object-contain` (tidak terdistorsi) dengan ukuran
   ±44–48 px, tanpa perlu mengubah kode.

Kalau `logo` dibiarkan kosong (`''`) atau gambarnya gagal dimuat, otomatis
muncul **fallback** (inisial nama perusahaan / ikon toga untuk kampus),
sehingga tidak pernah ada gambar rusak.

> **Penting:** data experience yang ada sekarang hanyalah **contoh**.
> Ganti dengan pengalaman Anda yang sebenarnya, atau hapus objeknya.

---

## 6. Cara Menambahkan Project dan Dokumentasinya

Buka [src/data/projects.js](src/data/projects.js) dan tambahkan satu objek baru
ke dalam array `projects`:

```js
{
  id: 'nama-unik-proyek',
  title: 'Judul Proyek',
  category: 'software',        // 'software' | 'ai' | 'data' | 'iot'
  thumbnail: '/images/proyek.png', // atau URL gambar
  shortDescription: 'Deskripsi singkat 1–2 baris.',
  tech: ['React', 'Node.js'],
  details: {
    overview: '...',
    problem: '...',
    objectives: ['...'],
    features: ['...'],
    role: '...',
    process: ['Langkah 1', 'Langkah 2'],
    screenshots: [{ src: '/images/proyek-1.png', caption: 'Keterangan' }],
    challenges: [{ challenge: '...', solution: '...' }],
    results: ['...'],
    repo: 'https://github.com/username/repo', // boleh null
    demo: 'https://demo.example.com',         // boleh null
  },
},
```

Catatan:

- `category` menentukan filter dan label kategori di kartu proyek.
- `repo` dan `demo` boleh diisi `null` — tombol akan tampil nonaktif
  dengan teks "Not available yet".
- Untuk screenshot asli: buat folder `public/images/`, lalu isi
  `src: '/images/nama-file.png'`.

---

## 7. Cara Menambahkan Sertifikat dan Penghargaan

### Sertifikat — [src/data/certificates.js](src/data/certificates.js)

```js
{
  id: 'cert-4',
  name: 'Nama Sertifikat',
  issuer: 'Lembaga Penerbit',
  date: 'March 2025',
  image: '/images/sertifikat-4.png',
  credentialUrl: 'https://link-verifikasi', // boleh null
},
```

Klik kartu sertifikat akan membuka modal pratinjau berisi gambar dan detailnya.

### Penghargaan — [src/data/awards.js](src/data/awards.js)

```js
{
  id: 'award-3',
  title: 'Judul Penghargaan',
  organization: 'Nama Organisasi',
  year: '2025',
  description: 'Deskripsi singkat pencapaian.',
  image: null, // boleh null bila tidak ada dokumentasi gambar
},
```

Kalau array `awards` dikosongkan (`[]`), section Awards otomatis menampilkan
pesan bahwa data belum ditambahkan.

> **Penting:** data sertifikat, penghargaan, dan proyek yang ada sekarang
> hanyalah **contoh**. Jangan biarkan data yang tidak benar-benar Anda miliki.

---

## 8. Cara Mengubah Teknologi (Tech Stack)

Buka [src/data/techStack.js](src/data/techStack.js). Tambahkan item pada grup
yang sesuai:

```js
{ name: 'Kotlin', icon: 'kotlin' },
```

`icon` adalah slug dari [simpleicons.org](https://simpleicons.org).
Kalau slug salah atau ikon gagal dimuat, otomatis muncul badge huruf —
jadi tidak akan ada gambar rusak.

> Sengaja **tidak** memakai progress bar persentase, sesuai permintaan
> agar tidak menampilkan angka keterampilan yang tidak berdasar.

---

## 9. Cara Mengubah Teks & Bahasa (EN / ID)

Semua teks antarmuka ada di [src/i18n/translations.js](src/i18n/translations.js),
terbagi menjadi objek `en` (English) dan `id` (Bahasa Indonesia).

- Bahasa default: **English**
- Pilihan bahasa disimpan di `localStorage`, jadi tetap tersimpan saat
  halaman dimuat ulang.
- Tombol **EN / ID** ada di kanan navbar.

Saat mengubah teks, ubah pada **kedua** objek (`en` dan `id`) supaya
tampilan tetap konsisten.

---

## 10. Interaksi yang Sudah Berfungsi

- **Navbar** — sticky, menu aktif mengikuti posisi scroll, hamburger di mobile
  (buka/tutup, tertutup otomatis setelah menu dipilih dan dengan tombol `Esc`).
- **Smooth scrolling** ke setiap section.
- **Efek JARVIS** — klik foto profil di Hero untuk menjalankan animasi scan
  ±1,8 detik (garis scan, lingkaran HUD berputar, pulse, label status).
  Bisa diklik berulang kali.
- **Portfolio** — 4 tab (Projects, Certificates, Awards, Tech Stack) dengan
  filter kategori yang berfungsi.
- **Modal proyek** — dokumen lengkap, scroll sendiri, ditutup dengan tombol X,
  tombol `Esc`, atau klik di luar area; klik di dalam dokumen tidak menutup modal;
  background halaman terkunci saat modal terbuka.
- **Responsive** untuk desktop, laptop, tablet, dan mobile tanpa horizontal scroll.

---

## 11. Cara Deploy ke Vercel

Project ini adalah Single Page Application (semua section berada di satu
halaman dan memakai anchor `#section`, tanpa React Router), sehingga tidak ada
masalah 404 saat halaman di-refresh.

### Lewat dashboard Vercel

1. Push project ini ke repository GitHub.
2. Buka [vercel.com](https://vercel.com) → **Add New Project** → pilih repo Anda.
3. Vercel otomatis mendeteksi Vite. Pastikan pengaturannya:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Klik **Deploy**.

### Lewat Vercel CLI

```bash
npm i -g vercel
vercel          # deploy preview
vercel --prod   # deploy produksi
```

---

## 12. Catatan Teknis

- Tanpa Three.js, tanpa background video, tanpa animasi berat —
  seluruh efek HUD memakai CSS animation.
- Gambar di luar hero memakai `loading="lazy"`.
- Ikon antarmuka memakai `lucide-react`. Ikon **brand** (GitHub, LinkedIn, dan
  logo teknologi) dimuat sebagai SVG ringan dari CDN icon publik
  `cdn.simpleicons.org`, karena Lucide React tidak lagi menyediakan ikon brand.
  Semua ikon tersebut punya fallback badge huruf bila gagal dimuat.
- Hormat pada `prefers-reduced-motion`: animasi otomatis dinonaktifkan bagi
  pengguna yang mematikannya di sistem operasi.
