/**
 * @description 数据模型入口文件
 * @author qietubaby
 */

const User = require('./User')
const Blog = require('./Blog')

// 这个是在查询发微博的时候顺带查询用户来
Blog.belongsTo(User, {
    foreignKey:'userId'
})

// 这个是在查询微博的时候顺带查出微博来
User.hasMany(Blog)



module.exports = {
    User,
    Blog
}
