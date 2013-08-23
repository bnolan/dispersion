describe 'post collection', ->

  it 'should handle the truth', ->
    expect(true).toBeTruthy()

  it 'should exist', ->
    expect(PostCollection).toBeTruthy()

  it 'should instantiate', ->
    x = new PostCollection
    expect(x instanceof PostCollection).toBeTruthy()
    expect(x instanceof Backbone.Collection).toBeTruthy()
    expect(x.model == Post).toBeTruthy()

