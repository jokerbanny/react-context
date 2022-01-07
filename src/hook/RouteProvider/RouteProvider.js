import { CounterContextProvider } from '../context/CounterContext'
import { ProductContextProvider } from '../context/ProductContext'

const RouteProvider = ({ children }) => {
  return (
    <>
      <ProductContextProvider>
        <CounterContextProvider>{children}</CounterContextProvider>
      </ProductContextProvider>
    </>
  )
}

export default RouteProvider
