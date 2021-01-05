---
title: Linux创建用户并解决用户进入后命令行只有一个美元符号的问题
date: 2021-01-05 14:19:03
tags: [Linux, 命令]
categories: 
  - [Linux, 命令]
---
假设我今天要创建一个名为“hello”的新用户。

<!-- more -->

## 创建用户

首先使用`useradd -m hello`创建新用户。

其中`-m`参数的作用是自动在/home目录下创建相应的用户文件夹。

使用`psaawd hello`创建密码。

## 解决新用户命令行只有一个美元符号的问题

### 原因

命令行默认使用sh而不是bash。

### 解决方法

将`/etc/skel`下的`.bash*`和`.profile`复制过来并修改权限及拥有者。（未验证是否可以跳过这一步）

然后用`sudo vim /etc/passwd`将

```
hello:x:1001:1001::/home/hello:/bin/sh
```

改成这样

```
hello:x:1001:1001::/home/hello:/bin/bash
```