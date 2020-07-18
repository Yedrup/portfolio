import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import './header.css';
import Image from '../../utils/image';
import { StaticQuery, graphql } from 'gatsby';
import IconService from '../../utils/IconService';
import BubbleMenu from '../menu/menu';

const ListLink = ({ to, children }) => {
  return (
    <li className="c-header__li">
      <Link
        activeClassName="link_active_path c-button"
        className="c-header__link"
        to={to}
      >
        {children}
      </Link>
    </li>
  );
};
const LinkHref = ({ url, name }) => {
  return (
    <li className="c-header__social">
      <a href={url} rel="noreferrer" target="_blank">
        <IconService
          nameIcon={name}
          iconStyleContext={{
            color: 'var(--headerSocialColor)',
          }}
        />
      </a>
    </li>
  );
};
const Header = ({ siteTitle }) => {
  // console.log('GatsbyLinkProps', GatsbyLinkProps)

  return (
    <StaticQuery
      query={graphql`
        query Header {
          dataJson {
            navigation {
              name
              url
            }
            socialMedias {
              Github {
                name
                url
              }
              Linkedin {
                name
                url
              }
              Twitter {
                name
                url
              }
              mail {
                name
                url
              }
            }
          }
        }
      `}
      render={data => {
        //console.log(data);
        const { navigation, socialMedias } = data.dataJson;
        return (
          <header className="c-header">
            <h1 className="c-header__title">
              <Link
                to="/"
                style={{
                  textDecoration: 'none',
                }}
                className="c-header__title__link"
              >
                <Image imageName="logoExplosionNoBg" />
                <span className="c-header_written-logo">{siteTitle}</span>
              </Link>
            </h1>

            <ul className="c-header__links">
              {navigation.map((link, index) => {
                const { url, name } = link;
                return (
                  <ListLink to={url} key={index}>
                    {name}
                  </ListLink>
                );
              })}
            </ul>

            <BubbleMenu socialLinks={socialMedias} />
            <ul className="c-header__socials">
              {Object.values(socialMedias).map((headerLink, index) => {
                const { url, name } = headerLink;
                return <LinkHref name={name} key={index} url={url} />;
              })}
            </ul>
          </header>
        );
      }}
    />
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
