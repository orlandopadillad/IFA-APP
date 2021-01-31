var filter, htmlId, language;
//default functions runners
fetchEboDataENG ();
fetchVersesDataEng ();
fetchGeneralDescriptionDataENG ();
fetchTaboosDataENG ();
//fetchNamesDataENG ();
fetchMedicinesDataENG();

//default functions runners

// templates

// templates



function globalOduFetchFunction(){
    fetchEboDataENG ();
    fetchVersesDataEng ();
    fetchGeneralDescriptionDataENG ();
    fetchTaboosDataENG ();
    //fetchNamesDataENG ();
    fetchMedicinesDataENG();
    fetchReusableOduData (filter, htmlId, language);
}



function fetchGeneralDescriptionDataENG (){
    var generalDescriptionhtmlOutPut = document.getElementById("generalDescriptionDataInEnglish").innerHTML="";//delete the text from the previous execution
    fetch (oduJSONAddress).then(response =>{ //url of the json
        //console.log(response);//load if the json was loaded --- this can be deleted.
        if (!response.ok){
            throw Error ("ERROR");
        }
        return response.json();
    })

    .then(dataFromJSONForgeneralDescription =>{ //acces to all the information on the JSON under the name dataFromJSONForVerses --- can be change but need to be update on all the places.
        //console.log(dataFromJSONForVerses[oduForTheJSON]);//retrive  information information to the console, --- this can be deleted.
        generalDescriptionhtmlOutPut = dataFromJSONForgeneralDescription[oduForTheJSON]['generalDescription'].map(infoDisplayForgeneralDescription => { //route to retreieve the information --- can be change but need to be update on all the places.
           //below code "return" the HTML code
           return `

           
           <b>${infoDisplayForgeneralDescription.id} </b>${infoDisplayForgeneralDescription.translation.ENG}<br>
           <br><p><a  data-bs-toggle="collapse" href="#generalDescriptionBibliography${infoDisplayForgeneralDescription.id}" role="button" aria-expanded="false" aria-controls="generalDescriptionBibliography${infoDisplayForgeneralDescription.id}">Bibliography of Verse ${infoDisplayForgeneralDescription.id}</a></p>        

        <div class="collapse" id="generalDescriptionBibliography${infoDisplayForgeneralDescription.id}">				
           <div class="card text-center" style="width: 100%;   margin-bottom: 50px;">
               <img src="${infoDisplayForgeneralDescription.ISBN.coverbookPicture}" class="card-img-top" alt="${infoDisplayForgeneralDescription.ISBN.nameOftheBook}"style="width:200px; height:270px; margin-left:auto;
               margin-right:auto; margin-top: 20px;">
               <div class="card-body">
                   <h3 class="card-title" style="text-align: center;">${infoDisplayForgeneralDescription.ISBN.nameOftheBook}</h3>
               </div>
               <ul class="list-group list-group-flush">
                   <li class="list-group-item"><b>Author:</b> ${infoDisplayForgeneralDescription.ISBN.Author}</li>
                   <li class="list-group-item"><b>Editor:</b> ${infoDisplayForgeneralDescription.ISBN.editor}</li>
                   <li class="list-group-item"><b>Publisher:</b> ${infoDisplayForgeneralDescription.ISBN.publisher}</li>
                   <li class="list-group-item"><b>ISBN-10:</b> ${infoDisplayForgeneralDescription.ISBN.isbnTen}</li>
                   <li class="list-group-item"><b>ISBN-13:</b> ${infoDisplayForgeneralDescription.ISBN.isbnThirteen}</li>
                   <li class="list-group-item"><b>On The Page Number:</b> ${infoDisplayForgeneralDescription.ISBN.pageNumber}</li>
               </ul>
               <div class="card-body" style="text-align: center;">
                   <a href="${infoDisplayForgeneralDescription.ISBN.url}" class="card-link" style="font-weight: bolder;">Buy This Book.</a>
               </div>
           </div>
        </div>
           
           `;
        })
        .join('');//transform the HTML in a string
        //console.log(generalDescriptionhtmlOutPut) //log to grab all the info and put it into the HTML--- this can be deleted.
        document
            .querySelector('#generalDescriptionDataInEnglish') //id where to put the info
            .insertAdjacentHTML("afterbegin" , generalDescriptionhtmlOutPut);// insert the text exactly after the id declared above
    }).catch(error => {
        console.log(error);
    });



}

