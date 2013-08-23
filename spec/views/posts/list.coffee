describe 'posts router', ->

  describe 'list view', ->

    it 'should handle the truth', ->
      expect(true).toBeTruthy()

    it 'should exist', ->
      expect(PostsListView).toBeTruthy()

    it 'should instantiate', ->
      x = new PostsListView
      expect(x instanceof PostsListView).toBeTruthy()
      expect(x instanceof Backbone.View).toBeTruthy()

    it 'should have render method', ->
      x = new PostsListView
      x.render()

    # Implement as you see fit
    xit 'should render some text', ->
      x = new PostsListView { el : $("<div />") }
      x.render()
      expect(x.$(".myselector").html()).toMatch /some text/
