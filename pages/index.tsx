import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";
import "swiper/swiper.min.css";
import style from "../styles/Home/Home.module.scss";
import styles from "../styles/index.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {faChevronUp,fas} from "@fortawesome/free-solid-svg-icons";
import SwiperCore,{Navigation,Pagination,Scrollbar,Mousewheel} from "swiper";
import {Swiper,SwiperSlide} from "swiper/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {NextPage} from "next";
import {Carousel} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import React,{useEffect,useRef,useState} from "react";
import {getHomeDetail} from "./redux/home/thunks";
import {getHeader} from "./redux/header/thunks";
import {IRootState} from "./store";
import {HomeCategoryBlock} from "./HomeCategoryBlock/HomeCategoryBlock";
import {VideoBlock} from "./VideoBlock/VideoBlock";
import {ComponentHeader} from "./ComponentHeader/ComponentHeader";
import {Footer} from "./Footer/Footer";
import {Header} from "./Header/Header";
import {useWindowDimensions} from "./redundant/useWindowDimensions/useWindowDimensions";
library.add(fab,fas,faChevronUp);
SwiperCore.use([Navigation,Pagination,Scrollbar,Mousewheel]);

const Home:NextPage = () => {
	const dispatch = useDispatch();
	const videoDetail = useSelector((state:IRootState) => state.home.video);
	const categoryName = useSelector((state:IRootState) => state.header.category);
  const block = useRef<any>(null);
  const [blockWidth,setBlockWidth] = useState(0);
  const [scrollHeight,setScrollHeight] = useState(0);
  const {width,height} = useWindowDimensions();
	useEffect(() => {
		dispatch(getHomeDetail());
    dispatch(getHeader())
	},[dispatch])
  useEffect(() => {
    function resizeBlockWidth(){
      setBlockWidth(block.current.offsetWidth);
    }
    window.addEventListener("resize",resizeBlockWidth);
    return () => window.removeEventListener("resize",resizeBlockWidth);
	},[])
  useEffect(() => {
		function updateScrollHeight(){
			setScrollHeight(window.pageYOffset);
		}
		window.addEventListener("scroll",updateScrollHeight);
		return () => window.removeEventListener("scroll",updateScrollHeight);
	},[scrollHeight])

	return(
		<div className={`${style.home} ${styles.App}`}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="./image/swiper.ico"/>
      </Head>
			<Header/>
			<div className={style.advertisement}></div>
      {scrollHeight > 5 &&
        <button className={style.upwards_button} onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          })
        }}>
          <FontAwesomeIcon icon="chevron-up" height={20} width={20}/>
        </button>
      }
      <main className={style.page}>
				<div className={style.body}>
					<div className={style.main_content}>
						<Carousel className={style.main_carousel}>
							{
								videoDetail.filter((video,index) => index < 3)
								.map((video) =>
									<Carousel.Item key={video.id}>
                    <Link href={`/video/${video.id}`}>
                      <a>
                        <div className="image">
                          <Image className="d-block w-100" src={video.pic_url} alt="slide" layout="fill"/>
                        </div>
                        <Carousel.Caption>
                          <div className="carousel_category">
                            <Link href={`/${categoryName.filter((category) => category.cate_id === video.cate_id).map((category) => category.name_en)}`}>
                              <a>{categoryName.filter((category) => category.cate_id === video.cate_id).map((category) => category.name_cn)}</a>
                            </Link>
                          </div>
                          <h6>{video.title}</h6>
                        </Carousel.Caption>
                      </a>
                    </Link>
									</Carousel.Item>
								)
							}
						</Carousel>
						<div ref={block} className={style.free_content}>
							<section className={style.free_content_section}>
								<ComponentHeader header="免費任睇"/>
								<div className={style.video_list}>
									{
										videoDetail.filter((video,index) => index < 3)
										.map((video) => {
                      // return同括號一定要同一衘
                      return(
                        blockWidth > 590 ?
                        <VideoBlock key={video.id} video={video} blockPerRow={3} titleHeight={40}/> :
                        <VideoBlock key={video.id} video={video} blockPerRow={2} titleHeight={40}/>
                      )
                    })
									}
									{
										videoDetail.filter((video,index) => index > 8 && index < 12)
										.map((video) => {
                      return(
                        blockWidth > 590 ?
                        <VideoBlock key={video.id} video={video} blockPerRow={3} titleHeight={40}/> :
                        <VideoBlock key={video.id} video={video} blockPerRow={2} titleHeight={40}/>
                      )
                    })
									}
								</div>
							</section>
						</div>
						<div className={style.trending_content}>
							<section className={style.trending_content_section}>
								<ComponentHeader header="熱門影片"/>
								<Swiper
									spaceBetween={5}
									slidesPerView={2}
									slidesPerGroup={2}
									navigation
									pagination={{clickable:true}}
								>
									{
										videoDetail.filter((video,index) => index < 3)
										.map((video) => {
                      return(
                        <SwiperSlide key={video.id}>
                          <VideoBlock video={video} blockPerRow={1}/>
                        </SwiperSlide>
										  )
                    })
									}
                  {
										videoDetail.filter((video,index) => index > 8 && index < 10)
										.map((video) => {
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
								<ComponentHeader header="推薦影片"/>
								<Swiper
									spaceBetween={5}
									slidesPerView={2}
									slidesPerGroup={2}
									navigation
									pagination={{clickable:true}}
								>
									{
										videoDetail.filter((video,index) => index < 3)
										.map((video) =>
											<SwiperSlide key={video.id}>
												<VideoBlock video={video} blockPerRow={1}/>
											</SwiperSlide>
										)
									}
                  {
										videoDetail.filter((video,index) => index > 8 && index < 10)
										.map((video) => {
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
            <div className={style.latest_content}>
							<section className={style.latest_content_section}>
								<ComponentHeader header="最新影片"/>
								<Swiper
									spaceBetween={5}
									slidesPerView={2}
									slidesPerGroup={2}
									navigation
									pagination={{clickable:true}}
								>
									{
										videoDetail.filter((video,index) => index < 3)
										.map((video) =>
											<SwiperSlide key={video.id}>
												<VideoBlock video={video} blockPerRow={1}/>
											</SwiperSlide>
										)
									}
                  {
										videoDetail.filter((video,index) => index > 8 && index < 12)
										.map((video) => {
                      return(
                        <SwiperSlide className={style.video_block} key={video.id}>
                          <VideoBlock video={video} blockPerRow={1}/>
                        </SwiperSlide>
										  )
                    })
									}
								</Swiper>
							</section>
						</div>
					</div>
					<aside className={style.sidebar}>
						<div className={style.latest_content}>
							<section className={style.latest_content_section}>
								<ComponentHeader header="最新影片"/>
                <div className={style.video_list_scroll}>
                  <div className={style.video_list}>
                    {
                      videoDetail.filter((video,index) => index < 3)
                      .map((video) =>
                        <VideoBlock key={video.id} video={video} blockPerRow={1}/>
                      )
                    }
                    {
                      videoDetail.filter((video,index) => index > 8 && index < 12)
                      .map((video) =>
                        <VideoBlock key={video.id} video={video} blockPerRow={1}/>
                      )
                    }
                  </div>
                </div>
							</section>
						</div>
            <div className={style.trending_topic}>
              <section className={style.trending_topic_section}>
                <header>熱門話題</header>
                <ol className={style.trending_tag_list}>
                  <li className={style.trending_tag_list_item}>1. 李雲迪</li>
                  <li className={style.trending_tag_list_item}>1. 李雲迪</li>
                  <li className={style.trending_tag_list_item}>1. 李雲迪</li>
                  <li className={style.trending_tag_list_item}>1. 李雲迪</li>
                  <li className={style.trending_tag_list_item}>1. 李雲迪</li>
                  <li className={style.trending_tag_list_item}>1. 李雲迪</li>
                </ol>
              </section>
            </div>
					</aside>
				</div>
			</main>
      <div className={style.member_extended_content}>
        <section className={style.member_extended_content_section}>
          <ComponentHeader header="會員專區" color="#fff" padding={0} borderColor="#4d535a"/>
          <div className={style.video_list}>
            {
              videoDetail.filter((video,index) => index < 3)
              .map((video) => {
                return(
                  <Link href={`/video/${video.id}`} key={video.id}>
                    <a className={style.video_block}>
                      <div className={style.image}>
                        <Image src={video.pic_url} alt="video-detail" className="d-block w-100" layout="fill"/>
                      </div>
                      <div className={style.video_description}>
                        <header className={style.video_title} style={{fontSize:width < 600 ? 12 : 14}}>{video.title}</header>
                        <div className={style.display_date}>{video.display_date}</div>
                      </div>
                    </a>
                  </Link>
                )
              })
            }
            {
              videoDetail.filter((video,index) => index > 8 && index < 10)
              .map((video) => {
                return(
                  <Link href={`/video/${video.id}`} key={video.id}>
                    <a className={style.video_block}>
                      <div className={style.image}>
                        <Image src={video.pic_url} alt="video-detail" className="d-block w-100" layout="fill"/>
                      </div>
                      <div className={style.video_description}>
                        <header className={style.video_title}>{video.title}</header>
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
              <SwiperSlide key={category.cate_id}>
                <div className={style.category_block}>
                  <section className={style.category_block_section}>
                    <header className={style.header}>
                      <h2 className={style.category_title}>{category.name_cn}</h2>
                    </header>
                    <div className={style.bottom_content}>
                      <div className={style.main_video}>
                        {
                          videoDetail.filter((video,index) => index < 1)
                          .map((video) =>
                            <Link href={`/video/${video.id}`} key={video.id}>
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
                        {
                          videoDetail.filter((video,index) => index < 3)
                          .map((video) =>
                            <div className={style.video_block} key={video.id}>
                              <Link href={`/video/${video.id}`}>
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
              </SwiperSlide>
            )}
          </Swiper>
        </section>
      </div>
      <Footer/>
		</div>
	)
}

export default Home;