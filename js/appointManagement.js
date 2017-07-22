/**
 * Created by zhou on 2017/7/22.
 */
var set =document.getElementsByClassName("set");
var config=document.getElementById("selectedList");
var outer=document.getElementById("outer");

for(var i=0;i<set.length;i++){
    (function (e) {
        set[e].onclick=function () {
            outer.style.display="block";
            config.style.top=(18.6+e*3.8)+"rem";
            config.style.display="block";
            console.log(e);
        }
    })(i)
}
function noneOuter() {

    outer.style.display="none";
    config.style.display="none";
}