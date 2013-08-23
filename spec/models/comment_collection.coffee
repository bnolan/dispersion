describe 'comment collection', ->

  it 'should handle the truth', ->
    expect(true).toBeTruthy()

  it 'should exist', ->
    expect(CommentCollection).toBeTruthy()

  it 'should instantiate', ->
    x = new CommentCollection
    expect(x instanceof CommentCollection).toBeTruthy()
    expect(x instanceof Backbone.Collection).toBeTruthy()
    expect(x.model == Comment).toBeTruthy()

