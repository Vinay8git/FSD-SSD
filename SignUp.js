document.getElementById('content').addEventListener('submit',(e)=>{
    console.log("hello",e);
    e.preventDefault();
});

function submitHandler(e) {
    const userName=documnet.getElementById("Uname");
    console.log("Hello",e);
    if (userName=="")
    {
        renderError("");
    }
    location.href="x.html";
}
function renderError(errMsg){
    document.getElementById("signErr").innerHTML = errMsg
}
 function validatePasswords(pw, cpw){
    let signErrMsgEle=document.getElementById("signErr");
    let errMsg='';
    const pass=document.getElementById("PW").value;
    const cpass=document.getElementById("CPW").value;
    var para=document.getElementById("ErrorPara");
    errMsg="Password Do Not Match";
    if(pass!=cpass)
    {
        renderError(errMsg);
        return false;
        para.innerHTML=errMsg;
    }
    else{
        renderError('');
        return true;
    }
 }
 
const loginFromEle=document.getElementById("")