## Redis
- 内存数据库（mysql是硬盘数据库）

### 下载安装使用 windows http://www.runoob.com/redis/redis-install.html

### 启动 redis-server
### 启动 redis-cli

### 再redis-cli中输入命令 操作 
```
set name 'qietubaby'

get name

keys*

kkl 加上key 查看过期时间

```

## 介绍登录-cookie和session
- cookie 和 session
- session 存储 redis
- koa2中使用
  
## 为何 session 适合用 redis
- session 访问频繁，对性能要求极高
- session 可不考虑断电丢失数据的问题（内存的硬伤）
- session 数据量不会太大（相比于mysql中存储的数据）

## koa配置 session
- 安装 koa-redis
- 安装 koa-generic-session --save
  
## jest 单元测试
- *.test.js文件
- 常用的断言
- "test": "cross-env NODE_ENV=test jest --runInBand --forceExit --colors"
- runInBand参数是一个一个运行
  
## pre-commit 代码提交之前进行eslint检查 如果有eslint检查 就不让commit


## 调试 加--inspect=9229
- "dev": "cross-env NODE_ENV=dev ./node_modules/.bin/nodemon --inspect=9229 bin/www"

