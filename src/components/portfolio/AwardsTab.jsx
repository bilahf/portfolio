import { Trophy } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'
import { awards } from '../../data/awards'

/** Portfolio > Awards */
export default function AwardsTab({ onPreview }) {
  const { t } = useLanguage()

  if (awards.length === 0) {
    return (
      <p className="animate-fade-in rounded-md border border-slate-700/50 p-6 text-center text-sm text-slate-400">
        {t.awards.empty}
      </p>
    )
  }

  return (
    <div className="animate-fade-in grid gap-6 sm:grid-cols-2">
      {awards.map((award) => (
        <article
          key={award.id}
          className="hud-panel flex flex-col gap-4 p-5 transition-all duration-300 hover:border-arc/40 hover:shadow-glow sm:flex-row"
        >
          {/* Gambar penghargaan (opsional) */}
          {award.image ? (
            <button
              type="button"
              onClick={() =>
                onPreview({
                  image: award.image,
                  title: award.title,
                  subtitleLabel: t.awards.organization,
                  details: [
                    { label: t.awards.organization, value: award.organization },
                    { label: t.awards.year, value: award.year },
                  ],
                  linkUrl: null,
                  linkLabel: t.awards.viewImage,
                  emptyLinkLabel: '',
                })
              }
              className="w-full flex-none overflow-hidden rounded-md border border-arc/15 bg-navy-950 sm:w-40"
              aria-label={t.awards.viewImage}
            >
              <img
                src={award.image}
                alt={award.title}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </button>
          ) : (
            <div className="flex aspect-[4/3] w-full flex-none items-center justify-center rounded-md border border-slate-700/50 bg-navy-950/60 sm:w-40">
              <Trophy size={26} className="text-arc/50" />
            </div>
          )}

          <div className="flex-1">
            <div className="flex items-start gap-2">
              <Trophy size={17} className="mt-0.5 flex-none text-arc" />
              <h3 className="font-display text-base font-semibold uppercase tracking-wide text-slate-100">
                {award.title}
              </h3>
            </div>

            <p className="mt-2 text-sm text-slate-400">{award.organization}</p>
            <p className="mt-1 font-hud text-xs tracking-wider text-arc/80">{award.year}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">{award.description}</p>
          </div>
        </article>
      ))}
    </div>
  )
}
