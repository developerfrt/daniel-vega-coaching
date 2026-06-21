import { siteConfig } from '../../data/siteConfig'

export const Footer = () => (
  <footer className="footer">
    <div className="container footer__inner">
      <a className="brand" href="#inicio" aria-label="Volver al inicio">
        <span className="brand__mark">
          D<span>V</span>
        </span>
        <span className="brand__name">
          <strong>DANIEL VEGA</strong>
          <small>COACHING</small>
        </span>
      </a>
      <nav aria-label="Navegación del pie de página">
        {siteConfig.navigation.slice(0, 6).map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <p>© {new Date().getFullYear()} Daniel Vega Coaching. Todos los derechos reservados.</p>
    </div>
  </footer>
)
