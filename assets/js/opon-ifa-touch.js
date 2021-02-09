var first_right = true;
var second_right = true;
var third_right = true;
var fourth_right = true;
var first_left = true;
var second_left = true;
var third_left = true;
var fourth_left = true;
var odus = ["Eji-Ogbe", "Oyeku-Meji", "iwori-Meji" ,"Idi-Meji" ,"Obara-Meji", "Okonron-Meji", "Irosun-Meji", "Owanrin-Meji", "Ogunda-Meji", "Osa-Meji", "Etura-Meji", "Irete-Meji", "Eka-Meji", "Eturukpon-Meji", "Ose-Meji", "Ofun-Meji", "Ogbe-Oyekun", "Ogbe-Iwori","Ogbe-Idi","Ogbe-Obara","Ogbe-Okonron","Ogbe-Irosun","Ogbe-Owanrin","Ogbe-Ogunda","Ogbe-Osa","Ogbe-Etura","Ogbe-Irete","Ogbe-Eka","Ogbe-Eturukpon","Ogbe-Ose","Ogbe-Ofun","Oyeku-Lo-Ogbe","Oyeku-Bi-Iwori","Oyeku-Di","Oyeku-Obara","Oyeku-Okonron","Oyeku-Irosun","Oyeku-Owanrin","Oyeku-Ogunda","Oyeku-Osa","Oyeku-Etura","Oyeku-Irete","Oyeku-Eturukpon","Oyeku-Be-Eka","Oyeku-Ose","Oyeku-Ofun","Iwori-Bo-Ogbe","Iwori-Oyeku","Iwori-Idi","Iwori-Obara","Iwori-Okonron","Iwori-Irosun","Iwori-Owanrin","Iwori-Ogunda","Iwori-Osa","Iwori-Etura","Iwori-Irete","Iwori-Eka","Iwori-Eturukpon","Iwori-Ose","Iwori-Ofun","Idi-Ogbe","Idi-Oyeku","Idi-Iwori","Idi-Obara","Idi-Okonron","Idi-Irosun","Idi-Owanrin","Idi-Ogunda","Idi-Osa","Idi-Etura","Idi-Irete","Idi-Eturukpon","Idi-Eka","Idi-Ose","Idi-Ofun","Obara-Ogbe","Obara-Oyeku","Obara-Iwori","Obara-Idi","Obara-Okonron","Obara-Irosun","Obara-Owanrin","Obara-Ogunda","Obara-Osa","Obara-Etura","Obara-Irete","Obara-Eka","Obara-Eturukpon","Obara-Ose","Obara-Ofun","Okonron-Ogbe","Okonron-Oyeku","Okonron-Iwori","Okonron-Idi","Okonron-Obara","Okonron-Irosun","Okonron-Owanrin","Okonron-Ogunda","Okonron-Osa","Okonron-Etura","Okonron-Irete","Okonron-Eka","Okonron-Eturukpon","Okonron-Ose","Okonron-Ofun","Irosun-Ogbe","Irosun-Oyeku","Irosun-Iwori","Irosun-Idi","Irosun-Obara","Irosun-Okonron","Irosun-Owanrin","Irosun-Ogunda","Irosun-Osa","Irosun-Etura","Irosun-Irete","Irosun-Eka","Irosun-Eturukpon","Irosun-Ose","Irosun-Ofun","Owanrin-So-Ogbe","Owanrin-Oyeku","Owanrin-Iwori","Owanrin-Idi","Owanrin-Obara","Owanrin-Okonron","Owanrin-Irosun","Owanrin-Ogunda","Owanrin-Osa","Owanrin-Etura","Owanrin-Irete","Owanrin-Eka","Owanrin-Eturukpon","Owanrin-Ose","Owanrin-Ofun","Ogunda-Ogbe","Ogunda-Oyeku","Ogunda-Iwori","Ogunda-Idi","Ogunda-Obara","Ogunda-Okonron","Ogunda-Irosun","Ogunda-Owanrin","Ogunda-Osa","Ogunda-Etura","Ogunda-Irete","Ogunda-Eka","Ogunda-Eturukpon","Ogunda-Ose","Ogunda-Ofun","Osa-Ogbe","Osa-Oyeku","Osa-Iwori","Osa-Idi","Osa-Obara","Osa-Okonron","Osa-Irosun","Osa-Ogunda","Osa-Owanrin","Osa-Etura","Osa-Irete","Osa-Eka","Osa-Eturukpon","Osa-Ose","Osa-Ofun","Etura-Ogbe","Etura-Oyeku","Etura-Iwori","Etura-Idi","Etura-Obara","Etura-Okonron","Etura-Irosun","Etura-Ogunda","Etura-Owanrin","Etura-Osa","Etura-Irete","Etura-Eka","Etura-Eturukpon","Etura-Ose","Etura-Ofun","Irete-Ogbe","Irete-Oyeku","Irete-Iwori","Irete-Idi","Irete-Obara","Irete-Okonron","Irete-Irosun","Irete-Ogunda","Irete-Owanrin","Irete-Osa","Irete-Etura","Irete-Eka","Irete-Eturukpon","Irete-Ose","Irete-Ofun","Eka-Ogbe","Eka-Oyeku","Eka-Iwori","Eka-Idi","Eka-Obara","Eka-Okonron","Eka-Irosun","Eka-Ogunda","Eka-Owanrin","Eka-Osa","Eka-Etura","Eka-Irete","Eka-Eturukpon","Eka-Ose","Eka-Ofun","Eturukpon-Ogbe","Eturukpon-Oyeku","Eturukpon-Iwori","Eturukpon-Idi","Eturukpon-Obara","Eturukpon-Okonron","Eturukpon-Irosun","Eturukpon-Ogunda","Eturukpon-Owanrin","Eturukpon-Osa","Eturukpon-Etura","Eturukpon-Irete","Eturukpon-Eka","Eturukpon-Ose","Eturukpon-Ofun","Ose-Ogbe","Ose-Oyeku","Ose-Iwori","Ose-Idi","Ose-Obara","Ose-Okonron","Ose-Irosun","Ose-Ogunda","Ose-Owanrin","Ose-Osa","Ose-Etura","Ose-Irete","Ose-Eka","Ose-Eturukpon","Ose-Ofun","Ofun-Ogbe","Ofun-Oyeku","Ofun-Iwori","Ofun-Idi","Ofun-Obara","Ofun-Okonron","Ofun-Irosun","Ofun-Ogunda","Ofun-Owanrin","Ofun-Osa","Ofun-Etura","Ofun-Irete","Ofun-Eka","Ofun-Eturukpon","Ofun-Ose"];
var right_odu ;
var left_odu ;
var odu = odus[0];
var oduIndexation = 0;
var oduForTheJSON = "ejiogbe";// set the default value of the odu to grab the json on the "assets\js\jsonfetch\fetchOduInformation.js" also this variable will update automatic
var oduJSONAddress = 'data\\oduData\\mejis\\ejiogbe.json'//information for the script in "assets\js\jsonfetch\fetchOduInformation.js"
var ListofOdusNamesForTheJSON = ["ejiogbe", "oyekuMeji", "iworiMeji" ,"idiMeji" ,"obaraMeji", "okonronMeji", "irosunMeji", "owanrinMeji", "ogundaMeji", "osaMeji", "eturaMeji", "ireteMeji", "ekaMeji", "eturukponMeji", "oseMeji", "ofunMeji", "ogbeOyekun", "ogbeIwori","ogbeIdi","ogbeObara","ogbeOkonron","ogbeIrosun","ogbeOwanrin","ogbeOgunda","ogbeOsa","ogbeEtura","ogbeIrete","ogbeEka","ogbeEturukpon","ogbeOse","ogbeOfun","oyekuLoOgbe","oyekubiIwori","oyekuDi","oyekuObara","oyekuOkonron","oyekuIrosun","oyekuOwanrin","oyekuOgunda","oyekuOsa","oyekuEtura","oyekuIrete","oyekuEturukpon","oyekubeEka","oyekuOse","oyekuOfun","iworiboOgbe","iworiOyeku","iworiIdi","iworiObara","iworiOkonron","iworiIrosun","iworiOwanrin","iworiOgunda","iworiOsa","iworiEtura","iworiIrete","iworiEka","iworiEturukpon","iworiOse","iworiOfun","idiOgbe","idiOyeku","idiIwori","idiObara","idiOkonron","idiIrosun","idiOwanrin","idiOgunda","idiOsa","idiEtura","idiIrete","idiEturukpon","idiEka","idiOse","idiOfun","obaraOgbe","obaraOyeku","obaraIwori","obaraIdi","obaraOkonron","obaraIrosun","obaraOwanrin","obaraOgunda","obaraOsa","obaraEtura","obaraIrete","obaraEka","obaraEturukpon","obaraOse","obaraOfun","okonronOgbe","okonronOyeku","okonronIwori","okonronIdi","okonronObara","okonronIrosun","okonronOwanrin","okonronOgunda","okonronOsa","okonronEtura","okonronIrete","okonronEka","okonronEturukpon","okonronOse","okonronOfun","irosunOgbe","irosunOyeku","irosunIwori","irosunIdi","irosunObara","irosunOkonron","irosunOwanrin","irosunOgunda","irosunOsa","irosunEtura","irosunIrete","irosunEka","irosunEturukpon","irosunOse","irosunOfun","owanrinsoOgbe","owanrinOyeku","owanrinIwori","owanrinIdi","owanrinObara","owanrinOkonron","owanrinIrosun","owanrinOgunda","owanrinOsa","owanrinEtura","owanrinIrete","owanrinEka","owanrinEturukpon","owanrinOse","owanrinOfun","ogundaOgbe","ogundaOyeku","ogundaIwori","ogundaIdi","ogundaObara","ogundaOkonron","ogundaIrosun","ogundaOwanrin","ogundaOsa","ogundaEtura","ogundaIrete","ogundaEka","ogundaEturukpon","ogundaOse","ogundaOfun","osaOgbe","osaOyeku","osaIwori","osaIdi","osaObara","osaOkonron","osaIrosun","osaOgunda","osaOwanrin","osaEtura","osaIrete","osaEka","osaEturukpon","osaOse","osaOfun","eturaOgbe","eturaOyeku","eturaIwori","eturaIdi","eturaObara","eturaOkonron","eturaIrosun","eturaOgunda","eturaOwanrin","eturaOsa","eturaIrete","eturaEka","eturaEturukpon","eturaOse","eturaOfun","ireteOgbe","ireteOyeku","ireteIwori","ireteIdi","ireteObara","ireteOkonron","ireteIrosun","ireteOgunda","ireteOwanrin","ireteOsa","ireteEtura","ireteEka","ireteEturukpon","ireteOse","ireteOfun","ekaOgbe","ekaOyeku","ekaIwori","ekaIdi","ekaObara","ekaOkonron","ekaIrosun","ekaOgunda","ekaOwanrin","ekaOsa","ekaEtura","ekaIrete","ekaEturukpon","ekaOse","ekaOfun","eturukponOgbe","eturukponOyeku","eturukponIwori","eturukponIdi","eturukponObara","eturukponOkonron","eturukponIrosun","eturukponOgunda","eturukponOwanrin","eturukponOsa","eturukponEtura","eturukponIrete","eturukponEka","eturukponOse","eturukponOfun","oseOgbe","oseOyeku","oseIwori","oseIdi","oseObara","oseOkonron","oseIrosun","oseOgunda","oseOwanrin","oseOsa","oseEtura","oseIrete","oseEka","oseEturukpon","oseOfun","ofunOgbe","ofunOyeku","ofunIwori","ofunIdi","ofunObara","ofunOkonron","ofunIrosun","ofunOgunda","ofunOwanrin","ofunOsa","ofunEtura","ofunIrete","ofunEka","ofunEturukpon","ofunOse"];


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
    let opon_Ifa_Right_Side_Etura_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - ETURA - right half.jpg';
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
    oduJSONAddress = 'data\\oduData\\mejis\\ejiogbe.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[0];
} else if (right_odu === "Oyeku" && left_odu === "Oyeku") {
    odu = odus[1];
    oduJSONAddress = 'data\\oduData\\mejis\\oyekuMeji.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[1];
}else if (right_odu === "Iwori" && left_odu === "Iwori") {
    odu = odus[2];
    oduJSONAddress = 'data\\oduData\\mejis\\iworiMeji.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[2];
}else if (right_odu === "Idi" && left_odu === "Idi") {
    odu = odus[3];
    oduJSONAddress = 'data\\oduData\\mejis\\idiMeji.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[3];
}else if (right_odu === "Obara" && left_odu === "Obara") {
    odu = odus[4];
    oduJSONAddress = 'data\\oduData\\mejis\\obaraMeji.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[4];
}else if (right_odu === "Okonron" && left_odu === "Okonron") {
    odu = odus[5];
    oduJSONAddress = 'data\\oduData\\mejis\\okonronMeji.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[5];
}else if (right_odu === "Irosun" && left_odu === "Irosun") {
    odu = odus[6];
    oduJSONAddress = 'data\\oduData\\mejis\\irosunMeji.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[6];
}else if (right_odu === "Owanrin" && left_odu === "Owanrin") {
    odu = odus[7];
    oduJSONAddress = 'data\\oduData\\mejis\\owanrinMeji.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[7];
}else if (right_odu === "Ogunda" && left_odu === "Ogunda") {
    odu = odus[8];
    oduJSONAddress = 'data\\oduData\\mejis\\ogundaMeji.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[8];
}else if (right_odu === "Osa" && left_odu === "Osa") {
    odu = odus[9];
    oduJSONAddress = 'data\\oduData\\mejis\\osaMeji.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[9];
}else if (right_odu === "Etura" && left_odu === "eturaMeji") {
    odu = odus[10];
    oduJSONAddress = 'data\\oduData\\mejis\\eturaMeji.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[10];
}else if (right_odu === "Irete" && left_odu === "Irete") {
    odu = odus[11];
    oduJSONAddress = 'data\\oduData\\mejis\\ireteMeji.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[11];
}else if (right_odu === "Eka" && left_odu === "Eka") {
    odu = odus[12];
    oduJSONAddress = 'data\\oduData\\mejis\\ekaMeji.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[12];
}else if (right_odu === "Eturukpon" && left_odu === "Eturukpon") {
    odu = odus[13];
    oduJSONAddress = 'data\\oduData\\mejis\\eturukponMeji.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[13];
}else if (right_odu === "Ose" && left_odu === "Ose") {
    odu = odus[14];
    oduJSONAddress = 'data\\oduData\\mejis\\oseMeji.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[14];
}else if (right_odu === "Ofun" && left_odu === "Ofun") {
    odu = odus[15];
    oduJSONAddress = 'data\\oduData\\mejis\\ofunMeji.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[15];
}else if (right_odu === "Ogbe" && left_odu === "Oyeku") {
    odu = odus[16];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[16];
}else if (right_odu === "Ogbe" && left_odu === "Iwori") {
    odu = odus[17];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeIwori.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[17];
}else if (right_odu === "Ogbe" && left_odu === "Idi") {
    odu = odus[18];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeIdi.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[18];
}else if (right_odu === "Ogbe" && left_odu === "Obara") {
    odu = odus[19];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeObara.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[19];
}else if (right_odu === "Ogbe" && left_odu === "Okonron") {
    odu = odus[20];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOkonron.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[20];
}else if (right_odu === "Ogbe" && left_odu === "Irosun") {
    odu = odus[21];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeIrosun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[21];
}else if (right_odu === "Ogbe" && left_odu === "Owanrin") {
    odu = odus[22];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOwanrin.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[22];
}else if (right_odu === "Ogbe" && left_odu === "Ogunda") {
    odu = odus[23];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOgunda.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[23];
}else if (right_odu === "Ogbe" && left_odu === "Osa") {
    odu = odus[24];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOsa.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[24];
}else if (right_odu === "Ogbe" && left_odu === "Etura") {
    odu = odus[25];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeEtura.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[25];
}else if (right_odu === "Ogbe" && left_odu === "Irete") {
    odu = odus[26];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeIrete.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[26];
}else if (right_odu === "Ogbe" && left_odu === "Eka") {
    odu = odus[27];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeEka.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[27];
}else if (right_odu === "Ogbe" && left_odu === "Eturukpon") {
    odu = odus[28];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeEturukpon.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[28];
}else if (right_odu === "Ogbe" && left_odu === "Ose") {
    odu = odus[29];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOse.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[29];
}else if (right_odu === "Ogbe" && left_odu === "Ofun") {
    odu = odus[30];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOfun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[30];
}else if (right_odu === "Oyeku" && left_odu === "Ogbe") {
    odu = odus[31];
    oduJSONAddress = 'data\\oduData\\mejis\\oyekuLoOgbe.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[31];
}else if (right_odu === "Oyeku" && left_odu === "Iwori") {
    odu = odus[32];
    oduJSONAddress = 'data\\oduData\\mejis\\oyekubiIwori.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[32];
}else if (right_odu === "Oyeku" && left_odu === "Idi") {
    odu = odus[33];
    oduJSONAddress = 'data\\oduData\\mejis\\oyekuDi.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[33];
}else if (right_odu === "Oyeku" && left_odu === "Obara") {
    odu = odus[34];
    oduJSONAddress = 'data\\oduData\\mejis\\oyekuObara.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[34];
}else if (right_odu === "Oyeku" && left_odu === "Okonron") {
    odu = odus[35];
    oduJSONAddress = 'data\\oduData\\mejis\\oyekuOkonron.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[35];
}else if (right_odu === "Oyeku" && left_odu === "Irosun") {
    odu = odus[36];
    oduJSONAddress = 'data\\oduData\\mejis\\oyekuIrosun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[36];
}else if (right_odu === "Oyeku" && left_odu === "Owanrin") {
    odu = odus[37];
    oduJSONAddress = 'data\\oduData\\mejis\\oyekuOwanrin.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[37];
}else if (right_odu === "Oyeku" && left_odu === "Ogunda") {
    odu = odus[38]; 
    oduJSONAddress = 'data\\oduData\\mejis\\oyekuOgunda.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[38];
}else if (right_odu === "Oyeku" && left_odu === "Osa") {
    odu = odus[39];
    oduJSONAddress = 'data\\oduData\\mejis\\oyekuOsa.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[39];
}else if (right_odu === "Oyeku" && left_odu === "Etura") {
    odu = odus[40];
    oduJSONAddress = 'data\\oduData\\mejis\\oyekuEtura.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[40];
}else if (right_odu === "Oyeku" && left_odu === "Irete") {
    odu = odus[41];
    oduJSONAddress = 'data\\oduData\\mejis\\oyekuIrete.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[41];
}else if (right_odu === "Oyeku" && left_odu === "Eka") {
    odu = odus[42];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[42];
}else if (right_odu === "Oyeku" && left_odu === "Eturukpon") {
    odu = odus[43];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[43];
}else if (right_odu === "Oyeku" && left_odu === "Ose") {
    odu = odus[44];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[44];
}else if (right_odu === "Oyeku" && left_odu === "Ofun") {
    odu = odus[45];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[45];
}else if (right_odu === "Iwori" && left_odu === "Ogbe") {
    odu = odus[46];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[46];
}else if (right_odu === "Iwori" && left_odu === "Oyeku") {
    odu = odus[47];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[47];
}else if (right_odu === "Iwori" && left_odu === "Idi") {
    odu = odus[48];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[48];
}else if (right_odu === "Iwori" && left_odu === "Obara") {
    odu = odus[49];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[49];
}else if (right_odu === "Iwori" && left_odu === "Okonron") {
    odu = odus[50];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[50];
}else if (right_odu === "Iwori" && left_odu === "Irosun") {
    odu = odus[51];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[51];
}else if (right_odu === "Iwori" && left_odu === "Owanrin") {
    odu = odus[52];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[52];
}else if (right_odu === "Iwori" && left_odu === "Ogunda") {
    odu = odus[53];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[53];
}else if (right_odu === "Iwori" && left_odu === "Osa") {
    odu = odus[54];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[54];
}else if (right_odu === "Iwori" && left_odu === "Etura") {
    odu = odus[55];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[55];
}else if (right_odu === "Iwori" && left_odu === "Irete") {
    odu = odus[56];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[56];
}else if (right_odu === "Iwori" && left_odu === "Eka") {
    odu = odus[57];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[57];
}else if (right_odu === "Iwori" && left_odu === "Eturukpon") {
    odu = odus[58];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[58];
}else if (right_odu === "Iwori" && left_odu === "Ose") {
    odu = odus[59];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[59];
}else if (right_odu === "Iwori" && left_odu === "Ofun") {
    odu = odus[60];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[60];
}else if (right_odu === "Idi" && left_odu === "Ogbe") {
    odu = odus[61];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[61];
}else if (right_odu === "Idi" && left_odu === "Oyeku") {
    odu = odus[62];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[62];
}else if (right_odu === "Idi" && left_odu === "Iwori") {
    odu = odus[63];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[63];
}else if (right_odu === "Idi" && left_odu === "Obara") {
    odu = odus[64];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[64];
}else if (right_odu === "Idi" && left_odu === "Okonron") {
    odu = odus[65];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[65];
}else if (right_odu === "Idi" && left_odu === "Irosun") {
    odu = odus[66];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[66];
}else if (right_odu === "Idi" && left_odu === "Owanrin") {
    odu = odus[67];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[67];
}else if (right_odu === "Idi" && left_odu === "Ogunda") {
    odu = odus[68];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[68];
}else if (right_odu === "Idi" && left_odu === "Osa") {
    odu = odus[69];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[69];
}else if (right_odu === "Idi" && left_odu === "Etura") {
    odu = odus[70];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[70];
}else if (right_odu === "Idi" && left_odu === "Irete") {
    odu = odus[71];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[71];
}else if (right_odu === "Idi" && left_odu === "Eka") {
    odu = odus[72];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[72];
}else if (right_odu === "Idi" && left_odu === "Eturukpon") {
    odu = odus[73];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[73];
}else if (right_odu === "Idi" && left_odu === "Ose") {
    odu = odus[74];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[74];
}else if (right_odu === "Idi" && left_odu === "Ofun") {
    odu = odus[75];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[75];
}else if (right_odu === "Obara" && left_odu === "Ogbe") {
    odu = odus[76];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[76];
}else if (right_odu === "Obara" && left_odu === "Oyeku") {
    odu = odus[77];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[77];
}else if (right_odu === "Obara" && left_odu === "Iwori") {
    odu = odus[78];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[78];
}else if (right_odu === "Obara" && left_odu === "Idi") {
    odu = odus[79];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[79];
}else if (right_odu === "Obara" && left_odu === "Okonron") {
    odu = odus[80];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[80];
}else if (right_odu === "Obara" && left_odu === "Irosun") {
    odu = odus[81];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[81];
}else if (right_odu === "Obara" && left_odu === "Owanrin") {
    odu = odus[82];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[82];
}else if (right_odu === "Obara" && left_odu === "Ogunda") {
    odu = odus[83];    
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[83];
}else if (right_odu === "Obara" && left_odu === "Osa") {
    odu = odus[84];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[84];
}else if (right_odu === "Obara" && left_odu === "Etura") {
    odu = odus[85];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[85];
}else if (right_odu === "Obara" && left_odu === "Irete") {
    odu = odus[86];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[86];
}else if (right_odu === "Obara" && left_odu === "Eka") {
    odu = odus[87];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[87];
}else if (right_odu === "Obara" && left_odu === "Eturukpon") {
    odu = odus[88];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[88];
}else if (right_odu === "Obara" && left_odu === "Ose") {
    odu = odus[89];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[89];
}else if (right_odu === "Obara" && left_odu === "Ofun") {
    odu = odus[90];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[90];
}else if (right_odu === "Okonron" && left_odu === "Ogbe") {
    odu = odus[91];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[91];
}else if (right_odu === "Okonron" && left_odu === "Oyeku") {
    odu = odus[92];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[92];
}else if (right_odu === "Okonron" && left_odu === "Iwori") {
    odu = odus[93];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[93];
}else if (right_odu === "Okonron" && left_odu === "Idi") {
    odu = odus[94];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[94];
}else if (right_odu === "Okonron" && left_odu === "Obara") {
    odu = odus[95];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[95];
}else if (right_odu === "Okonron" && left_odu === "Irosun") {
    odu = odus[96];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[96];
}else if (right_odu === "Okonron" && left_odu === "Owanrin") {
    odu = odus[97];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[97];
}else if (right_odu === "Okonron" && left_odu === "Ogunda") {
    odu = odus[98];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[98];
}else if (right_odu === "Okonron" && left_odu === "Osa") {
    odu = odus[99];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[99];
}else if (right_odu === "Okonron" && left_odu === "Etura") {
    odu = odus[100];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[100];
}else if (right_odu === "Okonron" && left_odu === "Irete") {
    odu = odus[101];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[101];
}else if (right_odu === "Okonron" && left_odu === "Eka") {
    odu = odus[102];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[102];
}else if (right_odu === "Okonron" && left_odu === "Eturukpon") {
    odu = odus[103];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[103];
}else if (right_odu === "Okonron" && left_odu === "Ose") {
    odu = odus[104];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[104];
}else if (right_odu === "Okonron" && left_odu === "Ofun") {
    odu = odus[105];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[105];
}else if (right_odu === "Irosun" && left_odu === "Ogbe") {
    odu = odus[106];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[106];
}else if (right_odu === "Irosun" && left_odu === "Oyeku") {
    odu = odus[107];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[107];
}else if (right_odu === "Irosun" && left_odu === "Iwori") {
    odu = odus[108];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[108];
}else if (right_odu === "Irosun" && left_odu === "Idi") {
    odu = odus[109];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[109];
}else if (right_odu === "Irosun" && left_odu === "Obara") {
    odu = odus[110];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[110];
}else if (right_odu === "Irosun" && left_odu === "Okonron") {
    odu = odus[111];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[111];
}else if (right_odu === "Irosun" && left_odu === "Owanrin") {
    odu = odus[112];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[112];
}else if (right_odu === "Irosun" && left_odu === "Ogunda") {
    odu = odus[113];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[113];
}else if (right_odu === "Irosun" && left_odu === "Osa") {
    odu = odus[114];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[114];
}else if (right_odu === "Irosun" && left_odu === "Etura") {
    odu = odus[115];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[115];
}else if (right_odu === "Irosun" && left_odu === "Irete") {
    odu = odus[116];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[116];
}else if (right_odu === "Irosun" && left_odu === "Eka") {
    odu = odus[117];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[117];
}else if (right_odu === "Irosun" && left_odu === "Eturukpon") {
    odu = odus[118];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[118];
}else if (right_odu === "Irosun" && left_odu === "Ose") {
    odu = odus[119];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[119];
}else if (right_odu === "Irosun" && left_odu === "Ofun") {
    odu = odus[120];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[120];
}else if (right_odu === "Owanrin" && left_odu === "Ogbe") {
    odu = odus[121];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[121];
}else if (right_odu === "Owanrin" && left_odu === "Oyeku") {
    odu = odus[122];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[122];
}else if (right_odu === "Owanrin" && left_odu === "Iwori") {
    odu = odus[123];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[123];
}else if (right_odu === "Owanrin" && left_odu === "Idi") {
    odu = odus[124];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[124];
}else if (right_odu === "Owanrin" && left_odu === "Obara") {
    odu = odus[125];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[125];
}else if (right_odu === "Owanrin" && left_odu === "Okonron") {
    odu = odus[126];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[126];
}else if (right_odu === "Owanrin" && left_odu === "Irosun") {
    odu = odus[127];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[127];
}else if (right_odu === "Owanrin" && left_odu === "Ogunda") {
    odu = odus[128];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[128];
}else if (right_odu === "Owanrin" && left_odu === "Osa") {
    odu = odus[129];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[129];
}else if (right_odu === "Owanrin" && left_odu === "Etura") {
    odu = odus[130];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[130];
}else if (right_odu === "Owanrin" && left_odu === "Irete") {
    odu = odus[131];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[131];
}else if (right_odu === "Owanrin" && left_odu === "Eka") {
    odu = odus[132];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[132];
}else if (right_odu === "Owanrin" && left_odu === "Eturukpon") {
    odu = odus[133];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[133];
}else if (right_odu === "Owanrin" && left_odu === "Ose") {
    odu = odus[134];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[134];
}else if (right_odu === "Owanrin" && left_odu === "Ofun") {
    odu = odus[135];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[135];
}else if (right_odu === "Ogunda" && left_odu === "Ogbe") {
    odu = odus[136];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[136];
}else if (right_odu === "Ogunda" && left_odu === "Oyeku") {
    odu = odus[137];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[137];
}else if (right_odu === "Ogunda" && left_odu === "Iwori") {
    odu = odus[138];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[138];
}else if (right_odu === "Ogunda" && left_odu === "Idi") {
    odu = odus[139];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[139];
}else if (right_odu === "Ogunda" && left_odu === "Obara") {
    odu = odus[140];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[140];
}else if (right_odu === "Ogunda" && left_odu === "Okonron") {
    odu = odus[141];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[141];
}else if (right_odu === "Ogunda" && left_odu === "Irosun") {
    odu = odus[142];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[142];
}else if (right_odu === "Ogunda" && left_odu === "Owanrin") {
    odu = odus[143];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[143];
}else if (right_odu === "Ogunda" && left_odu === "Osa") {
    odu = odus[144];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[144];
}else if (right_odu === "Ogunda" && left_odu === "Etura") {
    odu = odus[145];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[145];
}else if (right_odu === "Ogunda" && left_odu === "Irete") {
    odu = odus[146];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[146];
}else if (right_odu === "Ogunda" && left_odu === "Eka") {
    odu = odus[147];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[147];
}else if (right_odu === "Ogunda" && left_odu === "Eturukpon") {
    odu = odus[148];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[148];
}else if (right_odu === "Ogunda" && left_odu === "Ose") {
    odu = odus[149];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[149];
}else if (right_odu === "Ogunda" && left_odu === "Ofun") {
    odu = odus[150];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[150];
}else if (right_odu === "Osa" && left_odu === "Ogbe") {
    odu = odus[151];//ojooooooooooooooooooooooo
    oduJSONAddress = 'data\\oduData\\noMejis\\osa\\osaOgbe.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[151];
}else if (right_odu === "Osa" && left_odu === "Oyeku") {
    odu = odus[152];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[152];
}else if (right_odu === "Osa" && left_odu === "Iwori") {
    odu = odus[153];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[153];
}else if (right_odu === "Osa" && left_odu === "Idi") {
    odu = odus[154];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[154];
}else if (right_odu === "Osa" && left_odu === "Obara") {
    odu = odus[155];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[155];
}else if (right_odu === "Osa" && left_odu === "Okonron") {
    odu = odus[156];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[156];
}else if (right_odu === "Osa" && left_odu === "Irosun") {
    odu = odus[157];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[157];
}else if (right_odu === "Osa" && left_odu === "Owanrin") {
    odu = odus[158];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[158];
}else if (right_odu === "Osa" && left_odu === "Ogunda") {
    odu = odus[159];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[159];
}else if (right_odu === "Osa" && left_odu === "Etura") {
    odu = odus[160];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[160];
}else if (right_odu === "Osa" && left_odu === "Irete") {
    odu = odus[161];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[161];
}else if (right_odu === "Osa" && left_odu === "Eka") {
    odu = odus[162];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[162];
}else if (right_odu === "Osa" && left_odu === "Eturukpon") {
    odu = odus[163];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[163];
}else if (right_odu === "Osa" && left_odu === "Ose") {
    odu = odus[164];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[164];
}else if (right_odu === "Osa" && left_odu === "Ofun") {
    odu = odus[165];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[165];
}else if (right_odu === "Etura" && left_odu === "Ogbe") {
    odu = odus[166];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[166];
}else if (right_odu === "Etura" && left_odu === "Oyeku") {
    odu = odus[167];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[167];
}else if (right_odu === "Etura" && left_odu === "Iwori") {
    odu = odus[168];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[168];
}else if (right_odu === "Etura" && left_odu === "Idi") {
    odu = odus[169];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[169];
}else if (right_odu === "Etura" && left_odu === "Obara") {
    odu = odus[170];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[170];
}else if (right_odu === "Etura" && left_odu === "Okonron") {
    odu = odus[171];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[171];
}else if (right_odu === "Etura" && left_odu === "Irosun") {
    odu = odus[172];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[172];
}else if (right_odu === "Etura" && left_odu === "Owanrin") {
    odu = odus[173];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[173];
}else if (right_odu === "Etura" && left_odu === "Ogunda") {
    odu = odus[174];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[174];
}else if (right_odu === "Etura" && left_odu === "Osa") {
    odu = odus[175];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[175];
}else if (right_odu === "Etura" && left_odu === "Irete") {
    odu = odus[176];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[176];
}else if (right_odu === "Etura" && left_odu === "Eka") {
    odu = odus[177];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[177];
}else if (right_odu === "Etura" && left_odu === "Eturukpon") {
    odu = odus[178];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[178];
}else if (right_odu === "Etura" && left_odu === "Ose") {
    odu = odus[179];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[179];
}else if (right_odu === "Etura" && left_odu === "Ofun") {
    odu = odus[180];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[180];
}else if (right_odu === "Irete" && left_odu === "Ogbe") {
    odu = odus[181];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[181];
}else if (right_odu === "Irete" && left_odu === "Oyeku") {
    odu = odus[182];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[182];
}else if (right_odu === "Irete" && left_odu === "Iwori") {
    odu = odus[183];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[183];
}else if (right_odu === "Irete" && left_odu === "Idi") {
    odu = odus[184];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[184];
}else if (right_odu === "Irete" && left_odu === "Obara") {
    odu = odus[185];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[185];
}else if (right_odu === "Irete" && left_odu === "Okonron") {
    odu = odus[186];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[186];
}else if (right_odu === "Irete" && left_odu === "Irosun") {
    odu = odus[187];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[187];
}else if (right_odu === "Irete" && left_odu === "Owanrin") {
    odu = odus[188];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[188];
}else if (right_odu === "Irete" && left_odu === "Ogunda") {
    odu = odus[189];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[189];
}else if (right_odu === "Irete" && left_odu === "Osa") {
    odu = odus[190];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[190];
}else if (right_odu === "Irete" && left_odu === "Etura") {
    odu = odus[191];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[191];
}else if (right_odu === "Irete" && left_odu === "Eka") {
    odu = odus[192];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[192];
}else if (right_odu === "Irete" && left_odu === "Eturukpon") {
    odu = odus[193];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[193];
}else if (right_odu === "Irete" && left_odu === "Ose") {
    odu = odus[194];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[194];
}else if (right_odu === "Irete" && left_odu === "Ofun") {
    odu = odus[195];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[195];
}else if (right_odu === "Eka" && left_odu === "Ogbe") {
    odu = odus[196];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[196];
}else if (right_odu === "Eka" && left_odu === "Oyeku") {
    odu = odus[197];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[197];
}else if (right_odu === "Eka" && left_odu === "Iwori") {
    odu = odus[198];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[198];
}else if (right_odu === "Eka" && left_odu === "Idi") {
    odu = odus[199];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[199];
}else if (right_odu === "Eka" && left_odu === "Obara") {
    odu = odus[200];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[200];
}else if (right_odu === "Eka" && left_odu === "Okonron") {
    odu = odus[201];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[201];
}else if (right_odu === "Eka" && left_odu === "Irosun") {
    odu = odus[202];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[202];
}else if (right_odu === "Eka" && left_odu === "Owanrin") {
    odu = odus[203];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[203];
}else if (right_odu === "Eka" && left_odu === "Ogunda") {
    odu = odus[204];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[204];
}else if (right_odu === "Eka" && left_odu === "Osa") {
    odu = odus[205];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[205];
}else if (right_odu === "Eka" && left_odu === "Etura") {
    odu = odus[206];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[206];
}else if (right_odu === "Eka" && left_odu === "Irete") {
    odu = odus[207];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[207];
}else if (right_odu === "Eka" && left_odu === "Eturukpon") {
    odu = odus[208];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[208];
}else if (right_odu === "Eka" && left_odu === "Ose") {
    odu = odus[209];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[209];
}else if (right_odu === "Eka" && left_odu === "Ofun") {
    odu = odus[210];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[210];
}else if (right_odu === "Eturukpon" && left_odu === "Ogbe") {
    odu = odus[211];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[211];
}else if (right_odu === "Eturukpon" && left_odu === "Oyeku") {
    odu = odus[212];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[212];
}else if (right_odu === "Eturukpon" && left_odu === "Iwori") {
    odu = odus[213];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[213];
}else if (right_odu === "Eturukpon" && left_odu === "Idi") {
    odu = odus[214];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[214];
}else if (right_odu === "Eturukpon" && left_odu === "Obara") {
    odu = odus[215];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[215];
}else if (right_odu === "Eturukpon" && left_odu === "Okonron") {
    odu = odus[216];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[216];
}else if (right_odu === "Eturukpon" && left_odu === "Irosun") {
    odu = odus[217];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[217];
}else if (right_odu === "Eturukpon" && left_odu === "Owanrin") {
    odu = odus[218];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[218];
}else if (right_odu === "Eturukpon" && left_odu === "Ogunda") {
    odu = odus[219];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[219];
}else if (right_odu === "Eturukpon" && left_odu === "Osa") {
    odu = odus[220];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[220];
}else if (right_odu === "Eturukpon" && left_odu === "Etura") {
    odu = odus[221];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[221];
}else if (right_odu === "Eturukpon" && left_odu === "Irete") {
    odu = odus[222];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[222];
}else if (right_odu === "Eturukpon" && left_odu === "Eka") {
    odu = odus[223];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[223];
}else if (right_odu === "Eturukpon" && left_odu === "Ose") {
    odu = odus[224];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[224];
}else if (right_odu === "Eturukpon" && left_odu === "Ofun") {
    odu = odus[225];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[225];
}else if (right_odu === "Ose" && left_odu === "Ogbe") {
    odu = odus[226];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[226];
}else if (right_odu === "Ose" && left_odu === "Oyeku") {
    odu = odus[227];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[227];
}else if (right_odu === "Ose" && left_odu === "Iwori") {
    odu = odus[228];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[228];
}else if (right_odu === "Ose" && left_odu === "Idi") {
    odu = odus[229];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[229];
}else if (right_odu === "Ose" && left_odu === "Obara") {
    odu = odus[230];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[230];
}else if (right_odu === "Ose" && left_odu === "Okonron") {
    odu = odus[231];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[231];
}else if (right_odu === "Ose" && left_odu === "Irosun") {
    odu = odus[232];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[232];
}else if (right_odu === "Ose" && left_odu === "Owanrin") {
    odu = odus[233];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[233];
}else if (right_odu === "Ose" && left_odu === "Ogunda") {
    odu = odus[234];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[234];
}else if (right_odu === "Ose" && left_odu === "Osa") {
    odu = odus[235];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[235];
}else if (right_odu === "Ose" && left_odu === "Etura") {
    odu = odus[236];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[236];
}else if (right_odu === "Ose" && left_odu === "Irete") {
    odu = odus[237];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[237];
}else if (right_odu === "Ose" && left_odu === "Eka") {
    odu = odus[238];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[238];
}else if (right_odu === "Ose" && left_odu === "Eturukpon") {
    odu = odus[239];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[239];
}else if (right_odu === "Ose" && left_odu === "Ofun") {
    odu = odus[240];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[240];
}else if (right_odu === "Ofun" && left_odu === "Ogbe") {
    odu = odus[241];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[241];
}else if (right_odu === "Ofun" && left_odu === "Oyeku") {
    odu = odus[242];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[242];
}else if (right_odu === "Ofun" && left_odu === "Iwori") {
    odu = odus[243];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[243];
}else if (right_odu === "Ofun" && left_odu === "Idi") {
    odu = odus[244];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[244];
}else if (right_odu === "Ofun" && left_odu === "Obara") {
    odu = odus[245];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[245];
}else if (right_odu === "Ofun" && left_odu === "Okonron") {
    odu = odus[246];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[246];
}else if (right_odu === "Ofun" && left_odu === "Irosun") {
    odu = odus[247];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[247];
}else if (right_odu === "Ofun" && left_odu === "Owanrin") {
    odu = odus[248];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[248];
}else if (right_odu === "Ofun" && left_odu === "Ogunda") {
    odu = odus[249];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[249];
}else if (right_odu === "Ofun" && left_odu === "Osa") {
    odu = odus[250];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[250];
}else if (right_odu === "Ofun" && left_odu === "Etura") {
    odu = odus[251];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[251];
}else if (right_odu === "Ofun" && left_odu === "Irete") {
    odu = odus[252];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[252];
}else if (right_odu === "Ofun" && left_odu === "Eka") {
    odu = odus[253];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[253];
}else if (right_odu === "Ofun" && left_odu === "Eturukpon") {
    odu = odus[254];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[254];
}else if (right_odu === "Ofun" && left_odu === "Ose") {
    odu = odus[255];
    oduJSONAddress = 'data\\oduData\\mejis\\ogbeOyekun.json';
    oduForTheJSON= ListofOdusNamesForTheJSON[255];
}
//End of if cycle for assign value for var odu
document.getElementById("oduToShow").innerHTML = odu;
console.log(odu);
oduIndexation = odus.indexOf(odu)//to know the index of the selected odu.
console.log(oduIndexation);
console.log(oduForTheJSON)
}// this bracket en the function
    

