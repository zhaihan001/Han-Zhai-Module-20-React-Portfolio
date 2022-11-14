import React from "react";
import Project from "./Project";

const projects = [
  {
    title: "Bootcamp Bayou Grill",
    programmingLanguages: "HTML, CSS, JavaScript, Handlebar, MySQL, Express.js",
    image: "/BayouGrill.png",
    summary: `This is a full stack application that used for restaurant. Customer can view the menu, placing new order, view order history & details.

    In order to place new order, application requires new customer to sign up for an account or log in as existing customer.`,
    githubRepo:
      "https://github.com/zhaihan001/Team-Project2-Bootcamp-Bayou-Grill",
  },
  {
    title: "Tech Blog",
    programmingLanguages: "HTML, CSS, JavaScript, Handlebar, MySQL, Express.js",
    image: "/TechBlog.png",
    summary: `This is the application that developers can publish their blog posts and comment on other developers posts as well.This site is built completely from scratch and deployed it to Heroku. App follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.`,
    githubRepo: "https://github.com/zhaihan001/Han-Zhai-Module-14-Tech-Blog",
  },
  {
    title: "Social Network API",
    programmingLanguages: "JavaScript, Express.js, MongoDB, Mongooes",
    image: "/SocialNetworkAPI.gif",
    summary: `This is a social network web application where users can share their thoughts, react to friends thoughts, and create a friend list. Used Express.js for routing, a MongoDB database, and the Mongoose ODM.`,
    githubRepo:
      "https://github.com/zhaihan001/Han-Zhai-Module-18-Social-Network-API",
  },
  {
    title: "Employee Tracker",
    programmingLanguages: "Node.js, MySQL, Inquirer",
    image: "/EmployeeTracker.png",
    summary: `This is a command-line application built from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL`,
    githubRepo:
      "https://github.com/zhaihan001/Han-Zhai-Module-12-Employee-Tracker",
  },
  {
    title: "Paws vs Claws",
    programmingLanguages:
      "HTML, CSS, Bulma, font-awesome, JavaScript, JQuery, 3rd party API",
    image: "/PawsClaws.png",
    summary: `This is an App that allows user to vote for their preference on random dogs vs cats and records their voting history.`,
    githubRepo: "https://github.com/zhaihan001/TeamProject1--HZ-MS-SL",
  },
  {
    title: "Weather Dashboard",
    programmingLanguages: "HTML, CSS, JavaScript, JQuery, 3rd party API",
    image: "/WeatherDashboard.png",
    summary: `This is an App that uses the 5 Day Weather Forecast to retrieve weather data for cities`,
    githubRepo:
      "https://github.com/zhaihan001/Han-Zhai-Module-6-Assignment-Weather-Dashboard",
  },
];

function Portfolio() {
  return (
    <div className="mainBody portfolioBody">
      <h1 className="content">Portfolio</h1>

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;
