<template>
  <div>
    与WInput通信: {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'WShow',
  props: {
    msg: {
      type:  String,
      default: ''
    }
  }
}
</script>

<style>

</style>
