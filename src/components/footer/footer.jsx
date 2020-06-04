import PropTypes from 'prop-types';
import React from 'react';
import './footer.css';
import { StaticQuery, graphql, Link } from 'gatsby';
import IconService from '../../utils/IconService';

const LinkHref = props => {
  return (
    <li className="c-footer__social">
      <a href={props.url} target="_blank">
        <IconService
          nameIcon={props.name}
          iconStyleContext={{
            className: 'c-footer_links',
            color: 'var(--footerSocialColor)',
          }}
        />
      </a>
    </li>
  );
};

const Footer = () => {
  return (
    <StaticQuery
      query={graphql`
        query Footer {
          dataJson {
            footer {
              name
              url
            }
          }
        }
      `}
      render={data => {
        // console.log(data)
        return (
          <footer className="c-footer">
            <ul className="c-footer__socials">
              {data.dataJson.footer.map(link => {
                return (
                  <LinkHref name={link.name} key={link.name} url={link.url} />
                );
              })}
            </ul>
          </footer>
        );
      }}
    />
  );
};

export default Footer;
