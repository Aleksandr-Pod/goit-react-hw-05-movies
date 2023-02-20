"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[413],{669:function(n,e,t){t.d(e,{Bt:function(){return a},Mc:function(){return s},gu:function(){return r},on:function(){return i},y:function(){return u}});var c="https://api.themoviedb.org",o="e2b1fd67e69bae9f083d3c611e2b6f41",r=function(){return console.log("fetching today's movies.."),fetch("".concat(c,"/3/trending/movie/day?api_key=").concat(o,"&page=").concat(1)).then((function(n){return n.json()})).catch((function(n){return n.message}))},i=function(n){return console.log("fetching by searchName.."),fetch("".concat(c,"/3/search/movie?api_key=").concat(o,"&query=").concat(n,"&page=").concat(1)).then((function(n){return n.json()})).catch((function(n){return n.message}))},s=function(n){return console.log("fetching by Id.."),fetch("".concat(c,"/3/movie/").concat(n,"?api_key=").concat(o)).then((function(n){return n.json()})).catch((function(n){return n.message}))},a=function(n){return console.log("fetching Review.."),fetch("".concat(c,"/3/movie/").concat(n,"/reviews?api_key=").concat(o)).then((function(n){return n.json()})).catch((function(n){return n.message}))},u=function(n){return console.log("fetching Cast.."),fetch("".concat(c,"/3/movie/").concat(n,"/credits?api_key=").concat(o)).then((function(n){return n.json()})).catch((function(n){return n.message}))}},924:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var c,o,r,i=t(885),s=t(791),a=t(504),u=t(871),h=t(669),f=t(168),d=t(31),l=d.ZP.div(c||(c=(0,f.Z)(["\ndisplay: flex;\n"]))),g=d.ZP.div(o||(o=(0,f.Z)(["\npadding: 10px;\n"]))),p=d.ZP.button(r||(r=(0,f.Z)(["\nwidth: 240px;\nmargin: 0 0 10px;\npadding: 10px;\nbackground-color: orange;\nfont-size: 20px;\ncursor: pointer;\n"]))),v=t(184);function j(){var n=(0,u.UO)().movieId,e=(0,s.useState)(),t=(0,i.Z)(e,2),c=t[0],o=t[1],r=(0,u.s0)(),f=(0,u.TH)();(0,s.useEffect)((function(){h.Mc(n).then(o)}),[n,o]);return(0,v.jsx)(v.Fragment,{children:c&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(p,{type:"button",onClick:function(){var n,e;r(null!==(n=null===f||void 0===f||null===(e=f.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/")},children:"Go back"}),(0,v.jsxs)(l,{children:[(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(c.poster_path),alt:c.title,width:"240"}),(0,v.jsxs)(g,{children:[(0,v.jsxs)("h3",{children:[c.title," ( ",c.release_date.slice(0,4)," )"]}),(0,v.jsxs)("p",{children:["User Score: ",c.vote_average]}),(0,v.jsx)("h4",{children:"Overview"}),(0,v.jsx)("p",{children:c.overview}),(0,v.jsx)("h4",{children:"Genres"}),(0,v.jsx)("p",{children:c.genres&&c.genres.map((function(n){return n.name})).join(", ")})]})]}),(0,v.jsx)("hr",{}),(0,v.jsx)("h3",{children:"AdditionalInfo"}),(0,v.jsx)(a.OL,{to:"cast",state:f.state,children:"Cast"}),(0,v.jsx)("br",{}),(0,v.jsx)(a.OL,{to:"reviews",state:f.state,children:"Reviews"}),(0,v.jsx)("hr",{}),(0,v.jsx)(u.j3,{})]})})}}}]);
//# sourceMappingURL=413.96e031a3.chunk.js.map