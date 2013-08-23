class Post extends Backbone.Model
  initialize: ->
    # ...

  getComments: ->
    new CommentCollection @get('comments')

  getCreatedAt: ->
    new Date(@get('created_at'))

  getUser: ->
    app.user

  toAttributes: ->
    @attributes
    
@Post = Post
