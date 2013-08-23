(function() {
  var Application;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  Application = (function() {
    function Application() {
      this.onConnection = __bind(this.onConnection, this);;      this.user = new User(this.parseUser());
      this.user.save();
      this.users = new UserCollection;
      this.peer = new Peer(this.user.get('name'), {
        key: this.peerKey(),
        debug: true
      });
      this.peer.on('connection', this.onConnection);
      this.inboundConnections = {};
      this.outboundConnections = {};
    }
    Application.prototype.onConnection = function(conn) {
      var message;
      this.inboundConnections[conn.peer] = conn;
      message = JSON.stringify({
        model: 'User',
        attributes: app.user.toAttributes()
      });
      conn.send(message);
      return conn.on('data', __bind(function(data) {
        return console.log('Got data:', data, 'from: ', conn.peer);
      }, this));
    };
    Application.prototype.connectToUser = function(name) {
      var conn;
      conn = app.peer.connect(name);
      this.outboundConnections[name] = conn;
      conn.on('open', function() {});
      return conn.on('data', __bind(function(data) {
        var obj;
        obj = {};
        try {
          obj = JSON.parse(data);
        } catch (e) {
          console.log("bad message:", data);
          return;
        }
        if (obj.model === 'Post') {
          app.user.newPost(new Post(obj.attributes));
          return;
        }
        if (obj.model === 'User') {
          app.users.add(new User(obj.attributes));
          return;
        }
        return console.log('Got data:', data, 'from: ', conn.peer);
      }, this));
    };
    Application.prototype.postModel = function(model) {
      var message, name, peer, _ref, _results;
      message = JSON.stringify({
        model: 'Post',
        attributes: model.toAttributes()
      });
      _ref = this.inboundConnections;
      _results = [];
      for (name in _ref) {
        peer = _ref[name];
        _results.push(peer.send(message));
      }
      return _results;
    };
    Application.prototype.peerKey = function() {
      return "uazd6lgkwi3yds4i";
    };
    Application.prototype.parseUser = function() {
      if (localStorage['user']) {
        return JSON.parse(localStorage['user']);
      } else {
        return {
          name: prompt("Please enter a username, no spaces"),
          posts: [
            {
              content: 'something else',
              created_at: '2013-05-25T12:00:00'
            }, {
              content: 'hello world',
              created_at: '2013-04-11T12:00:00'
            }
          ]
        };
      }
    };
    Application.prototype.getPosts = function() {
      var post, posts, user, _i, _j, _k, _len, _len2, _len3, _ref, _ref2, _ref3;
      posts = new PostCollection;
      _ref = this.user.getPosts().models;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        post = _ref[_i];
        posts.add(post);
      }
      _ref2 = this.users.models;
      for (_j = 0, _len2 = _ref2.length; _j < _len2; _j++) {
        user = _ref2[_j];
        _ref3 = user.getPosts().models;
        for (_k = 0, _len3 = _ref3.length; _k < _len3; _k++) {
          post = _ref3[_k];
          posts.add(post);
        }
      }
      return posts;
    };
    Application.prototype.start = function() {
      console.log('App started');
      new PostsRouter;
      return Backbone.history.start();
    };
    return Application;
  })();
  this.Application = Application;
}).call(this);
