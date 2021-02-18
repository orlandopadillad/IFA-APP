var first_right = true;
var second_right = true;
var third_right = true;
var fourth_right = true;
var first_left = true;
var second_left = true;
var third_left = true;
var fourth_left = true;
var odus = ["Èjì Ogbè","Òyèkú Méjì","Ìwòrì Méjì","Òdí Méjì","Ìrosùn Méjì","Ọ̀wọ́nrín Méjì","Ọ̀bàrà Méjì","Ọ̀kànràn Méjì","Ògúndá Méjì","Ọ̀sá Méjì","Ìká Méjì","Òtúrúpòn Méjì","Òtúá Méjì","Ìrẹtẹ̀ Méjì","Ọ̀sẹ́ Méjì","Òfún Méjì","Ogbè Òyèkú","Ogbè Ìwòrì","Ogbè Òdí","Ogbè Ìrosùn","Ogbè Ọ̀wọ́nrín","Ogbè Ọ̀bàrà","Ogbè Ọ̀kànràn","Ogbè Ògúndá","Ogbè Ọ̀sá","Ogbè Ìká","Ogbè Òtúrúpòn","Ogbè Òtúá","Ogbè Ìrẹtẹ̀","Ogbè Ọ̀sẹ́","Ogbè Òfún","Òyèkú Ogbè","Òyèkú Ìwòrì","Òyèkú Òdí","Òyèkú Ìrosùn","Òyèkú Ọ̀wọ́nrín","Òyèkú Ọ̀bàrà","Òyèkú Ọ̀kànràn","Òyèkú Ògúndá","Òyèkú Ọ̀sá","Òyèkú Ìká","Òyèkú Òtúrúpòn","Òyèkú Òtúá","Òyèkú Ìrẹtẹ̀","Òyèkú Ọ̀sẹ́","Òyèkú Òfún","Ìwòrì Ogbè","Ìwòrì Òyèkú","Ìwòrì Òdí","Ìwòrì Ìrosùn","Ìwòrì Ọ̀wọ́nrín","Ìwòrì Ọ̀bàrà","Ìwòrì Ọ̀kànràn","Ìwòrì Ògúndá","Ìwòrì Ọ̀sá","Ìwòrì Ìká","Ìwòrì Òtúrúpòn","Ìwòrì Òtúá","Ìwòrì Ìrẹtẹ̀","Ìwòrì Ọ̀sẹ́","Ìwòrì Òfún","Òdí Ogbè","Òdí Òyèkú","Òdí Ìwòrì","Òdí Ìrosùn","Òdí Ọ̀wọ́nrín","Òdí Ọ̀bàrà","Òdí Ọ̀kànràn","Òdí Ògúndá","Òdí Ọ̀sá","Òdí Ìká","Òdí Òtúrúpòn","Òdí Òtúá","Òdí Ìrẹtẹ̀","Òdí Ọ̀sẹ́","Òdí Òfún","Ìrosùn Ogbè","Ìrosùn Òyèkú","Ìrosùn Ìwòrì","Ìrosùn Òdí","Ìrosùn Ọ̀wọ́nrín","Ìrosùn Ọ̀bàrà","Ìrosùn Ọ̀kànràn","Ìrosùn Ògúndá","Ìrosùn Ọ̀sá","Ìrosùn Ìká","Ìrosùn Òtúrúpòn","Ìrosùn Òtúá","Ìrosùn Ìrẹtẹ̀","Ìrosùn Ọ̀sẹ́","Ìrosùn Òfún","Ọ̀wọ́nrín Ogbè","Ọ̀wọ́nrín Òyèkú","Ọ̀wọ́nrín Ìwòrì","Ọ̀wọ́nrín Òdí","Ọ̀wọ́nrín Ìrosùn","Ọ̀wọ́nrín Ọ̀bàrà","Ọ̀wọ́nrín Ọ̀kànràn","Ọ̀wọ́nrín Ògúndá","Ọ̀wọ́nrín Ọ̀sá","Ọ̀wọ́nrín Ìká","Ọ̀wọ́nrín Òtúrúpòn","Ọ̀wọ́nrín Òtúá","Ọ̀wọ́nrín Ìrẹtẹ̀","Ọ̀wọ́nrín Ọ̀sẹ́","Ọ̀wọ́nrín Òfún","Ọ̀bàrà Ogbè","Ọ̀bàrà Òyèkú","Ọ̀bàrà Ìwòrì","Ọ̀bàrà Òdí","Ọ̀bàrà Ìrosùn","Ọ̀bàrà Ọ̀wọ́nrín","Ọ̀bàrà Ọ̀kànràn","Ọ̀bàrà Ògúndá","Ọ̀bàrà Ọ̀sá","Ọ̀bàrà Ìká","Ọ̀bàrà Òtúrúpòn","Ọ̀bàrà Òtúá","Ọ̀bàrà Ìrẹtẹ̀","Ọ̀bàrà Ọ̀sẹ́","Ọ̀bàrà Òfún","Ọ̀kànràn Ogbè","Ọ̀kànràn Òyèkú","Ọ̀kànràn Ìwòrì","Ọ̀kànràn Òdí","Ọ̀kànràn Ìrosùn","Ọ̀kànràn Ọ̀wọ́nrín","Ọ̀kànràn Ọ̀bàrà","Ọ̀kànràn Ògúndá","Ọ̀kànràn Ọ̀sá","Ọ̀kànràn Ìká","Ọ̀kànràn Òtúrúpòn","Ọ̀kànràn Òtúá","Ọ̀kànràn Ìrẹtẹ̀","Ọ̀kànràn Ọ̀sẹ́","Ọ̀kànràn Òfún","Ògúndá Ogbè","Ògúndá Òyèkú","Ògúndá Ìwòrì","Ògúndá Òdí","Ògúndá Ìrosùn","Ògúndá Ọ̀wọ́nrín","Ògúndá Ọ̀bàrà","Ògúndá Ọ̀kànràn","Ògúndá Ọ̀sá","Ògúndá Ìká","Ògúndá Òtúrúpòn","Ògúndá Òtúá","Ògúndá Ìrẹtẹ̀","Ògúndá Ọ̀sẹ́","Ògúndá Òfún","Ọ̀sá Ogbè","Ọ̀sá Òyèkú","Ọ̀sá Ìwòrì","Ọ̀sá Òdí","Ọ̀sá Ìrosùn","Ọ̀sá Ọ̀wọ́nrín","Ọ̀sá Ọ̀bàrà","Ọ̀sá kànràn","Ọ̀sá Ògúndá","Ọ̀sá Ìká","Ọ̀sá Òtúrúpòn","Ọ̀sá Òtúá","Ọ̀sá Ìrẹtẹ̀","Ọ̀sá Ọ̀sẹ́","Ọ̀sá Òfún","Ìká Ogbè","Ìká Òyèkú","Ìká Ìwòrì","Ìká Òdí","Ìká Ìrosùn","Ìká Ọ̀wọ́nrín","Ìká Ọ̀bàrà","Ìká Ọ̀kànràn","Ìká Ògúndá","Ìká Ọ̀sá","Ìká Òtúrúpòn","Ìká Òtúá","Ìká Ìrẹtẹ̀","Ìká Ọ̀sẹ́","Ìká Òfún","Òtúrúpòn Ogbè","Òtúrúpòn Òyèkú","Òtúrúpòn Ìwòrì","Òtúrúpòn Òdí","Òtúrúpòn Ìrosùn","Òtúrúpòn Ọ̀wọ́nrín","Òtúrúpòn Ọ̀bàrà","Òtúrúpòn Ọ̀kànràn","Òtúrúpòn Ògúndá","Òtúrúpòn Ọ̀sá","Òtúrúpòn Ìká","Òtúrúpòn Òtúá","Òtúrúpòn Ìrẹtẹ̀","Òtúrúpòn Ọ̀sẹ́","Òtúrúpòn Òfún","Òtúá Ogbè","Òtúá Òyèkú","Òtúá Ìwòrì","Òtúá Òdí","Òtúá Ìrosùn","Òtúá Ọ̀wọ́nrín","Òtúá Ọ̀bàrà","Òtúá Ọ̀kànràn","Òtúá Ògúndá","Òtúá Ọ̀sá","Òtúá Ìká","Òtúá Òtúrúpòn","Òtúá Ìrẹtẹ̀","Òtúá Ọ̀sẹ́","Òtúá Òfún","Ìrẹtẹ̀ Ogbè","Ìrẹtẹ̀ Òyèkú","Ìrẹtẹ̀ Ìwòrì","Ìrẹtẹ̀ Òdí","Ìrẹtẹ̀ Ìrosùn","Ìrẹtẹ̀ Ọ̀wọ́nrín","Ìrẹtẹ̀ Ọ̀bàrà","Ìrẹtẹ̀ Ọ̀kànràn","Ìrẹtẹ̀ Ògúndá","Ìrẹtẹ̀ Ọ̀sá","Ìrẹtẹ̀ Ìká","Ìrẹtẹ̀ Òtúrúpòn","Ìrẹtẹ̀ Òtúá","Ìrẹtẹ̀ Ọ̀sẹ́","Ìrẹtẹ̀ Òfún","Ọ̀sẹ́ Ogbè","Ọ̀sẹ́ Òyèkú","Ọ̀sẹ́ Ìwòrì","Ọ̀sẹ́ Òdí","Ọ̀sẹ́ Ìrosùn","Ọ̀sẹ́ Ọ̀wọ́nrín","Ọ̀sẹ́ Ọ̀bàrà","Ọ̀sẹ́ Ọ̀kànràn","Ọ̀sẹ́ Ògúndá","Ọ̀sẹ́ Ọ̀sá","Ọ̀sẹ́ Ìká","Ọ̀sẹ́ Òtúrúpòn","Ọ̀sẹ́ Òtúá","Ọ̀sẹ́ Ìrẹtẹ̀","Ọ̀sẹ́ Òfún","Òfún Ogbè","Òfún Òyèkú","Òfún Ìwòrì","Òfún Òdí","Òfún Ìrosùn","Òfún Ọ̀wọ́nrín","Òfún Ọ̀bàrà","Òfún Ọ̀kànràn","Òfún Ògúndá","Òfún Ọ̀sá","Òfún Ìká","Òfún Òtúrúpòn","Òfún Òtúá","Òfún Ìrẹtẹ̀","Òfún Ọ̀sẹ́"];
//var melo = ["Eji-Ogbe", "Oyeku-Meji", "iwori-Meji" ,"Idi-Meji" ,"Obara-Meji", "Okonron-Meji", "Irosun-Meji", "Owanrin-Meji", "Ogunda-Meji", "Osa-Meji", "Etura-Meji", "Irete-Meji", "Eka-Meji", "Eturukpon-Meji", "Ose-Meji", "Ofun-Meji", "Ogbe-Oyekun", "Ogbe-Iwori","Ogbe-Idi","Ogbe-Obara","Ogbe-Okonron","Ogbe-Irosun","Ogbe-Owanrin","Ogbe-Ogunda","Ogbe-Osa","Ogbe-Etura","Ogbe-Irete","Ogbe-Eka","Ogbe-Eturukpon","Ogbe-Ose","Ogbe-Ofun","Oyeku-Lo-Ogbe","Oyeku-Bi-Iwori","Oyeku-Di","Oyeku-Obara","Oyeku-Okonron","Oyeku-Irosun","Oyeku-Owanrin","Oyeku-Ogunda","Oyeku-Osa","Oyeku-Etura","Oyeku-Irete","Oyeku-Eturukpon","Oyeku-Be-Eka","Oyeku-Ose","Oyeku-Ofun","Iwori-Bo-Ogbe","Iwori-Oyeku","Iwori-Idi","Iwori-Obara","Iwori-Okonron","Iwori-Irosun","Iwori-Owanrin","Iwori-Ogunda","Iwori-Osa","Iwori-Etura","Iwori-Irete","Iwori-Eka","Iwori-Eturukpon","Iwori-Ose","Iwori-Ofun","Idi-Ogbe","Idi-Oyeku","Idi-Iwori","Idi-Obara","Idi-Okonron","Idi-Irosun","Idi-Owanrin","Idi-Ogunda","Idi-Osa","Idi-Etura","Idi-Irete","Idi-Eturukpon","Idi-Eka","Idi-Ose","Idi-Ofun","Obara-Ogbe","Obara-Oyeku","Obara-Iwori","Obara-Idi","Obara-Okonron","Obara-Irosun","Obara-Owanrin","Obara-Ogunda","Obara-Osa","Obara-Etura","Obara-Irete","Obara-Eka","Obara-Eturukpon","Obara-Ose","Obara-Ofun","Okonron-Ogbe","Okonron-Oyeku","Okonron-Iwori","Okonron-Idi","Okonron-Obara","Okonron-Irosun","Okonron-Owanrin","Okonron-Ogunda","Okonron-Osa","Okonron-Etura","Okonron-Irete","Okonron-Eka","Okonron-Eturukpon","Okonron-Ose","Okonron-Ofun","Irosun-Ogbe","Irosun-Oyeku","Irosun-Iwori","Irosun-Idi","Irosun-Obara","Irosun-Okonron","Irosun-Owanrin","Irosun-Ogunda","Irosun-Osa","Irosun-Etura","Irosun-Irete","Irosun-Eka","Irosun-Eturukpon","Irosun-Ose","Irosun-Ofun","Owanrin-So-Ogbe","Owanrin-Oyeku","Owanrin-Iwori","Owanrin-Idi","Owanrin-Obara","Owanrin-Okonron","Owanrin-Irosun","Owanrin-Ogunda","Owanrin-Osa","Owanrin-Etura","Owanrin-Irete","Owanrin-Eka","Owanrin-Eturukpon","Owanrin-Ose","Owanrin-Ofun","Ogunda-Ogbe","Ogunda-Oyeku","Ogunda-Iwori","Ogunda-Idi","Ogunda-Obara","Ogunda-Okonron","Ogunda-Irosun","Ogunda-Owanrin","Ogunda-Osa","Ogunda-Etura","Ogunda-Irete","Ogunda-Eka","Ogunda-Eturukpon","Ogunda-Ose","Ogunda-Ofun","Osa-Ogbe","Osa-Oyeku","Osa-Iwori","Osa-Idi","Osa-Obara","Osa-Okonron","Osa-Irosun","Osa-Ogunda","Osa-Owanrin","Osa-Etura","Osa-Irete","Osa-Eka","Osa-Eturukpon","Osa-Ose","Osa-Ofun","Etura-Ogbe","Etura-Oyeku","Etura-Iwori","Etura-Idi","Etura-Obara","Etura-Okonron","Etura-Irosun","Etura-Ogunda","Etura-Owanrin","Etura-Osa","Etura-Irete","Etura-Eka","Etura-Eturukpon","Etura-Ose","Etura-Ofun","Irete-Ogbe","Irete-Oyeku","Irete-Iwori","Irete-Idi","Irete-Obara","Irete-Okonron","Irete-Irosun","Irete-Ogunda","Irete-Owanrin","Irete-Osa","Irete-Etura","Irete-Eka","Irete-Eturukpon","Irete-Ose","Irete-Ofun","Eka-Ogbe","Eka-Oyeku","Eka-Iwori","Eka-Idi","Eka-Obara","Eka-Okonron","Eka-Irosun","Eka-Ogunda","Eka-Owanrin","Eka-Osa","Eka-Etura","Eka-Irete","Eka-Eturukpon","Eka-Ose","Eka-Ofun","Eturukpon-Ogbe","Eturukpon-Oyeku","Eturukpon-Iwori","Eturukpon-Idi","Eturukpon-Obara","Eturukpon-Okonron","Eturukpon-Irosun","Eturukpon-Ogunda","Eturukpon-Owanrin","Eturukpon-Osa","Eturukpon-Etura","Eturukpon-Irete","Eturukpon-Eka","Eturukpon-Ose","Eturukpon-Ofun","Ose-Ogbe","Ose-Oyeku","Ose-Iwori","Ose-Idi","Ose-Obara","Ose-Okonron","Ose-Irosun","Ose-Ogunda","Ose-Owanrin","Ose-Osa","Ose-Etura","Ose-Irete","Ose-Eka","Ose-Eturukpon","Ose-Ofun","Ofun-Ogbe","Ofun-Oyeku","Ofun-Iwori","Ofun-Idi","Ofun-Obara","Ofun-Okonron","Ofun-Irosun","Ofun-Ogunda","Ofun-Owanrin","Ofun-Osa","Ofun-Etura","Ofun-Irete","Ofun-Eka","Ofun-Eturukpon","Ofun-Ose"];
var right_odu ;
var left_odu ;
var odu = odus[0];
var oduIndexation = 0;
var oduForTheJSON = "ejiogbe";// set the default value of the odu to grab the json on the "assets\js\jsonfetch\fetchOduInformation.js" also this variable will update automatic
var oduJSONAddress = 'data\\oduData\\mejis\\ejiogbe.json'//information for the script in "assets\js\jsonfetch\fetchOduInformation.js"
var ListofOdusNamesForTheJSON = ["ejiogbe","oyekuMeji","iworiMeji","idiMeji ","irosunMeji","owanrinMeji","obaraMeji","okonronMeji","ogundaMeji","osaMeji","ekaMeji","eturukponMeji","eturaMeji","ireteMeji","oseMeji","ofunMeji","ogbeOyekun","ogbeIwori","ogbeIdi","ogbeIrosun","ogbeOwanrin","ogbeObara","ogbeOkonron","ogbeOgunda","ogbeOsa","ogbeEka","ogbeEturukpon","ogbeEtura","ogbeIrete","ogbeOse","ogbeOfun","oyekuLoOgbe","oyekubiIwori","oyekuDi","oyekuIrosun","oyekuOwanrin","oyekuObara","oyekuOkonron","oyekuOgunda","oyekuOsa","oyekubeEka","oyekuEturukpon","oyekuEtura","oyekuIrete","oyekuOse","oyekuOfun","iworiboOgbe","iworiOyeku","iworiIdi","iworiIrosun","iworiOwanrin","iworiObara","iworiOkonron","iworiOgunda","iworiOsa","iworiEka","iworiEturukpon","iworiEtura","iworiIrete","iworiOse","iworiOfun","idiOgbe","idiOyeku","idiIwori","idiIrosun","idiOwanrin","idiObara","idiOkonron","idiOgunda","idiOsa","idiEka","idiEturukpon","idiEtura","idiIrete","idiOse","idiOfun","irosunOgbe","irosunOyeku","irosunIwori","irosunIdi","irosunOwanrin","irosunObara","irosunOkonron","irosunOgunda","irosunOsa","irosunEka","irosunEturukpon","irosunEtura","irosunIrete","irosunOse","irosunOfun","owanrinsoOgbe","owanrinOyeku","owanrinIwori","owanrinIdi","owanrinIrosun","owanrinObara","owanrinOkonron","owanrinOgunda","owanrinOsa","owanrinEka","owanrinEturukpon","owanrinEtura","owanrinIrete","owanrinOse","owanrinOfun","obaraOgbe","obaraOyeku","obaraIwori","obaraIdi","obaraIrosun","obaraOwanrin","obaraOkonron","obaraOgunda","obaraOsa","obaraEka","obaraEturukpon","obaraEtura","obaraIrete","obaraOse","obaraOfun","okonronOgbe","okonronOyeku","okonronIwori","okonronIdi","okonronIrosun","okonronOwanrin","okonronObara","okonronOgunda","okonronOsa","okonronEka","okonronEturukpon","okonronEtura","okonronIrete","okonronOse","okonronOfun","ogundaOgbe","ogundaOyeku","ogundaIwori","ogundaIdi","ogundaIrosun","ogundaOwanrin","ogundaObara","ogundaOkonron","ogundaOsa","ogundaEka","ogundaEturukpon","ogundaEtura","ogundaIrete","ogundaOse","ogundaOfun","osaOgbe","osaOyeku","osaIwori","osaIdi","osaIrosun","osaOwanrin","osaObara","osaOkonron","osaOgunda","osaEka","osaEturukpon","osaEtura","osaIrete","osaOse","osaOfun","ekaOgbe","ekaOyeku","ekaIwori","ekaIdi","ekaIrosun","ekaOwanrin","ekaObara","ekaOkonron","ekaOgunda","ekaOsa","ekaEturukpon","ekaEtura","ekaIrete","ekaOse","ekaOfun","eturukponOgbe","eturukponOyeku","eturukponIwori","eturukponIdi","eturukponIrosun","eturukponOwanrin","eturukponObara","eturukponOkonron","eturukponOgunda","eturukponOsa","eturukponEka","eturukponEtura","eturukponIrete","eturukponOse","eturukponOfun","eturaOgbe","eturaOyeku","eturaIwori","eturaIdi","eturaIrosun","eturaOwanrin","eturaObara","eturaOkonron","eturaOgunda","eturaOsa","eturaEka","eturaEturukpon","eturaIrete","eturaOse","eturaOfun","ireteOgbe","ireteOyeku","ireteIwori","ireteIdi","ireteIrosun","ireteOwanrin","ireteObara","ireteOkonron","ireteOgunda","ireteOsa","ireteEka","ireteEturukpon","ireteEtura","ireteOse","ireteOfun","oseOgbe","oseOyeku","oseIwori","oseIdi","oseIrosun","oseOwanrin","oseObara","oseOkonron","oseOgunda","oseOsa","oseEka","oseEturukpon","oseEtura","oseIrete","oseOfun","ofunOgbe","ofunOyeku","ofunIwori","ofunIdi","ofunIrosun","ofunOwanrin","ofunObara","ofunOkonron","ofunOgunda","ofunOsa","ofunEka","ofunEturukpon","ofunEtura","ofunIrete","ofunOse"];

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






