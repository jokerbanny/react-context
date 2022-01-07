import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import RouteProvider from './hook/RouteProvider/RouteProvider'

ReactDOM.render(
  <React.StrictMode>
    <RouteProvider>
      <App />
    </RouteProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
