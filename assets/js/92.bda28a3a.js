(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{376:function(n,t,a){"use strict";a.r(t);var e=a(7),i=Object(e.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"_1-死锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-死锁"}},[n._v("#")]),n._v(" 1. 死锁")]),n._v(" "),t("h3",{attrs:{id:"_1-1-锁顺序死锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-锁顺序死锁"}},[n._v("#")]),n._v(" 1.1 锁顺序死锁")]),n._v(" "),t("p",[n._v("如果所有线程以固定的顺序来获得锁，那么在程序中就不会出现锁顺序死锁问题.")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("****** 程序清单10-1 简单的锁顺序死锁 ******\n\npublic class LeftRightDeadLock{\n    private final Object left =  new Object();\n    private final Object right =  new Object();\n    \n    public void leftRight(){\n        synchronized (left){\n            synchronized (right){\n                doSomething();\n            }\n        }\n    }\n\n    public void rightLeft(){\n        synchronized (right){\n            synchronized (left){\n                doSomethingElse();\n            }\n        }\n    }\n}\n")])])]),t("h3",{attrs:{id:"_1-2-动态的锁顺序死锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-动态的锁顺序死锁"}},[n._v("#")]),n._v(" 1.2 动态的锁顺序死锁")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("****** 程序清单10-2 动态的锁顺序死锁 ******\n\npublic void transferMoney(Account fromAccount,Account toAccount,DollarAmount amount){\n    synchronized (fromAccount){\n        synchronized (toAccount){\n            if(fromAccount.getMoney().compareTo(amount)<0){\n                throw new RuntimeException();\n            }else{\n                fromAccount.debit(amount);\n                toAccount.credit(amount);\n            }\n            \n        }\n    }\n}\n")])])]),t("p",[n._v("程序清单10-2模拟了银行转账的逻辑，初步看起来，貌似不会有死锁的问题，但是该代码依然会出现死锁问题，那就是当A向B转账的同时，另一个线程中B向A转账，便会发生死锁。")]),n._v(" "),t("p",[n._v("在指定锁的顺序时，可以使用"),t("code",[n._v("System.identifyHashCode")]),n._v("方法，该方法将返回由"),t("code",[n._v("Object.hashCode")]),n._v("返回的值。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("****** 程序清单10-3 通过锁顺序来避免死锁 ******\n\nprivate static final Object tieLock = new Object();\n\npublic void transferMoney(Account fromAccount,Account toAccount,DollarAmount amount){\n    class Helper{\n        public void transfer(){\n            if(fromAccount.getMoney().compareTo(amount)<0){\n                throw new RuntimeException();\n            }else{\n                fromAccount.debit(amount);\n                toAccount.credit(amount);\n            }\n        }\n    }\n    \n    int fromHash = System.identityHashCode(fromAccount);\n    int toHash = System.identityHashCode(toAccount);\n    \n    if(fromAccount < toAccount){\n        synchronized (fromAccount){\n            synchronized (toAccount){\n                new Helper().transfer();\n            }\n        }\n    }else if(fromAccount > toAccount){\n        synchronized (toAccount){\n            synchronized (fromAccount){\n                new Helper().transfer();\n            }\n        }\n    }else{\n        synchronized (tieLock){\n            synchronized (fromAccount){\n                synchronized (toAccount){\n                    new Helper().transfer();\n                }\n            }\n        }\n    }\n}\n")])])]),t("p",[n._v("在极少数情况下，两个对象可能拥有相同的散列值，此时必须通过某种任意的方法来决定锁的顺序，而这可能又会重新引入死锁。为了避免这种情况，可以使用”加时赛”锁，在获取Account两个锁之前，首先获得这个”加时赛”锁，从而保证每次只有一个线程以未知的顺序获得这两个锁，从而消除了死锁发生的可能性。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("** 程序清单10-4 在典型条件下会发生死锁的循环 **\n\npublic class DemonstrateDeadlock{\n    private static final int NUM_THREADS = 20;\n    private static final int NUM_ACCOUNTS = 20;\n    private static final int NUM_ITERATIONS = 20;\n\n    public static void main(String[] args) {\n        final Random random = new Random();\n        final Account[] accounts = new Account[NUM_ACCOUNTS];\n        \n        for(int i=0;i<accounts.length;i++){\n            accounts[i] = new Account();\n        }\n        \n        class TransferThread extends Thread{\n            @Override\n            public void run() {\n                for(int i=0;i<NUM_ITERATIONS;i++){\n                    int fromAccount = random.nextInt(NUM_ACCOUNTS);\n                    int toAccount = random.nextInt(NUM_ACCOUNTS);\n                    DollarAmount amount = new DollarAmount(random.nextInt(1000));\n                    transferMoney(accounts[fromAccount],accounts[toAccount],amount);\n                }\n            }\n        }\n        \n        for(int i=0;i<NUM_THREADS;i++){\n            new TransferThread().start();\n        }\n    }\n}\n")])])]),t("h3",{attrs:{id:"_1-3-在协作对象之间发生的死锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-在协作对象之间发生的死锁"}},[n._v("#")]),n._v(" 1.3 在协作对象之间发生的死锁")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('****** 程序清单10-5 在相互协作的对象之间的锁顺序死锁 ******\n\nclass Taxi{\n    @GuardeBy("this")\n    private Point location,destination;\n    private final Dispatcher dispatcher;\n    \n    public Taxi(Dispatcher dispatcher){\n        this.dispatcher = dispatcher;\n    }\n    \n    public synchronized Point getLocation(){\n        return location;\n    }\n    \n    public synchronized void setLocation(Point location){\n        this.location = location;\n        if(location.equals(destination)){\n            dispatcher.notifyAvailable(this);\n        }\n    }\n}\n\nclass Dispatcher{\n    @GuardeBy("this")\n    private final Set<Taxi> taxis;\n    @GuardeBy("this")\n    private final Set<Taxi> availableTaxis;\n    \n    public Dispatcher(){\n        taxis = new HashSet<>();\n        availableTaxis = new HashSet<>();\n    }\n    \n    public synchronized void notifyAvailable(Taxi taxi){\n        availableTaxis.add(taxi);\n    }\n    \n    public synchronized Image getImage(){\n        Image image = new Image();\n        for(Taxi t:taxis){\n            image.drawMarker(t.getLocation());\n        }\n        return image;\n    }\n}\n')])])]),t("p",[n._v("尽管没有任何方法会显式地获取两个数，但"),t("code",[n._v("setLocation")]),n._v("和"),t("code",[n._v("getImage")]),n._v("等方法的调用者都会获得两个锁。如果一个线程在收到GPS接收器的更新事件时调用"),t("code",[n._v("setLocation")]),n._v("，那么它将首先更新出租车的位置，然后判断出它是否到达了目的地。如果已经到达，它会通知Dispatcher需要一个新的目的地。因为"),t("code",[n._v("setLocation")]),n._v("和"),t("code",[n._v("notifyAvailable")]),n._v("都是同步方法，因此调用"),t("code",[n._v("setLocation")]),n._v("的线程将首先获取Taxi的锁，然后获取Dispatcher的锁。同样，调用"),t("code",[n._v("getImage")]),n._v("的线程将首先获取Dispatcher的锁，然后再获取每一个Taxi的锁。这与LeftRightDeadLock中的情况相同，两个线程按照不同的顺序来获取两个锁，因此就可能产生死锁。")]),n._v(" "),t("h3",{attrs:{id:"_1-4-开放调用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-开放调用"}},[n._v("#")]),n._v(" 1.4 开放调用")]),n._v(" "),t("p",[n._v("如果在调用某个方法时不需要持有锁，那么这种调用被称为开放调用。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('****** 程序清单10-6 通过公开调用来避免在相互协作的对象之间产生死锁 ******\n\nclass Taxi{\n    @GuardeBy("this")\n    private Point location,destination;\n    private final Dispatcher dispatcher;\n\n    public Taxi(Dispatcher dispatcher){\n        this.dispatcher = dispatcher;\n    }\n\n    public synchronized Point getLocation(){\n        return location;\n    }\n\n    public void setLocation(Point location){\n        boolean reachedDestination;\n        synchronized (this){\n            this.location = location;\n            reachedDestination = location.equals(destination);\n        }\n        if(reachedDestination){\n            dispatcher.notifyAvailable(this);\n        }\n    }\n}\n\nclass Dispatcher{\n    @GuardeBy("this")\n    private final Set<Taxi> taxis;\n    @GuardeBy("this")\n    private final Set<Taxi> availableTaxis;\n\n    public Dispatcher(){\n        taxis = new HashSet<>();\n        availableTaxis = new HashSet<>();\n    }\n\n    public synchronized void notifyAvailable(Taxi taxi){\n        availableTaxis.add(taxi);\n    }\n\n    public Image getImage(){\n        Set<Taxi> copy;\n        synchronized (this){\n            copy = new HashSet<>(taxis);\n        }\n        Image image = new Image();\n        for(Taxi t:copy){\n            image.drawMarker(t.getLocation());\n        }\n        return image;\n    }\n}\n')])])]),t("h3",{attrs:{id:"_1-5-资源死锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-资源死锁"}},[n._v("#")]),n._v(" 1.5 资源死锁")]),n._v(" "),t("p",[n._v("当多个线程相互持有彼此正在等待的锁而又不释放自己已持有的锁时会发生死锁，当它们在相同的资源集合上等待时,也会发生死锁。")]),n._v(" "),t("p",[n._v("有界线程池/资源池与相互依赖的任务不能一起使用。")]),n._v(" "),t("h2",{attrs:{id:"_2-死锁的避免与诊断"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-死锁的避免与诊断"}},[n._v("#")]),n._v(" 2. 死锁的避免与诊断")]),n._v(" "),t("h3",{attrs:{id:"_2-1-避免"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-避免"}},[n._v("#")]),n._v(" 2.1 避免")]),n._v(" "),t("ol",[t("li",[n._v("确保多个线程获取锁的顺序都保持一致。")]),n._v(" "),t("li",[n._v("尽可能使用开放调用。")]),n._v(" "),t("li",[n._v("显式使用Lock类中的定时tryLock功能。")])]),n._v(" "),t("h3",{attrs:{id:"_2-2-诊断"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-诊断"}},[n._v("#")]),n._v(" 2.2 诊断")]),n._v(" "),t("p",[n._v("可以通过线程转储信息来分析死锁。")]),n._v(" "),t("h2",{attrs:{id:"_3-其他活跃性危险"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-其他活跃性危险"}},[n._v("#")]),n._v(" 3. 其他活跃性危险")]),n._v(" "),t("h3",{attrs:{id:"_3-1-饥饿"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-饥饿"}},[n._v("#")]),n._v(" 3.1 饥饿")]),n._v(" "),t("p",[n._v("在Thread API中定义的线程优先级只是作为线程调度的参考。")]),n._v(" "),t("p",[n._v("在Thread API中定义了10个优先级，JVM根据需要将它们映射到操作系统的调度优先级。这种映射是与特定平台相关的。")]),n._v(" "),t("p",[t("strong",[n._v("要避免使用线程优先级")]),n._v("，因为这会增加平台依赖性，并可能导致活跃性问题。在大多数并发应用程序中，都可以使用默认的线程优先级。")]),n._v(" "),t("h3",{attrs:{id:"_3-2-糟糕的响应性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-糟糕的响应性"}},[n._v("#")]),n._v(" 3.2 糟糕的响应性")]),n._v(" "),t("h3",{attrs:{id:"_3-3-活锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-活锁"}},[n._v("#")]),n._v(" 3.3 活锁")]),n._v(" "),t("p",[n._v("活锁不会阻塞线程，但也不能继续执行，因为线程将不断重复执行相同的操作，而且总会失败。")]),n._v(" "),t("p",[n._v("当多个相互协作的线程都对彼此进行响应从而修改各自的状态，并使得任何一个线程都无法继续执行时，就发生了活锁。")]),n._v(" "),t("p",[n._v("在并发应用程序中，通过等待随机长度的时间和回退可以有效地避免活锁的发生。")])])}),[],!1,null,null,null);t.default=i.exports}}]);