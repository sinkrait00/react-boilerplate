import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IModalCfg {
  type: string | null
  title?: string | null
}
interface IModal {
  isOpen: boolean
  config: IModalCfg
  data?: []
}

const initialState: IModal = {
  isOpen: false,
  config: {
    type: null,
    title: null,
  },
  data: [],
}
export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<IModal>) {
      state.isOpen = true
      state.config = action.payload.config
      state.data = action.payload.data
    },
    closeModal() {
      return initialState
    },
  },
})

export default modalSlice.reducer
