
let ar = [
    'الصفحة الرئيسية', 'إنشاء', 'اتصال', 'حول', 'تصفية',
    'إعادة تعيين', 'الحد الأدنى', 'الحد الأقصى', 'التكلفة', 'الحالة', 'العلامة التجارية', 'النوع',
    'الوقت', 'الشفرة', 'الكل', 'متاح', 'معلق', 'تم البيع', 'تم التداول',
    'بيع', 'تداول', 'شراء', 'بيع/تداول', 'جديد', 'قديم', 'مباشر', 'مدرب', 'قطع',
    'تسجيل الدخول', 'تسجيل الخروج', 'التسجيل', 'تصفح', 'الاتصال بالدعم', 'مشاركة المستخدم',
    'معلومات عنا', 'اللغة', 'العنوان', 'السعر', 'الحالة', 'نوع البيع',
    'الوصف', 'رفع صورة', 'إرسال', 'بحث', 'العملة', 'الملف الشخصي',
    'الإعدادات', 'لا توجد رسائل جديدة', 'لا توجد تنبيهات جديدة', 'التبرع', 'تم الإنشاء',
    'السابق', 'التالي', 'الاسم الأول', 'اسم العائلة', 'المبلغ', 'اسم العرض',
    'رقم الهاتف', 'إنستجرام', 'فيسبوك', 'صورة الملف الشخصي', 'إلغاء',
    'تعديل', 'حذف', 'نعم', 'لا', 'هل تريد حذف هذا المنشور؟',
    'لا تتردد في إرسال لنا رسالة لأي سبب', 'ترتيب حسب', 'المزيد',
    'العنوان', 'الوحدة', 'المدينة', 'البلد', 'الولاية', 'الرمز البريدي', 'إضافة صورة', 'تاريخ الإنشاء',
    'إزالة', 'معلومات أساسية', 'معلومات اجتماعية', 'تغيير صورة الملف الشخصي', 'معلومات الموقع', 'المشاركات',
    'لم يتم حفظ أي عنوان', 'تقرير', 'مراجعة', 'التعرف على الفريق', 'مطور الويب', 'مدير المشروع',
    'مصمم', 'التعرف على مستخدمينا', 'المهمة', 'اتصل بنا', 'إنشاء منشور', 'الرجاء زيارة',
    'صفحة اتصل بنا', 'لتقديم اقتراحات أو نصائح أو المساهمة في نمو هذا الموقع، أو لأي سبب آخر قد تراه مناسبًا!',
    'مهمتنا هي تمكين عشاق الباليسونج من شراء وبيع وتبادل باليسونجاتهم. الهدف النهائي هو تقليل المخاطر المرتبطة والقضاء على جميع المحتملين للنصب أو المعاملات المحتملة. هذا الموقع هو جهد مستمر يستفيد من ردود الفعل من المستخدمين لتحسينه باستمرار.',
    'للوصول إلى جميع جوانب هذا الموقع، تأكد من تسجيل الدخول أو التسجيل. بمجرد تسجيل الدخول، ستتمكن من إنشاء منشورات وكتابة مراجعات حول حسابات الأشخاص الآخرين.',
    'نود أن نشكرك على استخدام هذا الموقع ونأمل أنك تستمتع به بنشاط، بالإضافة إلى العثور على صفقات أو إبرامها بسهولة. على أي حال، نأمل أن تمتلك يومًا رائعًا وتعتني بنفسك.',
    'مبيعات الباليسونج', 'الرجاء تسجيل الدخول للمتابعة', 'الرجاء التسجيل للمتابعة', 'البريد الإلكتروني', 'كلمة المرور', 'المتابعة', 'من خلال التسجيل، أوافق على',
    'شروط الخدمة', 'وأقر بـ', 'سياسة الخصوصية', 'أو الاستمرار مع', 'إنشاء حساب', 'هل لديك حساب بالفعل؟ قم بتسجيل الدخول'
];

let de = [
    'Startseite', 'Erstellen', 'Kontakt', 'Über', 'Filtern',
    'Zurücksetzen', 'Mindestens', 'Höchstens', 'Kosten', 'Status', 'Marke', 'Typ',
    'Zeit', 'Klinge', 'Alle', 'Verfügbar', 'Ausstehend', 'Verkauft', 'Getauscht',
    'Verkaufen', 'Tauschen', 'Kaufen', 'Verkaufen/Tauschen', 'Neu', 'Alt', 'Live', 'Trainer', 'Teile',
    'Anmelden', 'Abmelden', 'Registrieren', 'Durchsuchen', 'Kontaktieren Sie den Support', 'Benutzerbeitrag',
    'Über uns', 'Sprache', 'Titel', 'Preis', 'Zustand', 'Verkaufstyp',
    'Beschreibung', 'Bild hochladen', 'Senden', 'Suchen', 'Währung', 'Profil',
    'Einstellungen', 'Keine neuen Nachrichten', 'Keine neuen Benachrichtigungen', 'Spenden', 'Erstellt',
    'Vorherige', 'Nächste', 'Vorname', 'Nachname', 'Betrag', 'Anzeigename',
    'Telefonnummer', 'Instagram', 'Facebook', 'Profilbild', 'Abbrechen',
    'Bearbeiten', 'Löschen', 'Ja', 'Nein', 'Möchten Sie diesen Beitrag löschen?',
    'Bitte zögern Sie nicht, uns aus irgendeinem Grund eine Nachricht zu senden', 'Sortieren nach', 'Mehr',
    'Adresse', 'Einheit', 'Stadt', 'Land', 'Bundesland', 'Postleitzahl', 'Bild hinzufügen', 'Erstellungsdatum',
    'Entfernen', 'Grundlegende Informationen', 'Soziale Informationen', 'Profilbild ändern', 'Standortinformationen', 'Beiträge',
    'Keine Adresse gespeichert', 'Melden', 'Bewertung', 'Team treffen', 'Webentwickler', 'Projektmanager',
    'Designer', 'Unsere Benutzer treffen', 'Mission', 'Kontaktiere uns', 'Beitrag erstellen', 'Bitte schauen Sie sich die',
    'Kontaktieren Sie uns Seite', 'um Vorschläge zu machen, beraten Sie, tragen Sie zum Wachstum dieser Website bei oder aus irgendeinem Grund, den Sie für angemessen halten!',
    'Unsere Mission ist es, Balisong-Enthusiasten zu ermöglichen, ihre Balisongs zu kaufen, zu verkaufen und zu tauschen. Das ultimative Ziel besteht darin, das damit verbundene Risiko zu reduzieren und alle potenziellen Betrüger oder potenziell problematischen Transaktionen auszuschließen. Diese Website ist eine laufende Bemühung, die das Feedback der Benutzer nutzt, um sich kontinuierlich zu verbessern.',
    'Um auf alle Aspekte dieser Website zugreifen zu können, stellen Sie sicher, dass Sie sich anmelden oder registrieren. Sobald Sie angemeldet sind, können Sie Beiträge erstellen und Bewertungen zu den Konten anderer Personen schreiben.',
    'Wir möchten uns bei Ihnen für die Nutzung dieser Website bedanken und hoffen, dass Sie sie aktiv genießen und leicht Geschäfte abschließen oder machen. Auf jeden Fall hoffen wir, dass Sie einen wunderbaren Tag haben und sich gut um sich selbst kümmern.',
    'Balisong-Verkäufe', 'Bitte melden Sie sich an, um fortzufahren', 'Bitte registrieren Sie sich, um fortzufahren', 'E-Mail', 'Passwort', 'Fortsetzen', 'Durch die Anmeldung akzeptiere ich die',
    'Nutzungsbedingungen', 'und erkenne die', 'Datenschutzrichtlinie', 'Oder weiter mit', 'Ein Konto erstellen', 'Haben Sie bereits ein Konto? Einloggen'
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
    'We want to thank you for using this website and hope you are actively enjoying it, along with finding/making deals with ease. Anyways, we hope you have a wonderful day and take care.',
    'Balisong Sales', 'Please Login to Continue', 'Please Sign up to Continue', 'Email', 'Password', 'Contine', 'By signing up, I accept the', 
    'Terms of Service', 'and acknowledge the', 'Privacy Policy', 'Or Continue with', 'Create an account', 'Already have an account? Log in'
];

