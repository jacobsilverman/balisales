
let ar = [
    'الصفحة الرئيسية', 'إنشاء', 'اتصل', 'حول', 'تصفية',
    'إعادة تعيين', 'الحد الأدنى', 'الحد الأقصى', 'التكلفة', 'الحالة', 'العلامة التجارية', 'النوع',
    'الوقت', 'شفرة', 'الكل', 'متاح', 'قيد الانتظار', 'مباع', 'متداول',
    'بيع', 'تجارة', 'شراء', 'بيع / تجارة', 'جديد', 'قديم', 'مباشر', 'مدرب', 'قطع الغيار',
    'تسجيل الدخول', 'تسجيل الخروج', 'التسجيل', 'تصفح', 'الاتصال بالدعم', 'مشاركة المستخدم',
    'عنا', 'لغة', 'العنوان', 'السعر', 'الحالة', 'نوع البيع',
    'الوصف', 'تحميل الصورة', 'إرسال', 'بحث', 'عملة', 'الملف الشخصي',
    'الإعدادات', 'لا توجد رسائل جديدة', 'لا توجد تنبيهات جديدة', 'تبرع', 'تم الإنشاء',
    'السابق', 'التالي', 'الاسم الأول', 'الاسم الأخير', 'المبلغ', 'اسم العرض',
    'رقم الهاتف', 'إنستغرام', 'فيسبوك', 'صورة الملف الشخصي', 'إلغاء',
    'تعديل', 'حذف', 'نعم', 'لا', 'هل ترغب في حذف هذا المنشور؟',
    'يرجى ألا تتردد في إرسال رسالة لنا لأي سبب من الأسباب',
    'فرز حسب', 'المزيد', 'العنوان', 'الوحدة', 'المدينة', 'البلد', 'الولاية', 'الرمز البريدي',
    'إضافة صورة', 'تاريخ الإنشاء', 'إزالة', 'معلومات أساسية', 'معلومات اجتماعية',
    'تغيير صورة الملف الشخصي', 'معلومات الموقع', 'المنشورات',
    'لم يتم حفظ أي عنوان', 'الإبلاغ', 'المراجعة', 'تعرف على الفريق', 'مطور الويب', 'مدير المشروع',
    'مصمم', 'تعرف على مستخدمينا', 'مهمتنا', 'اتصل بنا', 'إنشاء منشور', 'يرجى التحقق من',
    'صفحة اتصل بنا', 'لتقديم اقتراحات أو نصائح أو المساهمة في نمو هذا الموقع، أو لأي سبب آخر قد تراه مناسبًا!',
    'مهمتنا هي تمكين عشاق الباليسونج من شراء وبيع وتداول باليسونج الخاص بهم. الهدف النهائي هو تقليل المخاطر والتخلص من جميع المحتالين المحتملين أو المعاملات المحتملة السيئة. هذا الموقع هو جهد متواصل يستفيد من تعليقات المستخدمين للتحسين المستمر.',
    'للوصول إلى جميع جوانب هذا الموقع، يرجى التسجيل الدخول أو التسجيل. بمجرد تسجيل الدخول، ستتمكن من إنشاء منشورات وكتابة مراجعات على حسابات الأشخاص الآخرين.',
    'نود أن نشكركم على استخدام هذا الموقع ونأمل أنكم تستمتعون به بنشاط، بالإضافة إلى العثور على صفقات بسهولة. على أي حال، نتمنى لكم يومًا رائعًا واعتنوا بأنفسكم.'
];

let de = [
    'Startseite', 'Erstellen', 'Kontakt', 'Über', 'Filtern',
    'Zurücksetzen', 'Minimum', 'Maximum', 'Kosten', 'Status', 'Marke', 'Typ',
    'Zeit', 'Klinge', 'Alle', 'Verfügbar', 'Ausstehend', 'Verkauft', 'Getauscht',
    'Verkaufen', 'Handeln', 'Kaufen', 'Verkaufen/Handeln', 'Neu', 'Alt', 'Live', 'Trainer', 'Teile',
    'Anmelden', 'Abmelden', 'Registrieren', 'Durchsuchen', 'Kontaktieren Sie den Support', 'Benutzerbeitrag',
    'Über uns', 'Sprache', 'Titel', 'Preis', 'Zustand', 'Verkaufstyp',
    'Beschreibung', 'Bild hochladen', 'Senden', 'Suchen', 'Währung', 'Profil',
    'Einstellungen', 'Keine neuen Nachrichten', 'Keine neuen Benachrichtigungen', 'Spenden', 'Erstellt',
    'Vorherige', 'Nächste', 'Vorname', 'Nachname', 'Betrag', 'Anzeigename',
    'Telefonnummer', 'Instagram', 'Facebook', 'Profilbild', 'Abbrechen',
    'Bearbeiten', 'Löschen', 'Ja', 'Nein', 'Möchten Sie diesen Beitrag löschen?',
    'Zögern Sie nicht, uns aus irgendeinem Grund eine Nachricht zu senden', 'Sortieren nach', 'Mehr',
    'Adresse', 'Einheit', 'Stadt', 'Land', 'Bundesland', 'Postleitzahl', 'Bild hinzufügen', 'Erstellungsdatum',
    'Entfernen', 'Grundlegende Informationen', 'Soziale Informationen', 'Profilbild ändern', 'Standortinformationen', 'Beiträge',
    'Keine Adresse gespeichert', 'Melden', 'Überprüfen', 'Team kennenlernen', 'Webentwickler', 'Projektmanager',
    'Designer', 'Unsere Benutzer kennenlernen', 'Mission', 'Kontaktiere uns', 'Beitrag erstellen', 'Bitte schauen Sie auf der',
    'Kontaktiere uns Seite', 'um Vorschläge zu machen, Ratschläge zu geben, zur Entwicklung dieser Website beizutragen oder aus jedem anderen Grund, den Sie für angemessen halten!',
    'Unsere Mission ist es, Balisong-Enthusiasten zu ermöglichen, ihre Balisongs zu kaufen, zu verkaufen und zu tauschen. Das ultimative Ziel besteht darin, das damit verbundene Risiko zu reduzieren und alle potenziellen Betrüger oder problematischen Transaktionen auszuschließen. Diese Website ist eine laufende Bemühung, die das Feedback der Benutzer nutzt, um kontinuierliche Verbesserungen vorzunehmen.',
    'Um auf alle Aspekte dieser Website zugreifen zu können, melden Sie sich bitte an oder registrieren Sie sich. Sobald Sie angemeldet sind, können Sie Beiträge erstellen und Bewertungen für die Konten anderer Personen schreiben.',
    'Wir möchten uns bei Ihnen dafür bedanken, dass Sie diese Website verwenden, und hoffen, dass Sie sie aktiv nutzen und dabei leicht Geschäfte finden/machen können. Wie auch immer, wir hoffen, Sie haben einen wunderbaren Tag und passen Sie gut auf sich auf.'
];

