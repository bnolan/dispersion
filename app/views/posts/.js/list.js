(function() {
  var PostsListView;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  PostsListView = (function() {
    function PostsListView() {
      this.render = __bind(this.render, this);;      PostsListView.__super__.constructor.apply(this, arguments);
    }
    __extends(PostsListView, Backbone.View);
    PostsListView.prototype.initialize = function() {
      this.template = $templates.postsList;
      this.render();
      app.users.on('add', this.render);
      return app.posts.on('add', this.render);
    };
    PostsListView.prototype.events = {
      'keydown .new-post textarea': 'onKeydown',
      'submit .new-post': 'onSubmitPost',
      'submit .search': 'onSubmitSearch'
    };
    PostsListView.prototype.render = function() {
      if (this.$el.find('.new-post textarea').val()) {
        return;
      } else {
        this.$el.html(this.template(this));
      }
      return this.addAutocompleter();
    };
    PostsListView.prototype.addAutocompleter = function() {
      return this.$el.find('.search input').autocomplete({
        source: function(request, response) {
          return $.ajax({
            url: app.getBrokerUrl() + "/contacts/search",
            dataType: "jsonp",
            data: {
              name: request.term
            },
            success: function(data) {
              return response($.map(data.names, function(contact) {
                return {
                  label: contact.name,
                  value: contact.handle
                };
              }));
            }
          });
        },
        minLength: 1,
        select: function(event, ui) {
          return console.log(ui.item);
        }
      });
    };
    PostsListView.prototype.onKeydown = function(e) {
      if (e.keyCode === 13) {
        return $(e.currentTarget).parents('form').submit();
      }
    };
    PostsListView.prototype.onSubmitPost = function(e) {
      var post, textarea;
      e.preventDefault();
      textarea = this.$el.find('.new-post textarea');
      post = new Post({
        id: guid(),
        content: textarea.val(),
        created_at: new Date().toISOString(),
        user: app.user.get('name')
      });
      textarea.val("");
      app.user.newPost(post);
      app.posts.add(post);
      app.postModel(post);
      return this.render();
    };
    PostsListView.prototype.onSubmitSearch = function(e) {
      var input;
      e.preventDefault();
      input = this.$el.find('.search input');
      app.connectToUser(input.val());
      return input.val("").blur();
    };
    return PostsListView;
  })();
  this.PostsListView = PostsListView;
}).call(this);
