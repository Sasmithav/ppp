function myfunction(){
var pass=document.getElementById("ip2");
var usr=document.getElementById("ip1");
if(usr.value==""){
	alert("please enter username");
	return false;
}
if(pass.value==""){
	alert("please enter password");
	return false;
}
if(pass.value.length<8){
alert("password must have minimum eight characters");
return false;
}
}