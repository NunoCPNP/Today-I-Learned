/* eslint  react/jsx-one-expression-per-line: 0 */
import React, { PureComponent } from 'react';
import { Link } from 'gatsby';

import Sidebar from './sidebar';

import '../styles/main.scss';

class Layout extends PureComponent {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    if (location.pathname === rootPath) {
      header = (
        <div className="header__root">
          <h1>
            <Link to="/">{title}</Link>
          </h1>
        </div>
      );
    } else {
      header = (
        <div className="header__blog">
          <h3>
            <Link to="/">{title}</Link>
          </h3>
        </div>
      );
    }
    return (
      <div className="main-container">
        <div className="main-container__content">
          <header>{header}</header>
          <main>{children}</main>
          <footer className="main-container__footer">
            ©&nbsp;
            {new Date().getFullYear()}, Built by&nbsp;
            <a
              href="https://www.nunopereira.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nuno Pereira
            </a>
            &nbsp; with &nbsp;
            <a
              href="https://www.gatsbyjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gatsby
            </a>
            &nbsp; and proudly hosted on&nbsp;
            <a
              href="https://www.netlify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify
            </a>
          </footer>
        </div>
        <div className="main-container__sidebar">
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default Layout;
