---
title: Python | datetime库的时间相关操作
date: 2021-01-27 23:23:27
tags: [Python, 时间]
categories: 
  - [Python, 常用库, datetime]
---

有的时候需要使用当前的时间。

<!-- more -->
这时候就需要`datetime`库了。

```
import datetime

print(datetime.datetime.now().strftime('%H:%M:%S'))
```

`strftime`是为了设置时间为想要的格式。

字符所代表的的时间单位如下：

```
%Y：年
%m：月
%d：日
%H：24小时制的时
%M：分
%S：秒
```

上边这些都是阿拉伯数字的形式呈现。

也有其他的参数，比如12小时制的时，我记得之前用过，没再刻意找。