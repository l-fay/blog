---
title: 我就想试试怎么写博客
date: 2020-08-01 16:42:24
tags: [Hexo]
categories: 
  - [Hexo]
---
写这个的目的就是试一试hexo的各种语法，免得以后忘记。

<!-- more -->

## 常用命令

### 创建新的文章

``` bash
$ hexo new “0_我就想试试怎么写博客”
```
[官方文档](https://hexo.io/docs/writing.html)

### 生成静态文件

``` bash
$ hexo g
```

### 发布

``` bash
$ hexo d
```

## 各种格式

### 普通的引用

{% blockquote %}
这是个例子
{% endblockquote %}

### 从书中引用

{% blockquote 罗贯中, 《三国演义》 %}
天下大势，分久必合，合久必分。
{% endblockquote %}

### 从社交平台引用

{% blockquote @l-fay https://l-fay.github.io/ %}
假装是个社交平台
{% endblockquote %}

### 引用网络文章

{% blockquote l-fay https://l-fay.github.io/2020/08/01/hexo00/ 我就想试试怎么写博客 %}
文章内容
{% endblockquote %}

### 代码块

```python
alert('Hello World!');
```

	123
	示例

强调`weq`哈哈哈

- 123
	- 123
		- 1231

### 表格

| 左对齐 | 居中 | 右对齐 |
|:-----|:-----:|-----:|
| 示例 | 示例 | 示例 |

### 超链接

[官方文档](https://hexo.io/docs/writing.html)

{% post_link hexo00 站内跳转 %}

### 图片

<img src="/images/avatar1.jpg" width="60%">

## 注意事项

文件名和title不要求一致