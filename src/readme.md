### src目录介绍

#### api
项目接口

#### assets
存放一些静态资源文件：图片、字体等



#### components
存放项目中的可以覆用的组件

#### config
项目配置文件

目录下有index.js文件，可以使用如下方式引入
```
import config from './config' //自动查找目录下的index.js
=等价于=
import config from './config/index'
=等价于=
import config from './config/index.js'
```

#### directive
存放vue的一些自定义指令

#### lib
工具包
- tools.js  与业务无关工具
- util.js   与业务有关工具 

#### mock
前端构造接口数据

#### router
存放项目的路由文件

#### store
状态管理文件夹

#### views
存放视图页面

#### App.vue
基础组件

#### main.js
程序的入口文件