function fetchVersesDataEng (){
    var verseshtmlOutPut = document.getElementById("verseDataInEnglish").innerHTML="";//delete the text from the previous execution
    fetch (oduJSONAddress).then(response =>{ //url of the json
        //console.log(response);//load if the json was loaded --- this can be deleted.
        if (!response.ok){
            throw Error ("ERROR");
        }
        return response.json();
    })

    .then(dataFromJSONForVerses =>{ //acces to all the information on the JSON under the name dataFromJSONForVerses --- can be change but need to be update on all the places.
        //console.log(dataFromJSONForVerses[oduForTheJSON]);//retrive  information information to the console, --- this can be deleted.
          verseshtmlOutPut = dataFromJSONForVerses[oduForTheJSON]['verses'].map(infoDisplayForVerses => { //route to retreieve the information --- can be change but need to be update on all the places.
           //below code "return" the HTML code
           return `

           
           <b>Verse  ${infoDisplayForVerses.id}</b><br><blockquote>\"${infoDisplayForVerses.translation.Yoruba}\"</blockquote>${infoDisplayForVerses.translation.ENG}<br>
           <br><p><a  data-bs-toggle="collapse" href="#versesBibliography${infoDisplayForVerses.id}" role="button" aria-expanded="false" aria-controls="versesBibliography${infoDisplayForVerses.id}">Bibliography of Verse ${infoDisplayForVerses.id}</a></p>        

        <div class="collapse" id="versesBibliography${infoDisplayForVerses.id}">				
           <div class="card text-center" style="width: 100%;   margin-bottom: 50px;">
               <img src="${infoDisplayForVerses.ISBN.coverbookPicture}" class="card-img-top" alt="${infoDisplayForVerses.ISBN.nameOftheBook}"style="width:200px; height:270px; margin-left:auto;
               margin-right:auto; margin-top: 20px;">
               <div class="card-body">
                   <h3 class="card-title" style="text-align: center;">${infoDisplayForVerses.ISBN.nameOftheBook}</h3>
               </div>
               <ul class="list-group list-group-flush">
                   <li class="list-group-item"><b>Author:</b> ${infoDisplayForVerses.ISBN.Author}</li>
                   <li class="list-group-item"><b>Editor:</b> ${infoDisplayForVerses.ISBN.editor}</li>
                   <li class="list-group-item"><b>Publisher:</b> ${infoDisplayForVerses.ISBN.publisher}</li>
                   <li class="list-group-item"><b>ISBN-10:</b> ${infoDisplayForVerses.ISBN.isbnTen}</li>
                   <li class="list-group-item"><b>ISBN-13:</b> ${infoDisplayForVerses.ISBN.isbnThirteen}</li>
                   <li class="list-group-item"><b>On The Page Number:</b> ${infoDisplayForVerses.ISBN.pageNumber}</li>
               </ul>
               <div class="card-body" style="text-align: center;">
                   <a href="${infoDisplayForVerses.ISBN.url}" class="card-link" style="font-weight: bolder;">Buy This Book.</a>
               </div>
           </div>
        </div>
           
           `;
        })
        .join('');//transform the HTML in a string
        //console.log(verseshtmlOutPut) //log to grab all the info and put it into the HTML--- this can be deleted.
        document
            .querySelector('#verseDataInEnglish') //id where to put the info
            .insertAdjacentHTML("afterbegin" , verseshtmlOutPut);// insert the text exactly after the id declared above
    }).catch(error => {
        console.log(error);
    });



}

