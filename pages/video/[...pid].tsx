import style from "../../styles/index.module.scss";
import styles from "../../styles/Video/Video.module.scss";
import {NextPage} from "next";
import {useRouter} from "next/router";
import {Header} from "../Header/Header";

const video:NextPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const {pid} = router.query;

	return(
    <div className={style.App}>
      <Header/>
    </div>
  )
}

export default video;