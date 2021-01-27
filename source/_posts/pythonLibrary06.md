---
title: Python | os库
date: 2021-01-27 23:27:17
tags: [Python]
categories: 
  - [Python, 常用库, os]
---

os库是Python自带的一个库，这里记录一些常用函数。

<!-- more -->

```

# 获得文件大小，如果是文件夹，返回0
os.path.getsize(file_path)

# 重命名文件或文件夹
os.rename(file_path,new_name)

# 递归删除文件夹，文件夹中可以有空文件夹
os.removedirs(dir)

# 删除文件夹，文件夹只能为空目录
os.rmdir(dir)

# 查看路径指向的文件或文件夹是否存在
os.path.exists(path)

# 组合路径
os.path.join(path1, path2, path3……)

# 分割路径和文件名
os.path.split(file_path)

# 分割文件和拓展名
os.path.splitext(file_path)


```
