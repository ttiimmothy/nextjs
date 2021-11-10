import styles from "../../../styles/EmojiNumberDetailModal/EmojiNumberDetailModal.module.scss";
import like from "../../image/emoji.png";
import happy from "../../image/emoji2.png";
import sad from "../../image/emoji3.png";
import angry from "../../image/emoji4.png";
import Image from "next/image";
import React from "react";

export function EmojiNumberDetailModal(props:{closeButton:React.Dispatch<React.SetStateAction<boolean>>}){
  return(
    <div className={styles.emoji_number_detail_modal}>
      <header>
        <div className={styles.emoji_type}>
          <div className={styles.all}>全部</div>
          <div className={styles.like}>
            <div className={styles.emoji_image}>
              <Image src={like} layout="fill" alt="like"/>
            </div>
            <span className={styles.emoji_count}>10</span>
          </div>
          <div className={styles.happy}>
            <div className={styles.emoji_image}>
              <Image src={happy} layout="fill" alt="happy"/>
            </div>
            <span className={styles.emoji_count}>10</span>
          </div>
          <div className={styles.sad}>
            <div className={styles.emoji_image}>
              <Image src={sad} layout="fill" alt="sad"/>
            </div>
            <span className={styles.emoji_count}>10</span>
          </div>
          <div className={styles.angry}>
            <div className={styles.emoji_image}>
              <Image src={angry} layout="fill" alt="angry"/>
            </div>
            <span className={styles.emoji_count}>10</span>
          </div>
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
      <div className={styles.like_people}>

      </div>
    </div>
  )
}