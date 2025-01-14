(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{388:function(n,e,t){"use strict";t.r(e);var a=t(7),o=Object(a.a)({},(function(){var n=this,e=n._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h2",{attrs:{id:"idletimeout-是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#idletimeout-是什么"}},[n._v("#")]),n._v(" idleTimeout 是什么？")]),n._v(" "),e("p",[e("code",[n._v("idleTimeout")]),n._v("，是类"),e("code",[n._v("io.vertx.core.net.TCPSSLOptions")]),n._v("的一个字段，对于这个字段的作用，在其setter方法中有下面详细的描述：")]),n._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[n._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("/**\n   * Set the idle timeout, default time unit is seconds. Zero means don't timeout.\n   * This determines if a connection will timeout and be closed if no data is received nor sent within the timeout.\n   *\n   * If you want change default time unit, use {@link #setIdleTimeoutUnit(TimeUnit)}\n   *\n   * @param idleTimeout  the timeout\n   * @return a reference to this, so the API can be used fluently\n   */")]),n._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("public")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("TCPSSLOptions")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("setIdleTimeout")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("int")]),n._v(" idleTimeout"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("if")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),n._v("idleTimeout "),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("<")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[n._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("throw")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("new")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("IllegalArgumentException")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[n._v('"idleTimeout must be >= 0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("idleTimeout "),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" idleTimeout"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("return")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n")])])]),e("p",[n._v("翻译一下：")]),n._v(" "),e("p",[n._v("当tcp连接没有数据接收或者发送时，也就是空闲时，"),e("code",[n._v("idleTimeout")]),n._v(" 决定了是否关闭该连接。如果 "),e("code",[n._v("idleTimeout")]),n._v(" 的值为0，那么将不会关闭该连接；如果值为n（n > 0)，那么将在n秒后关闭该连接。")]),n._v(" "),e("p",[e("code",[n._v("idleTimeout")]),n._v(" 的默认值为0，也就是说默认情况下，tcp连接一直不会断开。")]),n._v(" "),e("p",[n._v("在调用 "),e("code",[n._v("Vertx.createNetServer")]),n._v(" 创建tcp服务，或者调用 "),e("code",[n._v("Vertx.createHttpServer")]),n._v(" 创建http服务时，其接收的参数 "),e("code",[n._v("NetServerOptions")]),n._v("、"),e("code",[n._v("HttpServerOptions")]),n._v(" 都是 "),e("code",[n._v("TCPSSLOptions")]),n._v(" 的子类，都可以调用 "),e("code",[n._v("setIdleTimeout")]),n._v(" 方法来设置 "),e("code",[n._v("idleTimeout")]),n._v("。")]),n._v(" "),e("p",[n._v("如果我们的应用需要创建tcp服务，并且由客户端来控制连接的断开，那么使用默认的 "),e("code",[n._v("idleTimeout")]),n._v(" 是没有问题的。"),e("strong",[n._v("但是如果我们创建的是http服务，那么请一定要设置合理的 "),e("code",[n._v("idleTimeout")]),n._v(" 值，不要使用默认值，否则你将体验到接下来的经历～")])]),n._v(" "),e("h2",{attrs:{id:"idletimeout-是如何干废服务器的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#idletimeout-是如何干废服务器的"}},[n._v("#")]),n._v(" idleTimeout 是如何干废服务器的？")]),n._v(" "),e("p",[n._v("疫情期间，用vertx做了一个http服务，用来接收各县区测温设备上报的数据。应用部署上线三天后，收到cpu告警，登录服务器，发现cpu占用达到80%多，内存占用1g多，晚上重启服务后，cpu及内存占用回到初始状态。")]),n._v(" "),e("p",[n._v("又一个三天后，再次收到cpu告警，好吧，来活儿了，开始排查。")]),n._v(" "),e("br"),n._v(" "),e("p",[e("strong",[n._v("服务器环境")])]),n._v(" "),e("ul",[e("li",[n._v("操作系统：Windows Server 2016")]),n._v(" "),e("li",[n._v("CPU：1U，10线程")]),n._v(" "),e("li",[n._v("内存：32G")]),n._v(" "),e("li",[n._v("JDK：1.8")])]),n._v(" "),e("h3",{attrs:{id:"_1-生成线程转储"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-生成线程转储"}},[n._v("#")]),n._v(" 1. 生成线程转储")]),n._v(" "),e("p",[n._v("一般情况下，CPU占用过高的原因大概率是线程引起的，比如死锁、死循环、线程数过多等。使用 "),e("code",[n._v("jstack")]),n._v(" 命令生成线程转储。")]),n._v(" "),e("h3",{attrs:{id:"_2-分析线程转储"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-分析线程转储"}},[n._v("#")]),n._v(" 2. 分析线程转储")]),n._v(" "),e("p",[e("strong",[e("font",{attrs:{size:"6"}},[n._v("2. 分析线程转储")])],1)]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('2021-10-08 17:16:12\nFull thread dump Java HotSpot(TM) 64-Bit Server VM (25.261-b12 mixed mode):\n\n"Thread-4487" #4580 daemon prio=5 os_prio=0 tid=0x000001d70780c800 nid=0x140c runnable [0x000000ac9f6ff000]\n   java.lang.Thread.State: RUNNABLE\n\tat sun.nio.ch.WindowsSelectorImpl$SubSelector.poll0(Native Method)\n\tat sun.nio.ch.WindowsSelectorImpl$SubSelector.poll(Unknown Source)\n\tat sun.nio.ch.WindowsSelectorImpl$SubSelector.access$2600(Unknown Source)\n\tat sun.nio.ch.WindowsSelectorImpl$SelectThread.run(Unknown Source)\n\n"Thread-4473" #4566 daemon prio=5 os_prio=0 tid=0x000001d704070000 nid=0x1138 runnable [0x000000ac9e8ff000]\n   java.lang.Thread.State: RUNNABLE\n\tat sun.nio.ch.WindowsSelectorImpl$SubSelector.poll0(Native Method)\n\tat sun.nio.ch.WindowsSelectorImpl$SubSelector.poll(Unknown Source)\n\tat sun.nio.ch.WindowsSelectorImpl$SubSelector.access$2600(Unknown Source)\n\tat sun.nio.ch.WindowsSelectorImpl$SelectThread.run(Unknown Source)\n\n...(此处省略n行，这之间，都是名称为 Thread-xxx 的线程状态日志)\n\n"vert.x-internal-blocking-12" #94 prio=5 os_prio=0 tid=0x000001d778dcb000 nid=0x27f4 waiting on condition [0x000000ab818ff000]\n   java.lang.Thread.State: WAITING (parking)\n\tat sun.misc.Unsafe.park(Native Method)\n\t- parking to wait for  <0x000000068005f308> (a java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject)\n\tat java.util.concurrent.locks.LockSupport.park(Unknown Source)\n\tat java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject.await(Unknown Source)\n\tat java.util.concurrent.LinkedBlockingQueue.take(Unknown Source)\n\tat java.util.concurrent.ThreadPoolExecutor.getTask(Unknown Source)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)\n\tat io.netty.util.concurrent.FastThreadLocalRunnable.run(FastThreadLocalRunnable.java:30)\n\tat java.lang.Thread.run(Unknown Source)\n\n"vert.x-worker-thread-18" #73 prio=5 os_prio=0 tid=0x000001d775d6e800 nid=0x714 waiting on condition [0x000000ab801fe000]\n   java.lang.Thread.State: WAITING (parking)\n\tat sun.misc.Unsafe.park(Native Method)\n\t- parking to wait for  <0x000000068001c5f0> (a java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject)\n\tat java.util.concurrent.locks.LockSupport.park(Unknown Source)\n\tat java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject.await(Unknown Source)\n\tat java.util.concurrent.LinkedBlockingQueue.take(Unknown Source)\n\tat java.util.concurrent.ThreadPoolExecutor.getTask(Unknown Source)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)\n\tat io.netty.util.concurrent.FastThreadLocalRunnable.run(FastThreadLocalRunnable.java:30)\n\tat java.lang.Thread.run(Unknown Source)\n\n...(此处省略n行，这之间，都是名称为 vert.x-xxx 的线程状态日志)\n\n"pool-10-thread-2" #58 prio=5 os_prio=0 tid=0x000001d775d62000 nid=0x2b18 waiting on condition [0x000000abfeffe000]\n   java.lang.Thread.State: TIMED_WAITING (parking)\n\tat sun.misc.Unsafe.park(Native Method)\n\t- parking to wait for  <0x0000000680014a70> (a java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject)\n\tat java.util.concurrent.locks.LockSupport.parkNanos(Unknown Source)\n\tat java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject.awaitNanos(Unknown Source)\n\tat java.util.concurrent.ScheduledThreadPoolExecutor$DelayedWorkQueue.take(Unknown Source)\n\tat java.util.concurrent.ScheduledThreadPoolExecutor$DelayedWorkQueue.take(Unknown Source)\n\tat java.util.concurrent.ThreadPoolExecutor.getTask(Unknown Source)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)\n\tat java.lang.Thread.run(Unknown Source)\n\n...(此处省略n行，这之间，都是名称为 pool-xxx 的线程状态日志)\n\n"AMQP Connection 127.0.0.1:5672" #54 prio=5 os_prio=0 tid=0x000001d7759bf800 nid=0x242c runnable [0x000000abfeefe000]\n   java.lang.Thread.State: RUNNABLE\n\tat java.net.SocketInputStream.socketRead0(Native Method)\n\tat java.net.SocketInputStream.socketRead(Unknown Source)\n\tat java.net.SocketInputStream.read(Unknown Source)\n\tat java.net.SocketInputStream.read(Unknown Source)\n\tat java.io.BufferedInputStream.fill(Unknown Source)\n\tat java.io.BufferedInputStream.read(Unknown Source)\n\t- locked <0x0000000680016ea0> (a java.io.BufferedInputStream)\n\tat java.io.DataInputStream.readUnsignedByte(Unknown Source)\n\tat com.rabbitmq.client.impl.Frame.readFrom(Frame.java:91)\n\tat com.rabbitmq.client.impl.SocketFrameHandler.readFrame(SocketFrameHandler.java:184)\n\t- locked <0x0000000680016ec8> (a java.io.DataInputStream)\n\tat com.rabbitmq.client.impl.AMQConnection$MainLoop.run(AMQConnection.java:665)\n\tat java.lang.Thread.run(Unknown Source)\n\n...(此处省略n行，这之间，都是名称为 AMQP Connection xxx 的线程状态日志)\n\n"Service Thread" #10 daemon prio=9 os_prio=0 tid=0x000001d774f71800 nid=0x154 runnable [0x0000000000000000]\n   java.lang.Thread.State: RUNNABLE\n\n"C1 CompilerThread3" #9 daemon prio=9 os_prio=2 tid=0x000001d773a4e000 nid=0xba0 waiting on condition [0x0000000000000000]\n   java.lang.Thread.State: RUNNABLE\n\n"C2 CompilerThread2" #8 daemon prio=9 os_prio=2 tid=0x000001d773a43000 nid=0x29f4 waiting on condition [0x0000000000000000]\n   java.lang.Thread.State: RUNNABLE\n\n"C2 CompilerThread1" #7 daemon prio=9 os_prio=2 tid=0x000001d773a40000 nid=0x2a30 waiting on condition [0x0000000000000000]\n   java.lang.Thread.State: RUNNABLE\n\n"C2 CompilerThread0" #6 daemon prio=9 os_prio=2 tid=0x000001d773a3a800 nid=0x2924 waiting on condition [0x0000000000000000]\n   java.lang.Thread.State: RUNNABLE\n\n"Attach Listener" #5 daemon prio=5 os_prio=2 tid=0x000001d7739ec800 nid=0x1810 waiting on condition [0x0000000000000000]\n   java.lang.Thread.State: RUNNABLE\n\n"Signal Dispatcher" #4 daemon prio=9 os_prio=2 tid=0x000001d7739eb800 nid=0x2ae4 runnable [0x0000000000000000]\n   java.lang.Thread.State: RUNNABLE\n\n"Finalizer" #3 daemon prio=8 os_prio=1 tid=0x000001d7739c4800 nid=0x2bd0 in Object.wait() [0x000000abfbbff000]\n   java.lang.Thread.State: WAITING (on object monitor)\n\tat java.lang.Object.wait(Native Method)\n\tat java.lang.ref.ReferenceQueue.remove(Unknown Source)\n\t- locked <0x000000068004d8e8> (a java.lang.ref.ReferenceQueue$Lock)\n\tat java.lang.ref.ReferenceQueue.remove(Unknown Source)\n\tat java.lang.ref.Finalizer$FinalizerThread.run(Unknown Source)\n\n"Reference Handler" #2 daemon prio=10 os_prio=2 tid=0x000001d77399a000 nid=0x10ec in Object.wait() [0x000000abfbafe000]\n   java.lang.Thread.State: WAITING (on object monitor)\n\tat java.lang.Object.wait(Native Method)\n\tat java.lang.Object.wait(Unknown Source)\n\tat java.lang.ref.Reference.tryHandlePending(Unknown Source)\n\t- locked <0x000000068018edf8> (a java.lang.ref.Reference$Lock)\n\tat java.lang.ref.Reference$ReferenceHandler.run(Unknown Source)\n\n"VM Thread" os_prio=2 tid=0x000001d773994800 nid=0x276c runnable \n\n"GC task thread#0 (ParallelGC)" os_prio=0 tid=0x000001d756e24000 nid=0x24c runnable \n\n"GC task thread#1 (ParallelGC)" os_prio=0 tid=0x000001d756e26800 nid=0x8fc runnable \n\n"GC task thread#2 (ParallelGC)" os_prio=0 tid=0x000001d756e28000 nid=0x29a4 runnable \n\n"GC task thread#3 (ParallelGC)" os_prio=0 tid=0x000001d756e2a000 nid=0x2b08 runnable \n\n"GC task thread#4 (ParallelGC)" os_prio=0 tid=0x000001d756e2b000 nid=0x2af8 runnable \n\n"GC task thread#5 (ParallelGC)" os_prio=0 tid=0x000001d756e2c800 nid=0x1964 runnable \n\n"GC task thread#6 (ParallelGC)" os_prio=0 tid=0x000001d756e2f800 nid=0x8a4 runnable \n\n"GC task thread#7 (ParallelGC)" os_prio=0 tid=0x000001d756e30800 nid=0x264c runnable \n\n"GC task thread#8 (ParallelGC)" os_prio=0 tid=0x000001d756e31800 nid=0x2b54 runnable \n\n"VM Periodic Task Thread" os_prio=2 tid=0x000001d774f85000 nid=0x164c waiting on condition \n\nJNI global references: 880\t\n')])])]),e("p",[n._v("上述是线程转储中的部分内容，分析程序代码，所有以 "),e("code",[n._v("vert.x-")]),n._v("、"),e("code",[n._v("AMOP Connection")]),n._v("、"),e("code",[n._v("pool-")]),n._v(" 为前缀的线程都是程序内创建并且维护的，也就是合理的，日志结尾部分 "),e("code",[n._v("Service Thread")]),n._v("、"),e("code",[n._v("C1 CompilerThread")]),n._v("、"),e("code",[n._v("Attach Listener")]),n._v("、"),e("code",[n._v("GC task")]),n._v(" 等线程由jvm维护，也是合理的。")]),n._v(" "),e("p",[e("strong",[n._v("一个非常不合理的地方在于那些 "),e("code",[n._v("Thread-xxx")]),n._v(" 名称的线程")]),n._v("，这些线程并不是由程序代码创建，并且数量达到了4400+，是非常明显的异常现象。")]),n._v(" "),e("h3",{attrs:{id:"_3-分析线程大量创建的原因"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-分析线程大量创建的原因"}},[n._v("#")]),n._v(" 3. 分析线程大量创建的原因")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('"Thread-4487" #4580 daemon prio=5 os_prio=0 tid=0x000001d70780c800 nid=0x140c runnable [0x000000ac9f6ff000]\n   java.lang.Thread.State: RUNNABLE\n\tat sun.nio.ch.WindowsSelectorImpl$SubSelector.poll0(Native Method)\n\tat sun.nio.ch.WindowsSelectorImpl$SubSelector.poll(Unknown Source)\n\tat sun.nio.ch.WindowsSelectorImpl$SubSelector.access$2600(Unknown Source)\n\tat sun.nio.ch.WindowsSelectorImpl$SelectThread.run(Unknown Source)\n')])])]),e("p",[n._v("查看异常线程的详细堆栈信息，发现其发生位置在 "),e("code",[n._v("sun.nio.ch.WindowsSelectorImpl")]),n._v(" 类，在经过查找相关资料后，确认该类为jdk的nio模型在windows系统上的实现，分析其源码（"),e("a",{attrs:{href:"https://blog.csdn.net/liu_005/article/details/86253576",target:"_blank",rel:"noopener noreferrer"}},[n._v("参考文章"),e("OutboundLink")],1),n._v(" ），简单解释它的工作原理：在windows平台上，通过辅助线程来管理nio模型中channel的注册和注销，一个辅助线程管理一定数量的channel，channel数量越多，就会创建更多的辅助线程；当channel数量减少，也会销毁对应的辅助线程。")]),n._v(" "),e("br"),n._v(" "),e("p",[n._v("存在大量辅助线程的原因可能有2点：")]),n._v(" "),e("ul",[e("li",[n._v("① 存在大量未注销的channel")]),n._v(" "),e("li",[n._v("② jdk自身bug导致，在查询资料时，发现jdk的nio模型在windows下的实现确实存在bug，可能导致一直创建辅助线程，从而cpu占用飙升，这个问题好像到jdk1.8中也没有完全解决，只是很小的概率才会发生。")])]),n._v(" "),e("p",[n._v("虽然原因②很有可能，但是毕竟它是概率性的，而对于我的应用来说，这个问题基本是必会发生的，那么就先从原因①着手进行分析。")]),n._v(" "),e("p",[n._v("直接分析是否存在大量未注销的channel可能有些无从下手，但是应用状态的异常不只在于cpu占用，还有内存占用的异常也非常明显，比正常状态增加了好几倍，那么接下来就从内存下手。")]),n._v(" "),e("h3",{attrs:{id:"_4-生成堆转储"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-生成堆转储"}},[n._v("#")]),n._v(" 4. 生成堆转储")]),n._v(" "),e("p",[n._v("使用 "),e("code",[n._v("jmap")]),n._v(" 命令生成堆转储")]),n._v(" "),e("h3",{attrs:{id:"_5-分析堆转储"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-分析堆转储"}},[n._v("#")]),n._v(" 5. 分析堆转储")]),n._v(" "),e("p",[n._v("使用 "),e("a",{attrs:{href:"http://www.eclipse.org/mat/downloads.php",target:"_blank",rel:"noopener noreferrer"}},[n._v("Eclipse Memory Analyzer"),e("OutboundLink")],1),n._v(" 工具打开堆转储文件，查看分析结果")]),n._v(" "),e("img",{staticStyle:{zoom:"100%"},attrs:{src:"/img/vertx/10.1.png"}}),n._v(" "),e("p",[n._v("可以看到， "),e("code",[n._v("io.netty.channel.socket.nio.NioSocketChannel")]),n._v(" 类存在大量的实例，占用了 87.5% 的堆内存，点击 Details 查看详细信息：")]),n._v(" "),e("img",{staticStyle:{zoom:"100%"},attrs:{src:"/img/vertx/10.2.png"}}),n._v(" "),e("p",[n._v("查看实例引用情况，所有的channel实例都被 "),e("code",[n._v("sun.nio.WindowsSelectorImpl")]),n._v(" 引用，而这恰好是导致辅助线程大量创建的原因。")]),n._v(" "),e("p",[n._v("到这里，就可以确定问题的原因在于存在大量未注销的channel。")]),n._v(" "),e("h3",{attrs:{id:"_6-检查程序代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-检查程序代码"}},[n._v("#")]),n._v(" 6. 检查程序代码")]),n._v(" "),e("p",[n._v("既然确定了问题的原因在于存在大量未注销的channel，那么就进一步分析程序逻辑。")]),n._v(" "),e("p",[n._v("在程序中，基于vertx-web模块创建的http服务使用了nio，用来接收测温设备的数据，那么就需要进一步排查是否在处理http请求时存在问题，导致channel一直无法释放。")]),n._v(" "),e("p",[n._v("最后，发现在http的FailureHandler，也就是异常处理器中，对于部分请求处理中出现的异常，未进行正确的响应：")]),n._v(" "),e("img",{staticStyle:{zoom:"100%"},attrs:{src:"/img/vertx/10.3.png"}}),n._v(" "),e("p",[n._v("修改程序，保证所有发生异常的请求都能响应：")]),n._v(" "),e("img",{staticStyle:{zoom:"100%"},attrs:{src:"/img/vertx/10.4.png"}}),n._v(" "),e("h3",{attrs:{id:"_7-验证问题是否解决"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-验证问题是否解决"}},[n._v("#")]),n._v(" 7. 验证问题是否解决")]),n._v(" "),e("p",[n._v("现在是2021-10-09，将程序重新打包部署，持续观察一段时间，等过几天后再来更新结果。😅")]),n._v(" "),e("h3",{attrs:{id:"_8-问题还在-继续分析吧"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-问题还在-继续分析吧"}},[n._v("#")]),n._v(" 8. 问题还在，继续分析吧")]),n._v(" "),e("p",[n._v("现在是2021-10-21，更新下程序代码修改后的结果。")]),n._v(" "),e("p",[n._v("很遗憾，问题并没有得到解决😭，只好继续进一步分析。")]),n._v(" "),e("p",[n._v("再次打开MAT，分析堆转储。")]),n._v(" "),e("img",{staticStyle:{zoom:"100%"},attrs:{src:"/img/vertx/10.5.png"}}),n._v(" "),e("p",[n._v("查看程序中实例数量，"),e("code",[n._v("NioSockerChannel")]),n._v(" 实例数达到了97940，每一个 "),e("code",[n._v("NioSockerChannel")]),n._v(" 本质上都对应一个连接。而考虑实际场景，测温设备总数大约10000个，并且是http协议，请求在响应完成后应该关闭，第6步的代码优化也保证了所有请求都能够响应，这个实例数很明显是不正常的，这还只是程序运行了大概4个小时的堆转储。")]),n._v(" "),e("br"),n._v(" "),e("img",{staticStyle:{zoom:"100%"},attrs:{src:"/img/vertx/10.6.png"}}),n._v(" "),e("p",[n._v("进一步查看 "),e("code",[n._v("NioSockerChannel")]),n._v(" 实例的引用链，可以发现每个 "),e("code",[n._v("NioSockerChannel")]),n._v(" 实例都被多个 "),e("code",[n._v("WindowsSelectorImpl")]),n._v(" 实例引用，而 "),e("code",[n._v("WindowsSelectorImpl")]),n._v(" 实例运行在名称为 "),e("code",[n._v("SelectThread")]),n._v(" 的线程上。")]),n._v(" "),e("p",[e("code",[n._v("WindowsSelectorImpl")]),n._v(" 是java nio在windows上的实现，也就是说，这些 "),e("code",[n._v("NioSockerChannel")]),n._v(" 都是存活状态，导致系统底层要不断的轮询这些channel，查看是否有新的事件需要处理，那么这些channel为什么没有关闭呢？当前服务为http服务，客户端请求后，创建channel进行处理，响应完成后，channel理应关闭才对。")]),n._v(" "),e("p",[n._v("查看创建http服务的代码，可以通过 "),e("code",[n._v("HttpServerOptions")]),n._v(" 设置一些参数")]),n._v(" "),e("img",{staticStyle:{zoom:"100%"},attrs:{src:"/img/vertx/10.7.png"}}),n._v(" "),e("p",[n._v("那好，查看HttpServerOptions源码，发现其内部没有与channel相关的参数，进一步查找其父类NetServerOptions，也没有找到有用的信息，再继续查找父类TCPSSLOptions，发现了这个老6属性："),e("code",[n._v("idleTimeout")])]),n._v(" "),e("img",{staticStyle:{zoom:"100%"},attrs:{src:"/img/vertx/10.8.png"}}),n._v(" "),e("p",[n._v("找到其setter方法，嗯，"),e("code",[n._v("idleTimeout")]),n._v(" 用来控制空闲连接的超时时长，达到超时时长后该连接将被关闭；默认超时时长为0，即永不超时，也就是说连接永不关闭：")]),n._v(" "),e("img",{staticStyle:{zoom:"100%"},attrs:{src:"/img/vertx/10.9.png"}}),n._v(" "),e("p",[n._v("那好，修改创建http服务的代码，设置空闲连接的超时时长：")]),n._v(" "),e("img",{staticStyle:{zoom:"100%"},attrs:{src:"/img/vertx/10.10.png"}}),n._v(" "),e("p",[n._v("更新部署应用，几天后再更新结果。")]),n._v(" "),e("h3",{attrs:{id:"_9-问题解决"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-问题解决"}},[n._v("#")]),n._v(" 9. 问题解决")]),n._v(" "),e("p",[n._v("十天了，自从修改空闲连接的超时时长后，cpu占用稳定在1%-5%，内存占用200m-600m，上下班高峰期，测试设备上报数据量大，cpu和内存占用会升到，但是整体已经稳定了。进一步查看线程转储及堆转储，一切正常，问题解决！🎉🎉🎉")]),n._v(" "),e("p",[n._v("这就是我被 "),e("code",[n._v("idleTimeout")]),n._v(" 干废服务器的经历，所以说，如果用vertx创建http服务，必须设置 "),e("code",[n._v("idleTimeout")]),n._v("。")])])}),[],!1,null,null,null);e.default=o.exports}}]);