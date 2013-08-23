(function() {
  describe('post model', function() {
    it('should handle the truth', function() {
      return expect(true).toBeTruthy();
    });
    it('should exist', function() {
      return expect(Post).toBeTruthy();
    });
    return it('should instantiate', function() {
      var x;
      x = new Post;
      expect(x instanceof Post).toBeTruthy();
      return expect(x instanceof Backbone.Model).toBeTruthy();
    });
  });
}).call(this);
