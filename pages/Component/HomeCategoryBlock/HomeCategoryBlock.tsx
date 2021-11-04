import style from "../../../styles/HomeCategoryBlock/HomeCategoryBlock.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {useSelector} from "react-redux";
import {Category} from "../../redux/header/actions";
import {IRootState} from "../../store";

export function HomeCategoryBlock(props:{category:Category}){
	const videoDetail = useSelector((state:IRootState) => state.home.video);

  return(
    <div className={style.home_category_block}>
      <section className={style.home_category_block_section}>
        <div className={style.main_video}>
          {
            videoDetail.filter((video,index) => index < 1)
            .map((video) =>
              <Link href={`/video/${video.subcate_name}/${video.id}/${video.title}`} key={video.id}>
                <a className={style.video_block}>
                  <div className={style.image}>
                    <Image src={video.pic_url} alt="video-detail" className="d-block w-100" layout="fill"/>
                  </div>
                  <div className={style.video_description}>
                    <header className={style.video_title}>
                      <h2 className={style.video_title_h2}>{video.title}</h2>
                    </header>
                    <div className={style.display_date}>{video.display_date}</div>
                  </div>
                </a>
              </Link>
            )
          }
        </div>
        <div className={style.listing_video}>
          <div className={style.angle_block}>
            <div className={style.header}>
              <h2 className={style.category_title}>{props.category.name_cn}</h2>
              <div className={style.border_line}></div>
            </div>
            {
              videoDetail.filter((video,index) => index < 3)
              .map((video) =>
                <div className={style.video_block} key={video.id}>
                  <Link href={`/video/${video.subcate_name}/${video.id}/${video.title}`}>
                    <a className={style.video_block_section}>
                      <div className={style.image}>
                        <Image src={video.pic_url} alt="video-detail" className="d-block w-100" layout="fill"/>
                      </div>
                      <div className={style.video_description}>
                        <header className={style.video_title}>
                          <h2 className={style.video_title_h2}>{video.title}</h2>
                        </header>
                        <div className={style.display_date}>{video.display_date}</div>
                      </div>
                    </a>
                  </Link>
                  <div className={style.video_divider}></div>
                </div>
              )
            }
            <div className={style.align_right}>
              <div className={style.more_button}>
                <div className={style.more}>查看更多內容</div>
                <div className={style.arrow}>
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