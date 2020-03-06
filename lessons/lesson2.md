# 笔记

## 安装
### npm i koa-generator
### npm -e koa2-weibo
### npm run dev
### 浏览器访问localhost:3000

### 安装cross-env设置环境变量

### refactor:调整结构目录

## ejs

### <%= locals.name %> 不确定后端是否传name，加个locals就不会报错了

## MySQL

### 软件 MySQL Workbence

## 外键 Foreign Key
- 创建外键
- 更新限制 & 删除级联
- 联表查询
- select * from blogs inner join users on users.id = blogs.userid;
- select blogs.*, users.username, users.nickname from blogs inner join users on users.id = blogs.userid where users.username = 'zhangsan'
- 联表查询跟外键没有必要关系，外键的关系是为了防止数据混乱
- 如果sql语句有MySQL关键字  需要用 ``符号包起来 例如：\`password\`

## sequelize
- ORM - Object Relational Mapping
- 建模（外键） & 同步到数据库
- 增删改查 & 联表查询
- 数据表，用js中的模型（class或对象）代替
- 一条或多条记录，用js中一个对象或数组代替
- sql语句，用对象方法代替
