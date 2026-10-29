
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

export const certificates = [
  {
    id: 'cert-laravel',

    name: 'Laravel Web Development',

    issuer: 'Sanbercode',

    date: '2025',

    description: {
      en: 'Learned Laravel web development, including MVC, database migrations, Eloquent ORM, CRUD operations, and project deployment.',
      id: 'Mempelajari pengembangan web menggunakan Laravel, meliputi MVC, database migration, Eloquent ORM, CRUD, dan deployment project.',
    },

    tags: [
      'Laravel',
      'PHP',
      'MySQL',
      'CRUD',
      'Git',
    ],

    image: imageUrl(
      'professional Laravel web development certificate, landscape format, clean modern certificate design',
      'landscape_4_3',
    ),

    credentialUrl: null,
  },

  {
    id: 'cert-mobile-developer',

    name: 'Mobile Developer Project-Based Internship',

    issuer: 'Rakamin x Bank Mandiri',

    date: 'August – September 2026',

    description: {
      en: 'Completed a project-based internship focused on mobile development, API integration, version control, and iOS development fundamentals.',
      id: 'Mengikuti program internship berbasis proyek dengan fokus pada mobile development, integrasi API, version control, dan dasar pengembangan iOS.',
    },

    tags: [
      'Mobile Development',
      'API',
      'GitLab',
      'iOS',
    ],

    image: imageUrl(
      'professional mobile developer internship certificate, landscape format, clean modern certificate design',
      'landscape_4_3',
    ),

    credentialUrl: null,
  },

  {
    id: 'cert-python',

    name: 'Programming Essentials in Python',

    issuer: 'Cisco Networking Academy',

    date: '2025',

    description: {
      en: 'Studied Python programming fundamentals, including variables, data types, conditional statements, loops, functions, and basic problem-solving.',
      id: 'Mempelajari dasar pemrograman Python, termasuk variabel, tipe data, percabangan, perulangan, fungsi, dan pemecahan masalah dasar.',
    },

    tags: [
      'Python',
      'Programming',
      'OOP',
      'Problem Solving',
    ],

    image: imageUrl(
      'professional Python programming certificate, landscape format, clean modern certificate design',
      'landscape_4_3',
    ),

    credentialUrl: null,
  },

  {
    id: 'cert-sql',

    name: 'Intermediate SQL',

    issuer: 'DataCamp',

    date: '2026',

    description: {
      en: 'Practiced SQL queries for data analysis, including filtering, aggregation, joins, subqueries, and working with relational databases.',
      id: 'Mempelajari SQL untuk analisis data, meliputi filtering, aggregation, joins, subquery, dan pengolahan database relasional.',
    },

    tags: [
      'SQL',
      'Database',
      'Data Analysis',
      'Query',
    ],

    image: imageUrl(
      'professional SQL data analysis certificate, landscape format, clean modern certificate design',
      'landscape_4_3',
    ),

    credentialUrl: null,
  },

  {
    id: 'cert-chinese',

    name: 'Chinese for HSK 1',

    issuer: 'Peking University',

    date: 'February 2026',

    description: {
      en: 'Learned basic Mandarin vocabulary, pronunciation, greetings, and simple expressions for everyday communication.',
      id: 'Mempelajari kosakata dasar Mandarin, pelafalan, salam, dan ungkapan sederhana untuk komunikasi sehari-hari.',
    },

    tags: [
      'Chinese',
      'HSK 1',
      'Language Learning',
    ],

    image: imageUrl(
      'professional Chinese language course certificate, landscape format, clean modern certificate design',
      'landscape_4_3',
    ),

    credentialUrl: null,
  },
]
