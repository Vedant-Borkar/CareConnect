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
  const [isSignedIn, setIsSignedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const userLoggedIn = localStorage.getItem("isSignedIn") === "true";
    setIsSignedIn(userLoggedIn);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (route) => {
    if (route.isExternal) {
      if (route.path === "/dashboard") {
        // Determine which dashboard to navigate to based on the user's role
        const ngoData = sessionStorage.getItem("ngoData");
        if (ngoData) {
          navigate("/ngodashboard");
        } else {
          navigate("/userdashboard");
        }
      } else {
        navigate(route.path);
      }
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

  const handleLogout = () => {
    // Perform logout logic, e.g., clearing user data from storage
    localStorage.setItem("isSignedIn", "false"); // or sessionStorage.setItem
    sessionStorage.clear(); // Clear all session storage
    setIsSignedIn(false);
    navigate("/"); // Redirect to home or any other route after logout
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

        {/* Menu toggle button for smaller screens */}
        <FaBars
          className="text-2xl text-gray-800 cursor-pointer md:hidden"
          onClick={toggleMenu}
        />

        {/* Nav items */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center absolute md:relative bg-gray-100 md:bg-transparent top-16 left-0 w-full md:w-auto md:top-auto md:left-auto md:ml-auto z-50 md:z-auto`}
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
                className="block md:inline-block text-lg text-gray-700 hover:text-blue-500 transition-colors duration-300 mx-2 my-4 md:my-0"
              >
                {route.name}
              </button>
            ))}
          {isSignedIn && (
            <button
              onClick={handleLogout}
              className="text-lg text-gray-700 hover:text-red-500 transition-colors duration-300 mx-2"
            >
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
