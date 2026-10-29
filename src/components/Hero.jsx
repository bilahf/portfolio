import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Mail } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { profile } from '../data/profile'

/**
 * Hero / Home section.
 * Efek JARVIS: klik foto profil -> animasi scan hologram ~1.8 detik,
 * lalu kembali normal dan bisa diulang.
 */
export default function Hero() {
  const { t } = useLanguage()
  // 'idle' -> 'scanning' -> 'scanned' -> 'idle'
  const [scanState, setScanState] = useState('idle')
  // Key untuk me-remount elemen animasi supaya CSS animation berjalan ulang
  const [scanKey, setScanKey] = useState(0)
  const [photoFailed, setPhotoFailed] = useState(false)
  const timersRef = useRef([])

  const isScanning = scanState === 'scanning'

  // Bersihkan timer ketika komponen dilepas
  useEffect(() => {
    return () => timersRef.current.forEach((timer) => clearTimeout(timer))
  }, [])

  const handlePhotoClick = () => {
    if (isScanning) return

    timersRef.current.forEach((timer) => clearTimeout(timer))
    setScanKey((prev) => prev + 1)
    setScanState('scanning')

    timersRef.current = [
      setTimeout(() => setScanState('scanned'), 1000),
      setTimeout(() => setScanState('idle'), 1900),
    ]
  }

  const hudStatus =
    scanState === 'scanning'
      ? t.hero.scanning
      : scanState === 'scanned'
        ? t.hero.scanned
        : t.hero.online

  return (
    <section id="home" className="section-pad relative pt-28 sm:pt-32 lg:pt-36">
      {/* Efek cahaya lembut di belakang hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-10 -z-10 h-72 w-[36rem] max-w-full -translate-x-1/2 rounded-full bg-arc/10 blur-[110px]"
      />

      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* ============ KIRI: teks ============ */}
        <div className="animate-fade-up">
          <p className="label-hud">{t.nav.brandRole}</p>

          <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-slate-100 sm:text-5xl lg:text-6xl">
            {t.hero.greeting}{' '}
            <span className="text-gradient-arc">{profile.name}</span>
          </h1>

          <h2 className="mt-4 font-display text-2xl font-semibold tracking-wide text-slate-300 sm:text-3xl">
            {t.hero.headline}
          </h2>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400">
            {t.hero.description}
          </p>

          {/* Tombol aksi */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#portfolio" className="btn-primary">
              {t.hero.viewPortfolio}
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-ghost">
              <Mail size={16} />
              {t.hero.contactMe}
            </a>
          </div>

          {/* Fokus utama + status */}
          <dl className="mt-10 grid max-w-lg grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="hud-panel hud-corners p-4">
              <dt className="label-hud">{t.hero.statsLabel}</dt>
              <dd className="mt-2 space-y-1">
                {t.hero.stats.map((item) => (
                  <p key={item} className="text-sm text-slate-300">
                    {item}
                  </p>
                ))}
              </dd>
            </div>

            <div className="hud-panel hud-corners p-4">
              <dt className="label-hud">{t.hero.statusLabel}</dt>
              <dd className="mt-2 flex items-center gap-2 text-sm text-slate-300">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-arc/60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-arc" />
                </span>
                {t.hero.statusValue}
              </dd>
            </div>
          </dl>
        </div>

        {/* ============ KANAN: foto profil + efek JARVIS ============ */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-[360px]">
            <button
              type="button"
              onClick={handlePhotoClick}
              aria-label={t.hero.scanHint}
              className={`group relative block w-full cursor-pointer rounded-xl border bg-gradient-to-b from-navy-800/70 to-navy-950/70 p-3 transition-all duration-500 focus-visible:outline-none ${
                isScanning
                  ? 'border-arc/70 shadow-glow-lg'
                  : 'border-arc/20 hover:border-arc/45 hover:shadow-glow'
              }`}
            >
              {/* Sudut HUD pada frame */}
              <span className="pointer-events-none absolute left-1 top-1 h-3.5 w-3.5 border-l-2 border-t-2 border-arc/70" />
              <span className="pointer-events-none absolute right-1 top-1 h-3.5 w-3.5 border-r-2 border-t-2 border-arc/70" />
              <span className="pointer-events-none absolute bottom-1 left-1 h-3.5 w-3.5 border-b-2 border-l-2 border-arc/70" />
              <span className="pointer-events-none absolute bottom-1 right-1 h-3.5 w-3.5 border-b-2 border-r-2 border-arc/70" />

              {/* Area foto */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-navy-950/80">
                {photoFailed ? (
                  // Fallback bila public/profile.png belum ditambahkan.
                  // Lihat README bagian "Cara Mengganti Foto Profil".
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="font-display text-6xl font-bold tracking-widest text-arc/70">
                      {profile.initials}
                    </span>
                  </div>
                ) : (
                  <img
                    src={profile.photo}
                    alt={t.hero.photoAlt}
                    onError={() => setPhotoFailed(true)}
                    className="h-full w-full object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                )}

                {/* ---- Overlay efek scan (hanya muncul saat diklik) ---- */}
                {scanState !== 'idle' && (
                  <div key={scanKey} className="pointer-events-none absolute inset-0">
                    {/* Garis & berkas scan yang bergerak dari atas ke bawah */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="absolute inset-0 animate-scan-line">
                        <div className="h-24 w-full bg-gradient-to-b from-transparent via-arc/25 to-transparent" />
                        <div className="h-px w-full bg-arc shadow-glow" />
                      </div>
                    </div>

                    {/* Lapisan hologram tipis */}
                    <div className="absolute inset-0 animate-fade-in bg-arc/10" />

                    {/* Lingkaran HUD.
                        Transformasi centering dipisah di elemen luar, karena
                        animasi CSS memakai properti transform (rotate/scale). */}
                    <div className="absolute left-1/2 top-1/2 aspect-square w-[92%] -translate-x-1/2 -translate-y-1/2">
                      <div className="h-full w-full animate-ring-spin rounded-full border border-dashed border-arc/35" />
                    </div>
                    <div className="absolute left-1/2 top-1/2 aspect-square w-[72%] -translate-x-1/2 -translate-y-1/2">
                      <div className="h-full w-full animate-ring-spin-reverse rounded-full border border-arc/25" />
                    </div>
                    {/* Pulse singkat */}
                    <div className="absolute left-1/2 top-1/2 aspect-square w-[80%] -translate-x-1/2 -translate-y-1/2">
                      <div className="h-full w-full animate-pulse-ring rounded-full border-2 border-arc/60" />
                    </div>

                    {/* Label status HUD */}
                    <div className="absolute inset-x-0 bottom-3 flex justify-center">
                      <span className="rounded border border-arc/40 bg-ink/80 px-3 py-1 font-hud text-[11px] tracking-[0.2em] text-arc-soft">
                        {scanState === 'scanning' ? t.hero.scanning : t.hero.scanned}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Baris status di bawah foto */}
              <div className="mt-3 flex items-center justify-between px-1">
                <span className="font-hud text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  {t.hero.photoAlt}
                </span>
                <span
                  className={`font-hud text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                    scanState === 'idle' ? 'text-slate-500' : 'text-arc-soft'
                  }`}
                >
                  {hudStatus}
                </span>
              </div>
            </button>

            {/* Petunjuk interaksi */}
            <p className="mt-3 text-center font-hud text-[11px] uppercase tracking-[0.2em] text-arc/60">
              {t.hero.scanHint}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
