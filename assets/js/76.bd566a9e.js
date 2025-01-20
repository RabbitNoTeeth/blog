(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{361:function(e,n,t){"use strict";t.r(n);var r=t(7),a=Object(r.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[n("strong",[e._v("序列化代理模式")])]),e._v(" "),n("p",[e._v("首先，为可序列化的类设计一个私有的静态嵌套类，精确地表示外围类的逻辑状态，这个类被称为序列化代理，它应该有一个单独的构造器，其参数类型就是外围类。这个构造器只从它的参数中复制数据，所以不需要进行约束性检查或者保护性拷贝。外围类和代理类都必须声明实现Serializable接口。")]),e._v(" "),n("p",[n("strong",[e._v("代码示例：")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('public class Period implements Serializable {\n\n    private final Date start;\n    private final Date end;\n\n    public Period(Date start, Date end) {\n        this.start = new Date(start.getTime());\n        this.end = new Date(end.getTime());\n        if(start.compareTo(end)>0){\n            throw new IllegalArgumentException("start can not after end");\n        }\n    }\n\n    public Date getStart() {\n        return new Date(start.getTime());\n    }\n\n    public Date getEnd() {\n        return new Date(end.getTime());\n    }\n\n    @Override\n    public String toString() {\n        return start + " - " + end;\n    }\n\n    private void readObject(ObjectInputStream in) throws InvalidObjectException {\n        //防止攻击者自定义字节流来创建\n        throw new InvalidObjectException("proxy required");\n    }\n    \n    //通过writeReplace,在序列化Period时真正写入的是Proxy代理类\n    private Object writeReplace(){\n        return new Proxy(this);\n    }\n    \n    private static class Proxy implements Serializable{\n        private static final long serialVersionUID = 56443216548798461L;\n\n        private final Date start;\n        private final Date end;\n\n        Proxy(Period period){\n            this.start = period.start;\n            this.end = period.end;\n        }\n        \n        //在反序列化代理类时,返回真正的Period实例\n        private Object readResolve(){\n            return new Period(start,end);\n        }\n    }\n\n}\n')])])]),n("p",[e._v("上面外围类的writeReplace()方法实现了在序列化Period类时反转为序列化其代理类，此时序列化完毕后的字节流其实是代理类。而在反序列化该字节流时，会调用代理类的readResolve方法，将返回值反转为Period类。")])])}),[],!1,null,null,null);n.default=a.exports}}]);