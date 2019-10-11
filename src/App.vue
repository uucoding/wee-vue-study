<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <!-- 命名路由跳转 v-bind:to 简写为 :to -->
      <!-- 跳转到 名称为about的路由上面 -->
      <router-link :to="{ name: 'about' }">About</router-link>
    </div>
    <!-- 过度特效 -->
    <transition-group name="change">
      <router-view key="default"/>
      <!-- 命名视图 -->
      <router-view key="email" name='email'/>
      <router-view key="tel" name='tel' />
    </transition-group>

  </div>
</template>

<style lang="less">
.change-enter {
  opacity: 0;
}
.change-enter-active {
  transition: opacity 3s ease;
}
.change-enter-to {
  opacity: 1;
}
.change-leave {
  opacity: 1;
}
.change-leave-enter {
  transition: opacity 3s ease;
}
.change-leave-to {
  opacity: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
