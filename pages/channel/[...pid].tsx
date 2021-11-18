import styles from "../../styles/Channel/Channel.module.scss";
import style from "../../styles/index.module.scss";
import {Swiper,SwiperSlide} from "swiper/react";
import {NextPage} from "next";
import {useRouter} from "next/router";
import Image from "next/image";
import Link from "next/link";
import {useDispatch,useSelector} from "react-redux";
import React,{useEffect,useState} from "react";
import {getContent} from "../redux/category/thunks";
import {TypeHeader} from "../components/TypeHeader/TypeHeader";
import {Footer} from "../components/Footer/Footer";
import {Breadcrumb} from "../components/Breadcrumb/Breadcrumb";
import {IRootState} from "../store";

const SubCategory:NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const {pid} = router.query;
  const videos = useSelector((state:IRootState) => state.category.video);
  const categories = useSelector((state:IRootState) => state.header.category);
  const subcategories = useSelector((state:IRootState) => state.header.subCategory);
  const [search,setSearch] = useState(false);
  const [scrollHeight,setScrollHeight] = useState(0);
  useEffect(() => {
    if(pid){
      const categoryId = (subcategories.filter((subcategory) => subcategory.name_cn.split("．").join("").split("・").join("") === pid[0]))[0]?.cate_id;
      dispatch(getContent(categoryId));
    }
  },[dispatch,subcategories,pid])
  useEffect(() => {
		function updateScrollHeight(){
			setScrollHeight(window.pageYOffset);
		}
		window.addEventListener("scroll",updateScrollHeight);
		return () => {
      window.removeEventListener("scroll",updateScrollHeight);
    }
	},[scrollHeight])

	return(
    <div className={`${styles.channel} ${styles.pid}`}>
      <TypeHeader search={search} setSearch={setSearch}/>
      <div className={`${styles.channel_content} ${style.App}`}>
        <main className={styles.page}>
          <div className={styles.breadcrumb}>
            <Breadcrumb pid={pid} videos={videos} categories={categories} subCategories={subcategories} type="subCategory"/>
          </div>
          <div className={styles.body}>
            <div className={styles.main_content}>
              <div className={`${styles.carousel} subcategory_carousel`}>
                <Swiper
                  navigation
                  pagination={{clickable:true}}
                  spaceBetween={5}
                  loop
                  autoplay={{delay:3000,disableOnInteraction:false}}
                >
                  {
                    videos.filter((video,index) => index < 3 || (index > 8 && index < 12)).map((video) =>
                      <SwiperSlide key={video.id}>
                        <div className={styles.video_block}>
                          <Link href={`/video/${video.subcate_name.split("．").join("").split("・").join("")}/${video.id}/${video.title}`}>
                            <a className={styles.video_block_link}>
                              <div className={styles.image}>
                                <Image src={video.pic_url} alt="video detail" layout="fill"/>
                              </div>
                              <div className={styles.video_description}>
                                <div className={styles.carousel_category}>
                                  <Link href={`/category/${categories.filter((category) => category.cate_id === video.cate_id).map((category) => category.name_en)}`}>
                                    <a>{categories.filter((category) => category.cate_id === video.cate_id).map((category) => category.name_cn)}</a>
                                  </Link>
                                </div>
                                <header className={styles.video_title}>{video.title}</header>
                                <div className={styles.display_date}>{video.display_date}</div>
                              </div>
                            </a>
                          </Link>
                        </div>
                      </SwiperSlide>
                    )
                  }
                </Swiper>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer/>
    </div>
  )
}

export default SubCategory;