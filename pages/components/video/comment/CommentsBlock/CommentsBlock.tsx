import styles from "../../../../../styles/video/comment/CommentsBlock/CommentsBlock.module.scss";
import likeCount from "../../../../image/emoji.png";
import happyCount from "../../../../image/emoji2.png";
import sadCount from "../../../../image/emoji3.png";
import angryCount from "../../../../image/emoji4.png";
import Image from "next/image";
import {useState} from "react";
import {ResponsesBlock} from "../ResponsesBlock/ResponsesBlock";

export function CommentsBlock(props:{responseNumber:number}){
  const [openAllResponses,setOpenAllResponses] = useState(false);
  const objectArr = [];
  for(let i = 0; i < props.responseNumber; i++){
    objectArr.push(<ResponsesBlock key={i} responseNumber={1}/>);
  }

	return(
    <li className={styles.comments_block}>
      <article className={styles.comment_article}>
        <div className={styles.icon}>
          <svg viewBox="0 0 48 48">
            <g fill="none" fillRule="evenodd">
              <circle strokeOpacity=".08" stroke="#000" fill="#8c8c8c" cx="24" cy="24" r="23.5"></circle>
              <path d="M24 25.92c5.721 0 11.442.867 11.997 8.37.05.666-.52 1.23-1.198 1.23H13.2c-.677 0-1.247-.564-1.198-1.23.555-7.503 6.276-8.37 11.996-8.37zm0-12.96c3.712 0 6.72 2.9 6.72 6.48 0 3.58-3.008 6.48-6.72 6.48-3.712 0-6.72-2.9-6.72-6.48 0-3.58 3.008-6.48 6.72-6.48z" fill="#fff"></path>
            </g>
          </svg>
        </div>
        <div className={styles.comment_with_response}>
          <div className={styles.comment}>
            <div className={styles.name}>abc</div>
            <div className={styles.words}>just some comments</div>
          </div>
          <div className={styles.response}>
            <div className={styles.time_share}>
              <span className={styles.time}>20小時前</span>
              <span className={styles.like}>讚好</span>
              <span className={styles.reply}>回覆</span>
            </div>
            <div className={styles.others_like}>
              <div className={styles.emoji_comments}>
                <div className={`${styles.emoji_comment} ${styles.like_emoji}`}>
                  <Image src={likeCount} alt="like count" layout="fill"/>
                </div>
                <div className={`${styles.emoji_comment} ${styles.happy_emoji}`}>
                  <Image src={happyCount} alt="happy count" layout="fill"/>
                </div>
                <div className={`${styles.emoji_comment} ${styles.sad_emoji}`}>
                  <Image src={sadCount} alt="sad count" layout="fill"/>
                </div>
                <div className={`${styles.emoji_comment} ${styles.angry_emoji}`}>
                  <Image src={angryCount} alt="angry count" layout="fill"/>
                </div>
              </div>
              <span>4</span>
            </div>
            {props.responseNumber > 0 &&
              <div className={styles.responses_to_comment}>
                {!openAllResponses &&
                  <div className={styles.responses} onClick={() => {
                    setOpenAllResponses(true);
                  }}>
                    <i className={styles.responses_number_image}></i>
                    <span className={styles.responses_number}>{props.responseNumber}個回覆</span>
                  </div>
                }
                {openAllResponses &&
                  <ul className={styles.others_responses}>
                    {objectArr}
                  </ul>
                }
              </div>
            }
          </div>
        </div>
      </article>
    </li>
  )
}