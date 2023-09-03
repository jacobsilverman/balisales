
let ar = [
    'الرئيسية','إنشاء','اتصال','حول','تصفية',
    'إعادة تعيين','الحد الأدنى','الحد الأقصى','التكلفة','الحالة','العلامة التجارية','النوع',
    'الوقت','الشفرة','الكل','متاح','قيد الانتظار','تم البيع','تم التداول',
    'للبيع','للتداول','للشراء','للبيع/للتداول','جديد','قديم','مباشر','مدرب','قطع الغيار',
    'تسجيل الدخول', 'تسجيل الخروج', 'التسجيل', 'تصفح', 'الاتصال بالدعم', 'مشاركة المستخدم',
    'حولنا', 'اللغة', 'العنوان', 'السعر', 'الحالة', 'نوع البيع',
    'الوصف', 'تحميل الصورة', 'إرسال', 'البحث', 'العملة', 'الملف الشخصي',
    'الإعدادات', 'لا توجد رسائل جديدة', 'لا توجد تنبيهات جديدة', 'تبرع', 'تم الإنشاء',
    'السابق', 'التالي', 'الاسم الأول', 'الاسم الأخير', 'المبلغ', 'اسم العرض',
    'رقم الهاتف', 'إنستجرام', 'فيسبوك', 'صورة الملف الشخصي', 'إلغاء',
    'تعديل', 'حذف', 'نعم', 'لا', 'هل تريد حذف هذا المنشور؟',
    'لا تتردد في إرسال رسالة لنا لأي سبب', 'ترتيب حسب', 'المزيد',
    'العنوان', 'الوحدة', 'المدينة', 'البلد', 'الولاية', 'الرمز البريدي', 'إضافة صورة', 'تاريخ الإنشاء',
    'إزالة', 'معلومات أساسية', 'معلومات اجتماعية', 'تغيير صورة الملف الشخصي', 'معلومات الموقع', 'المنشورات',
    'لم يتم حفظ عنوان', 'الإبلاغ', 'المراجعة', 'التعرف على الفريق', 'مطور الويب', 'مدير المشروع',
    'مصمم', 'التعرف على المستخدمين', 'المهمة', 'اتصل بنا', 'إنشاء منشور', 'يرجى زيارة',
    'صفحة اتصل بنا', 'لتقديم اقتراحات أو نصائح أو المساهمة في نمو هذا الموقع، أو لأي سبب تراه مناسبًا!',
    'مهمتنا هي تمكين عشاق الباليسونج من شراء وبيع وتداول باليسونجهم. الهدف النهائي هو تقليل المخاطر والتخلص من جميع المحتملين للنصب أو المعاملات السيئة المحتملة. هذا الموقع هو جهد مستمر يستفيد من ملاحظات المستخدمين للتحسين المستمر.',
    'للوصول إلى جميع جوانب هذا الموقع، يرجى التسجيل أو تسجيل الدخول. بمجرد تسجيل الدخول، ستتمكن من إنشاء منشورات وكتابة مراجعات على حسابات الأشخاص الآخرين.',
    'نود أن نشكركم على استخدام هذا الموقع ونأمل أن تستمتعوا بنشاط معه وتجدوا أو تحققوا صفقات بسهولة. على أي حال، نأمل أن تكون لديكم يومًا رائعًا وتعتنوا بأنفسكم.'
];

let de = [
    'Startseite','Erstellen','Kontakt','Über','Filtern',
    'Zurücksetzen','Mindestwert','Höchstwert','Kosten','Status','Marke','Typ',
    'Zeit','Klinge','Alle','Verfügbar','Ausstehend','Verkauft','Getauscht',
    'Verkaufen','Tauschen','Kaufen','Verkaufen/Tauschen','Neu','Alt','Live','Trainer','Teile',
    'Anmelden', 'Abmelden', 'Registrieren', 'Durchsuchen', 'Support kontaktieren', 'Benutzerpost',
    'Über uns', 'Sprache', 'Titel', 'Preis', 'Zustand', 'Verkaufstyp',
    'Beschreibung', 'Bild hochladen', 'Senden', 'Suchen', 'Währung', 'Profil',
    'Einstellungen', 'Keine neuen Nachrichten', 'Keine neuen Benachrichtigungen', 'Spenden', 'Erstellt',
    'Vorherige', 'Nächste', 'Vorname', 'Nachname', 'Betrag', 'Anzeigename',
    'Telefonnummer', 'Instagram', 'Facebook', 'Profilbild', 'Abbrechen',
    'Bearbeiten', 'Löschen', 'Ja', 'Nein', 'Möchten Sie diesen Beitrag löschen?',
    'Bitte zögern Sie nicht, uns aus irgendeinem Grund eine Nachricht zu senden', 'Sortieren nach', 'Mehr',
    'Adresse', 'Einheit', 'Stadt', 'Land', 'Bundesland', 'Postleitzahl', 'Bild hinzufügen', 'Erstellungsdatum',
    'Entfernen', 'Grundlegende Informationen', 'Soziale Informationen', 'Profilbild ändern', 'Standortinformationen', 'Beiträge',
    'Keine Adresse gespeichert', 'Melden', 'Überprüfen', 'Team kennenlernen', 'Webentwickler', 'Projektmanager',
    'Designer', 'Unsere Benutzer kennenlernen', 'Mission', 'Kontaktieren Sie uns', 'Beitrag erstellen', 'Bitte besuchen Sie die',
    'Kontaktieren Sie uns Seite', 'um Vorschläge zu machen, Ratschläge zu geben, zur Wachstumsförderung dieser Website beizutragen oder aus jedem anderen Grund, den Sie für angemessen halten!',
    'Unsere Mission ist es, Balisong-Enthusiasten zu ermöglichen, ihre Balisongs zu kaufen, zu verkaufen und zu handeln. Das ultimative Ziel ist es, das damit verbundene Risiko zu reduzieren und alle potenziellen Betrüger oder möglichen schlechten Transaktionen auszuschließen. Diese Website ist ein laufender Einsatz, der das Feedback der Benutzer nutzt, um sich kontinuierlich zu verbessern.',
    'Um auf alle Aspekte dieser Website zugreifen zu können, melden Sie sich bitte an oder registrieren Sie sich. Sobald Sie angemeldet sind, können Sie Beiträge erstellen und Bewertungen zu den Konten anderer Personen schreiben.',
    'Wir möchten uns bei Ihnen für die Verwendung dieser Website bedanken und hoffen, dass Sie sie aktiv nutzen und mit Leichtigkeit Geschäfte finden oder abschließen. Wie auch immer, wir hoffen, Sie haben einen wunderbaren Tag und passen Sie gut auf sich auf.'
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
    'Inicio','Crear','Contacto','Acerca de','Filtrar',
    'Restablecer','Mínimo','Máximo','Costo','Estado','Marca','Tipo',
    'Tiempo','Hoja','Todo','Disponible','Pendiente','Vendido','Intercambiado',
    'Vender','Intercambiar','Comprar','Vender/Intercambiar','Nuevo','Viejo','En vivo','Entrenador','Piezas',
    'Iniciar sesión', 'Cerrar sesión', 'Registrarse', 'Navegar', 'Contactar soporte', 'Publicación de usuario',
    'Acerca de nosotros', 'Idioma', 'Título', 'Precio', 'Condición', 'Tipo de venta',
    'Descripción', 'Cargar imagen', 'Enviar', 'Buscar', 'Moneda', 'Perfil',
    'Configuraciones', 'No hay nuevos mensajes', 'No hay nuevas alertas', 'Donar', 'Creado',
    'Anterior', 'Siguiente', 'Nombre', 'Apellido', 'Monto', 'Nombre de usuario',
    'Número de teléfono', 'Instagram', 'Facebook', 'Foto de perfil', 'Cancelar',
    'Editar', 'Eliminar', 'Sí', 'No', '¿Deseas eliminar esta publicación?',
    'No dudes en enviarnos un mensaje por cualquier motivo', 'Ordenar por', 'Más',
    'Dirección', 'Unidad', 'Ciudad', 'País', 'Estado', 'Código postal', 'Agregar imagen', 'Fecha de creación',
    'Eliminar', 'Información básica', 'Información social', 'Cambiar foto de perfil', 'Información de ubicación', 'Publicaciones',
    'No se ha guardado ninguna dirección', 'Reportar', 'Revisar', 'Conocer al equipo', 'Desarrollador web', 'Gerente de proyecto',
    'Diseñador', 'Conocer a nuestros usuarios', 'Misión', 'Contáctanos', 'Crear publicación', 'Por favor, visita la',
    'Página de contacto', 'para ofrecer sugerencias, consejos, contribuir al crecimiento de este sitio web o por cualquier motivo que consideres adecuado.',
    'Nuestra misión es permitir a los entusiastas del balisong comprar, vender e intercambiar sus balisongs. El objetivo final es reducir el riesgo y eliminar a todos los posibles estafadores o transacciones problemáticas. Este sitio web es un esfuerzo continuo que utiliza la retroalimentación de los usuarios para mejorar constantemente.',
    'Para acceder a todos los aspectos de este sitio web, inicia sesión o regístrate. Una vez que estés registrado, podrás crear publicaciones y escribir reseñas en las cuentas de otras personas.',
    'Queremos agradecerte por usar este sitio web y esperamos que lo disfrutes activamente y que encuentres o realices acuerdos con facilidad. De todos modos, esperamos que tengas un día maravilloso y cuidate.'
];

