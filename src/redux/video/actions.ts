export interface Video{
	stream_url:string
}

export function getVideoSuccess(video:Video){
	return{
		type:"@@video/Get_video" as const,
		video
	}
}

export type IVideoActions = ReturnType<typeof getVideoSuccess>