let en = [
    'Home','Create','Contact','About','Filter',
    'Reset','Minimum','Maximum','Cost','Status','Brand','Type',
    'Time','Blade','All','Available','Pending','Sold','Traded',
    'Selling','Trading','Buying','Selling/Trading','New','Old','Live','Trainer','Parts',
    'Login', 'Logout', 'Signup', 'Browse', 'Contact Support', 'User Post',
    'About Us', 'Language', 'Title', 'Price', 'Condition', 'Sale Type',
    'Description', 'Upload Image', 'Submit', 'Search', 'Currency', 'Profile', 
    'Settings', 'no new messages', 'no new alerts', 'Donate', 'Created',
    'Previous', 'Next', 'First Name', 'Last Name', 'Amount', 'Display Name',
    'Phone Number', 'Instagram', 'Facebook', 'Profile Picture', 'Cancel',
    'Edit', 'Delete', 'Yes', 'No', 'Do you want to delete this post?',
    'Please feel free to send us a message for any reason', 'Sort By', 'More',
    'Address', 'Unit', 'City', 'Country', 'State', 'Zipcode', 'Add Picture', 'Date Created',
    'Remove', 'Basic Info', 'Social Info', 'Change Profile Picture', 'Location Info', 'Posts',
    'No address is saved', 'Report', 'Review', 'Meet the Team', 'Web Developer', 'Project Manager',
    'Designer', 'Meet our Users', 'Mission', 'Contact Us', 'Create Post', 'Please check out the',
    'Contact Us Page', 'to offer suggestions, advise, help contribute to the growth of this website, or for any reason you might see fit!',
    'Our mission is to enable balisong enthusiasts to buy, sell and trade their balisongs. The ultimate goal is to reduce the risk involved and cut out all potential scammers or potential sour transactions. This website is an ongoing effort that utilizes user feedback to continuously improve.',
    'To access all aspects of this website please make sure to log in or sign up. Once you are logged in you will be able to create posts and write reviews on other peoples accounts.',
    'We want to thank you for using this website and hope you are actively enjoying it, along with finding/making deals with ease. Anyways, we hope you have a wonderful day and take care.'
];

let es = [
    'Inicio', 'Crear', 'Contacto', 'Acerca de', 'Filtrar',
    'Restablecer', 'Mínimo', 'Máximo', 'Costo', 'Estado', 'Marca', 'Tipo',
    'Tiempo', 'Cuchilla', 'Todo', 'Disponible', 'Pendiente', 'Vendido', 'Intercambiado',
    'Vender', 'Negociar', 'Comprar', 'Vender/Negociar', 'Nuevo', 'Antiguo', 'En vivo', 'Entrenador', 'Piezas',
    'Iniciar sesión', 'Cerrar sesión', 'Registrarse', 'Navegar', 'Contactar soporte', 'Publicación de usuario',
    'Acerca de nosotros', 'Idioma', 'Título', 'Precio', 'Condición', 'Tipo de venta',
    'Descripción', 'Cargar imagen', 'Enviar', 'Buscar', 'Moneda', 'Perfil',
    'Configuración', 'Sin nuevos mensajes', 'Sin nuevas alertas', 'Donar', 'Creado',
    'Anterior', 'Siguiente', 'Nombre', 'Apellido', 'Cantidad', 'Nombre de usuario',
    'Número de teléfono', 'Instagram', 'Facebook', 'Foto de perfil', 'Cancelar',
    'Editar', 'Eliminar', 'Sí', 'No', '¿Desea eliminar esta publicación?',
    'No dude en enviarnos un mensaje por cualquier motivo', 'Ordenar por', 'Más',
    'Dirección', 'Unidad', 'Ciudad', 'País', 'Estado', 'Código postal', 'Agregar imagen', 'Fecha de creación',
    'Eliminar', 'Información básica', 'Información social', 'Cambiar foto de perfil', 'Información de ubicación', 'Publicaciones',
    'No se ha guardado ninguna dirección', 'Informe', 'Revisión', 'Conoce al equipo', 'Desarrollador web', 'Gerente de proyecto',
    'Diseñador', 'Conoce a nuestros usuarios', 'Misión', 'Contáctanos', 'Crear publicación', 'Por favor, visita la',
    'Página de contacto', 'para ofrecer sugerencias, consejos, ayudar a contribuir al crecimiento de este sitio web o por cualquier motivo que consideres adecuado!',
    'Nuestra misión es permitir a los entusiastas del balisong comprar, vender e intercambiar sus balisongs. El objetivo final es reducir el riesgo involucrado y eliminar a todos los posibles estafadores o transacciones problemáticas. Este sitio web es un esfuerzo continuo que utiliza la retroalimentación de los usuarios para mejorar constantemente.',
    'Para acceder a todos los aspectos de este sitio web, asegúrate de iniciar sesión o registrarte. Una vez que hayas iniciado sesión, podrás crear publicaciones y escribir reseñas en las cuentas de otras personas.',
    'Queremos agradecerte por usar este sitio web y esperamos que lo disfrutes activamente, además de encontrar/hacer tratos con facilidad. De todos modos, esperamos que tengas un día maravilloso y cuídate mucho.'
];

let fr = [
    'Accueil', 'Créer', 'Contact', 'À propos', 'Filtrer',
    'Réinitialiser', 'Minimum', 'Maximum', 'Coût', 'Statut', 'Marque', 'Type',
    'Temps', 'Lame', 'Tout', 'Disponible', 'En attente', 'Vendu', 'Échangé',
    'Vendre', 'Négocier', 'Acheter', 'Vendre/Négocier', 'Nouveau', 'Vieux', 'En direct', 'Entraîneur', 'Pièces',
    'Se connecter', 'Se déconnecter', 'S\'inscrire', 'Parcourir', 'Contacter le support', 'Publication de l\'utilisateur',
    'À propos de nous', 'Langue', 'Titre', 'Prix', 'Condition', 'Type de vente',
    'Description', 'Télécharger une image', 'Soumettre', 'Rechercher', 'Devise', 'Profil',
    'Paramètres', 'Pas de nouveaux messages', 'Pas de nouvelles alertes', 'Faire un don', 'Créé',
    'Précédent', 'Suivant', 'Prénom', 'Nom de famille', 'Montant', 'Nom d\'utilisateur',
    'Numéro de téléphone', 'Instagram', 'Facebook', 'Photo de profil', 'Annuler',
    'Éditer', 'Supprimer', 'Oui', 'Non', 'Voulez-vous supprimer cette publication ?',
    'N\'hésitez pas à nous envoyer un message pour n\'importe quelle raison', 'Trier par', 'Plus',
    'Adresse', 'Unité', 'Ville', 'Pays', 'État', 'Code postal', 'Ajouter une image', 'Date de création',
    'Supprimer', 'Informations de base', 'Informations sociales', 'Changer la photo de profil', 'Informations de localisation', 'Publications',
    'Aucune adresse n\'est enregistrée', 'Signaler', 'Avis', 'Rencontrez l\'équipe', 'Développeur Web', 'Chef de projet',
    'Designer', 'Rencontrez nos utilisateurs', 'Mission', 'Contactez-nous', 'Créer une publication', 'Veuillez consulter la',
    'Page Nous contacter', 'pour offrir des suggestions, des conseils, contribuer à la croissance de ce site Web ou pour toute autre raison que vous pourriez juger appropriée !',
    'Notre mission est de permettre aux passionnés du balisong d\'acheter, de vendre et d\'échanger leurs balisongs. L\'objectif ultime est de réduire les risques et d\'éliminer tous les escrocs potentiels ou les transactions problématiques. Ce site Web est un effort continu qui utilise les commentaires des utilisateurs pour s\'améliorer constamment.',
    'Pour accéder à tous les aspects de ce site Web, assurez-vous de vous connecter ou de vous inscrire. Une fois connecté, vous pourrez créer des publications et rédiger des avis sur les comptes des autres personnes.',
    'Nous tenons à vous remercier d\'utiliser ce site Web et nous espérons que vous en profitez activement, en plus de trouver/réaliser des transactions en toute simplicité. Quoi qu\'il en soit, nous vous souhaitons une merveilleuse journée et prenez bien soin de vous.'
];

