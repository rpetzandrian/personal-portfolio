import { faBook, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import data from "../../data/data.json";

interface ResumeProps {
  nav: string;
}

const Resume = (props: ResumeProps): JSX.Element => {
  return (
    <article
      className={`resume ${props.nav == "resume" ? "active" : ""}`}
      data-page="resume"
    >
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FontAwesomeIcon icon={faBook} width={20} />
          </div>

          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          {data.education.map((item, index) => (
            <li className="timeline-item" key={index}>
              <h4 className="h4 timeline-item-title">
                {item.degree} in {item.school}
              </h4>

              <span>
                {item.from} - {item.to}
              </span>

              <p className="timeline-text">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FontAwesomeIcon icon={faBriefcase} width={20} />
          </div>

          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          {data.experience.map((item, index) => (
            <li className="timeline-item" key={index}>
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <h4 className="h6 timeline-item-title text-white">
                {item.company}
              </h4>

              <span>{item.dates}</span>

              <p className="timeline-text">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>
    </article>
  );
};

export default Resume;
