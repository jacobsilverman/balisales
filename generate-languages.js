
let ar = ['الصفحة الرئيسية','إنشاء','اتصل بنا','حول','تصفية',
    'إعادة تعيين','الحد الأدنى','الحد الأقصى','التكلفة','الحالة','العلامة التجارية','النوع',
    'الوقت','الشفرة','الكل','متاح','قيد الانتظار','تم البيع','تم التداول',
    'للبيع','للتبادل','شراء','جديد','قديم','مباشر','مدرب','قطع الغيار',
    'تسجيل الدخول','تسجيل الخروج','تسجيل','تصفح','الاتصال بالدعم','مشاركة المستخدم',
    'حول','اللغة','العنوان','السعر','الحالة','نوع البيع',
    'الوصف','تحميل الصورة','إرسال','البحث','العملة','الملف الشخصي',
    'الإعدادات','لا توجد رسائل جديدة','لا توجد تنبيهات جديدة','تبرع','تم الإنشاء',
    'السابق','التالي','الاسم الأول','الاسم الأخير','المبلغ','اسم العرض',
    'رقم الهاتف','انستغرام','فيس بوك','صورة البروفايل','إلغاء',
    'تعديل','حذف','نعم','لا','هل تريد حذف هذا المنشور؟',
    'يرجى عدم التردد في إرسال رسالة لنا لأي سبب','الترتيب حسب'];

let de = ['Startseite','Erstellen','Kontakt','Über uns','Filtern',
    'Zurücksetzen','Mindestens','Höchstens','Kosten','Status','Marke','Typ',
    'Zeit','Klinge','Alle','Verfügbar','Ausstehend','Verkauft','Gehandelt',
    'Verkaufen','Tauschen','Kaufen','Neu','Alt','Live','Trainer','Teile',
    'Anmelden','Abmelden','Registrieren','Durchsuchen','Support kontaktieren','Benutzerpost',
    'Über uns','Sprache','Titel','Preis','Zustand','Verkaufstyp',
    'Beschreibung','Bild hochladen','Senden','Suchen','Währung','Profil',
    'Einstellungen','Keine neuen Nachrichten','Keine neuen Benachrichtigungen','Spenden','Erstellt',
    'Vorherige','Nächste','Vorname','Nachname','Betrag','Anzeigename',
    'Telefonnummer','Instagram','Facebook','Profilbild','Abbrechen',
    'Bearbeiten','Löschen','Ja','Nein','Möchten Sie diesen Beitrag löschen?',
    'Bitte zögern Sie nicht, uns aus irgendeinem Grund eine Nachricht zu senden','Sortieren nach'];

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
    'Please feel free to send us a message for any reason', 'Sort By', 'More'];

let es = ['Inicio','Crear','Contacto','Acerca de','Filtrar',
    'Reiniciar','Mínimo','Máximo','Costo','Estado','Marca','Tipo',
    'Hora','Cuchilla','Todos','Disponible','Pendiente','Vendido','Intercambiado',
    'Vendiendo','Intercambiando','Comprando','Nuevo','Viejo','En vivo','Entrenador','Partes',
    'Iniciar sesión','Cerrar sesión','Registrarse','Navegar','Contactar soporte','Publicación del usuario',
    'Sobre nosotros','Idioma','Título','Precio','Condición','Tipo de venta',
    'Descripción','Cargar imagen','Enviar','Buscar','Moneda','Perfil',
    'Configuraciones','sin mensajes nuevos','sin alertas nuevas','Donar','Creado',
    'Anterior','Siguiente','Nombre','Apellido','Cantidad','Nombre de usuario',
    'Número de teléfono','Instagram','Facebook','Imagen de perfil','Cancelar',
    'Editar','Eliminar','Sí','No','¿Desea eliminar esta publicación?',
    'No dude en enviarnos un mensaje por cualquier motivo','Ordenar por'];

let fr = ['Accueil','Créer','Contact','À propos de','Filtre',
    'Réinitialiser','Minimum','Maximum','Coût','Statut','Marque','Type',
    'Temps','Lame','Tous','Disponible','En attente','Vendu','Échangé',
    'Vente','Échange','Achat','Neuf','Vieux','En direct','Entraîneur','Pièces',
    'Connexion','Déconnexion','Inscription','Parcourir','Contacter le support','Publication d\'utilisateur',
    'À propos de nous','Langue','Titre','Prix','État','Type de vente',
    'Description','Télécharger une image','Soumettre','Chercher','Devise','Profil',
    'Paramètres','pas de nouveaux messages','pas de nouvelles alertes','Donner','Créé',
    'Précédent','Suivant','Prénom','Nom de famille','Montant','Nom d\'affichage',
    'Numéro de téléphone','Instagram','Facebook','Photo de profil','Annuler',
    'Modifier','Supprimer','Oui','Non','Voulez vous supprimer cette publication?',
    'N\'hésitez pas à nous envoyer un message pour toute raison','Trier par'];

