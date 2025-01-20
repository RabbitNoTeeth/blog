(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{366:function(n,t,e){"use strict";e.r(t);var a=e(7),i=Object(a.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("p",[t("img",{attrs:{src:"/img/java/javase/collection/5.1.png",alt:""}})]),n._v(" "),t("h2",{attrs:{id:"_1-linkedblockingqueue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-linkedblockingqueue"}},[n._v("#")]),n._v(" 1. LinkedBlockingQueue")]),n._v(" "),t("p",[n._v("LinkedBlockingQueue是一个基于链表实现的阻塞队列，先进先出顺序，是构建生产者-消费者模式的首选构件。")]),n._v(" "),t("h3",{attrs:{id:"_1-1-内部实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-内部实现"}},[n._v("#")]),n._v(" 1.1 内部实现")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("/**\n * 内部数据结构通过单向链表实现\n * @param <E>\n */\nstatic class Node<E> {\n    E item;\n    Node<E> next;\n    Node(E x) { item = x; }\n}\n\n/**\n * 内部链表长度,默认为int的最大值\n */\nprivate final int capacity;\n\n/**\n * 当前链表元素个数\n */\nprivate final AtomicInteger count = new AtomicInteger();\n\n/**\n * 链表头结点,其item永远为null\n */\ntransient Node<E> head;\n\n/**\n * 链表尾节点,其item永远为null\n */\nprivate transient Node<E> last;\n\n/**\n * 元素出列持有的锁\n */\nprivate final ReentrantLock takeLock = new ReentrantLock();\n\n/**\n * 当链表为空时,该condition使所有的取出元素线程等待\n */\nprivate final Condition notEmpty = takeLock.newCondition();\n\n/**\n * 元素入列持有的锁\n */\nprivate final ReentrantLock putLock = new ReentrantLock();\n\n/**\n * 当链表为满时,该condition是所有放入元素的线程等待\n */\nprivate final Condition notFull = putLock.newCondition();\n")])])]),t("h3",{attrs:{id:"_1-2-构造函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-构造函数"}},[n._v("#")]),n._v(" 1.2 构造函数")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('/**\n * 创建默认长度的链表\n */\npublic LinkedBlockingQueue() {\n    this(Integer.MAX_VALUE);\n}\n\n/**\n * 创建指定长度的链表,链表初始化时,首尾节点为同一个节点,其item为null,这是不变的.\n * @param capacity\n */\npublic LinkedBlockingQueue(int capacity) {\n    if (capacity <= 0) throw new IllegalArgumentException();\n    this.capacity = capacity;\n    last = head = new Node<E>(null);\n}\n\n/**\n * 根据给定集合创建链表\n * @param c\n */\npublic LinkedBlockingQueue(Collection<? extends E> c) {\n    this(Integer.MAX_VALUE);    //创建默认大小的链表\n    final ReentrantLock putLock = this.putLock;\n    putLock.lock(); // Never contended, but necessary for visibility\n    try {\n        int n = 0;\n        for (E e : c) {\n            if (e == null)\n                throw new NullPointerException();\n            if (n == capacity)\n                throw new IllegalStateException("Queue full");\n            enqueue(new Node<E>(e));\n            ++n;\n        }\n        count.set(n);\n    } finally {\n        putLock.unlock();\n    }\n}\n')])])]),t("h3",{attrs:{id:"_1-3-入栈和出栈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-入栈和出栈"}},[n._v("#")]),n._v(" 1.3 入栈和出栈")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("/**\n * 元素入栈\n * @param node\n */\nprivate void enqueue(Node<E> node) {\n    //将新节点作为尾节点,同时将旧尾节点的next指针指向新的尾节点\n    last = last.next = node;\n}\n\n/**\n * 元素出栈\n * @return\n */\nprivate E dequeue() {\n    //获取当前首节点\n    Node<E> h = head;\n    //新的首节点为h的next节点\n    Node<E> first = h.next;\n    //更新旧首节点的引用,防止出现过期引用\n    h.next = h; // help GC\n    //更新首节点\n    head = first;\n    //获取首节点中的元素,在LinkedBlockingQueue中,第一个元素是保存在第二个节点中,\n    //  首节点的item永远为null,保持不变\n    E x = first.item;\n    first.item = null;\n    return x;\n}\n")])])]),t("h3",{attrs:{id:"_1-4-put"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-put"}},[n._v("#")]),n._v(" 1.4 put()")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("public void put(E e) throws InterruptedException {\n    if (e == null) throw new NullPointerException();\n    int c = -1;\n    Node<E> node = new Node<E>(e);\n    final ReentrantLock putLock = this.putLock;\n    final AtomicInteger count = this.count;\n    //锁住queue,防止其他添加操作线程并发修改queue\n    putLock.lockInterruptibly();\n    try {\n        //如果queue满了,那么阻塞所有的添加操作线程,使其等待\n        while (count.get() == capacity) {\n            notFull.await();\n        }\n        //queue未满,元素入栈\n        enqueue(node);\n        //更新计数器\n        c = count.getAndIncrement();\n        //如果添加元素后,队列未满,那么唤醒某个添加操作的线程,允许添加\n        if (c + 1 < capacity)\n            notFull.signal();\n    } finally {\n        //解锁\n        putLock.unlock();\n    }\n    if (c == 0)\n        signalNotEmpty();\n}\n")])])]),t("h3",{attrs:{id:"_1-5-offer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-offer"}},[n._v("#")]),n._v(" 1.5 offer()")]),n._v(" "),t("p",[n._v("LinkedBlockingQueue中提供了一个特殊的offer方法，即添加元素时可以指定过期时间，如果在过期时间内，队列未满，添加成功，则返回true；否则，超过规定时间，未添加成功，则返回false。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("public boolean offer(E e, long timeout, TimeUnit unit)\n        throws InterruptedException {\n\n    if (e == null) throw new NullPointerException();\n    long nanos = unit.toNanos(timeout);\n    int c = -1;\n    final ReentrantLock putLock = this.putLock;\n    final AtomicInteger count = this.count;\n    putLock.lockInterruptibly();\n    try {\n        while (count.get() == capacity) {\n            //如果队列满了,并且超出了指定时间,直接返回false,不在阻塞等待\n            if (nanos <= 0)\n                return false;\n            //否则等待指定时间\n            nanos = notFull.awaitNanos(nanos);\n        }\n        enqueue(new Node<E>(e));\n        c = count.getAndIncrement();\n        if (c + 1 < capacity)\n            notFull.signal();\n    } finally {\n        putLock.unlock();\n    }\n    if (c == 0)\n        signalNotEmpty();\n    return true;\n}\n")])])]),t("h3",{attrs:{id:"_1-6-take"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-take"}},[n._v("#")]),n._v(" 1.6 take()")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("public E take() throws InterruptedException {\n    E x;\n    int c = -1;\n    final AtomicInteger count = this.count;\n    final ReentrantLock takeLock = this.takeLock;\n    //锁住queue,防止其他取出操作的线程并发修改queue\n    takeLock.lockInterruptibly();\n    try {\n        //如果当前队列为空,那么阻塞所有的取出操作线程\n        while (count.get() == 0) {\n            notEmpty.await();\n        }\n        //元素出栈\n        x = dequeue();\n        //更新引用\n        c = count.getAndDecrement();\n        //如果取出元素后,链表不为空,那么唤醒一个取出操作的线程,允许继续取出\n        if (c > 1)\n            notEmpty.signal();\n    } finally {\n        //解锁\n        takeLock.unlock();\n    }\n    if (c == capacity)\n        signalNotFull();\n    return x;\n}\n")])])])])}),[],!1,null,null,null);t.default=i.exports}}]);