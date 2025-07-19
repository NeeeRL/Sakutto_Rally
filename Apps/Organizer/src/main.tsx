import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.tsx'
import Load from './loadFiles.tsx'
import Create from './createEvent.tsx'
import Download from './downloadFiles.tsx'
import Add from './addCheckPoints.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>エラー</h1>
  },
  {
    path: '/load',
    element: <Load />
  },
  {
    path: '/create',
    element: <Create />
  },
  {
    path: '/download',
    element: <Download />
  },
  {
    path: '/checkpoints',
    element: <Add />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
