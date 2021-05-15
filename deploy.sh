#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git add .
git commit -m 'add something'
git pull
git push

# 生成静态文件
npm run build

# 进入生成的文件夹
cd blog/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:joey998/joey998.github.io.git main

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

# cd -

# 发布到gitee，因为阿里云下载不了github的代码，只能从gitee下了
git push -f git@gitee.com:joey998/joey998.gitee.io.git main

# ssh不支持输入密码，所以只能够先把公钥放服务器来进行免密操作
ssh root@121.42.12.48 << eof
cd /home/zhangjiaming/www/blog/dist/
rm -rf ./*
git clone https://gitee.com/joey998/joey998.gitee.io.git
exit
eof
