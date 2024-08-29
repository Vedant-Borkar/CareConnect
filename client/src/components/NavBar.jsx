import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";

const routes = [
  { name: "Home", path: "home", isExternal: false },
  { name: "Features", path: "feature", isExternal: false },
  { name: "Event", path: "event-section", isExternal: false },
  { name: "Testimonials", path: "testimonial", isExternal: false },
  { name: "Dashboard", path: "/dashboard", isExternal: true },
  { name: "Sign Up", path: "/sign-up", isExternal: true },
  { name: "Sign In", path: "/sign-in", isExternal: true },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false); // Track user's sign-in status
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if the user is signed in from localStorage or sessionStorage
    const userLoggedIn = localStorage.getItem("isSignedIn") === "true"; // or sessionStorage.getItem
    setIsSignedIn(userLoggedIn);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (route) => {
    if (route.isExternal) {
      navigate(route.path);
    } else {
      if (location.pathname === "/") {
        const element = document.getElementById(route.path);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate("/", { state: { scrollTo: route.path } });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gray-100 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link
          to="/"
          className="text-2xl font-bold text-gray-800 flex items-center"
        >
          <img
            src="/logo1.png"
            alt="CareConnect Logo"
            style={{ width: "2rem", height: "2rem", marginRight: "0.5rem" }}
            className="mr-2"
          />
          CareConnect
        </Link>

        <nav
          className={`md:flex md:items-center ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {routes
            .filter((route) =>
              isSignedIn
                ? route.name !== "Sign In" && route.name !== "Sign Up"
                : true
            )
            .map((route) => (
              <button
                key={route.name}
                onClick={() => handleNavigation(route)}
                className="text-lg text-gray-700 hover:text-blue-500 transition-colors duration-300 mx-2"
              >
                {route.name}
              </button>
            ))}
        </nav>

        {/* Menu toggle button for smaller screens */}
        <FaBars
          className="text-2xl text-gray-800 cursor-pointer md:hidden"
          onClick={toggleMenu}
        />
      </div>
    </header>
  );
};

export default NavBar;
