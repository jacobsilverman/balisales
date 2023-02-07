// import { words } from './src/Data/Assets/test-word';
let enWords = ['Home','Create','Contact','About','Filter',
'Reset','Minimum','Maximum','Cost','Status','Brand','Type',
'Time','Blade','All','Available','Pending','Sold','Traded',
'Selling','Trading','Buying','New','Old','Live','Trainer','Parts',
'Log In', 'Log Out', 'Sign Up', 'Browse', 'Contact Support',
'About Us', 'Language', 'Title', 'Price', 'Condition', 'Sale Type',
'Description', 'Upload Image', 'Submit', 'Search', 'Profile', 
'Settings', 'no new messages', 'no new alerts', 'Created',
'Previous', 'Next',
'Please feel free to send us a message for any reason'];

let esWords = ['Inicio', 'Crear', 'Contacto', 'Acerca de', 'Filtro',
'Restablecer', 'Mínimo', 'Máximo', 'Coste', 'Estado', 'Marca', 'Tipo',
'Tiempo', 'Blade', 'Todos', 'Disponible', 'Pendiente', 'Vendido', 'Negociado',
'Venta', 'Comercio', 'Compra', 'Nuevo', 'Antiguo', 'En vivo', 'Entrenador', 'Piezas',
'Iniciar sesión', 'Cerrar sesión', 'Registrarse', 'Examinar', 'Contactar con soporte',
'Acerca de nosotros', 'Idioma', 'Título', 'Precio', 'Condición', 'Tipo de venta',
'Descripción', 'Subir imagen', 'Enviar', 'Buscar', 'Perfil',
'Configuración', 'sin mensajes nuevos', 'sin alertas nuevas',
'No dude en enviarnos un mensaje por cualquier motivo'];

const hardCodedWords = ['baliplus', 'squid', 'kershaw', 'bradley', 'brs', 'mw', 'bbbarfly', 'hom', 'bm', 'bs', 'jk', 'nrb', 'svix', 'heibel', 'hypex', 'glidrco', 'mantis', 'theone', 'fellowship', 'biegler', 'flytanium', 'misc', 1, 2, 3,4, 5,6,7,8,9,10]

enWords = [...enWords, ...hardCodedWords];
esWords = [...esWords, ...hardCodedWords];

const t =(() => {
    const english = enWords.reduce((acc, item) => {
        acc[item] = item;
        return acc;
    }, {});
    let spanish = {};
    for (let index in enWords){
        spanish[enWords[index]] = esWords[index];
    }

    console.log(JSON.stringify(english));
    console.log("\n\n\n");
    console.log(JSON.stringify(spanish));
})()
