(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[350],{4520:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return L}});var r=o(2806),i=o.n(r),c=o(2734),a=o.n(c),n=o(4519),s=o(4002),_=o(7814),l=o(1163),d=o(9008),u=o(5675),m=o(1664),g=o(9704),f=o(7294),h=o(3256),y=o(5563),j=o(1829),v=o(116),x=o(1772),b=o.n(x),p=o(5893);function N(e){return(0,p.jsxs)("div",{className:b().category_component_header,style:{color:e.color?e.color:"#db5959"},children:[(0,p.jsx)("div",{children:e.header}),(0,p.jsx)("div",{className:b().border_line,style:{backgroundColor:e.borderColor?e.borderColor:"#ddd"}}),(0,p.jsxs)("div",{className:b().more_button,children:[(0,p.jsx)("div",{className:e.swiper?b().swiper_more:b().more,children:"\u66f4\u591a"}),(0,p.jsx)("div",{className:e.swiper?b().swiper_arrow:b().arrow,style:{border:e.color?"solid 2px ".concat(e.color):"solid 2px #db5959"},children:(0,p.jsx)(_.G,{icon:"arrow-right",height:11,width:11})})]})]})}var w=o(7825),C=o(1159),k=o(8717),S=o.n(k),H=o(8912),G=function(e){return(0,p.jsx)("div",{className:S().category_swiper_block,children:(0,p.jsx)(m.default,{href:"/video/".concat(e.video.subcate_name.split("\uff0e").join("").split("\u30fb").join(""),"/").concat(e.video.id,"/").concat(encodeURI(e.video.title)),children:(0,p.jsxs)("a",{className:S().video_block_link,children:[(0,p.jsx)("div",{className:S().image,children:(0,p.jsx)(u.default,{src:e.video.pic_url,alt:"video detail",layout:"fill",loader:H.o})}),(0,p.jsxs)("div",{className:S().video_description,children:[(0,p.jsx)("header",{className:S().video_title,children:e.video.title}),(0,p.jsx)("div",{className:S().display_date,children:e.video.display_date})]})]})})})},L=function(){var e,t,o=(0,g.I0)(),r=(0,l.useRouter)().query.pid,c=(0,g.v9)((function(e){return e.category.video})),x=(0,g.v9)((function(e){return e.header.category})),b=(0,g.v9)((function(e){return e.header.subCategory})),k=(0,f.useState)(0),S=k[0],L=k[1],P=(0,f.useState)(null),B=P[0],R=P[1],O=(0,f.useState)(!1),z=O[0],E=O[1],I=null===(e=x.filter((function(e){return e.name_en.toLowerCase().split(" ").join("").split("/").join("")===(r&&r[0])}))[0])||void 0===e?void 0:e.cate_id,J=null===(t=x.filter((function(e){return e.name_en.toLowerCase().split(" ").join("")===(r&&r[0])}))[0])||void 0===t?void 0:t.name_cn,V=c.filter((function(e,t){return t<3||t>8&&t<12}));if((V=V.reverse()).length>0)for(var A=0;A<3;A++)V.push(V.shift());return(0,f.useEffect)((function(){o((0,h.L)(I))}),[o,I]),(0,f.useEffect)((function(){function e(){L(window.pageYOffset)}return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[S]),(0,p.jsxs)("div",{className:"".concat(i().category," ").concat(i().pid),children:[(0,p.jsx)(d.default,{children:(0,p.jsx)("title",{children:J})}),(0,p.jsx)(y.S,{search:z,setSearch:E}),(0,p.jsx)("header",{className:"".concat(S>10?i().category_header_scroll:i().category_header," ").concat(z?i().category_header_for_searching:""),children:(0,p.jsx)("div",{className:"".concat(i().separate_category_color," ").concat("\u65b0\u805e"===J?i().news_color:"\u8ca1\u7d93\u8cc7\u8a0a"===J?i().finance_color:"\u958b\u96fb\u8996\u4efb\u4f60\u7747"===J?i().opentv_color:"\u5a1b\u6a02"===J?i().entertainment_color:"\u5287\u96c6"===J?i().drama_color:"\u9ad4\u80b2"===J?i().sports_color:"\u8cfd\u99ac"===J?i().horse_color:"Fit\u958b\u65b0\u9818\u57df"===J?i().fit_zone_color:""),children:(0,p.jsx)("div",{className:i().category_header_width,children:(0,p.jsxs)("div",{className:i().flex_header,children:[(0,p.jsx)("h2",{children:x.filter((function(e){return e.cate_id===I})).map((function(e){return e.name_cn}))}),(0,p.jsx)("div",{className:i().shadow,children:(0,p.jsx)("div",{className:i().sub_category_bar_horizontal_scroll,children:(0,p.jsx)("nav",{className:i().sub_category_bar,children:(0,p.jsxs)("ul",{className:i().sub_category_items,children:[(0,p.jsx)("li",{className:"".concat(i().sub_category_item," ").concat(i().active),children:(0,p.jsx)(m.default,{href:"/category/".concat(r&&r[0]),children:(0,p.jsx)("a",{children:"\u5168\u90e8"})})}),b.filter((function(e){return e.cate_id===I})).map((function(e,t){return(0,p.jsx)("li",{className:i().sub_category_item,children:(0,p.jsx)(m.default,{href:"/channel/".concat(e.name_cn.split("\uff0e").join("").split("\u30fb").join(""),"/").concat(e.subcate_id),children:(0,p.jsx)("a",{children:e.name_cn.split("\uff0e").join("").split("\u30fb").join("")})})},t)}))]})})})})]})})})}),(0,p.jsxs)("div",{className:"".concat(z?i().category_content_for_searching:S>10?i().category_content_scroll:i().category_content," ").concat(a().App),children:[(0,p.jsxs)("main",{className:i().page,children:[(0,p.jsx)("div",{className:i().breadcrumb,children:(0,p.jsx)(v.a,{pid:r,videos:c,categories:x,type:"category"})}),(0,p.jsx)("div",{className:i().body,children:(0,p.jsxs)("div",{className:i().main_content,children:[(0,p.jsx)("div",{className:"".concat(i().carousel," category_carousel"),children:(0,p.jsx)(n.t,{navigation:!0,pagination:{clickable:!0},spaceBetween:5,loop:!0,effect:"fade",autoplay:{delay:3e3,disableOnInteraction:!1},controller:{control:B,inverse:!0},children:c.filter((function(e,t){return t<3||t>8&&t<12})).map((function(e){return(0,p.jsx)(s.o,{children:(0,p.jsxs)("div",{className:i().video_block,children:[(0,p.jsx)(m.default,{href:"/video/".concat(e.subcate_name.split("\uff0e").join("").split("\u30fb").join(""),"/").concat(e.id,"/").concat(encodeURI(e.title)),children:(0,p.jsx)("a",{className:i().video_block_link,children:(0,p.jsx)("div",{className:i().image,children:(0,p.jsx)(u.default,{src:e.pic_url,alt:"video detail",layout:"fill",loader:H.o})})})}),(0,p.jsxs)("div",{className:i().video_description,children:[(0,p.jsx)("div",{className:i().carousel_category,children:(0,p.jsx)(m.default,{href:"/category/".concat(x.filter((function(t){return t.cate_id===e.cate_id})).map((function(e){return e.name_en}))),children:(0,p.jsx)("a",{children:x.filter((function(t){return t.cate_id===e.cate_id})).map((function(e){return e.name_cn}))})})}),(0,p.jsx)("header",{className:i().video_title,children:e.title}),(0,p.jsx)("div",{className:i().display_date,children:e.display_date})]})]})},e.id)}))})}),(0,p.jsx)("div",{className:"".concat(i().side_carousel," category_side_carousel"),children:(0,p.jsx)(n.t,{direction:"vertical",spaceBetween:2,slidesPerView:3,slidesPerGroup:1,loop:!0,onSwiper:R,children:V.map((function(e){return(0,p.jsx)(s.o,{children:(0,p.jsx)("div",{className:i().video_block,children:(0,p.jsx)(m.default,{href:"/video/".concat(e.subcate_name.split("\uff0e").join("").split("\u30fb").join(""),"/").concat(e.id,"/").concat(encodeURI(e.title)),children:(0,p.jsxs)("a",{className:i().video_block_link,children:[(0,p.jsx)("div",{className:i().image,children:(0,p.jsx)(u.default,{src:e.pic_url,alt:"video detail",layout:"fill",loader:H.o})}),(0,p.jsx)("header",{className:i().video_title,children:e.title})]})})})},e.id)}))})})]})})]}),(0,p.jsxs)("div",{className:"long_swiper ".concat(i().category_long_swiper),children:[b.filter((function(e){return e.cate_id===I})).length>0&&(0,p.jsx)(N,{header:b.filter((function(e){return e.cate_id===I}))[0].name_cn.split("\uff0e").join("").split("\u30fb").join(""),swiper:!0}),(0,p.jsx)("div",{className:i().long_swiper,children:(0,p.jsx)(n.t,{spaceBetween:3,slidesPerView:"auto",slidesPerGroup:2,navigation:!0,pagination:{clickable:!0},mousewheel:{forceToAxis:!0},children:b.filter((function(e){return e.cate_id===I})).length>0&&c.filter((function(e){return e.subcate_id===(b.filter((function(e){return e.cate_id===I}))[0]&&b.filter((function(e){return e.cate_id===I}))[0].subcate_id)})).filter((function(e,t){return t<10})).map((function(e){return(0,p.jsx)(s.o,{className:a().category_block,children:(0,p.jsx)(G,{video:e})},e.id)}))})})]}),b.filter((function(e){return e.cate_id===I})).length>1&&(0,p.jsx)("div",{className:i().big_block_sub_category,children:(0,p.jsxs)("section",{className:i().big_block_sub_category_section,children:[b.filter((function(e){return e.cate_id===I})).length>1&&(0,p.jsx)(N,{header:b.filter((function(e){return e.cate_id===I}))[1].name_cn.split("\uff0e").join("").split("\u30fb").join("")}),(0,p.jsxs)("div",{className:i().video_list,children:[c.filter((function(e){return e.subcate_id===b.filter((function(e){return e.cate_id===I}))[1].subcate_id})).filter((function(e,t){return t<1})).map((function(e){return(0,p.jsx)(C.L,{video:e,main:!0},e.id)})),c.filter((function(e){return e.subcate_id===b.filter((function(e){return e.cate_id===I}))[1].subcate_id})).filter((function(e,t){return 1===t})).map((function(e){return(0,p.jsx)(C.L,{video:e},e.id)})),c.filter((function(e){return e.subcate_id===b.filter((function(e){return e.cate_id===I}))[1].subcate_id})).filter((function(e,t){return t>1&&t<5})).map((function(e){return(0,p.jsx)(w.g,{video:e},e.id)}))]}),(0,p.jsx)("div",{className:i().more_button,children:(0,p.jsx)("section",{className:i().more_button_section,children:(0,p.jsxs)("button",{className:i().see_more,children:[(0,p.jsx)("div",{className:i().more,children:"\u66f4\u591a"}),(0,p.jsx)(_.G,{icon:"chevron-down",className:i().fontawesome_icon,height:12,width:12})]})})})]})}),b.filter((function(e){return e.cate_id===I})).length>2&&(0,p.jsx)("div",{className:i().sub_category,children:(0,p.jsxs)("section",{className:i().sub_category_section,children:[b.filter((function(e){return e.cate_id===I})).length>2&&(0,p.jsx)(N,{header:b.filter((function(e){return e.cate_id===I}))[2].name_cn.split("\uff0e").join("").split("\u30fb").join("")}),(0,p.jsxs)("div",{className:i().video_list,children:[c.filter((function(e){return e.subcate_id===b.filter((function(e){return e.cate_id===I}))[2].subcate_id})).filter((function(e,t){return t<1})).map((function(e){return(0,p.jsx)(w.g,{video:e,main:!0},e.id)})),c.filter((function(e){return e.subcate_id===b.filter((function(e){return e.cate_id===I}))[2].subcate_id})).filter((function(e,t){return t>0&&t<6})).map((function(e){return(0,p.jsx)(w.g,{video:e},e.id)}))]}),(0,p.jsx)("div",{className:i().more_button,children:(0,p.jsx)("section",{className:i().more_button_section,children:(0,p.jsxs)("button",{className:i().see_more,children:[(0,p.jsx)("div",{className:i().more,children:"\u66f4\u591a"}),(0,p.jsx)(_.G,{icon:"chevron-down",className:i().fontawesome_icon,height:12,width:12})]})})})]})}),b.filter((function(e){return e.cate_id===I})).length>3&&(0,p.jsx)("div",{className:i().dark_background_block,children:(0,p.jsxs)("section",{className:i().dark_background_block_section,children:[(0,p.jsx)(N,{header:b.filter((function(e){return e.cate_id===I}))[3].name_cn.split("\uff0e").join("").split("\u30fb").join(""),color:"#fff",borderColor:"#4d535a"}),(0,p.jsxs)("div",{className:i().video_list,children:[c.filter((function(e){return e.subcate_id===b.filter((function(e){return e.cate_id===I}))[3].subcate_id})).filter((function(e,t){return t<1})).map((function(e){return(0,p.jsx)(m.default,{href:"/video/".concat(e.subcate_name.split("\uff0e").join("").split("\u30fb").join(""),"/").concat(e.id,"/").concat(encodeURI(e.title)),children:(0,p.jsxs)("a",{className:i().main_video_block,children:[(0,p.jsx)("div",{className:i().image_width,children:(0,p.jsx)("div",{className:i().image,children:(0,p.jsx)(u.default,{src:e.pic_url,alt:"video detail",layout:"fill",loader:H.o})})}),(0,p.jsx)("header",{className:i().video_title,children:e.title}),(0,p.jsx)("div",{className:i().display_date,children:e.display_date})]})},e.id)})),c.filter((function(e){return e.subcate_id===b.filter((function(e){return e.cate_id===I}))[3].subcate_id})).filter((function(e,t){return t>0&&t<3})).map((function(e){return(0,p.jsx)(m.default,{href:"/video/".concat(e.subcate_name.split("\uff0e").join("").split("\u30fb").join(""),"/").concat(e.id,"/").concat(encodeURI(e.title)),children:(0,p.jsxs)("a",{className:i().video_block,children:[(0,p.jsx)("div",{className:i().image_width,children:(0,p.jsx)("div",{className:i().image,children:(0,p.jsx)(u.default,{src:e.pic_url,alt:"video detail",layout:"fill",loader:H.o})})}),(0,p.jsx)("header",{className:i().video_title,children:e.title}),(0,p.jsx)("div",{className:i().display_date,children:e.display_date})]})},e.id)}))]}),(0,p.jsx)("div",{className:i().more_button,children:(0,p.jsx)("section",{className:i().more_button_section,children:(0,p.jsxs)("button",{className:i().see_more,children:[(0,p.jsx)("div",{className:i().more,children:"\u66f4\u591a"}),(0,p.jsx)(_.G,{icon:"chevron-down",className:i().fontawesome_icon,height:12,width:12})]})})})]})}),b.filter((function(e){return e.cate_id===I})).length>4&&b.filter((function(e){return e.cate_id===I})).filter((function(e,t){return t>3})).map((function(e){return(0,p.jsx)("div",{className:i().sub_category,children:(0,p.jsxs)("section",{className:i().sub_category_section,children:[(0,p.jsx)(N,{header:e.name_cn}),(0,p.jsxs)("div",{className:i().video_list,children:[c.filter((function(t){return t.subcate_id===e.subcate_id})).filter((function(e,t){return t<1})).map((function(e){return(0,p.jsx)(w.g,{video:e,main:!0},e.id)})),c.filter((function(t){return t.subcate_id===e.subcate_id})).filter((function(e,t){return t>0&&t<6})).map((function(e){return(0,p.jsx)(w.g,{video:e},e.id)}))]}),(0,p.jsx)("div",{className:i().more_button,children:(0,p.jsx)("section",{className:i().more_button_section,children:(0,p.jsxs)("button",{className:i().see_more,children:[(0,p.jsx)("div",{className:i().more,children:"\u66f4\u591a"}),(0,p.jsx)(_.G,{icon:"chevron-down",className:i().fontawesome_icon,height:12,width:12})]})})})]})},e.subcate_id)})),(0,p.jsx)("div",{className:i().closest_videos,children:(0,p.jsxs)("section",{className:i().closest_videos_section,children:[(0,p.jsx)("div",{className:i().component_header,children:(0,p.jsx)("div",{children:"\u6700\u65b0\u5f71\u7247"})}),(0,p.jsxs)("div",{className:i().video_list,children:[c.filter((function(e,t){return t<2})).map((function(e){return(0,p.jsx)(w.g,{video:e},e.id)})),(0,p.jsx)("div",{className:i().blank_block,children:(0,p.jsx)("div",{className:i().blank,children:(0,p.jsx)("div",{className:i().flex_grow})})}),c.filter((function(e,t){return t>1&&t<100})).map((function(e,t){return(t+1)%6===0?(0,p.jsx)("div",{className:i().blank_block,children:(0,p.jsx)("div",{className:i().blank,children:(0,p.jsx)("div",{className:i().flex_grow})})},t):(0,p.jsx)(w.g,{video:e},e.id)}))]})]})})]}),(0,p.jsx)(j.$,{})]})}},4712:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/category/[...pid]",function(){return o(4520)}])},2806:function(e){e.exports={category:"Category_category__1iOiO",pid:"Category_pid__1fWtJ",category_header_scroll:"Category_category_header_scroll__1nhMV",separate_category_color:"Category_separate_category_color__UqLjw",category_header_width:"Category_category_header_width__E-slG",category_header:"Category_category_header__1AP_B",flex_header:"Category_flex_header__1JXPY",shadow:"Category_shadow__3VczK",sub_category_bar_horizontal_scroll:"Category_sub_category_bar_horizontal_scroll__1RuOL",sub_category_bar:"Category_sub_category_bar__2dAyH",sub_category_items:"Category_sub_category_items__30qID",category_content_for_searching:"Category_category_content_for_searching__ASMFz",dark_background_block:"Category_dark_background_block__25Dui",dark_background_block_section:"Category_dark_background_block_section__21otj",video_list:"Category_video_list__1XRav",video_block:"Category_video_block__1uLtN",video_title:"Category_video_title__2wXiX",category_content_scroll:"Category_category_content_scroll__2No25",category_content:"Category_category_content__3dHVN",news_color:"Category_news_color__NDTeg",opentv_color:"Category_opentv_color__2ooJx",entertainment_color:"Category_entertainment_color__42QKu",drama_color:"Category_drama_color__2P9yl",sports_color:"Category_sports_color__12awI",horse_color:"Category_horse_color__1Y0iR",fit_zone_color:"Category_fit_zone_color__1OyJD",big_block_sub_category:"Category_big_block_sub_category__21HpT",more_button:"Category_more_button__3Zl-t",sub_category:"Category_sub_category__3dNw-",main_video_block:"Category_main_video_block__ZUprA",image_width:"Category_image_width__2xebA",display_date:"Category_display_date__12G9h",closest_videos:"Category_closest_videos__3Jles",closest_videos_section:"Category_closest_videos_section__1vn30",blank_block:"Category_blank_block__CW-G_",page:"Category_page__1NBxL",body:"Category_body__1tT6Q",main_content:"Category_main_content__HkZKC",side_carousel:"Category_side_carousel__2wG27",sub_category_item:"Category_sub_category_item__2gYK8",active:"Category_active__1FeDw",finance_color:"Category_finance_color__3JPzf",category_header_for_searching:"Category_category_header_for_searching__2VuSP",carousel:"Category_carousel__2b_z5",video_block_link:"Category_video_block_link__8ciPy",image:"Category_image__3J7jq",video_description:"Category_video_description__2Dp2u",carousel_category:"Category_carousel_category__33371",category_long_swiper:"Category_category_long_swiper__Cqimn",long_swiper:"Category_long_swiper__19mHo",big_block_sub_category_section:"Category_big_block_sub_category_section__uH04V",more_button_section:"Category_more_button_section__3rSaQ",see_more:"Category_see_more__2uHNO",more:"Category_more__17Pju",fontawesome_icon:"Category_fontawesome_icon__1mFML",sub_category_section:"Category_sub_category_section__3BM-O",component_header:"Category_component_header__1_xjR",blank:"Category_blank__YWfcd",flex_grow:"Category_flex_grow__3mvpC"}},1772:function(e){e.exports={category_component_header:"CategoryComponentHeader_category_component_header__2kvVe",more_button:"CategoryComponentHeader_more_button__3XKGF",swiper_arrow:"CategoryComponentHeader_swiper_arrow__3wbhv",arrow:"CategoryComponentHeader_arrow__2aOxk",more:"CategoryComponentHeader_more__1Yd6i",border_line:"CategoryComponentHeader_border_line__3TLw9",swiper_more:"CategoryComponentHeader_swiper_more__2aCCp"}},8717:function(e){e.exports={category_swiper_block:"CategorySwiperBlock_category_swiper_block__3Qx1x",video_block_link:"CategorySwiperBlock_video_block_link__3eGiw",video_description:"CategorySwiperBlock_video_description__1DjJo",video_title:"CategorySwiperBlock_video_title__ucCow",image:"CategorySwiperBlock_image__1NRRs",display_date:"CategorySwiperBlock_display_date__2F5ug"}}},function(e){e.O(0,[441,478,410,774,888,179],(function(){return t=4712,e(e.s=t);var t}));var t=e.O();_N_E=t}]);