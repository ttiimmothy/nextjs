import styles from "../../../styles/PageHeaderLikeButtonWithEmojiBox/PageHeaderLikeButtonWithEmojiBox.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import like from "../../image/emoji.gif";
import happy from "../../image/emoji2.gif";
import sad from "../../image/emoji3.gif";
import angry from "../../image/emoji4.gif";
import Image from "next/image";
import onClickOutside from "react-onclickoutside";
import {useEffect, useState} from "react";

const PageHeaderLikeButtonWithEmojiBox = (props:{displayDateOffsetForPageHeaderTopButtons:number}) => {
  const [topEmojiBox,setTopEmojiBox] = useState(false);
  (PageHeaderLikeButtonWithEmojiBox as any).handleClickOutside = () => setTopEmojiBox(false);
  useEffect(() => {
    if(props.displayDateOffsetForPageHeaderTopButtons > 105){
      setTopEmojiBox(false);
    }
  },[props.displayDateOffsetForPageHeaderTopButtons])

  return(
    <div className={styles.page_header_like_button_with_emoji_box}>
      <button className={styles.like_button} onClick={() => {
        setTopEmojiBox(!topEmojiBox);
      }}>
        <FontAwesomeIcon icon={["far","thumbs-up"]} height={14} width={14} className={styles.fontawesome_icon}/>
        <div className={styles.number}>171</div>
      </button>
      {topEmojiBox &&
        <div className={styles.absolute_choose_emoji}>
          <div className={styles.choose_emoji}>
            <section className={styles.choose_emoji_section}>
              <div className={styles.emoji}>
                <div className={`${styles.emoji_image} ${styles.like}`}>
                  <Image src={like} layout="fill" alt="like"/>
                </div>
                <div className={styles.emoji_count}>10</div>
              </div>
              <div className={styles.emoji}>
                <div className={`${styles.emoji_image} ${styles.happy}`}>
                  <Image src={happy} layout="fill" alt="happy"/>
                </div>
                <div className={styles.emoji_count}>10</div>
              </div>
              <div className={styles.sad_emoji}>
                <div className={styles.emoji_image}>
                  <Image src={sad} layout="fill" alt="sad"/>
                </div>
                <div className={styles.emoji_count}>10</div>
              </div>
              <div className={styles.emoji}>
                <div className={`${styles.emoji_image} ${styles.angry}`}>
                  <Image src={angry} layout="fill" alt="angry"/>
                </div>
                <div className={styles.emoji_count}>10</div>
              </div>
            </section>
          </div>
        </div>
      }
    </div>
  )
}
const clickOutsideConfig = {
  handleClickOutside:() => (PageHeaderLikeButtonWithEmojiBox as any).handleClickOutside
}

export default onClickOutside(PageHeaderLikeButtonWithEmojiBox,clickOutsideConfig);