let es = [
    'Inicio', 'Crear', 'Contacto', 'Acerca de', 'Filtrar',
    'Restablecer', 'Mínimo', 'Máximo', 'Costo', 'Estado', 'Marca', 'Tipo',
    'Tiempo', 'Cuchilla', 'Todo', 'Disponible', 'Pendiente', 'Vendido', 'Intercambiado',
    'Vender', 'Intercambiar', 'Comprar', 'Vender/Intercambiar', 'Nuevo', 'Antiguo', 'En vivo', 'Entrenador', 'Piezas',
    'Iniciar sesión', 'Cerrar sesión', 'Registrarse', 'Explorar', 'Contactar soporte', 'Publicación de usuario',
    'Acerca de nosotros', 'Idioma', 'Título', 'Precio', 'Condición', 'Tipo de venta',
    'Descripción', 'Subir imagen', 'Enviar', 'Buscar', 'Moneda', 'Perfil',
    'Configuraciones', 'No hay nuevos mensajes', 'No hay nuevas alertas', 'Donar', 'Creado',
    'Anterior', 'Siguiente', 'Nombre', 'Apellido', 'Cantidad', 'Nombre de usuario',
    'Número de teléfono', 'Instagram', 'Facebook', 'Imagen de perfil', 'Cancelar',
    'Editar', 'Eliminar', 'Sí', 'No', '¿Deseas eliminar esta publicación?',
    'No dudes en enviarnos un mensaje por cualquier motivo', 'Ordenar por', 'Más',
    'Dirección', 'Unidad', 'Ciudad', 'País', 'Estado', 'Código postal', 'Agregar imagen', 'Fecha de creación',
    'Eliminar', 'Información básica', 'Información social', 'Cambiar imagen de perfil', 'Información de ubicación', 'Publicaciones',
    'No se ha guardado ninguna dirección', 'Reportar', 'Revisar', 'Conoce al equipo', 'Desarrollador web', 'Gerente de proyecto',
    'Diseñador', 'Conoce a nuestros usuarios', 'Misión', 'Contáctanos', 'Crear publicación', 'Por favor, visita la',
    'Página de contacto', 'para ofrecer sugerencias, consejos, contribuir al crecimiento de este sitio web o por cualquier motivo que consideres adecuado.',
    'Nuestra misión es permitir a los entusiastas de los balisong comprar, vender e intercambiar sus balisongs. El objetivo final es reducir el riesgo y eliminar a posibles estafadores o transacciones problemáticas. Este sitio web es un esfuerzo continuo que utiliza la retroalimentación de los usuarios para mejorar constantemente.',
    'Para acceder a todos los aspectos de este sitio web, asegúrate de iniciar sesión o registrarte. Una vez que estés conectado, podrás crear publicaciones y escribir reseñas en las cuentas de otras personas.',
    'Queremos agradecerte por usar este sitio web y esperamos que lo disfrutes activamente, además de encontrar y realizar acuerdos con facilidad. De todos modos, esperamos que tengas un maravilloso día y cuida de ti mismo.',
    'Ventas de Balisong', 'Inicia sesión para continuar', 'Regístrate para continuar', 'Correo electrónico', 'Contraseña', 'Continuar', 'Al registrarte, aceptas los',
    'Términos de servicio', 'y reconoces la', 'Política de privacidad', 'O Continuar con', 'Crear una cuenta', '¿Ya tienes una cuenta? Iniciar sesión'
];

let fr = [
    'Accueil', 'Créer', 'Contact', 'À propos', 'Filtrer',
    'Réinitialiser', 'Minimum', 'Maximum', 'Coût', 'Statut', 'Marque', 'Type',
    'Temps', 'Lame', 'Tout', 'Disponible', 'En attente', 'Vendu', 'Échangé',
    'Vente', 'Échange', 'Acheter', 'Vente/Échange', 'Neuf', 'Ancien', 'En direct', 'Entraîneur', 'Pièces',
    'Connexion', 'Déconnexion', 'Inscription', 'Parcourir', 'Contacter le support', 'Publication de l\'utilisateur',
    'À propos de nous', 'Langue', 'Titre', 'Prix', 'État', 'Type de vente',
    'Description', 'Télécharger une image', 'Soumettre', 'Rechercher', 'Devise', 'Profil',
    'Paramètres', 'Aucun nouveau message', 'Aucune nouvelle alerte', 'Faire un don', 'Créé',
    'Précédent', 'Suivant', 'Prénom', 'Nom de famille', 'Montant', 'Nom d\'utilisateur',
    'Numéro de téléphone', 'Instagram', 'Facebook', 'Photo de profil', 'Annuler',
    'Éditer', 'Supprimer', 'Oui', 'Non', 'Voulez-vous supprimer cette publication ?',
    'N\'hésitez pas à nous envoyer un message pour quelque raison que ce soit', 'Trier par', 'Plus',
    'Adresse', 'Unité', 'Ville', 'Pays', 'État', 'Code postal', 'Ajouter une image', 'Date de création',
    'Supprimer', 'Informations de base', 'Informations sociales', 'Changer la photo de profil', 'Informations de localisation', 'Publications',
    'Aucune adresse n\'est enregistrée', 'Signaler', 'Avis', 'Rencontrer l\'équipe', 'Développeur Web', 'Chef de projet',
    'Concepteur', 'Rencontrez nos utilisateurs', 'Mission', 'Contactez-nous', 'Créer une publication', 'Veuillez consulter la',
    'Page de contact', 'pour proposer des suggestions, des conseils, contribuer à la croissance de ce site Web ou pour toute autre raison que vous jugerez appropriée !',
    'Notre mission est de permettre aux passionnés du balisong d\'acheter, de vendre et d\'échanger leurs balisongs. L\'objectif ultime est de réduire les risques et d\'éliminer les escrocs potentiels ou les transactions potentiellement problématiques. Ce site Web est un effort continu qui utilise les commentaires des utilisateurs pour s\'améliorer en permanence.',
    'Pour accéder à tous les aspects de ce site Web, assurez-vous de vous connecter ou de vous inscrire. Une fois connecté, vous pourrez créer des publications et écrire des avis sur les comptes des autres utilisateurs.',
    'Nous tenons à vous remercier d\'utiliser ce site Web et nous espérons que vous l\'appréciez pleinement, en plus de trouver ou de conclure des accords facilement. Quoi qu\'il en soit, nous espérons que vous passerez une merveilleuse journée et prendrez soin de vous.',
    'Ventes de Balisong', 'Veuillez vous connecter pour continuer', 'Veuillez vous inscrire pour continuer', 'E-mail', 'Mot de passe', 'Continuer', 'En vous inscrivant, j\'accepte les',
    'Conditions de service', 'et reconnais la', 'Politique de confidentialité', 'Ou continuer avec', 'Créer un compte', 'Vous avez déjà un compte ? Connexion'
];

