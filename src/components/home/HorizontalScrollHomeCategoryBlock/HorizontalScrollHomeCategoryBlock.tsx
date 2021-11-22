import styles from "../../../../styles/home/HorizontalScrollHomeCategoryBlock/HorizontalScrollHomeCategoryBlock.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import {useSelector} from "react-redux";
import React from "react";
import {Category} from "../../../redux/header/actions";
import {IRootState} from "../../../store";

export function HorizontalScrollHomeCategoryBlock(props:{category:Category}){
	const videoDetail = useSelector((state:IRootState) => state.home.video);

	return(
    <div className={styles.horizontal_scroll_home_category_block}>
      <section className={styles.horizontal_scroll_home_category_block_section}>
        <header className={styles.header}>
          <h2 className={styles.category_title}>{props.category.name_cn}</h2>
        </header>
        <div className={styles.bottom_content}>
          <div className={styles.main_video}>
            {
              videoDetail.filter((video,index) => index < 1)
              .map((video) =>
                (
                  <Link href={`/video/${video.subcate_name.split("．").join("").split("・").join("")}/${video.id}/${encodeURI(video.title)}`} key={video.id}>
                    <a className={styles.video_block}>
                      <div className={styles.image}>
                        <Image src={video.pic_url} alt="video detail" className="d-block w-100" layout="fill"/>
                      </div>
                      <div className={styles.video_description}>
                        <header className={styles.video_title}>
                          <h2 className={styles.video_title_h2}>{video.title}</h2>
                        </header>
                        <div className={styles.display_date}>{video.display_date}</div>
                      </div>
                    </a>
                  </Link>
                )
              )
            }
          </div>
          <div className={styles.video_list}>
            {
              videoDetail.filter((video,index) => index < 3)
              .map((video) =>
                (
                  <div className={styles.video_block} key={video.id}>
                    <Link href={`/video/${video.subcate_name.split("．").join("").split("・").join("")}/${video.id}/${encodeURI(video.title)}`}>
                      <a className={styles.video_block_section}>
                        <div className={styles.image}>
                          <Image src={video.pic_url} alt="video detail" className="d-block w-100" layout="fill"/>
                        </div>
                        <div className={styles.video_description}>
                          <header className={styles.video_title}>
                            <h2 className={styles.video_title_h2}>{video.title}</h2>
                          </header>
                          <div className={styles.display_date}>{video.display_date}</div>
                        </div>
                      </a>
                    </Link>
                    <div className={styles.video_divider}></div>
                  </div>
                )
              )
            }
            <div className={styles.align_right}>
              <div className={styles.more_button}>
                <div className={styles.more}>查看更多內容</div>
                <div className={styles.arrow}>
                  <FontAwesomeIcon icon="arrow-right" height={11} width={11}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
	)
}