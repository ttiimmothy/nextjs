/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode:false,
	images:{
		domains:["app.m.i-cable.com"],
		loader:"custom"
	},
	webpack:(config,{isServer}) => {
		if(!isServer){
			config.resolve.fallback.fs = false;
		}
		return config;
	},
	exportPathMap:async function(defaultPathMap,{dev,dir,outDir,distDir,buildId}){
		return {
			"/":{page:"/"},
			"/video/[...pid]":{page:"/video/[...pid]",query:{}},
			"/category/[...pid]":{page:"/category/[...pid]",query:{}},
			"/channel/[...pid]":{page:"/channel/[...pid]",query:{}},
			"/tags/[...pid]":{page:"/tags/[...pid]",query:{}},
			"/404":{page:"/404"}
    }
  },
  trailingSlash:true,
}