/**
 * @description 数据模型入口文件
 * @author qietubaby
 */

const seq = require('../seq')
const {INTEGER, STRING, TEXT} = require('../types')

const Blog = seq.define('blog', {
    userId: {
        type: INTEGER,
        allowNull: false,
        comment:'用户ID'
    },
    content:{
        type: TEXT,
        allowNull:false,
        comment: '微博内容'
    },
    image: {
        type: STRING,
        comment:'图片地址'
    }
})

module.exports = Blog