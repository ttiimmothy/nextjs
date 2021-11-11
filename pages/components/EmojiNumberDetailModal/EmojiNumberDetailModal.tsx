import styles from "../../../styles/EmojiNumberDetailModal/EmojiNumberDetailModal.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import like from "../../image/emoji.png";
import happy from "../../image/emoji2.png";
import sad from "../../image/emoji3.png";
import angry from "../../image/emoji4.png";
import Image from "next/image";
import React,{useEffect,useRef,useState} from "react";

export function EmojiNumberDetailModal(props:{closeButton:React.Dispatch<React.SetStateAction<boolean>>}){
  const emojiTypeWidth = useRef<any>(null);
  const [emojiType,setEmojiType] = useState(500);
  useEffect(() => {
    function resizeEmojiTypeWidth(){
      setEmojiType(emojiTypeWidth.current.offsetWidth);
    }
    window.addEventListener("resize",resizeEmojiTypeWidth);
    return () => window.removeEventListener("resize",resizeEmojiTypeWidth);
	},[])
  console.log(emojiType);

  return(
    <div className={styles.emoji_number_detail_modal}>
      <header ref={emojiTypeWidth}>
        <div className={styles.emoji_type_list} >
          <ul className={styles.emoji_type}>
            {emojiType >= 200 && <li className={styles.all}>全部</li>}
            {emojiType >= 280 &&
              <li className={styles.like}>
                <div className={styles.emoji_image}>
                  <Image src={like} layout="fill" alt="like"/>
                </div>
                <span className={styles.emoji_count}>10</span>
              </li>
            }
            {emojiType >= 360 &&
              <li className={styles.happy}>
                <div className={styles.emoji_image}>
                  <Image src={happy} layout="fill" alt="happy"/>
                </div>
                <span className={styles.emoji_count}>10</span>
              </li>
            }
            {emojiType >= 440 &&
              <li className={styles.sad}>
                <div className={styles.emoji_image}>
                  <Image src={sad} layout="fill" alt="sad"/>
                </div>
                <span className={styles.emoji_count}>10</span>
              </li>
            }
            {emojiType >= 440 &&
              <li className={styles.angry}>
                <div className={styles.emoji_image}>
                  <Image src={angry} layout="fill" alt="angry"/>
                </div>
                <span className={styles.emoji_count}>10</span>
              </li>
            }
          </ul>
          {emojiType < 440 &&
            <div className={styles.more_corner}>
              <div className={styles.more}>
                <div className={styles.text}>更多</div>
                <FontAwesomeIcon icon="caret-down" className={styles.fontawesome_icon}/>
              </div>
            </div>
          }
        </div>
        <div className={styles.close}>
          <button className={styles.close_button} onClick={() => {
            props.closeButton(false);
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path d="M.91 15.844a.533.533 0 01-.754-.754L15.09.156a.533.533 0 11.754.754L.91 15.844zm14.934-.754a.533.533 0 01-.754.754L.156.91A.533.533 0 11.91.156L15.844 15.09z" fill="#6c757d"></path>
            </svg>
          </button>
        </div>
      </header>
      <div className={styles.like_people_scrollable}>
        <div className={styles.like_people}>
          <div className={styles.person}>
            <div className={styles.icon}>
              <svg viewBox="0 0 48 48">
                <g fill="none" fillRule="evenodd">
                  <circle strokeOpacity=".08" stroke="#000" fill="#8c8c8c" cx="24" cy="24" r="23.5"></circle>
                  <path d="M24 25.92c5.721 0 11.442.867 11.997 8.37.05.666-.52 1.23-1.198 1.23H13.2c-.677 0-1.247-.564-1.198-1.23.555-7.503 6.276-8.37 11.996-8.37zm0-12.96c3.712 0 6.72 2.9 6.72 6.48 0 3.58-3.008 6.48-6.72 6.48-3.712 0-6.72-2.9-6.72-6.48 0-3.58 3.008-6.48 6.72-6.48z" fill="#fff"></path>
                </g>
              </svg>
            </div>
            <div className={styles.name}>abc</div>
          </div>
        </div>
      </div>
    </div>
  )
}