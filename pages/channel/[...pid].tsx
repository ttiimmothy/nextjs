import styles from "../../styles/Channel/Channel.module.scss";
import style from "../../styles/index.module.scss";
import {NextPage} from "next";
import {useRouter} from "next/router";
import {useDispatch,useSelector} from "react-redux";
import React,{useState} from "react";
import {TypeHeader} from "../components/TypeHeader/TypeHeader";
import {Footer} from "../components/Footer/Footer";
import {Breadcrumb} from "../components/Breadcrumb/Breadcrumb";
import {IRootState} from "../store";

const SubCategory:NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const {pid} = router.query;
  const videos = useSelector((state:IRootState) => state.category.video);
  const categories = useSelector((state:IRootState) => state.header.category);
  const subCategories = useSelector((state:IRootState) => state.header.subCategory);
  const [search,setSearch] = useState(false);

	return(
    <div className={`${styles.channel} ${styles.pid}`}>
      <TypeHeader search={search} setSearch={setSearch}/>
      <div className={`${styles.channel_content} ${style.App}`}>
        <main className={styles.page}>
          <div className={styles.breadcrumb}>
            <Breadcrumb pid={pid} videos={videos} categories={categories} subCategories={subCategories} type="subCategory"/>
          </div>
          <div className={styles.body}>
            <div className={styles.main_content}></div>
          </div>
        </main>
      </div>
      <Footer/>
    </div>
  )
}

export default SubCategory;