let fr = [
    'Accueil','Créer','Contact','À propos','Filtrer',
    'Réinitialiser','Minimum','Maximum','Coût','Statut','Marque','Type',
    'Temps','Lame','Tout','Disponible','En attente','Vendu','Échangé',
    'Vente','Échange','Achat','Vente/Échange','Nouveau','Vieux','En direct','Entraîneur','Pièces',
    'Connexion', 'Déconnexion', 'Inscription', 'Parcourir', 'Contacter le support', 'Publication de l\'utilisateur',
    'À propos de nous', 'Langue', 'Titre', 'Prix', 'État', 'Type de vente',
    'Description', 'Télécharger une image', 'Envoyer', 'Rechercher', 'Devise', 'Profil',
    'Paramètres', 'Aucun nouveau message', 'Aucune nouvelle alerte', 'Donner', 'Créé',
    'Précédent', 'Suivant', 'Prénom', 'Nom de famille', 'Montant', 'Nom d\'utilisateur',
    'Numéro de téléphone', 'Instagram', 'Facebook', 'Photo de profil', 'Annuler',
    'Éditer', 'Supprimer', 'Oui', 'Non', 'Souhaitez-vous supprimer cette publication ?',
    'N\'hésitez pas à nous envoyer un message pour n\'importe quelle raison', 'Trier par', 'Plus',
    'Adresse', 'Unité', 'Ville', 'Pays', 'État', 'Code postal', 'Ajouter une image', 'Date de création',
    'Supprimer', 'Informations de base', 'Informations sociales', 'Changer la photo de profil', 'Informations de localisation', 'Publications',
    'Aucune adresse n\'est enregistrée', 'Signaler', 'Examiner', 'Rencontrer l\'équipe', 'Développeur Web', 'Chef de projet',
    'Concepteur', 'Rencontrez nos utilisateurs', 'Mission', 'Contactez-nous', 'Créer une publication', 'Veuillez consulter la',
    'Page de contact', 'pour offrir des suggestions, des conseils, contribuer à la croissance de ce site web ou pour toute autre raison que vous jugerez appropriée.',
    'Notre mission est de permettre aux passionnés du balisong d\'acheter, de vendre et d\'échanger leurs balisongs. L\'objectif ultime est de réduire les risques et d\'éliminer tous les escrocs potentiels ou les transactions problématiques. Ce site web est un effort continu qui utilise les commentaires des utilisateurs pour s\'améliorer en permanence.',
    'Pour accéder à tous les aspects de ce site web, veuillez vous connecter ou vous inscrire. Une fois connecté, vous pourrez créer des publications et rédiger des avis sur les comptes des autres utilisateurs.',
    'Nous tenons à vous remercier d\'utiliser ce site web et nous espérons que vous en profitez pleinement et que vous trouvez ou réalisez des accords facilement. Quoi qu\'il en soit, nous espérons que vous passerez une merveilleuse journée et prendrez soin de vous.'
];

