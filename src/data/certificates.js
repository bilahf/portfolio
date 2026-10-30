
import { imageUrl } from './imageUrl'

/**
 * ============================================================
 * DATA CERTIFICATES
 * ============================================================
 *
 * Cara menambahkan sertifikat:
 * 1. Copy salah satu objek certificate.
 * 2. Ubah name, issuer, date, description, dan tags.
 * 3. Ganti image dengan gambar sertifikat asli.
 * 4. Isi credentialUrl jika memiliki link verifikasi.
 *
 * description:
 * Penjelasan singkat materi atau skill yang dipelajari.
 *
 * tags:
 * Teknologi atau skill yang relevan dengan sertifikat.
 *
 * image:
 * Gunakan path gambar dari folder public.
 *
 * credentialUrl:
 * Link verifikasi sertifikat atau null.
 */


/**
 * ============================================================
 * DATA CERTIFICATES
 * ============================================================
 *
 * name        : Nama sertifikat
 * issuer      : Organisasi penerbit
 * date        : Tanggal penerbitan
 * description  : Penjelasan singkat sertifikat
 * tags        : Skills / technologies learned
 * image       : Path gambar sertifikat
 * credentialUrl: Link verifikasi sertifikat
 */

export const certificates = [
  
{
    id: 'cert-iot-fundamentals',

    name: 'IoT Fundamentals & Practical Projects',

    issuer: 'GUINEX Academy',

    date: '2026',

    
description: {
  en: 'Learned the fundamentals of IoT, basic electronics, Arduino programming, and ESP32 development. Gained basic knowledge of sensors, actuators, Wi-Fi connectivity, Access Point mode, web servers, and communication between devices.',
  id: 'Mempelajari dasar-dasar IoT, elektronika, pemrograman Arduino, dan pengembangan ESP32. Memahami dasar penggunaan sensor, aktuator, konektivitas Wi-Fi, mode Access Point, web server, dan komunikasi antarperangkat.',
},


    tags: [
      'IoT',
      'Arduino',
      'ESP32',
      'C++',
      'Wi-Fi Access Point',
      'Web Server',
      'HTTP',
      'Robot Car 2WD',
      'Motor Control',
    ],

    image: '/images/iot.png',

    credentialUrl: '',
},
{
    id: 'cert-laravel-13-deploy',

    name: 'Laravel 13 for Web Developer Beginner & Deploy Docker VPS',

    issuer: 'BuildWithAngga',

    date: '2026',

    description: {
      en: 'Learned Laravel 13 web development by building a Point of Sale (POS) and Inventory Management System. Practiced application deployment using Docker and Docker Compose, Nginx as a web server, VPS server management, GitHub version control, custom domain and DNS configuration, and HTTPS/SSL implementation.',
      id: 'Mempelajari pengembangan web menggunakan Laravel 13 melalui pembuatan aplikasi Point of Sale (POS) dan Inventory Management System. Mempraktikkan deployment aplikasi menggunakan Docker dan Docker Compose, konfigurasi Nginx sebagai web server, pengelolaan VPS, version control menggunakan GitHub, konfigurasi domain dan DNS, serta penerapan HTTPS/SSL.',
    },

    tags: [
      'Laravel 13',
      'PHP',
      'MySQL',
      'Blade',
      'Tailwind CSS',
      'Vite',
      'Docker',
      'Docker Compose',
      'Nginx',
      'VPS',
      'GitHub',
      'Domain & DNS',
      'HTTPS/SSL',
    ],

    image: '/images/laravel13.png',

    credentialUrl: '',
},

  {
    id: 'cert-servicenow-flows',

    name: 'ServiceNow Micro-Certification - Flows',

    issuer: 'ServiceNow',

    date: '2026',

    description: {
      en: 'Learned workflow automation using ServiceNow Flow Designer, including flow logic, process automation, and no-code workflow development.',
      id: 'Mempelajari otomatisasi workflow menggunakan ServiceNow Flow Designer, termasuk flow logic, process automation, dan pengembangan workflow tanpa coding.',
    },

    tags: [
      'ServiceNow',
      'Flow Designer',
      'Workflow Automation',
      'Process Automation',
      'No-Code Development',
    ],

    image: '/images/flow.png',

    credentialUrl:
      'https://www.credly.com/badges/1912e5bc-a727-4060-8c2f-79c1d76206bc/linked_in_profile',
  },

  {
    id: 'cert-vibe-coding-ai-agent',

    name: 'Vibe Coding and AI Agent',

    issuer: 'Leverify',

    date: 'March – May 2026',

    description: {
      en: 'Explored AI agent development and workflow automation using AI tools, prompt engineering, and integrations with automation platforms.',
      id: 'Mempelajari pengembangan AI agent dan otomatisasi workflow menggunakan AI tools, prompt engineering, serta integrasi dengan platform otomatisasi.',
    },

    tags: [
      'AI Agent',
      'AI Automation',
      'Prompt Engineering',
      'n8n',
      'Zapier',
      'Make.com',
      'AI Integration',
    ],

    image: '/images/aivibe.png',

    credentialUrl:
      'https://drive.google.com/file/d/1zwBbGUJitF--k-JxYWPY2yhJiU1zrA6z/view?usp=drive_link',
  },

  {
    id: 'cert-laravel',

    name: 'Laravel Web Development',

    issuer: 'Sanbercode',

    date: 'September 2024',

    description: {
      en: 'Learned Laravel web development, including MVC architecture, database management, REST API development, CRUD operations, and authentication.',
      id: 'Mempelajari pengembangan web menggunakan Laravel, meliputi MVC architecture, pengelolaan database, REST API, CRUD, dan authentication.',
    },

    tags: [
      'Laravel',
      'PHP',
      'MVC',
      'REST API',
      'MySQL',
      'CRUD',
      'Authentication',
    ],

    image: '/images/laravel.png',

    credentialUrl:
      'https://sanbercode.com/certificate/in/4ed86d9c-7aeb-4114-bd31-66ac921d6d57',
  },

  {
    id: 'cert-vibe-coding',

    name: 'Vibe Coding',

    issuer: 'NDA Digital Skills',

    date: 'July 2026',

    description: {
      en: 'Explored AI-assisted web and mobile development using AI-powered development tools, including WordPress, Kimi AI, and Lovable.',
      id: 'Mempelajari pengembangan web dan mobile berbantuan AI menggunakan AI-powered development tools, termasuk WordPress, Kimi AI, dan Lovable.',
    },

    tags: [
      'AI-Assisted Development',
      'Web Development',
      'Mobile Development',
      'WordPress',
      'Kimi AI',
      'Lovable',
    ],

    image: '/images/vibe.png',

    credentialUrl:
      'https://drive.google.com/file/d/1BSw9rsF2FC6e1DI3TKOLDQQ1s_M5xRj1/view?usp=drive_link',
  },

  {
    id: 'cert-asean-data-science',

    name: 'ASEAN Data Science Explorers 2026: SAP Analytics Cloud',

    issuer: 'ASEAN Foundation & SAP',

    date: 'August 2026',

    description: {
      en: 'Learned data analysis and business intelligence using SAP Analytics Cloud, including data modeling, visualization, time-series forecasting, and ad-hoc analysis.',
      id: 'Mempelajari analisis data dan business intelligence menggunakan SAP Analytics Cloud, meliputi data modeling, visualisasi, time-series forecasting, dan ad-hoc analysis.',
    },

    tags: [
      'SAP Analytics Cloud',
      'Data Modeling',
      'Data Visualization',
      'Time-Series Forecasting',
      'Business Intelligence',
      'Data Analysis',
    ],

    image: '/images/asean.png',

    credentialUrl:
      'https://drive.google.com/file/d/xxxxxx/view?usp=drive_link',
  },

  {
    id: 'cert-chinese-hsk1',

    name: 'Chinese for HSK 1',

    issuer: 'Coursera',

    date: 'February 2026',

    description: {
      en: 'Learned basic Mandarin vocabulary, grammar, pronunciation, and simple conversations for everyday communication at the HSK 1 level.',
      id: 'Mempelajari kosakata dasar Mandarin, grammar, pelafalan, dan percakapan sederhana untuk komunikasi sehari-hari pada tingkat HSK 1.',
    },

    tags: [
      'Mandarin',
      'HSK 1',
      'Basic Vocabulary',
      'Grammar',
      'Conversation',
    ],

    image: '/images/china.png',

    credentialUrl:
      'https://coursera.org/share/b3a2efaaa782be1dd273b7de9b459cf2',
  },

  {
    id: 'cert-exploratory-data-analysis',

    name: 'Exploratory Data Analysis in Python',

    issuer: 'DataCamp',

    date: 'February 2026',

    description: {
      en: 'Learned exploratory data analysis using Python, including data cleaning, Pandas, statistical analysis, and data visualization to understand datasets.',
      id: 'Mempelajari exploratory data analysis menggunakan Python, meliputi data cleaning, Pandas, analisis statistik, dan visualisasi data untuk memahami dataset.',
    },

    tags: [
      'Python',
      'Pandas',
      'Data Analysis',
      'Data Cleaning',
      'Data Visualization',
      'Statistics',
    ],

    image: '/images/python.png',

    credentialUrl:
      'https://drive.google.com/file/d/1QM0Wx5Nz9yqfdLEObx46WhyElto1_j6Y/view?usp=drive_link',
  },
]
