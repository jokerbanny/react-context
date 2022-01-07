import { useReducer } from 'react'
import { createContext } from 'react'
import productReducer from '../Reducer/productReducer'

const ProductContext = createContext()

export const ProductContextProvider = ({ children }) => {
  const initialState = {
    products: [],
    product: {},
    payload: {},
  }
  const [state, dispatch] = useReducer(productReducer, initialState)
  return (
    <ProductContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContext
