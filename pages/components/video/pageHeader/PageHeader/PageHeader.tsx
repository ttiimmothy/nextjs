import style from "../../../../../styles/video/pageHeader/PageHeader/PageHeader.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import headerIcon from "../../../../image/unnamed_thumbnail.png";
import Image from "next/image";
import Link from "next/link";
import {Modal} from "react-bootstrap";
import {useDispatch,useSelector} from "react-redux";
import React,{useEffect,useState} from "react";
import {getHeader, getSubCategory} from "../../../../redux/header/thunks";
import {IRootState} from "../../../../store";
import {VideoDetail} from "../../../../redux/home/actions";
import {LoginModal} from "../../../LoginModal/LoginModal";
import PageHeaderLikeButtonWithEmojiBox from "../PageHeaderLikeButtonWithEmojiBox/PageHeaderLikeButtonWithEmojiBox";
import PageHeaderShareButtonWithShareBox from "../PageHeaderShareButtonWithShareBox/PageHeaderShareButtonWithShareBox";
import PageHeaderMoreOptionsButtonWithMoreBox from "../PageHeaderMoreOptionsButtonWithMoreBox/PageHeaderMoreOptionsButtonWithMoreBox";
import PageHeaderMobileViewShowMoreWithRightListingIcons from "../PageHeaderMobileViewShowMoreWithRightListingIcons/PageHeaderMobileViewShowMoreWithRightListingIcons";

