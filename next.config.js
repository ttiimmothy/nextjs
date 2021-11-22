/** @type {import('next').NextConfig} */
module.exports = {
  	reactStrictMode:false,
	images:{
		domains:["app.m.i-cable.com"]
		// loader:"akamai",
		// path:""
	},
	webpack:(config,{isServer}) => {
		if(!isServer){
			config.resolve.fallback.fs = false;
		}
		return config;
	}
}