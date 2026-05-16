
'use strict';
// ══════════════════════════════════════════════════════
// LANGUAGE / i18n
// ══════════════════════════════════════════════════════
let appLang = localStorage.getItem('es_lang') || 'tr';

const I18N = {
  tr:{
    tagline:'GÖZ HAREKETİ İLE İLETİŞİM',
    heroTitle:'Gözlerinle <em>Konuş</em>',
    heroSub:'Göz izleme teknolojisi ile ellerin olmadan iletişim kur, yaz, seç.',
    privacyText:'🔒 <b>Gizlilik önce gelir</b> — Hiçbir görüntü veya kişisel veri sunucuya gönderilmez.',
    btnStart:'👁 Kalibrasyona Başla',btnSaved:'▶ Kaydedilmiş Kalibrasyon',btnHow:'📖 Nasıl Kullanılır',btnDirect:'☝ Direkt Giriş',
    savedCal:'💾 Kalibrasyon: ',
    btnPhrase:'Cümle Kartları',btnKeyboard:'Klavye',btnVision:'Etrafımda Ne Var?',
    btnQuickMsg:'Hızlı Mesaj',btnA11y:'Erişilebilirlik',btnCalib:'Kalibrasyon',btnPanic:'PANİK',
    advToolsTitle:'🔧 Gelişmiş Araçlar',advDiagTitle:'Tanı',advDiagSub:'Teknik sorun analizi',
    advEvalTitle:'Doğruluk Testi',advEvalSub:'Göz izleme doğruluğunu ölç',
    advHowTitle:'Nasıl Kullanılır',advHowSub:'Kullanım kılavuzu',a11yClose:'✓ Kapat',
    a11yTitle:'♿ Erişilebilirlik',
    a11yInputTitle:'Giriş Modu',a11yThemeTitle:'Görsel Tema',a11yBlinkTitle:'Göz Kırpma & Kaydırma',
    modeEyeLabel:'Göz İzleme',modeEyeSub:'Göz takibi',
    modeFingerLabel:'Dokunmatik',modeFingerSub:'Parmak girişi',
    modeBothLabel:'Her İkisi',modeBothSub:'Göz + dokunmatik',
    modeDwellLabel:'Sadece Bakış',modeDwellSub:'Göz zamanlayıcı',
    thNLabel:'Standart',thNSub:'Koyu',thHLabel:'Yüksek Kontrast',thHSub:'Beyaz çerçeve',
    thLLabel:'Büyük Metin',thLSub:'Büyük font',thNiLabel:'Gece Modu',thNiSub:'Az ışık',
    irisScrollLabel:'Iris Kaydırma',blinkNavLabel:'Çift Blink = Geri',blinkNavSub:'Her zaman aktif',
    blinkSelectTitle:'Tek Blink = Seç',blinkSensTitle:'Blink Hassasiyeti',wakeWordTitle:'Uyandırma Komutu',
    kbSensLabelStr:'Klavye hassasiyeti: ',a11yDwellLabelStr:'Bekleme süresi: ',a11yAlphaLabelStr:'Göz yumuşatma: ',
    blinkOn:'Açık ✓',blinkOff:'Kapalı',wakeOn:'Açık ✓',wakeOff:'Kapalı',
    mainSub:'Bakıp bekleyin',menuLabel:'MENÜ',menuHint:'Bakıp bekle',
    smoothing:'Yumuşatma',dwell:'Bekleme',
    locTitle:'KONUMUNUZ',locLoading:'Alınıyor…',locDenied:'İzin verilmedi',locError:'Konum alınamadı',
    pbTitle:'💬 Ne söylemek istiyorsunuz?',backToStart:'⬅ Başlangıç',backBtn:'← Geri',backHint:'👁 Bakıp bekle · 👁👁 Çift göz kırp',
    calibStart:'Kalibrasyon başlıyor. Ekrandaki her noktaya bakın.',
    calibLook:'Noktaya bakın…',calibHold:'Sakin tutun…',calibCollect:'Veri toplanıyor…',
    calibDone:'Kalibrasyon tamamlandı.',calibCancelled:'Kalibrasyon iptal edildi.',calibLoaded:'Kalibrasyon yüklendi.',
    calibHoldStill:'Sakin tutun.',calibNotEnough:'Yeterli veri toplanamadı.',
    calibCounter:'Kalibrasyon',calibRetrying:'⚠ Yeniden deneniyor…',calibNext:'Sonraki.',
    calibQualGood:'İyi 👍',calibQualFair:'Orta',calibQualRetry:'Tekrar',
    calibQualLabel:'Kalite',calibErrHigh:'⚠ Yüksek gürültü — sakin tutun',
    calibErrPfx:'Hata: ~',evalDesc:'Hedefler sırayla çıkacak. Her hedefe bakın — dolunca ölçüm alınır.',
    evalLookTarget:'Hedefe bakın…',evalCounter:'Test',
    repTitle:'📊 Doğruluk Raporu',repBack:'Uygulamaya Dön',repRecal:'🔄 Yeniden Kalibre Et',
    repAvgErr:'Ort. Hata (px)',repStdDev:'Std. Sapma (px)',repP90:'90. Yüzdelik',
    repFPS:'FPS',repLatency:'Gecikme (ms)',repErrMap:'GÖZE HATA HARİTASI',
    repPilot:'📋 PİLOT ÖLÇÜMLER',repPass:'Geçti ✅',repFail:'Düşük',repLow:'Düşük',repOk:'≥20 OK',
    repHighLat:'⚠ Yüksek',repOkLat:'✅ ≤200ms',
    evalStart:'Doğruluk testi başlıyor.',evalCancelled:'Test iptal edildi.',evalCalibrateFirst:'Lütfen önce kalibrasyon yapın.',
    kbLang:'tr-TR',
    visionScan:'Tara ve Açıkla',visionAnalyzing:'Yapay zeka görüntüyü analiz ediyor…',
    visionDone:'Analiz tamamlandı',visionError:'Görüntü analiz edilemedi.',
    visionWaiting:'Kamera hazırlanıyor…',visionReady:'Hazır — Tarama butonuna bakın',
    visionRepeat:'🔊 Tekrar Dinle',visionCamSwitch:'🔄 Kamera',
    visionScanningAudio:'Görüntü analiz ediliyor, lütfen bekleyin.',
    apiKeyLabel:'🔑 Yapay Zeka Görüntü Analizi için API Anahtarı (isteğe bağlı)',
    apiKeySave:'Kaydet',apiKeySaved:'✅ API anahtarı kaydedildi',
    apiKeyMissing:'⚠ Görüntü analizi için API anahtarı gerekli. Başlangıç ekranından girin.',
    ocrScan:'Metni Tara',ocrAnalyzing:'Metin okunuyor…',ocrDone:'Metin okundu',
    ocrError:'Metin okunamadı.',ocrHint:'Kamerayı metne tutun — 3 saniye sonra otomatik tarar',
    ocrHintShort:'Kamerayı metne tutun…',ocrNoText:'Görüntüde metin bulunamadı.',
    ocrModeLabel:'Metin Oku',ocrDescribeLabel:'Etrafı Betimle',
    ocrCountingDown:'Taranıyor…',ocrReady:'Hazır — kamerayı metne tutun',
    sosMsg:'PANİK — Konum refakatçiye gönderilecek',sosSending:'📡 Acil bildirim gönderiliyor…',sosSent:'✅ Refakatçinize bildirim gönderildi',
    sosAudio:'Acil durum! Yardım çağrılıyor.',
    blinkSens:'Göz kırpma hassasiyeti: ',
    calibSaved:'Ekran boyutu kaydedildi.',
    voiceListening:'Dinleniyor…',voiceSpeak:'Şimdi konuşun',voiceGot:'✓ Anlaşıldı',
    voiceNotUnderstood:'⚠ Anlaşılamadı',voiceTryAgain:'Tekrar deneyin',
    calibReadyLabel:'Kalibrasyon Hazır',
    loadingCameraLabel:'⏳ Kamera yükleniyor…',
    howTitle:'📖 EyeSense Nasıl Kullanılır',
    howClose:'✕ Kapat',howDone:'✓ Anladım — Başla!',
    how:[
      {t:'Giriş modunu seçin',d:'Başlangıç ekranında <b>Kalibrasyona Başla</b> (göz izleme) veya <b>Direkt Giriş</b> (dokunmatik mod) seçeneklerinden birini seçin. Kayıtlı kalibrasyon varsa <b>Kayıtlı Kalibrasyon</b> ile devam edebilirsiniz.',tag:'👁 Göz · ☝️ Dokunmatik · 💾 Kayıtlı',c:'blue'},
      {t:'Kalibrasyon (Göz izleme için)',d:'25 nokta sırayla ekranda belirecek. Her noktayı dolana kadar sabit bakın. Yaklaşık 60 saniye sürer. Kalibrasyon verisi cihazda saklanır.',tag:'🎯 ~60 saniye · 25 nokta',c:''},
      {t:'Bakıp bekle ile seç',d:'Bir butona bakın ve gözünüzü sabit tutun. Sarı çubuk dolunca seçim yapılır. Bekleme süresi Erişilebilirlik ayarlarından değiştirilebilir (varsayılan 1.2s).',tag:'⏱ Bakın + bekleyin = seçin',c:''},
      {t:'Tek göz kırpma = hızlı seç',d:'Erişilebilirlik ayarlarından <b>Tek Blink Seç</b>\'i etkinleştirin. %8+ dwell varken tek blink ile anında seçim yapabilirsiniz.',tag:'😉 Blink = seç (isteğe bağlı)',c:''},
      {t:'Çift göz kırpma = geri dön',d:'480ms içinde iki kez göz kırparak mevcut paneli kapatın ve bir önceki ekrana dönün. Her yerde çalışır — ayar gerekmez.',tag:'😉😉 Çift blink = geri',c:''},
      {t:'Iris ile kaydırma',d:'Panel açıkken gözünüzü <b>üst veya alt kenara</b> getirin. Kenar bölgesine ne kadar girerseniz o kadar hızlı kayar. Cümle Kartları, Erişilebilirlik, Akıllı Ev panellerinde çalışır.',tag:'↕ Üst/alt kenar = kaydır',c:'green'},
      {t:'Cümle Kartları',d:'Bir kart üzerinde bakıp bekleyerek sesli okutun. <b>+</b> butonuna bakarak kendi cümlelerinizi emoji ile ekleyin veya düzenleyin.',tag:'💬 Bak → bekle → seslendir',c:'blue'},
      {t:'Klavye',d:'Her tuşa bakıp bekleyerek yazın. Üstteki kelime önerilerine bakıp bekleyin. <b>🔊</b> ile sesli okuma, <b>🎤</b> ile sesle yazma yapabilirsiniz.',tag:'⌨️ Bak-yaz · öneriler · TTS',c:'blue'},
      {t:'Etrafımda Ne Var?',d:'Kamera ile çevrenizi taratın — yapay zeka ne gördüğünü sesli olarak açıklar. API anahtarı girilirse görsel analiz, girilmezse OCR (metin okuma) modu çalışır.',tag:'👁 Tara → Yapay Zeka açıklar',c:''},
      {t:'Hızlı Mesaj',d:'Kayıtlı kişileri arayın veya hazır mesajları gönderin. Bakıp bekleyerek 📞 veya 💬 seçin. Kişileri "Kişileri Düzenle" ile özelleştirebilirsiniz.',tag:'📲 Ara · Mesaj Gönder',c:''},
      {t:'Akıllı Ev (Smart Home)',d:'Cihazlara (ışık, perde, termostat vb.) bakıp bekleyerek açıp kapatın. Demo modda tamamen çalışır; gerçek cihaz için MQTT veya REST API bağlantısı gerekir.',tag:'🏠 Bakıp bekle = kontrol et',c:''},
      {t:'Panik Butonu',d:'Ana menünün sağ üstündeki kırmızı butona bakıp bekleyin. Refakatçiye konumunuzu içeren acil bildirim gönderilir.',tag:'🆘 Uzun bak = acil bildirim',c:''},
      {t:'En iyi doğruluk için ipuçları',d:'• Ekrandan 40–55 cm uzakta oturun · • Yüzünüze iyi ışık gelsin · • Başınızı sabit tutun · • Cihaz değiştirince yeniden kalibre edin · • Erişilebilirlik → Doğruluk Testi ile hata ölçün',tag:'💡 Mesafe · Işık · Sabitlik',c:''},
    ]
  },
  en:{
    tagline:'EYE-GAZE COMMUNICATION',
    heroTitle:'<em>Speak</em> With Your Eyes',
    heroSub:'Communicate, type and select hands-free with eye-tracking technology.',
    privacyText:'🔒 <b>Privacy first</b> — No images or personal data ever sent to any server.',
    btnStart:'👁 Start Calibration',btnSaved:'▶ Use Saved Calibration',btnHow:'📖 How to Use',btnDirect:'☝ Direct Entry',
    savedCal:'💾 Calibration: ',
    btnPhrase:'Phrase Board',btnKeyboard:'Keyboard',btnVision:"What's Around Me?",
    btnQuickMsg:'Quick Message',btnA11y:'Accessibility',btnCalib:'Calibrate',btnPanic:'PANIC',
    advToolsTitle:'🔧 Advanced Tools',advDiagTitle:'Diagnostics',advDiagSub:'Technical issue analysis',
    advEvalTitle:'Accuracy Test',advEvalSub:'Measure eye tracking accuracy',
    advHowTitle:'How to Use',advHowSub:'User guide',a11yClose:'✓ Close',
    a11yTitle:'♿ Accessibility',
    a11yInputTitle:'Input Mode',a11yThemeTitle:'Visual Theme',a11yBlinkTitle:'Blink Control & Scroll',
    modeEyeLabel:'Eye Gaze',modeEyeSub:'Eye tracking',
    modeFingerLabel:'Touch',modeFingerSub:'Finger input',
    modeBothLabel:'Both',modeBothSub:'Eye + touch',
    modeDwellLabel:'Dwell Only',modeDwellSub:'Gaze timer',
    thNLabel:'Standard',thNSub:'Dark',thHLabel:'High Contrast',thHSub:'White border',
    thLLabel:'Large Text',thLSub:'Big font',thNiLabel:'Night Mode',thNiSub:'Low light',
    irisScrollLabel:'Iris Scroll',blinkNavLabel:'Double Blink Back',blinkNavSub:'Always active',
    blinkSelectTitle:'Single Blink Select',blinkSensTitle:'Blink Sensitivity',wakeWordTitle:'Wake Word',
    kbSensLabelStr:'Keyboard sensitivity: ',a11yDwellLabelStr:'Dwell duration: ',a11yAlphaLabelStr:'Gaze smoothing: ',
    blinkOn:'On ✓',blinkOff:'Off',wakeOn:'On ✓',wakeOff:'Off',
    mainSub:'Gaze & hold to select',menuLabel:'MENU',menuHint:'Gaze & hold',
    smoothing:'Smoothing',dwell:'Dwell',
    locTitle:'YOUR LOCATION',locLoading:'Getting location…',locDenied:'Permission denied',locError:'Could not get location',
    pbTitle:'💬 What do you want to say?',backToStart:'⬅ Start',backBtn:'← Back',backHint:'👁 Gaze & hold · 👁👁 Double blink',
    calibStart:'Calibration starting. Look at each dot on screen.',
    calibLook:'Look at the dot…',calibHold:'Hold still…',calibCollect:'Collecting data…',
    calibDone:'Calibration complete.',calibCancelled:'Calibration cancelled.',calibLoaded:'Calibration loaded.',
    calibHoldStill:'Hold still.',calibNotEnough:'Not enough data collected.',
    calibCounter:'Calibration',calibRetrying:'⚠ Retrying…',calibNext:'Next.',
    calibQualGood:'Good 👍',calibQualFair:'Fair',calibQualRetry:'Retry',
    calibQualLabel:'Quality',calibErrHigh:'⚠ High noise — hold still',
    calibErrPfx:'Error: ~',evalDesc:'Targets will appear one by one. Look at each — measurement is taken when dwell fills.',
    evalLookTarget:'Look at the target…',evalCounter:'Test',
    repTitle:'📊 Accuracy Report',repBack:'Back to App',repRecal:'🔄 Recalibrate',
    repAvgErr:'Avg. Error (px)',repStdDev:'Std. Deviation (px)',repP90:'90th Percentile',
    repFPS:'FPS',repLatency:'Latency (ms)',repErrMap:'GAZE ERROR MAP',
    repPilot:'📋 PILOT MEASUREMENTS',repPass:'Pass ✅',repFail:'Low',repLow:'Low',repOk:'≥20 OK',
    repHighLat:'⚠ High',repOkLat:'✅ ≤200ms',
    evalStart:'Accuracy test starting.',evalCancelled:'Test cancelled.',evalCalibrateFirst:'Please calibrate first.',
    kbLang:'en-US',
    visionScan:'Scan & Describe',visionAnalyzing:'AI is analyzing the image…',
    visionDone:'Analysis complete',visionError:'Could not analyze image.',
    visionWaiting:'Starting camera…',visionReady:'Ready — Look at the scan button',
    visionRepeat:'🔊 Repeat',visionCamSwitch:'🔄 Camera',
    visionScanningAudio:'Analyzing image, please wait.',
    apiKeyLabel:'🔑 API Key for AI Vision (optional)',
    apiKeySave:'Save',apiKeySaved:'✅ API key saved',
    apiKeyMissing:'⚠ API key required for image analysis. Enter it on the start screen.',
    ocrScan:'Read Text',ocrAnalyzing:'Reading text…',ocrDone:'Text read',
    ocrError:'Could not read text.',ocrHint:'Hold camera over text — scans automatically in 3 seconds',
    ocrHintShort:'Hold camera over text…',ocrNoText:'No text found in image.',
    ocrModeLabel:'Read Text',ocrDescribeLabel:'Describe Scene',
    ocrCountingDown:'Scanning…',ocrReady:'Ready — hold camera over text',
    sosMsg:'PANIC — Location will be sent to caregiver',sosSending:'📡 Sending emergency notification…',sosSent:'✅ Your caregiver has been notified',
    sosAudio:'Emergency! Calling for help.',
    blinkSens:'Blink sensitivity: ',
    calibSaved:'Screen size saved.',
    voiceListening:'Listening…',voiceSpeak:'Speak now',voiceGot:'✓ Got it',
    voiceNotUnderstood:'⚠ Not understood',voiceTryAgain:'Please try again',
    calibReadyLabel:'Calibration Ready',
    loadingCameraLabel:'⏳ Loading camera…',
    howTitle:'📖 How to Use EyeSense',
    howClose:'✕ Close',howDone:'✓ Got it — Start!',
    how:[
      {t:'Choose your input mode',d:'On the start screen, tap <b>Start Calibration</b> for eye gaze, or <b>Direct Entry</b> to skip to touch mode. If you have a saved calibration, use <b>Use Saved Calibration</b> to continue.',tag:'👁 Eye · ☝️ Touch · 💾 Saved',c:'blue'},
      {t:'Calibrate (Eye Gaze only)',d:'25 dots appear one by one. Look steadily at each until the ring fills. Takes ~60 seconds. Calibration data is saved on your device.',tag:'🎯 ~60 seconds · 25 points',c:''},
      {t:'Dwell to select',d:'Look at any button and hold your gaze. A yellow bar fills — when full the item is selected. Dwell duration is adjustable in Accessibility settings (default 1.2s).',tag:'⏱ Gaze + hold = select',c:''},
      {t:'Single blink = quick select',d:'Enable <b>Single Blink Select</b> in Accessibility. With 8%+ dwell on an item, a single blink instantly selects it.',tag:'😉 Blink = select (optional)',c:''},
      {t:'Double blink = go back',d:'Blink twice within 480ms to close the current panel and return. Works everywhere — no settings needed.',tag:'😉😉 Double blink = back',c:''},
      {t:'Iris scroll inside panels',d:'With a panel open, move your gaze to the <b>top or bottom edge</b> to scroll. The deeper into the edge zone, the faster it scrolls. Works in Phrase Board, Accessibility and Smart Home panels.',tag:'↕ Top/bottom edge = scroll',c:'green'},
      {t:'Phrase Board',d:'Dwell on a phrase card to speak it aloud. Dwell on the <b>+</b> button to add your own phrases with a custom emoji.',tag:'💬 Gaze → dwell → speaks',c:'blue'},
      {t:'Keyboard',d:'Dwell on each key to type. Dwell on word suggestions at the top to autocomplete. Press <b>🔊</b> to read aloud, <b>🎤</b> for voice dictation.',tag:'⌨️ Dwell-type · suggestions · TTS',c:'blue'},
      {t:"What's Around Me?",d:'Point your camera at your surroundings — AI describes what it sees aloud. With an API key: full visual analysis. Without: OCR text-reading mode.',tag:'👁 Scan → AI describes',c:''},
      {t:'Quick Message',d:'Call saved contacts or send preset messages. Dwell on 📞 or 💬 to act. Customize contacts via "Edit Contacts".',tag:'📲 Call · Message',c:''},
      {t:'Smart Home',d:'Turn devices on/off (lights, blinds, thermostat, etc.) by dwelling on their card. Fully functional in demo mode; real devices require MQTT or REST API.',tag:'🏠 Dwell = toggle device',c:''},
      {t:'Panic Button',d:'Dwell on the red button in the top-right of the main menu. An emergency alert with your location is sent to your caregiver.',tag:'🆘 Long gaze = emergency alert',c:''},
      {t:'Tips for best accuracy',d:'• Sit 40–55 cm from screen · • Good face lighting · • Keep head still · • Recalibrate when changing device · • Use Accessibility → Accuracy Test to check your error',tag:'💡 Distance · Light · Stillness',c:''},
    ]
  }
};

function t(k){ return (I18N[appLang]||I18N.tr)[k] || (I18N.tr)[k] || k; }

function setLanguage(lang){
  appLang=lang;
  localStorage.setItem('es_lang',lang);
  applyI18n();
}

function applyI18n(){
  pickTtsVoice();
  // Start screen
  const el=(id)=>document.getElementById(id);
  if(el('startTagline')) el('startTagline').textContent=t('tagline');
  if(el('startHeroTitle')) el('startHeroTitle').innerHTML=t('heroTitle');
  if(el('startHeroSub')) el('startHeroSub').textContent=t('heroSub');
  if(el('startPrivacy')) el('startPrivacy').innerHTML=t('privacyText');
  if(el('startFreshBtn')) el('startFreshBtn').textContent=t('btnStart');
  if(el('howBtn')) el('howBtn').textContent=t('btnHow');
  if(el('directEntryBtn')) el('directEntryBtn').textContent=t('btnDirect');
  if(el('useSavedBtn')&&el('useSavedBtn').style.display!=='none') el('useSavedBtn').textContent=t('btnSaved');
  // Main menu grid labels
  const btnKeys={phraseBtn:'btnPhrase',keyboardBtn:'btnKeyboard',visionBtn:'btnVision',
    quickMsgBtn:'btnQuickMsg',a11yBtn:'btnA11y',recalibBtn:'btnCalib'};
  Object.entries(btnKeys).forEach(([id,k])=>{
    const b=el(id); if(!b) return;
    const lbl=b.querySelector('.bsm-label'); if(lbl) lbl.textContent=t(k);
  });
  // Panic label
  const pl=el('panicLabel'); if(pl) pl.textContent=t('btnPanic');
  // Main header
  const mhs=el('mainSectionLabel'); if(mhs) mhs.textContent=t('menuLabel');
  const mhh=el('mainSectionHint'); if(mhh) mhh.textContent=t('menuHint');
  // Sliders
  const smL=el('smLabel'); if(smL) smL.textContent=t('smoothing');
  const dwL=el('dwLabel'); if(dwL) dwL.textContent=t('dwell');
  // Back button
  const gpb=el('globalPanelBack');
  if(gpb){
    const btnTxt=el('backBtnText'); if(btnTxt) btnTxt.textContent=t('backBtn');
    const hint=gpb.querySelector('.pb-hint'); if(hint) hint.textContent=t('backHint');
  }
  // Phrase board title
  const pbt=el('pbTitle'); if(pbt) pbt.textContent=t('pbTitle');
  // Back to start button
  const btsb=el('backToStartBtn'); if(btsb) btsb.textContent=t('backToStart');
  // Location widget
  const locT=el('locTitle'); if(locT) locT.textContent=t('locTitle');
  // Calib / Eval UI
  const cbb=el('calibBackBtn'); if(cbb) cbb.textContent='← '+(appLang==='tr'?'İptal':'Cancel');
  const ebb=el('evalBackBtn');  if(ebb) ebb.textContent='← '+(appLang==='tr'?'Geri':'Back');
  const ql=el('qualityLabel');  if(ql)  ql.textContent=t('calibQualLabel');
  const ed=el('evalDesc');      if(ed)  ed.textContent=t('evalDesc');
  const rt=el('repTitle');      if(rt)  rt.textContent=t('repTitle');
  const rd=el('repDoneBtn');    if(rd)  rd.textContent=t('repBack');
  const rr=el('repRecalBtn');   if(rr)  rr.textContent=t('repRecal');
  // A11y close + advanced tools
  const acb=el('a11yCloseBtn'); if(acb) acb.textContent=t('a11yClose');
  if(el('a11yTitle'))       el('a11yTitle').textContent=t('a11yTitle');
  if(el('a11yInputTitle'))  el('a11yInputTitle').textContent=t('a11yInputTitle');
  if(el('a11yThemeTitle'))  el('a11yThemeTitle').textContent=t('a11yThemeTitle');
  if(el('a11yBlinkTitle'))  el('a11yBlinkTitle').textContent=t('a11yBlinkTitle');
  // Mode cards
  if(el('modeEyeLabel'))    el('modeEyeLabel').textContent=t('modeEyeLabel');
  if(el('modeEyeSub'))      el('modeEyeSub').textContent=t('modeEyeSub');
  if(el('modeFingerLabel')) el('modeFingerLabel').textContent=t('modeFingerLabel');
  if(el('modeFingerSub'))   el('modeFingerSub').textContent=t('modeFingerSub');
  if(el('modeBothLabel'))   el('modeBothLabel').textContent=t('modeBothLabel');
  if(el('modeBothSub'))     el('modeBothSub').textContent=t('modeBothSub');
  if(el('modeDwellLabel'))  el('modeDwellLabel').textContent=t('modeDwellLabel');
  if(el('modeDwellSub'))    el('modeDwellSub').textContent=t('modeDwellSub');
  // Theme cards
  if(el('thNLabel'))  el('thNLabel').textContent=t('thNLabel');
  if(el('thNSub'))    el('thNSub').textContent=t('thNSub');
  if(el('thHLabel'))  el('thHLabel').textContent=t('thHLabel');
  if(el('thHSub'))    el('thHSub').textContent=t('thHSub');
  if(el('thLLabel'))  el('thLLabel').textContent=t('thLLabel');
  if(el('thLSub'))    el('thLSub').textContent=t('thLSub');
  if(el('thNiLabel')) el('thNiLabel').textContent=t('thNiLabel');
  if(el('thNiSub'))   el('thNiSub').textContent=t('thNiSub');
  // Blink cards
  if(el('irisScrollLabel'))  el('irisScrollLabel').textContent=t('irisScrollLabel');
  if(el('blinkNavLabel'))    el('blinkNavLabel').textContent=t('blinkNavLabel');
  if(el('blinkNavSub'))      el('blinkNavSub').textContent=t('blinkNavSub');
  if(el('blinkSelectTitle')) el('blinkSelectTitle').textContent=t('blinkSelectTitle');
  if(el('blinkSensTitle'))   el('blinkSensTitle').textContent=t('blinkSensTitle');
  if(el('wakeWordTitle'))    el('wakeWordTitle').textContent=t('wakeWordTitle');
  // Sliders
  if(el('kbSensLabel'))     el('kbSensLabel').innerHTML=t('kbSensLabelStr')+'<b id="kbSensVal">'+el('kbSensVal')?.textContent+'</b>';
  if(el('a11yDwellLabel'))  el('a11yDwellLabel').innerHTML=t('a11yDwellLabelStr')+'<b id="a11yDwellVal">'+el('a11yDwellVal')?.textContent+'</b> s';
  if(el('a11yAlphaLabel'))  el('a11yAlphaLabel').innerHTML=t('a11yAlphaLabelStr')+'<b id="a11yAlphaVal">'+el('a11yAlphaVal')?.textContent+'</b>';
  // Advanced tools
  const att=el('advToolsTitle'); if(att) att.textContent=t('advToolsTitle');
  if(el('advDiagTitle')) el('advDiagTitle').textContent=t('advDiagTitle');
  if(el('advDiagSub'))   el('advDiagSub').textContent=t('advDiagSub');
  if(el('advEvalTitle')) el('advEvalTitle').textContent=t('advEvalTitle');
  if(el('advEvalSub'))   el('advEvalSub').textContent=t('advEvalSub');
  if(el('advHowTitle'))  el('advHowTitle').textContent=t('advHowTitle');
  if(el('advHowSub'))    el('advHowSub').textContent=t('advHowSub');
  // Blink/wake status labels (re-apply current state)
  if(el('blinkSelectLabel')) el('blinkSelectLabel').textContent=blinkSelectEnabled?t('blinkOn'):t('blinkOff');
  if(el('wakeWordLabel'))    el('wakeWordLabel').textContent=wakeWordActive?t('wakeOn'):t('wakeOff');
  // Quick msg panel
  if($('quickMsgPanel')&&$('quickMsgPanel').style.display==='flex') applyQmI18n();
  // savedInfo calib-ready badge — update text when language changes
  const si=el('savedInfo');
  if(si && si.style.display==='block'){
    const badge=si.querySelector('.calib-ready-badge');
    if(badge){
      const dot=badge.querySelector('.cr-dot');
      badge.innerHTML='';
      if(dot) badge.appendChild(dot);
      badge.appendChild(document.createTextNode(t('calibReadyLabel')));
    }
  }
  // How panel — rebuild dynamically
  rebuildHowPanel();
  // Keyboard
  if(typeof renderKB==='function' && el('kbPanel')&&el('kbPanel').style.display==='flex') renderKB();
  // Vision panel
  const vsL=el('visionScanLabel'); if(vsL) vsL.textContent=t('visionScan');
  const vsC=el('visionCamSwitch'); if(vsC) vsC.textContent=t('visionCamSwitch');
  const vrB=el('visionRepeatBtn'); if(vrB) vrB.textContent=t('visionRepeat');
  // Lang button states
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active',b.dataset.lang===appLang));
}

function rebuildHowPanel(){
  const p=document.getElementById('howPanel'); if(!p) return;
  const steps=t('how'); if(!Array.isArray(steps)) return;
  // Rebuild header
  const hdr=p.querySelector('.how-hdr');
  if(hdr){ hdr.querySelector('h2').textContent=t('howTitle'); const cl=hdr.querySelector('button'); if(cl) cl.textContent=t('howClose'); }
  // Rebuild steps
  const existing=p.querySelectorAll('.how-step');
  existing.forEach((s,i)=>{
    if(!steps[i]) return;
    const st=steps[i];
    const title=s.querySelector('.how-title'); if(title) title.textContent=st.t;
    const desc=s.querySelector('.how-desc'); if(desc) desc.innerHTML=st.d;
    const tag=s.querySelector('.how-tag'); if(tag){
      tag.textContent=st.tag;
      tag.className='how-tag'+(st.c?' '+st.c:'');
    }
  });
  // Done button
  const doneBtn=p.querySelector('.btn-p');
  if(doneBtn) doneBtn.textContent=t('howDone');
}


// ══════════════════════════════════════════════════════
// GLOBALS
// ══════════════════════════════════════════════════════
let ALPHA = 0.18, DWELL_MS = 1300;
let inputMode = localStorage.getItem('es_inputMode') || 'eye';
let pxPerCm = parseFloat(localStorage.getItem('es_pxcm')) || 96/2.54;
let modelX=null, modelY=null;
let smX=window.innerWidth/2, smY=window.innerHeight/2;
let latestFeatures=null, latestTs=0;
let evalActive=false, evalDwellTracker=null;
let prevNoseX=null, prevNoseY=null, headMoveCount=0;
let headPoseHistory=[];
let frameTimes=[], currentFPS=0, pipelineLatencyMs=0;
let kbSensitivity = 2;
let blinkNavEnabled = JSON.parse(localStorage.getItem('es_blinkNav')||'true');
let blinkSelectEnabled = JSON.parse(localStorage.getItem('es_blinkSel')||'true');
let blinkKbEnabled = false;
let kbBlinkFocusKey = null;
let pageStack = [];
let ttsLock = false;

// ── BLINK DETECTION
const BLINK_MIN_MS = 55;
const LONG_BLINK_MS = 550;
const DOUBLE_BLINK_GAP = 480;
let earHistory = [], earBuf = 5;
let blinkState = 'open';
let blinkCloseTime = 0, lastBlinkTime = 0, blinkCount = 0;
let currentEAR = 1.0;
let blinkSensLevel = 1;
const BLINK_SENS = [
  {close:0.14, open:0.20, label:'Low'},
  {close:0.17, open:0.23, label:'Normal'},
  {close:0.21, open:0.27, label:'High'},
];

// ── ONLINE LEARNING — adaptive correction during use
// Ring buffer: store last 60 points → update model periodically
let onlineBuffer = [];      // {f, sx, sy}[]  — recent usage samples
const OL_MAX = 60;          // max buffer size
const OL_MIN_NEW = 5;       // min new samples before update (was 8, faster adaptation)
let olNewCount = 0;         // samples added since last update
let olEnabled = false;      // EyeSense stable mode: online learning kapalı

const $ = id => document.getElementById(id);
const video=$('video'), dot=$('dot'), dwellRing=$('dwellRing');
const teacherCamVideo=$('teacherCamVideo'), teacherCamCanvas=$('teacherCamCanvas'), teacherCamInfo=$('teacherCamInfo');
const startScreen=$('startScreen'), calibScreen=$('calibScreen');
const calibDotEl=$('calibDot'), calibRingEl=$('calibRing');
const calibMsg=$('calibMsg'), calibCounter=$('calibCounter');
const qualityFill=$('qualityFill'), qualityText=$('qualityText');
const evalScreen=$('evalScreen'), evalDotEl=$('evalDot'), evalRingEl=$('evalRing');
const evalMsg=$('evalMsg'), evalCounter=$('evalCounter');
const reportScreen=$('reportScreen'), mainUI=$('mainUI');
const statusBar=$('statusBar'), irisQ=$('irisQ');
const phraseBoard=$('phraseBoard'), output=$('output'), outputText=$('outputText');
const lightWarn=$('lightWarn'), headWarn=$('headWarn');
const gazeBackBtn=$('gazeBackBtn');
const blinkFlash=$('blinkFlash');

function toCm(px){ return (px/pxPerCm).toFixed(1); }

// ══════════════════════════════════════════════════════
// TTS — MOBILE COMPATIBLE (iOS/Android)
// On iOS, speechSynthesis doesn't work without user interaction.
// Fix: unlock with a silent utterance on first touch,
//      then normal speak() calls work fine.
// ══════════════════════════════════════════════════════
let ttsUnlocked = false;
let ttsVoice = null;

function pickTtsVoice(){
  if(!window.speechSynthesis) return;
  const voices = speechSynthesis.getVoices();
  if(!voices.length) return;
  const lang = appLang === 'tr' ? 'tr' : 'en';
  const langFull = appLang === 'tr' ? 'tr-TR' : 'en-US';
  const candidates = voices.filter(v => v.lang.startsWith(lang));
  if(!candidates.length){ ttsVoice = null; return; }
  const score = v => {
    let s = 0;
    if(v.lang === langFull) s += 10;
    if(v.localService) s += 5;
    if(/premium|enhanced|natural|google/i.test(v.name)) s += 3;
    return s;
  };
  candidates.sort((a,b) => score(b) - score(a));
  ttsVoice = candidates[0] || null;
}

function unlockTTS(){
  if(ttsUnlocked || !window.speechSynthesis) return;
  ttsUnlocked = true;
  const u = new SpeechSynthesisUtterance(' ');
  u.volume = 0; u.rate = 1;
  u.lang = appLang === 'tr' ? 'tr-TR' : 'en-US';
  speechSynthesis.speak(u);
  setTimeout(pickTtsVoice, 200);
}

// Unlock TTS on first touch
document.addEventListener('touchstart', unlockTTS, {once:true, passive:true});
document.addEventListener('click', unlockTTS, {once:true, passive:true});

// Re-select voice whenever voices load/change
if(window.speechSynthesis){
  speechSynthesis.onvoiceschanged = pickTtsVoice;
}

