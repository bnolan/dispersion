describe 'user collection', ->

  it 'should handle the truth', ->
    expect(true).toBeTruthy()

  it 'should exist', ->
    expect(UserCollection).toBeTruthy()

  it 'should instantiate', ->
    x = new UserCollection
    expect(x instanceof UserCollection).toBeTruthy()
    expect(x instanceof Backbone.Collection).toBeTruthy()
    expect(x.model == User).toBeTruthy()

