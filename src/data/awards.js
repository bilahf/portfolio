import { imageUrl } from './imageUrl'

/**
 * ============================================================
 *  DATA PENGHARGAAN / PENCAPAIAN
 * ============================================================
 *  PENTING: Jangan mengisi penghargaan yang tidak benar-benar Anda dapatkan.
 *  Data di bawah hanyalah CONTOH struktur. Kosongkan array ini ([]) bila
 *  Anda belum memiliki penghargaan — website akan menampilkan pesan kosong.
 *
 *  - `image` boleh null kalau tidak ada dokumentasi gambar.
 *    Kalau ada, ganti dengan file asli: '/images/penghargaan-1.png'
 */
export const awards = [
  {
    id: 'award-1',
    title: 'Best Graduate - Informatics Engineering Program',
    organization: 'Universitas Muhammadiyah Gresik',
    year: '2026',
    description:
      'Recognized as the Best Graduate of the Informatics Engineering Program for outstanding academic performance.',
    image: '/images/pgm.png',
  },
  {
    id: 'award-2',
    title: 'Best Graduate - Faculty of Engineering',
    organization: 'Universitas Muhammadiyah Gresik',
    year: '2026',
    description:
      'Recognized as one of the Best Graduates of the Faculty of Engineering for academic excellence.',
    image: '/images/piagam.jpeg',
  },
  {
    id: 'award-3',
    title: 'Top 100 - SQL Hackathon',
    organization: 'DQLAB',
    year: '2026',
    description:
      'Ranked among the Top 100 participants in a SQL Hackathon focused on sales analysis and business insights.',
    image: '/images/srtf.png',
  },
];