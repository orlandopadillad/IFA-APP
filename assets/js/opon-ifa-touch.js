var first_right = true;
var second_right = true;
var third_right = true;
var fourth_right = true;
var first_left = true;
var second_left = true;
var third_left = true;
var fourth_left = true;
var opon_Left_side = document.getElementById("Left-Side");
var opon_Right_side = document.getElementById("Right-Side");

      
//start Left Side opon url variables
var opon_Ifa_Left_Side_Ogbe_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - ogbe - left half.jpg'; 
var opon_Ifa_Left_Side_Oyeku_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - oyeku - left half.jpg';
var opon_Ifa_Left_Side_Iwori_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - iwori - left half.jpg';
var opon_Ifa_Left_Side_Idi_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - idi - left half.jpg';
var opon_Ifa_Left_Side_Obara_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - obara - left half.jpg';
var opon_Ifa_Left_Side_Okonron_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - OKONRON - left half.jpg';
var opon_Ifa_Left_Side_Irosun_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - irosun - left half.jpg';
var opon_Ifa_Left_Side_Owanrin_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - owanrin - left half.jpg';
var opon_Ifa_Left_Side_Ogunda_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - ogunda- left half.jpg';
var opon_Ifa_Left_Side_Osa_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - osa - left half.jpg';
var opon_Ifa_Left_Side_Etura_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - etura - left half.jpg' ;
var opon_Ifa_Left_Side_Irete_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - irete - left half.jpg';
var opon_Ifa_Left_Side_Eka_Meji =  'images\\Pictures\\Odus\\Left Half\\opon ifa - eka - left half.jpg';
var opon_Ifa_Left_Side_Eturukpon_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - eturukpon - left half.jpg';
var opon_Ifa_Left_Side_Ose_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - ose - left half.jpg';
var opon_Ifa_Left_Side_Ofun_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - ofun - left half.jpg';
//end Left Side opon url variables
//Start Right Side opon url variables
var opon_Ifa_Right_Side_Ogbe_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - Ogbe - right half.jpg'; 
var opon_Ifa_Right_Side_Oyeku_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - oyeku - right half.jpg';
var opon_Ifa_Right_Side_Iwori_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - iwori - right half.jpg';
var opon_Ifa_Right_Side_Idi_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - idi- right half.jpg';
var opon_Ifa_Right_Side_Obara_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - obara - right half.jpg' ;
var opon_Ifa_Right_Side_Okonron_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - okonron - right half.jpg' ;
var opon_Ifa_Right_Side_Irosun_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - irosun - right half.jpg';
var opon_Ifa_Right_Side_Owanrin_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - owanrin - right half.jpg';
var opon_Ifa_Right_Side_Ogunda_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - ogunda - right half.jpg';
var opon_Ifa_Right_Side_Osa_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - osa - right half.jpg';
var opon_Ifa_Right_Side_Etura_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - ETURA - right half.jpg';
var opon_Ifa_Right_Side_Irete_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - irete - right half.jpg';
var opon_Ifa_Right_Side_Eka_Meji =  'images\\Pictures\\Odus\\Right Half\\opon ifa - eka - right half.jpg';
var opon_Ifa_Right_Side_Eturukpon_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - eturukpon - right half.jpg';
var opon_Ifa_Right_Side_Ose_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - ose - right half.jpg';
var opon_Ifa_Right_Side_Ofun_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - ofun - right half.jpg';
//End Right Side opon url variables
var allJSONAddressForOdus = [
    'data\\oduData\\mejis\\ejiogbe.json',
    'data\\oduData\\mejis\\oyekuMeji.json',
    'data\\oduData\\mejis\\iworiMeji.json',
    'data\\oduData\\mejis\\idiMeji.json',
    'data\\oduData\\mejis\\irosunMeji.json',
    'data\\oduData\\mejis\\owanrinMeji.json',
    'data\\oduData\\mejis\\obaraMeji.json',
    'data\\oduData\\mejis\\okonronMeji.json',
    'data\\oduData\\mejis\\ogundaMeji.json',
    'data\\oduData\\mejis\\osaMeji.json',
    'data\\oduData\\mejis\\ekaMeji.json',
    'data\\oduData\\mejis\\eturukponMeji.json',
    'data\\oduData\\mejis\\eturaMeji.json',
    'data\\oduData\\mejis\\ireteMeji.json',
    'data\\oduData\\mejis\\oseMeji.json',
    'data\\oduData\\mejis\\ofunMeji.json',
    'data\\oduData\\noMejis\\ogbe\\ogbeOyekun.json',
    'data\\oduData\\noMejis\\ogbe\\ogbeIwori.json',
    'data\\oduData\\noMejis\\ogbe\\ogbeIdi.json',
    'data\\oduData\\noMejis\\ogbe\\ogbeIrosun.json',
    'data\\oduData\\noMejis\\ogbe\\ogbeOwanrin.json',
    'data\\oduData\\noMejis\\ogbe\\ogbeObara.json',
    'data\\oduData\\noMejis\\ogbe\\ogbeOkonron.json',
    'data\\oduData\\noMejis\\ogbe\\ogbeOgunda.json',
    'data\\oduData\\noMejis\\ogbe\\ogbeOsa.json',
    'data\\oduData\\noMejis\\ogbe\\ogbeEka.json',
    'data\\oduData\\noMejis\\ogbe\\ogbeEturukpon.json',
    'data\\oduData\\noMejis\\ogbe\\ogbeEtura.json',
    'data\\oduData\\noMejis\\ogbe\\ogbeIrete.json',
    'data\\oduData\\noMejis\\ogbe\\ogbeOse.json',
    'data\\oduData\\noMejis\\ogbe\\ogbeOfun.json',
    'data\\oduData\\noMejis\\oyeku\\oyekuLoOgbe.json',
    'data\\oduData\\noMejis\\oyeku\\oyekubiIwori.json',
    'data\\oduData\\noMejis\\oyeku\\oyekuDi.json',
    'data\\oduData\\noMejis\\oyeku\\oyekuIrosun.json',
    'data\\oduData\\noMejis\\oyeku\\oyekuOwanrin.json',
    'data\\oduData\\noMejis\\oyeku\\oyekuObara.json',
    'data\\oduData\\noMejis\\oyeku\\oyekuOkonron.json',
    'data\\oduData\\noMejis\\oyeku\\oyekuOgunda.json',
    'data\\oduData\\noMejis\\oyeku\\oyekuOsa.json',
    'data\\oduData\\noMejis\\oyeku\\oyekubeEka.json',
    'data\\oduData\\noMejis\\oyeku\\oyekuEturukpon.json',
    'data\\oduData\\noMejis\\oyeku\\oyekuEtura.json',
    'data\\oduData\\noMejis\\oyeku\\oyekuIrete.json',
    'data\\oduData\\noMejis\\oyeku\\oyekuOse.json',
    'data\\oduData\\noMejis\\oyeku\\oyekuOfun.json',
    'data\\oduData\\noMejis\\iwori\\iworiboOgbe.json',
    'data\\oduData\\noMejis\\iwori\\iworiOyeku.json',
    'data\\oduData\\noMejis\\iwori\\iworiIdi.json',
    'data\\oduData\\noMejis\\iwori\\iworiIrosun.json',
    'data\\oduData\\noMejis\\iwori\\iworiOwanrin.json',
    'data\\oduData\\noMejis\\iwori\\iworiObara.json',
    'data\\oduData\\noMejis\\iwori\\iworiOkonron.json',
    'data\\oduData\\noMejis\\iwori\\iworiOgunda.json',
    'data\\oduData\\noMejis\\iwori\\iworiOsa.json',
    'data\\oduData\\noMejis\\iwori\\iworiEka.json',
    'data\\oduData\\noMejis\\iwori\\iworiEturukpon.json',
    'data\\oduData\\noMejis\\iwori\\iworiEtura.json',
    'data\\oduData\\noMejis\\iwori\\iworiIrete.json',
    'data\\oduData\\noMejis\\iwori\\iworiOse.json',
    'data\\oduData\\noMejis\\iwori\\iworiOfun.json',
    'data\\oduData\\noMejis\\idi\\idiOgbe.json',
    'data\\oduData\\noMejis\\idi\\idiOyeku.json',
    'data\\oduData\\noMejis\\idi\\idiIwori.json',
    'data\\oduData\\noMejis\\idi\\idiIrosun.json',
    'data\\oduData\\noMejis\\idi\\idiOwanrin.json',
    'data\\oduData\\noMejis\\idi\\idiObara.json',
    'data\\oduData\\noMejis\\idi\\idiOkonron.json',
    'data\\oduData\\noMejis\\idi\\idiOgunda.json',
    'data\\oduData\\noMejis\\idi\\idiOsa.json',
    'data\\oduData\\noMejis\\idi\\idiEka.json',
    'data\\oduData\\noMejis\\idi\\idiEturukpon.json',
    'data\\oduData\\noMejis\\idi\\idiEtura.json',
    'data\\oduData\\noMejis\\idi\\idiIrete.json',
    'data\\oduData\\noMejis\\idi\\idiOse.json',
    'data\\oduData\\noMejis\\idi\\idiOfun.json',
    'data\\oduData\\noMejis\\irosun\\irosunOgbe.json',
    'data\\oduData\\noMejis\\irosun\\irosunOyeku.json',
    'data\\oduData\\noMejis\\irosun\\irosunIwori.json',
    'data\\oduData\\noMejis\\irosun\\irosunIdi.json',
    'data\\oduData\\noMejis\\irosun\\irosunOwanrin.json',
    'data\\oduData\\noMejis\\irosun\\irosunObara.json',
    'data\\oduData\\noMejis\\irosun\\irosunOkonron.json',
    'data\\oduData\\noMejis\\irosun\\irosunOgunda.json',
    'data\\oduData\\noMejis\\irosun\\irosunOsa.json',
    'data\\oduData\\noMejis\\irosun\\irosunEka.json',
    'data\\oduData\\noMejis\\irosun\\irosunEturukpon.json',
    'data\\oduData\\noMejis\\irosun\\irosunEtura.json',
    'data\\oduData\\noMejis\\irosun\\irosunIrete.json',
    'data\\oduData\\noMejis\\irosun\\irosunOse.json',
    'data\\oduData\\noMejis\\irosun\\irosunOfun.json',
    'data\\oduData\\noMejis\\owarin\\owanrinsoOgbe.json',
    'data\\oduData\\noMejis\\owarin\\owanrinOyeku.json',
    'data\\oduData\\noMejis\\owarin\\owanrinIwori.json',
    'data\\oduData\\noMejis\\owarin\\owanrinIdi.json',
    'data\\oduData\\noMejis\\owarin\\owanrinIrosun.json',
    'data\\oduData\\noMejis\\owarin\\owanrinObara.json',
    'data\\oduData\\noMejis\\owarin\\owanrinOkonron.json',
    'data\\oduData\\noMejis\\owarin\\owanrinOgunda.json',
    'data\\oduData\\noMejis\\owarin\\owanrinOsa.json',
    'data\\oduData\\noMejis\\owarin\\owanrinEka.json',
    'data\\oduData\\noMejis\\owarin\\owanrinEturukpon.json',
    'data\\oduData\\noMejis\\owarin\\owanrinEtura.json',
    'data\\oduData\\noMejis\\owarin\\owanrinIrete.json',
    'data\\oduData\\noMejis\\owarin\\owanrinOse.json',
    'data\\oduData\\noMejis\\owarin\\owanrinOfun.json',
    'data\\oduData\\noMejis\\obara\\obaraOgbe.json',
    'data\\oduData\\noMejis\\obara\\obaraOyeku.json',
    'data\\oduData\\noMejis\\obara\\obaraIwori.json',
    'data\\oduData\\noMejis\\obara\\obaraIdi.json',
    'data\\oduData\\noMejis\\obara\\obaraIrosun.json',
    'data\\oduData\\noMejis\\obara\\obaraOwanrin.json',
    'data\\oduData\\noMejis\\obara\\obaraOkonron.json',
    'data\\oduData\\noMejis\\obara\\obaraOgunda.json',
    'data\\oduData\\noMejis\\obara\\obaraOsa.json',
    'data\\oduData\\noMejis\\obara\\obaraEka.json',
    'data\\oduData\\noMejis\\obara\\obaraEturukpon.json',
    'data\\oduData\\noMejis\\obara\\obaraEtura.json',
    'data\\oduData\\noMejis\\obara\\obaraIrete.json',
    'data\\oduData\\noMejis\\obara\\obaraOse.json',
    'data\\oduData\\noMejis\\obara\\obaraOfun.json',
    'data\\oduData\\noMejis\\okonron\\okonronOgbe.json',
    'data\\oduData\\noMejis\\okonron\\okonronOyeku.json',
    'data\\oduData\\noMejis\\okonron\\okonronIwori.json',
    'data\\oduData\\noMejis\\okonron\\okonronIdi.json',
    'data\\oduData\\noMejis\\okonron\\okonronIrosun.json',
    'data\\oduData\\noMejis\\okonron\\okonronOwanrin.json',
    'data\\oduData\\noMejis\\okonron\\okonronObara.json',
    'data\\oduData\\noMejis\\okonron\\okonronOgunda.json',
    'data\\oduData\\noMejis\\okonron\\okonronOsa.json',
    'data\\oduData\\noMejis\\okonron\\okonronEka.json',
    'data\\oduData\\noMejis\\okonron\\okonronEturukpon.json',
    'data\\oduData\\noMejis\\okonron\\okonronEtura.json',
    'data\\oduData\\noMejis\\okonron\\okonronIrete.json',
    'data\\oduData\\noMejis\\okonron\\okonronOse.json',
    'data\\oduData\\noMejis\\okonron\\okonronOfun.json',
    'data\\oduData\\noMejis\\ogunda\\ogundaOgbe.json',
    'data\\oduData\\noMejis\\ogunda\\ogundaOyeku.json',
    'data\\oduData\\noMejis\\ogunda\\ogundaIwori.json',
    'data\\oduData\\noMejis\\ogunda\\ogundaIdi.json',
    'data\\oduData\\noMejis\\ogunda\\ogundaIrosun.json',
    'data\\oduData\\noMejis\\ogunda\\ogundaOwanrin.json',
    'data\\oduData\\noMejis\\ogunda\\ogundaObara.json',
    'data\\oduData\\noMejis\\ogunda\\ogundaOkonron.json',
    'data\\oduData\\noMejis\\ogunda\\ogundaOsa.json',
    'data\\oduData\\noMejis\\ogunda\\ogundaEka.json',
    'data\\oduData\\noMejis\\ogunda\\ogundaEturukpon.json',
    'data\\oduData\\noMejis\\ogunda\\ogundaEtura.json',
    'data\\oduData\\noMejis\\ogunda\\ogundaIrete.json',
    'data\\oduData\\noMejis\\ogunda\\ogundaOse.json',
    'data\\oduData\\noMejis\\ogunda\\ogundaOfun.json',
    'data\\oduData\\noMejis\\osa\\osaOgbe.json',
    'data\\oduData\\noMejis\\osa\\osaOyeku.json',
    'data\\oduData\\noMejis\\osa\\osaIwori.json',
    'data\\oduData\\noMejis\\osa\\osaIdi.json',
    'data\\oduData\\noMejis\\osa\\osaIrosun.json',
    'data\\oduData\\noMejis\\osa\\osaOwanrin.json',
    'data\\oduData\\noMejis\\osa\\osaObara.json',
    'data\\oduData\\noMejis\\osa\\osaOkonron.json',
    'data\\oduData\\noMejis\\osa\\osaOgunda.json',
    'data\\oduData\\noMejis\\osa\\osaEka.json',
    'data\\oduData\\noMejis\\osa\\osaEturukpon.json',
    'data\\oduData\\noMejis\\osa\\osaEtura.json',
    'data\\oduData\\noMejis\\osa\\osaIrete.json',
    'data\\oduData\\noMejis\\osa\\osaOse.json',
    'data\\oduData\\noMejis\\osa\\osaOfun.json',
    'data\\oduData\\noMejis\\eka\\ekaOgbe.json',
    'data\\oduData\\noMejis\\eka\\ekaOyeku.json',
    'data\\oduData\\noMejis\\eka\\ekaIwori.json',
    'data\\oduData\\noMejis\\eka\\ekaIdi.json',
    'data\\oduData\\noMejis\\eka\\ekaIrosun.json',
    'data\\oduData\\noMejis\\eka\\ekaOwanrin.json',
    'data\\oduData\\noMejis\\eka\\ekaObara.json',
    'data\\oduData\\noMejis\\eka\\ekaOkonron.json',
    'data\\oduData\\noMejis\\eka\\ekaOgunda.json',
    'data\\oduData\\noMejis\\eka\\ekaOsa.json',
    'data\\oduData\\noMejis\\eka\\ekaEturukpon.json',
    'data\\oduData\\noMejis\\eka\\ekaEtura.json',
    'data\\oduData\\noMejis\\eka\\ekaIrete.json',
    'data\\oduData\\noMejis\\eka\\ekaOse.json',
    'data\\oduData\\noMejis\\eka\\ekaOfun.json',
    'data\\oduData\\noMejis\\eturukpon\\eturukponOgbe.json',
    'data\\oduData\\noMejis\\eturukpon\\eturukponOyeku.json',
    'data\\oduData\\noMejis\\eturukpon\\eturukponIwori.json',
    'data\\oduData\\noMejis\\eturukpon\\eturukponIdi.json',
    'data\\oduData\\noMejis\\eturukpon\\eturukponIrosun.json',
    'data\\oduData\\noMejis\\eturukpon\\eturukponOwanrin.json',
    'data\\oduData\\noMejis\\eturukpon\\eturukponObara.json',
    'data\\oduData\\noMejis\\eturukpon\\eturukponOkonron.json',
    'data\\oduData\\noMejis\\eturukpon\\eturukponOgunda.json',
    'data\\oduData\\noMejis\\eturukpon\\eturukponOsa.json',
    'data\\oduData\\noMejis\\eturukpon\\eturukponEka.json',
    'data\\oduData\\noMejis\\eturukpon\\eturukponEtura.json',
    'data\\oduData\\noMejis\\eturukpon\\eturukponIrete.json',
    'data\\oduData\\noMejis\\eturukpon\\eturukponOse.json',
    'data\\oduData\\noMejis\\eturukpon\\eturukponOfun.json',
    'data\\oduData\\noMejis\\etura\\eturaOgbe.json',
    'data\\oduData\\noMejis\\etura\\eturaOyeku.json',
    'data\\oduData\\noMejis\\etura\\eturaIwori.json',
    'data\\oduData\\noMejis\\etura\\eturaIdi.json',
    'data\\oduData\\noMejis\\etura\\eturaIrosun.json',
    'data\\oduData\\noMejis\\etura\\eturaOwanrin.json',
    'data\\oduData\\noMejis\\etura\\eturaObara.json',
    'data\\oduData\\noMejis\\etura\\eturaOkonron.json',
    'data\\oduData\\noMejis\\etura\\eturaOgunda.json',
    'data\\oduData\\noMejis\\etura\\eturaOsa.json',
    'data\\oduData\\noMejis\\etura\\eturaEka.json',
    'data\\oduData\\noMejis\\etura\\eturaEturukpon.json',
    'data\\oduData\\noMejis\\etura\\eturaIrete.json',
    'data\\oduData\\noMejis\\etura\\eturaOse.json',
    'data\\oduData\\noMejis\\etura\\eturaOfun.json',
    'data\\oduData\\noMejis\\irete\\ireteOgbe.json',
    'data\\oduData\\noMejis\\irete\\ireteOyeku.json',
    'data\\oduData\\noMejis\\irete\\ireteIwori.json',
    'data\\oduData\\noMejis\\irete\\ireteIdi.json',
    'data\\oduData\\noMejis\\irete\\ireteIrosun.json',
    'data\\oduData\\noMejis\\irete\\ireteOwanrin.json',
    'data\\oduData\\noMejis\\irete\\ireteObara.json',
    'data\\oduData\\noMejis\\irete\\ireteOkonron.json',
    'data\\oduData\\noMejis\\irete\\ireteOgunda.json',
    'data\\oduData\\noMejis\\irete\\ireteOsa.json',
    'data\\oduData\\noMejis\\irete\\ireteEka.json',
    'data\\oduData\\noMejis\\irete\\ireteEturukpon.json',
    'data\\oduData\\noMejis\\irete\\ireteEtura.json',
    'data\\oduData\\noMejis\\irete\\ireteOse.json',
    'data\\oduData\\noMejis\\irete\\ireteOfun.json',
    'data\\oduData\\noMejis\\ose\\oseOgbe.json',
    'data\\oduData\\noMejis\\ose\\oseOyeku.json',
    'data\\oduData\\noMejis\\ose\\oseIwori.json',
    'data\\oduData\\noMejis\\ose\\oseIdi.json',
    'data\\oduData\\noMejis\\ose\\oseIrosun.json',
    'data\\oduData\\noMejis\\ose\\oseOwanrin.json',
    'data\\oduData\\noMejis\\ose\\oseObara.json',
    'data\\oduData\\noMejis\\ose\\oseOkonron.json',
    'data\\oduData\\noMejis\\ose\\oseOgunda.json',
    'data\\oduData\\noMejis\\ose\\oseOsa.json',
    'data\\oduData\\noMejis\\ose\\oseEka.json',
    'data\\oduData\\noMejis\\ose\\oseEturukpon.json',
    'data\\oduData\\noMejis\\ose\\oseEtura.json',
    'data\\oduData\\noMejis\\ose\\oseIrete.json',
    'data\\oduData\\noMejis\\ose\\oseOfun.json',
    'data\\oduData\\noMejis\\ofun\\ofunOgbe.json',
    'data\\oduData\\noMejis\\ofun\\ofunOyeku.json',
    'data\\oduData\\noMejis\\ofun\\ofuniwori.json',
    'data\\oduData\\noMejis\\ofun\\ofunIdi.json',
    'data\\oduData\\noMejis\\ofun\\ofunIrosun.json',
    'data\\oduData\\noMejis\\ofun\\ofunOwanrin.json',
    'data\\oduData\\noMejis\\ofun\\ofunObara.json',
    'data\\oduData\\noMejis\\ofun\\ofunOkonron.json',
    'data\\oduData\\noMejis\\ofun\\ofunOgunda.json',
    'data\\oduData\\noMejis\\ofun\\ofunOsa.json',
    'data\\oduData\\noMejis\\ofun\\ofunEka.json',
    'data\\oduData\\noMejis\\ofun\\ofunEturukpon.json',
    'data\\oduData\\noMejis\\ofun\\ofunEtura.json',
    'data\\oduData\\noMejis\\ofun\\ofunIrete.json',
    'data\\oduData\\noMejis\\ofun\\ofunOse.json',
];

