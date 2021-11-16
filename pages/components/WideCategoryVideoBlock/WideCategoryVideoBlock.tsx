import styles from "../../../styles/WideCategoryVideoBlock/WideCategoryVideoBlock.module.scss";
import Image from "next/image";
import Link from "next/link";
import {VideoDetail} from "../../redux/home/actions";

export const WideCategoryVideoBlock = (props:{video:VideoDetail,padding?:number}):JSX.Element => {
	return(
    <div className={styles.wide_category_video_block} style={{padding:props.padding ? props.padding : 3}}>
      <Link href={`/video/${props.video.subcate_name.split("・").join("")}/${props.video.id}/${props.video.title}`}>
        <a className={styles.video_block_link}>
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