<template>
  <div>
    这里是动态路由
    <!-- $route当前加载的路由对象 -->
    {{ $route.params.name }}

    <hr/>
    动态路由传参
    {{ name }}
  </div>
</template>
<script>
export default {
//
  props: {
    name: {
      type: [String, Number],
      default: '默认值'
    }
  },
  /**
   * 重用守卫
   */
  beforeRouteUpdate(to, from, next) {
    console.log('this is repeat beforeRouteUpdate')
  }
}
</script>
