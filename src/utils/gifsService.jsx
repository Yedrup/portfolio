import React from "react";
import netflixGif from '../images/netflixGif.gif'
import gifAddictGif from '../images/gifAddictGif.gif'
import learningCatGif from '../images/learningCatGif.gif'
import paintingGif from '../images/paintingGif.gif'
import stephenKingGif from '../images/stephenKingGif.gif'
import stevenSpielbergGif from '../images/stevenSpielbergGif.gif'
import trexGif from '../images/trexGif.gif'
import videoGameGif from '../images/videoGameGif.gif'





class GifService extends React.Component {
  render() {
    const gifs = [
      { title: "gifAddictGif", nameGif: gifAddictGif },
      { title: "learningCatGif", nameGif: learningCatGif },
      { title: "netflixGif", nameGif: netflixGif },
      { title: "paintingGif", nameGif: paintingGif},
      { title: "stephenKingGif", nameGif: stephenKingGif},
      { title: "stevenSpielbergGif", nameGif: stevenSpielbergGif},
      { title: "trexGif", nameGif: trexGif},
      { title: "videoGameGif", nameGif: videoGameGif}
    ];
    let gifToFind = this.props.nameGif;
    let gifClass = this.props.gifClass;
    function getGifComponent(gif) {
      return gif.title === gifToFind;
    }
    let gifName = gifs.find(getGifComponent);
    if(gifName) gifName = gifName.nameGif;
    else return null

    return (
        <img src={gifName} className={gifClass} alt=''/>
    );
  }
}

export default GifService;
