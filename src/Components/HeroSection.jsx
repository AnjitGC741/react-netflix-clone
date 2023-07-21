import React,{useEffect, useRef, useState} from "react";
import StrangerThings from "../assests/Img/stranger-things.jpg";
import wednesday from "../assests/Img/wednesday.jpg";
import ourPlanet from "../assests/Img/ourPlanet.jpg";
import ourPlanetText from "../assests/Img/ourPlanetText.png";
import wednesdayText from "../assests/Img/wenesday-text.png"
import strangerThingText from "../assests/Img/strangerThingText.png"
import netflixLogo from "../assests/Img/netflix-logo2.png";
import wednesdayVideo from "../assests/Video/wednesday.mp4";
import strangerThingVideo from "../assests/Video/strangerThingVideo.mp4";
import ourPlanetVideo from "../assests/Video/ourPlanetVideo.mp4";
import Button from "./Button";
import SoundBtn from "./SoundBtn";
import "../assests/Css/HeroSection.css";
function HeroSection(){
    const randomInRange = useRef(Math.floor(Math.random() * 3));
    const [displayImg,setDisplayImg] = useState(false);
    const videoRef = useRef(null);
    useEffect(()=>{
        setTimeout(function() {
            setDisplayImg(true);
          }, 5000);
    },[])
   const movieSeriesData = [
    {
        "genreImg":wednesday,
        "video":wednesdayVideo,
        "restriction":"18+",
        "genre":"SERIES",
        "genreText":wednesdayText,
        "description":" When a deliciously wicked prank gets Wednesday expelled, her parents ship her off to Nevermore Academy, the boarding school where they fell in love."
    },
    {
        "genreImg":StrangerThings,
        "video":strangerThingVideo,
        "restriction":"18+",
        "genre":"SERIES",
        "genreText":strangerThingText,
        "description":" Will's connection to a shdowy evil grows stronger, but no one's quite sure how to stop it. Elsewhere, Dustin and Steve forge an unlikely bond."
    },
    {
        "genreImg":ourPlanet,
        "video":ourPlanetVideo,
        "restriction":"10+",
        "genre":"DOCUMENTRY",
        "genreText":ourPlanetText,
        "description":" Witness the planet's breath taking diversity -- from seabirds carpet-bombing the ocean to wildbeests eluding teh dogs of the Serengeti."
    }

   ]
    return (
        <div className="hero-section__main-div">
            <div className="hero-section__img">
                <img className={displayImg?"hide-img":""} src={movieSeriesData[randomInRange.current].genreImg} alt="hero section" />
                <video className={displayImg?"":"hide-img"}  ref={videoRef}  src={movieSeriesData[randomInRange.current].video}  autoPlay loop muted/>
            </div>
            <div className="hero-section__secondary-div">
            <div className="hero-section__description">
                <div className="hero-section__image-name__genre-type">
                    <div className="hero-section-netflix-logo">
                        <img src={netflixLogo} alt="" />
                    </div>
                    <h1>{movieSeriesData[randomInRange.current].genre}</h1>
                </div>
                <div className="hero-section__image-name">
                    <img src={movieSeriesData[randomInRange.current].genreText} alt="" />
                </div>
                <div className="hero-section__movie-description">
                    <p>
                      {movieSeriesData[randomInRange.current].description}
                    </p>
                </div>
                <div className="play-and-info__btn">
                    <Button iconType="caret-forward-outline" value="Play" color="#ffffff" textColor="black" hoverColor="#afafaf"/>
                    <Button iconType="information-circle-outline" value="More Info" color="rgba(109, 109, 110, 0.7)" textColor="#ffffff" hoverColor="rgba(143,143,143,0.7)"/>
                </div> 
            </div>
            <div className="sound-btn-and-restrictions">
                <div className="sound-btn-and-restrictions__secondary-div">
                       <SoundBtn status={displayImg} videoRef={videoRef}/>
                       <p>{movieSeriesData[randomInRange.current].restriction}</p>
                </div>
            </div>
            </div>
            <div className="hero-section__buttom-gradient">

            </div>
        </div>
    )
}
export default HeroSection;