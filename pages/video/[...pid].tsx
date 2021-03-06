import style from "../../styles/index.module.scss";
import styles from "../../styles/video/Video/Video.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Swiper,SwiperSlide} from "swiper/react";
import "video.js/dist/video-js.css";
import "videojs-contrib-ads";
import "videojs-ima";
import videojs from "video.js";
import likeCount from "../../public/image/emoji.png";
import happyCount from "../../public/image/emoji2.png";
import sadCount from "../../public/image/emoji3.png";
import angryCount from "../../public/image/emoji4.png";
import like from "../../public/image/emoji.gif";
import happy from "../../public/image/emoji2.gif";
import sad from "../../public/image/emoji3.gif";
import angry from "../../public/image/emoji4.gif";
import {NextPage} from "next";
import {useRouter} from "next/router";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import {Modal} from "react-bootstrap";
import React,{useEffect,useRef,useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {getContent} from "../../src/redux/category/thunks";
import {getVideo} from "../../src/redux/video/thunks";
import {PageHeader} from "../../src/components/video/pageHeader/PageHeader/PageHeader";
import {PageFooter} from "../../src/components/video/PageFooter/PageFooter";
import {CommentSection} from "../../src/components/video/comment/CommentSection/CommentSection";
import {VideoPageListBlock} from "../../src/components/video/VideoPageListBlock/VideoPageListBlock";
import {VideoPageTrendingVideoSwiperBlock} from "../../src/components/video/VideoPageTrendingVideoSwiperBlock/VideoPageTrendingVideoSwiperBlock";
import {VideoPageAdviceVideoBlock} from "../../src/components/video/VideoPageAdviceVideoBlock/VideoPageAdviceVideoBlock";
import {EmojiNumberDetailModal} from "../../src/components/video/EmojiNumberDetailModal/EmojiNumberDetailModal";
import {PageHeaderMobileMenu} from "../../src/components/video/pageHeader/PageHeaderMobileMenu/PageHeaderMobileMenu";
import LikeButtonWithEmojiBox from "../../src/components/video/LikeButtonWithEmojiBox/LikeButtonWithEmojiBox";
import ShareButtonWithShareBox from "../../src/components/video/ShareButtonWithShareBox/ShareButtonWithShareBox";
import MoreOptionsButtonWithMoreBox from "../../src/components/video/MoreOptionsButtonWithMoreBox/MoreOptionsButtonWithMoreBox";
import {Breadcrumb} from "../../src/components/Breadcrumb/Breadcrumb";
import {VideoPlayer} from "../../src/components/VideoPlayer/VideoPlayer";
import {customImageLoader} from "../../src/customImageLoader";
import {config} from "../../src/config";
import {IRootState} from "../../src/store";

const Video:NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const {pid} = router.query;
  const videos = useSelector((state:IRootState) => state.category.video);
  const categories = useSelector((state:IRootState) => state.header.category);
  const subCategories = useSelector((state:IRootState) => state.header.subCategory);
  const videoUrl = useSelector((state:IRootState) => state.video.videoUrl.stream_url);
  const [openEmoji,setOpenEmoji] = useState(false);
  const [emojiNumberDetail,setEmojiNumberDetail] = useState(false);
  const [toggle,setToggle] = useState(true);
  const [search,setSearch] = useState(false);
  const [smallWord,setSmallWord] = useState(false);
  const [mediumWord,setMediumWord] = useState(true);
  const [largeWord,setLargeWord] = useState(false);
  const [scrollHeight,setScrollHeight] = useState(0);
  const [windowDimensions,setWindowDimensions] = useState({width:0,height:0});
  const displayDateOffset = useRef<any>(null);
  const scrollToComment = useRef<any>(null);
  let video = pid ? (videos.filter((video) => video.id === pid[1]))[0] : null;
  let imaOptions = {
    adTagUrl:config.vodPreroll,
    adLabel:"",
    autoPlayAdBreaks:true
  }
  const videoJsOptions = {
    sources:[
      {
        src:videoUrl,
        type:"application/x-mpegURL"
      }
    ]
  }
  useEffect(() => {
    dispatch(getVideo(pid));
    const categoryId = (subCategories.filter((subCategory) => subCategory.name_cn.split("???").join("").split("???").join("") === (pid && pid[0])))[0]?.cate_id;
    dispatch(getContent(categoryId));
  },[dispatch,pid,subCategories])
  useEffect(() => {
		function updateScrollHeight(){
			setScrollHeight(window.pageYOffset);
		}
    function handleResize(){
			setWindowDimensions({width:window.innerWidth,height:window.innerHeight});
		}
		window.addEventListener("scroll",updateScrollHeight);
		window.addEventListener("resize",handleResize);
		return () => {
      window.removeEventListener("scroll",updateScrollHeight);
      window.removeEventListener("resize",handleResize);
    }
  },[scrollHeight])

	return(
    <div className={`${styles.video} ${styles.pid}`}>
      <Head>
        <title>{videos.filter((video) => video.id === (pid && pid[1])).map((video) => video.title)}</title>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://imasdk.googleapis.com/js/sdkloader/ima3.js" defer={true}></script>
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="https://googleads.github.io/videojs-ima/dist/videojs.ima.css"/>
      </Head>
      <PageHeader
        toggle={toggle}
        openToggle={setToggle}
        search={search}
        openSearch={setSearch}
        displayDateOffset={displayDateOffset.current ? displayDateOffset.current.getBoundingClientRect().top : 120}
        displayDateOffsetForPageHeaderTopButtons={displayDateOffset.current ? displayDateOffset.current.getBoundingClientRect().top : 0}
        smallWord={smallWord} mediumWord={mediumWord}
        largeWord={largeWord}
        setSmallWord={setSmallWord}
        setMediumWord={setMediumWord}
        setLargeWord={setLargeWord}
        video={video}
        windowWidth={windowDimensions.width}
        scrollToComment={scrollToComment}
      />
      <PageHeaderMobileMenu toggle={toggle}/>
      <div className={`${style.App} ${styles.video_content}`} onClick={() => {
        setOpenEmoji(false);
      }}>
        <main className={styles.page}>
          <div className={styles.breadcrumb}>
            <Breadcrumb pid={pid} videos={videos} categories={categories} type="video"/>
          </div>
          <div className={styles.body}>
            <div className={styles.main_content}>
              {video &&
                <div className={styles.video_player_with_description}>
                  <header className={styles.video_header}>
                    <div className={styles.video_information} key={video.id}>
                      <div className={styles.video_subcategory}>{video.subcate_name.split("???").join("").split("???").join("")}</div>
                      <div className={styles.video_title}>{video.title}</div>
                      <div className={styles.video_date} ref={displayDateOffset}>{video.updated_at}</div>
                    </div>
                    <div className={!displayDateOffset.current ? styles.top_buttons : (windowDimensions.width < 700 && displayDateOffset.current.getBoundingClientRect().top < 65) || (windowDimensions.width >= 700 && displayDateOffset.current.getBoundingClientRect().top < 15) ? styles.hide_top_buttons : styles.top_buttons}>
                      <LikeButtonWithEmojiBox
                        displayDateOffset={displayDateOffset.current ? displayDateOffset.current.getBoundingClientRect().top : 120}
                        windowWidth={windowDimensions.width}
                      />
                      <button className={styles.comment_button} onClick={() => {
                        scrollToComment.current.scrollIntoView({
                          block:"center"
                        })
                      }}>
                        <FontAwesomeIcon icon={["far","comment-alt"]} height={14} width={14} className={styles.fontawesome_icon}/>
                        <div className={styles.number}>10</div>
                      </button>
                      <ShareButtonWithShareBox
                        displayDateOffset={displayDateOffset.current ? displayDateOffset.current.getBoundingClientRect().top : 120}
                        windowWidth={windowDimensions.width}
                      />
                      <MoreOptionsButtonWithMoreBox
                        smallWord={smallWord}
                        mediumWord={mediumWord}
                        largeWord={largeWord}
                        setSmallWord={setSmallWord}
                        setMediumWord={setMediumWord}
                        setLargeWord={setLargeWord}
                        displayDateOffset={displayDateOffset.current ? displayDateOffset.current.getBoundingClientRect().top : 100}
                        windowWidth={windowDimensions.width}
                      />
                    </div>
                  </header>
                  <div className={styles.video_player}>
                    {videoUrl && <VideoPlayer options={videoJsOptions} src={videoUrl} router={router} ima={imaOptions}/>}
                    {/* <video ref={videoNode} className="vjs-matrix video-js"/>; */}
                  </div>
                  <div className={`${styles.video_description} ${smallWord ? styles.small_word : ""} ${largeWord ? styles.large_word : ""}`}>
                    <div>{video.desc}</div>
                  </div>
                </div>
              }
              <div className={styles.tag_list}>
                <div className={styles.tag}>??????</div>
                <div className={styles.tag}>?????????</div>
              </div>
              <div className={styles.comment_row}>
                <div className={styles.like_and_comments_count}>
                  <div className={styles.emoji_comments_count} onClick={() => {
                    setEmojiNumberDetail(true);
                  }}>
                    <div className={styles.emoji_comments}>
                      <div className={`${styles.emoji_comment} ${styles.like_emoji}`}>
                        <Image src={likeCount} alt="like count" layout="fill" loader={customImageLoader}/>
                      </div>
                      <div className={`${styles.emoji_comment} ${styles.happy_emoji}`}>
                        <Image src={happyCount} alt="happy count" layout="fill" loader={customImageLoader}/>
                      </div>
                      <div className={`${styles.emoji_comment} ${styles.sad_emoji}`}>
                        <Image src={sadCount} alt="sad count" layout="fill" loader={customImageLoader}/>
                      </div>
                      <div className={`${styles.emoji_comment} ${styles.angry_emoji}`}>
                        <Image src={angryCount} alt="angry count" layout="fill" loader={customImageLoader}/>
                      </div>
                    </div>
                    <span>40</span>
                  </div>
                  <Modal show={emojiNumberDetail} className="emoji_number_detail">
                    <EmojiNumberDetailModal closeButton={setEmojiNumberDetail}/>
                  </Modal>
                  <div className={styles.comment_button} onClick={() => {
                    scrollToComment.current.scrollIntoView({
                      block:"center"
                    })
                  }}>10 ??????</div>
                </div>
              </div>
              <section className={styles.emoji_comment_section}>
                <div className={styles.emoji}>
                  <div className={`${styles.emoji_image} ${styles.like}`}>
                    <Image src={like} layout="fill" alt="like" loader={customImageLoader}/>
                  </div>
                  <span className={styles.emoji_count}>10</span>
                </div>
                <div className={styles.emoji}>
                  <div className={`${styles.emoji_image} ${styles.happy}`}>
                    <Image src={happy} layout="fill" alt="happy" loader={customImageLoader}/>
                  </div>
                  <span className={styles.emoji_count}>10</span>
                </div>
                <div className={styles.sad_emoji}>
                  <div className={styles.emoji_image}>
                    <Image src={sad} layout="fill" alt="sad" loader={customImageLoader}/>
                  </div>
                  <span className={styles.emoji_count}>10</span>
                </div>
                <div className={styles.emoji}>
                  <div className={`${styles.emoji_image} ${styles.angry}`}>
                    <Image src={angry} layout="fill" alt="angry" loader={customImageLoader}/>
                  </div>
                  <span className={styles.emoji_count}>10</span>
                </div>
              </section>
              <CommentSection scrollToCommentRef={scrollToComment}/>
            </div>
            <aside className={styles.sidebar}>
              <div className={styles.sticky_sidebar} style={{top:windowDimensions.width < 700 && displayDateOffset.current && displayDateOffset.current.getBoundingClientRect().y < 70?120:80}}>
                <section className={styles.sidebar_section}>
                  <header>????????????</header>
                  <div className={styles.video_list_scrollable}>
                    <ul className={styles.video_list}>
                      {videos.filter((video,index) => index < 3 || (index > 7 && index < 12) || (index > 16 && index < 23) || (index > 25 && index < 30)).map((video) =>
                        <VideoPageListBlock key={video.id} video={video}/>
                      )}
                    </ul>
                  </div>
                </section>
              </div>
            </aside>
          </div>
        </main>
        <div className={`${styles.trending_content} video_page_swiper`}>
          <section className={styles.trending_content_section}>
            <div className={styles.component_header}>
              <div>????????????</div>
            </div>
            <Swiper
              spaceBetween={8}
              slidesPerView={2}
              slidesPerGroup={2}
              navigation
              pagination={{clickable:true}}
              mousewheel={{forceToAxis:true}}
            >
              {
                videos.filter((video,index) => index < 3 || (index > 7 && index < 12) || (index > 16 && index < 23) || (index > 25 && index < 30)).map((video) => {
                  return(
                    <SwiperSlide key={video.id}>
                      <VideoPageTrendingVideoSwiperBlock video={video} key={video.id}/>
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          </section>
        </div>
        <div className={styles.advice_videos}>
          <header className={styles.advice_videos_header}>
            <h2>??????????????????</h2>
          </header>
          <div className={styles.video_list}>
            {videos.filter((video,index) => index < 3 || (index > 7 && index < 12) || (index > 16 && index < 23) || (index > 25 && index < 35) || (index > 35 && index < 40)).map((video) =>
              <VideoPageAdviceVideoBlock video={video} key={video.id}/>
            )}
          </div>
        </div>
      </div>
      <div className={styles.bottom_typing_comment}>
        <div className={styles.comment_row}>
          <div className={styles.like_and_comments_count}>
            <div className={styles.emoji_comments_count} onClick={() => {
              setEmojiNumberDetail(true);
              setSearch(false);
            }}>
              <div className={styles.emoji_comments}>
                <div className={`${styles.emoji_comment} ${styles.like_emoji}`}>
                  <Image src={likeCount} alt="like count" layout="fill" loader={customImageLoader}/>
                </div>
                <div className={`${styles.emoji_comment} ${styles.happy_emoji}`}>
                  <Image src={happyCount} alt="happy count" layout="fill" loader={customImageLoader}/>
                </div>
                <div className={`${styles.emoji_comment} ${styles.sad_emoji}`}>
                  <Image src={sadCount} alt="sad count" layout="fill" loader={customImageLoader}/>
                </div>
                <div className={`${styles.emoji_comment} ${styles.angry_emoji}`}>
                  <Image src={angryCount} alt="angry count" layout="fill" loader={customImageLoader}/>
                </div>
              </div>
              <span>40</span>
            </div>
            <div className={styles.word_comments_count} onClick={() => {
              scrollToComment.current.scrollIntoView({
                block:"center"
              })
            }}>10 ??????</div>
          </div>
        </div>
        <div className={styles.typing_comment}>
          <div className={styles.give_emoji_comment}>
            <div className={styles.give_emoji_comment_logo} onClick={() => {
              setOpenEmoji(!openEmoji);
            }}>
              <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <g id="__mAm2GeR__Icon/emoji" strokeWidth="1" fill="none" fillRule="evenodd" fillOpacity="0.85">
                <path d="M12,2 C17.5223214,2 22,6.47767857 22,12 C22,17.5223214 17.5223214,22 12,22 C6.47767857,22 2,17.5223214 2,12 C2,6.47767857 6.47767857,2 12,2 Z M12,3.69642857 C10.8772321,3.69642857 9.79017857,3.91517857 8.77008929,4.34598214 C7.78125,4.765625 6.89285714,5.36383929 6.12946429,6.12723214 C5.36607143,6.890625 4.765625,7.77901786 4.34821429,8.76785714 C3.91517857,9.79017857 3.69642857,10.8772321 3.69642857,12 C3.69642857,13.1227679 3.91517857,14.2098214 4.34598214,15.2299107 C4.765625,16.21875 5.36383929,17.1071429 6.12723214,17.8705357 C6.890625,18.6339286 7.77901786,19.234375 8.76785714,19.6517857 C9.79017857,20.0848214 10.8772321,20.3035714 12,20.3035714 C13.1227679,20.3035714 14.2098214,20.0848214 15.2299107,19.6517857 C16.21875,19.2321429 17.1071429,18.6339286 17.8705357,17.8705357 C18.6339286,17.109375 19.234375,16.2209821 19.6517857,15.2321429 C20.0848214,14.2098214 20.3035714,13.1227679 20.3035714,12 C20.3035714,10.8772321 20.0848214,9.79017857 19.6540179,8.77008929 C19.234375,7.78125 18.6361607,6.89285714 17.8727679,6.12946429 C17.109375,5.36607143 16.2209821,4.765625 15.2321429,4.34821429 C14.2098214,3.91517857 13.1227679,3.69642857 12,3.69642857 Z M9.402629,14 C9.50762379,14 9.59761932,14.06 9.60511894,14.13875 C9.69761435,15.066875 10.7375627,15.8 12,15.8 C13.2624373,15.8 14.2998858,15.066875 14.3948811,14.13875 C14.4023807,14.06 14.4923762,14 14.597371,14 L14.597371,14 L15.7998113,14 C15.9148056,14 16.0048011,14.07125 15.9998013,14.1575 C15.8898068,15.738125 14.1373938,17 12,17 C9.86260616,17 8.11019319,15.738125 8.00019865,14.1575 C7.9951989,14.07125 8.08519443,14 8.20018872,14 L8.20018872,14 Z M7.5,9 C8.32842712,9 9,9.67157288 9,10.5 C9,11.3284271 8.32842712,12 7.5,12 C6.67157288,12 6,11.3284271 6,10.5 C6,9.67157288 6.67157288,9 7.5,9 Z M16.5,9 C17.3284271,9 18,9.67157288 18,10.5 C18,11.3284271 17.3284271,12 16.5,12 C15.6715729,12 15,11.3284271 15,10.5 C15,9.67157288 15.6715729,9 16.5,9 Z" id="__mAm2GeR__Combined-Shape" fill="#000"></path>
                </g>
              </svg>
            </div>
            {openEmoji &&
              <div className={styles.absolute_choose_emoji}>
                <div className={styles.choose_emoji}>
                  <section className={styles.choose_emoji_section}>
                    <div className={styles.emoji}>
                      <div className={`${styles.emoji_image} ${styles.like}`}>
                        <Image src={like} layout="fill" alt="like" loader={customImageLoader}/>
                      </div>
                      <div className={styles.emoji_count}>10</div>
                    </div>
                    <div className={styles.emoji}>
                      <div className={`${styles.emoji_image} ${styles.happy}`}>
                        <Image src={happy} layout="fill" alt="happy" loader={customImageLoader}/>
                      </div>
                      <div className={styles.emoji_count}>10</div>
                    </div>
                    <div className={styles.sad_emoji}>
                      <div className={styles.emoji_image}>
                        <Image src={sad} layout="fill" alt="sad" loader={customImageLoader}/>
                      </div>
                      <div className={styles.emoji_count}>10</div>
                    </div>
                    <div className={styles.emoji}>
                      <div className={`${styles.emoji_image} ${styles.angry}`}>
                        <Image src={angry} layout="fill" alt="angry" loader={customImageLoader}/>
                      </div>
                      <div className={styles.emoji_count}>10</div>
                    </div>
                  </section>
                </div>
              </div>
            }
          </div>
          <div className={styles.comment_textarea}>
            <textarea placeholder="??????????????????" rows={1} className={styles.comment_area}/>
          </div>
          <div className={styles.send_icon}>
            <FontAwesomeIcon icon="paper-plane"className={styles.fontawesome_icon}/>
          </div>
          <div className={styles.image_icon}>
            <FontAwesomeIcon icon="images" className={styles.fontawesome_icon}/>
          </div>
          <div className={styles.share_icon}>
            <FontAwesomeIcon icon={["far","share-square"]} className={styles.fontawesome_icon}/>
          </div>
        </div>
      </div>
      <PageFooter/>
      <Script src="https://imasdk.googleapis.com/js/sdkloader/ima3.js" strategy="beforeInteractive"/>
    </div>
  )
}

export default Video;