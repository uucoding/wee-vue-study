### router概述


#### index.js
创建路由实例，添加路由守卫

#### router.js
##### 配置路由列表

```
<!-- 封装了<a>标签 to指向路由路径-->
<router-link to="/"></router-link>

<!-- 视图渲染，通过路由跳转的会在此处渲染 -->
<router-view/>
```
##### 路由
```
{
    <!-- 路由路径 -->
    path: '/',
    <!-- 路径对应需要渲染的组件 -->
    component: Home
}
```
```
{
    <!-- 路由路径 -->
    path: '/',
    <!-- 懒加载，只有访问的时候才会渲染 -->
    component: （）=> import('@/views/About.vue')
}
```
