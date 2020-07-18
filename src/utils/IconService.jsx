import React from 'react';
import { IconContext } from 'react-icons';
import {
  FaHome,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaBuilding,
  FaWrench,
  FaGraduationCap,
  FaDownload,
  FaLink,
  FaEnvelope,
} from 'react-icons/fa';

const icons = {
  Github: {
    nameIcon: FaGithub,
  },
  Home: {
    nameIcon: FaHome,
  },
  Linkedin: {
    nameIcon: FaLinkedin,
  },
  Twitter: {
    nameIcon: FaTwitter,
  },
  Education: {
    nameIcon: FaGraduationCap,
  },
  Job: {
    nameIcon: FaBuilding,
  },
  Skills: {
    nameIcon: FaWrench,
  },
  Download: {
    nameIcon: FaDownload,
  },
  link: {
    nameIcon: FaLink,
  },
  mail: {
    nameIcon: FaEnvelope,
  },
};

// TODO: HIGH ORDER FUNCTION FOR THIS
class IconService extends React.Component {
  render() {
    let iconToFind = this.props.nameIcon;
    let iconStyleContext = this.props.iconStyleContext;

    let isIconDeclared = !!icons[iconToFind];
    if (isIconDeclared) {
      let { nameIcon } = icons[iconToFind];
      let IconName = nameIcon;
      return (
        <span>
          <IconContext.Provider value={iconStyleContext}>
            <IconName />
          </IconContext.Provider>
        </span>
      );
    }
    return null;
  }
}

export default IconService;
