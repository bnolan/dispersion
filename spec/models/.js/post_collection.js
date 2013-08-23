(function() {
  describe('post collection', function() {
    it('should handle the truth', function() {
      return expect(true).toBeTruthy();
    });
    it('should exist', function() {
      return expect(PostCollection).toBeTruthy();
    });
    return it('should instantiate', function() {
      var x;
      x = new PostCollection;
      expect(x instanceof PostCollection).toBeTruthy();
      expect(x instanceof Backbone.Collection).toBeTruthy();
      return expect(x.model === Post).toBeTruthy();
    });
  });
}).call(this);
