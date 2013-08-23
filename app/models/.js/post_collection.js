(function() {
  var PostCollection;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  PostCollection = (function() {
    function PostCollection() {
      PostCollection.__super__.constructor.apply(this, arguments);
    }
    __extends(PostCollection, Backbone.Collection);
    PostCollection.prototype.model = Post;
    PostCollection.prototype.comparator = function(post) {
      return 0 - post.getCreatedAt().valueOf();
    };
    PostCollection.prototype.toAttributes = function() {
      return this.map(function(post) {
        return post.toAttributes();
      });
    };
    PostCollection.prototype.save = function() {};
    return PostCollection;
  })();
  this.PostCollection = PostCollection;
}).call(this);
