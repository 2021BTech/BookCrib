import React from "react";
import "./About.css";
import aboutImg from "../../Images/pic-3.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About BookCrib</h2>
            <p className="fs-17">
              Welcome to BookCrib, your online sanctuary for all things books.
              At BookCrib, we believe that reading opens up a world of
              imagination, knowledge, and inspiration. Our platform is designed
              to connect book lovers, avid readers, and literary enthusiasts
              from all walks of life. With an extensive collection of books
              spanning various genres, authors, and languages, BookCrib provides
              a virtual haven where you can discover, explore, and indulge in
              the written word. Immerse yourself in captivating narratives,
              embark on intellectual journeys, and connect with fellow bookworms
              through our vibrant community. Whether you're seeking literary
              classics, contemporary bestsellers, or hidden gems, BookCrib is
              your trusted companion in the world of literature. Join us and
              unlock the doors to a universe of stories, ideas, and endless
              possibilities. Happy reading!
            </p>
            <p className="fs-17">
              At BookCrib, we firmly believe that books have the ability to open
              our eyes to new views and stoke our imaginations. Our goal is to
              introduce book enthusiasts to their next compelling read.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
