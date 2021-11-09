import "video.js/dist/video-js.css";
import styles from "../../../styles/VideoPlayer/VideoPlayer.module.scss";
import "videojs-contrib-ads";
import "videojs-ima";
import videojs from "video.js";
import {useCallback,useEffect,useState} from "react";

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
  const [videoEl,setVideoEl] = useState(null)
  const onVideo = useCallback((el) => {
    setVideoEl(el)
  },[])

  useEffect(() => {
    if (videoEl === null){
      return;
    }
    const player = videojs(videoEl,{
      ...initialOptions,
      ...props.options
    })
    if(props.ima){
      player.ima(props.ima);
    }
  },[props,videoEl])

	return <video ref={onVideo} className={`vjs-matrix video-js ${styles.video_player}`}/>;
}