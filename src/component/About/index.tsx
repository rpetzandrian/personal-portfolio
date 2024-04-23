import Image from "next/image";
import React from "react";
import data from "../../data/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDatabase,
  faDesktop,
  faInfinity,
} from "@fortawesome/free-solid-svg-icons";
import { MovingIcons } from "../ui/MovingIcons";

interface AboutProps {
  nav: string;
}

const About = (props: AboutProps): JSX.Element => {
  const viewIcon = (key: string) => {
    switch (key) {
      case "be":
        return faDatabase;
      case "fe":
        return faDesktop;
      case "devops":
        return faInfinity;
      default:
        return faCode;
    }
  };

  return (
    <article
      className={`about ${props.nav == "about" ? "active" : ""}`}
      data-page="about"
    >
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>{data.profile.about}</p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i&apos;m doing</h3>

        <ul className="service-list">
          {data.doing.map((item, index) => (
            <li className="service-item sm:flex sm:items-center" key={index}>
              <div className="service-icon-box hidden sm:block">
                <FontAwesomeIcon
                  className="icon"
                  icon={viewIcon(item.tag)}
                  width={42}
                  height={42}
                />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">{item.title}</h4>

                <p className="service-item-text">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="h3 service-title">Skills</h3>

        <MovingIcons
          items={data.skill}
          direction="left"
          speed="normal"
          pauseOnHover={false}
        />
      </section>
    </article>
  );
};

export default About;
