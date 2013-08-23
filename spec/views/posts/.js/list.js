(function() {
  describe('posts router', function() {
    return describe('list view', function() {
      it('should handle the truth', function() {
        return expect(true).toBeTruthy();
      });
      it('should exist', function() {
        return expect(PostsListView).toBeTruthy();
      });
      it('should instantiate', function() {
        var x;
        x = new PostsListView;
        expect(x instanceof PostsListView).toBeTruthy();
        return expect(x instanceof Backbone.View).toBeTruthy();
      });
      it('should have render method', function() {
        var x;
        x = new PostsListView;
        return x.render();
      });
      return xit('should render some text', function() {
        var x;
        x = new PostsListView({
          el: $("<div />")
        });
        x.render();
        return expect(x.$(".myselector").html()).toMatch(/some text/);
      });
    });
  });
}).call(this);