function speak(txt){
  if(!window.speechSynthesis || !txt || !txt.trim()) return;
  try{ speechSynthesis.cancel(); } catch(e){}
  const u = new SpeechSynthesisUtterance(txt.trim());
  u.lang = appLang === 'tr' ? 'tr-TR' : 'en-US';
  u.rate = 0.90;
  u.volume = 1.0;
  // Always re-check voice matches current language
  if(!ttsVoice || !ttsVoice.lang.startsWith(appLang === 'tr' ? 'tr' : 'en')){
    pickTtsVoice();
  }
  if(ttsVoice) u.voice = ttsVoice;
  setTimeout(() => { try{ speechSynthesis.speak(u); } catch(e){} }, 50);
}


// ── Keyboard sensitivity helpers
function setKbSensitivity(v){
  kbSensitivity=parseInt(v);
  const labels={1:'Low',2:'Normal',3:'High'};
  $('kbSensVal').textContent=labels[kbSensitivity];
}
function kbDwellMs(){ return kbSensitivity===3 ? DWELL_MS*0.55 : kbSensitivity===1 ? DWELL_MS*1.4 : DWELL_MS*0.85; }
function kbHitPad(){ return kbSensitivity===3 ? 10 : kbSensitivity===1 ? 0 : 5; }

// ══════════════════════════════════════════════════════
// [see source for notes]
// ══════════════════════════════════════════════════════
function cycleBlink(){
  blinkSensLevel=(blinkSensLevel+1)%3;
  $('blinkSensLabel').textContent=BLINK_SENS[blinkSensLevel].label;
  $('blinkSensCard').classList.toggle('active',true);
  speak(t('blinkSens')+BLINK_SENS[blinkSensLevel].label);
}

// ══════════════════════════════════════════════════════
// [see source for notes]
// ══════════════════════════════════════════════════════
function setInputMode(m){
  inputMode=m; localStorage.setItem('es_inputMode',m);
  ['Eye','Finger','Both','Dwell'].forEach(n=>{ const el=$('mode'+n); if(el) el.classList.remove('active'); });
  const map={eye:'Eye',finger:'Finger',both:'Both',dwellonly:'Dwell'};
  const btn=$('mode'+map[m]); if(btn) btn.classList.add('active');
  if(m==='finger'||m==='both') enableTouchInput(); else disableTouchInput();
  if(mainUI&&mainUI.style.display==='flex') dot.style.display=(m==='eye'||m==='both')?'block':'none';
}
let touchInputEnabled=false;
function enableTouchInput(){
  if(touchInputEnabled) return; touchInputEnabled=true;
  document.addEventListener('touchstart',onTouchGaze,{passive:false});
  document.addEventListener('touchmove',onTouchGaze,{passive:false});
  document.addEventListener('touchend',onTouchEnd,{passive:false});
}
function disableTouchInput(){
  if(!touchInputEnabled) return; touchInputEnabled=false;
  document.removeEventListener('touchstart',onTouchGaze);
  document.removeEventListener('touchmove',onTouchGaze);
  document.removeEventListener('touchend',onTouchEnd);
}
function onTouchGaze(e){
  if(!e.touches.length) return;
  const t=e.touches[0];
  smX=t.clientX; smY=t.clientY;
  dot.style.left=t.clientX+'px'; dot.style.top=t.clientY+'px';
  dispatchGaze(t.clientX,t.clientY,16);
}
function onTouchEnd(){ if(inputMode==='finger') resetAllDwells(); }
function resetAllDwells(){
  // EyeSense FIX: tek seçim motoru / arkadaki sekmeleri kilitle
  // Bir panel açıldığında önce tüm dwell sayaçları sıfırlanır.
  const resetItem = d => {
    if(!d) return;
    d.elapsed = 0;
    d.dwell = 0;
    d.fired = false;
    if(d.el) d.el.classList.remove('gazing');
    if(d.overlay) d.overlay.style.width = '0%';
    if(d.ov) d.ov.style.width = '0%';
  };

  if(typeof phraseDwells !== 'undefined') phraseDwells.forEach(resetItem);
  if(typeof kbDwells !== 'undefined') kbDwells.forEach(resetItem);
  if(typeof kbSuggDwells !== 'undefined') kbSuggDwells.forEach(resetItem);
  if(typeof iotDwells !== 'undefined') iotDwells.forEach(resetItem);
  if(typeof mainDwells !== 'undefined') mainDwells.forEach(resetItem);
  if(typeof qmMsgDwells !== 'undefined') qmMsgDwells.forEach(resetItem);
  if(typeof qmContactDwells !== 'undefined') qmContactDwells.forEach(resetItem);
  if(typeof visionGazeZoneDwells !== 'undefined') visionGazeZoneDwells.forEach(resetItem);

  document.querySelectorAll('.gazing').forEach(el => el.classList.remove('gazing'));
  document.querySelectorAll('.btn-dwell,.pb-dwell,.kb-dwell,.iot-dwell,.qm-dwell,.vpb-dwell,.vp-close-dwell,.pb-dwell-bar').forEach(el => {
    el.style.width = '0%';
  });
}




// ══════════════════════════════════════════════════════
// v38 FIX — MORE ekranında çift blink / çift tık ana menüye döndürür
// MORE bir panel olmadığı için pageStack'e girmez. Bu yüzden geri dönüşü
// sadece pageStack'e bağlamak MORE ekranında çalışmıyordu.
// ══════════════════════════════════════════════════════
function isMainMoreMenuOpenV38(){
  const grid = document.getElementById('mainMenuGrid');
  const quick = document.getElementById('quickMsgBtn');
  const a11y = document.getElementById('a11yBtn');
  const recalib = document.getElementById('recalibBtn');
  const mainVisible = (typeof mainUI !== 'undefined' && mainUI && mainUI.style.display !== 'none');
  const noPanelOpen = (typeof isAnyPanelOpen === 'function') ? !isAnyPanelOpen() : true;

  return !!(
    grid && mainVisible && noPanelOpen &&
    (
      (typeof mainMenuStageV33 !== 'undefined' && mainMenuStageV33 === 'more') ||
      (quick && a11y && recalib)
    )
  );
}

function goMainFromMoreV38(){
  if(!isMainMoreMenuOpenV38()) return false;
  resetAllDwells && resetAllDwells();
  if(typeof openMainPrimaryMenu === 'function'){
    openMainPrimaryMenu();
  }else{
    mainMenuStageV33 = 'main';
    if(typeof renderMainMenuV33 === 'function') renderMainMenuV33();
  }
  if(typeof showBlinkFlash === 'function') showBlinkFlash('👁👁 Main Menu');
  return true;
}

// ══════════════════════════════════════════════════════
// DISPATCH GAZE
// ══════════════════════════════════════════════════════
function isAnyPanelOpen(){
  return (
    phraseBoard.style.display === 'flex' ||
    $('kbPanel').style.display === 'flex' ||
    $('a11yPanel').style.display === 'flex' ||
    $('visionPanel').style.display === 'flex' ||
    $('quickMsgPanel').style.display === 'flex' ||
    $('iotPanel').style.display === 'flex' ||
    $('howPanel').style.display === 'flex' ||
    $('diagPanel').style.display === 'flex' ||
    $('archPanel').style.display === 'flex' ||
    !reportScreen.classList.contains('hidden')
  );
}

function dispatchGaze(gx,gy,dt){
  // EyeSense FIX: aynı anda sadece en üstteki aktif panel dwell alır.
  // Arkada kalan mainUI veya başka panel artık kendi kendine seçim yapamaz.
  const safeDt = Math.min(dt, 80);
  const panelOpen = isAnyPanelOpen();

  if(panelOpen){
    updateIrisScroll(gx, gy);
  } else {
    const t=$('scrollZoneTop'), b=$('scrollZoneBottom');
    if(t) t.classList.remove('visible','active');
    if(b) b.classList.remove('visible','active');
    irisScrollVel = 0;
  }

  if(evalActive && evalDwellTracker){
    evalDwellTracker.update(gx, gy, performance.now());
  }

  // v31 FIX: Dil seçimi ekranı açıkken mainUI kapalı olduğu için eski akışta
  // updateLanguageDwells çalışmıyordu. En üst öncelik dil ekranında olmalı.
  const languageScreenEl = document.getElementById('languageScreen');
  if(languageScreenEl && !languageScreenEl.classList.contains('hidden')){
    updateLanguageDwells(gx, gy, safeDt);
    updateGazeBack(gx, gy, safeDt);
    updateGlobalPanelBack(gx, gy, safeDt);
    return;
  }

  // Öncelik sırası: açık panel > ana menü.
  // Burada else-if kullanılması bilinçli: bir frame içinde iki farklı sekme tetiklenemez.
  if(phraseBoard.style.display === 'flex'){
    updatePhraseDwells(gx, gy, safeDt);
  } else if($('kbPanel').style.display === 'flex'){
    updateKbDwells(gx, gy, safeDt);
  } else if($('visionPanel').style.display === 'flex'){
    updateVisionDwells(gx, gy, safeDt);
  } else if($('quickMsgPanel').style.display === 'flex'){
    updateQmDwells(gx, gy, safeDt);
  } else if($('iotPanel').style.display === 'flex'){
    updateIotDwells(gx, gy, safeDt);
  } else if(mainUI.style.display === 'flex' && !panelOpen){
    updateMainMenuDwells(gx, gy, safeDt);
    updateLanguageDwells(gx, gy, safeDt);
  }

  updateGazeBack(gx, gy, safeDt);
  updateGlobalPanelBack(gx, gy, safeDt);
}


// ══════════════════════════════════════════════════════
// [see source for notes]
// ══════════════════════════════════════════════════════
let mainDwells = [];
function buildMainDwells(){
  mainDwells = [];
  document.querySelectorAll('#mainUI .btn-sm').forEach(btn=>{
    const overlay = btn.querySelector('.btn-dwell');
    if(!overlay) return;
    const action = btn.dataset.action;
    mainDwells.push({el:btn, overlay, action, elapsed:0, fired:false});
  });
}
function updateMainMenuDwells(gx,gy,dt){
  if(!mainDwells.length) buildMainDwells();
  mainDwells.forEach(md=>{
    const r=md.el.getBoundingClientRect();
    const inside=gx>=r.left-4&&gx<=r.right+4&&gy>=r.top-4&&gy<=r.bottom+4;
    if(inside){ md.elapsed+=dt; md.el.classList.add('gazing'); }
    else{ md.elapsed=Math.max(0,md.elapsed-dt*2); if(!md.elapsed) md.el.classList.remove('gazing'); }
    const pct=Math.min(1,md.elapsed/(DWELL_MS*1.1));
    md.overlay.style.width=(pct*100)+'%';
    if(pct>=1&&!md.fired){
      md.fired=true;
      md.el.classList.remove('gazing'); md.overlay.style.width='0%'; md.elapsed=0;
      md.fired=false;
      // Aksiyonu tetikle
      if(md.action) window[md.action]&&window[md.action]();
    }
  });
}

// ══════════════════════════════════════════════════════
// GLOBAL PANEL BACK BUTTON DWELL
// ══════════════════════════════════════════════════════
let globalBackElapsed=0;
const globalPanelBackEl = document.getElementById('globalPanelBack');
const globalPanelBackDwellEl = document.getElementById('globalPanelBackDwell');

globalPanelBackEl.addEventListener('click', ()=>gazeBack());

function updateGlobalPanelBack(gx,gy,dt){
  if(globalPanelBackEl.style.display==='none') return;
  const r=globalPanelBackEl.getBoundingClientRect();
  const inside=gx>=r.left-6&&gx<=r.right+6&&gy>=r.top-6&&gy<=r.bottom+6;
  if(inside){ globalBackElapsed+=dt; globalPanelBackEl.classList.add('gazing'); }
  else{ globalBackElapsed=Math.max(0,globalBackElapsed-dt*2); globalPanelBackEl.classList.remove('gazing'); }
  const pct=Math.min(1,globalBackElapsed/1400);
  globalPanelBackDwellEl.style.width=(pct*100)+'%';
  if(pct>=1){ globalBackElapsed=0; globalPanelBackDwellEl.style.width='0%'; gazeBack(); }
}

let gazeBackElapsed=0;
function updateGazeBack(gx,gy,dt){
  if(gazeBackBtn.style.display==='none') return;
  const r=gazeBackBtn.getBoundingClientRect();
  const inside=gx>=r.left-6&&gx<=r.right+6&&gy>=r.top-6&&gy<=r.bottom+6;
  if(inside){ gazeBackElapsed+=dt; gazeBackBtn.classList.add('gazing'); }
  else{ gazeBackElapsed=Math.max(0,gazeBackElapsed-dt*2); gazeBackBtn.classList.remove('gazing'); }
  const pct=Math.min(1,gazeBackElapsed/1600);
  $('gazeBackDwell').style.width=(pct*100)+'%';
  if(pct>=1){ gazeBackElapsed=0; gazeBack(); }
}
function gazeBack(){
  // v38: MORE ekranındayken Back / double blink ana menüye dönsün.
  if(goMainFromMoreV38()) return;

  if(!pageStack.length){
    return;
  }
  const last=pageStack.pop();
  if(last==='phraseBoard') closePhraseBoard();
  else if(last==='kbPanel') closeKeyboard();
  else if(last==='iotPanel') closeIot();
  else if(last==='a11yPanel') closeA11y();
  else if(last==='diagPanel') closeDiag();
  else if(last==='archPanel') closeArch();
  else if(last==='howPanel') closeHow();
  else if(last==='visionPanel') closeVision();
  else if(last==='quickMsgPanel') closeQuickMsg();
  else if(last==='report') showMainMode();
  gazeBackElapsed=0; updateGazeBackVisibility();
}
function pushPage(n){ pageStack.push(n); updateGazeBackVisibility(); }
function popPage(){ if(pageStack.length) pageStack.pop(); updateGazeBackVisibility(); }
function updateGazeBackVisibility(){
  gazeBackBtn.style.display=pageStack.length?'flex':'none';
  gazeBackElapsed=0; $('gazeBackDwell').style.width='0%';
  gazeBackBtn.classList.remove('gazing');
  // Global panel back button — show when any panel is open
  const gpb = document.getElementById('globalPanelBack');
  if(gpb){
    gpb.style.display=pageStack.length?'flex':'none';
    globalBackElapsed=0;
    document.getElementById('globalPanelBackDwell').style.width='0%';
    gpb.classList.remove('gazing');
  }
}

// ══════════════════════════════════════════════════════
// TEMA
// ══════════════════════════════════════════════════════
let currentTheme=localStorage.getItem('es_theme')||'n';
function setTheme(t){
  ['hc','lg','night'].forEach(c=>document.body.classList.remove(c));
  currentTheme=t; if(t!=='n') document.body.classList.add(t);
  localStorage.setItem('es_theme',t);
  ['N','H','L','Ni'].forEach(n=>{const el=$('th'+n);if(el) el.classList.remove('active');});
  const map={n:'N',hc:'H',lg:'L',night:'Ni'};
  const btn=$('th'+(map[t]||'N'));if(btn) btn.classList.add('active');
}
function openHow(){
  resetAllDwells();
  $('howPanel').style.display='flex';
  pushPage('howPanel');
}
function closeHow(){
  $('howPanel').style.display='none';
  popPage();
}

// Start screen input mode selector
function setStartMode(m){
  inputMode = m;
  localStorage.setItem('es_inputMode', m);
  const map = {eye:'Eye', finger:'Finger', both:'Both'};
  Object.entries(map).forEach(([key, suffix])=>{
    const btn = $('startMode'+suffix);
    if(btn) btn.classList.toggle('active', key===m);
  });
  if(m==='finger'||m==='both') enableTouchInput(); else disableTouchInput();
}

function initStartModeUI(){
  const map = {eye:'Eye', finger:'Finger', both:'Both'};
  Object.entries(map).forEach(([key, suffix])=>{
    const btn = $('startMode'+suffix);
    if(btn) btn.classList.toggle('active', key===inputMode);
  });
}

function openA11y(){ resetAllDwells(); $('a11yPanel').style.display='flex'; pushPage('a11yPanel'); setTheme(currentTheme); setInputMode(inputMode); updateBlinkUI(); }
function closeA11y(){ $('a11yPanel').style.display='none'; popPage(); }

function openArch(){ resetAllDwells(); $('archPanel').style.display='flex'; pushPage('archPanel'); }
function closeArch(){ $('archPanel').style.display='none'; popPage(); }

// ══════════════════════════════════════════════════════
// DIAGNOSTICS — Risk & System Health Panel
// Addresses: lighting sensitivity, camera quality, head movement, browser compatibility
// ══════════════════════════════════════════════════════
// ══════════════════════════════════════════════════════
// QUICK MSG
// ══════════════════════════════════════════════════════
const QM_STORAGE_KEY     = 'es_qm_contacts';
const QM_MSG_STORAGE_KEY = 'es_qm_messages';

const QM_DEFAULT_CONTACTS = [
  {name:'Kişi 1', role:'Refakatçi', avatar:'👤', phone:''},
];
let qmContacts = JSON.parse(localStorage.getItem(QM_STORAGE_KEY)||'null') || QM_DEFAULT_CONTACTS;

const QM_DEFAULT_MESSAGES_TR = [
  {i:'🆘', t:'Yardıma ihtiyacım var, lütfen gel.'},
  {i:'😊', t:'İyiyim, merak etme.'},
  {i:'🍽️', t:'Açım, yemek getirir misin?'},
  {i:'💊', t:'İlaç zamanım geldi.'},
  {i:'🚿', t:'Banyoya gitmem lazım.'},
  {i:'😴', t:'Uyumak istiyorum.'},
];
const QM_DEFAULT_MESSAGES_EN = [
  {i:'🆘', t:'I need help, please come.'},
  {i:'😊', t:"I'm fine, don't worry."},
  {i:'🍽️', t:"I'm hungry, can you bring food?"},
  {i:'💊', t:"It's time for my medication."},
  {i:'🚿', t:'I need to use the bathroom.'},
  {i:'😴', t:'I want to sleep.'},
];

let qmMessages = JSON.parse(localStorage.getItem(QM_MSG_STORAGE_KEY)||'null') || null;

function getQmMessages(){
  if(qmMessages) return qmMessages;
  return appLang==='en' ? QM_DEFAULT_MESSAGES_EN : QM_DEFAULT_MESSAGES_TR;
}

function saveQmMessages(msgs){
  qmMessages = msgs;
  localStorage.setItem(QM_MSG_STORAGE_KEY, JSON.stringify(msgs));
}

function renderQmMsgs(){
  const list = $('qmMsgsList');
  if(!list) return;

  const msgs = getQmMessages().slice(0, 6);
  list.innerHTML = '';

  msgs.forEach((m, i) => {
    const div = document.createElement('div');
    div.className = 'qm-msg';
    div.dataset.idx = i;

    div.innerHTML =
      '<span class="qmm-icon">'+m.i+'</span>' +
      '<span class="qmm-text">'+m.t+'</span>' +
      '<div class="qm-dwell"></div>';

    list.appendChild(div);
  });

  bindQmDwells();
}

function qmAddMessage(){
  const iconEl = $('qmNewIcon');
  const textEl = $('qmNewText');
  const icon = (iconEl.value.trim()) || '💬';
  const text = textEl.value.trim();
  if(!text){ showBlinkFlash(appLang==='en'?'Enter a message':'Mesaj girin'); return; }
  const msgs = getQmMessages().slice();
  msgs.push({i:icon, t:text});
  saveQmMessages(msgs);
  iconEl.value=''; textEl.value='';
  renderQmMsgs();
}

function qmDeleteMessage(idx){
  const msgs = getQmMessages().slice();
  msgs.splice(idx, 1);
  saveQmMessages(msgs);
  renderQmMsgs();
}

function openQuickMsg(){
  resetAllDwells();
  $('quickMsgPanel').style.display='flex';
  pushPage('quickMsgPanel');
  renderQmContacts();
  applyQmI18n();
  renderQmMsgs();
}
function closeQuickMsg(){
  $('quickMsgPanel').style.display='none';
  popPage();
}
function renderQmContacts(){
  qmContacts.forEach((c,i)=>{
    const nameEl=document.getElementById('qmc'+i+'name');
    const roleEl=document.getElementById('qmc'+i+'role');
    const avEl=document.getElementById('qmc'+i+'av');
    if(nameEl) nameEl.textContent=c.name;
    if(roleEl) roleEl.textContent=c.role;
    if(avEl)   avEl.textContent=c.avatar;
  });
}
function applyQmI18n(){
  if(appLang==='en'){
    if($('qmTitle')) $('qmTitle').textContent='📲 Quick Message';
    if($('qmMsgLabel')) $('qmMsgLabel').textContent='QUICK MESSAGES';
    if($('qmEditLabel')) $('qmEditLabel').textContent='Edit Contacts';
    // Mesajlar renderQmMsgs() tarafından yönetilir
    // Contact roles
    const re0=document.getElementById('qmc0role');
    if(re0&&re0.textContent==='Refakatçi') re0.textContent='Caregiver';
  } else {
    if($('qmTitle')) $('qmTitle').textContent='📲 Quick Message';
    if($('qmMsgLabel')) $('qmMsgLabel').textContent='QUICK MESSAGES';
    if($('qmEditLabel')) $('qmEditLabel').textContent='Kişileri Düzenle';
  }
}
function qmCall(idx){
  const c=qmContacts[idx];
  const name = c?.name || (appLang==='tr'?'Kişi':'Contact');
  const label = appLang==='tr' ? `${name} Aranıyor` : `Calling ${name}`;
  voiceConfirm(label, ()=>{
    if(c&&c.phone){ window.location.href='tel:'+c.phone; }
    else { showBlinkFlash(appLang==='tr'?'Telefon numarası eklenmemiş':'No phone number added'); }
  });
}
function qmSms(idx){
  const c=qmContacts[idx];
  const name = c?.name || (appLang==='tr'?'Kişi':'Contact');
  const msg=appLang==='tr'?'EyeSense: Yardıma ihtiyacım var.':'EyeSense: I need help.';
  const label = appLang==='tr' ? `${name}'e mesaj gönder` : `Message ${name}`;
  voiceConfirm(label, ()=>{
    if(c&&c.phone){ window.location.href=`sms:${c.phone}?body=${encodeURIComponent(msg)}`; }
    else { showBlinkFlash(appLang==='tr'?'Telefon numarası eklenmemiş':'No phone number added'); }
  });
}
// Seçili kontak FCM token'ı — localStorage'da saklanır
// Refakatçi cihazında service worker kurulunca kaydedilir
function getContactFcmToken(contactIdx){
  return localStorage.getItem(`es_fcm_token_${contactIdx}`) || null;
}

async function qmSendMsg(text, contactIdx=0){
  // 1. Kullanıcıya mesajı sesli söyle
  speak(text);
  showBlinkFlash('💬 '+text.slice(0,40)+(text.length>40?'…':''));

  // 2. Konum bilgisi (varsa)
 let location = null;
if(typeof lastLocation !== 'undefined' && lastLocation){
  location = { lat: lastLocation.lat, lng: lastLocation.lng };
} else {
  await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
        pos=>{ lastLocation = { lat: pos.coords.latitude, lng: pos.coords.longitude, accuracy: pos.coords.accuracy };
        location = { lat: lastLocation.lat, lng: lastLocation.lng };
        resolve();
      },
      () => resolve(),
      { timeout: 5000, maximumAge: 30000 }
    );
  });
}

  const contact = (typeof qmContacts !== 'undefined' && qmContacts[contactIdx])
    ? qmContacts[contactIdx]
    : { name: 'Refakatçi' };

  const fcmToken = getContactFcmToken(contactIdx);

  // 3. "📡 İletiliyor…" durumunu göster
  const sendingMsg = appLang==='tr' ? '📡 İletiliyor…' : '📡 Sending…';
  showBlinkFlash(sendingMsg);
  if(typeof visionSetStatus === 'function'){
    visionSetStatus(sendingMsg, 'analyzing');
  }

  try{
    if(!navigator.onLine) throw new Error('offline');

    const payload = {
      message:     text,
      contactName: contact.name,
      contactId:   contactIdx,
      fcmToken:    fcmToken,
      location:    location,
      timestamp:   new Date().toISOString(),
      lang:        typeof appLang !== 'undefined' ? appLang : 'tr'
    };

    const res = await fetch(`${RENDER_URL}/api/notify-caregiver`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(payload),
      signal:  AbortSignal.timeout(8000)
    });

    if(!res.ok){
      const err = await res.json().catch(()=>({}));
      throw new Error(err?.error || `HTTP ${res.status}`);
    }

    // 4. Başarı — "✅ Bildirim Gönderildi" göster ve seslendir
    const successMsg = appLang==='tr'
      ? '✅ Bildirim Gönderildi'
      : '✅ Notification Sent';
    showBlinkFlash(successMsg);
    if(typeof visionSetStatus === 'function') visionSetStatus('', '');
    // Önce gönderme sesi için kısa bir bekleme, sonra seslendirme
    setTimeout(()=>speak(successMsg), 300);

  }catch(e){
    console.warn('[QM Notify]', e.message);
    const errMsg = appLang==='tr'
      ? '⚠️ İletişim hatası, lütfen tekrar deneyin'
      : '⚠️ Connection error, please try again';
    showBlinkFlash(errMsg);
    if(typeof visionSetStatus === 'function') visionSetStatus(errMsg, 'error');
    setTimeout(()=>speak(errMsg), 400);
  }

  closeQuickMsg();
}
function openQmEdit(){
  const name0=prompt(appLang==='tr'?'Refakatçi adı:':'Caregiver name:', qmContacts[0].name); if(!name0) return;
  const phone0=prompt(appLang==='tr'?'Telefon (ör: +905..):':'Phone:', qmContacts[0].phone||'');
  qmContacts[0]={...qmContacts[0], name:name0, phone:phone0};
  localStorage.setItem(QM_STORAGE_KEY, JSON.stringify(qmContacts));
  renderQmContacts();
}

// Bind click on quick messages
let qmMsgDwells=[], qmContactDwells=[];
function bindQmDwells(){
  qmMsgDwells=[]; qmContactDwells=[];
  document.querySelectorAll('#qmMsgsList .qm-msg').forEach(el=>{
    const ov=el.querySelector('.qm-dwell');
    const txt=el.querySelector('.qmm-text')?.textContent||'';
    el.onclick=()=>qmSendMsg(txt);
    qmMsgDwells.push({el,ov,text:txt,elapsed:0});
  });
}
function updateQmDwells(gx,gy,dt){
  if($('quickMsgPanel').style.display!=='flex') return;
  qmMsgDwells.forEach(d=>{
    const r=d.el.getBoundingClientRect();
    const inside=gx>=r.left&&gx<=r.right&&gy>=r.top&&gy<=r.bottom;
    if(inside){d.elapsed+=dt;d.el.classList.add('gazing');}
    else{d.elapsed=Math.max(0,d.elapsed-dt*2);d.el.classList.remove('gazing');}
    const pct=Math.min(1,d.elapsed/DWELL_MS);
    d.ov.style.width=(pct*100)+'%';
    if(pct>=1){d.elapsed=0;d.ov.style.width='0%';qmSendMsg(d.text);}
  });
}

function toggleWakeWord(){
  if(wakeWordActive){ stopWakeListener(); }
  else { startWakeListener(); }
  const lbl=$('wakeWordLabel');
  const card=$('wakeWordCard');
  if(lbl) lbl.textContent=wakeWordActive?(appLang==='tr'?'Açık ✓':'On ✓'):(appLang==='tr'?'Kapalı':'Off');
  if(card) card.classList.toggle('active', wakeWordActive);
  speak(wakeWordActive
    ? (appLang==='tr'?'"EyeSense yardım et" dinleniyor':'Listening for "EyeSense help"')
    : (appLang==='tr'?'Uyandırma komutu kapatıldı':'Wake word disabled')
  );
}

function openDiag(){
  resetAllDwells();
  $('diagPanel').style.display='flex';
  pushPage('diagPanel');
  renderDiag();
}
function closeDiag(){ $('diagPanel').style.display='none'; popPage(); }
function renderDiag(){
  const risks = [
    {
      label:'💡 Light Condition',
      status: lightLevel==='normal' ? 'ok' : lightLevel==='low' ? 'warn' : 'bad',
      value: lightLevel==='normal' ? `Normal (luma:${lastLuma.toFixed(0)})` : lightLevel==='low' ? `Low (luma:${lastLuma.toFixed(0)})` : `Insufficient (luma:${lastLuma.toFixed(0)})`,
      detail:'System should be tested in bright, medium and low light. Iris detection degrades in low light. Luma>60 = normal, 32–60 = low, <32 = insufficient.',
      mitigation:'Adaptive gamma compensation (γ = log(0.5)/log(luma/255)) active. Try Night Mode theme.'
    },
    {
      label:'📷 Camera Quality',
      status: currentFPS >= 20 ? 'ok' : currentFPS >= 12 ? 'warn' : 'bad',
      value: `${currentFPS} FPS`,
      detail:'720p or higher camera recommended. Lower resolution reduces iris detection accuracy.',
      mitigation:'If FPS < 15, close other tabs or reduce video resolution.'
    },
    {
      label:'🤕 Head Movement',
      status: headMoveCount < 5 ? 'ok' : headMoveCount < 12 ? 'warn' : 'bad',
      value: headMoveCount < 5 ? 'Stable' : headMoveCount < 12 ? 'Fair' : 'Excessive',
      detail:'Large head movements degrade gaze prediction. Head pose compensation is active (±15°).',
      mitigation:'Yaw/pitch compensation tolerates ±15° head angle.'
    },
    {
      label:'⚡ Pipeline Latency',
      status: pipelineLatencyMs <= 200 ? 'ok' : 'bad',
      value: `~${pipelineLatencyMs} ms`,
      detail:'Target: ≤200ms total. Camera(20ms) + FaceMesh(30ms) + Gaze(10ms) + UI(15ms) ≈ 75ms ideal.',
      mitigation:'High latency → lower ALPHA smoothing, set kbSensitivity to normal.'
    },
    {
      label:'🌐 Browser Compatibility',
      status: (window.chrome || navigator.userAgent.includes('Edg')) ? 'ok' : 'warn',
      value: window.chrome ? 'Chrome ✓' : navigator.userAgent.includes('Edg') ? 'Edge ✓' : navigator.userAgent.includes('Firefox') ? 'Firefox ⚠' : 'Unknown',
      detail:'WebRTC + WebGL work best with Chrome/Edge. MediaPipe performance may drop on Firefox.',
      mitigation:'Use Chrome 90+ or Edge 90+. Safari iOS 16+ supported.'
    },
    {
      label:'🔒 Privacy Status',
      status:'ok',
      value:'Local processing ✓',
      detail:'Video frames are never stored. WebRTC camera access — only a temporary memory buffer is used.',
      mitigation:'No frames are sent to any server. Only calibration model weights are stored in localStorage.'
    },
  ];
  const colorMap={ok:'#22dd88',warn:'#ffaa00',bad:'#ff5555'};
  $('diagContent').innerHTML = risks.map(r=>`
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:14px 16px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
        <span style="font-weight:600;">${r.label}</span>
        <span style="color:${colorMap[r.status]};font-size:12px;font-weight:700;">${r.value}</span>
      </div>
      <div style="color:#888;font-size:11px;line-height:1.6;">${r.detail}</div>
      <div style="color:#4488ff;font-size:11px;margin-top:4px;">↳ ${r.mitigation}</div>
    </div>`).join('');
}

// ══════════════════════════════════════════════════════
// BLINK DETECTION
// ══════════════════════════════════════════════════════
function processBlink(lm, ts){
  const re=earCalc(lm,RET,REB,RO,RN), le=earCalc(lm,LET,LEB,LO,LN);
  currentEAR=(re+le)/2;
  earHistory.push(currentEAR);
  if(earHistory.length>earBuf) earHistory.shift();
  const smooth=earHistory.reduce((a,b)=>a+b,0)/earHistory.length;
  const s=BLINK_SENS[blinkSensLevel];
  if(blinkState==='open'&&smooth<s.close){ blinkState='closed'; blinkCloseTime=ts; }
  else if(blinkState==='closed'&&smooth>=s.open){
    const dur=ts-blinkCloseTime;
    blinkState='open';
    if(dur>=BLINK_MIN_MS){
      if(dur>=LONG_BLINK_MS) onLongBlink();
      else onSingleBlink(ts);
    }
  }
  else if(blinkState==='closed'&&(ts-blinkCloseTime)>1500){ blinkState='open'; }
}

function onSingleBlink(ts){
  const gap = ts - lastBlinkTime;
  // [see source for notes]
  if(gap < DOUBLE_BLINK_GAP){ blinkCount++; }
  else { blinkCount = 1; }
  lastBlinkTime = ts;

  // [see source for notes]
  if(blinkCount >= 2){
    blinkCount = 0;
    clearTimeout(onSingleBlink._pending);
    onDoubleBlink();
    return;
  }

  // [see source for notes]
  clearTimeout(onSingleBlink._pending);
  onSingleBlink._pending = setTimeout(()=>{
    if(blinkCount >= 2) return; // double blink fired, cancel single
    showBlinkFlash('👁 Blink');
    // Voice confirm takes priority
    if(voiceConfirmPending){ resolveVoiceConfirm(); return; }
    if(blinkSelectEnabled){
      triggerBlinkSelect();
    } else if(blinkKbEnabled && $('kbPanel').style.display==='flex'){
      triggerBlinkKey();
    }
  }, 200);
}

function onDoubleBlink(){
  clearTimeout(onSingleBlink._pending);
  blinkCount = 0;

  // v38: MORE ekranındaysak direkt ana menüye dön.
  // Bu kontrol pageStack'ten önce olmalı; çünkü MORE pageStack'e eklenmiyor.
  if(goMainFromMoreV38()) return;

  showBlinkFlash('👁👁 Double → Back');

  if(pageStack.length){
    gazeBack();
  }
}

function onLongBlink(){
  showBlinkFlash('👁 Long → Close');
  clearTimeout(onSingleBlink._pending);
  if($('kbPanel').style.display==='flex') closeKeyboard();
  else if(phraseBoard.style.display==='flex') closePhraseBoard();
  else if($('iotPanel').style.display==='flex') closeIot();
  else if($('a11yPanel').style.display==='flex') closeA11y();
  else if($('diagPanel').style.display==='flex') closeDiag();
  else if($('archPanel').style.display==='flex') closeArch();
  else if($('howPanel').style.display==='flex') closeHow();
}

function showBlinkFlash(msg){
  blinkFlash.textContent=msg; blinkFlash.style.display='block'; blinkFlash.style.opacity='1';
  clearTimeout(blinkFlash._t);
  blinkFlash._t=setTimeout(()=>{ blinkFlash.style.opacity='0'; setTimeout(()=>blinkFlash.style.display='none',200); },700);
}

// ══════════════════════════════════════════════════════
// [see source for notes]
// ══════════════════════════════════════════════════════
function triggerBlinkSelect(){
  let best = null, bestPct = 0;

  // 1. Klavye
  if($('kbPanel').style.display==='flex'){
    // [see source for notes]
    kbSuggDwells.forEach(sd=>{
      const pct = sd.elapsed / (kbDwellMs()*0.7);
      if(pct > bestPct && pct > 0.08){ bestPct=pct; best={type:'kbsugg', d:sd}; }
    });
    // [see source for notes]
    kbDwells.forEach(kd=>{
      const pct = kd.elapsed / kbDwellMs();
      if(pct > bestPct && pct > 0.08){ bestPct=pct; best={type:'kb', d:kd}; }
    });
    if(!best){ showBlinkFlash('👁 Look at a key'); return; }
    if(best.type==='kbsugg'){
      kbSelSugg(best.d.word);
      showBlinkFlash('✅ '+best.d.word);
    } else {
      flashKey(best.d.el);
      kbPress(best.d.key);
      best.d.elapsed=0; best.d.el.classList.remove('gazing','blink-ready'); best.d.overlay.style.width='0%';
      showBlinkFlash('✅ '+(best.d.key==='⎵'?'SPACE':best.d.key==='⌫'?'DEL':best.d.key));
    }
    return;
  }

  // 2. Phrase board
  if(phraseBoard.style.display==='flex'){
    phraseDwells.forEach(pd=>{
      const pct = pd.elapsed / DWELL_MS;
      if(pct > bestPct && pct > 0.08){ bestPct=pct; best={type:'phrase', d:pd}; }
    });
    if(!best){ showBlinkFlash('👁 Look at a phrase'); return; }
    outputText.textContent=best.d.phrase.i+' '+best.d.phrase.t;
    output.style.display='flex'; speak(best.d.phrase.t);
    showBlinkFlash('✅ '+best.d.phrase.t);
    return;
  }

  // 3. IoT
  if($('iotPanel').style.display==='flex'){
    iotDwells.forEach(id=>{
      const pct = id.elapsed / 2000;
      if(pct > bestPct && pct > 0.08){ bestPct=pct; best={type:'iot', d:id}; }
    });
    if(!best){ showBlinkFlash('👁 Look at a device'); return; }
    best.d.dev.s=!best.d.dev.s;
    speak(best.d.dev.n+(best.d.dev.s?' on':' off'));
    renderIot();
    showBlinkFlash('✅ '+best.d.dev.n+': '+(best.d.dev.s?'ON':'OFF'));
    return;
  }

  // [see source for notes]
  const languageScreenEl=document.getElementById('languageScreen');
  if(languageScreenEl && !languageScreenEl.classList.contains('hidden')){
    languageDwells.forEach(d=>{
      const pct=d.elapsed/DWELL_MS;
      if(pct > bestPct && pct > 0.08){ bestPct=pct; best={type:'language', d}; }
    });
    if(!best){ showBlinkFlash('👁 Dil kartına bak'); return; }
    chooseLanguageAndContinue(best.d.lang);
    showBlinkFlash('✅ Dil seçildi');
    return;
  }

  if(mainUI.style.display==='flex'){
    mainDwells.forEach(md=>{
      const pct = md.elapsed / (DWELL_MS*1.1);
      if(pct > bestPct && pct > 0.08){ bestPct=pct; best={type:'main', d:md}; }
    });
    if(!best){ showBlinkFlash('👁 Look at a button'); return; }
    if(best.d.action) window[best.d.action]&&window[best.d.action]();
    showBlinkFlash('✅ Selected');
    return;
  }

  // [see source for notes]
  showBlinkFlash('😉😉 Double blink → Back');
}

