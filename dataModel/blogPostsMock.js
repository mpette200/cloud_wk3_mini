const { add } = require("nodemon/lib/rules")

const blogPostModel = function(blogPostData) {
    this.data = blogPostData
}
blogPostModel.storage = []
blogPostModel.find = function() {
    var ret = Promise.resolve(blogPostModel.storage)
    addNestedMethods(ret)
    return ret
}

blogPostModel.findOne = function() {
    var ret = blogPostModel.storage[0]
    addNestedMethods(ret)
    return ret
}

blogPostModel.prototype.save = async function() {
    blogPostModel.storage.push(this.data)
    return this.data
}

var addNestedMethods = function(p) {
    p.find = blogPostModel.find
    p.findOne = blogPostModel.findOne
}

module.exports = blogPostModel
