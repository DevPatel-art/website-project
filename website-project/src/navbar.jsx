import React, { useEffect, useRef, useState } from "react";

function NavBar({ setPage, User, onSignOut }) {
  const [open, setOpen] = useState(false);       
  const [menuOpen, setMenuOpen] = useState(false); 
  const menuRef = useRef(null);

  const handleClick = (page) => {
    setPage(page);
    setOpen(false); 
    setMenuOpen(false); 
  };

  useEffect(() => {
    const onDocClick = (e) => {
      if (!menuRef.current?.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  // Avatar data
  const avatarUrl = User?.photoURL || null;
  const nameSeed =
    User?.displayName || User?.email || "User";
  const initials =
    nameSeed
      .split(/[.@\s_-]+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((s) => s[0].toUpperCase())
      .join("") || "U";

  return (
    <header className="header">
      <div
        className="logo"
        onClick={() => handleClick("home")}
        style={{ cursor: "pointer" }}
      >
        MyWebsite
      </div>

      <nav>
        <ul className={`nav-links ${open ? "active" : ""}`}>
          <li><button onClick={() => handleClick("home")}>Home</button></li>
          <li><button onClick={() => handleClick("about")}>About</button></li>
          <li><button onClick={() => handleClick("services")}>Services</button></li>
          <li><button onClick={() => handleClick("contact")}>Contact</button></li>

          <li className="nav-right-spacer" aria-hidden="true" />

          {User ? (
            <li ref={menuRef} className="user-area">
              <button
                className="avatar-btn"
                aria-label="User menu"
                aria-haspopup="menu"
                aria-expanded={menuOpen}
                onClick={(e) => {
                  e.stopPropagation();
                  setMenuOpen((v) => !v);
                }}
              >
                {avatarUrl ? (
                  <img src={avatarUrl} alt="User avatar" className="avatar" />
                ) : (
                  <span className="avatar avatar-fallback">{initials}</span>
                )}
              </button>

              {menuOpen && (
                <ul className="user-menu" role="menu">
                  <li role="menuitem">
                    <button onClick={() => handleClick("dashboard")}>
                      Dashboard
                    </button>
                  </li>
                  <li role="menuitem">
                    <button onClick={onSignOut}>Sign Out</button>
                  </li>
                </ul>
              )}
            </li>
          ) : (
            <li>
              <button onClick={() => handleClick("signin")}>Sign In</button>
            </li>
          )}
        </ul>

        <button
          className="hamburger"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <div />
          <div />
          <div />
        </button>
      </nav>
    </header>
  );
}

export default NavBar;
