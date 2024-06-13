import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import { BrowserRouter} from 'react-router-dom'
import Loading from './components/loading/Loading'
const App = lazy(() => import("./App"))
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<Loading/>}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
)
