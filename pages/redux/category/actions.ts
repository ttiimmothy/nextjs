import {VideoDetail} from "../home/actions";

export function getContentSuccess(video:VideoDetail[]){
	return{
		type:"@@category/Get_content" as const,
		video
	}
}

export type ICategoryActions = ReturnType<typeof getContentSuccess>