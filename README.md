## Eclipse IDE 快捷键

Description                    | Shortcut
------------------------------ | --------------
Show Key Asist                 | Ctrl+Shift+L
Move Lines Up                  | Alt+Up
Move Lines Down                | Alt+Down
Duplicate Lines Up             | Ctrl+Alt+Up
Duplicate Lines Down           | Ctrl+Alt+Down
Insert line below current line | Shift+Enter
Insert line above current line | Ctrl+Shift+Enter
Join Lines                     | Ctrl+Alt+J
Delete Line                    | Ctrl+D
Delete to end of line          | Ctrl+Shift+Delete
Delete next word               | Ctrl+Delete
Delete previous word           | Ctrl+Backspace
Select Line End                | Shift+End
Select Line Start              | Shift+Home
Select Next Word               | Shift+Ctrl+Right
Select Previous Word           | Shift+Ctrl+Left
Go to Line                     | Ctrl+L
Go to Symbol in File           | Ctrl+O
Go to Symbol in Workspace      | Ctrl+Shift+T
Go to Matching Bracket         | Ctrl+Shift+P
Go to Matching Tag             | Ctrl+Shift+>
Incremental Find               | Ctrl+J
Incremental Find Reverse       | Ctrl+Shift+J
Add Block Comment              | Ctrl+Shift+/
Remove Block Comment           | Ctrl+Shift+\
Toggle Block Selection         | Alt+Shift+A
Toggle Split Editor Horizontal | Ctrl+_
Toggle Split Editor Vertial    | Ctrl+{
Quick Switch Editor            | Ctrl+E
Content Assist                 | Alt+/
Context Information            | Alt+Shift+?
Format                         | Ctrl+Shift+F 
Organize Use Statements        | Ctrl+Shift+O

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
