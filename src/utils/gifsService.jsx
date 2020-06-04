import React from 'react';
import netflixGif from '../images/netflixGif.gif';
import gifAddictGif from '../images/gifAddictGif.gif';
import learningCatGif from '../images/learningCatGif.gif';
import paintingGif from '../images/paintingGif.gif';
import stephenKingGif from '../images/stephenKingGif.gif';
import stevenSpielbergGif from '../images/stevenSpielbergGif.gif';
import trexGif from '../images/trexGif.gif';
import videoGameGif from '../images/videoGameGif.gif';
import magicTheGatheringGif from '../images/magicTheGatheringGif.gif';

const gifs = {
  gifAddictGif: {
    gifPath: gifAddictGif,
  },
  learningCatGif: {
    gifPath: learningCatGif,
  },
  netflixGif: {
    gifPath: netflixGif,
  },
  paintingGif: {
    gifPath: paintingGif,
  },
  stephenKingGif: {
    gifPath: stephenKingGif,
  },
  stevenSpielbergGif: {
    gifPath: stevenSpielbergGif,
  },
  trexGif: {
    gifPath: trexGif,
  },
  videoGameGif: {
    gifPath: videoGameGif,
  },
  magicTheGatheringGif: {
    gifPath: magicTheGatheringGif,
  },
};

// TODO: HIGH ORDER FUNCTION FOR THIS
class GifService extends React.Component {
  render() {
    let gifToFind = this.props.gifName;
    let gifClass = this.props.gifClass;
    let isGifDeclared = !!gifs[gifToFind];
    if (isGifDeclared) {
      let { gifPath } = gifs[gifToFind];
      return <img src={gifPath} className={gifClass} alt="" />;
    }
    return null;
  }
}
export default GifService;
