import { useEffect } from 'react'
import { useLocalize } from './localization/useLocalize'

export const useLocaleUseEffect = (cb: any, deps = []) => {
  const [locale] = useLocalize()
  useEffect(cb, [locale, ...deps])
}
