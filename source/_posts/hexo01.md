---
title: NexT 8.0.0版本修改代码块背景
date: 2020-08-03 14:08:47
tags: [Hexo]
categories: 
  - [Hexo]
---
NexT 8.0.0版本中，加入了很多代码块主题

<!-- more -->

之前版本配置文件中的`highlight_theme`选项没有了

8.0.0版只需要修改主题配置文件，搜索`codeblock:`

	codeblock:
	  # Code Highlight theme
	  # All available themes: https://theme-next.js.org/highlight/
	  theme:
		light: ocean
		dark: a11y-dark

根据注释中的提示，在[NexT Highlight Theme Preview](https://theme-next.js.org/highlight/)中选择喜欢的主题。

我本来想把dark和light都设置为a11y-dark，但是a11y-dark的light效果太刺眼了，于是换成了ocean。