import styles from "../../../styles/VideoPageListBlock/VideoPageListBlock.module.scss";
import Image from "next/image";
import {VideoDetail} from "../../redux/home/actions";

export function VideoPageListBlock(props:{video:VideoDetail}){
	return(
    <li className={styles.video_block}>
      <div className={styles.video_detail}>
        <div className={styles.image}>
          <Image src={props.video.pic_url} layout="fill" alt="video thumbnail"/>
        </div>
        <div className={styles.video_description}>
          <div className={styles.video_title}>{props.video.title}</div>
          <div className={styles.date}>{props.video.updated_at}</div>
        </div>
      </div>
    </li>
  )
}