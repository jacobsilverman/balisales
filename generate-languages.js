// import { words } from './src/Data/Assets/test-word';
const enWords = ['Home','Create','Contact','About','Filter',
'Reset','Minimum','Maximum','Cost','Status','Brand','Type',
'Time','Blade','All','Available','Pending','Sold','Traded',
'Selling','Trading','Buying','New','Old','Live','Trainer','Parts',
'Log In', 'Log Out', 'Sign Up', 'Browse', 'Contact Support',
'About Us', 'Language', 'Title', 'Price', 'Condition', 'Sale Type',
'Description', 'Upload Image', 'Submit', 'Search'];

const esWords = ['Inicio', 'Crear', 'Contacto', 'Acerca de', 'Filtro',
'Restablecer', 'Mínimo', 'Máximo', 'Coste', 'Estado', 'Marca', 'Tipo',
'Tiempo', 'Blade', 'Todos', 'Disponible', 'Pendiente', 'Vendido', 'Negociado',
'Venta', 'Comercio', 'Compra', 'Nuevo', 'Antiguo', 'En vivo', 'Entrenador', 'Piezas',
'Iniciar sesión', 'Cerrar sesión', 'Registrarse', 'Examinar', 'Contactar con soporte',
'Acerca de nosotros', 'Idioma', 'Título', 'Precio', 'Condición', 'Tipo de venta',
'Descripción', 'Subir imagen', 'Enviar', 'Buscar'];

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
    console.log(JSON.stringify(spanish));
})()
