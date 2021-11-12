import styles from "../../../styles/MoreOptionsButtonWithMoreBox/MoreOptionsButtonWithMoreBox.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import onClickOutside from "react-onclickoutside";
import {useEffect,useState} from "react";

const MoreOptionsButtonWithMoreBox = (
  props:{
    smallWord:boolean,
    mediumWord:boolean,
    largeWord:boolean,
    setSmallWord:React.Dispatch<React.SetStateAction<boolean>>,
    setMediumWord:React.Dispatch<React.SetStateAction<boolean>>,
    setLargeWord:React.Dispatch<React.SetStateAction<boolean>>,
	  displayDateOffset:number,
    windowWidth:number
  }
) => {
  const [wordSize,setWordSize] = useState(false);
  (MoreOptionsButtonWithMoreBox as any).handleClickOutside = () => setWordSize(false);
  useEffect(() => {
	  if((props.displayDateOffset < 65 && props.windowWidth < 700) || (props.displayDateOffset < 15 && props.windowWidth >= 700)){
		  setWordSize(false);
	  }
  },[props.displayDateOffset,props.windowWidth])

  return(
    <div className={styles.more_options_button_with_more_box}>
      <button className={styles.more_options_button} onClick={() => {
        setWordSize(!wordSize);
      }}>
        <div className={styles.fontawesome_icon}>
          <FontAwesomeIcon icon="caret-down" height={14} width={14} className={wordSize ? styles.caret_up : styles.caret_down}/>
        </div>
      </button>
      {wordSize &&
        <div className={styles.more_box}>
          <div className={styles.more_options_box}>
            <div className={styles.word_size}>
              <div className={styles.size}>字型</div>
              <div className={`${styles.small_size} ${props.smallWord ? styles.active_size : ""}`} onClick={() => {
                props.setSmallWord(true);
                props.setMediumWord(false);
                props.setLargeWord(false);
              }}>A</div>
              <div className={`${styles.medium_size} ${props.mediumWord ? styles.active_size : ""}`} onClick={() => {
                props.setSmallWord(false);
                props.setMediumWord(true);
                props.setLargeWord(false);
              }}>A</div>
              <div className={`${styles.large_size} ${props.largeWord ? styles.active_size : ""}`} onClick={() => {
                props.setSmallWord(false);
                props.setMediumWord(false);
                props.setLargeWord(true);
              }}>A</div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
const clickOutsideConfig = {
  handleClickOutside:() => (MoreOptionsButtonWithMoreBox as any).handleClickOutside
}

export default onClickOutside(MoreOptionsButtonWithMoreBox,clickOutsideConfig);