let hi = ['होम','बनाएँ','संपर्क करें','हमारे बारे में','फ़िल्टर',
    'रीसेट','न्यूनतम','अधिकतम','लागत','स्थिति','ब्रांड','प्रकार',
    'समय','ब्लेड','सभी','उपलब्ध','अपूर्ण','बेचा गया','विनिमयित',
    'बेचना','विनिमय','खरीदना','नया','पुराना','लाइव','ट्रेनर','भाग',
    'लॉगइन','लॉगआउट','साइनअप','ब्राउज़ करें','समर्थन संपर्क करें','उपयोगकर्ता पोस्ट',
    'हमारे बारे में','भाषा','शीर्षक','मूल्य','शर्त','विक्रय प्रकार',
    'विवरण','छवि अपलोड करें','जमा करें','खोजें','मुद्रा','प्रोफ़ाइल',
    'सेटिंग्स','कोई नई संदेश नहीं','कोई नई चेतावनी नहीं','दान करें','बनाया गया',
    'पिछला','अगला','पहला नाम','अंतिम नाम','राशि','प्रदर्शन नाम',
    'फोन नंबर','इंस्टाग्राम','फेसबुक','प्रोफ़ाइल चित्र','रद्द करें',
    'संपादित करें','हटाएं','हाँ','नहीं','क्या आप इस पोस्ट को हटाना चाहते हैं?',
    'कृपया किसी भी कारण से हमें एक संदेश भेजें','द्वारा क्रमबद्ध करें'];

let id = ['Rumah','Buat','Kontak','Tentang','Saring',
    'Setel ulang','Minimum','Maksimum','Biaya','Status','Merek','Tipe',
    'Waktu','Pisau','Semua','Tersedia','Ditunda','Terjual','Ditukar',
    'Penjual','Penukar','Pembeli','Baru','Lama','Langsung','Pelatih','Bagian',
    'Masuk','Keluar','Daftar','Telusuri','Hubungi dukungan','Pos pengguna',
    'Tentang kami','Bahasa','Judul','Harga','Kondisi','Jenis penjualan',
    'Deskripsi','Unggah gambar','Kirim','Cari','Mata uang','Profil',
    'Pengaturan','tidak ada pesan baru','tidak ada peringatan baru','Donasi','Dibuat',
    'Sebelumnya','Selanjutnya','Nama depan','Nama belakang','Jumlah','Nama tampilan',
    'Nomor telepon','Instagram','Facebook','Gambar profil','Batal',
    'Edit','Hapus','Ya','Tidak','Apakah Anda ingin menghapus pos ini?',
    'Silakan kirim pesan kepada kami untuk alasan apa pun','Urutkan Berdasarkan'];

let is = ['Heim','Búa til','Hafa samband','Um okkur','Sía',
    'Endurstilla','Lágmark','Hámark','Kostnaður','Staða','Vörumerki','Gerð',
    'Tími','Högg','Allt','Til boða','Í bið','Seldur','Skiptur','Söljandi',
    'Að skipta','Að kaupa','Nýtt','Gamalt','Lifandi','Þjálfari','Einingar',
    'Innskráning','Útskráning','Nýskrá','Fletta í gegnum','Hafa samband við stuðning',
    'Notenda færslu','Um okkur','Tungumál','Titill','Verð','Skilyrði','Sölu tegund',
    'Lýsing','Hlaða upp mynd','Senda','Leita','Gjaldmiðill','Prófíll',
    'Stillingar','Engar nýjar skilaboð','Engar nýjar áminningar','Gefa gjöf',
    'Búið til','Fyrri','Næsta','Fornafn','Eftirnafn','Upphæð','Sýna nafn',
    'Símanúmer','Instagram','Facebook','Prófílmynd','Hætta við',
    'Breyta','Eyða','Já','Nei','Viltu eyða þessari færslu?',
    'Vinsamlegast sendið okkur skilaboð af hvaða ástæðu sem er','Raða eftir'];

