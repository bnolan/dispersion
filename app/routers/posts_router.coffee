class PostsRouter extends Backbone.Router
  routes :
    "posts/:id/edit" : "edit"
    "posts/new" : "new"
    "posts/:id" : "show"
    "" : "list"

  list: ->
    new PostsListView { 
      el : $('body')
      model : app.user
      collection : app.posts
    }

@PostsRouter = PostsRouter
