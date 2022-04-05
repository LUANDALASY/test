// alert("dddd");

var left_menu_logo = document.getElementsByClassName("left-menu-logo");
var left_menu_hidden = document.getElementsByClassName("left-menu-hidden");
var line1 = document.getElementsByClassName("line1");
var line2 = document.getElementsByClassName("line2");
var line3 = document.getElementsByClassName("line3");
var openif = false;
left_menu_logo[0].onclick = function(){
    if(openif == false){
        left_menu_hidden[0].style.left = "-10px";
        line1[0].style.transform = "rotateZ(45deg)";
        line2[0].style.opacity = "0";
        line3[0].style.transform = "rotateZ(-45deg)";
        openif = true;
    }else{
        left_menu_hidden[0].style.left = "-250px";
        line1[0].style.transform = "rotateZ(0deg)";
        line2[0].style.opacity = "1";
        line3[0].style.transform = "rotateZ(0deg)";
        openif = false;
    }
}



