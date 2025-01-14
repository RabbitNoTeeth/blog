(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{371:function(e,n,t){"use strict";t.r(n);var a=t(7),l=Object(a.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("独占锁的劣势：线程在挂起和恢复等过程中存在很大的开销。同时，当一个线程在等待锁时，无法做其他任何事情。")]),e._v(" "),n("p",[e._v("与锁相比，volatile是一种更轻量级的同步机制，但是却不能用于构建原子的复合操作。当一个变量依赖其他变量时，或者当变量的新值依赖于旧值时，就不能使用volatile变量。")]),e._v(" "),n("h2",{attrs:{id:"_1-硬件对并发的支持"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-硬件对并发的支持"}},[e._v("#")]),e._v(" 1. 硬件对并发的支持")]),e._v(" "),n("h3",{attrs:{id:"_1-1-比较并交换-cas"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-比较并交换-cas"}},[e._v("#")]),e._v(" 1.1 比较并交换(CAS)")]),e._v(" "),n("p",[e._v("在大多数处理器架构中采用的方法是实现一个比较并交换(CAS)指令。")]),e._v(" "),n("p",[e._v("CAS包含3个操作数：①需要读写的内存位置V  ②进行比较的值A  ③拟写入的新值B。")]),e._v(" "),n("p",[e._v("CAS的含义是：我认为V的值应该为A，如果是，那么将V的值更新为B，否则不修改并告诉V的值实际为多少。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("****** 程序清单15-1 模拟CAS操作 ******\n\npublic class SimulatedCAS{\n    private int value;\n    \n    private synchronized int get(){\n        return value;\n    }\n    \n    public synchronized int compareAndSwap(int expectedValue,int newValue){\n        int oldValue = value;\n        if(oldValue == expectedValue)\n            value = newValue;\n        return oldValue;\n    }\n    \n    public synchronized boolean compareAndSet(int expectedValue,int newValue){\n        return expectedValue == compareAndSwap(expectedValue,newValue);\n    }\n}\n")])])]),n("p",[e._v("当多个线程尝试使用CAS同时更新同一个变量时，只有其中一个线程能更新变量的值，而其他线程都将失败，但是失败的线程不会被挂起，而是被告知在这次竞争中失败，并可以再次尝试。由于一个线程在竞争CAS时失败不会阻塞，因此它可以决定是否重新尝试，或者执行一些恢复操作，也或者不执行任何操作。")]),e._v(" "),n("p",[e._v("CAS的典型使用模式是：首先从V中读取值A，并根据A值计算出B值，然后通过CAS以原子方式将V中的值由A更新为B。")]),e._v(" "),n("p",[e._v("CAS的主要缺点是：它将使调用者处理竞争问题（重试、回退、放弃等），而在锁中能自动处理竞争问题（即线程在获取锁之前一直阻塞）。")]),e._v(" "),n("h3",{attrs:{id:"_1-2-非阻塞的计数器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-非阻塞的计数器"}},[e._v("#")]),e._v(" 1.2 非阻塞的计数器")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("****** 程序清单15-2 基于CAS实现的非阻塞计数器 ******\n\npublic class CasCounter{\n    private SimulatedCAS value;\n    \n    public int getValue(){\n        return value.get();\n    }\n    \n    public int increment(){\n        int v;\n        do {\n            v = value.get();\n        }while (v != value.compareAndSwap(v,v+1));\n        return v+1;\n    }\n}\n")])])]),n("p",[e._v("CasCounter不会阻塞，如果CAS失败，那么该操作将立即重试。通常，反复地重试是一种合理的策略，但是当竞争很激烈的情况下，更好的方式是在重试之前首先等待一段时间或者回退，从而避免造成活锁问题。")]),e._v(" "),n("h2",{attrs:{id:"_2-原子变量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-原子变量"}},[e._v("#")]),e._v(" 2. 原子变量")]),e._v(" "),n("p",[e._v("原子变量相当于一种泛化的volatile变量，能够支持原子的和有条件的读-改-写操作。")]),e._v(" "),n("p",[e._v("共有12个原子变量类，可以分为4组：标量类、更新器类、数组类以及复合变量类。")]),e._v(" "),n("p",[e._v("最常用的原子变量就是标量类："),n("code",[e._v("AtomicInteger")]),e._v("、"),n("code",[e._v("AtomicLong")]),e._v("、"),n("code",[e._v("AtomicBoolean")]),e._v("和"),n("code",[e._v("AtomicReference")]),e._v("。")]),e._v(" "),n("h3",{attrs:{id:"_2-1-原子变量是一种-更好的volatile"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-原子变量是一种-更好的volatile"}},[e._v("#")]),e._v(" 2.1 原子变量是一种”更好的volatile”")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("****** 程序清单15-3 通过CAS来维持包含多个变量的不变性条件 ******\n\npublic class CasNumberRange{\n    private static class IntPair{\n        final int lower;\n        final int upper;\n        IntPair(int lower,int upper){\n            this.lower = lower;\n            this.upper = upper;\n        }\n    }\n    \n    private final AtomicReference<IntPair> values = new AtomicReference<>(new IntPair(0,0));\n    \n    public int getLower(){ return values.get().lower; }\n    public int getUpper(){ return values.get().upper; }\n    \n    public void setLower(int i){\n        while (true){\n            IntPair oldV = values.get();\n            if(i>oldV.upper){\n                throw new RuntimeException();\n            }\n            IntPair newV = new IntPair(i,oldV.upper);\n            if(values.compareAndSet(oldV,newV))\n                return;\n        }\n    }\n}\n")])])]),n("h3",{attrs:{id:"_2-2-性能比较-锁与原子变量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-性能比较-锁与原子变量"}},[e._v("#")]),e._v(" 2.2 性能比较：锁与原子变量")]),e._v(" "),n("p",[e._v("在实际情况中，原子变量在可伸缩性上要高于锁，因为在应对常见的竞争程度时，原子变量的效率会更高。")]),e._v(" "),n("p",[e._v("在中低程度的竞争下，原子变量能提供更高的可伸缩性，而在高强度竞争下，锁能更有效的避免竞争。")]),e._v(" "),n("h2",{attrs:{id:"_3-非阻塞算法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-非阻塞算法"}},[e._v("#")]),e._v(" 3. 非阻塞算法")]),e._v(" "),n("p",[e._v("如果在某种算法中，一个线程的失败或挂起不会导致其他线程也失败或者挂起，那么这种算法就称为非阻塞算法。")]),e._v(" "),n("p",[e._v("如果在算法的每个步骤中都存在某个线程能够执行下去，那么这种算法也称为无锁算法。")]),e._v(" "),n("h3",{attrs:{id:"_3-1-非阻塞的栈"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-非阻塞的栈"}},[e._v("#")]),e._v(" 3.1 非阻塞的栈")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("****** 使用Treiber算法构造的非阻塞栈 ******\n\npublic class ConcurrentStatck<E>{\n    \n    AtomicReference<Node<E>> top = new AtomicReference<Node<E>>();\n    \n    private class Node<E>{\n        public final E item;\n        public Node<E> next;\n        public Node(E item){\n            this.item = item;\n        }\n    }\n    \n    public void push(E item){\n        Node<E> newHead = new Node<>(item);\n        Node<E> oldHead;\n        do {\n            oldHead = top.get();\n            newHead.next = oldHead;\n        }while (!top.compareAndSet(oldHead,newHead));\n    }\n    \n    public E pop(){\n        Node<E> oldHead;\n        Node<E> newHead;\n        do {\n            oldHead = top.get();\n            if(oldHead == null)\n                return null;\n            newHead = oldHead.next;\n        }while (!top.compareAndSet(oldHead,newHead));\n        return oldHead.item;\n    }\n}\n")])])]),n("h3",{attrs:{id:"_3-2-非阻塞的链表"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-非阻塞的链表"}},[e._v("#")]),e._v(" 3.2 非阻塞的链表")]),e._v(" "),n("p",[e._v("链接队列比栈更为复杂，因为它必须支持对头节点和尾节点的快速访问，因此它需要单独维护头指针和尾指针。")]),e._v(" "),n("p",[e._v("有两个指针指向位于尾部的节点，当前最后一个元素的next指针以及尾节点，当成功的插入一个新元素时，这两个指针都需要采用原子操作的更新。初看起来，这个操作无法通过原子变量来实现，在更新这两个指针时需要不同的CAS操作，并且如果第一个CAS成功，但第二个CAS失败，那么队列将处于不一致的状态，而且如果这两个CAS都成功了，那么在执行这两个CAS之间，仍有可能有另一个线程会访问这个队列，因此，在为链接队列构建非阻塞算法时，需要考虑到这两种情况。")]),e._v(" "),n("p",[e._v("我们可以使用两个技巧来解决上述问题：")]),e._v(" "),n("ol",[n("li",[e._v("即使在一个包含多个步骤的更新操作中，也要确保数据结构总是处于一致的状态，这样当线程b到达时，如果发现线程a正在执行更新，那么线程b就可以知道有一个操作已部分完成，并且不能立即开始执行自己的更新操作，然后b可以等待，并直到a完成更新，从而使两个线程不会相互干扰。")]),e._v(" "),n("li",[e._v("如果当b到达时，发现a正在修改数据结构，那么在数据结构中应该有足够多的信息，使得b能够完成a的更新操作，如果b帮助a完成了更新操作，那么b可以执行自己的操作，而不用等待a的完成，但a恢复后再试图完成其操作时，会发现b已经替它完成了。")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("****** 程序清单15-7 Michael-Scott非阻塞算法中的插入算法 ******\n\npublic class LinkedQueue<E>{\n    private class Node<E>{\n        final E item;\n        final AtomicReference<Node<E>> next;\n        public Node(E item,Node<E> next){\n            this.item = item;\n            this.next = new AtomicReference<>(next);\n        }\n    }\n\n    private final Node<E> dummy = new Node<>(null,null);\n    private final AtomicReference<Node<E>> head = new AtomicReference<>(dummy);\n    private final AtomicReference<Node<E>> tail = new AtomicReference<>(dummy);\n\n    public boolean put(E item){\n        Node<E> newNode = new Node<>(item,null);\n        while (true){\n            Node<E> currentTail = tail.get();\n            Node<E> tailNext = currentTail.next.get();\n            if(currentTail == tail.get()){                                        // A\n                if(tailNext != null){           \n                    // 队列处于中间状态,推进尾节点\n                    tail.compareAndSet(currentTail,tailNext);                       // B\n                }else{\n                    // 队列处于稳定状态,尝试插入新节点\n                    if(currentTail.next.compareAndSet(null,newNode)){       // C\n                        // 插入操作成功,尝试推进尾节点\n                        tail.compareAndSet(currentTail,newNode);                    // D\n                        return true;\n                    }\n                }\n            }\n        }\n    }\n}\n")])])]),n("p",[e._v("实现上面两个技巧的关键点在于：当队列处于稳定状态时，尾节点的next域将为空，如果队列处于中间状态，那么tail.next将为非空，因此任何线程都能够通过检查tail.next来获取队列当前的状态，而且当队列处于中间状态时，可以通过将尾节点向前移动一个节点，从而结束其他线程正在执行的插入元素操作，并使得队列恢复为稳定状态。")]),e._v(" "),n("p",[e._v("put方法在插入新元素之前，将首先检查队列是否处于中间状态(步骤A)，如果是，那么有另一个线程正在执行插入元素(在步骤C和D之间)，此时当前线程不会等待其他线程执行完成，而是帮助它完成操作，并将尾节点向前推进一个节点(步骤B)，然后它将重复执行这种检查，以免另一个线程已经开始插入新元素，并继续推进尾节点，直到它发现队列处于稳定状态之后，才会开始执行自己的插入操作。")])])}),[],!1,null,null,null);n.default=l.exports}}]);