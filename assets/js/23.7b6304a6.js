(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{156:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("imgPreview",{attrs:{imgUrl:"/assets/uploader.png"}}),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11)],1)},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"uploader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uploader","aria-hidden":"true"}},[this._v("#")]),this._v(" Uploader")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("图片上传组件，基于 "),a("code",[this._v("wx.chooseImage")]),this._v(" 和 "),a("code",[this._v("wx.previewImage")]),this._v(" 实现。")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"引入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入","aria-hidden":"true"}},[this._v("#")]),this._v(" 引入")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" mpUploader "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'mpvue-weui/src/uploader'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  components"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mpUploader\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mp-uploader")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("@upLoadSuccess")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("upLoadSuccess"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("@upLoadFail")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("upLoadFail"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("@uploadDelete")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("uploadDelete"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v(":showTip")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),t._v("false")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v(":count")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mp-uploader")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("maxLength")]),t._v(" "),s("td",[t._v("最多能上传图片的张数")]),t._v(" "),s("td",[s("code",[t._v("Number")])]),t._v(" "),s("td",[s("code",[t._v("20")])])]),t._v(" "),s("tr",[s("td",[t._v("showTip")]),t._v(" "),s("td",[t._v("是否显示图片上传剩余张数")]),t._v(" "),s("td",[s("code",[t._v("Boolean")])]),t._v(" "),s("td",[s("code",[t._v("false")])])]),t._v(" "),s("tr",[s("td",[t._v("count")]),t._v(" "),s("td",[t._v("最多可以选择的图片张数")]),t._v(" "),s("td",[s("code",[t._v("Number")])]),t._v(" "),s("td",[s("code",[t._v("9")])])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"event"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#event","aria-hidden":"true"}},[this._v("#")]),this._v(" Event")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("table",[s("thead",[s("tr",[s("th",[t._v("事件名")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("参数")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("@upLoadSuccess")]),t._v(" "),s("td",[t._v("图片上传成功时触发")]),t._v(" "),s("td",[s("code",[t._v("successRes")])])]),t._v(" "),s("tr",[s("td",[t._v("@upLoadFail")]),t._v(" "),s("td",[t._v("图片上传失败时触发")]),t._v(" "),s("td",[s("code",[t._v("failRes")])])]),t._v(" "),s("tr",[s("td",[t._v("@uploadDelete")]),t._v(" "),s("td",[t._v("删除上传图片时触发")]),t._v(" "),s("td",[s("code",[t._v("DeleteRes")])])]),t._v(" "),s("tr",[s("td",[t._v("@complete")]),t._v(" "),s("td",[t._v("调用接口完成时回调")]),t._v(" "),s("td",[t._v("-")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h5",{attrs:{id:"参数相关说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数相关说明","aria-hidden":"true"}},[this._v("#")]),this._v(" 参数相关说明")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("p",[t._v("successRes：")]),t._v(" "),s("ul",[s("li",[t._v("errMsg：回调消息")]),t._v(" "),s("li",[t._v("files：已上传图片的本地临时文件路径")]),t._v(" "),s("li",[t._v("tempFilePaths：图片的本地临时文件路径列表")]),t._v(" "),s("li",[t._v("tempFiles：图片的本地临时文件列表\n"),s("ul",[s("li",[t._v("path：本地临时文件路径")]),t._v(" "),s("li",[t._v("size：本地临时文件大小，单位 B")])])])])]),t._v(" "),s("li",[s("p",[t._v("failRes：")]),t._v(" "),s("ul",[s("li",[t._v("errMsg：回调消息")])])]),t._v(" "),s("li",[s("p",[t._v("DeleteRes：")]),t._v(" "),s("ul",[s("li",[t._v("files：已上传图片的链接（不包含已删除的图片）")]),t._v(" "),s("li",[t._v("index：删除图片在 "),s("code",[t._v("files")]),t._v(" 中的索引")]),t._v(" "),s("li",[t._v("src：删除图片的本地临时路径")])])])])}],!1,null,null,null);n.options.__file="uploader.md";a.default=n.exports}}]);