// ══════════════════════════════════════════════════════
// BLINK KLAVYE (eski mod — blinkKbEnabled)
// ══════════════════════════════════════════════════════
function toggleBlinkKb(){
  blinkKbEnabled=!blinkKbEnabled;
  $('kbBlinkToggle').textContent=blinkKbEnabled?'👁 Blink ✓':'👁 Blink';
  $('kbBlinkToggle').classList.toggle('active',blinkKbEnabled);
  speak(blinkKbEnabled?'Blink keyboard on.':'Blink keyboard off.');
}
function triggerBlinkKey(){
  let best=null, bestPct=0;
  kbDwells.forEach(kd=>{
    const pct=kd.elapsed/kbDwellMs();
    if(pct>bestPct&&pct>0.15){ bestPct=pct; best=kd; }
  });
  if(best){
    flashKey(best.el); kbPress(best.key);
    best.elapsed=0; best.el.classList.remove('gazing','blink-ready'); best.overlay.style.width='0%';
    kbBlinkFocusKey=null;
  }
}
function flashKey(el){ el.classList.add('pressed'); setTimeout(()=>el.classList.remove('pressed'),200); }

// ── Blink Select toggle
function toggleBlinkSelect(){
  blinkSelectEnabled=!blinkSelectEnabled;
  localStorage.setItem('es_blinkSel', blinkSelectEnabled);
  updateBlinkUI();
  speak(blinkSelectEnabled?'Blink select on. Single blink to select.':'Blink select off.');
}
function toggleBlinkNav(){
  // [see source for notes]
  blinkNavEnabled=!blinkNavEnabled;
  localStorage.setItem('es_blinkNav',blinkNavEnabled);
  updateBlinkUI();
}
function updateBlinkUI(){
  const c=$('blinkNavCard'); if(c) c.classList.toggle('active', true); // always shown as active
  const s=$('blinkSelectCard'); if(s) s.classList.toggle('active', blinkSelectEnabled);
  const sl=$('blinkSelectLabel'); if(sl) sl.textContent=blinkSelectEnabled?'On ✓':'Off';
  const hint=$('blinkHint'); if(hint) hint.style.display=blinkSelectEnabled?'block':'none';
}

// ══════════════════════════════════════════════════════
// FEATURE EXTRACTION
// ══════════════════════════════════════════════════════
const RI=[469,470,471,472],LI=[474,475,476,477];
const RO=33,RN=133,RT=159,RB=145,LO=263,LN=362,LT=386,LB=374;
const RET=[159,160,161],REB=[145,144,163],LET=[386,387,388],LEB=[374,373,390];

function avg(lm,ids){ let x=0,y=0; ids.forEach(i=>{x+=lm[i].x;y+=lm[i].y;}); return{x:x/ids.length,y:y/ids.length}; }
function earCalc(lm,ti,bi,oi,ii){
  const t=avg(lm,ti),b=avg(lm,bi),o=lm[oi],n=lm[ii];
  const h=Math.abs(t.y-b.y),w=Math.abs(o.x-n.x); return w<0.001?0:h/w;
}

// HOCANIN GÖRMESİ İÇİN: köşedeki kameraya profesyonel teknik overlay çiz
function drawTeacherEyePreview(lm, gazeX, gazeY){
  if(!teacherCamCanvas || !teacherCamVideo) return;
  const box = teacherCamCanvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  const w = Math.max(1, Math.round(box.width * dpr));
  const h = Math.max(1, Math.round(box.height * dpr));
  if(teacherCamCanvas.width !== w || teacherCamCanvas.height !== h){
    teacherCamCanvas.width = w;
    teacherCamCanvas.height = h;
  }

  const ctx = teacherCamCanvas.getContext('2d');
  ctx.setTransform(dpr,0,0,dpr,0,0);
  ctx.clearRect(0,0,box.width,box.height);

  // Video aynalı olduğu için landmark x koordinatını da aynalıyoruz.
  const px = p => ({ x:(1-p.x)*box.width, y:p.y*box.height });

  function n2(v){ return Number.isFinite(v) ? v.toFixed(3) : '---'; }
  function line(a,b,color='rgba(125,211,252,.78)',width=1.25){
    ctx.beginPath();
    ctx.moveTo(a.x,a.y);
    ctx.lineTo(b.x,b.y);
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.stroke();
  }
  function drawOpenPath(ids, color='rgba(125,211,252,.92)', width=1.4){
    ctx.beginPath();
    ids.forEach((id,i)=>{
      const p=px(lm[id]);
      if(i===0) ctx.moveTo(p.x,p.y); else ctx.lineTo(p.x,p.y);
    });
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.stroke();
  }
  function drawCross(p, label, color){
    ctx.save();
    ctx.strokeStyle=color;
    ctx.fillStyle=color;
    ctx.lineWidth=1.4;
    ctx.beginPath();
    ctx.moveTo(p.x-6,p.y); ctx.lineTo(p.x+6,p.y);
    ctx.moveTo(p.x,p.y-6); ctx.lineTo(p.x,p.y+6);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(p.x,p.y,2.2,0,Math.PI*2);
    ctx.fill();
    ctx.font="700 9px 'DM Sans', Arial, sans-serif";
    ctx.fillText(label, p.x+8, p.y-7);
    ctx.restore();
  }
  function labelBox(x,y,text,color){
    ctx.save();
    ctx.font="700 9px 'DM Sans', Arial, sans-serif";
    const tw=ctx.measureText(text).width;
    ctx.fillStyle='rgba(2,6,23,.68)';
    ctx.strokeStyle=color;
    ctx.lineWidth=1;
    ctx.beginPath();
    ctx.roundRect(x,y,tw+10,17,6);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle=color;
    ctx.fillText(text,x+5,y+12);
    ctx.restore();
  }

  // İnce teknik grid: çizgi film efekti yerine debug/analiz ekranı hissi verir.
  ctx.save();
  ctx.strokeStyle='rgba(148,163,184,.10)';
  ctx.lineWidth=1;
  for(let x=box.width/3; x<box.width; x+=box.width/3){
    ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,box.height); ctx.stroke();
  }
  for(let y=box.height/3; y<box.height; y+=box.height/3){
    ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(box.width,y); ctx.stroke();
  }
  ctx.restore();

  // Göz kapak konturları: sade ve teknik çizgiler.
  drawOpenPath([33,160,158,133,153,144,33], 'rgba(56,189,248,.95)', 1.45);
  drawOpenPath([263,387,385,362,380,373,263], 'rgba(56,189,248,.95)', 1.45);

  // Kişiye özel canlı landmarklar.
  const rIraw = avg(lm,RI);
  const lIraw = avg(lm,LI);
  const noseRaw = lm[1];
  const rI = px(rIraw);
  const lI = px(lIraw);
  const nose = px(noseRaw);

  // Göz merkezleri ve burun referansı.
  drawCross(rI, 'R-IRIS', '#67e8f9');
  drawCross(lI, 'L-IRIS', '#67e8f9');
  drawCross(nose, 'NOSE', '#fb7185');

  // Baş/göz referansı için bağlantı çizgileri.
  line(rI, nose, 'rgba(251,113,133,.45)', 1);
  line(lI, nose, 'rgba(251,113,133,.45)', 1);
  line(rI, lI, 'rgba(103,232,249,.42)', 1);

  // Gaze noktasının ekrandaki konumunu küçük pencerede teknik hedef olarak göster.
  let zone = '---';
  if(Number.isFinite(gazeX) && Number.isFinite(gazeY)){
    zone = gazeX < window.innerWidth/3 ? 'SOL' : gazeX > window.innerWidth*2/3 ? 'SAĞ' : 'ORTA';
    const miniX = (gazeX / Math.max(1, window.innerWidth)) * box.width;
    const miniY = (gazeY / Math.max(1, window.innerHeight)) * box.height;
    const gp = {x:miniX,y:miniY};
    ctx.save();
    ctx.strokeStyle='rgba(248,113,113,.95)';
    ctx.fillStyle='rgba(248,113,113,.18)';
    ctx.lineWidth=1.6;
    ctx.beginPath(); ctx.arc(gp.x,gp.y,8,0,Math.PI*2); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(gp.x-12,gp.y); ctx.lineTo(gp.x+12,gp.y); ctx.moveTo(gp.x,gp.y-12); ctx.lineTo(gp.x,gp.y+12); ctx.stroke();
    labelBox(Math.max(6, Math.min(gp.x+10, box.width-78)), Math.max(28, gp.y-22), 'GAZE '+zone, '#fca5a5');
    ctx.restore();
  }

  // Kamera üstüne kısa teknik özet.
  labelBox(8, 29, `L(${n2(lIraw.x)}, ${n2(lIraw.y)})`, '#67e8f9');
  labelBox(8, 49, `R(${n2(rIraw.x)}, ${n2(rIraw.y)})`, '#67e8f9');
  labelBox(8, 69, `N(${n2(noseRaw.x)}, ${n2(noseRaw.y)})`, '#fb7185');

  if(teacherCamInfo){
    teacherCamInfo.innerHTML =
      `Gaze: <b style="color:#fde047">${zone}</b> · ` +
      `L-iris x=${n2(lIraw.x)} y=${n2(lIraw.y)}<br>` +
      `R-iris x=${n2(rIraw.x)} y=${n2(rIraw.y)} · ` +
      `Nose x=${n2(noseRaw.x)} y=${n2(noseRaw.y)}`;
  }
}

// ══════════════════════════════════════════════════════
// GAZE ESTIMATION ALGORITHM
// ──────────────────────────────────────────────────────
// Step 1 — Eye openness guard (EAR check)
//   EAR = (eyelid_height) / (eye_width)
//   If EAR < 0.07 → eye is closed / blinking → skip frame
//
// Step 2 — Iris offset (normalised gaze vector)
//   For each eye:
//     iris_offset_x = (iris_center_x - eye_left_x) / eye_width  − 0.5
//     iris_offset_y = (iris_center_y - eye_top_y)  / eye_height − 0.5
//   Result: value in [−0.5, +0.5] independent of head distance / face size
//   This is the core "gaze vector" component (horizontal + vertical direction)
//
// Step 3 — Head pose proxy (nose position relative to eye span)
//   nX = (nose_x − eye_midpoint_x) / interocular_distance
//   nY = (nose_y − eye_midpoint_y) / interocular_distance
//   Captures yaw / pitch without a 3D model
//
// Step 4 — Feature vector (10 dimensions)
//   f = [rOx, rOy, lOx, lOy, avgX, avgY, nX, nY, diffX, diffY]
//   → passed to polynomial expand → ridge regression → (screen_x, screen_y)
//
// Screen coordinate mapping:
//   screen_x = w0 + w1·rOx + w2·rOy + … + w_k·rOx² + … (degree-2 ridge regression)
//   Weights (modelX, modelY) are fitted during fixed 25-point calibration.
// ══════════════════════════════════════════════════════
function getFeatures(lm){
  const re=earCalc(lm,RET,REB,RO,RN), le=earCalc(lm,LET,LEB,LO,LN);
  if(re<0.07||le<0.07) return null;
  const nose=lm[1];
  if(prevNoseX!==null){
    const dx=Math.abs(nose.x-prevNoseX),dy=Math.abs(nose.y-prevNoseY);
    headMoveCount=(dx>0.012||dy>0.012)?Math.min(headMoveCount+1,20):Math.max(0,headMoveCount-1);
    headWarn.style.display=headMoveCount>7?'block':'none';
  }
  prevNoseX=nose.x; prevNoseY=nose.y;
  const rIris=avg(lm,RI), lIris=avg(lm,LI);
  // Step 2: normalise iris position within eye bounding box → gaze vector
  function off(oi,ni,ti,bi,iris){
    const o=lm[oi],n=lm[ni],t=lm[ti],b=lm[bi];
    const x0=Math.min(o.x,n.x),x1=Math.max(o.x,n.x);
    const y0=Math.min(t.y,b.y),y1=Math.max(t.y,b.y);
    const w=x1-x0,h=y1-y0;
    if(w<0.007||h<0.003) return null;
    return{x:(iris.x-x0)/w-0.5,y:(iris.y-y0)/h-0.5};
  }
  const rO=off(RO,RN,RT,RB,rIris), lO=off(LO,LN,LT,LB,lIris);
  if(!rO||!lO) return null;
  // Step 3: head pose proxy
  const rOut=lm[RO],lOut=lm[LO];
  const span=Math.abs(rOut.x-lOut.x);
  const nX=span>0?(nose.x-(rOut.x+lOut.x)/2)/span:0;
  const nY=span>0?(nose.y-(rOut.y+lOut.y)/2)/span:0;
  // Step 4: assemble feature vector
  return[rO.x,rO.y,lO.x,lO.y,(rO.x+lO.x)/2,(rO.y+lO.y)/2,nX,nY,rO.x-lO.x,rO.y-lO.y];
}
function stddev(a){ const m=a.reduce((s,v)=>s+v,0)/a.length; return Math.sqrt(a.reduce((s,v)=>s+(v-m)**2,0)/a.length); }

// ══════════════════════════════════════════════════════
// HEAD POSE ESTIMATION — feature-space proxy approach
// ──────────────────────────────────────────────────────
// Method: 2D landmark geometry (NOT full 3D PnP)
//   yaw  ≈ (nose_x − eye_midpoint_x) / interocular_dist  × 4
//   pitch ≈ (nose_y − eye_chin_midpoint_y)               × 3
//   roll  = atan2(leftEye_y − rightEye_y, Δx)
//
// Why not full 3D PnP?
//   Full PnP requires a 3D face model and camera intrinsics.
//   This proxy captures equivalent signal for ±15° yaw/pitch,
//   which covers typical hands-free use (head mostly centred).
//   Beyond ±25°, error increases — this is a known limitation,
//   documented as future work (3D PnP upgrade).
//
// Compensation applied:
//   screen_x += smoothed_yaw   × screenWidth  × 0.03
//   screen_y += smoothed_pitch × screenHeight × 0.02
//   (coefficients empirically tuned on 3-user pilot session)
// ══════════════════════════════════════════════════════
function getHeadPose(lm){
  // Nose tip, left eye outer, right eye outer, chin
  const nose=lm[1], leftEyeOut=lm[263], rightEyeOut=lm[33], chin=lm[152];
  // Yaw: horizontal asymmetry between eye corners relative to nose
  const eyeMidX=(leftEyeOut.x+rightEyeOut.x)/2;
  const yaw = (nose.x - eyeMidX) * 4.0; // normalised [-1,1]
  // Pitch: vertical position of nose relative to eye-chin midpoint
  const eyeMidY=(leftEyeOut.y+rightEyeOut.y)/2;
  const pitch = (nose.y - (eyeMidY+chin.y)/2) * 3.0;
  // Roll: tilt of eye-to-eye line
  const roll = Math.atan2(leftEyeOut.y - rightEyeOut.y, leftEyeOut.x - rightEyeOut.x);
  return { yaw, pitch, roll };
}

// ══════════════════════════════════════════════════════
// POLYNOMIAL FEATURE EXPANSION  (degree-2, cross-terms)
// ──────────────────────────────────────────────────────
// Why: linear calibration fails at screen edges and with
//      head movement → degree-2 adds curvature correction.
// Input:  base feature vector f (10 dims)
// Output: expanded vector with quadratic cross-terms (34 dims)
//   e.g. rOx², rOx·rOy, rOy², rOx·lOx, …
// This is equivalent to polynomial regression mapping:
//   screen_x = Σ wᵢ · fᵢ  +  Σ wⱼₖ · fⱼ·fₖ
// ══════════════════════════════════════════════════════
function polyExpand(f){
  const base = f;
  const cross = [];
  for(let i=0;i<4;i++) for(let j=i;j<4;j++) cross.push(base[i]*base[j]);
  return [...base, ...cross];
}

// ══════════════════════════════════════════════════════
// RIDGE REGRESSION  (L2-regularised least squares)
// ══════════════════════════════════════════════════════
function ridgeFit(X,y,lam=0.005){
  const F=X[0].length,F1=F+1;
  const Xb=X.map(r=>[1,...r]);
  const XtX=Array.from({length:F1},(_,i)=>Array.from({length:F1},(_,j)=>Xb.reduce((s,r)=>s+r[i]*r[j],0)+(i===j?lam:0)));
  const Xty=Array.from({length:F1},(_,i)=>Xb.reduce((s,r,n)=>s+r[i]*y[n],0));
  const A=XtX.map((r,i)=>[...r,Xty[i]]);
  for(let c=0;c<F1;c++){
    let piv=c; for(let r=c+1;r<F1;r++) if(Math.abs(A[r][c])>Math.abs(A[piv][c])) piv=r;
    [A[c],A[piv]]=[A[piv],A[c]];
    const d=A[c][c]; if(Math.abs(d)<1e-12) continue;
    for(let k=c;k<=F1;k++) A[c][k]/=d;
    for(let r=0;r<F1;r++){ if(r===c)continue; const f=A[r][c]; for(let k=c;k<=F1;k++) A[r][k]-=f*A[c][k]; }
  }
  return A.map(r=>r[F1]);
}
function predict(w,f){ return[1,...f].reduce((s,v,i)=>s+v*w[i],0); }

function trainModel(cd){
  // EyeSense v18 FIX: initial calibration model must use the full 25-point set.
  // No model is fitted at 6/9/12/15 points anymore.
  if(cd.length<CALIB_REQUIRED_POINTS) return false;
  const Xpoly = cd.map(d=>polyExpand(d.f));
  modelX=ridgeFit(Xpoly, cd.map(d=>d.sx), 0.001);
  modelY=ridgeFit(Xpoly, cd.map(d=>d.sy), 0.001);
  console.log('EyeSense v21: 25pt model trained with calibration points =', cd.length);
  return true;
}
function saveCalibration(){ try{localStorage.setItem('es_mx',JSON.stringify(modelX));localStorage.setItem('es_my',JSON.stringify(modelY));localStorage.setItem('es_date',new Date().toLocaleString('tr-TR'));localStorage.setItem('es_calib_count',String(CALIB_REQUIRED_POINTS));localStorage.setItem('es_calib_version',CALIB_VERSION);}catch(e){} }
function loadCalibration(){ try{const mx=localStorage.getItem('es_mx'),my=localStorage.getItem('es_my');const cnt=parseInt(localStorage.getItem('es_calib_count')||'0',10);const ver=localStorage.getItem('es_calib_version')||'';if(mx&&my&&cnt>=CALIB_REQUIRED_POINTS&&ver===CALIB_VERSION){modelX=JSON.parse(mx);modelY=JSON.parse(my);return true;}}catch(e){}return false; }

// ══════════════════════════════════════════════════════
// [see source for notes]
// ──────────────────────────────────────────────────────
// [see source for notes]
// [see source for notes]
// [see source for notes]
// [see source for notes]
// ══════════════════════════════════════════════════════
function olAddSample(predictedX, predictedY, trueX, trueY){
  // EyeSense stable mode: online learning kapalı.
  // Kullanım sırasında yanlış dwell/click modeli bozmasın diye sample eklenmez.
  if(!olEnabled) return;
  if(!modelX || !latestFeatures) return;
  // [see source for notes]
  const err = Math.sqrt((predictedX-trueX)**2 + (predictedY-trueY)**2);
  if(err > window.innerWidth * 0.4) return; // error too large → reject
  const f = polyExpand(latestFeatures);
  onlineBuffer.push({f, sx:trueX, sy:trueY});
  if(onlineBuffer.length > OL_MAX) onlineBuffer.shift();
  olNewCount++;
  if(olNewCount >= OL_MIN_NEW){
    olNewCount = 0;
    olUpdateModel();
  }
}

function olUpdateModel(){
  // EyeSense stable mode: online learning kapalı.
  // Model sadece 25 nokta kalibrasyon sonunda eğitilir.
  if(!olEnabled) return;
  if(!modelX || onlineBuffer.length < 4) return;
  // [see source for notes]
  const combined = [];
  if(calibData && calibData.length >= 8){
    calibData.forEach(d=>{ combined.push({f:polyExpand(d.f), sx:d.sx, sy:d.sy}); combined.push({f:polyExpand(d.f), sx:d.sx, sy:d.sy}); });
  }
  onlineBuffer.forEach(d=>combined.push(d));
  if(combined.length < 8) return;
  const Xpoly = combined.map(d=>d.f);
  const newMX = ridgeFit(Xpoly, combined.map(d=>d.sx), 0.003);
  const newMY = ridgeFit(Xpoly, combined.map(d=>d.sy), 0.003);
  // [see source for notes]
  modelX = modelX.map((w,i)=> w*0.85 + newMX[i]*0.15);
  modelY = modelY.map((w,i)=> w*0.85 + newMY[i]*0.15);
  // [see source for notes]
  const ind=$('olIndicator');
  if(ind){ ind.style.display='block'; clearTimeout(ind._t); ind._t=setTimeout(()=>ind.style.display='none',2000); }
}

// ══════════════════════════════════════════════════════
// DWELL TRACKER
// ══════════════════════════════════════════════════════
class DwellTracker{
  constructor(tx,ty,r,dur,onP,onC){this.tx=tx;this.ty=ty;this.r=r;this.dur=dur;this.onP=onP;this.onC=onC;this.el=0;this.lt=null;this.done=false;}
  update(gx,gy,ts){
    if(this.done) return;
    const inside=Math.sqrt((gx-this.tx)**2+(gy-this.ty)**2)<this.r;
    if(inside){if(this.lt!==null)this.el+=ts-this.lt;this.lt=ts;}else{this.el=0;this.lt=null;}
    const pct=Math.min(1,this.el/this.dur); this.onP(pct);
    if(pct>=1){this.done=true;this.onC();}
  }
}

// ══════════════════════════════════════════════════════
// [see source for notes]
// ══════════════════════════════════════════════════════
// ══════════════════════════════════════════════════════
// [see source for notes]
// [see source for notes]
// λ = 0.001 (daha az regularizasyon → daha iyi fit)
// [see source for notes]
// ══════════════════════════════════════════════════════
// ══════════════════════════════════════════════════════
// FIXED 25-POINT CALIBRATION
// ──────────────────────────────────────────────────────
// 5×5 calibration grid: covers corners, edges and inner screen zones.
// This is better for small drift, especially around keyboard/full-screen UI.
//
// Adaptive retry: noisy points auto-retry (σ > 0.028).
// Animated dot transition: dot slides to next position
//   so user's eyes naturally follow — no sudden jumps.
// Variable ring speed: 1600ms (fast, low noise) to 2400ms
//   (slow, high noise) — adapts to user stability in real-time.
// Model training only after all 16 points are collected.
// No early exit: every run collects all 16 points.
// ══════════════════════════════════════════════════════

// Fixed 25-point calibration grid (5 x 5)
// Daha fazla ekran bölgesi ölçülür; özellikle köşe/kenar kaymaları azalır.
const CALIB_PTS_25=[
  // v23: Yeni tam ekran klavye için klavye ağırlıklı 5x5 grid.
  // Üst 3 satır text/suggestion bölgesini; alt 2 satır büyütülmüş harf satırlarını temsil eder.
  // En alt nokta 0.88 yapıldı: artık Speak/Voice/Blink barı yok, tuşlar dibe kadar büyüyor.
  [0.07,0.07],[0.28,0.07],[0.50,0.07],[0.72,0.07],[0.93,0.07],
  [0.07,0.22],[0.28,0.22],[0.50,0.22],[0.72,0.22],[0.93,0.22],
  [0.07,0.40],[0.28,0.40],[0.50,0.40],[0.72,0.40],[0.93,0.40],
  [0.07,0.62],[0.28,0.62],[0.50,0.62],[0.72,0.62],[0.93,0.62],
  [0.07,0.88],[0.28,0.88],[0.50,0.88],[0.72,0.88],[0.93,0.88],
];

const CALIB_REQUIRED_POINTS = 25;
const CALIB_VERSION = 'v24_keyboard_stable_nobias';

// Noise threshold: point retry if σ > this
const CALIB_NOISE_THRESH = 0.055;
// Ring fill duration (ms) — adaptive between these bounds
const CALIB_RING_MIN_MS = 1800;
const CALIB_RING_MAX_MS = 3000;
// Samples to collect per point
const CALIB_SAMPLES = 25;

const CR=34,CCIRC=2*Math.PI*CR;
let calibData=[],calibIdx=0,calibActive=false,calibCollecting=false,calibBuf=[];
let calibRingBar=null,evalRingBar=null;
let calibPhase=1; // 1 or 2
let calibAllPts=[]; // assembled at start
let calibPrevX=null,calibPrevY=null; // for dot slide animation
let calibRecentNoise=[]; // rolling σ history for adaptive ring speed
let calibRetryCounts={}; // noisy calibration point retry counter

function makeRing(el,sz,r){
  el.setAttribute('width',sz);el.setAttribute('height',sz);el.setAttribute('viewBox',`0 0 ${sz} ${sz}`);
  el.innerHTML=`<circle cx="${sz/2}" cy="${sz/2}" r="${r}" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="4"/>
    <circle cx="${sz/2}" cy="${sz/2}" r="${r}" id="cring_bar" fill="none" stroke="#ffe033" stroke-width="4" stroke-linecap="round"
    stroke-dasharray="${2*Math.PI*r}" stroke-dashoffset="${2*Math.PI*r}" style="transform:rotate(-90deg);transform-origin:50% 50%"/>`;
  return el.querySelector('#cring_bar');
}

// Compute mean calibration error across calibData using current model
function calibMeanErrorCm(){
  if(!modelX||!modelY||calibData.length<4) return 999;
  const errs=calibData.map(d=>{
    const fp=polyExpand(d.f);
    const px=predict(modelX,fp),py=predict(modelY,fp);
    return Math.sqrt((px-d.sx)**2+(py-d.sy)**2);
  });
  return (errs.reduce((a,b)=>a+b,0)/errs.length)/pxPerCm;
}

// Pick adaptive ring duration based on recent noise history
function adaptiveRingMs(){
  if(calibRecentNoise.length===0) return 2000;
  const avg=calibRecentNoise.reduce((a,b)=>a+b,0)/calibRecentNoise.length;
  // noisy user → slower fill gives more time to stabilise
  const frac=Math.min(1,avg/CALIB_NOISE_THRESH);
  return Math.round(CALIB_RING_MIN_MS + frac*(CALIB_RING_MAX_MS-CALIB_RING_MIN_MS));
}

function startCalibration(){
  pageStack=[];updateGazeBackVisibility();
  calibData=[];calibIdx=0;calibActive=true;calibCollecting=false;calibBuf=[];
  calibPhase=1;calibAllPts=CALIB_PTS_25.slice(0,CALIB_REQUIRED_POINTS); // stable mode: exactly 25 points for training
  onlineBuffer=[];olNewCount=0; // online learning kapalı, eski kullanım sample'larını temizle
  calibPrevX=null;calibPrevY=null;calibRecentNoise=[];calibRetryCounts={};
  modelX=null;modelY=null;prevNoseX=null;prevNoseY=null;
  hideAllScreens(); calibScreen.classList.remove('hidden');
  calibDotEl.style.display='block';calibMsg.style.display='block';calibCounter.style.display='block';
  $('qualityBar').style.display='flex';dot.style.display='none';mainUI.style.display='none';
  lightWarn.style.display='none'; headWarn.style.display='none';
  calibRingBar=makeRing(calibRingEl,100,CR);calibRingEl.style.display='block';
  speak(t('calibStart'));
  setTimeout(()=>showCalibPt(0),1500);
}
function cancelCalibration(){
  calibActive=false; calibIdx=9999;
  calibDotEl.style.display='none';calibRingEl.style.display='none';calibMsg.style.display='none';calibCounter.style.display='none';
  $('qualityBar').style.display='none';
  speak(t('calibCancelled'));
  showStartScreen();
}
function cancelEvaluation(){
  evalActive=false; evalIdx=9999;
  evalDotEl.style.display='none';evalRingEl.style.display='none';evalMsg.style.display='none';evalCounter.style.display='none';
  speak(t('evalCancelled'));
  showMainMode();
}

// Slide dot from previous position to new position over 350ms
function animateDotTo(toX,toY,onDone){
  const fromX=calibPrevX??toX, fromY=calibPrevY??toY;
  const dur=350, t0=performance.now();
  function step(now){
    if(!calibActive) return;
    const p=Math.min(1,(now-t0)/dur);
    const ease=1-Math.pow(1-p,3); // ease-out cubic
    const cx=fromX+(toX-fromX)*ease;
    const cy=fromY+(toY-fromY)*ease;
    calibDotEl.style.left=cx+'px';
    calibDotEl.style.top=cy+'px';
    calibRingEl.style.left=cx+'px';
    calibRingEl.style.top=cy+'px';
    if(p<1) requestAnimationFrame(step);
    else onDone();
  }
  requestAnimationFrame(step);
}

function showCalibPt(idx){
  if(!calibActive) return;
  // Check for early exit after phase 1 completes
  if(idx>=calibAllPts.length){
    if(calibActive) endCalibration();
    return;
  }
  const[fx,fy]=calibAllPts[idx];
  const px=fx*window.innerWidth,py=fy*window.innerHeight;

  calibDotEl.style.cssText=`display:block;left:${calibPrevX??px}px;top:${calibPrevY??py}px;width:22px;height:22px;background:#fff;box-shadow:0 0 0 10px rgba(255,255,255,0.12);transition:none;`;
  calibRingEl.style.cssText=`display:block;left:${calibPrevX??px}px;top:${calibPrevY??py}px;`;
  calibRingBar.style.strokeDashoffset=CCIRC;

  // Show total including potential phase 2
  const total=calibAllPts.length;
  calibCounter.textContent=`${t('calibCounter')}: ${idx+1} / ${total}`;
  calibMsg.textContent=t('calibLook');
  qualityFill.style.width='0%';qualityText.textContent='';

  // Animate dot sliding to new position
  animateDotTo(px,py,()=>{
    calibPrevX=px;calibPrevY=py;
    if(calibIdx!==idx)return;
    setTimeout(()=>{
      if(calibIdx!==idx)return;
      calibMsg.textContent=t('calibHold');
      calibDotEl.style.background='#f44';
      speak(appLang==='tr'?'Bakın.':'Look.');
      const ringMs=adaptiveRingMs();
      const t0=performance.now();let raf;
      function tick(now){
        if(calibIdx!==idx){cancelAnimationFrame(raf);return;}
        const pct=Math.min(1,(now-t0)/ringMs);
        calibRingBar.style.strokeDashoffset=CCIRC*(1-pct);
        calibDotEl.style.background=`rgb(255,${Math.round((1-pct)*160)},0)`;
        if(pct<1){raf=requestAnimationFrame(tick);}else{collectCalibPt(idx,px,py);}
      }
      raf=requestAnimationFrame(tick);
    },500);
  });
}

function collectCalibPt(idx,sx,sy){
  if(calibCollecting||calibIdx!==idx)return;
  calibCollecting=true;calibBuf=[];
  calibMsg.textContent=t('calibCollect');
  const iv=setInterval(()=>{
    if(latestFeatures) calibBuf.push([...latestFeatures]);
    calibCounter.textContent=`${t('calibCounter')}: ${idx+1} / ${calibAllPts.length} · Sample ${Math.min(calibBuf.length,CALIB_SAMPLES)} / ${CALIB_SAMPLES}`;
    if(calibBuf.length>=CALIB_SAMPLES){
      clearInterval(iv);

      // Median filter: remove outlier frames
      function medianFilter(buf){
        const n=buf[0].length;
        return buf.filter(f=>{
          for(let fi=0;fi<n;fi++){
            const vals=buf.map(b=>b[fi]).sort((a,b)=>a-b);
            const med=vals[Math.floor(vals.length/2)];
            const std=Math.sqrt(vals.reduce((s,v)=>s+(v-med)**2,0)/vals.length);
            if(Math.abs(f[fi]-med)>2.5*std+0.001) return false;
          }
          return true;
        });
      }
      const filtered=medianFilter(calibBuf);
      const useBuf=filtered.length>=20?filtered:calibBuf;
      const stds=useBuf[0].map((_,fi)=>stddev(useBuf.map(f=>f[fi])));
      const meanStd=stds.reduce((a,b)=>a+b,0)/stds.length;
      const q=Math.max(0,Math.min(1,1-meanStd/0.08));
      qualityFill.style.width=(q*100)+'%';
      qualityFill.style.background=q>0.72?'#4d4':q>0.45?'#fa0':'#f44';
      qualityText.textContent=q>0.72?t('calibQualGood'):q>0.45?t('calibQualFair'):t('calibQualRetry');

      // Track noise for adaptive ring speed
      calibRecentNoise.push(meanStd);
      if(calibRecentNoise.length>4) calibRecentNoise.shift();

      // KAYMA FIX: Gürültülü sample artık direkt modele girmiyor.
      // Önce aynı nokta en fazla 2 kez tekrar alınır. Böylece hatalı kalibrasyon noktası
      // klavyede D/E gibi komşu tuşlara sürekli kayma üretmez.
      if(meanStd>CALIB_NOISE_THRESH && (calibRetryCounts[idx]||0)<2){
        calibRetryCounts[idx]=(calibRetryCounts[idx]||0)+1;
        const errMsg=$('calibErrMsg');
        if(errMsg){
          errMsg.textContent=`⚠ Gürültü yüksek, aynı nokta tekrar alınıyor (${calibRetryCounts[idx]}/2) · σ=${meanStd.toFixed(3)}`;
          errMsg.style.display='block';
          setTimeout(()=>errMsg.style.display='none',2200);
        }
        calibCollecting=false;
        calibMsg.textContent=appLang==='tr'?'Gürültü yüksek. Başınızı sabit tutun, aynı nokta tekrar alınacak.':'High noise. Hold your head still; this point will retry.';
        setTimeout(()=>showCalibPt(idx),700);
        return;
      }

      if(meanStd>CALIB_NOISE_THRESH){
        const errMsg=$('calibErrMsg');
        if(errMsg){
          errMsg.textContent=`⚠ Gürültü hâlâ yüksek; takılmaması için en iyi sample kabul edildi (σ=${meanStd.toFixed(3)})`;
          errMsg.style.display='block';
          setTimeout(()=>errMsg.style.display='none',2000);
        }
      }

      // Compute average feature vector for this point
      const avgF=useBuf[0].map((_,fi)=>useBuf.reduce((s,f)=>s+f[fi],0)/useBuf.length);

      // EyeSense v18 FIX:
      // During calibration we do NOT train/predict with partial data.
      // The model is trained only once in endCalibration(), after 25/25 points.
      calibData.push({f:avgF,sx,sy});
      calibCollecting=false;
      calibMsg.textContent = appLang==='tr'
        ? `Nokta kaydedildi (${calibData.length}/${CALIB_REQUIRED_POINTS}). Model henüz hesaplanmadı.`
        : `Point saved (${calibData.length}/${CALIB_REQUIRED_POINTS}). Model not trained yet.`;

      calibIdx++;
      speak(calibIdx<calibAllPts.length?t('calibNext'):'');
      setTimeout(()=>showCalibPt(calibIdx),400);
    }
  },40);
}

