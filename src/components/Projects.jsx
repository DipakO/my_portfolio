/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      title: "Project 4",
      img: "/projects/4.png",
      gLink: "https://github.com/DipakO/Expance_tracker_Complete",
      lLink: "#",
      description:
        "I have build Expense tracker  card app using the MERN . we build this  project to purpose of track the our expenses. this app is capable of saving the data in the mongoDB..",
    },
    {
      title: "Project 5",
      img: "/projects/5.png",
      gLink: "https://github.com/DipakO/login_auth",
      lLink: "#",
      description:
        "I've built this login authontication app to sharpen my express js and mongoDB fundamental concepts like postapi, getApi, PutApi , forgetpassword functions , send mail features etc",
    },
    {
      title: "Project 1",
      img: "/projects/1.png",
      gLink: "https://github.com/DipakO/IDBM_Clone",
      lLink: "https://imdbclone070.netlify.app",
      description:
        "IMDB is the most popular movie rating platform. I've tried to build it's clone using React JS. Using this web app, we can filter the movies by using categories like popular,top rated etc. also there is details page for each movie having details of the selected movie. it also has homepage slider to feature trending movies & shows.",
    },
    {
      title: "Project 2",
      img: "/projects/2.png",
      gLink: "https://github.com/DipakO/E_Commerce",
      lLink: "https://shopping-cart007.netlify.app",
      description:
        "I have build Notes card app using the react . we build this project to purpose of save the important notes. this app is capable of saving the data in the localStorage.",
    },
    {
      title: "Project 3",
      img: "/projects/3.png",
      gLink: "https://github.com/DipakO/Note-App",
      lLink: "https://notesapp070.netlify.app",
      description:
        "I have build Notes card app using the react . we build this project to purpose of save the important notes. this app is capable of saving the data in the localStorage.",
    },
    {
      title: "Project 6",
      img: "/projects/6.png",
      gLink: "https://github.com/DipakO/User_Details",
      lLink: "https://userdata070.netlify.app/",
      description:
        "I've built this user app to sharpen my react js fundamental concepts like components, props, states etc",
    },
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Featured Projects</h3>
          <a
            href="https://github.com/DipakO"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.lLink} target="_blank" rel="noreferrer">
                    <i className="fa fa-globe"></i>
                  </a>
                </div>
              </div>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
