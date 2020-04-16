	function check(){
		var email=document.getElementById("email").value;
		var password=document.getElementById("password").value;
		var pass=document.getElementById("pass").value;
		if (email=="")
		{
			document.getElementById("email_message").innerHTML="请输入用户名";
			return false;	
		}
		else{
			document.getElementById("email_message").innerHTML="";
			}
		if (password=="")
		{
			document.getElementById("password_message").innerHTML="请输入密码";
			return false;	
		}
		else{
			document.getElementById("password_message").innerHTML="";
			}
		if (pass=="")
		{
			document.getElementById("pass_message").innerHTML="请再次输入密码";
			return false;	
		}
		else{
			document.getElementById("pass_message").innerHTML="";
		}
		if (pass!=password)
		{
			document.getElementById("pass_message").innerHTML="两次输入密码不相同";
			return false;	
		}
		else{
			document.getElementById("pass_message").innerHTML="";
		}
		return true
	}