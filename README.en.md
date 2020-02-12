# live2d

[Source](https://github.com/imuncle/live2d)

## Description

This repo add some features based on the orignal one:

- Rebuild the index.html using bootstrap and vue for better interaction.

- Publish a release to use cdn supported by jsdelivr

## Usage

[Online Demo](http://xiaminghu.github.io/live2d/)

It's inevitable that it would be delay when requesting in github.

So, for better using, I recommend you to clone it to local storage and build and static server in the current directory. 

Here's an example using python to make it.

```bash
# clone this repo
git clone https://github.com/xiaminghu/live2d.git
# Assume that you're using python 3
python -m http.server 8888
# use ifconfig or ipconfig to get your ipv4 address
ifconfig
# jump to the following url with your browser
<your ipv4 addres>:8888
```

If there would be any infringement act, please contact me and I'll delete this repo asap.