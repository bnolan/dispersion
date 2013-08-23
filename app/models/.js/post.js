(function() {
  var Post;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  Post = (function() {
    function Post() {
      Post.__super__.constructor.apply(this, arguments);
    }
    __extends(Post, Backbone.Model);
    Post.prototype.initialize = function() {};
    Post.prototype.getComments = function() {
      return new CommentCollection(this.get('comments'));
    };
    Post.prototype.getCreatedAt = function() {
      return new Date(this.get('created_at'));
    };
    Post.prototype.getUser = function() {
      return app.user;
    };
    Post.prototype.toAttributes = function() {
      return this.attributes;
    };
    return Post;
  })();
  this.Post = Post;
}).call(this);
