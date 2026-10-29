import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'

/** Satu kartu proyek pada grid Portfolio > Projects. */
export default function ProjectCard({ project, onSelect }) {
  const { t } = useLanguage()

  return (
    <article className="group hud-panel flex flex-col overflow-hidden transition-all duration-300 hover:border-arc/40 hover:shadow-glow">
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden border-b border-arc/10 bg-navy-950">
        <img
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded border border-arc/40 bg-ink/85 px-2 py-1 font-hud text-[10px] uppercase tracking-[0.18em] text-arc-soft">
          {t.portfolio.categories[project.category] ?? project.category}
        </span>
      </div>

      {/* Isi kartu */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-slate-100">
          {project.title}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
          {project.shortDescription}
        </p>

        {/* Tag teknologi */}
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded border border-slate-700/60 px-2 py-0.5 font-hud text-[10px] uppercase tracking-wider text-slate-400"
            >
              {tech}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => onSelect(project)}
          className="mt-5 flex items-center justify-center gap-2 rounded-md border border-arc/45 bg-arc/10 px-4 py-2.5 font-display text-xs font-semibold uppercase tracking-wider text-arc-soft transition-all duration-300 hover:bg-arc/20 hover:shadow-glow active:scale-[0.98]"
        >
          {t.portfolio.viewDetails}
          <ArrowRight size={14} />
        </button>
      </div>
    </article>
  )
}
