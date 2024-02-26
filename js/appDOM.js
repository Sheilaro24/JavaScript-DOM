//MANIPULACIÓN BOM
//Window ------------
//ejemplo de window avisando de la cookies, solo es el window!
window.alert("Bienvenido!!Utilizamos cookies propias y de terceros para mejorar la experiencia de navegación, y ofrecer contenidos y publicidad de interés. Al continuar con la navegación entendemos que se acepta nuestra Política de cookies."); 

//setTimeout --------
//para mostar al usuario que hora es a través del setTimeout y de un window 
function laHora(){
    let hora=new Date().toLocaleTimeString();
    window.alert("Son las " + hora);}


    function hora(){
        setTimeout(laHora,1000);}
    hora();

//setInterval
    // para avisar al usuario que tiene una oferta
    /*const timer =setInterval(()=>{
        window.alert("Accede aqui para tu oferta");
        var oferta=2;
        oferta --;
        if (oferta ==0){
            clearInterval(timer)
        }

    },10000)*/

// MANIPULACIÓN DOM

//Al poner script al principo es necesario esta linea para que el programa lea todo el códgio y luego ejecute 
window.addEventListener("load", function(){
    
    //BUSQUEDA DE LOS ELEMENTOS -----
    // # se usa para la busqueda de elementos, en este caso el primer elemento de formulario que coincida
    //con el primer elementos de que siga a cada #
    
    //nombre
    const name=document.querySelector("#nombre");
    //contraseña
    const pass=document.querySelector("#password");
    //email
    const mail=document.querySelector("#email");
    //asunto
    const asunto=document.querySelector("#asunto");
    //mensaje
    const msn=document.querySelector("#mensaje");
    //formulario
    const elFormulario=document.querySelector("#formulario");
    //boton enviar
    const botonEnviar=document.querySelector("#formulario button[type='submit']");

    //OBJETOS del formulario para que se alamacen los datos del cliente cada vez que se ejecute blur
    const objetosFormulario={
    nombre:"",
    password:"",
    email:"",
    asunto:"",
    mensaje:"",}

    // PONER A LA ESCUCHA A LOS ELEMENTOS -- PUNTO 4 EVEMTPS - ADDEVENTLISTENER ------
    
    //llamar a la funcion "principal" para que el programa funcine
    //la funcion sin parentesis para que el programa sepa que se le llama cuando pase la accion
    name.addEventListener("blur",validaciones);
    pass.addEventListener("blur",validaciones);       
    mail.addEventListener("blur",validaciones);
    asunto.addEventListener("blur",validaciones);
    msn.addEventListener("blur",validaciones);

    
    //FUNCIONES -------
    
    //FUNCION PRINCIPAL ----
        //donde voy a llamar a las demás funciones ademas de tener su función
        
    function validaciones(evento){
        //console.log(evento.parentElemnt.parentElemnt); //MOVERSE entre padre e hipo para localizar formulario
        // para saber qué campo es requerido, uso parentElement para saber cual es el elemento padre que ha ocasionado el error
        if(evento.target.value.trim()=="") {
            mensajesError(`Campo ${evento.target.id} requerido!`, evento.target.parentElement); 
            //al poner el return hace que cuando introduzca datos y este el error desaparezca el error            
            return;   
        }
        // llamo a la funcion para borrar alerta
        borrarError(evento.target.parentElement);
        //lamo a la funcion para verificar el email
        // hay que hacer una doble verificación para que se cumplan las dos y aparezca el error correctamente 
        if (evento.target.id =="email" && validarEmail(evento.target.value)==false){
            mensajesError("Email no válido", evento.target.parentElement);
        };
        
        //aqúi se almacena los datos meteidos por el usuario
        objetosFormulario[evento.target.name]=evento.target.value;
        //lo uso para ir viendo en consola los elementos que se van metieneso, se puede comentar esta linea
        console.log(objetosFormulario);

        // verificar que todos los campos están rellenos 
        checkFormulario();
        
    }
    
    //FUNCION MENSAJE ERROR

    function mensajesError(mensaje, elemento){
        //elemento.querySelector para que busque solo en el elemento padre y no todo el doc
        const alerta=elemento.querySelector(".bg-red-600");//almacenar el aviso dentro de alerta
        //BORRAR ---- alerta,si la alerta existe 
        if(alerta) alerta.remove();
        //manipulacion de DOM CREAR ----
        //creo un parrafo mas con la alerta que saldra cuando algo falte 
        const error=document.createElement("p"); 
        error.textContent=mensaje;
        error.classList.add("bg-red-600", "text-white", "text-center", "p-2"); //hoja css agregada 
        //CREAR ELEMENTO MOVIENDOSE----- ENTRE HIJOS, el hijo que se crea es el error -- al final del formulario
        elemento.appendChild(error);
    }

    //FUNCION PARA BORRAR ERROR 

    function borrarError(elemento){
        const alerta=elemento.querySelector(".bg-red-600");//almacenar el aviso dentro de alerta
        //BORRAR-----  alerta,si la alerta existe y el usuario corrige el error desaparece
        if(alerta) alerta.remove();
    }

    //FUNCION DE VALIDACIÓN EMAIL 

    function validarEmail(mail){
        //uso regex para el email
        const regex=/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/;
        //comprobar si email cumple las condiciones
        const validar=regex.test(mail);
        return validar;
    }

    
    // FUNCION PARA VALIDAR EL FORMULARIO ENTERO 

    function checkFormulario(){
        //si los valores estan vacios, el botón seguirá opaco 
        if(Object.values(objetosFormulario).includes('')){
            botonEnviar.classList.add("opacity-50");
            botonEnviar.disabled=true;
        }else{
            botonEnviar.classList.remove("opacity-50");
            //el boton está descativado hasta que se rellene todo el formulario
            botonEnviar.disabled=false;
        }
    }

});