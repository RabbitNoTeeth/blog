(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{344:function(e,n,t){"use strict";t.r(n);var a=t(7),d=Object(a.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"_1-继承"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-继承"}},[e._v("#")]),e._v(" 1. 继承")]),e._v(" "),n("p",[e._v("在包的内部使用继承是非常安全的，但是，对于普通的具体类，进行跨越包边界的继承，则是非常危险的。\n继承打破了封装性，超类的实现可能随着发行版本的不同而变化，如果真的发生了变化，那么子类可能会遭到破坏。")]),e._v(" "),n("p",[e._v("我们先来看一个错误使用继承的示例：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("public class MyHashSet<E> extends HashSet<E> {\n    \n    private int addCount;\n\n    @Override\n    public boolean add(E e) {\n        addCount++;\n        return super.add(e);\n    }\n\n    @Override\n    public boolean addAll(Collection<? extends E> c) {\n        addCount += c.size();\n        return super.addAll(c);\n    }\n\n    public int getAddCount() {\n        return addCount;\n    }\n}\n")])])]),n("p",[e._v("上述代码示例中，"),n("code",[e._v("MyHashSet")]),e._v("继承了"),n("code",[e._v("HashSet")]),e._v("，覆写了"),n("code",[e._v("add")]),e._v("和"),n("code",[e._v("addAll")]),e._v("方法，加入自己的一个计数功能逻辑。但我们调用"),n("code",[e._v("addAll")]),e._v("方法来传入一个含有3个元素的集合时，我们期望调用"),n("code",[e._v("getAddCount()")]),e._v("方法的返回值为3，但是实际返回值为6。这是为什么呢？原因是"),n("code",[e._v("HashSet")]),e._v("中，"),n("code",[e._v("addAll")]),e._v("方法的实现是对"),n("code",[e._v("add")]),e._v("方法的循环调用，所以"),n("code",[e._v("addCount")]),e._v("会变为6。")]),e._v(" "),n("p",[e._v("上述示例简单的说明了，继承带来的某种风险，那就是当子类方法依赖父类的方法时，如果父类方法发生了变化，或者对于父类方法的调用不正确，不了解父类方法的实现逻辑，那么就会引起子类无法正常工作。")]),e._v(" "),n("h2",{attrs:{id:"_2-复合"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-复合"}},[e._v("#")]),e._v(" 2. 复合")]),e._v(" "),n("p",[e._v("幸运的是，有一种方法可以避免上面提到的继承带来的种种风险。不需要扩展现有的类，而是在新的类中增加一个私有域，它引用现有类的一个实例，这种设计被称为”复合”。")]),e._v(" "),n("p",[e._v("使用复合来修正上述代码示例：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("public class MyHashSet<E>  {\n    \n    private final Set<E> set = new HashSet<>();\n\n    private int addCount;\n\n    public boolean add(E e) {\n        addCount++;\n        return set.add(e);\n    }\n\n    public boolean addAll(Collection<? extends E> c) {\n        addCount += c.size();\n        return set.addAll(c);\n    }\n\n    public int getAddCount() {\n        return addCount;\n    }\n}\n")])])]),n("p",[n("code",[e._v("MyHashSet")]),e._v("中"),n("code",[e._v("add")]),e._v("和"),n("code",[e._v("addAll")]),e._v("方法的调用都转发给了内部"),n("code",[e._v("HashSet")]),e._v("，这样的方法被称为转发方法。"),n("code",[e._v("MyHashSet")]),e._v("也可以称为包装类。")]),e._v(" "),n("p",[e._v("注意：包装类不适合用在回调框架中，因为在回调框架中，对象通过"),n("code",[e._v("this")]),e._v("把自身的引用传递给其他对象，用于后续的调用。如果是在包装类中，this传递便是包装类，而不是所需要的对象本身。")]),e._v(" "),n("p",[n("strong",[e._v("小结")])]),e._v(" "),n("p",[e._v("只有当子类和超类之间存在子类型关系时，才应该使用继承。否则，优先考虑包装类，因为包装类不仅比子类更加健壮，而且功能也更加强大。")])])}),[],!1,null,null,null);n.default=d.exports}}]);