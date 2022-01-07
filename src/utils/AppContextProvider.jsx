// AppContextProvider.tsx
import { CounterContextProvider } from '../hook/context/CounterContext'
import { ProductContextProvider } from '../hook/context/ProductContext'

import { combineComponents } from './combineComponents'
const providers = [CounterContextProvider, ProductContextProvider]
export const AppContextProvider = combineComponents(...providers)