var odus = ["Èjì Ogbè","Òyèkú Méjì","Ìwòrì Méjì","Òdí Méjì","Ìrosùn Méjì","Ọ̀wọ́nrín Méjì","Ọ̀bàrà Méjì","Ọ̀kànràn Méjì","Ògúndá Méjì","Ọ̀sá Méjì","Ìká Méjì","Òtúrúpòn Méjì","Òtúá Méjì","Ìrẹtẹ̀ Méjì","Ọ̀sẹ́ Méjì","Òfún Méjì","Ogbè Òyèkú","Ogbè Ìwòrì","Ogbè Òdí","Ogbè Ìrosùn","Ogbè Ọ̀wọ́nrín","Ogbè Ọ̀bàrà","Ogbè Ọ̀kànràn","Ogbè Ògúndá","Ogbè Ọ̀sá","Ogbè Ìká","Ogbè Òtúrúpòn","Ogbè Òtúá","Ogbè Ìrẹtẹ̀","Ogbè Ọ̀sẹ́","Ogbè Òfún","Òyèkú Ogbè","Òyèkú Ìwòrì","Òyèkú Òdí","Òyèkú Ìrosùn","Òyèkú Ọ̀wọ́nrín","Òyèkú Ọ̀bàrà","Òyèkú Ọ̀kànràn","Òyèkú Ògúndá","Òyèkú Ọ̀sá","Òyèkú Ìká","Òyèkú Òtúrúpòn","Òyèkú Òtúá","Òyèkú Ìrẹtẹ̀","Òyèkú Ọ̀sẹ́","Òyèkú Òfún","Ìwòrì Ogbè","Ìwòrì Òyèkú","Ìwòrì Òdí","Ìwòrì Ìrosùn","Ìwòrì Ọ̀wọ́nrín","Ìwòrì Ọ̀bàrà","Ìwòrì Ọ̀kànràn","Ìwòrì Ògúndá","Ìwòrì Ọ̀sá","Ìwòrì Ìká","Ìwòrì Òtúrúpòn","Ìwòrì Òtúá","Ìwòrì Ìrẹtẹ̀","Ìwòrì Ọ̀sẹ́","Ìwòrì Òfún","Òdí Ogbè","Òdí Òyèkú","Òdí Ìwòrì","Òdí Ìrosùn","Òdí Ọ̀wọ́nrín","Òdí Ọ̀bàrà","Òdí Ọ̀kànràn","Òdí Ògúndá","Òdí Ọ̀sá","Òdí Ìká","Òdí Òtúrúpòn","Òdí Òtúá","Òdí Ìrẹtẹ̀","Òdí Ọ̀sẹ́","Òdí Òfún","Ìrosùn Ogbè","Ìrosùn Òyèkú","Ìrosùn Ìwòrì","Ìrosùn Òdí","Ìrosùn Ọ̀wọ́nrín","Ìrosùn Ọ̀bàrà","Ìrosùn Ọ̀kànràn","Ìrosùn Ògúndá","Ìrosùn Ọ̀sá","Ìrosùn Ìká","Ìrosùn Òtúrúpòn","Ìrosùn Òtúá","Ìrosùn Ìrẹtẹ̀","Ìrosùn Ọ̀sẹ́","Ìrosùn Òfún","Ọ̀wọ́nrín Ogbè","Ọ̀wọ́nrín Òyèkú","Ọ̀wọ́nrín Ìwòrì","Ọ̀wọ́nrín Òdí","Ọ̀wọ́nrín Ìrosùn","Ọ̀wọ́nrín Ọ̀bàrà","Ọ̀wọ́nrín Ọ̀kànràn","Ọ̀wọ́nrín Ògúndá","Ọ̀wọ́nrín Ọ̀sá","Ọ̀wọ́nrín Ìká","Ọ̀wọ́nrín Òtúrúpòn","Ọ̀wọ́nrín Òtúá","Ọ̀wọ́nrín Ìrẹtẹ̀","Ọ̀wọ́nrín Ọ̀sẹ́","Ọ̀wọ́nrín Òfún","Ọ̀bàrà Ogbè","Ọ̀bàrà Òyèkú","Ọ̀bàrà Ìwòrì","Ọ̀bàrà Òdí","Ọ̀bàrà Ìrosùn","Ọ̀bàrà Ọ̀wọ́nrín","Ọ̀bàrà Ọ̀kànràn","Ọ̀bàrà Ògúndá","Ọ̀bàrà Ọ̀sá","Ọ̀bàrà Ìká","Ọ̀bàrà Òtúrúpòn","Ọ̀bàrà Òtúá","Ọ̀bàrà Ìrẹtẹ̀","Ọ̀bàrà Ọ̀sẹ́","Ọ̀bàrà Òfún","Ọ̀kànràn Ogbè","Ọ̀kànràn Òyèkú","Ọ̀kànràn Ìwòrì","Ọ̀kànràn Òdí","Ọ̀kànràn Ìrosùn","Ọ̀kànràn Ọ̀wọ́nrín","Ọ̀kànràn Ọ̀bàrà","Ọ̀kànràn Ògúndá","Ọ̀kànràn Ọ̀sá","Ọ̀kànràn Ìká","Ọ̀kànràn Òtúrúpòn","Ọ̀kànràn Òtúá","Ọ̀kànràn Ìrẹtẹ̀","Ọ̀kànràn Ọ̀sẹ́","Ọ̀kànràn Òfún","Ògúndá Ogbè","Ògúndá Òyèkú","Ògúndá Ìwòrì","Ògúndá Òdí","Ògúndá Ìrosùn","Ògúndá Ọ̀wọ́nrín","Ògúndá Ọ̀bàrà","Ògúndá Ọ̀kànràn","Ògúndá Ọ̀sá","Ògúndá Ìká","Ògúndá Òtúrúpòn","Ògúndá Òtúá","Ògúndá Ìrẹtẹ̀","Ògúndá Ọ̀sẹ́","Ògúndá Òfún","Ọ̀sá Ogbè","Ọ̀sá Òyèkú","Ọ̀sá Ìwòrì","Ọ̀sá Òdí","Ọ̀sá Ìrosùn","Ọ̀sá Ọ̀wọ́nrín","Ọ̀sá Ọ̀bàrà","Ọ̀sá kànràn","Ọ̀sá Ògúndá","Ọ̀sá Ìká","Ọ̀sá Òtúrúpòn","Ọ̀sá Òtúá","Ọ̀sá Ìrẹtẹ̀","Ọ̀sá Ọ̀sẹ́","Ọ̀sá Òfún","Ìká Ogbè","Ìká Òyèkú","Ìká Ìwòrì","Ìká Òdí","Ìká Ìrosùn","Ìká Ọ̀wọ́nrín","Ìká Ọ̀bàrà","Ìká Ọ̀kànràn","Ìká Ògúndá","Ìká Ọ̀sá","Ìká Òtúrúpòn","Ìká Òtúá","Ìká Ìrẹtẹ̀","Ìká Ọ̀sẹ́","Ìká Òfún","Òtúrúpòn Ogbè","Òtúrúpòn Òyèkú","Òtúrúpòn Ìwòrì","Òtúrúpòn Òdí","Òtúrúpòn Ìrosùn","Òtúrúpòn Ọ̀wọ́nrín","Òtúrúpòn Ọ̀bàrà","Òtúrúpòn Ọ̀kànràn","Òtúrúpòn Ògúndá","Òtúrúpòn Ọ̀sá","Òtúrúpòn Ìká","Òtúrúpòn Òtúá","Òtúrúpòn Ìrẹtẹ̀","Òtúrúpòn Ọ̀sẹ́","Òtúrúpòn Òfún","Òtúá Ogbè","Òtúá Òyèkú","Òtúá Ìwòrì","Òtúá Òdí","Òtúá Ìrosùn","Òtúá Ọ̀wọ́nrín","Òtúá Ọ̀bàrà","Òtúá Ọ̀kànràn","Òtúá Ògúndá","Òtúá Ọ̀sá","Òtúá Ìká","Òtúá Òtúrúpòn","Òtúá Ìrẹtẹ̀","Òtúá Ọ̀sẹ́","Òtúá Òfún","Ìrẹtẹ̀ Ogbè","Ìrẹtẹ̀ Òyèkú","Ìrẹtẹ̀ Ìwòrì","Ìrẹtẹ̀ Òdí","Ìrẹtẹ̀ Ìrosùn","Ìrẹtẹ̀ Ọ̀wọ́nrín","Ìrẹtẹ̀ Ọ̀bàrà","Ìrẹtẹ̀ Ọ̀kànràn","Ìrẹtẹ̀ Ògúndá","Ìrẹtẹ̀ Ọ̀sá","Ìrẹtẹ̀ Ìká","Ìrẹtẹ̀ Òtúrúpòn","Ìrẹtẹ̀ Òtúá","Ìrẹtẹ̀ Ọ̀sẹ́","Ìrẹtẹ̀ Òfún","Ọ̀sẹ́ Ogbè","Ọ̀sẹ́ Òyèkú","Ọ̀sẹ́ Ìwòrì","Ọ̀sẹ́ Òdí","Ọ̀sẹ́ Ìrosùn","Ọ̀sẹ́ Ọ̀wọ́nrín","Ọ̀sẹ́ Ọ̀bàrà","Ọ̀sẹ́ Ọ̀kànràn","Ọ̀sẹ́ Ògúndá","Ọ̀sẹ́ Ọ̀sá","Ọ̀sẹ́ Ìká","Ọ̀sẹ́ Òtúrúpòn","Ọ̀sẹ́ Òtúá","Ọ̀sẹ́ Ìrẹtẹ̀","Ọ̀sẹ́ Òfún","Òfún Ogbè","Òfún Òyèkú","Òfún Ìwòrì","Òfún Òdí","Òfún Ìrosùn","Òfún Ọ̀wọ́nrín","Òfún Ọ̀bàrà","Òfún Ọ̀kànràn","Òfún Ògúndá","Òfún Ọ̀sá","Òfún Ìká","Òfún Òtúrúpòn","Òfún Òtúá","Òfún Ìrẹtẹ̀","Òfún Ọ̀sẹ́"];
//var melo = ["Eji-Ogbe", "Oyeku-Meji", "iwori-Meji" ,"Idi-Meji" ,"Obara-Meji", "Okonron-Meji", "Irosun-Meji", "Owanrin-Meji", "Ogunda-Meji", "Osa-Meji", "Etura-Meji", "Irete-Meji", "Eka-Meji", "Eturukpon-Meji", "Ose-Meji", "Ofun-Meji", "Ogbe-Oyekun", "Ogbe-Iwori","Ogbe-Idi","Ogbe-Obara","Ogbe-Okonron","Ogbe-Irosun","Ogbe-Owanrin","Ogbe-Ogunda","Ogbe-Osa","Ogbe-Etura","Ogbe-Irete","Ogbe-Eka","Ogbe-Eturukpon","Ogbe-Ose","Ogbe-Ofun","Oyeku-Lo-Ogbe","Oyeku-Bi-Iwori","Oyeku-Di","Oyeku-Obara","Oyeku-Okonron","Oyeku-Irosun","Oyeku-Owanrin","Oyeku-Ogunda","Oyeku-Osa","Oyeku-Etura","Oyeku-Irete","Oyeku-Eturukpon","Oyeku-Be-Eka","Oyeku-Ose","Oyeku-Ofun","Iwori-Bo-Ogbe","Iwori-Oyeku","Iwori-Idi","Iwori-Obara","Iwori-Okonron","Iwori-Irosun","Iwori-Owanrin","Iwori-Ogunda","Iwori-Osa","Iwori-Etura","Iwori-Irete","Iwori-Eka","Iwori-Eturukpon","Iwori-Ose","Iwori-Ofun","Idi-Ogbe","Idi-Oyeku","Idi-Iwori","Idi-Obara","Idi-Okonron","Idi-Irosun","Idi-Owanrin","Idi-Ogunda","Idi-Osa","Idi-Etura","Idi-Irete","Idi-Eturukpon","Idi-Eka","Idi-Ose","Idi-Ofun","Obara-Ogbe","Obara-Oyeku","Obara-Iwori","Obara-Idi","Obara-Okonron","Obara-Irosun","Obara-Owanrin","Obara-Ogunda","Obara-Osa","Obara-Etura","Obara-Irete","Obara-Eka","Obara-Eturukpon","Obara-Ose","Obara-Ofun","Okonron-Ogbe","Okonron-Oyeku","Okonron-Iwori","Okonron-Idi","Okonron-Obara","Okonron-Irosun","Okonron-Owanrin","Okonron-Ogunda","Okonron-Osa","Okonron-Etura","Okonron-Irete","Okonron-Eka","Okonron-Eturukpon","Okonron-Ose","Okonron-Ofun","Irosun-Ogbe","Irosun-Oyeku","Irosun-Iwori","Irosun-Idi","Irosun-Obara","Irosun-Okonron","Irosun-Owanrin","Irosun-Ogunda","Irosun-Osa","Irosun-Etura","Irosun-Irete","Irosun-Eka","Irosun-Eturukpon","Irosun-Ose","Irosun-Ofun","Owanrin-So-Ogbe","Owanrin-Oyeku","Owanrin-Iwori","Owanrin-Idi","Owanrin-Obara","Owanrin-Okonron","Owanrin-Irosun","Owanrin-Ogunda","Owanrin-Osa","Owanrin-Etura","Owanrin-Irete","Owanrin-Eka","Owanrin-Eturukpon","Owanrin-Ose","Owanrin-Ofun","Ogunda-Ogbe","Ogunda-Oyeku","Ogunda-Iwori","Ogunda-Idi","Ogunda-Obara","Ogunda-Okonron","Ogunda-Irosun","Ogunda-Owanrin","Ogunda-Osa","Ogunda-Etura","Ogunda-Irete","Ogunda-Eka","Ogunda-Eturukpon","Ogunda-Ose","Ogunda-Ofun","Osa-Ogbe","Osa-Oyeku","Osa-Iwori","Osa-Idi","Osa-Obara","Osa-Okonron","Osa-Irosun","Osa-Ogunda","Osa-Owanrin","Osa-Etura","Osa-Irete","Osa-Eka","Osa-Eturukpon","Osa-Ose","Osa-Ofun","Etura-Ogbe","Etura-Oyeku","Etura-Iwori","Etura-Idi","Etura-Obara","Etura-Okonron","Etura-Irosun","Etura-Ogunda","Etura-Owanrin","Etura-Osa","Etura-Irete","Etura-Eka","Etura-Eturukpon","Etura-Ose","Etura-Ofun","Irete-Ogbe","Irete-Oyeku","Irete-Iwori","Irete-Idi","Irete-Obara","Irete-Okonron","Irete-Irosun","Irete-Ogunda","Irete-Owanrin","Irete-Osa","Irete-Etura","Irete-Eka","Irete-Eturukpon","Irete-Ose","Irete-Ofun","Eka-Ogbe","Eka-Oyeku","Eka-Iwori","Eka-Idi","Eka-Obara","Eka-Okonron","Eka-Irosun","Eka-Ogunda","Eka-Owanrin","Eka-Osa","Eka-Etura","Eka-Irete","Eka-Eturukpon","Eka-Ose","Eka-Ofun","Eturukpon-Ogbe","Eturukpon-Oyeku","Eturukpon-Iwori","Eturukpon-Idi","Eturukpon-Obara","Eturukpon-Okonron","Eturukpon-Irosun","Eturukpon-Ogunda","Eturukpon-Owanrin","Eturukpon-Osa","Eturukpon-Etura","Eturukpon-Irete","Eturukpon-Eka","Eturukpon-Ose","Eturukpon-Ofun","Ose-Ogbe","Ose-Oyeku","Ose-Iwori","Ose-Idi","Ose-Obara","Ose-Okonron","Ose-Irosun","Ose-Ogunda","Ose-Owanrin","Ose-Osa","Ose-Etura","Ose-Irete","Ose-Eka","Ose-Eturukpon","Ose-Ofun","Ofun-Ogbe","Ofun-Oyeku","Ofun-Iwori","Ofun-Idi","Ofun-Obara","Ofun-Okonron","Ofun-Irosun","Ofun-Ogunda","Ofun-Owanrin","Ofun-Osa","Ofun-Etura","Ofun-Irete","Ofun-Eka","Ofun-Eturukpon","Ofun-Ose"];
var right_odu ;
var left_odu ;
var odu; 
var oduIndexation = odus.indexOf(odu);
var oduJSONAddress = ''//information for the script in "assets\js\jsonfetch\fetchOduInformation.js"

