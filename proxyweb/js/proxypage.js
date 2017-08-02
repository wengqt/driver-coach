/**
 * Created by zhou on 2017/8/2.
 */
var personalCenter=document.getElementById("personalCenter");
var query=document.getElementById("query");
var option=document.getElementById("option");
var set=document.getElementById("set");
var unset=document.getElementById("unset");
var settle=document.getElementById("settle");
var unsettle=document.getElementById("unsettle");
set.onclick=function () {
    set.className="one-option one-option-active";
    unset.className="one-option";
    settle.style.display="block";
    unsettle.style.display="none";
}
unset.onclick=function () {
    unset.className="one-option one-option-active";
    set.className="one-option";
    settle.style.display="none";
    unsettle.style.display="block";
}
query.onclick=function () {
    query.className="top-active";
    personalCenter.className="";
    option.style.display="flex";
    document.getElementsByClassName("title")[0].style.display="flex";
    unsettle.style.display="block";
    document.body.style.backgroundColor="#ffffff";
    document.getElementById("person").style.display="none";

}
personalCenter.onclick=function () {
    personalCenter.className="top-active";
    query.className="";
    option.style.display="none";
    settle.style.display="none";
    unsettle.style.display="none";
    document.getElementsByClassName("title")[0].style.display="none";
    document.body.style.backgroundColor="#F2F2F2";
    document.getElementById("person").style.display="block";
}
