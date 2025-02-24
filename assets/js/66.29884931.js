(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{353:function(n,t,e){"use strict";e.r(t);var s=e(7),a=Object(s.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"_1-重载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-重载"}},[n._v("#")]),n._v(" 1. 重载")]),n._v(" "),t("p",[n._v("考虑下面的代码程序会输出什么结果：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('//代码清单1\npublic class CollectionClassifier {\n    \n    public static String calssify(Set<?> set){\n        return "Set";\n    }\n\n    public static String calssify(List<?> set){\n        return "List";\n    }\n\n    public static String calssify(Collection<?> set){\n        return "Unknown Collection type";\n    }\n\n    public static void main(String[] args) {\n        Collection<?>[] collections = {new HashSet<>(),new ArrayList<>(),new HashMap<String,String>().values()};\n        for(Collection<?> collection:collections){\n            System.out.println(calssify(collection));\n        }\n    }\n    \n}\n')])])]),t("p",[n._v("我们期望的打印结果是:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("Set\nList\nUnknown Collection type\n")])])]),t("p",[n._v("但是实际输出结果是:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("Unknown Collection type \nUnknown Collection type \nUnknown Collection type\n")])])]),t("p",[t("strong",[n._v("这是为什么呢?")])]),n._v(" "),t("p",[n._v("首先，代码清单1中classify方法有三个重载版本，collections数组中的元素在编译时期的类型都是Collection<?>，而"),t("strong",[n._v("重载方法的选择是静态的")]),n._v("，"),t("strong",[n._v("也就是根据编译时期的参数类型选择")]),n._v("，所以迭代循环中每次都会调用classify的第三个重载方法。")]),n._v(" "),t("h2",{attrs:{id:"_2-覆盖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-覆盖"}},[n._v("#")]),n._v(" 2. 覆盖")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('//代码清单2\nclass Person{\n    String name(){\n        return "Person";\n    }\n}\n\nclass Male extends Person{\n    @Override\n    String name() {\n        return "Male";\n    }\n}\n\nclass Female extends Person{\n    @Override\n    String name() {\n        return "Female";\n    }\n}\n\npublic class OverrideDemo {\n\n    public static void main(String[] args) {\n        Person[] people = {new Person(),new Male(),new Female()};\n        for (Person person:people){\n            System.out.println(person.name());\n        }\n    }\n}\n\n输出结果:\nPerson\nMale\nFemale\n')])])]),t("p",[n._v("上述程序打印出了我们想要的结果，这是因为"),t("strong",[n._v("覆盖(override)方法的选择是动态的，是根据运行时期的类型来选择")]),n._v("最具体化的版本。")]),n._v(" "),t("p",[n._v("通过代码清单1，可以看到对于重载的错误使用可能导致预期之外的结果，从而使程序失败。所以，在使用重载时，一定要谨慎。")]),n._v(" "),t("h2",{attrs:{id:"_3-补充"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-补充"}},[n._v("#")]),n._v(" 3. 补充")]),n._v(" "),t("p",[n._v("作为补充，这里有一个由于自动装箱和拆箱引起的典型错误示例：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('//代码清单3\npublic class SetListDemo {\n\n    public static void main(String[] args) {\n        Set<Integer> set = new HashSet<>();\n        List<Integer> list = new ArrayList<>();\n\n        for(int i=-3;i<3;i++){\n            set.add(i);\n            list.add(i);\n        }\n\n        for(int i=0;i<3;i++){\n            set.remove(i);\n            list.remove(i);\n        }\n\n        System.out.println("set = " + set);\n        System.out.println(" list = " + list);\n    }\n\n}\n')])])]),t("p",[n._v("此示例中,我们期望打印结果中,set和list中都剩下 -3、-2、-1 三个元素，但是实际输出结果为：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("set = [-1, -2, -3] \nlist = [-2, 0, 2]\n")])])]),t("p",[t("strong",[n._v("这是为什么呢?")])]),n._v(" "),t("p",[n._v("对于set，remove方法只有一个版本，参数类型为Object，for循环中i会被自动装箱为Integer类型，从set中成功删除，所以set得输出结果是我们期望的。\n但是对于list，其remove方法有不同的重载版本，一种参数类型是E，直接删除参数对象；另一种是int，根据角标位置删除元素。在for循环中，i值没有被自动装箱，而是自动匹配了根据角标删除元素的remove方法，所以输出结果不是我们期望的。")]),n._v(" "),t("p",[t("strong",[n._v("如何解决?")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("for(int i=0;i<3;i++){\n    set.remove(i);\n    list.remove((Integer) i);\t//显式的进行装箱,匹配list的元素类型\n}\n\n输出结果:\nset = [-1, -2, -3]\nlist = [-3, -2, -1]\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);