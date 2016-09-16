# machine
##CRI
Para el botón Cri se uso un contaor de clics .
Por cada clic bordeara un objeto segun la posicion en la que se encuentra.
Se usa el placeholder para es escribir el color que selecciona en el input.
Al ser tres objetos en el tercer clic se pondra un contador 0 para que vuelva a iniciar.

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

##SUPER CRI
Para el Super cri se le asigno al input una variable : "color" .
Color  si es igual al nombre del color que ingresas al input se bordeara de color yellow.


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