let hi = [
    'होम', 'बनाएं', 'संपर्क', 'के बारे में', 'फ़िल्टर',
    'रीसेट', 'न्यूनतम', 'अधिकतम', 'लागत', 'स्थिति', 'ब्रांड', 'प्रकार',
    'समय', 'ब्लेड', 'सभी', 'उपलब्ध', 'लंबित', 'बेचा गया', 'विनिमित',
    'बेचना', 'व्यापार करना', 'खरीदना', 'बेचना/व्यापार करना', 'नया', 'पुराना', 'लाइव', 'प्रशिक्षक', 'पार्ट्स',
    'लॉग इन करें', 'लॉग आउट करें', 'साइन अप करें', 'ब्राउज़ करें', 'समर्थन से संपर्क करें', 'उपयोगकर्ता पोस्ट',
    'हमारे बारे में', 'भाषा', 'शीर्षक', 'मूल्य', 'स्थिति', 'बेचने का प्रकार',
    'विवरण', 'छवि अपलोड करें', 'सबमिट', 'खोजें', 'मुद्रा', 'प्रोफ़ाइल',
    'सेटिंग्स', 'कोई नई संदेश नहीं', 'कोई नई चेतावनियाँ नहीं', 'दान करें', 'बनाया गया',
    'पिछला', 'अगला', 'पहला नाम', 'आखिरी नाम', 'राशि', 'प्रदर्शन नाम',
    'फ़ोन नंबर', 'इंस्टाग्राम', 'फेसबुक', 'प्रोफ़ाइल चित्र', 'रद्द करें',
    'संपादित करें', 'हटाएं', 'हां', 'नहीं', 'क्या आप इस पोस्ट को हटाना चाहते हैं?',
    'किसी भी कारण के लिए हमें संदेश भेजने के लिए कृपया हमसे संपर्क करें', 'के द्वारा क्रमबद्ध करें', 'और',
    'पता', 'इकाई', 'शहर', 'देश', 'राज्य', 'पिनकोड', 'चित्र जोड़ें', 'तिथि बनाई गई',
    'हटाएं', 'मूल जानकारी', 'सामाजिक जानकारी', 'प्रोफ़ाइल चित्र बदलें', 'स्थान जानकारी', 'पोस्ट',
    'कोई पता सहेजा नहीं गया है', 'रिपोर्ट', 'समीक्षा', 'हमारी टीम से मिलें', 'वेब डेवलपर', 'प्रोजेक्ट मैनेजर',
    'डिज़ाइनर', 'हमारे उपयोगकर्ताओं से मिलें', 'मिशन', 'हमसे संपर्क करें', 'पोस्ट बनाएं', 'कृपया देखें',
    'हमसे संपर्क करें पेज', 'सुझाव देने, सलाह देने, इस वेबसाइट की वृद्धि में सहायक बनने या जो कुछ भी कारण हो सकता है, के लिए!',
    'हमारा मिशन बलिसोंग प्रेमियों को उनके बलिसोंग को खरीदने, बेचने और व्यापार करने की अनुमति देना है। आखिरकार का लक्ष्य शामिल होने वाले जोखिम को कम करना और सभी संभावित धोखाधड़ीयों या संभावित सड़ सम्प्रेषणों को काट देना है। यह वेबसाइट एक जारी प्रयास है जिसमें उपयोगकर्ता प्रतिक्रिया का उपयोग करके निरंतर सुधार किए जाते हैं।',
    'इस वेबसाइट के सभी पहलुओं तक पहुँचने के लिए कृपया लॉग इन करें या साइन अप करें। एक बार लॉग इन होने के बाद, आप पोस्ट बना सकेंगे और दूसरों के खातों पर समीक्षा लिख सकेंगे।',
    'हम आपका आभारी हैं कि आप इस वेबसाइट का उपयोग कर रहे हैं और आशा है कि आप इसे विशेषत: आनंद ले रहे हैं, साथ ही साथ आसानी से सौदों को ढूंढने/करने में मदद कर रहे हैं। बस, हम आपको एक अद्भुत दिन की कामना करते हैं और आप अच्छा सम्बाल करें।'
];

let id = [
    'Beranda', 'Buat', 'Kontak', 'Tentang', 'Saring',
    'Reset', 'Minimum', 'Maksimum', 'Biaya', 'Status', 'Merek', 'Tipe',
    'Waktu', 'Pisau', 'Semua', 'Tersedia', 'Tertunda', 'Terjual', 'Ditukar',
    'Jual', 'Tukar', 'Beli', 'Jual/Tukar', 'Baru', 'Lama', 'Langsung', 'Pelatih', 'Bagian',
    'Masuk', 'Keluar', 'Daftar', 'Telusuri', 'Hubungi Dukungan', 'Posting Pengguna',
    'Tentang Kami', 'Bahasa', 'Judul', 'Harga', 'Kondisi', 'Jenis Penjualan',
    'Deskripsi', 'Unggah Gambar', 'Kirim', 'Cari', 'Mata Uang', 'Profil',
    'Pengaturan', 'Tidak ada pesan baru', 'Tidak ada peringatan baru', 'Donasi', 'Dibuat',
    'Sebelumnya', 'Berikutnya', 'Nama Depan', 'Nama Belakang', 'Jumlah', 'Nama Tampilan',
    'Nomor Telepon', 'Instagram', 'Facebook', 'Foto Profil', 'Batal',
    'Edit', 'Hapus', 'Ya', 'Tidak', 'Apakah Anda ingin menghapus posting ini?',
    'Jangan ragu untuk mengirim pesan kepada kami untuk alasan apa pun', 'Urutkan berdasarkan', 'Lebih',
    'Alamat', 'Unit', 'Kota', 'Negara', 'Negara Bagian', 'Kode Pos', 'Tambahkan Gambar', 'Tanggal Dibuat',
    'Hapus', 'Informasi Dasar', 'Informasi Sosial', 'Ganti Foto Profil', 'Informasi Lokasi', 'Posting',
    'Tidak ada alamat yang disimpan', 'Laporkan', 'Ulasan', 'Kenali Tim Kami', 'Pengembang Web', 'Manajer Proyek',
    'Desainer', 'Kenali Pengguna Kami', 'Misi', 'Hubungi Kami', 'Buat Posting', 'Silakan kunjungi',
    'Halaman Hubungi Kami', 'untuk menawarkan saran, nasihat, membantu berkontribusi pada pertumbuhan situs web ini, atau untuk alasan apa pun yang Anda anggap tepat!',
    'Misi kami adalah memungkinkan penggemar balisong untuk membeli, menjual, dan melakukan perdagangan balisong mereka. Tujuan utamanya adalah mengurangi risiko yang terlibat dan menghilangkan semua potensi penipu atau transaksi yang berpotensi buruk. Situs web ini merupakan upaya berkelanjutan yang menggunakan umpan balik pengguna untuk terus memperbaiki diri.',
    'Untuk mengakses semua aspek situs web ini, pastikan untuk masuk atau mendaftar. Setelah Anda masuk, Anda dapat membuat posting dan menulis ulasan tentang akun orang lain.',
    'Kami ingin berterima kasih kepada Anda atas penggunaan situs web ini dan kami berharap Anda menikmatinya dengan aktif, serta menemukan/membuat kesepakatan dengan mudah. Bagaimanapun, kami berharap Anda memiliki hari yang indah dan jaga diri Anda dengan baik.'
];

