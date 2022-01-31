const blogPostModel = function(blogPostData) {
    this.data = blogPostData
    this.save = async function() {
        blogPostModel.storage.push(this.data)
        return this.data
    }
}
blogPostModel.storage = []
blogPostModel.find = async function() {
    return blogPostModel.storage
}

module.exports = blogPostModel
