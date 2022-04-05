 var outer = document.getElementById("outer");
 var outer_width = outer.offsetWidth;
 var imgList = document.getElementById("imgList");
 var imgArr = document.getElementsByClassName("slige-img");
 var navDiv = document.getElementById("navDiv");
 var view_width = screen.width;
 // 默认显示图片的索引
 var index = 0;
 // 获取所有的a
 var allA = document.getElementsByClassName("nav-point");
 // 设置默认选中的效果
 allA[index].style.backgroundColor = "black";
 // 创建一个定时器标识
 var timer;



 if(outer_width > 500){
     replacedoc();
    // window.navigate("www.baidu.com");
     // 设置imgList的宽度
 imgList.style.width = 1020*imgArr.length+"px";
 // 设置导航按钮居中
 // 设置navDIvleft值
 navDiv.style.left = (outer.offsetWidth - navDiv.offsetWidth)/2 +"px";
 
 // 点击超链接，切换到图片
 // 绑定单机函数
 for(var i = 0;i<allA.length;i++){
     // 添加属性来标记索引
     allA[i].num = i;
     // 绑定单机相应函数
     allA[i].onclick = function(){
         // 关闭自动切换的定时器
         clearInterval(timer);
         // 知道点击超链接的索引,并设置为index
         index = this.num;
         //切换图片
         // imgList.style.left = -520*index+"px";

         // 修改正在显示的a
         // allA[index].style.backgroundColor = "black";

         setA();

         // 使用move函数来切换图片
         move(imgList,"left",-1020*index,100,function(){
             // 动画执行完毕，开启自动切换
             autochange();
         })
     }
 }

 // 开启自动切换图片
 autochange();

 // 创建一个方法，用来设置选中的a
 function setA(){
     // 判断当前是否是最后一张图片(为什么-1不行，-2就行)
     if(index >= imgArr.length -1){
         index = 0;
         // 此时显示的是最后一张，通过css将最后一张切换到第一张
         imgList.style.left = 0;
     }
     // 遍历所有的a，设置其为红色
     for(var i = 0;i<allA.length;i++){
         allA[i].style.backgroundColor = "";
     }
     allA[index].style.backgroundColor = "black";
 }

 // 创建一个函数开启自动切换图片
 function autochange(){
     // 开启定时器，定时切换
     timer = setInterval(function(){
         // 索引自增
         index++;
         
         // 判断index是否超过
         index %= imgArr.length;
        //  console.log(imgArr.length);
        //  console.log(index);
         move(imgList,"left",-1020*index,30,function(){
             // 修改导航点
             setA();
         })
     },3000)
 }

 }else{
     replacedoc();
 imgList.style.width = 420*imgArr.length+"px";
 // 设置navDIvleft值
 navDiv.style.left = (outer.offsetWidth - navDiv.offsetWidth)/2 +"px";
 // 点击超链接，切换到图片
 // 绑定单机函数
 for(var i = 0;i<allA.length;i++){
     // 添加属性来标记索引
     allA[i].num = i;
     // 绑定单机相应函数
     allA[i].onclick = function(){

         // 关闭自动切换的定时器
         clearInterval(timer);

         // 知道点击超链接的索引,并设置为index
         index = this.num;

         //切换图片
         // imgList.style.left = -520*index+"px";

         // 修改正在显示的a
         // allA[index].style.backgroundColor = "black";

         setA();

         // 使用move函数来切换图片
         move(imgList,"left",-420*index,100,function(){
             // 动画执行完毕，开启自动切换
             autochange();
         })
     }
 }

 // 开启自动切换图片
 autochange();

 // 创建一个方法，用来设置选中的a
 function setA(){
     // 判断当前是否是最后一张图片(为什么-1不行，-2就行)
     if(index >= imgArr.length -1){
         index = 0;
         // 此时显示的是最后一张，通过css将最后一张切换到第一张
         imgList.style.left = 0;
     }
     // 遍历所有的a，设置其为红色
     for(var i = 0;i<allA.length;i++){
         allA[i].style.backgroundColor = "";
     }
     allA[index].style.backgroundColor = "black";
 }

 // 创建一个函数开启自动切换图片
 function autochange(){
     // 开启定时器，定时切换
     timer = setInterval(function(){
         // 索引自增
         index++;
         // 判断index是否超过
        //  index %= imgArr.length;
         move(imgList,"left",-420*index,30,function(){
             // 修改导航点
             setA();
         })
     },3000)
 }
 }

//  定义一个刷新页面函数
function replacedoc()
{
    window.location.replace("#");
}

 
 