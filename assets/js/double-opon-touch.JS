//start double odu opon

//first odu

    //Second  half first odu
var first_Odu_first_left = true;
var first_Odu_second_left = true;
var first_Odu_third_left = true;
var first_Odu_fourth_left = true;
    //first half first odu
var first_Odu_first_right = true;
var first_Odu_second_right = true;
var first_Odu_third_right = true;
var first_Odu_fourth_right = true;

//second odu
    //second half Second odu
var second_Odu_first_left = true;
var second_Odu_second_left = true;
var second_Odu_third_left = true;
var second_Odu_fourth_left = true;

    //first half Second odu
var second_Odu_first_right = true;
var second_Odu_second_right = true;
var second_Odu_third_right = true;
var second_Odu_fourth_right = true;


var odus = ["Eji-Ogbe", "Oyeku-Meji", "iwori-Meji" ,"Idi-Meji" ,"Obara-Meji", "Okonron-Meji", "Irosun-Meji", "Owanrin-Meji", "Ogunda-Meji", "Osa-Meji", "Etura-Meji", "Irete-Meji", "Eka-Meji", "Eturukpon-Meji", "Ose-Meji", "Ofun-Meji", "Ogbe-Oyekun", "Ogbe-Iwori","Ogbe-Idi","Ogbe-Obara","Ogbe-Okonron","Ogbe-Irosun","Ogbe-Owanrin","Ogbe-Ogunda","Ogbe-Osa","Ogbe-Etura","Ogbe-Irete","Ogbe-Eka","Ogbe-Eturukpon","Ogbe-Ose","Ogbe-Ofun","Oyeku-Lo-Ogbe","Oyeku-Bi-Iwori","Oyeku-Di","Oyeku-Obara","Oyeku-Okonron","Oyeku-Irosun","Oyeku-Owanrin","Oyeku-Ogunda","Oyeku-Osa","Oyeku-Etura","Oyeku-Irete","Oyeku-Eturukpon","Oyeku-Be-Eka","Oyeku-Ose","Oyeku-Ofun","Iwori-Bo-Ogbe","Iwori-Oyeku","Iwori-Idi","Iwori-Obara","Iwori-Okonron","Iwori-Irosun","Iwori-Owanrin","Iwori-Ogunda","Iwori-Osa","Iwori-Etura","Iwori-Irete","Iwori-Eka","Iwori-Eturukpon","Iwori-Ose","Iwori-Ofun","Idi-Ogbe","Idi-Oyeku","Idi-Iwori","Idi-Obara","Idi-Okonron","Idi-Irosun","Idi-Owanrin","Idi-Ogunda","Idi-Osa","Idi-Etura","Idi-Irete","Idi-Eturukpon","Idi-Eka","Idi-Ose","Idi-Ofun","Obara-Ogbe","Obara-Oyeku","Obara-Iwori","Obara-Idi","Obara-Okonron","Obara-Irosun","Obara-Owanrin","Obara-Ogunda","Obara-Osa","Obara-Etura","Obara-Irete","Obara-Eka","Obara-Eturukpon","Obara-Ose","Obara-Ofun","Okonron-Ogbe","Okonron-Oyeku","Okonron-Iwori","Okonron-Idi","Okonron-Obara","Okonron-Irosun","Okonron-Owanrin","Okonron-Ogunda","Okonron-Osa","Okonron-Etura","Okonron-Irete","Okonron-Eka","Okonron-Eturukpon","Okonron-Ose","Okonron-Ofun","Irosun-Ogbe","Irosun-Oyeku","Irosun-Iwori","Irosun-Idi","Irosun-Obara","Irosun-Okonron","Irosun-Owanrin","Irosun-Ogunda","Irosun-Osa","Irosun-Etura","Irosun-Irete","Irosun-Eka","Irosun-Eturukpon","Irosun-Ose","Irosun-Ofun","Owanrin-So-Ogbe","Owanrin-Oyeku","Owanrin-Iwori","Owanrin-Idi","Owanrin-Obara","Owanrin-Okonron","Owanrin-Irosun","Owanrin-Ogunda","Owanrin-Osa","Owanrin-Etura","Owanrin-Irete","Owanrin-Eka","Owanrin-Eturukpon","Owanrin-Ose","Owanrin-Ofun","Ogunda-Ogbe","Ogunda-Oyeku","Ogunda-Iwori","Ogunda-Idi","Ogunda-Obara","Ogunda-Okonron","Ogunda-Irosun","Ogunda-Owanrin","Ogunda-Osa","Ogunda-Etura","Ogunda-Irete","Ogunda-Eka","Ogunda-Eturukpon","Ogunda-Ose","Ogunda-Ofun","Osa-Ogbe","Osa-Oyeku","Osa-Iwori","Osa-Idi","Osa-Obara","Osa-Okonron","Osa-Irosun","Osa-Ogunda","Osa-Owanrin","Osa-Etura","Osa-Irete","Osa-Eka","Osa-Eturukpon","Osa-Ose","Osa-Ofun","Etura-Ogbe","Etura-Oyeku","Etura-Iwori","Etura-Idi","Etura-Obara","Etura-Okonron","Etura-Irosun","Etura-Ogunda","Etura-Owanrin","Etura-Osa","Etura-Irete","Etura-Eka","Etura-Eturukpon","Etura-Ose","Etura-Ofun","Irete-Ogbe","Irete-Oyeku","Irete-Iwori","Irete-Idi","Irete-Obara","Irete-Okonron","Irete-Irosun","Irete-Ogunda","Irete-Owanrin","Irete-Osa","Irete-Etura","Irete-Eka","Irete-Eturukpon","Irete-Ose","Irete-Ofun","Eka-Ogbe","Eka-Oyeku","Eka-Iwori","Eka-Idi","Eka-Obara","Eka-Okonron","Eka-Irosun","Eka-Ogunda","Eka-Owanrin","Eka-Osa","Eka-Etura","Eka-Irete","Eka-Eturukpon","Eka-Ose","Eka-Ofun","Eturukpon-Ogbe","Eturukpon-Oyeku","Eturukpon-Iwori","Eturukpon-Idi","Eturukpon-Obara","Eturukpon-Okonron","Eturukpon-Irosun","Eturukpon-Ogunda","Eturukpon-Owanrin","Eturukpon-Osa","Eturukpon-Etura","Eturukpon-Irete","Eturukpon-Eka","Eturukpon-Ose","Eturukpon-Ofun","Ose-Ogbe","Ose-Oyeku","Ose-Iwori","Ose-Idi","Ose-Obara","Ose-Okonron","Ose-Irosun","Ose-Ogunda","Ose-Owanrin","Ose-Osa","Ose-Etura","Ose-Irete","Ose-Eka","Ose-Eturukpon","Ose-Ofun","Ofun-Ogbe","Ofun-Oyeku","Ofun-Iwori","Ofun-Idi","Ofun-Obara","Ofun-Okonron","Ofun-Irosun","Ofun-Ogunda","Ofun-Owanrin","Ofun-Osa","Ofun-Etura","Ofun-Irete","Ofun-Eka","Ofun-Eturukpon","Ofun-Ose","","","","","","",];
//pictures of the odus
var first_odu_left_odu ;
var first_odu_right_odu ;
var second_odu_left_odu ;
var second_odu_right_odu ;
var odu_Left = odus[0];
var odu_Right = odus[0];

console.log(odu_Left);
console.log(odu_Right);
 ;



//Start toggle the value for the first odu on the  left side
function toggle_first_Odu_first_left() { 
    first_Odu_first_left = first_Odu_first_left ? false : true; 
}

function toggle_first_Odu_second_left() { 
    first_Odu_second_left = first_Odu_second_left ? false : true; 
}
function toggle_first_Odu_third_left() { 
    first_Odu_third_left = first_Odu_third_left ? false : true; 
}
function toggle_first_Odu_fourth_left() { 
    first_Odu_fourth_left = first_Odu_fourth_left ? false : true;
}
//End toggle the value for the first odu on the  left side 
//Start toggle the value for the first odu on the  right side
function toggle_first_Odu_first_right() { 
    first_Odu_first_right = first_Odu_first_right ? false : true;
}
function toggle_first_Odu_second_right() { 
    first_Odu_second_right = first_Odu_second_right ? false : true; 
}
function toggle_first_Odu_third_right() { 
    first_Odu_third_right = first_Odu_third_right ? false : true; 
}
function toggle_first_Odu_fourth_right() { 
    first_Odu_fourth_right = first_Odu_fourth_right ? false : true;
}
//End toggle the value for the first odu on the  right side 







//Start toggle the value for the Second odu on the  left side
function toggle_second_odu__first_left() { 
    second_Odu_first_left = second_Odu_first_left ? false : true;
}
function toggle_second_odu__second_left() { 
    second_Odu_second_left = second_Odu_second_left ? false : true; 
}
function toggle_second_odu__third_left() { 
    second_Odu_third_left = second_Odu_third_left ? false : true; 
}
function toggle_second_odu__fourth_left() { 
    second_Odu_fourth_left = second_Odu_fourth_left ? false : true;
}
//End toggle the value for the Second odu on the  left side 
//Start toggle the value for the Second odu on the right side
function toggle_second_odu__first_right() { 
    second_Odu_first_right = second_Odu_first_right ? false : true;
}
function toggle_second_odu__second_right() { 
    second_Odu_second_right = second_Odu_second_right ? false : true; 
}
function toggle_second_odu__third_right() { 
    second_Odu_third_right = second_Odu_third_right ? false : true; 
}
function toggle_second_odu__fourth_right() { 
    second_Odu_fourth_right = second_Odu_fourth_right ? false : true;
}
//End toggle the value for the Second odu on the  right side 




