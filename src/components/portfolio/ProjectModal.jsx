import { useEffect, useRef } from 'react'
import { ExternalLink, X } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'
import BrandIcon from '../BrandIcon'

/** Judul kecil untuk setiap bagian dokumentasi. */
function ModalSection({ title, children }) {
  return (
    <section className="border-t border-slate-700/40 pt-5">
      <h3 className="font-hud text-[11px] uppercase tracking-[0.24em] text-arc/85">{title}</h3>
      <div className="mt-3 text-sm leading-relaxed text-slate-300">{children}</div>
    </section>
  )
}

/** Daftar bullet sederhana. */
function BulletList({ items }) {
  if (!items || items.length === 0) return null
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5">
          <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 flex-none rounded-sm bg-arc" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

/**
 * Modal dokumentasi lengkap proyek.
 * - Tutup dengan tombol X, tombol Escape, atau klik area luar.
 * - Klik di dalam isi dokumentasi tidak menutup modal.
 * - Background halaman tidak ikut scroll saat modal terbuka.
 */
export default function ProjectModal({ project, onClose }) {
  const { t } = useLanguage()
  const panelRef = useRef(null)

  // Escape untuk menutup + kunci scroll background
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // Fokuskan panel supaya keyboard dan screen reader langsung berada di modal
    panelRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [onClose])

  // Setiap kali proyek berganti, kembalikan posisi scroll ke atas
  useEffect(() => {
    if (panelRef.current) panelRef.current.scrollTop = 0
  }, [project?.id])

  if (!project) return null

  const { details } = project

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-ink/85 p-4 backdrop-blur-sm sm:p-6"
      // Klik di luar panel menutup modal
      onClick={onClose}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        tabIndex={-1}
        // Klik di dalam isi dokumentasi tidak menutup modal
        onClick={(event) => event.stopPropagation()}
        className="hud-panel hud-corners my-4 w-full max-w-3xl border-arc/30 bg-navy-900 p-5 shadow-panel focus:outline-none sm:my-8 sm:p-7"
      >
        {/* Header */}
        <header className="flex items-start justify-between gap-4">
          <div>
            <p className="label-hud">{t.portfolio.categories[project.category] ?? project.category}</p>
            <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-wide text-slate-100 sm:text-3xl">
              {project.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label={t.projectModal.close}
            className="flex h-9 w-9 flex-none items-center justify-center rounded-md border border-slate-600/60 text-slate-400 transition-colors hover:border-arc/50 hover:text-arc-soft"
          >
            <X size={18} />
          </button>
        </header>

        {/* Thumbnail utama */}
        <img
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
          className="mt-6 aspect-video w-full rounded-md border border-arc/15 object-cover"
        />

        {/* Dokumentasi */}
        <div className="mt-6 space-y-5">
          <ModalSection title={t.projectModal.overview}>
            <p>{details.overview}</p>
          </ModalSection>

          <ModalSection title={t.projectModal.problem}>
            <p>{details.problem}</p>
          </ModalSection>

          <ModalSection title={t.projectModal.objectives}>
            <BulletList items={details.objectives} />
          </ModalSection>

          <ModalSection title={t.projectModal.features}>
            <BulletList items={details.features} />
          </ModalSection>

          <ModalSection title={t.projectModal.role}>
            <p>{details.role}</p>
          </ModalSection>

          <ModalSection title={t.projectModal.techStack}>
            <ul className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded border border-arc/25 bg-arc/5 px-2.5 py-1 font-hud text-[11px] uppercase tracking-wider text-arc-soft"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </ModalSection>

          <ModalSection title={t.projectModal.process}>
            <ol className="space-y-2">
              {details.process.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="font-hud text-xs text-arc">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </ModalSection>

          {/* Dokumentasi gambar */}
          {details.screenshots?.length > 0 && (
            <ModalSection title={t.projectModal.screenshots}>
              <div className="grid gap-4 sm:grid-cols-2">
                {details.screenshots.map((shot) => (
                  <figure
                    key={shot.src}
                    className="overflow-hidden rounded-md border border-arc/15 bg-navy-950"
                  >
                    <img
                      src={shot.src}
                      alt={shot.caption}
                      loading="lazy"
                      className="aspect-video w-full object-cover"
                    />
                    <figcaption className="px-3 py-2 font-hud text-[10px] uppercase tracking-wider text-slate-400">
                      {shot.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </ModalSection>
          )}

          {details.challenges?.length > 0 && (
            <ModalSection title={t.projectModal.challenges}>
              <ul className="space-y-4">
                {details.challenges.map((item) => (
                  <li
                    key={item.challenge}
                    className="rounded-md border border-slate-700/50 bg-navy-950/60 p-4"
                  >
                    <p className="font-display text-sm font-semibold uppercase tracking-wide text-slate-200">
                      <span className="text-arc/80">{t.projectModal.challenge}: </span>
                      {item.challenge}
                    </p>
                    <p className="mt-2">
                      <span className="font-display text-sm font-semibold uppercase tracking-wide text-arc/80">
                        {t.projectModal.solution}:{' '}
                      </span>
                      {item.solution}
                    </p>
                  </li>
                ))}
              </ul>
            </ModalSection>
          )}

          <ModalSection title={t.projectModal.results}>
            <BulletList items={details.results} />
          </ModalSection>

          {/* Tautan */}
          <section className="flex flex-wrap gap-3 border-t border-slate-700/40 pt-5">
            {details.repo ? (
              <a
                href={details.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <BrandIcon slug="github" name="GitHub" size={16} />
                {t.projectModal.repo}
              </a>
            ) : (
              <span className="btn-ghost cursor-not-allowed opacity-50">
                <BrandIcon slug="github" name="GitHub" size={16} />
                {t.projectModal.repo}: {t.projectModal.notAvailable}
              </span>
            )}

            {details.demo ? (
              <a
                href={details.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <ExternalLink size={16} />
                {t.projectModal.demo}
              </a>
            ) : (
              <span className="btn-ghost cursor-not-allowed opacity-50">
                <ExternalLink size={16} />
                {t.projectModal.demo}: {t.projectModal.notAvailable}
              </span>
            )}
          </section>
        </div>

        {/* Tombol tutup bawah (memudahkan di mobile) */}
        <div className="mt-7 flex justify-end">
          <button type="button" onClick={onClose} className="btn-ghost">
            <X size={16} />
            {t.projectModal.close}
          </button>
        </div>
      </div>
    </div>
  )
}
