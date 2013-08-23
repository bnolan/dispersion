(function() {
  describe('posts router', function() {
    it('should handle the truth', function() {
      return expect(true).toBeTruthy();
    });
    it('should exist', function() {
      return expect(PostsRouter).toBeTruthy();
    });
    it('should instantiate', function() {
      var x;
      x = new PostsController;
      expect(x instanceof PostsRouter).toBeTruthy();
      return expect(x instanceof Backbone.Router).toBeTruthy();
    });
    return it('should have index method', function() {
      var x;
      x = new PostsRouter;
      x.index();
      return expect(true).toBeTruthy();
    });
  });
}).call(this);
