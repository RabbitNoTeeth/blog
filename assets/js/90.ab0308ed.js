(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{376:function(n,t,e){"use strict";e.r(t);var a=e(7),o=Object(a.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"_1-lock与reentrantlock"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-lock与reentrantlock"}},[n._v("#")]),n._v(" 1. Lock与ReentrantLock")]),n._v(" "),t("p",[n._v("Lock提供了一种无条件的、可运行的、定时的、以及可中断的锁获取操作，所有加锁和解锁的方法都是显式的。")]),n._v(" "),t("p",[n._v("为什么要创建Lock加锁机制？因为内置锁在功能上存在一些局限性，例如：无法中断一个正在等待获取锁的线程，或者无法在请求获取一个锁时无限的等待下去，无法实现非阻塞的加锁规则。")]),n._v(" "),t("h3",{attrs:{id:"_1-1-轮询锁与定时锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-轮询锁与定时锁"}},[n._v("#")]),n._v(" 1.1 轮询锁与定时锁")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("****** 程序清单13-3 通过tryLock来避免锁顺序死锁 ******\n\npublic boolean transforMoney(Account fromAccount, Account toAccount, DollarAmount amount, long timeout, TimeUnit unit){\n    \n    long fixedDelay = getFixedDelayComponentNanos(timeout,unit);\n    long randMod = getRandomDelayModulusNanos(timeout,unit);\n    long stopTime = System.nanoTime() + unit.toNanos(timeout);\n    \n    while (true){\n        if(fromAccount.lock.tryLock()){\n            try{\n                if(toAccount.lock.tryLock()){\n                    try{\n                        if(fromAccount.getBalance().compareTo(amount)<0){\n                            throw new RuntimeException();\n                        }else{\n                            fromAccount.debit(amount);\n                            toAccount.credit(amount);\n                            return true;\n                        }\n                    } finally {\n                        toAccount.lock.unLock();\n                    }\n                }\n            } finally {\n                fromAccount.lock.unLock();\n            }\n        }\n        if(System.nanoTime() < stopTime){\n            return false;\n        }\n        NANOSECONDS.sleep(fixedDelay + rnd.nextLong() % randMod);\n    }\n}\n")])])]),t("p",[n._v("在程序清单13-3中，使用"),t("code",[n._v("tryLock")]),n._v("来获取两个锁，如果不能同时获得，那么就回退并重新尝试。在休眠时间中包括固定部分和随机部分，从而降低发生活锁的可能性。如果在指定的时间内不能获得所需要的锁，那么"),t("code",[n._v("tansforMoney")]),n._v("将返回一个失败状态，从而使操作平缓的失败，解决了发生死锁的问题。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("****** 程序清单13-4 带有时间限制的加锁 ******\n\npublic boolean trySendOnSharedLine(String message,long timeout,TimeUnit unit){\n    \n    long nanosToLock = unit.toNanos(timeout) - estimatedNanosToSend(message);\n    ReentrantLock lock = new ReentrantLock();\n    \n    if(!lock.tryLock(nanosToLock,NANOSECONDS)){\n        return false;\n    }\n    try{\n        return send(message);\n    }finally {\n        lock.unlock();\n    }\n}\n")])])]),t("p",[n._v("定时的"),t("code",[n._v("tryLock")]),n._v("同样能响应中断。")]),n._v(" "),t("h3",{attrs:{id:"_1-2-可中断的锁获取操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-可中断的锁获取操作"}},[n._v("#")]),n._v(" 1.2 可中断的锁获取操作")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("****** 程序清单13-5 可中断的锁获取操作 ******\n\npublic boolean send(String message) throws InterruptedException {\n    ReentrantLock lock = new ReentrantLock();\n    lock.lockInterruptibly();\n    try{\n        return cancellableSend(message);\n    }finally {\n        lock.unlock();\n    }\n}\n\nprivate boolean cancellableSend(String message) throws InterruptedException{\n}\n")])])]),t("h2",{attrs:{id:"_2-性能比较"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-性能比较"}},[n._v("#")]),n._v(" 2. 性能比较")]),n._v(" "),t("p",[n._v("在Java6使用了改进后的算法来管理内置锁，使得内置锁与"),t("code",[n._v("ReentrantLock")]),n._v("的吞吐量非常接近，相差不大。")]),n._v(" "),t("h2",{attrs:{id:"_3-公平性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-公平性"}},[n._v("#")]),n._v(" 3. 公平性")]),n._v(" "),t("p",[n._v("在"),t("code",[n._v("ReentrantLock")]),n._v("的构造函数中提供了两种公平性选择：创建一个非公平的锁（默认），或者一个公平的锁。")]),n._v(" "),t("p",[n._v("在公平的锁上，线程将按照它们发出请求的顺序来获得锁，但在非公平的锁上，则允许”插队”：当一个线程请求非公平的锁时，如果在发出请求的同时，该锁的状态变为可用，那么这个线程将跳过队列中所有的等待线程，并获得这个锁，非公平的ReentrantLock并不提倡插队行为，但无法防止某个线程在合适的时候进行插队。在公平的锁中，如果有另一个线程持有这个锁或者有其他线程在等队列中等待整个锁，那么新发出请求的线程将被放入队列中，在非公平的锁中，只有当锁被某个线程持有时，新发出请求的线程才会被放入队列中。")]),n._v(" "),t("p",[n._v("在竞争激烈的情况下，非公平的锁性能高于公平锁。原因：在恢复一个被挂起的线程与该线程真正开始运行之间存在严重的延迟。假设线程A持有一个锁，并且线程B请求这个锁，由于锁已经被线程A持有，因此B将被挂起。当A释放锁时，B将被唤醒，再次尝试获取锁。与此同时，如果C也请求这个锁，那么C很可能会在B被完全唤醒之前获得/使用以及释放这个锁。这样的情况是一种”双赢”的局面：B获得锁的时刻没有被推迟，C更早的获得了锁，并且吞吐量也得到了提高。")]),n._v(" "),t("p",[n._v("当持有锁的时间相对较长，或者请求锁的平均时间间隔较长，那么应该使用公平锁。")]),n._v(" "),t("h2",{attrs:{id:"_4-在synchronized和reentrantlock之间进行选择"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-在synchronized和reentrantlock之间进行选择"}},[n._v("#")]),n._v(" 4. 在synchronized和ReentrantLock之间进行选择")]),n._v(" "),t("p",[n._v("在一些内置锁无法满足需求的情况下，"),t("code",[n._v("ReentrantLock")]),n._v("可以作为一种高级工具。当需要一些高级功能时才应该使用"),t("code",[n._v("ReentrantLock")]),n._v("，这些功能包括：可定时的、可轮询的与可中断的锁获取操作，公平队列，以及非块结构的锁。否则，还是应该优先使用"),t("code",[n._v("synchronized")]),n._v("。")]),n._v(" "),t("h2",{attrs:{id:"_5-读-写锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-读-写锁"}},[n._v("#")]),n._v(" 5. 读-写锁")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("****** 程序清单13-7 用读-写锁来包装Map ******\n\npublic class ReadWriteMap<K,V>{\n    private final Map<K,V> map;\n    private final ReadWriteLock readWriteLock = new ReentrantReadWriteLock();\n    private final Lock r = readWriteLock.readLock();\n    private final Lock w = readWriteLock.writeLock();\n    \n    public ReadWriteMap(Map<K,V> map){\n        this.map = map;\n    }\n    \n    public V put(K key,V value){\n        w.lock();\n        try{\n            return map.put(key, value);\n        } finally {\n            w.unlock();\n        }\n    }\n\n    public V get(K key){\n        r.lock();\n        try{\n            return map.get(key);\n        } finally {\n            r.unlock();\n        }\n    }\n}\n")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);