const { add } = require("nodemon/lib/rules")

const blogPostModel = function(blogPostData) {
    this.data = blogPostData
}
blogPostModel.find = function() {
    if (this.then) {
        var ret = this.then(value => value + ' called find.')
    } else {
        ret = Promise.resolve('called find.')
    }
    addNestedMethods(ret)
    return ret
}
blogPostModel.findOne = function() {
    if (this.then) {
        var ret = this.then(value => value + ' called findOne.')
    } else {
        ret = Promise.resolve('called findOne.')
    }
    addNestedMethods(ret)
    return ret
}
blogPostModel.prototype.save = async function() {
    return 'called save to db. '
}
var addNestedMethods = function(p) {
    p.find = blogPostModel.find
    p.findOne = blogPostModel.findOne
}

module.exports = blogPostModel
