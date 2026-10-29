/**
 * ============================================================
 *  DATA PENGALAMAN (kerja / magang / organisasi)
 * ============================================================
 *  CARA MENAMBAH PENGALAMAN:
 *  Copy satu objek di bawah, tempel di akhir array, lalu ubah isinya.
 *  Tidak perlu menyentuh komponen.
 *
 *  URUTAN: tulis dari yang PALING BARU ke yang PALING LAMA.
 *
 *  Keterangan field:
 *  - period       : contoh 'Jan 2025 – Apr 2025'
 *  - role         : posisi. Boleh teks biasa, atau { en: '...', id: '...' }
 *  - company      : nama perusahaan / organisasi
 *  - logo         : logo perusahaan. Taruh file di  public/images/companies/
 *                   lalu tulis  logo: '/images/companies/nama-file.png'
 *                   Kalau belum ada, kosongkan ('') -> otomatis muncul
 *                   inisial nama perusahaan dalam kotak kecil.
 *  - description  : deskripsi singkat. Boleh { en: '...', id: '...' }
 *  - technologies : daftar teknologi (boleh dikosongkan: [])
 *
 *  PENTING: isi di bawah masih CONTOH (placeholder).
 *  Ganti dengan pengalaman Anda yang sebenarnya, atau hapus objeknya
 *  kalau memang belum ada.
 */
export const experiences = [
  {
    id: 1,
    period: 'May 2025 – July 2025',
    role: {
      en: 'Marketing Division Intern',
      id: 'Magang Divisi Pemasaran',
    },
    company: 'PT PLN PERSERO UP3 GRESIK',
    logo: '/images/companies/logo-pln.png',
    description: {
      en: 'Developed a Flutter-based marketing target system, managed asset documentation using Maximo, and processed operational data using Excel.',
      id: 'Mengembangkan sistem target pemasaran berbasis Flutter, mengelola dokumentasi aset menggunakan Maximo, dan mengolah data operasional menggunakan Excel.',
    },
    technologies: ['Flutter', 'Google Sheets', 'Maximo', 'Microsoft Excel'],
  },
  {
    id: 2,
    period: 'August 2025 – October 2025',
    role: {
      en: 'Electronic-Based Government System Division Intern',
      id: 'Magang Divisi Sistem Pemerintahan Berbasis Elektronik',
    },
    company: 'DISKOMINFO KABUPATEN GRESIK',
    logo: '/images/companies/grsk.png',
    description: {
      en: 'Prepared system documentation, software requirements specifications, and user manuals to support application development and system operations.',
      id: 'Menyusun dokumentasi sistem, spesifikasi kebutuhan perangkat lunak, dan buku panduan pengguna untuk mendukung pengembangan serta operasional aplikasi.',
    },
    technologies: ['System Documentation', 'SKPL', 'DAPL', 'Microsoft Office'],
  },
  {
    id: 3,
    period: 'Project-Based Internship',
    role: {
      en: 'Mobile Apps Developer',
      id: 'Mobile Apps Developer',
    },
    company: 'Bank Mandiri',
    logo: '/images/companies/mandiri.png',
    description: {
      en: 'Developed an Android news application using Kotlin and Jetpack Compose, integrating REST APIs and implementing infinite scrolling for seamless news browsing.',
      id: 'Mengembangkan aplikasi berita Android menggunakan Kotlin dan Jetpack Compose, mengintegrasikan REST API, serta menerapkan infinite scrolling untuk pengalaman membaca berita yang lebih nyaman.',
    },
    technologies: [
      'Kotlin',
      'Jetpack Compose',
      'Retrofit',
      'REST API',
      'Kotlin Coroutines',
    ],
  },
  {
    id: 4,
    period: '2023 – 2025',
    role: {
      en: 'Laboratory Teaching Assistant',
      id: 'Asisten Praktikum Pemrograman',
    },
    company: 'Universitas Muhammadiyah Gresik',
    logo: '/images/companies/umg.png',
    description: {
      en: 'Assisted programming and web development courses through practical sessions, programming guidance, and student mentoring.',
      id: 'Mendukung mata kuliah pemrograman dan pengembangan web melalui praktikum, bimbingan coding, dan pendampingan mahasiswa.',
    },
    technologies: ['Java', 'HTML', 'CSS', 'JavaScript', 'PHP', 'Laravel'],
  },
  {
    id: 5,
    period: 'September 2023 – August 2024',
    role: {
      en: 'General Secretary',
      id: 'Sekretaris Umum',
    },
    company: 'HIMATIF UM Gresik',
    logo: '/images/companies/himatif.png',
    description: {
      en: 'Managed organizational administration, documentation, internal communication, and member development activities.',
      id: 'Mengelola administrasi organisasi, dokumentasi, komunikasi internal, dan kegiatan pengembangan anggota.',
    },
    technologies: [
      'Microsoft Office',
      'Microsoft Excel',
      'Documentation',
      'Administrative Management',
    ],
  },
];
