class User extends Backbone.Model
  initialize: ->
    # ...

  getPosts: ->
    @posts ||= new PostCollection @get('posts')
    
  newPost: (post) ->
    @getPosts().add(post)
    @save()
    
  toAttributes: ->
    {
      name : @get('name')
      posts : @getPosts().toAttributes()
    }
    
  save: ->
    # todo - trim the posts array to only save the last XXX posts
    localStorage['user'] = JSON.stringify(@toAttributes())
    
@User = User
