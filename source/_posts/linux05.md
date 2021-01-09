---
title: sudo权限的问题
date: 2021-01-09 17:50:41
tags: [Linux]
categories: 
  - [Linux]
---
使用sudo的时候会报：
```
xxx 不在 sudoers 文件中。此事将被报告。
```

<!-- more -->

那很明显，我需要把我的用户加入`sudoers`文件中。

## 解决方法

切换到`root`用户。

进入`/etc`目录。

使用`chmod 777 sudoers`修改`sudoers`文件的权限使其不是只读。

使用`vim sudoers`编辑文件。

关于vim的使用方法，可以看一下这篇：{% post_link command03 vim的使用方法 %}。

在
```
# User privilege specification
root    ALL=(ALL:ALL) ALL
Ubuntu  ALL=(ALL:ALL) ALL
```
这一串下边加上自己的用户，编辑结果：
```
# User privilege specification
root    ALL=(ALL:ALL) ALL
Ubuntu  ALL=(ALL:ALL) ALL
xxxx    ALL=(ALL:ALL) ALL
```

使用`chmod 440 sudoers`修改回`sudoers`文件权限为440。

如果想要在使用`sudo`命令的时候不输入密码，在编辑`sudoers`文件的时候添加NOPASSWD: 即可，像这样：
```
# User privilege specification
root    ALL=(ALL:ALL) ALL
Ubuntu  ALL=(ALL:ALL) ALL
xxxx    ALL=(ALL:ALL) NOPASSWD: ALL
```