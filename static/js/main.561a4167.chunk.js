(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){},226:function(e,t,a){},228:function(e,t,a){"use strict";a.r(t);a(95);var n=a(0),r=a.n(n),s=a(31),i=a(52),o=a.n(i),l=a(83),c=a(16),m=a(17),u=a(19),d=a(18),p=a(20),b=a(15),h=a(232),g=a(233),f=a(27),y=(a(103),{dbBaseUrl:"https://api.jcdecaux.com/vls/v1/",dbContract:"Dublin",dbApiKey:"bbbdbe0c576a57bd979453af7228f03a88759b13",google_maps_api_key:"AIzaSyAveGIhntsi_rM377-o6ILDazuE3NRgrBc"}),v=a(5),E=a.n(v),x=a(10),k=a.n(x),j=a(41),O=a.n(j),w=a(42),N=a.n(w),S=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).createTable=function(e,t){for(var a=[],n=0;n<e;n++)a.push(r.a.createElement(E.a,{item:!0,xs:6,align:1==Math.abs(n%2)?"left":"right",className:"stand ".concat(t>n?"bike":"nobike")},r.a.createElement("span",null,n+1)));return a},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.bikeStands,a=e.availableBikes;return r.a.createElement(E.a,{container:!0,item:!0,xs:12,className:"bike-stand-container"},this.createTable(t,a))}}]),t}(n.Component);var T=Object(f.withStyles)(function(e){return{root:{flexGrow:1,background:"#212121",color:"#fff"},paper:{padding:2*e.spacing.unit,textAlign:"center",color:e.palette.text.secondary},grid:{borderBottom:"solid 1px #424242",color:"#fff"},text:{color:"#fff"},gridContainer:{padding:"10px"},table:{width:"100%",fontSize:"12px"},bike:{color:"#ff3d00"},grey:{color:"#9e9e9e",fontSize:"18px"}}})(function(e){var t=e.classes,a=e.stations,n=e.currentStation;return r.a.createElement("div",{className:t.root},r.a.createElement(E.a,{className:t.gridContainer,container:!0},r.a.createElement(E.a,{className:t.grid,item:!0,xs:12},r.a.createElement(k.a,{align:"center",className:t.text,variant:"h4"},n.address),r.a.createElement(k.a,{align:"center",className:t.text,variant:"subheading"},n.distance," km")),r.a.createElement(E.a,{className:t.grid,item:!0,xs:8},r.a.createElement(E.a,{className:t.grid,container:!0,item:!0,xs:12},r.a.createElement(E.a,{item:!0,xs:6},r.a.createElement(k.a,{className:t.text,align:"center"},"Stands"),r.a.createElement(k.a,{className:t.text,variant:"h6",align:"center"},r.a.createElement(O.a,{className:t.bike}),n.available_bike_stands)),r.a.createElement(E.a,{item:!0,xs:6},r.a.createElement(k.a,{className:t.text,align:"center"},"Bikes"),r.a.createElement(k.a,{className:t.text,variant:"h6",align:"center"},r.a.createElement(N.a,{color:"primary"}),n.available_bikes))),r.a.createElement(E.a,{className:t.grid,container:!0,item:!0,xs:12},r.a.createElement(k.a,{className:t.text,variant:"caption"},"Other stations"),r.a.createElement("table",{className:t.table},r.a.createElement("tr",null,r.a.createElement("th",{align:"left"},"Station"),r.a.createElement("th",{align:"left"},"Stands"),r.a.createElement("th",{align:"left"},"Bikes"),r.a.createElement("th",{align:"left"},"km")),a.map(function(e,t){return t<10?r.a.createElement("tr",null,r.a.createElement("td",null,e.address),r.a.createElement("td",null,e.available_bike_stands),r.a.createElement("td",null,e.available_bikes),r.a.createElement("td",null,e.distance," km")):""})))),r.a.createElement(E.a,{className:t.grid,item:!0,xs:4},r.a.createElement(k.a,{align:"center",className:t.text},n.status),r.a.createElement(E.a,{container:!0,item:!0,xs:12},r.a.createElement(S,{bikeStands:n.bike_stands,availableBikes:n.available_bikes}))),r.a.createElement(E.a,{className:t.grid,item:!0,xs:12},r.a.createElement(k.a,{align:"center",variant:"caption"},"last updated -  14:30"))))}),C=a(85),M=a.n(C),_=a(86),z=a.n(_),B=function(){return r.a.createElement("div",{className:"currentLocation"},r.a.createElement(z.a,null))},A=a(34),I=a.n(A),D=a(1),K=a.n(D),P=function(e){var t=e.classes,a=e.station;return r.a.createElement("div",{className:t.root},r.a.createElement(I.a,{className:t.svg})," ",a.address," - ",a.distance," km")};P.protoTypes={classes:K.a.object.isRequired};var R=Object(f.withStyles)(function(){return{root:{position:"absolute",zIndex:2,background:"#fff",width:"80%",top:"10px",left:"10px",padding:"8px 14px",borderRadius:"2px",boxShadow:"rgba(0, 0, 0, 0.3) 0px 1px 4px -1px"},svg:{fontSize:"21px"}}})(P),G={styles:[{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#000000"},{lightness:40}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#212121"},{lightness:17}]}]},L=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this))).handleClick=a.handleClick.bind(Object(b.a)(Object(b.a)(a))),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleClick",value:function(){return this.props.viewStation(this.props.station)}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root,onClick:this.handleClick})}}]),t}(n.Component),W=Object(f.withStyles)(function(e){return{root:{display:"block",width:"20px",height:"20px",background:"#64ffda",borderRadius:"20px"}}})(L),q=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).googleMapsApiKey=y.google_maps_api_key,a.updateStation=a.updateStation.bind(Object(b.a)(Object(b.a)(a))),a.state={station:"station",stations:[]},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.setState({station:this.state.stations[0]})}},{key:"updateStation",value:function(e){this.setState({station:e})}},{key:"render",value:function(){var e=this,t=this.props,a=t.center,n=t.zoom,s=t.stations;return r.a.createElement("div",{style:{height:"94vh",width:"100%"}},r.a.createElement(R,{station:this.state.station?this.state.station:s[0]}),r.a.createElement(M.a,{bootstrapURLKeys:{key:this.googleMapsApiKey},center:a,options:G,defaultZoom:n},r.a.createElement(B,{lat:a.lat,lng:a.lng}),s.map(function(t,a){return r.a.createElement(W,{key:a,viewStation:e.updateStation,lat:t.position.lat,lng:t.position.lng,station:t})})))}}]),t}(n.Component),U=a(87),J=a.n(U),F=a(53),H=a.n(F);var Z=Object(f.withStyles)(function(e){return{root:{flexGrow:1,marginBottom:2*e.spacing.unit},paper:{padding:2*e.spacing.unit,margin:"auto",maxWidth:500,backgroundColor:"#424242",color:"#fff"},image:{width:128,height:128},img:{margin:"auto",display:"block",maxWidth:"100%",maxHeight:"100%"},text:{color:"#fff"}}})(function(e){var t=e.classes,a=e.stationDetails;return r.a.createElement("div",{className:t.root},r.a.createElement(J.a,{className:t.paper},r.a.createElement(E.a,{container:!0},r.a.createElement(E.a,{item:!0}),r.a.createElement(E.a,{item:!0,xs:12,sm:!0,container:!0},r.a.createElement(E.a,{item:!0,xs:!0,container:!0,direction:"column",spacing:16},r.a.createElement(E.a,{item:!0,xs:!0},r.a.createElement(k.a,{gutterBottom:!0,className:t.text,variant:"h6"},a.address),r.a.createElement(H.a,{className:t.margin,badgeContent:a.available_bike_stands,color:"primary"},r.a.createElement(O.a,null)),r.a.createElement(H.a,{className:t.margin,badgeContent:a.available_bikes,color:"secondary"},r.a.createElement(N.a,null)))),r.a.createElement(E.a,{item:!0},r.a.createElement(k.a,{className:t.text,variant:"h6"},a.distance," km"))))))}),$=function(e){return e.stations.map(function(e,t){return r.a.createElement(Z,{key:t,stationDetails:e})})},Q=function(e){var t=e.classes,a=e.stations;return r.a.createElement("div",{className:t.root},r.a.createElement($,{stations:a}))};Q.protoTypes={classes:K.a.object.isRequired};var V,X=Object(f.withStyles)(function(){return{root:{backgroundColor:"#212121",padding:"15px"}}})(Q),Y=a(11),ee=a(231),te=a(88),ae=a.n(te),ne=a(44),re=a.n(ne),se=a(90),ie=a.n(se),oe=a(89),le=a.n(oe),ce={root:(V={width:500},Object(Y.a)(V,"width","100%"),Object(Y.a)(V,"position","fixed"),Object(Y.a)(V,"bottom",0),Object(Y.a)(V,"zIndex",1),Object(Y.a)(V,"height","65px"),Object(Y.a)(V,"boxShadow","rgba(0, 0, 0, 0.3) 0px -1px 4px -1px"),V)},me=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={value:0},a.handleChange=function(e,t){a.setState({value:t})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e,t,a,n=this.props.classes,s=this.state.value;return r.a.createElement(ae.a,{value:s,onChange:this.handleChange,showLabels:!0,className:n.root},r.a.createElement(re.a,(e={component:ee.a,to:"/",label:"Near by",value:"Near by"},Object(Y.a)(e,"label","Near by"),Object(Y.a)(e,"icon",r.a.createElement(I.a,null)),e)),r.a.createElement(re.a,(t={component:ee.a,to:"/map",label:"map",value:"map"},Object(Y.a)(t,"label","Map"),Object(Y.a)(t,"icon",r.a.createElement(le.a,null)),t)),r.a.createElement(re.a,(a={component:ee.a,to:"/stations",label:"stations",value:"stations"},Object(Y.a)(a,"label","Stations"),Object(Y.a)(a,"icon",r.a.createElement(ie.a,null)),a)))}}]),t}(r.a.Component),ue=Object(f.withStyles)(ce)(me),de=a(91),pe=a.n(de);var be=Object(f.withStyles)(function(e){return{progress:{margin:2*e.spacing.unit}}})(function(e){var t=e.classes;return r.a.createElement("div",null,r.a.createElement(pe.a,{className:t.progress,color:"secondary"}))}),he=Object(f.createMuiTheme)({palette:{primary:{main:"#64ffda"},secondary:{main:"#263238"}}}),ge=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).getStations=e.getStations.bind(Object(b.a)(Object(b.a)(e))),e.state={center:{},zoom:16,stations:[]},e}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getGeolocation()}},{key:"getGeolocation",value:function(){var e=this;navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(t){e.getStations(t.coords.latitude,t.coords.longitude),e.setState({center:{lat:t.coords.latitude,lng:t.coords.longitude}})})}},{key:"getStations",value:function(){var e=Object(l.a)(o.a.mark(function e(t,a){var n,r,s,i,l,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=y.dbBaseUrl,r=y.dbContract,s=y.dbApiKey,e.next=3,fetch("".concat(n,"stations?contract=").concat(r,"&apiKey=").concat(s));case 3:return i=e.sent,e.next=6,i.json();case 6:l=e.sent,c=this.appendDistance(l,t,a),this.setState({stations:this.getClosest(c)});case 9:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"appendDistance",value:function(e,t,a){var n=this;return e.map(function(e){return e.distance=n.distance(t,a,e.position.lat,e.position.lng,"K").toFixed(2),e})}},{key:"getClosest",value:function(e){return e.sort(function(e,t){return e.distance>t.distance?1:t.distance>e.distance?-1:0})}},{key:"distance",value:function(e,t,a,n,r){if(e===a&&t===n)return 0;var s=Math.PI*e/180,i=Math.PI*a/180,o=t-n,l=Math.PI*o/180,c=Math.sin(s)*Math.sin(i)+Math.cos(s)*Math.cos(i)*Math.cos(l);return c>1&&(c=1),c=60*(c=180*(c=Math.acos(c))/Math.PI)*1.1515,"K"===r&&(c*=1.609344),"N"===r&&(c*=.8684),c}},{key:"render",value:function(){var e=this;return this.state.stations.length?r.a.createElement(f.MuiThemeProvider,{theme:he},r.a.createElement(h.a,{basename:"/dublin-bike-locator"},r.a.createElement("div",{id:"wrapper"},r.a.createElement("div",{className:"main"},r.a.createElement(g.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(T,Object.assign({},t,{stations:e.state.stations,currentStation:e.state.stations[0]}))}}),r.a.createElement(g.a,{path:"/map",render:function(t){return r.a.createElement(q,Object.assign({},t,{stations:e.state.stations,center:e.state.center,zoom:e.state.zoom}))}}),r.a.createElement(g.a,{path:"/stations",render:function(t){return r.a.createElement(X,Object.assign({},t,{stations:e.state.stations}))}})),r.a.createElement(ue,null)))):r.a.createElement(f.MuiThemeProvider,{theme:he},r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement(be,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(226);var fe=document.querySelector("#root");Object(s.render)(r.a.createElement(ge,null),fe),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},94:function(e,t,a){e.exports=a(228)}},[[94,2,1]]]);
//# sourceMappingURL=main.561a4167.chunk.js.map