import { useCallback, useEffect, useState } from 'react'

const MODAL_SEEN_KEY = 'dv-wheel-modal-seen'

export const useWheelModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback((manual = false) => {
    if (!manual && sessionStorage.getItem(MODAL_SEEN_KEY)) return
    sessionStorage.setItem(MODAL_SEEN_KEY, 'true')
    setIsOpen(true)
  }, [])

  const close = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    const timer = window.setTimeout(() => open(), 4000)
    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      if (scrollable > 0 && window.scrollY / scrollable >= 0.4) open()
    }
    const handleManualOpen = () => open(true)

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('dv-open-wheel', handleManualOpen)

    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('dv-open-wheel', handleManualOpen)
    }
  }, [open])

  return { isOpen, close }
}
