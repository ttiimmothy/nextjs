export const customImageLoader = (resolverProps:{src:string,width:number,quality?:number}) => {
	return `${resolverProps.src}?auto=format&fit=max&w=${resolverProps.width}`;
}