import styles from "../../../styles/CategoryComponentHeader/CategoryComponentHeader.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export function CategoryComponentHeader(props:{header:string,color?:string,borderColor?:string}){
	return(
		<div className={styles.category_component_header} style={{color:props.color ? props.color : "#db5959"}}>
			<div>{props.header}</div>
      <div className={styles.border_line} style={{backgroundColor:props.borderColor ? props.borderColor : "#999"}}></div>
			<div className={styles.more_button}>
				<div className={styles.more}>更多</div>
				<div className={styles.arrow} style={{border:props.color ? `solid 2px ${props.color}` : "solid 2px #db5959"}}><FontAwesomeIcon icon="arrow-right" height={11} width={11}/></div>
			</div>
		</div>
	)
}