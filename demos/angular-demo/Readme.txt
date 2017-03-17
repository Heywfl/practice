AngularJS

1.AngularJS是一个JavaScript框架，通过<script>标签加到HTML页面内。
2.AngularJS指令是以ng作为前缀的HTML属性
  ng-app:定义了AngularJS应用，告诉AngularJS，<div>元素是AngularJS应用程序的“所有者”。
  ng-init:初始化AngularJS应用程序变量。
  ng-model:把元素值绑定到应用程序。
  ng-repeat:重复一个HTML元素。
  ng-bind:把应用程序数据绑定在HTML视图里。
  ng-controller:定义了控制器。
3.AngularJS表达式写在双大括号内：{{expression}}，表达式把数据绑定到HTML，这与ng-bind指令有异曲同工之妙。
4.AngularJS Scope(作用域)
  Scope(作用域) 是应用在 HTML (视图) 和 JavaScript (控制器)之间的纽带。
  Scope 是一个对象，有可用的方法和属性。当在AngularJS创建控制器时，可以将$scope对象当作一个参数传递，
  当控制器中添加$scope对象时，视图可以获取这些属性，而且视图中，不需要添加$scope前缀，只需要写属性名如：{{name}}
  <div  ng-app="myApp" ng-controller="myCon">
    <input ng-model="test"></input>
    <p>{{greeting}}</p>
    <button ng-click="sayHello()">点我</button>
  </div>
  <script>
    var app=angular.module('myApp', []);
    app.controller('myCon', function($scope){
      $scope.test="wfl";
      $scope.sayHello =function(){
        $scope.greeting='Hello '+ $scope.test +'!';
      };

    });
  </script>
