import { Briefcase } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'
import { experiences } from '../../data/experience'
import ExperienceItem from './ExperienceItem'

/** Kolom kanan: daftar pengalaman (urutan terbaru ke terlama sesuai file data). */
export default function ExperienceList() {
  const { t } = useLanguage()

  return (
    <div>
      <h3 className="flex items-center gap-2 font-display text-lg font-semibold uppercase tracking-wide text-slate-100">
        <Briefcase size={18} className="text-arc" />
        {t.about.experienceTitle}
      </h3>

      {experiences.length > 0 ? (
        <ul className="mt-5">
          {experiences.map((experience) => (
            <ExperienceItem key={experience.id} experience={experience} />
          ))}
        </ul>
      ) : (
        <p className="mt-5 text-sm text-slate-500">—</p>
      )}
    </div>
  )
}
