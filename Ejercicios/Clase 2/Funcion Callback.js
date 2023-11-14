function suma (a,b,callback){
    let c = a +b;
    callback();
    }

    function callback() {
        console.log("La sumatoria se ha realizado satisfactoriamente.")
    }

    suma(5,3, callback)




    // El tercer parámetro recibido en la función "suma" es una función, siendo una función de tipo "Callback". Se pasa como argumento para ser llamada de nuevo en un momento posterior. 
    //La función que acepta como parámetro a la función "callback" es llamada una función de orden superior.  
    // Se utiliza comúnte en situaciones en que se deben realizar tareas asincrónicas(por ejemplo una solicitud a una API)