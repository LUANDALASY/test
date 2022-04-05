function getStyle(obj,name){
    // 正常浏览器的方式
    return getComputedStyle(obj,null)[name];
}
// 尝试建一个可以执行简单动画的函数
        // obj:要执行动画的对象
        // attr:要执行动画的样式,left\top\width\height
        // target：运动的目标位置
        // speed：运动的速度
        // callback：回调函数,将会在动画执行完毕后执行
        function move(obj, attr, target, speed,callback){

            // 关闭上一个定时器
            clearInterval(obj.timer);
            // 判断速度的正负值，从0-800，speed+；800-0，speed-；
            // 获取元素目前的位置，只用一次
            var current = parseInt(getStyle(obj,attr));
            if(current > target){
                // 此时速度为负值
                speed = -speed;
            }
            // 开启定时器，执行动画效果
            // 向执行动画的对象中添加一个timer属性，用来保存自己的定时器表示
            obj.timer = setInterval(function(){
                // 获取原来box1的原来的left的值
                var oldValue = parseInt(getStyle(obj,attr));
                // 修改box1的位置
                var newValue = oldValue + speed;
                // 判断newvalue是否大于800
                // 当向左移动，判断是否小于目标位置
                // 向右移动时，需要判断是否>目标位置
                if((speed<0 && newValue < target) || (speed>0&&newValue>target)){
                    newValue = target;
                }
                // 将新值设置给box1
                obj.style[attr] = newValue + "px";
                // 当元素移动到800px时，停止移动
                if(newValue == target){
                    // 到达目标，关闭计时器
                    clearInterval(obj.timer);
                    // 动画执行完毕，调用回调函数
                    callback();

                    }
                
            },30);
        }