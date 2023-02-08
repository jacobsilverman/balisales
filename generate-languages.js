// import { words } from './src/Data/Assets/test-word';
let enWords = ['Home','Create','Contact','About','Filter',
'Reset','Minimum','Maximum','Cost','Status','Brand','Type',
'Time','Blade','All','Available','Pending','Sold','Traded',
'Selling','Trading','Buying','New','Old','Live','Trainer','Parts',
'Login', 'Logout', 'Signup', 'Browse', 'Contact Support', 'User Post',
'About Us', 'Language', 'Title', 'Price', 'Condition', 'Sale Type',
'Description', 'Upload Image', 'Submit', 'Search', 'Profile', 
'Settings', 'no new messages', 'no new alerts', 'Created',
'Previous', 'Next', 'First Name', 'Last Name', 'Display Name',
'Phone Number', 'Instagram', 'Facebook', 'Profile Picture', 'Cancel',
'Edit', 'Delete', 'Yes', 'No', 'Do you want to delete this post?',
'Please feel free to send us a message for any reason'];

let esWords = ['Inicio', 'Crear', 'Contacto', 'Acerca de', 'Filtro',
'Restablecer', 'Mínimo', 'Máximo', 'Coste', 'Estado', 'Marca', 'Tipo',
'Tiempo', 'Blade', 'Todos', 'Disponible', 'Pendiente', 'Vendido', 'Negociado',
'Venta', 'Comercio', 'Compra', 'Nuevo', 'Antiguo', 'En vivo', 'Entrenador', 'Piezas',
'Iniciar sesión', 'Cerrar sesión', 'Registrarse', 'Examinar', 'Contactar con soporte',
'Acerca de nosotros', 'Idioma', 'Título', 'Precio', 'Condición', 'Tipo de venta',
'Descripción', 'Subir imagen', 'Enviar', 'Buscar', 'Perfil',
'Configuración', 'sin mensajes nuevos', 'sin alertas nuevas', 'Creado',
'Anterior', 'Siguiente', 'Nombre', 'Apellido', 'Nombre para mostrar',
'Número de teléfono', 'Instagram', 'Facebook', 'Imagen de perfil', 'Cancelar',
'Editar', 'Eliminar', 'Sí', 'No', '¿Quieres eliminar esta publicación?',
'No dude en enviarnos un mensaje por cualquier motivo'];

let iwWords = ['בית', 'צור', 'צור קשר', 'אודות', 'מסנן',
'איפוס','מינימום','מקסימום','עלות','סטטוס','מותג','סוג',
'זמן', 'להב', 'הכל', 'זמין', 'בהמתנה', 'נמכר', 'נסחר',
'מכירה','מסחר','קנייה','חדש','ישן','חי','מאמן','חלקים',
'התחבר', 'תנתק', 'הירשם', 'עיון', 'צור קשר עם התמיכה',
'אודותינו', 'שפה', 'כותרת', 'מחיר', 'מצב', 'סוג מכירה',
'תיאור', 'העלה תמונה', 'שלח', 'חיפוש', 'פרופיל',
'הגדרות', 'אין הודעות חדשות', 'אין התראות חדשות', 'נוצר',
'קודם', 'הבא', 'שם פרטי', 'שם משפחה', 'שם תצוגה',
'מספר טלפון', 'אינסטגרם', 'פייסבוק', 'תמונת פרופיל', 'ביטול',
'ערוך', 'מחק', 'כן', 'לא', 'האם אתה רוצה למחוק את הפוסט הזה?',
'אנא אל תהסס לשלוח לנו הודעה מכל סיבה'];

let arWords = ["الصفحة الرئيسية", "إنشاء" , "جهة الاتصال" , "حول" , "تصفية" ,
"إعادة تعيين" , "الحد الأدنى" , "الحد الأقصى" , "التكلفة" , "الحالة" , "العلامة التجارية" , "النوع" ,
"الوقت" , "النصل" , "الكل" , "متاح" , "معلق" , "مباع" , "متداول" ,
"بيع" , "تداول" , "شراء" , "جديد" , "قديم" , "مباشر" , "مدرب" , "قطع غيار" ,
"تسجيل الدخول" , "تسجيل الخروج" , "الاشتراك" , "تصفح" , "الاتصال بالدعم" , "مشاركة المستخدم" ,
"نبذة عنا" , "اللغة" , "العنوان" , "السعر" , "الحالة" , "نوع البيع" ,
"الوصف" , "تحميل الصورة" , "إرسال" , "بحث" , "الملف الشخصي" ,
"الإعدادات" , "لا توجد رسائل جديدة" , "لا توجد تنبيهات جديدة" , "تم الإنشاء" ,
"السابق" , "التالي" , "الاسم الأول" , "اسم العائلة" , "اسم العرض" ,
"رقم الهاتف" , "Instagram" , "Facebook" , "صورة الملف الشخصي" , "إلغاء" ,
"تحرير" , "حذف" , "نعم" , "لا" , "هل تريد حذف هذه الرسالة؟" ,
"لا تتردد في إرسال رسالة إلينا لأي سبب من الأسباب"];


const hardCodedWords = ['baliplus', 'squid', 'kershaw', 'bradley', 'brs', 'mw', 'bbbarfly', 'hom', 'bm', 'bs', 'jk', 'nrb', 'svix', 'heibel', 'hypex', 'glidrco', 'mantis', 'theone', 'fellowship', 'biegler', 'flytanium', 'misc',1,2,3,4,5,6,7,8,9,10]

let words = [enWords, esWords, iwWords, arWords];

for (let item of words) {
    item = [...item, ...hardCodedWords]
}
// enWords = [...enWords, ...hardCodedWords];
// esWords = [...esWords, ...hardCodedWords];
// iwWords = [...iwWords, ...hardCodedWords];

const t =(() => {
    const english = enWords.reduce((acc, item) => {
        acc[item] = item;
        return acc;
    }, {});
    let spanish = {};
    let hebrew = {};
    let arabic = {};
    for (let index in enWords){
        spanish[enWords[index]] = esWords[index];
        hebrew[enWords[index]] = iwWords[index];
        arabic[enWords[index]] = arWords[index];
    }
    
    var englishStr = JSON.stringify(english);
    var spanishStr = JSON.stringify(spanish);
    var hebrewStr = JSON.stringify(hebrew);
    var arabicStr = JSON.stringify(arabic);

    console.log(englishStr+"-"+spanishStr+"-"+hebrewStr+"-"+arabicStr);
})()
