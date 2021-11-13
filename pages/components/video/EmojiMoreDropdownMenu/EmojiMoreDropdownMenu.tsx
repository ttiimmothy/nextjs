import styles from "../../../../styles/video/EmojiMoreDropdownMenu/EmojiMoreDropdownMenu.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import like from "../../../image/emoji.png";
import happy from "../../../image/emoji2.png";
import sad from "../../../image/emoji3.png";
import angry from "../../../image/emoji4.png";
import Image from "next/image";
import onClickOutside from "react-onclickoutside";
import {useState} from "react";

const EmojiMoreDropdownMenu = (
  props:{
    allClick:boolean,
    likeClick:boolean,
    happyClick:boolean,
    sadClick:boolean,
    angryClick:boolean,
    setAllClick:React.Dispatch<React.SetStateAction<boolean>>,
    setLikeClick:React.Dispatch<React.SetStateAction<boolean>>,
    setHappyClick:React.Dispatch<React.SetStateAction<boolean>>,
    setSadClick:React.Dispatch<React.SetStateAction<boolean>>,
    setAngryClick:React.Dispatch<React.SetStateAction<boolean>>,
    emojiType:number
  }
) => {
	const [openEmojiMore,setOpenEmojiMore] = useState(false);
  (EmojiMoreDropdownMenu as any).handleClickOutside = () => setOpenEmojiMore(false);

  return(
    <div className={styles.emoji_more_dropdown_menu}>
      <div className={styles.more_corner}>
        <div className={`${styles.more} ${((props.emojiType < 270 && props.allClick) || (props.emojiType < 320 && props.likeClick) || (props.emojiType < 390 && props.happyClick) || props.sadClick || props.angryClick)  ? styles.active : ""}`} onClick={() => {
          setOpenEmojiMore(!openEmojiMore);
        }}>
          <div className={styles.text}>更多</div>
          <FontAwesomeIcon icon="caret-down" height={14} width={14} className={styles.fontawesome_icon}/>
        </div>
        {openEmojiMore &&
          <div className={styles.dropdown_menu}>
            <div className={styles.dropdown_menu_box}>
              <ul className={styles.emoji_types}>
                {props.emojiType < 270 &&
                  <li className={`${styles.emoji_type} ${props.allClick ? styles.active_emoji : ""}`} onClick={() => {
                    props.setAllClick(true);
                    props.setLikeClick(false);
                    props.setHappyClick(false);
                    props.setSadClick(false);
                    props.setAngryClick(false);
                  }}>
                    <div className={styles.emoji_type_detail}>
                      <div className={styles.all}>全部</div>
                      {props.allClick && <FontAwesomeIcon icon="check" height={20} width={20} className={styles.fontawesome_icon}/>}
                    </div>
                  </li>
                }
                {props.emojiType < 320 &&
                  <li className={`${styles.emoji_type} ${props.likeClick ? styles.active_emoji : ""}`} onClick={() => {
                    props.setAllClick(false);
                    props.setLikeClick(true);
                    props.setHappyClick(false);
                    props.setSadClick(false);
                    props.setAngryClick(false);
                  }}>
                    <div className={styles.emoji_type_detail}>
                      <div className={styles.image}>
                        <Image src={like} layout="fill" alt="like"/>
                      </div>
                      <div className={styles.emoji_count}>10</div>
                      {props.likeClick && <FontAwesomeIcon icon="check" height={20} width={20} className={styles.fontawesome_icon}/>}
                    </div>
                  </li>
                }
                {props.emojiType < 390 &&
                  <li className={`${styles.emoji_type} ${props.happyClick ? styles.active_emoji : ""}`} onClick={() => {
                    props.setAllClick(false);
                    props.setLikeClick(false);
                    props.setHappyClick(true);
                    props.setSadClick(false);
                    props.setAngryClick(false);
                  }}>
                    <div className={styles.emoji_type_detail}>
                      <div className={styles.image}>
                        <Image src={happy} layout="fill" alt="happy"/>
                      </div>
                      <div className={styles.emoji_count}>10</div>
                      {props.happyClick && <FontAwesomeIcon icon="check" height={20} width={20} className={styles.fontawesome_icon}/>}
                    </div>
                  </li>
                }
                {props.emojiType < 440 &&
                  <li className={`${styles.emoji_type} ${props.sadClick ? styles.active_emoji : ""}`} onClick={() => {
                    props.setAllClick(false);
                    props.setLikeClick(false);
                    props.setHappyClick(false);
                    props.setSadClick(true);
                    props.setAngryClick(false);
                  }}>
                    <div className={styles.emoji_type_detail}>
                      <div className={styles.image}>
                        <Image src={sad} layout="fill" alt="sad"/>
                      </div>
                      <div className={styles.emoji_count}>10</div>
                      {props.sadClick && <FontAwesomeIcon icon="check" height={20} width={20} className={styles.fontawesome_icon}/>}
                    </div>
                  </li>
                }
                {props.emojiType < 440 &&
                  <li className={`${styles.emoji_type} ${props.angryClick ? styles.active_emoji : ""}`} onClick={() => {
                    props.setAllClick(false);
                    props.setLikeClick(false);
                    props.setHappyClick(false);
                    props.setSadClick(false);
                    props.setAngryClick(true);
                  }}>
                    <div className={styles.emoji_type_detail}>
                      <div className={styles.image}>
                        <Image src={angry} layout="fill" alt="angry"/>
                      </div>
                      <div className={styles.emoji_count}>10</div>
                      {props.angryClick && <FontAwesomeIcon icon="check" height={20} width={20} className={styles.fontawesome_icon}/>}
                    </div>
                  </li>
              }
              </ul>
            </div>
          </div>
        }
      </div>
    </div>
  )
}
const clickOutsideConfig = {
  handleClickOutside:() => (EmojiMoreDropdownMenu as any).handleClickOutside
}

export default onClickOutside(EmojiMoreDropdownMenu,clickOutsideConfig);