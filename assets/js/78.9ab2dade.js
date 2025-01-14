(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{363:function(e,n,t){"use strict";t.r(n);var a=t(7),i=Object(a.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[n("img",{attrs:{src:"/img/java/javase/collection/2.1.png",alt:""}})]),e._v(" "),n("h2",{attrs:{id:"_1-linkedlist"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-linkedlist"}},[e._v("#")]),e._v(" 1. LinkedList")]),e._v(" "),n("p",[e._v("LinkedList是一个双向链表，同时实现了List和Deque接口，允许插入重复元素，允许插入null值。它不是线程安全的。如果在多线程环境下使用，需要手动实现同步，或者使用工具类Collections提供的静态方法获取其同步的包装类：List list = Collections.synchronizedList(new LinkedList(...))；或者考虑使用concurrent模块提供的构建工具。")]),e._v(" "),n("h3",{attrs:{id:"_1-1-内部实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-内部实现"}},[e._v("#")]),e._v(" 1.1 内部实现")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("transient Node<E> first;\ntransient Node<E> last;\nprivate static class Node<E> {\n    E item;\n    Node<E> next;\n    Node<E> prev;\n\n    Node(Node<E> prev, E element, Node<E> next) {\n        this.item = element;\n        this.next = next;\n        this.prev = prev;\n    }\n}\n")])])]),n("p",[e._v("通过源码，可以看到LinkedList内部是通过维护两个首尾Node节点，每个Node节点内都记录这前后的节点和自身包含的元素，从而实现了一个双端链表。")]),e._v(" "),n("h3",{attrs:{id:"_1-2-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-api"}},[e._v("#")]),e._v(" 1.2 API")]),e._v(" "),n("h4",{attrs:{id:"_1-2-1-add-e-e"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-add-e-e"}},[e._v("#")]),e._v(" 1.2.1 add(E e)")]),e._v(" "),n("p",[e._v("向尾部添加，等同于addLast(E e)方法。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("public boolean add(E e) {\n    linkLast(e);\n    return true;\n}\n\nvoid linkLast(E e) {\n    final Node<E> l = last;          //获取当前的尾节点\n    final Node<E> newNode = new Node<>(l, e, null);    //创建新节点,将其前节点关联到当前尾节点,后节点为null,因为add添加是向尾部添加\n    last = newNode;                //更新尾节点引用为新建的节点\n    if (l == null)             //如果之前的尾节点为null,说明链表中没有元素\n        first = newNode;         //那么新建的节点就是首节点\n    else\n        l.next = newNode;        //否则将之前的尾节点的后节点关联为新的尾节点\n    size++;                      //递增元素个数\n    modCount++;                   //递增修改次数\n}\n")])])]),n("h4",{attrs:{id:"_1-2-2-addfirst-e-e"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-addfirst-e-e"}},[e._v("#")]),e._v(" 1.2.2 addFirst(E e)")]),e._v(" "),n("p",[e._v("向头部添加元素")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("public void addFirst(E e) {\n    linkFirst(e);\n}\n\nprivate void linkFirst(E e) {\n    final Node<E> f = first;      //获取当前的首节点\n    final Node<E> newNode = new Node<>(null, e, f);    //新建节点,将其后节点关联到当前的首节点\n    first = newNode;            //更新首节点引用为新建节点\n    if (f == null)             //如果之前的首节点为null,说明链表中没有元素\n        last = newNode;             //那么新建节点也是尾节点\n    else\n        f.prev = newNode;        //否则将之前的首节点的前节点关联为新建节点\n    size++;                      //递增元素个数\n    modCount++;                   //递增修改次数\n}\n")])])]),n("h4",{attrs:{id:"_1-2-3-add-int-index-e-e"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-add-int-index-e-e"}},[e._v("#")]),e._v(" 1.2.3 add(int index,E e)")]),e._v(" "),n("p",[e._v("向指定位置添加元素")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("public void add(int index, E element) {\n    checkPositionIndex(index);    //首先检查参数角标\n\n    if (index == size)          //当前最后一个元素的角标是size-1,如果index等于size,说明是向尾部添加\n        linkLast(element);       //调用linkLast方法向尾部添加元素\n    else\n        linkBefore(element, node(index));  //否则,先获取index角标位置的元素,然后调用linkBefore向指定位置添加元素\n}\n\nprivate void checkPositionIndex(int index) {\n    if (!isPositionIndex(index))\n        throw new IndexOutOfBoundsException(outOfBoundsMsg(index));\n}\nprivate boolean isPositionIndex(int index) {\n    return index >= 0 && index <= size;       //检查参数角标是否超出范围\n}\n\nNode<E> node(int index) {\n    // assert isElementIndex(index);\n\n    if (index < (size >> 1)) {    //如果index小于size的一半,也就是index在列表的前一半位置\n        Node<E> x = first;       //获取当前的首节点\n        for (int i = 0; i < index; i++)\n            x = x.next;             //从首节点开始遍历,获取到当前index位置的元素\n        return x;\n    } else {\n        Node<E> x = last;        //反之则从尾节点开始向前遍历,获取到当前index位置的元素\n        for (int i = size - 1; i > index; i--)\n            x = x.prev;\n        return x;\n    }\n}\n\nvoid linkBefore(E e, Node<E> succ) {\n    // assert succ != null;\n    final Node<E> pred = succ.prev;          //获取添加前index位置节点的前一个节点\n    final Node<E> newNode = new Node<>(pred, e, succ); //创建新节点,将其前节点关联为pred,后节点关联为添加前index位置节点\n    succ.prev = newNode;               //更新添加前index位置节点的前节点关联\n    if (pred == null)                 //如果pred为null,说明插入的是首节点\n        first = newNode;\n    else\n        pred.next = newNode;            //否则更新pred的后节点关联为新建节点\n    size++;                            //递增元素个数\n    modCount++;                         //递增修改次数\n}\n")])])]),n("h4",{attrs:{id:"_1-2-4-remove-、removefirst-、poll-、pollfirst"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-4-remove-、removefirst-、poll-、pollfirst"}},[e._v("#")]),e._v(" 1.2.4 remove()、removeFirst()、poll()、pollFirst()")]),e._v(" "),n("p",[e._v("删除首节点。")]),e._v(" "),n("p",[e._v("remove和poll都会删除并返回删除u的元素，但是两者也有一个明显的区别：那就是当链表中没有元素时，remove操作抛处NoSuchElementException异常，而poll操作返回null。")]),e._v(" "),n("p",[e._v("以remove()方法为例:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("public E remove() {\n    return removeFirst();\n}\n\npublic E removeFirst() {\n    final Node<E> f = first;\n    if (f == null)\n        throw new NoSuchElementException();\n    return unlinkFirst(f);\n}\n\nprivate E unlinkFirst(Node<E> f) {\n    // assert f == first && f != null;\n    final E element = f.item;     //获取首节点中的元素\n    final Node<E> next = f.next;   //获取首节点的下一个节点\n    f.item = null;             //清空首节点的引用,避免由于过期引用引起内存泄露\n    f.next = null; // help GC     //清空首节点的引用,避免由于过期引用引起内存泄露\n    first = next;              //更新首节点引用\n    if (next == null)           //如果next为null,说明链表删除首节点后元素数量为0\n        last = null;            //更新last为null\n    else\n        next.prev = null;        //否则更新next的前节点为null,因为现在next为新的首节点\n    size--;                      //递减元素个数\n    modCount++;                   //递增修改次数\n    return element;                //返回元素\n}\n")])])]),n("h4",{attrs:{id:"_1-2-5-removelast-、polllast"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-5-removelast-、polllast"}},[e._v("#")]),e._v(" 1.2.5 removeLast()、pollLast()")]),e._v(" "),n("p",[e._v("删除尾节点。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("public E removeLast() {\n    final Node<E> l = last;\n    if (l == null)\n        throw new NoSuchElementException();\n    return unlinkLast(l);\n}\n\nprivate E unlinkLast(Node<E> l) {\n    // assert l == last && l != null;\n    final E element = l.item;     //获取尾节点中的元素\n    final Node<E> prev = l.prev;   //获取尾节点的前节点\n    l.item = null;             //清空尾节点的引用,避免由于过期引用引起内存泄露\n    l.prev = null; // help GC     //清空尾节点的引用,避免由于过期引用引起内存泄露\n    last = prev;               //更新尾节点引用\n    if (prev == null)           //如果prev为null,说明链表删除尾节点后元素数量为0\n        first = null;           //更新first为null\n    else\n        prev.next = null;        //否则更新prev的后节点为null,因为现在prev为新的尾节点\n    size--;                      //递减元素个数\n    modCount++;                   //递增修改次数\n    return element;                //返回元素\n}\n")])])]),n("h4",{attrs:{id:"_1-2-6-remove-int-index"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-6-remove-int-index"}},[e._v("#")]),e._v(" 1.2.6 remove(int index)")]),e._v(" "),n("p",[e._v("删除指定位置的元素。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("public E remove(int index) {\n    checkElementIndex(index);     //先检查index角标是否超出范围\n    return unlink(node(index));       //先调用node()方法获取index位置的元素,此方法在上面已经有详细讲解,然后调用unlink方法删除index位置的元素\n}\n\nE unlink(Node<E> x) {\n    // assert x != null;\n    final E element = x.item;     //获取节点的元素\n    final Node<E> next = x.next;   //获取前节点\n    final Node<E> prev = x.prev;   //获取后节点\n\n    if (prev == null) {             //如果前节点为null,说明当前index位置节点为first首节点\n        first = next;           //更新首节点引用为后节点\n    } else {\n        prev.next = next;        //否则将index位置的前后节点相连\n        x.prev = null;          //清空被删除节点的前节点引用,避免过期引用导致内存泄露\n    }\n\n    if (next == null) {             //如果后节点为null,说明当前index位置节点为last尾节点\n        last = prev;            //更新尾节点引用为前节点\n    } else {\n        next.prev = prev;        //否则将index位置的前后节点相连\n        x.next = null;          //清空被删除节点的后节点引用,避免过期引用导致内存泄露\n    }\n\n    x.item = null;             //清空删除节点的元素引用,避免过期引用导致内存泄露\n    size--;                      //递减元素个数\n    modCount++;                   //递增修改次数\n    return element;                //返回元素\n}\n")])])]),n("p",[e._v("LinkedList与ArrayList相比，插入和删除更快，但是随即查询和遍历较慢。")]),e._v(" "),n("h2",{attrs:{id:"_2-arraylist"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-arraylist"}},[e._v("#")]),e._v(" 2. ArrayList")]),e._v(" "),n("p",[e._v("ArrayList是一个元素有序、可重复的集合。内部通过维护一个数组实现，允许添加任何元素，包括null值。\nsize、isEmpty、get、set、iterator和listIterator方法的时间复杂度为O(1)，add添加操作的时间复杂度为O(n)，剩下的其他操作都是线性时间的复杂度(大体上讲)。\n非线程安全，如果在多线程环境下使用，请手动同步，或者使用集合工具类Collections来获取其同步包装类: List list = Collections.synchronizedList(new ArrayList(...));\n它返回的迭代器或者迭代方法属于快速失败，也就是说在遍历过程中，如果并发添加或者删除了元素，那么将立即抛出ConcurrentModificationException异常。")]),e._v(" "),n("h3",{attrs:{id:"_2-1-内部实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-内部实现"}},[e._v("#")]),e._v(" 2.1 内部实现")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("private static final int DEFAULT_CAPACITY = 10;     //ArrayList的默认大小\n\nprivate static final Object[] EMPTY_ELEMENTDATA = {};   //空数组,当指定初始化大小为0的ArrayList时,elementData默认为EMPTY_ELEMENTDATA\n\nprivate static final Object[] DEFAULTCAPACITY_EMPTY_ELEMENTDATA = {};   //默认的空数组,当使用无参构造函数初始化ArrayList时,elementData默认为EMPTY_ELEMENTDATA\n\ntransient Object[] elementData;                     //存放元素的真正内部数组容器\n\nprivate int size;                                   //记录元素个数\n")])])]),n("h3",{attrs:{id:"_2-2-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-api"}},[e._v("#")]),e._v(" 2.2 API")]),e._v(" "),n("h4",{attrs:{id:"_2-2-1-构造函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-构造函数"}},[e._v("#")]),e._v(" 2.2.1 构造函数")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('public ArrayList(int initialCapacity) {\n    if (initialCapacity > 0) {\n        this.elementData = new Object[initialCapacity];\n    } else if (initialCapacity == 0) {                  //如果指定初始化大小为0,那么elementData直接默认为EMPTY_ELEMENTDATA\n        this.elementData = EMPTY_ELEMENTDATA;\n    } else {\n        throw new IllegalArgumentException("Illegal Capacity: "+\n                initialCapacity);\n    }\n}\n\n\npublic ArrayList() {\n    this.elementData = DEFAULTCAPACITY_EMPTY_ELEMENTDATA;   //当时用无参构造函数初始化是,elementData默认为DEFAULTCAPACITY_EMPTY_ELEMENTDATA\n}\n')])])]),n("h4",{attrs:{id:"_2-2-2-add-e-e"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-add-e-e"}},[e._v("#")]),e._v(" 2.2.2 add(E e)")]),e._v(" "),n("p",[e._v("添加元素。")]),e._v(" "),n("p",[e._v("在内部数组容器中添加一个元素的操作很简单，我们查看add源码的主要目的是了解ArrayList是如何来实现自动扩容的。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("public boolean add(E e) {\n    ensureCapacityInternal(size + 1);  // 检查添加一个元素后容器大小情况,如果达到一定大小,自动扩容\n    elementData[size++] = e;            //添加元素操作,很简单,向数组指定位置添加一个元素\n    return true;\n}\n\nprivate void ensureCapacityInternal(int minCapacity) {\n    ensureExplicitCapacity(calculateCapacity(elementData, minCapacity));    //先调用calculateCapacity方法来比较elementData内部数组容器的大小和添加一个元素后需要的大小,并取较大值,然后调用ensureExplicitCapacity方法\n}\n\nprivate static int calculateCapacity(Object[] elementData, int minCapacity) {\n    if (elementData == DEFAULTCAPACITY_EMPTY_ELEMENTDATA) {         //如果elementData为默认数组,那么说明数组内没有元素\n        return Math.max(DEFAULT_CAPACITY, minCapacity);             //直接比较默认数组大小于所需大小\n    }\n    return minCapacity;                                             //否则说明数组内已经有元素,不是空数组,那么直接返回所需大小\n}\n\nprivate void ensureExplicitCapacity(int minCapacity) {\n    modCount++;\n\n    if (minCapacity - elementData.length > 0)       //如果当前elementData数组大小不能满足需要\n        grow(minCapacity);                          //进行扩容\n}\n\nprivate void grow(int minCapacity) {\n    // overflow-conscious code\n    int oldCapacity = elementData.length;                   //elementData数组扩容前的大小\n    int newCapacity = oldCapacity + (oldCapacity >> 1);     //每次扩容为原先大小的1.5倍\n    if (newCapacity - minCapacity < 0)                      //如果扩容后的大小还不满足所需大小\n        newCapacity = minCapacity;                          //那么直接扩容到所需大小\n    if (newCapacity - MAX_ARRAY_SIZE > 0)                   //如果扩容后大小大于MAX_ARRAY_SIZE(默认为Integer.MAX_VALUE - 8)\n        newCapacity = hugeCapacity(minCapacity);            //那么调用hugeCapacity,返回一个合理的扩容大小\n    // minCapacity is usually close to size, so this is a win:\n    elementData = Arrays.copyOf(elementData, newCapacity);  //直接使用工具类Arrays提供的静态方法进行扩容(静态方法内部是通过创建新数组并重新填充元素来实现的)\n}\n\nprivate static int hugeCapacity(int minCapacity) {\n    if (minCapacity < 0) // overflow-conscious              \n        throw new OutOfMemoryError();\n    return (minCapacity > MAX_ARRAY_SIZE) ?\n            Integer.MAX_VALUE :\n            MAX_ARRAY_SIZE;\n}\n")])])]),n("h4",{attrs:{id:"_2-2-3-add-int-index-e-e"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-3-add-int-index-e-e"}},[e._v("#")]),e._v(" 2.2.3 add(int index,E e)")]),e._v(" "),n("p",[e._v("向指定位置添加元素。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("public void add(int index, E element) {\n    rangeCheckForAdd(index);            //检查参数index是否合法\n\n    ensureCapacityInternal(size + 1);      // 检查数组容器大小是否够用,不够的话进行扩容\n    System.arraycopy(elementData, index, elementData, index + 1,\n            size - index);                 //将elementData中从index位置开始的元素复制到elementData中index+1的位置,也就是将elementData数组中index位置开始的元素向后移动一位\n    elementData[index] = element;           //在index位置放入新元素\n    size++;\n}\n\nprivate void rangeCheckForAdd(int index) {\n    if (index > size || index < 0)\n        throw new IndexOutOfBoundsException(outOfBoundsMsg(index));\n}\n")])])]),n("h4",{attrs:{id:"_2-2-4-remove-int-index"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-4-remove-int-index"}},[e._v("#")]),e._v(" 2.2.4 remove(int index)")]),e._v(" "),n("p",[e._v("移除指定位置的元素。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("public E remove(int index) {\n    rangeCheck(index);          //检查index是否合法\n\n    modCount++;\n    E oldValue = elementData(index);    //获取index位置的元素\n\n    int numMoved = size - index - 1;\n    if (numMoved > 0)\n        System.arraycopy(elementData, index+1, elementData, index,\n                numMoved);             //从index+1位置开始,将所有元素向前移动一位\n    elementData[--size] = null;         //清除数组最后一位的引用,递减数组个数size\n    return oldValue;        //返回被删除的元素\n}\n\nprivate void rangeCheck(int index) {\n    if (index >= size)\n        throw new IndexOutOfBoundsException(outOfBoundsMsg(index));\n}\n\nE elementData(int index) {\n    return (E) elementData[index];\n}\n")])])]),n("h4",{attrs:{id:"_2-2-5-remove-object-o"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-5-remove-object-o"}},[e._v("#")]),e._v(" 2.2.5 remove(Object o)")]),e._v(" "),n("p",[e._v("删除指定元素。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("public boolean remove(Object o) {\n    if (o == null) {\n        for (int index = 0; index < size; index++)\n            if (elementData[index] == null) {\n                fastRemove(index);                      //匹配到null,调用fastRemove进行删除\n                return true;\n            }\n    } else {\n        for (int index = 0; index < size; index++)\n            if (o.equals(elementData[index])) {\n                fastRemove(index);                      //匹配到元素o,调用fastRemove进行删除\n                return true;\n            }\n    }\n    return false;\n}\n\nprivate void fastRemove(int index) {\n    modCount++;\n    int numMoved = size - index - 1;\n    if (numMoved > 0)\n        System.arraycopy(elementData, index+1, elementData, index,\n                numMoved);             //从index+1位置开始,将所有元素向前移动一位\n    elementData[--size] = null;                 //清除数组最后一位的引用(如果不清除引用,可能引起过期引用导致的内存泄露),递减数组个数size\n}\n")])])]),n("h4",{attrs:{id:"_2-2-6-iterator"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-6-iterator"}},[e._v("#")]),e._v(" 2.2.6 iterator ()")]),e._v(" "),n("p",[e._v("返回迭代器。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('public Iterator<E> iterator() {\n    return new Itr();\n}\n\nprivate class Itr implements Iterator<E> {\n    int cursor;       // 指针\n    int lastRet = -1; // 下一个需要被返回的元素的角标,如果没有元素,则为-1\n    int expectedModCount = modCount;    // 记录当前被修改的次数(ArrayList的每次增删改操作都会将modCount递增)\n\n    public boolean hasNext() {\n        return cursor != size;      //判断是否有下一个元素,秩序判断当前指针是否到达结尾\n    }\n\n    @SuppressWarnings("unchecked")\n    public E next() {\n        checkForComodification();       //检查modCount是否发生变化,如果发生变化,说明有并发修改操作,那么快速失败.\n                                            抛出ConcurrentModificationException异常\n        int i = cursor;                 //获取当前指针位置\n        if (i >= size)\n            throw new NoSuchElementException();\n        Object[] elementData = ArrayList.this.elementData;  //如果指针位置超出数组,抛出异常\n        if (i >= elementData.length)\n            throw new ConcurrentModificationException();\n        cursor = i + 1;                                     //递增指针.并返回当前位置元素\n        return (E) elementData[lastRet = i];\n    }\n\n    public void remove() {\n        if (lastRet < 0)                //检查是否有下一个元素\n            throw new IllegalStateException();\n        checkForComodification();       //检查是否存在并发修改\n\n        try {\n            ArrayList.this.remove(lastRet); //删除元素\n            cursor = lastRet;               //更新指针\n            lastRet = -1;\n            expectedModCount = modCount;    //更新并发操作数\n        } catch (IndexOutOfBoundsException ex) {\n            throw new ConcurrentModificationException();\n        }\n    }\n\n    final void checkForComodification() {\n        if (modCount != expectedModCount)\n            throw new ConcurrentModificationException();\n    }\n}\n')])])]),n("h4",{attrs:{id:"_2-2-7-listiterator"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-7-listiterator"}},[e._v("#")]),e._v(" 2.2.7 listIterator()")]),e._v(" "),n("p",[e._v("返回一个ListItr迭代器，该迭代器继承了iterator()返回的迭代器，新增了add、set和获取前一个元素的操作，此处不做赘述了，实现比较简单。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('public ListIterator<E> listIterator(int index) {\n    if (index < 0 || index > size)\n        throw new IndexOutOfBoundsException("Index: "+index);\n    return new ListItr(index);\n}\n')])])]),n("h4",{attrs:{id:"_2-2-8-foreach"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-8-foreach"}},[e._v("#")]),e._v(" 2.2.8 forEach()")]),e._v(" "),n("p",[e._v("作为java8新扩展的方法，forEach遍历与迭代器的不同之处在于：forEach并不是快速失败，而是遍历操作后，检查并发性修改操作 。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('public void forEach(Consumer<? super E> action) {\n    Objects.requireNonNull(action);\n    final int expectedModCount = modCount;\n    @SuppressWarnings("unchecked")\n    final E[] elementData = (E[]) this.elementData;\n    final int size = this.size;\n    for (int i=0; modCount == expectedModCount && i < size; i++) {\n        action.accept(elementData[i]);\n    }\n    if (modCount != expectedModCount) {             //可以看到,对于并发性修改操作的检查是在遍历操作之后\n        throw new ConcurrentModificationException();\n    }\n}\n')])])]),n("p",[e._v("ArrayList与LinkedList相比，更适合随机查询和遍历，插入和删除操作较慢。")]),e._v(" "),n("h2",{attrs:{id:"_3-vector"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-vector"}},[e._v("#")]),e._v(" 3. Vector")]),e._v(" "),n("p",[e._v("Vector，同ArrayList一样，也是通过内部维护一个数组来实现的，允许添加任何类型的元素，包括null值。但是与ArrayList最大的不同之处在于：Vector是同步的，在其导出API中，add、remove等方法都使用了synchronized关键字来进行同步，所以在性能上肯定会比不同步的ArrayList差。")]),e._v(" "),n("h3",{attrs:{id:"_3-1-内部实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-内部实现"}},[e._v("#")]),e._v(" 3.1 内部实现")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("protected Object[] elementData; //内部数组\n\nprotected int elementCount;       //元素计数器\n\nprotected int capacityIncrement;   //增长因子\n")])])]),n("p",[e._v("与ArrayList相比，Vector内部多出了一个字段capacityIncrement，我们知道，ArrayList的内部数组默认是以1.5倍的大小增长，而Vector通过维护一个单独的capacityIncrement字段来管理数组的增长因子。")]),e._v(" "),n("h3",{attrs:{id:"_3-2-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-api"}},[e._v("#")]),e._v(" 3.2 API")]),e._v(" "),n("h4",{attrs:{id:"_3-2-1-构造函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-构造函数"}},[e._v("#")]),e._v(" 3.2.1 构造函数")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('public Vector(int initialCapacity, int capacityIncrement) {    //自定义初始数组大小和增长因子\n    super();\n    if (initialCapacity < 0)\n        throw new IllegalArgumentException("Illegal Capacity: "+\n                initialCapacity);\n    this.elementData = new Object[initialCapacity];\n    this.capacityIncrement = capacityIncrement;\n}\n\npublic Vector(int initialCapacity) {\n    this(initialCapacity, 0);           //自定义初始数组大小,默认增长因子为0\n}\n\npublic Vector() {\n    this(10);           //默认初始化数组大小为10\n}\n')])])]),n("p",[e._v("Vector提供了三个构造函数，支持自定义初始化数组的大小和数组的增长因子。默认初始化数组大小为10，增长因子为0。有一点我们不要误解，那就是增长因子为0不代表数组不会增长，下面我们就看一下实现数组扩容的grow方法实现。")]),e._v(" "),n("h4",{attrs:{id:"_3-2-2-grow"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-grow"}},[e._v("#")]),e._v(" 3.2.2 grow()")]),e._v(" "),n("p",[e._v("实现数组扩容 。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("private void grow(int minCapacity) {\n    // overflow-conscious code\n    int oldCapacity = elementData.length;\n    int newCapacity = oldCapacity + ((capacityIncrement > 0) ?\n            capacityIncrement : oldCapacity);  //此处决定了数组扩容后的大小,如果我们定义了增长因子,那么将数组大小扩大固定的定义大小,\n                                                    如果未定义(此时默认为0)或者定义为0,那么数组将以2倍的大小进行扩容\n    if (newCapacity - minCapacity < 0)\n        newCapacity = minCapacity;\n    if (newCapacity - MAX_ARRAY_SIZE > 0)\n        newCapacity = hugeCapacity(minCapacity);\n    elementData = Arrays.copyOf(elementData, newCapacity);\n}\n")])])]),n("h4",{attrs:{id:"_3-2-3-stack"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-3-stack"}},[e._v("#")]),e._v(" 3.2.3 Stack")]),e._v(" "),n("p",[e._v("Vector还有一个子类Stack，Stack实现了LIFO(后进先出)，是一个栈结构，Stack也是同步的，其定义了push、pop、peek等基础的栈操作。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("//向栈中压入元素,越是后面压入的元素,在数组中的角标值越大\npublic E push(E item) {\n    addElement(item);\n\n    return item;\n}\n\n//删除数组最后一个元素,也就是栈顶元素,并返回元素\npublic synchronized E pop() {\n    E       obj;\n    int     len = size();\n\n    obj = peek();\n    removeElementAt(len - 1);\n\n    return obj;\n}\n\n//返回数组最后一个元素,也就是栈顶元素\npublic synchronized E peek() {\n    int     len = size();\n\n    if (len == 0)\n        throw new EmptyStackException();\n    return elementAt(len - 1);\n}\n")])])]),n("p",[e._v("Vector内部数组的扩容策略和ArrayList的不同，其他的实现逻辑基本和ArrayList相同，只是都使用了synchronized来同步。可以将Vector看作是一个同步版的ArrayList 。")]),e._v(" "),n("h2",{attrs:{id:"_4-copyonwritearraylist"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-copyonwritearraylist"}},[e._v("#")]),e._v(" 4. CopyOnWriteArrayList")]),e._v(" "),n("p",[e._v("CopyOnWriteArrayList是ArrayList的线程安全的变体，其原理大概可以通俗的理解为：初始化的时候只有一个容器，很长一段时间，这个容器数据、数量等没有发生变化的时候，多个线程都是读取(假设这段时间里只发生读取的操作)同一个容器中的数据，所以这样大家读到的数据都是唯一、一致、安全的，但是后来有人往里面增加了一个数据，这个时候CopyOnWriteArrayList 底层实现添加的原理是先copy出一个容器(可以简称副本)，再往新的容器里添加这个新的数据，最后把新的容器的引用地址赋值给了之前那个旧的的容器地址，但是在添加这个数据的期间，其他线程如果要去读取数据，仍然是读取到旧的容器里的数据。")]),e._v(" "),n("h3",{attrs:{id:"_4-1-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-api"}},[e._v("#")]),e._v(" 4.1 API")]),e._v(" "),n("p",[e._v("首先，我们先看下add、remove等增删方法的实现，然后再对比get等查找方法，来深入了解其并发性是如何实现的。")]),e._v(" "),n("h4",{attrs:{id:"_4-1-1-add-e-e"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-1-add-e-e"}},[e._v("#")]),e._v(" 4.1.1 add(E e)")]),e._v(" "),n("p",[e._v("添加元素")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("public boolean add(E e) {\n    final ReentrantLock lock = this.lock;\n    lock.lock();                     //lock锁住\n    try {\n        Object[] elements = getArray();       //获取当前的数组容器\n        int len = elements.length;\n        Object[] newElements = Arrays.copyOf(elements, len + 1);   //将当前数组容器中的元素拷贝到一个新数组中,新数组大小为当前数组大小+1\n        newElements[len] = e;           //添加元素到新数组\n        setArray(newElements);          //更新数组容器引用为新数组\n        return true;\n    } finally {\n        lock.unlock();                //lock解锁\n    }\n}\n\nfinal Object[] getArray() {\n    return array;\n}\n\nfinal void setArray(Object[] a) {\n    array = a;\n}\n")])])]),n("h4",{attrs:{id:"_4-1-2-add-int-index-e-e"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-2-add-int-index-e-e"}},[e._v("#")]),e._v(" 4.1.2 add(int index,E e)")]),e._v(" "),n("p",[e._v("向指定位置添加元素")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('public void add(int index, E element) {\n    final ReentrantLock lock = this.lock;\n    lock.lock();\n    try {\n        Object[] elements = getArray();\n        int len = elements.length;\n        if (index > len || index < 0)\n            throw new IndexOutOfBoundsException("Index: "+index+\n                    ", Size: "+len);      //检查参数index的有效性\n        Object[] newElements;\n        int numMoved = len - index;\n        if (numMoved == 0)                                  //如果index==len,说明正好是向数组尾部添加元素\n            newElements = Arrays.copyOf(elements, len + 1);             //那么直接拷贝出一个大小+1的数组\n        else {\n            newElements = new Object[len + 1];                   //否则创建一个大小+1的新数组\n            System.arraycopy(elements, 0, newElements, 0, index);     //拷贝index之前的元素到新数组\n            System.arraycopy(elements, index, newElements, index + 1,  //拷贝index之后的元素到新数组\n                    numMoved);\n        }\n        newElements[index] = element;                          //将元素添加到新数组\n        setArray(newElements);                               //更新数组容器引用\n    } finally {\n        lock.unlock();\n    }\n}\n')])])]),n("h4",{attrs:{id:"_4-1-3-remove-object-o"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-3-remove-object-o"}},[e._v("#")]),e._v(" 4.1.3 remove(Object o)")]),e._v(" "),n("p",[e._v("删除指定元素")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("public boolean remove(Object o) {\n    Object[] snapshot = getArray();                      //获取当前的数组容器,作为一个快照副本\n    int index = indexOf(o, snapshot, 0, snapshot.length);  //在快照中查找元素o的位置,注意,indexOf的查找操作是不加锁同步的,所以为了避免容器并发修改带来的影响,在快照中进行查找\n    return (index < 0) ? false : remove(o, snapshot, index);   //找到则进行删除\n}\n\nprivate static int indexOf(Object o, Object[] elements,\n                           int index, int fence) {\n    if (o == null) {\n        for (int i = index; i < fence; i++)\n            if (elements[i] == null)\n                return i;\n    } else {\n        for (int i = index; i < fence; i++)\n            if (o.equals(elements[i]))\n                return i;\n    }\n    return -1;\n}\n\nprivate boolean remove(Object o, Object[] snapshot, int index) {\n    final ReentrantLock lock = this.lock;\n    lock.lock();                        //lock加锁\n    try {\n        Object[] current = getArray();       //获取当前的数组容器\n        int len = current.length;\n        if (snapshot != current) findIndex: {  //如果快照副本域当前数组容器不相等,说明已经被并发修改过,则需要进一步的查找(将此if语句块标记为findIndex)\n            int prefix = Math.min(index, len); //获取index和len中的最小值,因为删除操作在到达这里之前是不加锁的,可能其他线程已经完成了删除操作,从而使得len小于index\n            for (int i = 0; i < prefix; i++) { //遍历\n                if (current[i] != snapshot[i] && eq(o, current[i])) {  //如果当前容器中i位置元素与快照中i位置元素不想等,并且当前数组i位置元素就是要查找的元素\n                    index = i;                               //记录位置,跳出if,后面的if语句不会再执行\n                    break findIndex;\n                }\n            }\n            if (index >= len)              //遍历中未找到元素,说明元素已经被删除过了,直接返回\n                return false;\n            if (current[index] == o)         //如果当前数组中的index位置正好是该元素,跳出\n                break findIndex;\n            index = indexOf(o, current, index, len);   //继续在当前数组容器index位置开始查找\n            if (index < 0)                      //如果未找到,说明已经被删除了,直接返回\n                return false;\n        }\n        Object[] newElements = new Object[len - 1];       //新建数组,大小-1\n        System.arraycopy(current, 0, newElements, 0, index);   //复制index位置前的元素到新数组\n        System.arraycopy(current, index + 1,               //复制index位置之后的元素到新数组\n                newElements, index,\n                len - index - 1);\n        setArray(newElements);                //更新数组容器引用\n        return true;\n    } finally {\n        lock.unlock();\n    }\n}\n")])])]),n("h4",{attrs:{id:"_4-1-4-remove-int-index"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-4-remove-int-index"}},[e._v("#")]),e._v(" 4.1.4 remove(int index)")]),e._v(" "),n("p",[e._v("删除指定位置的元素")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("public E remove(int index) {\n    final ReentrantLock lock = this.lock;\n    lock.lock();                     //lock加锁\n    try {\n        Object[] elements = getArray();       //获取当前数组容器\n        int len = elements.length;\n        E oldValue = get(elements, index); //获取当前数组容器中index位置的元素\n        int numMoved = len - index - 1;\n        if (numMoved == 0)             //此时说明index是数组的最后一个位置\n            setArray(Arrays.copyOf(elements, len - 1));    //那么直接将最后一个元素之前的所以元素拷贝到新数组,并更新数组引用\n        else {\n            Object[] newElements = new Object[len - 1];       //否新建数组,大小-1\n            System.arraycopy(elements, 0, newElements, 0, index);     //拷贝index位置之前的元素到新数组\n            System.arraycopy(elements, index + 1, newElements, index,  //拷贝index位置之后的元素到新数组\n                    numMoved);\n            setArray(newElements);\n        }\n        return oldValue;      //返回删除的元素\n    } finally {\n        lock.unlock();\n    }\n}\n\nprivate E get(Object[] a, int index) {\n    return (E) a[index];\n}\n")])])]),n("h4",{attrs:{id:"_4-1-5-set-int-index-e-e"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-5-set-int-index-e-e"}},[e._v("#")]),e._v(" 4.1.5 set(int index,E e)")]),e._v(" "),n("p",[e._v("更新指定位置的元素")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("public E set(int index, E element) {\n    final ReentrantLock lock = this.lock;\n    lock.lock();                     //lock加锁\n    try {\n        Object[] elements = getArray();       //获取当前数组容器\n        E oldValue = get(elements, index); //获取当前数组容器中index位置的元素\n\n        if (oldValue != element) {       //如果两者不相等,进行更新\n            int len = elements.length;\n            Object[] newElements = Arrays.copyOf(elements, len);   //拷贝一个elements的副本\n            newElements[index] = element;     //更新index位置为新的元素\n            setArray(newElements);          //更新数组容器引用\n        } else {\n            // Not quite a no-op; ensures volatile write semantics\n            setArray(elements);             //两者相等,直接更新数组容器引用\n        }\n        return oldValue;         //返回index位置的原来的值\n    } finally {\n        lock.unlock();\n    }\n}\n")])])]),n("h4",{attrs:{id:"_4-1-6-get-int-index"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-6-get-int-index"}},[e._v("#")]),e._v(" 4.1.6 get(int index)")]),e._v(" "),n("p",[e._v("查找指定位置的元素")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("public E get(int index) {\n    return get(getArray(), index);\n}\n\nprivate E get(Object[] a, int index) {\n    return (E) a[index];\n}\n")])])]),n("h4",{attrs:{id:"_4-1-7-indexof-object-o"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-7-indexof-object-o"}},[e._v("#")]),e._v(" 4.1.7. indexOf(Object o)")]),e._v(" "),n("p",[e._v("查询指定元素的位置")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("public int indexOf(Object o) {\n    Object[] elements = getArray();\n    return indexOf(o, elements, 0, elements.length);\n}\n\nprivate static int indexOf(Object o, Object[] elements,\n                           int index, int fence) {\n    if (o == null) {\n        for (int i = index; i < fence; i++)\n            if (elements[i] == null)\n                return i;\n    } else {\n        for (int i = index; i < fence; i++)\n            if (o.equals(elements[i]))\n                return i;\n    }\n    return -1;\n}\n")])])]),n("p",[e._v("上面列出了CopyOnWriteArrayList的增加、删除、更新、查找操作的源码实现，我们可以看到，get和indexOf的查询操作并没有加锁同步，而add、set、remove这些增删改的操作使用了加锁同步，并且使用的都是同一个lock，所以，CopyOnWriteArrayList的并发性，是针对查找和修改(包括添加和删除)的操作而言的，查找和修改操作可以并发的进行，如果同时进行修改，那么也会竞争相同的锁。\nCopyOnWriteArrayList每次对内部数组容器进行修改后，都会创建一个新的数组来更新引用，所以当元素过多时，不适合使用CopyOnWriteArrayList，因为数组过大，拷贝的成本比较高。")]),e._v(" "),n("h3",{attrs:{id:"_4-2-缺点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-缺点"}},[e._v("#")]),e._v(" 4.2 缺点")]),e._v(" "),n("p",[e._v("CopyOnWrite容器有很多优点，但是同时也存在两个问题，即内存占用问题和数据一致性问题。所以在开发的时候需要注意一下。")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("内存占用问题。")]),e._v(" "),n("p",[e._v("因为CopyOnWrite的写时复制机制，所以在进行写操作的时候，内存里会同时驻扎两个对象的内存，旧的对象和新写入的对象（注意:在复制的时候只是复制容器里的引用，只是在写的时候会创建新对象添加到新容器里，而旧容器的对象还在使用，所以有两份对象内存）。如果这些对象占用的内存比较大，比如说200M左右，那么再写入100M数据进去，内存就会占用300M，那么这个时候很有可能造成频繁的Yong GC和Full GC。之前我们系统中使用了一个服务由于每晚使用CopyOnWrite机制更新大对象，造成了每晚15秒的Full GC，应用响应时间也随之变长。\n针对内存占用问题，可以通过压缩容器中的元素的方法来减少大对象的内存消耗，比如，如果元素全是10进制的数字，可以考虑把它压缩成36进制或64进制。或者不使用CopyOnWrite容器，而使用其他的并发容器，如ConcurrentHashMap。")])]),e._v(" "),n("li",[n("p",[e._v("数据一致性问题。")]),e._v(" "),n("p",[e._v("CopyOnWrite容器只能保证数据的最终一致性，不能保证数据的实时一致性。所以如果你希望写入的数据，马上能读到，请不要使用CopyOnWrite容器。")])])])])}),[],!1,null,null,null);n.default=i.exports}}]);