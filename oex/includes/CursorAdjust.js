(function(){
	window.addEventListener("load", function(){
		var style = document.createElement("style");
		style.setAttribute("type","text/css");
		style.innerHTML = "body{ cursor:default; }\n[contenteditable]{ cursor:text; }";
		try{ document.getElementsByTagName("head")[0].appendChild(style); }
		catch(e){
			try{
				var head = document.createElement("head");
				head.appendChild(style);
				document.documentElement.appendChild(head);
			}catch(e){ console.log("CursorAdjust: style-insertion failed"); }
		}
	}, false);
})();