let hi = [
    'होम','सर्जन','संपर्क','के बारे में','फिल्टर',
    'रीसेट','न्यूनतम','अधिकतम','लागत','स्थिति','ब्रांड','प्रकार',
    'समय','ब्लेड','सभी','उपलब्ध','लंबित','बेचा गया','विनिमयित',
    'बेचना','विनिमय करना','खरीददारी करना','बेचना/विनिमय करना','नया','पुराना','लाइव','प्रशिक्षक','पार्ट्स',
    'लॉग इन करें', 'लॉग आउट करें', 'साइन अप करें', 'ब्राउज़ करें', 'समर्थन से संपर्क करें', 'उपयोगकर्ता पोस्ट',
    'हमारे बारे में', 'भाषा', 'शीर्षक', 'मूल्य', 'स्थिति', 'बेचने का प्रकार',
    'विवरण', 'छवि अपलोड करें', 'प्रस्तुत करें', 'खोजें', 'मुद्रा', 'प्रोफ़ाइल',
    'सेटिंग्स', 'कोई नई संदेश नहीं', 'कोई नई चेतावनियाँ नहीं', 'दान करें', 'बनाया गया',
    'पिछला', 'अगला', 'पहला नाम', 'अंतिम नाम', 'राशि', 'प्रदर्शन नाम',
    'फ़ोन नंबर', 'इंस्टाग्राम', 'फेसबुक', 'प्रोफ़ाइल चित्र', 'रद्द करें',
    'संपादित करें', 'हटाएं', 'हां', 'नहीं', 'क्या आप इस पोस्ट को हटाना चाहते हैं?',
    'किसी भी कारण के लिए हमें संदेश भेजने में झिझक न करें', 'क्रमबद्ध करें', 'अधिक',
    'पता', 'इकाई', 'शहर', 'देश', 'राज्य', 'ज़िपकोड', 'छवि जोड़ें', 'तारीख बनाई गई',
    'हटाएं', 'मूलभूत जानकारी', 'सामाजिक जानकारी', 'प्रोफ़ाइल चित्र बदलें', 'स्थान जानकारी', 'पोस्ट',
    'कोई पता सहेजा नहीं गया', 'रिपोर्ट', 'समीक्षा', 'टीम से मिलें', 'वेब डेवलपर', 'प्रोजेक्ट मैनेजर',
    'डिज़ाइनर', 'हमारे उपयोगकर्ताओं से मिलें', 'मिशन', 'हमसे संपर्क करें', 'पोस्ट बनाएं', 'कृपया देखें',
    'हमसे संपर्क करें पृष्ठ', 'सुझाव, सलाह देने, इस वेबसाइट की वृद्धि में सहयोग करने के लिए या जो किसी भी कारण से आपके लिए उपयुक्त लगे!',
    'हमारा मिशन बालिसोंग दिग्गजों को उनके बालिसोंग को खरीदने, बेचने और विनिमय करने की स्वीकृति देना है। अंतिम लक्ष्य है कि इसके साथ जुड़े सभी संभावित ठगों या संभावित खराब लेन-देन को कम किया जाए। इस वेबसाइट को स्थायी रूप से सुधारने के लिए उपयोगकर्ता प्रतिक्रिया का उपयोग करने वाला एक चल रहा प्रयास है।',
    'इस वेबसाइट के सभी पहलुओं तक पहुंचने के लिए कृपया लॉग इन करें या साइन अप करें। एक बार लॉग इन होने के बाद, आप पोस्ट बना सकेंगे और दूसरों के खातों पर समीक्षा लिख सकेंगे।',
    'हम आपका धन्यवाद करना चाहते हैं कि आप इस वेबसाइट का उपयोग कर रहे हैं और आशा है कि आप इसे सक्रिय रूप से उपयोग कर रहे हैं और आसानी से व्यापार खोज रहे हैं या कर रहे हैं। जैसे कि भी, हम आपके पास एक अद्भुत दिन होने की शुभकामनाएं देते हैं और अपने आप का ख्याल रखें।'
];

let id = [
    'Beranda','Buat','Kontak','Tentang','Filter',
    'Reset','Minimum','Maksimum','Biaya','Status','Merek','Tipe',
    'Waktu','Pisau','Semua','Tersedia','Menunggu','Terjual','Ditukar',
    'Jual','Tukar','Beli','Jual/Tukar','Baru','Lama','Langsung','Pelatih','Bagian',
    'Masuk', 'Keluar', 'Daftar', 'Jelajahi', 'Hubungi Dukungan', 'Posting Pengguna',
    'Tentang Kami', 'Bahasa', 'Judul', 'Harga', 'Kondisi', 'Jenis Penjualan',
    'Deskripsi', 'Unggah Gambar', 'Kirim', 'Cari', 'Mata Uang', 'Profil',
    'Pengaturan', 'Tidak ada pesan baru', 'Tidak ada pemberitahuan baru', 'Donasi', 'Dibuat',
    'Sebelumnya', 'Selanjutnya', 'Nama Depan', 'Nama Belakang', 'Jumlah', 'Nama Tampilan',
    'Nomor Telepon', 'Instagram', 'Facebook', 'Foto Profil', 'Batal',
    'Edit', 'Hapus', 'Ya', 'Tidak', 'Apakah Anda ingin menghapus posting ini?',
    'Jangan ragu untuk mengirimkan pesan kepada kami untuk alasan apa pun', 'Urutkan berdasarkan', 'Lebih lanjut',
    'Alamat', 'Unit', 'Kota', 'Negara', 'Negara Bagian', 'Kode Pos', 'Tambahkan Gambar', 'Tanggal Dibuat',
    'Hapus', 'Informasi Dasar', 'Informasi Sosial', 'Ganti Foto Profil', 'Informasi Lokasi', 'Posting',
    'Tidak ada alamat yang tersimpan', 'Laporkan', 'Ulas', 'Bertemu dengan Tim', 'Pengembang Web', 'Manajer Proyek',
    'Perancang', 'Kenali Pengguna Kami', 'Misi', 'Hubungi Kami', 'Buat Posting', 'Silakan kunjungi',
    'Halaman Hubungi Kami', 'untuk menawarkan saran, memberi nasihat, berkontribusi pada pertumbuhan situs web ini, atau untuk alasan lain yang Anda anggap sesuai!',
    'Misi kami adalah memungkinkan para penggemar balisong untuk membeli, menjual, dan menukarkan balisong mereka. Tujuan utamanya adalah mengurangi risiko dan menghilangkan semua penipu potensial atau transaksi yang buruk. Situs web ini adalah usaha berkelanjutan yang menggunakan umpan balik pengguna untuk terus meningkatkan.',
    'Untuk mengakses semua aspek situs web ini, silakan masuk atau daftar. Setelah Anda masuk, Anda dapat membuat posting dan menulis ulasan di akun orang lain.',
    'Kami ingin mengucapkan terima kasih atas penggunaan situs web ini dan kami harap Anda menikmatinya dengan aktif dan menemukan/menyelesaikan kesepakatan dengan mudah. Bagaimanapun juga, kami harap Anda memiliki hari yang indah dan jaga diri Anda.'
];


