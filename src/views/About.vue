<template>
  <div class="about">
    <h1>This is an about page</h1>
    路由函数传递值： {{ name }}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '函数传递默认值'
    }
  },
  /**
   * 组件内守卫
   */
  beforeRouteEnter(to, from, next){
    console.log('this is component beforeRouteEnter')
    // 此时组件还未渲染，不用使用this,如果想使用，那么可以使用vm
    //此处next内部的回调函数，在整个组件渲染完毕之后才会调用
    // next()
    next(vm => {
      console.log(vm)
    })
  },
  /**
   * 组件内守卫
   */
  beforeRouteLeave(to, from, next) {
    console.log('this is component beforeRouteLeave')
    next()
  }
}
</script>