let it = ['Home','Crea','Contatti','Chi siamo','Filtra',
    'Resetta','Minimo','Massimo','Costo','Stato','Marca','Tipo',
    'Tempo','Lama','Tutti','Disponibile','In attesa','Venduto','Scambiato',
    'Vendita','Scambio','Acquisto','Nuovo','Vecchio','In diretta','Allenatore','Parti',
    'Accedi','Esci','Iscriviti','Sfoglia','Contatta il supporto','Post dell\'utente',
    'Chi siamo','Lingua','Titolo','Prezzo','Condizione','Tipo di vendita',
    'Descrizione','Carica immagine','Invia','Cerca','Valuta','Profilo',
    'Impostazioni','nessun nuovo messaggio','nessuna nuova notifica','Dona','Creato',
    'Precedente','Successivo','Nome','Cognome','Importo','Nome utente',
    'Numero di telefono','Instagram','Facebook','Immagine del profilo','Annulla',
    'Modifica','Elimina','Sì','No','Vuoi eliminare questo post?',
    'Non esitare a contattarci per qualsiasi motivo','Ordina per'];

let iw = ['בית','צור','צור קשר','אודות','סנן',
    'אתחל','מינימום','מקסימום','עלות','סטטוס','מותג','סוג',
    'זמן','להב','הכל','זמין','ממתין','נמכר','מוחלף',
    'מוכר','מחליף','קונה','חדש','ישן','לחיות','מאמן','חלקים',
    'כניסה','יציאה','הירשם','גלוש','צור קשר','פוסט משתמש',
    'אודותינו','שפה','כותרת','מחיר','מצב','סוג מכירה',
    'תיאור','העלה תמונה','שלח','חפש','מטבע','פרופיל',
    'הגדרות','אין הודעות חדשות','אין התראות חדשות','תרומה','נוצר',
    'קודם','הבא','שם פרטי','שם משפחה','סכום','שם לתצוגה',
    'מספר טלפון','אינסטגרם','פייסבוק','תמונת פרופיל','בטל',
    'עריכה','מחיקה','כן','לא','האם ברצונך למחוק פוסט זה?',
    'אנא צור איתנו קשר לכל מטרה','מיין לפי'];

let ja = ['ホーム','作成','お問い合わせ','約','フィルター',
    'リセット','最小','最大','費用','ステータス','ブランド','タイプ',
    '時間','刃','すべて','利用可能','保留中','売れた','トレード',
    '販売','トレード','購入','新しい','古い','ライブ','トレーナー','部品',
    'ログイン','ログアウト','サインアップ','閲覧','サポートに連絡する','ユーザーポスト',
    '私たちについて','言語','タイトル','価格','状態','セールスタイプ',
    '説明','画像をアップロード','提出','検索','通貨','プロフィール',
    '設定','新しいメッセージはありません','新しいアラートはありません','寄付','作成された',
    '前','次','ファーストネーム','ラストネーム','量','表示名',
    '電話番号','インスタグラム','フェイスブック','プロフィール写真','キャンセル',
    '編集','削除','はい','いいえ','この投稿を削除しますか？',
    '何か問題がある場合は、お気軽にお問い合わせください','ソート方法'];

let ko = ['홈','만들기','연락처','약','필터',
    '리셋','최소','최대','비용','상태','브랜드','유형',
    '시간','칼날','모두','이용 가능','보류 중','판매된','교환',
    '판매','교환','구매','새로운','오래된','라이브','트레이너','부품',
    '로그인','로그아웃','가입하기','찾아보기','지원에 문의하기','사용자 게시물',
    '회사 소개','언어','제목','가격','상태','판매 유형',
    '설명','이미지 업로드','제출','검색','화폐','프로필',
    '설정','새로운 메시지 없음','새로운 알림 없음','기부','작성',
    '이전','다음','이름','성','양','표시 이름',
    '전화 번호','인스타그램','페이스북','프로필 사진','취소',
    '편집','삭제','예','아니오','이 게시물을 삭제하시겠습니까?',
    '어떤 이유로든 메시지를 보내주세요.','정렬 기준'];

