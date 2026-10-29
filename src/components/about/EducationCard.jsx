import { GraduationCap } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'
import { pick } from '../../i18n/localized'
import { education } from '../../data/education'
import EntityLogo from './EntityLogo'

/** Kolom kiri bagian atas: daftar pendidikan. */
export default function EducationCard() {
  const { t, language } = useLanguage()

  return (
    <div>
      <h3 className="flex items-center gap-2 font-display text-lg font-semibold uppercase tracking-wide text-slate-100">
        <GraduationCap size={18} className="text-arc" />
        {t.about.educationTitle}
      </h3>

      <ul className="mt-5 space-y-4">
        {education.map((item) => (
          <li
            key={item.id}
            className="rounded-md border border-arc/15 bg-navy-950/50 p-4 transition-colors duration-300 hover:border-arc/35"
          >
            <div className="flex items-start gap-3.5">
              {/* Ikon toga jadi fallback kalau logo kampus belum tersedia */}
              <EntityLogo
                src={item.logo}
                name={item.institution}
                icon={GraduationCap}
                sizeClass="h-11 w-11"
              />

              <div className="min-w-0">
                {/* Judul: jenjang / gelar */}
                <p className="font-display text-base font-semibold leading-snug text-slate-100">
                  {pick(item.degree, language)}
                </p>

                {/* Subjudul: nama kampus */}
                <p className="mt-0.5 text-sm text-slate-400">{item.institution}</p>

                {/* Metadata: tahun */}
                <p className="mt-1 font-hud text-xs tracking-wider text-arc/80">{item.period}</p>
              </div>
            </div>

            {/* Informasi tambahan: IPK (tanpa progress bar) */}
            {item.gpa ? (
              <div className="mt-3.5 flex items-center gap-2 border-t border-slate-700/40 pt-3">
                <span className="label-hud">{t.about.gpa}</span>
                <span className="font-display text-sm font-semibold text-arc-soft">
                  {item.gpa}
                </span>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  )
}
