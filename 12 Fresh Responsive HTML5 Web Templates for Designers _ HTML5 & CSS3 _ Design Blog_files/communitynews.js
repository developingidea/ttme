// JavaScript Document
function CBS(){
	// default
	document.getElementById("suc").innerHTML="";
	document.getElementById("err").innerHTML="";
	document.getElementById("name").className="wbox";
	document.getElementById("email").className="wbox";
	document.getElementById("title").className="wbox";
	document.getElementById("url").className="wbox";
	document.getElementById("description").className="wbox";
	// check empty
	if(document.getElementById("na").value=="" || document.getElementById("em").value=="" || document.getElementById("ti").value=="" || document.getElementById("ur").value=="" || document.getElementById("de").value==""){
		xerr="You didn't fill in all required fields.";
		document.getElementById("err").innerHTML=xerr;
		document.getElementById("err").className="err";
		if(document.getElementById("na").value==""){
			document.getElementById("name").className="rbox";
		}
		if(document.getElementById("em").value==""){
			document.getElementById("email").className="rbox";
		}
		if(document.getElementById("ti").value==""){
			document.getElementById("title").className="rbox";
		}
		if(document.getElementById("ur").value=="http://"){
			document.getElementById("url").className="rbox";
		}
		if(document.getElementById("de").value==""){
			document.getElementById("description").className="rbox";
		}
	
		return ;
	}
	if(document.getElementById("em").value.indexOf("@")==-1){
		xerr="Please enter a valid email address.";
		document.getElementById("err").innerHTML=xerr;
		document.getElementById("err").className="err";
		document.getElementById("email").className="rbox";
		return;
	}
	if(document.getElementById("em").value.indexOf(".")==-1){
		xerr="Please enter a valid email address.";
		document.getElementById("err").innerHTML=xerr;
		document.getElementById("err").className="err";
		document.getElementById("email").className="rbox";
		return;
	}
	if(document.getElementById("ur").value.indexOf("http://")==-1){
		xerr="Please enter a valid post url.";
		document.getElementById("err").innerHTML=xerr;
		document.getElementById("err").className="err";
		document.getElementById("url").className="rbox";
		return;
	}
	
	// send request to SERVER
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null){
	  alert ("Your browser does not support AJAX!");
	  return;
    } 
	na=document.getElementById("na").value;
	em=document.getElementById("em").value;
	ti=document.getElementById("ti").value;
	ur=document.getElementById("ur").value;
	de=document.getElementById("de").value;
	ur=ur.substring(7);
	
	var url="http://blog.karachicorner.com/communitynews.php?na="+na+"&em="+em+"&ti="+ti+"&ur="+ur+"&de="+de;
	url=url+"&sid="+Math.random();
	xmlHttp.onreadystatechange=stateChanged;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
	document.getElementById("loading").style.visibility="visible";
	
//	xerr="Your submission has been added to the moderation queue and will appear soon. Thank you!";
//	document.getElementById("suc").innerHTML="<table border='0'><tr><td><img src='images/confirm.jpg'/></td><td>"+xerr+"</td></tr></table>";
//	document.getElementById("suc").className="suc";
}

function stateChanged(){ 
	if (xmlHttp.readyState==4){
		res=xmlHttp.responseText;
		//alert(res);
		if(res){
			document.getElementById("loading").style.visibility="hidden";
			document.getElementById("na").value="";
			document.getElementById("em").value="";
			document.getElementById("ti").value="";
			document.getElementById("ur").value="";
			document.getElementById("de").value="";	
			xerr="Your submission has been added to the moderation queue and will appear soon. Thank you!";
			document.getElementById("suc").innerHTML=xerr;
			document.getElementById("suc").className="suc";
			document.getElementById("err").style.display="none";
		}else{
			xerr="Unable to add your submission, please try again later.";
			document.getElementById("loading").style.visibility="none";
			document.getElementById("err").innerHTML=xerr;
			document.getElementById("err").className="err";
		}
	}
}


