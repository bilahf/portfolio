import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { LANGUAGES } from '../i18n/translations'
import { profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'

// Konstan di level module supaya referensinya stabil (tidak memicu observer ulang)
const SECTION_IDS = ['home', 'about', 'portfolio', 'contact']

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const activeSection = useActiveSection(SECTION_IDS)

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'portfolio', label: t.nav.portfolio },
    { id: 'contact', label: t.nav.contact },
  ]

  // Tutup menu mobile dengan tombol Escape
  useEffect(() => {
    if (!isMenuOpen) return
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  // Tutup menu mobile otomatis ketika layar diperbesar ke desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-arc/10 bg-ink/85 backdrop-blur-md">
      <nav className="container-page flex h-16 items-center justify-between gap-4 sm:h-20">
        {/* Logo / nama */}
        <a
          href="#home"
          onClick={() => setIsMenuOpen(false)}
          className="group flex items-center gap-3"
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-md border border-arc/40 bg-arc/10 font-hud text-sm text-arc-soft shadow-glow">
            {profile.initials}
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-sm font-bold uppercase tracking-widest text-slate-100 transition-colors group-hover:text-arc-soft">
              {profile.name}
            </span>
            <span className="font-hud text-[10px] uppercase tracking-[0.2em] text-arc/70">
              {t.nav.brandRole}
            </span>
          </span>
        </a>

        {/* Menu desktop */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`relative block px-4 py-2 font-display text-sm font-semibold uppercase tracking-wider transition-colors duration-300 ${
                    isActive ? 'text-arc-soft' : 'text-slate-400 hover:text-slate-100'
                  }`}
                >
                  {item.label}
                  {/* Garis indikator menu aktif */}
                  <span
                    className={`absolute inset-x-3 -bottom-0.5 h-px bg-arc transition-all duration-300 ${
                      isActive ? 'opacity-100 shadow-glow' : 'opacity-0'
                    }`}
                  />
                </a>
              </li>
            )
          })}
        </ul>

        {/* Kanan: language switcher + hamburger */}
        <div className="flex items-center gap-2">
          <div
            className="flex items-center rounded-md border border-arc/25 bg-navy-900/70 p-0.5"
            role="group"
            aria-label="Language switcher"
          >
            {LANGUAGES.map((item) => {
              const isActive = language === item.code
              return (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => setLanguage(item.code)}
                  aria-pressed={isActive}
                  className={`rounded px-2.5 py-1 font-hud text-xs tracking-widest transition-colors duration-200 ${
                    isActive
                      ? 'bg-arc/20 text-arc-soft'
                      : 'text-slate-500 hover:text-slate-200'
                  }`}
                >
                  {item.label}
                </button>
              )
            })}
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-arc/30 bg-navy-900/70 text-arc-soft transition-colors hover:bg-arc/15 lg:hidden"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-arc/10 bg-ink/95 transition-[max-height,opacity] duration-300 lg:hidden ${
          isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="container-page flex flex-col py-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  // Tutup hamburger setelah menu dipilih
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center justify-between border-b border-slate-700/30 py-3 font-display text-base font-semibold uppercase tracking-wider transition-colors ${
                    isActive ? 'text-arc-soft' : 'text-slate-400 hover:text-slate-100'
                  }`}
                >
                  {item.label}
                  <span
                    className={`h-1.5 w-1.5 rounded-full bg-arc transition-opacity ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}