var ListofOdusNamesForTheJSON = ["ejiogbe","oyekuMeji","iworiMeji","idiMeji ","irosunMeji","owanrinMeji","obaraMeji","okonronMeji","ogundaMeji","osaMeji","ekaMeji","eturukponMeji","eturaMeji","ireteMeji","oseMeji","ofunMeji","ogbeOyekun","ogbeIwori","ogbeIdi","ogbeIrosun","ogbeOwanrin","ogbeObara","ogbeOkonron","ogbeOgunda","ogbeOsa","ogbeEka","ogbeEturukpon","ogbeEtura","ogbeIrete","ogbeOse","ogbeOfun","oyekuLoOgbe","oyekubiIwori","oyekuDi","oyekuIrosun","oyekuOwanrin","oyekuObara","oyekuOkonron","oyekuOgunda","oyekuOsa","oyekubeEka","oyekuEturukpon","oyekuEtura","oyekuIrete","oyekuOse","oyekuOfun","iworiboOgbe","iworiOyeku","iworiIdi","iworiIrosun","iworiOwanrin","iworiObara","iworiOkonron","iworiOgunda","iworiOsa","iworiEka","iworiEturukpon","iworiEtura","iworiIrete","iworiOse","iworiOfun","idiOgbe","idiOyeku","idiIwori","idiIrosun","idiOwanrin","idiObara","idiOkonron","idiOgunda","idiOsa","idiEka","idiEturukpon","idiEtura","idiIrete","idiOse","idiOfun","irosunOgbe","irosunOyeku","irosunIwori","irosunIdi","irosunOwanrin","irosunObara","irosunOkonron","irosunOgunda","irosunOsa","irosunEka","irosunEturukpon","irosunEtura","irosunIrete","irosunOse","irosunOfun","owanrinsoOgbe","owanrinOyeku","owanrinIwori","owanrinIdi","owanrinIrosun","owanrinObara","owanrinOkonron","owanrinOgunda","owanrinOsa","owanrinEka","owanrinEturukpon","owanrinEtura","owanrinIrete","owanrinOse","owanrinOfun","obaraOgbe","obaraOyeku","obaraIwori","obaraIdi","obaraIrosun","obaraOwanrin","obaraOkonron","obaraOgunda","obaraOsa","obaraEka","obaraEturukpon","obaraEtura","obaraIrete","obaraOse","obaraOfun","okonronOgbe","okonronOyeku","okonronIwori","okonronIdi","okonronIrosun","okonronOwanrin","okonronObara","okonronOgunda","okonronOsa","okonronEka","okonronEturukpon","okonronEtura","okonronIrete","okonronOse","okonronOfun","ogundaOgbe","ogundaOyeku","ogundaIwori","ogundaIdi","ogundaIrosun","ogundaOwanrin","ogundaObara","ogundaOkonron","ogundaOsa","ogundaEka","ogundaEturukpon","ogundaEtura","ogundaIrete","ogundaOse","ogundaOfun","osaOgbe","osaOyeku","osaIwori","osaIdi","osaIrosun","osaOwanrin","osaObara","osaOkonron","osaOgunda","osaEka","osaEturukpon","osaEtura","osaIrete","osaOse","osaOfun","ekaOgbe","ekaOyeku","ekaIwori","ekaIdi","ekaIrosun","ekaOwanrin","ekaObara","ekaOkonron","ekaOgunda","ekaOsa","ekaEturukpon","ekaEtura","ekaIrete","ekaOse","ekaOfun","eturukponOgbe","eturukponOyeku","eturukponIwori","eturukponIdi","eturukponIrosun","eturukponOwanrin","eturukponObara","eturukponOkonron","eturukponOgunda","eturukponOsa","eturukponEka","eturukponEtura","eturukponIrete","eturukponOse","eturukponOfun","eturaOgbe","eturaOyeku","eturaIwori","eturaIdi","eturaIrosun","eturaOwanrin","eturaObara","eturaOkonron","eturaOgunda","eturaOsa","eturaEka","eturaEturukpon","eturaIrete","eturaOse","eturaOfun","ireteOgbe","ireteOyeku","ireteIwori","ireteIdi","ireteIrosun","ireteOwanrin","ireteObara","ireteOkonron","ireteOgunda","ireteOsa","ireteEka","ireteEturukpon","ireteEtura","ireteOse","ireteOfun","oseOgbe","oseOyeku","oseIwori","oseIdi","oseIrosun","oseOwanrin","oseObara","oseOkonron","oseOgunda","oseOsa","oseEka","oseEturukpon","oseEtura","oseIrete","oseOfun","ofunOgbe","ofunOyeku","ofunIwori","ofunIdi","ofunIrosun","ofunOwanrin","ofunObara","ofunOkonron","ofunOgunda","ofunOsa","ofunEka","ofunEturukpon","ofunEtura","ofunIrete","ofunOse"];
var oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];// set the default value of the odu to grab the json on the "assets\js\jsonfetch\fetchOduInformation.js" also this variable will update automatic
oduIndexation = odus.indexOf(odu)//to know the index of the selected odu.

