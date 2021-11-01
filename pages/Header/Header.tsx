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
	const [scrollHeight,setScrollHeight] = useState(0);
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
			<div className={`${style.bar} ${scrollHeight > 10 ? style.bar_scroll : ""}`}>
				<div className={style.navbar}>
					<div className={style.left_major_navbar_part}>
            <Link href="/">
              <a className={`${style.navbar_logo} ${scrollHeight > 10 ? style.navbar_small_logo : ""}`}>
                <div className={style.header_icon}>
                  <Image src={headerIcon} alt="header-icon"/>
                </div>
              </a>
            </Link>
						<nav className={style.category_bar}>
							<ul className={`${style.category_items} ${scrollHeight > 10 ? style.category_items_scroll : ""}`}>
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
					<nav className={style.right_listing}>
						{scrollHeight > 10 && <div className={style.date_scroll}>2021-09-08</div>}
						<FontAwesomeIcon icon={["fab","codepen"]} className={style.right_listing_icon} height={18} width={18}/>
						<FontAwesomeIcon icon="search" className={style.right_listing_icon} height={18} width={18}/>
						<div className={style.login_button}>登入</div>
					</nav>
				</div>
			</div>
			<div className={`${style.bar_second_line} ${scrollHeight > 10 ? style.bar_second_line_scroll : ""}`}>
				<div className={style.weather_category_bar}>
					<div className={style.weather}>2021-09-08 33℃ 58%</div>
					<Image src={weather} alt="icon" height={35} width={35}/>
				</div>
        <div className={style.category_bar_horizontal_scroll}>
          <nav className={style.category_bar}>
            <ul className={`${style.category_items} ${scrollHeight > 10 ? style.category_items_scroll : ""}`}>
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
		</header>
	)
}