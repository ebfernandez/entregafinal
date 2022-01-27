
    let botonCalcular =document.getElementById("botonCalcular");
    botonCalcular.addEventListener("click" , calcularInteres);

    function calcularInteres(){

        let nombre = document.getElementById("nombre");
        let monto = document.getElementById("monto");
        let cuotas = document.getElementById("cuotas");
        let mensaje = document.getElementById("mensaje");
        mensaje.style.marginTop= "2rem";
       


        let total;
        let valorCuota;
        if (cuotas.value == 3){
            total = monto.value * 1.50;
            valorCuota = total / 3;
            
            mensaje.innerHTML = `<h5> ${nombre.value} deberá abonar 3 cuotas de: $ ${valorCuota.toFixed()} (monto final: $ ${total.toFixed()}) </h5>     
                                <a class="btn btn-danger" href="#contact" role="button">Confirmar mi PrestaPlus</a>
            `            
        }

        else if(cuotas.value == 6){
            total = monto.value * 1.75;
            valorCuota = total / 6;

            mensaje.innerHTML = `<h5> ${nombre.value} deberá abonar 6 cuotas de: $ ${valorCuota.toFixed()} (monto final: $ ${total.toFixed()}) </h5>     
                                <a class="btn btn-danger" href="#contact" role="button">Confirmar mi PrestaPlus</a>
            ` 
        }

        else if(cuotas.value == 12){
            total = monto.value * 2;
            valorCuota = total / 12;

            mensaje.innerHTML = `<h5> ${nombre.value} deberá abonar 12 cuotas de: $ ${valorCuota.toFixed()} (monto final: $ ${total.toFixed()}) </h5>     
                                <a class="btn btn-danger" href="#contact" role="button">Confirmar mi PrestaPlus</a>
            ` 
            
        }       

    }
 

    $("#botonEnviar").click(function(e){
    
        e.preventDefault();
        let nombreCliente = $("#nombreCliente");
        let dni = $("#dni");
        let telefono = $("#telefono");
        let email = $("#email");
        let consulta = $("#consulta");

        console.log(nombreCliente.val());
        console.log(dni.val());
        console.log(telefono.val());
        console.log(email.val());
        console.log(consulta.val());

        guardarCliente();
    })



    btnTerminos.style.marginBottom= "2rem";

    $("#seccionDos").append('<h5  style="display: none" >Ejemplo de préstamo: Monto solicitado de $200.000 a 18 meses | TNA (sin IVA): 45% - TEA (sin IVA): 55,5% - CFTNA (con IVA): 55% | Cuota: $16.497 | Total a pagar: $296.938. El plazo mínimo de repago del préstamo es de 2 meses y el máximo de 18 meses. El monto mínimo de financiación es de $12.000 y el monto máximo de $200.000. Sistema de amortización francés. Las cuotas del préstamo son mensuales, iguales y consecutivas serán abonadas mediante la operatoria de débito interno o intrabancario y/o DEBIN Spot correspondiente al Sistema Nacional de Pagos y/o a través de cualquier sucursal de Rapi- Pago, Pago Fácil, o a través de PagoMisCuentas.com. El otorgamiento del préstamo está sujeto a evaluación crediticia.</h5>');
   
    $("#btnTerminos").click(function(){

        $("h5").css("color", "blue")
        $("h5").toggle(2000);

    })
    
    


    let ubication =navigator.geolocation.getCurrentPosition(mostrarUbicacion);

    function mostrarUbicacion (position){
        console.log(position.coords.latitude);
        console.log(position.coords.longitude)

        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        getClimateData(latitude, longitude);
    }

    function getClimateData(lat, lon){
    
    let urlClima = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=f64a2c2d7a22f53ab3c55884182abb01";

        $.get(urlClima, function(data){

            console.log(data.name);
            console.log(data.weather[0].description);
            console.log(data.main.temp_max);
            console.log(data.main.temp_min);


        })
    }


    
    if(localStorage.getItem("cliente")){
        let datos = localStorage.getItem("cliente");
        console.log(JSON.parse(datos))

    }else{
        console.log("no encontro");
    }


    let listaClientes = [];

    class Clientes{

        constructor(nombreCliente, telefono){
            this.nombreCliente=nombreCliente;
            this.telefono=telefono;
        }
    }

    function guardarCliente(){

        let nombreCliente = document.getElementById("nombreCliente");
        let telefono = document.getElementById("telefono");

        listaClientes.push(new Clientes(nombreCliente.value, telefono.value));
        let clienteJSON = JSON.stringify(listaClientes);
       

        localStorage.setItem("cliente",clienteJSON);


    }