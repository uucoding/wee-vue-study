<template>
  <div class="email">
      这里是email命名视图

      看这里{{message}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    }
  },
  /**
   * 监听 $bus上的on-click事件
   */
  mounted() {
    this.$bus.$on('on-click', msg => {
      this.message = msg
    })
    console.log(this.$bus)
  }
}
</script>

<style>
.email {
  border: solid 1px red
}
</style>
