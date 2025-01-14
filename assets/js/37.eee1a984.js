(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{324:function(t,a,e){"use strict";e.r(a);var v=e(7),r=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("在通过 "),a("code",[t._v("docker run")]),t._v(" 或者 "),a("code",[t._v("docker create")]),t._v(" 命令创建容器时，通常并不仅是简单创建一个容器，还需要通过参数来满足我们更多的需求，比如需要容器后台运行、需要将容器端口映射到指定的宿主机端口、需要将宿主机的目录挂载到容器中等，下面将通过列举常用的场景，来理解各种参数的使用。")]),t._v(" "),a("h2",{attrs:{id:"后台运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后台运行"}},[t._v("#")]),t._v(" 后台运行")]),t._v(" "),a("p",[t._v("容器后台运行，使用 "),a("code",[t._v("-d")]),t._v(" 参数。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("docker run -d IMAGE\n")])])]),a("h2",{attrs:{id:"端口映射"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#端口映射"}},[t._v("#")]),t._v(" 端口映射")]),t._v(" "),a("p",[t._v("将容器端口映射到宿主机端口，使用 "),a("code",[t._v("-p")]),t._v(" 参数。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("docker run -p 8080:9090 IMAGE   # 将容器中的9090端口，映射到宿主机的8080端口\n")])])]),a("h2",{attrs:{id:"磁盘挂载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#磁盘挂载"}},[t._v("#")]),t._v(" 磁盘挂载")]),t._v(" "),a("p",[t._v("将宿主机目录挂载到容器中，使用 "),a("code",[t._v("-v")]),t._v(" 参数。通常，我们需要将容器中应用生成的一些文件（如日志、上传的图片等）保存到宿主机中，因为容器的生命周期可能是比较短的，容器一旦删除，其内部的文件也会一并消失，那么这时我们就需要进行磁盘挂载，让容器产生的文件直接保存到宿主机中。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("docker run -v /home/aaa:/home/bbb IMAGE   # 将宿主机的/home/aaa目录，挂载到容器的/home/bbb目录，容器中所有生成到/home/bbb目录下的文件，都会直接保存到宿主机的/home/aaa目录下\n")])])]),a("h2",{attrs:{id:"网络模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络模式"}},[t._v("#")]),t._v(" 网络模式")]),t._v(" "),a("p",[t._v("docker容器的网络模式有以下几种：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("模式")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("bridge")]),t._v(" "),a("td",[t._v("这是docker默认使用的网络模式，创建了一个名为"),a("code",[t._v("docker0")]),t._v("的虚拟网桥，并为每个容器分配一个IP地址。容器间可以通过IP地址相互通信。")])]),t._v(" "),a("tr",[a("td",[t._v("host")]),t._v(" "),a("td",[t._v("在这种模式下，容器直接使用宿主机的网络，并与宿主机共享网络接口。容器的网络配置与宿主机相同，可以通过宿主机的IP地址直接访问容器。")])]),t._v(" "),a("tr",[a("td",[t._v("container")]),t._v(" "),a("td",[t._v("在这种模式下，容器与指定的另一个容器共享一个Network Namespace，而不是与宿主机共享。新创建的容器不会创建自己的网卡和IP，而是使用宿主机的网卡和IP。")])]),t._v(" "),a("tr",[a("td",[t._v("none")]),t._v(" "),a("td",[t._v("在这种模式下，容器没有网络协议栈，也没有网卡、IP、路由等信息，只有lo网络接口。这意味着容器无法与其他容器或主机进行网络通信。")])]),t._v(" "),a("tr",[a("td",[t._v("overlay")]),t._v(" "),a("td",[t._v("这是一种特殊的网络模式，用于实现容器间的网络透明性。Docker支持OverlayFS来实现这一功能，但它通常不被推荐用于生产环境，因为它可能涉及到一些复杂性和性能问题。")])])])]),t._v(" "),a("p",[t._v("通常，我们直接使用默认的bridge模式，然后进行端口映射即可，但是在某些特殊场景下，我们可能需要更改网络模式，使应用的部署更加简单。")]),t._v(" "),a("p",[t._v("比如：数据库安装运行在宿主机上，应用通过容器进行部署，那么在应用连接数据库时，就需要从容器中访问宿主机端口，如果使用默认的网络模式，配置起来比较麻烦，这时，修改容器的网络模式为 host，那么容器便可以直接访问宿主机端口。")]),t._v(" "),a("p",[t._v("修改网络模式要使用 "),a("code",[t._v("--net")]),t._v(" 参数。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("docker run --net=host IMAGE   # 设置网络模式为host\n")])])]),a("h2",{attrs:{id:"自动删除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动删除"}},[t._v("#")]),t._v(" 自动删除")]),t._v(" "),a("p",[t._v("如果需要容器停止后自动删除，使用 "),a("code",[t._v("-rm")]),t._v(" 参数。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("docker run -rm IMAGE\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);