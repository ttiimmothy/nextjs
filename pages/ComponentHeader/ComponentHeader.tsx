import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from "../../styles/ComponentHeader/ComponentHeader.module.scss";

export function ComponentHeader(props:{header:string,color?:string,padding?:number}){
	return(
		<div className={styles.header} style={{color:props.color ? props.color : "#db5959",padding:props.padding === 0 ? "10px 3px 5px 3px" : "10px 10px 5px 10px"}}>
			<div>{props.header}</div>
      <div className={styles.border_line} style={{left:props.padding === 0 ? 3 : 10,right:props.padding === 0 ? 3 : 10}}></div>
			<div className={styles.more_button}>
				<div className={styles.more}>更多</div>
				<div className={styles.arrow} style={{border:props.color ? `solid 2px ${props.color}` : "solid 2px #db5959"}}><FontAwesomeIcon icon="arrow-right" height={11} width={11}/></div>
			</div>
		</div>
	)
}