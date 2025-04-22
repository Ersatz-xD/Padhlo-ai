import HomePage from './pages/HomePage'
import NotesPage from './pages/NotesPage'
import QuizPage from './pages/QuizPage'
import BookIcon from './assets/reading-book.png'
import './app.css'

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
    <nav className='navbar'>
        <div className='logo'>
          <img className= 'logo-icon' src={BookIcon} alt="Book Icon" />
          <span className='logo-text'>Padhlo AI</span>
        </div>
        
        <div className='nav-links'>

          <a href="/">Home</a>
          <a href="https://github.com/Ersatz-xD/Padhlo-ai">GitHub</a>
          <a href="https://www.linkedin.com/in/ayaan-ahmed-khan-448600351">LinkedIn</a>
          
          <a href="/">Support</a>
        </div>

        <div className='btn'>
        <button className='signup'>
          Sign up
        </button>
        </div>
        
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
