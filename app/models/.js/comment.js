(function() {
  var Comment;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  Comment = (function() {
    function Comment() {
      Comment.__super__.constructor.apply(this, arguments);
    }
    __extends(Comment, Backbone.Model);
    Comment.prototype.initialize = function() {};
    return Comment;
  })();
  this.Comment = Comment;
}).call(this);