function opon_touch_func(){
    
    let opon_Left_side = document.getElementById("Left-Side");
    let opon_Right_side = document.getElementById("Right-Side");


      
    //Left Side
    let opon_Ifa_Left_Side_Ogbe_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - ogbe - left half.jpg'; 
    let opon_Ifa_Left_Side_Oyeku_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - oyeku - left half.jpg';
    let opon_Ifa_Left_Side_Iwori_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - iwori - left half.jpg';
    let opon_Ifa_Left_Side_Idi_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - idi - left half.jpg';
    let opon_Ifa_Left_Side_Obara_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - obara - left half.jpg';
    let opon_Ifa_Left_Side_Okonron_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - OKONRON - left half.jpg';
    let opon_Ifa_Left_Side_Irosun_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - irosun - left half.jpg';
    let opon_Ifa_Left_Side_Owanrin_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - owanrin - left half.jpg';
    let opon_Ifa_Left_Side_Ogunda_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - ogunda- left half.jpg';
    let opon_Ifa_Left_Side_Osa_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - osa - left half.jpg';
    let opon_Ifa_Left_Side_Etura_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - etura - left half.jpg' ;
    let opon_Ifa_Left_Side_Irete_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - irete - left half.jpg';
    let opon_Ifa_Left_Side_Eka_Meji =  'images\\Pictures\\Odus\\Left Half\\opon ifa - eka - left half.jpg';
    let opon_Ifa_Left_Side_Eturukpon_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - eturukpon - left half.jpg';
    let opon_Ifa_Left_Side_Ose_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - ose - left half.jpg';
    let opon_Ifa_Left_Side_Ofun_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - ofun - left half.jpg';
    //Right side
    let opon_Ifa_Right_Side_Ogbe_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - Ogbe - right half.jpg'; 
    let opon_Ifa_Right_Side_Oyeku_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - oyeku - right half.jpg';
    let opon_Ifa_Right_Side_Iwori_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - iwori - right half.jpg';
    let opon_Ifa_Right_Side_Idi_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - idi- right half.jpg';
    let opon_Ifa_Right_Side_Obara_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - obara - right half.jpg' ;
    let opon_Ifa_Right_Side_Okonron_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - okonron - right half.jpg' ;
    let opon_Ifa_Right_Side_Irosun_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - irosun - right half.jpg';
    let opon_Ifa_Right_Side_Owanrin_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - owanrin - right half.jpg';
    let opon_Ifa_Right_Side_Ogunda_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - ogunda - right half.jpg';
    let opon_Ifa_Right_Side_Osa_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - osa - right half.jpg';
    let opon_Ifa_Right_Side_Etura_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - etura - right half.jpg';
    let opon_Ifa_Right_Side_Irete_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - irete - right half.jpg';
    let opon_Ifa_Right_Side_Eka_Meji =  'images\\Pictures\\Odus\\Right Half\\opon ifa - eka - right half.jpg';
    let opon_Ifa_Right_Side_Eturukpon_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - eturukpon - right half.jpg';
    let opon_Ifa_Right_Side_Ose_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - ose - right half.jpg';
    let opon_Ifa_Right_Side_Ofun_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - ofun - right half.jpg';


//start of the  if cycle for the left side of the opon

if (first_left === true && second_left === true && third_left === true && fourth_left === true) {
    opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ogbe_Meji);
    var left_odu = "Ogbe";
} else if (first_left === false && second_left === false && third_left === false && fourth_left === false) {
    opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Oyeku_Meji);
    var left_odu = "Oyeku";
} else if (first_left === false && second_left === true && third_left === true && fourth_left === false) {
    opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Iwori_Meji);
    var left_odu = "Iwori";
} else if (first_left === true && second_left === false && third_left === false && fourth_left === true) {
    opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Idi_Meji);
    var left_odu = "Idi";
} else if (first_left === true && second_left === false && third_left === false && fourth_left === false) {
    opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Obara_Meji);
    var left_odu = "Obara";
} else if (first_left === false && second_left === false && third_left === false && fourth_left === true) {
    opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Okonron_Meji);
    var left_odu = "Okonron";
} else if (first_left === true && second_left === true && third_left === false && fourth_left === false) {
    opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Irosun_Meji);
    var left_odu = "Irosun";
} else if (first_left === false && second_left === false && third_left === true && fourth_left === true) {
    opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Owanrin_Meji);
    var left_odu = "Owanrin";
} else if (first_left === true && second_left === true && third_left === true && fourth_left === false) {
    opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ogunda_Meji);
    var left_odu = "Ogunda";
} else if (first_left === false && second_left === true && third_left === true && fourth_left === true) {
    opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Osa_Meji);
    var left_odu = "Osa";
} else if (first_left === true && second_left === false && third_left === true && fourth_left === true) {
    opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Etura_Meji);
    var left_odu = "Etura";
} else if (first_left === true && second_left === true && third_left === false && fourth_left === true) {
    opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Irete_Meji);
    var left_odu = "Irete";
} else if (first_left === false && second_left === true && third_left === false && fourth_left === false) {
    opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Eka_Meji);
    var left_odu = "Eka";
} else if (first_left === false && second_left === false && third_left === true && fourth_left === false) {
    opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Eturukpon_Meji);
    var left_odu = "Eturukpon";
} else if (first_left === true && second_left === false && third_left === true && fourth_left === false) {
    opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ose_Meji);
    var left_odu = "Ose";
} else if (first_left === false && second_left === true && third_left === false && fourth_left === true) {
    opon_Left_side.setAttribute('href',opon_Ifa_Left_Side_Ofun_Meji);
    var left_odu = "Ofun";
}
//end of the  if cycle for the left side of the opon

