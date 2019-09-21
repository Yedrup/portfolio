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
    // TODO: change array to obj
    const gifs = [
      { title: "gifAddictGif", gifName: gifAddictGif },
      { title: "learningCatGif", gifName: learningCatGif },
      { title: "netflixGif", gifName: netflixGif },
      { title: "paintingGif", gifName: paintingGif},
      { title: "stephenKingGif", gifName: stephenKingGif},
      { title: "stevenSpielbergGif", gifName: stevenSpielbergGif},
      { title: "trexGif", gifName: trexGif},
      { title: "videoGameGif", gifName: videoGameGif}
    ];
    let gifToFind = this.props.gifName;
    let gifClass = this.props.gifClass;
    function getGifComponent(gif) {
      return gif.title === gifToFind;
    }
    let gifName = gifs.find(getGifComponent);
    if(gifName) gifName = gifName.gifName;
    else return null

    return (
        <img src={gifName} className={gifClass} alt=''/>
    );
  }
}

export default GifService;
