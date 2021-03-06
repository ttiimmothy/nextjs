import styles from "../../styles/Category/Category.module.scss";
import style from "../../styles/index.module.scss";
import {Swiper,SwiperSlide} from "swiper/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NextPage} from "next";
import {useRouter} from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {useDispatch,useSelector} from "react-redux";
import React,{useEffect,useState} from "react";
import {getCategoryProps,getContent} from "../../src/redux/category/thunks";
import {VideoDetail} from "../../src/redux/home/actions";
import {Category as CategoryType} from "../../src/redux/header/actions";
import {TypeHeader} from "../../src/components/TypeHeader/TypeHeader";
import {Footer} from "../../src/components/Footer/Footer";
import {Breadcrumb} from "../../src/components/Breadcrumb/Breadcrumb";
import {CategoryComponentHeader} from "../../src/components/CategoryComponentHeader/CategoryComponentHeader";
import {CategoryVideoBlock} from "../../src/components/CategoryVideoBlock/CategoryVideoBlock";
import {WideCategoryVideoBlock} from "../../src/components/WideCategoryVideoBlock/WideCategoryVideoBlock";
import {CategorySwiperBlock} from "../../src/components/CategorySwiperBlock/CategorySwiperBlock";
// import Error404 from "../404";
import {customImageLoader} from "../../src/customImageLoader";
import {IRootState} from "../../src/store";

