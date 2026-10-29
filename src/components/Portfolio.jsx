import { useState } from 'react'
import { Award, Folder, Layers, Trophy } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import SectionHeading from './SectionHeading'
import ProjectsTab from './portfolio/ProjectsTab'
import CertificatesTab from './portfolio/CertificatesTab'
import AwardsTab from './portfolio/AwardsTab'
import TechStackTab from './portfolio/TechStackTab'
import ProjectModal from './portfolio/ProjectModal'
import ImagePreviewModal from './portfolio/ImagePreviewModal'

const TAB_ICONS = {
  projects: Folder,
  certificates: Award,
  awards: Trophy,
  techStack: Layers,
}

export default function Portfolio() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState('projects')
  const [selectedProject, setSelectedProject] = useState(null)
  const [preview, setPreview] = useState(null)

  const tabs = [
    { id: 'projects', label: t.portfolio.tabs.projects },
    { id: 'certificates', label: t.portfolio.tabs.certificates },
    { id: 'awards', label: t.portfolio.tabs.awards },
    { id: 'techStack', label: t.portfolio.tabs.techStack },
  ]

  return (
    <section id="portfolio" className="section-pad">
      <div className="container-page">
        <SectionHeading
          label={t.portfolio.label}
          title={t.portfolio.title}
          subtitle={t.portfolio.subtitle}
        />

        {/* Tab navigation Portfolio */}
        <div className="mt-8 flex gap-1 overflow-x-auto rounded-md border border-arc/15 bg-navy-900/60 p-1">
          {tabs.map((tab) => {
            const Icon = TAB_ICONS[tab.id]
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-none items-center gap-2 whitespace-nowrap rounded px-4 py-2.5 font-display text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'bg-arc/15 text-arc-soft shadow-glow'
                    : 'text-slate-400 hover:bg-arc/5 hover:text-slate-200'
                }`}
              >
                <Icon size={15} />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Isi tab */}
        <div className="mt-8">
          {activeTab === 'projects' && <ProjectsTab onSelectProject={setSelectedProject} />}
          {activeTab === 'certificates' && <CertificatesTab onPreview={setPreview} />}
          {activeTab === 'awards' && <AwardsTab onPreview={setPreview} />}
          {activeTab === 'techStack' && <TechStackTab />}
        </div>
      </div>

      {/* Modal dokumentasi proyek */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

      {/* Modal pratinjau sertifikat / penghargaan */}
      {preview && <ImagePreviewModal preview={preview} onClose={() => setPreview(null)} />}
    </section>
  )
}