let hi = [
    'होम', 'सर्वसृजना', 'संपर्क', 'के बारे में', 'फ़िल्टर',
    'रीसेट', 'न्यूनतम', 'अधिकतम', 'लागत', 'स्थिति', 'ब्रांड', 'प्रकार',
    'समय', 'ब्लेड', 'सभी', 'उपलब्ध', 'लंबित', 'बेचा गया', 'विनिमित',
    'बेचना', 'विनिमित', 'खरीदना', 'बेचना/विनिमित', 'नया', 'पुराना', 'लाइव', 'प्रशिक्षक', 'किस्म',
    'लॉग इन', 'लॉग आउट', 'साइन अप', 'ब्राउज़ करें', 'समर्थन संपर्क', 'उपयोगकर्ता पोस्ट',
    'हमारे बारे में', 'भाषा', 'शीर्षक', 'मूल्य', 'स्थिति', 'बेचने का प्रकार',
    'विवरण', 'छवि अपलोड करें', 'प्रस्तुत करें', 'खोजें', 'मुद्रा', 'प्रोफ़ाइल',
    'सेटिंग्स', 'कोई नई संदेश नहीं', 'कोई नई चेतावनियाँ नहीं', 'दान करें', 'निर्मित',
    'पिछला', 'अगला', 'पहला नाम', 'अंतिम नाम', 'राशि', 'प्रदर्शन नाम',
    'फ़ोन नंबर', 'इंस्टाग्राम', 'फेसबुक', 'प्रोफ़ाइल चित्र', 'रद्द करें',
    'संपादित करें', 'मिटा दें', 'हां', 'नहीं', 'क्या आप इस पोस्ट को हटाना चाहते हैं?',
    'कृपया किसी भी कारण से हमें संदेश भेजें', 'क्रमबद्ध करें', 'अधिक',
    'पता', 'इकाई', 'शहर', 'देश', 'राज्य', 'पिनकोड', 'चित्र जोड़ें', 'तिथि बनाई गई',
    'हटाएं', 'मूल जानकारी', 'सामाजिक जानकारी', 'प्रोफ़ाइल चित्र बदलें', 'स्थानिक जानकारी', 'पोस्ट',
    'कोई पता सहेजा नहीं गया', 'रिपोर्ट', 'समीक्षा', 'टीम से मिलें', 'वेब डेवलपर', 'प्रोजेक्ट प्रबंधक',
    'डिज़ाइनर', 'हमारे उपयोगकर्ता से मिलें', 'मिशन', 'हमसे संपर्क करें', 'पोस्ट बनाएं', 'कृपया',
    'हमारे संपर्क पृष्ठ की जाँच करें', 'सुझाव देने, सलाह देने, इस वेबसाइट की वृद्धि में योगदान करने, या आपके द्वारा उचित माने गए किसी भी कारण के लिए!',
    'हमारा मिशन है कि बालिसोंग उत्साहियों को उनके बालिसोंग को खरीदने, बेचने और विनिमय करने की अनुमति दें। आखिरकार का लक्ष्य खतरा को कम करना है और संभावित धोखाधड़ी या संभावित गंदा लेन-देन को हटाना है। यह वेबसाइट एक लगातार प्रयास है जो उपयोगकर्ता प्रतिक्रिया का उपयोग करके निरंतर सुधार करने के लिए होता है।',
    'इस वेबसाइट के सभी पहलुओं तक पहुंचने के लिए कृपया सुनिश्चित करें कि आप लॉग इन करें या साइन अप करें। एक बार जब आप लॉग इन करें, तो आप पोस्ट बना सकेंगे और अन्य लोगों के खातों पर समीक्षा लिख सकेंगे।',
    'हम आपका धन्यवाद करते हैं कि आप इस वेबसाइट का उपयोग कर रहे हैं और आप इसका आनंद ले रहे हैं, साथ ही आसानी से डील खोजने/करने में सहायता मिल रही है। बिना किसी कठिनाइयों के हम आपके पास एक अद्भुत दिन की कामना करते हैं और देखभाल करते हैं।',
    'बालिसोंग बिक्री', 'कृपया जारी रखने के लिए लॉगिन करें', 'कृपया जारी रखने के लिए साइन अप करें', 'ईमेल', 'पासवर्ड', 'जारी रखें', 'साइन अप करके, मैं स्वीकार करता हूँ', 'सेवा की शर्तें', 'और स्वीकार करता हूँ', 'गोपनीयता नीति', 'या जारी रखें', 'एक खाता बनाएँ', 'क्या आपके पास पहले से ही खाता है? लॉग इन करें'
];

let id = [
    'Beranda', 'Buat', 'Kontak', 'Tentang', 'Filter',
    'Reset', 'Minimum', 'Maksimum', 'Biaya', 'Status', 'Merek', 'Tipe',
    'Waktu', 'Pisau', 'Semua', 'Tersedia', 'Menunggu', 'Terjual', 'Ditukar',
    'Jual', 'Tukar', 'Beli', 'Jual/Tukar', 'Baru', 'Lama', 'Langsung', 'Pelatih', 'Bagian',
    'Masuk', 'Keluar', 'Daftar', 'Telusuri', 'Hubungi Dukungan', 'Pos Pengguna',
    'Tentang Kami', 'Bahasa', 'Judul', 'Harga', 'Kondisi', 'Jenis Penjualan',
    'Deskripsi', 'Unggah Gambar', 'Kirim', 'Cari', 'Mata Uang', 'Profil',
    'Pengaturan', 'Tidak ada pesan', 'Tidak ada peringatan baru', 'Donasi', 'Dibuat',
    'Sebelumnya', 'Berikutnya', 'Nama Depan', 'Nama Belakang', 'Jumlah', 'Nama Tampilan',
    'Nomor Telepon', 'Instagram', 'Facebook', 'Foto Profil', 'Batal',
    'Edit', 'Hapus', 'Ya', 'Tidak', 'Apakah Anda ingin menghapus kiriman ini?',
    'Jangan ragu untuk mengirimkan pesan kepada kami untuk alasan apa pun', 'Urutkan Berdasarkan', 'Lebih Banyak',
    'Alamat', 'Unit', 'Kota', 'Negara', 'Negara Bagian', 'Kode Pos', 'Tambahkan Gambar', 'Tanggal Dibuat',
    'Hapus', 'Info Dasar', 'Info Sosial', 'Ubah Foto Profil', 'Info Lokasi', 'Kiriman',
    'Tidak ada alamat yang disimpan', 'Laporkan', 'Ulasan', 'Bertemu dengan Tim', 'Pengembang Web', 'Manajer Proyek',
    'Perancang', 'Bertemu dengan Pengguna Kami', 'Misi', 'Hubungi Kami', 'Buat Kiriman', 'Silakan cek halaman',
    'Hubungi Kami', 'untuk menawarkan saran, memberi nasihat, membantu berkontribusi pada pertumbuhan situs web ini, atau untuk alasan apa pun yang Anda lihat sesuai!',
    'Misi kami adalah memungkinkan para penggemar balisong untuk membeli, menjual, dan menukar balisongs mereka. Tujuan utama adalah mengurangi risiko yang terlibat dan menghilangkan semua potensi penipu atau transaksi yang tidak menguntungkan. Situs web ini adalah upaya berkelanjutan yang memanfaatkan umpan balik pengguna untuk terus meningkatkan.',
    'Untuk mengakses semua aspek situs web ini, pastikan untuk masuk atau mendaftar. Setelah Anda masuk, Anda akan dapat membuat kiriman dan menulis ulasan di akun orang lain.',
    'Kami ingin berterima kasih kepada Anda atas penggunaan situs web ini dan berharap Anda menikmatinya dengan aktif, sambil menemukan/membuat kesepakatan dengan mudah. Bagaimanapun juga, kami berharap Anda memiliki hari yang indah dan jaga diri Anda.',
    'Penjualan Balisong', 'Silakan Masuk untuk Melanjutkan', 'Silakan Daftar untuk Melanjutkan', 'Surel', 'Kata Sandi', 'Lanjutkan', 'Dengan mendaftar, saya menerima', 'Persyaratan Layanan', 'dan mengakui', 'Kebijakan Privasi', 'Atau Lanjutkan dengan', 'Buat akun', 'Sudah memiliki akun? Masuk'
];

