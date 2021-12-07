import "video.js/dist/video-js.css";
import "videojs-contrib-ads";
import "videojs-ima";
import videojs from "video.js";
import React,{useEffect,useRef} from "react";

const initialOptions = {
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

export const VideoPlayer = ({options,className = "",ima = "",src,videoRef = "",router}) => {
  const videoNode = useRef(null);
	const player = useRef(null);
  videojs.log.level("error");

	useEffect(() => {
		player.current = videojs(videoNode.current,{
			...initialOptions,
			...options
		})
    if(ima){
      player.current.ima(ima);
    }
    if(player.current.currentSrc() !== src){
      router.events.on("hashChangeStart",player.current.src(src));
    }
	},[options,router,ima,src])

	return <video ref={videoNode} className="vjs-matrix video-js"/>;
}