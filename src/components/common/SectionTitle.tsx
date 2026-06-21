interface SectionTitleProps {
  eyebrow?: string
  title: string
  accent?: string
  subtitle?: string
  align?: 'left' | 'center'
}

export const SectionTitle = ({
  eyebrow,
  title,
  accent,
  subtitle,
  align = 'center',
}: SectionTitleProps) => (
  <header className={`section-title section-title--${align}`}>
    {eyebrow && <span className="section-title__eyebrow">{eyebrow}</span>}
    <h2>
      {title} {accent && <span>{accent}</span>}
    </h2>
    {subtitle && <p>{subtitle}</p>}
  </header>
)
