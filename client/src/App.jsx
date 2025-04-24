// App.jsx
import './app.css'
import BookIcon from './assets/reading-book.png'

import HomePage from './pages/HomePage'
import NotesPage from './pages/NotesPage'
import QuizPage from './pages/QuizPage'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from 'react-router-dom'


  //  Root Layout (Shared layout)
  //  Contains: Navbar + Outlet

const RootLayout = () => (
  <div>
    <nav className='navbar'>
      <div className='logo'>
        <img className='logo-icon' src={BookIcon} alt="Book Icon" />
        <span className='logo-text'>Padhlo AI</span>
      </div>

      <div className='nav-links'>
        <a href="/">Home</a>
        <a href="https://github.com/Ersatz-xD/Padhlo-ai" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/ayaan-ahmed-khan-448600351" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="/">Support</a>
      </div>

      <div className='btn'>
        <button className='signup'>Sign up</button>
      </div>
    </nav>

    {/* This is where routed content appears */}
    <Outlet />
  </div>
)

//    Route Configuration
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="notes-page" element={<NotesPage />} />
      <Route path="quiz-page" element={<QuizPage />} />
    </Route>
  )
)


  //  Main App Component

const App = () => <RouterProvider router={router} />

export default App
