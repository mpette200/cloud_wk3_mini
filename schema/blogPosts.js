const blogPostSchema = function(blogPostData) {
    this.data = blogPostData
    this.save = function() {
        return 'save not implemented'
    }
}

module.exports = blogPostSchema
