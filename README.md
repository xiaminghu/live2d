# live2d

[原文链接](https://github.com/imuncle/live2d)

## 项目描述

当前仓库在原仓库的基础上添加了如下功能。

- 使用 bootstrap + vue 重构了原作者的 index.html，让界面和使用更亲和。

- 发布以更加便捷地使用 jsdelivr 的访问模型的 json 文件

## 使用

[访问 Demo](https://xiaminghu.github.io/live2d/)

在线访问存在一定延时，建议 clone 到本地，并在当前目录下启动静态服务器.

下面是使用 python 创建静态服务器的例子

```bash
# 克隆本仓库
git clone https://github.com/xiaminghu/live2d.git
# 默认版本 python3
python -m http.server 8888
# 查看本机 ip
ifconfig 或 ipconfig
# 浏览器打开
ipv4地址:8888
```
