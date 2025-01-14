(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{384:function(a,s,t){"use strict";t.r(s);var e=t(7),h=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"_1-开放定址法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-开放定址法"}},[a._v("#")]),a._v(" 1. 开放定址法")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Hi = (H(key) + di) % m\n")])])]),s("p",[a._v("di的取值有三种取法：")]),a._v(" "),s("ol",[s("li",[a._v("线性探测再散列：di = 1，2，3，4，...，m-1")]),a._v(" "),s("li",[a._v("平方探测再散列：di = 1²，-1²，2²，-2²，...，k²，-k²")]),a._v(" "),s("li",[a._v("随即探测再散列：自定义一组伪随机数，如 di = 2，5，7，8，13，16，18，24，...")])]),a._v(" "),s("p",[a._v("示例：\n对 key=aaa 进行散列，第一次计算hash得到：H0 = 5；\n发现hash冲突，那么选择一种di的取值方式，如按照线性探测取值di = 1，再次进行hash，得到：H1 = (5 + 1) % m = 8；\n如果发现hash还是冲突，那么继续计算hash，取di = 2，H2 = (8 + 2) % m = 7；\n如果新计算的hash继续冲突，那么就依此类推，不断再次hash，直到不再冲突。")]),a._v(" "),s("h2",{attrs:{id:"_2-链地址法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-链地址法"}},[a._v("#")]),a._v(" 2. 链地址法")]),a._v(" "),s("p",[a._v("hash冲突后，将冲突的key通过链表结构链接在一起，如HashMap，就是使用了链地址法解决hash冲突，数组中放入的是链表，当key值发生hash冲突后，将多个冲突的key通过链表链接在一起。")]),a._v(" "),s("h2",{attrs:{id:"_3-再哈希法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-再哈希法"}},[a._v("#")]),a._v(" 3. 再哈希法")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Hi = RHi(key)\n")])])]),s("p",[a._v("R为一个自定义的算法公式，当H0 = 5，第一次计算hash发现冲突后，再次计算 H1 = R * 5，依此类推，直至不再冲突 。")])])}),[],!1,null,null,null);s.default=h.exports}}]);