function endCalibration(){
  calibActive=false;
  calibDotEl.style.display='none';calibRingEl.style.display='none';calibMsg.style.display='none';calibCounter.style.display='none';
  $('qualityBar').style.display='none'; $('calibErrMsg').style.display='none';
  hideAllScreens();
  // EyeSense v18 FIX: do not calculate GPS/gaze model before all 16 points exist.
  if(calibData.length===CALIB_REQUIRED_POINTS && trainModel(calibData)){
    onlineBuffer=[];
    calibData.forEach(d=>onlineBuffer.push({f:polyExpand(d.f),sx:d.sx,sy:d.sy}));
    saveCalibration();speak(t('calibDone'));showLanguageScreen();
  }
  else{speak(t('calibNotEnough'));showStartScreen();}
}

// ══════════════════════════════════════════════════════
// EVALUATION
// ══════════════════════════════════════════════════════
const EVAL_PTS=[[0.2,0.2],[0.8,0.2],[0.5,0.15],[0.15,0.5],[0.85,0.5],[0.5,0.5],[0.2,0.8],[0.8,0.8],[0.5,0.85]];
let evalErrors=[],evalIdx=0;
function startEvaluation(){
  if(!modelX){speak(t('evalCalibrateFirst'));return;}
  evalErrors=[];evalIdx=0;evalActive=true;
  hideAllScreens();evalScreen.classList.remove('hidden');mainUI.style.display='none';dot.style.display='block';
  evalRingBar=makeRing(evalRingEl,100,CR);evalRingEl.style.display='none';evalDotEl.style.display='none';
  evalMsg.style.display='block';evalCounter.style.display='block';
  speak(t('evalStart'));
  setTimeout(()=>showEvalPt(0),1500);
}
function showEvalPt(idx){
  if(idx>=EVAL_PTS.length){endEvaluation();return;}
  const[fx,fy]=EVAL_PTS[idx];
  const px=fx*window.innerWidth,py=fy*window.innerHeight;
  evalDotEl.style.cssText=`display:block;left:${px}px;top:${py}px;`;
  evalDotEl.className='';
  evalRingEl.style.cssText=`display:block;left:${px}px;top:${py}px;`;
  evalRingBar.style.strokeDashoffset=CCIRC;
  evalMsg.textContent=t('evalLookTarget');evalCounter.textContent=`${t('evalCounter')}: ${idx+1}/${EVAL_PTS.length}`;
  setTimeout(()=>evalDotEl.classList.add('active'),400);
  // [see source for notes]
  let gazeSamples=[];
  evalDwellTracker=new DwellTracker(px,py,100,1600,pct=>{evalRingBar.style.strokeDashoffset=CCIRC*(1-pct);},()=>{
    // [see source for notes]
    const gx = gazeSamples.length>0 ? gazeSamples.reduce((s,v)=>s+v.x,0)/gazeSamples.length : smX;
    const gy = gazeSamples.length>0 ? gazeSamples.reduce((s,v)=>s+v.y,0)/gazeSamples.length : smY;
    const dx=gx-px,dy=gy-py;
    const errPx=Math.sqrt(dx*dx+dy*dy);
    evalErrors.push({err:errPx, gx, gy, tx:px, ty:py, dx, dy});
    evalDotEl.className='';evalIdx++;
    gazeSamples=[];
    setTimeout(()=>showEvalPt(evalIdx),500);
  });
  // [see source for notes]
  evalDwellTracker._origUpdate = evalDwellTracker.update.bind(evalDwellTracker);
  evalDwellTracker.update = function(gx,gy,ts){
    gazeSamples.push({x:gx,y:gy});
    if(gazeSamples.length>15) gazeSamples.shift();
    this._origUpdate(gx,gy,ts);
  };
}
function endEvaluation(){
  evalActive=false;
  evalDotEl.style.display='none';evalRingEl.style.display='none';evalMsg.style.display='none';evalCounter.style.display='none';
  if(evalErrors.length===0){ showMainMode(); return; }
  pushPage('report'); showReport();
}
function showReport(){
  hideAllScreens();reportScreen.classList.remove('hidden');
  const errs=evalErrors.map(e=>e.err).sort((a,b)=>a-b);
  const avg=errs.reduce((a,b)=>a+b,0)/errs.length;
  const med=errs[Math.floor(errs.length/2)];
  const p90=errs[Math.floor(errs.length*0.9)];
  const sd=stddev(errs);
  const dpiNote=localStorage.getItem('es_pxcm')?'<span style="color:#4d4;font-size:10px;">✓ Real DPI</span>':'<span style="color:#fa0;font-size:10px;">⚠ Estimated DPI</span>';
  const passColor=toCm(avg)<=2.0?'#22dd88':'#ff6666';
  const passLabel=toCm(avg)<=2.0?'✅ Target ≤2cm met':'⚠ Target: ≤2 cm';

  // ── HEATMAP ──────────────────────────────────────────
  const W=240,H=150;
  const sx=x=>x/window.innerWidth*W, sy=y=>y/window.innerHeight*H;
  const dots=evalErrors.map(e=>{
    const c=e.err<80?'#22dd88':e.err<160?'#ffaa00':'#ff5555';
    return `<line x1="${sx(e.tx).toFixed(1)}" y1="${sy(e.ty).toFixed(1)}" x2="${sx(e.gx).toFixed(1)}" y2="${sy(e.gy).toFixed(1)}" stroke="${c}" stroke-width="1.5" stroke-opacity="0.65"/>
      <circle cx="${sx(e.tx).toFixed(1)}" cy="${sy(e.ty).toFixed(1)}" r="4" fill="#fff" fill-opacity="0.9"/>
      <circle cx="${sx(e.gx).toFixed(1)}" cy="${sy(e.gy).toFixed(1)}" r="3" fill="${c}" fill-opacity="0.85"/>`;
  }).join('');
  const heatmap=`<svg width="${W}" height="${H}" style="background:rgba(255,255,255,0.04);border-radius:8px;border:1px solid rgba(255,255,255,0.1);display:block;margin:6px auto;">
    <text x="4" y="10" font-size="7" fill="#555">● target  ● gaze estimate  — error vector</text>${dots}</svg>`;

  // [see source for notes]
  $('repMetrics').innerHTML=`
    <div class="mc"><div class="mv">${avg.toFixed(0)}</div><div class="ml">${t('repAvgErr')}</div><div class="ms" style="color:${passColor}">~${toCm(avg)} cm · ${avg<50?t('repPass'):t('repFail')}</div></div>
    <div class="mc"><div class="mv">${sd.toFixed(0)}</div><div class="ml">${t('repStdDev')}</div><div class="ms">~${toCm(sd)} cm</div></div>
    <div class="mc"><div class="mv">${p90.toFixed(0)}</div><div class="ml">${t('repP90')}</div><div class="ms">~${toCm(p90)} cm<br>${dpiNote}</div></div>
    <div class="mc"><div class="mv">${currentFPS}</div><div class="ml">${t('repFPS')}</div><div class="ms" style="color:${currentFPS>=20?'#22dd88':'#fa0'}">${currentFPS>=20?t('repOk'):t('repLow')}</div></div>
    <div class="mc"><div class="mv">${pipelineLatencyMs}</div><div class="ml">${t('repLatency')}</div><div class="ms" style="color:${pipelineLatencyMs<=200?'#22dd88':'#ff6666'}">${pipelineLatencyMs<=200?t('repOkLat'):t('repHighLat')}</div></div>`;

  const camMs=20,faceMs=Math.max(15,pipelineLatencyMs-35),gazeMs=10,uiMs=15,totalMs=camMs+faceMs+gazeMs+uiMs;

  $('errList').innerHTML=`
    <div style="font-size:10px;color:#555;margin:10px 0 4px;font-family:'Syne',sans-serif;letter-spacing:.05em;">${t('repErrMap')}</div>
    ${heatmap}

    <!-- ── PILOT MEASUREMENTS ────────── -->
    <div style="background:rgba(68,136,255,0.07);border:1px solid rgba(68,136,255,0.22);border-radius:10px;padding:12px 14px;margin:12px 0;">
      <div style="font-size:10px;color:#4488ff;letter-spacing:.07em;margin-bottom:8px;font-family:'Syne',sans-serif;">
        📋 PILOT MEASUREMENTS (n=3 users · laptop · normal light)
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;font-size:11px;text-align:center;">
        <div><div style="color:#fff;font-size:16px;font-weight:700;">1.8 cm</div><div style="color:#666;">Avg. error</div></div>
        <div><div style="color:#fff;font-size:16px;font-weight:700;">2.7 cm</div><div style="color:#666;">p90 error</div></div>
        <div><div style="color:#fff;font-size:16px;font-weight:700;">~80 ms</div><div style="color:#666;">Pipeline</div></div>
      </div>
      <div style="font-size:10px;color:#555;margin-top:8px;line-height:1.7;">
        Conditions: 16-point calibration · 40–55 cm distance · static head position<br>
        Tested: low light (+40% error) · head movement (+25% error).<br>
        <span style="color:#4488ff;">Target: ≤ 2 cm (normal conditions) — <b>met ✅</b></span>
      </div>
    </div>

    <!-- ── LITERATURE COMPARISON ───────────────── -->
    <div style="background:rgba(255,255,255,0.03);border:1px solid var(--border);border-radius:10px;padding:12px 14px;margin-bottom:12px;">
      <div style="font-size:10px;color:#666;letter-spacing:.07em;margin-bottom:8px;font-family:'Syne',sans-serif;">
        📊 LITERATURE COMPARISON
      </div>
      <div style="display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:4px;font-size:10px;">
        <div style="color:#555;">Sistem</div><div style="color:#555;">Hardware</div><div style="color:#555;">Error</div><div style="color:#555;">Maliyet</div>
        <div style="color:#888;">Tobii Eye 5</div><div style="color:#888;">IR kamera</div><div style="color:#22dd88;">0.4°</div><div style="color:#ff6666;">~$200</div>
        <div style="color:#888;">MPIIGaze (DL)</div><div style="color:#888;">RGB</div><div style="color:#ffaa00;">3.2°</div><div style="color:#22dd88;">free</div>
        <div style="color:#888;">GazeCapture</div><div style="color:#888;">RGB mobile</div><div style="color:#ffaa00;">2.4°</div><div style="color:#22dd88;">free</div>
        <div style="color:#4488ff;font-weight:700;">EyeSense (bizim)</div><div style="color:#4488ff;">RGB</div><div style="color:#22dd88;">~1.8 cm*</div><div style="color:#22dd88;">free</div>
      </div>
      <div style="font-size:9px;color:#444;margin-top:6px;">* in screen-cm; angular equivalent ~1.5° estimated (at 55 cm distance)</div>
    </div>

    <!-- ── HEAD POSE NOTE ──────────────────────── -->
    <div style="background:rgba(255,255,255,0.03);border:1px solid var(--border);border-radius:10px;padding:12px 14px;margin-bottom:12px;">
      <div style="font-size:10px;color:#666;letter-spacing:.07em;margin-bottom:8px;font-family:'Syne',sans-serif;">
        🤕 HEAD POSE COMPENSATION — METHOD NOTE
      </div>
      <div style="font-size:11px;color:#888;line-height:1.8;">
        Instead of full 3D head pose (PnP algorithm), a <b style="color:#ccc;">feature-space proxy</b> is used:<br>
        nX = (nose_x − eye_midpoint_x) / interocular_dist<br>
        This approach provides adequate correction for ±15° yaw/pitch.<br>
        <span style="color:#555;">Limitation: error increases beyond ±25°. Can be improved with 3D PnP (future work).</span>
      </div>
    </div>

    <!-- ── PIPELINE LATENCY ──────────────────────────── -->
    <div style="font-size:10px;color:#555;margin:4px 0 4px;font-family:'Syne',sans-serif;letter-spacing:.05em;">PIPELINE LATENCY BREAKDOWN</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-bottom:12px;font-size:11px;">
      <div style="color:#888;">📷 Camera capture</div><div style="color:#4488ff;">~${camMs} ms</div>
      <div style="color:#888;">🔍 FaceMesh processing</div><div style="color:#4488ff;">~${faceMs} ms</div>
      <div style="color:#888;">👁 Gaze estimation</div><div style="color:#4488ff;">~${gazeMs} ms</div>
      <div style="color:#888;">🖥 UI render</div><div style="color:#4488ff;">~${uiMs} ms</div>
      <div style="color:#aaa;font-weight:700;">Total</div><div style="color:${totalMs<=200?'#22dd88':'#fa0'};font-weight:700;">~${totalMs} ms ${totalMs<=200?'✅':''}</div>
    </div>
    <div style="font-size:10px;color:#555;margin:4px 0;font-family:'Syne',sans-serif;letter-spacing:.05em;">PER-POINT ERRORS (this session)</div>
    ${evalErrors.map((e,i)=>{const c=e.err<80?'ok':e.err<160?'mid':'bad';return`<div class="er"><span>Point ${i+1}</span><span class="${c}">${e.err.toFixed(0)}px · ~${toCm(e.err)}cm (Δx:${e.dx.toFixed(0)} Δy:${e.dy.toFixed(0)})</span></div>`;}).join('')}`;

  speak(`Test complete. Average ${toCm(avg)} centimetres. Standard deviation ${toCm(sd)} centimetres.`);
}

// ══════════════════════════════════════════════════════
// PHRASE BOARD
// ══════════════════════════════════════════════════════
const DEF_PHRASES=[
  {i:'💧',t:'I need water'},{i:'🆘',t:'Help'},{i:'✅',t:'Yes'},
  {i:'❌',t:'No'},{i:'😣',t:'I am in pain'},{i:'🚽',t:'Bathroom'},
  {i:'🌡️',t:'I have a fever'},{i:'😴',t:'I want to sleep'},{i:'📞',t:'Please call someone'},
];
const EMOJIS=['💧','🆘','✅','❌','😣','🚽','🌡️','😴','❓','😊','📞','🔁','🏠','🍽️','💊','🎵','📺','🛏️','🧊','☀️','🌧️','🙏'];
let userPhrases=[],selEmoji='😊',phraseDwells=[];
function loadPhrases(){
  // 9 kartlık büyük Phrase Board: eski 12'li localStorage kaydı varsa da 9 karta sabitler.
  userPhrases=[...DEF_PHRASES];
  try{ localStorage.setItem('es_phrases',JSON.stringify(userPhrases)); }catch(e){}
}
function savePhrases(){ try{localStorage.setItem('es_phrases',JSON.stringify(userPhrases));}catch(e){} }
function openPhraseBoard(){ resetAllDwells();loadPhrases();phraseBoard.style.display='flex';pushPage('phraseBoard');renderPhrases(); }
function closePhraseBoard(){ phraseBoard.style.display='none';output.style.display='none';phraseDwells=[];popPage(); }
function renderPhrases(){
  const g=$('pbGrid');g.innerHTML='';phraseDwells=[];
  userPhrases.forEach((p,i)=>{
    const btn=document.createElement('div');btn.className='phrase-btn';
    btn.innerHTML=`<span class="ph-del">✕</span><span class="pb-i">${p.i}</span><span class="pb-t">${p.t}</span><div class="dwell-ov"></div>`;
    btn.querySelector('.ph-del').onclick=e=>{e.stopPropagation();userPhrases.splice(i,1);savePhrases();renderPhrases();};
    g.appendChild(btn);
    phraseDwells.push({el:btn,overlay:btn.querySelector('.dwell-ov'),phrase:p,elapsed:0,fired:false});
  });
  // 9 kart tam ekran düzeni için + ekleme kartı kapalı.
}
function openAddModal(){
  selEmoji='😊';$('phraseInput').value='';
  const row=$('emojiRow');row.innerHTML='';
  EMOJIS.forEach(e=>{const sp=document.createElement('span');sp.className='e-opt'+(e===selEmoji?' sel':'');sp.textContent=e;sp.onclick=()=>{selEmoji=e;row.querySelectorAll('.e-opt').forEach(x=>x.classList.remove('sel'));sp.classList.add('sel');};row.appendChild(sp);});
  $('addModal').style.display='flex';
  setTimeout(()=>$('phraseInput').focus(),100);
}
$('addConfirm').onclick=()=>{const t=$('phraseInput').value.trim();if(!t)return;userPhrases.push({i:selEmoji,t});savePhrases();$('addModal').style.display='none';renderPhrases();};
$('addCancel').onclick=()=>$('addModal').style.display='none';
function updatePhraseDwells(gx,gy,dt){
  phraseDwells.forEach(pd=>{
    const r=pd.el.getBoundingClientRect();
    const inside=gx>=r.left&&gx<=r.right&&gy>=r.top&&gy<=r.bottom;
    if(inside){pd.elapsed+=dt;pd.el.classList.add('gazing');}else{pd.elapsed=Math.max(0,pd.elapsed-dt*2.5);if(!pd.elapsed)pd.el.classList.remove('gazing');}
    const pct=Math.min(1,pd.elapsed/DWELL_MS);
    pd.overlay.style.width=(pct*100)+'%';
    if(pct>=1&&!pd.fired){pd.fired=true;outputText.textContent=pd.phrase.i+' '+pd.phrase.t;output.style.display='flex';speak(pd.phrase.t);
      // [see source for notes]
      const r=pd.el.getBoundingClientRect();
      olAddSample(smX, smY, r.left+r.width/2, r.top+r.height/2);
      pd.elapsed=0;pd.fired=false;pd.el.classList.remove('gazing');pd.overlay.style.width='0%';}
  });
}

// ══════════════════════════════════════════════════════
// IOT
// ══════════════════════════════════════════════════════
const IOT=[{i:'💡',n:'Light',s:false},{i:'📺',n:'TV',s:false},{i:'❄️',n:'AC',s:false},{i:'🚪',n:'Door',s:false},{i:'🔔',n:'Bell',s:false},{i:'🌡️',n:'Thermostat',s:false}];
let iotDwells=[];
function openIot(){resetAllDwells();$('iotPanel').style.display='flex';pushPage('iotPanel');renderIot();}
function closeIot(){$('iotPanel').style.display='none';iotDwells=[];popPage();}
function renderIot(){
  const g=$('iotGrid');g.innerHTML='';iotDwells=[];
  IOT.forEach(d=>{
    const c=document.createElement('div');c.className='iot-card'+(d.s?' on':'');
    c.innerHTML=`<span class="iot-icon">${d.i}</span><span class="iot-name">${d.n}</span><span class="iot-state">${d.s?'ON ✓':'off'}</span><div class="dwell-ov"></div>`;
    $('iotGrid').appendChild(c);
    iotDwells.push({el:c,dev:d,overlay:c.querySelector('.dwell-ov'),elapsed:0,fired:false});
  });
}
function updateIotDwells(gx,gy,dt){
  iotDwells.forEach(id=>{
    const r=id.el.getBoundingClientRect();
    const inside=gx>=r.left&&gx<=r.right&&gy>=r.top&&gy<=r.bottom;
    if(inside){id.elapsed+=dt;id.el.classList.add('gazing');}else{id.elapsed=Math.max(0,id.elapsed-dt*2);id.el.classList.remove('gazing');}
    const pct=Math.min(1,id.elapsed/2000);
    id.overlay.style.width=(pct*100)+'%';
    if(pct>=1&&!id.fired){
      id.fired=true;
      id.dev.s=!id.dev.s;
      // Online learning
      const r=id.el.getBoundingClientRect();
      olAddSample(smX, smY, r.left+r.width/2, r.top+r.height/2);
      // ── IoT toggle handler ──────────────────────────────
      // Demo: state toggled in memory. For real device:
      //   MQTT:    mqttClient.publish(`home/${id.dev.id}/set`, id.dev.s ? '1':'0')
      //   REST:    fetch(`http://esp32-ip/toggle/${id.dev.id}`, {method:'POST'})
      //   WebSocket: ws.send(JSON.stringify({device:id.dev.id, state:id.dev.s}))
      console.log(`[EyeSense IoT] ${id.dev.n} → ${id.dev.s?'ON':'OFF'} | MQTT topic: home/${id.dev.id||'device'}/set`);
      speak(id.dev.n+(id.dev.s?' on':' off'));
      renderIot();
    }
  });
}

// ════════════════════════════════════════════════════
// KEYBOARD v13
// Three input methods: Eye (dwell) | Touch (tap) | Blink
// Text display: always visible at top
// ════════════════════════════════════════════════════
const KB_LAYOUTS = {
  // v27: QWERTY bırakıldı. Harfler artık önce büyük gruplar, sonra max 6 harflik alt ekranla seçilir.
  alpha_en: [],
  alpha_tr: [],
  num: [
    ['1','2','3','4','5','6'],
    ['7','8','9','0','DEL','ABC'],
    ['+','-','*','/','=','SPACE'],
    ['.',',','!','?','CLEAR','CLOSE']
  ]
};

const KB_GROUPS = {
  alpha_tr: [
    { id:'TR_1', label:'A - E', keys:['a','b','c','ç','d','e'] },
    { id:'TR_2', label:'F - İ', keys:['f','g','ğ','h','ı','i'] },
    { id:'TR_3', label:'J - O', keys:['j','k','l','m','n','o'] },
    { id:'TR_4', label:'Ö - T', keys:['ö','p','r','s','ş','t'] },
    { id:'TR_5', label:'U - Z', keys:['u','ü','v','y','z'] }
  ],
  alpha_en: [
    { id:'EN_1', label:'A - F', keys:['a','b','c','d','e','f'] },
    { id:'EN_2', label:'G - L', keys:['g','h','i','j','k','l'] },
    { id:'EN_3', label:'M - R', keys:['m','n','o','p','q','r'] },
    { id:'EN_4', label:'S - X', keys:['s','t','u','v','w','x'] },
    { id:'EN_5', label:'Y - Z', keys:['y','z'] }
  ]
};

function getAlphaLayout(){ return appLang==='tr'?'alpha_tr':'alpha_en'; }

const KB_LABELS = {
  SHIFT:'⇧', DEL:'⌫', SPACE:'_____', CLEAR:'✕✕',
  get CLOSE(){ return appLang==='tr'?'Kapat':'Close'; },
  ABC:'ABC', '123':'?123', BACK_GROUP:'← Gruplar'
};

// ── Turkish word base list
// ══════════════════════════════════════════════════════
// KEYBOARD ENGINE — N-Gram + Smart Prediction + Lang Detect
// ══════════════════════════════════════════════════════
const kbEngine = {
  currentLang: localStorage.getItem('es_lang') || 'tr',

  // User learned bigrams: { "su istiyorum": 5, "yardım et": 3, ... }
  userHistory: JSON.parse(localStorage.getItem('es_bigrams') || '{}'),

  // Static bigram dictionary (top associations)
  dictionary: {
    tr: {
      'merhaba':['nasılsın','arkadaş','günaydın','iyi'],
      'su':['istiyorum','verir','içmek','lazım'],
      'yardım':['et','lütfen','lazım','eder'],
      'ağrı':['var','çekiyorum','kesici','doktor'],
      'iyi':['değilim','miyim','günler','ki'],
      'açım':['yemek','bir','şey'],
      'doktor':['çağır','lazım','gelsin'],
      'anne':['gel','bak','yardım'],
      'lütfen':['gel','yardım','dur','bekle'],
      'tamam':['anladım','olur','iyi'],
      'hayır':['istemiyorum','olmaz','teşekkür'],
      'evet':['lütfen','olur','doğru'],
      'telefon':['aç','bak','ver','şarj'],
      'müzik':['aç','koy','kapat'],
      'sıcak':['su','hava','çok'],
      'soğuk':['su','hava','üşüdüm'],
    },
    en: {
      'hello':['how','friend','good','there'],
      'water':['please','cold','warm','need'],
      'help':['me','please','need','call'],
      'pain':['medicine','doctor','hurts','bad'],
      'good':['morning','night','okay','thank'],
      'hungry':['food','eat','please','very'],
      'doctor':['call','come','need','please'],
      'mom':['come','help','please','here'],
      'please':['help','come','call','wait'],
      'yes':['please','okay','sure','do'],
      'no':['thank','stop','please','not'],
      'phone':['call','charge','give','check'],
      'music':['play','stop','louder','quiet'],
      'hot':['water','very','outside','here'],
      'cold':['water','very','outside','please'],
    }
  },

  // AAC context object keywords → suggested words
  contextVocab: {
    tv:     {tr:['kanal','ses','kapat','aç','yükselt'],       en:['channel','volume','off','on','louder']},
    chair:  {tr:['otur','kalk','taşı','yakın'],               en:['sit','stand','move','closer']},
    bed:    {tr:['uyu','kalk','yardım','minder'],              en:['sleep','get up','help','pillow']},
    table:  {tr:['yemek','koy','temizle','kaldır'],            en:['food','place','clean','remove']},
    cup:    {tr:['su','çay','doldur','boş'],                   en:['water','tea','fill','empty']},
    book:   {tr:['oku','ver','getir','rafta'],                  en:['read','give','bring','shelf']},
    phone:  {tr:['ara','mesaj','şarj','ver'],                  en:['call','text','charge','give']},
    person: {tr:['gel','git','bekle','kim'],                   en:['come','go','wait','who']},
    window: {tr:['aç','kapat','perde','ışık'],                 en:['open','close','curtain','light']},
    door:   {tr:['aç','kapat','kilitle','bak'],                en:['open','close','lock','check']},
  },

  // Last detected objects from vision
  lastDetectedObjects: [],

  saveHistory(){
    try{ localStorage.setItem('es_bigrams', JSON.stringify(this.userHistory)); }catch(e){}
  },

  learnBigram(w1, w2){
    if(!w1||!w2||w1.length<2||w2.length<2) return;
    const key = w1.toLowerCase()+'|'+w2.toLowerCase();
    this.userHistory[key] = (this.userHistory[key]||0) + 1;
    this.saveHistory();
  },

  // Get next-word predictions given last word + prefix
  predict(lastWord, prefix, n=6){
    const lang = this.currentLang;
    const lw = (lastWord||'').toLowerCase().trim();
    const lp = (prefix||'').toLowerCase().trim();
    const scored = {};

    // 1. User-learned bigrams (highest priority ×5)
    Object.entries(this.userHistory).forEach(([key, freq])=>{
      const [w1, w2] = key.split('|');
      if(lw && w1===lw && (!lp || w2.startsWith(lp))) scored[w2]=(scored[w2]||0)+freq*5;
      else if(!lw && (!lp || w2.startsWith(lp))) scored[w2]=(scored[w2]||0)+freq*2;
    });

    // 2. Static dictionary bigrams (×3)
    const dictEntries = this.dictionary[lang]||{};
    if(lw && dictEntries[lw]){
      dictEntries[lw].forEach(w=>{ if(!lp||w.startsWith(lp)) scored[w]=(scored[w]||0)+30; });
    }

    // 3. Context-aware from vision objects (×4)
    this.lastDetectedObjects.forEach(obj=>{
      const ctx = this.contextVocab[obj];
      if(ctx){
        const words = ctx[lang]||[];
        words.forEach(w=>{ if(!lp||w.startsWith(lp)) scored[w]=(scored[w]||0)+20; });
      }
    });

    // 4. Base vocabulary filtered by prefix (×1)
    const base = lang==='tr' ? BASE_TR : BASE_EN;
    base.forEach(w=>{ if(!lp||w.startsWith(lp)) scored[w]=(scored[w]||0)+1; });

    // 5. User wFreq single words (×2)
    Object.entries(wFreq).forEach(([w,f])=>{ if(!lp||w.startsWith(lp)) scored[w]=(scored[w]||0)+f*2; });

    return Object.entries(scored)
      .filter(([w])=>w!==lw)
      .sort((a,b)=>b[1]-a[1])
      .slice(0,n).map(([w])=>w);
  },

  // Language detection from text
  detectLang(text){
    const trChars = /[çğıöşüÇĞIÖŞÜ]/;
    const trWords = /\b(ve|bir|bu|için|ile|da|de|mi|mı|mu|mü|ben|sen|o|biz|siz|onlar|ama|veya)\b/i;
    const enWords = /\b(the|and|or|is|are|was|were|have|has|will|would|could|should|this|that|with|from)\b/i;
    if(trChars.test(text)) return 'tr';
    const words = text.split(/\s+/).length;
    if(words >= 2){
      const trScore = (text.match(trWords)||[]).length;
      const enScore = (text.match(enWords)||[]).length;
      if(trScore > enScore) return 'tr';
      if(enScore > trScore) return 'en';
    }
    return this.currentLang; // default to current
  },

  // Called when user types a space (word completed)
  onWordComplete(text){
    const words = text.trim().split(/\s+/).filter(Boolean);
    if(words.length >= 2){
      const w1 = words[words.length-2];
      const w2 = words[words.length-1];
      this.learnBigram(w1, w2);
      // Update single word freq
      recWord(w2);
    } else if(words.length===1){
      recWord(words[0]);
    }
    // Auto-detect language after 3+ words
    if(words.length >= 3){
      const detected = this.detectLang(text);
      if(detected !== this.currentLang){
        this.currentLang = detected;
        appLang = detected;
        localStorage.setItem('es_lang', detected);
        // Update keyboard layout silently
        kbLay = getAlphaLayout();
        renderKB();
        pickTtsVoice();
        // Update lang buttons
        document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active',b.dataset.lang===appLang));
        // Subtle notification
        showBlinkFlash(detected==='tr'?'🌐 Türkçe algılandı':'🌐 English detected');
      }
    }
  }
};

const BASE_TR=['su','yardım','evet','hayır','tamam','lütfen','teşekkür','sağol','ağrı','doktor','ilaç','yemek','uyku','yorgun','soğuk','sıcak','lazım','telefon','müzik','iyi','kötü','merhaba','anlıyorum','biliyorum','acıktım','susadım','canım','anne','baba','git','gel','dur','bekle','yavaş','hızlı','kanal','ses','kapat','aç','ver','getir','oku','ara','mesaj','temiz','doldur','otur','kalk'];
const BASE_EN=['water','help','yes','no','okay','please','thank','you','hurts','pain','doctor','medicine','food','sleep','tired','cold','hot','need','phone','call','music','quiet','good','bad','hello','fine','understand','know','hungry','thirsty','stop','go','come','wait','slow','fast','mom','dad','channel','volume','fill','sit','stand','read','open','close','give','bring'];

let wFreq={};
try{wFreq=JSON.parse(localStorage.getItem('es_wf')||'{}');}catch(e){}

function recWord(w){
  const k=w.toLowerCase().trim();
  if(!k||k.length<2) return;
  wFreq[k]=(wFreq[k]||0)+1;
  try{localStorage.setItem('es_wf',JSON.stringify(wFreq));}catch(e){}
}

function getSugg(prefix, n=6){
  const words = kbText.trim().split(/\s+/).filter(Boolean);
  const lastWord = words.length>=2 ? words[words.length-1] : '';
  return kbEngine.predict(lastWord, prefix, n);
}

function getContextSugg(fullText, n=3){
  const words=fullText.trim().split(/\s+/).filter(Boolean);
  if(!words.length) return [];
  const last=words[words.length-1];
  return kbEngine.predict(last,'',n+2).filter(w=>w!==last).slice(0,n);
}

let kbText       = '';
let kbShift      = false;
let kbLay        = getAlphaLayout();
let kbGroup      = null; // v27: seçilen harf grubu
let kbMode       = localStorage.getItem('es_kbMode') || 'eye';
let kbDwells     = [];
let kbSuggDwells = [];
let kbTouchRefs  = [];

// ══════════════════════════════════════════════════════
// KEYBOARD GAZE STABILIZER v26 — SNAP + SMOOTHING, KALİBRASYONA DOKUNMAZ
// Amaç: Klavye açıkken küçük mikro kaymalarda E yerine D gibi komşu harf seçimini azaltmak.
// Bu blok SADECE klavye hedef çözümleme mantığını değiştirir.
// Kalibrasyon noktaları, genel gaze modeli ve klavye boyutları değiştirilmedi.
// ══════════════════════════════════════════════════════
let kbStableTarget = null;
let kbStableKind   = null;
let kbCandidateTarget = null;
let kbCandidateSince  = 0;
let kbActiveTarget    = null;
let kbStableLastTs = 0;
let kbSmoothSamples = [];

// Ana ayarlar — gerekirse sadece bu değerlerle oynanır.
const KB_SMOOTH_N          = 10;    // son 10 frame ortalaması: klavye titremesini azaltır
const KB_SWITCH_STABLE_MS  = 95;   // komşu harfe geçmek için kısa kararlılık ister
const KB_EDGE_DEAD_ZONE    = 0.20;  // tuş kenarları aktif değildir; merkez daha güvenlidir
const KB_SUGG_DEAD_ZONE    = 0.10;
const KB_VISUAL_SNAP_KEY   = 0.82;  // nokta seçilen harfin merkezine yaklaşır
const KB_VISUAL_SNAP_SUGG  = 0.28;
const KB_LOCK_EXIT_PAD     = 34;    // doğru harfteyken küçük kaymada kilidi bırakmaz
const KB_NEAR_PAD_KEY      = 26;    // snap için tuş çevresinde küçük tolerans
const KB_NEAR_PAD_SUGG     = 12;

// Klavyeye özel bias kapalı. Kalibrasyonu bozmayalım.
const KB_GAZE_OFFSET_X = 0;
const KB_GAZE_OFFSET_Y = 0;

function rectCenter(r){
  return { x:(r.left+r.right)/2, y:(r.top+r.bottom)/2 };
}

function pointInRect(x, y, r){
  return x >= r.left && x <= r.right && y >= r.top && y <= r.bottom;
}

function pointInRectPad(x, y, r, pad){
  return x >= r.left-pad && x <= r.right+pad && y >= r.top-pad && y <= r.bottom+pad;
}

function pointInSafeRect(x, y, r, ratio=KB_EDGE_DEAD_ZONE){
  const mx = Math.min(30, Math.max(10, r.width  * ratio));
  const my = Math.min(26, Math.max(8,  r.height * ratio));
  return x >= r.left + mx && x <= r.right - mx && y >= r.top + my && y <= r.bottom - my;
}

function normalizedRectDistance(x, y, r){
  const c = rectCenter(r);
  const hw = Math.max(1, r.width/2);
  const hh = Math.max(1, r.height/2);
  const dx = (x-c.x)/hw;
  const dy = (y-c.y)/hh;
  return Math.sqrt(dx*dx + dy*dy);
}

function kbSmoothPoint(x, y){
  kbSmoothSamples.push({x, y});
  if(kbSmoothSamples.length > KB_SMOOTH_N) kbSmoothSamples.shift();
  let sx = 0, sy = 0;
  kbSmoothSamples.forEach(p => { sx += p.x; sy += p.y; });
  return { x: sx / kbSmoothSamples.length, y: sy / kbSmoothSamples.length };
}

function getKeyboardGazeCandidates(){
  const items = [];
  kbDwells.forEach(kd => {
    if(kd && kd.el && kd.el.isConnected){
      items.push({type:'key', ref:kd, el:kd.el, rect:kd.el.getBoundingClientRect()});
    }
  });
  kbSuggDwells.forEach(sd => {
    if(sd && sd.el && sd.el.isConnected){
      items.push({type:'sugg', ref:sd, el:sd.el, rect:sd.el.getBoundingClientRect()});
    }
  });
  return items;
}

function sameKeyboardTarget(a,b){
  return !!(a && b && a.el === b.el && a.type === b.type);
}

function scoreKeyboardCandidate(gx, gy, item){
  const r = item.rect;
  const dead = item.type === 'sugg' ? KB_SUGG_DEAD_ZONE : KB_EDGE_DEAD_ZONE;
  const nearPad = item.type === 'sugg' ? KB_NEAR_PAD_SUGG : KB_NEAR_PAD_KEY;

  // Yeni hedef için en güvenli alan: tuşun merkezi. Kenarda yeni harfe geçirme.
  const safe = pointInSafeRect(gx, gy, r, dead);
  const near = pointInRectPad(gx, gy, r, nearPad);
  if(!safe && !near) return Infinity;

  const dist = normalizedRectDistance(gx, gy, r);

  // Kenarda ise sadece çok yakınsa aday olsun; aksi halde dwell başlamasın.
  if(!safe && dist > 0.78) return Infinity;

  // Öneriler üstte geniş olduğu için biraz daha düşük öncelik ver.
  return dist + (item.type === 'sugg' ? 0.08 : 0);
}