function fetchEboDataENG (){
    var ebohtmlOutPut = document.getElementById("eboDataInEnglish").innerHTML="";//delete the text from the previous execution
    fetch (oduJSONAddress).then(response =>{ //url of the json
        //console.log(response);//load if the json was loaded --- this can be deleted.
        if (!response.ok){
            throw Error ("ERROR");
        }
        return response.json();
    })
    //start ebo process
    .then(dataFromJSONForEbo =>{ //acces to all the information on the JSON under the name dataFromJSONForEbo --- can be change but need to be update on all the places.
        //console.log(dataFromJSONForEbo[oduForTheJSON]['ebo']);//retrive  information information to the console, --- this can be deleted.
          ebohtmlOutPut = dataFromJSONForEbo[oduForTheJSON]['ebo'].map(infoDisplayForEbo => { //route to retreieve the information --- can be change but need to be update on all the places.
           //below code "return" the HTML code
           return `
           <b>Ẹbọ   ${infoDisplayForEbo.id}</b><br><blockquote>\"${infoDisplayForEbo.translation.ENG}\"</blockquote>${infoDisplayForEbo.translation.ENG}<br>
           <br><p><a  data-bs-toggle="collapse" href="#eboBibliography${infoDisplayForEbo.translation.id}" role="button" aria-expanded="false" aria-controls="bibliography${infoDisplayForEbo.translation.id}">Bibliography of Verse ${infoDisplayForEbo.id}</a></p>
           
           <div class="collapse" id="eboBibliography${infoDisplayForEbo.translation.id}">				
           <div class="card text-center" style="width: 100%;   margin-bottom: 50px;">
               <img src="${infoDisplayForEbo.ISBN.coverbookPicture}" class="card-img-top" alt="${infoDisplayForEbo.ISBN.nameOftheBook}"style="width:200px; height:270px; margin-left:auto;
               margin-right:auto; margin-top: 20px;">
               <div class="card-body">
                   <h3 class="card-title" style="text-align: center;">${infoDisplayForEbo.ISBN.nameOftheBook}</h3>
               </div>
               <ul class="list-group list-group-flush">
                   <li class="list-group-item"><b>Author:</b> ${infoDisplayForEbo.ISBN.Author}</li>
                   <li class="list-group-item"><b>Editor:</b> ${infoDisplayForEbo.ISBN.editor}</li>
                   <li class="list-group-item"><b>Publisher:</b> ${infoDisplayForEbo.ISBN.publisher}</li>
                   <li class="list-group-item"><b>ISBN-10:</b> ${infoDisplayForEbo.ISBN.isbnTen}</li>
                   <li class="list-group-item"><b>ISBN-13:</b> ${infoDisplayForEbo.ISBN.isbnThirteen}</li>
                   <li class="list-group-item"><b>On The Page Number:</b> ${infoDisplayForEbo.ISBN.pageNumber}</li>
               </ul>
               <div class="card-body" style="text-align: center;">
                   <a href="${infoDisplayForEbo.ISBN.url}" class="card-link" style="font-weight: bolder;">Buy This Book.</a>
               </div>
           </div>
        </div>
           
           `;//to display otherlanguages modify the .SPA to the require language
        
        })
        .join('');//transform the HTML in a string
        //console.log(ebohtmlOutPut) //log to grab all the info and put it into the HTML--- this can be deleted.
        document
            .querySelector('#eboDataInEnglish') //id where to put the info
            .insertAdjacentHTML("afterbegin" , ebohtmlOutPut);// insert the text exactly after the id declared above
    }).catch(error => {
        console.log(error);
    });
    //end ebo process


}

