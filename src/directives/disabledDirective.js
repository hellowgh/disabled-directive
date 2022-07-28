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

const disabledDirective = {
    mounted(el, binding) {
        el.addEventListener('click', () => {
            cb(el, binding)
        })
    },

    beforeUnmount(el, binding) { 
        el.removeEventListener('click', () => {
            cb(el, binding)
        })
    },
}

export default disabledDirective;