## IDE 快捷键
 

## Windows 10 快捷键

Press this key                                  | To do this
----------------------------------------------- | ----------------------------------------------------------
Windows logo key  + A                           | Open Action center.
Windows logo key  + I                           | Open Settings.
Windows logo key  + Shift + S                   | Take a screenshot of part of  your screen.
Windows logo key  + V                           | Open the clipboard.
Windows logo key  + X                           | Open the Quick Link menu.
Windows logo key  + period (.) or semicolon (;) | Open emoji panel.
Windows logo key  + Tab                         | Open Task view.
Windows logo key  + Ctrl + Left arrow           | Switch between virtual desktops you’ve created on the right.
Windows logo key  + Ctrl + Right arrow          | Switch between virtual desktops you’ve created on the left.


| foo | bar |
| --- | --- |
| baz | bim |

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
