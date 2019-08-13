# 我的笔记

## Git使用多个ssh key
SourceTree软件、Git For Windows命令行等可以借此同时使用github和gitbucket。

在文件`~/.ssh/config`里设置如下：

```
Host my-office
HostName gitbucket.org
User my-username
IdentityFile E:/ssh-keys/gitbucket/id_rsa

Host my-home
HostName github.com
User another-username
IdentityFile E:/ssh-keys/github/id_rsa
```