export function PageHeader(
  props:{
    toggle:boolean,
    openToggle:React.Dispatch<React.SetStateAction<boolean>>,
    search:boolean,openSearch:React.Dispatch<React.SetStateAction<boolean>>,
    displayDateOffset:number,
    displayDateOffsetForPageHeaderTopButtons:number,
    smallWord:boolean,
    mediumWord:boolean,
    largeWord:boolean,
    setSmallWord:React.Dispatch<React.SetStateAction<boolean>>,
    setMediumWord:React.Dispatch<React.SetStateAction<boolean>>,
    setLargeWord:React.Dispatch<React.SetStateAction<boolean>>,
    video:VideoDetail|null,
    windowWidth:number,
    scrollToComment:React.MutableRefObject<any>
  }
){
	const dispatch = useDispatch();
	const categories = useSelector((state:IRootState) => state.header.category);
  const subCategories = useSelector((state:IRootState) => state.header.subCategory);
	const [scrollHeight,setScrollHeight] = useState(0);
  const [showFullMenu,setShowFullMenu] = useState(false);
  const [login,setLogin] = useState(false);
  const [more,setMore] = useState(false);
	useEffect(() => {
		dispatch(getHeader());
    dispatch(getSubCategory());
	},[dispatch])
	useEffect(() => {
		function updateScrollHeight(){
			setScrollHeight(window.pageYOffset);
		}
		window.addEventListener("scroll",updateScrollHeight);
		return () => window.removeEventListener("scroll",updateScrollHeight);
	},[scrollHeight])

	return(
		<header className={style.page_header}>
			<div className={`${style.bar} ${scrollHeight > 10 || !props.toggle ? style.bar_scroll : ""} ${showFullMenu || props.search || more ? style.bar_for_searching : ""}`}>
				<div className={style.navbar}>
					<div className={style.left_major_navbar_part}>
            <div className={style.toggler}>
              <button className={style.toggler_button} onClick={() => {
                props.openToggle(!props.toggle);
                props.openSearch(false);
              }}>
                <span className={props.toggle ? style.close_toggler_icon : style.open_toggler_icon}></span>
              </button>
            </div>
            <Link href="/">
              <a className={`${style.navbar_logo} ${scrollHeight > 10 || showFullMenu || props.search ? style.navbar_small_logo : ""}`}>
                <div className={style.header_icon}>
                  <Image src={headerIcon} alt="header-icon"/>
                </div>
              </a>
            </Link>
            <div className={scrollHeight > 10 || showFullMenu || props.search ? style.blank_scroll : style.blank}/>
						<nav className={style.category_bar}>
							<ul className={`${style.category_items} ${scrollHeight > 10 || showFullMenu || props.search ? style.category_items_scroll : ""}`}>
								{
									categories.map((category,index) =>
										(
                      <li className={style.category_item} key={index}>
                        <Link href={`/category/${category.name_en.toLowerCase().split(" ").join("").split("/").join("")}`}>
                          <a>
                            {category.name_cn}
                          </a>
                        </Link>
                      </li>
                    )
									)
								}
							</ul>
						</nav>
					</div>
          <div className={props.displayDateOffset < 100 ? style.middle_part : style.hide_middle_part}>
            {props.video && <div className={style.sub_category_name}>{props.video.subcate_name.split("・").join("")}</div>}
          </div>
					{props.toggle &&
            <nav className={style.right_listing}>
              <div className={style.right_listing_scrollable}>
                <div className={style.menu}>
                  <FontAwesomeIcon icon={["fab","codepen"]} className={`${style.right_listing_icon} ${showFullMenu ? style.open_codepen_icon : style.close_codepen_icon}`} height={18} width={18} onClick={() => {
                    setShowFullMenu(!showFullMenu);
                    props.openSearch(false);
                  }}/>
                </div>
                <div className={style.search}>
                  <FontAwesomeIcon icon="search" className={`${style.right_listing_icon} ${props.search ? style.open_search_panel : style.close_search_panel}`} height={18} width={18} onClick={() => {
                    props.openSearch(!props.search);
                  }}/>
                  <div className={props.search ? style.show_search : style.hide_search}>
                    <section className={style.search_section}>
                      <div className={style.search_input}>
                        <input className={style.input} placeholder="搜索"/>
                        <FontAwesomeIcon icon="search" height={24} width={24} className={style.fontawesome_icon}/>
                      </div>
                      <div className={style.tag_list}>
                          <div className={style.tag_list_header}>熱門搜索</div>
                          <ul className={style.tags}>
                            <li className={style.tag}>
                              <div className={style.tag_name}>魷魚遊戲</div>
                            </li>
                            <li className={style.tag}>
                              <div className={style.tag_name}>魷魚遊戲</div>
                            </li>
                            <li className={style.tag}>
                              <div className={style.tag_name}>魷魚遊戲</div>
                            </li>
                            <li className={style.tag}>
                              <div className={style.tag_name}>魷魚遊戲</div>
                            </li>
                            <li className={style.tag}>
                              <div className={style.tag_name}>魷魚遊戲</div>
                            </li>
                          </ul>
                        </div>
                    </section>
                  </div>
                </div>
                <div className={style.login}>
                  <button className={style.login_button} onClick={() => {
                    setLogin(true);
                    setShowFullMenu(false);
                    props.openSearch(false);
                  }}>
                    登入
                  </button>
                  <Modal show={login} className="login">
                    <LoginModal closeButton={setLogin}/>
                  </Modal>
                </div>
                <div className={style.show_more}>
                  <PageHeaderMobileViewShowMoreWithRightListingIcons
                    showFullMenu={showFullMenu}
                    search={props.search}
                    login={login}
                    more={more}
                    smallWord={props.smallWord}
                    mediumWord={props.mediumWord}
                    largeWord={props.largeWord}
                    setShowFullMenu={setShowFullMenu}
                    openSearch={props.openSearch}
                    setLogin={setLogin}
                    setMore={setMore}
                    setSmallWord={props.setSmallWord}
                    setMediumWord={props.setMediumWord}
                    setLargeWord={props.setLargeWord}
                  />
                </div>
              </div>
            </nav>
          }
				</div>
			</div>
			<div className={`${style.bar_second_line} ${scrollHeight > 10 || !props.toggle? style.bar_second_line_scroll : ""} ${showFullMenu || props.search || more ? style.bar_second_line_for_searching : ""}`}>
        <div className={style.relative_bar_second_line}>
          <div className={style.category_bar_horizontal_scroll}>
            <nav className={style.category_bar}>
              <ul className={style.category_items}>
                {
                  categories.map((category,index) =>
                    (
                      <li className={style.category_item} key={index}>
                        <Link href={`/category/${category.name_en.toLowerCase().split(" ").join("").split("/").join("")}`}>
                          <a>
                            {category.name_cn}
                          </a>
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
      <div className={showFullMenu ? style.full_menu : style.hide_full_menu} onMouseLeave={() => {
        setShowFullMenu(false);
      }}>
        <section className={style.full_menu_section}>
          <div className={style.full_category_list}>
            <section className={style.full_category_list_section}>
              <ul className={style.categories}>
                {
                  categories.map((category) =>
                    (
                      <li className={style.category} key={category.cate_id}>
                        <header className={style.category_head}>
                          <Link href={`/category/${category.name_en.toLowerCase().split(" ").join("")}`}>
                            <a className={style.category_link}>{category.name_cn}</a>
                          </Link>
                        </header>
                        <ul className={style.sub_categories}>
                          {subCategories.filter((subCategory) => subCategory.cate_id === category.cate_id).map((subCategory) =>
                            <li className={style.sub_category} key={subCategory.subcate_id}>
                              <Link href={`/channel/${subCategory.name_cn.split("・").join("")}/${subCategory.subcate_id}`}>
                                <a className={style.category_link}>{subCategory.name_cn}</a>
                              </Link>
                            </li>
                          )}
                        </ul>
                      </li>
                    )
                  )
                }
              </ul>
            </section>
          </div>
          <footer className={style.footer}>
            <section className={style.footer_section}>
              <section className={style.content_section}>
                <div className={style.contents}>
                  <div className={style.content}>關於我們</div>
                  <div className={style.content}>聯絡我們</div>
                  <div className={style.content}>廣告查詢</div>
                  <div className={style.content}>客戶服務</div>
                  <div className={style.content}>常見問題</div>
                </div>
                <div className={style.social_icons}>
                  <div className={`${style.icon} ${style.facebook}`}>
                    <a href="https://www.facebook.com/icable.news">
                      <FontAwesomeIcon icon={["fab","facebook-f"]} height={18} width={18} className={style.fontawesome_icon}/>
                    </a>
                  </div>
                  <div className={`${style.icon} ${style.instagram}`}>
                    <a href="https://www.instagram.com/cabletvhk">
                      <FontAwesomeIcon icon={["fab","instagram"]} height={18} width={18} className={style.fontawesome_icon}/>
                    </a>
                  </div>
                  <div className={`${style.icon} ${style.twitter}`}>
                    <a href="https://www.instagram.com/cabletvhk">
                      <FontAwesomeIcon icon={["fab","twitter"]} height={18} width={18} className={style.fontawesome_icon}/>
                    </a>
                  </div>
                </div>
              </section>
              <div className={style.address}>地址: 香港新界荃灣海盛路9號有線電視大樓</div>
              <div className={style.privacy}>私隱政策 ⓒ 2021 HK Cable Television Ltd Disclaimer & Copyright(All Right Reserved)</div>
            </section>
          </footer>
        </section>
      </div>
      <div className={`${style.video_information_bar} ${(props.windowWidth < 600 && props.displayDateOffset < 100) || (props.windowWidth >= 600 && props.windowWidth < 700 && props.displayDateOffset < 70) || (props.windowWidth >= 700 && props.displayDateOffset < 30) ? style.open_video_bar : style.close_video_bar}`}>
        <div className={style.video_information_with_top_buttons}>
          <div className={style.top_bar}>
            {props.video &&
              <div className={style.video_information}>
                <div className={style.video_subcategory}>{props.video.subcate_name.split("・").join("")}</div>
                <div className={style.video_title}>{props.video.title}</div>
              </div>
            }
            <div className={style.top_buttons}>
              <PageHeaderLikeButtonWithEmojiBox displayDateOffsetForPageHeaderTopButtons={props.displayDateOffsetForPageHeaderTopButtons}/>
              <button className={style.comment_button} onClick={() => {
                props.scrollToComment.current.scrollIntoView({
                  block:"center",
                  behavior:"smooth"
                })
              }}>
                <FontAwesomeIcon icon={["far","comment-alt"]} height={14} width={14} className={style.fontawesome_icon}/>
                <div className={style.number}>10</div>
              </button>
              <PageHeaderShareButtonWithShareBox displayDateOffsetForPageHeaderTopButtons={props.displayDateOffsetForPageHeaderTopButtons}/>
              <PageHeaderMoreOptionsButtonWithMoreBox
                smallWord={props.smallWord}
                mediumWord={props.mediumWord}
                largeWord={props.largeWord}
                setSmallWord={props.setSmallWord}
                setMediumWord={props.setMediumWord}
                setLargeWord={props.setLargeWord}
                displayDateOffsetForPageHeaderTopButtons={props.displayDateOffsetForPageHeaderTopButtons}
              />
              <button className={style.upwards_button} onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth"
                })
              }}>
                <FontAwesomeIcon icon="long-arrow-alt-up" height={14} width={14} className={style.fontawesome_icon}/>
              </button>
            </div>
          </div>
          <div className={style.bottom_bar}>
            {props.video && <div className={style.video_title}>{props.video.title}</div>}
          </div>
        </div>
      </div>
	  </header>
	)
}