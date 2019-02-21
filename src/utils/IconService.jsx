import React from "react";
import { IconContext } from "react-icons";
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
  FaAngular
} from "react-icons/fa";

class IconService extends React.Component {
  render() {
    const Icons = [
      { title: "Github", nameIcon: FaGithub },
      { title: "home", nameIcon: FaHome },
      { title: "Linkedin", nameIcon: FaLinkedin },
      { title: "Twitter", nameIcon: FaTwitter},
      { title: "Education", nameIcon: FaGraduationCap},
      { title: "Job", nameIcon: FaBuilding},
      { title: "Skills", nameIcon: FaWrench},
      { title: "download", nameIcon: FaDownload},
      { title: "link", nameIcon: FaLink},
      { title: "mail", nameIcon: FaEnvelope},
    ];
    let iconToFind = this.props.nameIcon;
    let iconStyleContext = this.props.iconStyleContext;
    function getIconComponent(icon) {
      return icon.title === iconToFind;
    }
    let IconName = Icons.find(getIconComponent);
    if(IconName) IconName = IconName.nameIcon;
    else return null

    return (
      <span>
        <IconContext.Provider value={iconStyleContext}>
          <IconName />
        </IconContext.Provider>
      </span>
    );
  }
}

export default IconService;