let is = [
    'Heim', 'Búa til', 'Hafa samband', 'Um', 'Sía',
    'Endurræsa', 'Lágmarks', 'Hámarks', 'Kostnaður', 'Staða', 'Vörumerki', 'Tegund',
    'Tími', 'Skær', 'Allt', 'Tilbúið', 'Bíður', 'Seld', 'Skipt',
    'Senda', 'Samskipti', 'Kaupa', 'Senda/Samskifta', 'Nýtt', 'Gammalt', 'Lítið', 'Þjálfari', 'Hlutar',
    'Innskrá', 'Útskrá', 'Nýskrá', 'Leita', 'Hafðu samband', 'Notandapóstur',
    'Um okkur', 'Tungumál', 'Titill', 'Verð', 'Ástand', 'Sölu tegund',
    'Lýsing', 'Senda mynd', 'Senda', 'Leita', 'Gjaldmiðill', 'Prófíll',
    'Stillingar', 'Engar nýjar skilaboð', 'Engar nýjar viðvörunar', 'Gefa', 'Búið til',
    'Fyrri', 'Næsta', 'Fornafn', 'Eftirnafn', 'Uppgjald', 'Notandanafn',
    'Símanúmer', 'Instagram', 'Facebook', 'Prófíll mynd', 'Hætta við',
    'Breyta', 'Eyða', 'Já', 'Nei', 'Viltu eyða þessari færslu?',
    'Hafðu samband við okkur vegna hvaða ástæðu sem er', 'Raða eftir', 'Meira',
    'Heimilisfang', 'Eining', 'Borg', 'Land', 'Hérað', 'Póstnúmer', 'Bæta við mynd', 'Búið til',
    'Fjarlægja', 'Grunn upplýsingar', 'Félagslegar upplýsingar', 'Breyta prófíll mynd', 'Staðsetning upplýsingar', 'Færslur',
    'Engin heimilisfang er skráð', 'Tilkynna', 'Umferð', 'Kynntu þér liðið', 'Vefhönnuður', 'Verkefnisstjóri',
    'Hönnuður', 'Kynntu þér notendur okkar', 'Markmið', 'Hafðu samband', 'Búa til færslu', 'Vinsamlegast skoðaðu',
    'Hafðu samband við okkur síðuna', 'til að gefa tillögur, leiðbeina, hjálpa að auka vöxt vefsíðunnar eða vegna hvaða ástæðu sem þig þykja réttar!',
    'Markmið okkar er að veita balisong-áhugamönnum möguleika á að kaupa, selja og skipta um balisong sína. Ætlunin er að draga úr áhættu og forðast allar mögulegar svikamöguleikar eða vandamál með samskipti. Þessi vefsíða er síðasta tilraun sem notar skoðanir notenda til að endurskapa sig stöðugt.',
    'Til að náða öllum þáttum síðunnar ber að skrá sig inn eða nýskrá sig. Þegar þú ert skráður getur þú birt færslur og skrifað umsagnir á aðra notendur.',
    'Við viljum þakka þér fyrir að nota þessa vefsíðu og vonumst til að þú njótir hennar vel og nærð þér að finna/gera kaup með auðleðni. En hvaðan sem þú ert, vonumst við til að þú hafir einn frábærann dag og passir vel á þig.'
];

let it = [
    'Home', 'Crea', 'Contatto', 'Informazioni', 'Filtra',
    'Reimposta', 'Minimo', 'Massimo', 'Costo', 'Stato', 'Marca', 'Tipo',
    'Tempo', 'Lama', 'Tutto', 'Disponibile', 'In attesa', 'Venduto', 'Scambiato',
    'Vendi', 'Scambia', 'Acquista', 'Vendi/Scambia', 'Nuovo', 'Vecchio', 'In diretta', 'Allenatore', 'Parti',
    'Accedi', 'Esci', 'Registrati', 'Sfoglia', 'Contatta il supporto', 'Post dell\'utente',
    'Chi siamo', 'Lingua', 'Titolo', 'Prezzo', 'Condizione', 'Tipo di vendita',
    'Descrizione', 'Carica immagine', 'Invia', 'Cerca', 'Valuta', 'Profilo',
    'Impostazioni', 'Nessun nuovo messaggio', 'Nessun nuovo avviso', 'Dona', 'Creato',
    'Precedente', 'Successivo', 'Nome', 'Cognome', 'Importo', 'Nome visualizzato',
    'Numero di telefono', 'Instagram', 'Facebook', 'Immagine del profilo', 'Annulla',
    'Modifica', 'Elimina', 'Sì', 'No', 'Vuoi eliminare questo post?',
    'Non esitare a inviarci un messaggio per qualsiasi motivo', 'Ordina per', 'Altro',
    'Indirizzo', 'Unità', 'Città', 'Paese', 'Stato', 'CAP', 'Aggiungi immagine', 'Data di creazione',
    'Rimuovi', 'Informazioni di base', 'Informazioni sociali', 'Cambia immagine del profilo', 'Informazioni sulla posizione', 'Messaggi',
    'Nessun indirizzo salvato', 'Segnala', 'Recensione', 'Conosci il team', 'Sviluppatore web', 'Project manager',
    'Designer', 'Conosci i nostri utenti', 'Missione', 'Contattaci', 'Crea post', 'Ti invitiamo a visitare la',
    'Pagina Contattaci', 'per offrire suggerimenti, consigli, contribuire alla crescita di questo sito web o per qualsiasi motivo tu ritenga opportuno!',
    'La nostra missione è consentire agli appassionati di balisong di acquistare, vendere e scambiare i loro balisong. L\'obiettivo finale è ridurre il rischio coinvolto ed eliminare tutti i potenziali truffatori o transazioni problematiche. Questo sito web è uno sforzo continuo che utilizza il feedback degli utenti per migliorarsi costantemente.',
    'Per accedere a tutti gli aspetti di questo sito web, assicurati di accedere o registrarti. Una volta effettuato l\'accesso, potrai creare post e scrivere recensioni sugli account di altre persone.',
    'Desideriamo ringraziarti per l\'utilizzo di questo sito web e speriamo che tu lo stia apprezzando attivamente, oltre a trovare/fare affari con facilità. Comunque, ti auguriamo una splendida giornata e prenditi cura di te.'
];

