(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{336:function(e,t,o){"use strict";(function(e){o(195);t.a={data:function(){return{menuList:[],loginInfo:"",isCollapse:!1,defaultActive:"1-2",routePathObj:{administration:"入驻工厂管理",feedback:"意见反馈"},url:o(350),SERVIEC_URL_PATH:e.SERVIEC_URL_PATH,user:{}}},created:function(){var e=this;this.$axios.get("/bizAuthorize/allAuthorize").then((function(t){200==t.data.code&&(e.menuList=t.data.data)}))},mounted:function(){this.user=this.$cookies.get("user")&&this.$cookies.get("user")},methods:{handleSelect:function(e){this.$router.push(e)},onCollapse:function(){this.isCollapse=!this.isCollapse,this.isCollapse?this.$refs.homeMenu.style.width="56px":this.$refs.homeMenu.style.width="260px"},exit:function(){this.$cookies.remove("user"),this.$router.push("/login")}},computed:{routePathList:function(){return this.$route.path.split("/")}}}}).call(this,o(14))},337:function(e,t,o){var content=o(352);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(35).default)("5de5c392",content,!0,{sourceMap:!1})},349:function(e,t,o){e.exports=o.p+"img/logo_home.3ce63b5.png"},350:function(e,t,o){e.exports=o.p+"img/deafult_user.9c26a81.png"},351:function(e,t,o){"use strict";var l=o(337);o.n(l).a},352:function(e,t,o){(t=o(34)(!1)).push([e.i,".home[data-v-b8e5b8c2]{display:flex;width:100%;height:100%}.home .el-menu-item.is-active[data-v-b8e5b8c2]{background-color:#177ddc!important}.home .el-menu-item.logo_row[data-v-b8e5b8c2]{background-color:#001c3d!important}.home .icon[data-v-b8e5b8c2]{font-size:22px;margin-right:10px}.home .home-menu[data-v-b8e5b8c2]{width:260px;height:100%}.home .home-menu .menu-title[data-v-b8e5b8c2]{text-align:center;font-size:18px;line-height:60px}.home .home-menu>ul[data-v-b8e5b8c2]{height:100%}.home .home-fr[data-v-b8e5b8c2]{flex:1;width:100%;display:flex;flex-direction:column;overflow:auto}.home .home-fr .tools-hd .header[data-v-b8e5b8c2],.home .home-fr .tools-hd .menu-path[data-v-b8e5b8c2]{padding:0 10px;box-sizing:border-box}.home .home-fr .tools-hd .header[data-v-b8e5b8c2]{display:flex;justify-content:space-between;line-height:60px;border-bottom:1px solid #ccc;box-sizing:border-box}.home .home-fr .tools-hd .header .h-fr[data-v-b8e5b8c2]{display:flex;align-items:center}.home .home-fr .tools-hd .header .h-fr .user-name[data-v-b8e5b8c2]{font-size:12px;margin-left:10px}.home .home-fr .tools-hd .header .h-mid[data-v-b8e5b8c2]{font-size:18px;font-weight:700}.home .home-fr .tools-hd .menu-path[data-v-b8e5b8c2]{height:50px}.home .home-fr .tabInfos[data-v-b8e5b8c2]{padding-top:20px;box-sizing:border-box;flex:1}",""]),e.exports=t},371:function(e,t,o){"use strict";o.r(t);var l=o(336).a,n=(o(351),o(32)),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"home"},[l("div",{ref:"homeMenu",staticClass:"home-menu"},[l("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"unique-opened":!0,collapse:e.isCollapse,"default-active":e.defaultActive,"background-color":"#000925","text-color":"#fff","active-text-color":"#fff"},on:{select:e.handleSelect}},[l("el-menu-item",{staticClass:"logo_row",attrs:{index:"/home"}},[l("div",{staticClass:"logo-box",staticStyle:{"vertical-align":"middle"}},[l("img",{staticStyle:{width:"20px",heigth:"20px","margin-right":"15px"},attrs:{src:o(349),alt:"#"}}),e._v(" "),e.isCollapse?e._e():l("span",[e._v("星联易修")])])]),e._v(" "),e._l(e.menuList,(function(menu){return l("div",{key:menu.authId},[["入驻工厂管理","意见反馈"].includes(menu.authName)?l("el-menu-item",{attrs:{index:""+menu.authUrl}},[l("i",{class:["icon","入驻工厂管理"==menu.authName?"el-icon-menu":"iconfont icon-fankui51"]}),e._v(" "),l("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(menu.authName))])]):l("el-submenu",{attrs:{index:""+menu.authUrl}},[l("template",{slot:"title"},[l("i",{staticClass:"el-icon-location"}),e._v(" "),e.isCollapse?e._e():l("span",[e._v(e._s(menu.authName))])]),e._v(" "),l("el-menu-item-group",{staticClass:"menu-item-group"},e._l(menu.children,(function(t){return l("el-menu-item",{key:t.authId,attrs:{index:""+t.authUrl}},[e._v(e._s(t.authName))])})),1)],2)],1)}))],2)],1),e._v(" "),l("div",{staticClass:"home-fr"},[l("div",{staticClass:"tools-hd"},[l("div",{staticClass:"header"},[l("div",{staticClass:"h-fl"},[l("i",{staticClass:"icon el-icon-s-fold",on:{click:function(t){return e.onCollapse()}}})]),e._v(" "),l("div",{staticClass:"h-mid"},[e._v(e._s(e.user&&e.user.factoryInfo&&e.user.factoryInfo.factoryName))]),e._v(" "),l("div",{staticClass:"h-fr"},[l("el-popover",{attrs:{"popper-class":"home-user-popover",placement:"bottom",width:"90",trigger:"click"}},[l("div",{staticStyle:{display:"flex","align-items":"center"},attrs:{slot:"reference"},slot:"reference"},[l("el-image",{staticStyle:{width:"26px",height:"26px","border-radius":"15px"},attrs:{src:e.url,fit:"fill"}}),e._v(" "),l("i",{staticClass:"el-icon-caret-bottom",staticStyle:{"margin-left":"2px"}})],1),e._v(" "),l("div",{staticClass:"user-box"},[l("div",{staticClass:"user-infos"},[l("span",[e._v(e._s(e.user&&e.user.employee&&e.user.employee.employeeName))]),e._v(" "),l("span",[e._v(e._s(e.user&&e.user.employee&&e.user.employee.employeePhone))])]),e._v(" "),l("div",{staticClass:"exit",on:{click:function(t){return e.exit()}}},[l("i",{staticClass:"iconfont icon-tuichu"}),e._v(" 退出登录\n              ")])])])],1)])]),e._v(" "),l("div",{staticClass:"tabInfos"},[l("nuxt",{staticStyle:{padding:"0 10px"}})],1)])])}),[],!1,null,"b8e5b8c2",null);t.default=component.exports}}]);