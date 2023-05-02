import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ContextProvider} from './context/store.jsx'
import {reducer} from './context/reducer.jsx'
import {initialState} from './context/initialState.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider reducer={reducer} state={initialState}>
      <App />
    </ContextProvider>
  </React.StrictMode>,
)
