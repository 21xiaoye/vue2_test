# vue2_test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 组件的自定义事件
1，一种组件间通信的方式，适用于:子组件===>父组件
2.使用场景:A是父组件，B是子组件，B向A传数据，就要在A中给B绑定自定义事件（事件的回调在A中）
3.可以使用指令绑定事件也可以在mounted钩子中绑定
4。触发自定义事件：this.$emit('事件',回调方法)
解绑:$off
5.组件上绑定原生的DOM事件，需要使用native修饰符
6，使用this.$refs.xxx.$on()绑定自定义事件的时候，回调要么配置在Methods中，要么使用箭头函数配置

### 全局事件总线
任意组件间通信

### 消息的订阅与发布
订阅消息：消息名
订阅内容：消息内容
适用任何组件间通信
