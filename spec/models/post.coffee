describe 'post model', ->

  it 'should handle the truth', ->
    expect(true).toBeTruthy()

  it 'should exist', ->
    expect(Post).toBeTruthy()

  it 'should instantiate', ->
    x = new Post
    expect(x instanceof Post).toBeTruthy()
    expect(x instanceof Backbone.Model).toBeTruthy()

