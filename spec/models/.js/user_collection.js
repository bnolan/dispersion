(function() {
  describe('user collection', function() {
    it('should handle the truth', function() {
      return expect(true).toBeTruthy();
    });
    it('should exist', function() {
      return expect(UserCollection).toBeTruthy();
    });
    return it('should instantiate', function() {
      var x;
      x = new UserCollection;
      expect(x instanceof UserCollection).toBeTruthy();
      expect(x instanceof Backbone.Collection).toBeTruthy();
      return expect(x.model === User).toBeTruthy();
    });
  });
}).call(this);
