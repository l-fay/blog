---
title: "Hexo | fatal: unable to access"
date: 2021-03-22 21:18:33
tags: [Hexo]
categories: 
  - [Hexo]
---
Hexo的报错处理。

<!-- more -->

这是报的错：
```
fatal: unable to access 'XXX': Failed
to connect to github.com port 443: Timed out
FATAL {
  err: Error: Spawn failed
      at ChildProcess.<anonymous> (XXX\node_modules\hexo-deployer-git\node_m
odules\hexo-util\lib\spawn.js:51:21)
      at ChildProcess.emit (events.js:315:20)
      at ChildProcess.cp.emit (XXX\node_modules\cross-spawn\lib\enoent.js:34
:29)
      at Process.ChildProcess._handle.onexit (internal/child_process.js:277:12)
{
    code: 128
  }
} Something's wrong. Maybe you can find the solution here: %s https://hexo.io/do
cs/troubleshooting.html
```

经过排查，发现是我在本地删除了公钥。

重新设置一下就好了。