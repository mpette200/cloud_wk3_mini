const QueryPromise = function(executor) {
    var p = new Promise(executor);
    Object.setPrototypeOf(p, QueryPromise.prototype);
    return p;
};
Object.setPrototypeOf(QueryPromise, Promise);
QueryPromise.prototype = Object.create(Promise.prototype);
QueryPromise.prototype.constructor = QueryPromise;

QueryPromise.prototype.find = function() {
    var args = Array.prototype.slice.call(arguments);
    function message(x) {
        return x + ' then called find(' + args + ').';
    }
    return this.then(message);
};
QueryPromise.prototype.findOne = function() {
    var args = Array.prototype.slice.call(arguments);
    function message(x) {
        return x + ' then called findOne(' + args + ').';
    }
    return this.then(message);
};

const BlogPostModel = function(blogPostData) {
    this.data = blogPostData;
};
BlogPostModel.prototype.save = function() {
    return QueryPromise.resolve('called save to db.');
};
BlogPostModel.find = function() {
    var args = Array.prototype.slice.call(arguments);
    return QueryPromise.resolve('called find(' + args + ').');
};
BlogPostModel.findOne = function() {
    var args = Array.prototype.slice.call(arguments);
    return QueryPromise.resolve('called findOne(' + args + ').');
};

module.exports = BlogPostModel;