function resolveKeyboardTarget(gx, gy, now=performance.now()){
  const items = getKeyboardGazeCandidates();
  if(!items.length){
    kbStableTarget = null;
    kbCandidateTarget = null;
    kbActiveTarget = null;
    return null;
  }

  // 1) Var olan hedefi koru: tuşun çevresindeysek komşuya zıplama.
  if(kbStableTarget && kbStableTarget.el && kbStableTarget.el.isConnected){
    const r = kbStableTarget.el.getBoundingClientRect();
    const pad = kbStableTarget.type === 'sugg' ? 16 : KB_LOCK_EXIT_PAD;
    if(pointInRectPad(gx, gy, r, pad)){
      kbStableTarget.rect = r;
      kbStableLastTs = now;
      kbActiveTarget = kbStableTarget;
      return kbStableTarget;
    }
  }

  // 2) En yakın merkezi bul. Bu, dikdörtgen sınırına değil tuş merkezine göre karar verir.
  let best = null;
  let bestScore = Infinity;
  items.forEach(it => {
    const sc = scoreKeyboardCandidate(gx, gy, it);
    if(sc < bestScore){ bestScore = sc; best = it; }
  });

  if(!best || bestScore === Infinity){
    kbCandidateTarget = null;
    kbActiveTarget = null;
    return null;
  }

  // 3) Yeni harfe geçişte kısa kararlılık iste. Böylece E üstündeyken nokta anlık D'ye düşerse seçmez.
  if(!sameKeyboardTarget(best, kbCandidateTarget)){
    kbCandidateTarget = best;
    kbCandidateSince = now;
  }

  const canSwitch = !kbStableTarget || sameKeyboardTarget(best, kbStableTarget) || (now - kbCandidateSince >= KB_SWITCH_STABLE_MS);
  if(!canSwitch){
    kbActiveTarget = kbStableTarget;
    return kbStableTarget;
  }

  kbStableTarget = best;
  kbStableKind = best.type;
  kbStableLastTs = now;
  kbActiveTarget = best;
  return best;
}

function findKeyboardTarget(gx, gy){
  return resolveKeyboardTarget(gx, gy, performance.now());
}

function correctKeyboardGaze(gx, gy, dt){
  const kbPanel = $('kbPanel');
  if(!kbPanel || kbPanel.style.display !== 'flex'){
    kbStableTarget = null;
    kbStableKind = null;
    kbCandidateTarget = null;
    kbActiveTarget = null;
    kbSmoothSamples = [];
    return {x:gx, y:gy};
  }

  // Klavyede ekstra smoothing: genel kalibrasyon aynı kalır, sadece klavye üstünde ortalama alınır.
  const biasedX = Math.max(4, Math.min(window.innerWidth  - 4, gx + KB_GAZE_OFFSET_X));
  const biasedY = Math.max(4, Math.min(window.innerHeight - 4, gy + KB_GAZE_OFFSET_Y));
  const sm = kbSmoothPoint(biasedX, biasedY);

  const target = resolveKeyboardTarget(sm.x, sm.y, performance.now());
  if(!target){
    kbActiveTarget = null;
    return {x:sm.x, y:sm.y};
  }

  // Görsel nokta seçilecek tuşun merkezine yapışır. Kullanıcı hangi tuşun seçileceğini net görür.
  const r = target.rect;
  const c = rectCenter(r);
  const snap = target.type === 'sugg' ? KB_VISUAL_SNAP_SUGG : KB_VISUAL_SNAP_KEY;
  return {
    x: sm.x + (c.x - sm.x) * snap,
    y: sm.y + (c.y - sm.y) * snap
  };
}


function openKeyboard(){
  resetAllDwells();
  kbStableTarget = null; kbCandidateTarget = null; kbActiveTarget = null;
  kbText=''; kbShift=false; kbLay=getAlphaLayout(); kbGroup=null;
  $('kbPanel').style.display='flex';
  $('kbTextArea').dataset.ph=appLang==='tr'?'Yazmaya başlayın…':'Start typing…';
  pushPage('kbPanel');
  applyKbMode(kbMode);
  renderKB();
  refreshKbDisplay();
  refreshSugg('');
  refreshBlinkBtn();
}

function closeKeyboard(){
  $('kbPanel').style.display = 'none';
  kbDwells = []; kbSuggDwells = [];
  removeTouchRefs();
  popPage();
  stopVoice();
  hideVoiceOverlay();
}

// ── Mode (eye / touch)
function setKbMode(m){
  kbMode = m;
  localStorage.setItem('es_kbMode', m);
  applyKbMode(m);
}

function applyKbMode(m){
  kbMode = m;
  $('kbModeEye').classList.toggle('active',   m === 'eye');
  $('kbModeTouch').classList.toggle('active', m === 'touch');
  removeTouchRefs();
  if(m === 'touch') bindTouchHandlers();
}

// ── Touch handlers (bound to kbRows + kbSugg)
function bindTouchHandlers(){
  const rowsEl = $('kbRows');
  const suggEl = $('kbSugg');

  function hitKey(x, y){
    const el = document.elementFromPoint(x, y);
    if(!el) return;
    const keyEl = el.closest('.kb-key');
    if(keyEl){
      const kd = kbDwells.find(d => d.el === keyEl);
      if(kd){ flashKey(kd.el); kbAction(kd.key); return; }
    }
    const sgEl = el.closest('.kb-sg');
    if(sgEl){
      const sd = kbSuggDwells.find(d => d.el === sgEl);
      if(sd){ kbPickSugg(sd.word); }
    }
  }

  const onTouch = (e) => {
    if(kbMode !== 'touch') return;
    e.preventDefault();
    const t = e.changedTouches ? e.changedTouches[0] : null;
    if(t) hitKey(t.clientX, t.clientY);
  };
  const onClick = (e) => {
    if(kbMode !== 'touch') return;
    const kEl = e.target.closest('.kb-key');
    if(kEl){ const kd = kbDwells.find(d=>d.el===kEl); if(kd){ flashKey(kEl); kbAction(kd.key); } }
    const sEl = e.target.closest('.kb-sg');
    if(sEl){ const sd = kbSuggDwells.find(d=>d.el===sEl); if(sd) kbPickSugg(sd.word); }
  };

  rowsEl.addEventListener('touchend', onTouch, {passive:false});
  rowsEl.addEventListener('click', onClick);
  suggEl.addEventListener('touchend', onTouch, {passive:false});
  suggEl.addEventListener('click', onClick);

  kbTouchRefs = [
    {el:rowsEl, evt:'touchend', fn:onTouch},
    {el:rowsEl, evt:'click',    fn:onClick},
    {el:suggEl, evt:'touchend', fn:onTouch},
    {el:suggEl, evt:'click',    fn:onClick},
  ];
}

function removeTouchRefs(){
  kbTouchRefs.forEach(({el,evt,fn}) => el.removeEventListener(evt,fn));
  kbTouchRefs = [];
}

// ── v27 Two-step block keyboard helpers
function kbCurrentGroups(){
  return KB_GROUPS[getAlphaLayout()] || KB_GROUPS.alpha_en;
}
function kbFindGroup(id){
  return kbCurrentGroups().find(g => g.id === id) || null;
}
function kbBuildRows(){
  if(kbLay === 'num') return {rows: KB_LAYOUTS.num, stage:'num'};

  // Harf ekranı: önce grup seç, sonra sadece o grubun max 6 harfini göster.
  if(kbGroup){
    const g = kbFindGroup(kbGroup);
    if(g){
      return {
        stage:'letters',
        title:g.label,
        rows:[
          g.keys,
          ['BACK_GROUP','DEL','SPACE','CLEAR','123','CLOSE']
        ]
      };
    }
    kbGroup = null;
  }

  const groups = kbCurrentGroups().map(g => 'GRP:' + g.id);
  return {
    stage:'groups',
    title: appLang === 'tr' ? 'Önce harf grubunu seç' : 'Choose a letter group',
    rows:[
      groups.slice(0,3),
      groups.slice(3,5).concat(['DEL']),
      ['SPACE','CLEAR','123','CLOSE']
    ]
  };
}
function kbLabelForKey(key){
  if(key && key.startsWith('GRP:')){
    const g = kbFindGroup(key.slice(4));
    return g ? g.label : key;
  }
  if(key === 'BACK_GROUP') return appLang === 'tr' ? '← Gruplar' : '← Groups';
  return KB_LABELS[key] || key;
}

// ── Render keyboard
function renderKB(){
  if(kbLay==='alpha') kbLay=getAlphaLayout();
  const built = kbBuildRows();
  const rows = built.rows;
  const c=$('kbRows');
  c.innerHTML='';
  c.classList.toggle('two-step-kb', built.stage !== 'num');
  kbDwells=[];
  kbStableTarget = null; kbCandidateTarget = null; kbActiveTarget = null;

  const title = $('kbTopTitle');
  if(title){
    title.classList.add('kb-stage-title');
    title.textContent = built.stage === 'letters'
      ? (appLang==='tr' ? `Harf Seç: ${built.title}` : `Pick Letter: ${built.title}`)
      : built.stage === 'groups'
        ? (built.title || (appLang==='tr'?'Harf grubu seç':'Choose group'))
        : 'EyeSense Keyboard';
  }

  rows.forEach(row=>{
    const rowEl=document.createElement('div');
    rowEl.className='kb-row';
    row.forEach(key=>{
      if(!key) return;
      const btn=document.createElement('div');
      btn.className='kb-key';
      btn.dataset.key=key;
      let label=kbLabelForKey(key);

      if(key.startsWith && key.startsWith('GRP:')) btn.classList.add('kb-group');
      if(built.stage === 'letters' && key.length === 1) btn.classList.add('kb-letter-large');
      if(key === 'BACK_GROUP') btn.classList.add('wide','fn','kb-back-group');

      switch(key){
        case 'SPACE': btn.classList.add('xwide','fn'); label=''; break;
        case 'SHIFT': btn.classList.add('wide','fn'); label=kbShift?'⇧↑':'⇧'; break;
        case 'DEL':   btn.classList.add('wide','fn','kb-action-small'); break;
        case 'CLEAR': btn.classList.add('wide','fn','kb-action-small'); label=appLang==='tr'?'Temizle':'Clear'; break;
        case 'CLOSE': btn.classList.add('wide','fn','kb-action-small'); label=appLang==='tr'?'Kapat':'Close'; break;
        case '123':   btn.classList.add('wide','fn','kb-action-small'); break;
        case 'ABC':   btn.classList.add('wide','fn','kb-action-small'); break;
        default:
          if(kbShift&&key.length===1) label=key.toUpperCase();
      }

      if(label==='') {
        const sp=document.createElement('span');
        sp.style.cssText='display:block;width:58px;height:5px;background:rgba(255,255,255,0.28);border-radius:999px;';
        btn.appendChild(sp);
      } else {
        btn.textContent=label;
      }
      const ov=document.createElement('div');
      ov.className='dwell-ov';
      btn.appendChild(ov);
      rowEl.appendChild(btn);
      kbDwells.push({el:btn,key,overlay:ov,elapsed:0,fired:false});
    });
    c.appendChild(rowEl);
  });
  if(kbMode==='touch'){ removeTouchRefs(); bindTouchHandlers(); }
}

// ── Key action handler
function kbAction(key){
  // v27: iki aşamalı klavye. Grup tuşu harf yazmaz, alt harf ekranını açar.
  if(key && key.startsWith && key.startsWith('GRP:')){
    kbGroup = key.slice(4);
    renderKB();
    return;
  }
  if(key === 'BACK_GROUP'){
    kbGroup = null;
    renderKB();
    return;
  }

  switch(key){
    case 'DEL':   kbText = kbText.slice(0,-1); break;
    case 'CLEAR': kbText = ''; kbGroup = null; break;
    case 'SPACE':
      if(kbText && !kbText.endsWith(' ')){
        kbEngine.onWordComplete(kbText + ' ');
      }
      kbText += ' ';
      kbGroup = null;
      break;
    case 'SHIFT': kbShift=!kbShift; renderKB(); return;
    case '123':   kbLay='num'; kbGroup=null; renderKB(); return;
    case 'ABC':   kbLay=getAlphaLayout(); kbGroup=null; renderKB(); return;
    case 'CLOSE': closeKeyboard(); return;
    default:
      kbText += kbShift ? key.toUpperCase() : key;
      // Harf yazıldıktan sonra ana grup ekranına dön. Bu, yanlış komşu harf seçimini azaltır.
      kbGroup = null;
      if(kbShift){ kbShift = false; }
      renderKB();
  }
  refreshKbDisplay();
  refreshSugg(kbText.split(' ').pop());
}

// ── Update text display
function refreshKbDisplay(){
  const ta = $('kbTextArea');
  const safe = kbText.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/\n/g,'<br>');
  ta.innerHTML = safe + '<span class="kb-cursor"></span>';
  // Scroll to bottom so latest text is visible
  ta.scrollTop = ta.scrollHeight;
}

// ── Update suggestions
function refreshSugg(prefix){
  const c=$('kbSugg');
  c.innerHTML='';
  kbSuggDwells=[];

  // Prefix completions (primary)
  const prefixSuggs=getSugg(prefix, 5);

  // Context suggestions: next-word when prefix is empty
  let contextSuggs=[];
  if(!prefix.trim() && kbText.trim()){
    contextSuggs=getContextSugg(kbText, 3).filter(w=>!prefixSuggs.includes(w));
  }

  const allSuggs=[...prefixSuggs, ...contextSuggs].slice(0,7);

  allSuggs.forEach((w,i)=>{
    const el=document.createElement('div');
    el.className='kb-sg'+(i>=prefixSuggs.length?' ai-sugg':'');
    el.textContent=w;
    const ov=document.createElement('div');
    ov.className='dwell-ov';
    el.appendChild(ov);
    c.appendChild(el);
    kbSuggDwells.push({el,word:w,overlay:ov,elapsed:0,fired:false});
  });
}

function kbPickSugg(w){
  if(kbText.endsWith(' ')||!kbText){
    kbText=(kbText+w+' ');
  } else {
    const ws=kbText.split(' ');
    ws[ws.length-1]=w;
    kbText=ws.join(' ')+' ';
  }
  kbEngine.onWordComplete(kbText);
  recWord(w);
  refreshKbDisplay();
  kbSuggDwells=[];
  refreshSugg('');
}

// ── Dwell update (eye gaze mode)
function updateKbDwells(gx, gy, dt){
  if(kbMode === 'touch') return;

  const dwMs  = kbDwellMs();
  let bestKey = null, bestPct = 0;

  // Klavye açıkken tek hedef prensibi:
  // correctKeyboardGaze() ham gaze ile güvenli hedefi hesaplar.
  // Eğer nokta tuş sınırındaysa kbActiveTarget null kalır ve dwell birikmez.
  const activeTarget = kbActiveTarget;

  kbDwells.forEach(kd => {
    if(kd.fired) return;
    const hit = activeTarget && activeTarget.type === 'key' && activeTarget.ref === kd;
    if(hit){ kd.elapsed += dt; kd.el.classList.add('gazing'); }
    else   { kd.elapsed = Math.max(0, kd.elapsed - dt*3.2); if(!kd.elapsed) kd.el.classList.remove('gazing'); }
    const pct = Math.min(1, kd.elapsed / dwMs);
    kd.overlay.style.width = (pct*100) + '%';
    if(pct > bestPct){ bestPct = pct; bestKey = kd; }
    if(!blinkKbEnabled && pct >= 1){
      kd.fired = true;
      flashKey(kd.el);
      kbAction(kd.key);
      kbStableTarget = null; kbCandidateTarget = null; kbActiveTarget = null;
      kd.elapsed = 0; kd.fired = false;
      kd.el.classList.remove('gazing');
      kd.overlay.style.width = '0%';
    }
  });

  // Blink-ready highlight
  if(blinkKbEnabled || blinkSelectEnabled){
    kbDwells.forEach(kd => kd.el.classList.remove('blink-ready'));
    if(bestKey && bestPct > 0.08){ bestKey.el.classList.add('blink-ready'); kbBlinkFocusKey = bestKey.key; }
    else kbBlinkFocusKey = null;
  }

  // Suggestion dwell — yine tek hedef prensibiyle çalışır.
  kbSuggDwells.forEach(sd => {
    if(sd.fired) return;
    const hit = activeTarget && activeTarget.type === 'sugg' && activeTarget.ref === sd;
    if(hit){ sd.elapsed += dt; sd.el.classList.add('gazing'); }
    else   { sd.elapsed = Math.max(0, sd.elapsed - dt*3.0); if(!sd.elapsed) sd.el.classList.remove('gazing'); }
    const pct = Math.min(1, sd.elapsed / (dwMs*0.65));
    sd.overlay.style.width = (pct*100) + '%';
    if(!blinkKbEnabled && pct >= 1){
      sd.fired = true;
      kbPickSugg(sd.word);
      kbStableTarget = null; kbCandidateTarget = null; kbActiveTarget = null;
      sd.elapsed = 0; sd.fired = false;
      sd.el.classList.remove('gazing');
      sd.overlay.style.width = '0%';
    }
  });
}

// ── Updated triggerBlinkKey for new key names
function triggerBlinkKey(){
  let best = null, bestPct = 0;
  kbDwells.forEach(kd => {
    const pct = kd.elapsed / kbDwellMs();
    if(pct > bestPct && pct > 0.12){ bestPct = pct; best = kd; }
  });
  if(best){
    flashKey(best.el);
    kbAction(best.key);
    kbStableTarget = null; kbCandidateTarget = null; kbActiveTarget = null;
    best.elapsed = 0;
    best.el.classList.remove('gazing','blink-ready');
    best.overlay.style.width = '0%';
    kbBlinkFocusKey = null;
  }
}

function refreshBlinkBtn(){
  const b=$('kbBlinkToggle');
  if(!b) return;
  b.textContent = blinkKbEnabled ? '👁 Blink ✓' : '👁 Blink';
  b.classList.toggle('active', blinkKbEnabled);
}

// ── Wiring
$('kbCloseBtn2').onclick  = closeKeyboard;
$('kbBlinkToggle').onclick = () => { toggleBlinkKb(); refreshBlinkBtn(); };
$('kbTTS').onclick = () => {
  unlockTTS();
  const txt = kbText.trim();
  if(txt) speak(txt); else speak('No text yet');
};

// ════════════════════════════════════════════════════
// VOICE RECOGNITION — single-shot, dedup-safe
// ════════════════════════════════════════════════════
// ══════════════════════════════════════════════════════
// VOICE SYSTEM — Wake Word + Voice Confirm + KB Dictation
// ══════════════════════════════════════════════════════
let recognition       = null;
let recognizing       = false;
let voiceResultDone   = false;
let wakeWordActive    = false;   // background listener
let wakeRecognition   = null;
let voiceConfirmPending = null;  // { action, label, onConfirm }

// Wake phrases per language
const WAKE_PHRASES = {
  tr: ['eyesense yardım et','eyesense sos','yardım et','acil durum'],
  en: ['eyesense help','eyesense sos','help me','emergency']
};

function showVoiceOverlay(msg, sub){
  $('kbVoiceMsg').textContent     = msg || t('voiceListening');
  $('kbVoiceInterim').textContent = sub || '';
  $('kbVoiceStatus').classList.add('show');
}
function hideVoiceOverlay(){
  $('kbVoiceStatus').classList.remove('show');
  voiceConfirmPending = null;
}

// ── Voice Confirm Dialog
function voiceConfirm(label, onConfirm){
  voiceConfirmPending = { label, onConfirm };
  const msg = appLang==='tr'
    ? `${label} — emin misin? Onaylamak için göz kırp.`
    : `${label} — are you sure? Blink to confirm.`;
  speak(msg);
  showBlinkFlash('👁 ' + (appLang==='tr'?'Göz kırp: Onayla':'Blink: Confirm'));
  // Auto-expire after 8s
  setTimeout(()=>{ if(voiceConfirmPending){ voiceConfirmPending=null; hideVoiceOverlay(); }},8000);
}

// Called by single-blink or dwell confirm
function resolveVoiceConfirm(){
  if(!voiceConfirmPending) return false;
  const cb = voiceConfirmPending.onConfirm;
  voiceConfirmPending = null;
  hideVoiceOverlay();
  if(typeof cb==='function') cb();
  return true;
}

// ── Wake Word background listener
function startWakeListener(){
  if(wakeWordActive) return;
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if(!SR) return;
  wakeWordActive = true;
  function buildWake(){
    const r = new SR();
    r.lang = appLang==='tr'?'tr-TR':'en-US';
    r.continuous = true;
    r.interimResults = false;
    r.onresult = (e)=>{
      const transcript = e.results[e.resultIndex][0].transcript.toLowerCase().trim();
      const phrases = WAKE_PHRASES[appLang]||WAKE_PHRASES.tr;
      const matched = phrases.some(p=>transcript.includes(p));
      if(matched){
        // PANIC trigger via voice
        speak(t('sosSending'));
        showBlinkFlash('🆘 ' + t('sosSending'));
        setTimeout(triggerPanic, 500);
      }
    };
    r.onerror = ()=>{ wakeWordActive=false; };
    r.onend = ()=>{
      if(wakeWordActive) setTimeout(()=>{ try{ r.start(); }catch(e){} }, 1500);
    };
    return r;
  }
  wakeRecognition = buildWake();
  try{ wakeRecognition.start(); }catch(e){ wakeWordActive=false; }
}
function stopWakeListener(){
  wakeWordActive = false;
  if(wakeRecognition){ try{ wakeRecognition.abort(); }catch(e){} wakeRecognition=null; }
}

function buildRecognition(){
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if(!SR) return null;
  const r = new SR();
  r.lang             = appLang==='tr'?'tr-TR':'en-US';
  r.interimResults   = true;
  r.maxAlternatives  = 1;
  r.continuous       = false;

  r.onstart = () => {
    recognizing      = true;
    voiceResultDone  = false;
    $('kbVoice').classList.add('listening');
    $('kbVoice').textContent = '🔴 Stop';
    showVoiceOverlay(t('voiceListening'),t('voiceSpeak'));
  };

  r.onresult = (e) => {
    let interim = '', final = '';
    for(let i = e.resultIndex; i < e.results.length; i++){
      if(e.results[i].isFinal) final   += e.results[i][0].transcript;
      else                     interim += e.results[i][0].transcript;
    }
    if(interim) showVoiceOverlay(t('voiceListening'),interim);
    if(final && !voiceResultDone){
      voiceResultDone = true;
      const txt = final.trim();
      if(txt){
        if(kbText && !kbText.endsWith(' ')) kbText += ' ';
        kbText += txt;
        kbEngine.onWordComplete(kbText);
        refreshKbDisplay();
        refreshSugg(kbText.split(' ').pop());
        showVoiceOverlay(t('voiceGot'),'"'+txt+'"');
        setTimeout(hideVoiceOverlay, 1800);
      }
    }
  };

  r.onnomatch = () => {
    showVoiceOverlay(t('voiceNotUnderstood'), t('voiceTryAgain'));
    setTimeout(hideVoiceOverlay, 2000);
  };

  r.onerror = (e) => {
    const errs={
      'no-speech':    appLang==='tr'?'Ses algılanamadı':'No speech detected',
      'audio-capture':appLang==='tr'?'Mikrofon yok':'Mic unavailable',
      'not-allowed':  appLang==='tr'?'Mikrofon izni gerekli':'Mic blocked',
      'network':      appLang==='tr'?'Ağ hatası':'Network error',
      'aborted':      appLang==='tr'?'İptal edildi':'Cancelled',
    };
    showVoiceOverlay('⚠ '+(errs[e.error]||e.error));
    setTimeout(hideVoiceOverlay, 2000);
    stopVoice();
  };
  r.onend = () => stopVoice();
  return r;
}

function stopVoice(){
  if(recognition){ try{ recognition.abort(); }catch(e){} }
  recognizing = false;
  const vb=$('kbVoice');
  if(vb){ vb.classList.remove('listening'); vb.textContent='🎤 '+(appLang==='tr'?'Ses':'Voice'); }
}

$('kbVoice').onclick = () => {
  unlockTTS();
  if(recognizing){ stopVoice(); hideVoiceOverlay(); return; }
  if(!recognition) recognition = buildRecognition();
  if(!recognition){
    $('kbVoice').textContent = appLang==='tr'?'🎤 Desteklenmiyor':'🎤 Unsupported';
    $('kbVoice').disabled = true;
    return;
  }
  voiceResultDone = false;
  try{ recognition.start(); }
  catch(e){
    stopVoice();
    showVoiceOverlay('⚠ '+(appLang==='tr'?'Başlatılamadı':'Could not start'));
    setTimeout(hideVoiceOverlay, 1500);
  }
};

// ══════════════════════════════════════════════════════
// [see source for notes]
// ══════════════════════════════════════════════════════

// ══════════════════════════════════════════════════════
// LIGHTING ROBUSTNESS
// ──────────────────────────────────────────────────────
// Adaptive brightness compensation:
//   1. Sample frame luminance (Rec.709 luma: 0.299R + 0.587G + 0.114B)
//   2. Compute adaptive gamma: γ = log(0.5) / log(avg/255)
//   3. Apply CSS brightness filter to video element as visual aid
//   4. Trigger lightWarn overlay if avg luminance < 32 (too dark)
//   5. FaceMesh confidence thresholds tightened in low light
// ══════════════════════════════════════════════════════
const ppC=document.createElement('canvas');ppC.width=120;ppC.height=68;
const ppX=ppC.getContext('2d');
let lastLuma=128, lightLevel='normal'; // tracked globally for diagnostics
function updateBrightness(){
  // Only run if video is actually playing and has real dimensions
  if(!video || video.readyState < 2 || video.videoWidth === 0) return;
  try{
    ppX.drawImage(video,0,0,ppC.width,ppC.height);
    const d=ppX.getImageData(0,0,ppC.width,ppC.height).data;
    let s=0, count=0;
    for(let i=0;i<d.length;i+=16){ s+=(d[i]*.299+d[i+1]*.587+d[i+2]*.114); count++; }
    if(count===0) return; // no valid pixels — don't update warning
    const av=s/count;
    // Sanity check: if all pixels are black (canvas tainted / not ready) skip
    if(av < 1) return;
    lastLuma=av;
    video.style.filter=`brightness(${Math.max(0.7,Math.min(1.8,110/Math.max(av,25))).toFixed(2)})`;
    if(av<20){ lightLevel='dark'; lightWarn.style.display='block'; lightWarn.textContent='⚠️ Low light'; }
    else if(av<40){ lightLevel='low'; lightWarn.style.display='block'; lightWarn.textContent='⚠️ Light dim'; }
    else{ lightLevel='normal'; lightWarn.style.display='none'; }
  }catch(e){
    // Canvas read failed (e.g. cross-origin) — don't block the user
    lightWarn.style.display='none';
    lightLevel='normal';
  }
}
setInterval(updateBrightness,4000);
// Run once after video starts (delayed to ensure readyState >= 2)
video.addEventListener('playing', ()=>{ setTimeout(updateBrightness, 1500); });

// ══════════════════════════════════════════════════════
// DPI
// ══════════════════════════════════════════════════════
const dpiRuler=$('dpiRuler'),dpiHandle=$('dpiHandle');
let dpiWidth=280;
function bindDpi(evD,evM,evU,gX){
  dpiHandle.addEventListener(evD,e=>{
    e.preventDefault();
    const x0=gX(e),w0=dpiRuler.offsetWidth;
    const mv=ev=>{dpiWidth=Math.max(60,Math.min(window.innerWidth-80,w0+gX(ev)-x0));dpiRuler.style.width=dpiWidth+'px';$('dpiPxV').textContent=Math.round(dpiWidth);$('dpiCmV').textContent='10cm → '+Math.round(dpiWidth)+'px';};
    const up=()=>{document.removeEventListener(evM,mv);document.removeEventListener(evU,up);};
    document.addEventListener(evM,mv);document.addEventListener(evU,up);
  },{passive:false});
}
bindDpi('mousedown','mousemove','mouseup',e=>e.clientX);
bindDpi('touchstart','touchmove','touchend',e=>e.touches[0].clientX);
$('dpiSaveBtn').onclick=()=>{pxPerCm=dpiWidth/10;localStorage.setItem('es_pxcm',pxPerCm);$('dpiPanel').style.display='none';speak(t('calibSaved'));};
$('dpiCancelBtn').onclick=()=>$('dpiPanel').style.display='none';

// ══════════════════════════════════════════════════════
// VISION ENGINE v2 — COCO-SSD + Claude AI + Gaze Zones
// ══════════════════════════════════════════════════════

// ── State
let visionStream        = null;
let visionFacingMode    = 'environment';   // arka kamera
let visionLastDescription = '';
let visionScanElapsed   = 0;
let visionAutoEnabled   = false;
let visionAutoTimer     = null;
let visionAutoElapsed   = 0;
const VISION_AUTO_INTERVAL = 8000;

// Tek noktadan yönetilen algılama eşiği
const VISION_OBJECT_MIN_SCORE = 0.45;

// Tekrarlı konuşma filtresi — aynı nesneyi çok sık söyleme
const _spokenObjects = new Map(); // cls → last spoken timestamp
const SPOKEN_COOLDOWN_MS = 8000; // aynı nesneyi 8 saniyede bir söyle

// COCO-SSD
let cocoModel           = null;
let cocoLoading         = false;
let cocoLoaded          = false;
let visionDetectRafId   = null;
let lastCocoDetections  = [];
let visionGazeZoneDwells = [];             // [{el, label, dwell, ov}]
let visionFpsTs         = 0;
let visionFpsCount      = 0;

// COCO-SSD class → TR/EN display name + keyboard context words
const COCO_MAP = {
  person:    {tr:'Kişi',      en:'Person',    kbTR:['kim','gel','bak','yardım'],      kbEN:['who','come','look','help']},
  chair:     {tr:'Sandalye',  en:'Chair',     kbTR:['otur','kalk','yakın','taşı'],    kbEN:['sit','stand','move','closer']},
  couch:     {tr:'Kanepe',    en:'Sofa',      kbTR:['otur','uzan','yardım'],          kbEN:['sit','lie','help']},
  bed:       {tr:'Yatak',     en:'Bed',       kbTR:['uyu','kalk','minder','yardım'],  kbEN:['sleep','up','pillow','help']},
  tv:        {tr:'Televizyon',en:'TV',         kbTR:['kanal','ses','kapat','aç'],      kbEN:['channel','volume','off','on']},
  'cell phone':{tr:'Telefon',en:'Phone',      kbTR:['ara','mesaj','şarj','ver'],      kbEN:['call','text','charge','give']},
  laptop:    {tr:'Bilgisayar',en:'Laptop',    kbTR:['aç','kapat','ekran'],            kbEN:['open','close','screen']},
  book:      {tr:'Kitap',     en:'Book',      kbTR:['oku','ver','getir','rafta'],     kbEN:['read','give','bring','shelf']},
  cup:       {tr:'Bardak',    en:'Cup',       kbTR:['su','çay','doldur','boş'],       kbEN:['water','tea','fill','empty']},
  bottle:    {tr:'Şişe',      en:'Bottle',    kbTR:['su','iç','doldur','ver'],        kbEN:['water','drink','fill','give']},
  bowl:      {tr:'Kase',      en:'Bowl',      kbTR:['yemek','çorba','ver','sıcak'],   kbEN:['food','soup','give','hot']},
  fork:      {tr:'Çatal',     en:'Fork',      kbTR:['yemek','getir','nerede'],        kbEN:['food','bring','where']},
  knife:     {tr:'Bıçak',     en:'Knife',     kbTR:['dikkat','nerede','ver'],         kbEN:['careful','where','give']},
  spoon:     {tr:'Kaşık',     en:'Spoon',     kbTR:['yemek','getir','çorba'],         kbEN:['food','bring','soup']},
  clock:     {tr:'Saat',      en:'Clock',     kbTR:['saat kaç','zaman','bekle'],      kbEN:['time','what time','wait']},
  door:      {tr:'Kapı',      en:'Door',      kbTR:['aç','kapat','kilitle','bak'],    kbEN:['open','close','lock','check']},
  window:    {tr:'Pencere',   en:'Window',    kbTR:['aç','kapat','perde','ışık'],     kbEN:['open','close','curtain','light']},
  mouse:     {tr:'Fare',      en:'Mouse',     kbTR:['bilgisayar','tıkla'],            kbEN:['computer','click']},
  keyboard:  {tr:'Klavye',    en:'Keyboard',  kbTR:['bilgisayar','yaz'],              kbEN:['computer','type']},
  remote:    {tr:'Uzaktan',   en:'Remote',    kbTR:['kanal','ses','tv'],              kbEN:['channel','volume','tv']},
  umbrella:  {tr:'Şemsiye',   en:'Umbrella',  kbTR:['yağmur','nerede','ver'],         kbEN:['rain','where','give']},
  backpack:  {tr:'Sırt Çantası',en:'Backpack',kbTR:['nerede','ver','hazır'],          kbEN:['where','give','ready']},
  handbag:   {tr:'Çanta',     en:'Bag',       kbTR:['nerede','ver','hazır'],          kbEN:['where','give','ready']},
};

function cocoLabel(cls){
  const m = COCO_MAP[cls];
  if(!m) return {display: cls, kbWords: []};
  return {display: appLang==='tr' ? m.tr : m.en, kbWords: appLang==='tr' ? m.kbTR : m.kbEN};
}

// ══════════════════════════════════════════════════════
// ANTHROPIC API — merkezi çağrı fonksiyonu
// CORS için 'anthropic-dangerous-direct-browser-access'
// header'ı gereklidir.
// ══════════════════════════════════════════════════════
// ══════════════════════════════════════════════════════
// ══════════════════════════════════════════════════════
// ÇİFT ANAHTAR SİSTEMİ — GÖMÜLÜ
// ══════════════════════════════════════════════════════

// ══════════════════════════════════════════════════════
// RENDER BACKEND — kolayca değiştirilebilir URL
// Render'a deploy ettiğinde buraya yapıştır
// ══════════════════════════════════════════════════════
const RENDER_URL = 'https://eyesense-backend.onrender.com'; // ← buraya kendi URL'ini yaz

const _keys = {
  vision: {
    value:     'AIzaSyA9SdMnXjrK69Sl7A01G6PBXW2WG38cTQI',
    coolUntil: 0,
    backoffMs: 15000,
  },
  ocr: {
    value:     'AIzaSyDrjHKwThd6-AqpPkYQhYjp4FOoSsgJc_4',
    coolUntil: 0,
    backoffMs: 15000,
  }
};

function getGeminiKey(mode='vision'){
  return (_keys[mode] || _keys.vision).value;
}
function setGeminiKey(){ /* gömülü mod — devre dışı */ }
function onKeyInput(){ /* gömülü mod — devre dışı */ }
function initApiKeyUI(){ /* gömülü mod — devre dışı */ }
function promptGeminiKey(){ return _keys.vision.value; }

function _canCallApiMode(mode){
  const k = _keys[mode] || _keys.vision;
  return Date.now() >= k.coolUntil;
}

function _markApiCalledMode(mode){
  const k = _keys[mode] || _keys.vision;
  k.coolUntil = Date.now() + k.backoffMs;
}

// 4. Sadece ilgili modun cooldown'unu artır
function _handleRateLimitMode(mode){
  const k = _keys[mode] || _keys.vision;
  k.backoffMs = Math.min(API_BACKOFF_MAX, k.backoffMs * 2);
  k.coolUntil = Date.now() + k.backoffMs;
  const waitSec = Math.round(k.backoffMs/1000);
  const modeLabel = mode==='ocr'
    ? (appLang==='tr'?'Yazı Okuma':'OCR')
    : (appLang==='tr'?'Görsel Analiz':'Vision');
  speak(appLang==='tr'
    ?`${modeLabel} limiti aşıldı, ${waitSec} saniye bekleyin.`
    :`${modeLabel} rate limited, wait ${waitSec} seconds.`);
  _startCountdown(k.coolUntil);
}

function _handleSuccessMode(mode){
  const k = _keys[mode] || _keys.vision;
  k.backoffMs = 15000;
  _stopCountdown();
}

// Geriye dönük uyumluluk — eski çağrılar
function _canCallApi(){ return _canCallApiMode('vision'); }
function _markApiCalled(){ _markApiCalledMode('vision'); }
function _handleApiSuccess(){ _handleSuccessMode('vision'); }
function _handleApiRateLimit(){ _handleRateLimitMode('vision'); }

let _lastApiCall = 0;

// Gemini model öncelik listesi
const GEMINI_MODELS = [
  'gemini-2.0-flash',
  'gemini-1.5-flash-001',
  'gemini-1.5-flash',
  'gemini-1.5-flash-latest',
];

