/**
 * Mengambil teks sesuai bahasa aktif dari sebuah field data.
 *
 * Field pada file data boleh ditulis dengan dua cara:
 *   1. Teks biasa:  role: 'Web Developer'
 *   2. Dua bahasa:  role: { en: 'Web Developer', id: 'Pengembang Web' }
 *
 * Kalau memakai bentuk objek { en, id }, teks otomatis berubah
 * saat pengunjung mengganti bahasa di navbar.
 *
 * @param {string | {en?: string, id?: string}} value isi field
 * @param {'en' | 'id'} language bahasa aktif
 */
export function pick(value, language) {
  if (value && typeof value === 'object') {
    return value[language] ?? value.en ?? ''
  }
  return value ?? ''
}
