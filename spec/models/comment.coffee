describe 'comment model', ->

  it 'should handle the truth', ->
    expect(true).toBeTruthy()

  it 'should exist', ->
    expect(Comment).toBeTruthy()

  it 'should instantiate', ->
    x = new Comment
    expect(x instanceof Comment).toBeTruthy()
    expect(x instanceof Backbone.Model).toBeTruthy()

