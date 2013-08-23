class PostCollection extends Backbone.Collection
  model: Post

  comparator: (post) ->
    0 - post.getCreatedAt().valueOf()

  toAttributes: ->
    @map (post) ->
      post.toAttributes()
      
@PostCollection = PostCollection
