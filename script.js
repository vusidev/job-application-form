function validate() {
const fname = document.getElementById("fname");
if (fname.value.trim() == "") {
document.getElementById("error1").innerHTML = "Please fill this field";
document.getElementById("fname").style.borderColor = "red";
return false;
} else {
document.getElementById("error1").innerHTML = "";
document.getElementById("fname").style.borderColor = "";
}


const lname = document.getElementById("lname");
if (lname.value.trim() == "") {
document.getElementById("error2").innerHTML = "Please fill this field";
document.getElementById("lname").style.borderColor = "red";
return false;
} else {
document.getElementById("error2").innerHTML = "";
document.getElementById("lname").style.borderColor = "";
}


const email = document.getElementById("email").value;
const atpos = email.indexOf("@");
const dotpos = email.lastIndexOf(".");
 if (atpos < 2 || dotpos < atpos +2 || dotpos+2>=email.length)      {
document.getElementById("error3").innerHTML = "Please enter valid email";
document.getElementById("email").style.borderColor = "red";
return false;
} else {
document.getElementById("error3").innerHTML = "";
document.getElementById("email").style.borderColor = "";
}



const a = document.getElementById("ddlView");
const strUser = a.options[a.selectedIndex].value;
const strUser1 = a.options[a.selectedIndex].text;              
if(strUser == 0) {               
document.getElementById("error4").
innerHTML = "Please select an option";
document.getElementById("ddlView").style.borderColor = "red";
return false;
  }else {
document.getElementById("error5").innerHTML = "";
document.getElementById("ddlView").style.borderColor = "";
}


const b = document.getElementById("ddlNation");
const str = b.options[b.selectedIndex].value;
const str1 = b.options[b.selectedIndex].text;
if(str == 0){
document.getElementById("error5").innerHTML = "Please select an option";
document.getElementById("ddlNation").style.borderColor = "red";
return false;
 } else {
document.getElementById("error5").innerHTML = "";
document.getElementById("ddlNation").style.borderColor = "";
}
       

const number  = document.getElementById("number");
 if(number.value.trim().length < 13)  {             
document.getElementById("error6").innerHTML = "Please fill this field";
document.getElementById("number").style.borderColor = "red";
return false;
} else {
document.getElementById("error6").innerHTML = "";
document.getElementById("number").style.borderColor = "";
}  

const phone = document.getElementById("phone");
if (phone.value.trim().length < 10) {
document.getElementById("error7").innerHTML = "Please fill this field";
document.getElementById("phone").style.borderColor = "red";
return false;
} else {
document.getElementById("error7").innerHTML = "";
document.getElementById("phone").style.borderColor = "";
}


const f = document.getElementById("ddlEthnic");

const user = f.options[f.selectedIndex].value;
 const user1 = f.options[f.selectedIndex].text;
if(user== 0){
document.getElementById("error8").innerHTML = "Please select an option";
document.getElementById("ddlEthnic").style.borderColor = "red";
return false;
} else {
document.getElementById("error8").innerHTML = "";
document.getElementById("ddlEthnic").style.borderColor = "";
}


const province = document.getElementById("province");
if (province.value.trim() == "") {
document.getElementById("error9").innerHTML = "Please fill this field";
document.getElementById("province").style.borderColor = "red";
return false;
} else {
document.getElementById("error9").innerHTML = "";
document.getElementById("province").style.borderColor = "";
}


const cname = document.getElementById("cname");
if (cname.value.trim() == "") {
document.getElementById("error10").innerHTML = "Please fill this field";
document.getElementById("cname").style.borderColor = "red";
return false;
} else {
document.getElementById("error10").innerHTML = "";
document.getElementById("cname").style.borderColor = "";
}


const pcode = document.getElementById("pcode");
if (pcode.value.trim() == "") {
document.getElementById("error11").innerHTML = "Please fill this field";
document.getElementById("pcode").style.borderColor = "red";
return false;
} else {
document.getElementById("error11").innerHTML = "";
document.getElementById("pcode").style.borderColor = "";
}


const file = document.getElementById("file");
if (myfile.value.trim() == "") {
document.getElementById("error12").innerHTML = "Please upload file";
document.getElementById("file").style.borderColor = "red";
return false;
} else {
document.getElementById("error12").innerHTML = "";
document.getElementById("file").style.borderColor = "";
}
}

