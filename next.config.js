/** @type {import('next').NextConfig} */
module.exports = {
  	reactStrictMode:true,
	images:{
		domains:["app.m.i-cable.com"]
	},
	webpack:(config,{isServer}) => {
		if(!isServer){
			config.resolve.fallback.fs = false;
		}
		return config;
	}
}