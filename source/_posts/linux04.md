---
title: Ubuntu下开启远程桌面
date: 2021-01-09 17:25:08
tags: [Linux, Ubuntu]
categories: 
  - [Linux, Ubuntu]
---
{% blockquote %}
https://blog.csdn.net/cxn304/article/details/99733711
{% endblockquote %}

首先在图形界面中system-share中把远程打开。

<!-- more -->

sudo apt-get install xrdp后用远程桌面连接，会蓝屏。以下是解决办法

```
wget http://www.c-nergy.be/downloads/install-xrdp-3.0.zip
unzip install-xrdp-3.0.zip
chmod 777 Install-xrdp-3.0.sh
./Install-xrdp-3.0.sh
最后重启机器 reboot
```

上边这是一个大佬写的一键配置的脚本，用起来就行。

有一个需要注意的点，当使用的是中文语言的时候，在`~`目录下没有`Downloads`文件夹，需要手动新建一个。