//start to grab the information from the url action called Get URL Parameter Values from Query String in Javascript 
window.onload = function() {
    try {
        var url_string = (window.location.href);//grabing the url information and put the values into lower case
        var url = new URL(url_string);//grab the url processed previous and create a NEW URL
        var rightSideOduFromUrl = url.searchParams.get("firstodu");//the value passed as "firstodu" was cre
        var leftSideOduFromUrl = url.searchParams.get("secondodu");
     //start of mejis odus  
        if (rightSideOduFromUrl == "Ogbe" && leftSideOduFromUrl == "Ogbe") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ogbe_Meji);
            left_odu = "Ogbe";
            first_right = true;
            second_right = true;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ogbe_Meji);
            left_odu = "Ogbe";
            first_left = true;
            second_left = true;
            third_left = true;
            fourth_left = true;
            odu = odus[0];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Oyeku" && leftSideOduFromUrl == "Oyeku") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Oyeku_Meji);
            left_odu = "Oyeku";
            first_right = false;
            second_right = false;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Oyeku_Meji);
            left_odu = "Oyeku";
            first_left = false;
            second_left = false;
            third_left = false;
            fourth_left = false;
            odu = odus[1];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Iwori" && leftSideOduFromUrl == "Iwori") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Iwori_Meji);
            left_odu = "Iwori";
            first_right = false;
            second_right = true;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Iwori_Meji);
            left_odu = "Iwori";
            first_left = false;
            second_left = true;
            third_left = true;
            fourth_left = false;
            odu = odus[2];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Idi" && leftSideOduFromUrl == "Idi") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Idi_Meji);
            left_odu = "Idi";
            first_right = true;
            second_right = false;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Idi_Meji);
            left_odu = "Idi";
            first_left = true;
            second_left = false;
            third_left = false;
            fourth_left = true;
            odu = odus[3];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Irosun" && leftSideOduFromUrl == "Irosun") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Irosun_Meji);
            left_odu = "Irosun";
            first_right = true;
            second_right = true;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Irosun_Meji);
            left_odu = "Irosun";
            first_left = true;
            second_left = true;
            third_left = false;
            fourth_left = false;
            odu = odus[4];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Owanrin" && leftSideOduFromUrl == "Owanrin") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Owanrin_Meji);
            left_odu = "Owanrin";
            first_right = false;
            second_right = false;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Owanrin_Meji);
            left_odu = "Owanrin";
            first_left = false;
            second_left = false;
            third_left = true;
            fourth_left = true;
            odu = odus[5];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Obara" && leftSideOduFromUrl == "Obara") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Obara_Meji);
            left_odu = "Obara";
            first_right = true;
            second_right = false;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Obara_Meji);
            left_odu = "Obara";
            first_left = true;
            second_left = false;
            third_left = false;
            fourth_left = false;
            odu = odus[6];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Okonron" && leftSideOduFromUrl == "Okonron") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Okonron_Meji);
            left_odu = "Okonron";
            first_right = false;
            second_right = false;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Okonron_Meji);
            left_odu = "Okonron";
            first_left = false;
            second_left = false;
            third_left = false;
            fourth_left = true;
            odu = odus[7];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ogunda" && leftSideOduFromUrl == "Ogunda") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ogunda_Meji);
            left_odu = "Ogunda";
            first_right = true;
            second_right = true;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ogunda_Meji);
            left_odu = "Ogunda";
            first_left = true;
            second_left = true;
            third_left = true;
            fourth_left = false;
            odu = odus[8];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Osa" && leftSideOduFromUrl == "Osa") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Osa_Meji);
            left_odu = "Osa";
            first_right = false;
            second_right = true;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Osa_Meji);
            left_odu = "Osa";
            first_left = false;
            second_left = true;
            third_left = true;
            fourth_left = true;
            odu = odus[9];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Eka" && leftSideOduFromUrl == "Eka") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Eka_Meji);
            left_odu = "Eka";
            first_right = false;
            second_right = true;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Eka_Meji);
            left_odu = "Eka";
            first_left = false;
            second_left = true;
            third_left = false;
            fourth_left = false;
            odu = odus[10];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Eturukpon" && leftSideOduFromUrl == "Eturukpon") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Eturukpon_Meji);
            left_odu = "Eturukpon";
            first_right = false;
            second_right = false;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Eturukpon_Meji);
            left_odu = "Eturukpon";
            first_left = false;
            second_left = false;
            third_left = true;
            fourth_left = false;
            odu = odus[11];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Etura" && leftSideOduFromUrl == "Etura") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Etura_Meji);
            left_odu = "Etura";
            first_right = true;
            second_right = false;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Etura_Meji);
            left_odu = "Etura";
            first_left = true;
            second_left = false;
            third_left = true;
            fourth_left = true;
            odu = odus[12];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Irete" && leftSideOduFromUrl == "Irete") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Irete_Meji);
            left_odu = "Irete";
            first_right = true;
            second_right = true;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Irete_Meji);
            left_odu = "Irete";
            first_left = true;
            second_left = true;
            third_left = false;
            fourth_left = true;
            odu = odus[13];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ose" && leftSideOduFromUrl == "Ose") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ose_Meji);
            left_odu = "Ose";
            first_right = true;
            second_right = false;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ose_Meji);
            left_odu = "Ose";
            first_left = true;
            second_left = false;
            third_left = true;
            fourth_left = false;
            odu = odus[14];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ofun" && leftSideOduFromUrl == "Ofun") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ofun_Meji);
            left_odu = "Ofun";
            first_right = false;
            second_right = true;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ofun_Meji);
            left_odu = "Ofun";
            first_left = false;
            second_left = true;
            third_left = false;
            fourth_left = true;
            odu = odus[15];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
     //end of mejis odus 
     //start of Ogbe odus 
         else if (rightSideOduFromUrl == "Ogbe" && leftSideOduFromUrl == "Oyeku") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ogbe_Meji);
            left_odu = "Ogbe";
            first_right = true;
            second_right = true;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Oyeku_Meji);
            left_odu = "Oyeku";
            first_left = false;
            second_left = false;
            third_left = false;
            fourth_left = false;
            odu = odus[16];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
         else if (rightSideOduFromUrl == "Ogbe" && leftSideOduFromUrl == "Iwori") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ogbe_Meji);
            left_odu = "Ogbe";
            first_right = true;
            second_right = true;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Iwori_Meji);
            left_odu = "Iwori";
            first_left = false;
            second_left = true;
            third_left = true;
            fourth_left = false;
            odu = odus[17];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
         else if (rightSideOduFromUrl == "Ogbe" && leftSideOduFromUrl == "Idi") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ogbe_Meji);
            left_odu = "Ogbe";
            first_right = true;
            second_right = true;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Idi_Meji);
            left_odu = "Idi";
            first_left = true;
            second_left = false;
            third_left = false;
            fourth_left = true;
            odu = odus[18];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
         else if (rightSideOduFromUrl == "Ogbe" && leftSideOduFromUrl == "Irosun") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ogbe_Meji);
            left_odu = "Ogbe";
            first_right = true;
            second_right = true;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Irosun_Meji);
            left_odu = "Irosun";
            first_left = true;
            second_left = true;
            third_left = false;
            fourth_left = false;
            odu = odus[19];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
         else if (rightSideOduFromUrl == "Ogbe" && leftSideOduFromUrl == "Owanrin") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ogbe_Meji);
            left_odu = "Ogbe";
            first_right = true;
            second_right = true;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Owanrin_Meji);
            left_odu = "Owanrin";
            first_left = false;
            second_left = false;
            third_left = true;
            fourth_left = true;
            odu = odus[20];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
         else if (rightSideOduFromUrl == "Ogbe" && leftSideOduFromUrl == "Obara") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ogbe_Meji);
            left_odu = "Ogbe";
            first_right = true;
            second_right = true;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Obara_Meji);
            left_odu = "Obara";
            first_left = true;
            second_left = false;
            third_left = false;
            fourth_left = false;
            odu = odus[21];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
         else if (rightSideOduFromUrl == "Ogbe" && leftSideOduFromUrl == "Okonron") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ogbe_Meji);
            left_odu = "Ogbe";
            first_right = true;
            second_right = true;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Okonron_Meji);
            left_odu = "Okonron";
            first_left = false;
            second_left = false;
            third_left = false;
            fourth_left = true;
            odu = odus[22];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
         else if (rightSideOduFromUrl == "Ogbe" && leftSideOduFromUrl == "Ogunda") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ogbe_Meji);
            left_odu = "Ogbe";
            first_right = true;
            second_right = true;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ogunda_Meji);
            left_odu = "Ogunda";
            first_left = true;
            second_left = true;
            third_left = true;
            fourth_left = false;
            odu = odus[23];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
         else if (rightSideOduFromUrl == "Ogbe" && leftSideOduFromUrl == "Osa") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ogbe_Meji);
            left_odu = "Ogbe";
            first_right = true;
            second_right = true;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Osa_Meji);
            left_odu = "Osa";
            first_left = false;
            second_left = true;
            third_left = true;
            fourth_left = true;
            odu = odus[24];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
         else if (rightSideOduFromUrl == "Ogbe" && leftSideOduFromUrl == "Eka") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ogbe_Meji);
            left_odu = "Ogbe";
            first_right = true;
            second_right = true;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Eka_Meji);
            left_odu = "Eka";
            first_left = false;
            second_left = true;
            third_left = false;
            fourth_left = false;
            odu = odus[25];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
         else if (rightSideOduFromUrl == "Ogbe" && leftSideOduFromUrl == "Eturukpon") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ogbe_Meji);
            left_odu = "Ogbe";
            first_right = true;
            second_right = true;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Eturukpon_Meji);
            left_odu = "Eturukpon";
            first_left = false;
            second_left = false;
            third_left = true;
            fourth_left = false;
            odu = odus[26];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
         else if (rightSideOduFromUrl == "Ogbe" && leftSideOduFromUrl == "Etura") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ogbe_Meji);
            left_odu = "Ogbe";
            first_right = true;
            second_right = true;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Etura_Meji);
            left_odu = "Etura";
            first_left = true;
            second_left = false;
            third_left = true;
            fourth_left = true;
            odu = odus[27];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
         else if (rightSideOduFromUrl == "Ogbe" && leftSideOduFromUrl == "Irete") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ogbe_Meji);
            left_odu = "Ogbe";
            first_right = true;
            second_right = true;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Irete_Meji);
            left_odu = "Irete";
            first_left = true;
            second_left = true;
            third_left = false;
            fourth_left = true;
            odu = odus[28];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
         else if (rightSideOduFromUrl == "Ogbe" && leftSideOduFromUrl == "Ose") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ogbe_Meji);
            left_odu = "Ogbe";
            first_right = true;
            second_right = true;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ose_Meji);
            left_odu = "Ose";
            first_left = true;
            second_left = false;
            third_left = true;
            fourth_left = false;
            odu = odus[29];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
         else if (rightSideOduFromUrl == "Ogbe" && leftSideOduFromUrl == "Ofun") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ogbe_Meji);
            left_odu = "Ogbe";
            first_right = true;
            second_right = true;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ofun_Meji);
            left_odu = "Ofun";
            first_left = false;
            second_left = true;
            third_left = false;
            fourth_left = true;
            odu = odus[30];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
    
     //end of Ogbe odus 
     //start of Oyekun odus
     
        else if (rightSideOduFromUrl == "Oyeku" && leftSideOduFromUrl == "Ogbe") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Oyeku_Meji);
            left_odu = "Oyeku";
            first_right = false;
            second_right = false;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ogbe_Meji);
            left_odu = "Ogbe";
            first_left = true;
            second_left = true;
            third_left = true;
            fourth_left = true;
            odu = odus[31];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Oyeku" && leftSideOduFromUrl == "Iwori") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Oyeku_Meji);
            left_odu = "Oyeku";
            first_right = false;
            second_right = false;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Iwori_Meji);
            left_odu = "Iwori";
            first_left = false;
            second_left = true;
            third_left = true;
            fourth_left = false;
            odu = odus[32];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Oyeku" && leftSideOduFromUrl == "Idi") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Oyeku_Meji);
            left_odu = "Oyeku";
            first_right = false;
            second_right = false;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Idi_Meji);
            left_odu = "Idi";
            first_left = true;
            second_left = false;
            third_left = false;
            fourth_left = true;
            odu = odus[33];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Oyeku" && leftSideOduFromUrl == "Irosun") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Oyeku_Meji);
            left_odu = "Oyeku";
            first_right = false;
            second_right = false;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Irosun_Meji);
            left_odu = "Irosun";
            first_left = true;
            second_left = true;
            third_left = false;
            fourth_left = false;
            odu = odus[34];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Oyeku" && leftSideOduFromUrl == "Owanrin") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Oyeku_Meji);
            left_odu = "Oyeku";
            first_right = false;
            second_right = false;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Owanrin_Meji);
            left_odu = "Owanrin";
            first_left = false;
            second_left = false;
            third_left = true;
            fourth_left = true;
            odu = odus[35];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Oyeku" && leftSideOduFromUrl == "Obara") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Oyeku_Meji);
            left_odu = "Oyeku";
            first_right = false;
            second_right = false;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Obara_Meji);
            left_odu = "Obara";
            first_left = true;
            second_left = false;
            third_left = false;
            fourth_left = false;
            odu = odus[36];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Oyeku" && leftSideOduFromUrl == "Okonron") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Oyeku_Meji);
            left_odu = "Oyeku";
            first_right = false;
            second_right = false;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Okonron_Meji);
            left_odu = "Okonron";
            first_left = false;
            second_left = false;
            third_left = false;
            fourth_left = true;
            odu = odus[37];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Oyeku" && leftSideOduFromUrl == "Ogunda") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Oyeku_Meji);
            left_odu = "Oyeku";
            first_right = false;
            second_right = false;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ogunda_Meji);
            left_odu = "Ogunda";
            first_left = true;
            second_left = true;
            third_left = true;
            fourth_left = false;
            odu = odus[38];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Oyeku" && leftSideOduFromUrl == "Osa") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Oyeku_Meji);
            left_odu = "Oyeku";
            first_right = false;
            second_right = false;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Osa_Meji);
            left_odu = "Osa";
            first_left = false;
            second_left = true;
            third_left = true;
            fourth_left = true;
            odu = odus[39];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Oyeku" && leftSideOduFromUrl == "Eka") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Oyeku_Meji);
            left_odu = "Oyeku";
            first_right = false;
            second_right = false;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Eka_Meji);
            left_odu = "Eka";
            first_left = false;
            second_left = true;
            third_left = false;
            fourth_left = false;
            odu = odus[40];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Oyeku" && leftSideOduFromUrl == "Eturukpon") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Oyeku_Meji);
            left_odu = "Oyeku";
            first_right = false;
            second_right = false;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Eturukpon_Meji);
            left_odu = "Eturukpon";
            first_left = false;
            second_left = false;
            third_left = true;
            fourth_left = false;
            odu = odus[41];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Oyeku" && leftSideOduFromUrl == "Etura") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Oyeku_Meji);
            left_odu = "Oyeku";
            first_right = false;
            second_right = false;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Etura_Meji);
            left_odu = "Etura";
            first_left = true;
            second_left = false;
            third_left = true;
            fourth_left = true;
            odu = odus[42];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Oyeku" && leftSideOduFromUrl == "Irete") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Oyeku_Meji);
            left_odu = "Oyeku";
            first_right = false;
            second_right = false;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Irete_Meji);
            left_odu = "Irete";
            first_left = true;
            second_left = true;
            third_left = false;
            fourth_left = true;
            odu = odus[43];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Oyeku" && leftSideOduFromUrl == "Ose") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Oyeku_Meji);
            left_odu = "Oyeku";
            first_right = false;
            second_right = false;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ose_Meji);
            left_odu = "Ose";
            first_left = true;
            second_left = false;
            third_left = true;
            fourth_left = false;
            odu = odus[44];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Oyeku" && leftSideOduFromUrl == "Ofun") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Oyeku_Meji);
            left_odu = "Oyeku";
            first_right = false;
            second_right = false;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ofun_Meji);
            left_odu = "Ofun";
            first_left = false;
            second_left = true;
            third_left = false;
            fourth_left = true;
            odu = odus[45];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
     //end  of Oyekun odus

     //start of iwori odus
        else if (rightSideOduFromUrl == "Iwori" && leftSideOduFromUrl == "Ogbe") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Iwori_Meji);
            left_odu = "Iwori";
            first_right = false;
            second_right = true;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ogbe_Meji);
            left_odu = "Ogbe";
            first_left = true;
            second_left = true;
            third_left = true;
            fourth_left = true;
            odu = odus[46];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Iwori" && leftSideOduFromUrl == "Oyeku") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Iwori_Meji);
            left_odu = "Iwori";
            first_right = false;
            second_right = true;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Oyeku_Meji);
            left_odu = "Oyeku";
            first_left = false;
            second_left = false;
            third_left = false;
            fourth_left = false;
            odu = odus[47];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Iwori" && leftSideOduFromUrl == "Idi") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Iwori_Meji);
            left_odu = "Iwori";
            first_right = false;
            second_right = true;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Idi_Meji);
            left_odu = "Idi";
            first_left = true;
            second_left = false;
            third_left = false;
            fourth_left = true;
            odu = odus[48];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Iwori" && leftSideOduFromUrl == "Irosun") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Iwori_Meji);
            left_odu = "Iwori";
            first_right = false;
            second_right = true;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Irosun_Meji);
            left_odu = "Irosun";
            first_left = true;
            second_left = true;
            third_left = false;
            fourth_left = false;
            odu = odus[49];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Iwori" && leftSideOduFromUrl == "Owanrin") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Iwori_Meji);
            left_odu = "Iwori";
            first_right = false;
            second_right = true;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Owanrin_Meji);
            left_odu = "Owanrin";
            first_left = false;
            second_left = false;
            third_left = true;
            fourth_left = true;
            odu = odus[50];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Iwori" && leftSideOduFromUrl == "Obara") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Iwori_Meji);
            left_odu = "Iwori";
            first_right = false;
            second_right = true;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Obara_Meji);
            left_odu = "Obara";
            first_left = true;
            second_left = false;
            third_left = false;
            fourth_left = false;
            odu = odus[51];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Iwori" && leftSideOduFromUrl == "Okonron") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Iwori_Meji);
            left_odu = "Iwori";
            first_right = false;
            second_right = true;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Okonron_Meji);
            left_odu = "Okonron";
            first_left = false;
            second_left = false;
            third_left = false;
            fourth_left = true;
            odu = odus[52];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Iwori" && leftSideOduFromUrl == "Ogunda") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Iwori_Meji);
            left_odu = "Iwori";
            first_right = false;
            second_right = true;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ogunda_Meji);
            left_odu = "Ogunda";
            first_left = true;
            second_left = true;
            third_left = true;
            fourth_left = false;
            odu = odus[53];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Iwori" && leftSideOduFromUrl == "Osa") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Iwori_Meji);
            left_odu = "Iwori";
            first_right = false;
            second_right = true;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Osa_Meji);
            left_odu = "Osa";
            first_left = false;
            second_left = true;
            third_left = true;
            fourth_left = true;
            odu = odus[54];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Iwori" && leftSideOduFromUrl == "Eka") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Iwori_Meji);
            left_odu = "Iwori";
            first_right = false;
            second_right = true;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Eka_Meji);
            left_odu = "Eka";
            first_left = false;
            second_left = true;
            third_left = false;
            fourth_left = false;
            odu = odus[55];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Iwori" && leftSideOduFromUrl == "Eturukpon") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Iwori_Meji);
            left_odu = "Iwori";
            first_right = false;
            second_right = true;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Eturukpon_Meji);
            left_odu = "Eturukpon";
            first_left = false;
            second_left = false;
            third_left = true;
            fourth_left = false;
            odu = odus[56];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Iwori" && leftSideOduFromUrl == "Etura") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Iwori_Meji);
            left_odu = "Iwori";
            first_right = false;
            second_right = true;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Etura_Meji);
            left_odu = "Etura";
            first_left = true;
            second_left = false;
            third_left = true;
            fourth_left = true;
            odu = odus[57];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Iwori" && leftSideOduFromUrl == "Irete") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Iwori_Meji);
            left_odu = "Iwori";
            first_right = false;
            second_right = true;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Irete_Meji);
            left_odu = "Irete";
            first_left = true;
            second_left = true;
            third_left = false;
            fourth_left = true;
            odu = odus[58];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Iwori" && leftSideOduFromUrl == "Ose") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Iwori_Meji);
            left_odu = "Iwori";
            first_right = false;
            second_right = true;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ose_Meji);
            left_odu = "Ose";
            first_left = true;
            second_left = false;
            third_left = true;
            fourth_left = false;
            odu = odus[59];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Iwori" && leftSideOduFromUrl == "Ofun") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Iwori_Meji);
            left_odu = "Iwori";
            first_right = false;
            second_right = true;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ofun_Meji);
            left_odu = "Ofun";
            first_left = false;
            second_left = true;
            third_left = false;
            fourth_left = true;
            odu = odus[60];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
     //end of iwori odus
     //start of idi odus
        else if (rightSideOduFromUrl == "Idi" && leftSideOduFromUrl == "Ogbe") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Idi_Meji);
            left_odu = "Idi";
            first_right = true;
            second_right = false;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ogbe_Meji);
            left_odu = "Ogbe";
            first_left = true;
            second_left = true;
            third_left = true;
            fourth_left = true;
            odu = odus[61];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Idi" && leftSideOduFromUrl == "Oyeku") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Idi_Meji);
            left_odu = "Idi";
            first_right = true;
            second_right = false;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Oyeku_Meji);
            left_odu = "Oyeku";
            first_left = false;
            second_left = false;
            third_left = false;
            fourth_left = false;
            odu = odus[62];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Idi" && leftSideOduFromUrl == "Iwori") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Idi_Meji);
            left_odu = "Idi";
            first_right = true;
            second_right = false;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Iwori_Meji);
            left_odu = "Iwori";
            first_left = false;
            second_left = true;
            third_left = true;
            fourth_left = false;
            odu = odus[63];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Idi" && leftSideOduFromUrl == "Irosun") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Idi_Meji);
            left_odu = "Idi";
            first_right = true;
            second_right = false;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Irosun_Meji);
            left_odu = "Irosun";
            first_left = true;
            second_left = true;
            third_left = false;
            fourth_left = false;
            odu = odus[64];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Idi" && leftSideOduFromUrl == "Owanrin") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Idi_Meji);
            left_odu = "Idi";
            first_right = true;
            second_right = false;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Owanrin_Meji);
            left_odu = "Owanrin";
            first_left = false;
            second_left = false;
            third_left = true;
            fourth_left = true;
            odu = odus[65];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Idi" && leftSideOduFromUrl == "Obara") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Idi_Meji);
            left_odu = "Idi";
            first_right = true;
            second_right = false;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Obara_Meji);
            left_odu = "Obara";
            first_left = true;
            second_left = false;
            third_left = false;
            fourth_left = false;
            odu = odus[66];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Idi" && leftSideOduFromUrl == "Okonron") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Idi_Meji);
            left_odu = "Idi";
            first_right = true;
            second_right = false;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Okonron_Meji);
            left_odu = "Okonron";
            first_left = false;
            second_left = false;
            third_left = false;
            fourth_left = true;
            odu = odus[67];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Idi" && leftSideOduFromUrl == "Ogunda") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Idi_Meji);
            left_odu = "Idi";
            first_right = true;
            second_right = false;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ogunda_Meji);
            left_odu = "Ogunda";
            first_left = true;
            second_left = true;
            third_left = true;
            fourth_left = false;
            odu = odus[68];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Idi" && leftSideOduFromUrl == "Osa") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Idi_Meji);
            left_odu = "Idi";
            first_right = true;
            second_right = false;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Osa_Meji);
            left_odu = "Osa";
            first_left = false;
            second_left = true;
            third_left = true;
            fourth_left = true;
            odu = odus[69];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Idi" && leftSideOduFromUrl == "Eka") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Idi_Meji);
            left_odu = "Idi";
            first_right = true;
            second_right = false;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Eka_Meji);
            left_odu = "Eka";
            first_left = false;
            second_left = true;
            third_left = false;
            fourth_left = false;
            odu = odus[70];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Idi" && leftSideOduFromUrl == "Eturukpon") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Idi_Meji);
            left_odu = "Idi";
            first_right = true;
            second_right = false;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Eturukpon_Meji);
            left_odu = "Eturukpon";
            first_left = false;
            second_left = false;
            third_left = true;
            fourth_left = false;
            odu = odus[71];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Idi" && leftSideOduFromUrl == "Etura") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Idi_Meji);
            left_odu = "Idi";
            first_right = true;
            second_right = false;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Etura_Meji);
            left_odu = "Etura";
            first_left = true;
            second_left = false;
            third_left = true;
            fourth_left = true;
            odu = odus[72];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Idi" && leftSideOduFromUrl == "Irete") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Idi_Meji);
            left_odu = "Idi";
            first_right = true;
            second_right = false;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Irete_Meji);
            left_odu = "Irete";
            first_left = true;
            second_left = true;
            third_left = false;
            fourth_left = true;
            odu = odus[73];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Idi" && leftSideOduFromUrl == "Ose") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Idi_Meji);
            left_odu = "Idi";
            first_right = true;
            second_right = false;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ose_Meji);
            left_odu = "Ose";
            first_left = true;
            second_left = false;
            third_left = true;
            fourth_left = false;
            odu = odus[74];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Idi" && leftSideOduFromUrl == "Ofun") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Idi_Meji);
            left_odu = "Idi";
            first_right = true;
            second_right = false;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ofun_Meji);
            left_odu = "Ofun";
            first_left = false;
            second_left = true;
            third_left = false;
            fourth_left = true;
            odu = odus[75];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
     //end of idi odus
     //start of irosun  odus
        else if (rightSideOduFromUrl == "Irosun" && leftSideOduFromUrl == "Ogbe") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Irosun_Meji);
            left_odu = "Irosun";
            first_right = true;
            second_right = true;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ogbe_Meji);
            left_odu = "Ogbe";
            first_left = true;
            second_left = true;
            third_left = true;
            fourth_left = true;
            odu = odus[76];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Irosun" && leftSideOduFromUrl == "Oyeku") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Irosun_Meji);
            left_odu = "Irosun";
            first_right = true;
            second_right = true;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Oyeku_Meji);
            left_odu = "Oyeku";
            first_left = false;
            second_left = false;
            third_left = false;
            fourth_left = false;
            odu = odus[77];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Irosun" && leftSideOduFromUrl == "Iwori") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Irosun_Meji);
            left_odu = "Irosun";
            first_right = true;
            second_right = true;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Iwori_Meji);
            left_odu = "Iwori";
            first_left = false;
            second_left = true;
            third_left = true;
            fourth_left = false;
            odu = odus[78];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Irosun" && leftSideOduFromUrl == "Idi") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Irosun_Meji);
            left_odu = "Irosun";
            first_right = true;
            second_right = true;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Idi_Meji);
            left_odu = "Idi";
            first_left = true;
            second_left = false;
            third_left = false;
            fourth_left = true;
            odu = odus[79];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Irosun" && leftSideOduFromUrl == "Owanrin") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Irosun_Meji);
            left_odu = "Irosun";
            first_right = true;
            second_right = true;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Owanrin_Meji);
            left_odu = "Owanrin";
            first_left = false;
            second_left = false;
            third_left = true;
            fourth_left = true;
            odu = odus[80];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Irosun" && leftSideOduFromUrl == "Obara") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Irosun_Meji);
            left_odu = "Irosun";
            first_right = true;
            second_right = true;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Obara_Meji);
            left_odu = "Obara";
            first_left = true;
            second_left = false;
            third_left = false;
            fourth_left = false;
            odu = odus[81];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Irosun" && leftSideOduFromUrl == "Okonron") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Irosun_Meji);
            left_odu = "Irosun";
            first_right = true;
            second_right = true;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Okonron_Meji);
            left_odu = "Okonron";
            first_left = false;
            second_left = false;
            third_left = false;
            fourth_left = true;
            odu = odus[82];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Irosun" && leftSideOduFromUrl == "Ogunda") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Irosun_Meji);
            left_odu = "Irosun";
            first_right = true;
            second_right = true;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ogunda_Meji);
            left_odu = "Ogunda";
            first_left = true;
            second_left = true;
            third_left = true;
            fourth_left = false;
            odu = odus[83];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Irosun" && leftSideOduFromUrl == "Osa") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Irosun_Meji);
            left_odu = "Irosun";
            first_right = true;
            second_right = true;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Osa_Meji);
            left_odu = "Osa";
            first_left = false;
            second_left = true;
            third_left = true;
            fourth_left = true;
            odu = odus[84];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Irosun" && leftSideOduFromUrl == "Eka") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Irosun_Meji);
            left_odu = "Irosun";
            first_right = true;
            second_right = true;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Eka_Meji);
            left_odu = "Eka";
            first_left = false;
            second_left = true;
            third_left = false;
            fourth_left = false;
            odu = odus[85];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Irosun" && leftSideOduFromUrl == "Eturukpon") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Irosun_Meji);
            left_odu = "Irosun";
            first_right = true;
            second_right = true;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Eturukpon_Meji);
            left_odu = "Eturukpon";
            first_left = false;
            second_left = false;
            third_left = true;
            fourth_left = false;
            odu = odus[86];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Irosun" && leftSideOduFromUrl == "Etura") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Irosun_Meji);
            left_odu = "Irosun";
            first_right = true;
            second_right = true;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Etura_Meji);
            left_odu = "Etura";
            first_left = true;
            second_left = false;
            third_left = true;
            fourth_left = true;
            odu = odus[87];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Irosun" && leftSideOduFromUrl == "Irete") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Irosun_Meji);
            left_odu = "Irosun";
            first_right = true;
            second_right = true;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Irete_Meji);
            left_odu = "Irete";
            first_left = true;
            second_left = true;
            third_left = false;
            fourth_left = true;
            odu = odus[88];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Irosun" && leftSideOduFromUrl == "Ose") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Irosun_Meji);
            left_odu = "Irosun";
            first_right = true;
            second_right = true;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ose_Meji);
            left_odu = "Ose";
            first_left = true;
            second_left = false;
            third_left = true;
            fourth_left = false;
            odu = odus[89];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Irosun" && leftSideOduFromUrl == "Ofun") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Irosun_Meji);
            left_odu = "Irosun";
            first_right = true;
            second_right = true;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ofun_Meji);
            left_odu = "Ofun";
            first_left = false;
            second_left = true;
            third_left = false;
            fourth_left = true;
            odu = odus[90];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
     //end of irosun odus
     //start of owanrin odus
        else if (rightSideOduFromUrl == "Owanrin" && leftSideOduFromUrl == "Ogbe") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Owanrin_Meji);
            left_odu = "Owanrin";
            first_right = false;
            second_right = false;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ogbe_Meji);
            left_odu = "Ogbe";
            first_left = true;
            second_left = true;
            third_left = true;
            fourth_left = true;
            odu = odus[91];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Owanrin" && leftSideOduFromUrl == "Oyeku") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Owanrin_Meji);
            left_odu = "Owanrin";
            first_right = false;
            second_right = false;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Oyeku_Meji);
            left_odu = "Oyeku";
            first_left = false;
            second_left = false;
            third_left = false;
            fourth_left = false;
            odu = odus[92];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Owanrin" && leftSideOduFromUrl == "Iwori") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Owanrin_Meji);
            left_odu = "Owanrin";
            first_right = false;
            second_right = false;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Iwori_Meji);
            left_odu = "Iwori";
            first_left = false;
            second_left = true;
            third_left = true;
            fourth_left = false;
            odu = odus[93];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Owanrin" && leftSideOduFromUrl == "Idi") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Owanrin_Meji);
            left_odu = "Owanrin";
            first_right = false;
            second_right = false;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Idi_Meji);
            left_odu = "Idi";
            first_left = true;
            second_left = false;
            third_left = false;
            fourth_left = true;
            odu = odus[94];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Owanrin" && leftSideOduFromUrl == "Irosun") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Owanrin_Meji);
            left_odu = "Owanrin";
            first_right = false;
            second_right = false;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Irosun_Meji);
            left_odu = "Irosun";
            first_left = true;
            second_left = true;
            third_left = false;
            fourth_left = false;
            odu = odus[95];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Owanrin" && leftSideOduFromUrl == "Obara") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Owanrin_Meji);
            left_odu = "Owanrin";
            first_right = false;
            second_right = false;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Obara_Meji);
            left_odu = "Obara";
            first_left = true;
            second_left = false;
            third_left = false;
            fourth_left = false;
            odu = odus[96];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Owanrin" && leftSideOduFromUrl == "Okonron") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Owanrin_Meji);
            left_odu = "Owanrin";
            first_right = false;
            second_right = false;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Okonron_Meji);
            left_odu = "Okonron";
            first_left = false;
            second_left = false;
            third_left = false;
            fourth_left = true;
            odu = odus[97];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Owanrin" && leftSideOduFromUrl == "Ogunda") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Owanrin_Meji);
            left_odu = "Owanrin";
            first_right = false;
            second_right = false;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ogunda_Meji);
            left_odu = "Ogunda";
            first_left = true;
            second_left = true;
            third_left = true;
            fourth_left = false;
            odu = odus[98];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Owanrin" && leftSideOduFromUrl == "Osa") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Owanrin_Meji);
            left_odu = "Owanrin";
            first_right = false;
            second_right = false;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Osa_Meji);
            left_odu = "Osa";
            first_left = false;
            second_left = true;
            third_left = true;
            fourth_left = true;
            odu = odus[99];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Owanrin" && leftSideOduFromUrl == "Eka") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Owanrin_Meji);
            left_odu = "Owanrin";
            first_right = false;
            second_right = false;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Eka_Meji);
            left_odu = "Eka";
            first_left = false;
            second_left = true;
            third_left = false;
            fourth_left = false;
            odu = odus[100];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Owanrin" && leftSideOduFromUrl == "Eturukpon") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Owanrin_Meji);
            left_odu = "Owanrin";
            first_right = false;
            second_right = false;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Eturukpon_Meji);
            left_odu = "Eturukpon";
            first_left = false;
            second_left = false;
            third_left = true;
            fourth_left = false;
            odu = odus[101];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Owanrin" && leftSideOduFromUrl == "Etura") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Owanrin_Meji);
            left_odu = "Owanrin";
            first_right = false;
            second_right = false;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Etura_Meji);
            left_odu = "Etura";
            first_left = true;
            second_left = false;
            third_left = true;
            fourth_left = true;
            odu = odus[102];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Owanrin" && leftSideOduFromUrl == "Irete") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Owanrin_Meji);
            left_odu = "Owanrin";
            first_right = false;
            second_right = false;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Irete_Meji);
            left_odu = "Irete";
            first_left = true;
            second_left = true;
            third_left = false;
            fourth_left = true;
            odu = odus[103];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Owanrin" && leftSideOduFromUrl == "Ose") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Owanrin_Meji);
            left_odu = "Owanrin";
            first_right = false;
            second_right = false;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ose_Meji);
            left_odu = "Ose";
            first_left = true;
            second_left = false;
            third_left = true;
            fourth_left = false;
            odu = odus[104];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Owanrin" && leftSideOduFromUrl == "Ofun") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Owanrin_Meji);
            left_odu = "Owanrin";
            first_right = false;
            second_right = false;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ofun_Meji);
            left_odu = "Ofun";
            first_left = false;
            second_left = true;
            third_left = false;
            fourth_left = true;
            odu = odus[105];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        
     //end of owanrin odus
     //start of obara odus
        else if (rightSideOduFromUrl == "Obara" && leftSideOduFromUrl == "Ogbe") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Obara_Meji);
            left_odu = "Obara";
            first_right = true;
            second_right = false;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ogbe_Meji);
            left_odu = "Ogbe";
            first_left = true;
            second_left = true;
            third_left = true;
            fourth_left = true;
            odu = odus[106];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Obara" && leftSideOduFromUrl == "Oyeku") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Obara_Meji);
            left_odu = "Obara";
            first_right = true;
            second_right = false;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Oyeku_Meji);
            left_odu = "Oyeku";
            first_left = false;
            second_left = false;
            third_left = false;
            fourth_left = false;
            odu = odus[107];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Obara" && leftSideOduFromUrl == "Iwori") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Obara_Meji);
            left_odu = "Obara";
            first_right = true;
            second_right = false;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Iwori_Meji);
            left_odu = "Iwori";
            first_left = false;
            second_left = true;
            third_left = true;
            fourth_left = false;
            odu = odus[108];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Obara" && leftSideOduFromUrl == "Idi") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Obara_Meji);
            left_odu = "Obara";
            first_right = true;
            second_right = false;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Idi_Meji);
            left_odu = "Idi";
            first_left = true;
            second_left = false;
            third_left = false;
            fourth_left = true;
            odu = odus[109];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Obara" && leftSideOduFromUrl == "Irosun") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Obara_Meji);
            left_odu = "Obara";
            first_right = true;
            second_right = false;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Irosun_Meji);
            left_odu = "Irosun";
            first_left = true;
            second_left = true;
            third_left = false;
            fourth_left = false;
            odu = odus[110];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Obara" && leftSideOduFromUrl == "Owanrin") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Obara_Meji);
            left_odu = "Obara";
            first_right = true;
            second_right = false;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Owanrin_Meji);
            left_odu = "Owanrin";
            first_left = false;
            second_left = false;
            third_left = true;
            fourth_left = true;
            odu = odus[111];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Obara" && leftSideOduFromUrl == "Okonron") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Obara_Meji);
            left_odu = "Obara";
            first_right = true;
            second_right = false;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Okonron_Meji);
            left_odu = "Okonron";
            first_left = false;
            second_left = false;
            third_left = false;
            fourth_left = true;
            odu = odus[112];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Obara" && leftSideOduFromUrl == "Ogunda") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Obara_Meji);
            left_odu = "Obara";
            first_right = true;
            second_right = false;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ogunda_Meji);
            left_odu = "Ogunda";
            first_left = true;
            second_left = true;
            third_left = true;
            fourth_left = false;
            odu = odus[113];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Obara" && leftSideOduFromUrl == "Osa") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Obara_Meji);
            left_odu = "Obara";
            first_right = true;
            second_right = false;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Osa_Meji);
            left_odu = "Osa";
            first_left = false;
            second_left = true;
            third_left = true;
            fourth_left = true;
            odu = odus[114];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Obara" && leftSideOduFromUrl == "Eka") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Obara_Meji);
            left_odu = "Obara";
            first_right = true;
            second_right = false;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Eka_Meji);
            left_odu = "Eka";
            first_left = false;
            second_left = true;
            third_left = false;
            fourth_left = false;
            odu = odus[115];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Obara" && leftSideOduFromUrl == "Eturukpon") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Obara_Meji);
            left_odu = "Obara";
            first_right = true;
            second_right = false;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Eturukpon_Meji);
            left_odu = "Eturukpon";
            first_left = false;
            second_left = false;
            third_left = true;
            fourth_left = false;
            odu = odus[116];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Obara" && leftSideOduFromUrl == "Etura") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Obara_Meji);
            left_odu = "Obara";
            first_right = true;
            second_right = false;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Etura_Meji);
            left_odu = "Etura";
            first_left = true;
            second_left = false;
            third_left = true;
            fourth_left = true;
            odu = odus[117];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Obara" && leftSideOduFromUrl == "Irete") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Obara_Meji);
            left_odu = "Obara";
            first_right = true;
            second_right = false;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Irete_Meji);
            left_odu = "Irete";
            first_left = true;
            second_left = true;
            third_left = false;
            fourth_left = true;
            odu = odus[118];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Obara" && leftSideOduFromUrl == "Ose") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Obara_Meji);
            left_odu = "Obara";
            first_right = true;
            second_right = false;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ose_Meji);
            left_odu = "Ose";
            first_left = true;
            second_left = false;
            third_left = true;
            fourth_left = false;
            odu = odus[119];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Obara" && leftSideOduFromUrl == "Ofun") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Obara_Meji);
            left_odu = "Obara";
            first_right = true;
            second_right = false;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ofun_Meji);
            left_odu = "Ofun";
            first_left = false;
            second_left = true;
            third_left = false;
            fourth_left = true;
            odu = odus[120];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
     //end of obara odus
     //start of okonron odus
        else if (rightSideOduFromUrl == "Okonron" && leftSideOduFromUrl == "Ogbe") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Okonron_Meji);
            left_odu = "Okonron";
            first_right = false;
            second_right = false;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ogbe_Meji);
            left_odu = "Ogbe";
            first_left = true;
            second_left = true;
            third_left = true;
            fourth_left = true;
            odu = odus[121];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Okonron" && leftSideOduFromUrl == "Oyeku") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Okonron_Meji);
            left_odu = "Okonron";
            first_right = false;
            second_right = false;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Oyeku_Meji);
            left_odu = "Oyeku";
            first_left = false;
            second_left = false;
            third_left = false;
            fourth_left = false;
            odu = odus[122];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Okonron" && leftSideOduFromUrl == "Iwori") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Okonron_Meji);
            left_odu = "Okonron";
            first_right = false;
            second_right = false;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Iwori_Meji);
            left_odu = "Iwori";
            first_left = false;
            second_left = true;
            third_left = true;
            fourth_left = false;
            odu = odus[123];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Okonron" && leftSideOduFromUrl == "Idi") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Okonron_Meji);
            left_odu = "Okonron";
            first_right = false;
            second_right = false;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Idi_Meji);
            left_odu = "Idi";
            first_left = true;
            second_left = false;
            third_left = false;
            fourth_left = true;
            odu = odus[124];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Okonron" && leftSideOduFromUrl == "Irosun") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Okonron_Meji);
            left_odu = "Okonron";
            first_right = false;
            second_right = false;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Irosun_Meji);
            left_odu = "Irosun";
            first_left = true;
            second_left = true;
            third_left = false;
            fourth_left = false;
            odu = odus[125];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Okonron" && leftSideOduFromUrl == "Owanrin") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Okonron_Meji);
            left_odu = "Okonron";
            first_right = false;
            second_right = false;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Owanrin_Meji);
            left_odu = "Owanrin";
            first_left = false;
            second_left = false;
            third_left = true;
            fourth_left = true;
            odu = odus[126];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Okonron" && leftSideOduFromUrl == "Obara") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Okonron_Meji);
            left_odu = "Okonron";
            first_right = false;
            second_right = false;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Obara_Meji);
            left_odu = "Obara";
            first_left = true;
            second_left = false;
            third_left = false;
            fourth_left = false;
            odu = odus[127];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Okonron" && leftSideOduFromUrl == "Ogunda") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Okonron_Meji);
            left_odu = "Okonron";
            first_right = false;
            second_right = false;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ogunda_Meji);
            left_odu = "Ogunda";
            first_left = true;
            second_left = true;
            third_left = true;
            fourth_left = false;
            odu = odus[128];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Okonron" && leftSideOduFromUrl == "Osa") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Okonron_Meji);
            left_odu = "Okonron";
            first_right = false;
            second_right = false;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Osa_Meji);
            left_odu = "Osa";
            first_left = false;
            second_left = true;
            third_left = true;
            fourth_left = true;
            odu = odus[129];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Okonron" && leftSideOduFromUrl == "Eka") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Okonron_Meji);
            left_odu = "Okonron";
            first_right = false;
            second_right = false;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Eka_Meji);
            left_odu = "Eka";
            first_left = false;
            second_left = true;
            third_left = false;
            fourth_left = false;
            odu = odus[130];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Okonron" && leftSideOduFromUrl == "Eturukpon") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Okonron_Meji);
            left_odu = "Okonron";
            first_right = false;
            second_right = false;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Eturukpon_Meji);
            left_odu = "Eturukpon";
            first_left = false;
            second_left = false;
            third_left = true;
            fourth_left = false;
            odu = odus[131];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Okonron" && leftSideOduFromUrl == "Etura") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Okonron_Meji);
            left_odu = "Okonron";
            first_right = false;
            second_right = false;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Etura_Meji);
            left_odu = "Etura";
            first_left = true;
            second_left = false;
            third_left = true;
            fourth_left = true;
            odu = odus[132];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Okonron" && leftSideOduFromUrl == "Irete") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Okonron_Meji);
            left_odu = "Okonron";
            first_right = false;
            second_right = false;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Irete_Meji);
            left_odu = "Irete";
            first_left = true;
            second_left = true;
            third_left = false;
            fourth_left = true;
            odu = odus[133];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Okonron" && leftSideOduFromUrl == "Ose") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Okonron_Meji);
            left_odu = "Okonron";
            first_right = false;
            second_right = false;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ose_Meji);
            left_odu = "Ose";
            first_left = true;
            second_left = false;
            third_left = true;
            fourth_left = false;
            odu = odus[134];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Okonron" && leftSideOduFromUrl == "Ofun") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Okonron_Meji);
            left_odu = "Okonron";
            first_right = false;
            second_right = false;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ofun_Meji);
            left_odu = "Ofun";
            first_left = false;
            second_left = true;
            third_left = false;
            fourth_left = true;
            odu = odus[135];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        
     //end of okonron odus
     //start of ogunda odus
        else if (rightSideOduFromUrl == "Ogunda" && leftSideOduFromUrl == "Ogbe") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ogunda_Meji);
            left_odu = "Ogunda";
            first_right = true;
            second_right = true;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ogbe_Meji);
            left_odu = "Ogbe";
            first_left = true;
            second_left = true;
            third_left = true;
            fourth_left = true;
            odu = odus[136];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ogunda" && leftSideOduFromUrl == "Oyeku") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ogunda_Meji);
            left_odu = "Ogunda";
            first_right = true;
            second_right = true;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Oyeku_Meji);
            left_odu = "Oyeku";
            first_left = false;
            second_left = false;
            third_left = false;
            fourth_left = false;
            odu = odus[137];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ogunda" && leftSideOduFromUrl == "Iwori") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ogunda_Meji);
            left_odu = "Ogunda";
            first_right = true;
            second_right = true;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Iwori_Meji);
            left_odu = "Iwori";
            first_left = false;
            second_left = true;
            third_left = true;
            fourth_left = false;
            odu = odus[138];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ogunda" && leftSideOduFromUrl == "Idi") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ogunda_Meji);
            left_odu = "Ogunda";
            first_right = true;
            second_right = true;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Idi_Meji);
            left_odu = "Idi";
            first_left = true;
            second_left = false;
            third_left = false;
            fourth_left = true;
            odu = odus[139];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ogunda" && leftSideOduFromUrl == "Irosun") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ogunda_Meji);
            left_odu = "Ogunda";
            first_right = true;
            second_right = true;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Irosun_Meji);
            left_odu = "Irosun";
            first_left = true;
            second_left = true;
            third_left = false;
            fourth_left = false;
            odu = odus[140];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ogunda" && leftSideOduFromUrl == "Owanrin") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ogunda_Meji);
            left_odu = "Ogunda";
            first_right = true;
            second_right = true;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Owanrin_Meji);
            left_odu = "Owanrin";
            first_left = false;
            second_left = false;
            third_left = true;
            fourth_left = true;
            odu = odus[141];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ogunda" && leftSideOduFromUrl == "Obara") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ogunda_Meji);
            left_odu = "Ogunda";
            first_right = true;
            second_right = true;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Obara_Meji);
            left_odu = "Obara";
            first_left = true;
            second_left = false;
            third_left = false;
            fourth_left = false;
            odu = odus[142];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ogunda" && leftSideOduFromUrl == "Okonron") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ogunda_Meji);
            left_odu = "Ogunda";
            first_right = true;
            second_right = true;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Okonron_Meji);
            left_odu = "Okonron";
            first_left = false;
            second_left = false;
            third_left = false;
            fourth_left = true;
            odu = odus[143];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ogunda" && leftSideOduFromUrl == "Osa") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ogunda_Meji);
            left_odu = "Ogunda";
            first_right = true;
            second_right = true;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Osa_Meji);
            left_odu = "Osa";
            first_left = false;
            second_left = true;
            third_left = true;
            fourth_left = true;
            odu = odus[144];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ogunda" && leftSideOduFromUrl == "Eka") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ogunda_Meji);
            left_odu = "Ogunda";
            first_right = true;
            second_right = true;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Eka_Meji);
            left_odu = "Eka";
            first_left = false;
            second_left = true;
            third_left = false;
            fourth_left = false;
            odu = odus[145];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ogunda" && leftSideOduFromUrl == "Eturukpon") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ogunda_Meji);
            left_odu = "Ogunda";
            first_right = true;
            second_right = true;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Eturukpon_Meji);
            left_odu = "Eturukpon";
            first_left = false;
            second_left = false;
            third_left = true;
            fourth_left = false;
            odu = odus[146];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ogunda" && leftSideOduFromUrl == "Etura") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ogunda_Meji);
            left_odu = "Ogunda";
            first_right = true;
            second_right = true;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Etura_Meji);
            left_odu = "Etura";
            first_left = true;
            second_left = false;
            third_left = true;
            fourth_left = true;
            odu = odus[147];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ogunda" && leftSideOduFromUrl == "Irete") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ogunda_Meji);
            left_odu = "Ogunda";
            first_right = true;
            second_right = true;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Irete_Meji);
            left_odu = "Irete";
            first_left = true;
            second_left = true;
            third_left = false;
            fourth_left = true;
            odu = odus[148];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ogunda" && leftSideOduFromUrl == "Ose") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ogunda_Meji);
            left_odu = "Ogunda";
            first_right = true;
            second_right = true;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ose_Meji);
            left_odu = "Ose";
            first_left = true;
            second_left = false;
            third_left = true;
            fourth_left = false;
            odu = odus[149];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ogunda" && leftSideOduFromUrl == "Ofun") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ogunda_Meji);
            left_odu = "Ogunda";
            first_right = true;
            second_right = true;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ofun_Meji);
            left_odu = "Ofun";
            first_left = false;
            second_left = true;
            third_left = false;
            fourth_left = true;
            odu = odus[150];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
     //end of ogunda odus
     //start of osa odus
        else if (rightSideOduFromUrl == "Osa" && leftSideOduFromUrl == "Ogbe") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Osa_Meji);
            left_odu = "Osa";
            first_right = false;
            second_right = true;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ogbe_Meji);
            left_odu = "Ogbe";
            first_left = true;
            second_left = true;
            third_left = true;
            fourth_left = true;
            odu = odus[151];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Osa" && leftSideOduFromUrl == "Oyeku") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Osa_Meji);
            left_odu = "Osa";
            first_right = false;
            second_right = true;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Oyeku_Meji);
            left_odu = "Oyeku";
            first_left = false;
            second_left = false;
            third_left = false;
            fourth_left = false;
            odu = odus[152];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Osa" && leftSideOduFromUrl == "Iwori") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Osa_Meji);
            left_odu = "Osa";
            first_right = false;
            second_right = true;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Iwori_Meji);
            left_odu = "Iwori";
            first_left = false;
            second_left = true;
            third_left = true;
            fourth_left = false;
            odu = odus[153];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Osa" && leftSideOduFromUrl == "Idi") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Osa_Meji);
            left_odu = "Osa";
            first_right = false;
            second_right = true;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Idi_Meji);
            left_odu = "Idi";
            first_left = true;
            second_left = false;
            third_left = false;
            fourth_left = true;
            odu = odus[154];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Osa" && leftSideOduFromUrl == "Irosun") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Osa_Meji);
            left_odu = "Osa";
            first_right = false;
            second_right = true;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Irosun_Meji);
            left_odu = "Irosun";
            first_left = true;
            second_left = true;
            third_left = false;
            fourth_left = false;
            odu = odus[155];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Osa" && leftSideOduFromUrl == "Owanrin") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Osa_Meji);
            left_odu = "Osa";
            first_right = false;
            second_right = true;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Owanrin_Meji);
            left_odu = "Owanrin";
            first_left = false;
            second_left = false;
            third_left = true;
            fourth_left = true;
            odu = odus[156];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Osa" && leftSideOduFromUrl == "Obara") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Osa_Meji);
            left_odu = "Osa";
            first_right = false;
            second_right = true;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Obara_Meji);
            left_odu = "Obara";
            first_left = true;
            second_left = false;
            third_left = false;
            fourth_left = false;
            odu = odus[157];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Osa" && leftSideOduFromUrl == "Okonron") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Osa_Meji);
            left_odu = "Osa";
            first_right = false;
            second_right = true;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Okonron_Meji);
            left_odu = "Okonron";
            first_left = false;
            second_left = false;
            third_left = false;
            fourth_left = true;
            odu = odus[158];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Osa" && leftSideOduFromUrl == "Ogunda") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Osa_Meji);
            left_odu = "Osa";
            first_right = false;
            second_right = true;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ogunda_Meji);
            left_odu = "Ogunda";
            first_left = true;
            second_left = true;
            third_left = true;
            fourth_left = false;
            odu = odus[159];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Osa" && leftSideOduFromUrl == "Eka") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Osa_Meji);
            left_odu = "Osa";
            first_right = false;
            second_right = true;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Eka_Meji);
            left_odu = "Eka";
            first_left = false;
            second_left = true;
            third_left = false;
            fourth_left = false;
            odu = odus[160];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Osa" && leftSideOduFromUrl == "Eturukpon") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Osa_Meji);
            left_odu = "Osa";
            first_right = false;
            second_right = true;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Eturukpon_Meji);
            left_odu = "Eturukpon";
            first_left = false;
            second_left = false;
            third_left = true;
            fourth_left = false;
            odu = odus[161];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Osa" && leftSideOduFromUrl == "Etura") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Osa_Meji);
            left_odu = "Osa";
            first_right = false;
            second_right = true;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Etura_Meji);
            left_odu = "Etura";
            first_left = true;
            second_left = false;
            third_left = true;
            fourth_left = true;
            odu = odus[162];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Osa" && leftSideOduFromUrl == "Irete") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Osa_Meji);
            left_odu = "Osa";
            first_right = false;
            second_right = true;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Irete_Meji);
            left_odu = "Irete";
            first_left = true;
            second_left = true;
            third_left = false;
            fourth_left = true;
            odu = odus[163];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Osa" && leftSideOduFromUrl == "Ose") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Osa_Meji);
            left_odu = "Osa";
            first_right = false;
            second_right = true;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ose_Meji);
            left_odu = "Ose";
            first_left = true;
            second_left = false;
            third_left = true;
            fourth_left = false;
            odu = odus[164];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Osa" && leftSideOduFromUrl == "Ofun") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Osa_Meji);
            left_odu = "Osa";
            first_right = false;
            second_right = true;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ofun_Meji);
            left_odu = "Ofun";
            first_left = false;
            second_left = true;
            third_left = false;
            fourth_left = true;
            odu = odus[165];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
     //end of osa odus
     //start of eka odus
        else if (rightSideOduFromUrl == "Eka" && leftSideOduFromUrl == "Ogbe") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Eka_Meji);
            left_odu = "Eka";
            first_right = false;
            second_right = true;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ogbe_Meji);
            left_odu = "Ogbe";
            first_left = true;
            second_left = true;
            third_left = true;
            fourth_left = true;
            odu = odus[166];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Eka" && leftSideOduFromUrl == "Oyeku") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Eka_Meji);
            left_odu = "Eka";
            first_right = false;
            second_right = true;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Oyeku_Meji);
            left_odu = "Oyeku";
            first_left = false;
            second_left = false;
            third_left = false;
            fourth_left = false;
            odu = odus[167];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Eka" && leftSideOduFromUrl == "Iwori") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Eka_Meji);
            left_odu = "Eka";
            first_right = false;
            second_right = true;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Iwori_Meji);
            left_odu = "Iwori";
            first_left = false;
            second_left = true;
            third_left = true;
            fourth_left = false;
            odu = odus[168];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Eka" && leftSideOduFromUrl == "Idi") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Eka_Meji);
            left_odu = "Eka";
            first_right = false;
            second_right = true;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Idi_Meji);
            left_odu = "Idi";
            first_left = true;
            second_left = false;
            third_left = false;
            fourth_left = true;
            odu = odus[169];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Eka" && leftSideOduFromUrl == "Irosun") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Eka_Meji);
            left_odu = "Eka";
            first_right = false;
            second_right = true;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Irosun_Meji);
            left_odu = "Irosun";
            first_left = true;
            second_left = true;
            third_left = false;
            fourth_left = false;
            odu = odus[170];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Eka" && leftSideOduFromUrl == "Owanrin") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Eka_Meji);
            left_odu = "Eka";
            first_right = false;
            second_right = true;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Owanrin_Meji);
            left_odu = "Owanrin";
            first_left = false;
            second_left = false;
            third_left = true;
            fourth_left = true;
            odu = odus[171];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Eka" && leftSideOduFromUrl == "Obara") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Eka_Meji);
            left_odu = "Eka";
            first_right = false;
            second_right = true;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Obara_Meji);
            left_odu = "Obara";
            first_left = true;
            second_left = false;
            third_left = false;
            fourth_left = false;
            odu = odus[172];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Eka" && leftSideOduFromUrl == "Okonron") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Eka_Meji);
            left_odu = "Eka";
            first_right = false;
            second_right = true;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Okonron_Meji);
            left_odu = "Okonron";
            first_left = false;
            second_left = false;
            third_left = false;
            fourth_left = true;
            odu = odus[173];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Eka" && leftSideOduFromUrl == "Ogunda") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Eka_Meji);
            left_odu = "Eka";
            first_right = false;
            second_right = true;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ogunda_Meji);
            left_odu = "Ogunda";
            first_left = true;
            second_left = true;
            third_left = true;
            fourth_left = false;
            odu = odus[174];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Eka" && leftSideOduFromUrl == "Osa") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Eka_Meji);
            left_odu = "Eka";
            first_right = false;
            second_right = true;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Osa_Meji);
            left_odu = "Osa";
            first_left = false;
            second_left = true;
            third_left = true;
            fourth_left = true;
            odu = odus[175];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Eka" && leftSideOduFromUrl == "Eturukpon") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Eka_Meji);
            left_odu = "Eka";
            first_right = false;
            second_right = true;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Eturukpon_Meji);
            left_odu = "Eturukpon";
            first_left = false;
            second_left = false;
            third_left = true;
            fourth_left = false;
            odu = odus[176];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Eka" && leftSideOduFromUrl == "Etura") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Eka_Meji);
            left_odu = "Eka";
            first_right = false;
            second_right = true;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Etura_Meji);
            left_odu = "Etura";
            first_left = true;
            second_left = false;
            third_left = true;
            fourth_left = true;
            odu = odus[177];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Eka" && leftSideOduFromUrl == "Irete") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Eka_Meji);
            left_odu = "Eka";
            first_right = false;
            second_right = true;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Irete_Meji);
            left_odu = "Irete";
            first_left = true;
            second_left = true;
            third_left = false;
            fourth_left = true;
            odu = odus[178];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Eka" && leftSideOduFromUrl == "Ose") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Eka_Meji);
            left_odu = "Eka";
            first_right = false;
            second_right = true;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ose_Meji);
            left_odu = "Ose";
            first_left = true;
            second_left = false;
            third_left = true;
            fourth_left = false;
            odu = odus[179];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Eka" && leftSideOduFromUrl == "Ofun") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Eka_Meji);
            left_odu = "Eka";
            first_right = false;
            second_right = true;
            third_right = false;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ofun_Meji);
            left_odu = "Ofun";
            first_left = false;
            second_left = true;
            third_left = false;
            fourth_left = true;
            odu = odus[180];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
     //end of eka odus
     //start of eturukpon odus
        else if (rightSideOduFromUrl == "Eturukpon" && leftSideOduFromUrl == "Ogbe") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Eturukpon_Meji);
            left_odu = "Eturukpon";
            first_right = false;
            second_right = false;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ogbe_Meji);
            left_odu = "Ogbe";
            first_left = true;
            second_left = true;
            third_left = true;
            fourth_left = true;
            odu = odus[181];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Eturukpon" && leftSideOduFromUrl == "Oyeku") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Eturukpon_Meji);
            left_odu = "Eturukpon";
            first_right = false;
            second_right = false;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Oyeku_Meji);
            left_odu = "Oyeku";
            first_left = false;
            second_left = false;
            third_left = false;
            fourth_left = false;
            odu = odus[182];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Eturukpon" && leftSideOduFromUrl == "Iwori") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Eturukpon_Meji);
            left_odu = "Eturukpon";
            first_right = false;
            second_right = false;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Iwori_Meji);
            left_odu = "Iwori";
            first_left = false;
            second_left = true;
            third_left = true;
            fourth_left = false;
            odu = odus[183];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Eturukpon" && leftSideOduFromUrl == "Idi") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Eturukpon_Meji);
            left_odu = "Eturukpon";
            first_right = false;
            second_right = false;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Idi_Meji);
            left_odu = "Idi";
            first_left = true;
            second_left = false;
            third_left = false;
            fourth_left = true;
            odu = odus[184];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Eturukpon" && leftSideOduFromUrl == "Irosun") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Eturukpon_Meji);
            left_odu = "Eturukpon";
            first_right = false;
            second_right = false;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Irosun_Meji);
            left_odu = "Irosun";
            first_left = true;
            second_left = true;
            third_left = false;
            fourth_left = false;
            odu = odus[185];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Eturukpon" && leftSideOduFromUrl == "Owanrin") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Eturukpon_Meji);
            left_odu = "Eturukpon";
            first_right = false;
            second_right = false;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Owanrin_Meji);
            left_odu = "Owanrin";
            first_left = false;
            second_left = false;
            third_left = true;
            fourth_left = true;
            odu = odus[186];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Eturukpon" && leftSideOduFromUrl == "Obara") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Eturukpon_Meji);
            left_odu = "Eturukpon";
            first_right = false;
            second_right = false;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Obara_Meji);
            left_odu = "Obara";
            first_left = true;
            second_left = false;
            third_left = false;
            fourth_left = false;
            odu = odus[187];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Eturukpon" && leftSideOduFromUrl == "Okonron") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Eturukpon_Meji);
            left_odu = "Eturukpon";
            first_right = false;
            second_right = false;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Okonron_Meji);
            left_odu = "Okonron";
            first_left = false;
            second_left = false;
            third_left = false;
            fourth_left = true;
            odu = odus[188];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Eturukpon" && leftSideOduFromUrl == "Ogunda") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Eturukpon_Meji);
            left_odu = "Eturukpon";
            first_right = false;
            second_right = false;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ogunda_Meji);
            left_odu = "Ogunda";
            first_left = true;
            second_left = true;
            third_left = true;
            fourth_left = false;
            odu = odus[189];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Eturukpon" && leftSideOduFromUrl == "Osa") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Eturukpon_Meji);
            left_odu = "Eturukpon";
            first_right = false;
            second_right = false;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Osa_Meji);
            left_odu = "Osa";
            first_left = false;
            second_left = true;
            third_left = true;
            fourth_left = true;
            odu = odus[190];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Eturukpon" && leftSideOduFromUrl == "Eka") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Eturukpon_Meji);
            left_odu = "Eturukpon";
            first_right = false;
            second_right = false;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Eka_Meji);
            left_odu = "Eka";
            first_left = false;
            second_left = true;
            third_left = false;
            fourth_left = false;
            odu = odus[191];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Eturukpon" && leftSideOduFromUrl == "Etura") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Eturukpon_Meji);
            left_odu = "Eturukpon";
            first_right = false;
            second_right = false;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Etura_Meji);
            left_odu = "Etura";
            first_left = true;
            second_left = false;
            third_left = true;
            fourth_left = true;
            odu = odus[192];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Eturukpon" && leftSideOduFromUrl == "Irete") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Eturukpon_Meji);
            left_odu = "Eturukpon";
            first_right = false;
            second_right = false;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Irete_Meji);
            left_odu = "Irete";
            first_left = true;
            second_left = true;
            third_left = false;
            fourth_left = true;
            odu = odus[193];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Eturukpon" && leftSideOduFromUrl == "Ose") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Eturukpon_Meji);
            left_odu = "Eturukpon";
            first_right = false;
            second_right = false;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ose_Meji);
            left_odu = "Ose";
            first_left = true;
            second_left = false;
            third_left = true;
            fourth_left = false;
            odu = odus[194];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Eturukpon" && leftSideOduFromUrl == "Ofun") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Eturukpon_Meji);
            left_odu = "Eturukpon";
            first_right = false;
            second_right = false;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ofun_Meji);
            left_odu = "Ofun";
            first_left = false;
            second_left = true;
            third_left = false;
            fourth_left = true;
            odu = odus[195];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
     //end of eturukpon odus
     //start of etura odus
        else if (rightSideOduFromUrl == "Etura" && leftSideOduFromUrl == "Ogbe") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Etura_Meji);
            left_odu = "Etura";
            first_right = true;
            second_right = false;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ogbe_Meji);
            left_odu = "Ogbe";
            first_left = true;
            second_left = true;
            third_left = true;
            fourth_left = true;
            odu = odus[196];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Etura" && leftSideOduFromUrl == "Oyeku") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Etura_Meji);
            left_odu = "Etura";
            first_right = true;
            second_right = false;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Oyeku_Meji);
            left_odu = "Oyeku";
            first_left = false;
            second_left = false;
            third_left = false;
            fourth_left = false;
            odu = odus[197];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Etura" && leftSideOduFromUrl == "Iwori") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Etura_Meji);
            left_odu = "Etura";
            first_right = true;
            second_right = false;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Iwori_Meji);
            left_odu = "Iwori";
            first_left = false;
            second_left = true;
            third_left = true;
            fourth_left = false;
            odu = odus[198];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Etura" && leftSideOduFromUrl == "Idi") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Etura_Meji);
            left_odu = "Etura";
            first_right = true;
            second_right = false;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Idi_Meji);
            left_odu = "Idi";
            first_left = true;
            second_left = false;
            third_left = false;
            fourth_left = true;
            odu = odus[199];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Etura" && leftSideOduFromUrl == "Irosun") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Etura_Meji);
            left_odu = "Etura";
            first_right = true;
            second_right = false;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Irosun_Meji);
            left_odu = "Irosun";
            first_left = true;
            second_left = true;
            third_left = false;
            fourth_left = false;
            odu = odus[200];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Etura" && leftSideOduFromUrl == "Owanrin") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Etura_Meji);
            left_odu = "Etura";
            first_right = true;
            second_right = false;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Owanrin_Meji);
            left_odu = "Owanrin";
            first_left = false;
            second_left = false;
            third_left = true;
            fourth_left = true;
            odu = odus[201];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Etura" && leftSideOduFromUrl == "Obara") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Etura_Meji);
            left_odu = "Etura";
            first_right = true;
            second_right = false;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Obara_Meji);
            left_odu = "Obara";
            first_left = true;
            second_left = false;
            third_left = false;
            fourth_left = false;
            odu = odus[202];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Etura" && leftSideOduFromUrl == "Okonron") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Etura_Meji);
            left_odu = "Etura";
            first_right = true;
            second_right = false;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Okonron_Meji);
            left_odu = "Okonron";
            first_left = false;
            second_left = false;
            third_left = false;
            fourth_left = true;
            odu = odus[203];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Etura" && leftSideOduFromUrl == "Ogunda") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Etura_Meji);
            left_odu = "Etura";
            first_right = true;
            second_right = false;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ogunda_Meji);
            left_odu = "Ogunda";
            first_left = true;
            second_left = true;
            third_left = true;
            fourth_left = false;
            odu = odus[204];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Etura" && leftSideOduFromUrl == "Osa") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Etura_Meji);
            left_odu = "Etura";
            first_right = true;
            second_right = false;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Osa_Meji);
            left_odu = "Osa";
            first_left = false;
            second_left = true;
            third_left = true;
            fourth_left = true;
            odu = odus[205];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Etura" && leftSideOduFromUrl == "Eka") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Etura_Meji);
            left_odu = "Etura";
            first_right = true;
            second_right = false;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Eka_Meji);
            left_odu = "Eka";
            first_left = false;
            second_left = true;
            third_left = false;
            fourth_left = false;
            odu = odus[206];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Etura" && leftSideOduFromUrl == "Eturukpon") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Etura_Meji);
            left_odu = "Etura";
            first_right = true;
            second_right = false;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Eturukpon_Meji);
            left_odu = "Eturukpon";
            first_left = false;
            second_left = false;
            third_left = true;
            fourth_left = false;
            odu = odus[207];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Etura" && leftSideOduFromUrl == "Irete") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Etura_Meji);
            left_odu = "Etura";
            first_right = true;
            second_right = false;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Irete_Meji);
            left_odu = "Irete";
            first_left = true;
            second_left = true;
            third_left = false;
            fourth_left = true;
            odu = odus[208];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Etura" && leftSideOduFromUrl == "Ose") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Etura_Meji);
            left_odu = "Etura";
            first_right = true;
            second_right = false;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ose_Meji);
            left_odu = "Ose";
            first_left = true;
            second_left = false;
            third_left = true;
            fourth_left = false;
            odu = odus[209];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Etura" && leftSideOduFromUrl == "Ofun") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Etura_Meji);
            left_odu = "Etura";
            first_right = true;
            second_right = false;
            third_right = true;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ofun_Meji);
            left_odu = "Ofun";
            first_left = false;
            second_left = true;
            third_left = false;
            fourth_left = true;
            odu = odus[210];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
     //end of etura odus
     //start of irete odus
        else if (rightSideOduFromUrl == "Irete" && leftSideOduFromUrl == "Ogbe") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Irete_Meji);
            left_odu = "Irete";
            first_right = true;
            second_right = true;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ogbe_Meji);
            left_odu = "Ogbe";
            first_left = true;
            second_left = true;
            third_left = true;
            fourth_left = true;
            odu = odus[211];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Irete" && leftSideOduFromUrl == "Oyeku") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Irete_Meji);
            left_odu = "Irete";
            first_right = true;
            second_right = true;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Oyeku_Meji);
            left_odu = "Oyeku";
            first_left = false;
            second_left = false;
            third_left = false;
            fourth_left = false;
            odu = odus[212];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Irete" && leftSideOduFromUrl == "Iwori") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Irete_Meji);
            left_odu = "Irete";
            first_right = true;
            second_right = true;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Iwori_Meji);
            left_odu = "Iwori";
            first_left = false;
            second_left = true;
            third_left = true;
            fourth_left = false;
            odu = odus[213];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Irete" && leftSideOduFromUrl == "Idi") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Irete_Meji);
            left_odu = "Irete";
            first_right = true;
            second_right = true;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Idi_Meji);
            left_odu = "Idi";
            first_left = true;
            second_left = false;
            third_left = false;
            fourth_left = true;
            odu = odus[214];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Irete" && leftSideOduFromUrl == "Irosun") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Irete_Meji);
            left_odu = "Irete";
            first_right = true;
            second_right = true;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Irosun_Meji);
            left_odu = "Irosun";
            first_left = true;
            second_left = true;
            third_left = false;
            fourth_left = false;
            odu = odus[215];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Irete" && leftSideOduFromUrl == "Owanrin") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Irete_Meji);
            left_odu = "Irete";
            first_right = true;
            second_right = true;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Owanrin_Meji);
            left_odu = "Owanrin";
            first_left = false;
            second_left = false;
            third_left = true;
            fourth_left = true;
            odu = odus[216];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Irete" && leftSideOduFromUrl == "Obara") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Irete_Meji);
            left_odu = "Irete";
            first_right = true;
            second_right = true;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Obara_Meji);
            left_odu = "Obara";
            first_left = true;
            second_left = false;
            third_left = false;
            fourth_left = false;
            odu = odus[217];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Irete" && leftSideOduFromUrl == "Okonron") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Irete_Meji);
            left_odu = "Irete";
            first_right = true;
            second_right = true;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Okonron_Meji);
            left_odu = "Okonron";
            first_left = false;
            second_left = false;
            third_left = false;
            fourth_left = true;
            odu = odus[218];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Irete" && leftSideOduFromUrl == "Ogunda") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Irete_Meji);
            left_odu = "Irete";
            first_right = true;
            second_right = true;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ogunda_Meji);
            left_odu = "Ogunda";
            first_left = true;
            second_left = true;
            third_left = true;
            fourth_left = false;
            odu = odus[219];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Irete" && leftSideOduFromUrl == "Osa") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Irete_Meji);
            left_odu = "Irete";
            first_right = true;
            second_right = true;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Osa_Meji);
            left_odu = "Osa";
            first_left = false;
            second_left = true;
            third_left = true;
            fourth_left = true;
            odu = odus[220];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Irete" && leftSideOduFromUrl == "Eka") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Irete_Meji);
            left_odu = "Irete";
            first_right = true;
            second_right = true;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Eka_Meji);
            left_odu = "Eka";
            first_left = false;
            second_left = true;
            third_left = false;
            fourth_left = false;
            odu = odus[221];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Irete" && leftSideOduFromUrl == "Eturukpon") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Irete_Meji);
            left_odu = "Irete";
            first_right = true;
            second_right = true;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Eturukpon_Meji);
            left_odu = "Eturukpon";
            first_left = false;
            second_left = false;
            third_left = true;
            fourth_left = false;
            odu = odus[222];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Irete" && leftSideOduFromUrl == "Etura") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Irete_Meji);
            left_odu = "Irete";
            first_right = true;
            second_right = true;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Etura_Meji);
            left_odu = "Etura";
            first_left = true;
            second_left = false;
            third_left = true;
            fourth_left = true;
            odu = odus[223];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Irete" && leftSideOduFromUrl == "Ose") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Irete_Meji);
            left_odu = "Irete";
            first_right = true;
            second_right = true;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ose_Meji);
            left_odu = "Ose";
            first_left = true;
            second_left = false;
            third_left = true;
            fourth_left = false;
            odu = odus[224];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Irete" && leftSideOduFromUrl == "Ofun") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Irete_Meji);
            left_odu = "Irete";
            first_right = true;
            second_right = true;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ofun_Meji);
            left_odu = "Ofun";
            first_left = false;
            second_left = true;
            third_left = false;
            fourth_left = true;
            odu = odus[225];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        
     //end of irete odus
     //start of ose odus
        else if (rightSideOduFromUrl == "Ose" && leftSideOduFromUrl == "Ogbe") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ose_Meji);
            left_odu = "Ose";
            first_right = true;
            second_right = false;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ogbe_Meji);
            left_odu = "Ogbe";
            first_left = true;
            second_left = true;
            third_left = true;
            fourth_left = true;
            odu = odus[226];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ose" && leftSideOduFromUrl == "Oyeku") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ose_Meji);
            left_odu = "Ose";
            first_right = true;
            second_right = false;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Oyeku_Meji);
            left_odu = "Oyeku";
            first_left = false;
            second_left = false;
            third_left = false;
            fourth_left = false;
            odu = odus[227];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ose" && leftSideOduFromUrl == "Iwori") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ose_Meji);
            left_odu = "Ose";
            first_right = true;
            second_right = false;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Iwori_Meji);
            left_odu = "Iwori";
            first_left = false;
            second_left = true;
            third_left = true;
            fourth_left = false;
            odu = odus[228];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ose" && leftSideOduFromUrl == "Idi") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ose_Meji);
            left_odu = "Ose";
            first_right = true;
            second_right = false;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Idi_Meji);
            left_odu = "Idi";
            first_left = true;
            second_left = false;
            third_left = false;
            fourth_left = true;
            odu = odus[229];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ose" && leftSideOduFromUrl == "Irosun") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ose_Meji);
            left_odu = "Ose";
            first_right = true;
            second_right = false;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Irosun_Meji);
            left_odu = "Irosun";
            first_left = true;
            second_left = true;
            third_left = false;
            fourth_left = false;
            odu = odus[230];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ose" && leftSideOduFromUrl == "Owanrin") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ose_Meji);
            left_odu = "Ose";
            first_right = true;
            second_right = false;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Owanrin_Meji);
            left_odu = "Owanrin";
            first_left = false;
            second_left = false;
            third_left = true;
            fourth_left = true;
            odu = odus[231];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ose" && leftSideOduFromUrl == "Obara") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ose_Meji);
            left_odu = "Ose";
            first_right = true;
            second_right = false;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Obara_Meji);
            left_odu = "Obara";
            first_left = true;
            second_left = false;
            third_left = false;
            fourth_left = false;
            odu = odus[232];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ose" && leftSideOduFromUrl == "Okonron") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ose_Meji);
            left_odu = "Ose";
            first_right = true;
            second_right = false;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Okonron_Meji);
            left_odu = "Okonron";
            first_left = false;
            second_left = false;
            third_left = false;
            fourth_left = true;
            odu = odus[233];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ose" && leftSideOduFromUrl == "Ogunda") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ose_Meji);
            left_odu = "Ose";
            first_right = true;
            second_right = false;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ogunda_Meji);
            left_odu = "Ogunda";
            first_left = true;
            second_left = true;
            third_left = true;
            fourth_left = false;
            odu = odus[234];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ose" && leftSideOduFromUrl == "Osa") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ose_Meji);
            left_odu = "Ose";
            first_right = true;
            second_right = false;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Osa_Meji);
            left_odu = "Osa";
            first_left = false;
            second_left = true;
            third_left = true;
            fourth_left = true;
            odu = odus[235];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ose" && leftSideOduFromUrl == "Eka") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ose_Meji);
            left_odu = "Ose";
            first_right = true;
            second_right = false;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Eka_Meji);
            left_odu = "Eka";
            first_left = false;
            second_left = true;
            third_left = false;
            fourth_left = false;
            odu = odus[236];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ose" && leftSideOduFromUrl == "Eturukpon") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ose_Meji);
            left_odu = "Ose";
            first_right = true;
            second_right = false;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Eturukpon_Meji);
            left_odu = "Eturukpon";
            first_left = false;
            second_left = false;
            third_left = true;
            fourth_left = false;
            odu = odus[237];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ose" && leftSideOduFromUrl == "Etura") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ose_Meji);
            left_odu = "Ose";
            first_right = true;
            second_right = false;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Etura_Meji);
            left_odu = "Etura";
            first_left = true;
            second_left = false;
            third_left = true;
            fourth_left = true;
            odu = odus[238];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ose" && leftSideOduFromUrl == "Irete") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ose_Meji);
            left_odu = "Ose";
            first_right = true;
            second_right = false;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Irete_Meji);
            left_odu = "Irete";
            first_left = true;
            second_left = true;
            third_left = false;
            fourth_left = true;
            odu = odus[239];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ose" && leftSideOduFromUrl == "Ofun") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ose_Meji);
            left_odu = "Ose";
            first_right = true;
            second_right = false;
            third_right = true;
            fourth_right = false;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ofun_Meji);
            left_odu = "Ofun";
            first_left = false;
            second_left = true;
            third_left = false;
            fourth_left = true;
            odu = odus[240];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
     //end of ose odus
     //start of ofun odus
        else if (rightSideOduFromUrl == "Ofun" && leftSideOduFromUrl == "Ogbe") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ofun_Meji);
            left_odu = "Ofun";
            first_right = false;
            second_right = true;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ogbe_Meji);
            left_odu = "Ogbe";
            first_left = true;
            second_left = true;
            third_left = true;
            fourth_left = true;
            odu = odus[241];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ofun" && leftSideOduFromUrl == "Oyeku") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ofun_Meji);
            left_odu = "Ofun";
            first_right = false;
            second_right = true;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Oyeku_Meji);
            left_odu = "Oyeku";
            first_left = false;
            second_left = false;
            third_left = false;
            fourth_left = false;
            odu = odus[242];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ofun" && leftSideOduFromUrl == "Iwori") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ofun_Meji);
            left_odu = "Ofun";
            first_right = false;
            second_right = true;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Iwori_Meji);
            left_odu = "Iwori";
            first_left = false;
            second_left = true;
            third_left = true;
            fourth_left = false;
            odu = odus[243];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ofun" && leftSideOduFromUrl == "Idi") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ofun_Meji);
            left_odu = "Ofun";
            first_right = false;
            second_right = true;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Idi_Meji);
            left_odu = "Idi";
            first_left = true;
            second_left = false;
            third_left = false;
            fourth_left = true;
            odu = odus[244];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ofun" && leftSideOduFromUrl == "Irosun") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ofun_Meji);
            left_odu = "Ofun";
            first_right = false;
            second_right = true;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Irosun_Meji);
            left_odu = "Irosun";
            first_left = true;
            second_left = true;
            third_left = false;
            fourth_left = false;
            odu = odus[245];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ofun" && leftSideOduFromUrl == "Owanrin") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ofun_Meji);
            left_odu = "Ofun";
            first_right = false;
            second_right = true;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Owanrin_Meji);
            left_odu = "Owanrin";
            first_left = false;
            second_left = false;
            third_left = true;
            fourth_left = true;
            odu = odus[246];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ofun" && leftSideOduFromUrl == "Obara") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ofun_Meji);
            left_odu = "Ofun";
            first_right = false;
            second_right = true;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Obara_Meji);
            left_odu = "Obara";
            first_left = true;
            second_left = false;
            third_left = false;
            fourth_left = false;
            odu = odus[247];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ofun" && leftSideOduFromUrl == "Okonron") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ofun_Meji);
            left_odu = "Ofun";
            first_right = false;
            second_right = true;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Okonron_Meji);
            left_odu = "Okonron";
            first_left = false;
            second_left = false;
            third_left = false;
            fourth_left = true;
            odu = odus[248];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ofun" && leftSideOduFromUrl == "Ogunda") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ofun_Meji);
            left_odu = "Ofun";
            first_right = false;
            second_right = true;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ogunda_Meji);
            left_odu = "Ogunda";
            first_left = true;
            second_left = true;
            third_left = true;
            fourth_left = false;
            odu = odus[249];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ofun" && leftSideOduFromUrl == "Osa") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ofun_Meji);
            left_odu = "Ofun";
            first_right = false;
            second_right = true;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Osa_Meji);
            left_odu = "Osa";
            first_left = false;
            second_left = true;
            third_left = true;
            fourth_left = true;
            odu = odus[250];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ofun" && leftSideOduFromUrl == "Eka") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ofun_Meji);
            left_odu = "Ofun";
            first_right = false;
            second_right = true;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Eka_Meji);
            left_odu = "Eka";
            first_left = false;
            second_left = true;
            third_left = false;
            fourth_left = false;
            odu = odus[251];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ofun" && leftSideOduFromUrl == "Eturukpon") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ofun_Meji);
            left_odu = "Ofun";
            first_right = false;
            second_right = true;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Eturukpon_Meji);
            left_odu = "Eturukpon";
            first_left = false;
            second_left = false;
            third_left = true;
            fourth_left = false;
            odu = odus[252];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ofun" && leftSideOduFromUrl == "Etura") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ofun_Meji);
            left_odu = "Ofun";
            first_right = false;
            second_right = true;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Etura_Meji);
            left_odu = "Etura";
            first_left = true;
            second_left = false;
            third_left = true;
            fourth_left = true;
            odu = odus[253];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ofun" && leftSideOduFromUrl == "Irete") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ofun_Meji);
            left_odu = "Ofun";
            first_right = false;
            second_right = true;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Irete_Meji);
            left_odu = "Irete";
            first_left = true;
            second_left = true;
            third_left = false;
            fourth_left = true;
            odu = odus[254];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }
        else if (rightSideOduFromUrl == "Ofun" && leftSideOduFromUrl == "Ose") {
            opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ofun_Meji);
            left_odu = "Ofun";
            first_right = false;
            second_right = true;
            third_right = false;
            fourth_right = true;
            opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ose_Meji);
            left_odu = "Ose";
            first_left = true;
            second_left = false;
            third_left = true;
            fourth_left = false;
            odu = odus[255];
            oduIndexation = odus.indexOf(odu);//to know the index of the selected odu.
            document.getElementById("oduToShow").innerHTML = odu;
            oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
            oduJSONAddress = allJSONAddressForOdus[oduIndexation];
            fetchGeneralDescriptionDataENG ();//calling the json of the odu
            document.getElementById("oduToShow").innerHTML = odu;//writing the selected odun at the htmlfile
            document.title = odu;
            console.log(odu);
            console.log(oduIndexation);
            console.log(oduForTheJSON);
        }

     //end of ofun odus


    } catch (err) {
        console.log("Issues with Parsing URL Parameter's - " + err);
    }
}
//end to grab the information from the url action called Get URL Parameter Values from Query String in Javascript 



