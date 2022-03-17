import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum ELocale {
  ky = 'ky',
  ru = 'ru',
}
interface ILocalization {
  locale: ELocale
  isMobile: boolean
  isMobileMenuOpen: boolean
}

const initialState: ILocalization = {
  locale: ELocale.ky,
  isMobile: false,
  isMobileMenuOpen: false,
}
export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setLocalizationAction(state, action: PayloadAction<ELocale>) {
      localStorage.setItem('locale', action.payload)
      state.locale = action.payload
    },
    setIsMobile(state, action: PayloadAction<boolean>) {
      state.isMobile = action.payload
    },
    setOpenMobileMenu(state, action: PayloadAction<boolean>) {
      state.isMobileMenuOpen = action.payload
    },
    toggleMobileMenu(state) {
      state.isMobileMenuOpen = !state.isMobileMenuOpen
    },
  },
})

export default mainSlice.reducer
