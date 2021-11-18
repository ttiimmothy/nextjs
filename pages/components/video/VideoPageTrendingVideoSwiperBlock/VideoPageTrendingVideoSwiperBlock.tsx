import styles from "../../../../styles/video/VideoPageTrendingVideoSwiperBlock/VideoPageTrendingVideoSwiperBlock.module.scss";
import Image from "next/image";
import Link from "next/link";
import {VideoDetail} from "../../../redux/home/actions";

export function VideoPageTrendingVideoSwiperBlock(props:{video:VideoDetail}){
	return(
    <div className={styles.video_page_trending_video_swiper_block}>
      <Link href={`/video/${props.video.subcate_name.split("．").join("").split("・").join("")}/${props.video.id}/${props.video.title}`}>
        <a className={styles.video_block}>
          <div className={styles.image}>
            <Image src={props.video.pic_url} alt="video detail" layout="fill"/>
          </div>
          <div className={styles.video_description}>
            <header className={styles.video_title}>{props.video.title}</header>
            <div className={styles.display_date}>{props.video.display_date}</div>
          </div>
        </a>
      </Link>
    </div>
  )
}