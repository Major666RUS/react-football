(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,n){e.exports=n(21)},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(3),o=n.n(l),c=(n(18),n(19),n(4)),i=n(5),s=n(11),u=n(7),m=n(12),h=n(23),d=(n(20),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={items:[]},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://soccer.sportmonks.com/api/v2.0/teams/season/16222?api_token=c105cI8atxvUAMopLsiVqrcUHqZhZmh6RvSWXJBOsLiFtVXPWhJW34IVk8la").then((function(e){return e.json()})).then((function(t){e.setState({items:t.data})}),(function(t){e.setState({error:t})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h.a,{striped:!0,bordered:!0,hover:!0,variant:"dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b"),r.a.createElement("th",null,"\u0421\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u0438\u0435"),r.a.createElement("th",null,"\u0413\u043e\u0434 \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u044f"),r.a.createElement("th",null,"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"))),r.a.createElement("tbody",null,this.state.items.map((function(e,t){return r.a.createElement("tr",null,r.a.createElement("td",null,t+1),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.short_code),r.a.createElement("td",null,e.founded),r.a.createElement("td",null,r.a.createElement("img",{src:e.logo_path,alt:e.name})))})))))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.8a58f71b.chunk.js.map