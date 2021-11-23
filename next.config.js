/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode:false,
	images:{
		domains:["app.m.i-cable.com"],
		// loader:"imgix",
		// path:""
	},
	webpack:(config,{isServer}) => {
		if(!isServer){
			config.resolve.fallback.fs = false;
		}
		return config;
	}
}