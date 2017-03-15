(function() {
  window.App = {
    Models: {},
    Collections: {},
    Views: {},
    Router: {}
  };
  App.Router = Backbone.Router.extend({
    routes: {
      '': 'home',
      'index/:indexid': 'index',
      'show/*showid': 'show',
      'download/:downloadid': 'download',
      '*other': 'other'
    },
    home: function() {
      $(document.body).append("调用了home路由<br>");
    },
    index: function(indexid) {
      $(document.body).append("调用了index路由，路由的id是" + indexid + "<br>");
    },
    show: function(showid) {
      $(document.body).append("调用了show路由，id是" + showid + "<br>");
    },
    download: function(downloadid) {
      $(document.body).append("调用了download路由，id是"+downloadid+"<br>");
    },
    other: function(other) {
      $(document.body).append("其他路由未定义<br>");
    }

  });
  new App.Router();
  Backbone.history.start();
})();
