(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4afce293"],{"0458":function(a,t,e){"use strict";e.r(t);var r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-container",[e("v-row",{attrs:{justify:"center"}},[e("v-col",{attrs:{cols:"12",sm:"4"}},[e("v-card",[e("v-card-title",{staticClass:"primary white--text"},[e("v-icon",{staticClass:"mr-2",attrs:{large:"",dark:""}},[a._v("mdi-devices")]),a._v(" 环境 ")],1),e("v-card-text",{staticClass:"pa-0"},[e("v-data-table",{attrs:{"hide-default-header":"","hide-default-footer":"",headers:a.headers,items:a.devices}})],1)],1)],1),e("v-col",{attrs:{cols:"12",sm:"4"}},[e("v-card",[e("v-card-title",{staticClass:"green white--text"},[e("v-icon",{staticClass:"mr-2",attrs:{large:"",dark:""}},[a._v("mdi-vuejs")]),a._v(" 前端 ")],1),e("v-card-text",{staticClass:"pa-0"},[e("v-data-table",{attrs:{"hide-default-header":"","hide-default-footer":"",headers:a.headers,items:a.front}})],1)],1)],1),e("v-col",{attrs:{cols:"12",sm:"4"}},[e("v-card",[e("v-card-title",{staticClass:"red white--text"},[e("v-icon",{staticClass:"mr-2",attrs:{large:"",dark:""}},[a._v("mdi-language-java")]),a._v(" 后端 ")],1),e("v-card-text",{staticClass:"pa-0"},[e("v-data-table",{attrs:{"hide-default-header":"","hide-default-footer":"",headers:a.headers,items:a.back}})],1)],1)],1)],1)],1)},s=[],n={name:"About",data:function(){return{headers:[{text:"名称",sortable:!1,value:"name"},{text:"版本",sortable:!1,value:"version"}],devices:[{name:"系统",version:"Windows 10 20H2"},{name:"JDK",version:"1.8.0"},{name:"Node.js",version:"14.16.1"},{name:"MySQL",version:"8.0.16"},{name:"浏览器",version:"Google Chrome 90"}],front:[{name:"vue",version:"2.6.11"},{name:"vue-router",version:"3.2.0"},{name:"vuex",version:"3.4.0"},{name:"vuex-pathify",version:"1.4.5"},{name:"axios",version:"0.21.1"},{name:"vuetify",version:"2.4.11"},{name:"vditor",version:"3.8.4"},{name:"nprogress",version:"0.2.0"}],back:[{name:"Spring Boot",version:"2.4.2"},{name:"Spring Data JPA",version:"2.4.3"},{name:"Jackson",version:"2.11.4"},{name:"Sa-Token",version:"1.17.0"},{name:"Tomcat",version:"9.0.41"},{name:"Hibernate",version:"5.4.27"}]}}},i=n,o=e("2877"),d=e("6544"),c=e.n(d),v=e("b0af"),l=e("99d9"),u=e("62ad"),f=e("a523"),m=e("8fea"),p=e("132d"),h=e("0fd9b"),b=Object(o["a"])(i,r,s,!1,null,null,null);t["default"]=b.exports;c()(b,{VCard:v["a"],VCardText:l["c"],VCardTitle:l["d"],VCol:u["a"],VContainer:f["a"],VDataTable:m["a"],VIcon:p["a"],VRow:h["a"]})},a523:function(a,t,e){"use strict";e("4de4"),e("b64b"),e("2ca0"),e("99af"),e("20f6"),e("4b85");var r=e("e8f2"),s=e("d9f7");t["a"]=Object(r["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(a,t){var e,r=t.props,n=t.data,i=t.children,o=n.attrs;return o&&(n.attrs={},e=Object.keys(o).filter((function(a){if("slot"===a)return!1;var t=o[a];return a.startsWith("data-")?(n.attrs[a]=t,!1):t||"string"===typeof t}))),r.id&&(n.domProps=n.domProps||{},n.domProps.id=r.id),a(r.tag,Object(s["a"])(n,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(e||[])}),i)}})},e8f2:function(a,t,e){"use strict";e.d(t,"a",(function(){return s}));e("498a"),e("99af"),e("4de4"),e("b64b"),e("2ca0"),e("a15b");var r=e("2b0e");function s(a){return r["a"].extend({name:"v-".concat(a),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var r=e.props,s=e.data,n=e.children;s.staticClass="".concat(a," ").concat(s.staticClass||"").trim();var i=s.attrs;if(i){s.attrs={};var o=Object.keys(i).filter((function(a){if("slot"===a)return!1;var t=i[a];return a.startsWith("data-")?(s.attrs[a]=t,!1):t||"string"===typeof t}));o.length&&(s.staticClass+=" ".concat(o.join(" ")))}return r.id&&(s.domProps=s.domProps||{},s.domProps.id=r.id),t(r.tag,s,n)}})}}}]);
//# sourceMappingURL=chunk-4afce293.23b094be.js.map