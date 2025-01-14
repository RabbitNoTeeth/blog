(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{369:function(e,t,n){"use strict";n.r(t);var a=n(7),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"_1-在线程中执行任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-在线程中执行任务"}},[e._v("#")]),e._v(" 1. 在线程中执行任务")]),e._v(" "),t("h3",{attrs:{id:"_1-1-串行地执行任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-串行地执行任务"}},[e._v("#")]),e._v(" 1.1 串行地执行任务")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("****** 程序清单6-1 串行的web服务器 ******\n\npublic class SingleThreadWebServer{\n\n    public static void main(String[] args) throws IOException {\n        ServerSocket serverSocket = new ServerSocket(80);\n        while (true){\n            Socket connection = serverSocket.accept();\n            handleReauest(connection);\n        }\n    }\n    \n}\n")])])]),t("p",[e._v("程序清单6-1很简单，并且在理论上是正确的，但在实际生产环境中的执行性能却很糟糕，因为他每次只能处理一个请求，新的请求必须等待上一个请求完成才能执行，如果处理请求的速度很慢，那么这种方法是不可行的。")]),e._v(" "),t("h3",{attrs:{id:"_1-2-显示地为任务创建线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-显示地为任务创建线程"}},[e._v("#")]),e._v(" 1.2 显示地为任务创建线程")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("****** 程序清单6-2 为每个请求创建一个新的线程 ******\n\npublic class NewThreadForPerWebServer{\n\n    public static void main(String[] args) throws IOException {\n        ServerSocket serverSocket = new ServerSocket(80);\n        while (true){\n            final Socket connection = serverSocket.accept();\n            new Thread(new Runnable() {\n                @Override\n                public void run() {\n                    handleReauest(connection);\n                }\n            }).start();\n        }\n    }\n\n}\n")])])]),t("p",[e._v("程序清单6-2中，服务器为每个请求分配一个新的线程来执行任务，在请求的到达速率不超过服务器的请求处理能力时，这种方法可以同时带来更快的响应性和更高的吞吐率，但在实际应用中不建议这么做。")]),e._v(" "),t("h3",{attrs:{id:"_1-3-无限制创建线程的不足"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-无限制创建线程的不足"}},[e._v("#")]),e._v(" 1.3 无限制创建线程的不足")]),e._v(" "),t("ul",[t("li",[e._v("线程生命周期的开销非常高。")]),e._v(" "),t("li",[e._v("资源消耗，活跃的线程会消耗系统资源，尤其是内存，如果可运行的线程数量多于可用处理器的数量，那么有些线程将闲置，大量的闲置线程会占用许多内存，给垃圾回收器带来压力，同时大量线程在竞争CPU资源时还将产生其他的性能开销。")]),e._v(" "),t("li",[e._v("稳定性，在可创建线程的数量上，存在着一个限制，这个限制因平台的不同而不同，如果破坏了这些限制，那么很可能抛出"),t("code",[e._v("OutOfMemoryError")]),e._v("异常。为每个任务分配一个线程，这种方法的问题在于，它没有限制可创建线程的数量，当超过了一定限制，可能引起服务器的直接崩溃。")])]),e._v(" "),t("h2",{attrs:{id:"_2-executor框架"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-executor框架"}},[e._v("#")]),e._v(" 2. Executor框架")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("****** 程序清单6-3 Executor接口 ******\n\npublic interface Executor{\n    void execute(Runnable command);\n}\n")])])]),t("p",[e._v("Executor基于生产者-消费者模式，提交任务的操作相当于生产者，执行任务的线程则相当于消费者，如果要在程序中实现一个生产者-消费者的设计，那么最简单的方式通常就是使用Executor。")]),e._v(" "),t("h3",{attrs:{id:"_2-1-示例-基于executor的web服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-示例-基于executor的web服务器"}},[e._v("#")]),e._v(" 2.1 示例:基于Executor的web服务器")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("****** 程序清单6-4 基于线程池的web服务器 ******\n\nclass TaskExecutionWebServer{\n    private static final Executor executor = Executors.newFixedThreadPool(100);\n\n    public static void main(String[] args) throws IOException {\n        ServerSocket serverSocket = new ServerSocket(80);\n        while (true){\n            final Socket connection = serverSocket.accept();\n            Runnable task = new Runnable() {\n                @Override\n                public void run() {\n                    handleReauest(connection);\n                }\n            };\n            executor.execute(task);\n        }\n    }\n}\n")])])]),t("p",[e._v("在程序清单6-4中，通过Executor创建了容量为100的线程池，并且任务的执行都交给线程池来管理。")]),e._v(" "),t("h3",{attrs:{id:"_2-2-执行策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-执行策略"}},[e._v("#")]),e._v(" 2.2 执行策略")]),e._v(" "),t("p",[e._v("在执行策略中包含了任务执行的以下方面:")]),e._v(" "),t("ul",[t("li",[e._v("在什么线程中执行任务？")]),e._v(" "),t("li",[e._v("任务按照什么顺序执行？(FIFO,LIFO,优先级)?")]),e._v(" "),t("li",[e._v("有多少个任务能并发执行？")]),e._v(" "),t("li",[e._v("在队列中有多少个任务正在等待执行？")]),e._v(" "),t("li",[e._v("如果系统由于过载而需要拒绝一个任务，那么应该选择哪一个任务？以及如何通知应用程序有任务被拒绝?")]),e._v(" "),t("li",[e._v("在执行一个任务之前或之后，应该进行哪些动作？")])]),e._v(" "),t("p",[e._v("每当看到下面这种形式的代码时："),t("code",[e._v("new Thread(runnable).start()")]),e._v("，并且你希望获得一种更灵活的执行策略时，请考虑使用Executor来代替Thread。")]),e._v(" "),t("h3",{attrs:{id:"_2-3-线程池"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-线程池"}},[e._v("#")]),e._v(" 2.3 线程池")]),e._v(" "),t("p",[e._v("在线程池中执行任务比为每个任务分配一个线程的优势更多。线程池通过重用现有的线程而不是创建新线程，可以在处理多个请求时，分摊在线程创建和销毁过程中产生的巨大开销！另外一个额外的好处是，当请求到达时，工作线程通常已经存在，因此不会由于等待创建线程而延迟任务的执行，从而提高了响应性。通过适当调整线程池的大小，可以创建足够多的线程，以便使处理器保持忙碌状态，同时还可以防止过多线程相互竞争资源而使应用程序耗尽内存或失败。")]),e._v(" "),t("p",[e._v("Java类库为我们提供了一个灵活的线程池以及一些有用的默认配置，可以通过Executors中的静态工厂方法来创建线程池。")]),e._v(" "),t("h4",{attrs:{id:"_2-3-1-newfixedthreadpool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1-newfixedthreadpool"}},[e._v("#")]),e._v(" 2.3.1 newFixedThreadPool")]),e._v(" "),t("p",[e._v("创建一个固定长度的线程池，每当提交一个任务时，就创建一个新线程，直到达到线线程池的最大数量，这是线程池的规模将不再变化，如果某个线程由于发生了未预期的Exception而结束，那么线程池将补充一个新的线程。")]),e._v(" "),t("h4",{attrs:{id:"_2-3-2-newcachedthreadpool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-newcachedthreadpool"}},[e._v("#")]),e._v(" 2.3.2 newCachedThreadPool")]),e._v(" "),t("p",[e._v("创建一个可缓存的线程池，如果线程池的当前规模超过了处理需求时，那么将回收空闲的线程，而当需求增加时，则可以添加新的线程，线程池的规模不存在任何限制。")]),e._v(" "),t("h4",{attrs:{id:"_2-3-3-newsinglethreadexecutor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-3-newsinglethreadexecutor"}},[e._v("#")]),e._v(" 2.3.3 newSingleThreadExecutor")]),e._v(" "),t("p",[e._v("是一个单线程的Executor，他创建单个工作者线程来执行任务，如果这个线程异常结束，会创建另一个线程来代替，因此它能确保依照任务在队列中的顺序来串行执行。")]),e._v(" "),t("h4",{attrs:{id:"_2-3-4-newscheduledthreadpool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-4-newscheduledthreadpool"}},[e._v("#")]),e._v(" 2.3.4 newScheduledThreadPool")]),e._v(" "),t("p",[e._v("创建了一个固定长度的线程池，而且以延迟或定时的方式来执行任务，类似于Timer。")]),e._v(" "),t("h3",{attrs:{id:"_2-4-executor的生命周期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-executor的生命周期"}},[e._v("#")]),e._v(" 2.4 Executor的生命周期")]),e._v(" "),t("p",[e._v("如果无法正确的关闭"),t("code",[e._v("Executor")]),e._v("，那么JVM将无法结束")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("****** 程序清单6-7 ExecutorService中的生命周期管理方法 ******\n\npublic interface ExecutorService extends Executor {\n    void shutdown();\n    List<Runnable> shutdownNow();\n    boolean isShutdown();\n    boolean isTerminated();\n    boolean awaitTermination(long timeout, TimeUnit unit)\n            throws InterruptedException;\n    ...\n}\n")])])]),t("p",[t("code",[e._v("ExecutorService")]),e._v("的生命周期有3种状态：运行、关闭和停止。")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("ExecutorService")]),e._v("在初始创建时处于运行状态。")]),e._v(" "),t("li",[t("code",[e._v("shutdown")]),e._v("方法将执行平缓的关闭过程：不再接受新的任务，同时等待已经提交的任务执行完成（包括那些还未开始执行的任务）。")]),e._v(" "),t("li",[t("code",[e._v("shutdownNow")]),e._v("方法将执行粗暴的关闭过程：将尝试取消所有运行中的任务，并且不再启动队列中尚未开始执行的任务。")]),e._v(" "),t("li",[t("code",[e._v("afterTermination")]),e._v("将等待"),t("code",[e._v("ExecutorService")]),e._v("到达终止状态。")]),e._v(" "),t("li",[t("code",[e._v("isTermination")]),e._v("来轮询"),t("code",[e._v("ExecutorService")]),e._v("是否已经终止。")]),e._v(" "),t("li",[e._v("通常在调用"),t("code",[e._v("afterTermination")]),e._v("后会立即调用"),t("code",[e._v("shutdown")]),e._v("，从而产生同步地关闭"),t("code",[e._v("ExecutorService")]),e._v("的效果。")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("****** 程序清单6-8 支持关闭操作的web服务器 ******\n\nclass LifecycleWebServer{\n    private static final ExecutorService executor = Executors.newFixedThreadPool(100);\n\n    public void start() throws IOException {\n        ServerSocket serverSocket = new ServerSocket(80);\n        while (true){\n            final Socket connection = serverSocket.accept();\n            executor.execute(new Runnable() {\n                @Override\n                public void run() {\n                    handleReauest(connection);\n                }\n            });\n        }\n    }\n    \n    public void stop(){\n        executor.shutdown();\n    }\n    \n    void handleReauest(Socket connection){\n        Request req = readRequest(connection);\n        if(!isShutdown(req)){\n            stop();\n        }else{\n            dispatchRequest(req);\n        }\n    }\n}\n")])])]),t("h3",{attrs:{id:"_2-5-延迟任务与周期任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-延迟任务与周期任务"}},[e._v("#")]),e._v(" 2.5 延迟任务与周期任务")]),e._v(" "),t("p",[t("code",[e._v("Timer")]),e._v("支持基于绝对时间，而不是相对时间的调度机制，因此任务的执行对系统时钟变化很敏感，而"),t("code",[e._v("ScheduledThreadPoolExecutor")]),e._v("只支持基于相对时间的调度。")]),e._v(" "),t("p",[t("code",[e._v("Timer")]),e._v("在执行所有定时任务时只会创建一个线程，如果某个任务的执行时间过长，那么将破坏其他的TimerTask定时精确性。")]),e._v(" "),t("p",[t("code",[e._v("Timer")]),e._v("线程并不捕获异常，因此当抛出未检查的异常时将中止定时线程，并且不会再恢复，已经被调度但尚未执行的TimerTask将不会再执行，新的任务也不会被调度。")]),e._v(" "),t("p",[e._v("所以尽量使用"),t("code",[e._v("ScheduledThreadPoolExecutor")]),e._v("来代替"),t("code",[e._v("Timer")]),e._v("。")]),e._v(" "),t("p",[e._v("如果要构建自己的调度服务，那么可以使用"),t("code",[e._v("DelayQueue")]),e._v("，它实现了"),t("code",[e._v("BlockingQueue")]),e._v("，并为"),t("code",[e._v("ScheduledThreadPoolExecutor")]),e._v("提供调度功能，"),t("code",[e._v("DelayQueue")]),e._v("管理着一组Delayed对象，每个Delayed对象都有一个相应的延迟时间，在"),t("code",[e._v("DelayQueue")]),e._v("中,只有某个元素逾期后，才能从"),t("code",[e._v("DelayQueue")]),e._v("中执行take操作，从"),t("code",[e._v("DelayQueue")]),e._v("中返回的对象将根据他们的延时时间进行排序。")]),e._v(" "),t("h2",{attrs:{id:"_3-找出可利用的并行性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-找出可利用的并行性"}},[e._v("#")]),e._v(" 3. 找出可利用的并行性")]),e._v(" "),t("p",[t("strong",[e._v("示例:串行的页面渲染器")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("****** 程序清单6-10 串行的渲染页面元素 ******\n\npublic class SingleThreadRenderer{\n    void renderPage(CharSequence source){\n        renderText(source);\n        List<ImageData> imageData = new ArrayList<>();\n        for(ImageInfo imageInfo:scanForImageInfo(source)){\n            imageData.add(imageInfo.downloadImage());\n        }\n        for(ImageData data:imageData){\n            renderImage(data);\n        }\n    }\n}\n")])])]),t("p",[e._v("在程序清单6-10中，任务执行所需的大部分时间都是在等待图片下载的I/O完成，在这期间cpu几乎不做任何工作，这种串行执行的方式没有充分利用cpu，并且用户等待页面的渲染时间也会很长。")]),e._v(" "),t("h3",{attrs:{id:"_3-1-携带结果的任务callable与future"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-携带结果的任务callable与future"}},[e._v("#")]),e._v(" 3.1 携带结果的任务Callable与Future")]),e._v(" "),t("p",[e._v("Executor框架使用Runnable作为其基本的任务表示形式，但是Runnable有很大的局限性，那就是它不能返回一个值，也不能抛出一个受检查的异常。")]),e._v(" "),t("p",[e._v("Callable是一种更好的抽象，它可以返回一个值,并且能抛出受检查异常。")]),e._v(" "),t("p",[e._v("Executor框架中，已提交但尚未开始的任务可以取消，但对于那些已经开始执行的任务，只有当他们能响应中断时，才能取消，取消一个已经完成的任务不会有任何影响。")]),e._v(" "),t("p",[e._v("Future表示一个任务的生命周期，并提供了相应的方法来判断是否已经完成或取消，以及获取任务的结果和取消任务等。在Future规范中，任务的生命周期只能前进，不能后退，当任务完成后，它就永远的停留在完成状态上。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("****** 程序清单6-11 Callable与Future接口 ******\n\npublic interface Callable<V> {\n    V call() throws Exception;\n}\n\npublic interface Future<V> {\n    boolean cancel(boolean mayInterruptIfRunning);\n    boolean isCancelled();\n    boolean isDone();\n    V get() throws InterruptedException, ExecutionException;\n    V get(long timeout, TimeUnit unit)\n            throws InterruptedException, ExecutionException, TimeoutException;\n}\n")])])]),t("p",[t("code",[e._v("get")]),e._v("方法的行为取决于任务的状态，如果任务已完成，那么会立即返回或抛出一个异常，如果任务没有完成，那么将阻塞并直到任务完成，如果任务抛出了异常，那么"),t("code",[e._v("get")]),e._v("将该异常封装为"),t("code",[e._v("ExecutionException")]),e._v("并重新抛出。如果任务被取消，那么"),t("code",[e._v("get")]),e._v("将抛出"),t("code",[e._v("CancellationException")]),e._v("。如果"),t("code",[e._v("get")]),e._v("抛出了"),t("code",[e._v("ExecutionException")]),e._v("异常，那么可以通过"),t("code",[e._v("getCause()")]),e._v("来获得被封装的初始异常。")]),e._v(" "),t("p",[e._v("从java6开始"),t("code",[e._v("ExecutorService")]),e._v("实现可以改写"),t("code",[e._v("AbstractExecutorService")]),e._v("中的"),t("code",[e._v("newTaskFor")]),e._v("方法，从而根据已提交的Runnable或Callable来控制Future的实例化过程。")]),e._v(" "),t("p",[t("strong",[e._v("示例:使用Future实现页面渲染")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("****** 程序清单6-13 使用Future等待图像下载 ******\n\npublic class FutureRenderer{\n    private final ExecutorService executor = Executors.newFixedThreadPool(100);\n    void renderPage(CharSequence source){\n        final List<ImageInfo> imageInfos = scanForImageInfo(source);\n        Callable<List<ImageData>> task = new Callable<List<ImageData>>() {\n            @Override\n            public List<ImageData> call() throws Exception {\n                List<ImageData> dataList = new ArrayList<>();\n                for(ImageInfo imageInfo:imageInfos){\n                    dataList.add(imageInfo.download());\n                }\n                return dataList;\n            }\n        };\n       Future<List<ImageData>> future =  executor.submit(task);\n       renderText(source);\n        try {\n            List<ImageData> imageData = future.get();\n            for(ImageData data:imageData){\n                renderImage(data);\n            }\n        } catch (InterruptedException e) {\n            //重新设置线程的中断状态\n            Thread.currentThread().interrupt();\n            //由于不需要结果,因此直接取消任务\n            future.cancel(true);\n        } catch (ExecutionException e) {\n            throw launderThrowable(e.getCause());\n        }\n    }\n}\n")])])]),t("p",[e._v("在程序清单6-13中，文本渲染和图片下载的任务可以并发的执行，当所有图片下载完成后，渲染到页面。但是这种实现依然有不足之处，就是用户必须等待所有图片都下载完毕才开始加载，当图片下载时间远远大于文本渲染时间时，用户依然需要等待较长时间。")]),e._v(" "),t("h3",{attrs:{id:"_3-2-completionservice-executor-与-blockingqueue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-completionservice-executor-与-blockingqueue"}},[e._v("#")]),e._v(" 3.2 CompletionService: Executor 与 BlockingQueue")]),e._v(" "),t("p",[t("code",[e._v("CompletionService")]),e._v("将"),t("code",[e._v("Executor")]),e._v("和"),t("code",[e._v("BlockingQueue")]),e._v("的功能结合在一起，你可以将"),t("code",[e._v("Callable")]),e._v("任务提交给它来执行，然后用类似与队列操作的"),t("code",[e._v("take")]),e._v("和"),t("code",[e._v("poll")]),e._v("等方法来获取已完成的结果，而这些结果会在完成时被封装为Future。")]),e._v(" "),t("p",[t("code",[e._v("ExecutorCompletionService")]),e._v("实现了"),t("code",[e._v("CompletionService")]),e._v("，并将计算部分委托给一个"),t("code",[e._v("Executor")]),e._v("。")]),e._v(" "),t("p",[t("code",[e._v("ExecutorCompletionService")]),e._v("的实现非常简单，在构造函数中创建一个"),t("code",[e._v("BlockingQueue")]),e._v("来保存计算完成的结果。当计算完成时，调用"),t("code",[e._v("FutureTask")]),e._v("的"),t("code",[e._v("done")]),e._v("方法。当提交某个任务时，该任务将首先包装为一个"),t("code",[e._v("QueueFuture")]),e._v("，这是"),t("code",[e._v("FutureTask")]),e._v("的一个子类，然后改写该子类的"),t("code",[e._v("done")]),e._v("方法，将结果放入BlockingQueue中。")]),e._v(" "),t("p",[t("em",[e._v("示例:使用CompletionService实现页面渲染器")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("****** 程序清单6-14 使用CompletionService,使每张图片在下载完成后都能即时的渲染 ******\n\npublic class CompletionServiceRenderer{\n    private final ExecutorService executor;\n    public CompletionServiceRenderer(ExecutorService executor){\n        this.executor = executor;\n    }\n    void renderPage(CharSequence source){\n        final List<ImageInfo> imageInfos = scanForImageInfo(source);\n        CompletionService<ImageData> completionService = new ExecutorCompletionService<>(executor);\n        for(ImageInfo imageInfo:imageInfos){\n            completionService.submit(new java.util.concurrent.Callable<ImageData>() {\n                @Override\n                public ImageData call() throws Exception {\n                    return imageInfo.download();\n                }\n            });\n        }\n        renderText(source);\n        try {\n            for(int i=0,n=imageInfos.size();i<n;i++){\n                Future<ImageData> future = completionService.take();\n                ImageData imageData = future.get();\n                renderImage(imageData);\n            }\n        } catch (InterruptedException e) {\n            Thread.currentThread().interrupt();\n        } catch (ExecutionException e) {\n            throw launderThrowable(e.getCause());\n        }\n    }\n}\n")])])]),t("p",[e._v("在程序清单6-14中，每一张图片的下载都创建了一个新的任务，并在线程池中执行，所有图片的下载都是独立且并行的，并且下载完成后马上渲染到页面。")]),e._v(" "),t("p",[e._v("多个"),t("code",[e._v("ExecutorCompletionService")]),e._v("可以共享一个"),t("code",[e._v("Executor")]),e._v("。")]),e._v(" "),t("h3",{attrs:{id:"_3-3-为任务设置时限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-为任务设置时限"}},[e._v("#")]),e._v(" 3.3 为任务设置时限")]),e._v(" "),t("p",[e._v("在有限时间内执行任务的主要困难在于，要确保得到答案的时间不会超过限定的时间，或者在限定的时间内无法获得答案，在支持时间限制的"),t("code",[e._v("Future.get")]),e._v("中支持这种需求，当结果可用时，将立即返回，如果在指定时限内没有计算出结果，那么将抛出"),t("code",[e._v("TimeOutException")]),e._v("。")]),e._v(" "),t("p",[e._v("在使用限时任务时需要注意，当这些任务超时后，应该立即停止，从而避免为继续计算一个不再使用的结果而浪费计算资源。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("****** 程序清单6-16 在指定时间内获取广告信息 ******\n\nPage renderPageWithAd(){\n    long endNanos = System.nanoTime() + 5000;\n    Future<Ad> future = exec.submit(new FetchAdTask());\n    Page page = renderPage();\n    Ad ad;\n    try{\n        //设置等待时间最长为5s\n        long timeLeft = endNanos - System.nanoTime();\n        ad = future.get(timeLeft);\n    }catch (ExecutionException){\n        //发生执行异常后,设置为默认广告\n        ad = DEFAULT_AD;\n    }catch (TimeoutException){\n        //获取指定广告超时后,设置为默认广告\n        ad = DEFAULT_AD;\n        //并且取消任务\n        future.cancel(true);\n    }\n    page.setAd(ad);\n    return page;\n}\n")])])]),t("p",[e._v("传递给get的timeout参数的计算方式是，将指定时限减去当前时间，这可能会得到负数，但java.util.concurrent中所有与时限相关的方法都将负数视为零，因此不需要额外的代码来处理这种情况。")]),e._v(" "),t("p",[t("strong",[e._v("示例:旅行预定门户网站")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('****** 程序清单6-17 在预定时间内请求旅游报价 ******\n\n//定义获取报价的任务\nprivate class QuoteTask implements Callable<TravelQuote>{\n\n    private final TravelCompany company;\n    private final TravelInfo info;\n\n    public QuoteTask(TravelCompany company,TravelInfo info){\n        this.company = company;\n        this.info = info;\n    }\n\n    @Override\n    public TravelQuote call() throws Exception {\n        return company.getQuote(info);\n    }\n}\n\n//获取指定排序的报价列表\npublic List<TravelQuote> getRankedTravelQuote(TravelInfo info, Set<TravelCompany> companySet,\n       Comparator<TravelCompany> ranking,long time,TimeUnit timeUnit) throws InterruptedException {\n    //创建任务集合并填充\n    List<QuoteTask> tasks = new ArrayList<>();\n    for(TravelCompany company:companySet){\n        tasks.add(new QuoteTask(company,info));\n    }\n    //通过invokeAll方法获取查询报价的future集合\n    List<Future<TravelQuote>> futures = exec.invokeAll(tasks,time,timeUnit);\n    //创建报价结果集合\n    List<TravelQuote> result = new ArrayList<>();\n    for(Future<TravelQuote> future:futures){\n        try {\n            //报价查询成功,直接放入集合\n            result.add(future.get());\n        } catch (ExecutionException e) {\n            result.add("查询失败的提示");\n        } catch (CancellationException e){\n            result.add("查询超时的提示");\n        }\n    }\n    \n}\n')])])])])}),[],!1,null,null,null);t.default=r.exports}}]);