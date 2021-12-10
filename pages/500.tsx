import styles from "../styles/error/500.module.scss";
import style from "../styles/index.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Head from "next/head";
import {useRouter} from "next/router";
import {NextPage} from "next";
import React,{useEffect,useState} from "react";
import {Header} from "../src/components/home/Header/Header";
import {Footer} from "../src/components/Footer/Footer";

const Error500:NextPage = () => {
  const router = useRouter();
  const [scrollHeight,setScrollHeight] = useState(0);
  useEffect(() => {
    function updateScrollHeight(){
			setScrollHeight(window.pageYOffset);
		}
    window.addEventListener("scroll",updateScrollHeight);
    return () => {
      window.removeEventListener("scroll",updateScrollHeight);
    }
	},[])

  return(
    <div className={styles.error500}>
      <Head>
        <title>500</title>
      </Head>
      <Header/>
      {scrollHeight > 5 &&
        <button className={styles.upwards_button} onClick={() => {
          window.scrollTo({
            top:0,
            behavior:"smooth"
          })
        }}>
          <FontAwesomeIcon icon="chevron-up" height={20} width={20}/>
        </button>
      }
      <div className={`${styles.error404_content} ${style.App}`}>
        <main className={styles.page}>
          <div className={styles.body}>
            <div className={styles.main_content}>
            <div className={styles.error_box}>
              <h2>網頁不見了</h2>
              <div>對不起，你輸入的網頁暫時找不到。</div>
              <div>你可以按下面的按鈕回到首頁，謝謝。</div>
              <div>狀態碼: 500</div>
              <button className={styles.back_button} onClick={() => {
                router.push("/");
              }}>返回</button>
            </div>
          </div>
          </div>
        </main>
      </div>
      <Footer/>
    </div>
  )
}

export default Error500;