---
title: 一些基础符号
date: 2020-10-26 19:34:23
tags: [Linux, 命令]
categories: 
  - [Linux, 命令]
---
Linux命令行中一些符号的意义。

<!-- more -->

/dev/null 表示空设备文件 ：空设备文件，当重定向到这个文件时，就是不显示任何信息。

0 表示stdin标准输入：通常代表键盘输入

1 表示stdout标准输出：通常代表终端显示器

2 表示stderr标准错误

>是输出重定向

& 放在命令到结尾，表示让程序后台运行，这样终端可以执行其他任务。甚至关闭终端也不影响这个任务的正常执行。

&& 表示前一条命令执行成功时，才执行后一条命令 ，如 echo '1‘ && echo '2' 

| 表示管道，上一条命令的输出，作为下一条命令参数，如 echo 'yes good'  | grep ‘good’

|| 表示上一条命令执行失败后，才执行下一条命令，如

```
[root@localhost tmp]# als -l || cd .. 
-bash: als: command not found 
[root@localhost /]#
```

1>file 表示把stdout标准输出的内容，重定向到file中。

2> error 表示将错误输出到error文件中

2>&1 也就表示将错误重定向到标准输出上：& 符号可以理解为引用（reference）。&1 就是对标准输出的引用。
 