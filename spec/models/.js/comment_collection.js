(function() {
  describe('comment collection', function() {
    it('should handle the truth', function() {
      return expect(true).toBeTruthy();
    });
    it('should exist', function() {
      return expect(CommentCollection).toBeTruthy();
    });
    return it('should instantiate', function() {
      var x;
      x = new CommentCollection;
      expect(x instanceof CommentCollection).toBeTruthy();
      expect(x instanceof Backbone.Collection).toBeTruthy();
      return expect(x.model === Comment).toBeTruthy();
    });
  });
}).call(this);
