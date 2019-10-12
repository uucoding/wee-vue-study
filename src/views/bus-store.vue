<template>
  <div>
    <!-- 父子组件通信 -->
    <!-- <w-input v-model="inputValue"></w-input> -->
    <hr>
    {{ inputValue }}
    <hr>
    <!-- 兄弟组件通信 -->
    <!-- 给子组件设置触发事件 -->
    <w-input @input="handleInput"></w-input>
    <w-show :msg='inputValue'/>
  </div>
</template>

<script>
import WShow from '_c/WShow.vue'
import WInput from '_c/WInput.vue'

export default {
  name: 'busStore',
  data(){
    return {
      inputValue: ''
    }
  },
  // 注册组件
  components: {
    WInput,
    WShow
  },
  methods: {
    handleInput(val) {
      this.inputValue = val
    }
  }
}
</script>

<style>

</style>
