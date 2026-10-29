import { useState } from 'react'

/**
 * Ikon brand (GitHub, LinkedIn, dan logo teknologi lain) dari Simple Icons.
 * Lucide React tidak lagi menyediakan ikon brand, karena itu ikon brand
 * dimuat sebagai SVG ringan dari CDN icon publik.
 *
 * Kalau ikon gagal dimuat, otomatis diganti badge huruf supaya
 * tidak pernah muncul gambar rusak.
 *
 * @param {string} slug  nama ikon di simpleicons.org, contoh 'github', 'react'
 * @param {string} name  nama cadangan untuk badge huruf
 */
export default function BrandIcon({ slug, name, size = 16, className = '' }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <span
        aria-hidden="true"
        style={{ width: size, height: size, fontSize: size * 0.62 }}
        className={`flex flex-none items-center justify-center rounded border border-arc/40 bg-arc/10 font-hud text-arc-soft ${className}`}
      >
        {name.charAt(0).toUpperCase()}
      </span>
    )
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}/22d3ee`}
      alt=""
      aria-hidden="true"
      loading="lazy"
      width={size}
      height={size}
      onError={() => setFailed(true)}
      className={`flex-none ${className}`}
      style={{ width: size, height: size }}
    />
  )
}
