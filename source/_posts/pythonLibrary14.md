---
title: mutagen | 添加mp4封面
date: 2021-06-07 19:31:31
tags: [Python]
categories: 
  - [Python, 常用库, mutagen]
---

主要用来添加封面。

<!-- more -->

## MP4添加封面

```
from mutagen.mp4 import MP4, MP4Cover
def addCover(filename, cover):
    audio = MP4(filename)
    data = open(cover, 'rb').read()
    covr = []
    if cover.endswith('png'):
        covr.append(MP4Cover(data, MP4Cover.FORMAT_PNG))
    else:
        covr.append(MP4Cover(data, MP4Cover.FORMAT_JPEG))
    audio['covr'] = covr
    audio.save()
    print(filename + " 内嵌图片：" + cover + "。")
```