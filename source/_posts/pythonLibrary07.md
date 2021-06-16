---
title: Python | bypy库在Linux上操作百度云
date: 2021-02-03 21:31:02
tags: [Python, Linux, 命令行工具]
categories: 
  - [Python, 常用库, bypy]
  - [Linux]
  - [百度云]
  - [命令行工具]
---

想用集群下载一些我自己百度云上的文件。

<!-- more -->

内容搬运自[houtianze/bypy](https://github.com/houtianze/bypy)

极简说明
-------

- 安装: `pip install bypy`
- 运行: `bypy`

TL;DR
-----

- To install: `pip install bypy`
- To use: `bypy`

**此项目已经进入维护状态：不会再有新的功能加入，只有在发现重大bug情况下才会有 _可能_ 更新。**

**This is project is now in "maintenance" mode: NO new features will be added, and _may_ be updated only if critical bugs are found.**

---

中文说明 (English readme is at the bottom)
-----------------------------------------

- 最新: 目录上传/下载/同步加入了多进程支持（`--processes`）

---
这是一个百度云/百度网盘的Python客户端。主要的目的就是在Linux环境下（Windows下应该也可用，但没有仔细测试过）通过命令行来使用百度云盘的2TB的巨大空间。比如，你可以用在Raspberry Pi树莓派上。它提供文件列表、下载、上传、比较、向上同步、向下同步，等操作。

**由于百度PCS API权限限制，程序只能存取百度云端`/apps/bypy`目录下面的文件和目录。**

**（已解决）~~据说百度PCS API最多返回目录下1000个文件（ #285 )，如果属实，百度云盘上若有超过1000个文件的目录，将有一部分文件无法被看到 / 下载~~**

**特征: 支持Unicode/中文；失败重试；递归上传/下载；目录比较; 哈希缓存。**

界面是英文的，主要是因为这个是为了Raspberry Pi树莓派开发的。

程序依赖
------

**重要：需要把系统的区域编码设置为UTF-8。（参见：<http://perlgeek.de/en/article/set-up-a-clean-utf8-environment>)**

安装
---

- 通过`pip`来安装：`pip install bypy` （支持Python 2.7+, 3.3+)

运行
---

- 作为独立程序: 运行 `bypy` (或者`python -m bypy`，或者`python3 -m bypy`）

  可以看到命令行支持的全部命令和参数。
- 作为一个包，在代码中使用: `import bypy`

简单的图形界面：
运行 `bypygui`

基本操作
------

显示使用帮助和所有命令（英文）:

```bash
bypy
```

第一次运行时需要授权，只需跑任何一个命令（比如 `bypy info`）然后跟着说明（登陆等）来授权即可。授权只需一次，一旦成功，以后不会再出现授权提示.

更详细的了解某一个命令：

```bash
bypy help <command>
```

显示在云盘（程序的）根目录下文件列表：

```bash
bypy list
```

把当前目录同步到云盘：

```bash
bypy syncup
```

or

```bash
bypy upload
```

把云盘内容同步到本地来：

```bash
bypy syncdown
```

or

```bash
bypy downdir /
```

**比较本地当前目录和云盘（程序的）根目录（个人认为非常有用）：**

```bash
bypy compare
```

更多命令和详细解释请见运行`bypy`的输出。

调试
---

- 运行时添加`-v`参数，会显示进度详情。
- 运行时添加`-d`，会显示一些调试信息。
- 运行时添加`-ddd`，还会会显示HTTP通讯信息（**警告：非常多**）

整合测试（15 - 30分钟）
-------------------

- 在主目录下跑：`python -m bypy.test`

直接在Python程序中调用
-------------------

```python
from bypy import ByPy
bp=ByPy()
bp.list() # or whatever instance methods of ByPy class
```

---




问题
---------------

用bypy syncdown下载之后再用bypy compare总是是说有文件不同

具体表现为，文件夹和小文件全都是Same，大文件都是Different。

根据[Issues](https://github.com/houtianze/bypy/issues/311)中的作者回复，应该是百度的第一次上传的文件md5哈希值不准

临时解决办法就是再上传一次，大多数的时候这个md5值就对了。