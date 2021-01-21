---
title: ffmpeg-python库的初步使用
date: 2021-01-20 19:02:08
tags: [ffmpeg, Python]
categories: 
  - [ffmpeg]
  - [Python, 常用库, ffmpeg-python]
---
首先这个库不是官方的库，是github上有人做的第三方库。

<!-- more -->

# 安装

用`conda install ffmpeg-python`无法安装，原因我没有深究，初步猜测是因为这个库不是知名的第三方库，没有被`conda`收录。

安装使用`pip install ffmpeg-python`就行。

还有一点需要注意，还有个库叫做ffmpy，也是ffmpeg的衍生库。

这个库的安装使用需要先配置ffmpeg，我就联想到我自己用的ffmpeg-python库，不知是否需要配置ffmpeg。

因为我在用这个库之前一直用的原生的ffmpeg，所以当时是配置好ffmpeg了的。

至于为什么用ffmpeg-python而不用ffmpy，主要是因为我对原生ffmpeg比较熟悉，在进行音视频操作的时候一般使用命令行操作，而ffmpy把所有命令都包了个壳，对我来说反而不方便。

# 作用

我主要是在自己的一个小项目中有查询音视频编码的需求，而在命令行中使用`ffprobe`命令的话，交互起来比较麻烦。

所以起初我用这个库来查看音视频编码，后来索性又给他包了个壳自己用，把我以后可能用到的信息包了进去。

```
def get_video_info(source_video_path):
    probe = ffmpeg.probe(source_video_path)
    print('source_video_path: {}'.format(source_video_path))
    format = probe['format']
    bit_rate = int(format['bit_rate']) / 1000
    duration = format['duration']
    size = int(format['size']) / 1024 / 1024
    video_stream = next((stream for stream in probe['streams'] if stream['codec_type'] == 'video'), None)
    # 只要第一条音频流的信息
    audio_stream = next((stream for stream in probe['streams'] if stream['codec_type'] == 'audio'), None)
    if video_stream is None:
        print('No video stream found!')
        return
    width = int(video_stream['width'])
    video_codec = video_stream['codec_name']
    audio_codec = audio_stream['codec_name']
    height = int(video_stream['height'])
    frames_num = int(video_stream['nb_frames'])
    fps = int(video_stream['r_frame_rate'].split('/')[0]) / int(video_stream['r_frame_rate'].split('/')[1])
    duration = float(video_stream['duration'])
    video_info = {"width": width, "video_codec": video_codec, "audio_codec": audio_codec, "height": height,
                  "frames_num": frames_num, "fps": fps,
                  "duration": duration}
    return video_info

```