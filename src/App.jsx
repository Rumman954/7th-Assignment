import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import { Layout } from './components/Layout.jsx'
import { FriendDetailsPage } from './pages/FriendDetailsPage.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { NotFoundPage } from './pages/NotFoundPage.jsx'
import { StatsPage } from './pages/StatsPage.jsx'
import { TimelinePage } from './pages/TimelinePage.jsx'
import { AppProvider } from './state/AppProvider.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'timeline', element: <TimelinePage /> },
      { path: 'stats', element: <StatsPage /> },
      { path: 'friend/:id', element: <FriendDetailsPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
      <ToastContainer position="bottom-right" autoClose={2200} />
    </AppProvider>
  )
}

export default App
