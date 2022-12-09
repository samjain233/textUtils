import React from "react";

export default function Navbar(props) {
  let mode = "primary";
  if (props.mode) mode = "dark";
  else mode = "primary";

  return (
    <nav className={`navbar navbar-expand-sm bg-${mode} navbar-dark`}>
      {/* Brand */}
      <a className="navbar-brand" href="/">
        {props.title}
      </a>

      {/* Links  */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/">
            Link 1
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Link 2
          </a>
        </li>

        {/* Dropdown  */}
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="/"
            id="navbardrop"
            data-toggle="dropdown"
          >
            {/* Dropdown link */}
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="/">
              Link 1
            </a>
            <a className="dropdown-item" href="/">
              Link 2
            </a>
            <a className="dropdown-item" href="/">
              Link 3
            </a>
          </div>
        </li>
      </ul>
      <div className="custom-control custom-switch">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customSwitch1"
          onClick={props.toggle}
        />
        <label className="custom-control-label text-light" htmlFor="customSwitch1">
          Enable Dark Mode
        </label>
      </div>
    </nav>
  );
}
