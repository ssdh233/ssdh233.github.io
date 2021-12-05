---
layout: post
title: "评论系统改造"
date: 2021-12-05
category: cn
tags: [博客改造,プログラミング]
description: "disqus -> isso"
---

今年才知道disqus原来也被墙了，所以国内的朋友访问这里是看不到评论区的。（~~不过想想也是，能说话的地方一般都是要被墙的。~~）这两天在[白热老兄的博客](https://blog.asaki.me/)上发现了有可以自己托管的评论系统（commento，不过据白热老兄说进程经常挂），于是就Google了一波最终决定先试试[isso](https://posativ.org/isso/)。

在windows上搞isso有些水土不服，外加昨天虚拟机装了好几次莫名失败，于是就在装虚拟机失败的时间里尝试了[某个isso的docker image](https://hub.docker.com/r/machines/isso)，发现配置起来还算简单，写个config，初始化一个sqlite的db文件就可以开搞了。最终配置文件大概是这样：[ssdh233/comments.ssdh233.me](https://github.com/ssdh233/comments.ssdh233.me)。

搞好之后找地方托管，先试了下阿里云结果发现要备案，之后发现AWS好像不一定会被墙，就决定先放到AWS上试试了。因为那个docker image默认是8080端口，就顺便用了nginx来reverse proxy一下。之后可能会在AWS上放点别的东西，毕竟一个AWS EC2的实例光用来放一个没大有人用的评论系统也是有点太亏了= =

目前还有很多问题没有解决，列个表监督下：

* 数据方面
  * Disqus -> isso的数据转移，目前只是把评论内容转移了，时间还没有校对。估计是要直接写SQL来搞了。。
  * 数据库的备份。打算写个github action，用sqlite dump一下每周传到S3上。（~~最近发现S3挺便宜的~~）
* Server方面
  * HTTPS还没有搞，所以目前访问https://ssdh233.me是看不到评论的。。最佳解决方案应该就是Lets Encrypt了。
  * 需要观测一阵儿看看进程稳不稳定
  * 需要观测一阵儿看看会不会被墙（这个是重点）
* Client方面
  * i18n的功能似乎没有放到配置文件里来，不过不是大问题，大家都懂English :D 要解决的话得改下代码重新build docker image了。最近也在考虑分类一下中文/日语写的文章，到时候一起搞。
  * 不知道isso有没有提供通知功能。
  * isso的风格跟目前本博客还是不太一致。不知道能不能自定义css，应该是能的。最近也有换个jekyll主题的打算，到时候一起搞。
  * 没有提供表情和图片上传功能，暂时只能麻烦各位[手动枯花][手动捂脸哭]了。


说起来前几天发现bilibili也要绑定国内手机号才能登陆了，在下在国内的手机号早已经欠费N年被注销了，目前申诉也没有新的手机号可以用，只能等明年回国先办个手机号再说了，能说话的地方真的是越来越少了。。