let is = [
    'Heim','Búa til','Hafa samband','Um','Sía',
    'Endurræsa','Lágmarks','Hámarks','Kostnaður','Staða','Vörumerki','Tegund',
    'Tími','Mæli','Allt','Til','Bíður','Seldi','Skipti',
    'Seldi','Skipti','Kaup','Seldi/Skipti','Nýtt','Gammalt','Lítt','Þjálfari','Hlutar',
    'Skrá inn', 'Skrá út', 'Skrá sig', 'Vafra', 'Hafa samband við styrk', 'Notandapóstur',
    'Um okkur', 'Tungumál', 'Titill', 'Verð', 'Ástand', 'Sölu tegund',
    'Lýsing', 'Hlaða upp mynd', 'Senda', 'Leita', 'Gjaldmiðill', 'Notandastillingar',
    'Stillingar', 'Engin ný skilaboð', 'Engar nýjar tilkynningar', 'Gjöf', 'Búið til',
    'Fyrri', 'Næsti', 'Fornafn', 'Eftirnafn', 'Upphæð', 'Nafn sem birtist',
    'Símanúmer', 'Instagram', 'Facebook', 'Notandamynd', 'Hætta við',
    'Breyta', 'Eyða', 'Já', 'Nei', 'Viltu eyða þessari færslu?',
    'Ekki hika við að senda okkur skilaboð af hvaða ástæðu sem er', 'Raða eftir', 'Meira',
    'Heimilisfang', 'Eining', 'Borg', 'Land', 'Ríki', 'Póstnúmer', 'Bæta við mynd', 'Búið til',
    'Fjarlægja', 'Grunn upplýsingar', 'Félagslegar upplýsingar', 'Breyta notandamynd', 'Staðsetning upplýsingar', 'Færslur',
    'Engin heimilisfang er vistað', 'Tilkynna', 'Um auglýsanda', 'Mæla með', 'Kynntu þér liðið', 'Vefþróunari', 'Verkefnastjóri',
    'Hönnuður', 'Mættu notendum okkar', 'Markmið', 'Hafa samband', 'Búa til færslu', 'Vinsamlegast skoðaðu',
    'Hafa samband síðuna', 'til að leggja fram tillögur, ráðleggingar, hjálpa að stuðla að vexti vefsíðunnar eða af hvaða ástæðu sem þér finnst á réttu sínu!',
    'Markmið okkar er að gera það kleift fyrir balisong áhugafólk að kaupa, selja og skipta um balisonga sína. Ætlunin er að draga úr það áhættuþátt sem tengist og útiloka allt mögulegt svindl eða erfiðar viðskipti. Þessi vefsíða er stöðugt starfandi verkefni sem notar endurgjöf notenda til að endurskoða stöðu sína.',
    'Til að fá aðgang að öllum þáttum síðunnar, vinsamlegast skráðu þig inn eða búðu til notandareikning. Þegar þú ert skráður inn, getur þú búið til færslur og skrifað umsagnir um aðra notendareikninga.',
    'Við viljum þakka þér fyrir notkun vefsíðunnar og vonumst til að þú notir hana af virðingu og nýjungum að aðstoða. Annars vegar vonumst við til að þú hafir skemmtilegan dag og passirðu vel á þig.'
];


let it = [
    'Home','Crea','Contatti','Informazioni','Filtra',
    'Resetta','Minimo','Massimo','Costo','Stato','Marca','Tipo',
    'Tempo','Lama','Tutto','Disponibile','In attesa','Venduto','Scambiato',
    'Vendita','Scambio','Acquisto','Vendita/Scambio','Nuovo','Vecchio','In diretta','Allenatore','Parti',
    'Accedi', 'Esci', 'Registrati', 'Esplora', 'Contatta il supporto', 'Post dell\'utente',
    'Chi siamo', 'Lingua', 'Titolo', 'Prezzo', 'Condizione', 'Tipo di vendita',
    'Descrizione', 'Carica immagine', 'Invia', 'Cerca', 'Valuta', 'Profilo',
    'Impostazioni', 'Nessun nuovo messaggio', 'Nessuna nuova notifica', 'Dona', 'Creato',
    'Precedente', 'Successivo', 'Nome', 'Cognome', 'Importo', 'Nome utente',
    'Numero di telefono', 'Instagram', 'Facebook', 'Immagine del profilo', 'Annulla',
    'Modifica', 'Elimina', 'Sì', 'No', 'Vuoi eliminare questo post?',
    'Non esitare a inviarci un messaggio per qualsiasi motivo', 'Ordina per', 'Altro',
    'Indirizzo', 'Unità', 'Città', 'Paese', 'Stato', 'Codice postale', 'Aggiungi immagine', 'Data di creazione',
    'Rimuovi', 'Informazioni di base', 'Informazioni sociali', 'Cambia immagine del profilo', 'Informazioni sulla posizione', 'Post',
    'Nessun indirizzo salvato', 'Segnala', 'Recensisci', 'Incontra il team', 'Sviluppatore web', 'Responsabile di progetto',
    'Designer', 'Incontra i nostri utenti', 'Missione', 'Contattaci', 'Crea post', 'Per favore visita la',
    'Pagina dei contatti', 'per offrire suggerimenti, consigli, contribuire alla crescita di questo sito web o per qualsiasi altro motivo tu ritenga opportuno!',
    'La nostra missione è consentire agli appassionati di balisong di comprare, vendere e scambiare i loro balisong. L\'obiettivo finale è ridurre i rischi e eliminare tutti i potenziali truffatori o transazioni problematiche. Questo sito web è un progetto in corso che utilizza il feedback degli utenti per migliorarsi costantemente.',
    'Per accedere a tutti gli aspetti di questo sito web, effettua il login o registrati. Una volta effettuato il login, sarai in grado di creare post e scrivere recensioni sugli account degli altri utenti.',
    'Vogliamo ringraziarti per aver utilizzato questo sito web e speriamo che tu lo stia godendo attivamente e che trovi/faccia accordi con facilità. In ogni caso, ti auguriamo una splendida giornata e prenditi cura di te stesso.'
];

