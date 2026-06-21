import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { buildGeneralMessage, buildWhatsAppUrl } from '../../utils/whatsapp'

export const StickyWhatsappBar = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 320)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <aside
      className={`sticky-whatsapp ${isVisible ? 'sticky-whatsapp--visible' : ''}`}
      aria-label="Contacto rápido"
    >
      <div className="sticky-whatsapp__icon">
        <MessageCircle aria-hidden="true" />
      </div>
      <div className="sticky-whatsapp__copy">
        <strong>Tu transformación comienza hoy</strong>
        <span>Da el primer paso. El resto lo hacemos juntos.</span>
      </div>
      <a
        href={buildWhatsAppUrl(buildGeneralMessage())}
        onClick={(event) => {
          event.currentTarget.href = buildWhatsAppUrl(buildGeneralMessage())
        }}
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle size={20} />
        Hablar por WhatsApp
      </a>
    </aside>
  )
}
