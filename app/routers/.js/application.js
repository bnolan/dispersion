(function() {
  var Application;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  Application = (function() {
    function Application() {
      this.onConnection = __bind(this.onConnection, this);;      this.user = new User(this.parseUser());
      this.user.save();
      this.users = new UserCollection;
      this.posts = new PostCollection;
      this.peer = new Peer(this.user.get('name'), {
        key: this.peerKey(),
        debug: true
      });
      this.peer.on('connection', this.onConnection);
      this.inboundConnections = {};
      this.outboundConnections = {};
    }
    Application.prototype.resetSession = function() {
      return delete localStorage['user'];
    };
    Application.prototype.onConnection = function(conn) {
      var message;
      this.inboundConnections[conn.peer] = conn;
      this.users.add(new User({
        name: conn.peer
      }));
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
      this.users.add(new User({
        name: name
      }));
      conn.on('open', function() {});
      return conn.on('data', __bind(function(data) {
        var obj, post;
        obj = {};
        try {
          obj = JSON.parse(data);
        } catch (e) {
          console.log("bad message:", data);
          return;
        }
        if (obj.model === 'Post') {
          post = new Post(obj.attributes);
          this.users.getByName(post.get('user')).newPost(post);
          this.posts.add(post);
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
      var name;
      if (localStorage['user']) {
        return JSON.parse(localStorage['user']);
      } else {
        name = prompt("Please enter a username, no spaces");
        return {
          name: name,
          posts: [
            {
              content: 'hello world',
              created_at: new Date().toISOString(),
              user: name
            }
          ]
        };
      }
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
