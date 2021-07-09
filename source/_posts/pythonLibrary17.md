---
title: Python | datetime库计算时间差
date: 2021-07-09 21:55:15
tags: [Python, 时间]
categories: 
  - [Python, 常用库, datetime]
---

在做爬虫的时候，需要计算网页上的发布时间和本地时间的时间差。

<!-- more -->

主要思想是现在爬虫的时候用正则把发布时间抓取下来，再用datetime库将其转化为datetime.datetime对象，计算时间差。

代码：
```
def timeConversion(s: str):
    if re.match(r"^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$", s):
        d = datetime.strptime(s, '%Y-%m-%d %H:%M:%S')
    elif re.match(r"^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$", s):
        d = datetime.strptime(s, '%Y-%m-%d %H:%M')
    elif re.match(r"^\d{4}-\d{2}-\d{2}$", s):
        d = datetime.strptime(s, '%Y-%m-%d')
    else:
        return s
    a = datetime.now()
    durn = (a - d)
    days = durn.days
    if days == 0:
        hours = (durn.total_seconds() % 86400) // 3600
        return str(int(hours)) + "小时前"
    else:
        return str(days) + "天前"
```