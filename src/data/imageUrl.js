/**
 * Helper untuk membuat URL gambar.
 * Semua gambar di folder `src/data` memakai helper ini.
 *
 * CARA MENGGANTI GAMBAR DENGAN SCREENSHOT ASLI:
 *   thumbnail: '/images/proyek-1.png'   // taruh file di folder `public/images/`
 */
export function imageUrl(prompt, size = 'landscape_16_9') {
  return `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
    prompt,
  )}&image_size=${size}`
}
