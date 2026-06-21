import { MessageCircle } from 'lucide-react'
import { Button } from './Button'
import { buildGeneralMessage, buildWhatsAppUrl } from '../../utils/whatsapp'

interface WhatsAppButtonProps {
  children?: string
  className?: string
  variant?: 'primary' | 'outline' | 'ghost'
  fullWidth?: boolean
}

export const WhatsAppButton = ({
  children = 'Hablar por WhatsApp',
  className,
  variant = 'primary',
  fullWidth,
}: WhatsAppButtonProps) => (
  <Button
    href={buildWhatsAppUrl(buildGeneralMessage())}
    onClick={(event) => {
      event.currentTarget.href = buildWhatsAppUrl(buildGeneralMessage())
    }}
    target="_blank"
    rel="noreferrer"
    aria-label={`${children} (abre WhatsApp)`}
    className={className}
    variant={variant}
    fullWidth={fullWidth}
  >
    <MessageCircle aria-hidden="true" size={20} />
    {children}
  </Button>
)
