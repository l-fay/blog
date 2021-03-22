---
title: Python | paramiko库使用sftp操作集群
date: 2021-03-22 23:00:14
tags: [Python]
categories: 
  - [Python, 常用库, paramiko]
---

用paramiko库来使用sftp。

<!-- more -->

## from_transport方法连接

```
import paramiko
client = paramiko.Transport(('127.0.0.1',22))
client.connect( username="opcai",password="secure123")
sftp = paramiko.SFTPClient.from_transport(client)
```

## get方法下载

```
# 参数说明：
# remotepath：需要下载的远程文件
# localpath：本地存储路径

sftp.get(remotepath="/tmp/aaaaa",localpath="/tmp/23")
```

## put方法

```
# 参数说明：
# localpath：上传源文件的本地路径
# remotepath：目标路径

sftp.put(localpath="/tmp/23",remotepath="/tmp/aaaaa")
```

## mkdir方法创建目录

```
mkdir(path, mode=o777)
# path：远程路径
# mode：默认是8进制的777，但是在系统上一般是以umask为准，这个被忽略。如果强制设置mode，则umask会被屏蔽。
```

## 删除操作

```
# 删除目录
rmdir(path)

# 删除文件
remove(path)
```

## rename方法重命名

```
rename(oldpath,newpath)
```

## 查看文件或者目录信息

```
# 获取文件信息
stat(path)

# 获取目录列表
listdir(path)
```

## 切换、查看目录

```
# 查看当前所在目录
getcwd()

# 切换当前目录
chdir(path)
```

## 修改文件或者目录的权限、用户组

```
# 修改目录或者文件权限
chmod(path , mode)

# 修改目录或者文件的用户组
chown(path,uid ,gid)
```