let iw = [
    'בית','צור','צור קשר','אודות','סנן',
    'אפס','מינימום','מרבית','עלות','סטטוס','מותג','סוג',
    'זמן','להבה','הכל','זמין','ממתין','נמכר','נחלף',
    'למכור','להחליף','לקנות','למכור/להחליף','חדש','ישן','לחיות','מאמן','חלקים',
    'התחברות', 'התנתקות', 'הרשמה', 'עיין', 'צור קשר עם התמיכה', 'פוסט של משתמש',
    'אודותינו', 'שפה', 'כותרת', 'מחיר', 'מצב', 'סוג מכירה',
    'תיאור', 'העלה תמונה', 'שלח', 'חפש', 'מטבע', 'פרופיל',
    'הגדרות', 'אין הודעות חדשות', 'אין התראות חדשות', 'תרומה', 'נוצר',
    'קודם', 'הבא', 'שם פרטי', 'שם משפחה', 'סכום', 'שם לתצוגה',
    'מספר טלפון', 'אינסטגרם', 'פייסבוק', 'תמונת פרופיל', 'ביטול',
    'ערוך', 'מחק', 'כן', 'לא', 'האם ברצונך למחוק את הפוסט הזה?',
    'אנא אל תהסס לשלוח לנו הודעה לכל סיבה', 'מיין לפי', 'יותר',
    'כתובת', 'יחידה', 'עיר', 'מדינה', 'מצב', 'מיקוד', 'הוסף תמונה', 'תאריך יצירה',
    'הסר', 'מידע בסיסי', 'מידע חברתי', 'שנה תמונת פרופיל', 'מידע מיקום', 'פוסטים',
    'לא נשמרה כתובת', 'דווח', 'ביקורת', 'הכנס לצ׳אט', 'פרטי המחזיקים בפרויקט', 'מנהל פרויקט',
    'מעצב', 'פגוש את המשתמשים שלנו', 'משימה', 'צור קשר', 'צור פוסט', 'בבקשה בדוק את',
    'דף צור קשר', 'להציע המלצות, ייעוץ, לתרום לצמיחת האתר, או לכל סיבה שתרגיש לנכונה!',
    'המשימה שלנו היא לאפשר לחובבי הבליסונג לקנות, למכור ולהחליף את בליסונגיהם. המטרה הסופית היא להפחית את הסיכון ולהסיר את כל התופעות הרעות או העסקאות המסוכנות האפשריות. אתר זה הוא מאמץ מתמיד המשתמש במשוב מהמשתמשים כדי לשפר את האתר באופן קבוע.',
    'כדי לגשת לכל ההיבטים של האתר הזה, אנא התחבר או הירשם. לאחר ההתחברות, תוכל ליצור פוסטים ולכתוב ביקורות על חשבונות משתמש אחרים.',
    'אנחנו רוצים להודות לך על השימוש באתר זה ומקווים שאתה מפרגן בו ושנהנה בו, וגם מוצא עסקאות בקלות. בכל מקרה, אנחנו מקווים שתהיה לך יום נפלא ושתהיה בריא!'
];


let ja = [
    'ホーム','作成','お問い合わせ','紹介','フィルター',
    'リセット','最小','最大','コスト','ステータス','ブランド','タイプ',
    '時間','刃','全て','利用可能','保留中','販売済み','交換済み',
    '販売中','交換中','購入中','販売中/交換中','新品','中古','ライブ','トレーナー','部品',
    'ログイン', 'ログアウト', 'サインアップ', '閲覧', 'サポートに問い合わせる', 'ユーザーポスト',
    '会社情報', '言語', 'タイトル', '価格', '状態', '販売タイプ',
    '説明', '画像をアップロード', '送信', '検索', '通貨', 'プロフィール',
    '設定', '新しいメッセージはありません', '新しい通知はありません', '寄付', '作成済み',
    '前へ', '次へ', 'ファーストネーム', 'ラストネーム', '金額', '表示名',
    '電話番号', 'Instagram', 'Facebook', 'プロフィール画像', 'キャンセル',
    '編集', '削除', 'はい', 'いいえ', 'この投稿を削除しますか？',
    '何か理由があればお気軽にメッセージを送信してください', '並べ替え', '詳細',
    '住所', 'ユニット', '市', '国', '州', '郵便番号', '画像を追加', '作成日',
    '削除', '基本情報', 'ソーシャル情報', 'プロフィール画像を変更', '場所情報', '投稿',
    '保存されている住所はありません', '報告', 'レビュー', 'チームに会う', 'ウェブ開発者', 'プロジェクトマネージャー',
    'デザイナー', 'ユーザーに会う', 'ミッション', 'お問い合わせ', '投稿を作成', 'どうぞご覧ください',
    'お問い合わせページ', '提案、アドバイス、このウェブサイトの成長への貢献、または他の理由でメッセージを送信していただくのは自由です！',
    '私たちのミッションは、バリソング愛好家がバリソングを購入、販売、交換できるようにすることです。最終的な目標は、リスクを最小限にし、詐欺師やトラブルを排除することです。このウェブサイトは、ユーザーのフィードバックを活用して継続的に改善されています。',
    'このウェブサイトのすべての機能にアクセスするには、ログインまたはサインアップしてください。ログインすると、投稿を作成したり、他のユーザーアカウントに対してレビューを書いたりできます。',
    'このウェブサイトをご利用いただき、楽しんでいただけ、簡単に取引を見つけたり行ったりしていただけることを願っております。いずれにせよ、素晴らしい一日をお過ごしいただき、ご自身を大切にしてください。'
];


let ko = [
    '홈','만들기','문의','소개','필터',
    '초기화','최소','최대','비용','상태','브랜드','유형',
    '시간','칼','모두','사용 가능','대기 중','판매','교환됨',
    '판매 중','교환 중','구매 중','판매/교환 중','새 제품','중고','라이브','트레이너','부품',
    '로그인', '로그아웃', '가입하기', '찾아보기', '고객 지원 문의', '사용자 게시물',
    '회사 정보', '언어', '제목', '가격', '상태', '판매 유형',
    '설명', '이미지 업로드', '제출', '검색', '통화', '프로필',
    '설정', '새로운 메시지 없음', '새로운 알림 없음', '기부', '생성됨',
    '이전', '다음', '이름', '성', '금액', '표시 이름',
    '전화 번호', '인스타그램', '페이스북', '프로필 사진', '취소',
    '편집', '삭제', '예', '아니오', '이 게시물을 삭제하시겠습니까?',
    '어떤 이유로든 메시지를 보내 주십시오', '정렬 기준', '더 보기',
    '주소', '단위', '도시', '국가', '주', '우편 번호', '이미지 추가', '생성 날짜',
    '제거', '기본 정보', '소셜 정보', '프로필 사진 변경', '위치 정보', '게시물',
    '저장된 주소가 없습니다', '신고', '리뷰', '팀 만나기', '웹 개발자', '프로젝트 관리자',
    '디자이너', '우리 사용자 만나기', '미션', '문의하기', '게시물 만들기', '제안, 조언, 이 웹사이트의 성장에 기여하거나 다른 어떤 이유로든 문의하세요!',
    '저희의 미션은 발리송 애호가들이 자신의 발리송을 구매, 판매, 교환할 수 있도록 하는 것입니다. 궁극적인 목표는 위험을 최소화하고 모든 잠재적인 사기꾼이나 문제 있는 거래를 제거하는 것입니다. 이 웹사이트는 지속적인 노력의 일환으로 사용자 의견을 활용하여 계속해서 개선되고 있습니다.',
    '이 웹사이트의 모든 측면에 액세스하려면 로그인하거나 가입하세요. 로그인하면 게시물을 만들거나 다른 사용자 계정에 대한 리뷰를 작성할 수 있습니다.',
    '이 웹사이트를 사용해 주셔서 감사합니다. 편리하게 거래를 찾거나 진행하시기를 바라며 즐거운 하루 보내시고 건강하세요!'
];

