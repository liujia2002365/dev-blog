#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn docs:build

# 提交到github
git add .
git commit -am "dev-blog"
git push -u origin master

cd -