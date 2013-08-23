(function() {
  describe('user model', function() {
    it('should handle the truth', function() {
      return expect(true).toBeTruthy();
    });
    it('should exist', function() {
      return expect(User).toBeTruthy();
    });
    return it('should instantiate', function() {
      var x;
      x = new User;
      expect(x instanceof User).toBeTruthy();
      return expect(x instanceof Backbone.Model).toBeTruthy();
    });
  });
}).call(this);
