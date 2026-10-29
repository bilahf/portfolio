import { useState } from 'react'

/**
 * Kotak logo perusahaan / kampus.
 *
 * - Memakai gambar asli kalau `src` diisi dan berhasil dimuat.
 * - `object-contain` supaya logo tidak terdistorsi.
 * - Kalau gambar gagal dimuat atau `src` kosong, otomatis memakai fallback:
 *   ikon (kalau diberikan) atau inisial nama.
 *
 * @param {string} src        path / URL logo, contoh '/images/companies/foo.png'
 * @param {string} name       nama perusahaan / kampus (untuk alt & inisial)
 * @param {object} icon       komponen ikon lucide sebagai fallback (opsional)
 * @param {string} sizeClass  ukuran kotak logo
 */
export default function EntityLogo({ src, name, icon: Icon, sizeClass = 'h-12 w-12' }) {
  const [failed, setFailed] = useState(false)
  const hasImage = Boolean(src) && !failed

  // Inisial dari maksimal dua kata pertama, contoh "Company Name" -> "CN"
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join('')

  return (
    <span
      className={`flex ${sizeClass} flex-none items-center justify-center overflow-hidden rounded-md border border-arc/20 bg-navy-950 p-1.5`}
    >
      {hasImage ? (
        <img
          src={src}
          alt={`${name} logo`}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-contain"
        />
      ) : Icon ? (
        <Icon size={22} className="text-arc/70" />
      ) : (
        <span className="font-display text-sm font-bold tracking-wider text-arc-soft">
          {initials}
        </span>
      )}
    </span>
  )
}
