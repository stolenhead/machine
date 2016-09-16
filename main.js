window.addEventListener("load", function() {
	var superCri = document.getElementById("superCri");
	superCri.addEventListener("click", function() {
		var color = document.getElementById("ingresa").value;

		if(color == "rojo"){
			document.getElementsByClassName("circlea")[0].classList.toggle("bordeYellow");
			document.getElementsByClassName("circleb")[0].classList.remove("bordeYellow");
			document.getElementsByClassName("circlec")[0].classList.remove("bordeYellow");
		}
		else if(color == "azul"){
			document.getElementsByClassName("circleb")[0].classList.toggle("bordeYellow");
			document.getElementsByClassName("circlec")[0].classList.remove("bordeYellow");
			document.getElementsByClassName("circlea")[0].classList.remove("bordeYellow");
		}
		else if(color == "verde"){
			document.getElementsByClassName("circlec")[0].classList.toggle("bordeYellow");
			document.getElementsByClassName("circlea")[0].classList.remove("bordeYellow");
			document.getElementsByClassName("circleb")[0].classList.remove("bordeYellow");
		}
	});
});


window.addEventListener("load", function() {
	var cri = document.getElementById("cri");
	var contador =1;
	cri.addEventListener("click", function() {
		if(contador == 1){
			document.getElementsByClassName("col")[0].style.borderColor="blue";
			document.getElementById("ingresa").placeholder="rojo";
			document.getElementsByClassName("col")[1].style.borderColor="transparent";
			document.getElementsByClassName("col")[2].style.borderColor="transparent";

		} if (contador== 2) {
            document.getElementsByClassName("col")[1].style.borderColor="blue";
			document.getElementById("ingresa").placeholder="azul";
			document.getElementsByClassName("col")[0].style.borderColor="transparent";
			document.getElementsByClassName("col")[2].style.borderColor="transparent";

		}if(contador ==3){
			document.getElementsByClassName("col")[2].style.borderColor="blue";
			document.getElementById("ingresa").placeholder="verde";
			document.getElementsByClassName("col")[0].style.borderColor="transparent";
			document.getElementsByClassName("col")[1].style.borderColor="transparent";

			contador =0;
		}
        
    contador++;
    });
});