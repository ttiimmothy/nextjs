import "video.js/dist/video-js.css";
import "videojs-contrib-ads";
import "videojs-ima";
<<<<<<< HEAD
=======
import "./Video.scss";
>>>>>>> 33e5c6e24b54367167db8e7a1b78afc2c1808194
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
<<<<<<< HEAD
	muted:false,
=======
	muted:true,
>>>>>>> 33e5c6e24b54367167db8e7a1b78afc2c1808194
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
<<<<<<< HEAD
    if(props.ima){
      player.current.ima(props.ima);
    }
=======
		player.current.ima(props.ima);
		return () => {
			if(player.current){
				player.current.dispose();
			}
		}
>>>>>>> 33e5c6e24b54367167db8e7a1b78afc2c1808194
	},[props.options,props.ima,videoNode,player])

	return <video ref={videoNode} className="vjs-matrix video-js"/>;
}