//Start toggle the value for opon on the  left side
function toggle_first_left() { 
    first_left = first_left ? false : true;
}
function toggle_second_left() { 
    second_left = second_left ? false : true; 
}
function toggle_third_left() { 
    third_left = third_left ? false : true; 
}
function toggle_fourth_left() { 
    fourth_left = fourth_left ? false : true;
}
//End toggle the value for opon on the  left side

//Start toggle the value for opon on the  right side
    function toggle_first_right() { 
        first_right = first_right ? false : true; 
    }
    function toggle_second_right() { 
        second_right = second_right ? false : true;
    }
    function toggle_third_right() { 
        third_right = third_right ? false : true; 
    }
    function toggle_fourth_right() { 
        fourth_right = fourth_right ? false : true;
    }
//End toggle the value for opon on the  right side




function globalOduFetchFunction(){
    opon_touch_func();
    odutobeshow()
    fetchGeneralDescriptionDataENG ();
    

};


function opon_touch_func(){
    
    



//start of the  if cycle for the left side of the opon

if (first_left === true && second_left === true && third_left === true && fourth_left === true) {
    opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ogbe_Meji);
    left_odu = "Ogbe";
} else if (first_left === false && second_left === false && third_left === false && fourth_left === false) {
    opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Oyeku_Meji);
    left_odu = "Oyeku";
} else if (first_left === false && second_left === true && third_left === true && fourth_left === false) {
    opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Iwori_Meji);
    left_odu = "Iwori";
} else if (first_left === true && second_left === false && third_left === false && fourth_left === true) {
    opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Idi_Meji);
    left_odu = "Idi";
} else if (first_left === true && second_left === false && third_left === false && fourth_left === false) {
    opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Obara_Meji);
    left_odu = "Obara";
} else if (first_left === false && second_left === false && third_left === false && fourth_left === true) {
    opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Okonron_Meji);
    left_odu = "Okonron";
} else if (first_left === true && second_left === true && third_left === false && fourth_left === false) {
    opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Irosun_Meji);
    left_odu = "Irosun";
} else if (first_left === false && second_left === false && third_left === true && fourth_left === true) {
    opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Owanrin_Meji);
    left_odu = "Owanrin";
} else if (first_left === true && second_left === true && third_left === true && fourth_left === false) {
    opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ogunda_Meji);
    left_odu = "Ogunda";
} else if (first_left === false && second_left === true && third_left === true && fourth_left === true) {
    opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Osa_Meji);
    left_odu = "Osa";
} else if (first_left === true && second_left === false && third_left === true && fourth_left === true) {
    opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Etura_Meji);
    left_odu = "Etura";
} else if (first_left === true && second_left === true && third_left === false && fourth_left === true) {
    opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Irete_Meji);
    left_odu = "Irete";
} else if (first_left === false && second_left === true && third_left === false && fourth_left === false) {
    opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Eka_Meji);
    left_odu = "Eka";
} else if (first_left === false && second_left === false && third_left === true && fourth_left === false) {
    opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Eturukpon_Meji);
    left_odu = "Eturukpon";
} else if (first_left === true && second_left === false && third_left === true && fourth_left === false) {
    opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ose_Meji);
    left_odu = "Ose";
} else if (first_left === false && second_left === true && third_left === false && fourth_left === true) {
    opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ofun_Meji);
    left_odu = "Ofun";
}
//end of the  if cycle for the left side of the opon

