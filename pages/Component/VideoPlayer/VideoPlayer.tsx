import "video.js/dist/video-js.css";
import "videojs-contrib-ads";
import "videojs-ima";
import videojs from "video.js";
import {useEffect,useRef} from "react";

interface IVideoPlayerProps{
	options:any;
	className?:any;
	ima?:any;
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

export const VideoPlayer:React.FC<IVideoPlayerProps> = (props:{options:any,className?:any,ima?:any}) => {
	const videoNode = useRef<any>();
	const player = useRef<any>();

	useEffect(() => {
		player.current = videojs(videoNode.current,{
			...initialOptions,
			...props.options
		})
    if(props.ima){
      player.current.ima(props.ima);
    }
	},[props.options,props.ima,videoNode,player])

	return <video ref={videoNode} className="vjs-matrix video-js"/>;
}