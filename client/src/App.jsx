import "./app.css";
import React, { useState, useEffect, useCallback, useRef } from "react";
import BookIcon from "./assets/reading-book.png";

import HomePage from "./pages/HomePage";
import NotesPage from "./pages/NotesPage";
import QuizPage from "./pages/QuizPage";
import Login from "./modules/users/components/Login";
import Signup from "./modules/users/components/Signup";

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
  const [, updateState] = useState({}); 
  const forceUpdate = useCallback(() => updateState({}), []);
  const isMounted = useRef(true);

  
  useEffect(() => {
    if (isLoggedIn && isMounted.current && (location.pathname === "/login" || location.pathname === "/signup")) {
      navigate("/");
    }
      return () => {
          isMounted.current = false;
      }
  }, [isLoggedIn, location.pathname, navigate]);

  const handleLoginLogout = useCallback(() => {
    if (isLoggedIn) {
      // Update state and localStorage b4 navigating
      setIsLoggedIn(false);
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userId");
      localStorage.removeItem("token");

      // Force update RootLayout *b4 navigating
      forceUpdate();

      
      Promise.resolve().then(() => {
        navigate("/", { replace: true });
        setTimeout(() => {
          window.location.reload(); 
        }, 10);
      });
    } else {
      navigate("/login");
    }
  }, [isLoggedIn, navigate, setIsLoggedIn, forceUpdate]);

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
    // Directly read from localStorage on initial render to get the login state
    return localStorage.getItem("isLoggedIn") === "true";
  });

  // Listen for changes in localStorage to update the logged-in state
  useEffect(() => {
    const handleStorageChange = () => {
      // Sync the login status across tabs/windows
      const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
      setIsLoggedIn(loggedInStatus);
    };

    // Listen to storage events for cross-tab updates
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

    const updateLoginState = (newState) => { 
        setIsLoggedIn(newState);
    }

  // Route Configuration
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <RootLayout isLoggedIn={isLoggedIn} setIsLoggedIn={updateLoginState} /> // Pass the setter
        }
      >
        <Route index element={<HomePage />} />
        <Route path="notes-page" element={<NotesPage />} />
        <Route path="quiz-page" element={<QuizPage />} />
        <Route path="login" element={<Login setIsLoggedIn={updateLoginState} />} />  {/* Pass to Login too */}
        <Route path="signup" element={<Signup />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
