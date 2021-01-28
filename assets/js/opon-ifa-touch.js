var first_right = true;
var second_right = true;
var third_right = true;
var fourth_right = true;
var first_left = true;
var second_left = true;
var third_left = true;
var fourth_left = true;
var odus = ["Eji-Ogbe", "Oyeku-Meji", "iwori-Meji" ,"Idi-Meji" ,"Obara-Meji", "Okonron-Meji", "Irosun-Meji", "Owanrin-Meji", "Ogunda-Meji", "Osa-Meji", "Etura-Meji", "Irete-Meji", "Eka-Meji", "Eturukpon-Meji", "Ose-Meji", "Ofun-Meji", "Ogbe-Oyekun", "Ogbe-Iwori","Ogbe-Idi","Ogbe-Obara","Ogbe-Okonron","Ogbe-Irosun","Ogbe-Owanrin","Ogbe-Ogunda","Ogbe-Osa","Ogbe-Etura","Ogbe-Irete","Ogbe-Eka","Ogbe-Eturukpon","Ogbe-Ose","Ogbe-Ofun","Oyeku-Lo-Ogbe","Oyeku-Bi-Iwori","Oyeku-Di","Oyeku-Obara","Oyeku-Okonron","Oyeku-Irosun","Oyeku-Owanrin","Oyeku-Ogunda","Oyeku-Osa","Oyeku-Etura","Oyeku-Irete","Oyeku-Eturukpon","Oyeku-Be-Eka","Oyeku-Ose","Oyeku-Ofun","Iwori-Bo-Ogbe","Iwori-Oyeku","Iwori-Idi","Iwori-Obara","Iwori-Okonron","Iwori-Irosun","Iwori-Owanrin","Iwori-Ogunda","Iwori-Osa","Iwori-Etura","Iwori-Irete","Iwori-Eka","Iwori-Eturukpon","Iwori-Ose","Iwori-Ofun","Idi-Ogbe","Idi-Oyeku","Idi-Iwori","Idi-Obara","Idi-Okonron","Idi-Irosun","Idi-Owanrin","Idi-Ogunda","Idi-Osa","Idi-Etura","Idi-Irete","Idi-Eturukpon","Idi-Eka","Idi-Ose","Idi-Ofun","Obara-Ogbe","Obara-Oyeku","Obara-Iwori","Obara-Idi","Obara-Okonron","Obara-Irosun","Obara-Owanrin","Obara-Ogunda","Obara-Osa","Obara-Etura","Obara-Irete","Obara-Eka","Obara-Eturukpon","Obara-Ose","Obara-Ofun","Okonron-Ogbe","Okonron-Oyeku","Okonron-Iwori","Okonron-Idi","Okonron-Obara","Okonron-Irosun","Okonron-Owanrin","Okonron-Ogunda","Okonron-Osa","Okonron-Etura","Okonron-Irete","Okonron-Eka","Okonron-Eturukpon","Okonron-Ose","Okonron-Ofun","Irosun-Ogbe","Irosun-Oyeku","Irosun-Iwori","Irosun-Idi","Irosun-Obara","Irosun-Okonron","Irosun-Owanrin","Irosun-Ogunda","Irosun-Osa","Irosun-Etura","Irosun-Irete","Irosun-Eka","Irosun-Eturukpon","Irosun-Ose","Irosun-Ofun","Owanrin-So-Ogbe","Owanrin-Oyeku","Owanrin-Iwori","Owanrin-Idi","Owanrin-Obara","Owanrin-Okonron","Owanrin-Irosun","Owanrin-Ogunda","Owanrin-Osa","Owanrin-Etura","Owanrin-Irete","Owanrin-Eka","Owanrin-Eturukpon","Owanrin-Ose","Owanrin-Ofun","Ogunda-Ogbe","Ogunda-Oyeku","Ogunda-Iwori","Ogunda-Idi","Ogunda-Obara","Ogunda-Okonron","Ogunda-Irosun","Ogunda-Owanrin","Ogunda-Osa","Ogunda-Etura","Ogunda-Irete","Ogunda-Eka","Ogunda-Eturukpon","Ogunda-Ose","Ogunda-Ofun","Osa-Ogbe","Osa-Oyeku","Osa-Iwori","Osa-Idi","Osa-Obara","Osa-Okonron","Osa-Irosun","Osa-Ogunda","Osa-Owanrin","Osa-Etura","Osa-Irete","Osa-Eka","Osa-Eturukpon","Osa-Ose","Osa-Ofun","Etura-Ogbe","Etura-Oyeku","Etura-Iwori","Etura-Idi","Etura-Obara","Etura-Okonron","Etura-Irosun","Etura-Ogunda","Etura-Owanrin","Etura-Osa","Etura-Irete","Etura-Eka","Etura-Eturukpon","Etura-Ose","Etura-Ofun","Irete-Ogbe","Irete-Oyeku","Irete-Iwori","Irete-Idi","Irete-Obara","Irete-Okonron","Irete-Irosun","Irete-Ogunda","Irete-Owanrin","Irete-Osa","Irete-Etura","Irete-Eka","Irete-Eturukpon","Irete-Ose","Irete-Ofun","Eka-Ogbe","Eka-Oyeku","Eka-Iwori","Eka-Idi","Eka-Obara","Eka-Okonron","Eka-Irosun","Eka-Ogunda","Eka-Owanrin","Eka-Osa","Eka-Etura","Eka-Irete","Eka-Eturukpon","Eka-Ose","Eka-Ofun","Eturukpon-Ogbe","Eturukpon-Oyeku","Eturukpon-Iwori","Eturukpon-Idi","Eturukpon-Obara","Eturukpon-Okonron","Eturukpon-Irosun","Eturukpon-Ogunda","Eturukpon-Owanrin","Eturukpon-Osa","Eturukpon-Etura","Eturukpon-Irete","Eturukpon-Eka","Eturukpon-Ose","Eturukpon-Ofun","Ose-Ogbe","Ose-Oyeku","Ose-Iwori","Ose-Idi","Ose-Obara","Ose-Okonron","Ose-Irosun","Ose-Ogunda","Ose-Owanrin","Ose-Osa","Ose-Etura","Ose-Irete","Ose-Eka","Ose-Eturukpon","Ose-Ofun","Ofun-Ogbe","Ofun-Oyeku","Ofun-Iwori","Ofun-Idi","Ofun-Obara","Ofun-Okonron","Ofun-Irosun","Ofun-Ogunda","Ofun-Owanrin","Ofun-Osa","Ofun-Etura","Ofun-Irete","Ofun-Eka","Ofun-Eturukpon","Ofun-Ose","","","","","","",];
var right_odu ;
var left_odu ;
var odu = odus[0];
var oduInfoAddress = 'data\\oduData\\mejis\\ejiogbe.json'
var eboDisplayinformation = datas.ejiogbe.ebbos;


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
    let opon_Ifa_Left_Side_Ogbe_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - ogbe - left half.png'; 
    let opon_Ifa_Left_Side_Oyeku_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - oyeku - left half.png';
    let opon_Ifa_Left_Side_Iwori_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - iwori - left half.png';
    let opon_Ifa_Left_Side_Idi_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - idi - left half.png';
    let opon_Ifa_Left_Side_Obara_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - obara - left half.png';
    let opon_Ifa_Left_Side_Okonron_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - OKONRON - left half.png';
    let opon_Ifa_Left_Side_Irosun_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - irosun - left half.png';
    let opon_Ifa_Left_Side_Owanrin_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - owanrin - left half.png';
    let opon_Ifa_Left_Side_Ogunda_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - ogunda- left half.png';
    let opon_Ifa_Left_Side_Osa_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - osa - left half.png';
    let opon_Ifa_Left_Side_Etura_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - etura - left half.png' ;
    let opon_Ifa_Left_Side_Irete_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - irete - left half.png';
    let opon_Ifa_Left_Side_Eka_Meji =  'images\\Pictures\\Odus\\Left Half\\opon ifa - eka - left half.png';
    let opon_Ifa_Left_Side_Eturukpon_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - eturukpon - left half.png';
    let opon_Ifa_Left_Side_Ose_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - ose - left half.png';
    let opon_Ifa_Left_Side_Ofun_Meji = 'images\\Pictures\\Odus\\Left Half\\opon ifa - ofun - left half.png';
    //Right side
    let opon_Ifa_Right_Side_Ogbe_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - Ogbe - right half.png'; 
    let opon_Ifa_Right_Side_Oyeku_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - oyeku - right half.png';
    let opon_Ifa_Right_Side_Iwori_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - iwori - right half.png';
    let opon_Ifa_Right_Side_Idi_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - idi- right half.png';
    let opon_Ifa_Right_Side_Obara_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - obara - right half.png' ;
    let opon_Ifa_Right_Side_Okonron_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - okonron - right half.png' ;
    let opon_Ifa_Right_Side_Irosun_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - irosun - right half.png';
    let opon_Ifa_Right_Side_Owanrin_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - owanrin - right half.png';
    let opon_Ifa_Right_Side_Ogunda_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - ogunda - right half.png';
    let opon_Ifa_Right_Side_Osa_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - osa - right half.png';
    let opon_Ifa_Right_Side_Etura_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - ETURA - right half.png';
    let opon_Ifa_Right_Side_Irete_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - irete - right half.png';
    let opon_Ifa_Right_Side_Eka_Meji =  'images\\Pictures\\Odus\\Right Half\\opon ifa - eka - right half.png';
    let opon_Ifa_Right_Side_Eturukpon_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - eturukpon - right half.png';
    let opon_Ifa_Right_Side_Ose_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - ose - right half.png';
    let opon_Ifa_Right_Side_Ofun_Meji = 'images\\Pictures\\Odus\\Right Half\\opon ifa - ofun - right half.png';


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
if (left_odu === "Ogbe" && right_odu === "Ogbe") {
    odu = odus[0];
    oduInfoAddress = 'data\\oduData\\mejis\\ejiogbe.json';
    eboDisplayinformation = datas.ejiogbe.ebbos;
} else if (left_odu === "Oyeku" && right_odu === "Oyeku") {
    odu = odus[1];
}else if (left_odu === "Iwori" && right_odu === "Iwori") {
    odu = odus[2];
}else if (left_odu === "Idi" && right_odu === "Idi") {
    odu = odus[3];
}else if (left_odu === "Obara" && right_odu === "Obara") {
    odu = odus[4];
}else if (left_odu === "Okonron" && right_odu === "Okonron") {
    odu = odus[5];
}else if (left_odu === "Irosun" && right_odu === "Irosun") {
    odu = odus[6];
}else if (left_odu === "Owanrin" && right_odu === "Owanrin") {
    odu = odus[7];
}else if (left_odu === "Ogunda" && right_odu === "Ogunda") {
    odu = odus[8];
}else if (left_odu === "Osa" && right_odu === "Osa") {
    odu = odus[9];
}else if (left_odu === "Etura" && right_odu === "Etura") {
    odu = odus[10];
}else if (left_odu === "Irete" && right_odu === "Irete") {
    odu = odus[11];
}else if (left_odu === "Eka" && right_odu === "Eka") {
    odu = odus[12];
}else if (left_odu === "Eturukpon" && right_odu === "Eturukpon") {
    odu = odus[13];
}else if (left_odu === "Ose" && right_odu === "Ose") {
    odu = odus[14];
}else if (left_odu === "Ofun" && right_odu === "Ofun") {
    odu = odus[15];
}else if (left_odu === "Ogbe" && right_odu === "Oyeku") {
    odu = odus[16];
}else if (left_odu === "Ogbe" && right_odu === "Iwori") {
    odu = odus[17];
}else if (left_odu === "Ogbe" && right_odu === "Idi") {
    odu = odus[18];
}else if (left_odu === "Ogbe" && right_odu === "Obara") {
    odu = odus[19];
}else if (left_odu === "Ogbe" && right_odu === "Okonron") {
    odu = odus[20];
}else if (left_odu === "Ogbe" && right_odu === "Irosun") {
    odu = odus[21];
}else if (left_odu === "Ogbe" && right_odu === "Owanrin") {
    odu = odus[22];
}else if (left_odu === "Ogbe" && right_odu === "Ogunda") {
    odu = odus[23];
}else if (left_odu === "Ogbe" && right_odu === "Osa") {
    odu = odus[24];
}else if (left_odu === "Ogbe" && right_odu === "Etura") {
    odu = odus[25];
}else if (left_odu === "Ogbe" && right_odu === "Irete") {
    odu = odus[26];
}else if (left_odu === "Ogbe" && right_odu === "Eka") {
    odu = odus[27];
}else if (left_odu === "Ogbe" && right_odu === "Eturukpon") {
    odu = odus[28];
}else if (left_odu === "Ogbe" && right_odu === "Ose") {
    odu = odus[29];
}else if (left_odu === "Ogbe" && right_odu === "Ofun") {
    odu = odus[30];
}else if (left_odu === "Oyeku" && right_odu === "Ogbe") {
    odu = odus[31];
}else if (left_odu === "Oyeku" && right_odu === "Iwori") {
    odu = odus[32];
}else if (left_odu === "Oyeku" && right_odu === "Idi") {
    odu = odus[33];
}else if (left_odu === "Oyeku" && right_odu === "Obara") {
    odu = odus[34];
}else if (left_odu === "Oyeku" && right_odu === "Okonron") {
    odu = odus[35];
}else if (left_odu === "Oyeku" && right_odu === "Irosun") {
    odu = odus[36];
}else if (left_odu === "Oyeku" && right_odu === "Owanrin") {
    odu = odus[37];
}else if (left_odu === "Oyeku" && right_odu === "Ogunda") {
    odu = odus[38]; 
}else if (left_odu === "Oyeku" && right_odu === "Osa") {
    odu = odus[39];
}else if (left_odu === "Oyeku" && right_odu === "Etura") {
    odu = odus[40];
}else if (left_odu === "Oyeku" && right_odu === "Irete") {
    odu = odus[41];
}else if (left_odu === "Oyeku" && right_odu === "Eka") {
    odu = odus[42];
}else if (left_odu === "Oyeku" && right_odu === "Eturukpon") {
    odu = odus[43];
}else if (left_odu === "Oyeku" && right_odu === "Ose") {
    odu = odus[44];
}else if (left_odu === "Oyeku" && right_odu === "Ofun") {
    odu = odus[45];
}else if (left_odu === "Iwori" && right_odu === "Ogbe") {
    odu = odus[46];
}else if (left_odu === "Iwori" && right_odu === "Oyeku") {
    odu = odus[47];
}else if (left_odu === "Iwori" && right_odu === "Idi") {
    odu = odus[48];
}else if (left_odu === "Iwori" && right_odu === "Obara") {
    odu = odus[49];
}else if (left_odu === "Iwori" && right_odu === "Okonron") {
    odu = odus[50];
}else if (left_odu === "Iwori" && right_odu === "Irosun") {
    odu = odus[51];
}else if (left_odu === "Iwori" && right_odu === "Owanrin") {
    odu = odus[52];
}else if (left_odu === "Iwori" && right_odu === "Ogunda") {
    odu = odus[53];
}else if (left_odu === "Iwori" && right_odu === "Osa") {
    odu = odus[54];
}else if (left_odu === "Iwori" && right_odu === "Etura") {
    odu = odus[55];
}else if (left_odu === "Iwori" && right_odu === "Irete") {
    odu = odus[56];
}else if (left_odu === "Iwori" && right_odu === "Eka") {
    odu = odus[57];
}else if (left_odu === "Iwori" && right_odu === "Eturukpon") {
    odu = odus[58];
}else if (left_odu === "Iwori" && right_odu === "Ose") {
    odu = odus[59];
}else if (left_odu === "Iwori" && right_odu === "Ofun") {
    odu = odus[60];
}else if (left_odu === "Idi" && right_odu === "Ogbe") {
    odu = odus[61];
}else if (left_odu === "Idi" && right_odu === "Oyeku") {
    odu = odus[62];
}else if (left_odu === "Idi" && right_odu === "Iwori") {
    odu = odus[63];
}else if (left_odu === "Idi" && right_odu === "Obara") {
    odu = odus[64];
}else if (left_odu === "Idi" && right_odu === "Okonron") {
    odu = odus[65];
}else if (left_odu === "Idi" && right_odu === "Irosun") {
    odu = odus[66];
}else if (left_odu === "Idi" && right_odu === "Owanrin") {
    odu = odus[67];
}else if (left_odu === "Idi" && right_odu === "Ogunda") {
    odu = odus[68];
}else if (left_odu === "Idi" && right_odu === "Osa") {
    odu = odus[69];
}else if (left_odu === "Idi" && right_odu === "Etura") {
    odu = odus[70];
}else if (left_odu === "Idi" && right_odu === "Irete") {
    odu = odus[71];
}else if (left_odu === "Idi" && right_odu === "Eka") {
    odu = odus[72];
}else if (left_odu === "Idi" && right_odu === "Eturukpon") {
    odu = odus[73];
}else if (left_odu === "Idi" && right_odu === "Ose") {
    odu = odus[74];
}else if (left_odu === "Idi" && right_odu === "Ofun") {
    odu = odus[75];
}else if (left_odu === "Obara" && right_odu === "Ogbe") {
    odu = odus[76];
}else if (left_odu === "Obara" && right_odu === "Oyeku") {
    odu = odus[77];
}else if (left_odu === "Obara" && right_odu === "Iwori") {
    odu = odus[78];
}else if (left_odu === "Obara" && right_odu === "Idi") {
    odu = odus[79];
}else if (left_odu === "Obara" && right_odu === "Okonron") {
    odu = odus[80];
}else if (left_odu === "Obara" && right_odu === "Irosun") {
    odu = odus[81];
}else if (left_odu === "Obara" && right_odu === "Owanrin") {
    odu = odus[82];
}else if (left_odu === "Obara" && right_odu === "Ogunda") {
    odu = odus[83];
}else if (left_odu === "Obara" && right_odu === "Osa") {
    odu = odus[84];
}else if (left_odu === "Obara" && right_odu === "Etura") {
    odu = odus[85];
}else if (left_odu === "Obara" && right_odu === "Irete") {
    odu = odus[86];
}else if (left_odu === "Obara" && right_odu === "Eka") {
    odu = odus[87];
}else if (left_odu === "Obara" && right_odu === "Eturukpon") {
    odu = odus[88];
}else if (left_odu === "Obara" && right_odu === "Ose") {
    odu = odus[89];
}else if (left_odu === "Obara" && right_odu === "Ofun") {
    odu = odus[90];
}else if (left_odu === "Okonron" && right_odu === "Ogbe") {
    odu = odus[91];
}else if (left_odu === "Okonron" && right_odu === "Oyeku") {
    odu = odus[92];
}else if (left_odu === "Okonron" && right_odu === "Iwori") {
    odu = odus[93];
}else if (left_odu === "Okonron" && right_odu === "Idi") {
    odu = odus[94];
}else if (left_odu === "Okonron" && right_odu === "Obara") {
    odu = odus[95];
}else if (left_odu === "Okonron" && right_odu === "Irosun") {
    odu = odus[96];
}else if (left_odu === "Okonron" && right_odu === "Owanrin") {
    odu = odus[97];
}else if (left_odu === "Okonron" && right_odu === "Ogunda") {
    odu = odus[98];
}else if (left_odu === "Okonron" && right_odu === "Osa") {
    odu = odus[99];
}else if (left_odu === "Okonron" && right_odu === "Etura") {
    odu = odus[100];
}else if (left_odu === "Okonron" && right_odu === "Irete") {
    odu = odus[101];
}else if (left_odu === "Okonron" && right_odu === "Eka") {
    odu = odus[102];
}else if (left_odu === "Okonron" && right_odu === "Eturukpon") {
    odu = odus[103];
}else if (left_odu === "Okonron" && right_odu === "Ose") {
    odu = odus[104];
}else if (left_odu === "Okonron" && right_odu === "Ofun") {
    odu = odus[105];
}else if (left_odu === "Irosun" && right_odu === "Ogbe") {
    odu = odus[106];
}else if (left_odu === "Irosun" && right_odu === "Oyeku") {
    odu = odus[107];
}else if (left_odu === "Irosun" && right_odu === "Iwori") {
    odu = odus[108];
}else if (left_odu === "Irosun" && right_odu === "Idi") {
    odu = odus[109];
}else if (left_odu === "Irosun" && right_odu === "Obara") {
    odu = odus[110];
}else if (left_odu === "Irosun" && right_odu === "Okonron") {
    odu = odus[111];
}else if (left_odu === "Irosun" && right_odu === "Owanrin") {
    odu = odus[112];
}else if (left_odu === "Irosun" && right_odu === "Ogunda") {
    odu = odus[113];
}else if (left_odu === "Irosun" && right_odu === "Osa") {
    odu = odus[114];
}else if (left_odu === "Irosun" && right_odu === "Etura") {
    odu = odus[115];
}else if (left_odu === "Irosun" && right_odu === "Irete") {
    odu = odus[116];
}else if (left_odu === "Irosun" && right_odu === "Eka") {
    odu = odus[117];
}else if (left_odu === "Irosun" && right_odu === "Eturukpon") {
    odu = odus[118];
}else if (left_odu === "Irosun" && right_odu === "Ose") {
    odu = odus[119];
}else if (left_odu === "Irosun" && right_odu === "Ofun") {
    odu = odus[120];
}else if (left_odu === "Owanrin" && right_odu === "Ogbe") {
    odu = odus[121];
}else if (left_odu === "Owanrin" && right_odu === "Oyeku") {
    odu = odus[122];
}else if (left_odu === "Owanrin" && right_odu === "Iwori") {
    odu = odus[123];
}else if (left_odu === "Owanrin" && right_odu === "Idi") {
    odu = odus[124];
}else if (left_odu === "Owanrin" && right_odu === "Obara") {
    odu = odus[125];
}else if (left_odu === "Owanrin" && right_odu === "Okonron") {
    odu = odus[126];
}else if (left_odu === "Owanrin" && right_odu === "Irosun") {
    odu = odus[127];
}else if (left_odu === "Owanrin" && right_odu === "Ogunda") {
    odu = odus[128];
}else if (left_odu === "Owanrin" && right_odu === "Osa") {
    odu = odus[129];
}else if (left_odu === "Owanrin" && right_odu === "Etura") {
    odu = odus[130];
}else if (left_odu === "Owanrin" && right_odu === "Irete") {
    odu = odus[131];
}else if (left_odu === "Owanrin" && right_odu === "Eka") {
    odu = odus[132];
}else if (left_odu === "Owanrin" && right_odu === "Eturukpon") {
    odu = odus[133];
}else if (left_odu === "Owanrin" && right_odu === "Ose") {
    odu = odus[134];
}else if (left_odu === "Owanrin" && right_odu === "Ofun") {
    odu = odus[135];
}else if (left_odu === "Ogunda" && right_odu === "Ogbe") {
    odu = odus[136];
}else if (left_odu === "Ogunda" && right_odu === "Oyeku") {
    odu = odus[137];
}else if (left_odu === "Ogunda" && right_odu === "Iwori") {
    odu = odus[138];
}else if (left_odu === "Ogunda" && right_odu === "Idi") {
    odu = odus[139];
}else if (left_odu === "Ogunda" && right_odu === "Obara") {
    odu = odus[140];
}else if (left_odu === "Ogunda" && right_odu === "Okonron") {
    odu = odus[141];
}else if (left_odu === "Ogunda" && right_odu === "Irosun") {
    odu = odus[142];
}else if (left_odu === "Ogunda" && right_odu === "Owanrin") {
    odu = odus[143];
}else if (left_odu === "Ogunda" && right_odu === "Osa") {
    odu = odus[144];
}else if (left_odu === "Ogunda" && right_odu === "Etura") {
    odu = odus[145];
}else if (left_odu === "Ogunda" && right_odu === "Irete") {
    odu = odus[146];
}else if (left_odu === "Ogunda" && right_odu === "Eka") {
    odu = odus[147];
}else if (left_odu === "Ogunda" && right_odu === "Eturukpon") {
    odu = odus[148];
}else if (left_odu === "Ogunda" && right_odu === "Ose") {
    odu = odus[149];
}else if (left_odu === "Ogunda" && right_odu === "Ofun") {
    odu = odus[150];
}else if (left_odu === "Osa" && right_odu === "Ogbe") {
    odu = odus[151];
    oduInfoAddress = 'data\\oduData\\noMejis\\osa\\osaOgbe.json';
    eboDisplayinformation = datas.osaOgbe.ebbos;
}else if (left_odu === "Osa" && right_odu === "Oyeku") {
    odu = odus[152];
}else if (left_odu === "Osa" && right_odu === "Iwori") {
    odu = odus[153];
}else if (left_odu === "Osa" && right_odu === "Idi") {
    odu = odus[154];
}else if (left_odu === "Osa" && right_odu === "Obara") {
    odu = odus[155];
}else if (left_odu === "Osa" && right_odu === "Okonron") {
    odu = odus[156];
}else if (left_odu === "Osa" && right_odu === "Irosun") {
    odu = odus[157];
}else if (left_odu === "Osa" && right_odu === "Owanrin") {
    odu = odus[158];
}else if (left_odu === "Osa" && right_odu === "Ogunda") {
    odu = odus[159];
}else if (left_odu === "Osa" && right_odu === "Etura") {
    odu = odus[160];
}else if (left_odu === "Osa" && right_odu === "Irete") {
    odu = odus[161];
}else if (left_odu === "Osa" && right_odu === "Eka") {
    odu = odus[162];
}else if (left_odu === "Osa" && right_odu === "Eturukpon") {
    odu = odus[163];
}else if (left_odu === "Osa" && right_odu === "Ose") {
    odu = odus[164];
}else if (left_odu === "Osa" && right_odu === "Ofun") {
    odu = odus[165];
}else if (left_odu === "Etura" && right_odu === "Ogbe") {
    odu = odus[166];
}else if (left_odu === "Etura" && right_odu === "Oyeku") {
    odu = odus[167];
}else if (left_odu === "Etura" && right_odu === "Iwori") {
    odu = odus[168];
}else if (left_odu === "Etura" && right_odu === "Idi") {
    odu = odus[169];
}else if (left_odu === "Etura" && right_odu === "Obara") {
    odu = odus[170];
}else if (left_odu === "Etura" && right_odu === "Okonron") {
    odu = odus[171];
}else if (left_odu === "Etura" && right_odu === "Irosun") {
    odu = odus[172];
}else if (left_odu === "Etura" && right_odu === "Owanrin") {
    odu = odus[173];
}else if (left_odu === "Etura" && right_odu === "Ogunda") {
    odu = odus[174];
}else if (left_odu === "Etura" && right_odu === "Osa") {
    odu = odus[175];
}else if (left_odu === "Etura" && right_odu === "Irete") {
    odu = odus[176];
}else if (left_odu === "Etura" && right_odu === "Eka") {
    odu = odus[177];
}else if (left_odu === "Etura" && right_odu === "Eturukpon") {
    odu = odus[178];
}else if (left_odu === "Etura" && right_odu === "Ose") {
    odu = odus[179];
}else if (left_odu === "Etura" && right_odu === "Ofun") {
    odu = odus[180];
}else if (left_odu === "Irete" && right_odu === "Ogbe") {
    odu = odus[181];
}else if (left_odu === "Irete" && right_odu === "Oyeku") {
    odu = odus[182];
}else if (left_odu === "Irete" && right_odu === "Iwori") {
    odu = odus[183];
}else if (left_odu === "Irete" && right_odu === "Idi") {
    odu = odus[184];
}else if (left_odu === "Irete" && right_odu === "Obara") {
    odu = odus[185];
}else if (left_odu === "Irete" && right_odu === "Okonron") {
    odu = odus[186];
}else if (left_odu === "Irete" && right_odu === "Irosun") {
    odu = odus[187];
}else if (left_odu === "Irete" && right_odu === "Owanrin") {
    odu = odus[188];
}else if (left_odu === "Irete" && right_odu === "Ogunda") {
    odu = odus[189];
}else if (left_odu === "Irete" && right_odu === "Osa") {
    odu = odus[190];
}else if (left_odu === "Irete" && right_odu === "Etura") {
    odu = odus[191];
}else if (left_odu === "Irete" && right_odu === "Eka") {
    odu = odus[192];
}else if (left_odu === "Irete" && right_odu === "Eturukpon") {
    odu = odus[193];
}else if (left_odu === "Irete" && right_odu === "Ose") {
    odu = odus[194];
}else if (left_odu === "Irete" && right_odu === "Ofun") {
    odu = odus[195];
}else if (left_odu === "Eka" && right_odu === "Ogbe") {
    odu = odus[196];
}else if (left_odu === "Eka" && right_odu === "Oyeku") {
    odu = odus[197];
}else if (left_odu === "Eka" && right_odu === "Iwori") {
    odu = odus[198];
}else if (left_odu === "Eka" && right_odu === "Idi") {
    odu = odus[199];
}else if (left_odu === "Eka" && right_odu === "Obara") {
    odu = odus[200];
}else if (left_odu === "Eka" && right_odu === "Okonron") {
    odu = odus[201];
}else if (left_odu === "Eka" && right_odu === "Irosun") {
    odu = odus[202];
}else if (left_odu === "Eka" && right_odu === "Owanrin") {
    odu = odus[203];
}else if (left_odu === "Eka" && right_odu === "Ogunda") {
    odu = odus[204];
}else if (left_odu === "Eka" && right_odu === "Osa") {
    odu = odus[205];
}else if (left_odu === "Eka" && right_odu === "Etura") {
    odu = odus[206];
}else if (left_odu === "Eka" && right_odu === "Irete") {
    odu = odus[207];
}else if (left_odu === "Eka" && right_odu === "Eturukpon") {
    odu = odus[208];
}else if (left_odu === "Eka" && right_odu === "Ose") {
    odu = odus[209];
}else if (left_odu === "Eka" && right_odu === "Ofun") {
    odu = odus[210];
}else if (left_odu === "Eturukpon" && right_odu === "Ogbe") {
    odu = odus[211];
}else if (left_odu === "Eturukpon" && right_odu === "Oyeku") {
    odu = odus[212];
}else if (left_odu === "Eturukpon" && right_odu === "Iwori") {
    odu = odus[213];
}else if (left_odu === "Eturukpon" && right_odu === "Idi") {
    odu = odus[214];
}else if (left_odu === "Eturukpon" && right_odu === "Obara") {
    odu = odus[215];
}else if (left_odu === "Eturukpon" && right_odu === "Okonron") {
    odu = odus[216];
}else if (left_odu === "Eturukpon" && right_odu === "Irosun") {
    odu = odus[217];
}else if (left_odu === "Eturukpon" && right_odu === "Owanrin") {
    odu = odus[218];
}else if (left_odu === "Eturukpon" && right_odu === "Ogunda") {
    odu = odus[219];
}else if (left_odu === "Eturukpon" && right_odu === "Osa") {
    odu = odus[220];
}else if (left_odu === "Eturukpon" && right_odu === "Etura") {
    odu = odus[221];
}else if (left_odu === "Eturukpon" && right_odu === "Irete") {
    odu = odus[222];
}else if (left_odu === "Eturukpon" && right_odu === "Eka") {
    odu = odus[223];
}else if (left_odu === "Eturukpon" && right_odu === "Ose") {
    odu = odus[224];
}else if (left_odu === "Eturukpon" && right_odu === "Ofun") {
    odu = odus[225];
}else if (left_odu === "Ose" && right_odu === "Ogbe") {
    odu = odus[226];
}else if (left_odu === "Ose" && right_odu === "Oyeku") {
    odu = odus[227];
}else if (left_odu === "Ose" && right_odu === "Iwori") {
    odu = odus[228];
}else if (left_odu === "Ose" && right_odu === "Idi") {
    odu = odus[229];
}else if (left_odu === "Ose" && right_odu === "Obara") {
    odu = odus[230];
}else if (left_odu === "Ose" && right_odu === "Okonron") {
    odu = odus[231];
}else if (left_odu === "Ose" && right_odu === "Irosun") {
    odu = odus[232];
}else if (left_odu === "Ose" && right_odu === "Owanrin") {
    odu = odus[233];
}else if (left_odu === "Ose" && right_odu === "Ogunda") {
    odu = odus[234];
}else if (left_odu === "Ose" && right_odu === "Osa") {
    odu = odus[235];
}else if (left_odu === "Ose" && right_odu === "Etura") {
    odu = odus[236];
}else if (left_odu === "Ose" && right_odu === "Irete") {
    odu = odus[237];
}else if (left_odu === "Ose" && right_odu === "Eka") {
    odu = odus[238];
}else if (left_odu === "Ose" && right_odu === "Eturukpon") {
    odu = odus[239];
}else if (left_odu === "Ose" && right_odu === "Ofun") {
    odu = odus[240];
}else if (left_odu === "Ofun" && right_odu === "Ogbe") {
    odu = odus[241];
}else if (left_odu === "Ofun" && right_odu === "Oyeku") {
    odu = odus[242];
}else if (left_odu === "Ofun" && right_odu === "Iwori") {
    odu = odus[243];
}else if (left_odu === "Ofun" && right_odu === "Idi") {
    odu = odus[244];
}else if (left_odu === "Ofun" && right_odu === "Obara") {
    odu = odus[245];
}else if (left_odu === "Ofun" && right_odu === "Okonron") {
    odu = odus[246];
}else if (left_odu === "Ofun" && right_odu === "Irosun") {
    odu = odus[247];
}else if (left_odu === "Ofun" && right_odu === "Owanrin") {
    odu = odus[248];
}else if (left_odu === "Ofun" && right_odu === "Ogunda") {
    odu = odus[249];
}else if (left_odu === "Ofun" && right_odu === "Osa") {
    odu = odus[250];
}else if (left_odu === "Ofun" && right_odu === "Etura") {
    odu = odus[251];
}else if (left_odu === "Ofun" && right_odu === "Irete") {
    odu = odus[252];
}else if (left_odu === "Ofun" && right_odu === "Eka") {
    odu = odus[253];
}else if (left_odu === "Ofun" && right_odu === "Eturukpon") {
    odu = odus[254];
}else if (left_odu === "Ofun" && right_odu === "Ose") {
    odu = odus[255];
}
//End of if cycle for assign value for var odu
document.getElementById("oduToShow").innerHTML = odu;
console.log(odu);
oduIndexation = odus.indexOf(odu)//to know the index of the selected odu.
console.log(oduIndexation);
}// this bracket en the function
    

