const { add } = require("nodemon/lib/rules")

class QueryPromise extends Promise {
    
    async find(...args) {
        const x = await this
        return x + ` then called find(${args}).`
    }
    
    async findOne(...args) {
        const x = await this
        return x + ` then called findOne(${args}).`
    }
}

class BlogPostModel {
    
    constructor(blogPostData) {
        this.data = blogPostData
    }

    async save() {
        return 'called save to db.'
    }

    static find(...args) {
        return QueryPromise.resolve(`called find(${args}).`)
    }

    static findOne(...args) {
        return QueryPromise.resolve(`called findOne(${args}).`)
    }
}

module.exports = BlogPostModel
