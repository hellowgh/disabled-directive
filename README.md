# Vue自定义指令实现按钮禁用

## 一 技术栈

本文以Vue3和element plus为例，其它技术栈大同小异。

demo仓库地址：https://github.com/hellowgh/disabled-directive

大家下载体验便知。

## 封装思路

1、利用原生JS给button添加disabled属性。

2、给button添加elment plus 的is-disabled类，实现CSS的禁用效果。

3、设置定时器，一段时间后取消禁用。

如下代码：

```javascript
function cb(el, binding) {
    // 这里实现按钮禁用
    el.disabled = true

    // 这里是增加 elementUI 的禁用样式类
    el.classList.add('is-disabled')

    // 解除 disabled
    // 可以通过 v-disabled=2000，指定禁用2000毫秒，默认禁用1000毫秒
    setTimeout(() => {
        el.classList.remove('is-disabled')
        el.disabled = false
    }, binding.value ?? 1000); // 这里设置禁用时长
}
```

## 使用场景

适用于点击按钮后禁用一段实践，防止重复触发。在一定程度上，能够代替防抖且更好用。因为这是一次注册，随处使用，而防抖用时需要每次引入。
