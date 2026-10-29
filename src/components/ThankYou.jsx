import { ArrowUp, Heart } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { profile } from '../data/profile'

// Tahun dihitung sekali di luar komponen agar render tetap murni (pure)
const CURRENT_YEAR = new Date().getFullYear()

/** Section penutup + footer. */
export default function ThankYou() {
  const { t } = useLanguage()

  return (
    <section id="thank-you" className="section-pad border-t border-arc/10">
      <div className="container-page">
        <div className="hud-panel hud-corners mx-auto flex max-w-2xl flex-col items-center gap-5 p-8 text-center sm:p-12">
          <span className="label-hud">System / End</span>

          <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-slate-100 sm:text-4xl">
            {t.thanks.title}
          </h2>

          <p className="max-w-xl text-sm leading-relaxed text-slate-400">{t.thanks.description}</p>

          <a href="#home" className="btn-primary mt-2">
            <ArrowUp size={16} />
            {t.thanks.backHome}
          </a>
        </div>

        <footer className="mt-12 flex flex-col items-center gap-2 border-t border-slate-700/40 pt-6 sm:flex-row sm:justify-between">
          <p className="font-hud text-[11px] uppercase tracking-[0.2em] text-slate-500">
            © {CURRENT_YEAR} {profile.name}
          </p>

          <p className="flex items-center gap-2 font-hud text-[11px] uppercase tracking-[0.2em] text-slate-500">
            <Heart size={12} className="text-arc/70" />
            {t.footer.builtWith}
          </p>
        </footer>
      </div>
    </section>
  )
}
