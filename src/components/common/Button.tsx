import type { AnchorHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  variant?: 'primary' | 'outline' | 'ghost'
  fullWidth?: boolean
}

export const Button = ({
  children,
  className = '',
  variant = 'primary',
  fullWidth = false,
  ...props
}: ButtonProps) => (
  <a
    className={`button button--${variant}${fullWidth ? ' button--full' : ''} ${className}`}
    {...props}
  >
    {children}
  </a>
)
