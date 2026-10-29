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
    title: 'Sample Award Title', // CONTOH - ganti dengan penghargaan asli
    organization: 'Sample Organization', // CONTOH
    year: '2025', // CONTOH
    description:
      'Short description of the achievement and what was done to earn it. Replace this text with your own.',
    image: imageUrl(
      'a trophy and medal arrangement on a dark surface with cyan rim lighting, minimal elegant award photography, high detail',
      'landscape_4_3',
    ),
  },
  {
    id: 'award-2',
    title: 'Sample Achievement Title', // CONTOH
    organization: 'Sample Organization', // CONTOH
    year: '2024', // CONTOH
    description:
      'Short description of the achievement. Replace this text with your own.',
    image: null, // boleh null bila tidak ada gambar
  },
]
