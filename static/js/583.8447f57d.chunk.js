"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[583],{669:function(n,t,e){e.d(t,{Bt:function(){return u},Mc:function(){return a},gu:function(){return r},on:function(){return i},y:function(){return s}});var c="https://api.themoviedb.org",o="e2b1fd67e69bae9f083d3c611e2b6f41",r=function(){return console.log("fetching today's movies.."),fetch("".concat(c,"/3/trending/movie/day?api_key=").concat(o,"&page=").concat(1)).then((function(n){return n.json()})).catch((function(n){return n.message}))},i=function(n){return console.log("fetching by searchName.."),fetch("".concat(c,"/3/search/movie?api_key=").concat(o,"&query=").concat(n,"&page=").concat(1)).then((function(n){return n.json()})).catch((function(n){return n.message}))},a=function(n){return console.log("fetching by Id.."),fetch("".concat(c,"/3/movie/").concat(n,"?api_key=").concat(o)).then((function(n){return n.json()})).catch((function(n){return n.message}))},u=function(n){return console.log("fetching Review.."),fetch("".concat(c,"/3/movie/").concat(n,"/reviews?api_key=").concat(o)).then((function(n){return n.json()})).catch((function(n){return n.message}))},s=function(n){return console.log("fetching Cast.."),fetch("".concat(c,"/3/movie/").concat(n,"/credits?api_key=").concat(o)).then((function(n){return n.json()})).catch((function(n){return n.message}))}},583:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var c,o,r,i,a=e(885),u=e(791),s=e(669),f=e(871),h=e(168),l=e(31),g=l.ZP.ul(c||(c=(0,h.Z)(["\ndisplay:flex;\njustify-content: center;\nflex-direction: raw;\nflex-wrap: wrap;\n\n"]))),d=l.ZP.li(o||(o=(0,h.Z)(["\nwidth: 200px;\nmargin: 5px;\npadding: 10px;\nbackground-color: yellow;\nborder 1px solid gray;\nborder-radius: 5px;\nlist-style: none;\n"]))),p=l.ZP.div(r||(r=(0,h.Z)(["\nwidth: 200px;\nheight: 300px;\nbackground-color: gray;\n"]))),m=l.ZP.p(i||(i=(0,h.Z)(["\nmargin: 0;\npadding: 20px;\ntext-align: center;\n"]))),x=e(184);function y(){var n=(0,f.UO)().movieId,t=(0,u.useState)(null),e=(0,a.Z)(t,2),c=e[0],o=e[1];return(0,u.useEffect)((function(){c||s.y(n).then((function(n){return o(n.cast)}))}),[n,c]),(0,x.jsx)(g,{children:c&&c.map((function(n){return(0,x.jsxs)(d,{children:[(0,x.jsx)(p,{children:n.profile_path?(0,x.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(n.profile_path),loading:"lazy",alt:n.name}):(0,x.jsx)(m,{children:"no image"})}),(0,x.jsx)("p",{children:n.name}),(0,x.jsx)("p",{children:n.character})]},n.id)}))})}}}]);
//# sourceMappingURL=583.8447f57d.chunk.js.map