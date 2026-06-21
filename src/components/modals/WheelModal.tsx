import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { Gift, MessageCircle, X } from 'lucide-react'
import {
  buildWheelPrizeMessage,
  buildWhatsAppUrl,
  savePrize,
} from '../../utils/whatsapp'

const prizes = [
  { label: '10% DE DESCUENTO', probability: 0.85 },
  { label: '15% DE DESCUENTO', probability: 0.12 },
  { label: '20% DE DESCUENTO', probability: 0.03 },
  { label: 'GRATIS', probability: 0 },
] as const

const confettiColors = ['#f3a51c', '#ffc55c', '#7c1ec4', '#ffffff']
const confettiPieces = Array.from({ length: 42 }, (_, index) => ({
  left: (index * 37) % 100,
  delay: (index % 9) * 0.055,
  duration: 1.7 + (index % 5) * 0.18,
  rotation: (index * 73) % 360,
  color: confettiColors[index % confettiColors.length],
}))

interface WheelModalProps {
  isOpen: boolean
  onClose: () => void
}

export const WheelModal = ({ isOpen, onClose }: WheelModalProps) => {
  const [spinning, setSpinning] = useState(false)
  const [rotation, setRotation] = useState(0)
  const [prize, setPrize] = useState<string | null>(null)
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.body.classList.add('modal-is-open')
    window.addEventListener('keydown', onKeyDown)
    dialogRef.current?.focus()
    return () => {
      document.body.classList.remove('modal-is-open')
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const spin = () => {
    if (spinning || prize) return
    setSpinning(true)
    const random = Math.random()
    let accumulatedProbability = 0
    let winnerIndex = 0

    for (let index = 0; index < prizes.length; index += 1) {
      accumulatedProbability += prizes[index].probability
      if (random < accumulatedProbability) {
        winnerIndex = index
        break
      }
    }

    const segmentAngle = 360 / prizes.length
    const landingRotation = 360 - (winnerIndex * segmentAngle + segmentAngle / 2)
    setRotation((current) => current + 1440 + landingRotation)

    window.setTimeout(() => {
      const winner = prizes[winnerIndex].label
      setPrize(winner)
      savePrize(winner)
      setSpinning(false)
    }, 2100)
  }

  return (
    <div className="wheel-modal" role="presentation" onMouseDown={onClose}>
      <div
        ref={dialogRef}
        className="wheel-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="wheel-title"
        tabIndex={-1}
        onMouseDown={(event) => event.stopPropagation()}
      >
        {prize && (
          <div className="wheel-confetti" aria-hidden="true">
            {confettiPieces.map((piece, index) => (
              <span
                key={index}
                style={
                  {
                    '--confetti-left': `${piece.left}%`,
                    '--confetti-delay': `${piece.delay}s`,
                    '--confetti-duration': `${piece.duration}s`,
                    '--confetti-rotation': `${piece.rotation}deg`,
                    '--confetti-color': piece.color,
                  } as CSSProperties
                }
              />
            ))}
          </div>
        )}
        <button
          className="wheel-modal__close"
          type="button"
          onClick={onClose}
          aria-label="Cerrar ruleta"
        >
          <X />
        </button>
        <span className="wheel-modal__eyebrow">
          <Gift size={16} />
          Beneficio exclusivo
        </span>
        <h2 id="wheel-title">
          Gira la ruleta y reclama
          <span>tu regalo gratis</span>
        </h2>
        <p>Con compras elegibles</p>

        <div className="wheel-wrap">
          <div className="wheel-pointer" aria-hidden="true" />
          <div
            className="wheel"
            style={{ transform: `rotate(${rotation}deg)` }}
            aria-label="Ruleta con premios gratis, 10%, 15% y 20% de descuento"
          >
            <span className="wheel__label wheel__label--one">10%</span>
            <span className="wheel__label wheel__label--two">15%</span>
            <span className="wheel__label wheel__label--three">20%</span>
            <span className="wheel__label wheel__label--four">Gratis</span>
            <i aria-hidden="true" />
          </div>
        </div>

        {prize ? (
          <div className="wheel-modal__result" aria-live="polite">
            <strong>Ganaste: {prize}</strong>
            <a
              className="button button--primary button--full"
              href={buildWhatsAppUrl(buildWheelPrizeMessage(prize))}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={20} />
              Reclamar por WhatsApp
            </a>
          </div>
        ) : (
          <button
            className="button button--primary button--full"
            type="button"
            onClick={spin}
            disabled={spinning}
          >
            {spinning ? 'Girando...' : 'Girar (2s)'}
          </button>
        )}
        <small className="wheel-modal__legal">
          Esta interfaz es solo con fines ilustrativos. Los beneficios están
          sujetos a disponibilidad y condiciones de la promoción.
        </small>
      </div>
    </div>
  )
}
