import styles from "../../styles/Channel/Channel.module.scss";
import style from "../../styles/index.module.scss";
import {Swiper,SwiperSlide} from "swiper/react";
import {NextPage} from "next";
import {useRouter} from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {useDispatch,useSelector} from "react-redux";
import React,{useEffect,useState} from "react";
import {getContent} from "../../src/redux/category/thunks";
import {getChannelProps} from "../../src/redux/channel/thunks";
import {SubCategory as SubcategoryType} from "../../src/redux/header/actions";
import {TypeHeader} from "../../src/components/TypeHeader/TypeHeader";
import {Footer} from "../../src/components/Footer/Footer";
import {Breadcrumb} from "../../src/components/Breadcrumb/Breadcrumb";
import {WideCategoryVideoBlock} from "../../src/components/WideCategoryVideoBlock/WideCategoryVideoBlock";
import {CategoryVideoBlock} from "../../src/components/CategoryVideoBlock/CategoryVideoBlock";
import {customImageLoader} from "../../src/customImageLoader";
import {IRootState} from "../../src/store";

const SubCategory:NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const {pid} = router.query;
  const videos = useSelector((state:IRootState) => state.category.video);
  const categories = useSelector((state:IRootState) => state.header.category);
  const subcategories = useSelector((state:IRootState) => state.header.subCategory);
  const [search,setSearch] = useState(false);
  const [scrollHeight,setScrollHeight] = useState(0);
  const categoryId = (subcategories.filter((subcategory) => subcategory.subcate_id === (pid && pid[1])))[0]?.cate_id;
  const categoryName = (categories.filter((category) => category.cate_id === categoryId))[0]?.name_cn;
  useEffect(() => {
    // correct the url and do not refresh the page
    if(subcategories.find((subcategory) => subcategory.subcate_id === (pid && pid[1])) && decodeURIComponent(router.asPath).split("/")[2] !== subcategories.find((subcategory) => subcategory.subcate_id === (pid && pid[1]))?.name_cn.split("．").join("").split("・").join("")){
      router.push(`/channel/${subcategories.find((subcategory) => subcategory.subcate_id === (pid && pid[1]))?.name_cn.split("．").join("").split("・").join("")}/${pid && pid[1]}`,undefined,{shallow:true});
    }
  },[pid,router,subcategories])
  useEffect(() => {
    dispatch(getContent(categoryId));
  },[dispatch,categoryId])
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
      <Head>
        <title>{subcategories.filter((subcategory) => subcategory.subcate_id === (pid && pid[1])).map((subcategory) => subcategory.name_cn.split("．").join("").split("・").join(""))}</title>
      </Head>
      <TypeHeader search={search} setSearch={setSearch}/>
      <header className={`${scrollHeight > 10 ? styles.category_header_scroll : styles.category_header} ${search ? styles.category_header_for_searching : ""}`}>
        <div className={`${styles.separate_category_color} ${categoryName === "新聞" ? styles.news_color : categoryName === "財經資訊" ? styles.finance_color : categoryName === "開電視任你睇" ? styles.opentv_color : categoryName === "娛樂" ? styles.entertainment_color : categoryName === "劇集" ? styles.drama_color : categoryName === "體育" ? styles.sports_color : categoryName === "賽馬" ? styles.horse_color : categoryName === "Fit開新領域" ? styles.fit_zone_color : ""}`}>
          <div className={styles.category_header_width}>
            <div className={styles.flex_header}>
              <h2>{categories.filter((category) => category.cate_id === categoryId).map((category) => category.name_cn)}</h2>
              <div className={styles.shadow}>
                <div className={styles.sub_category_bar_horizontal_scroll}>
                  <nav className={styles.sub_category_bar}>
                    <ul className={styles.sub_category_items}>
                      <li className={styles.sub_category_item}>
                        <Link href={`/category/${categories.filter((category) => category.cate_id === categoryId).map((category) => category.name_en.toLowerCase().split(" ").join("").split("/").join(""))}`}>
                          <a>全部</a>
                        </Link>
                      </li>
                      {
                        subcategories.filter((subCategory) => subCategory.cate_id === categoryId).map((subCategory,index) => {
                          return(
                            <li className={`${styles.sub_category_item} ${subCategory.subcate_id === (pid && pid[1]) ? styles.active : ""}`} key={index}>
                              <Link href={`/channel/${subCategory.name_cn.split("．").join("").split("・").join("")}/${subCategory.subcate_id}`}>
                                <a>{subCategory.name_cn.split("．").join("").split("・").join("")}</a>
                              </Link>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </nav>
                </div>
                </div>
            </div>
          </div>
        </div>
      </header>
      <div className={`${search ? styles.channel_content_for_searching : scrollHeight > 10 ? styles.channel_content_scroll : styles.channel_content} ${style.App}`}>
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
                    videos.filter((video) => video.subcate_id === (pid && pid [1])).filter((video,index) => index < 6).map((video) =>
                      <SwiperSlide key={video.id}>
                        <div className={styles.video_block}>
                          <Link href={`/video/${video.subcate_name.split("．").join("").split("・").join("")}/${video.id}/${encodeURI(video.title)}`}>
                            <a className={styles.video_block_link}>
                              <div className={styles.image}>
                                <Image src={video.pic_url} alt="video detail" layout="fill" loader={customImageLoader} onError={(e) => e.currentTarget.style.display = "none"}/>
                              </div>
                            </a>
                          </Link>
                          <div className={styles.video_description}>
                            <div className={styles.carousel_category}>
                              <Link href={`/category/${categories.filter((category) => category.cate_id === video.cate_id).map((category) => category.name_en)}`}>
                                <a>{categories.filter((category) => category.cate_id === video.cate_id).map((category) => category.name_cn)}</a>
                              </Link>
                            </div>
                            <header className={styles.video_title}>{video.title}</header>
                            <div className={styles.display_date}>{video.display_date}</div>
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                  }
                </Swiper>
              </div>
            </div>
            <div className={styles.main_video_list}>
              <div className={styles.video_list}>
                {videos.filter((video) => video.subcate_id === (pid && pid[1])).filter((video,index) => index > 5 && index < 9).map((video) =>
                  <WideCategoryVideoBlock video={video} main={true} key={video.id}/>
                )}
                {videos.filter((video) => video.subcate_id === (pid && pid[1])).filter((video,index) => index === 9).map((video) =>
                  <WideCategoryVideoBlock video={video} key={video.id}/>
                )}
                {videos.filter((video) => video.subcate_id === (pid && pid[1])).filter((video,index) => index > 9 && index < 13).map((video) =>
                  <CategoryVideoBlock video={video} key={video.id}/>
                )}
              </div>
            </div>
          </div>
        </main>
        <div className={styles.dark_background_block}>
          <section className={styles.dark_background_block_section}>
            <div className={styles.video_list}>
              {videos.filter((video) => video.subcate_id === (pid && pid[1])).filter((video,index) => index > 12 && index < 16).map((video) =>
                <Link href={`/video/${video.subcate_name.split("．").join("").split("・").join("")}/${video.id}/${encodeURI(video.title)}`} key={video.id}>
                  <a className={styles.video_block}>
                    <div className={styles.image_width}>
                      <div className={styles.image}>
                        <Image src={video.pic_url} alt="video detail" layout="fill" loader={customImageLoader} onError={(e) => e.currentTarget.style.display = "none"}/>
                      </div>
                    </div>
                    <header className={styles.video_title}>{video.title}</header>
                    <div className={styles.display_date}>{video.display_date}</div>
                  </a>
                </Link>
              )}
            </div>
          </section>
        </div>
        <div className={styles.closest_videos}>
          <section className={styles.closest_videos_section}>
          <div className={styles.component_header}>
              <div>最新影片</div>
            </div>
            <div className={styles.video_list}>
              {videos.filter((video) => video.subcate_id === (pid && pid[1])).filter((video,index) => index > 15 && index < 18).map((video) =>
                <CategoryVideoBlock video={video} key={video.id}/>
              )}
              <div className={styles.blank_block}>
                <div className={styles.blank}>
                  <div className={styles.flex_grow}></div>
                </div>
              </div>
              {videos.filter((video) => video.subcate_id === (pid && pid[1])).filter((video,index) => index > 17 && index < 120).map((video,index) =>
                (
                  (index + 1) % 6 === 0 ?
                  <div className={styles.blank_block} key={index}>
                    <div className={styles.blank}>
                      <div className={styles.flex_grow}></div>
                    </div>
                  </div>
                    :
                  <CategoryVideoBlock video={video} key={video.id}/>
                )
              )}
            </div>
          </section>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export async function getServerSideProps(context:any){
  const params = context.params.pid;
  const existingSubcategory = await getChannelProps();
  if(!existingSubcategory.find((subcategory:SubcategoryType) => subcategory.subcate_id === params[1])){
    return{
      notFound:true
    }
  }
  return{
    props:{
      params
    }
  }
}

export default SubCategory;