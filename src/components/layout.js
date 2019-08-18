/* eslint  react/jsx-one-expression-per-line: 0 */
import React, { PureComponent } from 'react';
import { Link } from 'gatsby';

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
            {new Date().getFullYear()}, Built with &nbsp;
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
        <div className="main-container__bio">
          <div>...</div>
        </div>
      </div>
    );
  }
}

export default Layout;