function double_opon_touch_func(){
    
    let first_odu_opon_Left_side = document.getElementById("first_Odu_Left_Side");
    let first_odu_opon_Right_side = document.getElementById("first_Odu_Right_Side");
    let second_odu_opon_Left_side = document.getElementById("second_Odu_Left_Side");
    let second_odu_opon_Right_side = document.getElementById("second_Odu_Right_Side");
    


      
    //Left Side
        //first Odu left Side
        let opon_Ifa_First_Odu_Left_Side_Ogbe_Meji = 'Pictures\\Odus\\Double Odu\\Left Side\\First odu (left Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - FIRST ODU LEFT SIDE - OGBE.png'; 
        let opon_Ifa_First_Odu_Left_Side_Oyeku_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Left Side\\First odu (left Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - FIRST ODU LEFT SIDE - OYEKUN.png';
        let opon_Ifa_First_Odu_Left_Side_Iwori_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Left Side\\First odu (left Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - FIRST ODU LEFT SIDE - IWORI.png';
        let opon_Ifa_First_Odu_Left_Side_Idi_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Left Side\\First odu (left Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - FIRST ODU LEFT SIDE - IDI.png';
        let opon_Ifa_First_Odu_Left_Side_Obara_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Left Side\\First odu (left Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - FIRST ODU LEFT SIDE - OBARA.png';
        let opon_Ifa_First_Odu_Left_Side_Okonron_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Left Side\\First odu (left Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - FIRST ODU LEFT SIDE - OKONRON.png';
        let opon_Ifa_First_Odu_Left_Side_Irosun_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Left Side\\First odu (left Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - FIRST ODU LEFT SIDE - IROSUN.png';
        let opon_Ifa_First_Odu_Left_Side_Owanrin_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Left Side\\First odu (left Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - FIRST ODU LEFT SIDE - OWANRIN.png';
        let opon_Ifa_First_Odu_Left_Side_Ogunda_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Left Side\\First odu (left Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - FIRST ODU LEFT SIDE - OGUNDA.png';
        let opon_Ifa_First_Odu_Left_Side_Osa_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Left Side\\First odu (left Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - FIRST ODU LEFT SIDE - OSA.png';
        let opon_Ifa_First_Odu_Left_Side_Etura_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Left Side\\First odu (left Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - FIRST ODU LEFT SIDE - ETURA.png';
        let opon_Ifa_First_Odu_Left_Side_Irete_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Left Side\\First odu (left Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - FIRST ODU LEFT SIDE - IRETE.png';
        let opon_Ifa_First_Odu_Left_Side_Eka_Meji =  'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Left Side\\First odu (left Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - FIRST ODU LEFT SIDE - EKA.png';
        let opon_Ifa_First_Odu_Left_Side_Eturukpon_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Left Side\\First odu (left Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - FIRST ODU LEFT SIDE - ETURUKPON.png';
        let opon_Ifa_First_Odu_Left_Side_Ose_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Left Side\\First odu (left Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - FIRST ODU LEFT SIDE - OSE.png';
        let opon_Ifa_First_Odu_Left_Side_Ofun_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Left Side\\First odu (left Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - FIRST ODU LEFT SIDE - OFUN.png';
            //Second Odu left Side
        let opon_Ifa_Second_Odu_Left_Side_Ogbe_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Left Side\\Second odu (right Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - SECOND ODU LEFT SIDE - OGBE.png'; 
        let opon_Ifa_Second_Odu_Left_Side_Oyeku_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Left Side\\Second odu (right Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - SECOND ODU LEFT SIDE - OYEKUN.png';
        let opon_Ifa_Second_Odu_Left_Side_Iwori_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Left Side\\Second odu (right Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - SECOND ODU LEFT SIDE - IWORI.png';
        let opon_Ifa_Second_Odu_Left_Side_Idi_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Left Side\\Second odu (right Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - SECOND ODU LEFT SIDE - IDI.png';
        let opon_Ifa_Second_Odu_Left_Side_Obara_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Left Side\\Second odu (right Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - SECOND ODU LEFT SIDE - OBARA.png';
        let opon_Ifa_Second_Odu_Left_Side_Okonron_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Left Side\\Second odu (right Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - SECOND ODU LEFT SIDE - OKONRON.png';
        let opon_Ifa_Second_Odu_Left_Side_Irosun_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Left Side\\Second odu (right Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - SECOND ODU LEFT SIDE - IROSUN.png';
        let opon_Ifa_Second_Odu_Left_Side_Owanrin_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Left Side\\Second odu (right Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - SECOND ODU LEFT SIDE - OWANRIN.png';
        let opon_Ifa_Second_Odu_Left_Side_Ogunda_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Left Side\\Second odu (right Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - SECOND ODU LEFT SIDE - OGUNDA.png';
        let opon_Ifa_Second_Odu_Left_Side_Osa_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Left Side\\Second odu (right Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - SECOND ODU LEFT SIDE - OSA.png';
        let opon_Ifa_Second_Odu_Left_Side_Etura_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Left Side\\Second odu (right Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - SECOND ODU LEFT SIDE - ETURA.png';
        let opon_Ifa_Second_Odu_Left_Side_Irete_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Left Side\\Second odu (right Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - SECOND ODU LEFT SIDE - IRETE.png';
        let opon_Ifa_Second_Odu_Left_Side_Eka_Meji =  'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Left Side\\Second odu (right Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - SECOND ODU LEFT SIDE - EKA.png';
        let opon_Ifa_Second_Odu_Left_Side_Eturukpon_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Left Side\\Second odu (right Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - SECOND ODU LEFT SIDE - ETURUKPON.png';
        let opon_Ifa_Second_Odu_Left_Side_Ose_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Left Side\\Second odu (right Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - SECOND ODU LEFT SIDE - OSE.png';
        let opon_Ifa_Second_Odu_Left_Side_Ofun_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Left Side\\Second odu (right Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - SECOND ODU LEFT SIDE - OFUN.png';
        //Right side Side
            //First Right Side
        let opon_Ifa_First_Odu_Right_Side_Ogbe_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Right Side\\First odu (left Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - FIRST ODU RIGHT SIDE - OGBE.png'; 
        let opon_Ifa_First_Odu_Right_Side_Oyeku_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Right Side\\First odu (left Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - FIRST ODU RIGHT SIDE - OYEKUN.png';
        let opon_Ifa_First_Odu_Right_Side_Iwori_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Right Side\\First odu (left Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - FIRST ODU RIGHT SIDE - IWORI.png';
        let opon_Ifa_First_Odu_Right_Side_Idi_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Right Side\\First odu (left Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - FIRST ODU RIGHT SIDE - IDI.png';
        let opon_Ifa_First_Odu_Right_Side_Obara_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Right Side\\First odu (left Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - FIRST ODU RIGHT SIDE - OBARA.png';
        let opon_Ifa_First_Odu_Right_Side_Okonron_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Right Side\\First odu (left Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - FIRST ODU RIGHT SIDE - OKONRON.png';
        let opon_Ifa_First_Odu_Right_Side_Irosun_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Right Side\\First odu (left Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - FIRST ODU RIGHT SIDE - IROSUN.png';
        let opon_Ifa_First_Odu_Right_Side_Owanrin_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Right Side\\First odu (left Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - FIRST ODU RIGHT SIDE - OWANRIN.png';
        let opon_Ifa_First_Odu_Right_Side_Ogunda_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Right Side\\First odu (left Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - FIRST ODU RIGHT SIDE - OGUNDA.png';
        let opon_Ifa_First_Odu_Right_Side_Osa_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Right Side\\First odu (left Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - FIRST ODU RIGHT SIDE - OSA.png';
        let opon_Ifa_First_Odu_Right_Side_Etura_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Right Side\\First odu (left Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - FIRST ODU RIGHT SIDE - ETURA.png';
        let opon_Ifa_First_Odu_Right_Side_Irete_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Right Side\\First odu (left Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - FIRST ODU RIGHT SIDE - IRETE.png';
        let opon_Ifa_First_Odu_Right_Side_Eka_Meji =  'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Right Side\\First odu (left Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - FIRST ODU RIGHT SIDE - EKA.png';
        let opon_Ifa_First_Odu_Right_Side_Eturukpon_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Right Side\\First odu (left Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - FIRST ODU RIGHT SIDE - ETURUKPON.png';
        let opon_Ifa_First_Odu_Right_Side_Ose_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Right Side\\First odu (left Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - FIRST ODU RIGHT SIDE - OSE.png';
        let opon_Ifa_First_Odu_Right_Side_Ofun_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Right Side\\First odu (left Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - FIRST ODU RIGHT SIDE - OFUN.png';
            //Second Right Side
        let opon_Ifa_Second_Odu_Right_Side_Ogbe_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Right Side\\Second odu (right Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - SECOND ODU RIGHT SIDE - OGBE.png'; 
        let opon_Ifa_Second_Odu_Right_Side_Oyeku_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Right Side\\Second odu (right Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - SECOND ODU RIGHT SIDE - OYEKUN.png';
        let opon_Ifa_Second_Odu_Right_Side_Iwori_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Right Side\\Second odu (right Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - SECOND ODU RIGHT SIDE - IWORI.png';
        let opon_Ifa_Second_Odu_Right_Side_Idi_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Right Side\\Second odu (right Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - SECOND ODU RIGHT SIDE - IDI.png';
        let opon_Ifa_Second_Odu_Right_Side_Obara_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Right Side\\Second odu (right Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - SECOND ODU RIGHT SIDE - OBARA.png' ;
        let opon_Ifa_Second_Odu_Right_Side_Okonron_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Right Side\\Second odu (right Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - SECOND ODU RIGHT SIDE - OKONRON.png';
        let opon_Ifa_Second_Odu_Right_Side_Irosun_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Right Side\\Second odu (right Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - SECOND ODU RIGHT SIDE - IROSUN.png';
        let opon_Ifa_Second_Odu_Right_Side_Owanrin_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Right Side\\Second odu (right Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - SECOND ODU RIGHT SIDE - OWANRIN.png';
        let opon_Ifa_Second_Odu_Right_Side_Ogunda_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Right Side\\Second odu (right Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - SECOND ODU RIGHT SIDE - OGUNDA.png';
        let opon_Ifa_Second_Odu_Right_Side_Osa_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Right Side\\Second odu (right Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - SECOND ODU RIGHT SIDE - OSA.png';
        let opon_Ifa_Second_Odu_Right_Side_Etura_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Right Side\\Second odu (right Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - SECOND ODU RIGHT SIDE - ETURA.png';
        let opon_Ifa_Second_Odu_Right_Side_Irete_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Right Side\\Second odu (right Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - SECOND ODU RIGHT SIDE - IRETE.png';
        let opon_Ifa_Second_Odu_Right_Side_Eka_Meji =  'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Right Side\\Second odu (right Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - SECOND ODU RIGHT SIDE - EKA.png';
        let opon_Ifa_Second_Odu_Right_Side_Eturukpon_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Right Side\\Second odu (right Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - SECOND ODU RIGHT SIDE - ETURUKPON.png';
        let opon_Ifa_Second_Odu_Right_Side_Ose_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Right Side\\Second odu (right Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - SECOND ODU RIGHT SIDE - OSE.png';
        let opon_Ifa_Second_Odu_Right_Side_Ofun_Meji = 'C:\\Users\\orlan\\Documents\\MEGA\\MEGAsync\\Proyectos\\IFA APP\\Pictures\\Odus\\Double Odu\\Right Side\\Second odu (right Side)\\opon ifa - DOUBLE - ODUS TEMPLATE - SECOND ODU RIGHT SIDE - OFUN.png';
    
        //start of the  if cycle for the first Odu left side of the opon

        if (first_Odu_first_left === true && first_Odu_second_left === true && first_Odu_third_left === true && first_Odu_fourth_left === true) {
            first_odu_opon_Left_side.setAttribute('href',opon_Ifa_First_Odu_Left_Side_Ogbe_Meji);
            first_odu_left_odu = "Ogbe";
        } else if (first_Odu_first_left === false && first_Odu_second_left === false && first_Odu_third_left === false && first_Odu_fourth_left === false) {
            first_odu_opon_Left_side.setAttribute('href',opon_Ifa_First_Odu_Left_Side_Oyeku_Meji);
            first_odu_left_odu = "Oyeku";
        } else if (first_Odu_first_left === false && first_Odu_second_left === true && first_Odu_third_left === true && first_Odu_fourth_left === false) {
            first_odu_opon_Left_side.setAttribute('href',opon_Ifa_First_Odu_Left_Side_Iwori_Meji);
            first_odu_left_odu = "Iwori";
        } else if (first_Odu_first_left === true && first_Odu_second_left === false && first_Odu_third_left === false && first_Odu_fourth_left === true) {
            first_odu_opon_Left_side.setAttribute('href',opon_Ifa_First_Odu_Left_Side_Idi_Meji);
            first_odu_left_odu = "Idi";
        } else if (first_Odu_first_left === true && first_Odu_second_left === false && first_Odu_third_left === false && first_Odu_fourth_left === false) {
            first_odu_opon_Left_side.setAttribute('href',opon_Ifa_First_Odu_Left_Side_Obara_Meji);
            first_odu_left_odu = "Obara";
        } else if (first_Odu_first_left === false && first_Odu_second_left === false && first_Odu_third_left === false && first_Odu_fourth_left === true) {
            first_odu_opon_Left_side.setAttribute('href',opon_Ifa_First_Odu_Left_Side_Okonron_Meji);
            first_odu_left_odu = "Okonron";
        } else if (first_Odu_first_left === true && first_Odu_second_left === true && first_Odu_third_left === false && first_Odu_fourth_left === false) {
            first_odu_opon_Left_side.setAttribute('href',opon_Ifa_First_Odu_Left_Side_Irosun_Meji);
            first_odu_left_odu = "Irosun";
        } else if (first_Odu_first_left === false && first_Odu_second_left === false && first_Odu_third_left === true && first_Odu_fourth_left === true) {
            first_odu_opon_Left_side.setAttribute('href',opon_Ifa_First_Odu_Left_Side_Owanrin_Meji);
            first_odu_left_odu = "Owanrin";
        } else if (first_Odu_first_left === true && first_Odu_second_left === true && first_Odu_third_left === true && first_Odu_fourth_left === false) {
            first_odu_opon_Left_side.setAttribute('href',opon_Ifa_First_Odu_Left_Side_Ogunda_Meji);
            first_odu_left_odu = "Ogunda";
        } else if (first_Odu_first_left === false && first_Odu_second_left === true && first_Odu_third_left === true && first_Odu_fourth_left === true) {
            first_odu_opon_Left_side.setAttribute('href',opon_Ifa_First_Odu_Left_Side_Osa_Meji);
            first_odu_left_odu = "Osa";
        } else if (first_Odu_first_left === true && first_Odu_second_left === false && first_Odu_third_left === true && first_Odu_fourth_left === true) {
            first_odu_opon_Left_side.setAttribute('href',opon_Ifa_First_Odu_Left_Side_Etura_Meji);
            first_odu_left_odu = "Etura";
        } else if (first_Odu_first_left === true && first_Odu_second_left === true && first_Odu_third_left === false && first_Odu_fourth_left === true) {
            first_odu_opon_Left_side.setAttribute('href',opon_Ifa_First_Odu_Left_Side_Irete_Meji);
            first_odu_left_odu = "Irete";
        } else if (first_Odu_first_left === false && first_Odu_second_left === true && first_Odu_third_left === false && first_Odu_fourth_left === false) {
            first_odu_opon_Left_side.setAttribute('href',opon_Ifa_First_Odu_Left_Side_Eka_Meji);
             first_odu_left_odu = "Eka";
        } else if (first_Odu_first_left === false && first_Odu_second_left === false && first_Odu_third_left === true && first_Odu_fourth_left === false) {
            first_odu_opon_Left_side.setAttribute('href',opon_Ifa_First_Odu_Left_Side_Eturukpon_Meji);
             first_odu_left_odu = "Eturukpon";
        } else if (first_Odu_first_left === true && first_Odu_second_left === false && first_Odu_third_left === true && first_Odu_fourth_left === false) {
            first_odu_opon_Left_side.setAttribute('href',opon_Ifa_First_Odu_Left_Side_Ose_Meji);
             first_odu_left_odu = "Ose";
        } else if (first_Odu_first_left === false && first_Odu_second_left === true && first_Odu_third_left === false && first_Odu_fourth_left === true) {
            first_odu_opon_Left_side.setAttribute('href',opon_Ifa_First_Odu_Left_Side_Ofun_Meji);
             first_odu_left_odu = "Ofun";
        }
     //end of the  if cycle for the first Odu left side of the opon
    //start of the  if cycle for the first Odu right side of the opon

        if (first_Odu_first_right === true && first_Odu_second_right === true && first_Odu_third_right === true && first_Odu_fourth_right === true) {
            first_odu_opon_Right_side.setAttribute('href',opon_Ifa_Second_Odu_Left_Side_Ogbe_Meji);
            first_odu_right_odu = "Ogbe";
        } else if (first_Odu_first_right === false && first_Odu_second_right === false && first_Odu_third_right === false && first_Odu_fourth_right === false) {
            first_odu_opon_Right_side.setAttribute('href',opon_Ifa_Second_Odu_Left_Side_Oyeku_Meji);
             first_odu_right_odu = "Oyeku";
        } else if (first_Odu_first_right === false && first_Odu_second_right === true && first_Odu_third_right === true && first_Odu_fourth_right === false) {
            first_odu_opon_Right_side.setAttribute('href',opon_Ifa_Second_Odu_Left_Side_Iwori_Meji);
             first_odu_right_odu = "Iwori";
        } else if (first_Odu_first_right === true && first_Odu_second_right === false && first_Odu_third_right === false && first_Odu_fourth_right === true) {
            first_odu_opon_Right_side.setAttribute('href',opon_Ifa_Second_Odu_Left_Side_Idi_Meji);
             first_odu_right_odu = "Idi";
        } else if (first_Odu_first_right === true && first_Odu_second_right === false && first_Odu_third_right === false && first_Odu_fourth_right === false) {
            first_odu_opon_Right_side.setAttribute('href',opon_Ifa_Second_Odu_Left_Side_Obara_Meji);
             first_odu_right_odu = "Obara";
        } else if (first_Odu_first_right === false && first_Odu_second_right === false && first_Odu_third_right === false && first_Odu_fourth_right === true) {
            first_odu_opon_Right_side.setAttribute('href',opon_Ifa_Second_Odu_Left_Side_Okonron_Meji);
             first_odu_right_odu = "Okonron";
        } else if (first_Odu_first_right === true && first_Odu_second_right === true && first_Odu_third_right === false && first_Odu_fourth_right === false) {
            first_odu_opon_Right_side.setAttribute('href',opon_Ifa_Second_Odu_Left_Side_Irosun_Meji);
             first_odu_right_odu = "Irosun";
        } else if (first_Odu_first_right === false && first_Odu_second_right === false && first_Odu_third_right === true && first_Odu_fourth_right === true) {
            first_odu_opon_Right_side.setAttribute('href',opon_Ifa_Second_Odu_Left_Side_Owanrin_Meji);
             first_odu_right_odu = "Owanrin";
        } else if (first_Odu_first_right === true && first_Odu_second_right === true && first_Odu_third_right === true && first_Odu_fourth_right === false) {
            first_odu_opon_Right_side.setAttribute('href',opon_Ifa_Second_Odu_Left_Side_Ogunda_Meji);
             first_odu_right_odu = "Ogunda";
        } else if (first_Odu_first_right === false && first_Odu_second_right === true && first_Odu_third_right === true && first_Odu_fourth_right === true) {
            first_odu_opon_Right_side.setAttribute('href',opon_Ifa_Second_Odu_Left_Side_Osa_Meji);
             first_odu_right_odu = "Osa";
        } else if (first_Odu_first_right === true && first_Odu_second_right === false && first_Odu_third_right === true && first_Odu_fourth_right === true) {
            first_odu_opon_Right_side.setAttribute('href',opon_Ifa_Second_Odu_Left_Side_Etura_Meji);
             first_odu_right_odu = "Etura";
        } else if (first_Odu_first_right === true && first_Odu_second_right === true && first_Odu_third_right === false && first_Odu_fourth_right === true) {
            first_odu_opon_Right_side.setAttribute('href',opon_Ifa_Second_Odu_Left_Side_Irete_Meji);
             first_odu_right_odu = "Irete";
        } else if (first_Odu_first_right === false && first_Odu_second_right === true && first_Odu_third_right === false && first_Odu_fourth_right === false) {
            first_odu_opon_Right_side.setAttribute('href',opon_Ifa_Second_Odu_Left_Side_Eka_Meji);
             first_odu_right_odu = "Eka";
        } else if (first_Odu_first_right === false && first_Odu_second_right === false && first_Odu_third_right === true && first_Odu_fourth_right === false) {
            first_odu_opon_Right_side.setAttribute('href',opon_Ifa_Second_Odu_Left_Side_Eturukpon_Meji);
             first_odu_right_odu = "Eturukpon";
        } else if (first_Odu_first_right === true && first_Odu_second_right === false && first_Odu_third_right === true && first_Odu_fourth_right === false) {
            first_odu_opon_Right_side.setAttribute('href',opon_Ifa_Second_Odu_Left_Side_Ose_Meji);
             first_odu_right_odu = "Ose";
        } else if (first_Odu_first_right === false && first_Odu_second_right === true && first_Odu_third_right === false && first_Odu_fourth_right === true) {
            first_odu_opon_Right_side.setAttribute('href',opon_Ifa_Second_Odu_Left_Side_Ofun_Meji);
             first_odu_right_odu = "Ofun";
        }
        //end of the  if cycle for the first Odu right side of the opon


        //start of the  if cycle for the first odu of right side of the opon

        if (second_Odu_first_left  === true && second_Odu_second_left  === true && second_Odu_third_left === true && second_Odu_fourth_left === true) {
            second_odu_opon_Left_side.setAttribute('href',opon_Ifa_First_Odu_Right_Side_Ogbe_Meji);
            second_odu_left_odu = "Ogbe";
        } else if (second_Odu_first_left  === false && second_Odu_second_left  === false && second_Odu_third_left === false && second_Odu_fourth_left === false) {
            second_odu_opon_Left_side.setAttribute('href',opon_Ifa_First_Odu_Right_Side_Oyeku_Meji);
             second_odu_left_odu = "Oyeku";
        } else if (second_Odu_first_left  === false && second_Odu_second_left  === true && second_Odu_third_left === true && second_Odu_fourth_left === false) {
            second_odu_opon_Left_side.setAttribute('href',opon_Ifa_First_Odu_Right_Side_Iwori_Meji);
             second_odu_left_odu = "Iwori";
        } else if (second_Odu_first_left  === true && second_Odu_second_left  === false && second_Odu_third_left === false && second_Odu_fourth_left === true) {
            second_odu_opon_Left_side.setAttribute('href',opon_Ifa_First_Odu_Right_Side_Idi_Meji);
             second_odu_left_odu = "Idi";
        } else if (second_Odu_first_left  === true && second_Odu_second_left  === false && second_Odu_third_left === false && second_Odu_fourth_left === false) {
            second_odu_opon_Left_side.setAttribute('href',opon_Ifa_First_Odu_Right_Side_Obara_Meji);
             second_odu_left_odu = "Obara";
        } else if (second_Odu_first_left  === false && second_Odu_second_left  === false && second_Odu_third_left === false && second_Odu_fourth_left === true) {
            second_odu_opon_Left_side.setAttribute('href',opon_Ifa_First_Odu_Right_Side_Okonron_Meji);
             second_odu_left_odu = "Okonron";
        } else if (second_Odu_first_left  === true && second_Odu_second_left  === true && second_Odu_third_left === false && second_Odu_fourth_left === false) {
            second_odu_opon_Left_side.setAttribute('href',opon_Ifa_First_Odu_Right_Side_Irosun_Meji);
             second_odu_left_odu = "Irosun";
        } else if (second_Odu_first_left  === false && second_Odu_second_left  === false && second_Odu_third_left === true && second_Odu_fourth_left === true) {
            second_odu_opon_Left_side.setAttribute('href',opon_Ifa_First_Odu_Right_Side_Owanrin_Meji);
             second_odu_left_odu = "Owanrin";
        } else if (second_Odu_first_left  === true && second_Odu_second_left  === true && second_Odu_third_left === true && second_Odu_fourth_left === false) {
            second_odu_opon_Left_side.setAttribute('href',opon_Ifa_First_Odu_Right_Side_Ogunda_Meji);
             second_odu_left_odu = "Ogunda";
        } else if (second_Odu_first_left  === false && second_Odu_second_left  === true && second_Odu_third_left === true && second_Odu_fourth_left === true) {
            second_odu_opon_Left_side.setAttribute('href',opon_Ifa_First_Odu_Right_Side_Osa_Meji);
             second_odu_left_odu = "Osa";
        } else if (second_Odu_first_left  === true && second_Odu_second_left  === false && second_Odu_third_left === true && second_Odu_fourth_left === true) {
            second_odu_opon_Left_side.setAttribute('href',opon_Ifa_First_Odu_Right_Side_Etura_Meji);
             second_odu_left_odu = "Etura";
        } else if (second_Odu_first_left  === true && second_Odu_second_left  === true && second_Odu_third_left === false && second_Odu_fourth_left === true) {
            second_odu_opon_Left_side.setAttribute('href',opon_Ifa_First_Odu_Right_Side_Irete_Meji);
             second_odu_left_odu = "Irete";
        } else if (second_Odu_first_left  === false && second_Odu_second_left  === true && second_Odu_third_left === false && second_Odu_fourth_left === false) {
            second_odu_opon_Left_side.setAttribute('href',opon_Ifa_First_Odu_Right_Side_Eka_Meji);
             second_odu_left_odu = "Eka";
        } else if (second_Odu_first_left  === false && second_Odu_second_left  === false && second_Odu_third_left === true && second_Odu_fourth_left === false) {
            second_odu_opon_Left_side.setAttribute('href',opon_Ifa_First_Odu_Right_Side_Eturukpon_Meji);
             second_odu_left_odu = "Eturukpon";
        } else if (second_Odu_first_left  === true && second_Odu_second_left  === false && second_Odu_third_left === true && second_Odu_fourth_left === false) {
            second_odu_opon_Left_side.setAttribute('href',opon_Ifa_First_Odu_Right_Side_Ose_Meji);
             second_odu_left_odu = "Ose";
        } else if (second_Odu_first_left  === false && second_Odu_second_left  === true && second_Odu_third_left === false && second_Odu_fourth_left === true) {
            second_odu_opon_Left_side.setAttribute('href',opon_Ifa_First_Odu_Right_Side_Ofun_Meji);
             second_odu_left_odu = "Ofun";
        } 
        //end of the  if cycle for the first odu of right side of the opon

        //start of the  if cycle for the second odu of right side of the opon

        if (second_Odu_first_right === true && second_Odu_second_right === true && second_Odu_third_right === true && second_Odu_fourth_right === true) {
            second_odu_opon_Right_side.setAttribute('href',opon_Ifa_Second_Odu_Right_Side_Ogbe_Meji);
            second_odu_right_odu = "Ogbe";
        } else if (second_Odu_first_right === false && second_Odu_second_right === false && second_Odu_third_right === false && second_Odu_fourth_right === false) {
            second_odu_opon_Right_side.setAttribute('href',opon_Ifa_Second_Odu_Right_Side_Oyeku_Meji);
             second_odu_right_odu = "Oyeku";
        } else if (second_Odu_first_right === false && second_Odu_second_right === true && second_Odu_third_right === true && second_Odu_fourth_right === false) {
            second_odu_opon_Right_side.setAttribute('href',opon_Ifa_Second_Odu_Right_Side_Iwori_Meji);
             second_odu_right_odu = "Iwori";
        } else if (second_Odu_first_right === true && second_Odu_second_right === false && second_Odu_third_right === false && second_Odu_fourth_right === true) {
            second_odu_opon_Right_side.setAttribute('href',opon_Ifa_Second_Odu_Right_Side_Idi_Meji);
             second_odu_right_odu = "Idi";
        } else if (second_Odu_first_right === true && second_Odu_second_right === false && second_Odu_third_right === false && second_Odu_fourth_right === false) {
            second_odu_opon_Right_side.setAttribute('href',opon_Ifa_Second_Odu_Right_Side_Obara_Meji);
             second_odu_right_odu = "Obara";
        } else if (second_Odu_first_right === false && second_Odu_second_right === false && second_Odu_third_right === false && second_Odu_fourth_right === true) {
            second_odu_opon_Right_side.setAttribute('href',opon_Ifa_Second_Odu_Right_Side_Okonron_Meji);
             second_odu_right_odu = "Okonron";
        } else if (second_Odu_first_right === true && second_Odu_second_right === true && second_Odu_third_right === false && second_Odu_fourth_right === false) {
            second_odu_opon_Right_side.setAttribute('href',opon_Ifa_Second_Odu_Right_Side_Irosun_Meji);
             second_odu_right_odu = "Irosun";
        } else if (second_Odu_first_right === false && second_Odu_second_right === false && second_Odu_third_right === true && second_Odu_fourth_right === true) {
            second_odu_opon_Right_side.setAttribute('href',opon_Ifa_Second_Odu_Right_Side_Owanrin_Meji);
             second_odu_right_odu = "Owanrin";
        } else if (second_Odu_first_right === true && second_Odu_second_right === true && second_Odu_third_right === true && second_Odu_fourth_right === false) {
            second_odu_opon_Right_side.setAttribute('href',opon_Ifa_Second_Odu_Right_Side_Ogunda_Meji);
             second_odu_right_odu = "Ogunda";
        } else if (second_Odu_first_right === false && second_Odu_second_right === true && second_Odu_third_right === true && second_Odu_fourth_right === true) {
            second_odu_opon_Right_side.setAttribute('href',opon_Ifa_Second_Odu_Right_Side_Osa_Meji);
             second_odu_right_odu = "Osa";
        } else if (second_Odu_first_right === true && second_Odu_second_right === false && second_Odu_third_right === true && second_Odu_fourth_right === true) {
            second_odu_opon_Right_side.setAttribute('href',opon_Ifa_Second_Odu_Right_Side_Etura_Meji);
             second_odu_right_odu = "Etura";
        } else if (second_Odu_first_right === true && second_Odu_second_right === true && second_Odu_third_right === false && second_Odu_fourth_right === true) {
            second_odu_opon_Right_side.setAttribute('href',opon_Ifa_Second_Odu_Right_Side_Irete_Meji);
             second_odu_right_odu = "Irete";
        } else if (second_Odu_first_right === false && second_Odu_second_right === true && second_Odu_third_right === false && second_Odu_fourth_right === false) {
            second_odu_opon_Right_side.setAttribute('href',opon_Ifa_Second_Odu_Right_Side_Eka_Meji);
             second_odu_right_odu = "Eka";
        } else if (second_Odu_first_right === false && second_Odu_second_right === false && second_Odu_third_right === true && second_Odu_fourth_right === false) {
            second_odu_opon_Right_side.setAttribute('href',opon_Ifa_Second_Odu_Right_Side_Eturukpon_Meji);
             second_odu_right_odu = "Eturukpon";
        } else if (second_Odu_first_right === true && second_Odu_second_right === false && second_Odu_third_right === true && second_Odu_fourth_right === false) {
            second_odu_opon_Right_side.setAttribute('href',opon_Ifa_Second_Odu_Right_Side_Ose_Meji);
             second_odu_right_odu = "Ose";
        } else if (second_Odu_first_right === false && second_Odu_second_right === true && second_Odu_third_right === false && second_Odu_fourth_right === true) {
            second_odu_opon_Right_side.setAttribute('href',opon_Ifa_Second_Odu_Right_Side_Ofun_Meji);
             second_odu_right_odu = "Ofun";
        } 
        //start of the  if cycle for the second odu of right side of the opon



    //Start of if cycle for assign value for var First Left Odu
//Start of if cycle for assign value for var First Left Odu
if (first_odu_left_odu === "Ogbe" && first_odu_right_odu === "Ogbe") {
    odu_Left = odus[0];
} else if (first_odu_left_odu === "Oyeku" && first_odu_right_odu === "Oyeku") {
    odu_Left = odus[1];
}else if (first_odu_left_odu === "Iwori" && first_odu_right_odu === "Iwori") {
    odu_Left = odus[2];
}else if (first_odu_left_odu === "Idi" && first_odu_right_odu === "Idi") {
    odu_Left = odus[3];
}else if (first_odu_left_odu === "Obara" && first_odu_right_odu === "Obara") {
    odu_Left = odus[4];
}else if (first_odu_left_odu === "Okonron" && first_odu_right_odu === "Okonron") {
    odu_Left = odus[5];
}else if (first_odu_left_odu === "Irosun" && first_odu_right_odu === "Irosun") {
    odu_Left = odus[6];
}else if (first_odu_left_odu === "Owanrin" && first_odu_right_odu === "Owanrin") {
    odu_Left = odus[7];
}else if (first_odu_left_odu === "Ogunda" && first_odu_right_odu === "Ogunda") {
    odu_Left = odus[8];
}else if (first_odu_left_odu === "Osa" && first_odu_right_odu === "Osa") {
    odu_Left = odus[9];
}else if (first_odu_left_odu === "Etura" && first_odu_right_odu === "Etura") {
    odu_Left = odus[10];
}else if (first_odu_left_odu === "Irete" && first_odu_right_odu === "Irete") {
    odu_Left = odus[11];
}else if (first_odu_left_odu === "Eka" && first_odu_right_odu === "Eka") {
    odu_Left = odus[12];
}else if (first_odu_left_odu === "Eturukpon" && first_odu_right_odu === "Eturukpon") {
    odu_Left = odus[13];
}else if (first_odu_left_odu === "Ose" && first_odu_right_odu === "Ose") {
    odu_Left = odus[14];
}else if (first_odu_left_odu === "Ofun" && first_odu_right_odu === "Ofun") {
    odu_Left = odus[15];
}else if (first_odu_left_odu === "Ogbe" && first_odu_right_odu === "Oyeku") {
    odu_Left = odus[16];
}else if (first_odu_left_odu === "Ogbe" && first_odu_right_odu === "Iwori") {
    odu_Left = odus[17];
}else if (first_odu_left_odu === "Ogbe" && first_odu_right_odu === "Idi") {
    odu_Left = odus[18];
}else if (first_odu_left_odu === "Ogbe" && first_odu_right_odu === "Obara") {
    odu_Left = odus[19];
}else if (first_odu_left_odu === "Ogbe" && first_odu_right_odu === "Okonron") {
    odu_Left = odus[20];
}else if (first_odu_left_odu === "Ogbe" && first_odu_right_odu === "Irosun") {
    odu_Left = odus[21];
}else if (first_odu_left_odu === "Ogbe" && first_odu_right_odu === "Owanrin") {
    odu_Left = odus[22];
}else if (first_odu_left_odu === "Ogbe" && first_odu_right_odu === "Ogunda") {
    odu_Left = odus[23];
}else if (first_odu_left_odu === "Ogbe" && first_odu_right_odu === "Osa") {
    odu_Left = odus[24];
}else if (first_odu_left_odu === "Ogbe" && first_odu_right_odu === "Etura") {
    odu_Left = odus[25];
}else if (first_odu_left_odu === "Ogbe" && first_odu_right_odu === "Irete") {
    odu_Left = odus[26];
}else if (first_odu_left_odu === "Ogbe" && first_odu_right_odu === "Eka") {
    odu_Left = odus[27];
}else if (first_odu_left_odu === "Ogbe" && first_odu_right_odu === "Eturukpon") {
    odu_Left = odus[28];
}else if (first_odu_left_odu === "Ogbe" && first_odu_right_odu === "Ose") {
    odu_Left = odus[29];
}else if (first_odu_left_odu === "Ogbe" && first_odu_right_odu === "Ofun") {
    odu_Left = odus[30];
}else if (first_odu_left_odu === "Oyeku" && first_odu_right_odu === "Ogbe") {
    odu_Left = odus[31];
}else if (first_odu_left_odu === "Oyeku" && first_odu_right_odu === "Iwori") {
    odu_Left = odus[32];
}else if (first_odu_left_odu === "Oyeku" && first_odu_right_odu === "Idi") {
    odu_Left = odus[33];
}else if (first_odu_left_odu === "Oyeku" && first_odu_right_odu === "Obara") {
    odu_Left = odus[34];
}else if (first_odu_left_odu === "Oyeku" && first_odu_right_odu === "Okonron") {
    odu_Left = odus[35];
}else if (first_odu_left_odu === "Oyeku" && first_odu_right_odu === "Irosun") {
    odu_Left = odus[36];
}else if (first_odu_left_odu === "Oyeku" && first_odu_right_odu === "Owanrin") {
    odu_Left = odus[37];
}else if (first_odu_left_odu === "Oyeku" && first_odu_right_odu === "Ogunda") {
    odu_Left = odus[38]; 
}else if (first_odu_left_odu === "Oyeku" && first_odu_right_odu === "Osa") {
    odu_Left = odus[39];
}else if (first_odu_left_odu === "Oyeku" && first_odu_right_odu === "Etura") {
    odu_Left = odus[40];
}else if (first_odu_left_odu === "Oyeku" && first_odu_right_odu === "Irete") {
    odu_Left = odus[41];
}else if (first_odu_left_odu === "Oyeku" && first_odu_right_odu === "Eka") {
    odu_Left = odus[42];
}else if (first_odu_left_odu === "Oyeku" && first_odu_right_odu === "Eturukpon") {
    odu_Left = odus[43];
}else if (first_odu_left_odu === "Oyeku" && first_odu_right_odu === "Ose") {
    odu_Left = odus[44];
}else if (first_odu_left_odu === "Oyeku" && first_odu_right_odu === "Ofun") {
    odu_Left = odus[45];
}else if (first_odu_left_odu === "Iwori" && first_odu_right_odu === "Ogbe") {
    odu_Left = odus[46];
}else if (first_odu_left_odu === "Iwori" && first_odu_right_odu === "Oyeku") {
    odu_Left = odus[47];
}else if (first_odu_left_odu === "Iwori" && first_odu_right_odu === "Idi") {
    odu_Left = odus[48];
}else if (first_odu_left_odu === "Iwori" && first_odu_right_odu === "Obara") {
    odu_Left = odus[49];
}else if (first_odu_left_odu === "Iwori" && first_odu_right_odu === "Okonron") {
    odu_Left = odus[50];
}else if (first_odu_left_odu === "Iwori" && first_odu_right_odu === "Irosun") {
    odu_Left = odus[51];
}else if (first_odu_left_odu === "Iwori" && first_odu_right_odu === "Owanrin") {
    odu_Left = odus[52];
}else if (first_odu_left_odu === "Iwori" && first_odu_right_odu === "Ogunda") {
    odu_Left = odus[53];
}else if (first_odu_left_odu === "Iwori" && first_odu_right_odu === "Osa") {
    odu_Left = odus[54];
}else if (first_odu_left_odu === "Iwori" && first_odu_right_odu === "Etura") {
    odu_Left = odus[55];
}else if (first_odu_left_odu === "Iwori" && first_odu_right_odu === "Irete") {
    odu_Left = odus[56];
}else if (first_odu_left_odu === "Iwori" && first_odu_right_odu === "Eka") {
    odu_Left = odus[57];
}else if (first_odu_left_odu === "Iwori" && first_odu_right_odu === "Eturukpon") {
    odu_Left = odus[58];
}else if (first_odu_left_odu === "Iwori" && first_odu_right_odu === "Ose") {
    odu_Left = odus[59];
}else if (first_odu_left_odu === "Iwori" && first_odu_right_odu === "Ofun") {
    odu_Left = odus[60];
}else if (first_odu_left_odu === "Idi" && first_odu_right_odu === "Ogbe") {
    odu_Left = odus[61];
}else if (first_odu_left_odu === "Idi" && first_odu_right_odu === "Oyeku") {
    odu_Left = odus[62];
}else if (first_odu_left_odu === "Idi" && first_odu_right_odu === "Iwori") {
    odu_Left = odus[63];
}else if (first_odu_left_odu === "Idi" && first_odu_right_odu === "Obara") {
    odu_Left = odus[64];
}else if (first_odu_left_odu === "Idi" && first_odu_right_odu === "Okonron") {
    odu_Left = odus[65];
}else if (first_odu_left_odu === "Idi" && first_odu_right_odu === "Irosun") {
    odu_Left = odus[66];
}else if (first_odu_left_odu === "Idi" && first_odu_right_odu === "Owanrin") {
    odu_Left = odus[67];
}else if (first_odu_left_odu === "Idi" && first_odu_right_odu === "Ogunda") {
    odu_Left = odus[68];
}else if (first_odu_left_odu === "Idi" && first_odu_right_odu === "Osa") {
    odu_Left = odus[69];
}else if (first_odu_left_odu === "Idi" && first_odu_right_odu === "Etura") {
    odu_Left = odus[70];
}else if (first_odu_left_odu === "Idi" && first_odu_right_odu === "Irete") {
    odu_Left = odus[71];
}else if (first_odu_left_odu === "Idi" && first_odu_right_odu === "Eka") {
    odu_Left = odus[72];
}else if (first_odu_left_odu === "Idi" && first_odu_right_odu === "Eturukpon") {
    odu_Left = odus[73];
}else if (first_odu_left_odu === "Idi" && first_odu_right_odu === "Ose") {
    odu_Left = odus[74];
}else if (first_odu_left_odu === "Idi" && first_odu_right_odu === "Ofun") {
    odu_Left = odus[75];
}else if (first_odu_left_odu === "Obara" && first_odu_right_odu === "Ogbe") {
    odu_Left = odus[76];
}else if (first_odu_left_odu === "Obara" && first_odu_right_odu === "Oyeku") {
    odu_Left = odus[77];
}else if (first_odu_left_odu === "Obara" && first_odu_right_odu === "Iwori") {
    odu_Left = odus[78];
}else if (first_odu_left_odu === "Obara" && first_odu_right_odu === "Idi") {
    odu_Left = odus[79];
}else if (first_odu_left_odu === "Obara" && first_odu_right_odu === "Okonron") {
    odu_Left = odus[80];
}else if (first_odu_left_odu === "Obara" && first_odu_right_odu === "Irosun") {
    odu_Left = odus[81];
}else if (first_odu_left_odu === "Obara" && first_odu_right_odu === "Owanrin") {
    odu_Left = odus[82];
}else if (first_odu_left_odu === "Obara" && first_odu_right_odu === "Ogunda") {
    odu_Left = odus[83];
}else if (first_odu_left_odu === "Obara" && first_odu_right_odu === "Osa") {
    odu_Left = odus[84];
}else if (first_odu_left_odu === "Obara" && first_odu_right_odu === "Etura") {
    odu_Left = odus[85];
}else if (first_odu_left_odu === "Obara" && first_odu_right_odu === "Irete") {
    odu_Left = odus[86];
}else if (first_odu_left_odu === "Obara" && first_odu_right_odu === "Eka") {
    odu_Left = odus[87];
}else if (first_odu_left_odu === "Obara" && first_odu_right_odu === "Eturukpon") {
    odu_Left = odus[88];
}else if (first_odu_left_odu === "Obara" && first_odu_right_odu === "Ose") {
    odu_Left = odus[89];
}else if (first_odu_left_odu === "Obara" && first_odu_right_odu === "Ofun") {
    odu_Left = odus[90];
}else if (first_odu_left_odu === "Okonron" && first_odu_right_odu === "Ogbe") {
    odu_Left = odus[91];
}else if (first_odu_left_odu === "Okonron" && first_odu_right_odu === "Oyeku") {
    odu_Left = odus[92];
}else if (first_odu_left_odu === "Okonron" && first_odu_right_odu === "Iwori") {
    odu_Left = odus[93];
}else if (first_odu_left_odu === "Okonron" && first_odu_right_odu === "Idi") {
    odu_Left = odus[94];
}else if (first_odu_left_odu === "Okonron" && first_odu_right_odu === "Obara") {
    odu_Left = odus[95];
}else if (first_odu_left_odu === "Okonron" && first_odu_right_odu === "Irosun") {
    odu_Left = odus[96];
}else if (first_odu_left_odu === "Okonron" && first_odu_right_odu === "Owanrin") {
    odu_Left = odus[97];
}else if (first_odu_left_odu === "Okonron" && first_odu_right_odu === "Ogunda") {
    odu_Left = odus[98];
}else if (first_odu_left_odu === "Okonron" && first_odu_right_odu === "Osa") {
    odu_Left = odus[99];
}else if (first_odu_left_odu === "Okonron" && first_odu_right_odu === "Etura") {
    odu_Left = odus[100];
}else if (first_odu_left_odu === "Okonron" && first_odu_right_odu === "Irete") {
    odu_Left = odus[101];
}else if (first_odu_left_odu === "Okonron" && first_odu_right_odu === "Eka") {
    odu_Left = odus[102];
}else if (first_odu_left_odu === "Okonron" && first_odu_right_odu === "Eturukpon") {
    odu_Left = odus[103];
}else if (first_odu_left_odu === "Okonron" && first_odu_right_odu === "Ose") {
    odu_Left = odus[104];
}else if (first_odu_left_odu === "Okonron" && first_odu_right_odu === "Ofun") {
    odu_Left = odus[105];
}else if (first_odu_left_odu === "Irosun" && first_odu_right_odu === "Ogbe") {
    odu_Left = odus[106];
}else if (first_odu_left_odu === "Irosun" && first_odu_right_odu === "Oyeku") {
    odu_Left = odus[107];
}else if (first_odu_left_odu === "Irosun" && first_odu_right_odu === "Iwori") {
    odu_Left = odus[108];
}else if (first_odu_left_odu === "Irosun" && first_odu_right_odu === "Idi") {
    odu_Left = odus[109];
}else if (first_odu_left_odu === "Irosun" && first_odu_right_odu === "Obara") {
    odu_Left = odus[110];
}else if (first_odu_left_odu === "Irosun" && first_odu_right_odu === "Okonron") {
    odu_Left = odus[111];
}else if (first_odu_left_odu === "Irosun" && first_odu_right_odu === "Owanrin") {
    odu_Left = odus[112];
}else if (first_odu_left_odu === "Irosun" && first_odu_right_odu === "Ogunda") {
    odu_Left = odus[113];
}else if (first_odu_left_odu === "Irosun" && first_odu_right_odu === "Osa") {
    odu_Left = odus[114];
}else if (first_odu_left_odu === "Irosun" && first_odu_right_odu === "Etura") {
    odu_Left = odus[115];
}else if (first_odu_left_odu === "Irosun" && first_odu_right_odu === "Irete") {
    odu_Left = odus[116];
}else if (first_odu_left_odu === "Irosun" && first_odu_right_odu === "Eka") {
    odu_Left = odus[117];
}else if (first_odu_left_odu === "Irosun" && first_odu_right_odu === "Eturukpon") {
    odu_Left = odus[118];
}else if (first_odu_left_odu === "Irosun" && first_odu_right_odu === "Ose") {
    odu_Left = odus[119];
}else if (first_odu_left_odu === "Irosun" && first_odu_right_odu === "Ofun") {
    odu_Left = odus[120];
}else if (first_odu_left_odu === "Owanrin" && first_odu_right_odu === "Ogbe") {
    odu_Left = odus[121];
}else if (first_odu_left_odu === "Owanrin" && first_odu_right_odu === "Oyeku") {
    odu_Left = odus[122];
}else if (first_odu_left_odu === "Owanrin" && first_odu_right_odu === "Iwori") {
    odu_Left = odus[123];
}else if (first_odu_left_odu === "Owanrin" && first_odu_right_odu === "Idi") {
    odu_Left = odus[124];
}else if (first_odu_left_odu === "Owanrin" && first_odu_right_odu === "Obara") {
    odu_Left = odus[125];
}else if (first_odu_left_odu === "Owanrin" && first_odu_right_odu === "Okonron") {
    odu_Left = odus[126];
}else if (first_odu_left_odu === "Owanrin" && first_odu_right_odu === "Irosun") {
    odu_Left = odus[127];
}else if (first_odu_left_odu === "Owanrin" && first_odu_right_odu === "Ogunda") {
    odu_Left = odus[128];
}else if (first_odu_left_odu === "Owanrin" && first_odu_right_odu === "Osa") {
    odu_Left = odus[129];
}else if (first_odu_left_odu === "Owanrin" && first_odu_right_odu === "Etura") {
    odu_Left = odus[130];
}else if (first_odu_left_odu === "Owanrin" && first_odu_right_odu === "Irete") {
    odu_Left = odus[131];
}else if (first_odu_left_odu === "Owanrin" && first_odu_right_odu === "Eka") {
    odu_Left = odus[132];
}else if (first_odu_left_odu === "Owanrin" && first_odu_right_odu === "Eturukpon") {
    odu_Left = odus[133];
}else if (first_odu_left_odu === "Owanrin" && first_odu_right_odu === "Ose") {
    odu_Left = odus[134];
}else if (first_odu_left_odu === "Owanrin" && first_odu_right_odu === "Ofun") {
    odu_Left = odus[135];
}else if (first_odu_left_odu === "Ogunda" && first_odu_right_odu === "Ogbe") {
    odu_Left = odus[136];
}else if (first_odu_left_odu === "Ogunda" && first_odu_right_odu === "Oyeku") {
    odu_Left = odus[137];
}else if (first_odu_left_odu === "Ogunda" && first_odu_right_odu === "Iwori") {
    odu_Left = odus[138];
}else if (first_odu_left_odu === "Ogunda" && first_odu_right_odu === "Idi") {
    odu_Left = odus[139];
}else if (first_odu_left_odu === "Ogunda" && first_odu_right_odu === "Obara") {
    odu_Left = odus[140];
}else if (first_odu_left_odu === "Ogunda" && first_odu_right_odu === "Okonron") {
    odu_Left = odus[141];
}else if (first_odu_left_odu === "Ogunda" && first_odu_right_odu === "Irosun") {
    odu_Left = odus[142];
}else if (first_odu_left_odu === "Ogunda" && first_odu_right_odu === "Owanrin") {
    odu_Left = odus[143];
}else if (first_odu_left_odu === "Ogunda" && first_odu_right_odu === "Osa") {
    odu_Left = odus[144];
}else if (first_odu_left_odu === "Ogunda" && first_odu_right_odu === "Etura") {
    odu_Left = odus[145];
}else if (first_odu_left_odu === "Ogunda" && first_odu_right_odu === "Irete") {
    odu_Left = odus[146];
}else if (first_odu_left_odu === "Ogunda" && first_odu_right_odu === "Eka") {
    odu_Left = odus[147];
}else if (first_odu_left_odu === "Ogunda" && first_odu_right_odu === "Eturukpon") {
    odu_Left = odus[148];
}else if (first_odu_left_odu === "Ogunda" && first_odu_right_odu === "Ose") {
    odu_Left = odus[149];
}else if (first_odu_left_odu === "Ogunda" && first_odu_right_odu === "Ofun") {
    odu_Left = odus[150];
}else if (first_odu_left_odu === "Osa" && first_odu_right_odu === "Ogbe") {
    odu_Left = odus[151];
}else if (first_odu_left_odu === "Osa" && first_odu_right_odu === "Oyeku") {
    odu_Left = odus[152];
}else if (first_odu_left_odu === "Osa" && first_odu_right_odu === "Iwori") {
    odu_Left = odus[153];
}else if (first_odu_left_odu === "Osa" && first_odu_right_odu === "Idi") {
    odu_Left = odus[154];
}else if (first_odu_left_odu === "Osa" && first_odu_right_odu === "Obara") {
    odu_Left = odus[155];
}else if (first_odu_left_odu === "Osa" && first_odu_right_odu === "Okonron") {
    odu_Left = odus[156];
}else if (first_odu_left_odu === "Osa" && first_odu_right_odu === "Irosun") {
    odu_Left = odus[157];
}else if (first_odu_left_odu === "Osa" && first_odu_right_odu === "Owanrin") {
    odu_Left = odus[158];
}else if (first_odu_left_odu === "Osa" && first_odu_right_odu === "Ogunda") {
    odu_Left = odus[159];
}else if (first_odu_left_odu === "Osa" && first_odu_right_odu === "Etura") {
    odu_Left = odus[160];
}else if (first_odu_left_odu === "Osa" && first_odu_right_odu === "Irete") {
    odu_Left = odus[161];
}else if (first_odu_left_odu === "Osa" && first_odu_right_odu === "Eka") {
    odu_Left = odus[162];
}else if (first_odu_left_odu === "Osa" && first_odu_right_odu === "Eturukpon") {
    odu_Left = odus[163];
}else if (first_odu_left_odu === "Osa" && first_odu_right_odu === "Ose") {
    odu_Left = odus[164];
}else if (first_odu_left_odu === "Osa" && first_odu_right_odu === "Ofun") {
    odu_Left = odus[165];
}else if (first_odu_left_odu === "Etura" && first_odu_right_odu === "Ogbe") {
    odu_Left = odus[166];
}else if (first_odu_left_odu === "Etura" && first_odu_right_odu === "Oyeku") {
    odu_Left = odus[167];
}else if (first_odu_left_odu === "Etura" && first_odu_right_odu === "Iwori") {
    odu_Left = odus[168];
}else if (first_odu_left_odu === "Etura" && first_odu_right_odu === "Idi") {
    odu_Left = odus[169];
}else if (first_odu_left_odu === "Etura" && first_odu_right_odu === "Obara") {
    odu_Left = odus[170];
}else if (first_odu_left_odu === "Etura" && first_odu_right_odu === "Okonron") {
    odu_Left = odus[171];
}else if (first_odu_left_odu === "Etura" && first_odu_right_odu === "Irosun") {
    odu_Left = odus[172];
}else if (first_odu_left_odu === "Etura" && first_odu_right_odu === "Owanrin") {
    odu_Left = odus[1173];
}else if (first_odu_left_odu === "Etura" && first_odu_right_odu === "Ogunda") {
    odu_Left = odus[174];
}else if (first_odu_left_odu === "Etura" && first_odu_right_odu === "Osa") {
    odu_Left = odus[175];
}else if (first_odu_left_odu === "Etura" && first_odu_right_odu === "Irete") {
    odu_Left = odus[176];
}else if (first_odu_left_odu === "Etura" && first_odu_right_odu === "Eka") {
    odu_Left = odus[177];
}else if (first_odu_left_odu === "Etura" && first_odu_right_odu === "Eturukpon") {
    odu_Left = odus[178];
}else if (first_odu_left_odu === "Etura" && first_odu_right_odu === "Ose") {
    odu_Left = odus[179];
}else if (first_odu_left_odu === "Etura" && first_odu_right_odu === "Ofun") {
    odu_Left = odus[180];
}else if (first_odu_left_odu === "Irete" && first_odu_right_odu === "Ogbe") {
    odu_Left = odus[181];
}else if (first_odu_left_odu === "Irete" && first_odu_right_odu === "Oyeku") {
    odu_Left = odus[182];
}else if (first_odu_left_odu === "Irete" && first_odu_right_odu === "Iwori") {
    odu_Left = odus[183];
}else if (first_odu_left_odu === "Irete" && first_odu_right_odu === "Idi") {
    odu_Left = odus[184];
}else if (first_odu_left_odu === "Irete" && first_odu_right_odu === "Obara") {
    odu_Left = odus[185];
}else if (first_odu_left_odu === "Irete" && first_odu_right_odu === "Okonron") {
    odu_Left = odus[186];
}else if (first_odu_left_odu === "Irete" && first_odu_right_odu === "Irosun") {
    odu_Left = odus[187];
}else if (first_odu_left_odu === "Irete" && first_odu_right_odu === "Owanrin") {
    odu_Left = odus[188];
}else if (first_odu_left_odu === "Irete" && first_odu_right_odu === "Ogunda") {
    odu_Left = odus[189];
}else if (first_odu_left_odu === "Irete" && first_odu_right_odu === "Osa") {
    odu_Left = odus[190];
}else if (first_odu_left_odu === "Irete" && first_odu_right_odu === "Etura") {
    odu_Left = odus[191];
}else if (first_odu_left_odu === "Irete" && first_odu_right_odu === "Eka") {
    odu_Left = odus[192];
}else if (first_odu_left_odu === "Irete" && first_odu_right_odu === "Eturukpon") {
    odu_Left = odus[193];
}else if (first_odu_left_odu === "Irete" && first_odu_right_odu === "Ose") {
    odu_Left = odus[194];
}else if (first_odu_left_odu === "Irete" && first_odu_right_odu === "Ofun") {
    odu_Left = odus[195];
}else if (first_odu_left_odu === "Eka" && first_odu_right_odu === "Ogbe") {
    odu_Left = odus[196];
}else if (first_odu_left_odu === "Eka" && first_odu_right_odu === "Oyeku") {
    odu_Left = odus[197];
}else if (first_odu_left_odu === "Eka" && first_odu_right_odu === "Iwori") {
    odu_Left = odus[198];
}else if (first_odu_left_odu === "Eka" && first_odu_right_odu === "Idi") {
    odu_Left = odus[199];
}else if (first_odu_left_odu === "Eka" && first_odu_right_odu === "Obara") {
    odu_Left = odus[200];
}else if (first_odu_left_odu === "Eka" && first_odu_right_odu === "Okonron") {
    odu_Left = odus[201];
}else if (first_odu_left_odu === "Eka" && first_odu_right_odu === "Irosun") {
    odu_Left = odus[202];
}else if (first_odu_left_odu === "Eka" && first_odu_right_odu === "Owanrin") {
    odu_Left = odus[203];
}else if (first_odu_left_odu === "Eka" && first_odu_right_odu === "Ogunda") {
    odu_Left = odus[204];
}else if (first_odu_left_odu === "Eka" && first_odu_right_odu === "Osa") {
    odu_Left = odus[205];
}else if (first_odu_left_odu === "Eka" && first_odu_right_odu === "Etura") {
    odu_Left = odus[206];
}else if (first_odu_left_odu === "Eka" && first_odu_right_odu === "Irete") {
    odu_Left = odus[207];
}else if (first_odu_left_odu === "Eka" && first_odu_right_odu === "Eturukpon") {
    odu_Left = odus[208];
}else if (first_odu_left_odu === "Eka" && first_odu_right_odu === "Ose") {
    odu_Left = odus[209];
}else if (first_odu_left_odu === "Eka" && first_odu_right_odu === "Ofun") {
    odu_Left = odus[210];
}else if (first_odu_left_odu === "Eturukpon" && first_odu_right_odu === "Ogbe") {
    odu_Left = odus[211];
}else if (first_odu_left_odu === "Eturukpon" && first_odu_right_odu === "Oyeku") {
    odu_Left = odus[212];
}else if (first_odu_left_odu === "Eturukpon" && first_odu_right_odu === "Iwori") {
    odu_Left = odus[213];
}else if (first_odu_left_odu === "Eturukpon" && first_odu_right_odu === "Idi") {
    odu_Left = odus[214];
}else if (first_odu_left_odu === "Eturukpon" && first_odu_right_odu === "Obara") {
    odu_Left = odus[215];
}else if (first_odu_left_odu === "Eturukpon" && first_odu_right_odu === "Okonron") {
    odu_Left = odus[216];
}else if (first_odu_left_odu === "Eturukpon" && first_odu_right_odu === "Irosun") {
    odu_Left = odus[217];
}else if (first_odu_left_odu === "Eturukpon" && first_odu_right_odu === "Owanrin") {
    odu_Left = odus[218];
}else if (first_odu_left_odu === "Eturukpon" && first_odu_right_odu === "Ogunda") {
    odu_Left = odus[219];
}else if (first_odu_left_odu === "Eturukpon" && first_odu_right_odu === "Osa") {
    odu_Left = odus[220];
}else if (first_odu_left_odu === "Eturukpon" && first_odu_right_odu === "Etura") {
    odu_Left = odus[221];
}else if (first_odu_left_odu === "Eturukpon" && first_odu_right_odu === "Irete") {
    odu_Left = odus[222];
}else if (first_odu_left_odu === "Eturukpon" && first_odu_right_odu === "Eka") {
    odu_Left = odus[223];
}else if (first_odu_left_odu === "Eturukpon" && first_odu_right_odu === "Ose") {
    odu_Left = odus[224];
}else if (first_odu_left_odu === "Eturukpon" && first_odu_right_odu === "Ofun") {
    odu_Left = odus[225];
}else if (first_odu_left_odu === "Ose" && first_odu_right_odu === "Ogbe") {
    odu_Left = odus[226];
}else if (first_odu_left_odu === "Ose" && first_odu_right_odu === "Oyeku") {
    odu_Left = odus[227];
}else if (first_odu_left_odu === "Ose" && first_odu_right_odu === "Iwori") {
    odu_Left = odus[228];
}else if (first_odu_left_odu === "Ose" && first_odu_right_odu === "Idi") {
    odu_Left = odus[229];
}else if (first_odu_left_odu === "Ose" && first_odu_right_odu === "Obara") {
    odu_Left = odus[230];
}else if (first_odu_left_odu === "Ose" && first_odu_right_odu === "Okonron") {
    odu_Left = odus[231];
}else if (first_odu_left_odu === "Ose" && first_odu_right_odu === "Irosun") {
    odu_Left = odus[232];
}else if (first_odu_left_odu === "Ose" && first_odu_right_odu === "Owanrin") {
    odu_Left = odus[233];
}else if (first_odu_left_odu === "Ose" && first_odu_right_odu === "Ogunda") {
    odu_Left = odus[234];
}else if (first_odu_left_odu === "Ose" && first_odu_right_odu === "Osa") {
    odu_Left = odus[235];
}else if (first_odu_left_odu === "Ose" && first_odu_right_odu === "Etura") {
    odu_Left = odus[236];
}else if (first_odu_left_odu === "Ose" && first_odu_right_odu === "Irete") {
    odu_Left = odus[237];
}else if (first_odu_left_odu === "Ose" && first_odu_right_odu === "Eka") {
    odu_Left = odus[238];
}else if (first_odu_left_odu === "Ose" && first_odu_right_odu === "Eturukpon") {
    odu_Left = odus[239];
}else if (first_odu_left_odu === "Ose" && first_odu_right_odu === "Ofun") {
    odu_Left = odus[240];
}else if (first_odu_left_odu === "Ofun" && first_odu_right_odu === "Ogbe") {
    odu_Left = odus[241];
}else if (first_odu_left_odu === "Ofun" && first_odu_right_odu === "Oyeku") {
    odu_Left = odus[242];
}else if (first_odu_left_odu === "Ofun" && first_odu_right_odu === "Iwori") {
    odu_Left = odus[243];
}else if (first_odu_left_odu === "Ofun" && first_odu_right_odu === "Idi") {
    odu_Left = odus[244];
}else if (first_odu_left_odu === "Ofun" && first_odu_right_odu === "Obara") {
    odu_Left = odus[245];
}else if (first_odu_left_odu === "Ofun" && first_odu_right_odu === "Okonron") {
    odu_Left = odus[246];
}else if (first_odu_left_odu === "Ofun" && first_odu_right_odu === "Irosun") {
    odu_Left = odus[247];
}else if (first_odu_left_odu === "Ofun" && first_odu_right_odu === "Owanrin") {
    odu_Left = odus[248];
}else if (first_odu_left_odu === "Ofun" && first_odu_right_odu === "Ogunda") {
    odu_Left = odus[249];
}else if (first_odu_left_odu === "Ofun" && first_odu_right_odu === "Osa") {
    odu_Left = odus[250];
}else if (first_odu_left_odu === "Ofun" && first_odu_right_odu === "Etura") {
    odu_Left = odus[251];
}else if (first_odu_left_odu === "Ofun" && first_odu_right_odu === "Irete") {
    odu_Left = odus[252];
}else if (first_odu_left_odu === "Ofun" && first_odu_right_odu === "Eka") {
    odu_Left = odus[253];
}else if (first_odu_left_odu === "Ofun" && first_odu_right_odu === "Eturukpon") {
    odu_Left = odus[254];
}else if (first_odu_left_odu === "Ofun" && first_odu_right_odu === "Ose") {
    odu_Left = odus[255];
}

//End of if cycle for assign value for var First Left Odu
//Start of if cycle for assign value for var First Right Odu
if (second_odu_left_odu === "Ogbe" && second_odu_right_odu === "Ogbe") {
    odu_Right = odus[0];
} else if (second_odu_left_odu === "Oyeku" && second_odu_right_odu === "Oyeku") {
    odu_Right = odus[1];
}else if (second_odu_left_odu === "Iwori" && second_odu_right_odu === "Iwori") {
    odu_Right = odus[2];
}else if (second_odu_left_odu === "Idi" && second_odu_right_odu === "Idi") {
    odu_Right = odus[3];
}else if (second_odu_left_odu === "Obara" && second_odu_right_odu === "Obara") {
    odu_Right = odus[4];
}else if (second_odu_left_odu === "Okonron" && second_odu_right_odu === "Okonron") {
    odu_Right = odus[5];
}else if (second_odu_left_odu === "Irosun" && second_odu_right_odu === "Irosun") {
    odu_Right = odus[6];
}else if (second_odu_left_odu === "Owanrin" && second_odu_right_odu === "Owanrin") {
    odu_Right = odus[7];
}else if (second_odu_left_odu === "Ogunda" && second_odu_right_odu === "Ogunda") {
    odu_Right = odus[8];
}else if (second_odu_left_odu === "Osa" && second_odu_right_odu === "Osa") {
    odu_Right = odus[9];
}else if (second_odu_left_odu === "Etura" && second_odu_right_odu === "Etura") {
    odu_Right = odus[10];
}else if (second_odu_left_odu === "Irete" && second_odu_right_odu === "Irete") {
    odu_Right = odus[11];
}else if (second_odu_left_odu === "Eka" && second_odu_right_odu === "Eka") {
    odu_Right = odus[12];
}else if (second_odu_left_odu === "Eturukpon" && second_odu_right_odu === "Eturukpon") {
    odu_Right = odus[13];
}else if (second_odu_left_odu === "Ose" && second_odu_right_odu === "Ose") {
    odu_Right = odus[14];
}else if (second_odu_left_odu === "Ofun" && second_odu_right_odu === "Ofun") {
    odu_Right = odus[15];
}else if (second_odu_left_odu === "Ogbe" && second_odu_right_odu === "Oyeku") {
    odu_Right = odus[16];
}else if (second_odu_left_odu === "Ogbe" && second_odu_right_odu === "Iwori") {
    odu_Right = odus[17];
}else if (second_odu_left_odu === "Ogbe" && second_odu_right_odu === "Idi") {
    odu_Right = odus[18];
}else if (second_odu_left_odu === "Ogbe" && second_odu_right_odu === "Obara") {
    odu_Right = odus[19];
}else if (second_odu_left_odu === "Ogbe" && second_odu_right_odu === "Okonron") {
    odu_Right = odus[20];
}else if (second_odu_left_odu === "Ogbe" && second_odu_right_odu === "Irosun") {
    odu_Right = odus[21];
}else if (second_odu_left_odu === "Ogbe" && second_odu_right_odu === "Owanrin") {
    odu_Right = odus[22];
}else if (second_odu_left_odu === "Ogbe" && second_odu_right_odu === "Ogunda") {
    odu_Right = odus[23];
}else if (second_odu_left_odu === "Ogbe" && second_odu_right_odu === "Osa") {
    odu_Right = odus[24];
}else if (second_odu_left_odu === "Ogbe" && second_odu_right_odu === "Etura") {
    odu_Right = odus[25];
}else if (second_odu_left_odu === "Ogbe" && second_odu_right_odu === "Irete") {
    odu_Right = odus[26];
}else if (second_odu_left_odu === "Ogbe" && second_odu_right_odu === "Eka") {
    odu_Right = odus[27];
}else if (second_odu_left_odu === "Ogbe" && second_odu_right_odu === "Eturukpon") {
    odu_Right = odus[28];
}else if (second_odu_left_odu === "Ogbe" && second_odu_right_odu === "Ose") {
    odu_Right = odus[29];
}else if (second_odu_left_odu === "Ogbe" && second_odu_right_odu === "Ofun") {
    odu_Right = odus[30];
}else if (second_odu_left_odu === "Oyeku" && second_odu_right_odu === "Ogbe") {
    odu_Right = odus[31];
}else if (second_odu_left_odu === "Oyeku" && second_odu_right_odu === "Iwori") {
    odu_Right = odus[32];
}else if (second_odu_left_odu === "Oyeku" && second_odu_right_odu === "Idi") {
    odu_Right = odus[33];
}else if (second_odu_left_odu === "Oyeku" && second_odu_right_odu === "Obara") {
    odu_Right = odus[34];
}else if (second_odu_left_odu === "Oyeku" && second_odu_right_odu === "Okonron") {
    odu_Right = odus[35];
}else if (second_odu_left_odu === "Oyeku" && second_odu_right_odu === "Irosun") {
    odu_Right = odus[36];
}else if (second_odu_left_odu === "Oyeku" && second_odu_right_odu === "Owanrin") {
    odu_Right = odus[37];
}else if (second_odu_left_odu === "Oyeku" && second_odu_right_odu === "Ogunda") {
    odu_Right = odus[38]; 
}else if (second_odu_left_odu === "Oyeku" && second_odu_right_odu === "Osa") {
    odu_Right = odus[39];
}else if (second_odu_left_odu === "Oyeku" && second_odu_right_odu === "Etura") {
    odu_Right = odus[40];
}else if (second_odu_left_odu === "Oyeku" && second_odu_right_odu === "Irete") {
    odu_Right = odus[41];
}else if (second_odu_left_odu === "Oyeku" && second_odu_right_odu === "Eka") {
    odu_Right = odus[42];
}else if (second_odu_left_odu === "Oyeku" && second_odu_right_odu === "Eturukpon") {
    odu_Right = odus[43];
}else if (second_odu_left_odu === "Oyeku" && second_odu_right_odu === "Ose") {
    odu_Right = odus[44];
}else if (second_odu_left_odu === "Oyeku" && second_odu_right_odu === "Ofun") {
    odu_Right = odus[45];
}else if (second_odu_left_odu === "Iwori" && second_odu_right_odu === "Ogbe") {
    odu_Right = odus[46];
}else if (second_odu_left_odu === "Iwori" && second_odu_right_odu === "Oyeku") {
    odu_Right = odus[47];
}else if (second_odu_left_odu === "Iwori" && second_odu_right_odu === "Idi") {
    odu_Right = odus[48];
}else if (second_odu_left_odu === "Iwori" && second_odu_right_odu === "Obara") {
    odu_Right = odus[49];
}else if (second_odu_left_odu === "Iwori" && second_odu_right_odu === "Okonron") {
    odu_Right = odus[50];
}else if (second_odu_left_odu === "Iwori" && second_odu_right_odu === "Irosun") {
    odu_Right = odus[51];
}else if (second_odu_left_odu === "Iwori" && second_odu_right_odu === "Owanrin") {
    odu_Right = odus[52];
}else if (second_odu_left_odu === "Iwori" && second_odu_right_odu === "Ogunda") {
    odu_Right = odus[53];
}else if (second_odu_left_odu === "Iwori" && second_odu_right_odu === "Osa") {
    odu_Right = odus[54];
}else if (second_odu_left_odu === "Iwori" && second_odu_right_odu === "Etura") {
    odu_Right = odus[55];
}else if (second_odu_left_odu === "Iwori" && second_odu_right_odu === "Irete") {
    odu_Right = odus[56];
}else if (second_odu_left_odu === "Iwori" && second_odu_right_odu === "Eka") {
    odu_Right = odus[57];
}else if (second_odu_left_odu === "Iwori" && second_odu_right_odu === "Eturukpon") {
    odu_Right = odus[58];
}else if (second_odu_left_odu === "Iwori" && second_odu_right_odu === "Ose") {
    odu_Right = odus[59];
}else if (second_odu_left_odu === "Iwori" && second_odu_right_odu === "Ofun") {
    odu_Right = odus[60];
}else if (second_odu_left_odu === "Idi" && second_odu_right_odu === "Ogbe") {
    odu_Right = odus[61];
}else if (second_odu_left_odu === "Idi" && second_odu_right_odu === "Oyeku") {
    odu_Right = odus[62];
}else if (second_odu_left_odu === "Idi" && second_odu_right_odu === "Iwori") {
    odu_Right = odus[63];
}else if (second_odu_left_odu === "Idi" && second_odu_right_odu === "Obara") {
    odu_Right = odus[64];
}else if (second_odu_left_odu === "Idi" && second_odu_right_odu === "Okonron") {
    odu_Right = odus[65];
}else if (second_odu_left_odu === "Idi" && second_odu_right_odu === "Irosun") {
    odu_Right = odus[66];
}else if (second_odu_left_odu === "Idi" && second_odu_right_odu === "Owanrin") {
    odu_Right = odus[67];
}else if (second_odu_left_odu === "Idi" && second_odu_right_odu === "Ogunda") {
    odu_Right = odus[68];
}else if (second_odu_left_odu === "Idi" && second_odu_right_odu === "Osa") {
    odu_Right = odus[69];
}else if (second_odu_left_odu === "Idi" && second_odu_right_odu === "Etura") {
    odu_Right = odus[70];
}else if (second_odu_left_odu === "Idi" && second_odu_right_odu === "Irete") {
    odu_Right = odus[71];
}else if (second_odu_left_odu === "Idi" && second_odu_right_odu === "Eka") {
    odu_Right = odus[72];
}else if (second_odu_left_odu === "Idi" && second_odu_right_odu === "Eturukpon") {
    odu_Right = odus[73];
}else if (second_odu_left_odu === "Idi" && second_odu_right_odu === "Ose") {
    odu_Right = odus[74];
}else if (second_odu_left_odu === "Idi" && second_odu_right_odu === "Ofun") {
    odu_Right = odus[75];
}else if (second_odu_left_odu === "Obara" && second_odu_right_odu === "Ogbe") {
    odu_Right = odus[76];
}else if (second_odu_left_odu === "Obara" && second_odu_right_odu === "Oyeku") {
    odu_Right = odus[77];
}else if (second_odu_left_odu === "Obara" && second_odu_right_odu === "Iwori") {
    odu_Right = odus[78];
}else if (second_odu_left_odu === "Obara" && second_odu_right_odu === "Idi") {
    odu_Right = odus[79];
}else if (second_odu_left_odu === "Obara" && second_odu_right_odu === "Okonron") {
    odu_Right = odus[80];
}else if (second_odu_left_odu === "Obara" && second_odu_right_odu === "Irosun") {
    odu_Right = odus[81];
}else if (second_odu_left_odu === "Obara" && second_odu_right_odu === "Owanrin") {
    odu_Right = odus[82];
}else if (second_odu_left_odu === "Obara" && second_odu_right_odu === "Ogunda") {
    odu_Right = odus[83];
}else if (second_odu_left_odu === "Obara" && second_odu_right_odu === "Osa") {
    odu_Right = odus[84];
}else if (second_odu_left_odu === "Obara" && second_odu_right_odu === "Etura") {
    odu_Right = odus[85];
}else if (second_odu_left_odu === "Obara" && second_odu_right_odu === "Irete") {
    odu_Right = odus[86];
}else if (second_odu_left_odu === "Obara" && second_odu_right_odu === "Eka") {
    odu_Right = odus[87];
}else if (second_odu_left_odu === "Obara" && second_odu_right_odu === "Eturukpon") {
    odu_Right = odus[88];
}else if (second_odu_left_odu === "Obara" && second_odu_right_odu === "Ose") {
    odu_Right = odus[89];
}else if (second_odu_left_odu === "Obara" && second_odu_right_odu === "Ofun") {
    odu_Right = odus[90];
}else if (second_odu_left_odu === "Okonron" && second_odu_right_odu === "Ogbe") {
    odu_Right = odus[91];
}else if (second_odu_left_odu === "Okonron" && second_odu_right_odu === "Oyeku") {
    odu_Right = odus[92];
}else if (second_odu_left_odu === "Okonron" && second_odu_right_odu === "Iwori") {
    odu_Right = odus[93];
}else if (second_odu_left_odu === "Okonron" && second_odu_right_odu === "Idi") {
    odu_Right = odus[94];
}else if (second_odu_left_odu === "Okonron" && second_odu_right_odu === "Obara") {
    odu_Right = odus[95];
}else if (second_odu_left_odu === "Okonron" && second_odu_right_odu === "Irosun") {
    odu_Right = odus[96];
}else if (second_odu_left_odu === "Okonron" && second_odu_right_odu === "Owanrin") {
    odu_Right = odus[97];
}else if (second_odu_left_odu === "Okonron" && second_odu_right_odu === "Ogunda") {
    odu_Right = odus[98];
}else if (second_odu_left_odu === "Okonron" && second_odu_right_odu === "Osa") {
    odu_Right = odus[99];
}else if (second_odu_left_odu === "Okonron" && second_odu_right_odu === "Etura") {
    odu_Right = odus[100];
}else if (second_odu_left_odu === "Okonron" && second_odu_right_odu === "Irete") {
    odu_Right = odus[101];
}else if (second_odu_left_odu === "Okonron" && second_odu_right_odu === "Eka") {
    odu_Right = odus[102];
}else if (second_odu_left_odu === "Okonron" && second_odu_right_odu === "Eturukpon") {
    odu_Right = odus[103];
}else if (second_odu_left_odu === "Okonron" && second_odu_right_odu === "Ose") {
    odu_Right = odus[104];
}else if (second_odu_left_odu === "Okonron" && second_odu_right_odu === "Ofun") {
    odu_Right = odus[105];
}else if (second_odu_left_odu === "Irosun" && second_odu_right_odu === "Ogbe") {
    odu_Right = odus[106];
}else if (second_odu_left_odu === "Irosun" && second_odu_right_odu === "Oyeku") {
    odu_Right = odus[107];
}else if (second_odu_left_odu === "Irosun" && second_odu_right_odu === "Iwori") {
    odu_Right = odus[108];
}else if (second_odu_left_odu === "Irosun" && second_odu_right_odu === "Idi") {
    odu_Right = odus[109];
}else if (second_odu_left_odu === "Irosun" && second_odu_right_odu === "Obara") {
    odu_Right = odus[110];
}else if (second_odu_left_odu === "Irosun" && second_odu_right_odu === "Okonron") {
    odu_Right = odus[111];
}else if (second_odu_left_odu === "Irosun" && second_odu_right_odu === "Owanrin") {
    odu_Right = odus[112];
}else if (second_odu_left_odu === "Irosun" && second_odu_right_odu === "Ogunda") {
    odu_Right = odus[113];
}else if (second_odu_left_odu === "Irosun" && second_odu_right_odu === "Osa") {
    odu_Right = odus[114];
}else if (second_odu_left_odu === "Irosun" && second_odu_right_odu === "Etura") {
    odu_Right = odus[115];
}else if (second_odu_left_odu === "Irosun" && second_odu_right_odu === "Irete") {
    odu_Right = odus[116];
}else if (second_odu_left_odu === "Irosun" && second_odu_right_odu === "Eka") {
    odu_Right = odus[117];
}else if (second_odu_left_odu === "Irosun" && second_odu_right_odu === "Eturukpon") {
    odu_Right = odus[118];
}else if (second_odu_left_odu === "Irosun" && second_odu_right_odu === "Ose") {
    odu_Right = odus[119];
}else if (second_odu_left_odu === "Irosun" && second_odu_right_odu === "Ofun") {
    odu_Right = odus[120];
}else if (second_odu_left_odu === "Owanrin" && second_odu_right_odu === "Ogbe") {
    odu_Right = odus[121];
}else if (second_odu_left_odu === "Owanrin" && second_odu_right_odu === "Oyeku") {
    odu_Right = odus[122];
}else if (second_odu_left_odu === "Owanrin" && second_odu_right_odu === "Iwori") {
    odu_Right = odus[123];
}else if (second_odu_left_odu === "Owanrin" && second_odu_right_odu === "Idi") {
    odu_Right = odus[124];
}else if (second_odu_left_odu === "Owanrin" && second_odu_right_odu === "Obara") {
    odu_Right = odus[125];
}else if (second_odu_left_odu === "Owanrin" && second_odu_right_odu === "Okonron") {
    odu_Right = odus[126];
}else if (second_odu_left_odu === "Owanrin" && second_odu_right_odu === "Irosun") {
    odu_Right = odus[127];
}else if (second_odu_left_odu === "Owanrin" && second_odu_right_odu === "Ogunda") {
    odu_Right = odus[128];
}else if (second_odu_left_odu === "Owanrin" && second_odu_right_odu === "Osa") {
    odu_Right = odus[129];
}else if (second_odu_left_odu === "Owanrin" && second_odu_right_odu === "Etura") {
    odu_Right = odus[130];
}else if (second_odu_left_odu === "Owanrin" && second_odu_right_odu === "Irete") {
    odu_Right = odus[131];
}else if (second_odu_left_odu === "Owanrin" && second_odu_right_odu === "Eka") {
    odu_Right = odus[132];
}else if (second_odu_left_odu === "Owanrin" && second_odu_right_odu === "Eturukpon") {
    odu_Right = odus[133];
}else if (second_odu_left_odu === "Owanrin" && second_odu_right_odu === "Ose") {
    odu_Right = odus[134];
}else if (second_odu_left_odu === "Owanrin" && second_odu_right_odu === "Ofun") {
    odu_Right = odus[135];
}else if (second_odu_left_odu === "Ogunda" && second_odu_right_odu === "Ogbe") {
    odu_Right = odus[136];
}else if (second_odu_left_odu === "Ogunda" && second_odu_right_odu === "Oyeku") {
    odu_Right = odus[137];
}else if (second_odu_left_odu === "Ogunda" && second_odu_right_odu === "Iwori") {
    odu_Right = odus[138];
}else if (second_odu_left_odu === "Ogunda" && second_odu_right_odu === "Idi") {
    odu_Right = odus[139];
}else if (second_odu_left_odu === "Ogunda" && second_odu_right_odu === "Obara") {
    odu_Right = odus[140];
}else if (second_odu_left_odu === "Ogunda" && second_odu_right_odu === "Okonron") {
    odu_Right = odus[141];
}else if (second_odu_left_odu === "Ogunda" && second_odu_right_odu === "Irosun") {
    odu_Right = odus[142];
}else if (second_odu_left_odu === "Ogunda" && second_odu_right_odu === "Owanrin") {
    odu_Right = odus[143];
}else if (second_odu_left_odu === "Ogunda" && second_odu_right_odu === "Osa") {
    odu_Right = odus[144];
}else if (second_odu_left_odu === "Ogunda" && second_odu_right_odu === "Etura") {
    odu_Right = odus[145];
}else if (second_odu_left_odu === "Ogunda" && second_odu_right_odu === "Irete") {
    odu_Right = odus[146];
}else if (second_odu_left_odu === "Ogunda" && second_odu_right_odu === "Eka") {
    odu_Right = odus[147];
}else if (second_odu_left_odu === "Ogunda" && second_odu_right_odu === "Eturukpon") {
    odu_Right = odus[148];
}else if (second_odu_left_odu === "Ogunda" && second_odu_right_odu === "Ose") {
    odu_Right = odus[149];
}else if (second_odu_left_odu === "Ogunda" && second_odu_right_odu === "Ofun") {
    odu_Right = odus[150];
}else if (second_odu_left_odu === "Osa" && second_odu_right_odu === "Ogbe") {
    odu_Right = odus[151];
}else if (second_odu_left_odu === "Osa" && second_odu_right_odu === "Oyeku") {
    odu_Right = odus[152];
}else if (second_odu_left_odu === "Osa" && second_odu_right_odu === "Iwori") {
    odu_Right = odus[153];
}else if (second_odu_left_odu === "Osa" && second_odu_right_odu === "Idi") {
    odu_Right = odus[154];
}else if (second_odu_left_odu === "Osa" && second_odu_right_odu === "Obara") {
    odu_Right = odus[155];
}else if (second_odu_left_odu === "Osa" && second_odu_right_odu === "Okonron") {
    odu_Right = odus[156];
}else if (second_odu_left_odu === "Osa" && second_odu_right_odu === "Irosun") {
    odu_Right = odus[157];
}else if (second_odu_left_odu === "Osa" && second_odu_right_odu === "Owanrin") {
    odu_Right = odus[158];
}else if (second_odu_left_odu === "Osa" && second_odu_right_odu === "Ogunda") {
    odu_Right = odus[159];
}else if (second_odu_left_odu === "Osa" && second_odu_right_odu === "Etura") {
    odu_Right = odus[160];
}else if (second_odu_left_odu === "Osa" && second_odu_right_odu === "Irete") {
    odu_Right = odus[161];
}else if (second_odu_left_odu === "Osa" && second_odu_right_odu === "Eka") {
    odu_Right = odus[162];
}else if (second_odu_left_odu === "Osa" && second_odu_right_odu === "Eturukpon") {
    odu_Right = odus[163];
}else if (second_odu_left_odu === "Osa" && second_odu_right_odu === "Ose") {
    odu_Right = odus[164];
}else if (second_odu_left_odu === "Osa" && second_odu_right_odu === "Ofun") {
    odu_Right = odus[165];
}else if (second_odu_left_odu === "Etura" && second_odu_right_odu === "Ogbe") {
    odu_Right = odus[166];
}else if (second_odu_left_odu === "Etura" && second_odu_right_odu === "Oyeku") {
    odu_Right = odus[167];
}else if (second_odu_left_odu === "Etura" && second_odu_right_odu === "Iwori") {
    odu_Right = odus[168];
}else if (second_odu_left_odu === "Etura" && second_odu_right_odu === "Idi") {
    odu_Right = odus[169];
}else if (second_odu_left_odu === "Etura" && second_odu_right_odu === "Obara") {
    odu_Right = odus[170];
}else if (second_odu_left_odu === "Etura" && second_odu_right_odu === "Okonron") {
    odu_Right = odus[171];
}else if (second_odu_left_odu === "Etura" && second_odu_right_odu === "Irosun") {
    odu_Right = odus[172];
}else if (second_odu_left_odu === "Etura" && second_odu_right_odu === "Owanrin") {
    odu_Right = odus[1173];
}else if (second_odu_left_odu === "Etura" && second_odu_right_odu === "Ogunda") {
    odu_Right = odus[174];
}else if (second_odu_left_odu === "Etura" && second_odu_right_odu === "Osa") {
    odu_Right = odus[175];
}else if (second_odu_left_odu === "Etura" && second_odu_right_odu === "Irete") {
    odu_Right = odus[176];
}else if (second_odu_left_odu === "Etura" && second_odu_right_odu === "Eka") {
    odu_Right = odus[177];
}else if (second_odu_left_odu === "Etura" && second_odu_right_odu === "Eturukpon") {
    odu_Right = odus[178];
}else if (second_odu_left_odu === "Etura" && second_odu_right_odu === "Ose") {
    odu_Right = odus[179];
}else if (second_odu_left_odu === "Etura" && second_odu_right_odu === "Ofun") {
    odu_Right = odus[180];
}else if (second_odu_left_odu === "Irete" && second_odu_right_odu === "Ogbe") {
    odu_Right = odus[181];
}else if (second_odu_left_odu === "Irete" && second_odu_right_odu === "Oyeku") {
    odu_Right = odus[182];
}else if (second_odu_left_odu === "Irete" && second_odu_right_odu === "Iwori") {
    odu_Right = odus[183];
}else if (second_odu_left_odu === "Irete" && second_odu_right_odu === "Idi") {
    odu_Right = odus[184];
}else if (second_odu_left_odu === "Irete" && second_odu_right_odu === "Obara") {
    odu_Right = odus[185];
}else if (second_odu_left_odu === "Irete" && second_odu_right_odu === "Okonron") {
    odu_Right = odus[186];
}else if (second_odu_left_odu === "Irete" && second_odu_right_odu === "Irosun") {
    odu_Right = odus[187];
}else if (second_odu_left_odu === "Irete" && second_odu_right_odu === "Owanrin") {
    odu_Right = odus[188];
}else if (second_odu_left_odu === "Irete" && second_odu_right_odu === "Ogunda") {
    odu_Right = odus[189];
}else if (second_odu_left_odu === "Irete" && second_odu_right_odu === "Osa") {
    odu_Right = odus[190];
}else if (second_odu_left_odu === "Irete" && second_odu_right_odu === "Etura") {
    odu_Right = odus[191];
}else if (second_odu_left_odu === "Irete" && second_odu_right_odu === "Eka") {
    odu_Right = odus[192];
}else if (second_odu_left_odu === "Irete" && second_odu_right_odu === "Eturukpon") {
    odu_Right = odus[193];
}else if (second_odu_left_odu === "Irete" && second_odu_right_odu === "Ose") {
    odu_Right = odus[194];
}else if (second_odu_left_odu === "Irete" && second_odu_right_odu === "Ofun") {
    odu_Right = odus[195];
}else if (second_odu_left_odu === "Eka" && second_odu_right_odu === "Ogbe") {
    odu_Right = odus[196];
}else if (second_odu_left_odu === "Eka" && second_odu_right_odu === "Oyeku") {
    odu_Right = odus[197];
}else if (second_odu_left_odu === "Eka" && second_odu_right_odu === "Iwori") {
    odu_Right = odus[198];
}else if (second_odu_left_odu === "Eka" && second_odu_right_odu === "Idi") {
    odu_Right = odus[199];
}else if (second_odu_left_odu === "Eka" && second_odu_right_odu === "Obara") {
    odu_Right = odus[200];
}else if (second_odu_left_odu === "Eka" && second_odu_right_odu === "Okonron") {
    odu_Right = odus[201];
}else if (second_odu_left_odu === "Eka" && second_odu_right_odu === "Irosun") {
    odu_Right = odus[202];
}else if (second_odu_left_odu === "Eka" && second_odu_right_odu === "Owanrin") {
    odu_Right = odus[203];
}else if (second_odu_left_odu === "Eka" && second_odu_right_odu === "Ogunda") {
    odu_Right = odus[204];
}else if (second_odu_left_odu === "Eka" && second_odu_right_odu === "Osa") {
    odu_Right = odus[205];
}else if (second_odu_left_odu === "Eka" && second_odu_right_odu === "Etura") {
    odu_Right = odus[206];
}else if (second_odu_left_odu === "Eka" && second_odu_right_odu === "Irete") {
    odu_Right = odus[207];
}else if (second_odu_left_odu === "Eka" && second_odu_right_odu === "Eturukpon") {
    odu_Right = odus[208];
}else if (second_odu_left_odu === "Eka" && second_odu_right_odu === "Ose") {
    odu_Right = odus[209];
}else if (second_odu_left_odu === "Eka" && second_odu_right_odu === "Ofun") {
    odu_Right = odus[210];
}else if (second_odu_left_odu === "Eturukpon" && second_odu_right_odu === "Ogbe") {
    odu_Right = odus[211];
}else if (second_odu_left_odu === "Eturukpon" && second_odu_right_odu === "Oyeku") {
    odu_Right = odus[212];
}else if (second_odu_left_odu === "Eturukpon" && second_odu_right_odu === "Iwori") {
    odu_Right = odus[213];
}else if (second_odu_left_odu === "Eturukpon" && second_odu_right_odu === "Idi") {
    odu_Right = odus[214];
}else if (second_odu_left_odu === "Eturukpon" && second_odu_right_odu === "Obara") {
    odu_Right = odus[215];
}else if (second_odu_left_odu === "Eturukpon" && second_odu_right_odu === "Okonron") {
    odu_Right = odus[216];
}else if (second_odu_left_odu === "Eturukpon" && second_odu_right_odu === "Irosun") {
    odu_Right = odus[217];
}else if (second_odu_left_odu === "Eturukpon" && second_odu_right_odu === "Owanrin") {
    odu_Right = odus[218];
}else if (second_odu_left_odu === "Eturukpon" && second_odu_right_odu === "Ogunda") {
    odu_Right = odus[219];
}else if (second_odu_left_odu === "Eturukpon" && second_odu_right_odu === "Osa") {
    odu_Right = odus[220];
}else if (second_odu_left_odu === "Eturukpon" && second_odu_right_odu === "Etura") {
    odu_Right = odus[221];
}else if (second_odu_left_odu === "Eturukpon" && second_odu_right_odu === "Irete") {
    odu_Right = odus[222];
}else if (second_odu_left_odu === "Eturukpon" && second_odu_right_odu === "Eka") {
    odu_Right = odus[223];
}else if (second_odu_left_odu === "Eturukpon" && second_odu_right_odu === "Ose") {
    odu_Right = odus[224];
}else if (second_odu_left_odu === "Eturukpon" && second_odu_right_odu === "Ofun") {
    odu_Right = odus[225];
}else if (second_odu_left_odu === "Ose" && second_odu_right_odu === "Ogbe") {
    odu_Right = odus[226];
}else if (second_odu_left_odu === "Ose" && second_odu_right_odu === "Oyeku") {
    odu_Right = odus[227];
}else if (second_odu_left_odu === "Ose" && second_odu_right_odu === "Iwori") {
    odu_Right = odus[228];
}else if (second_odu_left_odu === "Ose" && second_odu_right_odu === "Idi") {
    odu_Right = odus[229];
}else if (second_odu_left_odu === "Ose" && second_odu_right_odu === "Obara") {
    odu_Right = odus[230];
}else if (second_odu_left_odu === "Ose" && second_odu_right_odu === "Okonron") {
    odu_Right = odus[231];
}else if (second_odu_left_odu === "Ose" && second_odu_right_odu === "Irosun") {
    odu_Right = odus[232];
}else if (second_odu_left_odu === "Ose" && second_odu_right_odu === "Owanrin") {
    odu_Right = odus[233];
}else if (second_odu_left_odu === "Ose" && second_odu_right_odu === "Ogunda") {
    odu_Right = odus[234];
}else if (second_odu_left_odu === "Ose" && second_odu_right_odu === "Osa") {
    odu_Right = odus[235];
}else if (second_odu_left_odu === "Ose" && second_odu_right_odu === "Etura") {
    odu_Right = odus[236];
}else if (second_odu_left_odu === "Ose" && second_odu_right_odu === "Irete") {
    odu_Right = odus[237];
}else if (second_odu_left_odu === "Ose" && second_odu_right_odu === "Eka") {
    odu_Right = odus[238];
}else if (second_odu_left_odu === "Ose" && second_odu_right_odu === "Eturukpon") {
    odu_Right = odus[239];
}else if (second_odu_left_odu === "Ose" && second_odu_right_odu === "Ofun") {
    odu_Right = odus[240];
}else if (second_odu_left_odu === "Ofun" && second_odu_right_odu === "Ogbe") {
    odu_Right = odus[241];
}else if (second_odu_left_odu === "Ofun" && second_odu_right_odu === "Oyeku") {
    odu_Right = odus[242];
}else if (second_odu_left_odu === "Ofun" && second_odu_right_odu === "Iwori") {
    odu_Right = odus[243];
}else if (second_odu_left_odu === "Ofun" && second_odu_right_odu === "Idi") {
    odu_Right = odus[244];
}else if (second_odu_left_odu === "Ofun" && second_odu_right_odu === "Obara") {
    odu_Right = odus[245];
}else if (second_odu_left_odu === "Ofun" && second_odu_right_odu === "Okonron") {
    odu_Right = odus[246];
}else if (second_odu_left_odu === "Ofun" && second_odu_right_odu === "Irosun") {
    odu_Right = odus[247];
}else if (second_odu_left_odu === "Ofun" && second_odu_right_odu === "Owanrin") {
    odu_Right = odus[248];
}else if (second_odu_left_odu === "Ofun" && second_odu_right_odu === "Ogunda") {
    odu_Right = odus[249];
}else if (second_odu_left_odu === "Ofun" && second_odu_right_odu === "Osa") {
    odu_Right = odus[250];
}else if (second_odu_left_odu === "Ofun" && second_odu_right_odu === "Etura") {
    odu_Right = odus[251];
}else if (second_odu_left_odu === "Ofun" && second_odu_right_odu === "Irete") {
    odu_Right = odus[252];
}else if (second_odu_left_odu === "Ofun" && second_odu_right_odu === "Eka") {
    odu_Right = odus[253];
}else if (second_odu_left_odu === "Ofun" && second_odu_right_odu === "Eturukpon") {
    odu_Right = odus[254];
}else if (second_odu_left_odu === "Ofun" && second_odu_right_odu === "Ose") {
    odu_Right = odus[255];
}

//End of if cycle for assign value for var First Right Odu



document.getElementById("oduToShow-leftSide").innerHTML = odu_Left;
document.getElementById("oduToShow-rightSide").innerHTML = odu_Right;
console.log(odu_Left);
console.log(odu_Right);
}// this bracket end the function "double_opon_touch_func()"

   

//end double odu opon