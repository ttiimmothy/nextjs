import styles from "../../../../styles/video/LikeButtonWithEmojiBox/LikeButtonWithEmojiBox.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import like from "../../../../public/image/emoji.gif";
import happy from "../../../../public/image/emoji2.gif";
import sad from "../../../../public/image/emoji3.gif";
import angry from "../../../../public/image/emoji4.gif";
import Image from "next/image";
import onClickOutside from "react-onclickoutside";
import {useEffect,useState} from "react";
import {customImageLoader} from "../../../customImageLoader";

const LikeButtonWithEmojiBox = (props:{displayDateOffset:number,windowWidth:number}) => {
  const [topEmojiBox,setTopEmojiBox] = useState(false);
  (LikeButtonWithEmojiBox as any).handleClickOutside = () => setTopEmojiBox(false);
  useEffect(() => {
    if((props.displayDateOffset < 65 && props.windowWidth < 700) || (props.displayDateOffset < 15 && props.windowWidth >= 700)){
      setTopEmojiBox(false);
    }
  },[props.displayDateOffset,props.windowWidth])

  return(
    <div className={styles.like_button_with_emoji_box}>
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
  )
}
const clickOutsideConfig = {
  handleClickOutside:() => (LikeButtonWithEmojiBox as any).handleClickOutside
}

export default onClickOutside(LikeButtonWithEmojiBox,clickOutsideConfig);