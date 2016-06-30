// JavaScript Document
function SubCk(){
	if(document.getElementById("subscribe-text").value==""){
		return ;		
	}if(document.getElementById("subscribe-text").value.indexOf("http://")==0){
		return;
	}	
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null){
	//  alert ("Your browser does not support AJAX!");
	  return;
    }
	subem=document.getElementById("subscribe-text").value;	

	var url="http://blog.karachicorner.com/wp-content/themes/DesignBlog/subChking.php?subem="+subem;
	url=url+"&sid="+Math.random();
	xmlHttp.onreadystatechange=stateSChanged;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
}

function SubCk2(){
	if(document.getElementById("subscribe-text2").value==""){
		return ;		
	}if(document.getElementById("subscribe-text2").value.indexOf("http://")==0){
		return;
	}	
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null){
	//  alert ("Your browser does not support AJAX!");
	  return;
    }
	subem=document.getElementById("subscribe-text2").value;	

	var url="http://blog.karachicorner.com/wp-content/themes/DesignBlog/subChking.php?subem="+subem;
	url=url+"&sid="+Math.random();
	xmlHttp.onreadystatechange=stateSChanged;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
}


function stateSChanged(){ 
	if (xmlHttp.readyState==4){
		res=xmlHttp.responseText;
		if(res){
			document.getElementById("subscribe-text").value="";
			document.location="http://blog.karachicorner.com/thank-you-for-subscribe/";
		}
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