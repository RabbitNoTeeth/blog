(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{380:function(n,t,e){"use strict";e.r(t);var i=e(7),a=Object(i.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("p",[n._v("在设计线程安全类的过程中，需要包括以下三个基本要素：")]),n._v(" "),t("ul",[t("li",[n._v("找出构成对象状态的所有变量。")]),n._v(" "),t("li",[n._v("找出约束状态变量的不变性条件。")]),n._v(" "),t("li",[n._v("简历对象状态的并发访问管理策略。")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('****** 程序清单3-1 使用java监视器模式的线程安全计数器 ******\n\n@ThreadSafe\npublic final class Counter{\n    \n    @GuardeBy("this")\n    private long count = 0;\n\n\n    public synchronized long getCount() {\n        if(count==Long.MAX_VALUE)\n            throw new RuntimeException();\n        return count;\n    }\n\n    public synchronized void setCount(long count) {\n        this.count = count;\n    }\n}\n')])])]),t("p",[t("strong",[n._v("收集同步需求")])]),n._v(" "),t("p",[n._v("对象与变量都有一个状态空间，即所有可能的取值。状态空间越小，就越容易判断线程的状态。final类型的域使用的越多，就越能简化对象可能状态的分析过程。\n由于不变性条件以及后验条件在状态以及状态转换上施加了各种约束，因此就需要额外的同步与封装。如果某些状态是无效的，那么必须对底层的状态变量进行封装。如果在某个操作中存在无效的状态转换，那么该操作必须是原子的。\n如果在一个不变性条件中包含多个变量，那么这些变量必须在单个原子操作中进行读取或者更新。不能首先更新一个变量，然后释放锁并再次获得锁，然后再更新其他变量。")]),n._v(" "),t("p",[t("strong",[n._v("依赖状态的操作")])]),n._v(" "),t("p",[n._v("如果在某个操作中包含有基于状态的先验条件，那么这个操作就称为依赖状态的操作。在并发程序中要一直等到先验条件为真，然后再执行操作。")]),n._v(" "),t("h2",{attrs:{id:"_1-实例封闭"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-实例封闭"}},[n._v("#")]),n._v(" 1. 实例封闭")]),n._v(" "),t("p",[n._v("实例封闭是构建线程安全类的一个最简单方式。将数据封装在对象内部，可以将数据的访问限制在对象的方法上，从而更容易确保线程在访问数据时总能持有正确的锁。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('****** 程序清单4-2 通过封闭机制来确保线程安全 ******\n\n@ThreadSafe\npublic class PersonSet{\n    @GuardeBy("this")\n    private final Set<Person> mySet = new HashSet<>();\n    \n    public synchronized void addPerson(Person person){\n        mySet.add(person);\n    }\n    \n    public synchronized boolean containsPerson(Person person){\n        return mySet.contains(person);\n    }\n}\n')])])]),t("h2",{attrs:{id:"_2-监视器模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-监视器模式"}},[n._v("#")]),n._v(" 2. 监视器模式")]),n._v(" "),t("p",[n._v("遵循Java监视器模式的对象会把对象的所有可变状态都封装起来，并由对象自己的内置锁来保护。并且私有的锁对象可以将锁封装起来，使客户代码无法获得锁。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('****** 程序清单4-3 通过一个私有锁来保护状态 ******\n\npublic class PrivateLock{\n    private final Object myLock = new Object();\n    @GuardeBy("this")\n    Widget widget;\n    \n    void someMethod(){\n        synchronized (myLock){\n            ...访问或者修改widget的状态\n        }\n    }\n}\n')])])]),t("h3",{attrs:{id:"_2-1-示例-车辆追踪"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-示例-车辆追踪"}},[n._v("#")]),n._v(" 2.1 示例：车辆追踪")]),n._v(" "),t("p",[n._v("每台车都由一个String对象来标识，并且拥有一个相应的位置坐标(x,y)。在CarTracker类中封装了车辆的标识和位置，该数据模型将由一个视图线程和多个执行更新操作的线程共享。视图线程会读取车辆的名字和位置，并且将它们显示在界面上。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("Map<String,Point> locations = cars.getLocations();\nfor(String key:locations.keySet()){\n    renderCars(key,locations.get(key));\n}\n")])])]),t("p",[n._v("类似的，执行更新操作的线程通过从gps设备上获取的数据或者调度员从gui界面上输入的数据来修改车辆的位置")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("void carMoved(CarMoveEvent event){\n    Point loc = event.getNewLocation();\n    cars.setLocation(event.getCarId(),loc.x,loc.y);\n}\n")])])]),t("p",[n._v("视图线程和执行更新操作的线程将并发的访问数据模型，因此该模型必须是线程安全的。程序清单4-4给出了一个基于java监视器模式实现的车辆追踪器，并使用程序清单4-5中的MutablePoint来表示车辆的位置。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('****** 程序清单4-4 基于监视器模式的车辆追踪 ******\n\n@ThreadSafe\npublic class MonitorCarTracker{\n    @@GuardeBy("this")\n    private final Map<String,MutablePoint> locations;\n    \n    public MonitorCarTracker(Map<String,MutablePoint> locations){\n        this.locations = locations;\n    }\n    \n    public synchronized Map<String,MutablePoint> getLocations(){\n        return deepCopy(locations);\n    }\n    \n    public synchronized MutablePoint getLocation(String id){\n        return locations.get(id);\n    }\n    \n    public synchronized void setLocation(String id,int x,int y){\n        MutablePoint loc = locations.get(id);\n        if(loc==null){\n            throw new RuntimeException();\n        }\n        loc.x = x;\n        loc.y = y;\n    }\n    \n    private static Map<String,MutablePoint> deepCopy(Map<String,MutablePoint> map){\n        Map<String,MutablePoint> result = new HashMap<>();\n        for(String id:map.keySet()){\n            result.put(id,map.get(id));\n        }\n        return Collections.unmodifiableMap(result);\n    }\n    \n}\n****** 程序清单4-5 表示车辆位置的数据模型 ******\n\npublic class MutablePoint{\n    public int x,y;\n    public MutablePoint(){\n        x=0;\n        y=0;\n    }\n    public MutablePoint(MutablePoint p){\n        this.x = p.x;\n        this.y = p.y;\n    }\n    \n}\n')])])]),t("p",[n._v("上述实现方式是通过在返回客户代码之前复制可变的数据来维持线程安全的。一般情况，这不存在性能问题，但是当车辆容器非常大时，将极大的降低性能。此外，由于每次调用getLocations就要复制数据，因此也会出现一种错误情况：虽然车辆的实际位置发生了变化，但是返回的信息却保持不变。")]),n._v(" "),t("h2",{attrs:{id:"_3-线程安全性的委托"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-线程安全性的委托"}},[n._v("#")]),n._v(" 3. 线程安全性的委托")]),n._v(" "),t("h3",{attrs:{id:"_3-1-示例-基于委托的车辆追踪器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-示例-基于委托的车辆追踪器"}},[n._v("#")]),n._v(" 3.1 示例：基于委托的车辆追踪器")]),n._v(" "),t("p",[n._v("下面要对上边的车辆追踪器进行优化，构造一个委托给线程安全类的车辆追踪器。我们将车辆的位置保存到线程安全的ConcurrentHashMap中，同时用一个不可变的Point替代MutablePoint。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('****** 程序清单4-6 不可变的Point ******\n\npublic class Point{\n    public final int x,y;\n    public Point(int x,int y){\n        this.x = x;\n        this.y = y;\n    }\n}\n****** 程序清单4-7 将线程安全委托给ConcurrentHashMap ******\n\n@ThreadSafe\npublic class DelegatingCarTracker{\n    @GuardeBy("this")\n    private final ConcurrentMap<String,Point> locations;\n    private final Map<String,Point> unmodifiableMap;\n\n\n    public DelegatingCarTracker(Map<String,Point> points){\n        locations = new ConcurrentHashMap<>(points);\n        unmodifiableMap = Collections.unmodifiableMap(locations);\n    }\n\n    public Map<String,Point> getLocations(){\n        return unmodifiableMap;\n    }\n\n    public synchronized MutablePoint getLocation(String id){\n        return locations.get(id);\n    }\n\n    public void setLocation(String id,int x,int y){\n        if(locations.replace(id,new Point(x,y))==null){\n            throw new RuntimeException();\n        }\n    }\n\n}\n')])])]),t("p",[n._v("在使用委托的追踪器中，如果线程A调用getLocations，而线程B在随后修改了某些点的位置，那么返回给A的Map中将反映出这些变化。")]),n._v(" "),t("h3",{attrs:{id:"_3-2-独立的状态变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-独立的状态变量"}},[n._v("#")]),n._v(" 3.2 独立的状态变量")]),n._v(" "),t("p",[n._v("我们可以将线程安全性委托给多个状态变量，只要这些变量是彼此独立的。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("****** 程序清单4-9 将线程安全性委托给多个变量 ******\n\npublic class VisualComponent{\n    private final List<KeyListener> keyListeners = new CopyOnWriteArrayList<>();\n    private final List<MouseListener> mouseListeners = new CopyOnWriteArrayList<>();\n    \n    public void addKeyListener(KeyListener keyListener){\n        keyListeners.add(keyListener);\n    }\n\n    public void addMouseListener(MouseListener mouseListener){\n        mouseListeners.add(mouseListener);\n    }\n    \n    public void removeKeyListener(KeyListener keyListener){\n        keyListeners.remove(keyListener);\n    }\n\n    public void removeMouseListener(MouseListener mouseListener){\n        mouseListeners.remove(mouseListener);\n    }\n}\n")])])]),t("p",[n._v("VisualComponent使用CopyOnWriteArrayList来管理保存各个监听器列表，它是一个线程安全的链表。")]),n._v(" "),t("h3",{attrs:{id:"_3-3-当委托失效时"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-当委托失效时"}},[n._v("#")]),n._v(" 3.3 当委托失效时")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('****** 程序清单4-10 委托失效的NumberRange ******\n\npublic class NumberRange{\n    // 不变性条件 lower<=upper\n    private final AtomicInteger lower = new AtomicInteger();\n    private final AtomicInteger upper = new AtomicInteger();\n    \n    public void setLower(int i){\n        // 不安全的"先检查后执行"\n        if(i>upper.get())\n            throw new RuntimeException();\n        lower.set(i);\n    }\n\n    public void setUpper(int i){\n        // 不安全的"先检查后执行"\n        if(i<lower.get())\n            throw new RuntimeException();\n        upper.set(i);\n    }\n}\n')])])]),t("p",[n._v("虽然NumberRange中将两个变量进行了委托，但是因为两个变量彼此不是独立的，都参与到了不变性条件中，所以setLower和SetUpper在没有足够的加锁机制下都不能保证操作的原子性，也就不能维持不变性条件。\n得出结论：如果一个类是由多个独立且线程安全的状态变量组成，并且在所有的操作中都不包含无效状态转换，那么可以将线程安全性委托给底层的状态变量。")]),n._v(" "),t("h3",{attrs:{id:"_3-4-发布底层的状态变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-发布底层的状态变量"}},[n._v("#")]),n._v(" 3.4 发布底层的状态变量")]),n._v(" "),t("p",[n._v("如果一个状态变量是线程安全的，并且没有任何不变性条件来约束它的值，在变量的操作上也不存在任何不允许的状态转换，那么就可以安全的发布这个变量。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('****** 程序清单4-11 线程安全且可变的Point类 ******\n\n@ThreadSafe\npublic class SafePoint{\n    @GuardeBy("this")\n    private int x,y;\n    \n    private SafePoint(int[] a){\n        this(a[0],a[1]);\n    }\n    \n    public SafePoint(SafePoint p){\n        this(p.get());\n    }\n\n    public SafePoint(int x,int y){\n        this.x = x;\n        this.y = y;\n    }\n\n    private int[] get() {\n        return new int[]{x,y};\n    }\n    \n    public synchronized void set(int x,int y){\n        this.x = x;\n        this.y = y;\n    }\n    \n}\n****** 程序清单4-12 安全发布底层状态的车辆追踪器 ******\n\n@ThreadSafe\npublic class PublishingCarTracker{\n    private final Map<String,SafePoint> locations;\n    private final Map<String,SafePoint> unmodifiableMap;\n\n\n    public PublishingCarTracker(Map<String,Point> points){\n        locations = new ConcurrentHashMap<>(points);\n        unmodifiableMap = Collections.unmodifiableMap(locations);\n    }\n\n    public Map<String,Point> getLocations(){\n        return unmodifiableMap;\n    }\n\n    public synchronized MutablePoint getLocation(String id){\n        return locations.get(id);\n    }\n\n    public void setLocation(String id,int x,int y){\n        if(!locations.containsKey(id)){\n            throw new RuntimeException();\n        }\n        locations.get(id).set(x,y);\n    }\n\n}\n')])])]),t("p",[n._v("PublishingCarTracker使用了线程安全且可变的SafePoint，这样就可以将其发布出去，调用者不用增加或者删除车辆，可以直接通过setLocation来改变车辆的位置，并且实时的体现在getLocations的返回Map中。")]),n._v(" "),t("h2",{attrs:{id:"_4-在现有的安全类中添加功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-在现有的安全类中添加功能"}},[n._v("#")]),n._v(" 4. 在现有的安全类中添加功能")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('****** 程序清单4-14 非线程安全的"若没有则添加" ******\n\npublic class ListHelper<T>{\n    public List<T> list = Collections.synchronizedList(new ArrayList<>());\n    \n    public synchronized boolean putIfAbsent(T t){\n        boolean absent = !list.contains(t);\n        if(absent){\n            list.add(t);\n        }\n        return absent;\n    }\n}\n')])])]),t("p",[n._v("ListHelper中，putIfAbsent只是带来了同步的假象，因为list本身是同步的，而其使用的锁与putIfAbsent方法的锁必定不是同一个锁，所以无法确保当putIfAbsent方法执行时另一个线程不会修改链表。")]),n._v(" "),t("h3",{attrs:{id:"_4-1-客户端加锁机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-客户端加锁机制"}},[n._v("#")]),n._v(" 4.1 客户端加锁机制")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('****** 程序清单4-15 通过客户端加锁来实现"若没有则添加" ******\n\npublic class ListHelper<T>{\n    public List<T> list = Collections.synchronizedList(new ArrayList<>());\n\n    public boolean putIfAbsent(T t){\n        synchronized(list){\n            boolean absent = !list.contains(t);\n            if(absent){\n                list.add(t);\n            }\n            return absent;\n        }\n    }\n}\n')])])]),t("h3",{attrs:{id:"_4-2-组合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-组合"}},[n._v("#")]),n._v(" 4.2 组合")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('****** 程序清单4-16 通过组合来实现"若没有则添加" ******\n\npublic class ListHelper<T> implements List<T>{\n    private final List<T> list ;\n    \n    public ListHelper(List<T> list){\n        this.list = list;\n    }\n\n    public synchronized boolean putIfAbsent(T t){\n        boolean absent = !list.contains(t);\n        if(absent){\n            list.add(t);\n        }\n        return absent;\n    }\n}\n')])])]),t("p",[n._v("此处的ListHelper通过自身的内置锁增加了一层额外的加锁，无论底层的list是否是线程安全的，其都能提供一致的加锁机制来实现线程安全性。")])])}),[],!1,null,null,null);t.default=a.exports}}]);