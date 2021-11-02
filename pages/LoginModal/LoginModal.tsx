import styles from "../../styles/LoginModal/LoginModal.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import vip from "../image/login_vip_icon.png";
import Image from "next/image";
import {useState} from "react";

export function LoginModal(props:{closeButton:React.Dispatch<React.SetStateAction<boolean>>}){
  const [chooseMethod,setChooseMethod] = useState(true);
  return(
    <div className={styles.login_modal}>
      <section className={styles.login_modal_section}>
        <div className={styles.close}>
          <button className={styles.close_button} onClick={() => {
            props.closeButton(false);
          }}>
            <FontAwesomeIcon icon="times" height={16} width={16} className={styles.fontawesome_icon}/>
          </button>
        </div>
        {
          chooseMethod &&
          <div className={styles.first_page}>
            <div className={styles.header}>
              <div className={styles.vip}>
                <div className={styles.image}>
                  <Image src={vip} alt="vip login" height={32} width={32}/>
                </div>
                <div>請登入已繼續觀看</div>
              </div>
              <div>選擇登入方法</div>
            </div>
            <ul className={styles.login_methods}>
              <li className={styles.login_method}>
                <span className={styles.login}>有線用戶</span>
              </li>
              <li className={styles.login_method}>
                <span className={styles.login}>流動用戶</span>
              </li>
            </ul>
          </div>
        }
        <div className={styles.second_page}></div>
        <div className={styles.specialized_plan}>*適用指定服計劃</div>
      </section>
    </div>
  )
}