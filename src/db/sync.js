/**
 * @description sequelize 同步数据库
 * @author qietubaby
 */

const seq = require('./seq')

require('./model')

//测试连接
seq.authenticate().then(() => {
    console.log('ok')
}).catch(() => {
    console.log('err')
})

// 执行同步  force:true的意思是 如果数据库中已经存在模型的表了，无条件删除
seq.sync({ force: true }).then(() => {
    console.log('sync ok')
    process.exit()
})