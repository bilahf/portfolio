import { useLanguage } from '../../i18n/LanguageContext'
import { techStack } from '../../data/techStack'
import BrandIcon from '../BrandIcon'

/** Portfolio > Tech Stack */
export default function TechStackTab() {
  const { t } = useLanguage()

  return (
    <div className="animate-fade-in">
      <p className="text-sm text-slate-400">{t.techStack.note}</p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {techStack.map((group) => (
          <div key={group.id} className="hud-panel p-5">
            <h3 className="label-hud">{t.techStack.groups[group.id] ?? group.id}</h3>

            <ul className="mt-4 space-y-2.5">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center gap-3 rounded border border-transparent px-1 py-1 transition-colors duration-300 hover:border-arc/25 hover:bg-arc/5"
                >
                  <BrandIcon slug={item.icon} name={item.name} size={24} />
                  <span className="font-display text-sm font-medium tracking-wide text-slate-300">
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
