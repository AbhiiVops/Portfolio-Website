/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Say Goodbye to Messy Deployments: How Docker and Keploy Revolutionize API Testing🎉",
    description:
      "Learn about the importance of comprehensive API testing, collaboration between developers and testers, and valuable insights on best practices for API testing and deployment. Whether you're a developer, tester, or API enthusiast, this video will provide you with valuable knowledge to enhance your API projects.",
    url: "https://www.youtube.com/watch?v=ji8reHQvGRw&t=272s",
  },
  {
    title: "Complete Git and GitHub Tutorial",
    description:
      "This tutorial will help you with using Git & GitHub for your personal projects and contributing to Open Source, with no prerequisites, in an easy to understand language. It starts from the very basics of Git & GitHub, covering all the essential commands, including concepts such as branching, pull requests, forking, etc. We also cover other concepts such as squashing, resolving merge conflicts, keeping your code in sync, and more.",
    url: "https://www.youtube.com/watch?v=ULFi6H3mKTA&t=508s",
  },
  {
    title: "Useful Resources to Master DevOps: A Comprehensive Guide",
    description:
      " In this blog, we will be discussing the best resources to learn and master DevOps, from beginner to pro level. ",
    url: "https://abhiivops.hashnode.dev/useful-resources-to-master-devops-a-comprehensive-guide",
  },
  {
    title: "Exploring the Software Development Lifecycle (SDLC)",
    description:
      "Understanding the stages and importance of SDLC in software development",
    url: "https://abhiivops.hashnode.dev/exploring-the-software-development-lifecycle-sdlc",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
