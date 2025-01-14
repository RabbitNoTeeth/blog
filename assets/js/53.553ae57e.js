(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{338:function(o,_,e){"use strict";e.r(_);var a=e(7),v=Object(a.a)({},(function(){var o=this,_=o._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[_("p",[o._v("Java平台类库的所有值类都实现了Comparable接口，如果你正在编写一个值类，它具有非常明显的内在排序关系，比如按照字母顺序、数值顺序或者年代顺序，那你就应该坚决考虑实现该接口。")]),o._v(" "),_("h2",{attrs:{id:"_1-通用约定"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-通用约定"}},[o._v("#")]),o._v(" 1. 通用约定")]),o._v(" "),_("p",[o._v("在下面的说明中用sgn来表示compareTo的结果：负值、0、正值。compareTo方法的约定和equals相似：")]),o._v(" "),_("ol",[_("li",[_("p",[o._v("确保所有的"),_("code",[o._v("x")]),o._v("和"),_("code",[o._v("y")]),o._v("都满足 "),_("code",[o._v("sgn(x.compareTo(y)) = -sgn(y.compareTo(x))")]),o._v(" 。")]),o._v(" "),_("p",[o._v("这也意味着,当两者中任意一个抛出异常时,另一个也必须抛出异常 。")])]),o._v(" "),_("li",[_("p",[o._v("确保传递性。")]),o._v(" "),_("p",[o._v("对所有的"),_("code",[o._v("x")]),o._v("、"),_("code",[o._v("y")]),o._v("和"),_("code",[o._v("z")]),o._v("，满足 "),_("code",[o._v("( x.compareTo(y) > 0 && y.compareTo(z) > 0 ) == true")]),o._v(" 时，"),_("code",[o._v("x.compareTo(z) > 0")]),o._v(" 。")])]),o._v(" "),_("li",[_("p",[o._v("确保 "),_("code",[o._v("x.compareTo(y) == 0")]),o._v(" 时，满足对于所有的"),_("code",[o._v("z")]),o._v("，"),_("code",[o._v("sgn(x.compareTo(z)) == sgn(y.compareTo(z))")]),o._v(" 。")])]),o._v(" "),_("li",[_("p",[o._v("不要在compareTo方法中对不同类型的对象进行比较。")])]),o._v(" "),_("li",[_("p",[o._v("强烈建议满足 "),_("code",[o._v("((x.compareTo(y) ==0) == x.equals(y))")]),o._v("，这个约定并不是必须满足的，但是建议实现。如果一个实现了Comparable接口的类不满足该条件，那么应该给予明确的说明，如：“注意，该类具有内在的排序功能，但是与equals不一致”。")])])]),o._v(" "),_("p",[o._v("违反了compareTo约定的类会破坏其他依赖比较关系的类，如TreeSet、TreeMap、以及工具类Collections和Arrays等。")]),o._v(" "),_("h2",{attrs:{id:"_2-优化建议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-优化建议"}},[o._v("#")]),o._v(" 2. 优化建议")]),o._v(" "),_("ol",[_("li",[_("p",[o._v("如果你想为一个实现了Comparable接口的类增加值组件，请不要扩展这个类，而是要编写一个不相关的类，其中包含第一个类的实例，然后提供一个”视图”方法返回这个实例。这样既可以让你自由地在第二个类上实现compareTo方法，同时也允许它的客户端在必要的时候，把第二个类的实例视同第一个类的实例。")])]),o._v(" "),_("li",[_("p",[o._v("CompareTo方法中域的比较是顺序的比较而不是等同性的比较。比较对象引用域也可以是通过递归地调用compareTo方法来实现，如果一个域并没有实现Comparable接口，或者你需要使用一个非标准的排序关系，就可以使用一个显示的Comparator来代替。或者编写自己的Comparator，或者使用已有的Comparator。")])]),o._v(" "),_("li",[_("p",[o._v("如果一个类有多个关键域，那么按什么样的顺序来比较这些域是非常关键的，你必须从最关键的域开始，逐步进行到所有的重要域，如果某个域的比较产生了非零的结果，则整个比较操作结束，并返回该结果，如果最关键的域是相等的，要进一步比较次关键的域，如果所有的域都是相等的，则对象就是相等的，并返回零。")])])])])}),[],!1,null,null,null);_.default=v.exports}}]);