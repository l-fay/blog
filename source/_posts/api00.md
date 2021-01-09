---
title: 网易云音乐Api搜集
date: 2021-01-06 18:44:11
tags: [API]
categories: 
  - [API]
---
在这搜集一下网易云音乐的一些Api。

<!-- more -->

## ID

首先确认歌曲的ID。

下边是网易云音乐的官方地址。

https://music.163.com/#/song?id={{id}}。

id=后边的数字就是id。

## imjad接口

文档

```
https://api.imjad.cn/cloudmusic.md
```

### 音乐

```
https://api.imjad.cn/cloudmusic/?type=song&search_type=1&id={{id}}
```

### lrc

```
https://api.imjad.cn/cloudmusic/?type=lyric&id={{id}}
```

## 163官方接口

### 音乐

```
https://music.163.com/song/media/outer/url?id={{id}}.mp3
```

### lrc
```
http://music.163.com/api/song/media?id={{id}}
```

把ID换一下就行了。

个人倾向于使用imjad接口。