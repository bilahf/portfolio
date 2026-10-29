import { Sparkles } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'
import { pick } from '../../i18n/localized'
import { interests } from '../../data/interests'

/** Kolom kiri bagian bawah: daftar minat dalam bentuk chip kecil. */
export default function InterestsList() {
  const { t, language } = useLanguage()

  return (
    <div>
      <h3 className="flex items-center gap-2 font-display text-lg font-semibold uppercase tracking-wide text-slate-100">
        <Sparkles size={18} className="text-arc" />
        {t.about.interestsTitle}
      </h3>

      {/* Tag otomatis wrap mengikuti lebar kolom */}
      <ul className="mt-4 flex flex-wrap gap-2">
        {interests.map((interest) => {
          const label = pick(interest, language)
          return (
            <li
              key={label}
              className="rounded-md border border-arc/20 bg-arc/5 px-3 py-1.5 text-sm text-slate-300 transition-colors duration-300 hover:border-arc/45 hover:text-arc-soft"
            >
              {label}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
