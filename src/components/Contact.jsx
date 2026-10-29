import { ArrowUpRight, Mail, MapPin, Send } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { profile } from '../data/profile'
import BrandIcon from './BrandIcon'
import SectionHeading from './SectionHeading'

/** Section Contact — tanpa backend, tombol email memakai mailto. */
export default function Contact() {
  const { t } = useLanguage()

  // GANTI data kontak di src/data/profile.js
  const items = [
    {
      id: 'email',
      label: t.contact.email,
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: Mail,
    },
    {
      id: 'github',
      label: t.contact.github,
      value: profile.github.replace(/^https?:\/\/(www\.)?/, ''),
      href: profile.github,
      brand: 'github',
    },
    {
      id: 'linkedin',
      label: t.contact.linkedin,
      value: profile.linkedin.replace(/^https?:\/\/(www\.)?/, ''),
      href: profile.linkedin,
      brand: 'linkedin',
    },
    {
      id: 'location',
      label: t.contact.location,
      value: profile.location,
      href: null,
      icon: MapPin,
    },
  ]

  return (
    <section id="contact" className="section-pad">
      <div className="container-page">
        <SectionHeading
          label={t.contact.label}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {items.map((item) => {
            const Icon = item.icon
            const content = (
              <>
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-md border border-arc/30 bg-arc/10 text-arc-soft">
                  {item.brand ? (
                    <BrandIcon slug={item.brand} name={item.label} size={18} />
                  ) : (
                    <Icon size={17} />
                  )}
                </span>

                <span className="min-w-0">
                  <span className="block label-hud">{item.label}</span>
                  <span className="mt-1 block truncate text-sm text-slate-300">{item.value}</span>
                </span>

                {item.href ? (
                  <ArrowUpRight
                    size={16}
                    className="ml-auto flex-none text-slate-500 transition-colors group-hover:text-arc-soft"
                  />
                ) : null}
              </>
            )

            const baseClass =
              'hud-panel flex items-center gap-4 p-4 transition-all duration-300 hover:border-arc/40 hover:shadow-glow'

            return item.href ? (
              <a
                key={item.id}
                href={item.href}
                target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className={`group ${baseClass}`}
              >
                {content}
              </a>
            ) : (
              <div key={item.id} className={`group ${baseClass}`}>
                {content}
              </div>
            )
          })}
        </div>

        {/* Tombol utama Contact */}
        <div className="mt-8 flex justify-center">
          <a href={`mailto:${profile.email}`} className="btn-primary px-7 py-3.5 text-base">
            <Send size={17} />
            {t.contact.connect}
          </a>
        </div>
      </div>
    </section>
  )
}
