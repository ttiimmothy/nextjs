import styles from "../../../styles/VideoBlock/VideoBlock.module.scss";
import Image from "next/image";
import Link from "next/link";
import {VideoDetail} from "../../redux/home/actions";

export const VideoBlock = (props:{video:VideoDetail,blockPerRow:number,titleHeight?:number}):JSX.Element => {
	return(
    <div className={styles.video_block} style={{width:(100 / props.blockPerRow) + "%"}}>
      <Link href={`/video/${props.video.subcate_name.split("・").join("")}/${props.video.id}/${props.video.title}`}>
        <a className={styles.video_block_link}>
          <div className={styles.image}>
            <Image src={props.video.pic_url} alt="video detail" layout="fill"/>
          </div>
          <div className={styles.video_description}>
            <header className={styles.video_title} style={{height:props.titleHeight ? props.titleHeight : "fit-content"}}>{props.video.title}</header>
            <div className={styles.display_date}>{props.video.display_date}</div>
          </div>
        </a>
      </Link>
    </div>
	)
}