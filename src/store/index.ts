import { Action, AnyAction, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit'
import mainReducer from './main-reducer'
import modalReducer from './modal'

const rootReducer = combineReducers({
  mainReducer,
  modalReducer,
})

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  })
}

type Store = ReturnType<typeof setupStore>

export type AppDispatch = Store['dispatch']
export type RootState = ReturnType<Store['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
