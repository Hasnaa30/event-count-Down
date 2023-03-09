$(document).ready(function(){
    let sidebarInnerwidth=$(".sidebar-inner").innerWidth();
    $(".sidebar").css("left",-sidebarInnerwidth);
    $(".icon,.x-mark").click(function(){
        if($(".sidebar").css("left")=="0px"){
            $(".sidebar").animate({left: -sidebarInnerwidth});
            $(".content").animate({"margin-left":"0px"});
            $(".icon").animate({"margin-left":"0px"});
        }
        else{
            $(".sidebar").animate({left: "0px"});
            $(".content").animate({"margin-left":sidebarInnerwidth});
            $(".icon").animate({"margin-left":sidebarInnerwidth});
        }
    });
    $("a[href^='#']").click(function(e){
        let aHref= e.target.getAttribute("href");
        let sectionOffset=$(aHref).offset().top;
        $("html,body").animate({scrollTop: sectionOffset},700);
    });
});

$(function(){
    $("div.active").css("display","block");
    $(".accordion h3").click(function(){
        $(this).next().slideToggle(500);
        $(".accordion div").not($(this).next()).slideUp(500);
    });
});

let counter=setInterval(() => {
    let countDownDate= new Date("April 1,2023").getTime();
    let dateNow=new Date().getTime();
    let dateDiff= countDownDate - dateNow;
    let days= Math.floor(dateDiff/(1000 * 60 * 60 * 24));
    let hours= Math.floor(dateDiff % (1000 * 60 * 60 * 24)/(1000 * 60 * 60));
    let minutes= Math.floor(dateDiff%(1000 * 60 * 60)/(1000 * 60));
    let seconds= Math.floor(dateDiff%(1000 * 60)/(1000));
    if(hours < 10){
        hours= "0" + hours;
    }
    if(minutes < 10){
        minutes= "0" + minutes;
    }
    if(seconds < 10){
        seconds= "0" + seconds;
    }
    document.querySelector(".day h3").innerHTML=days + " D";
    document.querySelector(".hour h3").innerHTML=hours + " h";
    document.querySelector(".minute h3").innerHTML=minutes + " m";
    document.querySelector(".second h3").innerHTML=seconds + " s";
    if(dateDiff <= 0){
        clearInterval(counter);
    }
}, 1000);

$(function(){
    let textarea=document.querySelector("textarea");
    let count=document.querySelector(".count");
    let maxLength= textarea.getAttribute("maxlength");

    count.innerHTML=maxLength;
    textarea.addEventListener("input",function(){
        count.innerHTML=maxLength - this.value.length;
        if(count.innerHTML==0){
            count.innerHTML="your available character finished ";
        }
    });
});