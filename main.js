window.addEventListener("load", function() {
	var superCri = document.getElementById("superCri");
	superCri.addEventListener("click", function() {
		var color = document.getElementById("ingresa").value;

		if(color == "rojo"){
			document.getElementsByClassName("circlea")[0].classList.toggle("bordeRojo");
			document.getElementsByClassName("circleb")[0].classList.remove("bordeAzul");
			document.getElementsByClassName("circlec")[0].classList.remove("bordeVerde");
		}
		else if(color == "azul"){
			document.getElementsByClassName("circleb")[0].classList.toggle("bordeAzul");
			document.getElementsByClassName("circlec")[0].classList.remove("bordeVerde");
			document.getElementsByClassName("circlea")[0].classList.remove("bordeRojo");
		}
		else if(color == "verde"){
			document.getElementsByClassName("circlec")[0].classList.toggle("bordeVerde");
			document.getElementsByClassName("circlea")[0].classList.remove("bordeRojo");
			document.getElementsByClassName("circleb")[0].classList.remove("bordeAzul");
		}
	});
});


window.addEventListener("load", function() {
	var cri = document.getElementById("cri");
	cri.addEventListener("click", function() {
		var roj =document.getElementById("rojo");
		var blu =document.getElementById("azul");
		var verd =document.getElementById("verde");
        
        function bordear(){
        	for(roj== "rojo") {
        	document.getElementsByClassName("circlea")[0].classList.toggle("bordeRojo");
			document.getElementsByClassName("circleb")[0].classList.remove("bordeAzul");
			document.getElementsByClassName("circlec")[0].classList.remove("bordeVerde");
        	}
        		document.getElementById("ingresa").innerHTML = "rojo" ;
        	}
        }



		var color = document.getElementById("ingresa").onclick=


			document.getElementById("miDiv").style.border = color;
		}
        
});
});