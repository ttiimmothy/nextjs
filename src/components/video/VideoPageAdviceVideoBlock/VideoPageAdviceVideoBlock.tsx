import styles from "../../../../styles/video/VideoPageAdviceVideoBlock/VideoPageAdviceVideoBlock.module.scss";
import Image from "next/image";
import Link from "next/link";
import {VideoDetail} from "../../../redux/home/actions";
import {customImageLoader} from "../../../customImageLoader";

export function VideoPageAdviceVideoBlock(props:{video:VideoDetail}){
  return(
    <div className={styles.video_page_advice_video_block}>
      <Link href={`/video/${props.video.subcate_name.split("．").join("").split("・").join("")}/${props.video.id}/${encodeURI(props.video.title)}`}>
        <a className={styles.video_block}>
          <div className={styles.image}>
					  <Image src={props.video.pic_url} alt="video detail" layout="fill" loader={customImageLoader} onError={(e) => e.currentTarget.style.display = "none"}/>
          </div>
          <div className={styles.video_description}>
            <header className={styles.video_title}>{props.video.title}</header>
            <div className={styles.category_and_date}>
              <div className={styles.category}>{props.video.subcate_name.split("．").join("").split("・").join("")}</div>
              <div className={styles.display_date}>{props.video.display_date}</div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}