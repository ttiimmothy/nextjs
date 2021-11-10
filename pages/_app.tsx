import "../styles/globals.css";
import "../styles/components/BootstrapComponent/Carousel.scss";
import "../styles/components/SwiperPackage/Swiper.scss";
import "../styles/components/BootstrapComponent/Modal.scss";
import "../styles/VideoPlayer/VideoPlayer.scss";
import "../styles/components/BootstrapComponent/Breadcrumb.scss";
import "../styles/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";
import "swiper/swiper.min.css";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";
import SwiperCore,{Mousewheel, Navigation, Pagination,Scrollbar} from "swiper";
import {AppProps} from "next/app";
import {Provider} from "react-redux";
import React from "react";
import {store} from "./store";
library.add(fab,fas,far);
SwiperCore.use([Navigation,Pagination,Scrollbar,Mousewheel]);

function MyApp({Component,pageProps}:AppProps){
	return(
    <Provider store={store}>
      <Component {...pageProps}/>
    </Provider>
  )
}
export default MyApp;