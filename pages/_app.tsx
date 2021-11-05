import "../styles/globals.css";
import "../styles/Home/Carousel.scss";
import "../styles/Home/Swiper.scss";
import "../styles/LoginModal/Modal.scss";
import "../styles/VideoPlayer/VideoPlayer.scss";
<<<<<<< HEAD
import "../styles/Video/Breadcrumb.scss";
=======
>>>>>>> 33e5c6e24b54367167db8e7a1b78afc2c1808194
import "../styles/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";
import "swiper/swiper.min.css";
<<<<<<< HEAD
import "https://googleads.github.io/videojs-ima/dist/videojs.ima.css";
=======
>>>>>>> 33e5c6e24b54367167db8e7a1b78afc2c1808194
import type {AppProps} from "next/app";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";
import SwiperCore,{Mousewheel, Navigation, Pagination,Scrollbar} from "swiper";
import {Provider} from "react-redux";
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