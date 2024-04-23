import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "../../data/data.json";
import { faCalendar, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Sidebar = () => {
  return (
    <aside className="sidebar" data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <div style={{ width: "100%" }}>
            <Image
              src="/assets/images/my-avatar.png"
              alt={data.profile.name}
              width={0}
              height={0}
              sizes="(80%)"
            />
          </div>
        </figure>

        <div className="info-content">
          <h1 className="name" title={data.profile.name}>
            {data.profile.name}
          </h1>

          <p className="title">{data.profile.title}</p>
        </div>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <FontAwesomeIcon className="icon" icon={faEnvelope} width={20} />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a href={`mailto:${data.profile.email}`} className="contact-link">
                {data.profile.email}
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <FontAwesomeIcon className="icon" icon={faPhone} width={20} />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href={`tel:${data.profile.phone}`} className="contact-link">
                {data.profile.phone}
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <FontAwesomeIcon className="icon" icon={faCalendar} width={20} />
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>

              <time>{data.profile.birthday}</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <FontAwesomeIcon
                className="icon"
                icon={faLocationDot}
                width={20}
              />
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>{data.profile.location}</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a
              href={data.profile.linkedin}
              target="_blank"
              className="social-link"
            >
              <FontAwesomeIcon className="icon" icon={faLinkedin} width={20} />
            </a>
          </li>

          <li className="social-item">
            <a
              href={data.profile.github}
              target="_blank"
              className="social-link"
            >
              <FontAwesomeIcon className="icon" icon={faGithub} width={20} />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
