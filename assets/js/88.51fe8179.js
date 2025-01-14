(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{374:function(n,t,a){"use strict";a.r(t);var e=a(7),s=Object(e.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("p",[n._v("在设计并发的应用程序时，最重要的考虑因素通常不是将程序的性能提升至极致，而是始终要把安全性放在第一位，首先要保证程序能正确运行，然后仅当程序的性能要求和测试结果要求程序执行得更快时，才应该设法提高它的运行速度。")]),n._v(" "),t("h2",{attrs:{id:"_1-对性能的思考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-对性能的思考"}},[n._v("#")]),n._v(" 1. 对性能的思考")]),n._v(" "),t("p",[n._v("当操作性能由于某种特定的资源而受到限制时，我们通常将该操作称为资源密集型的操作，例如: CPU密集型、数据库密集型等。")]),n._v(" "),t("p",[n._v("使用多个线程总会引入一些额外的性能开销，包括：线程之间的协调（例如加锁、触发信号以及内存同步等）、增加的上下文切换、线程的创建和销毁、以及线程的调度等。")]),n._v(" "),t("h3",{attrs:{id:"_1-1-性能与可伸缩性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-性能与可伸缩性"}},[n._v("#")]),n._v(" 1.1 性能与可伸缩性")]),n._v(" "),t("p",[n._v("可伸缩性指的是：当增加计算资源时（例如CPU、内存、存储容量或I/O带宽），程序的吞吐量或者处理能力相应的增加。")]),n._v(" "),t("p",[n._v("避免不成熟的优化。首先使程序正确，然后再提高运行速度（如果它还运行的不够快）。")]),n._v(" "),t("h3",{attrs:{id:"_1-2-amdahl定律"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-amdahl定律"}},[n._v("#")]),n._v(" 1.2 Amdahl定律")]),n._v(" "),t("p",[n._v("Amdahl定律描述的是：在增加计算资源的情况下，程序在理论上能够实现最高加速比，这个值取决于程序中可并行组件与串行总线所占的比重。")]),n._v(" "),t("p",[n._v("假定F是必须被串行执行的部分，那么根据Amdahl定律，在包含N个处理器的机器中，最高的加速比为\n$$\nSpeeddup \\leq 1 \\div ( F + (1-F)\\div N )\n$$")]),n._v(" "),t("h2",{attrs:{id:"_2-线程引入的开销"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-线程引入的开销"}},[n._v("#")]),n._v(" 2. 线程引入的开销")]),n._v(" "),t("p",[t("strong",[n._v("上下文切换")])]),n._v(" "),t("p",[n._v("如果可运行的线程数大于CPU的数量，那么操作系统最终会将某个正在运行的线程调度出来，从而使其他线程能够使用CPU，这将导致一次上下文切换，在这个过程中将保存当前运行线程的执行上下文，并将新调度进来的线程的执行上下文设置为当前上下文。")]),n._v(" "),t("p",[n._v("当一个新的线程被切换进来时，它所需要的数据可能不在当前处理器的本地缓存中，因此上下文切换将导致一些缓存缺失，因而线程在首次调度运行时会更加缓慢。这就是为什么调度器会为每个可运行的线程分配一个最小执行时间，即使有许多其他的线程正在等待执行，它将上下文切换的开销分摊到更多不会中断的执行时间上，从而提高整体的吞吐量（以损失响应性为代价）。")]),n._v(" "),t("p",[n._v("当线程由于等待某个发生竞争的锁而被阻塞时，JVM通常会将这个线程挂起，并允许它被交换出去，如果线程频繁的发生阻塞，那么它们将无法使用完整的调度时间片，在程序中发生越多的阻塞，与CPU密集型的程序会发生越多的上下文切换，从而增加调度开销，并因此而降低吞吐量。")]),n._v(" "),t("p",[n._v("在大多数通用的处理器中，上下文切换的开销相当于5000~10000个时钟周期，也就是几微秒。")]),n._v(" "),t("h2",{attrs:{id:"_3-减少锁的竞争"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-减少锁的竞争"}},[n._v("#")]),n._v(" 3. 减少锁的竞争")]),n._v(" "),t("p",[n._v("并发程序中，对可伸缩性的最主要威胁就是独占方式的资源锁。")]),n._v(" "),t("p",[n._v("有3种方式可以降低锁的竞争程度：")]),n._v(" "),t("ol",[t("li",[n._v("减少锁的持有时间")]),n._v(" "),t("li",[n._v("降低锁的请求频率")]),n._v(" "),t("li",[n._v("使用带有协调机制的独占锁")])]),n._v(" "),t("h3",{attrs:{id:"_3-1-缩小锁的范围-快进快出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-缩小锁的范围-快进快出"}},[n._v("#")]),n._v(" 3.1 缩小锁的范围（快进快出）")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('****** 程序清单11-4 将一个锁不必要的持有过长时间 ******\n\npublic class AttributeStore{\n    @GuardeBy("this")\n    private final Map<String,String> attributes = new HashMap<>();\n    public synchronized boolean userLocationMatches(String name,String reg){\n        String key = "users." + name + ".location";\n        String location = attributes.get(key);\n        if(location==null){\n            return false;\n        }\n        return Pattern.matches(reg,location);\n    }\n}\n****** 程序清单11-5 减少锁的持有时间 ******\n\npublic class AttributeStore{\n    @GuardeBy("this")\n    private final Map<String,String> attributes = new HashMap<>();\n    public boolean userLocationMatches(String name,String reg){\n        String key = "users." + name + ".location";\n        String location;\n        synchronized(this){\n            location = attributes.get(key);\n        }\n        if(location==null){\n            return false;\n        }\n        return Pattern.matches(reg,location);\n    }\n}\n')])])]),t("p",[n._v("在分解同步代码快时，理想的平衡点将与平台相关，但在实际情况中，仅当可以将一些”大量”的计算或者阻塞操作从同步代码块中移出时，才应该考虑同步代码快的大小。")]),n._v(" "),t("h3",{attrs:{id:"_3-2-减小锁的粒度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-减小锁的粒度"}},[n._v("#")]),n._v(" 3.2 减小锁的粒度")]),n._v(" "),t("p",[n._v("也就是降低线程请求锁的频率。这可以通过锁分解和锁分段等技术来实现，在这些技术中将采用多个相互独立的锁来保护独立的状态变量，从而改变这些变量在之前由单个锁来保护的情况。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('****** 程序清单11-6 对锁进行分解 ******\n\npublic class ServerStatus{\n    @GuardeBy("this")\n    public final Set<String> users = new HashSet<>();\n    @GuardeBy("this")\n    public final Set<String> locations = new HashSet<>();\n    \n    public synchronized void addUser(String user){\n        users.add(user);\n    }\n\n    public synchronized void addLocation(String location){\n        locations.add(location);\n    }\n}\n****** 程序清单11-7 将ServerStatus重新改写为使用锁分解技术 ******\n\npublic class ServerStatus{\n    @GuardeBy("user")\n    public final Set<String> users = new HashSet<>();\n    @GuardeBy("location")\n    public final Set<String> locations = new HashSet<>();\n\n    public void addUser(String user){\n        synchronized (user){\n            users.add(user);\n        }\n    }\n\n    public void addLocation(String location){\n        synchronized (location){\n            locations.add(location);\n        }\n    }\n}\n')])])]),t("p",[n._v("如果在锁上存在适中而不是激烈的竞争时，通过将一个锁分解为两个锁，能最大限度地提升性能。")]),n._v(" "),t("h3",{attrs:{id:"_3-3-锁分段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-锁分段"}},[n._v("#")]),n._v(" 3.3 锁分段")]),n._v(" "),t("p",[n._v("在某些情况下，可以将锁分解技术进一步扩展为对一组独立对象上的锁进行分解，这种情况被称为锁分段。")]),n._v(" "),t("p",[n._v("例如，在"),t("code",[n._v("ConcurrentHashMap")]),n._v("的实现中使用了一个包含16个锁的数组，每个锁保护散列桶的1/16，其中第N个散列桶由第(N mod 16)个锁来保护。假设散列函数具有合理的分布性，并且关键字能够实现均匀分布，那么这大约能把对于锁的请求减少到原来的1/16。正是这项技术使得"),t("code",[n._v("ConcurrentHashMap")]),n._v("能够支持多达16个并发的写入器。")]),n._v(" "),t("p",[n._v("锁分段的一个劣势在于：与采用单个锁来实现独占访问相比，要获取多个锁来实现独占访问将更加困难，并且开销更高。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("****** 程序清单11-8 在基于散列的Map中使用锁分段技术 ******\n\npublic class StripeMap{\n    private static final int N_LOCKS = 16;\n    private final Node[] buckets;\n    private final Object[] locks;\n    \n    public StripeMap(int numBuckets){\n        buckets = new Node[numBuckets];\n        locks = new Object[N_LOCKS];\n        for(int i=0;i<N_LOCKS;i++){\n            locks[i] = new Object();\n        }\n    }\n    \n    private final int hash(Object key){\n        return Math.abs(key.hashCode() % buckets.length);\n    }\n    \n    public Object get(Object key){\n        int hash = hash(key);\n        synchronized (locks[hash % N_LOCKS]){\n            for(Node m = buckets[hash];m!=null;m=m.next){\n                if(m.key.equals(key)){\n                    return m.value;\n                }\n            }\n        }\n        return null;\n    }\n    \n    public void clear(){\n        for(int i=0;i<buckets.length;i++){\n            synchronized (locks[i % N_LOCKS]){\n                buckets[i] = null;\n            }\n        }\n    }\n}\n")])])]),t("h3",{attrs:{id:"_3-4-避免热点域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-避免热点域"}},[n._v("#")]),n._v(" 3.4 避免热点域")]),n._v(" "),t("p",[n._v("如果程序采用锁分段技术，那么一定要表现出在锁上的竞争频率高于在锁保护的数据上发生竞争的频率。")]),n._v(" "),t("p",[n._v("当每个操作都请求多个变量时，锁的粒度将很难降低，一种常见的优化措施是将一些反复计算的结果缓存起来，即引入”热点域”，而这种热点域往往会限制可伸缩性。")]),n._v(" "),t("p",[n._v("为了避免热点域的问题，"),t("code",[n._v("ConcurrentHashMap")]),n._v("中的size方法将对每个分段进行枚举并将每个分段中的元素数量相加，而不是维护一个全局计数。为了避免枚举每个元素，"),t("code",[n._v("ConcurrentHashMap")]),n._v("为每个分段维护了一个独立的计数，并通过每个分段的锁来维护这个值。")]),n._v(" "),t("h3",{attrs:{id:"_3-5-一些替代独占锁的方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-一些替代独占锁的方法"}},[n._v("#")]),n._v(" 3.5 一些替代独占锁的方法")]),n._v(" "),t("p",[n._v("第三种降低竞争锁的影响的技术就是放弃使用独占锁。例如，使用并发容器、读-写锁、不可变对象、原子变量等。")])])}),[],!1,null,null,null);t.default=s.exports}}]);