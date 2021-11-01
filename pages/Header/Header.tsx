import style from "../../styles/Header/Header.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import weather from "../image/weather.png";
import headerIcon from "../image/unnamed.png";
import Image from "next/image";
import Link from "next/link";
import {useDispatch,useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getHeader} from "../redux/header/thunks";
import {IRootState} from "../store";

export function Header(){
	const dispatch = useDispatch();
	const categories = useSelector((state:IRootState) => state.header.category);
  const subCategories = useSelector((state:IRootState) => state.header.subCategory);
	const [scrollHeight,setScrollHeight] = useState(0);
  const [toggle,setToggle] = useState(true);
  const [showFullMenu,setShowFullMenu] = useState(false);
	useEffect(() => {
		dispatch(getHeader());
	},[dispatch])
	useEffect(() => {
		function updateScrollHeight(){
			setScrollHeight(window.pageYOffset);
		}
		window.addEventListener("scroll",updateScrollHeight);
		return () => window.removeEventListener("scroll",updateScrollHeight);
	},[scrollHeight])

	return(
		<header className={style.header}>
			<div className={`${style.bar} ${scrollHeight > 10 || !toggle || showFullMenu ? style.bar_scroll : ""}`}>
				<div className={style.navbar}>
					<div className={style.left_major_navbar_part}>
            <div className={style.toggler}>
              <button className={style.toggler_button} onClick={() => {
                setToggle(!toggle);
              }}>
                <span className={toggle ? style.close_toggler_icon : style.open_toggler_icon}></span>
              </button>
            </div>
            <Link href="/">
              <a className={`${style.navbar_logo} ${scrollHeight > 10 || showFullMenu ? style.navbar_small_logo : ""}`}>
                <div className={style.header_icon}>
                  <Image src={headerIcon} alt="header-icon"/>
                </div>
              </a>
            </Link>
						<nav className={style.category_bar}>
							<ul className={`${style.category_items} ${scrollHeight > 10 || showFullMenu ? style.category_items_scroll : ""}`}>
								{
									categories.map((category,index) =>
										(
                      <li className={style.category_item} key={index}>
                        <Link href={category.name_en.toLowerCase().split(" ").join("")}>
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
					{toggle &&
            <nav className={style.right_listing}>
              {
                scrollHeight > 10 &&
                <div className={style.date_scroll}>2021-09-08</div>
              }
              <FontAwesomeIcon icon={["fab","codepen"]} className={`${style.right_listing_icon} ${style.codepen_icon}`} height={18} width={18} onClick={() => {
                setShowFullMenu(!showFullMenu);
              }}/>
              <FontAwesomeIcon icon="search" className={style.right_listing_icon} height={18} width={18}/>
              <div className={style.login_button}>登入</div>
            </nav>
          }
				</div>
			</div>
			<div className={`${style.bar_second_line} ${scrollHeight > 10 || !toggle || showFullMenu ? style.bar_second_line_scroll : ""}`}>
				<div className={style.weather_category_bar}>
					<div className={style.weather}>2021-09-08 33℃ 58%</div>
					<Image src={weather} alt="icon" height={35} width={35}/>
				</div>
        <div className={style.category_bar_horizontal_scroll}>
          <nav className={style.category_bar}>
            <ul className={style.category_items}>
              {
                categories.map((category,index) =>
                  (
                    <li className={style.category_item} key={index}>
                      <Link href={category.name_en.toLowerCase().split(" ").join("")}>
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
      <div className={showFullMenu ? style.full_menu : style.hide_full_menu}>
        <section className={style.full_menu_section}>
          <div className={style.full_category_list}>
            <ul className={style.categories}>
              {
                categories.map((category) =>
                  (
                    <li className={style.category} key={category.cate_id}>
                      <header className={style.category_head}>{category.name_cn}</header>
                      <ul className={style.sub_categories}>
                        {subCategories.filter((subCategory) => subCategory.cate_id === category.cate_id).map((subCategory) =>
                          <li className={style.sub_category} key={subCategory.subcate_id}>{subCategory.name_cn}</li>
                        )}
                      </ul>
                    </li>
                  )
                )
              }
            </ul>
          </div>
        </section>
      </div>
      <nav className={toggle ? style.hidden : style.hidden_menu}>
        <div className={style.menu}>
          <div className={style.login}>
            <section className={style.login_section}>
              <button className={style.login_button}>
                <div className={style.login_button_detail}>
                  <div className={style.icon}>
                    <svg viewBox="0 0 48 48">
                      <g fill="none" fillRule="evenodd">
                      <circle strokeOpacity=".08" stroke="#000" fill="#8c8c8c" cx="24" cy="24" r="23.5"></circle>
                      <path d="M24 25.92c5.721 0 11.442.867 11.997 8.37.05.666-.52 1.23-1.198 1.23H13.2c-.677 0-1.247-.564-1.198-1.23.555-7.503 6.276-8.37 11.996-8.37zm0-12.96c3.712 0 6.72 2.9 6.72 6.48 0 3.58-3.008 6.48-6.72 6.48-3.712 0-6.72-2.9-6.72-6.48 0-3.58 3.008-6.48 6.72-6.48z" fill="#FFF"></path>
                      </g>
                    </svg>
                  </div>
                  <div className={style.login_word}>登入 / 註冊</div>
                </div>
              </button>
            </section>
          </div>
          <div className={style.category}>
            <div className={style.category_section}>
              <ul className={style.category_list}>
                {
                  subCategories.map((subCategory) =>{
                    return(
                      <li className={style.category_listitem} key={subCategory.subcate_id}>
                        <div className={style.category_listitem_block}>
                          <Link href={`/subcategory/${subCategory.name_en.toLowerCase().split(" ").join()}`}>
                            <a className={style.category_listitem_link}>{subCategory.name_cn}</a>
                          </Link>
                        </div>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
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
        </div>
      </nav>
	  </header>
	)
}