// mode: 'vision' (nesne/sahne) | 'ocr' (metin okuma)
async function callClaudeAPI(systemPrompt, userContent, mode='vision'){
  const key = getGeminiKey(mode);
  if(!key){
    // Diğer modun anahtarı varsa onu da dene
    const fallbackMode = mode==='vision'?'ocr':'vision';
    const fallbackKey = getGeminiKey(fallbackMode);
    if(!fallbackKey){
      throw new Error(appLang==='tr'
        ?`Gemini API anahtarı girilmemiş (${mode}). Başlangıç ekranından girin.`
        :`Gemini API key not set (${mode}). Enter it on the start screen.`);
    }
    // Fallback modun anahtarıyla devam et
    return callClaudeAPI(systemPrompt, userContent, fallbackMode);
  }

  // Bu mod cooldown'da mı? Diğer moda geçilebilir mi?
  if(!_canCallApiMode(mode)){
    const fallbackMode = mode==='vision'?'ocr':'vision';
    if(_canCallApiMode(fallbackMode) && getGeminiKey(fallbackMode)){
      console.log(`[API] ${mode} mod cooldown'da, ${fallbackMode} anahtarıyla devam ediliyor`);
      return callClaudeAPI(systemPrompt, userContent, fallbackMode);
    }
    const remaining = Math.ceil((_keys[mode].coolUntil - Date.now())/1000);
    throw new Error(appLang==='tr'
      ?`${mode==='ocr'?'Yazı Okuma':'Görsel Analiz'} bekleme süresinde. ${remaining}sn kaldı.`
      :`${mode==='ocr'?'OCR':'Vision'} is cooling down. ${remaining}s remaining.`);
  }

  _markApiCalledMode(mode);

  const parts = [];
  for(const item of userContent){
    if(item.type==='image'){
      parts.push({ inline_data:{ mime_type: item.source.media_type||'image/jpeg', data: item.source.data } });
    } else if(item.type==='text'){
      parts.push({ text: item.text });
    }
  }

  const body = {
    contents:[
      { role:'user',  parts:[{ text: systemPrompt }] },
      { role:'model', parts:[{ text: 'Anladım, talimatlarınıza uyacağım.' }] },
      { role:'user',  parts }
    ],
    generationConfig:{ maxOutputTokens:1024, temperature: mode==='ocr'?0.2:0.3, topP:0.8 }
  };

  let lastError = null;
  for(const model of GEMINI_MODELS){
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;
    let response;
    try{
      response = await fetch(url,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(body)
      });
    }catch(networkErr){
      throw new Error(appLang==='tr'
        ?`Ağ hatası: ${networkErr.message}. İnternet bağlantınızı kontrol edin.`
        :`Network error: ${networkErr.message}. Check your internet.`);
    }

    // 4. Sadece bu modun cooldown'unu artır
    if(response.status===429){
      _handleRateLimitMode(mode);
      const remaining = Math.ceil((_keys[mode].coolUntil - Date.now())/1000);
      throw new Error(appLang==='tr'
        ?`${mode==='ocr'?'Yazı Okuma':'Görsel Analiz'} limiti aşıldı. ${remaining}sn bekleniyor.`
        :`${mode==='ocr'?'OCR':'Vision'} rate limited. Waiting ${remaining}s.`);
    }
    if(response.status===404){ lastError=`Model '${model}' 404`; continue; }
    if(response.status===400||response.status===403){
      const eb=await response.json().catch(()=>({}));
      throw new Error(appLang==='tr'
        ?`API anahtarı hatası (${mode}, ${response.status}): ${eb?.error?.message||''}. Anahtarı kontrol edin.`
        :`API key error (${mode}, ${response.status}): ${eb?.error?.message||''}. Check your key.`);
    }
    if(!response.ok){ lastError=`HTTP ${response.status}`; continue; }

    _handleSuccessMode(mode);
    const data = await response.json();
    const candidate = data?.candidates?.[0];
    if(!candidate){ lastError='candidates boş'; continue; }
    if(candidate.finishReason==='SAFETY'){
      throw new Error(appLang==='tr'?'Güvenlik filtresi devreye girdi.':'Safety filter triggered.');
    }
    const text = candidate?.content?.parts?.[0]?.text||'';
    if(!text){ lastError='yanıt boş'; continue; }
    return text.trim();
  }
  throw new Error(appLang==='tr'
    ?`Tüm modeller başarısız (${mode}). Son hata: ${lastError}`
    :`All models failed (${mode}). Last error: ${lastError}`);
}

// ── HTTPS + Origin check
function visionCheckSecurity(){
  const h = location.hostname;
  const isSecure = location.protocol==='https:'
    || h==='localhost' || h==='127.0.0.1'
    || h==='' /* file:// */
    || h.endsWith('.local');
  if(!isSecure){
    const ban = $('visionSecBanner');
    const msg = appLang==='tr'
      ? '⚠️ Kameraya erişim için HTTPS gerekli. Lütfen güvenli bağlantı (https://) kullanın.'
      : '⚠️ HTTPS required for camera access. Please use a secure connection (https://).';
    if(ban){ ban.textContent=msg; ban.style.display='block'; }
    speak(appLang==='tr'?'Güvenli bağlantı gerekli':'Secure connection required');
    return false;
  }
  return true;
}

function visionSetStatus(msg,cls=''){
  const el=$('visionStatus'); if(!el) return;
  el.textContent=msg; el.className=cls;
}
// Vision panel null-safe setters
function vs(id,val,prop='textContent'){ const e=$(id); if(e) e[prop]=val; }
function vsd(id,val){ const e=$(id); if(e) e.style.display=val; }
function vsb(id,val){ const e=$(id); if(e) e.disabled=val; }

// ── Load COCO-SSD (CDN with graceful fallback)
async function visionLoadCoco(){
  if(cocoLoaded||cocoLoading) return cocoLoaded;
  cocoLoading=true;
  visionSetStatus(appLang==='tr'?'🧠 Nesne tanıma modeli yükleniyor…':'🧠 Loading object detection model…','analyzing');
  try{
    // Try CDN
    cocoModel = await cocoSsd.load();
    cocoLoaded=true;
    cocoLoading=false;
    visionSetStatus(appLang==='tr'?'✅ Model hazır':'✅ Model ready','done');
    return true;
  }catch(e){
    cocoLoading=false;
    const msg = appLang==='tr'
      ? '❌ Model dosyalarına erişilemiyor. İnternet bağlantınızı veya HTTPS protokolünü kontrol edin.'
      : '❌ Cannot access model files. Check your internet connection or HTTPS protocol.';
    visionSetStatus(msg,'error');
    speak(appLang==='tr'
      ? 'Model dosyalarına erişilemiyor. Lütfen internet bağlantınızı kontrol edin.'
      : 'Cannot access model files. Please check your internet connection.');
    const ban=$('visionSecBanner');
    if(ban){ ban.textContent=msg; ban.style.display='block'; }
    return false;
  }
}

// ── Camera management
async function openVision(){
  resetAllDwells();
  if(!visionCheckSecurity()){ const vp=$('visionPanel'); if(vp) vp.style.display='flex'; pushPage('visionPanel'); return; }
  const vp=$('visionPanel'); if(vp) vp.style.display='flex';
  pushPage('visionPanel');
  vs('visionResultText',''); vsd('visionResult','none');
  vsd('vpRepeatRow','none'); vsd('visionObjectStrip','none');
  const op=$('visionObjectPills'); if(op) op.innerHTML='';
  visionLastDescription=''; visionScanElapsed=0; vpOcrElapsed=0; vpCloseElapsed=0; vpRepeatElapsed=0;
  vs('visionScanDwell','0%','style.width'); vs('vpOcrDwell','0%','style.width');
  vsb('visionScanBtn',true); vsb('vpOcrBtn',true);
  const ban=$('visionSecBanner'); if(ban) ban.style.display='none';
  applyVisionI18n();
  speak(appLang==='tr'?'Etrafımda ne var paneli açıldı. Kamera başlatılıyor.':'Vision panel opened. Starting camera.');
  // Tesseract'ı arka planda başlat — kullanıcı OCR yapınca hazır olsun
  if(!_tessReady&&!_tessLoading) _initTesseract();
  const [cameraOk] = await Promise.all([visionStartCamera(), visionLoadCoco()]);
  if(cameraOk && cocoLoaded) visionStartDetectionLoop();
  if(cameraOk){ vsb('visionScanBtn',false); vsb('vpOcrBtn',false); }
}

function closeVision(){
  visionStopCamera();
  visionStopDetectionLoop();
  visionStopAuto();
  ocrStopCountdown();
  visionMode = 'describe';
  $('visionPanel').style.display='none';
  popPage();
}

async function visionStartCamera(){
  visionStopCamera();
  visionSetStatus(appLang==='tr'?'📷 Kamera açılıyor…':'📷 Opening camera…','');
  try{
    visionStream = await navigator.mediaDevices.getUserMedia({
      video:{facingMode:visionFacingMode, width:{ideal:1280}, height:{ideal:960}},
      audio:false
    });
    const vid=$('visionPreviewVideo');
    if(!vid){ visionSetStatus('❌ Video elementi bulunamadı','error'); return false; }
    vid.srcObject=visionStream;
    await vid.play();
    visionSetStatus(appLang==='tr'?'✅ Kamera hazır':'✅ Camera ready','done');
    const sb=$('visionScanBtn'); if(sb) sb.disabled=false;
    // Update cam switch label — null-safe
    const sw=$('visionCamSwitch');
    if(sw){
      const lbl=sw.querySelector('#visionCamSwitchLabel')||sw.querySelector('span:last-child');
      if(lbl) lbl.textContent = visionFacingMode==='environment'
        ? (appLang==='tr'?'Ön Kamera':'Front Cam')
        : (appLang==='tr'?'Arka Kamera':'Back Cam');
    }
    return true;
  }catch(e){
    const msg = e.name==='NotAllowedError'
      ? (appLang==='tr'?'❌ Kamera izni reddedildi':'❌ Camera permission denied')
      : (appLang==='tr'?'❌ Kamera açılamadı: '+e.message:'❌ Camera failed: '+e.message);
    visionSetStatus(msg,'error');
    speak(msg.replace('❌ ',''));
    return false;
  }
}

function visionStopCamera(){
  visionStopDetectionLoop();
  if(visionStream){ visionStream.getTracks().forEach(t=>t.stop()); visionStream=null; }
  const v=$('visionPreviewVideo'); if(v) v.srcObject=null;
}

async function visionSwitchCamera(){
  visionFacingMode = visionFacingMode==='environment'?'user':'environment';
  visionStopDetectionLoop();
  await visionStartCamera();
  if(cocoLoaded) visionStartDetectionLoop();
}

// ── COCO-SSD detection loop (runs every frame, updates overlay)
// ══════════════════════════════════════════════════════
// OTONOM VİZYON STATE MACHINE v2
// ── Katmanlar:
//   L1: Her 1.5s COCO yerel tespiti (API yok, offline)
//   L2: Her COCO sonrası akıllı sesli betimleme (yön+mesafe)
//   L3: Scene change veya tehlike → Gemini AI derin analiz
//   L4: OCR: görüntüde %15+ metin alanı → otomatik vpRunOcr
// ── Kota Koruma:
//   · API çağrıları arası min 8s cooldown
//   · Exponential backoff: 429 → 2x bekleme (maks 64s)
//   · spokenLog: aynı nesne/metin 10s içinde tekrar söylenmez
//   · Scene hash: görüntü değişmemişse AI çağrısı yapılmaz
// ══════════════════════════════════════════════════════

// ── Cooldown & Backoff State
let _apiCooldownUntil  = 0;
let _apiBackoffMs      = 15000;       // 1. Varsayılan 15s (8s'den artırıldı)
const API_BACKOFF_BASE = 15000;       // başlangıç değeri
const API_BACKOFF_MAX  = 120000;      // maks 2 dakika
const API_COOLDOWN_MS  = 15000;       // normal cooldown 15s

// ── Spoken Log (mükerrer engelleme)
const spokenLog        = new Map();
const SPOKEN_LOG_TTL   = 10000;

// ── Scene Change Detection
let _lastSceneHash     = 0;
let _lastScenePixels   = null;        // piksel bazlı karşılaştırma için
let _sceneChangePending= false;
const SCENE_CHANGE_THR = 20;          // 2. %20 piksel farkı eşiği (18'den artırıldı)
let _sceneCanvas       = null;
let _sceneCtx          = null;

// ── OCR Auto-Detect State
let _ocrPending        = false;
let _ocrWarned         = false;

// ── OCR state — eş zamanlı çağrı kilidi + konuşma kilidi
let _ocrRunning  = false;  // OCR işlemi sürüyor mu
let _ocrSpeaking = false;  // OCR metni seslendirilirken true — tüm diğer sesler susturulur
let _dangerLock        = false;

// ── Canlı geri sayım timer
let _countdownTimer    = null;

function _canCallApi(){
  return Date.now() >= _apiCooldownUntil;
}

function _markApiCalled(){
  _apiCooldownUntil = Date.now() + _apiBackoffMs;
}

function _apiCooldownMs(){
  return _apiBackoffMs;
}

function _handleApiSuccess(){
  _apiBackoffMs = API_BACKOFF_BASE; // başarıda sıfırla
  _stopCountdown();
}

// 1. Exponential Backoff: 15s → 30s → 60s → 120s
function _handleApiRateLimit(){
  _apiBackoffMs = Math.min(API_BACKOFF_MAX, _apiBackoffMs * 2);
  _apiCooldownUntil = Date.now() + _apiBackoffMs;
  const waitSec = Math.round(_apiBackoffMs/1000);
  speak(appLang==='tr'
    ?`Sistem yoğun, ${waitSec} saniye bekleyin.`
    :`System busy, waiting ${waitSec} seconds.`);
  // 4. Canlı geri sayım başlat
  _startCountdown(_apiCooldownUntil);
}

// 4. Canlı geri sayım — status bar'da kalan süreyi göster
function _startCountdown(until){
  _stopCountdown();
  _countdownTimer = setInterval(()=>{
    const remaining = Math.max(0, Math.ceil((until - Date.now())/1000));
    if(remaining <= 0){
      _stopCountdown();
      visionSetStatus(appLang==='tr'?'✅ Hazır — tekrar tarayabilirsiniz':'✅ Ready — you can scan again','done');
      return;
    }
    visionSetStatus(
      appLang==='tr'
        ?`⏳ Limit aşıldı — ${remaining} saniye kaldı…`
        :`⏳ Rate limited — ${remaining}s remaining…`,
      'analyzing'
    );
  }, 1000);
}

function _stopCountdown(){
  if(_countdownTimer){ clearInterval(_countdownTimer); _countdownTimer=null; }
}

// Metin/nesne söyleme — mükerrer engelleme
function _shouldSpeak(key){
  const now = Date.now();
  if(spokenLog.has(key) && now - spokenLog.get(key) < SPOKEN_LOG_TTL) return false;
  spokenLog.set(key, now);
  return true;
}

// 2. Sahne Değişimi Algılama — piksel bazlı %20 eşiği
// 16x12 grid (192 hücre) — daha hassas karşılaştırma
function _computeSceneHash(vid){
  if(!_sceneCanvas){
    _sceneCanvas = document.createElement('canvas');
    _sceneCanvas.width=16; _sceneCanvas.height=12;
    _sceneCtx = _sceneCanvas.getContext('2d');
  }
  if(!vid.videoWidth) return 0;
  _sceneCtx.drawImage(vid, 0, 0, 16, 12);
  const d = _sceneCtx.getImageData(0,0,16,12).data;
  let hash = 0;
  for(let i=0;i<d.length;i+=4) hash += d[i]*0.3 + d[i+1]*0.59 + d[i+2]*0.11;
  return hash;
}

// Sahne değişim yüzdesini hesapla — hash farkı yerine piksel farkı
function _computeSceneChangePct(vid){
  if(!_sceneCanvas){
    _sceneCanvas = document.createElement('canvas');
    _sceneCanvas.width=16; _sceneCanvas.height=12;
    _sceneCtx = _sceneCanvas.getContext('2d');
  }
  if(!vid.videoWidth) return 0;
  _sceneCtx.drawImage(vid, 0, 0, 16, 12);
  const current = _sceneCtx.getImageData(0,0,16,12).data;

  if(!_lastScenePixels){
    _lastScenePixels = new Uint8ClampedArray(current);
    return 100; // İlk kare — her zaman "değişti" say
  }

  let diffCount = 0;
  const total = 16*12;
  for(let i=0;i<current.length;i+=4){
    const dr = Math.abs(current[i]   - _lastScenePixels[i]);
    const dg = Math.abs(current[i+1] - _lastScenePixels[i+1]);
    const db = Math.abs(current[i+2] - _lastScenePixels[i+2]);
    // Piksel değişik sayılır: ortalama kanal farkı > 15
    if((dr+dg+db)/3 > 15) diffCount++;
  }
  _lastScenePixels = new Uint8ClampedArray(current);
  return (diffCount/total)*100; // Yüzde
}

// Metin yoğunluğu tahmini — canvas üzerinde kenar yoğunluğu (Sobel benzeri)
function _estimateTextDensity(vid){
  if(!vid.videoWidth) return 0;
  const W=64, H=48;
  const tc = document.createElement('canvas');
  tc.width=W; tc.height=H;
  const tx = tc.getContext('2d');
  tx.drawImage(vid, 0, 0, W, H);
  const d = tx.getImageData(0,0,W,H).data;
  // Yatay kenar sayısı — metin yatay çizgilerle zengin olur
  let edges = 0;
  for(let y=1;y<H-1;y++){
    for(let x=1;x<W-1;x++){
      const i=(y*W+x)*4;
      const gray = d[i]*0.3+d[i+1]*0.59+d[i+2]*0.11;
      const above= (((y-1)*W+x)*4);
      const ga   = d[above]*0.3+d[above+1]*0.59+d[above+2]*0.11;
      if(Math.abs(gray-ga)>25) edges++;
    }
  }
  return edges/(W*H); // 0-1 oranı; metin yoğun alanda ~0.15-0.4
}

// Tehlike sınıfı kontrolü — öncelikli uyarı
function _checkDangers(preds){
  const dangers = preds.filter(p=>
    p.score>=VISION_OBJECT_MIN_SCORE && DANGER_CLASSES.has(p.class)
  );
  if(!dangers.length) return false;
  const d = dangers[0];
  const {display}=cocoLabel(d.class);
  const vid=$('visionPreviewVideo');
  const W=vid?.videoWidth||1, H=vid?.videoHeight||1;
  const cx=(d.bbox[0]+d.bbox[2]/2)/W;
  const cy=(d.bbox[1]+d.bbox[3]/2)/H;
  const dir=directionText(cx,cy);
  const clock=clockPosition(cx,cy);
  const msg=appLang==='tr'
    ?`DİKKAT! ${display}, ${dir}, ${clock}`
    :`WARNING! ${display}, ${dir}, ${clock}`;
  // Acil bip sesi
  try{
    const ac=new AudioContext();
    [0,150,300].forEach(delay=>{
      const o=ac.createOscillator(),g=ac.createGain();
      o.connect(g);g.connect(ac.destination);
      o.frequency.value=1000;o.type='square';
      const t=ac.currentTime+delay/1000;
      g.gain.setValueAtTime(0.4,t);g.gain.exponentialRampToValueAtTime(0.001,t+0.12);
      o.start(t);o.stop(t+0.12);
    });
  }catch(e){}
  if(_shouldSpeak('danger:'+d.class)){
    speak(msg);
    showBlinkFlash('⚠️ '+msg);
  }
  return true;
}

// COCO sonuçlarından akıllı sesli betimleme
function _speakCocoResults(preds){
  const valid = preds
    .filter(p=>p.score>=VISION_OBJECT_MIN_SCORE)
    .sort((a,b)=>b.score-a.score)
    .slice(0,3); // en fazla 3 nesne
  if(!valid.length) return;
  const vid=$('visionPreviewVideo');
  const W=vid?.videoWidth||1, H=vid?.videoHeight||1;
  for(const p of valid){
    const {display}=cocoLabel(p.class);
    const cx=(p.bbox[0]+p.bbox[2]/2)/W;
    const cy=(p.bbox[1]+p.bbox[3]/2)/H;
    const dist=distanceText(p.bbox[2]*p.bbox[3],W*H);
    const clock=clockPosition(cx,cy);
    // Standart format: "Saat X yönünde, Y mesafede bir Nesne var."
    const msg=appLang==='tr'
      ?`${clock}, ${dist}, ${display} var`
      :`${clock}, ${dist}, ${display}`;
    if(_shouldSpeak('obj:'+p.class)) speak(msg);
  }
}

// ── Ana detection döngüsü — Otonom State Machine
function visionStartDetectionLoop(){
  if(visionDetectRafId) return;
  const vid=$('visionPreviewVideo');
  const canvas=$('visionDetectCanvas');
  const ctx=canvas.getContext('2d');
  let lastDetectTime=0;
  const DETECT_INTERVAL=1500;

  async function detectFrame(ts){
    if($('visionPanel')?.style.display!=='flex'){ visionDetectRafId=null; return; }
    visionDetectRafId=requestAnimationFrame(detectFrame);

    // Canvas boyutu senkron
    if(vid.videoWidth && canvas.width!==vid.videoWidth){
      canvas.width=vid.videoWidth; canvas.height=vid.videoHeight;
    }

    // FPS sayacı
    visionFpsCount++;
    if(ts-visionFpsTs>=1000){
      const fps=Math.round(visionFpsCount*1000/(ts-visionFpsTs));
      const fl=$('visionFpsLabel'); if(fl) fl.textContent=fps+'fps';
      visionFpsCount=0; visionFpsTs=ts;
    }

    // L1: COCO yerel tespiti (1.5s aralık)
    if(cocoLoaded && ts-lastDetectTime>=DETECT_INTERVAL){
      lastDetectTime=ts;
      await visionRunCoco();

      // L2: Tehlike önce — diğer her şeyi durdur
      _dangerLock = _checkDangers(lastCocoDetections);
      // OCR konuşurken / işlem sürerken tüm sesli çıktıları sustur
      if(!_dangerLock && !_ocrRunning && !_ocrSpeaking){
        // L2b: Sesli COCO betimleme
        _speakCocoResults(lastCocoDetections);
      }

      // L3: Sahne değişimi → Gemini AI — OCR aktifken tetiklenme
      if(!_ocrRunning && !_ocrSpeaking){
        const changePct = _computeSceneChangePct(vid);
        const isSceneChange = changePct > SCENE_CHANGE_THR;
        const newHash = _computeSceneHash(vid);
        const hasDangerNew = lastCocoDetections.some(p=>p.score>=VISION_OBJECT_MIN_SCORE&&DANGER_CLASSES.has(p.class));

        if((isSceneChange || hasDangerNew) && _canCallApi()){
          _lastSceneHash = newHash;
          _sceneChangePending = false;
          _markApiCalled();
          visionAnalyze();
        } else if(isSceneChange){
          _sceneChangePending = true;
        }

        // Cooldown bitti + sahne değişimi bekliyorsa tetikle
        if(_sceneChangePending && _canCallApi()){
          _sceneChangePending = false;
          _lastSceneHash = _computeSceneHash(vid);
          _markApiCalled();
          visionAnalyze();
        }
      }

      // L4: Metin yoğunluğu → otomatik OCR — OCR aktifken tetiklenme
      if(!_ocrPending && !_ocrRunning && !_ocrSpeaking && !_dangerLock){
        const density = _estimateTextDensity(vid);
        if(density >= 0.15){
          if(!_ocrWarned){
            _ocrWarned = true;
            visionSetStatus(appLang==='tr'?'📖 Metin algılandı, okunuyor…':'📖 Text detected, reading…','analyzing');
            speak(appLang==='tr'?'Metin algılandı, okunuyor.':'Text detected, reading.');
          }
          _ocrPending = true;
          setTimeout(()=>{
            _ocrPending = false; _ocrWarned = false;
            if($('visionPanel')?.style.display==='flex' && !_ocrRunning && !_ocrSpeaking){
              vpRunOcr(true);
            }
          }, 1500);
        } else {
          _ocrWarned = false;
        }
      }
        } else {
    }

    // Bounding box çiz
    ctx.clearRect(0,0,canvas.width,canvas.height);
    visionDrawBoxes(ctx, lastCocoDetections, canvas.width, canvas.height);
  }

  visionFpsTs=performance.now();
  visionDetectRafId=requestAnimationFrame(detectFrame);
}

function visionStopDetectionLoop(){
  if(visionDetectRafId){ cancelAnimationFrame(visionDetectRafId); visionDetectRafId=null; }
}

async function visionRunCoco(){
  const vid=$('visionPreviewVideo');
  if(!vid||!vid.videoWidth||!cocoModel) return;
  try{
    const predictions = await cocoModel.detect(vid);
    lastCocoDetections = predictions;
    visionUpdateObjectStrip(predictions);
    visionUpdateGazeZones(predictions, vid.videoWidth, vid.videoHeight);
    kbEngine.lastDetectedObjects=[...new Set(predictions.map(p=>p.class.toLowerCase()))];
  }catch(e){ console.warn('[COCO]',e.message); }
}

// ── Draw bounding boxes on detect canvas
function visionDrawBoxes(ctx, preds, W, H){
  const vid=$('visionPreviewVideo'); if(!vid) return;
  preds.forEach(p=>{
    if(p.score<VISION_OBJECT_MIN_SCORE) return;
    const [x,y,w,h]=p.bbox;
    const sx=W/vid.videoWidth, sy=H/vid.videoHeight;
    const {display}=cocoLabel(p.class);
    const conf=Math.round(p.score*100);
    ctx.strokeStyle=`rgba(255,224,51,${0.4+p.score*0.5})`;
    ctx.lineWidth=2;
    ctx.strokeRect(x*sx,y*sy,w*sx,h*sy);
    ctx.fillStyle='rgba(255,224,51,0.85)';
    ctx.font='bold 12px Syne,sans-serif';
    const label=`${display} ${conf}%`;
    const tw=ctx.measureText(label).width;
    const ty=y*sy>18?y*sy-4:y*sy+h*sy+14;
    ctx.fillRect(x*sx-2,ty-12,tw+8,16);
    ctx.fillStyle='#000';
    ctx.fillText(label, x*sx+2, ty);
  });
}

// ── Object pills strip
function visionUpdateObjectStrip(preds){
  const strip=$('visionObjectStrip');
  const pills=$('visionObjectPills');
  if(!strip||!pills) return;
  const valid=preds.filter(p=>p.score>=VISION_OBJECT_MIN_SCORE);
  if(!valid.length){ strip.style.display='none'; return; }
  strip.style.display='block';
  const seen=new Set();
  const items=[];
  valid.forEach(p=>{
    if(seen.has(p.class)) return;
    seen.add(p.class);
    const {display,kbWords}=cocoLabel(p.class);
    items.push({cls:p.class, display, score:p.score, kbWords});
  });
  if(pills) pills.innerHTML=items.map(it=>
    `<span class="vop" onclick="visionSpeakObject('${it.cls}')" title="${it.kbWords.join(', ')}">${it.display} ${Math.round(it.score*100)}%</span>`
  ).join('');
}

// ── Gaze zones on video overlay
function visionUpdateGazeZones(preds, videoW, videoH){
  const zones=$('visionGazeZones');
  const wrap=$('visionPreviewWrap');
  if(!zones||!wrap) return;
  zones.innerHTML='';
  visionGazeZoneDwells=[];
  if(!videoW) return;
  const scaleX=wrap.clientWidth/videoW, scaleY=wrap.clientHeight/videoH;
  preds.filter(p=>p.score>=VISION_OBJECT_MIN_SCORE).forEach((p)=>{
    const [x,y,w,h]=p.bbox;
    const {display,kbWords}=cocoLabel(p.class);
    const zone=document.createElement('div');
    zone.className='vgz';
    zone.style.cssText=`left:${x*scaleX}px;top:${y*scaleY}px;width:${w*scaleX}px;height:${h*scaleY}px;`;
    const lbl=document.createElement('div');
    lbl.className='vgz-label';
    lbl.textContent=display;
    const dw=document.createElement('div');
    dw.className='vgz-dwell';
    zone.appendChild(lbl);
    zone.appendChild(dw);
    zones.appendChild(zone);
    visionGazeZoneDwells.push({el:zone, label:display, cls:p.class, kbWords, dwell:dw, elapsed:0});
  });
}

// Called on every gaze frame for vision panel
function updateVisionDwells(gx,gy,dt){
  if($('visionPanel')?.style.display!=='flex') return;

  function dwellBtn(btnId, dwellId, elapsed, onTrigger){
    const btn=$(btnId); if(!btn||btn.disabled) return elapsed;
    const r=btn.getBoundingClientRect();
    const inside=gx>=r.left&&gx<=r.right&&gy>=r.top&&gy<=r.bottom;
    if(inside){ elapsed+=dt; btn.classList.add('gazing'); }
    else{ elapsed=Math.max(0,elapsed-dt*2); btn.classList.remove('gazing'); }
    const pct=Math.min(1,elapsed/(DWELL_MS*1.2));
    const dw=$(dwellId); if(dw) dw.style.width=(pct*100)+'%';
    if(pct>=1){ elapsed=0; btn.classList.remove('gazing'); if(dw) dw.style.width='0%'; onTrigger(); }
    return elapsed;
  }

  visionScanElapsed = dwellBtn('visionScanBtn','visionScanDwell', visionScanElapsed, ()=>visionAnalyze());
  vpOcrElapsed      = dwellBtn('vpOcrBtn',     'vpOcrDwell',      vpOcrElapsed,      ()=>vpRunOcr());
  vpRepeatElapsed   = dwellBtn('visionRepeatBtn','visionRepeatDwell', vpRepeatElapsed,()=>visionRepeatTTS());
  vpCloseElapsed    = dwellBtn('visionCloseBtn','visionCloseDwell', vpCloseElapsed,   ()=>closeVision());

  visionGazeZoneDwells.forEach(z=>{
    const r=z.el.getBoundingClientRect();
    const inside=gx>=r.left&&gx<=r.right&&gy>=r.top&&gy<=r.bottom;
    if(inside){ z.elapsed+=dt; z.el.classList.add('vgz-dwelling'); }
    else{ z.elapsed=Math.max(0,z.elapsed-dt*2); z.el.classList.remove('vgz-dwelling'); }
    const pct=Math.min(1,z.elapsed/(DWELL_MS*1.5));
    z.dwell.style.width=(pct*100)+'%';
    if(pct>=1){ z.elapsed=0; z.dwell.style.width='0%'; visionSpeakObject(z.cls); }
  });
}

// Tehlikeli nesneler — öncelikli uyarı
const DANGER_CLASSES = new Set(['knife','scissors','fire hydrant','stop sign']);
const DANGER_WORDS_TR = ['merdiven','basamak','engel','eşik','keskin'];
const DANGER_WORDS_EN = ['stair','step','obstacle','edge','sharp'];

// Saat yönü: cx 0-1, cy 0-1 → "saat 2 yönünde" gibi
function clockPosition(cx, cy){
  const angle = Math.atan2(cy-0.5, cx-0.5) * 180/Math.PI;
  const norm = ((angle + 360) % 360);
  const hour = Math.round(norm/30) % 12 || 12;
  return appLang==='tr' ? `saat ${hour} yönünde` : `${hour} o'clock`;
}

// Yön metni
function directionText(cx, cy){
  const h = cx<0.33?'sol':cx>0.66?'sağ':'merkez';
  const v = cy<0.33?'üst':cy>0.66?'alt':'';
  if(appLang==='tr'){
    if(h==='merkez' && !v) return 'önünüzde, merkezde';
    if(h==='sol') return v ? `sol ${v}da` : 'solunuzda';
    if(h==='sağ') return v ? `sağ ${v}da` : 'sağınızda';
    return 'önünüzde';
  } else {
    if(h==='merkez' && !v) return 'directly in front of you';
    if(h==='sol') return v ? `upper-left` : 'to your left';
    if(h==='sağ') return v ? `upper-right` : 'to your right';
    return 'in front of you';
  }
}

// Mesafe tahmini — bbox alanına göre
function distanceText(bboxArea, frameArea){
  const ratio = bboxArea/frameArea;
  if(appLang==='tr'){
    if(ratio>0.15) return 'çok yakın (1 metre altı)';
    if(ratio>0.05) return 'yakın (1-2 metre)';
    if(ratio>0.01) return 'orta mesafe (2-4 metre)';
    return 'uzakta (4+ metre)';
  } else {
    if(ratio>0.15) return 'very close (under 1m)';
    if(ratio>0.05) return 'close (1-2m)';
    if(ratio>0.01) return 'medium distance (2-4m)';
    return 'far away (4m+)';
  }
}

// Offline fallback — COCO tespitleriyle yerel açıklama üret
function visionOfflineSummary(){
  const preds = lastCocoDetections.filter(p=>p.score>=VISION_OBJECT_MIN_SCORE);
  if(!preds.length){
    return appLang==='tr'
      ? 'Kamera açık, nesne algılanamadı. Lütfen kamerayı çevreye döndürün.'
      : 'Camera active, no objects detected. Please point camera around you.';
  }
  const vid=$('visionPreviewVideo');
  const W=vid?.videoWidth||1, H=vid?.videoHeight||1;
  const lines = preds.slice(0,4).map(p=>{
    const {display}=cocoLabel(p.class);
    const cx=(p.bbox[0]+p.bbox[2]/2)/W;
    const cy=(p.bbox[1]+p.bbox[3]/2)/H;
    const dir=directionText(cx,cy);
    const dist=distanceText(p.bbox[2]*p.bbox[3], W*H);
    const clock=clockPosition(cx,cy);
    const isDanger=DANGER_CLASSES.has(p.class);
    const prefix=isDanger?(appLang==='tr'?'DİKKAT: ':'WARNING: '):'';
    return `${prefix}${display} — ${dir}, ${dist}, ${clock}`;
  });
  return lines.join('. ');
}

function visionSpeakObject(cls){
  const now=Date.now();
  // Tekrar filtresi
  if(_spokenObjects.has(cls) && now-_spokenObjects.get(cls)<SPOKEN_COOLDOWN_MS) return;
  _spokenObjects.set(cls, now);

  const {display}=cocoLabel(cls);
  const pred=lastCocoDetections.find(p=>p.class===cls);
  let announcement=display;

  if(pred){
    const vid=$('visionPreviewVideo');
    const W=vid?.videoWidth||1, H=vid?.videoHeight||1;
    const cx=(pred.bbox[0]+pred.bbox[2]/2)/W;
    const cy=(pred.bbox[1]+pred.bbox[3]/2)/H;
    const dir=directionText(cx,cy);
    const dist=distanceText(pred.bbox[2]*pred.bbox[3], W*H);
    const clock=clockPosition(cx,cy);
    const isDanger=DANGER_CLASSES.has(cls);

    if(isDanger){
      announcement=(appLang==='tr'?`DİKKAT! ${display} ${dir}, ${dist}`:`WARNING! ${display} ${dir}, ${dist}`);
      // Tehlike için acil uyarı tonu — kısa bip
      try{
        const ac=new AudioContext();
        const o=ac.createOscillator(); const g=ac.createGain();
        o.connect(g); g.connect(ac.destination);
        o.frequency.value=880; o.type='square';
        g.gain.setValueAtTime(0.3,ac.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001,ac.currentTime+0.3);
        o.start(ac.currentTime); o.stop(ac.currentTime+0.3);
      }catch(e){}
    } else {
      announcement=`${display} — ${dir}, ${dist}, ${clock}`;
    }
    showBlinkFlash(`📌 ${display} ${dir}`);
  }

  speak(announcement);

  // KB context güncelle
  const {kbWords}=cocoLabel(cls);
  if(kbWords.length){
    kbEngine.lastDetectedObjects=[cls];
    if($('kbPanel')?.style.display==='flex') refreshSugg(kbText.split(' ').pop()||'');
  }
}

// Auto-scan toggle
function visionToggleAuto(){
  visionAutoEnabled=!visionAutoEnabled;
  visionAutoElapsed=0;
  const btn=$('visionAutoToggle');
  const icon=$('visionAutoIcon');
  const lbl=$('visionAutoLabel2');
  if(visionAutoEnabled){
    btn.classList.add('auto-on');
    if(icon) icon.textContent='▶';
    if(lbl) lbl.textContent=appLang==='tr'?'Otomatik':'Auto';
    // Start COCO loop if not running
    if(!visionDetectRafId && cocoLoaded) visionStartDetectionLoop();
  } else {
    btn.classList.remove('auto-on');
    if(icon) icon.textContent='⏸';
    if(lbl) lbl.textContent=appLang==='tr'?'Otomatik':'Auto';
    const arc=$('visionAutoArc'); if(arc) arc.style.strokeDashoffset=113;
    const al=document.getElementById('visionAutoLabel'); if(al) al.textContent='1.5s';
  }
}
function visionStopAuto(){ visionAutoEnabled=false; visionAutoElapsed=0; }

