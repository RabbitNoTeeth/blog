(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{392:function(t,r,e){"use strict";e.r(r);var p=e(7),a=Object(p.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("在使用nginx反向代理时，会导致后端服务器无法获取到客户端正确的IP地址，要解决这个问题，可以添加如下配置：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("location /api {\n\t# 配置反向代理\n\tproxy_pass http://127.0.0.1:8090;\n\t# 解决无法获取客户端真实IP的问题\n\tproxy_set_header            Host $host;  \n\tproxy_set_header            X-Real-Ip $remote_addr;  \n\tproxy_set_header            X-Forwarded-For $proxy_add_x_forwarded_for;\n}\n")])])]),r("p",[t._v("按照上述方法配置后，可以在后端服务器中通过 "),r("strong",[t._v("X-Real-Ip")]),t._v(" 或者 "),r("strong",[t._v("X-Forwarded-For")]),t._v(" 来获取客户端真实ip，那么这两者有何区别呢？")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("X-Real-Ip")]),t._v(" "),r("p",[t._v("通常，如果只存在一层代理，那么该请求头的值即为客户端真实ip。")])]),t._v(" "),r("li",[r("p",[t._v("X-Forwarded-For")]),t._v(" "),r("p",[t._v("如果存在多层代理，那么该请求头的值的格式为 “ip1,ip2,ip3...”，有几层代理，那么其值中就会有几个ip，其中第一个ip就是客户端的真实ip。")])])])])}),[],!1,null,null,null);r.default=a.exports}}]);