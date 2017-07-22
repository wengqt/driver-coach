/**
 * Created by zhou on 2017/7/21.
 */
var set =document.getElementsByClassName("set");
var config=document.getElementById("config");
var outer=document.getElementById("outer");

for(var i=0;i<set.length;i++){
    (function (e) {
        set[e].onclick=function () {
            outer.style.display="block";
            config.style.top=(6+e*4)+"rem";
            config.style.display="block";
            console.log(e);
        }
    })(i)
}
function noneOuter() {

    outer.style.display="none";
    config.style.display="none";
}