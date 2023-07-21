import React, { useState,useEffect,useRef } from "react";
function SoundBtn({videoRef,status}){
  const userClicked  = useRef(false);
    const [signal,setSignal] = useState(false);
    const toggleMute = () => {
        if (videoRef.current) {
          videoRef.current.muted = !videoRef.current.muted;
           userClicked.current = true;
          if(videoRef.current.muted){
            setSignal(false);
          }
          else
          {
            setSignal(true);
          }
        }
      };
      const muteSound = ()=>{
          if(window.scrollY > 500){
            videoRef.current.pause();
            if(!videoRef.current.muted){
              videoRef.current.muted = true;
            }
          }
          else{
             if(videoRef.current.paused){
               videoRef.current.play();
               if(userClicked.current){
                if(signal){
                  videoRef.current.muted = false;
                }
               }
             }
          }
      }
      useEffect(()=>{
        window.addEventListener("scroll",muteSound);
        return()=>window.removeEventListener("scroll",muteSound);
},[signal]);
      const iconName = signal
        ? 'volume-high-outline'
        : 'volume-mute-outline';
    
      return (
        <button onClick={toggleMute} className={status?"":"hide-img"}>
          <ion-icon name={iconName}></ion-icon>
        </button>
      );
}
export default SoundBtn;