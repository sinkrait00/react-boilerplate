import { useDispatch } from 'react-redux'
import { PayloadAction } from '@reduxjs/toolkit'
import { ELocale, mainSlice } from '../../store/main-reducer'
import { useAppSelector } from '../redux'

type useLocalizeType = () => [ELocale, (lang: ELocale) => PayloadAction<ELocale>]
export const useLocalize: useLocalizeType = () => {
  const dispatch = useDispatch()
  const { locale } = useAppSelector((state) => state.mainReducer)
  function setLocalization(lang: ELocale): PayloadAction<ELocale> {
    return dispatch(mainSlice.actions.setLocalizationAction(lang))
  }
  return [locale, setLocalization]
}
