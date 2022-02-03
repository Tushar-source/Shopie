function login(){
    var uname = document.getElementById('uname').value
    var upwd = document.getElementById('upwd').value   
    if(uname == 'admin' && upwd == 'admin')
    {
        window.open('index.html')
    }
    else
        alert("Login failed")

}