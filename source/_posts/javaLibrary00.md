---
title: Java | zip4j库的简单使用
date: 2021-06-01 18:59:06
tags: [Java]
categories: 
  - [Java, 常用库, zip4j]
---

[官方文档](https://gitee.com/mirrors/zip4j#extracting-all-files-from-a-zip)
<!-- more -->

简单示例：
```
import net.lingala.zip4j.ZipFile;
import net.lingala.zip4j.exception.ZipException;

public class Decompression {
    /**
     * 解压
     * @param zipFilePath 待解压文件的路径
     * @param unzipFilePath 解压后的文件存储路径
     * @throws Exception
     */
    public static void unzip(String zipFilePath, String unzipFilePath){
        try{
            new ZipFile(zipFilePath).extractAll(unzipFilePath);
        }catch (ZipException e){
            e.printStackTrace();
        }

    }

}

```