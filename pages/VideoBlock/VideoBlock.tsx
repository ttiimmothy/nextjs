import styles from "../../styles/VideoBlock/VideoBlock.module.scss";
import {VideoDetail} from "../redux/home/actions";
import Head from "next/head";
import Image from "next/image";

export function VideoBlock(props:{video:VideoDetail,blockPerRow:number,titleHeight?:number}){
	return(
		<a className={styles.video_block} style={{width:(100 / props.blockPerRow) + "%"}} href={`${process.env.NEXT_PUBLIC_REACT_APP_FRONTEND_PATH}/video/${props.video.id}`}>
			<Image src={props.video.pic_url} alt="video-detail" className="d-block w-100" height={100} width={100}/>
			<div className={styles.video_description}>
				<header className={styles.video_title} style={{height:props.titleHeight ? props.titleHeight : "fit-content"}}>{props.video.title}</header>
				<div className={styles.display_date}>{props.video.display_date}</div>
			</div>
		</a>
	)
}