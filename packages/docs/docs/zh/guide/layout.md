# Layout

## 需求说明

      实现一个布局框架，作为安全生产项目list页面、form页面默认的布局方式：
      
        1. 组件默认左侧padding为20px;右侧padding为33px，且不可修改；
        
        2. 组件上侧padding为12px;下侧padding为12px，默认不启用，可通过参数启用；
        
        3. 组件下边框为“1px solid #E4E7ED”，默认不启用，可通过参数启用；

## Attributes

| 参数          | 说明               | 类型    | 可选值      | 默认值 |
| ------------- | ------------------ | ------- | ----------- | ------ |
| margin        | 启用组件上/下边距  | array   | top, bottom | []     |
| border-bottom | 是否启用组件下边框 | boolean | -           | false  |

## Demo

<iframe height="265" style="width: 100%;" scrolling="no" title="hn ui demo" src="https://codepen.io/upcwangying/embed/WNrMKXR?height=265&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/upcwangying/pen/WNrMKXR'>hn ui demo</a> by Ying Wang
  (<a href='https://codepen.io/upcwangying'>@upcwangying</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
