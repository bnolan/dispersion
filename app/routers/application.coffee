class Application
  constructor: ->
    @user = new User(@parseUser())
    @user.save()

    # User and friends
    @users = new UserCollection

    # All posts by all users
    @posts = new PostCollection
    
    # WebRTC service using peer.js cloud services
    @peer = new Peer @user.get('name'), { key: @peerKey(), debug : true }
    @peer.on 'connection', @onConnection
    
    # Keep a list of peers
    @inboundConnections = {}
    @outboundConnections = {}

  resetSession: ->
    delete localStorage['user']
    
  # A client to connected to us
  onConnection: (conn) =>
    @inboundConnections[conn.peer] = conn
    @users.add(new User { name : conn.peer })
    
    message = JSON.stringify {
      model : 'User'
      attributes : app.user.toAttributes()
    }

    conn.send(message)
    
    conn.on 'data', (data) =>
      console.log('Got data:', data, 'from: ', conn.peer)

  # Connect to someone else 
  connectToUser: (name) ->
    conn = app.peer.connect(name)

    @outboundConnections[name] = conn
    @users.add(new User { name : name })

    conn.on 'open', ->
      # say who we are
      # conn.send(JSON.stringify({ hello : 'world!', user : app.user.get('name') }))

    conn.on 'data', (data) =>
      obj = {}
    
      try
        obj = JSON.parse(data)
      catch e
        console.log "bad message:", data
        return 
      
      if obj.model == 'Post'
        post = new Post(obj.attributes)
        @users.getByName(post.get('user')).newPost(post)
        @posts.add(post)
        return
        
      if obj.model == 'User'
        app.users.add(new User(obj.attributes))
        return
      
      console.log('Got data:', data, 'from: ', conn.peer)
    
  postModel: (model) ->
    message = JSON.stringify {
      model : 'Post'
      attributes : model.toAttributes()
    }
    
    for name, peer of @inboundConnections
      peer.send(message)
      
  # peer.js key
  peerKey: ->
    "uazd6lgkwi3yds4i"
    
  parseUser: ->
    if localStorage['user']
      JSON.parse(localStorage['user'])
    else
      name = prompt("Please enter a username, no spaces")

      { 
        name : name
        posts : [
          { content : 'hello world', created_at : new Date().toISOString(), user : name }
        ]
      }    

  # todo - maybe replace with a permanent collection and add posts to this collection
  #   when a new user is added.
  # getPosts: ->
  #   @posts
    # 
    # for post in @user.getPosts().models
    #   posts.add(post)
    # 
    # for user in @users.models
    #   for post in user.getPosts().models
    #     posts.add(post)
    #     
    # posts
    
  start: ->
    console.log 'App started'

    # Create your controllers here...
    new PostsRouter
    
    # Then start backbone
    Backbone.history.start()
    

@Application = Application
