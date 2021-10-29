import "../styles/globals.css";
import "../styles/Home/Carousel.scss";
import "../styles/Home/Swiper.scss";
import "../styles/styles.scss";
import styles from "../styles/index.module.scss";
import type {AppProps} from "next/app";
import {store} from "./store";
import {Provider} from "react-redux";

function MyApp({Component,pageProps}:AppProps){
	return(
    <Provider store={store}>
      <Component {...pageProps}/>
    </Provider>
  )
}
export default MyApp;