import React from 'react'
import ReactDOM from 'react-dom/client'
import MainPage from './pages/main-page/index.jsx'
import PreviewPage from './pages/preview-page/index.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.scss'
import Layout from './layout/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <MainPage />
      </Layout>
    )
  },
  {
    path: '/preview',
    element: (
      <Layout>
        <PreviewPage />
      </Layout>
    )
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <RouterProvider router={router} />
  </div>
)