let iw = [
    'בית', 'צור', 'צור קשר', 'אודות', 'סנן',
    'איפוס', 'מינימום', 'מרבית', 'עלות', 'סטטוס', 'מותג', 'סוג',
    'זמן', 'להבה', 'הכל', 'זמין', 'ממתין', 'נמכר', 'נחלף',
    'מוכר', 'מסחר', 'קנייה', 'מסחר/מכירה', 'חדש', 'ישן', 'חי', 'מאמן', 'חלקים',
    'כניסה', 'יציאה', 'הרשמה', 'גלוש', 'צור קשר עם התמיכה', 'פוסט משתמש',
    'עלינו', 'שפה', 'כותרת', 'מחיר', 'מצב', 'סוג מכירה',
    'תיאור', 'העלאת תמונה', 'שלח', 'חיפוש', 'מטבע', 'פרופיל',
    'הגדרות', 'אין הודעות חדשות', 'אין התראות חדשות', 'תרום', 'נוצר',
    'קודם', 'הבא', 'שם פרטי', 'שם משפחה', 'כמות', 'שם התצוגה',
    'מספר טלפון', 'אינסטגרם', 'פייסבוק', 'תמונת פרופיל', 'בטל',
    'ערוך', 'מחק', 'כן', 'לא', 'האם ברצונך למחוק את הפוסט הזה?',
    'נא לשלוח לנו הודעה לכל סיבה', 'מיין לפי', 'עוד',
    'כתובת', 'יחידה', 'עיר', 'מדינה', 'מחוז', 'מיקוד', 'הוסף תמונה', 'תאריך יצירה',
    'הסר', 'מידע בסיסי', 'מידע חברתי', 'שנה תמונת פרופיל', 'מידע על מיקום', 'פוסטים',
    'לא נשמרו כתובות', 'דווח', 'סקירה', 'פגוש את הצוות', 'מפתח רשת', 'מנהל פרויקט',
    'מעצב', 'מפגש עם המשתמשים שלנו', 'משימה', 'צור קשר', 'צור פוסט', 'בבקשה בדוק את',
    'דף צור קשר', 'כדי להציע המלצות, ייעוץ, לתרום לצמיחה של האתר הזה, או לכל סיבה שתרגיש רלוונטית!',
    'משימתנו היא לאפשר לחובבי בליסונג לקנות, למכור ולהחליף את בליסונגיהם. המטרה הסופית היא להפחית את הסיכונים ולהוריד את כל הפוטנציאליים להונאות או לעסקאות רעות. האתר הזה הוא מאמץ רציני המשתמש במשוב מהמשתמשים כדי לשדרג תדיר.',
    'כדי לגשת לכל המובנים של האתר, נא להתחבר או להירשם. לאחר ההתחברות, תהליך ליצירת פוסטים ולכתיבת ביקורות על חשבונות אחרים.',
    'אנחנו רוצים להודות לך על שימושך באתר הזה ומקווים שאתה נהנה ממנו בצורה פעילה, וגם מוצא עסקאות בקלות. בכל מקרה, אנחנו מקווים שיהיה לך יום נהדר ושתטפל בעצמך היטב.'
];

let ja = [
    'ホーム', '作成', 'お問い合わせ', '紹介', 'フィルター',
    'リセット', '最小', '最大', 'コスト', 'ステータス', 'ブランド', 'タイプ',
    '時間', '刃', '全て', '利用可能', '保留', '販売中', '交換中',
    '売る', '交換する', '購入', '売買/交換', '新しい', '古い', 'ライブ', 'トレーナー', '部品',
    'ログイン', 'ログアウト', 'サインアップ', 'ブラウズ', 'サポートに問い合わせ', 'ユーザーポスト',
    '私たちについて', '言語', 'タイトル', '価格', '状態', '販売タイプ',
    '説明', '画像をアップロード', '送信', '検索', '通貨', 'プロフィール',
    '設定', '新着メッセージはありません', '新着アラートはありません', '寄付', '作成済み',
    '前へ', '次へ', '名', '姓', '金額', '表示名',
    '電話番号', 'Instagram', 'Facebook', 'プロフィール画像', 'キャンセル',
    '編集', '削除', 'はい', 'いいえ', 'この投稿を削除しますか？',
    '何かの理由でメッセージを送信してください', 'ソート', 'もっと',
    '住所', 'ユニット', '市', '国', '州', '郵便番号', '画像を追加', '作成日',
    '削除', '基本情報', 'ソーシャル情報', 'プロフィール画像を変更', '場所情報', '投稿',
    '住所は保存されていません', '報告', 'レビュー', 'チームに会う', 'ウェブ開発者', 'プロジェクトマネージャー',
    'デザイナー', 'ユーザーに会う', '使命', 'お問い合わせ', '投稿を作成', '提案、アドバイス、このウェブサイトの成長に貢献するために訪問してください。',
    '私たちの使命は、バリソングの愛好者が自分のバリソングを購入、販売、取引できるようにすることです。最終的な目標は、関与するリスクを減少させ、悪徳商人や問題のある取引をすべて排除することです。このウェブサイトは、ユーザーフィードバックを活用して常に改善されている継続的な取り組みです。',
    'このウェブサイトのすべての側面にアクセスするには、ログインまたはサインアップしてください。ログインしたら、投稿を作成し、他のユーザーアカウントにレビューを書くことができます。',
    'このウェブサイトをご利用いただき、楽しんでいただけていること、また取引をスムーズに行っていただけることを感謝いたします。いずれにしても、素晴らしい一日をお過ごしいただき、ご自身を大切にしてください。'
];

let ko = [
    '홈', '만들기', '연락하기', '소개', '필터',
    '재설정', '최소', '최대', '비용', '상태', '브랜드', '유형',
    '시간', '칼날', '모두', '사용 가능', '보류 중', '판매 중', '교환 중',
    '판매', '교환', '구매', '판매/교환', '새로운', '이전', '실시간', '트레이너', '부품',
    '로그인', '로그아웃', '가입', '찾아보기', '고객 지원', '사용자 게시물',
    '회사 정보', '언어', '제목', '가격', '상태', '판매 유형',
    '설명', '이미지 업로드', '제출', '검색', '통화', '프로필',
    '설정', '새 메시지 없음', '새 알림 없음', '기부', '생성됨',
    '이전', '다음', '이름', '성', '금액', '표시 이름',
    '전화번호', '인스타그램', '페이스북', '프로필 사진', '취소',
    '편집', '삭제', '예', '아니요', '이 게시물을 삭제하시겠습니까?',
    '모든 이유로 언제든지 메시지를 보내 주십시오', '정렬 기준', '더 보기',
    '주소', '단위', '도시', '국가', '주', '우편 번호', '사진 추가', '작성 날짜',
    '제거', '기본 정보', '소셜 정보', '프로필 사진 변경', '위치 정보', '게시물',
    '저장된 주소가 없습니다', '신고', '리뷰', '팀 만나기', '웹 개발자', '프로젝트 매니저',
    '디자이너', '사용자 만나기', '미션', '연락하기', '게시물 만들기', '제안, 조언, 이 웹사이트의 성장에 기여하려면',
    '우리의 미션은 발리송 애호가가 자신의 발리송을 구매, 판매 및 교환할 수 있도록 하는 것입니다. 궁극적인 목표는 관련된 위험을 줄이고 모든 잠재적인 사기꾼 또는 문제있는 거래를 제거하는 것입니다. 이 웹사이트는 사용자 피드백을 활용하여 지속적으로 개선되는 지속적인 노력입니다.',
    '이 웹사이트의 모든 측면에 액세스하려면 로그인하거나 가입하십시오. 로그인한 후에는 게시물을 작성하고 다른 사람의 계정에 리뷰를 작성할 수 있습니다.',
    '이 웹사이트를 사용해 주셔서 감사합니다. 그리고 편안하게 거래를 찾고 만들 수 있으시길 바랍니다. 어쨌든, 좋은 하루 되시고 건강하세요.'
];

