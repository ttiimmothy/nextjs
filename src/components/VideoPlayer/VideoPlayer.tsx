import "video.js/dist/video-js.css";
import "videojs-contrib-ads";
import "videojs-ima";
import videojs from "video.js";
import {NextRouter} from "next/router";
import React,{useEffect,useRef} from "react";

interface IVideoPlayerProps{
	options:any;
	className?:any;
	ima?:any;
  src?:string;
  videoRef?:React.MutableRefObject<any>;
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

export const VideoPlayer:React.FC<IVideoPlayerProps> = React.memo((props:{options:any,className?:any,ima?:any,src?:string,videoRef?:React.MutableRefObject<any>,router:NextRouter}) => {
  const videoNode = useRef<any>(null);
	const player = useRef<any>(null);
  // videojs.log.level("error");

	useEffect(() => {
		player.current = videojs(videoNode.current,{
			...initialOptions,
			...props.options
		})
    if(player.current && props.ima){
      player.current.ima(props.ima);
    }
    if(player.current.currentSrc() !== props.src){
      props.router.events.on("hashChangeStart",player.current.src(props.src));
    }
	},[props])

	return <video ref={videoNode} className="vjs-matrix video-js"/>;
})