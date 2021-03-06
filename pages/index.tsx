import styles from "../styles/index.module.scss";
import style from "../styles/home/Home/Home.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Swiper,SwiperSlide} from "swiper/react";
import {Carousel} from "react-bootstrap";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {NextPage} from "next";
import {useDispatch,useSelector} from "react-redux";
import React,{useEffect,useRef,useState} from "react";
import {getHomeDetail} from "../src/redux/home/thunks";
import {IRootState} from "../src/store";
import {HorizontalScrollHomeCategoryBlock} from "../src/components/home/HorizontalScrollHomeCategoryBlock/HorizontalScrollHomeCategoryBlock";
import {HomeCategoryBlock} from "../src/components/home/HomeCategoryBlock/HomeCategoryBlock";
import {VideoBlock} from "../src/components/VideoBlock/VideoBlock";
import {ComponentHeader} from "../src/components/home/ComponentHeader/ComponentHeader";
import {Footer} from "../src/components/Footer/Footer";
import {Header} from "../src/components/home/Header/Header";
import {FullScreenVideoBlock} from "../src/components/FullScreenVideoBlock/FullScreenVideoBlock";
import {customImageLoader} from "../src/customImageLoader";

const Home:NextPage = () => {
  const dispatch = useDispatch();
	const videoDetail = useSelector((state:IRootState) => state.home.video);
	const categoryName = useSelector((state:IRootState) => state.header.category);
  const freeContentBlock = useRef<any>(null);
  const [freeContentBlockWidth,setFreeContentBlockWidth] = useState(0);
  const latestContentBlock = useRef<any>(null);
  const [latestContentBlockWidth,setLatestContentBlockWidth] = useState(0);
  const [scrollHeight,setScrollHeight] = useState(0);
  const [windowDimensions,setWindowDimensions] = useState({width:0,height:0});
	useEffect(() => {
		dispatch(getHomeDetail());
	},[dispatch])
  useEffect(() => {
    function resizeFreeContentBlockWidth(){
      if(freeContentBlock.current){
        setFreeContentBlockWidth(freeContentBlock.current.offsetWidth);
      }
    }
    function resizeLatestContentBlockWidth(){
      if(latestContentBlock.current){
        setLatestContentBlockWidth(latestContentBlock.current.offsetWidth);
      }
    }
    function updateScrollHeight(){
			setScrollHeight(window.pageYOffset);
		}
    function handleResize(){
			setWindowDimensions({width:window.innerWidth,height:window.innerHeight});
		}
    window.addEventListener("resize",resizeFreeContentBlockWidth);
    window.addEventListener("resize",resizeLatestContentBlockWidth);
    window.addEventListener("scroll",updateScrollHeight);
    window.addEventListener("resize",handleResize);
    return () => {
      window.removeEventListener("resize",resizeFreeContentBlockWidth);
      window.removeEventListener("resize",resizeLatestContentBlockWidth);
      window.removeEventListener("scroll",updateScrollHeight);
      window.removeEventListener("resize",handleResize);
    }
	},[scrollHeight])

	return(
		<div className={`${style.home} ${style.index}`}>
      <Head>
        <title>????????????</title>
      </Head>
			<Header/>
      {scrollHeight > 5 &&
        <button className={style.upwards_button} onClick={() => {
          window.scrollTo({
            top:0,
            behavior:"smooth"
          })
        }}>
          <FontAwesomeIcon icon="chevron-up" height={20} width={20}/>
        </button>
      }
      <div className={`${style.home_content} ${styles.App}`}>
        <div className={style.advertisement}></div>
        <main className={style.page}>
          <div className={style.body}>
            <div className={style.main_content}>
              <Carousel className={style.main_carousel}>
                {
                  videoDetail.filter((video,index) => index < 3)
                  .map((video) =>
                    <Carousel.Item key={video.id}>
                      <Link href={`/video/${video.subcate_name.split("???").join("").split("???").join("")}/${video.id}/${encodeURI(video.title)}`}>
                        <a>
                          <div className={`image ${style.carousel_image}`}>
                            <Image src={video.pic_url} alt="slide" layout="fill" loader={customImageLoader} onError={(e) => e.currentTarget.style.display = "none"}/>
                          </div>
                          <Carousel.Caption>
                            <div className="carousel_category">
                            </div>
                            <h6>{video.title}</h6>
                          </Carousel.Caption>
                        </a>
                      </Link>
                      <Link href={`/category/${categoryName.filter((category) => category.cate_id === video.cate_id).map((category) => category.name_en)}`}>
                        <a className={style.category_link}>{categoryName.filter((category) => category.cate_id === video.cate_id).map((category) => category.name_cn)}</a>
                      </Link>
                    </Carousel.Item>
                  )
                }
              </Carousel>
              <div ref={freeContentBlock} className={style.free_content}>
                <section className={style.free_content_section}>
                  <ComponentHeader header="????????????"/>
                  <div className={style.video_list}>
                    {
                      videoDetail.filter((video,index) => index < 3 || (index > 8 && index < 12))
                      .map((video) => {
                        // return???????????????????????????
                        return(
                          freeContentBlockWidth > 590 ?
                          <VideoBlock key={video.id} video={video} blockPerRow={3} titleHeight={40}/> :
                          <VideoBlock key={video.id} video={video} blockPerRow={2} titleHeight={40}/>
                        )
                      })
                    }
                  </div>
                </section>
              </div>
              <div className={style.free_content_mobile}>
                <header className={style.free_content_mobile_header}>
                  <h2>????????????</h2>
                  <div className={style.border_line}/>
                </header>
                <div className={style.video_list}>
                  {videoDetail.filter((video,index) => index < 3 || (index > 8 && index < 12)).map((video) =>
                    <FullScreenVideoBlock video={video} key={video.id}/>
                  )}
                </div>
                <div className={style.more_button}>
                  <section className={style.more_button_section}>
                    <button className={style.see_more}>
                      <div className={style.more}>??????</div>
                      <FontAwesomeIcon icon="chevron-down" className={style.fontawesome_icon} height={12} width={12}/>
                    </button>
                  </section>
                </div>
              </div>
              <div className={style.trending_content}>
                <section className={style.trending_content_section}>
                  <ComponentHeader header="????????????"/>
                  <Swiper
                    spaceBetween={5}
                    slidesPerView={2}
                    slidesPerGroup={2}
                    navigation
                    pagination={{clickable:true}}
                  >
                    {
                      videoDetail.filter((video,index) => index < 3 || (index > 8 && index < 10)).map((video) => {
                        return(
                          <SwiperSlide key={video.id}>
                            <VideoBlock video={video} blockPerRow={1}/>
                          </SwiperSlide>
                        )
                      })
                    }
                  </Swiper>
                </section>
              </div>
              <div className={style.advice_content}>
                <section className={style.advice_content_section}>
                  <ComponentHeader header="????????????"/>
                  <Swiper
                    spaceBetween={5}
                    slidesPerView={2}
                    slidesPerGroup={2}
                    navigation
                    pagination={{clickable:true}}
                  >
                    {
                      videoDetail.filter((video,index) => index < 3 || (index > 8 && index < 10)).map((video) =>
                        <SwiperSlide key={video.id}>
                          <VideoBlock video={video} blockPerRow={1}/>
                        </SwiperSlide>
                      )
                    }
                  </Swiper>
                </section>
              </div>
              <div ref={latestContentBlock} className={style.latest_content}>
                <section className={style.latest_content_section}>
                  <ComponentHeader header="????????????"/>
                  <div className={style.video_list}>
                    {
                      videoDetail.filter((video,index) => index < 3 || (index > 8 && index < 12)).map((video) => {
                        return(
                          latestContentBlockWidth > 590 ?
                          <VideoBlock key={video.id} video={video} blockPerRow={3} titleHeight={40}/> :
                          <VideoBlock key={video.id} video={video} blockPerRow={2} titleHeight={40}/>
                        )
                      })
                    }
                  </div>
                </section>
              </div>
              <div className={style.latest_content_mobile}>
                <header className={style.latest_content_mobile_header}>
                  <h2>????????????</h2>
                  <div className={style.border_line}/>
                </header>
                <div className={style.video_list}>
                  {videoDetail.filter((video,index) => index < 3 || (index > 8 && index < 12)).map((video) =>
                    <FullScreenVideoBlock video={video} key={video.id}/>
                  )}
                </div>
                <div className={style.more_button}>
                  <section className={style.more_button_section}>
                    <button className={style.see_more}>
                      <div className={style.more}>??????</div>
                      <FontAwesomeIcon icon="chevron-down" className={style.fontawesome_icon} height={12} width={12}/>
                    </button>
                  </section>
                </div>
              </div>
            </div>
            <aside className={style.sidebar}>
              <div className={style.latest_content}>
                <section className={style.latest_content_section}>
                  <ComponentHeader header="????????????"/>
                  <div className={style.video_list_scroll}>
                    <div className={style.video_list}>
                      {
                        videoDetail.filter((video,index) => index < 3 || (index > 8 && index < 12)).map((video) =>
                          <VideoBlock key={video.id} video={video} blockPerRow={1}/>
                        )
                      }
                    </div>
                  </div>
                </section>
              </div>
              <div className={style.trending_topic}>
                <section className={style.trending_topic_section}>
                  <header>
                    <div>????????????</div>
                    <div className={style.border_line}></div>
                  </header>
                  <ol className={style.trending_tag_list}>
                    <li className={style.trending_tag_list_item}>
                      <span className={style.tag}>1. ?????????</span>
                    </li>
                    <li className={style.trending_tag_list_item}>
                      <span className={style.tag}>1. ?????????</span>
                    </li>
                    <li className={style.trending_tag_list_item}>
                      <span className={style.tag}>1. ?????????</span>
                    </li>
                    <li className={style.trending_tag_list_item}>
                      <span className={style.tag}>1. ?????????</span>
                    </li>
                    <li className={style.trending_tag_list_item}>
                      <span className={style.tag}>1. ?????????</span>
                    </li>
                    <li className={style.trending_tag_list_item}>
                      <span className={style.tag}>1. ?????????</span>
                    </li>
                  </ol>
                </section>
              </div>
            </aside>
          </div>
        </main>
        <div className={style.member_extended_content}>
          <section className={style.member_extended_content_section}>
            <ComponentHeader header="????????????" color="#fff" padding={0} borderColor="#4d535a"/>
            <div className={style.video_list}>
              {
                videoDetail.filter((video,index) => index < 3 || (index > 8 && index < 10)).map((video) => {
                  return(
                    <Link href={`/video/${video.subcate_name.split("???").join("").split("???").join("")}/${video.id}/${encodeURI(video.title)}`} key={video.id}>
                      <a className={style.video_block}>
                        <div className={style.image}>
                          <Image src={video.pic_url} alt="video detail" layout="fill" loader={customImageLoader} onError={(e) => e.currentTarget.style.display = "none"}/>
                        </div>
                        <div className={style.video_description}>
                          <header className={style.video_title} style={{minHeight:windowDimensions.width < 600?36:42,fontSize:windowDimensions.width < 600?"12px":"14px"}}>{video.title}</header>
                          <div className={style.display_date}>{video.display_date}</div>
                        </div>
                      </a>
                    </Link>
                  )
                })
              }
            </div>
          </section>
        </div>
        <div className={style.large_category_blocks}>
          <section className={style.large_category_blocks_section}>
            {
              categoryName.map((category) => (
                <HomeCategoryBlock key={category.cate_id} category={category}/>
              ))
            }
          </section>
        </div>
        <div className={style.horizontal_scroll_category_blocks}>
          <section className={`${style.horizontal_scroll_category_blocks_section} long_swiper`}>
            <Swiper
              spaceBetween={15}
              slidesPerView="auto"
              navigation
              mousewheel={{forceToAxis:true}}
            >
              {categoryName.map(category =>
                <SwiperSlide className={style.category_block} key={category.cate_id}>
                  <HorizontalScrollHomeCategoryBlock category={category}/>
                </SwiperSlide>
              )}
            </Swiper>
          </section>
        </div>
      </div>
      <Footer/>
		</div>
	)
}

export default Home;