let pl = [
    'Strona główna', 'Utwórz', 'Kontakt', 'O nas', 'Filtruj',
    'Resetuj', 'Minimalny', 'Maksymalny', 'Koszt', 'Status', 'Marka', 'Typ',
    'Czas', 'Ostrze', 'Wszystko', 'Dostępny', 'Oczekujący', 'Sprzedany', 'Wymieniony',
    'Sprzedaj', 'Wymień', 'Kup', 'Sprzedaż/Wymiana', 'Nowy', 'Stary', 'Na żywo', 'Trener', 'Części',
    'Zaloguj', 'Wyloguj', 'Zarejestruj', 'Przeglądaj', 'Skontaktuj się z obsługą', 'Post użytkownika',
    'O nas', 'Język', 'Tytuł', 'Cena', 'Stan', 'Rodzaj sprzedaży',
    'Opis', 'Dodaj zdjęcie', 'Wyślij', 'Szukaj', 'Waluta', 'Profil',
    'Ustawienia', 'Brak nowych wiadomości', 'Brak nowych alertów', 'Podaruj', 'Utworzono',
    'Poprzedni', 'Następny', 'Imię', 'Nazwisko', 'Kwota', 'Nazwa wyświetlana',
    'Numer telefonu', 'Instagram', 'Facebook', 'Zdjęcie profilowe', 'Anuluj',
    'Edytuj', 'Usuń', 'Tak', 'Nie', 'Czy chcesz usunąć ten post?',
    'Nie krępuj się wysłać nam wiadomość z dowolnego powodu', 'Sortuj według', 'Więcej',
    'Adres', 'Jednostka', 'Miasto', 'Kraj', 'Województwo', 'Kod pocztowy', 'Dodaj obraz', 'Data utworzenia',
    'Usuń', 'Podstawowe informacje', 'Informacje społeczne', 'Zmień zdjęcie profilowe', 'Informacje o lokalizacji', 'Posty',
    'Brak zapisanych adresów', 'Zgłoś', 'Recenzja', 'Poznaj zespół', 'Programista webowy', 'Kierownik projektu',
    'Projektant', 'Poznaj naszych użytkowników', 'Misja', 'Kontakt', 'Utwórz post', 'Zapraszamy do odwiedzenia',
    'Strona Kontaktowa', 'w celu złożenia sugestii, porad, wspierania rozwoju tej witryny lub z jakiejkolwiek innej przyczyny, która wyda Ci się odpowiednia!',
    'Nasza misja polega na umożliwieniu entuzjastom balisong kupowania, sprzedawania i wymieniania swoich balisongów. Ostatecznym celem jest zmniejszenie ryzyka i wyeliminowanie wszelkich potencjalnych oszustw lub problematycznych transakcji. Ta witryna to ciągły wysiłek, który wykorzystuje opinie użytkowników do ciągłego doskonalenia.',
    'Aby uzyskać dostęp do wszystkich funkcji tej witryny, zaloguj się lub zarejestruj. Po zalogowaniu będziesz mógł tworzyć posty i pisać recenzje na innych kontach.',
    'Chcielibyśmy podziękować za korzystanie z tej witryny i mamy nadzieję, że aktywnie się nią cieszysz, a także łatwo znajdujesz/realizujesz transakcje. W każdym przypadku życzymy Ci wspaniałego dnia i dbaj o siebie.'
];

let pt = [
    'Início', 'Criar', 'Contato', 'Sobre', 'Filtrar',
    'Redefinir', 'Mínimo', 'Máximo', 'Custo', 'Status', 'Marca', 'Tipo',
    'Tempo', 'Lâmina', 'Todos', 'Disponível', 'Pendente', 'Vendido', 'Trocado',
    'Vender', 'Trocar', 'Comprar', 'Vender/Trocar', 'Novo', 'Antigo', 'Ao Vivo', 'Treinador', 'Peças',
    'Login', 'Logout', 'Inscrever-se', 'Navegar', 'Fale Conosco', 'Post do Usuário',
    'Sobre Nós', 'Idioma', 'Título', 'Preço', 'Condição', 'Tipo de Venda',
    'Descrição', 'Carregar Imagem', 'Enviar', 'Pesquisar', 'Moeda', 'Perfil',
    'Configurações', 'Sem novas mensagens', 'Sem novos alertas', 'Doar', 'Criado',
    'Anterior', 'Próximo', 'Nome', 'Sobrenome', 'Quantidade', 'Nome de Exibição',
    'Número de Telefone', 'Instagram', 'Facebook', 'Foto de Perfil', 'Cancelar',
    'Editar', 'Excluir', 'Sim', 'Não', 'Você deseja excluir esta postagem?',
    'Sinta-se à vontade para nos enviar uma mensagem por qualquer motivo', 'Ordenar Por', 'Mais',
    'Endereço', 'Unidade', 'Cidade', 'País', 'Estado', 'CEP', 'Adicionar Imagem', 'Data de Criação',
    'Remover', 'Informações Básicas', 'Informações Sociais', 'Alterar Foto de Perfil', 'Informações de Localização', 'Postagens',
    'Nenhum endereço salvo', 'Relatar', 'Avaliar', 'Conheça a Equipe', 'Desenvolvedor Web', 'Gerente de Projeto',
    'Designer', 'Conheça Nossos Usuários', 'Missão', 'Contate-nos', 'Criar Postagem', 'Por favor, confira a',
    'Página de Contato', 'para oferecer sugestões, aconselhamento, ajudar a contribuir para o crescimento deste site ou por qualquer motivo que você ache adequado!',
    'Nossa missão é permitir que os entusiastas de balisong comprem, vendam e troquem seus balisongs. O objetivo final é reduzir o risco envolvido e eliminar todas as possíveis fraudes ou transações problemáticas. Este site é um esforço contínuo que utiliza o feedback dos usuários para melhorar constantemente.',
    'Para acessar todos os aspectos deste site, certifique-se de fazer login ou se inscrever. Depois de estar logado, você poderá criar postagens e escrever avaliações nas contas de outras pessoas.',
    'Queremos agradecer por usar este site e esperamos que você o aproveite ativamente, além de encontrar/fazer negócios com facilidade. De qualquer forma, desejamos a você um ótimo dia e cuide-se.'
];

