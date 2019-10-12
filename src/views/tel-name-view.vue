<template>
  <div class="tel">
    这里是tel命名视图
    <button @click="handleClick">点击这里</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$bus.$emit('on-click', '    tel点击 ->  点击传递信息 -> email')
    }
  }
}
</script>

<style>
.tel {
  border: solid 1px green;
}
</style>
