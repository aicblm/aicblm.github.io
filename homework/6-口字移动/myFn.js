// 读取元素样式 el:元素  attr:属性 （字符串）
function getStyle(el,attr) {
    return window.getComputedStyle(el)[attr]
}

// 元素移动函数: el：元素 attr：元素属性 target：到那停 step：一次动多少像素 speed：多少毫秒动一次
function moveFn(el,attr,target,step,speed,callback){
    step = parseFloat(getStyle(el,attr)) < target ? step : -step 
    clearInterval(timer)
    timer = setInterval(() => {
        let temp = parseFloat(getStyle(el,attr))
        let attrValue = temp + step
        if(attrValue > target && step > 0 || attrValue < target && step < 0){
            attrValue = target
            clearInterval(timer)
        }
        el.style[attr] = attrValue + 'px' 
        if(attrValue == target){
            clearInterval(timer)
            // if(callback)callback()
            callback && callback()
        }
    }, speed);
}