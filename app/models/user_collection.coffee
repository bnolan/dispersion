class UserCollection extends Backbone.Collection
  model: User

  getByName: (name) ->
    @find (user) ->
      user.get('name') == name
      
@UserCollection = UserCollection
