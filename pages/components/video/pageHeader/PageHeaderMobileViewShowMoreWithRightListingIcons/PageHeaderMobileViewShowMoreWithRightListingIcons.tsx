import styles from "../../../../../styles/video/pageHeader/PageHeaderMobileViewShowMoreWithRightListingIcons/PageHeaderMobileViewShowMoreWithRightListingIcons.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import onClickOutside from "react-onclickoutside";
import {Modal} from "react-bootstrap";
import React, {useState} from "react";
import {LoginModal} from "../../../LoginModal/LoginModal";
import PageHeaderMobileViewMoreOptionsButtonWithMoreBox from "../PageHeaderMobileViewMoreOptionsButtonWithMoreBox/PageHeaderMobileViewMoreOptionsButtonWithMoreBox";

const PageHeaderMobileViewShowMoreWithRightListingIcons = (
  props:{
    showFullMenu:boolean,
    search:boolean,
    login:boolean
    more:boolean,
    smallWord:boolean,
    mediumWord:boolean,
    largeWord:boolean,
    setShowFullMenu:React.Dispatch<React.SetStateAction<boolean>>,
    openSearch:React.Dispatch<React.SetStateAction<boolean>>,
    setLogin:React.Dispatch<React.SetStateAction<boolean>>,
    setMore:React.Dispatch<React.SetStateAction<boolean>>,
    setSmallWord:React.Dispatch<React.SetStateAction<boolean>>,
    setMediumWord:React.Dispatch<React.SetStateAction<boolean>>,
    setLargeWord:React.Dispatch<React.SetStateAction<boolean>>,
  }
) => {
  const [more,setMore] = useState(false);
  (PageHeaderMobileViewShowMoreWithRightListingIcons as any).handleClickOutside = () => {
    setMore(false);
    props.setMore(false);
  }

  return(
    <div className={styles.page_header_mobile_view_show_more_with_right_listing_icons}>
      <button className={styles.show_more} onClick={() => {
        setMore(!more);
        props.setMore(!props.more);
      }}>
        <FontAwesomeIcon icon="ellipsis-h" height={18} width={18} className={`${styles.fontawesome_icon} ${more ? styles.open : styles.close}`}/>
      </button>
      {more &&
        <div className={styles.right_listing_icons}>
          <div className={styles.right_listing_icons_box}>
            <div className={props.showFullMenu ? styles.menu : styles.hide_menu}>
              <FontAwesomeIcon icon={["fab","codepen"]} className={`${styles.right_listing_icon} ${props.showFullMenu ? styles.open_codepen_icon : styles.close_codepen_icon}`} height={12} width={12} onClick={() => {
                props.setShowFullMenu(!props.showFullMenu);
                props.openSearch(false);
              }}/>
            </div>
            <div className={styles.login}>
              <button className={styles.login_button} onClick={() => {
                props.setLogin(true);
                props.setShowFullMenu(false);
                props.openSearch(false);
              }}>
                登入
              </button>
              <Modal show={props.login} className="login">
                <LoginModal closeButton={props.setLogin}/>
              </Modal>
            </div>
            <PageHeaderMobileViewMoreOptionsButtonWithMoreBox
              smallWord={props.smallWord}
              mediumWord={props.mediumWord}
              largeWord={props.largeWord}
              setSmallWord={props.setSmallWord}
              setMediumWord={props.setMediumWord}
              setLargeWord={props.setLargeWord}
            />
            <button className={styles.go_upwards} onClick={() => {
              window.scrollTo({
                top:0,
                behavior:"smooth"
              })
            }}>
              <FontAwesomeIcon icon="long-arrow-alt-up" height={12} width={12} className={styles.fontawesome_icon}/>
            </button>
          </div>
        </div>
      }
    </div>
  )
}
const clickOutsideConfig = {
  handleClickOutside:() => (PageHeaderMobileViewShowMoreWithRightListingIcons as any).handleClickOutside
}

export default onClickOutside(PageHeaderMobileViewShowMoreWithRightListingIcons,clickOutsideConfig);