function fetchTaboosDataENG (){
    var tabooshtmlOutPut = document.getElementById("taboosDataInEnglish").innerHTML="";//delete the text from the previous execution
    fetch (oduJSONAddress).then(response =>{ //url of the json
        //console.log(response);//load if the json was loaded --- this can be deleted.
        if (!response.ok){
            throw Error ("ERROR");
        }
        return response.json();
    })

    .then(dataFromJSONForTaboos =>{ //acces to all the information on the JSON under the name dataFromJSONForVerses --- can be change but need to be update on all the places.
        console.log(dataFromJSONForTaboos[oduForTheJSON]);//retrive  information information to the console, --- this can be deleted.
        tabooshtmlOutPut = dataFromJSONForTaboos[oduForTheJSON]['taboos'].map(infoDisplayTaboos => { //route to retreieve the information --- can be change but need to be update on all the places.
           //below code "return" the HTML code
           return `

           
           <b>${infoDisplayTaboos.id} </b>${infoDisplayTaboos.translation.ENG}<br>
           <br><p><a  data-bs-toggle="collapse" href="#taboosBibliography${infoDisplayTaboos.id}" role="button" aria-expanded="false" aria-controls="taboosBibliography${infoDisplayTaboos.id}">Bibliography of Verse ${infoDisplayTaboos.id}</a></p>        

        <div class="collapse" id="taboosBibliography${infoDisplayTaboos.id}">				
           <div class="card text-center" style="width: 100%;   margin-bottom: 50px;">
               <img src="${infoDisplayTaboos.ISBN.coverbookPicture}" class="card-img-top" alt="${infoDisplayTaboos.ISBN.nameOftheBook}"style="width:200px; height:270px; margin-left:auto;
               margin-right:auto; margin-top: 20px;">
               <div class="card-body">
                   <h3 class="card-title" style="text-align: center;">${infoDisplayTaboos.ISBN.nameOftheBook}</h3>
               </div>
               <ul class="list-group list-group-flush">
                   <li class="list-group-item"><b>Author:</b> ${infoDisplayTaboos.ISBN.Author}</li>
                   <li class="list-group-item"><b>Editor:</b> ${infoDisplayTaboos.ISBN.editor}</li>
                   <li class="list-group-item"><b>Publisher:</b> ${infoDisplayTaboos.ISBN.publisher}</li>
                   <li class="list-group-item"><b>ISBN-10:</b> ${infoDisplayTaboos.ISBN.isbnTen}</li>
                   <li class="list-group-item"><b>ISBN-13:</b> ${infoDisplayTaboos.ISBN.isbnThirteen}</li>
                   <li class="list-group-item"><b>On The Page Number:</b> ${infoDisplayTaboos.ISBN.pageNumber}</li>
               </ul>
               <div class="card-body" style="text-align: center;">
                   <a href="${infoDisplayTaboos.ISBN.url}" class="card-link" style="font-weight: bolder;">Buy This Book.</a>
               </div>
           </div>
        </div>
           
           `;
        })
        .join('');//transform the HTML in a string
        //console.log(tabooshtmlOutPut) //log to grab all the info and put it into the HTML--- this can be deleted.
        document
            .querySelector('#taboosDataInEnglish') //id where to put the info
            .insertAdjacentHTML("afterbegin" , tabooshtmlOutPut);// insert the text exactly after the id declared above
    }).catch(error => {
        console.log(error);
    });



}

// function fetchNamesDataENG (){
//     var tabooshtmlOutPut = document.getElementById("namesDataInEnglish").innerHTML="";//delete the text from the previous execution
//     fetch (oduJSONAddress).then(response =>{ //url of the json
//         //console.log(response);//load if the json was loaded --- this can be deleted.
//         if (!response.ok){
//             throw Error ("ERROR");
//         }
//         return response.json();
//     })

//     .then(dataFromJSONForNames =>{ //acces to all the information on the JSON under the name dataFromJSONForVerses --- can be change but need to be update on all the places.
//         console.log(dataFromJSONForNames[oduForTheJSON]);//retrive  information information to the console, --- this can be deleted.
//         tabooshtmlOutPut = dataFromJSONForNames[oduForTheJSON]['names'].map(infoDisplayNames => { //route to retreieve the information --- can be change but need to be update on all the places.
//            //below code "return" the HTML code
//            return `

           
//            <b>${infoDisplayNames.id} </b>${infoDisplayNames.translation.ENG}<br>
//            <br><p><a  data-bs-toggle="collapse" href="#namesBibliography${infoDisplayNames.id}" role="button" aria-expanded="false" aria-controls="namesBibliography${infoDisplayNames.id}">Bibliography of Verse ${infoDisplayNames.id}</a></p>        

