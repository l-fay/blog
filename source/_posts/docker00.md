---
title: Docker | Docker基础命令
date: 2021-03-05 17:36:18
tags: [Docker]
categories: 
  - [Docker]
---
```
docker pull name/images:version
# 拉取镜像的命令
# version不加的话默认latest
```

```
docker images
# 查看已有的镜像
```

```
docker run -it name/images:version
# 以交互模式启动一个容器创建一个新的容器
# version不加的话默认latest
# https://www.runoob.com/docker/docker-run-command.html
```

```
docker ps -a
# 查看正在运行的容器
```

```
docker rm id
# 删除一个容器
```

```
docker rmi id
# 删除一个镜像
```