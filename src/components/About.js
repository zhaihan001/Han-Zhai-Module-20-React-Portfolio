import React from "react";

function About() {
  return (
    <div className="mainBody">
      <h1 className="content is-medium">Han Zhai Professional Summary</h1>
      <img
        className="my-pic"
        src={process.env.PUBLIC_URL + "/img/avatar.JPG"}
        alt="Han Avatar"
      />
      <h2 className="content is-italic mt-4">
        My name is Han Zhai. I have 8 years software quality assurance working
        experience. Currently aspiring to take a career jump to
        programming-related role after completing full-stack developer training.
      </h2>

      <p className="aboutMeContent">
        Experience with SDLC under Waterfall and Agile methodologies.<br></br>
        Front-end development using HTML, CSS, Bootstrap, JavaScript, Handlebar,
        React.<br></br>
        Back-end and database development using Node.js, MySQL, MongoDB.
        <br></br>
      </p>
      <h3>More to come ...</h3>
    </div>
  );
}

export default About;
