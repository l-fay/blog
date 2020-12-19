---
title: Hexo | Hexo推送时如何避免每次都要输入账号密码
date: 2020-12-19 17:28:39
tags: [Hexo]
categories: 
  - [Hexo]
---

之前不知道动到哪里的设置了，每次`hexo d`的时候都要输入完整的账号密码才能发布。

<!-- more -->

之后找了一下不用每次都输入账号密码的方法，转载到这备用。

首先创建一个名为`HOME`的系统变量，内容为`%USERPROFILE%`。

然后在自己的用户目录下新建一个文件，命名为`_netrc`（C:\Users\username\_netrc）

编辑为：

```
machine github.com
login username
password password
```

然后重新进命令行，就行了。