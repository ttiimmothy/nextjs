import "video.js/dist/video-js.css";
import "videojs-contrib-ads";
import "videojs-ima";
import "./Video.scss";
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
	muted:true,
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
		player.current.ima(props.ima);
		return () => {
			if(player.current){
				player.current.dispose();
			}
		}
	},[props.options,props.ima,videoNode,player])

	return <video ref={videoNode} className="vjs-matrix video-js"/>;
}