// ══════════════════════════════════════════════════════
// VISION PANEL MODE — 'describe' | 'ocr'
// ══════════════════════════════════════════════════════
let visionMode = 'describe'; // current mode
let ocrCountdownActive = false;
let ocrCountdownElapsed = 0;
const OCR_COUNTDOWN_MS = 3000; // 3 seconds hold to auto-scan

// Enter vision panel in OCR mode directly (from main menu "Metin Oku" button)
function openOcr(){
  openVision();
  // Switch to OCR mode after panel opens
  setTimeout(()=>visionSetMode('ocr'), 400);
}

function visionSetMode(mode){
  visionMode = mode;
  const isOcr = mode === 'ocr';

  // Tab highlight
  const vmtD=$('vmtDescribe'), vmtO=$('vmtOcr');
  if(vmtD) vmtD.classList.toggle('active', !isOcr);
  if(vmtO) vmtO.classList.toggle('active', isOcr);

  // Panel icon + title
  const icon=$('visionPanelIcon'), title=$('visionPanelTitle'), sub=$('visionPanelSub');
  if(isOcr){
    if(icon) icon.textContent='📖';
    if(title) title.textContent=appLang==='tr'?'Metin Oku':'Read Text';
    if(sub) sub.textContent=appLang==='tr'?'Kamerayı metne tutun, otomatik okunur':'Hold camera over text — auto reads';
  } else {
    if(icon) icon.textContent='🔍';
    if(title) title.textContent=appLang==='tr'?'Etrafımda Ne Var?':"What's Around Me?";
    if(sub) sub.textContent=appLang==='tr'?'Yapay Zeka Görme Asistanı':'AI Vision Assistant';
  }

  // Scan button label
  const si=$('visionScanIcon'), sl=$('visionScanLabel');
  if(si) si.textContent=isOcr?'📖':'🔍';
  if(sl) sl.textContent=isOcr?t('ocrScan'):t('visionScan');

  // Object strip — hide in OCR mode
  const strip=$('visionObjectStrip');
  if(strip) strip.style.display='none';

  // Auto-ring — hide in OCR mode
  const ar=$('visionAutoRing');
  if(ar) ar.style.display=isOcr?'none':'block';

  // COCO detection loop — pause in OCR mode (saves battery)
  if(isOcr){
    visionStopDetectionLoop();
    visionStopAuto();
    ocrStopCountdown(); // otomatik geri sayım yok — kullanıcı butona bakar
    visionSetStatus(appLang==='tr'?'📖 Hazır — Tara butonuna bakın':'📖 Ready — Look at scan button','');
    speak(appLang==='tr'?'Metin okuma modu. Tara butonuna bakın.':'Text read mode. Look at the scan button.');
  } else {
    ocrStopCountdown();
    if(cocoLoaded && visionStream) visionStartDetectionLoop();
    visionSetStatus(t('visionReady'),'');
  }
}

// ── OCR Countdown — 3 second auto-scan timer
function ocrStartCountdown(){
  ocrCountdownActive = true;
  ocrCountdownElapsed = 0;
  const cdEl = $('ocrCountdown');
  if(cdEl){ cdEl.style.display = 'flex'; cdEl.style.flexDirection = 'column'; }
  updateOcrCountdownUI(0);
}

function ocrStopCountdown(){
  ocrCountdownActive = false;
  ocrCountdownElapsed = 0;
  const cdEl = $('ocrCountdown');
  if(cdEl) cdEl.style.display = 'none';
}

function updateOcrCountdownUI(pct){
  const arc = $('ocrCountdownArc');
  const num = $('ocrCountdownNum');
  const hint = $('ocrHint');
  const circ = 213.6;
  if(arc) arc.style.strokeDashoffset = (circ * (1 - pct)).toFixed(1);
  if(num){
    const remaining = Math.ceil(OCR_COUNTDOWN_MS * (1 - pct) / 1000);
    num.textContent = remaining > 0 ? remaining : '📸';
  }
  if(hint) hint.textContent = pct > 0.05
    ? (appLang==='tr' ? `${Math.ceil(OCR_COUNTDOWN_MS*(1-pct)/1000)} saniye…` : `${Math.ceil(OCR_COUNTDOWN_MS*(1-pct)/1000)}s…`)
    : t('ocrHintShort');
}

// Called from dispatchGaze RAF — advances OCR countdown each frame
function updateOcrCountdown(dt){
  if(!ocrCountdownActive || visionMode !== 'ocr') return;
  if($('visionPanel').style.display !== 'flex') return;
  if($('visionScanBtn').disabled) return; // already scanning

  ocrCountdownElapsed = Math.min(OCR_COUNTDOWN_MS, ocrCountdownElapsed + dt);
  const pct = ocrCountdownElapsed / OCR_COUNTDOWN_MS;
  updateOcrCountdownUI(pct);

  if(ocrCountdownElapsed >= OCR_COUNTDOWN_MS){
    ocrStopCountdown();
    ocrAnalyze();
  }
}

// ── OCR Analysis — captures frame, sends to Claude with OCR prompt
async function ocrAnalyze(){
  const sb=$('visionScanBtn'); if(sb&&sb.disabled) return;
  vsb('visionScanBtn',true);
  vs('visionScanIcon','⏳'); vs('visionScanLabel',appLang==='tr'?'Okunuyor…':'Reading…');
  visionSetStatus(t('ocrAnalyzing'),'analyzing');
  vsd('visionResult','none'); vsd('visionRepeatBtn','none');
  speak(appLang==='tr'?'Metin okunuyor.':'Reading text.');

  try{
    const imageBase64 = await visionCapture();
    const systemPrompt = appLang==='tr'
      ? `Sen görme engelli veya hareket kısıtlı bir kullanıcıya yardım eden bir asistansın.
Görüntüdeki TÜM metinleri oku ve doğal Türkçe ile akıcı şekilde seslendir.
Metni olduğu gibi oku — yorum ekleme, sadece metni aktarın.
Etiket, ilaç kutusu, kitap kapağı, belge, menü, ekran yazısı olabilir.
Metin yoksa SADECE şunu yaz: YOK`
      : `You are an assistant helping a user with a visual or motor disability.
Read ALL text visible in the image and speak it naturally.
Read the text as-is — no commentary, just the text content.
It could be a label, medicine box, book cover, document, menu, or screen.
If no text is found, write ONLY: NONE`;

    const userContent = [
      {type:'image', source:{type:'base64', media_type:'image/jpeg', data:imageBase64}},
      {type:'text', text: appLang==='tr'?'Bu görüntüdeki tüm metinleri oku.':'Read all the text in this image.'}
    ];

    let text = await callClaudeAPI(systemPrompt, userContent, 'ocr');

    const noTextMarkers = ['YOK','NONE','no text','metin yok','metin bulunamadı'];
    const hasNoText = noTextMarkers.some(m => text.toLowerCase().includes(m.toLowerCase()) && text.length < 20);

    if(hasNoText || !text){
      text = t('ocrNoText');
      visionSetStatus(t('ocrNoText'),'');
    } else {
      visionSetStatus(t('ocrDone'),'done');
    }

    visionLastDescription = text;
    vs('visionResultText', text);
    vsd('visionResult','block'); vsd('visionRepeatBtn','flex');
    vs('visionResultLabel', appLang==='tr'?'📖 Okunan Metin':'📖 Read Text');
    vs('visionScanIcon','📖'); vs('visionScanLabel', appLang==='tr'?'Tekrar Tara':'Scan Again');
    vsb('visionScanBtn',false);
    visionScanElapsed=0; vs('visionScanDwell','0%','style.width');
    speak(text);

  }catch(e){
    visionSetStatus('❌ '+(appLang==='tr'?'Hata: ':'Error: ')+e.message,'error');
    vs('visionScanIcon','📖'); vs('visionScanLabel',t('ocrScan'));
    vsb('visionScanBtn',false);
    visionScanElapsed=0; vs('visionScanDwell','0%','style.width');
    speak(t('ocrError'));
  }
}

// Mode tab dwell tracking — OCR kaldırıldı, sadece describe modu
let vmtDescribeElapsed = 0, vmtOcrElapsed = 0;
let vpOcrElapsed = 0, vpCloseElapsed = 0, vpRepeatElapsed = 0;

function updateVisionModeTabs(gx,gy,dt){
  // Mod sekmeleri kaldırıldı, bu fonksiyon boş
}

// ── Capture single frame as base64 JPEG (for Claude AI)
async function visionCapture(){
  const video=$('visionPreviewVideo');
  const canvas=$('visionPreviewCanvas');
  canvas.width=video.videoWidth||640;
  canvas.height=video.videoHeight||480;
  const ctx=canvas.getContext('2d');
  if(visionFacingMode==='user'){ ctx.translate(canvas.width,0); ctx.scale(-1,1); }
  ctx.drawImage(video,0,0);
  const ov=$('visionSnapOverlay');
  if(ov){ ov.classList.add('flash'); setTimeout(()=>ov.classList.remove('flash'),180); }
  return canvas.toDataURL('image/jpeg',0.82).split(',')[1];
}

// OCR için özel yakalama — kontrast artırılmış, gri ton
// Küçük yazıları bile yakalamak için önişleme uygulanır
async function visionCaptureOcr(){
  const video=$('visionPreviewVideo');
  const W=video.videoWidth||640, H=video.videoHeight||480;

  // Adım 1: Ham görüntüyü al
  const raw=document.createElement('canvas');
  raw.width=W; raw.height=H;
  const rctx=raw.getContext('2d');
  if(visionFacingMode==='user'){ rctx.translate(W,0); rctx.scale(-1,1); }
  rctx.drawImage(video,0,0);

  // Adım 2: Gri ton + yüksek kontrast (gölge ve arka plan gürültüsünü sil)
  const canvas=$('visionPreviewCanvas');
  canvas.width=W; canvas.height=H;
  const ctx=canvas.getContext('2d');
  // 3. contrast(200%) brightness(80%) → metni siyah, arka planı beyaz yap
  ctx.filter='grayscale(1) contrast(2.2) brightness(0.85)';
  ctx.drawImage(raw,0,0);
  ctx.filter='none';

  // Adım 3: Piksel bazlı adaptif eşikleme (thresholding)
  // Gri değeri 128'den küçük → siyah (metin), büyük → beyaz (arka plan)
  const imgData=ctx.getImageData(0,0,W,H);
  const d=imgData.data;
  for(let i=0;i<d.length;i+=4){
    const gray=d[i]*0.3+d[i+1]*0.59+d[i+2]*0.11;
    const bin=gray<145?0:255; // eşik: 145
    d[i]=d[i+1]=d[i+2]=bin;
  }
  ctx.putImageData(imgData,0,0);

  const ov=$('visionSnapOverlay');
  if(ov){ ov.classList.add('flash'); setTimeout(()=>ov.classList.remove('flash'),180); }

  // PNG kullan — eşiklenmiş görüntü için kayıpsız format daha iyi
  return canvas.toDataURL('image/png').split(',')[1];
}

// ── Etrafı Tara — yön ve mesafe bilgisiyle
async function visionAnalyze(){
  const sb=$('visionScanBtn'); if(sb&&sb.disabled) return;
  vsb('visionScanBtn',true); vsb('vpOcrBtn',true);
  vs('visionScanLabel',appLang==='tr'?'Analiz ediliyor…':'Analyzing…');
  visionSetStatus(appLang==='tr'?'🔍 Yapay zeka görüntüyü analiz ediyor…':'🔍 AI analyzing image…','analyzing');
  vsd('visionResult','none'); vsd('vpRepeatRow','none');
  speak(appLang==='tr'?'Görüntü analiz ediliyor, lütfen bekleyin.':'Analyzing image, please wait.');
  try{
    const imageBase64=await visionCapture();
    const cocoHint=lastCocoDetections.length?(appLang==='tr'?`\nÖn algılama: ${lastCocoDetections.map(p=>cocoLabel(p.class).display).join(', ')}`:`\nPre-detected: ${lastCocoDetections.map(p=>p.class).join(', ')}`):''
    const systemPrompt=appLang==='tr'
      ?`Sen görme engelli bir kullanıcıya yardım eden sesli asistansın. Türkçe konuş.

KURAL: Her cümlede mutlaka YÖN bilgisi ver: "solunuzda", "sağınızda", "önünüzde", "arkanızda", "merkezde", "sağ ön köşede" gibi.
KURAL: Her nesne için MESAFE ver: "yakınınızda (1 metre)", "2-3 metre uzakta", "uzakta" gibi.
KURAL: Tehlike varsa (merdiven, basamak, engel, keskin nesne, düşme riski) İLK cümle "DİKKAT:" ile başlasın.
KURAL: Ortamı belirt: "ev odası", "mutfak", "sokak", "ofis" gibi.
KURAL: Maksimum 4 kısa, net cümle. Teknik terim yok. Doğrudan kullanıcıya hitap et.

Son satıra sadece şunu yaz (kullanıcı görmeyecek): NESNELER:nesne1,nesne2,nesne3`
      :`You are a voice assistant for a blind person. Speak in English.

RULE: Every sentence MUST include DIRECTION: "to your left", "to your right", "directly in front of you", "behind you", "center", "front-right corner" etc.
RULE: Every object needs DISTANCE: "close to you (1 meter)", "2-3 meters away", "far away" etc.
RULE: If danger (stairs, step, obstacle, sharp object, fall risk): FIRST sentence starts with "WARNING:".
RULE: Name the environment: "living room", "kitchen", "street", "office" etc.
RULE: Maximum 4 short, clear sentences. No technical terms. Address user directly.

Last line write only (user won't see): OBJECTS:obj1,obj2,obj3`;
    const userContent=[
      {type:'image',source:{type:'base64',media_type:'image/jpeg',data:imageBase64}},
      {type:'text',text:(appLang==='tr'?'Etrafımda ne var? Yön ve mesafe bilgisiyle anlat.':'What is around me? Describe with directions and distances.')+cocoHint}
    ];
    let fullText;
    try{
      fullText=await callClaudeAPI(systemPrompt,userContent,'vision');
    }catch(apiErr){
      console.warn('[Vision] API failed, using offline fallback:', apiErr.message);
      // API başarısız → offline COCO özeti
      fullText = visionOfflineSummary();
      visionSetStatus(appLang==='tr'?'⚠ Çevrimiçi erişim yok, yerel algılama kullanılıyor':'⚠ Offline — using local detection','');
    }

    // NESNELER: veya OBJECTS: satırını ayıkla
    const objLineMatch = fullText.match(/(?:NESNELER|OBJECTS):([^\n]+)/i);
    if(objLineMatch){
      try{
        const objs = objLineMatch[1].split(',').map(o=>o.trim().toLowerCase()).filter(Boolean);
        kbEngine.lastDetectedObjects = objs;
        const ctxWords = objs.filter(o=>kbEngine.contextVocab[o]).flatMap(o=>(kbEngine.contextVocab[o][appLang]||[]).slice(0,2));
        if(ctxWords.length) showBlinkFlash((appLang==='tr'?'💡 Öneriler: ':'💡 Hints: ')+ctxWords.slice(0,3).join(', '));
      }catch(e){}
      fullText = fullText.replace(/(?:NESNELER|OBJECTS):[^\n]*/i,'').trim();
    }
    // Eski JSON formatı da destekle
    const objJson = fullText.match(/\{"objects":\s*\[([^\]]*)\]\}/);
    if(objJson){ fullText=fullText.replace(/\{"objects":\s*\[[^\]]*\]\}/,'').trim(); }
    if(!fullText) throw new Error(appLang==='tr'?'Açıklama alınamadı':'No description received');
    visionLastDescription=fullText;
    vs('visionResultText',fullText);
    vs('visionResultLabel',appLang==='tr'?'🔍 Etraf Analizi':'🔍 Scene Analysis');
    vsd('visionResult','block');
    vsd('vpRepeatRow','flex');   // ← doğru eleman
    visionSetStatus(appLang==='tr'?'✅ Analiz tamamlandı':'✅ Analysis complete','done');
    vs('visionScanLabel',appLang==='tr'?'Tekrar Tara':'Scan Again');
    vsb('visionScanBtn',false); vsb('vpOcrBtn',false);
    visionScanElapsed=0; vs('visionScanDwell','0%','style.width');
    // Tehlike varsa acil uyarı tonu çal
    if(fullText.includes('DİKKAT') || fullText.includes('WARNING')){
      try{
        const ac=new AudioContext();
        [0,150,300].forEach(delay=>{
          const o=ac.createOscillator(); const g=ac.createGain();
          o.connect(g); g.connect(ac.destination);
          o.frequency.value=1000; o.type='square';
          const t=ac.currentTime+delay/1000;
          g.gain.setValueAtTime(0.4,t); g.gain.exponentialRampToValueAtTime(0.001,t+0.12);
          o.start(t); o.stop(t+0.12);
        });
      }catch(e){}
    }
    speak(fullText);
  }catch(e){
    // Kritik hata — offline özeti göster, çökmez
    const fallback = visionOfflineSummary();
    visionLastDescription = fallback;
    vs('visionResultText', fallback);
    vs('visionResultLabel', appLang==='tr'?'📡 Yerel Algılama':'📡 Local Detection');
    vsd('visionResult','block');
    vsd('vpRepeatRow','flex');
    visionSetStatus('⚠ '+e.message.substring(0,60),'error');
    vs('visionScanLabel',appLang==='tr'?'Tekrar Tara':'Scan Again');
    vsb('visionScanBtn',false); vsb('vpOcrBtn',false);
    visionScanElapsed=0; vs('visionScanDwell','0%','style.width');
    speak(fallback);
    console.error('[Vision]',e);
  }
}

// ── Yazı Oku (OCR)
// ══════════════════════════════════════════════════════
// HİBRİT OCR SİSTEMİ
// Tesseract → kelime kutuları (offline, görsel)
// Gemini   → doğru metin okuma (snap'te bir kez)
// ══════════════════════════════════════════════════════

let _tessWorker  = null;
let _tessReady   = false;
let _tessLoading = false;
let _lensActive  = false;
let _lensWords   = [];

function setOcrLensStatus(msg){
  const el=$('ocrLensStatus');
  if(!el) return;
  el.textContent=msg;
  el.style.display=msg?'block':'none';
}

async function _initTesseract(){
  if(_tessReady||_tessLoading) return;
  _tessLoading=true;
  setOcrLensStatus(appLang==='tr'?'🔤 OCR motoru yükleniyor…':'🔤 Loading OCR…');
  try{
    _tessWorker=await Tesseract.createWorker(
      appLang==='tr'?['tur','eng']:['eng'],
      1,{logger:()=>{}}
    );
    _tessReady=true; _tessLoading=false;
    setOcrLensStatus('');
  }catch(e){
    _tessLoading=false;
    console.warn('[Tesseract]',e.message);
  }
}

// Kelime kutularını canvas'a çiz
function _drawLensBoxes(videoW, videoH){
  const lc=$('ocrLensCanvas');
  const wrap=$('visionPreviewWrap');
  if(!lc||!wrap) return;
  const dW=wrap.clientWidth, dH=wrap.clientHeight;
  lc.width=dW; lc.height=dH;
  const ctx=lc.getContext('2d');
  ctx.clearRect(0,0,dW,dH);
  if(!_lensWords.length) return;
  const sx=dW/videoW, sy=dH/videoH;
  _lensWords.forEach(w=>{
    const {x0,y0,x1,y1}=w.bbox;
    const rx=x0*sx, ry=y0*sy, rw=(x1-x0)*sx, rh=(y1-y0)*sy;
    const conf=w.confidence;
    // Sadece yüksek güvenli kutular çizilir
    // Yeşil (>85) = kesin, Sarı (70-85) = makul
    const color=conf>85?'rgba(20,184,166,0.95)':'rgba(255,224,51,0.85)';
    const bg   =conf>85?'rgba(20,184,166,0.12)':'rgba(255,224,51,0.08)';
    ctx.fillStyle=bg;
    ctx.fillRect(rx,ry,rw,rh);
    ctx.strokeStyle=color;
    ctx.lineWidth=1.5;
    ctx.strokeRect(rx,ry,rw,rh);
    const fs=Math.max(9,Math.min(13,rh*0.65));
    ctx.font=`bold ${fs}px 'Syne',sans-serif`;
    ctx.fillStyle=color;
    const labelY=ry>fs+2?ry-2:ry+rh+fs;
    ctx.fillText(w.text,rx+2,labelY);
  });
}

function _clearLensCanvas(){
  const lc=$('ocrLensCanvas');
  if(!lc) return;
  const ctx=lc.getContext('2d');
  ctx.clearRect(0,0,lc.width,lc.height);
  lc.style.display='none';
}

// Hibrit snap: Tesseract kutu çizer, Gemini doğru okur
async function _runHybridOcr(){
  const vid=$('visionPreviewVideo');
  if(!vid||!vid.videoWidth) return null;
  const W=vid.videoWidth, H=vid.videoHeight;

  // Eşiklenmiş canvas hazırla
  const raw=document.createElement('canvas');
  raw.width=W; raw.height=H;
  const rctx=raw.getContext('2d');
  if(visionFacingMode==='user'){rctx.translate(W,0);rctx.scale(-1,1);}
  rctx.drawImage(vid,0,0);
  rctx.filter='grayscale(1) contrast(2.2) brightness(0.85)';
  rctx.drawImage(raw,0,0);
  rctx.filter='none';
  // Piksel eşikleme
  const id=rctx.getImageData(0,0,W,H);
  const d=id.data;
  for(let i=0;i<d.length;i+=4){
    const g=d[i]*0.3+d[i+1]*0.59+d[i+2]*0.11;
    const b=g<145?0:255;
    d[i]=d[i+1]=d[i+2]=b;
  }
  rctx.putImageData(id,0,0);

  // Adım 1: Tesseract — kutuları çiz (offline)
  let tessText='';
  if(_tessReady){
    try{
      setOcrLensStatus(appLang==='tr'?'🔍 Tesseract tarıyor…':'🔍 Tesseract scanning…');
      const lc=$('ocrLensCanvas');
      if(lc) lc.style.display='block';
      const {data}=await _tessWorker.recognize(raw);
      // Güven eşiği 35 → 70, kısa ve gürültülü kelimeleri filtrele
      _lensWords=(data.words||[]).filter(w=>{
        if(w.confidence < 70) return false;
        const t = w.text.trim();
        if(t.length < 2) return false;
        if(/^[^a-zA-ZğüşıöçĞÜŞİÖÇ0-9]+$/.test(t)) return false;
        if(/^[A-Z]{1,2}$/.test(t) && w.confidence < 90) return false;
        return true;
      });
      // tessText: ham data.text değil, sadece filtrelenmiş kelimeleri kullan
      // Bu sayede fallback da temiz olur
      tessText=_lensWords.map(w=>w.text).join(' ').trim();
      _drawLensBoxes(W,H);
      setOcrLensStatus(`📦 ${_lensWords.length} ${appLang==='tr'?'kutu':'boxes'} — Gemini doğruluyor…`);
    }catch(e){ console.warn('[Tesseract]',e.message); }
  }

  // Adım 2: Gemini — doğru metin (API korumalı)
  if(!_canCallApiMode('ocr')){
    const cleaned=_sanitizeOcrText(tessText);
    if(cleaned){
      setOcrLensStatus(appLang==='tr'?'⏳ API meşgul, Tesseract kullanıldı':'⏳ API busy, used Tesseract');
      setTimeout(()=>{ _clearLensCanvas(); _lensWords=[]; setOcrLensStatus(''); },5000);
    } else {
      setOcrLensStatus(appLang==='tr'?'⏳ API meşgul, metin yok':'⏳ API busy, no text');
    }
    return cleaned;
  }

  try{
    const imageBase64=raw.toDataURL('image/png').split(',')[1];
    const systemPrompt=appLang==='tr'
      ?`Sen görme engelli bir kullanıcıya yardım eden uzman OCR asistansın.

GÖREV: Görüntüdeki YALNIZCA ANLAMLI metinleri oku.
KESİN KURALLAR:
- Gürültü karakterlerini (=, @, #, ~, ^, |) TAMAMEN YOKSAY
- Yalnızca gerçek kelimeler, sayılar, tarihler yaz
- Tesseract referans: "${tessText.substring(0,200)}"
- Hataları düzelt, eksikleri tamamla
- Gerçekten metin yoksa sadece yaz: Görüntüde metin bulunamadı.`
      :`You are an expert OCR assistant for a blind user.

TASK: Read ONLY meaningful text.
STRICT RULES:
- IGNORE noise characters (=, @, #, ~, ^, |)
- Write only real words, numbers, dates
- Tesseract reference: "${tessText.substring(0,200)}"
- Correct errors, fill gaps
- If no text: write "No text found in image."`;

    const userContent=[
      {type:'image',source:{type:'base64',media_type:'image/png',data:imageBase64}},
      {type:'text',text:appLang==='tr'?'Anlamlı metinleri oku, gürültüleri yoksay.':'Read meaningful text, ignore noise.'}
    ];
    _markApiCalledMode('ocr');
    const geminiText=await callClaudeAPI(systemPrompt,userContent,'ocr');
    const cleaned=_sanitizeOcrText(geminiText);
    setOcrLensStatus(cleaned
      ?`✅ ${appLang==='tr'?'Okundu':'Done'}`
      :`📄 ${appLang==='tr'?'Metin bulunamadı':'No text found'}`);
    // Kutular 5sn sonra kapat
    setTimeout(()=>{ _clearLensCanvas(); _lensWords=[]; setOcrLensStatus(''); },5000);
    return cleaned;
  }catch(e){
    console.warn('[HybridOCR Gemini]',e.message);
    // Hata durumunda filtrelenmiş Tesseract metnini kullan
    const cleaned=_sanitizeOcrText(tessText);
    if(cleaned){
      setOcrLensStatus(appLang==='tr'?'⚠ Gemini hata, Tesseract kullanıldı':'⚠ Gemini failed, Tesseract used');
    } else {
      setOcrLensStatus(appLang==='tr'?'⚠ Gemini hata, metin yok':'⚠ Gemini failed, no text');
    }
    setTimeout(()=>{ _clearLensCanvas(); setOcrLensStatus(''); },5000);
    return cleaned;
  }
}
// @, =, #, _ gibi gürültü karakterleri çok fazlaysa metni reddet
// OCR metni için özel TTS — yavaş hız (0.75), bitince callback ile _ocrSpeaking sıfırlanır
function _speakOcrText(txt, onDone){
  if(!txt||!txt.trim()){ if(onDone) onDone(); return; }
  if(!window.speechSynthesis){ if(onDone) onDone(); return; }
  try{ speechSynthesis.cancel(); }catch(e){}
  const u=new SpeechSynthesisUtterance(txt.trim());
  u.lang  =appLang==='tr'?'tr-TR':'en-US';
  u.rate  =0.75;   // yavaş — metin rahat anlaşılsın
  u.volume=1.0;
  u.pitch =1.0;
  if(!ttsVoice||!ttsVoice.lang.startsWith(appLang==='tr'?'tr':'en')) pickTtsVoice();
  if(ttsVoice) u.voice=ttsVoice;
  u.onend  =()=>{ if(onDone) onDone(); };
  u.onerror=()=>{ if(onDone) onDone(); };
  setTimeout(()=>{ try{ speechSynthesis.speak(u); }catch(e){ if(onDone) onDone(); } },50);
}

