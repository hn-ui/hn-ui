# Toolbar

## 需求说明

      实现一个toolbar布局框架：
      
        1. 组件提供3个slot，分别为left、switch、right；left放置左侧按钮组，switch和right放置右侧按钮组；
        
        2. switch和right之间间隔8px；
        
        3. 默认高度为40px，可通过参数选择为48px；

## Attributes

| 参数   | 说明                     | 类型    | 可选值 | 默认值 |
| ------ | ------------------------ | ------- | ------ | ------ |
| higher | 高度是否是更高，默认40px | boolean | -      | false  |


## Demo

<iframe height="265" style="width: 100%;" scrolling="no" title="hn toolbar demo" src="https://codepen.io/upcwangying/embed/yLeKbam?height=265&theme-id=light&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/upcwangying/pen/yLeKbam'>hn toolbar demo</a> by Ying Wang
  (<a href='https://codepen.io/upcwangying'>@upcwangying</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
