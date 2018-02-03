var gameOn=false;
			var counter;
			var pressed;
			var interval;
			
			function start_game () {
				if(!gameOn){
					gameOn=true;
					document.getElementById("result-lbl").style.visibility="hidden";
					document.getElementById("result").style.visibility="hidden";
					counter=0;
					document.getElementById("number").style.visibility="visible";
					interval= setInterval(setNum ,800); //0.8 second
				}
			}
			function setNum () {
				var num=Math.round(Math.random() * 9);
				var currentNum = document.getElementById("number").innerHTML;
				if(num == currentNum)
					setNum();
				else{
					pressed=false;
					document.getElementById("number").innerHTML=num;
				}
				

			}
			function end_game () {
				if(gameOn){
					gameOn=false;
					document.getElementById("result").innerHTML=counter;
					document.getElementById("result").style.visibility="visible";
					document.getElementById("result-lbl").style.visibility="visible";
					document.getElementById("number").style.visibility="hidden";
					clearInterval(interval);
				}
			}
			function compare_key() {
				if(gameOn && !pressed){
					var evt = window.event;
    				var character = evt.key;
    				var screenChar = document.getElementById("number").innerHTML;
    				if(character==screenChar){
    					counter++;
    					document.getElementById("circle").style.backgroundColor="#1aaf6a";
    					setTimeout(function () {
    						document.getElementById("circle").style.backgroundColor="#dbb1ca";
    					},100);
    				}
    				else{
    					document.getElementById("circle").style.backgroundColor="#d11006";
    					setTimeout(function () {
    						document.getElementById("circle").style.backgroundColor="#dbb1ca";
    					},100);
    				}
    				pressed=true;
    				
				}
			}