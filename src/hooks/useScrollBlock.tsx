import { useEffect } from 'react'

export const useScrollBlock = (dep: boolean) => {
  useEffect(() => {
    if (dep) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [dep])
}
