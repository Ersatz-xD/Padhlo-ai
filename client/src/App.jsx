import "./app.css";
import React, { useState,  useEffect  } from "react";
import BookIcon from "./assets/reading-book.png";

import HomePage from "./pages/HomePage";
import NotesPage from "./pages/NotesPage";
import QuizPage from "./pages/QuizPage";
import Login from "./modules/users/components/Login";
import Signup from "./modules/users/components/signup";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";

// Root Layout (Shared layout)
// Contains: Navbar + Outlet
const RootLayout = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate(); 
  const location = useLocation();

  // NEW EFFECT — auto navigate after login
  useEffect(() => {
    if (isLoggedIn && (location.pathname === "/login" || location.pathname === "/signup")) {
      navigate("/");
    }
  }, [isLoggedIn, location.pathname, navigate]);

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  const hidebtn =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img className="logo-icon" src={BookIcon} alt="Book Icon" />
          <span className="logo-text">Padhlo AI</span>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link
            to="https://github.com/Ersatz-xD/Padhlo-ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          <Link
            to="https://www.linkedin.com/in/ayaan-ahmed-khan-448600351"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
          <Link to="/">Support</Link>
        </div>

        {!hidebtn && (
          <div className="btn">
            <button onClick={handleLoginLogout} className="login">
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </div>
        )}
      </nav>

      {/* This is where routed content appears */}
      <Outlet />
    </div>
  );
};

// Main App Component
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  // Route Configuration
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <RootLayout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        }
      >
        <Route index element={<HomePage />} />
        <Route path="notes-page" element={<NotesPage />} />
        <Route path="quiz-page" element={<QuizPage />} />
        <Route path="login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