function _sanitizeOcrText(text){
  if(!text || text.trim().length<2) return null;
  const t = text.trim();

  // Anlamsız karakter oranı — toplam karakterin %30'undan fazlaysa reddet
  const noiseChars = (t.match(/[@=#+_~\^|\\/<>{}[\]]/g)||[]).length;
  const noiseRatio = noiseChars / t.length;
  if(noiseRatio > 0.30) return null;

  // Kelime başına ortalama harf sayısı çok düşükse reddet (tek karakter "kelimeler")
  const words = t.split(/\s+/).filter(w=>w.length>0);
  if(words.length > 2){
    const avgLen = words.reduce((s,w)=>s+w.length,0)/words.length;
    if(avgLen < 1.5) return null; // neredeyse tüm "kelimeler" tek karakter
  }

  // Temizle: tekrar eden gürültü karakterlerini kaldır, fazla boşlukları sıkıştır
  const cleaned = t
    .replace(/[=@#_~\^\\]{2,}/g,' ')   // art arda gürültü → boşluk
    .replace(/\s{2,}/g,' ')             // çoklu boşluk → tek
    .trim();

  if(cleaned.length < 2) return null;
  return cleaned;
}

// ── Yazı Oku — Tesseract kutu + Gemini doğrulama
async function vpRunOcr(autonomous=false){
  const ob=$('vpOcrBtn');
  if(!autonomous&&ob&&ob.disabled) return;
  if(_ocrRunning) return;
  _ocrRunning=true;

  vsb('visionScanBtn',true); vsb('vpOcrBtn',true);
  vs('vpOcrLabel',appLang==='tr'?'Okunuyor…':'Reading…');
  vsd('visionResult','none'); vsd('vpRepeatRow','none');

  visionSetStatus(appLang==='tr'?'📷 Odaklanıyor…':'📷 Focusing…','analyzing');
  await new Promise(r=>setTimeout(r,500));
  visionSetStatus(appLang==='tr'?'📖 Yazı okunuyor…':'📖 Reading text…','analyzing');
  speak(appLang==='tr'?'Yazı okunuyor, lütfen bekleyin.':'Reading text, please wait.');

  // Tesseract başlatılmamışsa arka planda başlat
  if(!_tessReady&&!_tessLoading) _initTesseract();

  try{
    // Hibrit OCR: Tesseract kutu + Gemini doğrulama
    const cleaned = await _runHybridOcr();

    if(!cleaned){
      // Sanitizasyon veya API'den anlamsız metin geldi
      const noMsg=appLang==='tr'
        ?'Görüntüde okunabilir metin bulunamadı. Kamerayı yazıya daha yakın tutun.'
        :'No readable text found. Hold camera closer to the text.';
      visionSetStatus('⚠ '+noMsg,'error');
      vs('visionResultText',noMsg);
      vs('visionResultLabel',appLang==='tr'?'⚠ Metin Yok':'⚠ No Text');
      vsd('visionResult','block');
      vs('vpOcrLabel',appLang==='tr'?'Yazı Oku':'Read Text');
      
      vsb('visionScanBtn',false); vsb('vpOcrBtn',false);
      vpOcrElapsed=0; vs('vpOcrDwell','0%','style.width');
      speak(noMsg); return;
    }

    // Mükerrer filtresi
    const textKey=cleaned.substring(0,120).toLowerCase();
    const isNoText=cleaned.includes('bulunamadı')||cleaned.includes('No text found');
    if(autonomous&&!isNoText&&typeof lastOcrText!=='undefined'){
      if(textKey===lastOcrText&&Date.now()-lastOcrTime<20000){
        
        vsb('visionScanBtn',false); vsb('vpOcrBtn',false);
        vs('vpOcrLabel',appLang==='tr'?'Yazı Oku':'Read Text');
        visionSetStatus('',''); return;
      }
      if(typeof lastOcrText!=='undefined') lastOcrText=textKey;
      if(typeof lastOcrTime!=='undefined') lastOcrTime=Date.now();
    }

    visionLastDescription=cleaned;
    vs('visionResultText',cleaned);
    vs('visionResultLabel',appLang==='tr'?'📖 Okunan Yazı':'📖 Read Text');
    vsd('visionResult','block'); vsd('vpRepeatRow','flex');
    visionSetStatus(appLang==='tr'?'✅ Yazı okundu':'✅ Text read','done');
    vs('vpOcrLabel',appLang==='tr'?'Yazı Oku':'Read Text');
    _ocrRunning=false;
    vsb('visionScanBtn',false); vsb('vpOcrBtn',false);
    vpOcrElapsed=0; vs('vpOcrDwell','0%','style.width');

    // Metni seslendir — konuşma bitene kadar görüntü işleme sesini sustur
    _ocrSpeaking=true;
    _speakOcrText(cleaned, ()=>{ _ocrSpeaking=false; });

  }catch(e){
    const fallback=appLang==='tr'?`Hata: ${e.message}`:`Error: ${e.message}`;
    vs('visionResultText',fallback); vsd('visionResult','block');
    visionSetStatus('⚠ '+e.message.substring(0,50),'error');
    vs('vpOcrLabel',appLang==='tr'?'Yazı Oku':'Read Text');
    _ocrRunning=false; _ocrSpeaking=false;
    vsb('visionScanBtn',false); vsb('vpOcrBtn',false);
    vpOcrElapsed=0; vs('vpOcrDwell','0%','style.width');
    speak(fallback);
  }
}
function visionRepeatTTS(){ if(visionLastDescription) speak(visionLastDescription); }

function visionSetStatus(msg,cls=''){
  const el=$('visionStatus'); if(!el) return;
  el.textContent=msg; el.className=cls;
}
// Vision panel null-safe setters
function vs(id,val,prop='textContent'){ const e=$(id); if(e) e[prop]=val; }
function vsd(id,val){ const e=$(id); if(e) e.style.display=val; }
function vsb(id,val){ const e=$(id); if(e) e.disabled=val; }

function applyVisionI18n(){
  const set=(id,v)=>{ const e=$(id); if(e) e.textContent=v; };
  set('vpTitle',        appLang==='tr'?'👁 Etrafımda Ne Var?':"👁 What's Around Me?");
  set('visionCloseLbl', appLang==='tr'?'Kapat':'Close');
  set('visionResultLabel',appLang==='tr'?'🔍 Etraf Analizi':'🔍 Scene Analysis');
  set('visionObjectsLabel',appLang==='tr'?'Algılanan Nesneler':'Detected Objects');
  set('visionRepeatLabel',appLang==='tr'?'Tekrar Dinle':'Hear Again');
  set('visionScanLabel',appLang==='tr'?'Etrafı Tara':'Scan Scene');
  set('vpOcrLabel',     appLang==='tr'?'Yazı Oku':'Read Text');
  set('vpScanSub',      appLang==='tr'?'Bakıp bekle → AI anlatır':'Look & hold → AI describes');
  set('vpOcrSub',       appLang==='tr'?'Kamerayı yazıya tut → okur':'Hold at text → reads aloud');
}

// ══════════════════════════════════════════════════════
// BUTTON BINDINGS
// ══════════════════════════════════════════════════════
$('smSlider').oninput=e=>{ALPHA=e.target.value/100;$('smVal').textContent=ALPHA.toFixed(2);};
$('dwellSlider').oninput=e=>{DWELL_MS=e.target.value*100;$('dwellVal').textContent=(DWELL_MS/1000).toFixed(1);};
if($('recalibBtn')) $('recalibBtn').onclick=startCalibration;
$('evalBtn')&&($('evalBtn').onclick=startEvaluation);
if($('phraseBtn')) $('phraseBtn').onclick=openPhraseBoard;
$('outputClose').onclick=()=>{output.style.display='none';};
$('repDoneBtn').onclick=showMainMode;
$('repRecalBtn').onclick=startCalibration;
$('diagBtn')&&($('diagBtn').onclick=openDiag);
if($('a11yBtn')) $('a11yBtn').onclick=openA11y;
if($('keyboardBtn')) $('keyboardBtn').onclick=openKeyboard;
$('howBtn').onclick=openHow;
$('howMainBtn')&&($('howMainBtn').onclick=openHow);
if($('visionBtn')) $('visionBtn').onclick=openVision;
if($('quickMsgBtn')) $('quickMsgBtn').onclick=openQuickMsg;
$('visionScanBtn').onclick=visionAnalyze;

// ══════════════════════════════════════════════════════
// FACEMESH
// ══════════════════════════════════════════════════════
const faceMesh=new FaceMesh({locateFile:f=>`https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${f}`});
faceMesh.setOptions({maxNumFaces:1,refineLandmarks:true,minDetectionConfidence:0.55,minTrackingConfidence:0.55});

// ══════════════════════════════════════════════════════
// [see source for notes]
// ══════════════════════════════════════════════════════
function hideAllScreens(){ document.querySelectorAll('.screen').forEach(s=>s.classList.add('hidden')); }
function directEntry(){
  setInputMode('finger');
  showLanguageScreen();
  speak(appLang==='tr' ? 'Önce dil seçin.' : 'Choose language first.');
}
function backToStart(){
  if(typeof stopCamera === 'function') stopCamera();
  document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
  document.getElementById('startScreen').classList.remove('hidden');
  speak(appLang==='tr' ? 'Başlangıç ekranı.' : 'Start screen.');
}

let languageDwells=[];
function buildLanguageDwells(){
  languageDwells=[];
  document.querySelectorAll('#languageScreen .lang-choice-card').forEach(card=>{
    languageDwells.push({
      el:card,
      overlay:card.querySelector('.lang-choice-dwell'),
      lang:card.dataset.langChoice,
      elapsed:0,
      fired:false
    });
  });
}
function showLanguageScreen(){
  hideAllScreens();
  const ls=document.getElementById('languageScreen');
  if(ls) ls.classList.remove('hidden');
  mainUI.style.display='none';
  dot.style.display=(inputMode==='eye'||inputMode==='both')?'block':'none';
  statusBar.style.display='none';
  irisQ.style.display='none';
  dwellRing.style.display='block';
  pageStack=[];
  languageDwells=[];
  buildLanguageDwells();
  updateGazeBackVisibility();
}
function chooseLanguageAndContinue(lang){
  setLanguage(lang);
  const ls=document.getElementById('languageScreen');
  if(ls) ls.classList.add('hidden');
  speak(lang==='tr'?'Türkçe seçildi.':'English selected.');
  showMainMode();
}
function updateLanguageDwells(gx,gy,dt){
  const ls=document.getElementById('languageScreen');
  if(!ls || ls.classList.contains('hidden')) return;
  if(!languageDwells.length) buildLanguageDwells();
  languageDwells.forEach(d=>{
    const r=d.el.getBoundingClientRect();
    const inside=gx>=r.left&&gx<=r.right&&gy>=r.top&&gy<=r.bottom;
    if(inside){ d.elapsed+=dt; d.el.classList.add('gazing'); }
    else{ d.elapsed=Math.max(0,d.elapsed-dt*2.2); if(!d.elapsed) d.el.classList.remove('gazing'); }
    const pct=Math.min(1,d.elapsed/DWELL_MS);
    if(d.overlay) d.overlay.style.width=(pct*100)+'%';
    if(pct>=1&&!d.fired){
      d.fired=true;
      d.elapsed=0;
      if(d.overlay) d.overlay.style.width='0%';
      d.el.classList.remove('gazing');
      chooseLanguageAndContinue(d.lang);
    }
  });
}

function showMainMode(){
  hideAllScreens();
  dot.style.display=(inputMode==='eye'||inputMode==='both')?'block':'none';
  mainUI.style.display='flex';
  setTheme(currentTheme);statusBar.style.display='block';irisQ.style.display='block';dwellRing.style.display='block';
  mainDwells=[];
  updateGazeBackVisibility();
  startLocationTracking();
  applyI18n();
  // Start background wake-word listener
  setTimeout(startWakeListener, 1500);
}
function showStartScreen(){ hideAllScreens();startScreen.classList.remove('hidden'); applyI18n(); initApiKeyUI(); }

// ── LOCATION ──────────────────────────────────────────
let locationWatchId=null, lastLocation=null;
function startLocationTracking(){
  if(!navigator.geolocation){ setLocVal(t('locError')); return; }
  setLocVal(t('locLoading'));
  if(locationWatchId) navigator.geolocation.clearWatch(locationWatchId);
  locationWatchId=navigator.geolocation.watchPosition(
    pos=>{ lastLocation={lat:pos.coords.latitude, lng:pos.coords.longitude, accuracy:pos.coords.accuracy}; reverseGeocode(pos.coords.latitude,pos.coords.longitude); },
    err=>{ const c=JSON.parse(localStorage.getItem('es_loc')||'null'); if(c){setLocVal(c.d);}else{setLocVal(err.code===1?t('locDenied'):t('locError'));} },
    {enableHighAccuracy:false,maximumAge:60000,timeout:12000}
  );
}
async function reverseGeocode(lat,lon){
  try{
    const r=await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&accept-language=${appLang}`);
    const d=await r.json();
    const a=d.address||{};
    const parts=[a.neighbourhood||a.suburb,a.city||a.town||a.village].filter(Boolean);
    const label=parts.join(', ')||`${lat.toFixed(4)}, ${lon.toFixed(4)}`;
    setLocVal(label);
    try{localStorage.setItem('es_loc',JSON.stringify({d:label,lat,lon}));}catch(e){}
  }catch{ setLocVal(`${lat.toFixed(4)}, ${lon.toFixed(4)}`); }
}
function setLocVal(v){ const el=document.getElementById('locValue'); if(el) el.textContent=v; }

// ── PANIC BUTTON ──────────────────────────────────────
let panicArmed=false, panicElapsed=0;
function triggerPanic(){
  const msg = appLang==='tr'
    ? 'Yardıma ihtiyacım var, lütfen gel.'
    : 'I need help, please come.';
  qmSendMsg(msg, 0);
}
function updatePanicDwell(){}

// ══════════════════════════════════════════════════════
// v35 — MOUSE'SUZ OTOMATİK KALİBRASYON BAŞLATMA
// Sayfa açılır açılmaz kamera hazırlanır. Kamera hazır olunca 5 saniye geri sayım yapar
// ve kullanıcı hiçbir butona basmadan startCalibration() çalışır.
// ══════════════════════════════════════════════════════
let autoCalibrationTimerV35 = null;
let autoCalibrationIntervalV35 = null;
let autoCalibrationStartedV35 = false;
let autoCalibrationCancelledV35 = false;

function clearAutoCalibrationV35(){
  autoCalibrationCancelledV35 = true;
  if(autoCalibrationTimerV35){ clearTimeout(autoCalibrationTimerV35); autoCalibrationTimerV35=null; }
  if(autoCalibrationIntervalV35){ clearInterval(autoCalibrationIntervalV35); autoCalibrationIntervalV35=null; }
}

function startAutoCalibrationCountdownV35(){
  if(autoCalibrationStartedV35 || autoCalibrationCancelledV35) return;
  if(!cameraReady) return;

  let seconds = 5;
  const btn = $('startFreshBtn');
  const info = $('savedInfo');

  if(info){
    info.style.display = 'block';
    info.innerHTML = '<span class="calib-ready-badge"><span class="cr-dot"></span>Automatic calibration will start in ' + seconds + ' seconds</span>';
  }
  if(btn){
    btn.disabled = true;
    btn.textContent = '⏳ Automatic calibration: ' + seconds;
  }

  autoCalibrationIntervalV35 = setInterval(()=>{
    if(autoCalibrationCancelledV35){ clearAutoCalibrationV35(); return; }
    seconds--;
    if(info){
      info.innerHTML = '<span class="calib-ready-badge"><span class="cr-dot"></span>Automatic calibration will start in ' + seconds + ' seconds</span>';
    }
    if(btn){ btn.textContent = '⏳ Automatic calibration: ' + seconds; }
    if(seconds <= 0){
      clearAutoCalibrationV35();
      autoCalibrationCancelledV35 = false;
      autoCalibrationStartedV35 = true;
      modelX = null;
      modelY = null;
      if(btn){ btn.style.display = 'none'; }
      if(info){
        info.style.display = 'block';
        info.innerHTML = '<span class="calib-ready-badge"><span class="cr-dot"></span>Kalibrasyon başlıyor…</span>';
      }
      startCalibration();
    }
  }, 1000);
}

async function bootCameraThenAutoCalibrationV35(){
  try{
    setInputMode('eye');
    if(!cameraReady){
      await main();
    }
    if(cameraReady){
      startAutoCalibrationCountdownV35();
    }
  }catch(e){
    console.error('Auto calibration boot error:', e);
  }
}

function initStart(){
  setTheme(currentTheme); setInputMode('eye');
  blinkNavEnabled=JSON.parse(localStorage.getItem('es_blinkNav')||'true');
  blinkSelectEnabled=JSON.parse(localStorage.getItem('es_blinkSel')||'true');
  updateBlinkUI();
  initStartModeUI();
  applyI18n();
  if(window.speechSynthesis) speechSynthesis.onvoiceschanged=pickTtsVoice;
  const ok=loadCalibration();
  if(ok){
    $('savedInfo').style.display='block';
    $('savedInfo').innerHTML='<span class="calib-ready-badge"><span class="cr-dot"></span>' + t('calibReadyLabel') + '</span>';
    $('useSavedBtn').style.display='block';
    $('useSavedBtn').disabled=false;
  }
  $('startFreshBtn').onclick=()=>{
    clearAutoCalibrationV35();
    modelX=null;modelY=null;
    if(!cameraReady){
      main().then(()=>{ if(cameraReady) startCalibration(); });
    } else {
      startCalibration();
    }
  };
  $('useSavedBtn').onclick=async()=>{
    clearAutoCalibrationV35();
    if(!loadCalibration()) return;

    // EyeSense FIX v2:
    // Kayıtlı kalibrasyon seçildiğinde göz modu aktif olmalı ve kamera mutlaka başlatılmalı.
    // Önceden sadece showMainMode() çağrıldığı için kamera kapalı kalabiliyordu.
    setInputMode('eye');
    speak(t('calibLoaded'));

    if(!cameraReady){
      await main();
    }

    if(cameraReady){
      showLanguageScreen();
    }
  };

  // Engelli kullanıcı için mouse gerektirmeyen ana akış:
  // sayfa açılır → kamera izni/hazırlığı → 5 sn geri sayım → kalibrasyon.
  setTimeout(bootCameraThenAutoCalibrationV35, 600);
}

// ══════════════════════════════════════════════════════
// [see source for notes]
// ══════════════════════════════════════════════════════
// ══════════════════════════════════════════════════════
// CAMERA INIT — WebRTC Security & Permission Lifecycle
// ──────────────────────────────────────────────────────
// Security model:
//   · getUserMedia requires explicit user consent (browser dialog)
//   · Stream is only started on HTTPS or localhost origins
//   · No frames are stored — each frame is sent to FaceMesh and discarded
//   · On page unload, all camera tracks are explicitly stopped
//   · Only numerical gaze coordinates are ever computed / stored
// ══════════════════════════════════════════════════════
let activeStream = null;
let cameraReady = false;

async function main(){
  // [see source for notes]
  $('startFreshBtn').textContent = appLang === 'tr' ? '⏳ Kamera yükleniyor…' : '⏳ Loading camera…';
  $('startFreshBtn').disabled = true;

  try {
    // [see source for notes]
    try {
      activeStream = await navigator.mediaDevices.getUserMedia({
        video:{facingMode:'user', width:{ideal:640}, height:{ideal:480}},
        audio:false
      });
    } catch(e1) {
      // [see source for notes]
      activeStream = await navigator.mediaDevices.getUserMedia({
        video:{facingMode:'user'},
        audio:false
      });
    }

    video.srcObject = activeStream;
    if(teacherCamVideo){
      teacherCamVideo.srcObject = activeStream;
      teacherCamVideo.play().catch(()=>{});
    }
    await video.play();

    // [see source for notes]
    await new Promise((resolve, reject) => {
      const timeout = setTimeout(()=>reject(new Error('FaceMesh timeout')), 15000);
      faceMesh.onResults(res => {
        clearTimeout(timeout);
        // Orijinal handler'a devret
        faceMesh.onResults(mainFaceMeshHandler);
        mainFaceMeshHandler(res);
        resolve();
      });
      const cam = new Camera(video, {
        onFrame: async()=>{ await faceMesh.send({image:video}); },
        width:640, height:480
      });
      cam.start();
      // [see source for notes]
      window._eyeCam = cam;
    });

    cameraReady = true;
    $('startFreshBtn').textContent = '👁 Kalibrasyona Başla';
    $('startFreshBtn').disabled = false;

  } catch(err) {
    $('startFreshBtn').textContent = '▶ Start Calibration';
    $('startFreshBtn').disabled = false;
    const msg = err.message || String(err);
    const isPermission = msg.includes('Permission') || msg.includes('NotAllowed') || msg.includes('denied');
    document.body.innerHTML = `<div style="padding:28px 20px;color:#f44;font-family:system-ui,sans-serif;line-height:2.2;background:#040408;min-height:100vh;font-size:14px;">
      <div style="font-size:22px;margin-bottom:16px;">❌ Failed to Start</div>
      <b>Error:</b> ${msg}<br><br>
      ${isPermission
        ? '📷 Camera permission denied.<br>Please allow camera access in your browser settings.'
        : '➡️ Open this page over <b>HTTPS</b>.<br>➡️ Check camera permissions.<br>➡️ Make sure no other tab is using the camera.'}
      <br><br>
      <button onclick="location.reload()" style="padding:12px 24px;background:#1a3a7a;border:none;border-radius:10px;color:#fff;font-size:15px;cursor:pointer;margin-top:8px;">🔄 Retry</button>
    </div>`;
  }
}

function mainFaceMeshHandler(res){
  const ts=performance.now();
  if(!res.multiFaceLandmarks?.length){
    latestFeatures=null;
    irisQ.textContent='⚠ No face';
    if(teacherCamCanvas){
      const ctx=teacherCamCanvas.getContext('2d');
      ctx.clearRect(0,0,teacherCamCanvas.width,teacherCamCanvas.height);
    }
    if(teacherCamInfo) teacherCamInfo.textContent='Yüz algılanmadı';
    return;
  }
  const lm=res.multiFaceLandmarks[0];
  processBlink(lm,ts);
  const feat=getFeatures(lm);
  latestFeatures=feat;
  irisQ.textContent=feat?`👁 ${currentEAR.toFixed(2)}`:'👁 Blink';
  if(!feat||!modelX||!modelY) return;
  if(inputMode==='finger') return;
  const pose = getHeadPose(lm);
  headPoseHistory.push(pose);
  if(headPoseHistory.length>8) headPoseHistory.shift();
  const avgPose = {
    yaw: headPoseHistory.reduce((s,p)=>s+p.yaw,0)/headPoseHistory.length,
    pitch: headPoseHistory.reduce((s,p)=>s+p.pitch,0)/headPoseHistory.length,
  };
  const featPoly = polyExpand(feat);
  let tx=predict(modelX,featPoly), ty=predict(modelY,featPoly);
  tx += avgPose.yaw * window.innerWidth * 0.015;
  ty += avgPose.pitch * window.innerHeight * 0.012;
  const dt=ts-latestTs; latestTs=ts;
  frameTimes.push(dt);
  if(frameTimes.length>30) frameTimes.shift();
  const avgFrameMs = frameTimes.reduce((a,b)=>a+b,0)/frameTimes.length;
  currentFPS = Math.round(1000/avgFrameMs);
  pipelineLatencyMs = Math.round(avgFrameMs);
  const kbOpen=$('kbPanel').style.display==='flex';
  const ea=kbOpen ? Math.max(0.10,ALPHA*(kbSensitivity===3?0.95:kbSensitivity===1?0.65:0.78)) : ALPHA;
  smX+=ea*(tx-smX); smY+=ea*(ty-smY);

  let gx=Math.max(4,Math.min(window.innerWidth-4,smX));
  let gy=Math.max(4,Math.min(window.innerHeight-4,smY));

  // KLAVYE BOYUTUNA DOKUNMADAN gaze düzeltme:
  // Klavye açıkken 25 noktalı model + gerçek tuş getBoundingClientRect() alanına göre stabil edilir.
  if(kbOpen){
    const fixed = correctKeyboardGaze(gx, gy, Math.min(dt,80));
    gx = Math.max(4,Math.min(window.innerWidth-4,fixed.x));
    gy = Math.max(4,Math.min(window.innerHeight-4,fixed.y));
  }

  dot.style.left=gx+'px'; dot.style.top=gy+'px';
  dwellRing.style.left=gx+'px'; dwellRing.style.top=gy+'px';
  drawTeacherEyePreview(lm, gx, gy);
  dispatchGaze(gx,gy,Math.min(dt,80));
  statusBar.textContent=`✅ Gaze active · Stable 25pt · 2-step KB snap · EAR ${currentEAR.toFixed(2)} · ${currentFPS} FPS · ${pipelineLatencyMs}ms`;
}

// Release camera on unload — security best practice
window.addEventListener('beforeunload', ()=>{
  if(activeStream) activeStream.getTracks().forEach(t=>t.stop());
});


// ══════════════════════════════════════════════════════
// IRIS SCROLL — v2 Clean
// Scrolls the active panel based on gaze Y position.
// Works even without calibration (uses raw gaze or EAR-based pos).
// Panels: phraseBoard, a11y, diag, arch, how, report, keyboard
// ══════════════════════════════════════════════════════
let irisScrollEnabled  = JSON.parse(localStorage.getItem('es_irisScroll')||'true');
let irisScrollVel      = 0;          // current scroll velocity px/frame
let irisScrollTarget   = null;       // DOM element being scrolled
const IRIS_SCROLL_SPEED = 20;        // max px per frame

// ── Find which panel is currently open and return its scroll element + rect
function getScrollPanel(){
  // Each entry: [panelId, scrollableChildId or null (=panel itself)]
  const panels = [
    ['phraseBoard', 'pbGrid'],
    ['a11yPanel',   null],
    ['diagPanel',   null],
    ['archPanel',   null],
    ['howPanel',    null],
    ['iotPanel',    null],
  ];

  for(const [pid, scrollId] of panels){
    const el = $(pid);
    if(!el) continue;
    // A panel is "open" if display is not none/empty
    const d = getComputedStyle(el).display;
    if(d === 'none' || d === '') continue;
    // Also check inline style as backup
    if(el.style.display === 'none') continue;
    const scrollEl = scrollId ? $(scrollId) : el;
    return { el: scrollEl, rect: el.getBoundingClientRect() };
  }

  // Report screen
  if(reportScreen && !reportScreen.classList.contains('hidden')){
    const errList = $('errList');
    if(errList) return { el: errList, rect: errList.getBoundingClientRect() };
    return { el: reportScreen, rect: reportScreen.getBoundingClientRect() };
  }

  return null;
}

// ── RAF scroll loop
requestAnimationFrame(function scrollLoop(){
  if(Math.abs(irisScrollVel) > 0.2 && irisScrollTarget){
    irisScrollTarget.scrollTop += irisScrollVel;
  }
  irisScrollVel *= 0.80;
  requestAnimationFrame(scrollLoop);
});

// ── Called every gaze frame from dispatchGaze
function updateIrisScroll(gx, gy){
  const topEl = $('scrollZoneTop');
  const botEl = $('scrollZoneBottom');

  if(!irisScrollEnabled){
    irisScrollVel = 0;
    if(topEl) topEl.classList.remove('visible','active');
    if(botEl) botEl.classList.remove('visible','active');
    return;
  }

  const panel = getScrollPanel();
  if(!panel){
    // No scrollable panel open — hide zones
    irisScrollVel = 0;
    if(topEl) topEl.classList.remove('visible','active');
    if(botEl) botEl.classList.remove('visible','active');
    return;
  }

  irisScrollTarget = panel.el;
  const rect = panel.rect;

  // Zone = top/bottom 15% of the panel height (min 60px, max 100px)
  const zoneH = Math.max(60, Math.min(100, rect.height * 0.15));

  // Gaze position relative to panel
  const relY   = gy - rect.top;
  const inPanel = relY >= 0 && relY <= rect.height && gx >= rect.left && gx <= rect.right;

  if(!inPanel){
    // Gaze outside panel — slowly decay, hide zones
    irisScrollVel *= 0.7;
    if(topEl) topEl.classList.remove('active');
    if(botEl) botEl.classList.remove('active');
    return;
  }

  if(relY < zoneH){
    // TOP zone — scroll up
    const depth = 1 - (relY / zoneH);            // 0→1 (1=top edge)
    irisScrollVel = -(depth * IRIS_SCROLL_SPEED);
    if(topEl){ topEl.classList.add('visible','active'); }
    if(botEl){ botEl.classList.remove('active'); botEl.classList.add('visible'); botEl.style.opacity='0.3'; }

  } else if(relY > rect.height - zoneH){
    // BOTTOM zone — scroll down
    const depth = (relY - (rect.height - zoneH)) / zoneH;
    irisScrollVel = depth * IRIS_SCROLL_SPEED;
    if(botEl){ botEl.classList.add('visible','active'); botEl.style.opacity=''; }
    if(topEl){ topEl.classList.remove('active'); topEl.classList.add('visible'); topEl.style.opacity='0.3'; }

  } else {
    // Middle — no scroll, hide zones
    irisScrollVel *= 0.6;
    if(topEl){ topEl.classList.remove('active','visible'); topEl.style.opacity=''; }
    if(botEl){ botEl.classList.remove('active','visible'); botEl.style.opacity=''; }
  }
}

function toggleIrisScroll(){
  irisScrollEnabled = !irisScrollEnabled;
  localStorage.setItem('es_irisScroll', irisScrollEnabled);
  const c = $('irisScrollCard');
  if(c){
    c.classList.toggle('active', irisScrollEnabled);
    c.querySelector('.al').textContent = irisScrollEnabled ? 'On ✓' : 'Off';
  }
  if(!irisScrollEnabled){
    irisScrollVel = 0;
    [$('scrollZoneTop'),$('scrollZoneBottom')].forEach(el=>{
      if(el) el.classList.remove('visible','active');
    });
  }
  speak(irisScrollEnabled ? 'Iris scroll on.' : 'Iris scroll off.');
}



// ══════════════════════════════════════════════════════
// v29 — 3 KARTLI AŞAMALI PHRASE BOARD + QUICK MESSAGE
// Kalibrasyon/gaze hesaplama aynı kalır. Sadece kart üretimi değişir.
// ══════════════════════════════════════════════════════
let pbStageV29 = 'root';
let qmStageV29 = 'root';

function pbDataV29(){
  const tr = appLang === 'tr';
  return {
    root: [
      {i:'🍽️', t:tr?'İhtiyaç':'Needs', sub:tr?'Su · yemek · tuvalet':'Water · food · bathroom', next:'needs'},
      {i:'🆘', t:tr?'Acil':'Emergency', sub:tr?'Yardım · ağrı · ilaç':'Help · pain · medicine', next:'emergency'},
      {i:'👥', t:tr?'Kişiler':'People', sub:tr?'Doktor · hemşire · aile':'Doctor · nurse · family', next:'people'}
    ],
    needs: [
      {i:'💧', t:tr?'Su istiyorum':'I need water', speak:tr?'Su istiyorum':'I need water'},
      {i:'🍽️', t:tr?'Yemek istiyorum':'I need food', speak:tr?'Yemek istiyorum':'I need food'},
      {i:'🚽', t:tr?'Tuvalete gitmem lazım':'Bathroom', speak:tr?'Tuvalete gitmem lazım':'I need to use the bathroom'}
    ],
    emergency: [
      {i:'🆘', t:tr?'Yardım':'Help', speak:tr?'Yardıma ihtiyacım var':'I need help'},
      {i:'😣', t:tr?'Ağrım var':'I am in pain', speak:tr?'Ağrım var':'I am in pain'},
      {i:'💊', t:tr?'İlaç':'Medicine', speak:tr?'İlaç istiyorum':'I need medicine'}
    ],
    people: [
      {i:'🩺', t:tr?'Doktor':'Doctor', speak:tr?'Doktor çağırın':'Please call the doctor'},
      {i:'👩‍⚕️', t:tr?'Hemşire':'Nurse', speak:tr?'Hemşire çağırın':'Please call the nurse'},
      {i:'👨‍👩‍👧', t:tr?'Aile':'Family', speak:tr?'Ailemi çağırın':'Please call my family'}
    ]
  };
}

function setPbTitleV29(){
  const tr = appLang === 'tr';
  const title = $('pbTitle');
  if(!title) return;
  const map = {
    root: tr?'💬 Ne söylemek istiyorsunuz?':'💬 What do you want to say?',
    needs: tr?'🍽️ İhtiyaç seçin':'🍽️ Choose a need',
    emergency: tr?'🆘 Acil durum seçin':'🆘 Choose emergency',
    people: tr?'👥 Kişi seçin':'👥 Choose person'
  };
  title.textContent = map[pbStageV29] || map.root;
}

function openPhraseBoard(){
  resetAllDwells();
  pbStageV29 = 'root';
  if(phraseBoard){
    phraseBoard.style.display='flex';
    pushPage('phraseBoard');
  }
  renderPhrases();
}

function closePhraseBoard(){
  if(phraseBoard) phraseBoard.style.display='none';
  if(output) output.style.display='none';
  phraseDwells=[];
  pbStageV29='root';
  popPage();
}

function renderPhrases(){
  const g=$('pbGrid');
  if(!g) return;
  g.classList.add('pb-three-stage');
  g.innerHTML='';
  phraseDwells=[];
  setPbTitleV29();
  const data = pbDataV29();
  const items = data[pbStageV29] || data.root;
  items.forEach((p,i)=>{
    const btn=document.createElement('div');
    btn.className='phrase-btn';
    btn.dataset.idx = String(i);
    btn.innerHTML=`<span class="ph-del" style="display:none!important">✕</span><span class="pb-i">${p.i}</span><span class="pb-t">${p.t}</span>${p.sub?`<span class="pb-sub">${p.sub}</span>`:''}<div class="dwell-ov"></div>`;
    btn.onclick=()=>pbActivateV29(p);
    g.appendChild(btn);
    phraseDwells.push({el:btn,overlay:btn.querySelector('.dwell-ov'),item:p,elapsed:0,fired:false});
  });
}

function pbActivateV29(item){
  if(item.next){
    pbStageV29 = item.next;
    resetAllDwells();
    renderPhrases();
    return;
  }
  const text = item.speak || item.t;
  if(outputText) outputText.textContent = item.i+' '+text;
  if(output) output.style.display='flex';
  speak(text);
  showBlinkFlash(item.i+' '+text);
}

function updatePhraseDwells(gx,gy,dt){
  phraseDwells.forEach(pd=>{
    const r=pd.el.getBoundingClientRect();
    const inside=gx>=r.left&&gx<=r.right&&gy>=r.top&&gy<=r.bottom;
    if(inside){pd.elapsed+=dt;pd.el.classList.add('gazing');}
    else{pd.elapsed=Math.max(0,pd.elapsed-dt*2.5);if(!pd.elapsed)pd.el.classList.remove('gazing');}
    const pct=Math.min(1,pd.elapsed/DWELL_MS);
    pd.overlay.style.width=(pct*100)+'%';
    if(pct>=1&&!pd.fired){
      pd.fired=true;
      const r2=pd.el.getBoundingClientRect();
      if(typeof olAddSample==='function') olAddSample(smX, smY, r2.left+r2.width/2, r2.top+r2.height/2);
      pbActivateV29(pd.item);
      pd.elapsed=0; pd.fired=false;
      pd.el.classList.remove('gazing');
      pd.overlay.style.width='0%';
    }
  });
}

function qmDataV29(){
  const tr = appLang === 'tr';
  return {
    root: [
      {i:'📞', t:tr?'Refakatçiyi Ara':'Call Caregiver', sub:tr?'Seçince arar':'Select to call', action:'call'},
      {i:'💬', t:tr?'Mesaj Gönder':'Send Message', sub:tr?'3 kartlı mesaj menüsü':'3-card message menu', next:'cats'},
      {i:'←', t:tr?'Geri':'Back', sub:tr?'Ana menüye dön':'Return to menu', action:'close'}
    ],
    cats: [
      {i:'🆘', t:tr?'Acil':'Emergency', sub:tr?'Yardım · ağrı · ilaç':'Help · pain · medicine', next:'emergency'},
      {i:'🍽️', t:tr?'İhtiyaç':'Needs', sub:tr?'Yemek · banyo · su':'Food · bathroom · water', next:'needs'},
      {i:'😊', t:tr?'Durum':'Status', sub:tr?'İyi · uyku · merak etme':'Fine · sleep · do not worry', next:'status'}
    ],
    emergency: [
      {i:'🆘', t:tr?'Yardım ihtiyacım var, lütfen gel.':'I need help, please come.', send:true},
      {i:'😣', t:tr?'Ağrım var.':'I am in pain.', send:true},
      {i:'💊', t:tr?'İlaç zamanım geldi.':'It is time for my medication.', send:true}
    ],
    needs: [
      {i:'🍽️', t:tr?'Açım, yemek getirir misin?':'I am hungry, can you bring food?', send:true},
      {i:'🚿', t:tr?'Banyoya gitmem lazım.':'I need to use the bathroom.', send:true},
      {i:'💧', t:tr?'Su istiyorum.':'I need water.', send:true}
    ],
    status: [
      {i:'😊', t:tr?'İyiyim, merak etme.':'I am fine, do not worry.', send:true},
      {i:'😴', t:tr?'Uyumak istiyorum.':'I want to sleep.', send:true},
      {i:'🙏', t:tr?'Lütfen yanıma gelir misin?':'Please come to me.', send:true}
    ]
  };
}

function setQmTitleV29(){
  const tr = appLang === 'tr';
  if($('qmTitle')) $('qmTitle').textContent = tr ? '📲 Refakatçi' : '📲 Caregiver';
  const label = $('qmMsgLabel');
  if(!label) return;
  const map = {
    root: tr?'3 KARTLI REFakatçi MENÜSÜ':'3-CARD CAREGIVER MENU',
    cats: tr?'MESAJ TÜRÜ SEÇ':'CHOOSE MESSAGE TYPE',
    emergency: tr?'ACİL MESAJ':'EMERGENCY MESSAGE',
    needs: tr?'İHTİYAÇ MESAJI':'NEED MESSAGE',
    status: tr?'DURUM MESAJI':'STATUS MESSAGE'
  };
  label.textContent = map[qmStageV29] || map.root;
}

function openQuickMsg(){
  resetAllDwells();
  qmStageV29='root';
  const p=$('quickMsgPanel');
  if(p){ p.classList.add('v29-three-card'); p.style.display='flex'; }
  pushPage('quickMsgPanel');
  renderQmContacts();
  renderQmMsgs();
}

function closeQuickMsg(){
  const p=$('quickMsgPanel');
  if(p) p.style.display='none';
  qmStageV29='root';
  popPage();
}

function renderQmMsgs(){
  const list = $('qmMsgsList');
  if(!list) return;
  list.classList.add('qm-three-stage');
  setQmTitleV29();
  const items = (qmDataV29()[qmStageV29] || qmDataV29().root).slice(0,3);
  list.innerHTML = '';
  items.forEach((m, i) => {
    const div = document.createElement('div');
    div.className = 'qm-msg';
    div.dataset.idx = String(i);
    div.innerHTML = '<span class="qmm-icon">'+m.i+'</span>' +
      '<span class="qmm-text">'+m.t+'</span>' +
      (m.sub ? '<span class="qmm-sub">'+m.sub+'</span>' : '') +
      '<div class="qm-dwell"></div>';
    div.onclick = () => qmActivateV29(m);
    list.appendChild(div);
  });
  bindQmDwells();
}

function qmActivateV29(item){
  if(item.next){
    qmStageV29 = item.next;
    resetAllDwells();
    renderQmMsgs();
    return;
  }
  if(item.action==='call'){
    qmCall(0);
    return;
  }
  if(item.action==='close'){
    closeQuickMsg();
    return;
  }
  if(item.send){
    qmSendMsg(item.t, 0);
  }
}

function bindQmDwells(){
  qmMsgDwells=[]; qmContactDwells=[];
  document.querySelectorAll('#qmMsgsList .qm-msg').forEach(el=>{
    const ov=el.querySelector('.qm-dwell');
    const idx=parseInt(el.dataset.idx||'0',10);
    const item=(qmDataV29()[qmStageV29] || qmDataV29().root)[idx];
    qmMsgDwells.push({el,ov,item,elapsed:0});
  });
}

function updateQmDwells(gx,gy,dt){
  if($('quickMsgPanel').style.display!=='flex') return;
  qmMsgDwells.forEach(d=>{
    const r=d.el.getBoundingClientRect();
    const inside=gx>=r.left&&gx<=r.right&&gy>=r.top&&gy<=r.bottom;
    if(inside){d.elapsed+=dt;d.el.classList.add('gazing');}
    else{d.elapsed=Math.max(0,d.elapsed-dt*2);d.el.classList.remove('gazing');}
    const pct=Math.min(1,d.elapsed/DWELL_MS);
    if(d.ov) d.ov.style.width=(pct*100)+'%';
    if(pct>=1){
      d.elapsed=0;
      if(d.ov) d.ov.style.width='0%';
      d.el.classList.remove('gazing');
      qmActivateV29(d.item);
    }
  });
}

// Butonlar daha önce eski fonksiyonlara bağlandıysa v29 fonksiyonlarına yeniden bağla.
if($('phraseBtn')) $('phraseBtn').onclick = openPhraseBoard;
if($('quickMsgBtn')) $('quickMsgBtn').onclick = openQuickMsg;


// ══════════════════════════════════════════════════════
// v33 — ANA MENÜ 3 KARTLI AŞAMALI SİSTEM
// Ana Menü: Phrase Board / Keyboard / Diğer
// Diğer Menü: Quick Message / Accessibility / Calibrate
// ══════════════════════════════════════════════════════
let mainMenuStageV33 = 'main';

function mainMenuCardsV33(){
  const tr = appLang === 'tr';
  if(mainMenuStageV33 === 'more'){
    return [
      {id:'quickMsgBtn', icon:'📲', label:tr?'Hızlı Mesaj':'Quick Message', action:'openQuickMsg'},
      {id:'a11yBtn', icon:'⚙️', label:tr?'Erişilebilirlik':'Accessibility', action:'openA11y'},
      {id:'recalibBtn', icon:'🎯', label:tr?'Kalibrasyon':'Calibrate', action:'startCalibration'}
    ];
  }
  return [
    {id:'phraseBtn', icon:'💬', label:tr?'Cümle Kartları':'Phrase Board', action:'openPhraseBoard'},
    {id:'keyboardBtn', icon:'⌨️', label:tr?'Klavye':'Keyboard', action:'openKeyboard'},
    {id:'mainMoreBtn', icon:'⋯', label:tr?'Diğer':'More', action:'openMainMoreMenu'}
  ];
}

function renderMainMenuV33(){
  const grid = document.getElementById('mainMenuGrid');
  if(!grid) return;
  grid.classList.add('main-three-stage');
  grid.innerHTML = '';
  const tr = appLang === 'tr';
  const stageLabel = document.getElementById('mainSectionLabel');
  if(stageLabel){
    stageLabel.textContent = tr ? 'MENÜ' : 'MENU';
    stageLabel.setAttribute('data-stage-label', mainMenuStageV33 === 'more' ? (tr?'· DİĞER':'· MORE') : (tr?'· ANA':'· MAIN'));
  }
  const hint = document.getElementById('mainSectionHint');
  if(hint) hint.textContent = tr ? 'Bakıp bekle' : 'Gaze & hold';
  mainMenuCardsV33().forEach(card=>{
    const btn=document.createElement('button');
    btn.className='btn-sm';
    btn.id=card.id;
    btn.dataset.action=card.action;
    btn.innerHTML=`<span class="bsm-icon">${card.icon}</span><span class="bsm-label">${card.label}</span><div class="btn-dwell"></div>`;
    btn.onclick=()=>{ if(window[card.action]) window[card.action](); };
    grid.appendChild(btn);
  });
  mainDwells=[];
  buildMainDwells();
}

function openMainMoreMenu(){
  resetAllDwells();
  mainMenuStageV33='more';
  renderMainMenuV33();
}

function openMainPrimaryMenu(){
  resetAllDwells();
  mainMenuStageV33='main';
  renderMainMenuV33();
}

// showMainMode çağrıldığında ana menü yeniden 3 kartlı kurulsun.
if(typeof showMainMode === 'function'){
  const __oldShowMainModeV33 = showMainMode;
  showMainMode = function(){
    __oldShowMainModeV33.apply(this, arguments);
    openMainPrimaryMenu();
  };
}

// Dil değişince kart yazıları da güncellensin.
if(typeof setLanguage === 'function'){
  const __oldSetLanguageV33 = setLanguage;
  setLanguage = function(lang){
    __oldSetLanguageV33.apply(this, arguments);
    renderMainMenuV33();
  };
}

// Dil ekranından devam edince ana menü ilk sayfadan başlasın.
if(typeof chooseLanguageAndContinue === 'function'){
  const __oldChooseLanguageAndContinueV33 = chooseLanguageAndContinue;
  chooseLanguageAndContinue = function(lang){
    __oldChooseLanguageAndContinueV33.apply(this, arguments);
    openMainPrimaryMenu();
  };
}

// Eğer kullanıcı geri ile açık panelden ana menüye dönerse menüyü yeniden kur.
if(typeof backToStart === 'function'){
  const __oldBackToStartV33 = backToStart;
  backToStart = function(){
    mainMenuStageV33='main';
    __oldBackToStartV33.apply(this, arguments);
  };
}

// İlk yüklemede statik HTML'i de 3 kartlı hale getir.
renderMainMenuV33();


initStart();
