(this["webpackJsonpreact-football"]=this["webpackJsonpreact-football"]||[]).push([[0],{30:function(a){a.exports=JSON.parse('{"BD":"Bangladesh","BE":"Belgium","BF":"Burkina Faso","BG":"Bulgaria","BA":"Bosnia and Herzegovina","BB":"Barbados","WF":"Wallis and Futuna","BL":"Saint Barthelemy","BM":"Bermuda","BN":"Brunei","BO":"Bolivia","BH":"Bahrain","BI":"Burundi","BJ":"Benin","BT":"Bhutan","JM":"Jamaica","BV":"Bouvet Island","BW":"Botswana","WS":"Samoa","BQ":"Bonaire, Saint Eustatius and Saba ","BR":"Brazil","BS":"Bahamas","JE":"Jersey","BY":"Belarus","BZ":"Belize","RU":"Russia","RW":"Rwanda","RS":"Serbia","TL":"East Timor","RE":"Reunion","TM":"Turkmenistan","TJ":"Tajikistan","RO":"Romania","TK":"Tokelau","GW":"Guinea-Bissau","GU":"Guam","GT":"Guatemala","GS":"South Georgia and the South Sandwich Islands","GR":"Greece","GQ":"Equatorial Guinea","GP":"Guadeloupe","JP":"Japan","GY":"Guyana","GG":"Guernsey","GF":"French Guiana","GE":"Georgia","GD":"Grenada","GB":"United Kingdom","GA":"Gabon","SV":"El Salvador","GN":"Guinea","GM":"Gambia","GL":"Greenland","GI":"Gibraltar","GH":"Ghana","OM":"Oman","TN":"Tunisia","JO":"Jordan","HR":"Croatia","HT":"Haiti","HU":"Hungary","HK":"Hong Kong","HN":"Honduras","HM":"Heard Island and McDonald Islands","VE":"Venezuela","PR":"Puerto Rico","PS":"Palestinian Territory","PW":"Palau","PT":"Portugal","SJ":"Svalbard and Jan Mayen","PY":"Paraguay","IQ":"Iraq","PA":"Panama","PF":"French Polynesia","PG":"Papua New Guinea","PE":"Peru","PK":"Pakistan","PH":"Philippines","PN":"Pitcairn","PL":"Poland","PM":"Saint Pierre and Miquelon","ZM":"Zambia","EH":"Western Sahara","EE":"Estonia","EG":"Egypt","ZA":"South Africa","EC":"Ecuador","IT":"Italy","VN":"Vietnam","SB":"Solomon Islands","ET":"Ethiopia","SO":"Somalia","ZW":"Zimbabwe","SA":"Saudi Arabia","ES":"Spain","ER":"Eritrea","ME":"Montenegro","MD":"Moldova","MG":"Madagascar","MF":"Saint Martin","MA":"Morocco","MC":"Monaco","UZ":"Uzbekistan","MM":"Myanmar","ML":"Mali","MO":"Macao","MN":"Mongolia","MH":"Marshall Islands","MK":"Macedonia","MU":"Mauritius","MT":"Malta","MW":"Malawi","MV":"Maldives","MQ":"Martinique","MP":"Northern Mariana Islands","MS":"Montserrat","MR":"Mauritania","IM":"Isle of Man","UG":"Uganda","TZ":"Tanzania","MY":"Malaysia","MX":"Mexico","IL":"Israel","FR":"France","IO":"British Indian Ocean Territory","SH":"Saint Helena","FI":"Finland","FJ":"Fiji","FK":"Falkland Islands","FM":"Micronesia","FO":"Faroe Islands","NI":"Nicaragua","NL":"Netherlands","NO":"Norway","NA":"Namibia","VU":"Vanuatu","NC":"New Caledonia","NE":"Niger","NF":"Norfolk Island","NG":"Nigeria","NZ":"New Zealand","NP":"Nepal","NR":"Nauru","NU":"Niue","CK":"Cook Islands","XK":"Kosovo","CI":"Ivory Coast","CH":"Switzerland","CO":"Colombia","CN":"China","CM":"Cameroon","CL":"Chile","CC":"Cocos Islands","CA":"Canada","CG":"Republic of the Congo","CF":"Central African Republic","CD":"Democratic Republic of the Congo","CZ":"Czech Republic","CY":"Cyprus","CX":"Christmas Island","CR":"Costa Rica","CW":"Curacao","CV":"Cape Verde","CU":"Cuba","SZ":"Swaziland","SY":"Syria","SX":"Sint Maarten","KG":"Kyrgyzstan","KE":"Kenya","SS":"South Sudan","SR":"Suriname","KI":"Kiribati","KH":"Cambodia","KN":"Saint Kitts and Nevis","KM":"Comoros","ST":"Sao Tome and Principe","SK":"Slovakia","KR":"South Korea","SI":"Slovenia","KP":"North Korea","KW":"Kuwait","SN":"Senegal","SM":"San Marino","SL":"Sierra Leone","SC":"Seychelles","KZ":"Kazakhstan","KY":"Cayman Islands","SG":"Singapore","SE":"Sweden","SD":"Sudan","DO":"Dominican Republic","DM":"Dominica","DJ":"Djibouti","DK":"Denmark","VG":"British Virgin Islands","DE":"Germany","YE":"Yemen","DZ":"Algeria","US":"United States","UY":"Uruguay","YT":"Mayotte","UM":"United States Minor Outlying Islands","LB":"Lebanon","LC":"Saint Lucia","LA":"Laos","TV":"Tuvalu","TW":"Taiwan","TT":"Trinidad and Tobago","TR":"Turkey","LK":"Sri Lanka","LI":"Liechtenstein","LV":"Latvia","TO":"Tonga","LT":"Lithuania","LU":"Luxembourg","LR":"Liberia","LS":"Lesotho","TH":"Thailand","TF":"French Southern Territories","TG":"Togo","TD":"Chad","TC":"Turks and Caicos Islands","LY":"Libya","VA":"Vatican","VC":"Saint Vincent and the Grenadines","AE":"United Arab Emirates","AD":"Andorra","AG":"Antigua and Barbuda","AF":"Afghanistan","AI":"Anguilla","VI":"U.S. Virgin Islands","IS":"Iceland","IR":"Iran","AM":"Armenia","AL":"Albania","AO":"Angola","AQ":"Antarctica","AS":"American Samoa","AR":"Argentina","AU":"Australia","AT":"Austria","AW":"Aruba","IN":"India","AX":"Aland Islands","AZ":"Azerbaijan","IE":"Ireland","ID":"Indonesia","UA":"Ukraine","QA":"Qatar","MZ":"Mozambique","GB_ENG":"England","GB_SCT":"Scotland","GB_WLS":"Wales"}')},32:function(a,e,t){a.exports=t(48)},38:function(a,e,t){},48:function(a,e,t){"use strict";t.r(e);var n=t(0),i=t.n(n),r=t(24),o=t.n(r),l=t(10),s=t(9);t(37),t(38);var c=function(){return i.a.createElement("h1",null,"Home")},u=t(11),d=t(12),m=t(15),h=t(14),E=t(13),S=t(16),M=t(49),b=t(51),f=t(50),C=function(a){function e(a){var t;return Object(u.a)(this,e),(t=Object(m.a)(this,Object(h.a)(e).call(this,a))).state={items:[],name:"",sortDirection:"asc"},t.handleChangeName=t.handleChangeName.bind(Object(E.a)(t)),t}return Object(S.a)(e,a),Object(d.a)(e,[{key:"handleChangeName",value:function(a){this.setState({name:a.target.value})}},{key:"changeName",value:function(a){this.setState({items:this.state.items.map((function(e){return e.id===a&&(e.isActive=!0),e}))})}},{key:"saveName",value:function(a){var e=this;this.setState({items:this.state.items.map((function(t){return t.id===a&&(""!==e.state.name&&(t.name=e.state.name),t.isActive=!1),t})),name:""})}},{key:"deleteTeam",value:function(a){var e=this.state.items.findIndex((function(e){return e.id===a}));this.setState({items:this.state.items.slice(0,e).concat(this.state.items.slice(e+1))})}},{key:"handleEnter",value:function(a,e){"Enter"===e.key&&this.saveName(a)}},{key:"sortBy",value:function(a){var e=this.state.items.slice(),t=this.state.sortDirection;e.sort((function(e,n){return e[a]<n[a]?"desc"===t?1:-1:e[a]>n[a]?"desc"===t?-1:1:0})),this.setState({items:e,sortDirection:"asc"===this.state.sortDirection?"desc":"asc"})}},{key:"componentDidMount",value:function(){var a=this;fetch("https://api.football-data.org/v2/competitions/2021/teams?season=2019",{headers:{"X-Auth-Token":"6324a72164424ef6ae805e7e77ba04a8"}}).then((function(a){return a.json()})).then((function(e){a.setState({items:e.teams.map((function(a){return a.isActive=!1,a}))})}),(function(e){a.setState({error:e})}))}},{key:"render",value:function(){var a=this;return i.a.createElement(M.a,{striped:!0,bordered:!0,hover:!0,variant:"dark"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"#"),i.a.createElement("th",{onClick:this.sortBy.bind(this,"name")},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b"),i.a.createElement("th",null,"\u0421\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u0438\u0435"),i.a.createElement("th",null,"\u0421\u0442\u0430\u0434\u0438\u043e\u043d"),i.a.createElement("th",{onClick:this.sortBy.bind(this,"founded")},"\u0413\u043e\u0434 \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u044f"),i.a.createElement("th",null,"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"),i.a.createElement("th",null,"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f"))),i.a.createElement("tbody",null,this.state.items.map((function(e,t){return i.a.createElement("tr",{key:e.id},i.a.createElement("td",null,t+1),i.a.createElement("td",{onClick:a.changeName.bind(a,e.id)},e.isActive?i.a.createElement(b.a.Group,{controlId:"Name"},i.a.createElement(b.a.Label,null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b"),i.a.createElement(b.a.Control,{autoFocus:!0,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",onBlur:a.saveName.bind(a,e.id),onKeyDown:function(t){return a.handleEnter(e.id,t)},className:"text-muted",value:a.state.name,onChange:a.handleChangeName})):e.name),i.a.createElement("td",null,e.tla),i.a.createElement("td",null,e.venue),i.a.createElement("td",null,e.founded),i.a.createElement("td",null,i.a.createElement("img",{src:e.crestUrl,alt:e.name,width:"75",height:"75"})),i.a.createElement("td",null,i.a.createElement(l.b,{to:"/teams/".concat(e.id)},i.a.createElement(f.a,{variant:"primary"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435")),i.a.createElement(f.a,{variant:"danger",onClick:a.deleteTeam.bind(a,e.id)},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")))}))))}}]),e}(i.a.Component),v=t(28),B=t.n(v),g=t(29),y=t.n(g),p=t(30),G=t(52),N=function(a){function e(a){var t;return Object(u.a)(this,e),(t=Object(m.a)(this,Object(h.a)(e).call(this,a))).state={squad:[],name:"",sortDirection:"asc"},t}return Object(S.a)(e,a),Object(d.a)(e,[{key:"sortBy",value:function(a){var e=this.state.squad.slice(),t=this.state.sortDirection;e.sort((function(e,n){return e[a]<n[a]?"desc"===t?1:-1:e[a]>n[a]?"desc"===t?-1:1:0})),this.setState({squad:e,sortDirection:"asc"===this.state.sortDirection?"desc":"asc"})}},{key:"componentDidMount",value:function(){var a=this,e=this.props.match.params;fetch("https://api.football-data.org/v2/teams/".concat(e.id),{headers:{"X-Auth-Token":"6324a72164424ef6ae805e7e77ba04a8"}}).then((function(a){return a.json()})).then((function(e){a.setState({squad:e.squad})}),(function(e){a.setState({error:e})}))}},{key:"render",value:function(){function a(a){var e=Object.entries(p).find((function(e){return e[1]===a}));return e?e[0]:"_unknown"}for(var e=[],t=1;t<=5;t++)e.push(i.a.createElement(G.a.Item,{key:t,active:1===t},t));return i.a.createElement("div",null,i.a.createElement(M.a,{striped:!0,bordered:!0,hover:!0,variant:"dark"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"#"),i.a.createElement("th",{onClick:this.sortBy.bind(this,"name")},"\u0418\u043c\u044f \u0438 \u0444\u0430\u043c\u0438\u043b\u0438\u044f"),i.a.createElement("th",null,"\u041f\u043e\u0437\u0438\u0446\u0438\u044f \u043d\u0430 \u043f\u043e\u043b\u0435"),i.a.createElement("th",null,"\u041d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c"),i.a.createElement("th",{onClick:this.sortBy.bind(this,"dateOfBirth")},"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f"))),i.a.createElement("tbody",null,this.state.squad.map((function(e,t){return i.a.createElement("tr",{key:e.id},i.a.createElement("td",null,t+1),i.a.createElement("td",null,e.name),i.a.createElement("td",null,e.position),i.a.createElement("td",null,i.a.createElement(y.a,{code:a(e.nationality),className:"flagImage",width:100,alt:e.nationality,fallback:i.a.createElement("span",{className:"flagImage"},"No image")}),e.nationality),i.a.createElement("td",null,i.a.createElement(B.a,{format:"DD.MM.YYYY",date:e.dateOfBirth})))})))),i.a.createElement("div",{className:"d-flex justify-content-center"},i.a.createElement(G.a,null,e)))}}]),e}(i.a.Component),I=function(){return i.a.createElement("h1",null,"Not found")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=i.a.createElement(l.a,null,i.a.createElement(l.b,{to:"/teams"},"TEAMS"),i.a.createElement(s.c,null,i.a.createElement(s.a,{exact:!0,path:"/",component:c}),i.a.createElement(s.a,{exact:!0,path:"/teams",component:C}),i.a.createElement(s.a,{path:"/teams/:id",component:N}),i.a.createElement(s.a,{component:I})));o.a.render(A,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.cbc1ca4a.chunk.js.map