let ru = [
    'Главная', 'Создать', 'Связаться', 'О нас', 'Фильтр',
    'Сброс', 'Минимум', 'Максимум', 'Стоимость', 'Статус', 'Бренд', 'Тип',
    'Время', 'Лезвие', 'Все', 'Доступно', 'В ожидании', 'Продано', 'Обмен',
    'Продать', 'Обменять', 'Купить', 'Продать/Обменять', 'Новый', 'Старый', 'Прямой эфир', 'Тренер', 'Детали',
    'Войти', 'Выйти', 'Регистрация', 'Просмотр', 'Свяжитесь с поддержкой', 'Пост пользователя',
    'О нас', 'Язык', 'Заголовок', 'Цена', 'Состояние', 'Тип продажи',
    'Описание', 'Загрузить изображение', 'Отправить', 'Поиск', 'Валюта', 'Профиль',
    'Настройки', 'Нет новых сообщений', 'Нет новых уведомлений', 'Пожертвовать', 'Создано',
    'Предыдущий', 'Следующий', 'Имя', 'Фамилия', 'Количество', 'Отображаемое имя',
    'Номер телефона', 'Instagram', 'Facebook', 'Фотография профиля', 'Отмена',
    'Редактировать', 'Удалить', 'Да', 'Нет', 'Вы хотите удалить этот пост?',
    'Пожалуйста, не стесняйтесь присылать нам сообщения по любым вопросам', 'Сортировать по', 'Еще',
    'Адрес', 'Единица', 'Город', 'Страна', 'Область', 'Почтовый индекс', 'Добавить изображение', 'Дата создания',
    'Удалить', 'Основная информация', 'Социальная информация', 'Изменить фотографию профиля', 'Информация о местоположении', 'Посты',
    'Сохраненных адресов нет', 'Сообщить', 'Оценить', 'Познакомьтесь с командой', 'Веб-разработчик', 'Менеджер проекта',
    'Дизайнер', 'Познакомьтесь с нашими пользователями', 'Миссия', 'Свяжитесь с нами', 'Создать пост', 'Пожалуйста, посетите',
    'Страницу контактов', 'чтобы предложить свои идеи, дать советы, помочь в развитии этого сайта или по любой другой причине, которую вы считаете уместной!',
    'Наша миссия - позволить любителям балисонгов покупать, продавать и обменивать свои балисонги. Конечная цель - снизить риски и устранить все возможные случаи мошенничества или проблемных сделок. Этот сайт является постоянным усилием, которое использует обратную связь пользователей для постоянного улучшения.',
    'Чтобы получить доступ ко всем функциям этого сайта, убедитесь, что вы вошли в систему или зарегистрировались. После входа вы сможете создавать посты и писать отзывы на аккаунтах других людей.',
    'Мы хотим поблагодарить вас за использование этого сайта и надеемся, что вы активно им пользуетесь, а также находите/создаете сделки с легкостью. В любом случае, желаем вам замечательного дня и заботьтесь о себе.'
];

let tr = [
    'Ana Sayfa', 'Oluştur', 'İletişim', 'Hakkımızda', 'Filtrele',
    'Sıfırla', 'Minimum', 'Maksimum', 'Maliyet', 'Durum', 'Marka', 'Tür',
    'Zaman', 'Bıçak', 'Tümü', 'Mevcut', 'Beklemede', 'Satıldı', 'Takas Edildi',
    'Sat', 'Takas Et', 'Satın Al', 'Sat/Takas Et', 'Yeni', 'Eski', 'Canlı', 'Eğitmen', 'Parçalar',
    'Giriş', 'Çıkış', 'Kaydol', 'Gözat', 'Destek ile İletişim Kur', 'Kullanıcı Gönderisi',
    'Hakkımızda', 'Dil', 'Başlık', 'Fiyat', 'Durum', 'Satış Türü',
    'Açıklama', 'Resim Yükle', 'Gönder', 'Ara', 'Para Birimi', 'Profil',
    'Ayarlar', 'Yeni Mesaj Yok', 'Yeni Uyarı Yok', 'Bağış Yap', 'Oluşturuldu',
    'Önceki', 'Sonraki', 'Ad', 'Soyad', 'Miktar', 'Görünen Ad',
    'Telefon Numarası', 'Instagram', 'Facebook', 'Profil Resmi', 'İptal',
    'Düzenle', 'Sil', 'Evet', 'Hayır', 'Bu gönderiyi silmek istiyor musunuz?',
    'Herhangi bir nedenle bize mesaj göndermekten çekinmeyin', 'Şuna Göre Sırala', 'Daha Fazla',
    'Adres', 'Birim', 'Şehir', 'Ülke', 'Eyalet', 'Posta Kodu', 'Resim Ekle', 'Oluşturulma Tarihi',
    'Kaldır', 'Temel Bilgiler', 'Sosyal Bilgiler', 'Profil Resmini Değiştir', 'Konum Bilgileri', 'Gönderiler',
    'Kayıtlı adres bulunmuyor', 'Bildir', 'Değerlendir', 'Ekiple Tanış', 'Web Geliştirici', 'Proje Yöneticisi',
    'Tasarımcı', 'Kullanıcılarımızla Tanışın', 'Misyon', 'Bize Ulaşın', 'Gönderi Oluştur', 'Lütfen göz atın',
    'İletişim Sayfası', 'önerilerde bulunmak, tavsiye vermek, bu web sitesinin büyümesine katkıda bulunmak veya uygun gördüğünüz herhangi bir nedenle!',
    'Misyonumuz, balisong tutkunlarının balisonglarını satın almasına, satmasına ve takas etmesine olanak tanımaktır. Son amaç, işlemle ilişkilendirilen riski azaltmak ve tüm potansiyel dolandırıcıları veya sorunlu işlemleri ortadan kaldırmaktır. Bu web sitesi, sürekli iyileştirmeler için kullanıcı geri bildirimini kullanan sürekli bir çabadır.',
    'Bu web sitesinin tüm yönlerine erişmek için lütfen giriş yapın veya kaydolun. Giriş yaptıktan sonra diğer insanların hesaplarına gönderi oluşturabilir ve değerlendirmeler yazabilirsiniz.',
    'Bu web sitesini kullanmanız için teşekkür ederiz ve umarız aktif bir şekilde kullanıyor ve işleri kolaylıkla buluyor veya yapıyorsunuzdur. Her durumda harika bir gün dileriz ve kendinize iyi bakın.'
];

