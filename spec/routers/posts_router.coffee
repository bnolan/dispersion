describe 'posts router', ->

  it 'should handle the truth', ->
    expect(true).toBeTruthy()

  it 'should exist', ->
    expect(PostsRouter).toBeTruthy()

  it 'should instantiate', ->
    x = new PostsController
    expect(x instanceof PostsRouter).toBeTruthy()
    expect(x instanceof Backbone.Router).toBeTruthy()

  it 'should have index method', ->
    x = new PostsRouter
    x.index()

    # Umm..?
    expect(true).toBeTruthy()