let is = [
    'Heim', 'Búa til', 'Hafðu samband', 'Um', 'Sía',
    'Endurræsa', 'Lágmark', 'Hámark', 'Kostnaður', 'Staða', 'Brandur', 'Tegund',
    'Tími', 'Mælir', 'Allt', 'Til í boði', 'Bíður', 'Seldi', 'Skipti',
    'Sæki', 'Skipti', 'Kaupa', 'Sæki/Skipti', 'Nýtt', 'Gammalt', 'Beint', 'Þjálfari', 'Hlutar',
    'Innskrá', 'Útskrá', 'Skráning', 'Leita', 'Hafa samband við stuðning', 'Notendapóstur',
    'Um okkur', 'Tungumál', 'Titill', 'Verð', 'Ástand', 'Sölu tegund',
    'Lýsing', 'Senda mynd', 'Senda', 'Leita', 'Gjaldmiðill', 'Profil',
    'Stillingar', 'Engar nýjar skilaboð', 'Engar nýjar viðvörunar', 'Gefa', 'Búið til',
    'Fyrri', 'Næsti', 'Fornafn', 'Eftirnafn', 'Upphæð', 'Birta nafn',
    'Símanúmer', 'Instagram', 'Facebook', 'Prófíll mynd', 'Hætta við',
    'Breyta', 'Eyða', 'Já', 'Nei', 'Viltu eyða þessari færslu?',
    'Ekki hika við að senda okkur skilaboð vegna hvaða ástæðu sem er', 'Raða eftir', 'Meira',
    'Heimilisfang', 'Eining', 'Borg', 'Land', 'Hérað', 'Póstnúmer', 'Bæta við mynd', 'Búið til dagsetning',
    'Fjarlægja', 'Grunnupplýsingar', 'Félagsleg upplýsingar', 'Breyta prófíll mynd', 'Staðsetning upplýsingar', 'Færslur',
    'Engin heimilisfang vistuð', 'Tilkynna', 'Gagnrýni', 'Mættu liðinu', 'Vefþróunarmaður', 'Verkefnastjóri',
    'Hönnuður', 'Mættu okkar notendum', 'Misión', 'Hafa samband', 'Búa til færslu', 'Vinsamlegast skoðið',
    'Hafðu samband síðuna okkar', 'til að leggja til ráða, gefa ráðgjöf, hjálpa að auka vöxt vefsíðunnar eða fyrir hvaða ástæðu sem þú munt sjá fit!',
    'Misión okkar er að gera það kleift fyrir balisong-unnendum að kaupa, selja og skipta um balisong þeirra. Markmiðið er að draga úr því áhættu sem fylgir og koma í veg fyrir allar hugsanlegar svindlsvæðingar eða skakkir viðskipti. Þessi vefsíða er stöðugt verkefni sem byggir á skoðunum notenda til að hafa stöðugt áfram meðfram.',
    'Til að komast í alla þætti þessa vefsíðu, vinsamlegast gangið úr eða skráðu ykkur inn. Þegar þú ert skráður inn, þá getur þú búið til færslur og skrifað umsagnir á öðrum notendur.',
    'Við viljum þakka þér fyrir að nota þessa vefsíðu og vonumst til að þú sért að njóta hennar vel og að þú finnir þér kaup eða gert þau með léttleika. Áframhaldandi gleði og gæti í þínu ferðalagi. ',
    'Balisong Sala', 'Vinsamlegast skráðu þig inn til að halda áfram', 'Vinsamlegast skráðu þig inn til að halda áfram', 'Netfang', 'Lykilorð', 'Halda áfram', 'Með því að skrá þig samþykkir þú', 'þáttöku skilmálana', 'og þekkir', 'persónuverndarstefnu', 'Eða halda áfram með', 'Búa til aðgang', 'Hefur þú þegar aðgang? Skráðu þig inn'
];

let it = [
    'Home', 'Crea', 'Contatta', 'Chi siamo', 'Filtra',
    'Resetta', 'Minimo', 'Massimo', 'Costo', 'Stato', 'Marca', 'Tipo',
    'Tempo', 'Lama', 'Tutto', 'Disponibile', 'In attesa', 'Venduto', 'Scambiato',
    'Vendi', 'Scambia', 'Acquista', 'Vendi/Scambia', 'Nuovo', 'Vecchio', 'Live', 'Allenatore', 'Parti',
    'Accedi', 'Esci', 'Iscriviti', 'Sfoglia', 'Contatta il supporto', 'Post dell\'utente',
    'Chi siamo', 'Lingua', 'Titolo', 'Prezzo', 'Condizione', 'Tipo di vendita',
    'Descrizione', 'Carica immagine', 'Invia', 'Cerca', 'Valuta', 'Profilo',
    'Impostazioni', 'Nessun nuovo messaggio', 'Nessun nuovo avviso', 'Dona', 'Creato',
    'Precedente', 'Successivo', 'Nome', 'Cognome', 'Importo', 'Nome utente',
    'Numero di telefono', 'Instagram', 'Facebook', 'Immagine del profilo', 'Annulla',
    'Modifica', 'Elimina', 'Sì', 'No', 'Vuoi eliminare questo post?',
    'Non esitare a inviarci un messaggio per qualsiasi motivo', 'Ordina per', 'Altro',
    'Indirizzo', 'Unità', 'Città', 'Paese', 'Stato', 'CAP', 'Aggiungi immagine', 'Data di creazione',
    'Rimuovi', 'Informazioni di base', 'Informazioni sociali', 'Cambia immagine del profilo', 'Informazioni sulla posizione', 'Post',
    'Nessun indirizzo salvato', 'Segnala', 'Recensione', 'Incontra il team', 'Sviluppatore web', 'Project manager',
    'Designer', 'Incontra i nostri utenti', 'Missione', 'Contattaci', 'Crea un post', 'Per favore, controlla la',
    'pagina Contattaci', 'per offrire suggerimenti, consigli, contribuire alla crescita di questo sito web o per qualsiasi motivo tu possa vedere opportuno!',
    'La nostra missione è quella di consentire agli appassionati di balisong di comprare, vendere e scambiare le loro balisong. L\'obiettivo finale è ridurre il rischio coinvolto e eliminare tutte le possibili truffe o transazioni negative. Questo sito web è uno sforzo continuo che sfrutta il feedback degli utenti per migliorare costantemente.',
    'Per accedere a tutti gli aspetti di questo sito web, assicurati di accedere o registrarti. Una volta effettuato l\'accesso, potrai creare post e scrivere recensioni sugli account degli altri.',
    'Vogliamo ringraziarti per l\'uso di questo sito web e speriamo che tu lo stia apprezzando attivamente, insieme a trovare/effettuare accordi con facilità. In ogni caso, speriamo che tu abbia una splendida giornata e prenditi cura di te.',
    'Vendita di balisong', 'Effettua l\'accesso per continuare', 'Iscriviti per continuare', 'Email', 'Password', 'Continua', 'Iscrivendoti, accetti le', 'Condizioni di servizio', 'e riconosci la', 'Informativa sulla privacy', 'O Continua con', 'Crea un account', 'Hai già un account? Accedi'
];

