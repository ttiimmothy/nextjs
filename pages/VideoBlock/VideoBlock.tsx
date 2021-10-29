import styles from "../../styles/VideoBlock/VideoBlock.module.scss";
import Image from "next/image";
import Link from "next/link";
import {NextPage} from "next";
import {VideoDetail} from "../redux/home/actions";

export const VideoBlock = (props:{video:VideoDetail,blockPerRow:number,titleHeight?:number}):JSX.Element => {
	return(
    <Link href={`/video/${props.video.id}}`}>
      <a className={styles.video_block} style={{width:(100 / props.blockPerRow) + "%"}}>
        <div className={styles.image}>
          <Image src={props.video.pic_url} alt="video-detail" className="d-block w-100" layout="fill"/>
        </div>
        <div className={styles.video_description}>
          <header className={styles.video_title} style={{height:props.titleHeight ? props.titleHeight : "fit-content"}}>{props.video.title}</header>
          <div className={styles.display_date}>{props.video.display_date}</div>
        </div>
      </a>
    </Link>
	)
}