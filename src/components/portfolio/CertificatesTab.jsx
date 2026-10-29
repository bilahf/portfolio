
import { BadgeCheck, Calendar } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'
import { certificates } from '../../data/certificates'

/**
 * Portfolio > Certificates
 *
 * Menampilkan:
 * - Certificate name
 * - Description
 * - Technology / skill tags
 * - Issuer
 * - Completion date
 * - Certificate preview
 */

export default function CertificatesTab({ onPreview }) {
  const { t } = useLanguage()

  return (
    <div className="animate-fade-in grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {certificates.map((certificate) => {
        // Mengambil deskripsi sesuai bahasa portfolio.
        // Jika description berupa string, tetap bisa ditampilkan.
        const description =
          typeof certificate.description === 'string'
            ? certificate.description
            : certificate.description?.[t.language] ||
              certificate.description?.en ||
              ''

        return (
          <button
            key={certificate.id}
            type="button"
            onClick={() =>
              onPreview({
                image: certificate.image,
                title: certificate.name,
                subtitleLabel: t.certificates.issuedBy,

                details: [
                  {
                    label: t.certificates.issuedBy,
                    value: certificate.issuer,
                  },
                  {
                    label: t.certificates.completed,
                    value: certificate.date,
                  },
                  {
                    label: 'Description',
                    value: description,
                  },
                  {
                    label: 'Skills',
                    value: certificate.tags?.join(', ') || '-',
                  },
                ],

                linkUrl: certificate.credentialUrl,
                linkLabel: t.certificates.credential,
                emptyLinkLabel: t.certificates.noCredential,
              })
            }
            className="
              group hud-panel overflow-hidden text-left
              transition-all duration-300
              hover:border-arc/40
              hover:shadow-glow
            "
          >
            {/* Certificate Image */}
            <div className="aspect-[4/3] overflow-hidden border-b border-arc/10 bg-navy-950">
              <img
                src={certificate.image}
                alt={certificate.name}
                loading="lazy"
                className="
                  h-full w-full object-cover opacity-90
                  transition-transform duration-500
                  group-hover:scale-105
                "
              />
            </div>

            {/* Certificate Content */}
            <div className="p-5">
              {/* Certificate Name */}
              <h3 className="
                font-display text-base font-semibold
                uppercase tracking-wide text-slate-100
              ">
                {certificate.name}
              </h3>

              {/* Description */}
              {description && (
                <p className="
                  mt-2 text-sm leading-relaxed
                  text-slate-400
                ">
                  {description}
                </p>
              )}

              {/* Technology / Skill Tags */}
              {certificate.tags?.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {certificate.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        rounded-md border border-arc/20
                        bg-arc/5 px-2 py-1
                        font-hud text-[10px]
                        tracking-wide text-arc-soft
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Issuer */}
              <p className="
                mt-4 flex items-center gap-2
                text-sm text-slate-400
              ">
                <BadgeCheck
                  size={15}
                  className="flex-none text-arc"
                />

                {certificate.issuer}
              </p>

              {/* Completion Date */}
              <p className="
                mt-1 flex items-center gap-2
                font-hud text-xs tracking-wider
                text-arc/80
              ">
                <Calendar
                  size={13}
                  className="flex-none"
                />

                {certificate.date}
              </p>

              {/* Preview Label */}
              <span className="
                mt-4 inline-block
                font-hud text-[10px]
                uppercase tracking-[0.2em]
                text-slate-500
                group-hover:text-arc-soft
              ">
                {t.certificates.preview}
              </span>
            </div>
          </button>
        )
      })}
    </div>
  )
}
