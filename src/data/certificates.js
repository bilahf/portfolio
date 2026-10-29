import { imageUrl } from './imageUrl'

/**
 * ============================================================
 *  DATA SERTIFIKAT
 * ============================================================
 *  CARA MENAMBAH SERTIFIKAT:
 *  Copy satu objek di bawah lalu ubah isinya.
 *
 *  - `image`   : preview sertifikat. Ganti dengan hasil scan/foto asli Anda,
 *                contoh: '/images/sertifikat-1.png' (taruh di folder public/images/).
 *  - `credentialUrl` : link verifikasi sertifikat (boleh null kalau tidak ada).
 *
 *  SEMUA DATA DI BAWAH ADALAH CONTOH. Ganti dengan sertifikat asli Anda.
 */
export const certificates = [
  {
    id: 'cert-1',
    name: 'Sample Certificate Name', // CONTOH - ganti dengan nama sertifikat asli
    issuer: 'Sample Issuing Organization', // CONTOH
    date: '2025', // format bebas, contoh: 'March 2025'
    image: imageUrl(
      'a framed professional certificate of completion on a dark background, cyan and blue accent design, clean minimal certificate layout, high detail',
      'landscape_4_3',
    ),
    credentialUrl: null, // TODO: isi link kredensial bila ada
  },
  {
    id: 'cert-2',
    name: 'Sample Certificate Name', // CONTOH
    issuer: 'Sample Issuing Organization', // CONTOH
    date: '2024', // CONTOH
    image: imageUrl(
      'a professional online course certificate with dark navy and cyan design elements, minimal modern certificate mockup, high detail',
      'landscape_4_3',
    ),
    credentialUrl: null, // TODO
  },
  {
    id: 'cert-3',
    name: 'Sample Certificate Name', // CONTOH
    issuer: 'Sample Issuing Organization', // CONTOH
    date: '2024', // CONTOH
    image: imageUrl(
      'a workshop attendance certificate with elegant dark theme and cyan accent lines, minimal professional certificate design, high detail',
      'landscape_4_3',
    ),
    credentialUrl: null, // TODO
  },
]
