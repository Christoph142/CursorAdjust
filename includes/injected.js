(function(){
	window.addEventListener("load", function(){
		var style = document.createElement("style");
		style.setAttribute("type","text/css");
		style.innerHTML = "html{ cursor:default; }";
		try{ document.getElementsByTagName("head")[0].appendChild(style); }
		catch(e){
			try{
				var head = document.createElement("head");
				head.appendChild(style);
				document.body.appendChild(head);
			}catch(e){ opera.postError("CursorAdjust: style-insertion failed"); }
		}
	}, false);
})();