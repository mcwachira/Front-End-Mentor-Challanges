import React from 'react'
import { IpProvider} from './components/context/IpData.context'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <IpProvider>
      <App />
  </IpProvider>
  
  </React.StrictMode>
)
