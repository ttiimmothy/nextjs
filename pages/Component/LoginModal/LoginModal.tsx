import styles from "../../../styles/LoginModal/LoginModal.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import vip from "../../image/login_vip_icon.png";
import Image from "next/image";
import {useState} from "react";

export function LoginModal(props:{closeButton:React.Dispatch<React.SetStateAction<boolean>>}){
  const [chooseMethod,setChooseMethod] = useState(true);
  const [firstMethod,setFirstMethod] = useState(false);
  const [secondMethod,setSecondMethod] = useState(false);

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
          (
            <div className={styles.first_page}>
              <div className={styles.header}>
                <div className={styles.vip}>
                  <div className={styles.image}>
                    <Image src={vip} alt="vip login" height={32} width={32}/>
                  </div>
                  <div className={styles.vip_login}>請登入已繼續觀看</div>
                </div>
                <div className={styles.header_second_line}>選擇登入方法</div>
              </div>
              <ul className={styles.login_methods}>
                <li className={styles.login_method}>
                  <button className={styles.login_button} onClick={() => {
                    setChooseMethod(false);
                    setFirstMethod(true);
                  }}>
                    <span className={styles.login}>有線用戶</span>
                  </button>
                </li>
                <li className={styles.login_method}>
                  <button className={styles.login_button} onClick={() => {
                    setChooseMethod(false);
                    setSecondMethod(true);
                  }}>
                    <span className={styles.login}>流動用戶</span>
                  </button>
                </li>
              </ul>
            </div>
          )
        }
        {
          firstMethod &&
          <div className={`${styles.first_login_method} first_login`}>
            <div className={styles.header}>
              <div className={styles.image}>
                <Image src={vip} alt="vip login" height={32} width={32}/>
              </div>
              <div className={styles.header_word}>以有線用戶身分登入</div>
            </div>
            <div className={styles.login_input}>
              <input placeholder="登記電話號碼" className={styles.input}/>
              <input placeholder="身分證號碼 例如:A1234567" className={styles.input}/>
            </div>
            <ul className={styles.buttons}>
              <li className={styles.login}>
                <button className={styles.button}>登入</button>
              </li>
              <li className={styles.back}>
                <button className={styles.button} onClick={() => {
                  setChooseMethod(true);
                  setFirstMethod(false);
                }}>返回</button>
              </li>
              <li className={styles.register}>
                <button className={styles.registration_button}>立即申請有線電視</button>
              </li>
            </ul>
          </div>
        }
        {
          secondMethod &&
          <div className={`${styles.second_login_method} second_login`}>
            <div className={styles.header}>
              <div className={styles.image}>
                <Image src={vip} alt="vip login" height={32} width={32}/>
              </div>
              <div className={styles.header_word}>以流動用戶身分登入</div>
            </div>
            <div className={styles.login_input}>
              <input placeholder="電郵地址" className={styles.input}/>
              <input placeholder="電話號碼" className={styles.input}/>
            </div>
            <ul className={styles.buttons}>
              <li className={styles.login}>
                <button className={styles.button}>登入</button>
              </li>
              <li className={styles.back}>
                <button className={styles.button} onClick={() => {
                  setChooseMethod(true);
                  setSecondMethod(false);
                }}>返回</button>
              </li>
            </ul>
          </div>
        }
        <div className={styles.specialized_plan}>*適用指定服計劃</div>
      </section>
    </div>
  )
}