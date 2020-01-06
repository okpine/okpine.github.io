---
permalink: /git
---
# git

## set up

```shell
git help -c|--config // List all available configuration variables.
git config --global user.name "[name]"
git config --global user.email "[email address]"
git config --global alias.unstage 'reset HEAD --'
git remote // Manage set of tracked repositories
```

## Create repositories
```shell
git init // Create an empty Git repository or reinitialize an existing one
git clone // Clone a repository into a new directory
git clone --depth 1 reponame.git // Clone repository without history
git clone -b mybranch --single-branch git://sub.domain.com/repo.git // Clone a single branch
```

## make chagnes
```shell
git add // Add file contents to the index
```