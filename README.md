## Eclipse IDE 快捷键

Description                    | Shortcut
------------------------------ | --------------
Show Key Asist                 | Ctrl+Shift+L
Move Lines Up                  | Alt+Up
Move Lines Down                | Alt+Down
Copy Lines Up                  | Ctrl+Alt+Up
Copy Lines Down                | Ctrl+Alt+Down
Insert Line Below              | Shift+Enter
Insert Line Above              | Ctrl+Shift+Enter
Join Lines                     | Ctrl+Alt+J
Delete Line                    | Ctrl+D
Delete to end of line          | Ctrl+Shift+Delete
Delete next word               | Ctrl+Delete
Delete previous word           | Ctrl+Backspace
Select to Line End             | Shift+End
Select to Line Start           | Shift+Home
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
Word Completion                | Alt+/
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

## 生成自签名HTTPS证书

1、创建一个配置文件req.conf，如下内容，运行命令中使用这个文件。

```
[req]
distinguished_name = req_distinguished_name
x509_extensions = v3_req
prompt = no

[req_distinguished_name]
C = CN
ST = my-state
L = my-city
O = my-company
OU = my-unit
CN = www.example.com

[v3_req]
subjectKeyIdentifier = hash
authorityKeyIdentifier = keyid:always,issuer
basicConstraints = CA:true
keyUsage = nonRepudiation, digitalSignature, keyEncipherment, dataEncipherment, keyCertSign, cRLSign
subjectAltName = @alt_names

[alt_names]
DNS.1 = example.com
DNS.2 = www.example.com
DNS.3 = cdn.example.com
```

2、运行以下命令生成证书：

```
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout example.pem -out example.crt -config req.conf -extensions 'v3_req'
```

3、给计算机安装证书

双击证书文件，或运行`certmgr.msc`打开证书管理器。

要安装到**受信任的根证书颁发机构**, 要以管理员身份运行。

4、给nginx或apache等web服务器修改配置文件使用证书，略过不提。


## Windows 10 ISO下载

镜像文件直接从微软官网下载的方法，就是修改User Agent，让页面显示出下载选项。

非Windows用户可以直接打开网址，跳过后续步骤。

1、
打开[下载 Windows 10 光盘映像（ISO 文件）](https://www.microsoft.com/zh-cn/software-download/windows10ISO)

2、打开开发者工具，快捷键是 `F12` 或者 `Ctrl+Shift+I`

3、修改 User Agent

开发者工具右上角菜单，More tools, Network conditions

去除勾选Select automaticly，在下拉框里选择任意一个，但就是不能选择`Chrome-Windows`

4、刷新网页，就可以选择版本、选择语言下载了

