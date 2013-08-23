(function() {
  describe('comment model', function() {
    it('should handle the truth', function() {
      return expect(true).toBeTruthy();
    });
    it('should exist', function() {
      return expect(Comment).toBeTruthy();
    });
    return it('should instantiate', function() {
      var x;
      x = new Comment;
      expect(x instanceof Comment).toBeTruthy();
      return expect(x instanceof Backbone.Model).toBeTruthy();
    });
  });
}).call(this);