let iw = [
    'דף הבית', 'צור', 'צור קשר', 'אודות', 'סנן',
    'איפוס', 'מינימום', 'מקסימום', 'עלות', 'סטטוס', 'מותג', 'סוג',
    'זמן', 'להבה', 'הכל', 'זמין', 'ממתין', 'נמכר', 'נחלף',
    'מכירה', 'החלפה', 'קנייה', 'מכירה/החלפה', 'חדש', 'ישן', 'פעיל', 'מאמן', 'חלקים',
    'התחברות', 'התנתקות', 'הרשמה', 'עיון', 'תמיכה טכנית', 'פוסט משתמש',
    'אודותינו', 'שפה', 'כותרת', 'מחיר', 'מצב', 'סוג מכירה',
    'תיאור', 'העלה תמונה', 'שלח', 'חיפוש', 'מטבע', 'פרופיל',
    'הגדרות', 'אין הודעות חדשות', 'אין התראות חדשות', 'תרומה', 'נוצר',
    'קודם', 'הבא', 'שם פרטי', 'שם משפחה', 'סכום', 'שם הצגה',
    'מספר טלפון', 'אינסטגרם', 'פייסבוק', 'תמונת פרופיל', 'ביטול',
    'עריכה', 'מחק', 'כן', 'לא', 'האם ברצונך למחוק פוסט זה?',
    'אנא אל תהסס לשלוח לנו הודעה לכל סיבה', 'מיין לפי', 'יותר',
    'כתובת', 'יחידה', 'עיר', 'מדינה', 'מחוז', 'מיקוד', 'הוסף תמונה', 'תאריך יצירה',
    'הסר', 'מידע בסיסי', 'מידע חברתי', 'שנה תמונת פרופיל', 'מידע מיקום', 'פוסטים',
    'אין כתובת מורשית', 'דווח', 'ביקורת', 'פגוש את הצוות', 'מפתח אתרים', 'מנהל פרויקט',
    'מעצב', 'פגוש את המשתמשים שלנו', 'משימה', 'צור קשר', 'צור פוסט', 'אנא בדוק את',
    'עמוד הצור קשר שלנו', 'להציע המלצות, לייעוץ, לתמוך בצמיחת האתר הזה, או לכל סיבה אחרת שתראה מתאימה!',
    'משימתנו היא לאפשר לחובבי בליסונג לקנות, למכור ולהחליף את הבליסונג שלהם. המטרה הסופית היא להפחית את הסיכונים ולהסיר את כל האפשרויות להונאה או עסקאות מרוקעות. האתר הזה הוא מאמץ מתמיד המשתמש במשוב מהמשתמשים כדי לשפר באופן תדיר.',
    'כדי לגשת לכל הנושאים באתר הזה, אנא התחבר או הרשם. לאחר התחברותך, תוכל ליצור פוסטים ולכתוב ביקורות על חשבונות אחרים.',
    'אנחנו רוצים להודות לך על השימוש באתר הזה ומקווים שאתה מנצל אותו באופן פעיל, וגם מוצא עסקאות או עושה אותם בקלות. בכל מקרה, מקווים שיהיה לך יום נהדר ותהיה בריא!',
    'מכירת בליסונג', 'אנא התחבר כדי להמשיך', 'אנא הרשם כדי להמשיך', 'דוא"ל', 'סיסמה', 'המשך', 'על ידי הרשמה, אני מסכים ל', 'תנאי השימוש', 'ומכיר ב', 'מדיניות הפרטיות', 'או המשך עם', 'צור חשבון', 'יש לך כבר חשבון? התחבר'
];

let ja = [
    'ホーム', '作成', 'お問い合わせ', '紹介', 'フィルター',
    'リセット', '最小', '最大', 'コスト', 'ステータス', 'ブランド', 'タイプ',
    '時間', '刃', 'すべて', '利用可能', '保留中', '売れた', '交換された',
    '販売中', '取引中', '購入', '販売中/取引中', '新しい', '古い', 'ライブ', 'トレーナー', '部品',
    'ログイン', 'ログアウト', 'サインアップ', '閲覧', 'サポートに連絡', 'ユーザーポスト',
    '私たちについて', '言語', 'タイトル', '価格', '状態', '販売タイプ',
    '説明', '画像をアップロード', '送信', '検索', '通貨', 'プロフィール',
    '設定', '新しいメッセージはありません', '新しいアラートはありません', '寄付', '作成済み',
    '前へ', '次へ', '名前', '姓', '金額', '表示名',
    '電話番号', 'Instagram', 'Facebook', 'プロフィール画像', 'キャンセル',
    '編集', '削除', 'はい', 'いいえ', 'この投稿を削除しますか？',
    '何か理由があれば、お気軽にメッセージをお送りください', '並べ替え', 'もっと',
    '住所', 'ユニット', '市', '国', '州', '郵便番号', '画像を追加', '作成日',
    '削除', '基本情報', 'ソーシャル情報', 'プロフィール画像を変更', 'ロケーション情報', '投稿',
    '保存された住所はありません', '報告', 'レビュー', 'チームに会う', 'ウェブデベロッパー', 'プロジェクトマネージャー',
    'デザイナー', 'ユーザーに会う', 'ミッション', 'お問い合わせ', '投稿を作成', '詳細はこちらをご覧ください',
    'お問い合わせページ', '提案、助言、このウェブサイトの成長への貢献、またはその他の理由でご利用いただけます！',
    '私たちのミッションは、バリソングの愛好者がバリソングを購入、販売、交換できるようにすることです。究極の目標は、関連するリスクを軽減し、詐欺やトランザクションの問題を排除することです。このウェブサイトは、ユーザーフィードバックを活用して常に改善していく取り組みです。',
    'このウェブサイトのすべての機能にアクセスするには、ログインまたはサインアップしてください。ログインすると、投稿を作成し、他のユーザーアカウントにレビューを書くことができます。',
    'このウェブサイトをご利用いただき、ご活用いただけることをお礼申し上げます。取引を見つけたり、簡単に行ったりするのに役立てていただければ幸いです。どうぞ素晴らしい一日をお過ごしください。',
    'バリソング販売', '続行するにはログインしてください', '続行するにはサインアップしてください', '電子メール', 'パスワード', '続行', 'サインアップすることで、', '利用規約に同意し', 'プライバシーポリシーを認識します', 'または次で続行', 'アカウントを作成', '既にアカウントをお持ちですか？ ログイン'
];