//         <div class="collapse" id="namesBibliography${infoDisplayNames.id}">				
//            <div class="card text-center" style="width: 100%;   margin-bottom: 50px;">
//                <img src="${infoDisplayNames.ISBN.coverbookPicture}" class="card-img-top" alt="${infoDisplayNames.ISBN.nameOftheBook}"style="width:200px; height:270px; margin-left:auto;
//                margin-right:auto; margin-top: 20px;">
//                <div class="card-body">
//                    <h3 class="card-title" style="text-align: center;">${infoDisplayNames.ISBN.nameOftheBook}</h3>
//                </div>
//                <ul class="list-group list-group-flush">
//                    <li class="list-group-item"><b>Author:</b> ${infoDisplayNames.ISBN.Author}</li>
//                    <li class="list-group-item"><b>Editor:</b> ${infoDisplayNames.ISBN.editor}</li>
//                    <li class="list-group-item"><b>Publisher:</b> ${infoDisplayNames.ISBN.publisher}</li>
//                    <li class="list-group-item"><b>ISBN-10:</b> ${infoDisplayNames.ISBN.isbnTen}</li>
//                    <li class="list-group-item"><b>ISBN-13:</b> ${infoDisplayNames.ISBN.isbnThirteen}</li>
//                    <li class="list-group-item"><b>On The Page Number:</b> ${infoDisplayNames.ISBN.pageNumber}</li>
//                </ul>
//                <div class="card-body" style="text-align: center;">
//                    <a href="${infoDisplayNames.ISBN.url}" class="card-link" style="font-weight: bolder;">Buy This Book.</a>
//                </div>
//            </div>
//         </div>
           
//            `;
//         })
//         .join('');//transform the HTML in a string
//         //console.log(tabooshtmlOutPut) //log to grab all the info and put it into the HTML--- this can be deleted.
//         document
//             .querySelector('#namesDataInEnglish') //id where to put the info
//             .insertAdjacentHTML("afterbegin" , tabooshtmlOutPut);// insert the text exactly after the id declared above
//     }).catch(error => {
//         console.log(error);
//     });



// }

