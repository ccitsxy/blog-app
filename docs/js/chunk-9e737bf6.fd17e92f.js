(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9e737bf6"],{c24f:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return r}));var s=a("be3b");function i(){return Object(s["a"])({method:"get",url:"/user"})}function n(e){return Object(s["a"])({method:"post",url:"/user/login",data:e})}function r(e){return Object(s["a"])({method:"post",url:"/user/register",data:e})}},de51:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{flat:""}},[a("v-card-title",{staticClass:"pt-3 pl-3 pr-3 pt-sm-4 pl-sm-4 pr-sm-2"},[a("v-text-field",{attrs:{"hide-details":"","background-color":"white",outlined:"",clearable:"",dense:"",label:"搜索"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}},[a("v-btn",{staticClass:"ml-2",attrs:{slot:"append-outer",height:"40",color:"primary",dark:""},on:{click:e.createItem},slot:"append-outer"},[a("v-icon",[e._v("mdi-plus")])],1)],1)],1),a("v-data-table",{staticClass:"mx-sm-4",attrs:{items:e.users,headers:e.headers,search:e.search,options:{itemsPerPage:15}},scopedSlots:e._u([{key:"item.actions",fn:function(t){var s=t.item;return[a("v-btn",{staticClass:"mr-2",attrs:{icon:"",color:"success"}},[a("v-icon",{on:{click:function(t){return e.editItem(s)}}},[e._v(" mdi-pencil ")])],1),a("v-btn",{attrs:{icon:"",color:"error"}},[a("v-icon",{on:{click:function(t){return e.deleteItem(s)}}},[e._v(" mdi-delete ")])],1)]}}])}),a("v-dialog",{attrs:{"max-width":"300px",persistent:""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{dense:"",outlined:"","hide-details":"",label:"账号"},model:{value:e.editedItem.username,callback:function(t){e.$set(e.editedItem,"username",t)},expression:"editedItem.username"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("取消")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("保存")])],1)],1)],1)],1)},i=[],n=(a("a434"),a("c24f")),r={name:"User",data:function(){return{headers:[{text:"序号",value:"uid"},{text:"账号",sortable:!1,value:"username"},{text:"创建时间",value:"created"},{text:"修改时间",value:"updated"},{text:"操作",value:"actions",sortable:!1}],users:[],search:"",dialog:!1,editedIndex:-1,editedItem:{},defaultItem:{name:""}}},created:function(){var e=this;Object(n["a"])().then((function(t){e.users=t.data}))},computed:{formTitle:function(){return-1===this.editedIndex?"新建用户":"编辑用户"}},watch:{page:function(){this.getUsers()},dialog:function(e){e||this.close()}},methods:{createItem:function(){this.dialog=!0},editItem:function(e){this.editedIndex=this.users.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){var t=this.users.indexOf(e);confirm("Are you sure you want to delete this item?")&&this.users.splice(t,1)},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){this.editedIndex>-1?Object.assign(this.users[this.editedIndex],this.editedItem):this.users.push(this.editedItem),this.close()}}},c=r,d=a("2877"),o=a("6544"),l=a.n(o),u=a("8336"),m=a("b0af"),h=a("99d9"),f=a("62ad"),v=a("a523"),p=a("8fea"),b=a("169a"),x=a("132d"),I=a("0fd9b"),g=a("2fa4"),k=a("8654"),V=Object(d["a"])(c,s,i,!1,null,null,null);t["default"]=V.exports;l()(V,{VBtn:u["a"],VCard:m["a"],VCardActions:h["a"],VCardText:h["c"],VCardTitle:h["d"],VCol:f["a"],VContainer:v["a"],VDataTable:p["a"],VDialog:b["a"],VIcon:x["a"],VRow:I["a"],VSpacer:g["a"],VTextField:k["a"]})}}]);
//# sourceMappingURL=chunk-9e737bf6.fd17e92f.js.map