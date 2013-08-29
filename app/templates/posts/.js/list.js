if(!this.$templates){
  $templates={};
};

this.$templates.postsList = function (__obj) {
  if (!__obj) __obj = {};
  var __out = [], __capture = function(callback) {
    var out = __out, result;
    __out = [];
    callback.call(this);
    result = __out.join('');
    __out = out;
    return __safe(result);
  }, __sanitize = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else if (typeof value !== 'undefined' && value != null) {
      return __escape(value);
    } else {
      return '';
    }
  }, __safe, __objSafe = __obj.safe, __escape = __obj.escape;
  __safe = __obj.safe = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else {
      if (!(typeof value !== 'undefined' && value != null)) value = '';
      var result = new String(value);
      result.ecoSafe = true;
      return result;
    }
  };
  if (!__escape) {
    __escape = __obj.escape = function(value) {
      return ('' + value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    };
  }
  (function() {
    (function() {
      var post, user, _i, _j, _len, _len1, _ref, _ref1;
    
      __out.push('<!--\n\n  Your eco template goes here...\n  \n-->\n\n<header>\n  <div class="inner">\n    <h1>s</h1>\n\n    <form action="#" class="search">\n      <input placeholder="Search for a username here" />\n    </form>\n    \n    <span class="user-name">\n      ');
    
      __out.push(__sanitize(this.model.get('name')));
    
      __out.push('\n    </span>\n  </div>\n</header>\n\n<div class="wrapper">\n  <section class="friends-section">\n    <h4>\n      Friends\n    </h4>\n  \n    <ul class="friends">\n      ');
    
      if (app.users.length === 0) {
        __out.push('\n        <li class="no-content">No friends yet</li>\n      ');
      }
    
      __out.push('\n\n      ');
    
      _ref = app.users.models;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        user = _ref[_i];
        __out.push('\n        <li>');
        __out.push(__sanitize(user.get('name')));
        __out.push('</li>\n      ');
      }
    
      __out.push('\n    </ul>\n  </section>\n\n  <section class="posts-section">\n    <form action="#" class="new-post">\n      <label>Update Status</label>\n    \n      <span class="chevron"></span>\n    \n      <textarea placeholder="What\'s on your mind?"></textarea>\n    </form>\n\n    <div>\n      ');
    
      _ref1 = this.collection.models;
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        post = _ref1[_j];
        __out.push('\n        <div class="post">\n          <img src="images/avatar.png" class="avatar" />\n      \n          <h4 class="user">\n            ');
        __out.push(__sanitize(post.getUser().get('name')));
        __out.push('\n          </h4>\n      \n          <p>\n            ');
        __out.push(__sanitize(post.get('content')));
        __out.push('\n          </p>\n\n          <span class="meta">\n            <a href="#">Like</a> &middot;\n            <a href="#">Comment</a> &middot;\n            <a href="#">Share</a> &middot;\n            ');
        __out.push(__sanitize(post.get('created_at')));
        __out.push('\n          </span>\n        </div>\n      ');
      }
    
      __out.push('\n    </div>\n  \n  </section>\n</div>');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
}