function fetchMedicinesDataENG (){
    var tabooshtmlOutPut = document.getElementById("medicinesDataInEnglish").innerHTML="";//delete the text from the previous execution
    fetch (oduJSONAddress).then(response =>{ //url of the json
        //console.log(response);//load if the json was loaded --- this can be deleted.
        if (!response.ok){
            throw Error ("ERROR");
        }
        return response.json();
    })

    .then(dataFromJSONForMedicines =>{ //acces to all the information on the JSON under the name dataFromJSONForVerses --- can be change but need to be update on all the places.
        console.log(dataFromJSONForMedicines[oduForTheJSON]);//retrive  information information to the console, --- this can be deleted.
        tabooshtmlOutPut = dataFromJSONForMedicines[oduForTheJSON]['medicines'].map(infoDisplayMedicines => { //route to retreieve the information --- can be change but need to be update on all the places.
           //below code "return" the HTML code
           return `

           
           <b>${infoDisplayMedicines.id} </b>${infoDisplayMedicines.translation.ENG}<br>
           <br><p><a  data-bs-toggle="collapse" href="#medicinesBibliography${infoDisplayMedicines.id}" role="button" aria-expanded="false" aria-controls="medicinesBibliography${infoDisplayMedicines.id}">Bibliography of Verse ${infoDisplayMedicines.id}</a></p>        

        <div class="collapse" id="medicinesBibliography${infoDisplayMedicines.id}">				
           <div class="card text-center" style="width: 100%;   margin-bottom: 50px;">
               <img src="${infoDisplayMedicines.ISBN.coverbookPicture}" class="card-img-top" alt="${infoDisplayMedicines.ISBN.nameOftheBook}"style="width:200px; height:270px; margin-left:auto;
               margin-right:auto; margin-top: 20px;">
               <div class="card-body">
                   <h3 class="card-title" style="text-align: center;">${infoDisplayMedicines.ISBN.nameOftheBook}</h3>
               </div>
               <ul class="list-group list-group-flush">
                   <li class="list-group-item"><b>Author:</b> ${infoDisplayMedicines.ISBN.Author}</li>
                   <li class="list-group-item"><b>Editor:</b> ${infoDisplayMedicines.ISBN.editor}</li>
                   <li class="list-group-item"><b>Publisher:</b> ${infoDisplayMedicines.ISBN.publisher}</li>
                   <li class="list-group-item"><b>ISBN-10:</b> ${infoDisplayMedicines.ISBN.isbnTen}</li>
                   <li class="list-group-item"><b>ISBN-13:</b> ${infoDisplayMedicines.ISBN.isbnThirteen}</li>
                   <li class="list-group-item"><b>On The Page Number:</b> ${infoDisplayMedicines.ISBN.pageNumber}</li>
               </ul>
               <div class="card-body" style="text-align: center;">
                   <a href="${infoDisplayMedicines.ISBN.url}" class="card-link" style="font-weight: bolder;">Buy This Book.</a>
               </div>
           </div>
        </div>
           
           `;
        })
        .join('');//transform the HTML in a string
        //console.log(tabooshtmlOutPut) //log to grab all the info and put it into the HTML--- this can be deleted.
        document
            .querySelector('#medicinesDataInEnglish') //id where to put the info
            .insertAdjacentHTML("afterbegin" , tabooshtmlOutPut);// insert the text exactly after the id declared above
    
    //start test of the names


    console.log(dataFromJSONForMedicines[oduForTheJSON]);//retrive  information information to the console, --- this can be deleted.
    tabooshtmlOutPut = dataFromJSONForMedicines[oduForTheJSON]['names'].map(infoDisplayNames => { //route to retreieve the information --- can be change but need to be update on all the places.
       //below code "return" the HTML code
       return `

       
       <b>${infoDisplayNames.id} </b>${infoDisplayNames.translation.ENG}<br>
       <br><p><a  data-bs-toggle="collapse" href="#namesBibliography${infoDisplayNames.id}" role="button" aria-expanded="false" aria-controls="namesBibliography${infoDisplayNames.id}">Bibliography of Verse ${infoDisplayNames.id}</a></p>        

    <div class="collapse" id="namesBibliography${infoDisplayNames.id}">				
       <div class="card text-center" style="width: 100%;   margin-bottom: 50px;">
           <img src="${infoDisplayNames.ISBN.coverbookPicture}" class="card-img-top" alt="${infoDisplayNames.ISBN.nameOftheBook}"style="width:200px; height:270px; margin-left:auto;
           margin-right:auto; margin-top: 20px;">
           <div class="card-body">
               <h3 class="card-title" style="text-align: center;">${infoDisplayNames.ISBN.nameOftheBook}</h3>
           </div>
           <ul class="list-group list-group-flush">
               <li class="list-group-item"><b>Author:</b> ${infoDisplayNames.ISBN.Author}</li>
               <li class="list-group-item"><b>Editor:</b> ${infoDisplayNames.ISBN.editor}</li>
               <li class="list-group-item"><b>Publisher:</b> ${infoDisplayNames.ISBN.publisher}</li>
               <li class="list-group-item"><b>ISBN-10:</b> ${infoDisplayNames.ISBN.isbnTen}</li>
               <li class="list-group-item"><b>ISBN-13:</b> ${infoDisplayNames.ISBN.isbnThirteen}</li>
               <li class="list-group-item"><b>On The Page Number:</b> ${infoDisplayNames.ISBN.pageNumber}</li>
           </ul>
           <div class="card-body" style="text-align: center;">
               <a href="${infoDisplayNames.ISBN.url}" class="card-link" style="font-weight: bolder;">Buy This Book.</a>
           </div>
       </div>
    </div>
       
       `;
    })
    .join('');//transform the HTML in a string
    //console.log(tabooshtmlOutPut) //log to grab all the info and put it into the HTML--- this can be deleted.
    document
        .querySelector('#namesDataInEnglish') //id where to put the info
        .insertAdjacentHTML("afterbegin" , tabooshtmlOutPut);



    //en the test of the names
    
    
    
        }
        
        
        
        
        ).catch(error => {
            console.log(error);
        });



}




















