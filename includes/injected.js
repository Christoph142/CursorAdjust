window.addEventListener("DOMContentLoaded", function(){
	var style = document.createElement("style");
	style.setAttribute("type","text/css");
	style.innerHTML = "body{ cursor:default; } input[type=text],[type=password],[type=email]{ cursor:text; }";
	try{ document.getElementsByTagName("head")[0].appendChild(style); }
	catch(e){
		try{
			var head = document.createElement("head");
			head.appendChild(style);
			document.body.appendChild(head);
		}catch(e){ opera.postError("CursorAdjust: style-insertion failed"); }
	}
}, false);