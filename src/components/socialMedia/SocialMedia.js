import React from "react";
import "./SocialMedia.scss";
import { socialMediaLinks } from "../../portfolio";

export default function SocialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }

  return (
    <div className="social-media-div">

      {socialMediaLinks.github && (
        <a
          href={socialMediaLinks.github}
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
      )}

      {socialMediaLinks.kaggle && (
        <a
          href={socialMediaLinks.kaggle}
          className="icon-button kaggle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-kaggle"></i>
        </a>
      )}

      {socialMediaLinks.linkedin && (
        <a
          href={socialMediaLinks.linkedin}
          className="icon-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      )}

      {socialMediaLinks.gmail && (
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${socialMediaLinks.gmail}`}
          className="icon-button google"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-envelope"></i>
        </a>
      )}

      {socialMediaLinks.youtube && (
        <a
          href={socialMediaLinks.youtube}
          className="icon-button youtube"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-youtube"></i>
        </a>
      )}

      {socialMediaLinks.tiktok && (
        <a
          href={socialMediaLinks.tiktok}
          className="icon-button tiktok"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-tiktok"></i>
        </a>
      )}

    </div>
  );
}