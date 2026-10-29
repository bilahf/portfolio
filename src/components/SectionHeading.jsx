/**
 * Judul section yang dipakai berulang kali (About, Portfolio, Contact).
 * Menjaga konsistensi label HUD + judul + subjudul.
 */
export default function SectionHeading({ label, title, subtitle, align = 'left' }) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <div className={`flex flex-col ${alignment} gap-3`}>
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-arc" />
        <span className="label-hud">{label}</span>
      </div>

      <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-slate-100 sm:text-4xl">
        {title}
      </h2>

      {subtitle ? (
        <p className={`max-w-2xl text-sm leading-relaxed text-slate-400 ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
