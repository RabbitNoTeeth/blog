(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{336:function(e,n,t){"use strict";t.r(n);var l=t(7),c=Object(l.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("在java中，提供了Cloneable接口，但是并不是实现了该接口就可以调用clone方法，因为该接口中并没有任何方法。并且在Object类中，clone方法是受保护的。")]),e._v(" "),n("h2",{attrs:{id:"_1-如何实现类的clone属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-如何实现类的clone属性"}},[e._v("#")]),e._v(" 1. 如何实现类的clone属性")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("如果实现Cloneable接口是要对某个类起作用，那么类和它的所有超类都必须遵守一个协议：\n创建和返回该对象的一个拷贝，这个”拷贝”的精确含义是，对于任意对象"),n("code",[e._v("x")]),e._v("，表达式"),n("code",[e._v("x.clone() != x")]),e._v(" 为true，"),n("code",[e._v("x.clone().getClass() == x.getClass()")]),e._v(" 为true。通常情况下，表达式 "),n("code",[e._v("x.clone().equals(x)")]),e._v(" 为true。\n但是上述协议并不是绝对要求遵守，只是在通常情况下，最好遵守此协议。")])]),e._v(" "),n("li",[n("p",[e._v("在确定为一个类实现clone属性时，一定要确保其超类具有良好的clone行为。")])])]),e._v(" "),n("br"),e._v(" "),n("p",[e._v("一个实现clone属性的示例")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("public class Person implements Cloneable {\n\n    @Override\n    public Person clone() throws CloneNotSupportedException {\n        return (Person) super.clone();\n    }\n}\n")])])]),n("p",[e._v("上述代码示例展示了实现clone属性的几个必须操作：")]),e._v(" "),n("ol",[n("li",[e._v("实现Cloneable接口。")]),e._v(" "),n("li",[e._v("覆盖clone方法，并声明为public公有，提供给外界访问。")]),e._v(" "),n("li",[e._v("将返回值类型更改为该类的类型 (jdk1.5后支持重写方法时返回被重写方法返回值类型的子类型)。")])]),e._v(" "),n("h2",{attrs:{id:"_2-实现clone属性时需要注意的事项"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-实现clone属性时需要注意的事项"}},[e._v("#")]),e._v(" 2. 实现clone属性时需要注意的事项")]),e._v(" "),n("p",[n("strong",[e._v("区分浅拷贝和深拷贝")])]),e._v(" "),n("p",[e._v("假如我们需要为一个简单的Stack栈实现clone属性，我们先来定义一种实现方式 ：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("public class Stack implements Cloneable {\n\n    private Object[] elements;\n    private int size = 0;\n    private static final int DEFAULT_INIT_CAPACITY = 16;\n    public Stack(){\n        elements = new Object[DEFAULT_INIT_CAPACITY];\n    }\n    \n    /*... 其他方法*/\n\n    @Override\n    public Stack clone() throws CloneNotSupportedException {\n        return (Stack) super.clone();\n    }\n}\n")])])]),n("p",[e._v("上述代码示例中，调用clone()方法返回的Stack对象，size域是独立的，但是elements数组却是和原Stack共享的，可以理解为一种浅拷贝，当原Stack中elements数组发生变化时会影响克隆得到的Stack。")]),e._v(" "),n("p",[e._v("如果要实现完全拷贝，或者理解为深度拷贝，则可以这样修改：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("@Override\npublic Stack clone() throws CloneNotSupportedException {\n    Stack clone = (Stack) super.clone();\n    clone.elements = elements.clone();\n    return clone;\n}\n")])])]),n("p",[e._v("这样，elements数组便实现了独立 (在jdk1.5之后，在数组上调用clone返回的数组，其编译时类型与被克隆数组的类型相同，不需要强转)。")]),e._v(" "),n("p",[n("strong",[e._v("总结")])]),e._v(" "),n("p",[e._v("所有实现了Cloneable接口的类都应该用一个公有的方法覆盖"),n("code",[e._v("clone")]),e._v("，并且首先调用"),n("code",[e._v("super.clone")]),e._v("，然后修正任何需要修正的域。")])])}),[],!1,null,null,null);n.default=c.exports}}]);