//start of the  if cycle for the right side of the opon

if (first_right === true && second_right === true && third_right === true && fourth_right === true) {
    opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ogbe_Meji);
    right_odu = "Ogbe";
} else if (first_right === false && second_right === false && third_right === false && fourth_right === false) {
    opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Oyeku_Meji);
    right_odu = "Oyeku";
} else if (first_right === false && second_right === true && third_right === true && fourth_right === false) {
    opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Iwori_Meji);
    right_odu = "Iwori";
} else if (first_right === true && second_right === false && third_right === false && fourth_right === true) {
    opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Idi_Meji);
    right_odu = "Idi";
} else if (first_right === true && second_right === false && third_right === false && fourth_right === false) {
    opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Obara_Meji);
    right_odu = "Obara";
} else if (first_right === false && second_right === false && third_right === false && fourth_right === true) {
    opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Okonron_Meji);
    right_odu = "Okonron";
} else if (first_right === true && second_right === true && third_right === false && fourth_right === false) {
    opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Irosun_Meji);
    right_odu = "Irosun";
} else if (first_right === false && second_right === false && third_right === true && fourth_right === true) {
    opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Owanrin_Meji);
    right_odu = "Owanrin";
} else if (first_right === true && second_right === true && third_right === true && fourth_right === false) {
    opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ogunda_Meji);
    right_odu = "Ogunda";
} else if (first_right === false && second_right === true && third_right === true && fourth_right === true) {
    opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Osa_Meji);
    right_odu = "Osa";
} else if (first_right === true && second_right === false && third_right === true && fourth_right === true) {
    opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Etura_Meji);
    right_odu = "Etura";
} else if (first_right === true && second_right === true && third_right === false && fourth_right === true) {
    opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Irete_Meji);
    right_odu = "Irete";
} else if (first_right === false && second_right === true && third_right === false && fourth_right === false) {
    opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Eka_Meji);
    right_odu = "Eka";
} else if (first_right === false && second_right === false && third_right === true && fourth_right === false) {
    opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Eturukpon_Meji);
    right_odu = "Eturukpon";
} else if (first_right === true && second_right === false && third_right === true && fourth_right === false) {
    opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ose_Meji);
    right_odu = "Ose";
} else if (first_right === false && second_right === true && third_right === false && fourth_right === true) {
    opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ofun_Meji);
    right_odu = "Ofun";
} 
}//end of the  if cycle for the right side of the opon

