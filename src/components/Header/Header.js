import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import NavUser from "./NavUser";
import { useSelector } from "react-redux";

function Header() {
  const hederRef = useRef(null);
  const { user, loading } = useSelector((state) => state.user);
  useEffect(() => {
    const handleFixedHeader = () => {
      const header = hederRef.current;
      const sticky = header.offsetTop;

      if (header) {
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
      }
    };

    window.addEventListener("scroll", handleFixedHeader);

    return () => window.removeEventListener("scroll", handleFixedHeader);
  }, []);

  return (
    <div ref={hederRef} className="header">
      <div className="header-list">
        <Link to="/" className="header-logo">
          <box-icon color="#e74c3c" size="md" name="movie"></box-icon>
          <span>Streamify</span>
        </Link>
      </div>

      <div className="header-info">
        <Link className="header-search" to="/search">
          <box-icon size="md" color="#e74c3c" name="search-alt-2"></box-icon>
        </Link>

        {user ? (
          <NavUser user={user} />
        ) : (
          <Link
            to="/login"
            className={`bnt-login ${loading ? "disabled-link" : ""}`}
          >
            Sign in
          </Link>
        )}

        {/* {user ? (
          <NavUser user={user} />
        ) : (
          <Link
            to="/sign-up"
            className={`bnt-signup ${loading ? "disabled-link" : ""}`}
          >
            Sign Up
          </Link>

          
        )} */}
      </div>
    </div>
  );
}

export default Header;
