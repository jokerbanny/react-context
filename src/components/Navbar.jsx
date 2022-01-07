import { useContext } from 'react'
import CounterContext from '../hook/context/CounterContext'

const Navbar = () => {
  const { value } = useContext(CounterContext)
  return (
    <div style={{ backgroundColor: 'green', color: 'white' }}>
      <h1>Counter Number: {value}</h1>
    </div>
  )
}

export default Navbar
