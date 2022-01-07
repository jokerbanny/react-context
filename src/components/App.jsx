import { useContext } from 'react'
import CounterContext from '../hook/context/CounterContext'
import { increase, decrease } from '../hook/action/counterAction'
import Navbar from './Navbar'

const App = () => {
  const { value, dispatch } = useContext(CounterContext)

  return (
    <div style={{ textAlign: 'center' }}>
      <Navbar />
      <h1>Counter Number: {value} </h1>
      <button onClick={() => decrease(dispatch)}>- Minus</button>
      <button onClick={() => increase(dispatch)}>+ Increase</button>
    </div>
  )
}

export default App
