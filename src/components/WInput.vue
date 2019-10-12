<template>
  <input @input="handleInput" :value='value'>
</template>

<script>
export default {
  name: 'WInput',
  props: {
    value: {
      type:  [String, Number],
      default: ''
    }
  },
  methods: {
    /**
     * value的值，通过事件方式传递给父组件
     */
    handleInput(e) {
      let val = e.target.value;
      this.$emit('input', val)
    }
  }
}
</script>

<style>

</style>
