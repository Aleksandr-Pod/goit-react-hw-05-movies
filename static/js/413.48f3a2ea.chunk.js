"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[413],{669:function(n,e,t){t.d(e,{Bt:function(){return a},Mc:function(){return s},gu:function(){return i},on:function(){return r},y:function(){return u}});var c="https://api.themoviedb.org",o="e2b1fd67e69bae9f083d3c611e2b6f41",i=function(){return console.log("fetching today's movies.."),fetch("".concat(c,"/3/trending/movie/day?api_key=").concat(o,"&page=").concat(1)).then((function(n){return n.json()})).catch((function(n){return n.message}))},r=function(n){return console.log("fetching by searchName.."),fetch("".concat(c,"/3/search/movie?api_key=").concat(o,"&query=").concat(n,"&page=").concat(1)).then((function(n){return n.json()})).catch((function(n){return n.message}))},s=function(n){return console.log("fetching by Id.."),fetch("".concat(c,"/3/movie/").concat(n,"?api_key=").concat(o)).then((function(n){return n.json()})).catch((function(n){return n.message}))},a=function(n){return console.log("fetching Review.."),fetch("".concat(c,"/3/movie/").concat(n,"/reviews?api_key=").concat(o)).then((function(n){return n.json()})).catch((function(n){return n.message}))},u=function(n){return console.log("fetching Cast.."),fetch("".concat(c,"/3/movie/").concat(n,"/credits?api_key=").concat(o)).then((function(n){return n.json()})).catch((function(n){return n.message}))}},413:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var c,o,i=t(885),r=t(791),s=t(501),a=t(871),u=t(669),h=t(168),f=t(31),l=f.ZP.div(c||(c=(0,h.Z)(["\ndisplay: flex;\n"]))),d=f.ZP.div(o||(o=(0,h.Z)(["\npadding: 10px;\n"]))),g=t(184);function v(){var n=(0,a.UO)().movieId,e=(0,r.useState)(),t=(0,i.Z)(e,2),c=t[0],o=t[1],h=(0,a.s0)(),f=(0,a.TH)();console.log(f),(0,r.useEffect)((function(){u.Mc(n).then(o)}),[n,o]);return(0,g.jsx)(g.Fragment,{children:c&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("button",{type:"button",onClick:function(){var n,e;h(null!==(n=null===f||void 0===f||null===(e=f.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/")},children:"Go back"}),(0,g.jsxs)(l,{children:[(0,g.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(c.poster_path),alt:c.title,width:"240"}),(0,g.jsxs)(d,{children:[(0,g.jsxs)("h3",{children:[c.title," ( ",c.release_date.slice(0,4)," )"]}),(0,g.jsx)("h4",{children:"Overview"}),(0,g.jsx)("p",{children:c.overview}),(0,g.jsx)("h4",{children:"Genres"}),(0,g.jsx)("p",{children:c.genres&&c.genres.map((function(n){return n.name})).join(", ")})]})]}),(0,g.jsx)("hr",{}),(0,g.jsx)("h3",{children:"AdditionalInfo"}),(0,g.jsx)(s.OL,{to:"cast",children:"Cast"}),(0,g.jsx)("br",{}),(0,g.jsx)(s.OL,{to:"reviews",children:"Reviews"}),(0,g.jsx)("hr",{}),(0,g.jsx)(a.j3,{})]})})}}}]);
//# sourceMappingURL=413.48f3a2ea.chunk.js.map