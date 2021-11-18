import styles from "../../../styles/Breadcrumb/Breadcrumb.module.scss";
import {Breadcrumb as ReactBreadcrumb} from "react-bootstrap";
import {Category, SubCategory} from "../../redux/header/actions";
import {VideoDetail} from "../../redux/home/actions";

export function Breadcrumb(props:{pid:string|string[]|undefined,videos:VideoDetail[],categories:Category[],subCategories?:SubCategory[],type:string}){
  return(
    <div className={styles.breadcrumb}>
      {props.type === "video" && props.videos.filter((video) => video.id === (props.pid && props.pid[1])).map((video) =>
        <ReactBreadcrumb key={video.id}>
          <ReactBreadcrumb.Item href="/" className={styles.breadcrumb_link}>主頁</ReactBreadcrumb.Item>
          <ReactBreadcrumb.Item href={`/category/${props.categories.filter((category) => category.cate_id === video.cate_id).map((category) => category.name_en.toLowerCase().split(" ").join(""))}`} className={styles.breadcrumb_link}>
            {props.categories.filter((category) => category.cate_id === video.cate_id).map((category) => category.name_cn)}
          </ReactBreadcrumb.Item>
          <ReactBreadcrumb.Item href={`/channel/${video.subcate_name.split("．").join("").split("・").join("")}/${video.subcate_id}`} className={styles.breadcrumb_link}>
            {video.subcate_name.split("．").join("").split("・").join("")}
          </ReactBreadcrumb.Item>
          <ReactBreadcrumb.Item active>{props.videos.filter((video) => video.id === (props.pid && props.pid[1])).map((video) => video.title)}</ReactBreadcrumb.Item>
        </ReactBreadcrumb>
      )}
      {props.type === "category" && props.categories.filter((category) => category.name_en.toLowerCase().split(" ").join("") === (props.pid && props.pid[0])).map((category) =>
        <ReactBreadcrumb key={category.cate_id}>
          <ReactBreadcrumb.Item href="/" className={styles.breadcrumb_link}>主頁</ReactBreadcrumb.Item>
          <ReactBreadcrumb.Item active>{category.name_cn}</ReactBreadcrumb.Item>
        </ReactBreadcrumb>
      )}
      {props.type === "subCategory" && props.subCategories && props.subCategories.filter((subCategory) => subCategory.name_cn.split("．").join("").split("・").join("") === (props.pid && props.pid[0])).map((subCategory) =>
        <ReactBreadcrumb key={subCategory.subcate_id}>
          <ReactBreadcrumb.Item href="/" className={styles.breadcrumb_link}>主頁</ReactBreadcrumb.Item>
          <ReactBreadcrumb.Item href={`/category/${props.categories.filter((category) => category.cate_id === subCategory.cate_id).map((category) => category.name_en.toLowerCase().split(" ").join(""))}`} className={styles.breadcrumb_link}>
            {props.categories.filter((category) => category.cate_id === subCategory.cate_id).map((category) => category.name_cn)}
          </ReactBreadcrumb.Item>
          <ReactBreadcrumb.Item active>{props.pid && props.pid[0]}</ReactBreadcrumb.Item>
        </ReactBreadcrumb>
      )}
    </div>
  )
}