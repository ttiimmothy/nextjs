#!/bin/bash
rm -rf .next build
cd ../cable-website-next-js-out
rm -rf _next category channel image tags video 404.html 404.html.html index.html swiper_favicon.ico build
cd ../cable_website_nextjs
# build the next js project with the latest content
next build && next export -o build
cd build
cp -r _next category channel image tags video 404.html index.html myfavicon.ico swiper_favicon.ico ../../cable-website-next-js-out