<template>
  <div class="home">
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转路由到/parent/child2</button>
    <button @click="handleClick('replace')">替换路由到/parent/child2</button>
    <hr/>
    路由传参数: {{ name }}
    <hr/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  props: {
    name: {
      type: String,
      default: '默认值'
    }
  },
  methods: {
    handleClick(type) {
      // this.$router  获取项目中注册的的路由实例，new Vue({router})
      if(type === 'back') {
        // this.$router.go(-1)
        this.$router.back()
      } else if (type === 'push') {
        this.$router.push({
          path: '/parent/child2',
          //params方式传参数，需要使用命名路由方式。路径方式为： /xxx/xxx/lisi
          // name: ''
          // params: {
          //   name: 'lisi'
          // }

          //query方式传参数，路径方式为： /xxx/xxx?name=lisi
          // query: {
          //   name: 'lisi'
          // }
        })
      } else if (type === 'replace') {
        // 与跳转不同的是，此处直接替换当前页面，跳转会把页面当前页面加入历史记录，这里是直接替换
        this.$router.replace({path: '/parent/child2'})
      }

    }
  }

}
</script>