let pl = [
    'Strona główna','Utwórz','Kontakt','O nas','Filtruj',
    'Resetuj','Minimalna','Maksymalna','Koszt','Status','Marka','Typ',
    'Czas','Ostrze','Wszystko','Dostępne','Oczekujące','Sprzedane','Wymienione',
    'Sprzedaj','Wymień','Kup','Sprzedaj/Wymień','Nowe','Używane','Na żywo','Trener','Części',
    'Zaloguj się', 'Wyloguj się', 'Zarejestruj się', 'Przeglądaj', 'Skontaktuj się z obsługą', 'Post użytkownika',
    'O nas', 'Język', 'Tytuł', 'Cena', 'Stan', 'Typ sprzedaży',
    'Opis', 'Dodaj obraz', 'Wyślij', 'Szukaj', 'Waluta', 'Profil',
    'Ustawienia', 'Brak nowych wiadomości', 'Brak nowych powiadomień', 'Wsparcie', 'Utworzono',
    'Poprzedni', 'Następny', 'Imię', 'Nazwisko', 'Kwota', 'Nazwa wyświetlana',
    'Numer telefonu', 'Instagram', 'Facebook', 'Zdjęcie profilowe', 'Anuluj',
    'Edytuj', 'Usuń', 'Tak', 'Nie', 'Czy na pewno chcesz usunąć ten post?',
    'Prosimy o wysłanie do nas wiadomości z dowolnego powodu', 'Sortuj według', 'Więcej',
    'Adres', 'Jednostka', 'Miasto', 'Kraj', 'Województwo', 'Kod pocztowy', 'Dodaj obraz', 'Data utworzenia',
    'Usuń', 'Informacje podstawowe', 'Informacje społeczne', 'Zmień zdjęcie profilowe', 'Informacje o lokalizacji', 'Posty',
    'Brak zapisanych adresów', 'Zgłoś', 'Recenzuj', 'Poznaj zespół', 'Programista webowy', 'Kierownik projektu',
    'Projektant', 'Poznaj naszych użytkowników', 'Misja', 'Kontakt', 'Utwórz post', 'Zapraszamy do odwiedzenia',
    'Strona kontaktowa', 'aby złożyć sugestie, rady, przyczynić się do rozwoju tej witryny lub z jakiegokolwiek innego powodu!',
    'Nasza misja polega na umożliwieniu entuzjastom balisongów kupowania, sprzedawania i wymieniania swoich balisongów. Ostatecznym celem jest zminimalizowanie ryzyka i wyeliminowanie wszystkich potencjalnych oszustów lub problematycznych transakcji. Ta witryna jest ciągłym wysiłkiem, który wykorzystuje opinie użytkowników do ciągłego doskonalenia.',
    'Aby uzyskać dostęp do wszystkich funkcji tej witryny, zaloguj się lub zarejestruj. Po zalogowaniu będziesz mógł tworzyć posty i pisać recenzje na temat innych kont użytkowników.',
    'Chcielibyśmy podziękować za korzystanie z tej witryny i mamy nadzieję, że aktywnie z niej korzystasz oraz znajdujesz i zawierasz transakcje z łatwością. W każdym przypadku życzymy miłego dnia i dbaj o siebie!'
];


let pt = [
    'Início', 'Criar', 'Contato', 'Sobre', 'Filtrar',
    'Redefinir', 'Mínimo', 'Máximo', 'Custo', 'Estado', 'Marca', 'Tipo',
    'Tempo', 'Lâmina', 'Todos', 'Disponível', 'Pendente', 'Vendido', 'Troca',
    'Venda', 'Troca', 'Compra', 'Venda/Troca', 'Novo', 'Usado', 'Ao vivo', 'Treinador', 'Peças',
    'Entrar', 'Sair', 'Registrar', 'Navegar', 'Contatar Suporte', 'Post do Usuário',
    'Sobre Nós', 'Idioma', 'Título', 'Preço', 'Condição', 'Tipo de Venda',
    'Descrição', 'Carregar Imagem', 'Enviar', 'Buscar', 'Moeda', 'Perfil',
    'Configurações', 'Nenhuma nova mensagem', 'Nenhuma nova notificação', 'Doar', 'Criado',
    'Anterior', 'Próximo', 'Nome', 'Sobrenome', 'Quantidade', 'Nome de Exibição',
    'Número de Telefone', 'Instagram', 'Facebook', 'Foto de Perfil', 'Cancelar',
    'Editar', 'Excluir', 'Sim', 'Não', 'Deseja excluir esta postagem?',
    'Por favor, sinta-se à vontade para nos enviar uma mensagem por qualquer motivo', 'Ordenar por', 'Mais',
    'Endereço', 'Unidade', 'Cidade', 'País', 'Estado', 'Código Postal', 'Adicionar Imagem', 'Data de Criação',
    'Remover', 'Informações Básicas', 'Informações Sociais', 'Alterar Foto de Perfil', 'Informações de Localização', 'Postagens',
    'Nenhum endereço salvo', 'Denunciar', 'Avaliar', 'Conheça a Equipe', 'Desenvolvedor Web', 'Gerente de Projeto',
    'Designer', 'Conheça Nossos Usuários', 'Missão', 'Contate-nos', 'Criar Postagem', 'Por favor, visite a',
    'Página de Contato', 'para oferecer sugestões, aconselhar, contribuir para o crescimento deste site ou por qualquer motivo que você considere adequado!',
    'Nossa missão é permitir que os entusiastas de balisong comprem, vendam e troquem seus balisongs. O objetivo final é reduzir o risco envolvido e eliminar todas as potenciais fraudes ou transações problemáticas. Este site é um esforço contínuo que utiliza o feedback dos usuários para melhorar continuamente.',
    'Para acessar todos os aspectos deste site, faça login ou registre-se. Depois de fazer login, você poderá criar postagens e escrever avaliações sobre as contas de outros usuários.',
    'Queremos agradecer por usar este site e esperamos que você o aproveite ativamente, além de encontrar/fazer negócios com facilidade. De qualquer forma, esperamos que você tenha um ótimo dia e cuide-se!'
];


