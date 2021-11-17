import styles from "../../../../../styles/video/comment/CommentSection/CommentSection.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useRef,useState} from "react";
import {CommentsBlock} from "../CommentsBlock/CommentsBlock";

export function CommentSection(props:{scrollToCommentRef:React.MutableRefObject<any>}){
  const file = useRef<HTMLInputElement|null>(null);
  const [openMoreComments,setOpenMoreComments] = useState(false);
  const [allCommentsNumber,setAllCommentsNumber] = useState(2);

	return(
    <div className={styles.comment_section} ref={props.scrollToCommentRef}>
      <header>
        <h3>全部回應(10)</h3>
      </header>
      <div className={styles.written_comment_area}>
        <div className={styles.icon}>
          <svg viewBox="0 0 48 48">
            <g fill="none" fillRule="evenodd">
              <circle strokeOpacity=".08" stroke="#000" fill="#fff" cx="24" cy="24" r="23.5"></circle>
              <path d="M24 25.92c5.721 0 11.442.867 11.997 8.37.05.666-.52 1.23-1.198 1.23H13.2c-.677 0-1.247-.564-1.198-1.23.555-7.503 6.276-8.37 11.996-8.37zm0-12.96c3.712 0 6.72 2.9 6.72 6.48 0 3.58-3.008 6.48-6.72 6.48-3.712 0-6.72-2.9-6.72-6.48 0-3.58 3.008-6.48 6.72-6.48z" fill="#8c8c8c"></path>
            </g>
          </svg>
        </div>
        <div className={styles.textarea}>
          <textarea placeholder="發表你的回應" rows={1} className={styles.comment_area}/>
          <div className={styles.image_and_submit}>
            <div className={styles.image_upload}>
              <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" onClick={() => {
                if(file.current){
                  file.current.click();
                }
              }}>
                <g id="__mAm2GeR__Icon/emoji" strokeWidth="1" fill="none" fillRule="evenodd" fillOpacity="0.85">
                  <path d="M12,2 C17.5223214,2 22,6.47767857 22,12 C22,17.5223214 17.5223214,22 12,22 C6.47767857,22 2,17.5223214 2,12 C2,6.47767857 6.47767857,2 12,2 Z M12,3.69642857 C10.8772321,3.69642857 9.79017857,3.91517857 8.77008929,4.34598214 C7.78125,4.765625 6.89285714,5.36383929 6.12946429,6.12723214 C5.36607143,6.890625 4.765625,7.77901786 4.34821429,8.76785714 C3.91517857,9.79017857 3.69642857,10.8772321 3.69642857,12 C3.69642857,13.1227679 3.91517857,14.2098214 4.34598214,15.2299107 C4.765625,16.21875 5.36383929,17.1071429 6.12723214,17.8705357 C6.890625,18.6339286 7.77901786,19.234375 8.76785714,19.6517857 C9.79017857,20.0848214 10.8772321,20.3035714 12,20.3035714 C13.1227679,20.3035714 14.2098214,20.0848214 15.2299107,19.6517857 C16.21875,19.2321429 17.1071429,18.6339286 17.8705357,17.8705357 C18.6339286,17.109375 19.234375,16.2209821 19.6517857,15.2321429 C20.0848214,14.2098214 20.3035714,13.1227679 20.3035714,12 C20.3035714,10.8772321 20.0848214,9.79017857 19.6540179,8.77008929 C19.234375,7.78125 18.6361607,6.89285714 17.8727679,6.12946429 C17.109375,5.36607143 16.2209821,4.765625 15.2321429,4.34821429 C14.2098214,3.91517857 13.1227679,3.69642857 12,3.69642857 Z M9.402629,14 C9.50762379,14 9.59761932,14.06 9.60511894,14.13875 C9.69761435,15.066875 10.7375627,15.8 12,15.8 C13.2624373,15.8 14.2998858,15.066875 14.3948811,14.13875 C14.4023807,14.06 14.4923762,14 14.597371,14 L14.597371,14 L15.7998113,14 C15.9148056,14 16.0048011,14.07125 15.9998013,14.1575 C15.8898068,15.738125 14.1373938,17 12,17 C9.86260616,17 8.11019319,15.738125 8.00019865,14.1575 C7.9951989,14.07125 8.08519443,14 8.20018872,14 L8.20018872,14 Z M7.5,9 C8.32842712,9 9,9.67157288 9,10.5 C9,11.3284271 8.32842712,12 7.5,12 C6.67157288,12 6,11.3284271 6,10.5 C6,9.67157288 6.67157288,9 7.5,9 Z M16.5,9 C17.3284271,9 18,9.67157288 18,10.5 C18,11.3284271 17.3284271,12 16.5,12 C15.6715729,12 15,11.3284271 15,10.5 C15,9.67157288 15.6715729,9 16.5,9 Z" id="__mAm2GeR__Combined-Shape" fill="#000"></path>
                </g>
              </svg>
              <input ref={file} type="file" hidden/>
            </div>
            <button className={`${styles.submit_button} btn btn-secondary`}>送出</button>
          </div>
        </div>
      </div>
      <div className={styles.others_comments_scrollable}>
        <ul className={styles.others_comments}>
          <CommentsBlock responseNumber={1}/>
          <CommentsBlock responseNumber={1}/>
          {openMoreComments && allCommentsNumber <= 1 && <CommentsBlock responseNumber={1}/>}
          {openMoreComments && allCommentsNumber === 0 && <CommentsBlock responseNumber={0}/>}
        </ul>
      </div>
      {(!openMoreComments || allCommentsNumber > 0) &&
        <div className={styles.more_comments}>
          <button className={styles.more_comments_button} onClick={() => {
            setOpenMoreComments(true);
            setAllCommentsNumber(allCommentsNumber - 1);
          }}>
            <div className={styles.more_comments_button_section}>
              <span className={styles.see_more_comments}>查看更多回應</span>
              <div className={styles.down_icon}>
                <FontAwesomeIcon icon="chevron-down" height={10} width={10} className={styles.fontawsome_icon}/>
              </div>
            </div>
          </button>
        </div>
      }
    </div>
  )
}