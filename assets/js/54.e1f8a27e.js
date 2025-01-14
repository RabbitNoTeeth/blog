(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{341:function(_,v,t){"use strict";t.r(v);var a=t(7),e=Object(a.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[_._v("不可变类是其实例不能被修改的类。每个实例中包含的所有信息都必须在创建该实例时就提供，并在整个对象的生命周期内固定不变。")]),_._v(" "),v("h2",{attrs:{id:"_1-使类成为不可变的规则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-使类成为不可变的规则"}},[_._v("#")]),_._v(" 1. 使类成为不可变的规则")]),_._v(" "),v("ol",[v("li",[v("p",[_._v("不要提供可以修改对象状态的方法。")])]),_._v(" "),v("li",[v("p",[_._v("保证类不会被扩展。"),v("br"),_._v("\n两种方法:"),v("br"),_._v("\na> 为了防止子类化，通常做法是这个类用final修饰。"),v("br"),_._v("\nb> 将所有类的构造器声明为私有的或者包级私有的，并添加公有的静态工厂方法来代替公有构造函数。")])]),_._v(" "),v("li",[v("p",[_._v("使所有的域都是final的。")])]),_._v(" "),v("li",[v("p",[_._v("使所有的域都是私有的。")])]),_._v(" "),v("li",[v("p",[_._v("确保对于任何可变组件的互斥访问。\n如果类具有指向可变对象的域，则必须确保该类的客户端无法获得指向这些对象的引用。并且，永远不要用客户端提供的对象引用来初始化这样的域，也不要从任何访问方法中返回对象的引用。")])])]),_._v(" "),v("h2",{attrs:{id:"_2-不可变类的优缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-不可变类的优缺点"}},[_._v("#")]),_._v(" 2. 不可变类的优缺点")]),_._v(" "),v("h3",{attrs:{id:"_2-1-优点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-优点"}},[_._v("#")]),_._v(" 2.1 优点")]),_._v(" "),v("ol",[v("li",[v("p",[_._v("不可变对象比较简单。")])]),_._v(" "),v("li",[v("p",[_._v("不可变对象本质上是线程安全的，它们不需要同步，可以自由地被共享。\n对于不可变对象中频繁用到的值，可以提供公有的静态final常量。\n可以为不可变对象提供一些静态工厂，将频繁被请求的实例缓存起来，从而不必频繁的创建重复实例。")])]),_._v(" "),v("li",[v("p",[_._v("不需要也不应该为不可变的类提供clone方法或者拷贝构造器。")])]),_._v(" "),v("li",[v("p",[_._v("不仅可以共享不可变对象，甚至也可以共享它们的内部信息。")])]),_._v(" "),v("li",[v("p",[_._v("不可变对象为其他对象提供了大量的构件。例如作为map中的key。")])])]),_._v(" "),v("h3",{attrs:{id:"_2-2-缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-缺点"}},[_._v("#")]),_._v(" 2.2 缺点")]),_._v(" "),v("p",[_._v("对于每个不同的值都需要一个单独的对象。")]),_._v(" "),v("h2",{attrs:{id:"_3-关于不可变对象的其他注意点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-关于不可变对象的其他注意点"}},[_._v("#")]),_._v(" 3. 关于不可变对象的其他注意点")]),_._v(" "),v("ol",[v("li",[v("p",[_._v("关于序列化")]),_._v(" "),v("p",[_._v("如果你选择让你的不可变类实现"),v("code",[_._v("Serializable")]),_._v("接口，并且它包含一个或者多个指向可变对象的域，就必须提供一个显示的"),v("code",[_._v("readObject")]),_._v("或者"),v("code",[_._v("readResolve")]),_._v("方法，或者使用"),v("code",[_._v("ObjectOutputStream.writeUnshared")]),_._v("或者"),v("code",[_._v("ObjectObjectInputStream.readUnshared")]),_._v("方法，即使默认的序列化方式是可以接受的，也是如此。否则，攻击者可能从不可变的类创建可变的实例。")])]),_._v(" "),v("li",[v("p",[_._v("坚决不要为每个"),v("code",[_._v("get")]),_._v("方法编写一个"),v("code",[_._v("set")]),_._v("方法，除非有很好的理由让这个类成为可变的类，否则就应该是不可变的。")])]),_._v(" "),v("li",[v("p",[_._v("如果类是不可变的，除非有充足的理由使域变成非fianl的，否则要使每个域都是final的。")])]),_._v(" "),v("li",[v("p",[_._v("构造器应该创建完全初始化的对象，并建立起所有的约束关系。除非有充足的理由，否则不要在构造器和静态工厂方法之外再提供公有的初始化方法，同样也不要提供”重新初始化”的方法。")])])])])}),[],!1,null,null,null);v.default=e.exports}}]);