function CBS2(){
	// default
	document.getElementById("name").className="wbox";
	document.getElementById("email").className="wbox";
	document.getElementById("title").className="wbox";
	document.getElementById("description").className="wbox";
	// check empty
	if(document.getElementById("na").value=="" || document.getElementById("em").value=="" || document.getElementById("ti").value=="" || document.getElementById("de").value==""){
		xerr="You didn't fill in all required fields.";
		document.getElementById("err").innerHTML="<table border='0'><tr><td><img src='http://blog.karachicorner.com/wp-content/themes/dilectio/images/ex.jpg'/></td><td>"+xerr+"</td></tr></table>";
		document.getElementById("err").className="err";
		if(document.getElementById("na").value==""){
			document.getElementById("name").className="rbox";
		}
		if(document.getElementById("em").value==""){
			document.getElementById("email").className="rbox";
		}
		if(document.getElementById("ti").value==""){
			document.getElementById("title").className="rbox";
		}
		if(document.getElementById("de").value==""){
			document.getElementById("description").className="rbox";
		}	
		return ;
	}
	if(document.getElementById("em").value.indexOf("@")==-1){
		xerr="Please enter a valid email address.";
		document.getElementById("err").innerHTML="<table border='0'><tr><td><img src='http://blog.karachicorner.com/wp-content/themes/dilectio/images/ex.jpg'/></td><td>"+xerr+"</td></tr></table>";
		document.getElementById("err").className="err";
		document.getElementById("email").className="rbox";
		return;
	}
	if(document.getElementById("em").value.indexOf(".")==-1){
		xerr="Please enter a valid email address.";
		document.getElementById("err").innerHTML="<table border='0'><tr><td><img src='http://blog.karachicorner.com/wp-content/themes/dilectio/images/ex.jpg'/></td><td>"+xerr+"</td></tr></table>";
		document.getElementById("err").className="err";
		document.getElementById("email").className="rbox";
		return;
	}
	// send request to SERVER
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null){
	  alert ("Your browser does not support AJAX!");
	  return;
    } 
	na=document.getElementById("na").value;
	em=document.getElementById("em").value;
	ti=document.getElementById("ti").value;
	de=document.getElementById("de").value;
	
	var url="http://blog.karachicorner.com/wp-content/themes/DesignBlog/contactus.php?na="+na+"&em="+em+"&ti="+ti+"&de="+de;
	url=url+"&sid="+Math.random();
	//alert(url);
	xmlHttp.onreadystatechange=stateChanged2;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
	document.getElementById("loading").style.visibility="visible";
	
//	xerr="Your submission has been added to the moderation queue and will appear soon. Thank you!";
//	document.getElementById("suc").innerHTML="<table border='0'><tr><td><img src='images/confirm.jpg'/></td><td>"+xerr+"</td></tr></table>";
//	document.getElementById("suc").className="suc";
}


function stateChanged2(){ 
	if (xmlHttp.readyState==4){
		res=xmlHttp.responseText;
		document.getElementById("err").innerHTML="";
		document.getElementById("err").style.display="none";
		
		document.getElementById("na").value="";
		document.getElementById("em").value="";
		document.getElementById("ti").value="";
		document.getElementById("de").value="";
		
		xerr="Thank you for contacting us. We will get back to you as soon as possible.";
		document.getElementById("suc").innerHTML="<table border='0'><tr><td><img src='http://blog.karachicorner.com/wp-content/themes/dilectio/images/confirm.jpg'/></td><td>"+xerr+"</td></tr></table>";
		document.getElementById("suc").className="suc";		
		document.getElementById("loading").style.visibility="hidden";
	}
}



function GetXmlHttpObject(){
var xmlHttp=null;
try {
  // Firefox, Opera 8.0+, Safari
  xmlHttp=new XMLHttpRequest();
  }catch (e) {
  // Internet Explorer
  try{
    xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e)  {
    xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  }
return xmlHttp;
} 