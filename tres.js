function mostrar()
{
	let origen;
	let cantVacunas = 0;
	let costoVuelo = 0;
	let cantVacunasOriente = 0;
	let cantVacunasOccidente = 0;
	let cantVacunasSecreto = 0;
	let cantVuelosOccidente = 0;
	let importeVuelosTotal = 0;
	let origenConMenorCantVacunas ;
	let cantTotalVacunas = 0;
	let descuento = 0;
	let importeConDescuento = 0;

    do{
        
        origen = prompt("Ingrese el origen (oriente, occidente, secreto)");
		while(origen != "oriente" && origen != "occidente" && origen != "secreto"){
			origen = prompt("Dato incorrecto. Ingrese el origen (oriente, occidente, secreto)");
		}

        cantVacunas = parseInt(prompt ("Ingrese la cantidad de vacunas"));
        while(isNaN(cantVacunas) || cantVacunas < 500000 || cantVacunas > 2500000){
            cantVacunas = parseInt(prompt ("Dato incorrecto. Ingrese la cantidad de vacunas"));
        }

        costoVuelo = parseInt(prompt("Ingrese el costo del vuelo"));
        while(isNaN (costoVuelo) || costoVuelo < 1000000 || costoVuelo > 5000000){
            costoVuelo = parseInt(prompt("Dato incorrecto. Ingrese el costo del vuelo"));
        }

		importeVuelosTotal += costoVuelo;

		switch(origen){
			case "oriente":
				cantVacunasOriente += cantVacunas;
			break;
			case "occidente":
				cantVuelosOccidente++;
				cantVacunasOccidente += cantVacunas;
			break;
			case "secreto":
				cantVacunasSecreto += cantVacunas;
			break;
		}

		respuesta = prompt("¿Quiere seguir ingresando datos ? s/n?");
	}
	while( respuesta == "s");

	if(cantVacunasOriente < cantVacunasOccidente && cantVacunasOriente < cantVacunasSecreto){
		origenConMenorCantVacunas = "oriente";
	}
	else if(cantVacunasOccidente < cantVacunasOriente && cantVacunasOccidente < cantVacunasSecreto){
		origenConMenorCantVacunas = "occidente";
	}
	else{
		origenConMenorCantVacunas = "secreto";
	}

	cantTotalVacunas = cantVacunasOriente + cantVacunasOccidente + cantVacunasSecreto ;
	if(cantTotalVacunas > 10000000)
	{
		descuento = importeVuelosTotal * 0.25;
	}
	else if (cantTotalVacunas > 5000000 && cantTotalVacunas <= 8000000)
	{
		descuento = importeVuelosTotal * 0.15;
	}

	promedioVacuPorVueloOccidente = cantVacunasOccidente / cantVuelosOccidente;
	document.write("El origen que envio menor cantidad de vacunas es: " + origenConMenorCantVacunas + "<br>");
	document.write("El promedio de vacunas llegadas de occidente es: " + promedioVacuPorVueloOccidente + " por vuelo <br>");
	document.write("El total a pagar sin descuentos de los viajes es: " + importeVuelosTotal + "<br>");
	if(descuento != 0){
		importeConDescuento = importeVuelosTotal - descuento;
		document.write("El descuento es de : " + descuento + " y el importe a pagar con descuento es de: " + importeConDescuento);
	}
}

