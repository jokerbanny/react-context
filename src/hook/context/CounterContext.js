import { useReducer } from 'react'
import { createContext } from 'react'
import counterReducer from '../Reducer/counterReducer'

const CounterContext = createContext()

export const CounterContextProvider = ({ children }) => {
  const initialState = {
    value: 5,
    payload: {},
    data: [],
  }
  const [state, dispatch] = useReducer(counterReducer, initialState)
  return (
    <CounterContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </CounterContext.Provider>
  )
}

export default CounterContext
