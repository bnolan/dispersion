describe 'user model', ->

  it 'should handle the truth', ->
    expect(true).toBeTruthy()

  it 'should exist', ->
    expect(User).toBeTruthy()

  it 'should instantiate', ->
    x = new User
    expect(x instanceof User).toBeTruthy()
    expect(x instanceof Backbone.Model).toBeTruthy()

