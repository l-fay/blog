---
title: Java | 设计模式之单例模式
date: 2021-03-29 15:17:24
tags: [Java, 设计模式]
categories: 
  - [Java, 设计模式]
---

从今天开始为实习做准备。

开始学习设计模式。

<!-- more -->

```
Ensure a class has only one instance, and provide a global point of access to it.
确保某一个类只有一个实例，而且自行实例化并向整个系统提供这个唯一实例。
```

可以得出，构造方法是private（只有一个实例），并且拥有一个当前类的静态成员变量（只有一个实例），一个静态方法（向整个系统提供这个唯一实例）。

比如序列号生成器、计数器就可以使用单例模式，因为这些只需要一个实例存在。

如果创建某个对象需要消耗较多资源的话，也可以使用单例模式来减少消耗，如访问IO或数据库资源。

## 饿汉式
是否 Lazy 初始化：否
是否多线程安全：是
实现难度：易
描述：这种方式比较常用，但容易产生垃圾对象。
优点：没有加锁，执行效率会提高。
缺点：类加载时就初始化，浪费内存。
它基于 classloader 机制避免了多线程的同步问题，不过，instance 在类装载时就实例化，虽然导致类装载的原因有很多种，在单例模式中大多数都是调用 getInstance 方法， 但是也不能确定有其他的方式（或者其他的静态方法）导致类装载，这时候初始化 instance 显然没有达到 lazy loading 的效果。
实现：

```
class Singleton {
    private static Singleton singleton = new Singleton();

    private Singleton() {
    }

    public static Singleton getInstance() {
        return singleton;
    }
}
```

## 懒汉式，线程不安全
是否 Lazy 初始化：是
是否多线程安全：否
实现难度：易
描述：这种方式是最基本的实现方式，这种实现最大的问题就是不支持多线程。因为没有加锁 synchronized，所以严格意义上它并不算单例模式。
这种方式 lazy loading 很明显，不要求线程安全，在多线程不能正常工作。
实现：

```
class Singleton {
    private static Singleton singleton = new Singleton();

    private Singleton() {
    }

    public static Singleton getInstance() {
        if (singleton == null)
            singleton = new Singleton();
        return singleton;
    }
}
```

## 懒汉式，线程安全
是否 Lazy 初始化：是
是否多线程安全：是
实现难度：易
描述：这种方式具备很好的 lazy loading，能够在多线程中很好的工作，但是，效率很低，99% 情况下不需要同步。
优点：第一次调用才初始化，避免内存浪费。
缺点：必须加锁 synchronized 才能保证单例，但加锁会影响效率。
getInstance() 的性能对应用程序不是很关键（该方法使用不太频繁）。
实现：

```
class Singleton {
    private static Singleton singleton = new Singleton();

    private Singleton() {
    }

    public synchronized static Singleton getInstance() {
        if (singleton == null)
            singleton = new Singleton();
        return singleton;
    }
}
```

## 双检锁/双重校验锁（DCL，即 double-checked locking）
JDK 版本：JDK1.5 起
是否 Lazy 初始化：是
是否多线程安全：是
实现难度：较复杂
描述：这种方式采用双锁机制，安全且在多线程情况下能保持高性能。
getInstance() 的性能对应用程序很关键。
```
volatile 修饰
singleton = new Singleton() 可以拆解为3步：
1、分配内存，
2、初始化对象，
3、指向刚分配的地址，
若发生重排序，假设 A 线程执行了1和3，还没有执行2，B线程来到判断 NULL，B线程就会直接返回还没初始化的instance了。volatile 可以避免重排序。
```
```
class Singleton {
    private volatile static Singleton singleton = new Singleton();

    private Singleton() {
    }

    public static Singleton getInstance() {
        if (singleton == null)
            synchronized (Singleton.class) {
                if (singleton == null)
                    singleton = new Singleton();
            }
        return singleton;
    }
}
```

## 枚举
JDK 版本：JDK1.5 起
是否 Lazy 初始化：否
是否多线程安全：是
实现难度：易
描述：这种实现方式还没有被广泛采用，但这是实现单例模式的最佳方法。它更简洁，自动支持序列化机制，绝对防止多次实例化。
这种方式是 Effective Java 作者 Josh Bloch 提倡的方式，它不仅能避免多线程同步问题，而且还自动支持序列化机制，防止反序列化重新创建新的对象，绝对防止多次实例化。不过，由于 JDK1.5 之后才加入 enum 特性，用这种方式写不免让人感觉生疏，在实际工作中，也很少用。
不能通过 reflection attack 来调用私有构造方法。

```
enum Singleton {
    INSTANCE;

    public void whateverMethod() {
    }
}
```