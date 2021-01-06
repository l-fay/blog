---
title: Python路径处理用到的库
date: 2021-01-06 16:34:21
tags:
---
文件路径很多时候不能写死，否则移植的时候会很麻烦，尤其是跨平台的时候。

所以我在处理路径的时候偏向于使用相对路径。

<!-- more -->

## os.path

适用于Windows和Linux。

用的比较多的是以下这些：

```
# os.path.join(dir1 , dir2)
# 路径拼接，与直接用加号连接的优点在于不会出现转义字符及斜杠方向问题。
# Linux
filename=os.path.join('/home','hello')
print(filename)
# 输出为：
# /home/hello
# -------------------------
# Windows
filename=os.path.join('C:\hello','aaa')
print(filename)
# 输出为：
# C:\hello\aaa

# os.path.split()
# 返回文件的路径和文件名
split_rerult= = os.path.split('/data/anaconda3/LICENSE.txt')
print(split_rerult=)
# 输出为：
# ('/data/anaconda3', 'LICENSE.txt')

# os.path.splitext()
# 将文件名和扩展名分开
split_rerult=os.path.splitext('D:\Anaconda3\python.exe')
print(split_rerult)
# 输出为：
# ('D:\\Anaconda3\\python', '.exe')
```

## str.split(str="", num=int)

适用于Windows和Linux。

```
string = "a?b?c"
print(string.split("?"))
# 输出为：
# ['a', 'b', 'c']
# ---------------
# num为分割次数
string = "a?b?c"
print(string.split("?", 1))
# 输出为：
# ['a', 'b?c']
```

## winreg库
只适用于Windows。

看库名就知道，是操作注册表的一个库。

```
key = winreg.OpenKey(winreg.HKEY_CURRENT_USER, r'Software\Microsoft\Windows\CurrentVersion\Explorer\Shell Folders')
music_dir = winreg.QueryValueEx(key, "My Music")[0]
print(music_dir)
# 输出为自己的音乐库文件夹位置
```