import { bubble as BubbleMenuC } from 'react-burger-menu';
import React, { Component } from 'react';
import './menu.css';
import cv from '../../document/purdey_chambraud_cv_front_end-en.pdf';
import { Link, StaticQuery, graphql } from 'gatsby';
import Image from '../../utils/image';
import IconService from '../../utils/IconService';

// TODO: create component, see how to manage classes
const ListLink = ({ to, children }) => {
  return (
    <li className="bm-item">
      <Link
        activeClassName="c-menu_link_active_path"
        className="c-menu_link"
        to={to}
      >
        {children}
      </Link>
    </li>
  );
};

const LinkHref = ({ url, name }) => {
  return (
    <li className="bm-item">
      <a href={url} target="_blank" rel="noreferrer" className="c-menu_link ">
        <IconService nameIcon={name} iconStyleContext={{ color: '#FFF' }} />
      </a>
    </li>
  );
};

class BubbleMenu extends Component {
  state = {
    menuOpen: false,
  };

  closeMenu = () => {
    if (this.state.menuOpen) {
      this.setState({ menuOpen: false });
    }
  };
  isMenuOpen = state => {
    // console.log('state', state)
    this.setState({ menuOpen: state.isOpen });
  };

  render() {
    let socialLinks = { ...this.props.socialLinks };
    return (
      <StaticQuery
        query={graphql`
          query BubbleMenu {
            dataJson {
              buttons {
                buttonDownload
              }
              menu {
                name
                url
              }
            }
          }
        `}
        render={data => {
          const { menu, buttons } = data.dataJson;
          return (
            <BubbleMenuC
              width={250}
              right
              isOpen={this.state.menuOpen}
              className={
                this.state.menuOpen ? 'c-menu c-menu-opened' : 'c-menu'
              }
              onStateChange={this.isMenuOpen}
            >
              <Link className="c-menu-logo" to="/">
                <Image imageName="trexNoBg" />
              </Link>
              <ul className="bm-item-list" role="navigation">
                {menu.map((link, index) => {
                  const { url, name } = link;
                  return (
                    <ListLink to={url} key={index}>
                      {name}
                    </ListLink>
                  );
                })}
              </ul>
              <ul className="c-menu__socials">
                {Object.values(socialLinks).map((link, index) => {
                  const { url, name } = link;
                  return <LinkHref name={name} key={index} url={url} />;
                })}
              </ul>
              <div className="c-resume-section--menu">
                <a
                  href={cv}
                  target="_blank"
                  rel="noreferrer"
                  className="c-button c-resume-button--menu"
                >
                  <IconService
                    nameIcon="Download"
                    iconStyleContext={{
                      color: '',
                      style: { marginRight: '1rem' },
                    }}
                  />
                  {buttons.buttonDownload}
                </a>
              </div>
              <div
                className={
                  this.state.menuOpen ? 'c-menu__area-clickToClose' : ''
                }
                role="button"
                onClick={() => {
                  if (this.state.menuOpen) this.closeMenu();
                }}
              ></div>
            </BubbleMenuC>
          );
        }}
      />
    );
  }
}

export default BubbleMenu;
