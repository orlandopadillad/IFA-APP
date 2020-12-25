function createOponIfaWithOdu(){
    let opon_Left_side = document.getElementById("Left-Side");
    let opon_Right_side = document.getElementById("Right-Side");
    var firstOdu = document.getElementById("myInput").value;
    //Left Side
    let opon_Ifa_Left_Side_Ogbe_Meji = "images\\Pictures\\Odus\\Left Half\\opon ifa - ogbe - left half.png; 
    let opon_Ifa_Left_Side_Oyeku_Meji = "images\\Pictures\\Odus\\Left Half\\opon ifa - oyeku - left half.png";
    let opon_Ifa_Left_Side_Iwori_Meji = "images\\Pictures\\Odus\\Left Half\\opon ifa - iwori - left half.png";
    let opon_Ifa_Left_Side_Idi_Meji = "images\\Pictures\\Odus\\Left Half\\opon ifa - idi - left half.png";
    let opon_Ifa_Left_Side_Obara_Meji = "images\\Pictures\\Odus\\Left Half\\opon ifa - obara - left half.png";
    let opon_Ifa_Left_Side_Okonron_Meji = "images\\Pictures\\Odus\\Left Half\\opon ifa - OKONRON - left half.png";
    let opon_Ifa_Left_Side_Irosun_Meji = "images\\Pictures\\Odus\\Left Half\\opon ifa - irosun - left half.png";
    let opon_Ifa_Left_Side_Owanrin_Meji = "images\\Pictures\\Odus\\Left Half\\opon ifa - owanrin - left half.png";
    let opon_Ifa_Left_Side_Ogunda_Meji = "images\\Pictures\\Odus\\Left Half\\opon ifa - ogunda- left half.png";
    let opon_Ifa_Left_Side_Osa_Meji = "images\\Pictures\\Odus\\Left Half\\opon ifa - osa - left half.png";
    let opon_Ifa_Left_Side_Etura_Meji = "images\\Pictures\\Odus\\Left Half\\opon ifa - etura - left half.png" ;
    let opon_Ifa_Left_Side_Irete_Meji = "images\\Pictures\\Odus\\Left Half\\opon ifa - irete - left half.png";
    let opon_Ifa_Left_Side_Eka_Meji =  "images\\Pictures\\Odus\\Left Half\\opon ifa - eka - left half.png";
    let opon_Ifa_Left_Side_Eturukpon_Meji = "images\\Pictures\\Odus\\Left Half\\opon ifa - eturukpon - left half.png";
    let opon_Ifa_Left_Side_Ose_Meji = "images\\Pictures\\Odus\\Left Half\\opon ifa - ose - left half.png";
    let opon_Ifa_Left_Side_Ofun_Meji = "images\\Pictures\\Odus\\Left Half\\opon ifa - ofun - left half.png";
    //Right side
    let opon_Ifa_Right_Side_Ogbe_Meji = "images\\Pictures\\Odus\\Right Half\\opon ifa - Ogbe - right half.png"; 
    let opon_Ifa_Right_Side_Oyeku_Meji = "images\\Pictures\\Odus\\Right Half\\opon ifa - oyeku - right half.png";
    let opon_Ifa_Right_Side_Iwori_Meji = "images\\Pictures\\Odus\\Right Half\\opon ifa - iwori - right half.png";
    let opon_Ifa_Right_Side_Idi_Meji = "images\\Pictures\\Odus\\Right Half\\opon ifa - idi- right half.png";
    let opon_Ifa_Right_Side_Obara_Meji = "images\\Pictures\\Odus\\Right Half\\opon ifa - obara - right half.png" ;
    let opon_Ifa_Right_Side_Okonron_Meji = "images\\Pictures\\Odus\\Right Half\\opon ifa - okonron - right half.png" ;
    let opon_Ifa_Right_Side_Irosun_Meji = "images\\Pictures\\Odus\\Right Half\\opon ifa - irosun - right half.png";
    let opon_Ifa_Right_Side_Owanrin_Meji = "images\\Pictures\\Odus\\Right Half\\opon ifa - owanrin - right half.png";
    let opon_Ifa_Right_Side_Ogunda_Meji = "images\\Pictures\\Odus\\Right Half\\opon ifa - ogunda - right half.png";
    let opon_Ifa_Right_Side_Osa_Meji = "images\\Pictures\\Odus\\Right Half\\opon ifa - osa - right half.png";
    let opon_Ifa_Right_Side_Etura_Meji = "images\\Pictures\\Odus\\Right Half\\opon ifa - ETURA - right half.png";
    let opon_Ifa_Right_Side_Irete_Meji = "images\\Pictures\\Odus\\Right Half\\opon ifa - irete - right half.png";
    let opon_Ifa_Right_Side_Eka_Meji =  "images\\Pictures\\Odus\\Right Half\\opon ifa - eka - right half.png";
    let opon_Ifa_Right_Side_Eturukpon_Meji = "images\\Pictures\\Odus\\Right Half\\opon ifa - eturukpon - right half.png";
    let opon_Ifa_Right_Side_Ose_Meji = "images\\Pictures\\Odus\\Right Half\\opon ifa - ose - right half.png";
    let opon_Ifa_Right_Side_Ofun_Meji = "images\\Pictures\\Odus\\Right Half\\opon ifa - ofun - right half.png";

switch (firstOdu) {
    case "Eji-Ogbe":
        opon_Left_side.src = opon_Ifa_Left_Side_Ogbe_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ogbe_Meji;
    break; 

    case "Oyeku-Meji":
        opon_Left_side.src = opon_Ifa_Left_Side_Oyeku_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Oyeku_Meji;
    break;

    case "iwori-Meji":
        opon_Left_side.src = opon_Ifa_Left_Side_Iwori_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Iwori_Meji;
    break;

       
    case "Idi-Meji":
        opon_Left_side.src = opon_Ifa_Left_Side_Idi_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Idi_Meji;
    break;
           

    case "Obara-Meji":
        opon_Left_side.src = opon_Ifa_Left_Side_Obara_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Obara_Meji;
    break;
           

    case "Okonron-Meji":
        opon_Left_side.src = opon_Ifa_Left_Side_Okonron_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Okonron_Meji;
    break;
           

    case "Irosun-Meji":
        opon_Left_side.src = opon_Ifa_Left_Side_Irosun_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Irosun_Meji;
    break;
           

    case "Owanrin-Meji":
        opon_Left_side.src = opon_Ifa_Left_Side_Owanrin_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Owanrin_Meji;
    break;
           

    case "Ogunda-Meji":
        opon_Left_side.src = opon_Ifa_Left_Side_Ogunda_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ogunda_Meji;
    break;
           

    case "Osa-Meji":
        opon_Left_side.src = opon_Ifa_Left_Side_Osa_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Osa_Meji;
    break;
           
        
    case "Etura-Meji":
        opon_Left_side.src = opon_Ifa_Left_Side_Etura_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Etura_Meji;
    break;
           

    case "Irete-Meji":
        opon_Left_side.src = opon_Ifa_Left_Side_Irete_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Irete_Meji;
    break;
           

    case "Eka-Meji":
        opon_Left_side.src = opon_Ifa_Left_Side_Eka_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Eka_Meji;
    break;
           

    case "Eturukpon-Meji":
        opon_Left_side.src = opon_Ifa_Left_Side_Eturukpon_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Eturukpon_Meji;
    break;
           

    case "Ose-Meji":
        opon_Left_side.src = opon_Ifa_Left_Side_Ose_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ose_Meji;
    break;
           

    case "Ofun-Meji":
        opon_Left_side.src = opon_Ifa_Left_Side_Ofun_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ofun_Meji;
    break;
           

    case "Ogbe-Oyekun":
        opon_Left_side.src = opon_Ifa_Left_Side_Oyeku_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ogbe_Meji;
    break;
           

    case "Ogbe-Iwori":
        opon_Left_side.src = opon_Ifa_Left_Side_Iwori_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ogbe_Meji;
    break;
           

    case "Ogbe-Idi":
        opon_Left_side.src = opon_Ifa_Left_Side_Idi_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ogbe_Meji;
    break;
           

    case "Ogbe-Obara":
        opon_Left_side.src = opon_Ifa_Left_Side_Obara_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ogbe_Meji;
    break;
           

    case "Ogbe-Okonron":
        opon_Left_side.src = opon_Ifa_Left_Side_Okonron_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ogbe_Meji;
    break;
           

    case "Ogbe-Irosun":
        opon_Left_side.src = opon_Ifa_Left_Side_Irosun_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ogbe_Meji;
    break;
           

    case "Ogbe-Owanrin":
        opon_Left_side.src = opon_Ifa_Left_Side_Owanrin_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ogbe_Meji;
    break;
           
      
    case "Ogbe-Ogunda":
        opon_Left_side.src = opon_Ifa_Left_Side_Ogunda_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ogbe_Meji;
    break;
           

    case "Ogbe-Osa":
        opon_Left_side.src = opon_Ifa_Left_Side_Osa_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ogbe_Meji;
    break;
           

    case "Ogbe-Etura":
        opon_Left_side.src = opon_Ifa_Left_Side_Etura_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ogbe_Meji;
    break;
           

    case "Ogbe-Irete":
        opon_Left_side.src = opon_Ifa_Left_Side_Irete_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ogbe_Meji;
    break;
           

    case "Ogbe-Eka":
        opon_Left_side.src = opon_Ifa_Left_Side_Eka_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ogbe_Meji;
    break;
           

    case "Ogbe-Eturukpon":
        opon_Left_side.src = opon_Ifa_Left_Side_Eturukpon_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ogbe_Meji;
    break;
           

    case "Ogbe-Ose":
        opon_Left_side.src = opon_Ifa_Left_Side_Ose_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ogbe_Meji;
    break;
           
    
    case "Ogbe-Ofun":
        opon_Left_side.src = opon_Ifa_Left_Side_Ofun_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ogbe_Meji;
    break;
           

    case "Oyeku-Lo-Ogbe":
        opon_Left_side.src = opon_Ifa_Left_Side_Ogbe_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Oyeku_Meji;
    break;
           

    case "Oyeku-Bi-Iwori":
        opon_Left_side.src = opon_Ifa_Left_Side_Iwori_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Oyeku_Meji;
    break;
           

    case "Oyeku-Di":
        opon_Left_side.src = opon_Ifa_Left_Side_Idi_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Oyeku_Meji;
    break;
           

    case "Oyeku-Obara":
        opon_Left_side.src = opon_Ifa_Left_Side_Obara_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Oyeku_Meji;
    break;
       

    case "Oyeku-Okonron":
        opon_Left_side.src = opon_Ifa_Left_Side_Okonron_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Oyeku_Meji;
    break;
           

    case "Oyeku-Irosun":
        opon_Left_side.src = opon_Ifa_Left_Side_Irosun_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Oyeku_Meji;
    break;
           

    case "Oyeku-Owanrin":
        opon_Left_side.src = opon_Ifa_Left_Side_Owanrin_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Oyeku_Meji;
    break;
           

    case "Oyeku-Ogunda":
        opon_Left_side.src = opon_Ifa_Left_Side_Ogunda_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Oyeku_Meji;
    break;


    case "Oyeku-Osa":
        opon_Left_side.src = opon_Ifa_Left_Side_Osa_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Oyeku_Meji;
    break;
           

    case "Oyeku-Etura":
        opon_Left_side.src = opon_Ifa_Left_Side_Etura_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Oyeku_Meji;
    break;
           

    case "Oyeku-Irete":
        opon_Left_side.src = opon_Ifa_Left_Side_Irete_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Oyeku_Meji;
    break;
           
      
    case "Oyeku-Eturukpon":
        opon_Left_side.src = opon_Ifa_Left_Side_Eturukpon_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Oyeku_Meji;
    break;
           

    case "Oyeku-Be-Eka":
        opon_Left_side.src = opon_Ifa_Left_Side_Eka_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Oyeku_Meji;
    break;
           

    case "Oyeku-Ose":
        opon_Left_side.src = opon_Ifa_Left_Side_Ose_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Oyeku_Meji;
    break;
           

    case "Oyeku-Ofun":
        opon_Left_side.src = opon_Ifa_Left_Side_Ofun_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Oyeku_Meji;
    break;
           

    case "Iwori-Bo-Ogbe":
        opon_Left_side.src = opon_Ifa_Left_Side_Ogbe_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Iwori_Meji;
    break;
           

    case "Iwori-Oyeku":
        opon_Left_side.src = opon_Ifa_Left_Side_Oyeku_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Iwori_Meji;
    break;
           
       
    case "Iwori-Idi":
        opon_Left_side.src = opon_Ifa_Left_Side_Idi_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Iwori_Meji;
    break;
           

    case "Iwori-Obara":
        opon_Left_side.src = opon_Ifa_Left_Side_Obara_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Iwori_Meji;
    break;
           

    case "Iwori-Okonron":
        opon_Left_side.src = opon_Ifa_Left_Side_Okonron_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Iwori_Meji;
    break;
           

    case "Iwori-Irosun":
        opon_Left_side.src = opon_Ifa_Left_Side_Irosun_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Iwori_Meji;
    break;
           

    case "Iwori-Owanrin":
        opon_Left_side.src = opon_Ifa_Left_Side_Owanrin_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Iwori_Meji;
    break;
           

    case "Iwori-Ogunda":
        opon_Left_side.src = opon_Ifa_Left_Side_Ogunda_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Iwori_Meji;
    break;
           

    case "Iwori-Osa":
        opon_Left_side.src = opon_Ifa_Left_Side_Osa_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Iwori_Meji;
    break;
           
       
    case "Iwori-Etura":
        opon_Left_side.src = opon_Ifa_Left_Side_Etura_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Iwori_Meji;
    break;
           

    case "Iwori-Irete":
        opon_Left_side.src = opon_Ifa_Left_Side_Irete_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Iwori_Meji;
    break;
           

    case "Iwori-Eka":
        opon_Left_side.src = opon_Ifa_Left_Side_Eka_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Iwori_Meji;
    break;
           

    case "Iwori-Eturukpon":
        opon_Left_side.src = opon_Ifa_Left_Side_Eturukpon_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Iwori_Meji;
    break;
           

    case "Iwori-Ose":
        opon_Left_side.src = opon_Ifa_Left_Side_Ose_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Iwori_Meji;
    break;
           

    case "Iwori-Ofun":
        opon_Left_side.src = opon_Ifa_Left_Side_Ofun_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Iwori_Meji;
    break;
           

    case "Idi-Ogbe":
        opon_Left_side.src = opon_Ifa_Left_Side_Ogbe_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Idi_Meji;
    break;


    case "Idi-Oyeku":
        opon_Left_side.src = opon_Ifa_Left_Side_Oyeku_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Idi_Meji;
    break;
           

    case "Idi-Iwori":
        opon_Left_side.src = opon_Ifa_Left_Side_Iwori_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Idi_Meji;
    break;
           

    case "Idi-Obara":
        opon_Left_side.src = opon_Ifa_Left_Side_Obara_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Idi_Meji;
    break;
           

    case "Idi-Okonron":
        opon_Left_side.src = opon_Ifa_Left_Side_Okonron_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Idi_Meji;
    break;
           

    case "Idi-Irosun":
        opon_Left_side.src = opon_Ifa_Left_Side_Irosun_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Idi_Meji;
    break;
           

    case "Idi-Owanrin":
        opon_Left_side.src = opon_Ifa_Left_Side_Owanrin_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Idi_Meji;
    break;
           

    case "Idi-Ogunda":
        opon_Left_side.src = opon_Ifa_Left_Side_Ogunda_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Idi_Meji;
    break;
       

    case "Idi-Osa":
        opon_Left_side.src = opon_Ifa_Left_Side_Osa_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Idi_Meji;
    break;
           

    case "Idi-Etura":
        opon_Left_side.src = opon_Ifa_Left_Side_Etura_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Idi_Meji;
    break;
           

    case "Idi-Irete":
        opon_Left_side.src = opon_Ifa_Left_Side_Irete_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Idi_Meji;
    break;
           

    case "Idi-Eturukpon":
        opon_Left_side.src = opon_Ifa_Left_Side_Eturukpon_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Idi_Meji;
    break;
           

    case "Idi-Eka":
        opon_Left_side.src = opon_Ifa_Left_Side_Eka_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Idi_Meji;
    break;
           

    case "Idi-Ose":
        opon_Left_side.src = opon_Ifa_Left_Side_Ose_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Idi_Meji;
    break;
           

    case "Idi-Ofun":
        opon_Left_side.src = opon_Ifa_Left_Side_Ofun_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Idi_Meji;
    break;
           
      
    case "Obara-Ogbe":
        opon_Left_side.src = opon_Ifa_Left_Side_Ogbe_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Obara_Meji;
    break;
           

    case "Obara-Oyeku":
        opon_Left_side.src = opon_Ifa_Left_Side_Oyeku_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Obara_Meji;
    break;
           

    case "Obara-Iwori":
        opon_Left_side.src = opon_Ifa_Left_Side_Iwori_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Obara_Meji;
    break;
           

    case "Obara-Idi":
        opon_Left_side.src = opon_Ifa_Left_Side_Idi_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Obara_Meji;
    break;
           

    case "Obara-Okonron":
        opon_Left_side.src = opon_Ifa_Left_Side_Okonron_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Obara_Meji;
    break;
           

    case "Obara-Irosun":
        opon_Left_side.src = opon_Ifa_Left_Side_Irosun_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Obara_Meji;
    break;
           

    case "Obara-Owanrin":
        opon_Left_side.src = opon_Ifa_Left_Side_Owanrin_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Obara_Meji;
    break;
           

    case "Obara-Ogunda":
        opon_Left_side.src = opon_Ifa_Left_Side_Ogunda_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Obara_Meji;
    break;
           

    case "Obara-Osa":
        opon_Left_side.src = opon_Ifa_Left_Side_Osa_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Obara_Meji;
    break;
           

    case "Obara-Etura":
        opon_Left_side.src = opon_Ifa_Left_Side_Etura_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Obara_Meji;
    break;
           

    case "Obara-Irete":
        opon_Left_side.src = opon_Ifa_Left_Side_Irete_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Obara_Meji;
    break;
           

    case "Obara-Eka":
        opon_Left_side.src = opon_Ifa_Left_Side_Eka_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Obara_Meji;
    break;
           
    
    case "Obara-Eturukpon":
        opon_Left_side.src = opon_Ifa_Left_Side_Eturukpon_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Obara_Meji;
    break;
           

    case "Obara-Ose":
        opon_Left_side.src = opon_Ifa_Left_Side_Ose_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Obara_Meji;
    break;
           

    case "Obara-Ofun":
        opon_Left_side.src = opon_Ifa_Left_Side_Ofun_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Obara_Meji;
    break;
           

    case "Okonron-Ogbe":
        opon_Left_side.src = opon_Ifa_Left_Side_Ogbe_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Okonron_Meji;
    break;
           

    case "Okonron-Oyeku":
        opon_Left_side.src = opon_Ifa_Left_Side_Oyeku_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Okonron_Meji;
    break;
           

    case "Okonron-Iwori":
        opon_Left_side.src = opon_Ifa_Left_Side_Iwori_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Okonron_Meji;
    break;
           
           
    case "Okonron-Idi":
        opon_Left_side.src = opon_Ifa_Left_Side_Idi_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Okonron_Meji;
    break;
           

    case "Okonron-Obara":
        opon_Left_side.src = opon_Ifa_Left_Side_Obara_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Okonron_Meji;
    break;
           

    case "Okonron-Irosun":
        opon_Left_side.src = opon_Ifa_Left_Side_Irosun_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Okonron_Meji;
    break;
           

    case "Okonron-Owanrin":
        opon_Left_side.src = opon_Ifa_Left_Side_Owanrin_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Okonron_Meji;
    break;
           

    case "Okonron-Ogunda":
        opon_Left_side.src = opon_Ifa_Left_Side_Ogunda_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Okonron_Meji;
    break;
           

    case "Okonron-Osa":
        opon_Left_side.src = opon_Ifa_Left_Side_Osa_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Okonron_Meji;
    break;
           

    case "Okonron-Etura":
        opon_Left_side.src = opon_Ifa_Left_Side_Etura_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Okonron_Meji;
    break;
           

    case "Okonron-Irete":
        opon_Left_side.src = opon_Ifa_Left_Side_Irete_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Okonron_Meji;
    break;
           

    case "Okonron-Eka":
        opon_Left_side.src = opon_Ifa_Left_Side_Eka_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Okonron_Meji;
    break;
           

    case "Okonron-Eturukpon":
        opon_Left_side.src = opon_Ifa_Left_Side_Eturukpon_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Okonron_Meji;
    break;
           

    case "Okonron-Ose":
        opon_Left_side.src = opon_Ifa_Left_Side_Ose_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Okonron_Meji;
    break;
           

    case "Okonron-Ofun":
        opon_Left_side.src = opon_Ifa_Left_Side_Ofun_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Okonron_Meji;
    break;
           

    case "Irosun-Ogbe":
        opon_Left_side.src = opon_Ifa_Left_Side_Ogbe_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Irosun_Meji;
    break;
           

    case "Irosun-Oyeku":
        opon_Left_side.src = opon_Ifa_Left_Side_Oyeku_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Irosun_Meji;
    break;
           

    case "Irosun-Iwori":
        opon_Left_side.src = opon_Ifa_Left_Side_Iwori_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Irosun_Meji;
    break;
           

    case "Irosun-Idi":
        opon_Left_side.src = opon_Ifa_Left_Side_Idi_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Irosun_Meji;
    break;
           

    case "Irosun-Obara":
        opon_Left_side.src = opon_Ifa_Left_Side_Obara_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Irosun_Meji;
    break;
           

    case "Irosun-Okonron":
        opon_Left_side.src = opon_Ifa_Left_Side_Okonron_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Irosun_Meji;
    break;
           

    case "Irosun-Owanrin":
        opon_Left_side.src = opon_Ifa_Left_Side_Owanrin_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Irosun_Meji;
    break;
           

    case "Irosun-Ogunda":
        opon_Left_side.src = opon_Ifa_Left_Side_Ogunda_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Irosun_Meji;
    break;
           

    case "Irosun-Osa":
        opon_Left_side.src = opon_Ifa_Left_Side_Osa_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Irosun_Meji;
    break;
           

    case "Irosun-Etura":
        opon_Left_side.src = opon_Ifa_Left_Side_Etura_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Irosun_Meji;
    break;
           

    case "Irosun-Irete":
        opon_Left_side.src = opon_Ifa_Left_Side_Irete_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Irosun_Meji;
    break;
           

    case "Irosun-Eka":
        opon_Left_side.src = opon_Ifa_Left_Side_Eka_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Irosun_Meji;
    break;
           

    case "Irosun-Eturukpon":
        opon_Left_side.src = opon_Ifa_Left_Side_Eturukpon_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Irosun_Meji;
    break;
           

    case "Irosun-Ose":
        opon_Left_side.src = opon_Ifa_Left_Side_Ose_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Irosun_Meji;
    break;
           

    case "Irosun-Ofun":
        opon_Left_side.src = opon_Ifa_Left_Side_Ofun_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Irosun_Meji;
    break;
           

    case "Owanrin-So-Ogbe":
        opon_Left_side.src = opon_Ifa_Left_Side_Ogbe_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Owanrin_Meji;
    break;
           

    case "Owanrin-Oyeku":
        opon_Left_side.src = opon_Ifa_Left_Side_Oyeku_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Owanrin_Meji;
    break;
           

    case "Owanrin-Iwori":
        opon_Left_side.src = opon_Ifa_Left_Side_Iwori_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Owanrin_Meji;
    break;
           

    case "Owanrin-Idi":
        opon_Left_side.src = opon_Ifa_Left_Side_Idi_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Owanrin_Meji;
    break;
           

    case "Owanrin-Obara":
        opon_Left_side.src = opon_Ifa_Left_Side_Obara_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Owanrin_Meji;
    break;
           

    case "Owanrin-Okonron":
        opon_Left_side.src = opon_Ifa_Left_Side_Okonron_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Owanrin_Meji;
    break;
           

    case "Owanrin-Irosun":
        opon_Left_side.src = opon_Ifa_Left_Side_Irosun_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Owanrin_Meji;
    break;
           

    case "Owanrin-Ogunda":
        opon_Left_side.src = opon_Ifa_Left_Side_Ogunda_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Owanrin_Meji;
    break;
           

    case "Owanrin-Osa":
        opon_Left_side.src = opon_Ifa_Left_Side_Osa_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Owanrin_Meji;
    break;
           

    case "Owanrin-Etura":
        opon_Left_side.src = opon_Ifa_Left_Side_Etura_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Owanrin_Meji;
    break;
           

    case "Owanrin-Irete":
        opon_Left_side.src = opon_Ifa_Left_Side_Irete_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Owanrin_Meji;
    break;
           

    case "Owanrin-Eka":
        opon_Left_side.src = opon_Ifa_Left_Side_Eka_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Owanrin_Meji;
    break;
           

    case "Owanrin-Eturukpon":
        opon_Left_side.src = opon_Ifa_Left_Side_Eturukpon_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Owanrin_Meji;
    break;
           

    case "Owanrin-Ose":
        opon_Left_side.src = opon_Ifa_Left_Side_Ose_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Owanrin_Meji;
    break;
           

    case "Owanrin-Ofun":
        opon_Left_side.src = opon_Ifa_Left_Side_Ofun_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Owanrin_Meji;
    break;
           

    case "Ogunda-Ogbe":
        opon_Left_side.src = opon_Ifa_Left_Side_Ogbe_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ogunda_Meji;;
    break;
           

    case "Ogunda-Oyeku":
        opon_Left_side.src = opon_Ifa_Left_Side_Oyeku_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ogunda_Meji;
    break;
           

    case "Ogunda-Iwori":
        opon_Left_side.src = opon_Ifa_Left_Side_Iwori_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ogunda_Meji;
    break;
           

    case "Ogunda-Idi":
        opon_Left_side.src = opon_Ifa_Left_Side_Idi_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ogunda_Meji;
    break;
           

    case "Ogunda-Obara":
        opon_Left_side.src = opon_Ifa_Left_Side_Obara_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ogunda_Meji;
    break;
           

    case "Ogunda-Okonron":
        opon_Left_side.src = opon_Ifa_Left_Side_Okonron_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ogunda_Meji;
    break;
           

    case "Ogunda-Irosun":
        opon_Left_side.src = opon_Ifa_Left_Side_Irosun_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ogunda_Meji;
    break;
           

    case "Ogunda-Owanrin":
        opon_Left_side.src = opon_Ifa_Left_Side_Owanrin_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ogunda_Meji;
    break;
           

    case "Ogunda-Osa":
        opon_Left_side.src = opon_Ifa_Left_Side_Osa_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ogunda_Meji;
    break;
           

    case "Ogunda-Etura":
        opon_Left_side.src = opon_Ifa_Left_Side_Etura_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ogunda_Meji;
    break;
           

    case "Ogunda-Irete":
        opon_Left_side.src = opon_Ifa_Left_Side_Irete_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ogunda_Meji;
    break;
           

    case "Ogunda-Eka":
        opon_Left_side.src = opon_Ifa_Left_Side_Eka_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ogunda_Meji;
    break;
           

    case "Ogunda-Eturukpon":
        opon_Left_side.src = opon_Ifa_Left_Side_Eturukpon_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ogunda_Meji;
    break;
           

    case "Ogunda-Ose":
        opon_Left_side.src = opon_Ifa_Left_Side_Ose_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ogunda_Meji;
    break;
           

    case "Ogunda-Ofun":
        opon_Left_side.src = opon_Ifa_Left_Side_Ofun_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ogunda_Meji;
    break;
           

    case "Osa-Ogbe":
        opon_Left_side.src = opon_Ifa_Left_Side_Ogbe_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Osa_Meji;
    break;
           

    case "Osa-Oyeku":
        opon_Left_side.src = opon_Ifa_Left_Side_Oyeku_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Osa_Meji;
    break;
           

    case "Osa-Iwori ":
        opon_Left_side.src = opon_Ifa_Left_Side_Iwori_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Osa_Meji;
    break;
           

    case "Osa-Idi":
        opon_Left_side.src = opon_Ifa_Left_Side_Idi_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Osa_Meji;
    break;
           

    case "Osa-Obara":
        opon_Left_side.src = opon_Ifa_Left_Side_Obara_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Osa_Meji;
    break;
           

    case "Osa-Okonron":
        opon_Left_side.src = opon_Ifa_Left_Side_Okonron_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Osa_Meji;
    break;
           

    case "Osa-Irosun":
        opon_Left_side.src = opon_Ifa_Left_Side_Irosun_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Osa_Meji;
    break;
           

    case "Osa-Owanrin":
        opon_Left_side.src = opon_Ifa_Left_Side_Owanrin_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Osa_Meji;
    break;
           

    case "Osa-Ogunda":
        opon_Left_side.src = opon_Ifa_Left_Side_Ogunda_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Osa_Meji;
    break;
           

    case "Osa-Etura":
        opon_Left_side.src = opon_Ifa_Left_Side_Etura_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Osa_Meji;
    break;
           

    case "Osa-Irete":
        opon_Left_side.src = opon_Ifa_Left_Side_Irete_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Osa_Meji;
    break;
           

    case "Osa-Eka":
        opon_Left_side.src = opon_Ifa_Left_Side_Eka_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Osa_Meji;
    break;
           

    case "Osa-Eturukpon":
        opon_Left_side.src = opon_Ifa_Left_Side_Eturukpon_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Osa_Meji;
    break;
           

    case "Osa-Ose":
        opon_Left_side.src = opon_Ifa_Left_Side_Ose_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Osa_Meji;
    break;


    case "Osa-Ofun":
        opon_Left_side.src = opon_Ifa_Left_Side_Ofun_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Osa_Meji;
    break;
           

    case "Etura-Ogbe":
        opon_Left_side.src = opon_Ifa_Left_Side_Ogbe_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Etura_Meji;
    break;
           

    case "Etura-Oyeku":
        opon_Left_side.src = opon_Ifa_Left_Side_Oyeku_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Etura_Meji;
    break;
           

    case "Etura-Iwori":
        opon_Left_side.src = opon_Ifa_Left_Side_Iwori_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Etura_Meji;
    break;
           

    case "Etura-Idi":
        opon_Left_side.src = opon_Ifa_Left_Side_Idi_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Etura_Meji;
    break;
           

    case "Etura-Obara":
        opon_Left_side.src = opon_Ifa_Left_Side_Obara_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Etura_Meji;
    break;
           

    case "Etura-Okonron":
        opon_Left_side.src = opon_Ifa_Left_Side_Okonron_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Etura_Meji;
    break;
           

    case "Etura-Irosun":
        opon_Left_side.src = opon_Ifa_Left_Side_Irosun_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Etura_Meji;
    break;
           

    case "Etura-Owanrin":
        opon_Left_side.src = opon_Ifa_Left_Side_Owanrin_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Etura_Meji;
    break;
           

    case "Etura-Ogunda":
        opon_Left_side.src = opon_Ifa_Left_Side_Ogunda_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Etura_Meji;
    break;
           

    case "Etura-Osa ":
        opon_Left_side.src = opon_Ifa_Left_Side_Osa_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Etura_Meji;
    break;
           

    case "Etura-Irete ":
        opon_Left_side.src = opon_Ifa_Left_Side_Irete_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Etura_Meji;
    break;
           

    case "Etura-Eka":
        opon_Left_side.src = opon_Ifa_Left_Side_Eka_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Etura_Meji;
    break;
           

    case "Etura-Eturukpon":
        opon_Left_side.src = opon_Ifa_Left_Side_Eturukpon_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Etura_Meji;
    break;
           

    case "Etura-Ose":
        opon_Left_side.src = opon_Ifa_Left_Side_Ose_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Etura_Meji;
    break;
           

    case "Etura-Ofun":
        opon_Left_side.src = opon_Ifa_Left_Side_Ofun_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Etura_Meji;
    break;
           

    case "Irete-Ogbe":
        opon_Left_side.src = opon_Ifa_Left_Side_Ogbe_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Irete_Meji;
    break;
           

    case "Irete-Oyeku":
        opon_Left_side.src = opon_Ifa_Left_Side_Oyeku_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Irete_Meji;
    break;
           

    case "Irete-Iwori":
        opon_Left_side.src = opon_Ifa_Left_Side_Iwori_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Irete_Meji;
    break;
           

    case "Irete-Idi":
        opon_Left_side.src = opon_Ifa_Left_Side_Idi_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Irete_Meji;
    break;
           

    case "Irete-Obara":
        opon_Left_side.src = opon_Ifa_Left_Side_Obara_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Irete_Meji;
    break;
           

    case "Irete-Okonron":
        opon_Left_side.src = opon_Ifa_Left_Side_Okonron_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Irete_Meji;
    break;
           

    case "Irete-Irosun":
        opon_Left_side.src = opon_Ifa_Left_Side_Irosun_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Irete_Meji;
    break;
           

    case "Irete-Owanrin":
        opon_Left_side.src = opon_Ifa_Left_Side_Owanrin_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Irete_Meji;
    break;
           

    case "Irete-Ogunda":
        opon_Left_side.src = opon_Ifa_Left_Side_Ogunda_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Irete_Meji;
    break;
           

    case "Irete-Osa":
        opon_Left_side.src = opon_Ifa_Left_Side_Osa_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Irete_Meji;
    break;
           

    case "Irete-Etura":
        opon_Left_side.src = opon_Ifa_Left_Side_Etura_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Irete_Meji;
    break;
           
    
    case "Irete-Eka":
        opon_Left_side.src = opon_Ifa_Left_Side_Eka_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Irete_Meji;
    break;
           

    case "Irete-Eturukpon":
        opon_Left_side.src = opon_Ifa_Left_Side_Eturukpon_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Irete_Meji;
    break;
           

    case "Irete-Ose":
        opon_Left_side.src = opon_Ifa_Left_Side_Ose_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Irete_Meji;
    break;
           

    case "Irete-Ofun":
        opon_Left_side.src = opon_Ifa_Left_Side_Ofun_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Irete_Meji;
    break;
           

    case "Eka-Ogbe":
        opon_Left_side.src = opon_Ifa_Left_Side_Ogbe_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Eka_Meji;
    break;
           

    case "Eka-Oyeku":
        opon_Left_side.src = opon_Ifa_Left_Side_Oyeku_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Eka_Meji;
    break;
           

    case "Eka-Iwori":
        opon_Left_side.src = opon_Ifa_Left_Side_Iwori_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Eka_Meji;
    break;           

    case "Eka-Idi":
        opon_Left_side.src = opon_Ifa_Left_Side_Idi_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Eka_Meji;
    break;
           

    case "Eka-Obara":
        opon_Left_side.src = opon_Ifa_Left_Side_Obara_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Eka_Meji;
    break;
           

    case "Eka-Okonron":
        opon_Left_side.src = opon_Ifa_Left_Side_Okonron_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Eka_Meji;
    break;
           

    case "Eka-Irosun":
        opon_Left_side.src = opon_Ifa_Left_Side_Irosun_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Eka_Meji;
    break;
           

    case "Eka-Owanrin":
        opon_Left_side.src = opon_Ifa_Left_Side_Owanrin_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Eka_Meji;
    break;
           

    case "Eka-Ogunda":
        opon_Left_side.src = opon_Ifa_Left_Side_Ogunda_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Eka_Meji;
    break;
           

    case "Eka-Osa":
        opon_Left_side.src = opon_Ifa_Left_Side_Osa_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Eka_Meji;
    break;
           

    case "Eka-Etura":
        opon_Left_side.src = opon_Ifa_Left_Side_Etura_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Eka_Meji;
    break;
           

    case "Eka-Irete":
        opon_Left_side.src = opon_Ifa_Left_Side_Irete_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Eka_Meji;
    break;
           

    case "Eka-Eturukpon":
        opon_Left_side.src = opon_Ifa_Left_Side_Eturukpon_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Eka_Meji;
    break;
           

    case "Eka-Ose":
        opon_Left_side.src = opon_Ifa_Left_Side_Ose_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Eka_Meji;
    break;
           

    case "Eka-Ofun":
        opon_Left_side.src = opon_Ifa_Left_Side_Ofun_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Eka_Meji;
    break;
           

    case "Eturukpon-Ogbe":
        opon_Left_side.src = opon_Ifa_Left_Side_Ogbe_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Eturukpon_Meji;
    break;
           

    case "Eturukpon-Oyeku":
        opon_Left_side.src = opon_Ifa_Left_Side_Oyeku_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Eturukpon_Meji;
    break;
           

    case "Eturukpon-Iwori":
        opon_Left_side.src = opon_Ifa_Left_Side_Iwori_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Eturukpon_Meji;
    break;
           

    case "Eturukpon-Idi":
        opon_Left_side.src = opon_Ifa_Left_Side_Idi_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Eturukpon_Meji;
    break;
           

    case "Eturukpon-Obara":
        opon_Left_side.src = opon_Ifa_Left_Side_Obara_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Eturukpon_Meji;
    break;
           

    case "Eturukpon-Okonron":
        opon_Left_side.src = opon_Ifa_Left_Side_Okonron_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Eturukpon_Meji;
    break;
           

    case "Eturukpon-Irosun":
        opon_Left_side.src = opon_Ifa_Left_Side_Irosun_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Eturukpon_Meji;
    break;
           

    case "Eturukpon-Owanrin":
        opon_Left_side.src = opon_Ifa_Left_Side_Owanrin_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Eturukpon_Meji;
    break;
           

    case "Eturukpon-Ogunda":
        opon_Left_side.src = opon_Ifa_Left_Side_Ogunda_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Eturukpon_Meji;
    break;
           

    case "Eturukpon-Osa":
        opon_Left_side.src = opon_Ifa_Left_Side_Osa_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Eturukpon_Meji;
    break;
           

    case "Eturukpon-Etura":
        opon_Left_side.src = opon_Ifa_Left_Side_Etura_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Eturukpon_Meji;
    break;

    case "Eturukpon-Irete":
        opon_Left_side.src = opon_Ifa_Left_Side_Irete_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Eturukpon_Meji;
    break;

    case "Eturukpon-Eka":
        opon_Left_side.src = opon_Ifa_Left_Side_Eka_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Eturukpon_Meji;
    break;
    
    case "Eturukpon-Ose":
        opon_Left_side.src = opon_Ifa_Left_Side_Ose_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Eturukpon_Meji;
    break;

    case "Eturukpon-Ofun":
        opon_Left_side.src = opon_Ifa_Left_Side_Ofun_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Eturukpon_Meji;
    break;
    
    case "Ose-Ogbe":
        opon_Left_side.src = opon_Ifa_Left_Side_Ogbe_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ose_Meji;
    break;

    case "Ose-Oyeku":
        opon_Left_side.src = opon_Ifa_Left_Side_Oyeku_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ose_Meji;
    break;
           
    case "Ose-Iwori":
        opon_Left_side.src = opon_Ifa_Left_Side_Iwori_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ose_Meji;
    break;

    case "Ose-Idi":
        opon_Left_side.src = opon_Ifa_Left_Side_Idi_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ose_Meji;
    break;
    
    case "Ose-Obara":
        opon_Left_side.src = opon_Ifa_Left_Side_Obara_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ose_Meji;
    break;

    case "Ose-Okonron":
        opon_Left_side.src = opon_Ifa_Left_Side_Okonron_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ose_Meji;
    break;
    
    case "Ose-Irosun":
        opon_Left_side.src = opon_Ifa_Left_Side_Irosun_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ose_Meji;
    break;

    case "Ose-Owanrin":
        opon_Left_side.src = opon_Ifa_Left_Side_Owanrin_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ose_Meji;
    break;
    
    case "Ose-Ogunda":
        opon_Left_side.src = opon_Ifa_Left_Side_Ogunda_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ose_Meji;
    break;

    case "Ose-Osa":
        opon_Left_side.src = opon_Ifa_Left_Side_Osa_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ose_Meji;
    break;
    
    case "Ose-Etura":
        opon_Left_side.src = opon_Ifa_Left_Side_Etura_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ose_Meji;
    break;

    case "Ose-Irete":
        opon_Left_side.src = opon_Ifa_Left_Side_Irete_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ose_Meji;
    break;
           
    case "Ose-Eka":
        opon_Left_side.src = opon_Ifa_Left_Side_Eka_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ose_Meji;
    break;

    case "Ose-Eturukpon":
        opon_Left_side.src = opon_Ifa_Left_Side_Eturukpon_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ose_Meji;
    break;
    
    case "Ose-Ofun":
        opon_Left_side.src = opon_Ifa_Left_Side_Ofun_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ose_Meji;
    break; 
    
    case "Ofun-Ogbe":
        opon_Left_side.src = opon_Ifa_Left_Side_Ogbe_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ofun_Meji;
    break;

    case "Ofun-Oyeku":
        opon_Left_side.src = opon_Ifa_Left_Side_Oyeku_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ofun_Meji;
    break;
           
    case "Ofun-Iwori":
        opon_Left_side.src = opon_Ifa_Left_Side_Iwori_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ofun_Meji;
    break;

    case "Ofun-Idi":
        opon_Left_side.src = opon_Ifa_Left_Side_Idi_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ofun_Meji;
    break;
    
    case "Ofun-Obara":
        opon_Left_side.src = opon_Ifa_Left_Side_Obara_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ofun_Meji;
    break;

    case "Ofun-Okonron":
        opon_Left_side.src = opon_Ifa_Left_Side_Okonron_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ofun_Meji;
    break;
    
    case "Ofun-Irosun":
        opon_Left_side.src = opon_Ifa_Left_Side_Irosun_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ofun_Meji;
    break;

    case "Ofun-Owanrin":
        opon_Left_side.src = opon_Ifa_Left_Side_Owanrin_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ofun_Meji;
    break;
    
    case "Ofun-Ogunda":
        opon_Left_side.src = opon_Ifa_Left_Side_Ogunda_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ofun_Meji;
    break;

    case "Ofun-Osa":
        opon_Left_side.src = opon_Ifa_Left_Side_Osa_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ofun_Meji;
    break;
    
    case "Ofun-Etura":
        opon_Left_side.src = opon_Ifa_Left_Side_Etura_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ofun_Meji;
    break;

    case "Ofun-Irete":
        opon_Left_side.src = opon_Ifa_Left_Side_Irete_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ofun_Meji;
    break;
           
    case "Ofun-Eka":
        opon_Left_side.src = opon_Ifa_Left_Side_Eka_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ofun_Meji;
    break;

    case "Ofun-Eturukpon":
        opon_Left_side.src = opon_Ifa_Left_Side_Eturukpon_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ofun_Meji;
    break;
    
    case "Ofun-Ose":
        opon_Left_side.src = opon_Ifa_Left_Side_Ose_Meji;
        opon_Right_side.src = opon_Ifa_Right_Side_Ofun_Meji;
    break;    
}
}