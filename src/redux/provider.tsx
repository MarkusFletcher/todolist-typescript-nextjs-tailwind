'use client'

import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store } from '../redux/store'
import { persistor } from '@/redux/store'

export const ReduxProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}
