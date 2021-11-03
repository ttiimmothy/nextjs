import styles from "../../../styles/Footer/Footer.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import icon from "../../image/unnamed.png";
import Image from "next/image";


export function Footer(){
	return(
		<footer className={styles.footer}>
      <section className={styles.footer_section}>
        <section className={styles.content_section}>
          <div className={styles.icable_logo}>
            <Image src={icon} alt="i-cable logo" height={70} width={70}/>
          </div>
          <div className={styles.contents}>
            <div className={styles.content}>關於我們</div>
            <div className={styles.content}>聯絡我們</div>
            <div className={styles.content}>廣告查詢</div>
            <div className={styles.content}>客戶服務</div>
            <div className={styles.content}>常見問題</div>
          </div>
          <div className={styles.social_icons}>
            <div className={`${styles.icon} ${styles.facebook}`}>
              <a href="https://www.facebook.com/icable.news">
                <FontAwesomeIcon icon={["fab","facebook-f"]} height={18} width={18} className={styles.fontawesome_icon}/>
              </a>
            </div>
            <div className={`${styles.icon} ${styles.instagram}`}>
              <a href="https://www.instagram.com/cabletvhk">
                <FontAwesomeIcon icon={["fab","instagram"]} height={18} width={18} className={styles.fontawesome_icon}/>
                {/* <Image src={instagram} alt="twitter" className={styles.fontawesome_icon} height={18} width={18}/> */}
              </a>
            </div>
            <div className={`${styles.icon} ${styles.twitter}`}>
              <a href="https://www.instagram.com/cabletvhk">
                <FontAwesomeIcon icon={["fab","twitter"]} height={18} width={18} className={styles.fontawesome_icon}/>
                {/* <Image src={twitter} alt="twitter" className={styles.fontawesome_icon} height={18} width={18}/> */}
              </a>
            </div>
          </div>
        </section>
        <div className={styles.address}>地址: 香港新界荃灣海盛路9號有線電視大樓</div>
        <div className={styles.privacy}>私隱政策 ⓒ 2021 HK Cable Television Ltd Disclaimer & Copyright(All Right Reserved)</div>
      </section>
		</footer>
	)
}