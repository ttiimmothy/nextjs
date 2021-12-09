import "video.js/dist/video-js.css";
import "videojs-contrib-ads";
import "videojs-ima";
import videojs from "video.js";
import {NextRouter} from "next/router";
import React,{useEffect,useRef} from "react";
import {config} from "../../config";

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
    const onReady = (player:any) => {
      if(props.ima){
        player.ima(props.ima);
      }
    }
    if(!player.current){
      player.current = videojs(videoNode.current,{
        ...initialOptions,
        ...props.options
      },() => {
        onReady && onReady(player.current);
      })
    }
    const handleRouteChange = (url:string,params:{shallow:any}) => {
      const {shallow} = params;
      player.current.ima.changeAdTag(null);
      player.current.ima.adsResponse = config.vodPreroll;
      player.current.ima.requestAds();
      player.current.src(props.src);
      player.current.play();
    }
    props.router.events.on("routeChangeStart",handleRouteChange);
    // return() => {
    //   if(player.current && player.current.currentSrc() !== props.src) {
    //     /* Invalid target for null#trigger; must be a DOM node or evented object */
    //     player.current.dispose();
    //   }
    // }
	},[props])

	return <video ref={videoNode} className="vjs-matrix video-js"/>;
}