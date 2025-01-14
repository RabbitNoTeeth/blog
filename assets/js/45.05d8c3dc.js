(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{330:function(a,n,t){"use strict";t.r(n);var e=t(7),s=Object(e.a)({},(function(){var a=this,n=a._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("p",[a._v("实现Singleton的三种方法")]),a._v(" "),n("h2",{attrs:{id:"_1-公有域方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-公有域方法"}},[a._v("#")]),a._v(" 1. 公有域方法")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("public class Manager {\n    \n    public static final Manager INSTANCE = new Manager();\n    \n    private Manager(){}\n    \n}\n")])])]),n("p",[a._v("优点： 类成员声明很清楚的表明了该类是一个Singleton。\n缺点：性能上不能优化。")]),a._v(" "),n("h2",{attrs:{id:"_2-静态工厂方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-静态工厂方法"}},[a._v("#")]),a._v(" 2. 静态工厂方法")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("public class Manager {\n\n    private static final Manager INSTANCE = new Manager();\n\n    private Manager(){}\n    \n    public static Manager getInstance(){\n        return INSTANCE;\n    }\n\n}\n")])])]),n("p",[a._v("优点：提供了更强的灵活性，在静态工厂方法体中，可以实现更多的优化。如延迟初始化，或者为每个线程返回唯一的实例等。")]),a._v(" "),n("p",[a._v("但是上述两种方式有一个共同的缺点:：在类实现了序列化后，反序列化时依旧会不断创建新的实例，虽然是隐式的，但是依旧打破了Singleton的特性。为了防止这种情况，必须声明所有实例都是瞬时的(transient)，并提供一个readResolve方法：")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("public class Manager {\n\n    private static final transient Manager INSTANCE = new Manager();\n\n    private Manager(){}\n\n    public static Manager getInstance(){\n        return INSTANCE;\n    }\n    \n    private Object readResolve(){\n        return INSTANCE;\n    }\n\n}\n")])])]),n("h2",{attrs:{id:"_3-单元素枚举"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-单元素枚举"}},[a._v("#")]),a._v(" 3. 单元素枚举")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("public enum  Manager {\n\n    INSTANCE;\n\n}\n")])])]),n("p",[a._v("该方法在功能上与公有域方法接近，但是它更加简洁，并且无偿提供了序列化机制，绝对防止多次序列化，即使是在面对复杂的序列化或者反射攻击时。")]),a._v(" "),n("p",[n("strong",[a._v("总结")])]),a._v(" "),n("p",[a._v("实际应用中，使用最多的是第二种方式，但是实际上单元素枚举类型是实现Singleton的最佳方法，只是并没有被广泛使用。")])])}),[],!1,null,null,null);n.default=s.exports}}]);