import type { CSSProperties, ReactNode } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export const Reveal = ({ children, className = '', delay = 0 }: RevealProps) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()
  const style = { '--reveal-delay': `${delay}ms` } as CSSProperties

  return (
    <div
      ref={ref}
      style={style}
      className={`reveal ${isVisible ? 'reveal--visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
