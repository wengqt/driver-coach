/**
 * Created by zhou on 2017/7/21.
 */
var set =document.getElementsByClassName("set");
var config=document.getElementById("config");
var outer=document.getElementById("outer");
var blueBottom=document.getElementsByClassName("blueBottom");

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
for(var i=0;i<blueBottom.length;i++){
    (function (e) {
        blueBottom[e].onclick=function () {
            blueBottom[e].className='blueBottom top-active';
            blueBottom[(e+1)%6].className="blueBottom";
            blueBottom[(e+2)%6].className="blueBottom";
            blueBottom[(e+3)%6].className="blueBottom";
            blueBottom[(e+4)%6].className="blueBottom";
            blueBottom[(e+5)%6].className="blueBottom";
        }
    })(i)
}