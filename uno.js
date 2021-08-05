
function mostrar()
{

	let nombre;
    let edad;
    let vacuna;
    let dosis;
	let cantVacunadosTotal = 0;
    let cantVacunadosChina = 0;
	let cantVacunadosAmericana = 0;
	let cantVacunadosAmericanaMenores = 0;
	let cantVacunadosRusa = 0;
	let acumEdadVacunadosChina = 0;
	let flag = 1;
	let edadVacunadoMasJoven = 0;
	let nombreVacunadoMasJoven ;
	let vacunaMasJoven;
	let cantVacunadosPrimeraDosis = 0;
    let promEdadVacunadosChina = 0;
    let porcentajeVacunConAmerMenores = 0;
	let vacunaMasDada;


    do{
        nombre = prompt("Ingrese el nombre");
		while(nombre.length < 3 || nombre.length > 10){
			nombre = prompt ("Dato incorrecto. Ingrese el nombre nuevamente");
		}

        edad = parseInt(prompt ("Ingrese la edad"));
        while(isNaN(edad) || edad < 12){
            edad = parseInt(prompt ("Dato incorrecto. Ingrese la edad"));
        }

        vacuna = prompt("Ingrese la vacuna (rusa, china, americana)");
        while(((edad >= 12 && edad <= 17) && vacuna != "americana") || vacuna != "rusa" && vacuna != "china" && vacuna != "americana"){
            vacuna = prompt("Dato incorrecto. Ingrese la vacuna (rusa, china, americana)");
        }

        dosis = prompt("Ingrese la dosis p/s");
        while (dosis != "s" && dosis != 'p' ){
            dosis = prompt("Dato incorrecro. Ingrese la dosis p/s");
        }

		sexo = prompt("Ingrese el sexo f/m");
        while (sexo != "f" && sexo != 'm' ){
            sexo = prompt("Dato incorrecro. Ingrese el sexo f/m");
        }

		if(vacuna == "china"){
			cantVacunadosChina++;
			acumEdadVacunadosChina += edad; 
		}
		else if(vacuna == "americana"){	
			cantVacunadosAmericana++;		
			if(edad < 18)
			{
				cantVacunadosAmericanaMenores++;
			}
		}
		else{
			cantVacunadosRusa ++;
		}


		if(dosis == "p")
		{
			cantVacunadosPrimeraDosis++;
		}

		if(flag == 1 || (edad < edadVacunadoMasJoven && sexo == "m")){
			nombreVacunadoMasJoven = nombre;
			vacunaMasJoven = vacuna;
			edadVacunadoMasJoven = edad;
			flag = 0;
		}

		respuesta = prompt("¿Quiere seguir ingresando pacientes s/n?");
	}
	while( respuesta == "s");

	if(cantVacunadosChina > cantVacunadosAmericana && cantVacunadosChina > cantVacunadosRusa){
		vacunaMasDada = "Vacuna China";
	}
	else if(cantVacunadosRusa > cantVacunadosAmericana && cantVacunadosRusa > cantVacunadosChina){
		vacunaMasDada = "Vacuna Rusa";
	}
	else{
		vacunaMasDada = "Vacuna Americana";
	}

	cantVacunadosTotal = cantVacunadosChina + cantVacunadosRusa + cantVacunadosAmericana ;
	promEdadVacunadosChina = acumEdadVacunadosChina / cantVacunadosChina;
	porcentajeVacunConAmerMenores = (cantVacunadosAmericanaMenores * 100 / cantVacunadosAmericana).toFixed(2);
	porcentajeVacunPrimerDosis = (cantVacunadosPrimeraDosis * 100 / cantVacunadosTotal).toFixed(2);


	document.write("Promedio de edad de los que se vacunaron con la china es: " + promEdadVacunadosChina + "<br>");
	document.write("Nombre y vacuna del hombre más joven: Nombre:" + nombreVacunadoMasJoven + " Vacuna:" +  vacunaMasJoven  + "<br>");
	document.write("Porcentaje menores de edad que se vacunaron con la americana : " + porcentajeVacunConAmerMenores + " %<br>");
	document.write("Porcentaje vacunados con 1 dosis: " + porcentajeVacunPrimerDosis + "%<br>");
	document.write("Vacuna Mas Dada " + vacunaMasDada + "<br>");


}
