class PostsListView extends Backbone.View
  initialize: ->
    @template = $templates.postsList

    @render()
    
    app.users.on 'add', @render
    app.posts.on 'add', @render

  events: {
    'keydown .new-post textarea' : 'onKeydown'
    'submit .new-post' : 'onSubmitPost'
    'submit .search' : 'onSubmitSearch'
  }
  
  render: =>
    @$el.html @template(this)

  onKeydown: (e) ->
    if e.keyCode == 13
      $(e.currentTarget).parents('form').submit()
      
  onSubmitPost: (e) ->
    e.preventDefault()
    textarea = @$el.find('.new-post textarea')

    post = new Post {
      id : guid()
      content : textarea.val()
      created_at : new Date().toISOString()
      user : app.user.get('name')
    }
    
    app.user.newPost(post)
    app.posts.add(post)
    app.postModel(post)

    @render()

  onSubmitSearch: (e) ->
    e.preventDefault()
    input = @$el.find('.search input')
    app.connectToUser(input.val())
    input.val("").blur()
    
@PostsListView = PostsListView
