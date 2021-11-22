/** @type {import('next').NextConfig} */
module.exports = {
  	reactStrictMode:false,
	images:{
		domains:["app.m.i-cable.com"],
		// loader:"akamai",
		// path:"https://localhost:3031"
	},
	webpack:(config,{isServer}) => {
		if(!isServer){
			config.resolve.fallback.fs = false;
		}
		return config;
	}
}