---
title: git | 删除本地文件后 Git pull从远程仓库重新获取不到解决办法
date: 2021-04-05 16:35:19
tags: [Git]
categories: 
  - [Git]
---
`git pull`一直提示`Already up-to-date`

<!-- more -->

删除本地文件后，想从远程仓库中重新新Pull最新代码，但是执行了git pull命令后始终无法拉取下来
提示 Already up-to-date.
原因：当前本地库处于另一个分支中，需将本分支发Head重置至develop
git 强行pull并覆盖本地文件(依次执行)
```
git fetch --all
git reset --hard origin/master
git pull
```