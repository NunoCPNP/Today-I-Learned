/* eslint react/jsx-one-expression-per-line: 0 */
import React from 'react';
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaLink,
  FaRegEnvelope
} from 'react-icons/fa';
import { IconContext } from 'react-icons';

const sidebar = () => {
  return (
    <IconContext.Provider value={{ className: 'react-icons' }}>
      <div className="sidebar">
        <div className="sidebar__image">
          <svg
            id="svg"
            width="180"
            height="180"
            viewBox="0, 0, 400,388.05970149253733"
          >
            <g id="svgg">
              <path
                id="path0"
                d="M25.871 25.871 C 24.776 26.965,23.881 43.441,23.881 62.483 L 23.881 97.105 61.194 134.328 L 98.507 171.552 98.507 135.030 L 98.507 98.507 133.537 98.507 L 168.567 98.507 203.687 133.535 L 238.806 168.563 238.806 133.535 L 238.806 98.507 275.328 98.507 L 311.851 98.507 274.627 61.194 L 237.403 23.881 202.284 23.881 L 167.164 23.881 167.164 58.909 L 167.164 93.937 132.045 58.909 L 96.925 23.881 62.393 23.881 C 43.400 23.881,26.965 24.776,25.871 25.871 M167.164 252.239 L 167.164 286.567 130.642 286.567 L 94.119 286.567 131.343 323.881 L 168.567 361.194 203.687 361.194 L 238.806 361.194 238.806 326.866 C 238.806 307.985,239.206 292.537,239.695 292.537 C 240.184 292.537,256.077 308.030,275.012 326.965 L 309.439 361.392 345.018 360.547 L 380.597 359.701 381.443 324.026 L 382.289 288.350 347.162 253.130 C 327.841 233.759,311.005 217.910,309.748 217.910 C 308.491 217.910,307.463 233.358,307.463 252.239 L 307.463 286.567 273.832 286.567 L 240.201 286.567 205.970 252.239 C 187.143 233.358,170.710 217.910,169.452 217.910 C 168.194 217.910,167.164 233.358,167.164 252.239 "
                stroke="none"
                fill="#c10000"
                fillRule="evenodd"
              />
            </g>
          </svg>
        </div>
        <div className="sidebar__text" />
        <div>
          <div className="sidebar__links">
            <FaLink />
            <a
              href="https://www.nunopereira.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.nunopereira.dev
            </a>
          </div>
          <div className="sidebar__links">
            <FaRegEnvelope />
            <p>hello@nunopereiradev.com</p>
          </div>
        </div>
        <div className="sidebar__icons">
          <a
            href="https://github.com/NunoCPNP"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/nuno-pereira-016856191/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/nunopereiradev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default sidebar;