const Category:NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const {pid} = router.query;
  const videos = useSelector((state:IRootState) => state.category.video);
  const categories = useSelector((state:IRootState) => state.header.category);
  const subCategories = useSelector((state:IRootState) => state.header.subCategory);
  const [scrollHeight,setScrollHeight] = useState(0);
  const [controlledSwiper,setControlledSwiper] = useState<any>(null);
  const [search,setSearch] = useState(false);
  // const categoryCheck = categories.find((category) => category.name_en.toLowerCase().split(" ").join("").split("/").join("") === (pid && pid[0]));
  const categoryId = (categories.filter((category) => category.name_en.toLowerCase().split(" ").join("").split("/").join("") === (pid && pid[0])))[0]?.cate_id;
  const categoryName = (categories.filter((category) => category.name_en.toLowerCase().split(" ").join("").split("/").join("") === (pid && pid[0])))[0]?.name_cn;
  let swiperList = videos.filter((video,index) => index < 3 || (index > 8 && index < 12));
  swiperList = swiperList.reverse();
  if(swiperList.length > 0){
    for(let i = 0; i < 3; i++){
      swiperList.push(swiperList.shift() as VideoDetail);
    }
  }
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
    <div className={`${styles.category} ${styles.pid}`}>
		  <Head>
        <title>{categoryName}</title>
      </Head>
      <TypeHeader search={search} setSearch={setSearch}/>
      <header className={`${scrollHeight > 10 ? styles.category_header_scroll : styles.category_header} ${search ? styles.category_header_for_searching : ""}`}>
        <div className={`${styles.separate_category_color} ${categoryName === "??????" ? styles.news_color : categoryName === "????????????" ? styles.finance_color : categoryName === "??????????????????" ? styles.opentv_color : categoryName === "??????" ? styles.entertainment_color : categoryName === "??????" ? styles.drama_color : categoryName === "??????" ? styles.sports_color : categoryName === "??????" ? styles.horse_color : categoryName === "Fit????????????" ? styles.fit_zone_color : ""}`}>
          <div className={styles.category_header_width}>
            <div className={styles.flex_header}>
              <h2>{categories.filter((category) => category.cate_id === categoryId).map((category) => category.name_cn)}</h2>
              <div className={styles.shadow}>
                <div className={styles.sub_category_bar_horizontal_scroll}>
                  <nav className={styles.sub_category_bar}>
                    <ul className={styles.sub_category_items}>
                      <li className={`${styles.sub_category_item} ${styles.active}`}>
                        <Link href={`/category/${pid && pid[0]}`}>
                          <a>??????</a>
                        </Link>
                      </li>
                      {
                        subCategories.filter((subCategory) => subCategory.cate_id === categoryId).map((subCategory,index) =>
                          (
                            <li className={styles.sub_category_item} key={index}>
                              <Link href={`/channel/${subCategory.name_cn.split("???").join("").split("???").join("")}/${subCategory.subcate_id}`}>
                                <a>{subCategory.name_cn.split("???").join("").split("???").join("")}</a>
                              </Link>
                            </li>
                          )
                        )
                      }
                    </ul>
                  </nav>
                </div>
                </div>
            </div>
          </div>
        </div>
      </header>
      <div className={`${search ? styles.category_content_for_searching : scrollHeight > 10 ? styles.category_content_scroll : styles.category_content} ${style.App}`}>
        <main className={styles.page}>
          <div className={styles.breadcrumb}>
            <Breadcrumb pid={pid} videos={videos} categories={categories} type="category"/>
          </div>
          <div className={styles.body}>
            <div className={styles.main_content}>
              <div className={`${styles.carousel} category_carousel`}>
                <Swiper
                  navigation
                  pagination={{clickable:true}}
                  spaceBetween={5}
                  loop
                  effect="fade"
                  autoplay={{delay:3000,disableOnInteraction:false}}
                  controller={{control:controlledSwiper,inverse:true}}
                >
                  {
                    videos.filter((video,index) => index < 3 || (index > 8 && index < 12)).map((video) =>
                      <SwiperSlide key={video.id}>
                        <div className={styles.video_block}>
                          <Link href={`/video/${video.subcate_name.split("???").join("").split("???").join("")}/${video.id}/${encodeURI(video.title)}`}>
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
              <div className={`${styles.side_carousel} category_side_carousel`}>
                <Swiper
                  direction="vertical"
                  spaceBetween={2}
                  slidesPerView={3}
                  slidesPerGroup={1}
                  loop
                  onSwiper={setControlledSwiper}
                >
                  {
                    swiperList.map((video) =>
                      <SwiperSlide key={video.id}>
                        <div className={styles.video_block}>
                          <Link href={`/video/${video.subcate_name.split("???").join("").split("???").join("")}/${video.id}/${encodeURI(video.title)}`}>
                            <a className={styles.video_block_link}>
                              <div className={styles.image}>
                                <Image src={video.pic_url} alt="video detail" layout="fill" loader={customImageLoader} onError={(e) => e.currentTarget.style.display = "none"}/>
                              </div>
                              <header className={styles.video_title}>{video.title}</header>
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
        <div className={`long_swiper ${styles.category_long_swiper}`}>
          {subCategories.filter((subCategory) => subCategory.cate_id === categoryId).length > 0 && <CategoryComponentHeader header={(subCategories.filter((subCategory) => subCategory.cate_id === categoryId))[0].name_cn.split("???").join("").split("???").join("")} swiper={true}/>}
          <div className={styles.long_swiper}>
            <Swiper
              spaceBetween={3}
              slidesPerView="auto"
              slidesPerGroup={2}
              navigation
              pagination={{clickable:true}}
              mousewheel={{forceToAxis:true}}
            >
              {subCategories.filter((subCategory) => subCategory.cate_id === categoryId).length > 0 && videos.filter((video) => video.subcate_id === ((subCategories.filter((subCategory) => subCategory.cate_id === categoryId))[0] && (subCategories.filter((subCategory) => subCategory.cate_id === categoryId))[0].subcate_id)).filter((video,index) => index < 10).map((video) =>
                <SwiperSlide className={style.category_block} key={video.id}>
                  <CategorySwiperBlock video={video}/>
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </div>
        {subCategories.filter((subCategory) => subCategory.cate_id === categoryId).length > 1 &&
          <div className={styles.big_block_sub_category}>
            <section className={styles.big_block_sub_category_section}>
              {subCategories.filter((subCategory) => subCategory.cate_id === categoryId).length > 1 && <CategoryComponentHeader header={(subCategories.filter((subCategory) => subCategory.cate_id === categoryId))[1].name_cn.split("???").join("").split("???").join("")}/>}
              <div className={styles.video_list}>
                {videos.filter((video) => video.subcate_id === (subCategories.filter((subCategory) => subCategory.cate_id === categoryId))[1].subcate_id).filter((video,index) => index < 1).map((video) =>
                  <WideCategoryVideoBlock video={video} main={true} key={video.id}/>
                )}
                {videos.filter((video) => video.subcate_id === (subCategories.filter((subCategory) => subCategory.cate_id === categoryId))[1].subcate_id).filter((video,index) => index === 1).map((video) =>
                  <WideCategoryVideoBlock video={video} key={video.id}/>
                )}
                {videos.filter((video) => video.subcate_id === (subCategories.filter((subCategory) => subCategory.cate_id === categoryId))[1].subcate_id).filter((video,index) => index > 1 && index < 5).map((video) =>
                  <CategoryVideoBlock video={video} key={video.id}/>
                )}
              </div>
              <div className={styles.more_button}>
                <section className={styles.more_button_section}>
                  <button className={styles.see_more}>
                    <div className={styles.more}>??????</div>
                    <FontAwesomeIcon icon="chevron-down" className={styles.fontawesome_icon} height={12} width={12}/>
                  </button>
                </section>
              </div>
            </section>
          </div>
        }
        {subCategories.filter((subCategory) => subCategory.cate_id === categoryId).length > 2 &&
          <div className={styles.sub_category}>
            <section className={styles.sub_category_section}>
              {subCategories.filter((subCategory) => subCategory.cate_id === categoryId).length > 2 && <CategoryComponentHeader header={(subCategories.filter((subCategory) => subCategory.cate_id === categoryId))[2].name_cn.split("???").join("").split("???").join("")}/>}
              <div className={styles.video_list}>
                {videos.filter((video) => video.subcate_id === (subCategories.filter((subCategory) => subCategory.cate_id === categoryId))[2].subcate_id).filter((video,index) => index < 1).map((video) =>
                  <CategoryVideoBlock video={video} main={true} key={video.id}/>
                )}
                {videos.filter((video) => video.subcate_id === (subCategories.filter((subCategory) => subCategory.cate_id === categoryId))[2].subcate_id).filter((video,index) => index > 0 && index < 6).map((video) =>
                  <CategoryVideoBlock video={video} key={video.id}/>
                )}
              </div>
              <div className={styles.more_button}>
                <section className={styles.more_button_section}>
                  <button className={styles.see_more}>
                    <div className={styles.more}>??????</div>
                    <FontAwesomeIcon icon="chevron-down" className={styles.fontawesome_icon} height={12} width={12}/>
                  </button>
                </section>
              </div>
            </section>
          </div>
        }
        {subCategories.filter((subCategory) => subCategory.cate_id === categoryId).length > 3 &&
          <div className={styles.dark_background_block}>
            <section className={styles.dark_background_block_section}>
              <CategoryComponentHeader header={(subCategories.filter((subCategory) => subCategory.cate_id === categoryId))[3].name_cn.split("???").join("").split("???").join("")} color="#fff" borderColor="#4d535a"/>
              <div className={styles.video_list}>
                {videos.filter((video) => video.subcate_id === (subCategories.filter((subCategory) => subCategory.cate_id === categoryId))[3].subcate_id).filter((video,index) => index < 1).map((video) =>
                  <Link href={`/video/${video.subcate_name.split("???").join("").split("???").join("")}/${video.id}/${encodeURI(video.title)}`} key={video.id}>
                    <a className={styles.main_video_block}>
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
                {videos.filter((video) => video.subcate_id === (subCategories.filter((subCategory) => subCategory.cate_id === categoryId))[3].subcate_id).filter((video,index) => index > 0 && index < 3).map((video) =>
                  <Link href={`/video/${video.subcate_name.split("???").join("").split("???").join("")}/${video.id}/${encodeURI(video.title)}`} key={video.id}>
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
              <div className={styles.more_button}>
                <section className={styles.more_button_section}>
                  <button className={styles.see_more}>
                    <div className={styles.more}>??????</div>
                    <FontAwesomeIcon icon="chevron-down" className={styles.fontawesome_icon} height={12} width={12}/>
                  </button>
                </section>
              </div>
            </section>
          </div>
        }
        {subCategories.filter((subCategory) => subCategory.cate_id === categoryId).length > 4 && subCategories.filter((subCategory) => subCategory.cate_id === categoryId).filter((subCategory,index) => index > 3).map((subCategory) =>
          <div className={styles.sub_category} key={subCategory.subcate_id}>
            <section className={styles.sub_category_section}>
              <CategoryComponentHeader header={subCategory.name_cn}/>
              <div className={styles.video_list}>
                {videos.filter((video) => video.subcate_id === subCategory.subcate_id).filter((video,index) => index < 1).map((video) =>
                  <CategoryVideoBlock video={video} main={true} key={video.id}/>
                )}
                {videos.filter((video) => video.subcate_id === subCategory.subcate_id).filter((video,index) => index > 0 && index < 6).map((video) =>
                  <CategoryVideoBlock video={video} key={video.id}/>
                )}
              </div>
              <div className={styles.more_button}>
                <section className={styles.more_button_section}>
                  <button className={styles.see_more}>
                    <div className={styles.more}>??????</div>
                    <FontAwesomeIcon icon="chevron-down" className={styles.fontawesome_icon} height={12} width={12}/>
                  </button>
                </section>
              </div>
            </section>
          </div>
        )}
        <div className={styles.closest_videos}>
          <section className={styles.closest_videos_section}>
          <div className={styles.component_header}>
              <div>????????????</div>
            </div>
            <div className={styles.video_list}>
              {videos.filter((video,index) => index < 2).map((video) =>
                <CategoryVideoBlock video={video} key={video.id}/>
              )}
              <div className={styles.blank_block}>
                <div className={styles.blank}>
                  <div className={styles.flex_grow}></div>
                </div>
              </div>
              {videos.filter((video,index) => index > 1 && index < 100).map((video,index) =>
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

export async function getStaticPaths(){
  const pid = await getCategoryProps();
  const paths = pid.map((id:CategoryType) => ({
    params:{
      pid:[id.name_en.toLowerCase().split(" ").join("").split("/").join("")]
    }
  }))
  return{
    paths,
    fallback:false
  }
}

export async function getStaticProps(context:any){
  let params:string|null;
  if(context.params.pid){
    params = context.params.pid;
  }else{
    params = null;
  }
  const existingCategory = await getCategoryProps();
  if(params && !existingCategory.find((category:CategoryType) => category.name_en.toLowerCase().split(" ").join("").split("/").join("") === (params && params[0]))){
    // this will display your /pages/404.js error page,
    // in the current page, with the 404 http status code.
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

export default Category;