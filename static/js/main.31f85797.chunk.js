(this.webpackJsonpkddb=this.webpackJsonpkddb||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),i=a.n(c),s=a(7),r=a.n(s),o=(a(13),a(3)),l=a.n(o),d=a(5),b=a(2),u=(a(15),"without_genres=16|99|10762|10763|10764|10767"),m="".concat("https://api.themoviedb.org/3/","discover/tv?with_original_language=ko"),j="api_key=299cd45add63bfb2f4b534e2c123c7bb";var p=function(e){var t=e.name,a=e.overview,c=e.poster_path,i=e.genre;return Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("img",{src:JSON.stringify(c).includes("null")?"https://images.unsplash.com/photo-1540483761890-a1f7be05d99f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=645&q=80":"https://image.tmdb.org/t/p/w1280"+c,alt:t}),Object(n.jsxs)("div",{className:"card-info",children:[Object(n.jsx)("h3",{children:t}),Object(n.jsx)("small",{children:i||Object(n.jsx)("span",{children:"\xa0"})})]}),Object(n.jsxs)("div",{className:"overview",children:[Object(n.jsx)("h3",{children:"Overview"}),a]})]},t)},h=[{id:10759,label:"actionAdventure",name:"Action & Adventure"},{id:16,label:"anime",name:"Animation"},{id:35,label:"comedy",name:"Comedy"},{id:80,label:"crime",name:"Crime"},{id:99,label:"docu",name:"Documentary"},{id:18,label:"drama",name:"Drama"},{id:10751,label:"family",name:"Family"},{id:10762,label:"kids",name:"Kids"},{id:9648,label:"mystery",name:"Mystery"},{id:10763,label:"news",name:"News"},{id:10764,label:"reality",name:"Reality"},{id:10765,label:"fantasy",name:"Sci-Fi & Fantasy"},{id:10766,label:"soap",name:"Soap"},{id:10767,label:"talk",name:"Talk"},{id:10768,label:"politics",name:"War & Politics"},{id:37,label:"western",name:"Western"}];a(16);var f=function(e){var t=e.drama,a=e.title;return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h2",{children:a}),Object(n.jsx)("div",{className:"card-group",children:null==t?"loading k-drama...":0===t.length?"search again...":t.map((function(e){var t=e.name,a=e.poster_path,c=e.vote_average,i=e.overview,s=e.genre_ids,r=h.map((function(e){return!0===s.includes(e.id)?e.name:""})).filter((function(e){return""!==e}));return Object(n.jsx)("div",{className:"card-group--content",children:Object(n.jsx)(p,{name:t,poster_path:a,vote_average:c,overview:i,genre:r.toString().replace(/,/g," \u2022 ").replace(/Action & Adventure/g,"Action")},t)})}))})]})},g=a(6);a(17);var v=function(e){var t=e.page,a=e.totalPages,c=e.onClickPrev,i=e.onClickNext;return Object(n.jsxs)("div",{className:"pagination",children:[Object(n.jsxs)("span",{className:"pagination-number",children:[t," of ",a," pages"]}),Object(n.jsx)("span",{className:"divider"}),Object(n.jsx)("button",{className:"pagination-previous",onClick:c,children:Object(n.jsx)(g.a,{})}),Object(n.jsx)("span",{className:"divider"}),Object(n.jsx)("button",{className:"pagination-next",onClick:i,children:Object(n.jsx)(g.b,{})})]})},x=new Date,O=x.getFullYear(),w=x.getMonth()+1,y=x.getDate(),_=w-2,N=_<10?"".concat(O,"-0").concat(_,"-").concat(y):"".concat(O,"-").concat(_,"-").concat(y),k="".concat(O,"-").concat(w,"-").concat(y),S=[{name:"best",title:"Best of 2020"},{name:"discover",title:"Discover"},{name:"latest",title:"New Releases"},{name:"upcoming",title:"Upcoming"},{name:"watching",title:"Watching"},{name:"watched",title:"Watched"}];a(18);var C=function(){var e=i.a.useState(1),t=Object(b.a)(e,2),a=t[0],c=t[1],s=i.a.useState(1),r=Object(b.a)(s,2),o=r[0],p=r[1],h="".concat(m,"&").concat(j,"&page=").concat(a,"&").concat(u),g="https://api.themoviedb.org/3/search/tv?".concat(j,'&query="'),x="".concat(m,"&").concat(u,"&first_air_date.gte=").concat(N,"&first_air_date.lte=").concat(k,"&sort_by=first_air_date.desc&").concat(j,"&page=").concat(a),O="".concat(m,"&").concat(u,"&first_air_date.gte=").concat(k,"&sort_by=first_air_date.asc&").concat(j),w="https://api.themoviedb.org/4/list/7069256?page=".concat(a,"&api_key=299cd45add63bfb2f4b534e2c123c7bb"),y=i.a.useState("best"),_=Object(b.a)(y,2),C=_[0],D=_[1],A=i.a.useState(""),F=Object(b.a)(A,2),B=F[0],P=F[1],W=i.a.useState(),M=Object(b.a)(W,2),R=M[0],H=M[1],J=i.a.useState(),K=Object(b.a)(J,2),T=K[0],q=K[1],E=i.a.useState(),G=Object(b.a)(E,2),I=G[0],L=G[1],Y=i.a.useState(),U=Object(b.a)(Y,2),V=U[0],X=U[1],z=i.a.useState(),Q=Object(b.a)(z,2),Z=Q[0],$=Q[1],ee=i.a.useState(),te=Object(b.a)(ee,2),ae=te[0],ne=te[1],ce=i.a.useState(),ie=Object(b.a)(ce,2),se=ie[0],re=ie[1];function oe(){return(oe=Object(d.a)(l.a.mark((function e(t){var a,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,c=n.results.filter((function(e){return"ko"===e.original_language})),H(c);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function le(e){return de.apply(this,arguments)}function de(){return(de=Object(d.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,p(n.total_pages),"latest"===C?L(n.results):"upcoming"===C?X(n.results):"watched"===C?$(n.results):"watching"===C?ne(n.results):"discover"===C?q(n.results):re(n.results);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return i.a.useEffect((function(){B&&function(e){oe.apply(this,arguments)}(g+B),le("latest"===C?x:"upcoming"===C?O:"watched"===C?w:"watching"===C?"https://api.themoviedb.org/4/list/7069257?page=1&api_key=299cd45add63bfb2f4b534e2c123c7bb":"discover"===C?h:"https://api.themoviedb.org/4/list/7069430?page=1&api_key=299cd45add63bfb2f4b534e2c123c7bb")}),[B,a,C]),Object(n.jsxs)("div",{className:"app",children:[Object(n.jsxs)("header",{className:"app-header",children:[Object(n.jsx)("h1",{onClick:function(){return window.location.reload()},children:"KDDB"}),Object(n.jsx)("nav",{className:"app-header--nav",children:S.map((function(e){return Object(n.jsx)("button",{onClick:function(){D(e.name),c(1)},className:e.name===C?"active":"",children:e.title},e.name)}))}),Object(n.jsx)("form",{id:"form",children:Object(n.jsx)("input",{type:"text",id:"search",className:"search",placeholder:"Search K-Drama...",onChange:function(e){P(e.target.value)}})})]}),Object(n.jsx)("main",{id:"main",className:"app-main",children:B?Object(n.jsx)(f,{drama:R,title:"Search Result"}):"upcoming"===C?Object(n.jsx)(f,{drama:V,title:"Coming Soon"}):"watched"===C?Object(n.jsx)(f,{drama:Z,title:"Watched"}):"watching"===C?Object(n.jsx)(f,{drama:ae,title:"Currently Watching"}):"latest"===C?Object(n.jsx)(f,{drama:I,title:"New Releases"}):"discover"===C?Object(n.jsx)(f,{drama:T,title:"Discover"}):Object(n.jsx)(f,{drama:se,title:"Best of 2020"})}),"watched"===C||"latest"===C||"discover"===C?Object(n.jsx)("section",{className:"section-pagination",children:Object(n.jsx)(v,{page:a,totalPages:o,onClickPrev:function(){return c(1===a?1:a-1)},onClickNext:function(){return c(a===o?a:a+1)}})}):""]})},D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,20)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(C,{})}),document.getElementById("root")),D()}],[[19,1,2]]]);
//# sourceMappingURL=main.31f85797.chunk.js.map