let vi = [
    'Trang chủ', 'Tạo', 'Liên hệ', 'Về chúng tôi', 'Lọc',
    'Đặt lại', 'Tối thiểu', 'Tối đa', 'Chi phí', 'Trạng thái', 'Thương hiệu', 'Loại',
    'Thời gian', 'Lưỡi dao', 'Tất cả', 'Có sẵn', 'Chờ xử lý', 'Đã bán', 'Đã trao đổi',
    'Bán', 'Trao đổi', 'Mua', 'Bán/Trao đổi', 'Mới', 'Cũ', 'Trực tiếp', 'Hướng dẫn viên', 'Phụ kiện',
    'Đăng nhập', 'Đăng xuất', 'Đăng ký', 'Duyệt', 'Liên hệ hỗ trợ', 'Bài đăng của người dùng',
    'Về chúng tôi', 'Ngôn ngữ', 'Tiêu đề', 'Giá', 'Tình trạng', 'Loại bán',
    'Mô tả', 'Tải hình ảnh', 'Gửi', 'Tìm kiếm', 'Tiền tệ', 'Hồ sơ',
    'Cài đặt', 'Không có tin nhắn mới', 'Không có thông báo mới', 'Quyên góp', 'Đã tạo',
    'Trước', 'Tiếp theo', 'Tên', 'Họ', 'Số lượng', 'Tên hiển thị',
    'Số điện thoại', 'Instagram', 'Facebook', 'Ảnh hồ sơ', 'Hủy',
    'Chỉnh sửa', 'Xóa', 'Có', 'Không', 'Bạn có muốn xóa bài đăng này không?',
    'Xin đừng ngần ngại gửi cho chúng tôi một tin nhắn về bất kỳ lý do nào', 'Sắp xếp theo', 'Thêm',
    'Địa chỉ', 'Đơn vị', 'Thành phố', 'Quốc gia', 'Bang', 'Mã bưu điện', 'Thêm ảnh', 'Ngày tạo',
    'Xóa', 'Thông tin cơ bản', 'Thông tin xã hội', 'Thay đổi ảnh hồ sơ', 'Thông tin vị trí', 'Bài đăng',
    'Không có địa chỉ đã lưu', 'Báo cáo', 'Đánh giá', 'Gặp gỡ đội ngũ', 'Nhà phát triển web', 'Quản lý dự án',
    'Nhà thiết kế', 'Gặp gỡ người dùng của chúng tôi', 'Sứ mệnh', 'Liên hệ với chúng tôi', 'Tạo bài đăng', 'Vui lòng kiểm tra',
    'Trang Liên hệ', 'để đề xuất, tư vấn, giúp đóng góp cho sự phát triển của trang web này hoặc với bất kỳ lý do nào bạn có thể thấy phù hợp!',
    'Sứ mệnh của chúng tôi là cho phép những người yêu thích balisong mua, bán và trao đổi balisong của họ. Mục tiêu cuối cùng là giảm rủi ro liên quan và loại bỏ tất cả các gian lận tiềm năng hoặc giao dịch problemáticas. Trang web này là một nỗ lực liên tục sử dụng phản hồi của người dùng để cải tiến liên tục.',
    'Để truy cập tất cả các khía cạnh của trang web này, hãy đảm bảo bạn đã đăng nhập hoặc đăng ký. Sau khi đăng nhập, bạn có thể tạo bài đăng và viết đánh giá về tài khoản của người khác.',
    'Chúng tôi muốn cảm ơn bạn đã sử dụng trang web này và hy vọng bạn đang sử dụng nó một cách tích cực, cùng với việc tìm/mở các giao dịch dễ dàng. Dù thế nào, chúng tôi cũng hy vọng bạn có một ngày tốt lành và chăm sóc bản thân mình.'
];

let zh = [
    '首页', '创建', '联系', '关于', '筛选',
    '重置', '最低', '最高', '费用', '状态', '品牌', '类型',
    '时间', '刀片', '全部', '可用', '待处理', '已售', '已交易',
    '出售', '交换', '购买', '出售/交换', '新', '旧', '实时', '教练', '零件',
    '登录', '登出', '注册', '浏览', '联系支持', '用户帖子',
    '关于我们', '语言', '标题', '价格', '状态', '销售类型',
    '描述', '上传图片', '提交', '搜索', '货币', '个人资料',
    '设置', '没有新消息', '没有新提醒', '捐赠', '创建',
    '上一页', '下一页', '名字', '姓氏', '金额', '显示名称',
    '电话号码', 'Instagram', 'Facebook', '个人资料图片', '取消',
    '编辑', '删除', '是', '否', '您是否要删除此帖？',
    '请随时给我们发送消息，无论出于何种原因', '按...排序', '更多',
    '地址', '单元', '城市', '国家', '州', '邮编', '添加图片', '创建日期',
    '删除', '基本信息', '社交信息', '更改个人资料图片', '位置信息', '帖子',
    '没有保存的地址', '举报', '评论', '团队介绍', '网页开发人员', '项目经理',
    '设计师', '认识我们的用户', '使命', '联系我们', '创建帖子', '请查看',
    '联系我们页面', '提供建议、建议，帮助促进此网站的增长，或出于任何您认为合适的原因！',
    '我们的使命是让巴里桑爱好者购买、销售和交换他们的巴里桑。最终目标是降低相关风险，消除一切潜在的欺诈或问题交易。这个网站是一个持续努力，利用用户反馈不断改进。',
    '要访问此网站的所有功能，请确保登录或注册。登录后，您将能够创建帖子并对其他人的帐户撰写评论。',
    '我们要感谢您使用此网站，希望您积极享受并轻松找到/达成交易。无论如何，我们希望您有一个美好的一天，照顾好自己。'
];


let hardCodedWords = ['Artisan Cutlery', 'Atropos', 'B.A Balis', 'Baliplus', 'BalisongFlipping', 'BBarfly', 'Benchmade', 'Biegler', 'Biteblades', 'BlackBalisong', 'BladeRunner Systems', 'Boker', 'Bradley', 'Brous Blades', 'Cantogroup', 'Cold Steel', 'DC_Bladeworks', 'Dogbite Knives', 'ELB', 'EOS', 'EPS Knives', 'Fellowship Blades', 'Fiore', 'FLS Balisong', 'Flytanium', 'Frankenforgeblade', 'Geofrey Dumas', 'Glider Co', 'GP_Blades', 'Hansen Metals', 'HazeTech', 'Heibel', 'Henninger Designs', 'Hinderer', 'HOM Designs', 'Hypex', 'Jimpy Designs', 'JK Design', 'Kershaw', 'Lanier Knives', 'LDY_Balisongs', 'Les Voorhies', 'Log Design', 'M3K', 'MachineWise', 'Mantis Bladeworks', 'Mantis BladeXchange', 'Marcolo', 'Maxace', 'Microtech', 'Misc/Other', 'Nabilus', 'NRB', 'Olympus Industries', 'OSP', 'Pena knives', 'ProTech Knives', 'Ryworx', 'Spyderco', 'Squid Industries', 'Stitchedsteel', 'Svix Co', 'Terrain 365', 'Theone', 'WB Concept', 'Zippy balisong'];
hardCodedWords.push(...[1,2,3,4,5,6,7,8,9,10,'1+','2+','3+','4+','5+','6+','7+','8+','9+']);

const t =(() => {
    let languages = [ar, de, en, es, fr, hi, id, is, it, iw, ja, ko, pl, pt, ru, tr, vi, zh];
    let result = ""
    for (let language of languages) {
        language = [...language, ...hardCodedWords]
        language = language.reduce((acc, word, index) => {
            acc[en[index]] = word;
            return acc;
        }, {})
        result += JSON.stringify(language)+';';
    }

    console.log(result);
})()
