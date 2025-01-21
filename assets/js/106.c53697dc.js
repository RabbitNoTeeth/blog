(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{395:function(s,a,t){"use strict";t.r(a);var e=t(7),_=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("通过nfs搭建共享存储，可实现多台机器的文件共享。下面以机器A（192.168.1.100）和机器B（192.168.1.200）为例，将机器A作为共享文件的实际存储机器，机器B共享机器A的文件。")]),s._v(" "),a("h2",{attrs:{id:"_1-安装nfs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装nfs"}},[s._v("#")]),s._v(" 1. 安装nfs")]),s._v(" "),a("p",[s._v("在机器A中，安装nfs服务")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("yum install nfs-utils\n")])])]),a("p",[s._v("或者")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("apt-get install nfs-common\n")])])]),a("p",[s._v("具体使用哪种安装命令，取决于机器的系统。")]),s._v(" "),a("h2",{attrs:{id:"_2-配置nfs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置nfs"}},[s._v("#")]),s._v(" 2. 配置nfs")]),s._v(" "),a("p",[s._v("在机器A中，执行以下命令，配置nfs服务")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("vi /etc/exports\n/nfs 198.168.1.200(rw,sync,no_root_squash)\n")])])]),a("p",[a("code",[s._v("/nfs")]),s._v(" 表示共享文件的实际存储目录，可以任意指定，但是要保证该目录存在。")]),s._v(" "),a("p",[a("code",[s._v("198.168.1.200(rw,sync,no_root_squash)")]),s._v(" 表示文件可以被ip为 198.168.1.200 的机器（及机器B）共享，如果要配置多台机器，可用空格隔开，如下所示：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/nfs 198.168.1.200(rw,sync,no_root_squash) 198.168.1.201(rw,sync,no_root_squash) 198.168.1.202(rw,sync,no_root_squash)\n")])])]),a("p",[s._v("也可以按照网段进行配置，如下表示ip为198.168.1.*的机器都可共享：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/nfs 198.168.1.0/24(rw,sync,no_root_squash)\n")])])]),a("h2",{attrs:{id:"_3-启动nfs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-启动nfs"}},[s._v("#")]),s._v(" 3. 启动nfs")]),s._v(" "),a("p",[s._v("在机器A中，启动nfs服务")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("service nfs start\n")])])]),a("h2",{attrs:{id:"_4-挂载nfs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-挂载nfs"}},[s._v("#")]),s._v(" 4. 挂载nfs")]),s._v(" "),a("p",[s._v("在机器B中，挂载nfs")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mount -t nfs 198.168.1.100:/nfs /home/share\n")])])]),a("p",[a("code",[s._v("-t")]),s._v(" 后面的 "),a("code",[s._v("nfs")]),s._v(" 表示挂载类型为nfs。")]),s._v(" "),a("p",[a("code",[s._v("198.168.1.100:/nfs /home/share")]),s._v(" 表示将ip为 198.168.1.100 机器的 "),a("code",[s._v("/nfs")]),s._v(" 目录，挂载到本地的 "),a("code",[s._v("/home/share")]),s._v(" 目录。")]),s._v(" "),a("h2",{attrs:{id:"_5-验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-验证"}},[s._v("#")]),s._v(" 5. 验证")]),s._v(" "),a("p",[s._v("在机器B中，执行")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("df -h\n")])])]),a("p",[s._v("可以找到如下输出：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("198.168.1.100:/nfs (size) (used) (avail) (use%) /home/share\n")])])]),a("p",[s._v("在机器A的 "),a("code",[s._v("/nfs")]),s._v(" 目录下操作文件（创建、删除、修改等），在机器B的 "),a("code",[s._v("/home/share")]),s._v(" 目录下，可以同步看到效果，反之是同样的，而文件的实际存储位置是机器A的 "),a("code",[s._v("/home/share")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"补充"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补充"}},[s._v("#")]),s._v(" 补充")]),s._v(" "),a("p",[s._v("在实际场景中，如果机器A和机器B搭建了共享存储，一般都是组成集群，部署相同类型的应用，而这就需要机器A与机器B的应用访问的是相同路径的共享目录，而按照上面的操作，机器A需要访问 "),a("code",[s._v("/nfs")]),s._v("，而机器B需要访问 "),a("code",[s._v("/home/share")]),s._v("。 很明显这样还要修改应用，为了保持应用一致，我们需要在机器A上也访问 "),a("code",[s._v("/home/share")]),s._v("，该如何做呢？")]),s._v(" "),a("p",[s._v("很简单，在机器A上执行第4步中的挂载nfs操作，在机器A上再建一个挂载点即可。")])])}),[],!1,null,null,null);a.default=_.exports}}]);