let ko = [
    '홈', '생성', '연락', '소개', '필터',
    '초기화', '최소', '최대', '가격', '상태', '브랜드', '유형',
    '시간', '날카로운', '모두', '사용 가능', '보류 중', '판매됨', '교환됨',
    '판매 중', '교환 중', '구매', '판매/교환', '새로운', '옛날', '라이브', '트레이너', '부품',
    '로그인', '로그아웃', '가입', '찾아보기', '고객 지원', '사용자 게시물',
    '회사 소개', '언어', '제목', '가격', '상태', '판매 유형',
    '설명', '이미지 업로드', '제출', '검색', '통화', '프로필',
    '설정', '새로운 메시지 없음', '새로운 알림 없음', '기부', '생성됨',
    '이전', '다음', '이름', '성', '금액', '표시 이름',
    '전화 번호', '인스타그램', '페이스북', '프로필 사진', '취소',
    '편집', '삭제', '예', '아니요', '이 게시물을 삭제 하시겠습니까?',
    '모든 이유로 언제든지 메시지를 보내 주십시오', '정렬 기준', '더보기',
    '주소', '단위', '도시', '국가', '주', '우편 번호', '사진 추가', '작성 일자',
    '제거', '기본 정보', '사회 정보', '프로필 사진 변경', '위치 정보', '게시물',
    '저장된 주소 없음', '신고', '리뷰', '팀 만나기', '웹 개발자', '프로젝트 관리자',
    '디자이너', '사용자 만나기', '미션', '연락처', '게시물 생성', '다음을 확인하세요',
    '연락처 페이지를 방문하여 의견을 제공하고, 웹 사이트의 성장에 기여하거나 필요한 경우 어떠한 이유로든 도움을 제공하세요!',
    '우리의 미션은 발리송 애호가들이 발리송을 구매, 판매 및 교환할 수 있도록 하는 것입니다. 궁극적인 목표는 관련된 위험을 줄이고 모든 사기나 문제가 있는 거래를 없애는 것입니다. 이 웹 사이트는 사용자 피드백을 활용하여 지속적으로 개선하는 작업입니다.',
    '이 웹 사이트의 모든 측면에 액세스하려면 로그인하거나 가입하십시오. 로그인하면 게시물을 만들고 다른 사용자 계정에 리뷰를 작성할 수 있습니다.',
    '이 웹 사이트를 사용해 주셔서 감사합니다. 여러분이 즐기시고 거래를 쉽게 찾거나 만들기를 바랍니다. 어쨌든 행복한 하루 되세요!'
];

let pl = [
    'Strona główna', 'Utwórz', 'Kontakt', 'O nas', 'Filtruj',
    'Resetuj', 'Minimum', 'Maksimum', 'Koszt', 'Status', 'Marka', 'Typ',
    'Czas', 'Ostrze', 'Wszystko', 'Dostępny', 'Oczekujący', 'Sprzedane', 'Wymienione',
    'Sprzedaż', 'Handel', 'Kupno', 'Sprzedaż/Handel', 'Nowe', 'Stare', 'Na żywo', 'Trener', 'Części',
    'Zaloguj', 'Wyloguj', 'Zarejestruj', 'Przeglądaj', 'Wsparcie techniczne', 'Posty użytkowników',
    'O nas', 'Język', 'Tytuł', 'Cena', 'Stan', 'Typ sprzedaży',
    'Opis', 'Prześlij obraz', 'Wyślij', 'Szukaj', 'Waluta', 'Profil',
    'Ustawienia', 'Brak nowych wiadomości', 'Brak nowych alertów', 'Podaruj', 'Utworzono',
    'Poprzedni', 'Następny', 'Imię', 'Nazwisko', 'Kwota', 'Nazwa wyświetlana',
    'Numer telefonu', 'Instagram', 'Facebook', 'Zdjęcie profilowe', 'Anuluj',
    'Edytuj', 'Usuń', 'Tak', 'Nie', 'Czy na pewno chcesz usunąć ten post?',
    'Nie krępuj się wysłać nam wiadomość z dowolnego powodu', 'Sortuj według', 'Więcej',
    'Adres', 'Jednostka', 'Miasto', 'Kraj', 'Stan', 'Kod pocztowy', 'Dodaj zdjęcie', 'Data utworzenia',
    'Usuń', 'Informacje podstawowe', 'Informacje społeczne', 'Zmień zdjęcie profilowe', 'Informacje o lokalizacji', 'Posty',
    'Brak zapisanych adresów', 'Zgłoś', 'Recenzja', 'Poznaj zespół', 'Programista webowy', 'Kierownik projektu',
    'Projektant', 'Poznaj naszych użytkowników', 'Misja', 'Kontakt', 'Utwórz post', 'Proszę sprawdź',
    'naszą stronę Kontakt, aby zaoferować sugestie, porady, pomóc w rozwoju tej witryny lub z dowolnego innego powodu, który uważasz za stosowny!',
    'Nasza misja polega na umożliwieniu entuzjastom balisong kupowanie, sprzedawanie i wymienianie swoich balisongów. Ostatecznym celem jest zmniejszenie związanych z tym ryzyka i wyeliminowanie wszelkich możliwych oszustw lub problematycznych transakcji. Ta witryna to ciągłe wysiłki oparte na opinii użytkowników w celu ciągłego doskonalenia.',
    'Aby uzyskać dostęp do wszystkich funkcji tej witryny, zaloguj się lub zarejestruj. Po zalogowaniu będziesz mógł tworzyć posty i pisać recenzje na innych kontach użytkowników.',
    'Chcielibyśmy podziękować za korzystanie z tej witryny i mamy nadzieję, że ją aktywnie wykorzystujesz, znajdując i zawierając transakcje z łatwością. W każdym razie życzymy udanego dnia i bądź ostrożny!'
];

let pt = [
    'Página Inicial', 'Criar', 'Contato', 'Sobre', 'Filtrar',
    'Redefinir', 'Mínimo', 'Máximo', 'Custo', 'Status', 'Marca', 'Tipo',
    'Tempo', 'Lâmina', 'Todos', 'Disponível', 'Pendente', 'Vendido', 'Negociado',
    'Vender', 'Negociar', 'Comprar', 'Vender/Negociar', 'Novo', 'Antigo', 'Ao Vivo', 'Treinador', 'Peças',
    'Entrar', 'Sair', 'Registrar', 'Navegar', 'Suporte de Contato', 'Post do Usuário',
    'Sobre Nós', 'Idioma', 'Título', 'Preço', 'Condição', 'Tipo de Venda',
    'Descrição', 'Carregar Imagem', 'Enviar', 'Pesquisar', 'Moeda', 'Perfil',
    'Configurações', 'Nenhuma mensagem nova', 'Nenhuma alerta nova', 'Doar', 'Criado',
    'Anterior', 'Próximo', 'Nome', 'Sobrenome', 'Quantidade', 'Nome de Exibição',
    'Número de Telefone', 'Instagram', 'Facebook', 'Foto de Perfil', 'Cancelar',
    'Editar', 'Excluir', 'Sim', 'Não', 'Deseja excluir esta postagem?',
    'Sinta-se à vontade para nos enviar uma mensagem por qualquer motivo', 'Ordenar Por', 'Mais',
    'Endereço', 'Unidade', 'Cidade', 'País', 'Estado', 'Código Postal', 'Adicionar Foto', 'Data de Criação',
    'Remover', 'Informações Básicas', 'Informações Sociais', 'Alterar Foto de Perfil', 'Informações de Localização', 'Postagens',
    'Nenhum endereço está salvo', 'Relatar', 'Revisão', 'Conheça a Equipe', 'Desenvolvedor Web', 'Gerente de Projeto',
    'Designer', 'Conheça Nossos Usuários', 'Missão', 'Contate-Nos', 'Criar Postagem', 'Por favor, confira a',
    'Página de Contato', 'para oferecer sugestões, aconselhar, ajudar a contribuir para o crescimento deste site ou por qualquer motivo que você considere adequado!',
    'Nossa missão é permitir que os entusiastas do balisong comprem, vendam e troquem seus balisongs. O objetivo final é reduzir o risco envolvido e eliminar todas as possíveis transações fraudulentas ou problemáticas. Este site é um esforço contínuo que utiliza o feedback do usuário para melhorar continuamente.',
    'Para acessar todos os aspectos deste site, faça login ou se inscreva. Depois de fazer login, você poderá criar postagens e escrever análises nas contas de outras pessoas.',
    'Queremos agradecer por usar este site e esperamos que você o aproveite ativamente, além de encontrar/fazer negócios com facilidade. De qualquer forma, esperamos que você tenha um ótimo dia e cuide-se!',
    'Vendas de Balisong', 'Por favor, faça login para continuar', 'Por favor, inscreva-se para continuar', 'E-mail', 'Senha', 'Continuar', 'Ao se inscrever, eu aceito os', 'Termos de Serviço', 'e reconheço a', 'Política de Privacidade', 'Ou Continue com', 'Criar uma Conta', 'Já tem uma conta? Entre'
];

