import React from 'react';
import './section.css';
import { Link } from 'gatsby';
import Image from '../../utils/image';

const Section = ({ url, color, name, description, img }) => {
  return (
    <Link className="c-section__link" to={url}>
      <div className="c-section--on-image" style={{ backgroundColor: color }}>
        <div className="c-section__content">
          <h2 className="c-section__name">{name}</h2>
          <p className="">{description}</p>
        </div>
        <Image className="c-section__image" imageName={img} />
      </div>
    </Link>
  );
};

export default Section;
