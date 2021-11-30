import styles from "../../../styles/WideCategoryVideoBlock/WideCategoryVideoBlock.module.scss";
import Image from "next/image";
import Link from "next/link";
import {VideoDetail} from "../../redux/home/actions";
import {customImageLoader} from "../../customImageLoader";

export const WideCategoryVideoBlock = (props:{video:VideoDetail,main?:boolean}):JSX.Element => {
	return(
    <div className={styles.wide_category_video_block}>
      <Link href={`/video/${props.video.subcate_name.split("．").join("").split("・").join("")}/${props.video.id}/${encodeURI(props.video.title)}`}>
        <a className={props.main ? styles.main_video_block_link : styles.video_block_link}>
          <div className={props.main ? styles.main_image_width : styles.image_width}>
            <div className={styles.image}>
              <Image src={props.video.pic_url} alt="video detail" layout="fill" loader={customImageLoader} onError={(e) => e.currentTarget.style.display = "none"}/>
            </div>
          </div>
          <header className={styles.video_title}>{props.video.title}</header>
          <div className={styles.display_date}>{props.video.display_date}</div>
        </a>
      </Link>
    </div>
	)
}