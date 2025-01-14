(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{324:function(e,t,_){"use strict";_.r(t);var v=_(7),r=Object(v.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("理解了"),t("code",[e._v("image")]),e._v("、"),t("code",[e._v("container")]),e._v("、"),t("code",[e._v("repository")]),e._v("的概念，docker的学习和使用会非常简单。")]),e._v(" "),t("h2",{attrs:{id:"镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#镜像"}},[e._v("#")]),e._v(" 镜像")]),e._v(" "),t("p",[e._v("即 "),t("code",[e._v("image")]),e._v("，镜像是创建容器（即"),t("code",[e._v("container")]),e._v("）的基础。通常，一个镜像是基于另一个镜像，再加上一些自定义的动作来构建的，例如：我们可以基于"),t("code",[e._v("ubuntu")]),e._v("镜像，然后安装nginx服务和我们的应用，来构建出一个新的镜像，这个镜像就可以用来创建可以运行我们的应用的容器。")]),e._v(" "),t("p",[e._v("我们可以构建自己的镜像，也可以直接使用其他人发布到仓库中的镜像。如果要自己构建镜像，那么需要编写"),t("code",[e._v("Dockerfile")]),e._v("文件，在这个文件中，通过不同的指令来定义构建镜像的过程。")]),e._v(" "),t("p",[e._v("镜像由 "),t("code",[e._v("name")]),e._v(" 和 "),t("code",[e._v("tag")]),e._v(" 两个属性来标识其唯一性。（我个人习惯将 "),t("code",[e._v("tag")]),e._v(" 称为版本，后续文章中也会使用这个名称）")]),e._v(" "),t("h2",{attrs:{id:"容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器"}},[e._v("#")]),e._v(" 容器")]),e._v(" "),t("p",[e._v("即 "),t("code",[e._v("container")]),e._v("，容器是镜像的可运行实例。可以使用Docker API或CLI来创建、启动、停止、移动或删除容器。")]),e._v(" "),t("p",[e._v("默认情况下，容器与其他容器及其主机隔离。我们可以控制容器的网络、存储或其他底层子系统与其他容器或主机的隔离程度。")]),e._v(" "),t("h2",{attrs:{id:"仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#仓库"}},[e._v("#")]),e._v(" 仓库")]),e._v(" "),t("p",[e._v("即 "),t("code",[e._v("repository")]),e._v("，仓库用来存放镜像，可以从仓库中和获取镜像，也可以将自己构建的镜像发布到仓库中。我们可以使用docker官方提供的"),t("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("公共仓库"),t("OutboundLink")],1),e._v("，或者搭建自己的私有仓库。")])])}),[],!1,null,null,null);t.default=r.exports}}]);