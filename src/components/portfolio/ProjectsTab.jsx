import { useMemo, useState } from 'react'
import { useLanguage } from '../../i18n/LanguageContext'
import { projects } from '../../data/projects'
import ProjectCard from './ProjectCard'

/** Kategori yang tersedia pada filter (harus sama dengan nilai `category` di data/projects.js) */
const CATEGORY_KEYS = ['software', 'ai', 'data', 'iot']

export default function ProjectsTab({ onSelectProject }) {
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projects
    return projects.filter((project) => project.category === activeCategory)
  }, [activeCategory])

  const filters = [
    { id: 'all', label: t.portfolio.filterAll },
    ...CATEGORY_KEYS.map((key) => ({ id: key, label: t.portfolio.categories[key] })),
  ]

  return (
    <div className="animate-fade-in">
      {/* Filter kategori */}
      <div
        className="flex flex-wrap items-center gap-2"
        role="group"
        aria-label={t.portfolio.filterLabel}
      >
        {filters.map((filter) => {
          const isActive = activeCategory === filter.id
          return (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveCategory(filter.id)}
              aria-pressed={isActive}
              className={`rounded-md border px-3.5 py-2 font-display text-xs font-semibold uppercase tracking-wider transition-all duration-300 sm:text-sm ${
                isActive
                  ? 'border-arc/60 bg-arc/15 text-arc-soft shadow-glow'
                  : 'border-slate-700/60 text-slate-400 hover:border-arc/40 hover:text-slate-200'
              }`}
            >
              {filter.label}
            </button>
          )
        })}
      </div>

      <p className="mt-4 font-hud text-[11px] uppercase tracking-[0.2em] text-slate-500">
        {filteredProjects.length} {t.portfolio.projectCount}
      </p>

      {/* Grid proyek */}
      {filteredProjects.length === 0 ? (
        <p className="mt-8 rounded-md border border-slate-700/50 p-6 text-center text-sm text-slate-400">
          {t.portfolio.noProjects}
        </p>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onSelect={onSelectProject} />
          ))}
        </div>
      )}
    </div>
  )
}
