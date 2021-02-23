import React from "react";
import fb from "../images/facebook.svg";
import tw from "../images/twitter.svg";
import ins from "../images/instagram.svg";
import whap from "../images/whatsapp.svg";

const MediaShare = (props) => {
  return (
    <>
      <div className="media-iconContainer">
        <img className="media-icon" src={fb}></img>
        <img className="media-icon" src={tw}></img>
        <img className="media-icon" src={ins}></img>
        <img className="media-icon" src={whap}></img>
      </div>
    </>
  );
};

export default MediaShare;
