#!/bin/bash
cd ../cable-website-next-js-out
rm -rf _next category channel image tags video 404.html index.html swiper_favicon.ico
cd ../cable_website_nextjs
yarn build
cp -r build ../cable-website-next-js-out