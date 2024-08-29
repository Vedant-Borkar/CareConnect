// import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Link as ScrollLink } from "react-scroll";
// import { Link, useLocation } from "react-router-dom";

// const routes = [
//   { name: "Home", path: "/", isExternal: false },
//   { name: "Features", path: "feature", isExternal: false },
//   { name: "Event", path: "event-section", isExternal: false },
//   { name: "Testimonials", path: "testimonial", isExternal: false },
//   { name: "Sign Up", path: "/sign-up", isExternal: true },
//   { name: "Sign In", path: "/sign-in", isExternal: true },
// ];

// const NavBar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const isHomePage = location.pathname === "/";

//   return (
//     <header className="bg-gray-100 shadow-md fixed top-0 left-0 right-0 z-50">
//       <div className="container mx-auto flex justify-between items-center py-4 px-6">
//         <Link to="/" className="text-2xl font-bold text-gray-800 flex items-center">
//           <img
//             src="/ngo.png"
//             alt="CareConnect Logo"
//             style={{ width: "2rem", height: "2rem", marginRight: "0.5rem" }}
//             className="mr-2"
//           />
//           CareConnect
//         </Link>

//         <nav className={`md:flex md:items-center ${isMenuOpen ? "block" : "hidden"}`}>
//           <FaTimes
//             className="md:hidden text-2xl cursor-pointer mb-4"
//             onClick={toggleMenu}
//           />
//           {routes.map((route) =>
//             route.isExternal || !isHomePage ? (
//               <Link
//                 key={route.name}
//                 to={route.path}
//                 className="text-lg text-gray-700 hover:text-blue-500 transition-colors duration-300 mx-2"
//                 onClick={toggleMenu}
//               >
//                 {route.name}
//               </Link>
//             ) : (
//               <ScrollLink
//                 key={route.name}
//                 to={route.path}
//                 smooth={true}
//                 duration={500}
//                 className="text-lg text-gray-700 hover:text-blue-500 transition-colors duration-300 mx-2 cursor-pointer"
//                 onClick={toggleMenu}
//               >
//                 {route.name}
//               </ScrollLink>
//             )
//           )}
//         </nav>

//         <FaBars
//           className="text-2xl text-gray-800 cursor-pointer md:hidden"
//           onClick={toggleMenu}
//         />
//       </div>
//     </header>
//   );
// };

// export default NavBar;

import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const routes = [
  { name: "Home", path: "home", isExternal: false },
  { name: "Features", path: "feature", isExternal: false },
  { name: "Event", path: "event-section", isExternal: false },
  { name: "Testimonials", path: "testimonial", isExternal: false },
  { name: "Sign Up", path: "/sign-up", isExternal: true },
  { name: "Sign In", path: "/sign-in", isExternal: true },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (route) => {
    if (route.isExternal) {
      navigate(route.path);
    } else {
      if (location.pathname === "/") {
        // If we're already on the home page, use react-scroll
        const element = document.getElementById(route.path);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // If we're on an external page, navigate to home with state
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
            src="/ngo.png"
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
          {routes.map((route) => (
            <button
              key={route.name}
              onClick={() => handleNavigation(route)}
              className="text-lg text-gray-700 hover:text-blue-500 transition-colors duration-300 mx-2"
            >
              {route.name}
            </button>
          ))}
        </nav>

        {/* Add your menu toggle button here */}
        {/* <FaBars
          className="text-2xl text-gray-800 cursor-pointer md:hidden"
          onClick={toggleMenu}
        /> */}
      </div>
    </header>
  );
};

export default NavBar;
