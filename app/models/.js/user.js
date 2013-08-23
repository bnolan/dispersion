(function() {
  var User;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  User = (function() {
    function User() {
      User.__super__.constructor.apply(this, arguments);
    }
    __extends(User, Backbone.Model);
    User.prototype.initialize = function() {};
    User.prototype.getPosts = function() {
      return this.posts || (this.posts = new PostCollection(this.get('posts')));
    };
    User.prototype.newPost = function(post) {
      this.getPosts().add(post);
      return this.save();
    };
    User.prototype.toAttributes = function() {
      return {
        name: this.get('name'),
        posts: this.getPosts().toAttributes()
      };
    };
    User.prototype.save = function() {
      return localStorage['user'] = JSON.stringify(this.toAttributes());
    };
    return User;
  })();
  this.User = User;
}).call(this);