function odutobeshow(){//Start of if cycle for assign value for var odu
if (right_odu === "Ogbe" && left_odu === "Ogbe") {
    odu = odus[0];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
} else if (right_odu === "Oyeku" && left_odu === "Oyeku") {
    odu = odus[1];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Iwori" && left_odu === "Iwori") {
    odu = odus[2];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Idi" && left_odu === "Idi") {
    odu = odus[3];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Irosun" && left_odu === "Irosun") {
    odu = odus[4];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Owanrin" && left_odu === "Owanrin") {
    odu = odus[5];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Obara" && left_odu === "Obara") {
    odu = odus[6];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Okonron" && left_odu === "Okonron") {
    odu = odus[7];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ogunda" && left_odu === "Ogunda") {
    odu = odus[8];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Osa" && left_odu === "Osa") {
    odu = odus[9];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Eka" && left_odu === "Eka") {
    odu = odus[10];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Eturukpon" && left_odu === "Eturukpon") {
    odu = odus[11];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Etura" && left_odu === "Etura") {
    odu = odus[12];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Irete" && left_odu === "Irete") {
    odu = odus[13];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ose" && left_odu === "Ose") {
    odu = odus[14];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ofun" && left_odu === "Ofun") {
    odu = odus[15];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ogbe" && left_odu === "Oyeku") {
    odu = odus[16];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ogbe" && left_odu === "Iwori") {
    odu = odus[17];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ogbe" && left_odu === "Idi") {
    odu = odus[18];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ogbe" && left_odu === "Irosun") {
    odu = odus[19];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ogbe" && left_odu === "Owanrin") {
    odu = odus[20];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ogbe" && left_odu === "Obara") {
    odu = odus[21];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ogbe" && left_odu === "Okonron") {
    odu = odus[22];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ogbe" && left_odu === "Ogunda") {
    odu = odus[23];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ogbe" && left_odu === "Osa") {
    odu = odus[24];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ogbe" && left_odu === "Eka") {
    odu = odus[25];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ogbe" && left_odu === "Eturukpon") {
    odu = odus[26];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ogbe" && left_odu === "Etura") {
    odu = odus[27];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ogbe" && left_odu === "Irete") {
    odu = odus[28];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ogbe" && left_odu === "Ose") {
    odu = odus[29];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ogbe" && left_odu === "Ofun") {
    odu = odus[30];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Oyeku" && left_odu === "Ogbe") {
    odu = odus[31];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Oyeku" && left_odu === "Iwori") {
    odu = odus[32];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Oyeku" && left_odu === "Idi") {
    odu = odus[33];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Oyeku" && left_odu === "Irosun") {
    odu = odus[34];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Oyeku" && left_odu === "Owanrin") {
    odu = odus[35];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Oyeku" && left_odu === "Obara") {
    odu = odus[36];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Oyeku" && left_odu === "Okonron") {
    odu = odus[37];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Oyeku" && left_odu === "Ogunda") {
    odu = odus[38]; 
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Oyeku" && left_odu === "Osa") {
    odu = odus[39];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Oyeku" && left_odu === "Eka") {
    odu = odus[40];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Oyeku" && left_odu === "Eturukpon") {
    odu = odus[41];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Oyeku" && left_odu === "Etura") {
    odu = odus[42];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Oyeku" && left_odu === "Irete") {
    odu = odus[43];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Oyeku" && left_odu === "Ose") {
    odu = odus[44];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Oyeku" && left_odu === "Ofun") {
    odu = odus[45];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Iwori" && left_odu === "Ogbe") {
    odu = odus[46];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Iwori" && left_odu === "Oyeku") {
    odu = odus[47];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Iwori" && left_odu === "Idi") {
    odu = odus[48];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Iwori" && left_odu === "Irosun") {
    odu = odus[49];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Iwori" && left_odu === "Owanrin") {
    odu = odus[50];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Iwori" && left_odu === "Obara") {
    odu = odus[51];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Iwori" && left_odu === "Okonron") {
    odu = odus[52];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Iwori" && left_odu === "Ogunda") {
    odu = odus[53];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Iwori" && left_odu === "Osa") {
    odu = odus[54];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Iwori" && left_odu === "Eka") {
    odu = odus[55];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Iwori" && left_odu === "Eturukpon") {
    odu = odus[56];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Iwori" && left_odu === "Etura") {
    odu = odus[57];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Iwori" && left_odu === "Irete") {
    odu = odus[58];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Iwori" && left_odu === "Ose") {
    odu = odus[59];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Iwori" && left_odu === "Ofun") {
    odu = odus[60];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Idi" && left_odu === "Ogbe") {
    odu = odus[61];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Idi" && left_odu === "Oyeku") {
    odu = odus[62];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Idi" && left_odu === "Iwori") {
    odu = odus[63];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Idi" && left_odu === "Irosun") {
    odu = odus[64];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Idi" && left_odu === "Owanrin") {
    odu = odus[65];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Idi" && left_odu === "Obara") {
    odu = odus[66];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Idi" && left_odu === "Okonron") {
    odu = odus[67];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Idi" && left_odu === "Ogunda") {
    odu = odus[68];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Idi" && left_odu === "Osa") {
    odu = odus[69];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Idi" && left_odu === "Eka") {
    odu = odus[70];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Idi" && left_odu === "Eturukpon") {
    odu = odus[71];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Idi" && left_odu === "Etura") {
    odu = odus[72];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Idi" && left_odu === "Irete") {
    odu = odus[73];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Idi" && left_odu === "Ose") {
    odu = odus[74];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Idi" && left_odu === "Ofun") {
    odu = odus[75];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Irosun" && left_odu === "Ogbe") {
    odu = odus[76];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Irosun" && left_odu === "Oyeku") {
    odu = odus[77];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Irosun" && left_odu === "Iwori") {
    odu = odus[78];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Irosun" && left_odu === "Idi") {
    odu = odus[79];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Irosun" && left_odu === "Okonron") {Owanrin
    odu = odus[80];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Irosun" && left_odu === "Obara") {
    odu = odus[81];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Irosun" && left_odu === "Owanrin") {Okonron
    odu = odus[82];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Irosun" && left_odu === "Ogunda") {
    odu = odus[83];    
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];;
}else if (right_odu === "Irosun" && left_odu === "Osa") {
    odu = odus[84];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Irosun" && left_odu === "Etura") {Eka
    odu = odus[85];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];;
}else if (right_odu === "Irosun" && left_odu === "Irete") {Eturukpon
    odu = odus[86];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Irosun" && left_odu === "Eka") {Etura
    odu = odus[87];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Irosun" && left_odu === "Eturukpon") {Irete
    odu = odus[88];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Irosun" && left_odu === "Ose") {
    odu = odus[89];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Irosun" && left_odu === "Ofun") {
    odu = odus[90];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Owanrin" && left_odu === "Ogbe") {
    odu = odus[91];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Owanrin" && left_odu === "Oyeku") {
    odu = odus[92];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Owanrin" && left_odu === "Iwori") {
    odu = odus[93];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Owanrin" && left_odu === "Idi") {
    odu = odus[94];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Owanrin" && left_odu === "Obara") {Irosun
    odu = odus[95];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Owanrin" && left_odu === "Irosun") {Obara
    odu = odus[96];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Owanrin" && left_odu === "Okonron") {
    odu = odus[97];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Owanrin" && left_odu === "Ogunda") {
    odu = odus[98];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Owanrin" && left_odu === "Osa") {
    odu = odus[99];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Owanrin" && left_odu === "Etura") {Eka
    odu = odus[100];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Owanrin" && left_odu === "Irete") {Eturukpon
    odu = odus[101];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Owanrin" && left_odu === "Eka") {Etura
    odu = odus[102];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Owanrin" && left_odu === "Eturukpon") {Irete
    odu = odus[103];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Owanrin" && left_odu === "Ose") {
    odu = odus[104];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Owanrin" && left_odu === "Ofun") {
    odu = odus[105];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Obara" && left_odu === "Ogbe") {
    odu = odus[106];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Obara" && left_odu === "Oyeku") {
    odu = odus[107];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Obara" && left_odu === "Iwori") {
    odu = odus[108];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Obara" && left_odu === "Idi") {
    odu = odus[109];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Obara" && left_odu === "Irosun") {
    odu = odus[110];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Obara" && left_odu === "Owanrin") {
    odu = odus[111];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Obara" && left_odu === "Okonron") {
    odu = odus[112];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Obara" && left_odu === "Ogunda") {
    odu = odus[113];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Obara" && left_odu === "Osa") {
    odu = odus[114];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Obara" && left_odu === "Eka") {
    odu = odus[115];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Obara" && left_odu === "Eturukpon") {
    odu = odus[116];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Obara" && left_odu === "Etura") {
    odu = odus[117];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Obara" && left_odu === "Irete") {
    odu = odus[118];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Obara" && left_odu === "Ose") {
    odu = odus[119];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Obara" && left_odu === "Ofun") {
    odu = odus[120];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Okonron" && left_odu === "Ogbe") {
    odu = odus[121];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Okonron" && left_odu === "Oyeku") {
    odu = odus[122];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Okonron" && left_odu === "Iwori") {
    odu = odus[123];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Okonron" && left_odu === "Idi") {
    odu = odus[124];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Okonron" && left_odu === "Irosun") {
    odu = odus[125];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Okonron" && left_odu === "Owanrin") {
    odu = odus[126];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Okonron" && left_odu === "Obara") {
    odu = odus[127];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Okonron" && left_odu === "Ogunda") {
    odu = odus[128];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Okonron" && left_odu === "Osa") {
    odu = odus[129];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Okonron" && left_odu === "Eka") {
    odu = odus[130];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Okonron" && left_odu === "Eturukpon") {
    odu = odus[131];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Okonron" && left_odu === "Etura") {
    odu = odus[132];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Okonron" && left_odu === "Irete") {
    odu = odus[133];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Okonron" && left_odu === "Ose") {
    odu = odus[134];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Okonron" && left_odu === "Ofun") {
    odu = odus[135];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ogunda" && left_odu === "Ogbe") {
    odu = odus[136];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ogunda" && left_odu === "Oyeku") {
    odu = odus[137];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ogunda" && left_odu === "Iwori") {
    odu = odus[138];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ogunda" && left_odu === "Idi") {
    odu = odus[139];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ogunda" && left_odu === "Irosun") {
    odu = odus[140];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ogunda" && left_odu === "Owanrin") {
    odu = odus[141];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ogunda" && left_odu === "Obara") {
    odu = odus[142];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ogunda" && left_odu === "Okonron") {
    odu = odus[143];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ogunda" && left_odu === "Osa") {
    odu = odus[144];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ogunda" && left_odu === "Eka") {
    odu = odus[145];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ogunda" && left_odu === "Eturukpon") {
    odu = odus[146];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ogunda" && left_odu === "Etura") {
    odu = odus[147];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ogunda" && left_odu === "Irete") {
    odu = odus[148];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ogunda" && left_odu === "Ose") {
    odu = odus[149];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ogunda" && left_odu === "Ofun") {
    odu = odus[150];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Osa" && left_odu === "Ogbe") {
    odu = odus[151];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Osa" && left_odu === "Oyeku") {
    odu = odus[152];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Osa" && left_odu === "Iwori") {
    odu = odus[153];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Osa" && left_odu === "Idi") {
    odu = odus[154];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Osa" && left_odu === "Irosun") {
    odu = odus[155];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Osa" && left_odu === "Owanrin") {
    odu = odus[156];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Osa" && left_odu === "Obara") {
    odu = odus[157];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Osa" && left_odu === "Okonron") {
    odu = odus[158];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Osa" && left_odu === "Ogunda") {
    odu = odus[159];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Osa" && left_odu === "Eka") {
    odu = odus[160];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Osa" && left_odu === "Eturukpon") {
    odu = odus[161];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Osa" && left_odu === "Etura") {
    odu = odus[162];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Osa" && left_odu === "Irete") {
    odu = odus[163];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Osa" && left_odu === "Ose") {
    odu = odus[164];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Osa" && left_odu === "Ofun") {
    odu = odus[165];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Eka" && left_odu === "Ogbe") {
    odu = odus[166];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Eka" && left_odu === "Oyeku") {
    odu = odus[167];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Eka" && left_odu === "Iwori") {
    odu = odus[168];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Eka" && left_odu === "Idi") {
    odu = odus[169];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Eka" && left_odu === "Irosun") {
    odu = odus[170];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Eka" && left_odu === "Owanrin") {
    odu = odus[171];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Eka" && left_odu === "Obara") {
    odu = odus[172];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Eka" && left_odu === "Okonron") {
    odu = odus[173];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Eka" && left_odu === "Ogunda") {
    odu = odus[174];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Eka" && left_odu === "Osa") {
    odu = odus[175];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Eka" && left_odu === "Eturukpon") {
    odu = odus[176];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Eka" && left_odu === "Etura") {
    odu = odus[177];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Eka" && left_odu === "Irete") {
    odu = odus[178];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Eka" && left_odu === "Ose") {
    odu = odus[179];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Eka" && left_odu === "Ofun") {
    odu = odus[180];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Eturukpon" && left_odu === "Ogbe") {
    odu = odus[181];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Eturukpon" && left_odu === "Oyeku") {
    odu = odus[182];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Eturukpon" && left_odu === "Iwori") {
    odu = odus[183];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Eturukpon" && left_odu === "Idi") {
    odu = odus[184];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Eturukpon" && left_odu === "Irosun") {
    odu = odus[185];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Eturukpon" && left_odu === "Owanrin") {
    odu = odus[186];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Eturukpon" && left_odu === "Obara") {
    odu = odus[187];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Eturukpon" && left_odu === "Okonron") {
    odu = odus[188];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Eturukpon" && left_odu === "Ogunda") {
    odu = odus[189];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Eturukpon" && left_odu === "Osa") {
    odu = odus[190];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Eturukpon" && left_odu === "Eka") {
    odu = odus[191];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Eturukpon" && left_odu === "Etura") {
    odu = odus[192];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Eturukpon" && left_odu === "Irete") {
    odu = odus[193];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Eturukpon" && left_odu === "Ose") {
    odu = odus[194];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Eturukpon" && left_odu === "Ofun") {
    odu = odus[195];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Etura" && left_odu === "Ogbe") {
    odu = odus[196];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Etura" && left_odu === "Oyeku") {
    odu = odus[197];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Etura" && left_odu === "Iwori") {
    odu = odus[198];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Etura" && left_odu === "Idi") {
    odu = odus[199];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Etura" && left_odu === "Irosun") {
    odu = odus[200];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Etura" && left_odu === "Owanrin") {
    odu = odus[201];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Etura" && left_odu === "Obara") {
    odu = odus[202];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Etura" && left_odu === "Okonron") {
    odu = odus[203];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Etura" && left_odu === "Ogunda") {
    odu = odus[204];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Etura" && left_odu === "Osa") {
    odu = odus[205];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Etura" && left_odu === "Etura") {
    odu = odus[206];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Etura" && left_odu === "Eturukpon") {
    odu = odus[207];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Etura" && left_odu === "Irete") {
    odu = odus[208];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Etura" && left_odu === "Ose") {
    odu = odus[209];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Etura" && left_odu === "Ofun") {
    odu = odus[210];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Irete" && left_odu === "Ogbe") {
    odu = odus[211];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Irete" && left_odu === "Oyeku") {
    odu = odus[212];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Irete" && left_odu === "Iwori") {
    odu = odus[213];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Irete" && left_odu === "Idi") {
    odu = odus[214];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Irete" && left_odu === "Irosun") {
    odu = odus[215];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Irete" && left_odu === "Owanrin") {
    odu = odus[216];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Irete" && left_odu === "Obara") {
    odu = odus[217];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Irete" && left_odu === "Okonron") {
    odu = odus[218];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Irete" && left_odu === "Ogunda") {
    odu = odus[219];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Irete" && left_odu === "Osa") {
    odu = odus[220];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Irete" && left_odu === "Eka") {
    odu = odus[221];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Irete" && left_odu === "Eturukpon") {
    odu = odus[222];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Irete" && left_odu === "Etura") {
    odu = odus[223];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Irete" && left_odu === "Ose") {
    odu = odus[224];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Irete" && left_odu === "Ofun") {
    odu = odus[225];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ose" && left_odu === "Ogbe") {
    odu = odus[226];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ose" && left_odu === "Oyeku") {
    odu = odus[227];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ose" && left_odu === "Iwori") {
    odu = odus[228];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ose" && left_odu === "Idi") {
    odu = odus[229];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ose" && left_odu === "Irosun") {
    odu = odus[230];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ose" && left_odu === "Owanrin") {
    odu = odus[231];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ose" && left_odu === "Obara") {
    odu = odus[232];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ose" && left_odu === "Okonron") {
    odu = odus[233];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ose" && left_odu === "Ogunda") {
    odu = odus[234];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ose" && left_odu === "Osa") {
    odu = odus[235];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ose" && left_odu === "Eka") {
    odu = odus[236];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ose" && left_odu === "Eturukpon") {
    odu = odus[237];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ose" && left_odu === "Etura") {
    odu = odus[238];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ose" && left_odu === "Irete") {
    odu = odus[239];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ose" && left_odu === "Ofun") {
    odu = odus[240];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ofun" && left_odu === "Ogbe") {
    odu = odus[241];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ofun" && left_odu === "Oyeku") {
    odu = odus[242];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ofun" && left_odu === "Iwori") {
    odu = odus[243];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ofun" && left_odu === "Idi") {
    odu = odus[244];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ofun" && left_odu === "Irosun") {
    odu = odus[245];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ofun" && left_odu === "Owanrin") {
    odu = odus[246];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ofun" && left_odu === "Obara") {
    odu = odus[247];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ofun" && left_odu === "Okonron") {
    odu = odus[248];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ofun" && left_odu === "Ogunda") {
    odu = odus[249];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ofun" && left_odu === "Osa") {
    odu = odus[250];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ofun" && left_odu === "Eka") {
    odu = odus[251];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ofun" && left_odu === "Eturukpon") {
    odu = odus[252];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ofun" && left_odu === "Etura") {
    odu = odus[253];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ofun" && left_odu === "Irete") {
    odu = odus[254];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}else if (right_odu === "Ofun" && left_odu === "Ose") {
    odu = odus[255];
    oduIndexation = odus.indexOf(odu);
    document.title = odu;
    oduForTheJSON = ListofOdusNamesForTheJSON[oduIndexation];
    oduJSONAddress = allJSONAddressForOdus[oduIndexation];
}
//End of if cycle for assign value for var odu
document.getElementById("oduToShow").innerHTML = odu;
console.log(odu);

console.log(oduIndexation);
console.log(oduForTheJSON)
}; //this bracket en the function

