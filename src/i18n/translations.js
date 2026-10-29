/**
 * ============================================================
 *  KAMUS BAHASA (EN / ID)
 * ============================================================
 *  Seluruh teks antarmuka website ada di file ini.
 *  - `en` = English (bahasa default)
 *  - `id` = Bahasa Indonesia
 *
 *  CARA MENGUBAH TEKS: ubah nilai pada kedua bagian (en dan id)
 *  agar tampilan tetap konsisten saat bahasa diganti.
 *
 *  CATATAN: isi proyek/sertifikat/penghargaan TIDAK ada di sini,
 *  melainkan di folder `src/data/` karena itu konten milik Anda.
 */
export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      portfolio: 'Portfolio',
      contact: 'Contact',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      switchTo: 'Ganti ke Bahasa Indonesia',
      brandRole: 'Informatics Engineering',
    },
    hero: {
      greeting: "Hello, I'm",
    //   headline: 'Turning Ideas Into Reality',
      description:
        'An Informatics Engineering graduate passionate about software development, AI automation, and building practical digital solutions.',
      viewPortfolio: 'View My Portfolio',
      contactMe: 'Contact Me',
      scanHint: 'Click photo to scan',
      scanning: 'SCANNING...',
      scanned: 'PROFILE SCANNED',
      online: 'SYSTEM ONLINE',
      photoAlt: 'Profile photo',
      statsLabel: 'Core focus',
      stats: ['Software Development', 'AI & Automation', 'IoT & Robotics'],
      statusLabel: 'Status',
      statusValue: 'Open to opportunities',
    },
    about: {
      label: 'About',
      title: 'About Me',
      subtitle: 'A little about my background, experience, and interests.',
      educationTitle: 'Education',
      experienceTitle: 'Experience',
      interestsTitle: 'Interests',
      // Label informasi di dalam About
      degree: 'Degree',
      university: 'University',
      gpa: 'GPA',
      period: 'Period',
      position: 'Position',
      company: 'Company',
      description: 'Description',
    },
    portfolio: {
      label: 'Portfolio',
      title: 'Portfolio',
      subtitle: 'Projects, certificates, awards and the technologies I work with.',
      tabs: {
        projects: 'Projects',
        certificates: 'Courses & Certificates',
        awards: 'Awards',
        techStack: 'Tech Stack',
      },
      filterLabel: 'Filter by category',
      filterAll: 'All',
      categories: {
        software: 'Software Development',
        ai: 'AI & Automation',
        data: 'Data & Analytics',
        iot: 'IoT & Robotics',
      },
      viewDetails: 'View Details',
      noProjects: 'No projects in this category yet.',
      projectCount: 'projects shown',
    },
    projectModal: {
      overview: 'Project Overview',
      problem: 'Problem Statement',
      objectives: 'Project Objectives',
      features: 'Features',
      role: 'My Role',
      techStack: 'Technology Stack',
      process: 'Development Process',
      screenshots: 'Project Screenshots',
      challenges: 'Challenges & Solutions',
      challenge: 'Challenge',
      solution: 'Solution',
      results: 'Results / Outcomes',
      repo: 'GitHub Repository',
      demo: 'Live Demo',
      notAvailable: 'Not available yet',
      close: 'Close',
    },
    certificates: {
      issuedBy: 'Issued by',
      completed: 'Completed',
      credential: 'View Credential',
      preview: 'Certificate Preview',
      noCredential: 'No credential link',
    },
    awards: {
      year: 'Year',
      organization: 'Organization',
      viewImage: 'View Image',
      empty: 'Award data has not been added yet.',
    },
    techStack: {
      note: 'Technologies I have used in coursework, personal projects and internships.',
      groups: {
        programming: 'Programming Languages',
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Database',
        tools: 'Tools & Platforms',
        ai: 'AI & Automation',
      },
    },
    contact: {
      label: 'Contact',
      title: 'Get In Touch',
      subtitle:
        'Feel free to reach out for collaboration, internships or full-time opportunities.',
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      location: 'Location',
      connect: "Let's Connect",
    },
    thanks: {
      title: 'Thank You for Visiting',
      description:
        "Thank you for taking the time to explore my portfolio. I'm always open to learning, collaborating, and creating meaningful digital solutions.",
      backHome: 'Back to Home',
    },
    footer: {
      builtWith: 'Built with React, Vite & Tailwind CSS',
    },
  },

  id: {
    nav: {
      home: 'Beranda',
      about: 'Tentang',
      portfolio: 'Portofolio',
      contact: 'Kontak',
      openMenu: 'Buka menu',
      closeMenu: 'Tutup menu',
      switchTo: 'Switch to English',
      brandRole: 'Teknik Informatika',
    },
    hero: {
      greeting: 'Halo, saya',
      headline: 'Mewujudkan Ide Menjadi Nyata',
      description:
        'Lulusan Teknik Informatika yang antusias pada pengembangan perangkat lunak, otomasi AI, dan pembuatan solusi digital yang praktis.',
      viewPortfolio: 'Lihat Portofolio',
      contactMe: 'Hubungi Saya',
      scanHint: 'Klik foto untuk scan',
      scanning: 'MEMINDAI...',
      scanned: 'PROFIL TERPINDAI',
      online: 'SISTEM AKTIF',
      photoAlt: 'Foto profil',
      statsLabel: 'Fokus utama',
      stats: ['Pengembangan Perangkat Lunak', 'AI & Otomasi', 'Analitik Data'],
      statusLabel: 'Status',
      statusValue: 'Terbuka untuk peluang',
    },
    about: {
      label: 'Tentang',
      title: 'Tentang Saya',
      subtitle: 'Sedikit cerita tentang latar belakang, pengalaman, dan minat saya.',
      educationTitle: 'Pendidikan',
      experienceTitle: 'Pengalaman',
      interestsTitle: 'Minat',
      // Label informasi di dalam About
      degree: 'Jenjang',
      university: 'Universitas',
      gpa: 'IPK',
      period: 'Periode',
      position: 'Posisi',
      company: 'Perusahaan',
      description: 'Deskripsi',
    },
    portfolio: {
      label: 'Portofolio',
      title: 'Portofolio',
      subtitle: 'Proyek, sertifikat, penghargaan, dan teknologi yang saya gunakan.',
      tabs: {
        projects: 'Proyek',
        certificates: 'Sertifikat',
        awards: 'Penghargaan',
        techStack: 'Tech Stack',
      },
      filterLabel: 'Filter berdasarkan kategori',
      filterAll: 'Semua',
      categories: {
        software: 'Pengembangan Perangkat Lunak',
        ai: 'AI & Otomasi',
        data: 'Data & Analitik',
        iot: 'IoT & Robotika',
      },
      viewDetails: 'Lihat Detail',
      noProjects: 'Belum ada proyek pada kategori ini.',
      projectCount: 'proyek ditampilkan',
    },
    projectModal: {
      overview: 'Ringkasan Proyek',
      problem: 'Permasalahan',
      objectives: 'Tujuan Proyek',
      features: 'Fitur',
      role: 'Peran Saya',
      techStack: 'Teknologi yang Digunakan',
      process: 'Proses Pengembangan',
      screenshots: 'Dokumentasi Gambar',
      challenges: 'Tantangan & Solusi',
      challenge: 'Tantangan',
      solution: 'Solusi',
      results: 'Hasil / Pencapaian',
      repo: 'Repositori GitHub',
      demo: 'Demo Langsung',
      notAvailable: 'Belum tersedia',
      close: 'Tutup',
    },
    certificates: {
      issuedBy: 'Diterbitkan oleh',
      completed: 'Selesai',
      credential: 'Lihat Kredensial',
      preview: 'Pratinjau Sertifikat',
      noCredential: 'Tanpa link kredensial',
    },
    awards: {
      year: 'Tahun',
      organization: 'Organisasi',
      viewImage: 'Lihat Gambar',
      empty: 'Data penghargaan belum ditambahkan.',
    },
    techStack: {
      note: 'Teknologi yang saya gunakan pada perkuliahan, proyek pribadi, dan magang.',
      groups: {
        programming: 'Bahasa Pemrograman',
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Basis Data',
        tools: 'Tools & Platform',
        ai: 'AI & Otomasi',
      },
    },
    contact: {
      label: 'Kontak',
      title: 'Mari Terhubung',
      subtitle:
        'Silakan hubungi saya untuk kolaborasi, magang, atau peluang kerja penuh waktu.',
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      location: 'Lokasi',
      connect: 'Mari Terhubung',
    },
    thanks: {
      title: 'Terima Kasih Telah Berkunjung',
      description:
        'Terima kasih telah meluangkan waktu untuk melihat portofolio saya. Saya selalu terbuka untuk belajar, berkolaborasi, dan menciptakan solusi digital yang bermanfaat.',
      backHome: 'Kembali ke Beranda',
    },
    footer: {
      builtWith: 'Dibuat dengan React, Vite & Tailwind CSS',
    },
  },
}

export const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'id', label: 'ID' },
]

export const DEFAULT_LANGUAGE = 'en'
