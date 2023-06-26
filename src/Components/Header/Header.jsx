import React from "react";
//style
import "./Header.css";
//components
import Navbar from "../Navbar/Navbar";
import SeachForm from "../SearchForm/SearchForm";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            Find your favorite book.
          </h2>
          <br />
          <p className="header-text fs-18 fw-3">
            Finding your favorite book has never been easier with our online
            app. Our simple and user-friendly interface allows you to search
            through a large library of books covering a wide range of genres,
            authors, and themes. Our app provides a smooth search experience
            whether you're looking for a captivating novel, an instructive
            non-fiction book, or a thought-provoking memoir. Simply enter your
            chosen keywords, apply filters based on your tastes, and let our
            powerful algorithms to build unique book recommendations for you.
          </p>
          <SeachForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
