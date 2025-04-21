import HomePage from './pages/HomePage'
import NotesPage from './pages/NotesPage'
import QuizPage from './pages/QuizPage'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
  Link
} from 'react-router-dom'

// Create a layout to wrap your routes (navbar inside router)
const RootLayout = () => (
  <div>
    <nav style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      <Link to="/">HomePage</Link>
      <Link to="/notes-page">NotesPage</Link>
      <Link to="/quiz-page">QuizPage</Link>
    </nav>
    <Outlet />
  </div>
)

// Router setup
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="notes-page" element={<NotesPage />} />
      <Route path="quiz-page" element={<QuizPage />} />
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
