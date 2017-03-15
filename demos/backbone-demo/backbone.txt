Backbone.js

Model：是任何Javascript应用的核心，包括数据交互及与其相关的大量逻辑： 转换、验证、计算属性和访问控制。你可以用特定的方法扩展
  Backbone.Model.extend(properties, [classProperties])，创建自己的Model类，可以扩展Backbone.Model并提供实例properties(属性)，
  以及可选的可以直接注册到构造函数的classProperties(类属性)。
Collection：
  Backbone.Collection.extend(properties, [classProperties])
Router:
  页面加载期间，当应用已经创建了所有的路由，需要调用 Backbone.history.start()，
  或 Backbone.history.start({pushState: true}) 来确保驱动初始化 URL 的路由。
  Backbone.Router.extend(properties, [classProperties])
History:
  作为全局路由服务用于处理 hashchange 事件或 pushState，匹配适合的路由，并触发回调函数。 我们不需要自己去做这些事情 —
  如果使用带有键值对的 路由，Backbone.history 会被自动创建。
  Backbone.history.start();