let ru = [
    'Главная', 'Создать', 'Контакты', 'О нас', 'Фильтр',
    'Сброс', 'Минимум', 'Максимум', 'Стоимость', 'Статус', 'Бренд', 'Тип',
    'Время', 'Лезвие', 'Все', 'Доступно', 'В ожидании', 'Продано', 'Обмен',
    'Продажа', 'Обмен', 'Покупка', 'Продажа/Обмен', 'Новое', 'Б/у', 'В прямом эфире', 'Тренер', 'Детали',
    'Войти', 'Выйти', 'Зарегистрироваться', 'Просмотр', 'Свяжитесь с поддержкой', 'Пост пользователя',
    'О нас', 'Язык', 'Заголовок', 'Цена', 'Состояние', 'Тип продажи',
    'Описание', 'Загрузить изображение', 'Отправить', 'Поиск', 'Валюта', 'Профиль',
    'Настройки', 'Нет новых сообщений', 'Нет новых уведомлений', 'Пожертвовать', 'Создано',
    'Предыдущая', 'Следующая', 'Имя', 'Фамилия', 'Сумма', 'Имя для отображения',
    'Номер телефона', 'Instagram', 'Facebook', 'Фото профиля', 'Отмена',
    'Редактировать', 'Удалить', 'Да', 'Нет', 'Хотите удалить этот пост?',
    'Пожалуйста, не стесняйтесь отправить нам сообщение по любой причине', 'Сортировать по', 'Еще',
    'Адрес', 'Единица', 'Город', 'Страна', 'Регион', 'Почтовый индекс', 'Добавить изображение', 'Дата создания',
    'Удалить', 'Основная информация', 'Социальная информация', 'Изменить фото профиля', 'Информация о местоположении', 'Посты',
    'Нет сохраненных адресов', 'Сообщить', 'Оценить', 'Познакомьтесь с командой', 'Веб-разработчик', 'Менеджер проекта',
    'Дизайнер', 'Познакомьтесь с нашими пользователями', 'Миссия', 'Свяжитесь с нами', 'Создать пост', 'Пожалуйста, посетите',
    'Страницу контактов', 'чтобы предложить свои идеи, дать советы, внести вклад в развитие этого сайта или по любой другой причине, которую вы считаете уместной!',
    'Наша миссия - позволить любителям балисонгов покупать, продавать и обмениваться своими балисонгами. Конечной целью является снижение рисков и устранение всех потенциальных мошенников или проблемных сделок. Этот сайт является постоянным усилием, использующим отзывы пользователей для непрерывного улучшения.',
    'Для доступа ко всем функциям этого сайта войдите или зарегистрируйтесь. После входа вы сможете создавать посты и писать отзывы о других аккаунтах пользователей.',
    'Мы хотели бы поблагодарить вас за использование этого сайта и надеемся, что вы активно им пользуетесь, а также легко находите/совершаете сделки. В любом случае, желаем вам отличного дня и берегите себя!'
];


let tr = [
    'Anasayfa', 'Oluştur', 'İletişim', 'Hakkında', 'Filtrele',
    'Sıfırla', 'Minimum', 'Maksimum', 'Maliyet', 'Durum', 'Marka', 'Tip',
    'Zaman', 'Bıçak', 'Tümü', 'Mevcut', 'Beklemede', 'Satıldı', 'Takas Edildi',
    'Sat', 'Takas Et', 'Satın Al', 'Sat/Takas Et', 'Yeni', 'Kullanılmış', 'Canlı', 'Eğitmen', 'Parçalar',
    'Giriş Yap', 'Çıkış Yap', 'Üye Ol', 'Gözat', 'Destekle İletişim', 'Kullanıcı Gönderisi',
    'Hakkımızda', 'Dil', 'Başlık', 'Fiyat', 'Durum', 'Satış Türü',
    'Açıklama', 'Resim Yükle', 'Gönder', 'Ara', 'Para Birimi', 'Profil',
    'Ayarlar', 'Yeni mesaj yok', 'Yeni bildirim yok', 'Bağış Yap', 'Oluşturuldu',
    'Önceki', 'Sonraki', 'Ad', 'Soyad', 'Miktar', 'Görünen Ad',
    'Telefon Numarası', 'Instagram', 'Facebook', 'Profil Resmi', 'İptal',
    'Düzenle', 'Sil', 'Evet', 'Hayır', 'Bu gönderiyi silmek istiyor musunuz?',
    'Herhangi bir nedenle bize mesaj göndermekten çekinmeyin', 'Şuna göre sırala', 'Daha fazla',
    'Adres', 'Birim', 'Şehir', 'Ülke', 'Eyalet', 'Posta Kodu', 'Resim Ekle', 'Oluşturulma Tarihi',
    'Kaldır', 'Temel Bilgiler', 'Sosyal Bilgiler', 'Profil Resmini Değiştir', 'Konum Bilgileri', 'Gönderiler',
    'Kayıtlı adres yok', 'Bildir', 'Değerlendir', 'Ekibimizi Tanıyın', 'Web Geliştirici', 'Proje Yöneticisi',
    'Tasarımcı', 'Kullanıcılarımızı Tanıyın', 'Misyon', 'Bize Ulaşın', 'Gönderi Oluştur', 'Lütfen',
    'İletişim Sayfasını ziyaret edin', 'önerilerde bulunmak, tavsiyelerde bulunmak, bu web sitesinin büyümesine katkıda bulunmak veya uygun gördüğünüz başka bir nedenle mesaj göndermek için!',
    'Misyonumuz balisong tutkunlarının balisonglarını satın almasını, satmasını ve takas etmesini sağlamaktır. Nihai hedef, riski en aza indirmek ve tüm potansiyel dolandırıcıları veya sorunlu işlemleri ortadan kaldırmaktır. Bu web sitesi, sürekli iyileştirmeler için kullanıcı geri bildirimini kullanan sürekli bir çaba içindedir.',
    'Bu web sitesinin tüm özelliklerine erişmek için giriş yapın veya üye olun. Giriş yaptıktan sonra gönderi oluşturabilir ve diğer kullanıcıların hesapları hakkında inceleme yazabilirsiniz.',
    'Bu web sitesini kullanmanızı ve aktif olarak kullanmanızı umuyoruz, aynı zamanda kolayca anlaşmalar bulmanızı/gerçekleştirmenizi diliyoruz. Her durumda harika bir gün geçirmenizi ve kendinize iyi bakmanızı diliyoruz!'
];


