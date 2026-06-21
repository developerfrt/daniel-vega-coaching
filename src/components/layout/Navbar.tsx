import { useEffect, useState } from 'react'
import { Menu, MessageCircle, X } from 'lucide-react'
import { siteConfig } from '../../data/siteConfig'
import { buildGeneralMessage, buildWhatsAppUrl } from '../../utils/whatsapp'

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-is-open', menuOpen)
    return () => document.body.classList.remove('menu-is-open')
  }, [menuOpen])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a className="brand" href="#inicio" aria-label="Daniel Vega Coaching, inicio">
          <span className="brand__mark">
            D<span>V</span>
          </span>
          <span className="brand__name">
            <strong>DANIEL VEGA</strong>
            <small>COACHING</small>
          </span>
        </a>

        <nav
          className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}
          aria-label="Navegación principal"
        >
          {siteConfig.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            className="navbar__mobile-whatsapp"
            href={buildWhatsAppUrl(buildGeneralMessage())}
            onClick={(event) => {
              event.currentTarget.href = buildWhatsAppUrl(buildGeneralMessage())
            }}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} />
            Hablar por WhatsApp
          </a>
        </nav>

        <a
          className="navbar__whatsapp"
          href={buildWhatsAppUrl(buildGeneralMessage())}
          onClick={(event) => {
            event.currentTarget.href = buildWhatsAppUrl(buildGeneralMessage())
          }}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={18} />
          Hablar por WhatsApp
        </a>

        <button
          className="navbar__toggle"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}
