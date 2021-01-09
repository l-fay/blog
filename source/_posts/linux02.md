---
title: Linux系统变量
date: 2021-01-06 14:51:34
tags: [Linux]
categories: 
  - [Linux]
---
暂时修改就不说了，直接上永久修改。

<!-- more -->

## 用户变量位置

```
~/.bash_profile
```

## 全局变量

```
/etc/profile
```

## 修改方法

以/etc/profile为例。

图形界面建议用：

```
gedit /etc/profile
```

命令行建议用

```
vim /etc/profile
```

在最后加入`export PATH="$PATH:要加的环境变量:"`。