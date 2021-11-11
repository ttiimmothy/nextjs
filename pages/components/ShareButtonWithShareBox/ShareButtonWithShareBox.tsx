import styles from "../../../styles/ShareButtonWithShareBox/ShareButtonWithShareBox.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import onClickOutside from "react-onclickoutside";
import {useState} from "react";

const ShareButtonWithShareBox = () => {
  const [share,setShare] = useState(false);
  (ShareButtonWithShareBox as any).handleClickOutside = () => setShare(false);

  return(
    <div className={styles.share_button_with_share_box}>
      <button className={styles.share_button} onClick={() => {
        setShare(!share)
      }}>
        <FontAwesomeIcon icon={["far","share-square"]} height={14} width={14} className={styles.fontawesome_icon}/>
        <div className={styles.share}>分享</div>
      </button>
      {share &&
        <div className={styles.share_box}>
          <div className={styles.share_box_area}>
            <div className={styles.facebook_share}>
              <FontAwesomeIcon icon={["fab","facebook-f"]} height={18} width={18} className={styles.fontawesome_icon}/>
              <div>透過facebook分享</div>
            </div>
            <div className={styles.copy_link}>
              <FontAwesomeIcon icon="paperclip" height={18} width={18} className={styles.fontawesome_icon}/>
              <div>複制連結</div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
const clickOutsideConfig = {
  handleClickOutside:() => (ShareButtonWithShareBox as any).handleClickOutside
}

export default onClickOutside(ShareButtonWithShareBox,clickOutsideConfig);