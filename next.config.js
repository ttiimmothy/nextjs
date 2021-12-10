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
		return{
			"/":{page:"/"},
			"/video/[...pid]":{page:"/video/[...pid]"},
			"/category/[...pid]":{page:"/category/[...pid]"},
			"/channel/[...pid]":{page:"/channel/[...pid]"},
			"/tags/[...pid]":{page:"/tags/[...pid]"},
      "/404":{page:"/404"},
      "/500":{page:"/500"}
    }
  }
}