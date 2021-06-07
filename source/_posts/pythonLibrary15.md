---
title: mutagen | 提取mp4封面
date: 2021-06-07 19:41:13
tags: [Python]
categories: 
  - [Python, 常用库, mutagen]
---

有的时候不想来回找了，就直接从文件中提取好了。

<!-- more -->

## MP4提取封面

```
from mutagen.mp4 import MP4, MP4Cover
try:
	audio = MP4(i)
	cover = audio['covr'][0]
except:
	cover = None
if cover:
	with open(os.path.join(outputDir, "c.jpg"), 'wb') as f:
		f.write(cover)
```