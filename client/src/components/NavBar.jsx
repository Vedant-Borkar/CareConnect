import React from 'react'
import "./navbar.css"

const NavBar = () => {
  return (
    <>
    <header className="nav-bar-section">
      <div className="nav-bar">
        <div className="logo-container">
          <img src="/ARTEZ.png" alt="logo" />
        </div>

        <nav className="nav-links">
          <div id="nav-close" className="fa-solid fa-xmark"></div>
          <a className="link-color" href="/index.html">Home</a>
          <a className="link-color" href="/events.html">Events</a>
          <a className="link-color" href="/contact.html">Contact</a>

          <a
            ><i
              onClick="changeHeaderTheme()"
              className="fa-solid fa-paint-roller"
              style={{color: "#203f20", cursor: "pointer"}}
            ></i>
          </a>
        </nav>
        <div id="menubtn" class="fa-solid fa-bars"></div>
      </div>
    </header>
    
    </>
  )
}

export default NavBar