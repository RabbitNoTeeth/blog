(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{349:function(t,e,n){"use strict";n.r(e);var a=n(7),r=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("先看一个代码示例，示例中的Period声称是一个不可变类：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('//代码清单1\npublic class Period {\n    \n    private final Date start;\n    private final Date end;\n    \n    public Period(Date start, Date end) {\n        if(start.compareTo(end)>0){\n            throw new IllegalArgumentException("start can not after end");\n        }\n        this.start = start;\n        this.end = end;\n    }\n\n    public Date getStart() {\n        return start;\n    }\n\n    public Date getEnd() {\n        return end;\n    }\n}\n')])])]),e("p",[t._v("乍一看，类Period通过声明final成员类，在构造函数中初始化，并且只提供getter方法，达到了不可变的目的。但是Period类实际上仍是可变的。因为Date是可变的，简单使用如下代码就可对Period进行安全攻击：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("//代码清单2\npublic static void main(String[] args) {\n    \n    Date start = new Date();\n    Date end = new Date();\n    Period period = new Period(start,end);\n    end.setYear(78);\t//实例化Period后,仍然可以对其end成员进行修改\n    \n}\n")])])]),e("br"),t._v(" "),e("p",[e("strong",[t._v("解决方法")])]),t._v(" "),e("ol",[e("li",[t._v("对于构造器的每个可变参数进行保护性拷贝 。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('//代码清单3\npublic Period(Date start, Date end) {\n    this.start = new Date(start.getTime());\n    this.end = new Date(end.getTime());\n    if(start.compareTo(end)>0){\n        throw new IllegalArgumentException("start can not after end");\n    }\n}\n')])])]),e("p",[t._v("这样，就可以抵御代码清单2中的攻击。")]),t._v(" "),e("p",[t._v("但是此时，Period类仍是不安全的，下面的代码仍然可以对其造成安全攻击：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("//代码清单4\npublic static void main(String[] args) {\n\n    Date start = new Date();\n    Date end = new Date();\n    Period period = new Period(start,end);\n    period.getEnd().setYear(78);\t\t//通过获取成员end并修改来攻击\n\n}\n")])])]),e("p",[t._v("由于getter方法直接返回了Period的内部成员自身，而其成员类型Date是可变的，所以Period仍是不安全的。")]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("使访问方法返回内部域的保护性拷贝。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("//代码清单5\npublic Date getStart() {\n    return new Date(start.getTime());\n}\n\npublic Date getEnd() {\n    return new Date(end.getTime());\n}\n")])])]),e("p",[t._v("上述改进，通过返回内部域的拷贝，可以抵御代码清单4中的攻击。")]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("构造器在进行保护性拷贝时不要使用clone方法，而访问方法允许使用clone方法。对于参数类型可以被不信任方子类化的参数，不要使用clone方法进行保护性拷贝。")])]),t._v(" "),e("br"),t._v(" "),e("p",[e("strong",[t._v("小结")])]),t._v(" "),e("p",[t._v("如果有可能，优先考虑使用不可变对象作为对象内部的组件。否则，如果类具有从客户端获得或者返回到客户端的可变组件，就必须进行保护性拷贝。当拷贝的成本受到限制时，并且类确认客户端不会恶意修改组件，那么可以不使用保护性拷贝，但是一定要在文档注释中说明客户端具有不得修改组件的职责。")])])}),[],!1,null,null,null);e.default=r.exports}}]);