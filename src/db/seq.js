/**
 * @description sequelize 实例
 * @author qietubaby
 */
const { isProd, isTest } = require('../utils/env')
const Sequelize = require('sequelize')
const { MYSQL_CONF } = require('../conf/db')

const { host, user, password, database } = MYSQL_CONF

const conf = {
    host,
    dialect: 'mysql'
}

//单元测试的时候不要让sequelize去打印sql语句
if (isTest) {
    conf.loggin = () => { }
}


if (isProd) {

    //线上环境，使用连接池
    conf.pool = {
        max: 5, // 连接池中最大的连接数量
        min: 0, // 最小
        idle: 10000 // 如果一个连接池 10s 之内没有被使用，则释放
    }
}



const seq = new Sequelize(database, user, password, conf)

module.exports = seq