let pl = ['Strona główna','Utwórz','Kontakt','O nas','Filtr',
    'Resetuj','Minimalna','Maksymalna','Koszt','Status','Marka','Typ',
    'Czas','Ostrze','Wszystko','Dostępne','Oczekujące','Sprzedane','Wymienione',
    'Sprzedaż','Wymiana','Kupno','Nowe','Stare','Na żywo','Trener','Części',
    'Zaloguj się','Wyloguj się','Zarejestruj się','Przeglądaj','Skontaktuj się z pomocą techniczną','Post użytkownika',
    'O nas','Język','Tytuł','Cena','Stan','Typ sprzedaży',
    'Opis','Prześlij zdjęcie','Zatwierdź','Szukaj','Waluta','Profil',
    'Ustawienia','brak nowych wiadomości','brak nowych alertów','Wspomóż nas','Utworzono',
    'Poprzedni','Następny','Imię','Nazwisko','Kwota','Nazwa wyświetlana',
    'Numer telefonu','Instagram','Facebook','Zdjęcie profilowe','Anuluj',
    'Edytuj','Usuń','Tak','Nie','Czy na pewno chcesz usunąć ten post?',
    'Prosimy o przesłanie wiadomości z dowolnego powodu','Sortuj według'];

let pt = ['Início','Criar','Contato','Sobre','Filtrar',
    'Redefinir','Mínimo','Máximo','Custo','Status','Marca','Tipo',
    'Tempo','Lâmina','Todos','Disponível','Pendente','Vendido','Negociado',
    'Venda','Troca','Compra','Novo','Velho','Ao vivo','Treinador','Peças',
    'Entrar','Sair','Cadastrar se','Navegar','Contatar suporte','Post do usuário',
    'Sobre nós','Idioma','Título','Preço','Condição','Tipo de venda',
    'Descrição','Enviar imagem','Enviar','Buscar','Moeda','Perfil',
    'Configurações','sem novas mensagens','sem novos alertas','Doar','Criado',
    'Anterior','Próximo','Nome','Sobrenome','Valor','Nome de exibição',
    'Número de telefone','Instagram','Facebook','Foto de perfil','Cancelar',
    'Editar','Excluir','Sim','Não','Você deseja excluir esta postagem?',
    'Não hesite em nos enviar uma mensagem por qualquer motivo','Ordenar por'];

let ru = ['Главная','Создать','Контакты','О нас','Фильтр',
    'Сбросить','Минимальная','Максимальная','Стоимость','Статус','Бренд','Тип',
    'Время','Лезвие','Все','Доступно','Ожидающее','Продано','Обменяно',
    'Продажа','Обмен','Покупка','Новое','Старое','Прямая трансляция','Тренер','Детали',
    'Войти','Выйти','Зарегистрироваться','Просмотр','Связаться с поддержкой','Пользовательский пост',
    'О нас','Язык','Название','Цена','Состояние','Тип продажи',
    'Описание','Загрузить изображение','Отправить','Поиск','Валюта','Профиль',
    'Настройки','нет новых сообщений','нет новых оповещений','Пожертвовать','Создано',
    'Предыдущий','Следующий','Имя','Фамилия','Сумма','Отображаемое имя',
    'Номер телефона','Instagram','Facebook','Аватар','Отмена',
    'Редактировать','Удалить','Да','Нет','Вы действительно хотите удалить этот пост?',
    'Пожалуйста, отправьте нам сообщение по любой причине','Сортировать по'];

let tr = ['Ana Sayfa','Oluştur','İletişim','Hakkımızda','Filtre',
    'Sıfırla','Minimum','Maksimum','Maliyet','Durum','Marka','Tip',
    'Zaman','Bıçak','Tümü','Mevcut','Beklemede','Satıldı','Takas Edildi',
    'Satılık','Takas','Alım','Yeni','Eski','Canlı','Eğitmen','Parçalar',
    'Giriş Yap','Çıkış Yap','Kaydol','Gözat','Destek İle İletişime Geçin','Kullanıcı Gönderisi',
    'Hakkımızda','Dil','Başlık','Fiyat','Durum','Satış Türü',
    'Açıklama','Resim Yükle','Gönder','Ara','Para Birimi','Profil',
    'Ayarlar','yeni mesaj yok','yeni uyarı yok','Bağış Yap','Oluşturuldu',
    'Önceki','Sonraki','Ad','Soyad','Miktar','Görüntülenen İsim',
    'Telefon Numarası','Instagram','Facebook','Profil Resmi','İptal',
    'Düzenle','Sil','Evet','Hayır','Bu gönderiyi silmek istediğinize emin misiniz?',
    'Herhangi bir nedenle bize mesaj göndermekten çekinmeyin','Sırala'];

