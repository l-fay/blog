---
title: Python获取文件下的所有函数名
date: 2021-03-22 20:51:51
tags: [Python]
categories: 
  - [Python]
---
我有一个特殊需求需要获取当前py文件里的所有函数名。

<!-- more -->

研究了一晌，发现最好用的还是`dir()`函数，简单配合正则删除一些内容，效果拔群！

下边是我的方法：

```
if __name__ == '__main__':
    lib_names = dir("url判断.py")
    def_names = []
    file_lib_list=[]
    with open(os.path.abspath(__file__), "r", encoding="utf-8") as f:
        for i in f:
            s = re.findall("(?<=^import).+|(?<=^from).+", i)
            if len(s):
                s = s[0]
                s = s.split(" ")[-1]
                file_lib_list.append(s)
```