import "../styles/global/bootstrapComponent/Carousel.scss";
import "../styles/global/swiper/Swiper.scss";
import "../styles/global/bootstrapComponent/Modal.scss";
import "../styles/VideoPlayer/VideoPlayer.scss";
import "../styles/global/bootstrapComponent/Breadcrumb.scss";
import "../styles/styles.scss";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";
import SwiperCore,{Autoplay,Controller,EffectCube,EffectFade,Mousewheel,Navigation,Pagination,Scrollbar} from "swiper";
import {AppProps} from "next/app";
import Head from "next/head";
import {Provider} from "react-redux";
import React from "react";
import {store} from "../src/store";
library.add(fab,fas,far);
SwiperCore.use([Navigation,Pagination,Scrollbar,Mousewheel,Autoplay,Controller,EffectFade,EffectCube]);

function MyApp({Component,pageProps}:AppProps){
	return(
    <Provider store={store}>
      <Head>
        <meta name="description" content="Generated by create next app"/>
        <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
        <link rel="icon" href="/myfavicon.ico"/>
      </Head>
      <Component {...pageProps}/>
    </Provider>
  )
}
export default MyApp;