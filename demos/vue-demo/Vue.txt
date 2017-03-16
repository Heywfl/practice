Vue.js

1.Vue.js 是一套构建用户界面的渐进式框架，它只关注图层，采用自底向上增量开发设计。

2.数据绑定最常见的形式是使用{{}}双大括号的文本插值。
3.Vue指令是带有v-前缀的特殊属性，指令用于在表达式的值改变时，将某些行为应用到DOM上
  v-html：用于输出html代码。
  v-bind：html属性中的值应使用v-bind
  v-if：条件判断
  v-on：监听DOM事件
    <a v-on:click="doSomething">在这里参数是监听的事件名。
    修饰符是以半角句号 . 指明的特殊后缀，用于指出一个指定应该以特殊方式绑定。
    例如，.prevent 修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()：<form v-on:submit.prevent="onSubmit"></form>
  v-model：实现双向绑定数据。
  v-show:根据条件展示元素。
  v-for：循环条件，需要以 item in items 形式的语法，items是源数据数组并且item是数据元素迭代的别名。
4.过滤器：
  Vue.js允许自定义过滤器，被用作一些常见的文本格式化，由“管道符”指示。
  <!-- 在两个大括号中 -->
  {{ message | capitalize }}
  <!-- 在 v-bind 指令中 -->
  <div v-bind:id="rawId | formatId"></div>
