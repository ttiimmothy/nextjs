export interface VideoDetail{
	cate_id:string;
	created_at:string;
	desc:string;
	display_date:string;
	end_date:null;
	expiry_date:string;
	id:string;
	is_vip:string;
	pic_url:string;
	prog_id:string;
	prog_name:string;
	source:string;
	status:string;
	subcate_id:string;
	subcate_name:string;
	title:string;
	updated_at:string;
	video_url:string;
}
export function getHomeDetailSuccess(videos:VideoDetail[]){
	return{
		type:"@@home/Get_home_detail" as const,
		videos
	}
}

export type IHomeActions = ReturnType<typeof getHomeDetailSuccess>