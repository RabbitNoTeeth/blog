(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{332:function(t,s,i){"use strict";i.r(s);var n=i(7),l=Object(n.a)({},(function(){var t=this._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("p",[this._v("在实际开发中，我们会经常写一些只包含静态方法或者静态域的类，这些类一般作为util工具类存在，并且这些类是不需要实例化的。但是，很多时候我们会忘记显式声明构造函数，这样编译器会自动生成一个无参构造函数，此时该类就是可以实例化的。")]),this._v(" "),t("p",[this._v("当确定一个工具类不需要实例化时，我们就要给予其相应100%不可实例化的能力，通过声明私有的构造函数，让编译器不再自动生成构造函数，来实现不可实例化。")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("public class StringUtils {\n    \n    private StringUtils(){}\n    \n    //各种静态方法\n    public static void ...\n    \n}\n")])])]),t("p",[this._v("该做法的副作用就是该类不能被子类化，因为子类的所有构造器都必须显式或者隐式的调用超类构造器，这种情况下子类没有可访问的超类构造器。")])])}),[],!1,null,null,null);s.default=l.exports}}]);