import React from "react";

export default function Navigation(props) {
  const navItems = ["About Me", "Portfolio", "Resume", "Contact"];
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        {navItems.map((item) => (
          <a
            href={"#" + item}
            onClick={() => props.pageChangeHandler(item)}
            className={
              props.currentPage === item ? "nav-link active" : "nav-link"
            }
          >
            {item}
          </a>
        ))}
      </li>
    </ul>
  );
}
