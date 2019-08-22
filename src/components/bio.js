/* eslint react/jsx-one-expression-per-line: 0 */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile_image.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  const { author, social } = data.site.siteMetadata;
  return (
    <div className="bio">
      <Image
        className="bio__img"
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        imgStyle={{
          borderRadius: `50%`
        }}
      />
      <p>
        Written by <span>{author}</span>
        <br />a Portuguese self-taught Front-End Developer.
      </p>
    </div>
  );
};

export default Bio;
