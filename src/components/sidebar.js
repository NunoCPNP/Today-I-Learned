import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

const sidebar = () => {
  const data = useStaticQuery(graphql`
    query profileimgQuery {
      avatar: file(absolutePath: { regex: "/bordered_profile.jpg/" }) {
        childImageSharp {
          fixed(width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <div className="sidebar">
      <div className="sidebar__image">
        <Image fixed={data.avatar.childImageSharp.fixed} />
      </div>
    </div>
  );
};

export default sidebar;
