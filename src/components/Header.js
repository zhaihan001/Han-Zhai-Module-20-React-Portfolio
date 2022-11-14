import React, { useState } from "react";
import Navigation from "./Navigation";
import About from "./About";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Contact from "./Contact";

export default function Header() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <About />;
  };
  const pageChangeHandler = (page) => setCurrentPage(page);
  return (
    <div>
      <nav className="navbar">
        <Navigation
          currentPage={currentPage}
          pageChangeHandler={pageChangeHandler}
        />
        <section>{renderPage(currentPage)}</section>
      </nav>
    </div>
  );
}
