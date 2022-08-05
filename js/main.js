//------------Cerrar y abrir ventana Nueva tarea-------------------

function closevnt(){
    document.getElementById("ventananewtarea").classList.toggle("hidden");
}

//------------------------------------------------------------------------------


//------------------------- CERRAR

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    }
}

//-----------------------------------------------------------

//-------------------------- MARCADO

var lista = document.querySelector("ul");
lista.addEventListener('click', function(ev){
    if (ev.target.tagName === 'LI'){
        ev.target.classList.toggle("line-through");
        ev.target.classList.toggle("bg-lime-500");
    }
}, false);


//------------------------------------------------------------


//------------------- BOTON NUEVA TAREA

function nuevaTarea(){
    var li = document.createElement("li");
    var valoringresado = document.getElementById("ingresaNuevaTarea").value;
    var text = document.createTextNode(valoringresado);
    li.appendChild(text);
    if(valoringresado === ''){
        document.getElementById("resultado").innerHTML = ("No agregaste una tarea");
        document.getElementById("resultado").className = ("absolute bottom-10 text-red-600");

    } else{
        document.getElementById("mlista").appendChild(li);
        document.getElementById("resultado").innerHTML = ("Agregaste una tarea!");
        document.getElementById("resultado").className = ("absolute bottom-10 text-green-600");
    }

    var fecha = document.createElement("p");
    
    var fechas = new Date()
    var hora = fechas.getHours() + ':' + fechas.getMinutes();
    fecha.innerHTML = hora;
    fecha.className = "fechad";
    li.appendChild(fecha);

    document.getElementById("ingresaNuevaTarea").value = "";

    var imagen = document.createElement("img");
    imagen.src = "image/close.png";
    imagen.className = "close"
    li.appendChild(imagen);
    li.className = "bg-gray-200 w-full h-16 flex justify-start items-center px-5 duration-300 rounded-lg hover:cursor-pointer";

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }

    }
}