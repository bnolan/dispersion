(function() {
  var UserCollection;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  UserCollection = (function() {
    function UserCollection() {
      UserCollection.__super__.constructor.apply(this, arguments);
    }
    __extends(UserCollection, Backbone.Collection);
    UserCollection.prototype.model = User;
    return UserCollection;
  })();
  this.UserCollection = UserCollection;
}).call(this);
