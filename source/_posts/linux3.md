---
title: 在Linux集群上为某些用户安装Anaconda
date: 2021-01-06 14:59:24
tags: [Linux, Anaconda]
categories: 
  - [Linux]
  - [Anaconda]
---

首先肯定要有Anaconda3的sh文件，在官网下载。

<!-- more -->

sh文件的安装过程略。

## 配置环境变量

假设你的安装路径是`/data/anaconda3`。

将`/data/anaconda3/bin`加入环境变量，方法在这里{% post_link linux2 Linux系统变量 %}。

## 修改用户权限

1、首先创建一个新的用户组，假设命名为anaconda：

```
sudo groupadd anaconda
```

2、把Anaconda的整个文件夹的组拥有者设为anaconda：

```
sudo chgrp -R anaconda /data/anaconda3
```

3、同时修改文件夹权限：

```
sudo chmod 770 -R /data/anaconda3
```

770权限表示文件（夹）拥有者和拥有组的用户有读、写、执行权限，其他人没有任何权限。

4、把有需求的用户添加进组

```
# 假设把用户hello添加进anaconda组
sudo usermod -a -G anaconda hello
```
或

```
# 创建新用户hello并添加进anaconda组
sudo adduser -u hello -G anaconda
```

OK，完事。