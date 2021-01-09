---
title: Redis的安装
date: 2020-10-26 18:03:13
tags: [数据库, Redis]
categories: 
  - [数据库, Redis]
---
因为项目需要，要重装一下Redis。

<!-- more -->

```
环境：
Ubuntu 16.04
```

首先查看用APT安装的Redis相关软件：
```
dpkg -l | grep redis
```
```
ii  redis-server                                2:3.0.6-1ubuntu0.4                              amd64        Persistent key-value database with network interface
ii  redis-tools                                 2:3.0.6-1ubuntu0.4                              amd64        Persistent key-value database with network interface (client)
```

卸载：
```
apt-get --purge remove redis-server
apt-get --purge remove redis-tools
```

重新安装：
```
apt-get install redis-server
```

启动：
```
redis-server
```