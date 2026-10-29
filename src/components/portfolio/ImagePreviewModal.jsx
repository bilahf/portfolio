import { useEffect } from 'react'
import { ExternalLink, X } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'

/**
 * Modal pratinjau gambar (dipakai oleh Certificates dan Awards).
 * Sama seperti ProjectModal: bisa ditutup dengan X, Escape, atau klik area luar.
 */
export default function ImagePreviewModal({ preview, onClose }) {
  const { t } = useLanguage()

  useEffect(() => {
    if (!preview) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [preview, onClose])

  if (!preview?.image) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-ink/88 p-4 backdrop-blur-sm sm:p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={preview.title}
        onClick={(event) => event.stopPropagation()}
        className="hud-panel my-4 w-full max-w-2xl border-arc/30 bg-navy-900 p-5 shadow-panel sm:my-8 sm:p-6"
      >
        <header className="flex items-start justify-between gap-4">
          <div>
            <p className="label-hud">{preview.subtitleLabel}</p>
            <h2 className="mt-2 font-display text-xl font-bold uppercase tracking-wide text-slate-100 sm:text-2xl">
              {preview.title}
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

        <img
          src={preview.image}
          alt={preview.title}
          className="mt-5 w-full rounded-md border border-arc/15 object-contain"
        />

        <dl className="mt-5 grid gap-3 sm:grid-cols-2">
          {preview.details.map((detail) => (
            <div key={detail.label} className="rounded-md border border-slate-700/50 bg-navy-950/60 p-3">
              <dt className="font-hud text-[10px] uppercase tracking-[0.2em] text-arc/80">
                {detail.label}
              </dt>
              <dd className="mt-1 text-sm text-slate-300">{detail.value}</dd>
            </div>
          ))}
        </dl>

        {preview.linkUrl ? (
          <a
            href={preview.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-5"
          >
            <ExternalLink size={16} />
            {preview.linkLabel}
          </a>
        ) : (
          <p className="mt-5 font-hud text-[11px] uppercase tracking-[0.2em] text-slate-500">
            {preview.emptyLinkLabel}
          </p>
        )}
      </div>
    </div>
  )
}
