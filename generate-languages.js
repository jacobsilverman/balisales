let ar = ["الصفحة الرئيسية", "إنشاء" , "جهة الاتصال" , "حول" , "تصفية" ,
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

let de = ['Startseite', 'Erstellen', 'Kontakt', 'Über', 'Filter',
'Zurücksetzen', 'Minimum', 'Maximum', 'Kosten', 'Status', 'Marke', 'Typ',
'Zeit', 'Blade', 'Alle', 'Verfügbar', 'Ausstehend', 'Verkauft', 'Getauscht',
'Verkaufen', 'Handeln', 'Kaufen', 'Neu', 'Alt', 'Live', 'Trainer', 'Teile',
'Anmelden', 'Abmelden', 'Anmelden', 'Durchsuchen', 'Support kontaktieren', 'Benutzerbeitrag',
'Über uns', 'Sprache', 'Titel', 'Preis', 'Zustand', 'Verkaufsart',
'Beschreibung', 'Bild hochladen', 'Senden', 'Suchen', 'Profil',
'Einstellungen', 'Keine neuen Nachrichten', 'Keine neuen Benachrichtigungen', 'Erstellt',
'Zurück', 'Nächster', 'Vorname', 'Nachname', 'Anzeigename',
'Telefonnummer', 'Instagram', 'Facebook', 'Profilbild', 'Abbrechen',
'Bearbeiten', 'Löschen', 'Ja', 'Nein', 'Möchten Sie diesen Beitrag löschen?',
'Bitte zögern Sie nicht, uns aus irgendeinem Grund eine Nachricht zu senden'];

let en = ['Home','Create','Contact','About','Filter',
'Reset','Minimum','Maximum','Cost','Status','Brand','Type',
'Time','Blade','All','Available','Pending','Sold','Traded',
'Selling','Trading','Buying','New','Old','Live','Trainer','Parts',
'Login', 'Logout', 'Signup', 'Browse', 'Contact Support', 'User Post',
'About Us', 'Language', 'Title', 'Price', 'Condition', 'Sale Type',
'Description', 'Upload Image', 'Submit', 'Search', 'Currency', 'Profile', 
'Settings', 'no new messages', 'no new alerts', 'Donate', 'Created',
'Previous', 'Next', 'First Name', 'Last Name', 'Amount', 'Display Name',
'Phone Number', 'Instagram', 'Facebook', 'Profile Picture', 'Cancel',
'Edit', 'Delete', 'Yes', 'No', 'Do you want to delete this post?',
'Please feel free to send us a message for any reason'];

let es = ['Inicio', 'Crear', 'Contacto', 'Acerca de', 'Filtro',
'Restablecer', 'Mínimo', 'Máximo', 'Coste', 'Estado', 'Marca', 'Tipo',
'Tiempo', 'Blade', 'Todos', 'Disponible', 'Pendiente', 'Vendido', 'Negociado',
'Venta', 'Comercio', 'Compra', 'Nuevo', 'Antiguo', 'En vivo', 'Entrenador', 'Piezas',
'Iniciar sesión', 'Cerrar sesión', 'Registrarse', 'Examinar', 'Contactar con soporte', 'Publicación de usuario',
'Acerca de nosotros', 'Idioma', 'Título', 'Precio', 'Condición', 'Tipo de venta',
'Descripción', 'Subir imagen', 'Enviar', 'Buscar', 'Perfil',
'Configuración', 'sin mensajes nuevos', 'sin alertas nuevas', 'Creado',
'Anterior', 'Siguiente', 'Nombre', 'Apellido', 'Nombre para mostrar',
'Número de teléfono', 'Instagram', 'Facebook', 'Imagen de perfil', 'Cancelar',
'Editar', 'Eliminar', 'Sí', 'No', '¿Quieres eliminar esta publicación?',
'No dude en enviarnos un mensaje por cualquier motivo'];

let fr = ['Accueil','Créer','Contact','À propos','Filtrer',
'Réinitialiser','Minimum','Maximum','Coût','Statut','Marque','Type',
'Temps','Lame','Tous','Disponible','En attente','Vendu','Échangé',
'Vente','Trading','Achat','Nouveau','Ancien','Live','Formateur','Pièces',
'Connexion', 'Déconnexion', 'Inscription', 'Parcourir', "Contacter l'assistance", 'Poste utilisateur',
'À propos de nous', 'Langue', 'Titre', 'Prix', 'Condition', 'Type de vente',
'Description', 'Télécharger une image', 'Soumettre', 'Rechercher', 'Profil',
'Paramètres', 'pas de nouveaux messages', 'pas de nouvelles alertes', 'Créé',
'Précédent', 'Suivant', 'Prénom', 'Nom', "Nom d'affichage",
'Numéro de téléphone', 'Instagram', 'Facebook', 'Photo de profil', 'Annuler',
'Modifier', 'Supprimer', 'Oui', 'Non', 'Voulezvous supprimer ce message ?',
"N'hésitez pas à nous envoyer un message pour quelque raison que ce soit"];

let hi = ['होम', 'क्रिएट', 'कॉन्टैक्ट', 'अबाउट', 'फिल्टर',
'रीसेट', 'न्यूनतम', 'अधिकतम', 'लागत', 'स्थिति', 'ब्रांड', 'प्रकार',
'टाइम', 'ब्लेड', 'ऑल', 'अवेलेबल', 'पेंडिंग', 'सोल्ड', 'ट्रेडेड',
'बेचना', 'ट्रेडिंग', 'खरीदना', 'नया', 'पुराना', 'लाइव', 'ट्रेनर', 'पार्ट्स',
'लॉगिन', 'लॉगआउट', 'साइनअप', 'ब्राउज', 'संपर्क सहायता', 'यूजर पोस्ट',
'हमारे बारे में', 'भाषा', 'शीर्षक', 'कीमत', 'शर्त', 'बिक्री का प्रकार',
'विवरण', 'इमेज अपलोड करें', 'सबमिट', 'खोज', 'प्रोफाइल',
'सेटिंग्स', 'कोई नया संदेश नहीं', 'कोई नया अलर्ट नहीं', 'निर्मित',
'पिछला', 'अगला', 'प्रथम नाम', 'अंतिम नाम', 'प्रदर्शन नाम',
'फोन नंबर', 'इंस्टाग्राम', 'फेसबुक', 'प्रोफाइल पिक्चर', 'रद्द करें',
'संपादित करें', 'हटाएं', 'हां', 'नहीं', 'क्या आप इस पोस्ट को हटाना चाहते हैं?',
'कृपया हमें किसी भी कारण से बेझिझक संदेश भेजें'];

let id = ['Beranda', 'Buat', 'Kontak', 'Tentang', 'Filter',
'Reset','Minimum','Maksimum','Biaya','Status','Merek','Jenis',
'Waktu', 'Pisau', 'Semua', 'Tersedia', 'Tertunda', 'Terjual', 'Diperdagangkan',
'Jual', 'Perdagangan', 'Beli', 'Baru', 'Lama', 'Hidup', 'Trainer', 'Bagian',
'Masuk', 'Keluar', 'Daftar', 'Jelajahi', 'Hubungi Dukungan', 'Posting Pengguna',
'Tentang Kami', 'Bahasa', 'Judul', 'Harga', 'Kondisi', 'Jenis Penjualan',
'Deskripsi', 'Unggah Gambar', 'Kirim', 'Cari', 'Profil',
'Pengaturan', 'tidak ada pesan baru', 'tidak ada lansiran baru', 'Dibuat',
'Sebelumnya', 'Selanjutnya', 'Nama Depan', 'Nama Belakang', 'Nama Tampilan',
'Nomor Telepon', 'Instagram', 'Facebook', 'Gambar Profil', 'Batalkan',
'Edit', 'Hapus', 'Ya', 'Tidak', 'Apakah Anda ingin menghapus posting ini?',
'Jangan ragu untuk mengirimkan pesan kepada kami untuk alasan apa pun'];

let is = ['Heima', 'Búa til', 'Tengiliður', 'Um', 'Sía',
'Endurstilla', 'Lágmark', 'Hámark', 'Kostnaður', 'Staða', 'Vörumerki', 'Tegund',
'Time','Blade','Allt','Available','Pending','Sold','Traded',
'Að selja','Versla','Kaupa','Nýtt','Gamalt','Lifandi','Þjálfari','Hlutar',
'Innskráning', 'Útskráning', 'Skráning', 'Vafrað', 'Hafðu samband við þjónustudeild', 'Notandapóstur',
'Um okkur', 'tungumál', 'Titill', 'verð', 'ástand', 'útsölutegund',
'Lýsing', 'Hlaða inn mynd', 'Senda inn', 'Leita', 'Profile',
'Stillingar', 'engin ný skilaboð', 'engar nýjar tilkynningar', 'Búið til',
'Fyrri', 'Næsta', 'Fornafn', 'Eftirnafn', 'Skjánafn',
'Símanúmer', 'Instagram', 'Facebook', 'Prófílmynd', 'Hætta við',
'Breyta', 'Eyða', 'Já', 'Nei', 'Viltu eyða þessari færslu?',
'Vinsamlegast ekki hika við að senda okkur skilaboð af hvaða ástæðu sem er'];

let it = ['Home','Crea','Contatto','Informazioni','Filtro',
'Reset','Minimo','Massimo','Costo','Stato','Marca','Tipo',
'Tempo','Lama','Tutto','Disponibile','In attesa','Venduto','Scambiato',
'Vendita','Commercio','Acquisto','Nuovo','Vecchio','Live','Trainer','Ricambi',
'Accesso', 'Esci', 'Iscriviti', 'Sfoglia', "Contatta l'assistenza", 'Post utente',
'Chi siamo', 'Lingua', 'Titolo', 'Prezzo', 'Condizione', 'Tipo di vendita',
'Descrizione', 'Carica immagine', 'Invia', 'Cerca', 'Profilo',
'Impostazioni', 'nessun nuovo messaggio', 'nessun nuovo avviso', 'Creato',
'Precedente', 'Successivo', 'Nome', 'Cognome', 'Nome visualizzato',
'Numero di telefono', 'Instagram', 'Facebook', 'Immagine del profilo', 'Annulla',
'Modifica', 'Elimina', 'Sì', 'No', 'Vuoi eliminare questo post?',
"Non esitate a inviarci un messaggio per qualsiasi motivo"];

let iw = ['בית', 'צור', 'צור קשר', 'אודות', 'מסנן',
'איפוס','מינימום','מקסימום','עלות','סטטוס','מותג','סוג',
'זמן', 'להב', 'הכל', 'זמין', 'בהמתנה', 'נמכר', 'נסחר',
'מכירה','מסחר','קנייה','חדש','ישן','חי','מאמן','חלקים',
'התחבר', 'יציאה', 'הרשמה', 'עיון', 'צור קשר עם התמיכה', 'פוסט משתמש',
'אודותינו', 'שפה', 'כותרת', 'מחיר', 'מצב', 'סוג מכירה',
'תיאור', 'העלה תמונה', 'שלח', 'חיפוש', 'פרופיל',
'הגדרות', 'אין הודעות חדשות', 'אין התראות חדשות', 'נוצר',
'קודם', 'הבא', 'שם פרטי', 'שם משפחה', 'שם תצוגה',
'מספר טלפון', 'אינסטגרם', 'פייסבוק', 'תמונת פרופיל', 'ביטול',
'ערוך', 'מחק', 'כן', 'לא', 'האם אתה רוצה למחוק את הפוסט הזה?',
'אנא אל תהסס לשלוח לנו הודעה מכל סיבה'];

let ja = ['ホーム','作成','連絡先','概要','フィルタ',
    'リセット','最小','最大','コスト','ステータス','ブランド','タイプ',
    '時間','ブレード','すべて','利用可能','保留中','売却済み','取引済み',
    '販売','取引','購入','新品','古い','ライブ','トレーナー','パーツ',
    'ログイン','ログアウト','サインアップ','閲覧','サポートへのお問い合わせ','ユーザー投稿',
    '私たちについて','言語','タイトル','価格','状態','販売タイプ',
    '説明','画像のアップロード','送信','検索','プロフィール',
    '設定','新しいメッセージなし','新しいアラートなし','作成済み',
    '前','次','名','姓','表示名',
    '電話番号','Instagram','Facebook','プロフィール写真','キャンセル',
    '編集', '削除', 'はい', 'いいえ', 'この投稿を削除しますか?',
    'どんな理由でもお気軽にメッセージを送ってください'];

let ko = ['홈', '만들기', '연락처', '정보', '필터',
'재설정', '최소', '최대', '비용', '상태', '브랜드', '유형',
'시간', '블레이드', '전체', '사용 가능', '보류 중', '판매', '거래됨',
'판매','거래','구매','신규','구','라이브','트레이너','부품',
'로그인', '로그아웃', '회원가입', '찾아보기', '지원팀에 문의하기', '사용자 게시물',
'회사 소개', '언어', '제목', '가격', '조건', '판매 유형',
'설명', '이미지 업로드', '제출', '검색', '프로필',
'설정', '새 메시지 없음', '새 알림 없음', '생성됨',
'이전', '다음', '이름', '성', '표시 이름',
'전화번호', '인스타그램', '페이스북', '프로필사진', '취소',
'수정', '삭제', '예', '아니요', '이 게시물을 삭제하시겠습니까?',
'어떤 이유로든 메시지를 보내주세요'];

let pl = ['Strona główna', 'Utwórz', 'Kontakt', 'Informacje', 'Filtr',
    'Reset', 'Minimalny', 'Maksymalny', 'Koszt', 'Status', 'Marka', 'Typ',
    'Czas', 'Ostrze', 'Wszystkie', 'Dostępne', 'Oczekujące', 'Sprzedane', 'Wymienione',
    'Sprzedawanie', 'Handel', 'Kupowanie', 'Nowe', 'Stare', 'Na żywo', 'Trener', 'Części',
    'Logowanie', 'Wylogowanie', 'Zarejestruj się', 'Przeglądaj', 'Kontakt z pomocą techniczną', 'Post użytkownika',
    'O nas', 'Język', 'Tytuł', 'Cena', 'Stan', 'Rodzaj sprzedaży',
    'Opis', 'Prześlij obraz', 'Prześlij', 'Wyszukaj', 'Profil',
    'Ustawienia', 'brak nowych wiadomości', 'brak nowych alertów', 'Utworzono',
    'Poprzedni', 'Następny', 'Imię', 'Nazwisko', 'Wyświetlana nazwa',
    'Numer telefonu', 'Instagram', 'Facebook', 'Zdjęcie profilowe', 'Anuluj',
    'Edytuj', 'Usuń', 'Tak', 'Nie', 'Czy chcesz usunąć ten post?',
    'Prosimy o przesłanie nam wiadomości z dowolnego powodu'];

let pt = ['Home','Criar','Contato','Sobre','Filtro',
'Redefinir','Mínimo','Máximo','Custo','Status','Marca','Tipo',
'Tempo','Blade','Todos','Disponível','Pendente','Vendido','Negociado',
'Vender','Negociar','Comprar','Novo','Velho','Ao Vivo','Treinador','Peças',
'Login', 'Sair', 'Inscreverse', 'Navegar', 'Contactar o Suporte', 'Postagem do Utilizador',
'Sobre nós', 'Idioma', 'Título', 'Preço', 'Condição', 'Tipo de venda',
'Descrição', 'Carregar imagem', 'Enviar', 'Pesquisar', 'Perfil',
'Configurações', 'sem novas mensagens', 'sem novos alertas', 'Criado',
'Anterior', 'Próximo', 'Nome', 'Sobrenome', 'Nome de exibição',
'Número de telefone', 'Instagram', 'Facebook', 'Foto do perfil', 'Cancelar',
'Editar', 'Excluir', 'Sim', 'Não', 'Deseja excluir esta postagem?',
'Sintase à vontade para nos enviar uma mensagem por qualquer motivo'];

let ru = ['Главная', 'Создать', 'Контакты', 'О программе', 'Фильтр',
    'Сброс', 'Минимум', 'Максимум', 'Стоимость', 'Статус', 'Бренд', 'Тип',
    'Время', 'Блейд', 'Все', 'Доступно', 'Ожидание', 'Продано', 'Обмен',
    'Продажа', 'Торговля', 'Покупка', 'Новый', 'Старый', 'Живой', 'Тренер', 'Запчасти',
    'Войти', 'Выйти', 'Регистрация', 'Обзор', 'Связаться со службой поддержки', 'Сообщение пользователя',
    'О нас', 'Язык', 'Название', 'Цена', 'Условие', 'Тип продажи',
    'Описание', 'Загрузить изображение', 'Отправить', 'Поиск', 'Профиль',
    'Настройки', 'нет новых сообщений', 'нет новых предупреждений', 'Создано',
    'Предыдущий', 'Следующий', 'Имя', 'Фамилия', 'Отображаемое имя',
    'Номер телефона', 'Instagram', 'Facebook', 'Изображение профиля', 'Отмена',
    'Изменить', 'Удалить', 'Да', 'Нет', 'Удалить это сообщение?',
    'Пожалуйста, не стесняйтесь, присылайте нам сообщения по любой причине'];

let tr = ["Ana Sayfa", "Oluştur", "İletişim", "Hakkında", "Filtrele",
"Sıfırla", "Minimum", "Maksimum", "Maliyet", "Durum", "Marka", "Tür",
"Zaman", "Blade", "Tümü", "Mevcut", "Beklemede", "Satıldı", "Takas Edildi",
"Satış", "Ticaret", "Alış", "Yeni", "Eski", "Canlı", "Eğitmen", "Parçalar",
'Giriş', 'Çıkış', 'Kaydol', 'Gözat', 'Desteğe Ulaşın', 'Kullanıcı Gönderisi',
'Hakkımızda', 'Dil', 'Başlık', 'Fiyat', 'Koşul', 'Satış Türü',
'Açıklama', 'Resim Yükle', 'Gönder', 'Ara', 'Profil',
'Ayarlar', 'yeni mesaj yok', 'yeni uyarı yok', 'Oluşturuldu',
'Önceki', 'Sonraki', 'Ad', 'Soyadı', 'Görünen Ad',
'Telefon Numarası', 'Instagram', 'Facebook', 'Profil Resmi', 'İptal',
'Düzenle', 'Sil', 'Evet', 'Hayır', 'Bu gönderiyi silmek istiyor musunuz?',
'Lütfen herhangi bir nedenle bize mesaj göndermekten çekinmeyin'];

let vi = ['Trang chủ','Tạo','Liên hệ','Giới thiệu','Bộ lọc',
'Đặt lại','Tối thiểu','Tối đa','Chi phí','Trạng thái','Thương hiệu','Loại',
'Thời gian','Lưỡi kiếm','Tất cả','Có sẵn','Đang chờ xử lý','Đã bán','Đã giao dịch',
'Bán','Giao dịch','Mua','Mới','Cũ','Trực tiếp','Người huấn luyện','Phụ tùng',
'Đăng nhập', 'Đăng xuất', 'Đăng ký', 'Duyệt', 'Liên hệ với bộ phận hỗ trợ', 'Bài đăng của người dùng',
'Giới thiệu', 'Ngôn ngữ', 'Tiêu đề', 'Giá', 'Tình trạng', 'Loại giảm giá',
'Mô tả', 'Tải hình ảnh lên', 'Gửi', 'Tìm kiếm', 'Hồ sơ',
'Cài đặt', 'không có tin nhắn mới', 'không có cảnh báo mới', 'Đã tạo',
'Trước', 'Tiếp theo', 'Tên', 'Họ', 'Tên hiển thị',
'Số điện thoại', 'Instagram', 'Facebook', 'Ảnh hồ sơ', 'Hủy',
'Chỉnh sửa', 'Xóa', 'Có', 'Không', 'Bạn có muốn xóa bài đăng này không?',
'Xin vui lòng gửi cho chúng tôi một tin nhắn vì bất kỳ lý do gì'];

let zh = ['主页','创建','联系','关于','过滤器',
'重置','最小值','最大值','成本','状态','品牌','类型',
'时间','刀片','全部','可用','待定','已售出','已交易',
'卖出','交易','买入','新','旧','直播','培训师','零件',
'登录','注销','注册','浏览','联系支持','用户发布',
'关于我们','语言','标题','价格','条件','销售类型',
'描述', '上传图片', '提交', '搜索', '个人资料',
'设置','没有新消息','没有新警报','已创建',
'上一个','下一个','名字','姓氏','显示名称',
'电话号码', 'Instagram', 'Facebook', '头像', '取消',
'编辑', '删除', '是', '否', '你想删除这个帖子吗？',
'请随时向我们发送消息,无论出于何种原因'];

const hardCodedWords = ['baliplus', 'squid', 'kershaw', 'bradley', 'brs', 'mw', 'bbbarfly', 'hom', 'bm', 'bs', 'jk', 'nrb', 'svix', 'heibel', 'hypex', 'glidrco', 'mantis', 'theone', 'fellowship', 'biegler', 'flytanium', 'misc',1,2,3,4,5,6,7,8,9,10];

const t =(() => {
    let languages = [ar, de, en, es, fr, hi, id, is, it, iw, ja, ko, pl, pt, ru, tr, vi, zh];
    let result = ""
    for (let language of languages) {
        language = [...language, ...hardCodedWords]
        language = language.reduce((acc, word, index) => {
            acc[en[index]] = word;
            return acc;
        }, {})
        result += JSON.stringify(language)+'-';
    }

    console.log(result);
})()