let vi = ['Trang chủ', 'Tạo mới', 'Liên hệ', 'Giới thiệu', 'Lọc',
    'Đặt lại', 'Tối thiểu', 'Tối đa', 'Giá', 'Trạng thái', 'Thương hiệu', 'Loại',
    'Thời gian', 'Lưỡi dao', 'Tất cả', 'Có sẵn', 'Đang chờ xử lý', 'Đã bán', 'Đã trao đổi',
    'Đang bán', 'Đang trao đổi', 'Đang mua', 'Mới', 'Cũ', 'Trực tiếp', 'Huấn luyện viên', 'Bộ phận',
    'Đăng nhập', 'Đăng xuất', 'Đăng ký', 'Duyệt', 'Liên hệ với chúng tôi', 'Bài đăng của người dùng',
    'Giới thiệu', 'Ngôn ngữ', 'Tiêu đề', 'Giá', 'Tình trạng', 'Loại bán',
    'Mô tả', 'Tải lên hình ảnh', 'Đăng', 'Tìm kiếm', 'Tiền tệ', 'Hồ sơ',
    'Cài đặt', 'Không có tin nhắn mới', 'Không có cảnh báo mới', 'Quyên góp', 'Được tạo',
    'Trước', 'Sau', 'Tên', 'Họ', 'Số tiền', 'Tên hiển thị',
    'Số điện thoại', 'Instagram', 'Facebook', 'Ảnh đại diện', 'Hủy',
    'Chỉnh sửa', 'Xóa', 'Có', 'Không', 'Bạn có muốn xóa bài đăng này không?',
    'Hãy gửi cho chúng tôi một tin nhắn cho bất kỳ lý do nào', 'Sắp xếp theo'];

let zh = ['首页', '创建', '联系', '关于', '筛选',
    '重置', '最小', '最大', '价格', '状态', '品牌', '类型',
    '时间', '刀片', '全部', '可用', '待处理', '已售', '已交易',
    '出售中', '交易中', '求购中', '全新', '旧', '现场', '训练员', '零件',
    '登录', '退出', '注册', '浏览', '联系支持', '用户帖子',
    '关于我们', '语言', '标题', '价格', '状态', '销售类型',
    '描述', '上传图片', '提交', '搜索', '货币', '个人资料',
    '设置', '无新消息', '无新警报', '捐赠', '已创建',
    '上一页', '下一页', '名字', '姓氏', '金额', '显示名称',
    '电话号码', 'Instagram', 'Facebook', '个人资料图片', '取消',
    '编辑', '删除', '是', '否', '您确定要删除这篇文章吗？',
    '请随时给我们发送消息，以任何原因', '排序方式'];


let hardCodedWords = ['Artisan Cutlery', 'Atropos', 'B.A Balis (Blake Anstett balis)', 'Baliplus', 'BalisongFlipping', 'BBarfly', 'Benchmade', 'Biegler', 'Biteblades', 'BlackBalisong', 'BladeRunner Systems', 'Boker', 'Bradley', 'Brous Blades', 'Cantogroup', 'Cold Steel', 'DC_Bladeworks (DCB)', 'Dogbite Knives', 'ELB (emmanuel_le_brun)', 'EOS', 'EPS Knives', 'Fellowship Blades', 'Fiore', 'FLS Balisong', 'Flytanium', 'Frankenforgeblade', 'Geofrey Dumas', 'Glider Co', 'GP_Blades', 'Hansen Metals', 'HazeTech', 'Heibel', 'Henninger Designs', 'Hinderer', 'HOM Designs (Jerry Hom Designs)', 'Hypex', 'Jimpy Designs', 'JK Design (Julian Klein Design)', 'Kershaw', 'LDY_Balisongs', 'Les Voorhies', 'Log Design', 'M3K', 'MachineWise', 'Mantis Bladeworks', 'Mantis BladeXchange', 'Marcolo', 'Maxace', 'Microtech', 'Misc/Other', 'Nabilus', 'NRB (NotArealboy)', 'OSP', 'Pena knives', 'ProTech Knives', 'Ryworx', 'Spyderco', 'Squid Industries', 'Stitchedsteel', 'Svix Co', 'Terrain 365', 'Theone', 'WB Concept', 'Zippy balisong'];
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
        result += JSON.stringify(language)+'-';
    }

    console.log(result);
})()
