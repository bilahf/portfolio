import { useLanguage } from '../../i18n/LanguageContext'
import { pick } from '../../i18n/localized'
import EntityLogo from './EntityLogo'

/**
 * Satu item pengalaman.
 * Struktur: [logo] + periode + posisi + perusahaan + deskripsi + teknologi.
 * Garis timeline tipis & titik penanda dibuat di sini (per item),
 * sehingga garisnya menyambung antar item.
 */
export default function ExperienceItem({ experience }) {
  const { t, language } = useLanguage()

  const role = pick(experience.role, language)
  const description = pick(experience.description, language)
  const technologies = experience.technologies ?? []

  return (
    <li className="relative pb-8 pl-7 last:pb-0">
      {/* Garis timeline tipis (menyambung ke item berikutnya) */}
      <span
        aria-hidden="true"
        className="absolute left-[7px] top-0 h-full w-px bg-slate-700/50"
      />
      {/* Titik penanda kecil */}
      <span
        aria-hidden="true"
        className="absolute left-1 top-[9px] h-2 w-2 rounded-full border border-arc bg-navy-900"
      />

      <div className="flex items-start gap-4">
        {/* Logo perusahaan / organisasi */}
        <EntityLogo
          src={experience.logo}
          name={experience.company}
          sizeClass="h-11 w-11 sm:h-12 sm:w-12"
        />

        <div className="min-w-0 flex-1">
          {/* Metadata: periode */}
          <p className="font-hud text-xs tracking-wider text-arc/80">
            <span className="sr-only">{t.about.period}: </span>
            {experience.period}
          </p>

          {/* Judul utama: posisi */}
          <p className="mt-1 font-display text-base font-semibold leading-snug text-slate-100">
            <span className="sr-only">{t.about.position}: </span>
            {role}
          </p>

          {/* Subjudul: nama perusahaan */}
          <p className="text-sm text-slate-400">
            <span className="sr-only">{t.about.company}: </span>
            {experience.company}
          </p>

          {/* Deskripsi */}
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            <span className="sr-only">{t.about.description}: </span>
            {description}
          </p>

          {/* Tag teknologi (opsional) */}
          {technologies.length > 0 ? (
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded border border-slate-700/60 px-2 py-0.5 font-hud text-[10px] uppercase tracking-wider text-slate-400"
                >
                  {tech}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </li>
  )
}