//start of the  if cycle for the right side of the opon

if (first_right === true && second_right === true && third_right === true && fourth_right === true) {
    opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ogbe_Meji);
    var right_odu = "Ogbe";
} else if (first_right === false && second_right === false && third_right === false && fourth_right === false) {
    opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Oyeku_Meji);
    var right_odu = "Oyeku";
} else if (first_right === false && second_right === true && third_right === true && fourth_right === false) {
    opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Iwori_Meji);
    var right_odu = "Iwori";
} else if (first_right === true && second_right === false && third_right === false && fourth_right === true) {
    opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Idi_Meji);
    var right_odu = "Idi";
} else if (first_right === true && second_right === false && third_right === false && fourth_right === false) {
    opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Obara_Meji);
    var right_odu = "Obara";
} else if (first_right === false && second_right === false && third_right === false && fourth_right === true) {
    opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Okonron_Meji);
    var right_odu = "Okonron";
} else if (first_right === true && second_right === true && third_right === false && fourth_right === false) {
    opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Irosun_Meji);
    var right_odu = "Irosun";
} else if (first_right === false && second_right === false && third_right === true && fourth_right === true) {
    opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Owanrin_Meji);
    var right_odu = "Owanrin";
} else if (first_right === true && second_right === true && third_right === true && fourth_right === false) {
    opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ogunda_Meji);
    var right_odu = "Ogunda";
} else if (first_right === false && second_right === true && third_right === true && fourth_right === true) {
    opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Osa_Meji);
    var right_odu = "Osa";
} else if (first_right === true && second_right === false && third_right === true && fourth_right === true) {
    opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Etura_Meji);
    var right_odu = "Etura";
} else if (first_right === true && second_right === true && third_right === false && fourth_right === true) {
    opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Irete_Meji);
    var right_odu = "Irete";
} else if (first_right === false && second_right === true && third_right === false && fourth_right === false) {
    opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Eka_Meji);
    var right_odu = "Eka";
} else if (first_right === false && second_right === false && third_right === true && fourth_right === false) {
    opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Eturukpon_Meji);
    var right_odu = "Eturukpon";
} else if (first_right === true && second_right === false && third_right === true && fourth_right === false) {
    opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ose_Meji);
    var right_odu = "Ose";
} else if (first_right === false && second_right === true && third_right === false && fourth_right === true) {
    opon_Right_side.setAttribute('href',opon_Ifa_Right_Side_Ofun_Meji);
    var right_odu = "Ofun";
} 
//end of the  if cycle for the right side of the opon

