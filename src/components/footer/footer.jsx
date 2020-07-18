import React from 'react';
import './footer.css';
import { StaticQuery, graphql } from 'gatsby';
import IconService from '../../utils/IconService';

const LinkHref = ({ url, name }) => {
  return (
    <li className="c-footer__social">
      <a href={url} rel="noreferrer" target="_blank">
        <IconService
          nameIcon={name}
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
        const { footer } = data.dataJson;
        return (
          <footer className="c-footer">
            <ul className="c-footer__socials">
              {footer.map(link => {
                const { name, url } = link;
                return <LinkHref name={name} key={name} url={url} />;
              })}
            </ul>
          </footer>
        );
      }}
    />
  );
};

export default Footer;
