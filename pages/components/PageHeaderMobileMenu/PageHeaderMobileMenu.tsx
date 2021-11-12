import styles from "../../../styles/PageHeaderMobileMenu/PageHeaderMobileMenu.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {useSelector} from "react-redux";
import React from "react";
import {IRootState} from "../../store";
import {FooterInHeader} from "../FooterInHeader/FooterInHeader";

export function PageHeaderMobileMenu(props:{toggle:boolean}){
  const subCategories = useSelector((state:IRootState) => state.header.subCategory);

  return(
    <nav className={styles.page_header_mobile_menu}>
      <div className={props.toggle ? styles.hidden_menu : styles.show_menu}>
        <div className={styles.menu}>
          <div className={styles.search}>
            <div className={styles.search_input_area}>
              <input className={styles.input_area} placeholder="搜索"/>
            </div>
            <FontAwesomeIcon icon="search" height={24} width={24} className={styles.fontawesome_icon}/>
          </div>
          <div className={styles.login}>
            <section className={styles.login_section}>
              <button className={styles.login_button}>
                <div className={styles.login_button_detail}>
                  <div className={styles.icon}>
                    <svg viewBox="0 0 48 48">
                      <g fill="none" fillRule="evenodd">
                        <circle strokeOpacity=".08" stroke="#000" fill="#8c8c8c" cx="24" cy="24" r="23.5"></circle>
                        <path d="M24 25.92c5.721 0 11.442.867 11.997 8.37.05.666-.52 1.23-1.198 1.23H13.2c-.677 0-1.247-.564-1.198-1.23.555-7.503 6.276-8.37 11.996-8.37zm0-12.96c3.712 0 6.72 2.9 6.72 6.48 0 3.58-3.008 6.48-6.72 6.48-3.712 0-6.72-2.9-6.72-6.48 0-3.58 3.008-6.48 6.72-6.48z" fill="#fff"></path>
                      </g>
                    </svg>
                  </div>
                  <div className={styles.login_word}>登入 / 註冊</div>
                </div>
              </button>
            </section>
          </div>
          <div className={styles.category}>
            <div className={styles.category_section}>
              <ul className={styles.category_list}>
                {
                  subCategories.map((subCategory) =>{
                    return(
                      <li className={styles.category_listitem} key={subCategory.subcate_id}>
                        <div className={styles.category_listitem_block}>
                          <Link href={`/channel/${subCategory.name_cn.split("・").join("")}/${subCategory.subcate_id}`}>
                            <a className={styles.category_listitem_link}>{subCategory.name_cn}</a>
                          </Link>
                        </div>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
          <FooterInHeader/>
        </div>
      </div>
    </nav>
  )
}