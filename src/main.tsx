import 'virtual:svg-icons-register'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.scss'
import './assets/scss/global.scss'
import { Provider } from 'react-redux'
import { routes } from '@/routes/routes'
import { store } from '@/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>,
)
