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
    period: 'Month Year – Month Year', // CONTOH
    role: {
      en: 'Your Role (placeholder)',
      id: 'Posisi Anda (contoh)',
    },
    company: 'Company / Organization Name', // CONTOH
    logo: '/images/companies/company-name.png', // TODO: ganti dengan logo asli
    description: {
      en: 'Replace this with a short description of your responsibilities and achievements.',
      id: 'Ganti teks ini dengan deskripsi singkat tanggung jawab dan pencapaian Anda.',
    },
    technologies: ['Technology 1', 'Technology 2'],
  },
  {
    id: 2,
    period: 'Month Year – Month Year', // CONTOH
    role: {
      en: 'Internship Role (placeholder)',
      id: 'Posisi Magang (contoh)',
    },
    company: 'Company / Organization Name', // CONTOH
    logo: '', // dikosongkan -> memakai fallback inisial
    description: {
      en: 'Describe the tasks you handled and what you learned during the internship.',
      id: 'Jelaskan tugas yang Anda kerjakan dan hal yang Anda pelajari selama magang.',
    },
    technologies: [],
  },
]
