---
title: mutagen | 删除元数据
date: 2021-06-07 19:47:08
tags: [ffmpeg, Python]
categories: 
  - [Python, 常用库, mutagen]
  - [ffmpeg]
---

解决了{% post_link ffmpeg05 "ffmpeg | 删除视频中的元数据" %}中的不能在源文件上直接修改的问题。

<!-- more -->

## 灵感

在能修改元数据之后，直接写了个脚本，开始处理收藏的电影电视剧的元数据。

操作流程是：

1、用python唤起控制台，对视频的音视频流进行复制，在这个过程中添加`-map_metadata -1`参数删除元数据。

2、用{% post_link pythonLibrary15 "mutagen | 提取mp4封面" %}中提到的方法提取视频封面。

3、用{% post_link pythonLibrary14 "mutagen | 添加mp4封面" %}中提到的方法将提取出来的封面添加到新文件中。

然后，在执行过程中，我突然想到，当初写封面操作函数的时候好像操作的是一个字典，那这个字典里会不会有视频的元数据呢？

## 求证

随便写了点东西打个断点看了下，果然，字典里包含了元数据和封面信息。

这我还用个der的ffmpeg，mutagen库直接就在源文件上操作，省时省力。

还能保留原来的封面，方便的不要太多。

```
from mutagen.mp4 import MP4, MP4Cover
audio = MP4(input)
if "covr" in audio:
	cover = audio["covr"]
	audio.clear()
	audio['covr'] = cover
else:
	audio.clear()
audio.save()
```

核心就是这样，剩下的细枝末节就不贴了。