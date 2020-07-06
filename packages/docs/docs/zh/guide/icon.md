# Icon

## 需求说明

      自定义icon组件：
      
        1. 鼠标移入移出样式改变；
        
        2. 可定义是否一直显示active样式；
        
        3. 可通过参数定义显示的具体图标；


## Attributes

| 参数      | 说明           | 类型    | 可选值        | 默认值 | 必填项 |
| --------- | -------------- | ------- | ------------- | ------ | ------ |
| size      | 设置大小       | string  | normal, small | normal | 否     |
| always-on | 一直显示主题色 | boolean | -             | false  | 否     |
| name      | 字体图标名字   | string  | -             | -      | 是     |
| disabled  | 是否禁用       | boolean | -             | false  | 否     |

## Demo

/src/views/samples/toolbarDemo.vue