let ru = [
    'Главная', 'Создать', 'Контакт', 'О нас', 'Фильтр',
    'Сброс', 'Минимум', 'Максимум', 'Стоимость', 'Статус', 'Бренд', 'Тип',
    'Время', 'Лезвие', 'Все', 'Доступно', 'В ожидании', 'Продано', 'Обменяно',
    'Продажа', 'Торговля', 'Покупка', 'Продажа/Торговля', 'Новый', 'Старый', 'Прямой эфир', 'Тренер', 'Детали',
    'Войти', 'Выйти', 'Зарегистрироваться', 'Просмотр', 'Связь с поддержкой', 'Пост пользователя',
    'О нас', 'Язык', 'Заголовок', 'Цена', 'Состояние', 'Тип продажи',
    'Описание', 'Загрузить изображение', 'Отправить', 'Поиск', 'Валюта', 'Профиль',
    'Настройки', 'Нет новых сообщений', 'Нет новых оповещений', 'Пожертвовать', 'Создано',
    'Предыдущий', 'Следующий', 'Имя', 'Фамилия', 'Сумма', 'Отображаемое имя',
    'Номер телефона', 'Instagram', 'Facebook', 'Фото профиля', 'Отмена',
    'Изменить', 'Удалить', 'Да', 'Нет', 'Вы уверены, что хотите удалить этот пост?',
    'Не стесняйтесь отправить нам сообщение по любой причине', 'Сортировать по', 'Еще',
    'Адрес', 'Единица', 'Город', 'Страна', 'Область', 'Почтовый индекс', 'Добавить фото', 'Дата создания',
    'Удалить', 'Основная информация', 'Социальная информация', 'Изменить фото профиля', 'Информация о местоположении', 'Посты',
    'Нет сохраненных адресов', 'Сообщить', 'Отзыв', 'Познакомьтесь с командой', 'Веб-разработчик', 'Менеджер проекта',
    'Дизайнер', 'Познакомьтесь с нашими пользователями', 'Миссия', 'Свяжитесь с нами', 'Создать пост', 'Пожалуйста, посетите',
    'страницу Контакты, чтобы предложить советы, консультации, помочь в развитии этого сайта или по любой другой причине, которую вы считаете уместной!',
    'Наша миссия - дать возможность энтузиастам балисонга покупать, продавать и обменивать свои балисонги. Конечная цель - уменьшить связанный с этим риск и исключить все возможные мошеннические или проблемные сделки. Этот сайт - это постоянные усилия, опирающиеся на обратную связь пользователей для постоянного совершенствования.',
    'Чтобы получить доступ ко всем функциям этого сайта, войдите или зарегистрируйтесь. После входа вы сможете создавать посты и писать отзывы на аккаунтах других пользователей.',
    'Мы хотели бы поблагодарить вас за использование этого сайта и надеемся, что вы активно им пользуетесь, находите и совершаете сделки с легкостью. В любом случае, желаем вам прекрасного дня и заботьтесь о себе!',
    'Продажа балисонга', 'Пожалуйста, войдите, чтобы продолжить', 'Пожалуйста, зарегистрируйтесь, чтобы продолжить', 'Электронная почта', 'Пароль', 'Продолжить', 'Регистрируясь, я принимаю', 'Условия использования', 'и признаю', 'Политику конфиденциальности', 'Или продолжить с', 'Создать учетную запись', 'Уже есть аккаунт? Войти'
];

let tr = [
    'Ana Sayfa', 'Oluştur', 'İletişim', 'Hakkımızda', 'Filtrele',
    'Sıfırla', 'Minimum', 'Maksimum', 'Maliyet', 'Durum', 'Marka', 'Tip',
    'Zaman', 'Bıçak', 'Tümü', 'Kullanılabilir', 'Beklemede', 'Satıldı', 'Takas Edildi',
    'Satıyor', 'Takas Ediyor', 'Satın Alıyor', 'Satıyor / Takas Ediyor', 'Yeni', 'Eski', 'Canlı', 'Eğitmen', 'Parçalar',
    'Giriş', 'Çıkış', 'Kaydol', 'Gözat', 'Destek İletişimi', 'Kullanıcı Gönderisi',
    'Hakkımızda', 'Dil', 'Başlık', 'Fiyat', 'Durum', 'Satış Türü',
    'Açıklama', 'Resim Yükle', 'Gönder', 'Ara', 'Para Birimi', 'Profil',
    'Ayarlar', 'Yeni mesaj yok', 'Yeni uyarı yok', 'Bağış Yap', 'Oluşturuldu',
    'Önceki', 'Sonraki', 'Ad', 'Soyad', 'Miktar', 'Görünen Ad',
    'Telefon Numarası', 'Instagram', 'Facebook', 'Profil Resmi', 'İptal',
    'Düzenle', 'Sil', 'Evet', 'Hayır', 'Bu gönderiyi silmek istiyor musunuz?',
    'Herhangi bir nedenle bize mesaj göndermekten çekinmeyin', 'Şuna Göre Sırala', 'Daha Fazla',
    'Adres', 'Birim', 'Şehir', 'Ülke', 'Eyalet', 'Posta Kodu', 'Resim Ekle', 'Oluşturulma Tarihi',
    'Kaldır', 'Temel Bilgiler', 'Sosyal Bilgiler', 'Profil Resmini Değiştir', 'Konum Bilgisi', 'Gönderiler',
    'Kaydedilmiş adres yok', 'Bildir', 'İncele', 'Ekip Tanışma', 'Web Geliştirici', 'Proje Yöneticisi',
    'Tasarımcı', 'Kullanıcılarımızı Tanıyın', 'Misyon', 'Bizimle İletişime Geçin', 'Gönderi Oluştur', 'Lütfen',
    'Görüşlerde bulunmak, önerilerde bulunmak, bu web sitesinin büyümesine katkıda bulunmak veya uygun gördüğünüz herhangi bir nedenle yardım etmek için', 'Misyonumuz, balisong tutkunlarının balisonglarını satın almasına, satmasına ve takas etmesine olanak tanımaktır. Nihai hedef, bu işlemle ilişkilendirilen riski azaltmak ve tüm potansiyel dolandırıcıları veya olası sorunlu işlemleri ortadan kaldırmaktır. Bu web sitesi, sürekli iyileştirmek için kullanıcı geri bildirimini kullanan sürekli bir çabadır.',
    'Bu web sitesinin tüm yönlerine erişmek için giriş yapın veya kaydolun. Giriş yaptıktan sonra gönderi oluşturabilir ve diğer kullanıcıların hesaplarına inceleme yazabilirsiniz.',
    'Bu web sitesini kullanmanızdan dolayı teşekkür eder ve aktif olarak kullanmayı umarız, aynı zamanda kolaylıkla iş yaparken eğlenmenizi ve bulmanızı umarız. Her durumda harika bir gün geçirmenizi ve kendinize iyi bakmanızı dileriz!',
    'Balisong Satışları', 'Devam etmek için giriş yapın', 'Devam etmek için kaydolun', 'E-posta', 'Şifre', 'Devam', 'Kaydolurken,', 'Hizmet Koşullarını kabul ederim', 've', 'Gizlilik Politikasını kabul ederim', 'Veya Devam Et', 'Hesap Oluştur', 'Zaten bir hesabınız mı var? Giriş Yap'
];

