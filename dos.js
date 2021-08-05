function mostrar()
{
    let nacionalidad;
    let resultado;
    let edad;
    let cepa;
    let cantPositivos = 0;
    let cantNegativos = 0;
	let cantCepaDelta = 0;
    let cantCepaAlfa = 0;
    let cantCepaBeta = 0;
    let cantCepaNinguna = 0;
    let edadMenorArgentinoContag = 0;
	let flag = 1;
    let cantExtranjerosConDelta = 0;
    let totalPositivosYNegativos = 0;
	let porcentajePositivos = 0;
    let porcentajeNegativos = 0;
    let cepaMenosEncontrada ;


    for(let i = 0; i < 3; i++){
        
        nacionalidad = prompt("Ingrese nacionalidad argentina/extranjero");
		while(nacionalidad != "argentina" && nacionalidad != "extranjero"){
			nacionalidad = prompt ("Dato incorrecto. Ingrese nacionalidad argentina/extranjero");
		}

        resultado =  prompt("Ingrese resultado positivo/negativo");
        while(resultado != "positivo" && resultado != "negativo"){
            resultado =  prompt("Dato incorrecto. Ingrese resultado positivo/negativo");
        }

        edad = parseInt(prompt ("Ingrese la edad"));
        while((isNaN(edad)) || edad < 18 || edad > 65){
            edad = parseInt(prompt ("Dato incorrecto. Ingrese la edad"));
        }

        cepa = prompt("Ingrese la cepa (delta, alfa, beta, ninguna)");
        while((cepa == "ninguna" && resultado != "negativo") || cepa != "delta" && cepa != "alfa" && cepa != "beta" && cepa != "ninguna"){
            cepa = prompt("Dato incorrecto. Ingrese la cepa (delta, alfa, beta, ninguna)");
        }

		if(resultado == "positivo"){
			cantPositivos ++;
            if(nacionalidad == "argentina" && (flag == 1 || edad < edadMenorArgentinoContag)){
                edadMenorArgentinoContag = edad;
            }
            else if(nacionalidad == "extranjero" && cepa == "delta"){
                cantExtranjerosConDelta++;
            }
		}
        else{
            cantNegativos++;
        }

        switch(cepa){
            case "delta":
                cantCepaDelta++;
                break;
            case "alfa":
                cantCepaAlfa++;
                break;
            case "beta":
                cantCepaBeta++;
                break;
            case "ninguna":
                cantCepaNinguna++;
                break;
        }
	}

    totalPositivosYNegativos = cantPositivos + cantNegativos;
    porcentajePositivos = (cantPositivos * 100 / totalPositivosYNegativos).toFixed(2);
    porcentajeNegativos = (cantNegativos * 100 / totalPositivosYNegativos).toFixed(2); 

    if(cantCepaAlfa < cantCepaBeta && cantCepaAlfa < cantCepaDelta && cantCepaAlfa < cantCepaNinguna){
        cepaMenosEncontrada = "alfa";
    }
    else if (cantCepaBeta < cantCepaAlfa && cantCepaBeta < cantCepaDelta && cantCepaBeta < cantCepaNinguna){
        cepaMenosEncontrada = "beta";
    }
    else if(cantCepaDelta < cantCepaAlfa && cantCepaDelta < cantCepaBeta && cantCepaDelta < cantCepaNinguna)
    {
        cepaMenosEncontrada = "delta";
    }
    else{
        cepaMenosEncontrada = "ninguna";
    }

	document.write("El porcentaje de positivo es: " + porcentajePositivos + "%<br>");
	document.write("El porcentaje de negativos es: " + porcentajeNegativos + "%<br>");
	document.write("La sepa menos encontrada es: " + cepaMenosEncontrada + "<br>");  
	document.write("La edad del menor argentino contagiado es: " + edadMenorArgentinoContag + "<br>");
	document.write("La cantidad de personas extranjeras contagiadas con la delta son : " + cantExtranjerosConDelta);


}
