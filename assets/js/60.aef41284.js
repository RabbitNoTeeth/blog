(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{348:function(a,t,_){"use strict";_.r(t);var e=_(7),s=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"_1-不要在新代码中使用原生态类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-不要在新代码中使用原生态类型"}},[a._v("#")]),a._v(" 1. 不要在新代码中使用原生态类型.")]),a._v(" "),t("p",[a._v("比如，"),t("code",[a._v("List<String>")]),a._v("和"),t("code",[a._v("List")]),a._v("，"),t("code",[a._v("List")]),a._v("就是原生态类型。")]),a._v(" "),t("h2",{attrs:{id:"_2-理解无限制通配符和原生态类型的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-理解无限制通配符和原生态类型的区别"}},[a._v("#")]),a._v(" 2. 理解无限制通配符和原生态类型的区别")]),a._v(" "),t("p",[a._v("如 "),t("code",[a._v("Set<?>")]),a._v(" 和 "),t("code",[a._v("Set")]),a._v(" 。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('Set<?> set1 = new HashSet<>();\nset1.add("aaaaaaaaa");\t//无法编译\n\nSet set2 = new HashSet();\nset2.add("aaaaaaaaa");\t//编译通过\n')])])]),t("h2",{attrs:{id:"_3-消除非受检警告"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-消除非受检警告"}},[a._v("#")]),a._v(" 3. 消除非受检警告")]),a._v(" "),t("p",[a._v("如果无法消除警告，同时可以证明引起警告的代码是类型安全的，可以使用"),t("code",[a._v("@SuppressWarnings(“unckecked”)")]),a._v("注解来禁止警告。但是，要最小化注解的使用范围，永远不要在类上使用该注解。同时写好注释来说明为什么能够确认使用该注解。")]),a._v(" "),t("h2",{attrs:{id:"_4-列表优先于数组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-列表优先于数组"}},[a._v("#")]),a._v(" 4. 列表优先于数组")]),a._v(" "),t("p",[a._v("数组是协变的，如果"),t("code",[a._v("Sub")]),a._v("是"),t("code",[a._v("Super")]),a._v("的子类，那么"),t("code",[a._v("Sub[]")]),a._v("就是"),t("code",[a._v("Super[]")]),a._v("的子类。但是对于"),t("code",[a._v("List<Sub>")]),a._v("却不是"),t("code",[a._v("List<Super>")]),a._v("的子类。\n数组会在运行时才知道并检查它们的元素的类型，但是泛型采用擦除机制，只在编译时强化它们的类型信息，并在运行时丢弃(擦除)类型信息，这是为了能兼容java5之前的遗留代码。")]),a._v(" "),t("p",[a._v("上述原因造成了数组和泛型不能很好的混合使用。泛型列表总是比数组更加安全。")]),a._v(" "),t("h2",{attrs:{id:"_5-编写新类时-尤其是作为导出的api类-优先考虑泛型类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-编写新类时-尤其是作为导出的api类-优先考虑泛型类"}},[a._v("#")]),a._v(" 5. 编写新类时,尤其是作为导出的API类,优先考虑泛型类")]),a._v(" "),t("h2",{attrs:{id:"_6-优先考虑泛型方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-优先考虑泛型方法"}},[a._v("#")]),a._v(" 6. 优先考虑泛型方法")]),a._v(" "),t("h2",{attrs:{id:"_7-利用有限制的通配符来提升api的灵活性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-利用有限制的通配符来提升api的灵活性"}},[a._v("#")]),a._v(" 7. 利用有限制的通配符来提升API的灵活性")]),a._v(" "),t("p",[a._v("熟知有限制通配符的语法和用法：")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("声明泛型上限: "),t("code",[a._v("<? extends TypeX>")])])]),a._v(" "),t("li",[t("p",[a._v("声明泛型下限: "),t("code",[a._v("<? super TypeX>")])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);