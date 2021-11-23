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
	muted:false,
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
  videojs.log.level("error");

	useEffect(() => {
		player.current = videojs(videoNode.current,{
			...initialOptions,
			...props.options
		})
    if(props.ima){
      player.current.ima(props.ima);
    }
    props.router.events.on("hashChangeStart",function(){
      if(player.current.currentSrc() !== props.src){
        player.current.src(props.src);
      }
    })
	},[props])

	return <video ref={videoNode} className="vjs-matrix video-js"/>;
})