import { useLanguage } from '../../i18n/LanguageContext'
import SectionHeading from '../SectionHeading'
import EducationCard from './EducationCard'
import InterestsList from './InterestsList'
import ExperienceList from './ExperienceList'

/**
 * Section About — hanya mengatur layout utama.
 *
 * Layout desktop: satu panel dengan dua kolom
 *   - kiri  (35%): Education + Interests
 *   - kanan (65%): Experience
 * Tablet & mobile: satu kolom, urutan Education -> Interests -> Experience.
 */
export default function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="section-pad">
      <div className="container-page">
        <SectionHeading label={t.about.label} title={t.about.title} subtitle={t.about.subtitle} />

        <div className="hud-panel hud-corners mt-10 grid gap-8 p-6 sm:p-8 lg:grid-cols-[35fr_65fr] lg:gap-10">
          {/* ---------- KOLOM KIRI (35%): Education + Interests ---------- */}
          <div className="flex flex-col gap-8 lg:border-r lg:border-slate-700/40 lg:pr-10">
            <EducationCard />
            <InterestsList />
          </div>

          {/* ---------- KOLOM KANAN (65%): Experience ---------- */}
          <ExperienceList />
        </div>
      </div>
    </section>
  )
}
