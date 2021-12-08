import "video.js/dist/video-js.css";
import "videojs-contrib-ads";
import "videojs-ima";
import videojs from "video.js";
import {NextRouter} from "next/router";
import React,{useEffect,useRef} from "react";

interface IVideoPlayerProps{
	options:any;
	ima?:any;
  src?:string;
  router:NextRouter;
}

const initialOptions:any = {
	controls:true,
	autoplay:true,
	muted:true,
	fluid:true,
	controlBar:{
		volumePanel:{
			inline:false
		}
	}
}

export const VideoPlayer:React.FC<IVideoPlayerProps> = (props:{options:any,ima?:any,src?:string,router:NextRouter}) => {
  const videoNode = useRef<any>(null);
	const player = useRef<any>(null);

	useEffect(() => {
    if(!player.current){
      player.current = videojs(videoNode.current,{
        ...initialOptions,
        ...props.options
      })
    }
    console.log(player.current.ima);
    if(props.ima){
      player.current.ima(props.ima);
    }
    if(player.current.currentSrc() !== props.src){
      props.router.events.on("hashChangeStart",player.current.src(props.src));
    }
    // return() => {
    //   if(player.current && player.current.currentSrc() !== props.src) {
    //     /* Invalid target for null#trigger; must be a DOM node or evented object */
    //     player.current.dispose();
    //   }
    // }
	},[props])

	return <video ref={videoNode} className="vjs-matrix video-js"/>;
}