let vi = [
    'Trang chủ', 'Tạo', 'Liên hệ', 'Giới thiệu', 'Lọc',
    'Thiết lập lại', 'Tối thiểu', 'Tối đa', 'Giá', 'Tình trạng', 'Thương hiệu', 'Loại',
    'Thời gian', 'Lưỡi dao', 'Tất cả', 'Có sẵn', 'Đang chờ', 'Đã bán', 'Traded',
    'Đang bán', 'Đang giao dịch', 'Đang mua', 'Bán/Giao dịch', 'Mới', 'Cũ', 'Trực tiếp', 'Huấn luyện viên', 'Phụ kiện',
    'Đăng nhập', 'Đăng xuất', 'Đăng ký', 'Duyệt', 'Hỗ trợ liên hệ', 'Bài đăng của người dùng',
    'Về chúng tôi', 'Ngôn ngữ', 'Tiêu đề', 'Giá', 'Tình trạng', 'Loại bán',
    'Mô tả', 'Tải ảnh lên', 'Gửi', 'Tìm kiếm', 'Tiền tệ', 'Hồ sơ',
    'Cài đặt', 'Không có tin nhắn mới', 'Không có cảnh báo mới', 'Quyên góp', 'Đã tạo',
    'Trước', 'Tiếp theo', 'Họ', 'Tên', 'Số tiền', 'Tên hiển thị',
    'Số điện thoại', 'Instagram', 'Facebook', 'Ảnh hồ sơ', 'Hủy',
    'Chỉnh sửa', 'Xóa', 'Có', 'Không', 'Bạn có muốn xóa bài đăng này không?',
    'Hãy tự do gửi cho chúng tôi một tin nhắn với bất kỳ lý do nào', 'Sắp xếp theo', 'Thêm',
    'Địa chỉ', 'Đơn vị', 'Thành phố', 'Quốc gia', 'Bang', 'Mã bưu chính', 'Thêm ảnh', 'Ngày tạo',
    'Xóa', 'Thông tin cơ bản', 'Thông tin xã hội', 'Thay đổi ảnh hồ sơ', 'Thông tin về vị trí', 'Bài đăng',
    'Không có địa chỉ đã lưu', 'Báo cáo', 'Xem xét', 'Gặp đội ngũ', 'Nhà phát triển web', 'Quản lý dự án',
    'Nhà thiết kế', 'Gặp người dùng của chúng tôi', 'Sứ mệnh', 'Liên hệ chúng tôi', 'Tạo bài đăng', 'Vui lòng kiểm tra',
    'Trang Liên hệ của chúng tôi', 'để đề xuất, tư vấn, giúp đóng góp vào sự phát triển của trang web này hoặc với bất kỳ lý do nào bạn có thể thấy phù hợp!',
    'Sứ mệnh của chúng tôi là cho phép những người đam mê balisong mua, bán và trao đổi balisongs của họ. Mục tiêu cuối cùng là giảm rủi ro liên quan và loại bỏ tất cả các giao dịch tiềm ẩn hoặc tiềm ẩn có vấn đề. Trang web này là một nỗ lực liên tục sử dụng phản hồi từ người dùng để liên tục cải thiện.',
    'Để truy cập tất cả các khía cạnh của trang web này, hãy đăng nhập hoặc đăng ký. Sau khi bạn đã đăng nhập, bạn có thể tạo bài đăng và viết đánh giá trên tài khoản của người khác.',
    'Chúng tôi muốn cảm ơn bạn đã sử dụng trang web này và hy vọng bạn đang tham gia nó một cách tích cực, cùng với việc tìm kiếm / thực hiện các thỏa thuận một cách dễ dàng. Dù sao đi nữa, chúng tôi hy vọng bạn có một ngày tốt lành và hãy chăm sóc bản thân mình!'
];

let zh = [
    '主页', '创建', '联系', '关于', '筛选',
    '重置', '最低', '最高', '成本', '状态', '品牌', '类型',
    '时间', '刀刃', '全部', '可用', '待定', '已售', '已交易',
    '出售', '交易', '购买', '出售/交易', '新', '旧', '直播', '教练', '零件',
    '登录', '注销', '注册', '浏览', '联系支持', '用户帖子',
    '关于我们', '语言', '标题', '价格', '条件', '销售类型',
    '描述', '上传图片', '提交', '搜索', '货币', '个人资料',
    '设置', '没有新消息', '没有新提醒', '捐赠', '创建',
    '上一页', '下一页', '名字', '姓氏', '金额', '显示名称',
    '电话号码', 'Instagram', 'Facebook', '个人头像', '取消',
    '编辑', '删除', '是', '否', '您确定要删除此帖吗？',
    '请随时以任何理由给我们发消息', '排序方式', '更多',
    '地址', '单位', '城市', '国家', '州', '邮政编码', '添加图片', '创建日期',
    '删除', '基本信息', '社交信息', '更改个人头像', '位置信息', '帖子',
    '没有保存的地址', '举报', '评论', '认识团队', 'Web开发人员', '项目经理',
    '设计师', '认识我们的用户', '使命', '联系我们', '创建帖子', '请查看',
    '联系我们页面', '提供建议，提供建议，帮助促进此网站的增长，或者出于您可能认为合适的任何原因！',
    '我们的使命是使巴里桑爱好者能够购买、销售和交换他们的巴里桑。最终目标是降低相关风险并消除所有潜在的骗子或潜在的糟糕交易。这个网站是一个不断改进的持续努力，利用用户反馈不断改进。',
    '要访问此网站的所有功能，请确保登录或注册。登录后，您将能够创建帖子并在其他用户的帐户上写评论。',
    '我们要感谢您使用这个网站，并希望您能积极地享受它，轻松地找到/达成交易。无论如何，我们希望您有一个美好的一天，照顾好自己！',
    '巴里桑销售', '请登录以继续', '请注册以继续', '电子邮件', '密码', '继续', '注册即表示我接受', '服务条款', '并承认', '隐私政策', '或继续使用', '创建一个帐户', '已经有一个帐户了吗？登录'
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