let vi = [
    'Trang chủ', 'Tạo', 'Liên hệ', 'Về chúng tôi', 'Lọc',
    'Đặt lại', 'Tối thiểu', 'Tối đa', 'Giá', 'Tình trạng', 'Thương hiệu', 'Loại',
    'Thời gian', 'Lưỡi dao', 'Tất cả', 'Sẵn sàng', 'Chờ duyệt', 'Đã bán', 'Đã đổi',
    'Bán', 'Đổi', 'Mua', 'Bán/Đổi', 'Mới', 'Cũ', 'Trực tiếp', 'Hướng dẫn viên', 'Phụ kiện',
    'Đăng nhập', 'Đăng xuất', 'Đăng ký', 'Duyệt', 'Liên hệ hỗ trợ', 'Bài đăng của người dùng',
    'Giới thiệu', 'Ngôn ngữ', 'Tiêu đề', 'Giá', 'Tình trạng', 'Loại bán',
    'Mô tả', 'Tải ảnh lên', 'Gửi', 'Tìm kiếm', 'Tiền tệ', 'Hồ sơ',
    'Cài đặt', 'Không có tin nhắn mới', 'Không có thông báo mới', 'Ủng hộ', 'Đã tạo',
    'Trước', 'Tiếp', 'Tên', 'Họ', 'Số tiền', 'Tên hiển thị',
    'Số điện thoại', 'Instagram', 'Facebook', 'Ảnh hồ sơ', 'Hủy',
    'Chỉnh sửa', 'Xóa', 'Có', 'Không', 'Bạn có muốn xóa bài đăng này không?',
    'Vui lòng gửi cho chúng tôi một tin nhắn với bất kỳ lý do nào', 'Sắp xếp theo', 'Thêm',
    'Địa chỉ', 'Đơn vị', 'Thành phố', 'Quốc gia', 'Tiểu bang', 'Mã bưu chính', 'Thêm hình ảnh', 'Ngày tạo',
    'Xóa', 'Thông tin cơ bản', 'Thông tin xã hội', 'Thay đổi ảnh hồ sơ', 'Thông tin vị trí', 'Bài viết',
    'Không có địa chỉ đã lưu', 'Báo cáo', 'Đánh giá', 'Gặp đội ngũ', 'Nhà phát triển web', 'Quản lý dự án',
    'Thiết kế viên', 'Gặp gỡ người dùng của chúng tôi', 'Sứ mệnh', 'Liên hệ chúng tôi', 'Tạo bài đăng', 'Vui lòng kiểm tra',
    'Trang Liên hệ của chúng tôi', 'để đề xuất, tư vấn, đóng góp cho sự phát triển của trang web này hoặc bất kỳ lý do nào bạn thấy thích!',
    'Sứ mệnh của chúng tôi là cho phép người yêu thích balisong mua, bán và trao đổi balisong của họ. Mục tiêu cuối cùng là giảm thiểu rủi ro và loại bỏ tất cả các gian lận tiềm năng hoặc giao dịch có vấn đề. Trang web này là một nỗ lực liên tục sử dụng phản hồi từ người dùng để không ngừng cải tiến.',
    'Để truy cập tất cả các khía cạnh của trang web này, hãy đăng nhập hoặc đăng ký. Sau khi đăng nhập, bạn có thể tạo bài đăng và viết đánh giá về tài khoản của người dùng khác.',
    'Chúng tôi muốn cảm ơn bạn đã sử dụng trang web này và hy vọng bạn đang tận hưởng nó một cách tích cực, cùng với việc tìm thấy/đạt được các giao dịch một cách dễ dàng. Dù sao đi nữa, chúng tôi hy vọng bạn có một ngày tuyệt vời và hãy chăm sóc bản thân!'
];


let zh = [
    '首页', '创建', '联系', '关于', '筛选',
    '重置', '最低', '最高', '成本', '状态', '品牌', '类型',
    '时间', '刀刃', '全部', '可用', '待处理', '已售', '已交换',
    '出售', '交换', '购买', '出售/交换', '新', '旧', '直播', '教练', '零件',
    '登录', '登出', '注册', '浏览', '联系支持', '用户帖子',
    '关于我们', '语言', '标题', '价格', '状态', '销售类型',
    '描述', '上传图片', '提交', '搜索', '货币', '个人资料',
    '设置', '没有新消息', '没有新通知', '捐赠', '已创建',
    '上一页', '下一页', '名字', '姓氏', '金额', '显示名称',
    '电话号码', 'Instagram', 'Facebook', '个人头像', '取消',
    '编辑', '删除', '是', '否', '您确定要删除此帖吗？',
    '请随时发送我们消息，无论出于什么原因', '按照排序', '更多',
    '地址', '单位', '城市', '国家', '州', '邮政编码', '添加图片', '创建日期',
    '删除', '基本信息', '社交信息', '更改个人头像', '位置信息', '帖子',
    '没有保存的地址', '举报', '评价', '了解团队', 'Web开发者', '项目经理',
    '设计师', '了解我们的用户', '使命', '联系我们', '创建帖子', '请查看我们的',
    '联系我们页面', '提供建议、意见，或为该网站的增长做出贡献，或者出于您认为合适的任何其他原因发送消息！',
    '我们的使命是使巴利松爱好者能够购买、销售和交换他们的巴利松刀。最终目标是降低风险并消除所有潜在的欺诈行为或问题交易。这个网站是一个不断努力利用用户反馈不断改进的过程。',
    '要访问此网站的所有功能，请登录或注册。登录后，您将能够创建帖子并为其他用户的帐户编写评论。',
    '我们感谢您使用此网站，并希望您积极地享受它，轻松找到/进行交易。无论如何，我们希望您拥有美好的一天，照顾好自己！'
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