//Start of if cycle for assign value for var odu
if (right_odu === "Ogbe" && left_odu === "Ogbe") {
    odu = odus[0];
    oduForTheJSON = ListofOdusNamesForTheJSON[0];
    oduJSONAddress = `data\\oduData\\mejis\\${oduForTheJSON}.json`;
} else if (right_odu === "Oyeku" && left_odu === "Oyeku") {
    odu = odus[1];
    oduForTheJSON = ListofOdusNamesForTheJSON[1];
    oduJSONAddress = `data\\oduData\\mejis\\${oduForTheJSON}.json`;
}else if (right_odu === "Iwori" && left_odu === "Iwori") {
    odu = odus[2];
    oduForTheJSON = ListofOdusNamesForTheJSON[2];
    oduJSONAddress = `data\\oduData\\mejis\\${oduForTheJSON}.json`;
}else if (right_odu === "Idi" && left_odu === "Idi") {
    odu = odus[3];
    oduForTheJSON = ListofOdusNamesForTheJSON[3];
    oduJSONAddress = `data\\oduData\\mejis\\${oduForTheJSON}.json`;
}else if (right_odu === "Irosun" && left_odu === "Irosun") {
    odu = odus[4];
    oduForTheJSON = ListofOdusNamesForTheJSON[4];
    oduJSONAddress = `data\\oduData\\mejis\\${oduForTheJSON}.json`;
}else if (right_odu === "Owanrin" && left_odu === "Owanrin") {
    odu = odus[5];
    oduForTheJSON = ListofOdusNamesForTheJSON[5];
    oduJSONAddress = `data\\oduData\\mejis\\${oduForTheJSON}.json`;
}else if (right_odu === "Obara" && left_odu === "Obara") {
    odu = odus[6];
    oduForTheJSON = ListofOdusNamesForTheJSON[6];
    oduJSONAddress = `data\\oduData\\mejis\\${oduForTheJSON}.json`;
}else if (right_odu === "Okonron" && left_odu === "Okonron") {
    odu = odus[7];
    oduForTheJSON = ListofOdusNamesForTheJSON[7];
    oduJSONAddress = `data\\oduData\\mejis\\${oduForTheJSON}.json`;
}else if (right_odu === "Ogunda" && left_odu === "Ogunda") {
    odu = odus[8];
    oduForTheJSON = ListofOdusNamesForTheJSON[8];
    oduJSONAddress = `data\\oduData\\mejis\\${oduForTheJSON}.json`;
}else if (right_odu === "Osa" && left_odu === "Osa") {
    odu = odus[9];
    oduForTheJSON = ListofOdusNamesForTheJSON[9];
    oduJSONAddress = `data\\oduData\\mejis\\${oduForTheJSON}.json`;
}else if (right_odu === "Eka" && left_odu === "Eka") {
    odu = odus[10];
    oduForTheJSON = ListofOdusNamesForTheJSON[10];
    oduJSONAddress = `data\\oduData\\mejis\\${oduForTheJSON}.json`;
}else if (right_odu === "Eturukpon" && left_odu === "Eturukpon") {
    odu = odus[11];
    oduForTheJSON = ListofOdusNamesForTheJSON[11];
    oduJSONAddress = `data\\oduData\\mejis\\${oduForTheJSON}.json`;
}else if (right_odu === "Etura" && left_odu === "Etura") {
    odu = odus[12];
    oduForTheJSON = ListofOdusNamesForTheJSON[12];
    oduJSONAddress = `data\\oduData\\mejis\\${oduForTheJSON}.json`;
}else if (right_odu === "Irete" && left_odu === "Irete") {
    odu = odus[13];
    oduForTheJSON = ListofOdusNamesForTheJSON[13];
    oduJSONAddress = `data\\oduData\\mejis\\${oduForTheJSON}.json`;
}else if (right_odu === "Ose" && left_odu === "Ose") {
    odu = odus[14];
    oduForTheJSON = ListofOdusNamesForTheJSON[14];
    oduJSONAddress = `data\\oduData\\mejis\\${oduForTheJSON}.json`;
}else if (right_odu === "Ofun" && left_odu === "Ofun") {
    odu = odus[15];
    oduForTheJSON = ListofOdusNamesForTheJSON[15];
    oduJSONAddress = `data\\oduData\\mejis\\${oduForTheJSON}.json`;
}else if (right_odu === "Ogbe" && left_odu === "Oyeku") {
    odu = odus[16];
    oduForTheJSON = ListofOdusNamesForTheJSON[16];
    oduJSONAddress = `data\\oduData\\noMejis\\ogbe\\${oduForTheJSON}.json`;
}else if (right_odu === "Ogbe" && left_odu === "Iwori") {
    odu = odus[17];
    oduForTheJSON = ListofOdusNamesForTheJSON[17];
    oduJSONAddress = `data\\oduData\\noMejis\\ogbe\\${oduForTheJSON}.json`;
}else if (right_odu === "Ogbe" && left_odu === "Idi") {
    odu = odus[18];
    oduForTheJSON = ListofOdusNamesForTheJSON[18];
    oduJSONAddress = `data\\oduData\\noMejis\\ogbe\\${oduForTheJSON}.json`;
}else if (right_odu === "Ogbe" && left_odu === "Irosun") {
    odu = odus[19];
    oduForTheJSON = ListofOdusNamesForTheJSON[19];
    oduJSONAddress = `data\\oduData\\noMejis\\ogbe\\${oduForTheJSON}.json`;
}else if (right_odu === "Ogbe" && left_odu === "Owanrin") {
    odu = odus[20];
    oduForTheJSON = ListofOdusNamesForTheJSON[20];
    oduJSONAddress = `data\\oduData\\noMejis\\ogbe\\${oduForTheJSON}.json`;
}else if (right_odu === "Ogbe" && left_odu === "Obara") {
    odu = odus[21];
    oduForTheJSON = ListofOdusNamesForTheJSON[21];
    oduJSONAddress = `data\\oduData\\noMejis\\ogbe\\${oduForTheJSON}.json`;
}else if (right_odu === "Ogbe" && left_odu === "Okonron") {
    odu = odus[22];
    oduForTheJSON = ListofOdusNamesForTheJSON[22];
    oduJSONAddress = `data\\oduData\\noMejis\\ogbe\\${oduForTheJSON}.json`;
}else if (right_odu === "Ogbe" && left_odu === "Ogunda") {
    odu = odus[23];
    oduForTheJSON = ListofOdusNamesForTheJSON[23];
    oduJSONAddress = `data\\oduData\\noMejis\\ogbe\\${oduForTheJSON}.json`;
}else if (right_odu === "Ogbe" && left_odu === "Osa") {
    odu = odus[24];
    oduForTheJSON = ListofOdusNamesForTheJSON[24];
    oduJSONAddress = `data\\oduData\\noMejis\\ogbe\\${oduForTheJSON}.json`;
}else if (right_odu === "Ogbe" && left_odu === "Eka") {
    odu = odus[25];
    oduForTheJSON = ListofOdusNamesForTheJSON[25];
    oduJSONAddress = `data\\oduData\\noMejis\\ogbe\\${oduForTheJSON}.json`;
}else if (right_odu === "Ogbe" && left_odu === "Eturukpon") {
    odu = odus[26];
    oduForTheJSON = ListofOdusNamesForTheJSON[26];
    oduJSONAddress = `data\\oduData\\noMejis\\ogbe\\${oduForTheJSON}.json`;
}else if (right_odu === "Ogbe" && left_odu === "Etura") {
    odu = odus[27];
    oduForTheJSON = ListofOdusNamesForTheJSON[27];
    oduJSONAddress = `data\\oduData\\noMejis\\ogbe\\${oduForTheJSON}.json`;
}else if (right_odu === "Ogbe" && left_odu === "Irete") {
    odu = odus[28];
    oduForTheJSON = ListofOdusNamesForTheJSON[28];
    oduJSONAddress = `data\\oduData\\noMejis\\ogbe\\${oduForTheJSON}.json`;
}else if (right_odu === "Ogbe" && left_odu === "Ose") {
    odu = odus[29];
    oduForTheJSON = ListofOdusNamesForTheJSON[29];
    oduJSONAddress = `data\\oduData\\noMejis\\ogbe\\${oduForTheJSON}.json`;
}else if (right_odu === "Ogbe" && left_odu === "Ofun") {
    odu = odus[30];
    oduForTheJSON = ListofOdusNamesForTheJSON[30];
    oduJSONAddress = `data\\oduData\\noMejis\\ogbe\\${oduForTheJSON}.json`;
}else if (right_odu === "Oyeku" && left_odu === "Ogbe") {
    odu = odus[31];
    oduForTheJSON = ListofOdusNamesForTheJSON[31];
    oduJSONAddress = `data\\oduData\\noMejis\\oyeku\\${oduForTheJSON}.json`;
}else if (right_odu === "Oyeku" && left_odu === "Iwori") {
    odu = odus[32];
    oduForTheJSON = ListofOdusNamesForTheJSON[32];
    oduJSONAddress = `data\\oduData\\noMejis\\oyeku\\${oduForTheJSON}.json`;
}else if (right_odu === "Oyeku" && left_odu === "Idi") {
    odu = odus[33];
    oduForTheJSON = ListofOdusNamesForTheJSON[33];
    oduJSONAddress = `data\\oduData\\noMejis\\oyeku\\${oduForTheJSON}.json`;
}else if (right_odu === "Oyeku" && left_odu === "Irosun") {
    odu = odus[34];
    oduForTheJSON = ListofOdusNamesForTheJSON[34];
    oduJSONAddress = `data\\oduData\\noMejis\\oyeku\\${oduForTheJSON}.json`;
}else if (right_odu === "Oyeku" && left_odu === "Owanrin") {
    odu = odus[35];
    oduForTheJSON = ListofOdusNamesForTheJSON[35];
    oduJSONAddress = `data\\oduData\\noMejis\\oyeku\\${oduForTheJSON}.json`;
}else if (right_odu === "Oyeku" && left_odu === "Obara") {
    odu = odus[36];
    oduForTheJSON = ListofOdusNamesForTheJSON[36];
    oduJSONAddress = `data\\oduData\\noMejis\\oyeku\\${oduForTheJSON}.json`;
}else if (right_odu === "Oyeku" && left_odu === "Okonron") {
    odu = odus[37];
    oduForTheJSON = ListofOdusNamesForTheJSON[37];
    oduJSONAddress = `data\\oduData\\noMejis\\oyeku\\${oduForTheJSON}.json`;
}else if (right_odu === "Oyeku" && left_odu === "Ogunda") {
    odu = odus[38]; 
    oduForTheJSON = ListofOdusNamesForTheJSON[38];
    oduJSONAddress = `data\\oduData\\noMejis\\oyeku\\${oduForTheJSON}.json`;
}else if (right_odu === "Oyeku" && left_odu === "Osa") {
    odu = odus[39];
    oduForTheJSON = ListofOdusNamesForTheJSON[39];
    oduJSONAddress = `data\\oduData\\noMejis\\oyeku\\${oduForTheJSON}.json`;
}else if (right_odu === "Oyeku" && left_odu === "Eka") {
    odu = odus[40];
    oduForTheJSON = ListofOdusNamesForTheJSON[40];
    oduJSONAddress = `data\\oduData\\noMejis\\oyeku\\${oduForTheJSON}.json`;
}else if (right_odu === "Oyeku" && left_odu === "Eturukpon") {
    odu = odus[41];
    oduForTheJSON = ListofOdusNamesForTheJSON[41];
    oduJSONAddress = `data\\oduData\\noMejis\\oyeku\\${oduForTheJSON}.json`;
}else if (right_odu === "Oyeku" && left_odu === "Etura") {
    odu = odus[42];
    oduForTheJSON = ListofOdusNamesForTheJSON[42];
    oduJSONAddress = `data\\oduData\\noMejis\\oyeku\\${oduForTheJSON}.json`;
}else if (right_odu === "Oyeku" && left_odu === "Irete") {
    odu = odus[43];
    oduForTheJSON = ListofOdusNamesForTheJSON[43];
    oduJSONAddress = `data\\oduData\\noMejis\\oyeku\\${oduForTheJSON}.json`;
}else if (right_odu === "Oyeku" && left_odu === "Ose") {
    odu = odus[44];
    oduForTheJSON = ListofOdusNamesForTheJSON[44];
    oduJSONAddress = `data\\oduData\\noMejis\\oyeku\\${oduForTheJSON}.json`;
}else if (right_odu === "Oyeku" && left_odu === "Ofun") {
    odu = odus[45];
    oduForTheJSON = ListofOdusNamesForTheJSON[45];
    oduJSONAddress = `data\\oduData\\noMejis\\oyeku\\${oduForTheJSON}.json`;
}else if (right_odu === "Iwori" && left_odu === "Ogbe") {
    odu = odus[46];
    oduForTheJSON = ListofOdusNamesForTheJSON[46];
    oduJSONAddress = `data\\oduData\\noMejis\\iwori\\${oduForTheJSON}.json`;
}else if (right_odu === "Iwori" && left_odu === "Oyeku") {
    odu = odus[47];
    oduForTheJSON = ListofOdusNamesForTheJSON[47];
    oduJSONAddress = `data\\oduData\\noMejis\\iwori\\${oduForTheJSON}.json`;
}else if (right_odu === "Iwori" && left_odu === "Idi") {
    odu = odus[48];
    oduForTheJSON = ListofOdusNamesForTheJSON[48];
    oduJSONAddress = `data\\oduData\\noMejis\\iwori\\${oduForTheJSON}.json`;
}else if (right_odu === "Iwori" && left_odu === "Irosun") {
    odu = odus[49];
    oduForTheJSON = ListofOdusNamesForTheJSON[49];
    oduJSONAddress = `data\\oduData\\noMejis\\iwori\\${oduForTheJSON}.json`;
}else if (right_odu === "Iwori" && left_odu === "Owanrin") {
    odu = odus[50];
    oduForTheJSON = ListofOdusNamesForTheJSON[50];
    oduJSONAddress = `data\\oduData\\noMejis\\iwori\\${oduForTheJSON}.json`;
}else if (right_odu === "Iwori" && left_odu === "Obara") {
    odu = odus[51];
    oduForTheJSON = ListofOdusNamesForTheJSON[51];
    oduJSONAddress = `data\\oduData\\noMejis\\iwori\\${oduForTheJSON}.json`;
}else if (right_odu === "Iwori" && left_odu === "Okonron") {
    odu = odus[52];
    oduForTheJSON = ListofOdusNamesForTheJSON[52];
    oduJSONAddress = `data\\oduData\\noMejis\\iwori\\${oduForTheJSON}.json`;
}else if (right_odu === "Iwori" && left_odu === "Ogunda") {
    odu = odus[53];
    oduForTheJSON = ListofOdusNamesForTheJSON[53];
    oduJSONAddress = `data\\oduData\\noMejis\\iwori\\${oduForTheJSON}.json`;
}else if (right_odu === "Iwori" && left_odu === "Osa") {
    odu = odus[54];
    oduForTheJSON = ListofOdusNamesForTheJSON[54];
    oduJSONAddress = `data\\oduData\\noMejis\\iwori\\${oduForTheJSON}.json`;
}else if (right_odu === "Iwori" && left_odu === "Eka") {
    odu = odus[55];
    oduForTheJSON = ListofOdusNamesForTheJSON[55];
    oduJSONAddress = `data\\oduData\\noMejis\\iwori\\${oduForTheJSON}.json`;
}else if (right_odu === "Iwori" && left_odu === "Eturukpon") {
    odu = odus[56];
    oduForTheJSON = ListofOdusNamesForTheJSON[56];
    oduJSONAddress = `data\\oduData\\noMejis\\iwori\\${oduForTheJSON}.json`;
}else if (right_odu === "Iwori" && left_odu === "Etura") {
    odu = odus[57];
    oduForTheJSON = ListofOdusNamesForTheJSON[57];
    oduJSONAddress = `data\\oduData\\noMejis\\iwori\\${oduForTheJSON}.json`;
}else if (right_odu === "Iwori" && left_odu === "Irete") {
    odu = odus[58];
    oduForTheJSON = ListofOdusNamesForTheJSON[58];
    oduJSONAddress = `data\\oduData\\noMejis\\iwori\\${oduForTheJSON}.json`;
}else if (right_odu === "Iwori" && left_odu === "Ose") {
    odu = odus[59];
    oduForTheJSON = ListofOdusNamesForTheJSON[59];
    oduJSONAddress = `data\\oduData\\noMejis\\iwori\\${oduForTheJSON}.json`;
}else if (right_odu === "Iwori" && left_odu === "Ofun") {
    odu = odus[60];
    oduForTheJSON = ListofOdusNamesForTheJSON[60];
    oduJSONAddress = `data\\oduData\\noMejis\\iwori\\${oduForTheJSON}.json`;
}else if (right_odu === "Idi" && left_odu === "Ogbe") {
    odu = odus[61];
    oduForTheJSON = ListofOdusNamesForTheJSON[61];
    oduJSONAddress = `data\\oduData\\noMejis\\idi\\${oduForTheJSON}.json`;
}else if (right_odu === "Idi" && left_odu === "Oyeku") {
    odu = odus[62];
    oduForTheJSON = ListofOdusNamesForTheJSON[62];
    oduJSONAddress = `data\\oduData\\noMejis\\idi\\${oduForTheJSON}.json`;
}else if (right_odu === "Idi" && left_odu === "Iwori") {
    odu = odus[63];
    oduForTheJSON = ListofOdusNamesForTheJSON[63];
    oduJSONAddress = `data\\oduData\\noMejis\\idi\\${oduForTheJSON}.json`;
}else if (right_odu === "Idi" && left_odu === "Irosun") {
    odu = odus[64];
    oduForTheJSON = ListofOdusNamesForTheJSON[64];
    oduJSONAddress = `data\\oduData\\noMejis\\idi\\${oduForTheJSON}.json`;
}else if (right_odu === "Idi" && left_odu === "Owanrin") {
    odu = odus[65];
    oduForTheJSON = ListofOdusNamesForTheJSON[65];
    oduJSONAddress = `data\\oduData\\noMejis\\idi\\${oduForTheJSON}.json`;
}else if (right_odu === "Idi" && left_odu === "Obara") {
    odu = odus[66];
    oduForTheJSON = ListofOdusNamesForTheJSON[66];
    oduJSONAddress = `data\\oduData\\noMejis\\idi\\${oduForTheJSON}.json`;
}else if (right_odu === "Idi" && left_odu === "Okonron") {
    odu = odus[67];
    oduForTheJSON = ListofOdusNamesForTheJSON[67];
    oduJSONAddress = `data\\oduData\\noMejis\\idi\\${oduForTheJSON}.json`;
}else if (right_odu === "Idi" && left_odu === "Ogunda") {
    odu = odus[68];
    oduForTheJSON = ListofOdusNamesForTheJSON[68];
    oduJSONAddress = `data\\oduData\\noMejis\\idi\\${oduForTheJSON}.json`;
}else if (right_odu === "Idi" && left_odu === "Osa") {
    odu = odus[69];
    oduForTheJSON = ListofOdusNamesForTheJSON[69];
    oduJSONAddress = `data\\oduData\\noMejis\\idi\\${oduForTheJSON}.json`;
}else if (right_odu === "Idi" && left_odu === "Eka") {
    odu = odus[70];
    oduForTheJSON = ListofOdusNamesForTheJSON[70];
    oduJSONAddress = `data\\oduData\\noMejis\\idi\\${oduForTheJSON}.json`;
}else if (right_odu === "Idi" && left_odu === "Eturukpon") {
    odu = odus[71];
    oduForTheJSON = ListofOdusNamesForTheJSON[71];
    oduJSONAddress = `data\\oduData\\noMejis\\idi\\${oduForTheJSON}.json`;
}else if (right_odu === "Idi" && left_odu === "Etura") {
    odu = odus[72];
    oduForTheJSON = ListofOdusNamesForTheJSON[72];
    oduJSONAddress = `data\\oduData\\noMejis\\idi\\${oduForTheJSON}.json`;
}else if (right_odu === "Idi" && left_odu === "Irete") {
    odu = odus[73];
    oduForTheJSON = ListofOdusNamesForTheJSON[73];
    oduJSONAddress = `data\\oduData\\noMejis\\idi\\${oduForTheJSON}.json`;
}else if (right_odu === "Idi" && left_odu === "Ose") {
    odu = odus[74];
    oduForTheJSON = ListofOdusNamesForTheJSON[74];
    oduJSONAddress = `data\\oduData\\noMejis\\idi\\${oduForTheJSON}.json`;
}else if (right_odu === "Idi" && left_odu === "Ofun") {
    odu = odus[75];
    oduForTheJSON = ListofOdusNamesForTheJSON[75];
    oduJSONAddress = `data\\oduData\\noMejis\\idi\\${oduForTheJSON}.json`;
}else if (right_odu === "Irosun" && left_odu === "Ogbe") {
    odu = odus[76];
    oduForTheJSON = ListofOdusNamesForTheJSON[76];
    oduJSONAddress = `data\\oduData\\noMejis\\irosun\\${oduForTheJSON}.json`;
}else if (right_odu === "Irosun" && left_odu === "Oyeku") {
    odu = odus[77];
    oduForTheJSON = ListofOdusNamesForTheJSON[77];
    oduJSONAddress = `data\\oduData\\noMejis\\irosun\\${oduForTheJSON}.json`;
}else if (right_odu === "Irosun" && left_odu === "Iwori") {
    odu = odus[78];
    oduForTheJSON = ListofOdusNamesForTheJSON[78];
    oduJSONAddress = `data\\oduData\\noMejis\\irosun\\${oduForTheJSON}.json`;
}else if (right_odu === "Irosun" && left_odu === "Idi") {
    odu = odus[79];
    oduForTheJSON = ListofOdusNamesForTheJSON[79];
    oduJSONAddress = `data\\oduData\\noMejis\\irosun\\${oduForTheJSON}.json`;
}else if (right_odu === "Irosun" && left_odu === "Okonron") {Owanrin
    odu = odus[80];
    oduForTheJSON = ListofOdusNamesForTheJSON[80];
    oduJSONAddress = `data\\oduData\\noMejis\\irosun\\${oduForTheJSON}.json`;
}else if (right_odu === "Irosun" && left_odu === "Obara") {
    odu = odus[81];
    oduForTheJSON = ListofOdusNamesForTheJSON[81];
    oduJSONAddress = `data\\oduData\\noMejis\\irosun\\${oduForTheJSON}.json`;
}else if (right_odu === "Irosun" && left_odu === "Owanrin") {Okonron
    odu = odus[82];
    oduForTheJSON = ListofOdusNamesForTheJSON[82];
    oduJSONAddress = `data\\oduData\\noMejis\\irosun\\${oduForTheJSON}.json`;
}else if (right_odu === "Irosun" && left_odu === "Ogunda") {
    odu = odus[83];    
    oduForTheJSON = ListofOdusNamesForTheJSON[83];
    oduJSONAddress = `data\\oduData\\noMejis\\irosun\\${oduForTheJSON}.json`;
}else if (right_odu === "Irosun" && left_odu === "Osa") {
    odu = odus[84];
    oduForTheJSON = ListofOdusNamesForTheJSON[84];
    oduJSONAddress = `data\\oduData\\noMejis\\irosun\\${oduForTheJSON}.json`;
}else if (right_odu === "Irosun" && left_odu === "Etura") {Eka
    odu = odus[85];
    oduForTheJSON = ListofOdusNamesForTheJSON[85];
    oduJSONAddress = `data\\oduData\\noMejis\\irosun\\${oduForTheJSON}.json`;
}else if (right_odu === "Irosun" && left_odu === "Irete") {Eturukpon
    odu = odus[86];
    oduForTheJSON = ListofOdusNamesForTheJSON[86];
    oduJSONAddress = `data\\oduData\\noMejis\\irosun\\${oduForTheJSON}.json`;
}else if (right_odu === "Irosun" && left_odu === "Eka") {Etura
    odu = odus[87];
    oduForTheJSON = ListofOdusNamesForTheJSON[87];
    oduJSONAddress = `data\\oduData\\noMejis\\irosun\\${oduForTheJSON}.json`;
}else if (right_odu === "Irosun" && left_odu === "Eturukpon") {Irete
    odu = odus[88];
    oduForTheJSON = ListofOdusNamesForTheJSON[88];
    oduJSONAddress = `data\\oduData\\noMejis\\irosun\\${oduForTheJSON}.json`;
}else if (right_odu === "Irosun" && left_odu === "Ose") {
    odu = odus[89];
    oduForTheJSON = ListofOdusNamesForTheJSON[89];
    oduJSONAddress = `data\\oduData\\noMejis\\irosun\\${oduForTheJSON}.json`;
}else if (right_odu === "Irosun" && left_odu === "Ofun") {
    odu = odus[90];
    oduForTheJSON = ListofOdusNamesForTheJSON[90];
    oduJSONAddress = `data\\oduData\\noMejis\\irosun\\${oduForTheJSON}.json`;
}else if (right_odu === "Owanrin" && left_odu === "Ogbe") {
    odu = odus[91];
    oduForTheJSON = ListofOdusNamesForTheJSON[91];
    oduJSONAddress = `data\\oduData\\noMejis\\owarin\\${oduForTheJSON}.json`;
}else if (right_odu === "Owanrin" && left_odu === "Oyeku") {
    odu = odus[92];
    oduForTheJSON = ListofOdusNamesForTheJSON[92];
    oduJSONAddress = `data\\oduData\\noMejis\\owarin\\${oduForTheJSON}.json`;
}else if (right_odu === "Owanrin" && left_odu === "Iwori") {
    odu = odus[93];
    oduForTheJSON = ListofOdusNamesForTheJSON[93];
    oduJSONAddress = `data\\oduData\\noMejis\\owarin\\${oduForTheJSON}.json`;
}else if (right_odu === "Owanrin" && left_odu === "Idi") {
    odu = odus[94];
    oduForTheJSON = ListofOdusNamesForTheJSON[94];
    oduJSONAddress = `data\\oduData\\noMejis\\owarin\\${oduForTheJSON}.json`;
}else if (right_odu === "Owanrin" && left_odu === "Obara") {Irosun
    odu = odus[95];
    oduForTheJSON = ListofOdusNamesForTheJSON[95];
    oduJSONAddress = `data\\oduData\\noMejis\\owarin\\${oduForTheJSON}.json`;
}else if (right_odu === "Owanrin" && left_odu === "Irosun") {Obara
    odu = odus[96];
    oduForTheJSON = ListofOdusNamesForTheJSON[96];
    oduJSONAddress = `data\\oduData\\noMejis\\owarin\\${oduForTheJSON}.json`;
}else if (right_odu === "Owanrin" && left_odu === "Okonron") {
    odu = odus[97];
    oduForTheJSON = ListofOdusNamesForTheJSON[97];
    oduJSONAddress = `data\\oduData\\noMejis\\owarin\\${oduForTheJSON}.json`;
}else if (right_odu === "Owanrin" && left_odu === "Ogunda") {
    odu = odus[98];
    oduForTheJSON = ListofOdusNamesForTheJSON[98];
    oduJSONAddress = `data\\oduData\\noMejis\\owarin\\${oduForTheJSON}.json`;
}else if (right_odu === "Owanrin" && left_odu === "Osa") {
    odu = odus[99];
    oduForTheJSON = ListofOdusNamesForTheJSON[99];
    oduJSONAddress = `data\\oduData\\noMejis\\owarin\\${oduForTheJSON}.json`;
}else if (right_odu === "Owanrin" && left_odu === "Etura") {Eka
    odu = odus[100];
    oduForTheJSON = ListofOdusNamesForTheJSON[100];
    oduJSONAddress = `data\\oduData\\noMejis\\owarin\\${oduForTheJSON}.json`;
}else if (right_odu === "Owanrin" && left_odu === "Irete") {Eturukpon
    odu = odus[101];
    oduForTheJSON = ListofOdusNamesForTheJSON[101];
    oduJSONAddress = `data\\oduData\\noMejis\\owarin\\${oduForTheJSON}.json`;
}else if (right_odu === "Owanrin" && left_odu === "Eka") {Etura
    odu = odus[102];
    oduForTheJSON = ListofOdusNamesForTheJSON[102];
    oduJSONAddress = `data\\oduData\\noMejis\\owarin\\${oduForTheJSON}.json`;
}else if (right_odu === "Owanrin" && left_odu === "Eturukpon") {Irete
    odu = odus[103];
    oduForTheJSON = ListofOdusNamesForTheJSON[103];
    oduJSONAddress = `data\\oduData\\noMejis\\owarin\\${oduForTheJSON}.json`;
}else if (right_odu === "Owanrin" && left_odu === "Ose") {
    odu = odus[104];
    oduForTheJSON = ListofOdusNamesForTheJSON[104];
    oduJSONAddress = `data\\oduData\\noMejis\\owarin\\${oduForTheJSON}.json`;
}else if (right_odu === "Owanrin" && left_odu === "Ofun") {
    odu = odus[105];
    oduForTheJSON = ListofOdusNamesForTheJSON[105];
    oduJSONAddress = `data\\oduData\\noMejis\\owarin\\${oduForTheJSON}.json`;
}else if (right_odu === "Obara" && left_odu === "Ogbe") {
    odu = odus[106];
    oduForTheJSON = ListofOdusNamesForTheJSON[106];
    oduJSONAddress = `data\\oduData\\noMejis\\obara\\${oduForTheJSON}.json`;
}else if (right_odu === "Obara" && left_odu === "Oyeku") {
    odu = odus[107];
    oduForTheJSON = ListofOdusNamesForTheJSON[107];
    oduJSONAddress = `data\\oduData\\noMejis\\obara\\${oduForTheJSON}.json`;
}else if (right_odu === "Obara" && left_odu === "Iwori") {
    odu = odus[108];
    oduForTheJSON = ListofOdusNamesForTheJSON[108];
    oduJSONAddress = `data\\oduData\\noMejis\\obara\\${oduForTheJSON}.json`;
}else if (right_odu === "Obara" && left_odu === "Idi") {
    odu = odus[109];
    oduForTheJSON = ListofOdusNamesForTheJSON[109];
    oduJSONAddress = `data\\oduData\\noMejis\\obara\\${oduForTheJSON}.json`;
}else if (right_odu === "Obara" && left_odu === "Irosun") {
    odu = odus[110];
    oduForTheJSON = ListofOdusNamesForTheJSON[110];
    oduJSONAddress = `data\\oduData\\noMejis\\obara\\${oduForTheJSON}.json`;
}else if (right_odu === "Obara" && left_odu === "Owanrin") {
    odu = odus[111];
    oduForTheJSON = ListofOdusNamesForTheJSON[111];
    oduJSONAddress = `data\\oduData\\noMejis\\obara\\${oduForTheJSON}.json`;
}else if (right_odu === "Obara" && left_odu === "Okonron") {
    odu = odus[112];
    oduForTheJSON = ListofOdusNamesForTheJSON[112];
    oduJSONAddress = `data\\oduData\\noMejis\\obara\\${oduForTheJSON}.json`;
}else if (right_odu === "Obara" && left_odu === "Ogunda") {
    odu = odus[113];
    oduJSONAddress = `data\\oduData\\noMejis\\obara\\${oduForTheJSON}.json`;
    oduForTheJSON = ListofOdusNamesForTheJSON[113];
}else if (right_odu === "Obara" && left_odu === "Osa") {
    odu = odus[114];
    oduForTheJSON = ListofOdusNamesForTheJSON[114];
    oduJSONAddress = `data\\oduData\\noMejis\\obara\\${oduForTheJSON}.json`;
}else if (right_odu === "Obara" && left_odu === "Eka") {
    odu = odus[115];
    oduForTheJSON = ListofOdusNamesForTheJSON[115];
    oduJSONAddress = `data\\oduData\\noMejis\\obara\\${oduForTheJSON}.json`;
}else if (right_odu === "Obara" && left_odu === "Eturukpon") {
    odu = odus[116];
    oduForTheJSON = ListofOdusNamesForTheJSON[116];
    oduJSONAddress = `data\\oduData\\noMejis\\obara\\${oduForTheJSON}.json`;
}else if (right_odu === "Obara" && left_odu === "Etura") {
    odu = odus[117];
    oduForTheJSON = ListofOdusNamesForTheJSON[117];
    oduJSONAddress = `data\\oduData\\noMejis\\obara\\${oduForTheJSON}.json`;
}else if (right_odu === "Obara" && left_odu === "Irete") {
    odu = odus[118];
    oduForTheJSON = ListofOdusNamesForTheJSON[118];
    oduJSONAddress = `data\\oduData\\noMejis\\obara\\${oduForTheJSON}.json`;
}else if (right_odu === "Obara" && left_odu === "Ose") {
    odu = odus[119];
    oduForTheJSON = ListofOdusNamesForTheJSON[119];
    oduJSONAddress = `data\\oduData\\noMejis\\obara\\${oduForTheJSON}.json`;
}else if (right_odu === "Obara" && left_odu === "Ofun") {
    odu = odus[120];
    oduForTheJSON = ListofOdusNamesForTheJSON[120];
    oduJSONAddress = `data\\oduData\\noMejis\\obara\\${oduForTheJSON}.json`;
}else if (right_odu === "Okonron" && left_odu === "Ogbe") {
    odu = odus[121];
    oduForTheJSON = ListofOdusNamesForTheJSON[121];
    oduJSONAddress = `data\\oduData\\noMejis\\okonron\\${oduForTheJSON}.json`;
}else if (right_odu === "Okonron" && left_odu === "Oyeku") {
    odu = odus[122];
    oduForTheJSON = ListofOdusNamesForTheJSON[122];
    oduJSONAddress = `data\\oduData\\noMejis\\okonron\\${oduForTheJSON}.json`;
}else if (right_odu === "Okonron" && left_odu === "Iwori") {
    odu = odus[123];
    oduForTheJSON = ListofOdusNamesForTheJSON[123];
    oduJSONAddress = `data\\oduData\\noMejis\\okonron\\${oduForTheJSON}.json`;
}else if (right_odu === "Okonron" && left_odu === "Idi") {
    odu = odus[124];
    oduForTheJSON = ListofOdusNamesForTheJSON[124];
    oduJSONAddress = `data\\oduData\\noMejis\\okonron\\${oduForTheJSON}.json`;
}else if (right_odu === "Okonron" && left_odu === "Irosun") {
    odu = odus[125];
    oduForTheJSON = ListofOdusNamesForTheJSON[125];
    oduJSONAddress = `data\\oduData\\noMejis\\okonron\\${oduForTheJSON}.json`;
}else if (right_odu === "Okonron" && left_odu === "Owanrin") {
    odu = odus[126];
    oduForTheJSON = ListofOdusNamesForTheJSON[126];
    oduJSONAddress = `data\\oduData\\noMejis\\okonron\\${oduForTheJSON}.json`;
}else if (right_odu === "Okonron" && left_odu === "Obara") {
    odu = odus[127];
    oduForTheJSON = ListofOdusNamesForTheJSON[127];
    oduJSONAddress = `data\\oduData\\noMejis\\okonron\\${oduForTheJSON}.json`;
}else if (right_odu === "Okonron" && left_odu === "Ogunda") {
    odu = odus[128];
    oduForTheJSON = ListofOdusNamesForTheJSON[128];
    oduJSONAddress = `data\\oduData\\noMejis\\okonron\\${oduForTheJSON}.json`;
}else if (right_odu === "Okonron" && left_odu === "Osa") {
    odu = odus[129];
    oduForTheJSON = ListofOdusNamesForTheJSON[129];
    oduJSONAddress = `data\\oduData\\noMejis\\okonron\\${oduForTheJSON}.json`;
}else if (right_odu === "Okonron" && left_odu === "Eka") {
    odu = odus[130];
    oduForTheJSON = ListofOdusNamesForTheJSON[130];
    oduJSONAddress = `data\\oduData\\noMejis\\okonron\\${oduForTheJSON}.json`;
}else if (right_odu === "Okonron" && left_odu === "Eturukpon") {
    odu = odus[131];
    oduForTheJSON = ListofOdusNamesForTheJSON[131];
    oduJSONAddress = `data\\oduData\\noMejis\\okonron\\${oduForTheJSON}.json`;
}else if (right_odu === "Okonron" && left_odu === "Etura") {
    odu = odus[132];
    oduForTheJSON = ListofOdusNamesForTheJSON[132];
    oduJSONAddress = `data\\oduData\\noMejis\\okonron\\${oduForTheJSON}.json`;
}else if (right_odu === "Okonron" && left_odu === "Irete") {
    odu = odus[133];
    oduForTheJSON = ListofOdusNamesForTheJSON[133];
    oduJSONAddress = `data\\oduData\\noMejis\\okonron\\${oduForTheJSON}.json`;
}else if (right_odu === "Okonron" && left_odu === "Ose") {
    odu = odus[134];
    oduForTheJSON = ListofOdusNamesForTheJSON[134];
    oduJSONAddress = `data\\oduData\\noMejis\\okonron\\${oduForTheJSON}.json`;
}else if (right_odu === "Okonron" && left_odu === "Ofun") {
    odu = odus[135];
    oduForTheJSON = ListofOdusNamesForTheJSON[135];
    oduJSONAddress = `data\\oduData\\noMejis\\okonron\\${oduForTheJSON}.json`;
}else if (right_odu === "Ogunda" && left_odu === "Ogbe") {
    odu = odus[136];
    oduForTheJSON = ListofOdusNamesForTheJSON[136];
    oduJSONAddress = `data\\oduData\\noMejis\\ogunda\\${oduForTheJSON}.json`;
}else if (right_odu === "Ogunda" && left_odu === "Oyeku") {
    odu = odus[137];
    oduForTheJSON = ListofOdusNamesForTheJSON[137];
    oduJSONAddress = `data\\oduData\\noMejis\\ogunda\\${oduForTheJSON}.json`;
}else if (right_odu === "Ogunda" && left_odu === "Iwori") {
    odu = odus[138];
    oduForTheJSON = ListofOdusNamesForTheJSON[138];
    oduJSONAddress = `data\\oduData\\noMejis\\ogunda\\${oduForTheJSON}.json`;
}else if (right_odu === "Ogunda" && left_odu === "Idi") {
    odu = odus[139];
    oduForTheJSON = ListofOdusNamesForTheJSON[139];
    oduJSONAddress = `data\\oduData\\noMejis\\ogunda\\${oduForTheJSON}.json`;
}else if (right_odu === "Ogunda" && left_odu === "Irosun") {
    odu = odus[140];
    oduForTheJSON = ListofOdusNamesForTheJSON[140];
    oduJSONAddress = `data\\oduData\\noMejis\\ogunda\\${oduForTheJSON}.json`;
}else if (right_odu === "Ogunda" && left_odu === "Owanrin") {
    odu = odus[141];
    oduForTheJSON = ListofOdusNamesForTheJSON[141];
    oduJSONAddress = `data\\oduData\\noMejis\\ogunda\\${oduForTheJSON}.json`;
}else if (right_odu === "Ogunda" && left_odu === "Obara") {
    odu = odus[142];
    oduForTheJSON = ListofOdusNamesForTheJSON[142];
    oduJSONAddress = `data\\oduData\\noMejis\\ogunda\\${oduForTheJSON}.json`;
}else if (right_odu === "Ogunda" && left_odu === "Okonron") {
    odu = odus[143];
    oduForTheJSON = ListofOdusNamesForTheJSON[143];
    oduJSONAddress = `data\\oduData\\noMejis\\ogunda\\${oduForTheJSON}.json`;
}else if (right_odu === "Ogunda" && left_odu === "Osa") {
    odu = odus[144];
    oduForTheJSON = ListofOdusNamesForTheJSON[144];
    oduJSONAddress = `data\\oduData\\noMejis\\ogunda\\${oduForTheJSON}.json`;
}else if (right_odu === "Ogunda" && left_odu === "Eka") {
    odu = odus[145];
    oduForTheJSON = ListofOdusNamesForTheJSON[145];
    oduJSONAddress = `data\\oduData\\noMejis\\ogunda\\${oduForTheJSON}.json`;
}else if (right_odu === "Ogunda" && left_odu === "Eturukpon") {
    odu = odus[146];
    oduForTheJSON = ListofOdusNamesForTheJSON[146];
    oduJSONAddress = `data\\oduData\\noMejis\\ogunda\\${oduForTheJSON}.json`;
}else if (right_odu === "Ogunda" && left_odu === "Etura") {
    odu = odus[147];
    oduForTheJSON = ListofOdusNamesForTheJSON[147];
    oduJSONAddress = `data\\oduData\\noMejis\\ogunda\\${oduForTheJSON}.json`;
}else if (right_odu === "Ogunda" && left_odu === "Irete") {
    odu = odus[148];
    oduForTheJSON = ListofOdusNamesForTheJSON[148];
    oduJSONAddress = `data\\oduData\\noMejis\\ogunda\\${oduForTheJSON}.json`;
}else if (right_odu === "Ogunda" && left_odu === "Ose") {
    odu = odus[149];
    oduForTheJSON = ListofOdusNamesForTheJSON[149];
    oduJSONAddress = `data\\oduData\\noMejis\\ogunda\\${oduForTheJSON}.json`;
}else if (right_odu === "Ogunda" && left_odu === "Ofun") {
    odu = odus[150];
    oduForTheJSON = ListofOdusNamesForTheJSON[150];
    oduJSONAddress = `data\\oduData\\noMejis\\ogunda\\${oduForTheJSON}.json`;
}else if (right_odu === "Osa" && left_odu === "Ogbe") {
    odu = odus[151];
    oduForTheJSON = ListofOdusNamesForTheJSON[151];
    oduJSONAddress = `data\\oduData\\noMejis\\osa\\${oduForTheJSON}.json`;
}else if (right_odu === "Osa" && left_odu === "Oyeku") {
    odu = odus[152];
    oduForTheJSON = ListofOdusNamesForTheJSON[152];
    oduJSONAddress = `data\\oduData\\noMejis\\osa\\${oduForTheJSON}.json`;
}else if (right_odu === "Osa" && left_odu === "Iwori") {
    odu = odus[153];
    oduForTheJSON = ListofOdusNamesForTheJSON[153];
    oduJSONAddress = `data\\oduData\\noMejis\\osa\\${oduForTheJSON}.json`;
}else if (right_odu === "Osa" && left_odu === "Idi") {
    odu = odus[154];
    oduForTheJSON = ListofOdusNamesForTheJSON[154];
    oduJSONAddress = `data\\oduData\\noMejis\\osa\\${oduForTheJSON}.json`;
}else if (right_odu === "Osa" && left_odu === "Irosun") {
    odu = odus[155];
    oduForTheJSON = ListofOdusNamesForTheJSON[155];
    oduJSONAddress = `data\\oduData\\noMejis\\osa\\${oduForTheJSON}.json`;
}else if (right_odu === "Osa" && left_odu === "Owanrin") {
    odu = odus[156];
    oduForTheJSON = ListofOdusNamesForTheJSON[156];
    oduJSONAddress = `data\\oduData\\noMejis\\osa\\${oduForTheJSON}.json`;
}else if (right_odu === "Osa" && left_odu === "Obara") {
    odu = odus[157];
    oduForTheJSON = ListofOdusNamesForTheJSON[157];
    oduJSONAddress = `data\\oduData\\noMejis\\osa\\${oduForTheJSON}.json`;
}else if (right_odu === "Osa" && left_odu === "Okonron") {
    odu = odus[158];
    oduForTheJSON = ListofOdusNamesForTheJSON[158];
    oduJSONAddress = `data\\oduData\\noMejis\\osa\\${oduForTheJSON}.json`;
}else if (right_odu === "Osa" && left_odu === "Ogunda") {
    odu = odus[159];
    oduForTheJSON = ListofOdusNamesForTheJSON[159];
    oduJSONAddress = `data\\oduData\\noMejis\\osa\\${oduForTheJSON}.json`;
}else if (right_odu === "Osa" && left_odu === "Eka") {
    odu = odus[160];
    oduForTheJSON = ListofOdusNamesForTheJSON[160];
    oduJSONAddress = `data\\oduData\\noMejis\\osa\\${oduForTheJSON}.json`;
}else if (right_odu === "Osa" && left_odu === "Eturukpon") {
    odu = odus[161];
    oduForTheJSON = ListofOdusNamesForTheJSON[161];
    oduJSONAddress = `data\\oduData\\noMejis\\osa\\${oduForTheJSON}.json`;
}else if (right_odu === "Osa" && left_odu === "Etura") {
    odu = odus[162];
    oduForTheJSON = ListofOdusNamesForTheJSON[162];
    oduJSONAddress = `data\\oduData\\noMejis\\osa\\${oduForTheJSON}.json`;
}else if (right_odu === "Osa" && left_odu === "Irete") {
    odu = odus[163];
    oduForTheJSON = ListofOdusNamesForTheJSON[163];
    oduJSONAddress = `data\\oduData\\noMejis\\osa\\${oduForTheJSON}.json`;
}else if (right_odu === "Osa" && left_odu === "Ose") {
    odu = odus[164];
    oduForTheJSON = ListofOdusNamesForTheJSON[164];
    oduJSONAddress = `data\\oduData\\noMejis\\osa\\${oduForTheJSON}.json`;
}else if (right_odu === "Osa" && left_odu === "Ofun") {
    odu = odus[165];
    oduForTheJSON = ListofOdusNamesForTheJSON[165];
    oduJSONAddress = `data\\oduData\\noMejis\\osa\\${oduForTheJSON}.json`;
}else if (right_odu === "Eka" && left_odu === "Ogbe") {
    odu = odus[166];
    oduForTheJSON = ListofOdusNamesForTheJSON[166];
    oduJSONAddress = `data\\oduData\\noMejis\\eka\\${oduForTheJSON}.json`;
}else if (right_odu === "Eka" && left_odu === "Oyeku") {
    odu = odus[167];
    oduForTheJSON = ListofOdusNamesForTheJSON[167];
    oduJSONAddress = `data\\oduData\\noMejis\\eka\\${oduForTheJSON}.json`;
}else if (right_odu === "Eka" && left_odu === "Iwori") {
    odu = odus[168];
    oduForTheJSON = ListofOdusNamesForTheJSON[168];
    oduJSONAddress = `data\\oduData\\noMejis\\eka\\${oduForTheJSON}.json`;
}else if (right_odu === "Eka" && left_odu === "Idi") {
    odu = odus[169];
    oduForTheJSON = ListofOdusNamesForTheJSON[169];
    oduJSONAddress = `data\\oduData\\noMejis\\eka\\${oduForTheJSON}.json`;
}else if (right_odu === "Eka" && left_odu === "Irosun") {
    odu = odus[170];
    oduForTheJSON = ListofOdusNamesForTheJSON[170];
    oduJSONAddress = `data\\oduData\\noMejis\\eka\\${oduForTheJSON}.json`;
}else if (right_odu === "Eka" && left_odu === "Owanrin") {
    odu = odus[171];
    oduForTheJSON = ListofOdusNamesForTheJSON[171];
    oduJSONAddress = `data\\oduData\\noMejis\\eka\\${oduForTheJSON}.json`;
}else if (right_odu === "Eka" && left_odu === "Obara") {
    odu = odus[172];
    oduForTheJSON = ListofOdusNamesForTheJSON[172];
    oduJSONAddress = `data\\oduData\\noMejis\\eka\\${oduForTheJSON}.json`;
}else if (right_odu === "Eka" && left_odu === "Okonron") {
    odu = odus[173];
    oduForTheJSON = ListofOdusNamesForTheJSON[173];
    oduJSONAddress = `data\\oduData\\noMejis\\eka\\${oduForTheJSON}.json`;
}else if (right_odu === "Eka" && left_odu === "Ogunda") {
    odu = odus[174];
    oduForTheJSON = ListofOdusNamesForTheJSON[174];
    oduJSONAddress = `data\\oduData\\noMejis\\eka\\${oduForTheJSON}.json`;
}else if (right_odu === "Eka" && left_odu === "Osa") {
    odu = odus[175];
    oduForTheJSON = ListofOdusNamesForTheJSON[175];
    oduJSONAddress = `data\\oduData\\noMejis\\eka\\${oduForTheJSON}.json`;
}else if (right_odu === "Eka" && left_odu === "Eturukpon") {
    odu = odus[176];
    oduForTheJSON = ListofOdusNamesForTheJSON[176];
    oduJSONAddress = `data\\oduData\\noMejis\\eka\\${oduForTheJSON}.json`;
}else if (right_odu === "Eka" && left_odu === "Etura") {
    odu = odus[177];
    oduForTheJSON = ListofOdusNamesForTheJSON[177];
    oduJSONAddress = `data\\oduData\\noMejis\\eka\\${oduForTheJSON}.json`;
}else if (right_odu === "Eka" && left_odu === "Irete") {
    odu = odus[178];
    oduForTheJSON = ListofOdusNamesForTheJSON[178];
    oduJSONAddress = `data\\oduData\\noMejis\\eka\\${oduForTheJSON}.json`;
}else if (right_odu === "Eka" && left_odu === "Ose") {
    odu = odus[179];
    oduForTheJSON = ListofOdusNamesForTheJSON[179];
    oduJSONAddress = `data\\oduData\\noMejis\\eka\\${oduForTheJSON}.json`;
}else if (right_odu === "Eka" && left_odu === "Ofun") {
    odu = odus[180];
    oduForTheJSON = ListofOdusNamesForTheJSON[180];
    oduJSONAddress = `data\\oduData\\noMejis\\eka\\${oduForTheJSON}.json`;
}else if (right_odu === "Eturukpon" && left_odu === "Ogbe") {
    odu = odus[181];
    oduForTheJSON = ListofOdusNamesForTheJSON[181];
    oduJSONAddress = `data\\oduData\\noMejis\\eturukpon\\${oduForTheJSON}.json`;
}else if (right_odu === "Eturukpon" && left_odu === "Oyeku") {
    odu = odus[182];
    oduForTheJSON = ListofOdusNamesForTheJSON[182];
    oduJSONAddress = `data\\oduData\\noMejis\\eturukpon\\${oduForTheJSON}.json`;
}else if (right_odu === "Eturukpon" && left_odu === "Iwori") {
    odu = odus[183];
    oduForTheJSON = ListofOdusNamesForTheJSON[183];
    oduJSONAddress = `data\\oduData\\noMejis\\eturukpon\\${oduForTheJSON}.json`;
}else if (right_odu === "Eturukpon" && left_odu === "Idi") {
    odu = odus[184];
    oduForTheJSON = ListofOdusNamesForTheJSON[184];
    oduJSONAddress = `data\\oduData\\noMejis\\eturukpon\\${oduForTheJSON}.json`;
}else if (right_odu === "Eturukpon" && left_odu === "Irosun") {
    odu = odus[185];
    oduForTheJSON = ListofOdusNamesForTheJSON[185];
    oduJSONAddress = `data\\oduData\\noMejis\\eturukpon\\${oduForTheJSON}.json`;
}else if (right_odu === "Eturukpon" && left_odu === "Owanrin") {
    odu = odus[186];
    oduForTheJSON = ListofOdusNamesForTheJSON[186];
    oduJSONAddress = `data\\oduData\\noMejis\\eturukpon\\${oduForTheJSON}.json`;
}else if (right_odu === "Eturukpon" && left_odu === "Obara") {
    odu = odus[187];
    oduForTheJSON = ListofOdusNamesForTheJSON[187];
    oduJSONAddress = `data\\oduData\\noMejis\\eturukpon\\${oduForTheJSON}.json`;
}else if (right_odu === "Eturukpon" && left_odu === "Okonron") {
    odu = odus[188];
    oduForTheJSON = ListofOdusNamesForTheJSON[188];
    oduJSONAddress = `data\\oduData\\noMejis\\eturukpon\\${oduForTheJSON}.json`;
}else if (right_odu === "Eturukpon" && left_odu === "Ogunda") {
    odu = odus[189];
    oduForTheJSON = ListofOdusNamesForTheJSON[189];
    oduJSONAddress = `data\\oduData\\noMejis\\eturukpon\\${oduForTheJSON}.json`;
}else if (right_odu === "Eturukpon" && left_odu === "Osa") {
    odu = odus[190];
    oduForTheJSON = ListofOdusNamesForTheJSON[190];
    oduJSONAddress = `data\\oduData\\noMejis\\eturukpon\\${oduForTheJSON}.json`;
}else if (right_odu === "Eturukpon" && left_odu === "Eka") {
    odu = odus[191];
    oduForTheJSON = ListofOdusNamesForTheJSON[191];
    oduJSONAddress = `data\\oduData\\noMejis\\eturukpon\\${oduForTheJSON}.json`;
}else if (right_odu === "Eturukpon" && left_odu === "Etura") {
    odu = odus[192];
    oduForTheJSON = ListofOdusNamesForTheJSON[192];
    oduJSONAddress = `data\\oduData\\noMejis\\eturukpon\\${oduForTheJSON}.json`;
}else if (right_odu === "Eturukpon" && left_odu === "Irete") {
    odu = odus[193];
    oduForTheJSON = ListofOdusNamesForTheJSON[193];
    oduJSONAddress = `data\\oduData\\noMejis\\eturukpon\\${oduForTheJSON}.json`;
}else if (right_odu === "Eturukpon" && left_odu === "Ose") {
    odu = odus[194];
    oduForTheJSON = ListofOdusNamesForTheJSON[194];
    oduJSONAddress = `data\\oduData\\noMejis\\eturukpon\\${oduForTheJSON}.json`;
}else if (right_odu === "Eturukpon" && left_odu === "Ofun") {
    odu = odus[195];
    oduForTheJSON = ListofOdusNamesForTheJSON[195];
    oduJSONAddress = `data\\oduData\\noMejis\\eturukpon\\${oduForTheJSON}.json`;
}else if (right_odu === "Etura" && left_odu === "Ogbe") {
    odu = odus[196];
    oduForTheJSON = ListofOdusNamesForTheJSON[196];
    oduJSONAddress = `data\\oduData\\noMejis\\etura\\${oduForTheJSON}.json`;
}else if (right_odu === "Etura" && left_odu === "Oyeku") {
    odu = odus[197];
    oduForTheJSON = ListofOdusNamesForTheJSON[197];
    oduJSONAddress = `data\\oduData\\noMejis\\etura\\${oduForTheJSON}.json`;
}else if (right_odu === "Etura" && left_odu === "Iwori") {
    odu = odus[198];
    oduForTheJSON = ListofOdusNamesForTheJSON[198];
    oduJSONAddress = `data\\oduData\\noMejis\\etura\\${oduForTheJSON}.json`;
}else if (right_odu === "Etura" && left_odu === "Idi") {
    odu = odus[199];
    oduForTheJSON = ListofOdusNamesForTheJSON[199];
    oduJSONAddress = `data\\oduData\\noMejis\\etura\\${oduForTheJSON}.json`;
}else if (right_odu === "Etura" && left_odu === "Irosun") {
    odu = odus[200];
    oduForTheJSON = ListofOdusNamesForTheJSON[200];
    oduJSONAddress = `data\\oduData\\noMejis\\etura\\${oduForTheJSON}.json`;
}else if (right_odu === "Etura" && left_odu === "Owanrin") {
    odu = odus[201];
    oduForTheJSON = ListofOdusNamesForTheJSON[201];
    oduJSONAddress = `data\\oduData\\noMejis\\etura\\${oduForTheJSON}.json`;
}else if (right_odu === "Etura" && left_odu === "Obara") {
    odu = odus[202];
    oduForTheJSON = ListofOdusNamesForTheJSON[202];
    oduJSONAddress = `data\\oduData\\noMejis\\etura\\${oduForTheJSON}.json`;
}else if (right_odu === "Etura" && left_odu === "Okonron") {
    odu = odus[203];
    oduForTheJSON = ListofOdusNamesForTheJSON[203];
    oduJSONAddress = `data\\oduData\\noMejis\\etura\\${oduForTheJSON}.json`;
}else if (right_odu === "Etura" && left_odu === "Ogunda") {
    odu = odus[204];
    oduForTheJSON = ListofOdusNamesForTheJSON[204];
    oduJSONAddress = `data\\oduData\\noMejis\\etura\\${oduForTheJSON}.json`;
}else if (right_odu === "Etura" && left_odu === "Osa") {
    odu = odus[205];
    oduForTheJSON = ListofOdusNamesForTheJSON[205];
    oduJSONAddress = `data\\oduData\\noMejis\\etura\\${oduForTheJSON}.json`;
}else if (right_odu === "Etura" && left_odu === "Etura") {
    odu = odus[206];
    oduForTheJSON = ListofOdusNamesForTheJSON[206];
    oduJSONAddress = `data\\oduData\\noMejis\\etura\\${oduForTheJSON}.json`;
}else if (right_odu === "Etura" && left_odu === "Eturukpon") {
    odu = odus[207];
    oduForTheJSON = ListofOdusNamesForTheJSON[207];
    oduJSONAddress = `data\\oduData\\noMejis\\etura\\${oduForTheJSON}.json`;
}else if (right_odu === "Etura" && left_odu === "Irete") {
    odu = odus[208];
    oduForTheJSON = ListofOdusNamesForTheJSON[208];
    oduJSONAddress = `data\\oduData\\noMejis\\etura\\${oduForTheJSON}.json`;
}else if (right_odu === "Etura" && left_odu === "Ose") {
    odu = odus[209];
    oduForTheJSON = ListofOdusNamesForTheJSON[209];
    oduJSONAddress = `data\\oduData\\noMejis\\etura\\${oduForTheJSON}.json`;
}else if (right_odu === "Etura" && left_odu === "Ofun") {
    odu = odus[210];
    oduForTheJSON = ListofOdusNamesForTheJSON[210];
    oduJSONAddress = `data\\oduData\\noMejis\\etura\\${oduForTheJSON}.json`;
}else if (right_odu === "Irete" && left_odu === "Ogbe") {
    odu = odus[211];
    oduForTheJSON = ListofOdusNamesForTheJSON[211];
    oduJSONAddress = `data\\oduData\\noMejis\\irete\\${oduForTheJSON}.json`;
}else if (right_odu === "Irete" && left_odu === "Oyeku") {
    odu = odus[212];
    oduForTheJSON = ListofOdusNamesForTheJSON[212];
    oduJSONAddress = `data\\oduData\\noMejis\\irete\\${oduForTheJSON}.json`;
}else if (right_odu === "Irete" && left_odu === "Iwori") {
    odu = odus[213];
    oduForTheJSON = ListofOdusNamesForTheJSON[213];
    oduJSONAddress = `data\\oduData\\noMejis\\irete\\${oduForTheJSON}.json`;
}else if (right_odu === "Irete" && left_odu === "Idi") {
    odu = odus[214];
    oduForTheJSON = ListofOdusNamesForTheJSON[214];
    oduJSONAddress = `data\\oduData\\noMejis\\irete\\${oduForTheJSON}.json`;
}else if (right_odu === "Irete" && left_odu === "Irosun") {
    odu = odus[215];
    oduForTheJSON = ListofOdusNamesForTheJSON[215];
    oduJSONAddress = `data\\oduData\\noMejis\\irete\\${oduForTheJSON}.json`;
}else if (right_odu === "Irete" && left_odu === "Owanrin") {
    odu = odus[216];
    oduForTheJSON = ListofOdusNamesForTheJSON[216];
    oduJSONAddress = `data\\oduData\\noMejis\\irete\\${oduForTheJSON}.json`;
}else if (right_odu === "Irete" && left_odu === "Obara") {
    odu = odus[217];
    oduForTheJSON = ListofOdusNamesForTheJSON[217];
    oduJSONAddress = `data\\oduData\\noMejis\\irete\\${oduForTheJSON}.json`;
}else if (right_odu === "Irete" && left_odu === "Okonron") {
    odu = odus[218];
    oduForTheJSON = ListofOdusNamesForTheJSON[218];
    oduJSONAddress = `data\\oduData\\noMejis\\irete\\${oduForTheJSON}.json`;
}else if (right_odu === "Irete" && left_odu === "Ogunda") {
    odu = odus[219];
    oduForTheJSON = ListofOdusNamesForTheJSON[219];
    oduJSONAddress = `data\\oduData\\noMejis\\irete\\${oduForTheJSON}.json`;
}else if (right_odu === "Irete" && left_odu === "Osa") {
    odu = odus[220];
    oduForTheJSON = ListofOdusNamesForTheJSON[220];
    oduJSONAddress = `data\\oduData\\noMejis\\irete\\${oduForTheJSON}.json`;
}else if (right_odu === "Irete" && left_odu === "Eka") {
    odu = odus[221];
    oduForTheJSON = ListofOdusNamesForTheJSON[221];
    oduJSONAddress = `data\\oduData\\noMejis\\irete\\${oduForTheJSON}.json`;
}else if (right_odu === "Irete" && left_odu === "Eturukpon") {
    odu = odus[222];
    oduForTheJSON = ListofOdusNamesForTheJSON[222];
    oduJSONAddress = `data\\oduData\\noMejis\\irete\\${oduForTheJSON}.json`;
}else if (right_odu === "Irete" && left_odu === "Etura") {
    odu = odus[223];
    oduForTheJSON = ListofOdusNamesForTheJSON[223];
    oduJSONAddress = `data\\oduData\\noMejis\\irete\\${oduForTheJSON}.json`;
}else if (right_odu === "Irete" && left_odu === "Ose") {
    odu = odus[224];
    oduForTheJSON = ListofOdusNamesForTheJSON[224];
    oduJSONAddress = `data\\oduData\\noMejis\\irete\\${oduForTheJSON}.json`;
}else if (right_odu === "Irete" && left_odu === "Ofun") {
    odu = odus[225];
    oduForTheJSON = ListofOdusNamesForTheJSON[225];
    oduJSONAddress = `data\\oduData\\noMejis\\irete\\${oduForTheJSON}.json`;
}else if (right_odu === "Ose" && left_odu === "Ogbe") {
    odu = odus[226];
    oduForTheJSON = ListofOdusNamesForTheJSON[226];
    oduJSONAddress = `data\\oduData\\noMejis\\ose\\${oduForTheJSON}.json`;
}else if (right_odu === "Ose" && left_odu === "Oyeku") {
    odu = odus[227];
    oduForTheJSON = ListofOdusNamesForTheJSON[227];
    oduJSONAddress = `data\\oduData\\noMejis\\ose\\${oduForTheJSON}.json`;
}else if (right_odu === "Ose" && left_odu === "Iwori") {
    odu = odus[228];
    oduForTheJSON = ListofOdusNamesForTheJSON[228];
    oduJSONAddress = `data\\oduData\\noMejis\\ose\\${oduForTheJSON}.json`;
}else if (right_odu === "Ose" && left_odu === "Idi") {
    odu = odus[229];
    oduForTheJSON = ListofOdusNamesForTheJSON[229];
    oduJSONAddress = `data\\oduData\\noMejis\\ose\\${oduForTheJSON}.json`;
}else if (right_odu === "Ose" && left_odu === "Irosun") {
    odu = odus[230];
    oduForTheJSON = ListofOdusNamesForTheJSON[230];
    oduJSONAddress = `data\\oduData\\noMejis\\ose\\${oduForTheJSON}.json`;
}else if (right_odu === "Ose" && left_odu === "Owanrin") {
    odu = odus[231];
    oduForTheJSON = ListofOdusNamesForTheJSON[231];
    oduJSONAddress = `data\\oduData\\noMejis\\ose\\${oduForTheJSON}.json`;
}else if (right_odu === "Ose" && left_odu === "Obara") {
    odu = odus[232];
    oduForTheJSON = ListofOdusNamesForTheJSON[232];
    oduJSONAddress = `data\\oduData\\noMejis\\ose\\${oduForTheJSON}.json`;
}else if (right_odu === "Ose" && left_odu === "Okonron") {
    odu = odus[233];
    oduForTheJSON = ListofOdusNamesForTheJSON[233];
    oduJSONAddress = `data\\oduData\\noMejis\\ose\\${oduForTheJSON}.json`;
}else if (right_odu === "Ose" && left_odu === "Ogunda") {
    odu = odus[234];
    oduForTheJSON = ListofOdusNamesForTheJSON[234];
    oduJSONAddress = `data\\oduData\\noMejis\\ose\\${oduForTheJSON}.json`;
}else if (right_odu === "Ose" && left_odu === "Osa") {
    odu = odus[235];
    oduForTheJSON = ListofOdusNamesForTheJSON[235];
    oduJSONAddress = `data\\oduData\\noMejis\\ose\\${oduForTheJSON}.json`;
}else if (right_odu === "Ose" && left_odu === "Eka") {
    odu = odus[236];
    oduForTheJSON = ListofOdusNamesForTheJSON[236];
    oduJSONAddress = `data\\oduData\\noMejis\\ose\\${oduForTheJSON}.json`;
}else if (right_odu === "Ose" && left_odu === "Eturukpon") {
    odu = odus[237];
    oduForTheJSON = ListofOdusNamesForTheJSON[237];
    oduJSONAddress = `data\\oduData\\noMejis\\ose\\${oduForTheJSON}.json`;
}else if (right_odu === "Ose" && left_odu === "Etura") {
    odu = odus[238];
    oduForTheJSON = ListofOdusNamesForTheJSON[238];
    oduJSONAddress = `data\\oduData\\noMejis\\ose\\${oduForTheJSON}.json`;
}else if (right_odu === "Ose" && left_odu === "Irete") {
    odu = odus[239];
    oduForTheJSON = ListofOdusNamesForTheJSON[239];
    oduJSONAddress = `data\\oduData\\noMejis\\ose\\${oduForTheJSON}.json`;
}else if (right_odu === "Ose" && left_odu === "Ofun") {
    odu = odus[240];
    oduForTheJSON = ListofOdusNamesForTheJSON[240];
    oduJSONAddress = `data\\oduData\\noMejis\\ose\\${oduForTheJSON}.json`;
}else if (right_odu === "Ofun" && left_odu === "Ogbe") {
    odu = odus[241];
    oduForTheJSON = ListofOdusNamesForTheJSON[241];
    oduJSONAddress = `data\\oduData\\noMejis\\ofun\\${oduForTheJSON}.json`;
}else if (right_odu === "Ofun" && left_odu === "Oyeku") {
    odu = odus[242];
    oduForTheJSON = ListofOdusNamesForTheJSON[242];
    oduJSONAddress = `data\\oduData\\noMejis\\ofun\\${oduForTheJSON}.json`;
}else if (right_odu === "Ofun" && left_odu === "Iwori") {
    odu = odus[243];
    oduForTheJSON = ListofOdusNamesForTheJSON[243];
    oduJSONAddress = `data\\oduData\\noMejis\\ofun\\${oduForTheJSON}.json`;
}else if (right_odu === "Ofun" && left_odu === "Idi") {
    odu = odus[244];
    oduForTheJSON = ListofOdusNamesForTheJSON[244];
    oduJSONAddress = `data\\oduData\\noMejis\\ofun\\${oduForTheJSON}.json`;
}else if (right_odu === "Ofun" && left_odu === "Irosun") {
    odu = odus[245];
    oduForTheJSON = ListofOdusNamesForTheJSON[245];
    oduJSONAddress = `data\\oduData\\noMejis\\ofun\\${oduForTheJSON}.json`;
}else if (right_odu === "Ofun" && left_odu === "Owanrin") {
    odu = odus[246];
    oduForTheJSON = ListofOdusNamesForTheJSON[246];
    oduJSONAddress = `data\\oduData\\noMejis\\ofun\\${oduForTheJSON}.json`;
}else if (right_odu === "Ofun" && left_odu === "Obara") {
    odu = odus[247];
    oduForTheJSON = ListofOdusNamesForTheJSON[247];
    oduJSONAddress = `data\\oduData\\noMejis\\ofun\\${oduForTheJSON}.json`;
}else if (right_odu === "Ofun" && left_odu === "Okonron") {
    odu = odus[248];
    oduForTheJSON = ListofOdusNamesForTheJSON[248];
    oduJSONAddress = `data\\oduData\\noMejis\\ofun\\${oduForTheJSON}.json`;
}else if (right_odu === "Ofun" && left_odu === "Ogunda") {
    odu = odus[249];
    oduForTheJSON = ListofOdusNamesForTheJSON[249];
    oduJSONAddress = `data\\oduData\\noMejis\\ofun\\${oduForTheJSON}.json`;
}else if (right_odu === "Ofun" && left_odu === "Osa") {
    odu = odus[250];
    oduForTheJSON = ListofOdusNamesForTheJSON[250];
    oduJSONAddress = `data\\oduData\\noMejis\\ofun\\${oduForTheJSON}.json`;
}else if (right_odu === "Ofun" && left_odu === "Eka") {
    odu = odus[251];
    oduForTheJSON = ListofOdusNamesForTheJSON[251];
    oduJSONAddress = `data\\oduData\\noMejis\\ofun\\${oduForTheJSON}.json`;
}else if (right_odu === "Ofun" && left_odu === "Eturukpon") {
    odu = odus[252];
    oduForTheJSON = ListofOdusNamesForTheJSON[252];
    oduJSONAddress = `data\\oduData\\noMejis\\ofun\\${oduForTheJSON}.json`;
}else if (right_odu === "Ofun" && left_odu === "Etura") {
    odu = odus[253];
    oduForTheJSON = ListofOdusNamesForTheJSON[253];
    oduJSONAddress = `data\\oduData\\noMejis\\ofun\\${oduForTheJSON}.json`;
}else if (right_odu === "Ofun" && left_odu === "Irete") {
    odu = odus[254];
    oduForTheJSON = ListofOdusNamesForTheJSON[254];
    oduJSONAddress = `data\\oduData\\noMejis\\ofun\\${oduForTheJSON}.json`;
}else if (right_odu === "Ofun" && left_odu === "Ose") {
    odu = odus[255];
    oduForTheJSON = ListofOdusNamesForTheJSON[255];
    oduJSONAddress = `data\\oduData\\noMejis\\ofun\\${oduForTheJSON}.json`;
}
//End of if cycle for assign value for var odu
document.getElementById("oduToShow").innerHTML = odu;
console.log(odu);
oduIndexation = odus.indexOf(odu)//to know the index of the selected odu.
console.log(oduIndexation);
console.log(oduForTheJSON)
}// this bracket en the function
    

