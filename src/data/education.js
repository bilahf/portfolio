/**
 * ============================================================
 *  DATA PENDIDIKAN
 * ============================================================
 *  CARA MENAMBAH PENDIDIKAN:
 *  Copy satu objek di bawah, tempel di akhir array, lalu ubah isinya.
 *  Tidak perlu menyentuh komponen.
 *
 *  Keterangan field:
 *  - degree      : jenjang / gelar. Boleh teks biasa, atau
 *                  { en: '...', id: '...' } agar ikut berubah saat bahasa diganti.
 *  - institution : nama kampus / sekolah (biasanya sama untuk kedua bahasa).
 *  - period      : tahun atau rentang tahun.
 *  - gpa         : IPK. Kosongkan ('') kalau tidak ingin ditampilkan.
 *  - logo        : logo kampus. Taruh file di  public/images/education/
 *                  lalu tulis  logo: '/images/education/nama-file.png'
 *                  Kalau belum ada, kosongkan ('') -> otomatis muncul ikon toga.
 */
export const education = [
  {
    id: 1,
    degree: {
      en: 'Bachelor of Informatics Engineering',
      id: 'Sarjana Teknik Informatika',
    },
    institution: 'Universitas Muhammadiyah Gresik',
    period: '2022 – 2026',
    gpa: '3.92 / 4.00',
    logo: '/images/education/university.png', // TODO: ganti dengan logo kampus asli
  },
]