// function fetchReusableOduData (filter, htmlId, language){


//     var htmlOutPut = document.getElementById(htmlId).innerHTML="";//delete the text from the previous execution
//     fetch (oduJSONAddress).then(response =>{ //url of the json
//         //console.log(response);//load if the json was loaded --- this can be deleted.
//         if (!response.ok){
//             throw Error ("ERROR");
//         }
//         return response.json();
//     })

//     .then(data =>{ //acces to all the information on the JSON under the name data --- can be change but need to be update on all the places.
//         console.log(data[oduForTheJSON]);//retrive  information information to the console, --- this can be deleted.
//         htmlOutPut = data[oduForTheJSON][filter].map(dataDisplay => { //route to retreieve the information --- can be change but need to be update on all the places.
//            //below code "return" the HTML code
//            return `

           
//            <b>${dataDisplay.id} </b>${dataDisplay.translation[language]}<br>
//            <br><p><a  data-bs-toggle="collapse" href="#medicinesBibliography${dataDisplay.id}" role="button" aria-expanded="false" aria-controls="medicinesBibliography${dataDisplay.id}">Bibliography of Verse ${dataDisplay.id}</a></p>        

//         <div class="collapse" id="medicinesBibliography${dataDisplay.id}">				
//            <div class="card text-center" style="width: 100%;   margin-bottom: 50px;">
//                <img src="${dataDisplay.ISBN.coverbookPicture}" class="card-img-top" alt="${dataDisplay.ISBN.nameOftheBook}"style="width:200px; height:270px; margin-left:auto;
//                margin-right:auto; margin-top: 20px;">
//                <div class="card-body">
//                    <h3 class="card-title" style="text-align: center;">${dataDisplay.ISBN.nameOftheBook}</h3>
//                </div>
//                <ul class="list-group list-group-flush">
//                    <li class="list-group-item"><b>Author:</b> ${dataDisplay.ISBN.Author}</li>
//                    <li class="list-group-item"><b>Editor:</b> ${dataDisplay.ISBN.editor}</li>
//                    <li class="list-group-item"><b>Publisher:</b> ${dataDisplay.ISBN.publisher}</li>
//                    <li class="list-group-item"><b>ISBN-10:</b> ${dataDisplay.ISBN.isbnTen}</li>
//                    <li class="list-group-item"><b>ISBN-13:</b> ${dataDisplay.ISBN.isbnThirteen}</li>
//                    <li class="list-group-item"><b>On The Page Number:</b> ${dataDisplay.ISBN.pageNumber}</li>
//                </ul>
//                <div class="card-body" style="text-align: center;">
//                    <a href="${dataDisplay.ISBN.url}" class="card-link" style="font-weight: bolder;">Buy This Book.</a>
//                </div>
//            </div>
//         </div>
           
//            `;
//         })
//         .join('');//transform the HTML in a string
//         //console.log(htmlOutPut) //log to grab all the info and put it into the HTML--- this can be deleted.
//         document
//             .querySelector(`#${htmlId}`) //id where to put the info
//             .insertAdjacentHTML("afterbegin" , htmlOutPut);// insert the text exactly after the id declared above
//     }).catch(error => {
//         console.log(error);
//     });



// }

