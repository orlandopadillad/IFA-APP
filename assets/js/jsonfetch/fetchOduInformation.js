
//default functions declaration
fetchGeneralDescriptionDataENG ();

function globalOduFetchFunction(){
    fetchGeneralDescriptionDataENG ();

}



function fetchGeneralDescriptionDataENG (){
//Start of deleters(delete the text from the previous function execution)
var generalDescriptionhtmlOutPut = document.getElementById("generalDescriptionDataInEnglish").innerHTML="";
var verseshtmlOutPut  = document.getElementById("verseDataInEnglish").innerHTML="";
var ebohtmlOutPut = document.getElementById("eboDataInEnglish").innerHTML="";
var tabooshtmlOutPut  = document.getElementById("taboosDataInEnglish").innerHTML="";
var nameshtmlOutPut = document.getElementById("namesDataInEnglish").innerHTML="";
var medicineshtmlOutPut = document.getElementById("medicinesDataInEnglish").innerHTML="";
var orisashtmlOutPut = document.getElementById("orisasDataInEnglish").innerHTML="";
var orisasConsagrationhtmlOutPut = document.getElementById("orisasDataInEnglish").innerHTML="";


//End of deleters(delete the text from the previous function execution)
//Start of the fetch
    fetch (oduJSONAddress).then(response =>{ //url of the json
        //console.log(response);//load if the json was loaded --- this can be deleted.
        if (!response.ok){
            throw Error ("ERROR");
        }
        return response.json();
    })
//end of the fetch

//Beginning of the .then
    .then(dataFromJSON =>{ //acces to all the information on the JSON under the name dataFromJSON --- can be change but need to be update on all the places.
        //start of the General Description OUTPUT in ENGLISH
        generalDescriptionhtmlOutPut = dataFromJSON[oduForTheJSON]['generalDescription'].map(infoFilteredForgeneralDescription => { //route to retreieve the information --- can be change but need to be update on all the places.
           //below code "return" the HTML code
           return `
                    <b>${infoFilteredForgeneralDescription.id} </b>${infoFilteredForgeneralDescription.translation.ENG}<br>
                    <p><a  data-bs-toggle="collapse" href="#generalDescriptionBibliography${infoFilteredForgeneralDescription.id}" role="button" aria-expanded="false" aria-controls="generalDescriptionBibliography${infoFilteredForgeneralDescription.id}">Bibliography</a></p>        

                    <div class="collapse" id="generalDescriptionBibliography${infoFilteredForgeneralDescription.id}">				
                       <div class="card text-center" style="width: 100%;   margin-bottom: 50px;">
                           <img src="${infoFilteredForgeneralDescription.ISBN.coverbookPicture}" class="card-img-top" alt="${infoFilteredForgeneralDescription.ISBN.nameOftheBook}"style="width:200px; height:270px; margin-left:auto;
                           margin-right:auto; margin-top: 20px;">
                           <div class="card-body">
                               <h3 class="card-title" style="text-align: center;">${infoFilteredForgeneralDescription.ISBN.nameOftheBook}</h3>
                           </div>
                           <ul class="list-group list-group-flush">
                               <li class="list-group-item"><b>Author:</b> ${infoFilteredForgeneralDescription.ISBN.Author}</li>
                               <li class="list-group-item"><b>Editor:</b> ${infoFilteredForgeneralDescription.ISBN.editor}</li>
                               <li class="list-group-item"><b>Publisher:</b> ${infoFilteredForgeneralDescription.ISBN.publisher}</li>
                               <li class="list-group-item"><b>ISBN-10:</b> ${infoFilteredForgeneralDescription.ISBN.isbnTen}</li>
                               <li class="list-group-item"><b>ISBN-13:</b> ${infoFilteredForgeneralDescription.ISBN.isbnThirteen}</li>
                               <li class="list-group-item"><b>On The Page Number:</b> ${infoFilteredForgeneralDescription.ISBN.pageNumber}</li>
                           </ul>
                           <div class="card-body" style="text-align: center;">
                               <a href="${infoFilteredForgeneralDescription.ISBN.url}" class="card-link" style="font-weight: bolder;">Buy This Book.</a>
                           </div>
                       </div>
                    </div>

                `;})
                     .join('');//transform the HTML in a string
                     //console.log(generalDescriptionhtmlOutPut) //log to grab all the info and put it into the HTML--- this can be deleted.
                     document
                         .querySelector('#generalDescriptionDataInEnglish') //id where to put the info
                         .insertAdjacentHTML("afterbegin" , generalDescriptionhtmlOutPut);// insert the text exactly after the id declared above
        //End of the General Description OUTPUT in ENGLISH
    
        
        //start of the verses OUTPUT in ENGLISH
        verseshtmlOutPut = dataFromJSON[oduForTheJSON]['verses'].map(infoDisplayForVerses => { //route to retreieve the information --- can be change but need to be update on all the places.
            //below code "return" the HTML code
            return `
                    <b>Verse  ${infoDisplayForVerses.id}</b><br><blockquote>\"${infoDisplayForVerses.translation.Yoruba}\"</blockquote>${infoDisplayForVerses.translation.ENG}<br>
                    <p><a  data-bs-toggle="collapse" href="#versesBibliography${infoDisplayForVerses.id}" role="button" aria-expanded="false" aria-controls="versesBibliography${infoDisplayForVerses.id}">Bibliography</a></p>
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
        //En of the verses OUTPUT in ENGLISH

        
        //start of the ebo in ENGLISH
        ebohtmlOutPut = dataFromJSON[oduForTheJSON]['ebo'].map(infoDisplayForEbo => { //route to retreieve the information --- can be change but need to be update on all the places.
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
        //end of the ebo in ENGLISH


        //start of the taboos in ENGLISH
        tabooshtmlOutPut = dataFromJSON[oduForTheJSON]['taboos'].map(infoDisplayTaboos => { //route to retreieve the information --- can be change but need to be update on all the places.
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
        //end of the taboos in ENGLISH
        

        //start of the names in ENGLISH
        nameshtmlOutPut = dataFromJSON[oduForTheJSON]['names'].map(infoDisplayNames => { //route to retreieve the information --- can be change but need to be update on all the places.
            //below code "return" the HTML code
            return `
        
            
            <b>${infoDisplayNames.id} </b>${infoDisplayNames.translation.ENG}<br>
            <br><p><a  data-bs-toggle="collapse" href="#medicinesBibliography${infoDisplayNames.id}" role="button" aria-expanded="false" aria-controls="medicinesBibliography${infoDisplayNames.id}">Bibliography of Verse ${infoDisplayNames.id}</a></p>        
        
         <div class="collapse" id="medicinesBibliography${infoDisplayNames.id}">				
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
         //console.log(nameshtmlOutPut) //log to grab all the info and put it into the HTML--- this can be deleted.
         document
             .querySelector('#namesDataInEnglish') //id where to put the info
             .insertAdjacentHTML("afterbegin" , nameshtmlOutPut);// insert the text exactly after the id declared above
        //end of the names in ENGLISH
                

        //start of the medicines in ENGLISH
        medicineshtmlOutPut = dataFromJSON[oduForTheJSON]['medicines'].map(infoDisplayMedicines => { //route to retreieve the information --- can be change but need to be update on all the places.
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
         //console.log(medicineshtmlOutPut) //log to grab all the info and put it into the HTML--- this can be deleted.
         document
             .querySelector('#medicinesDataInEnglish') //id where to put the info
             .insertAdjacentHTML("afterbegin" , medicineshtmlOutPut);// insert the text exactly after the id declared above
        //end of the medicines in ENGLISH


        //start of the orisas in ENGLISH
        orisashtmlOutPut = dataFromJSON[oduForTheJSON]['orisas'].map(infoDisplayOrisas => { //route to retreieve the information --- can be change but need to be update on all the places.
            //below code "return" the HTML code
            return `
        
            
            <b>${infoDisplayOrisas.id} </b>${infoDisplayOrisas.translation.ENG}<br>
            <br><p><a  data-bs-toggle="collapse" href="#medicinesBibliography${infoDisplayOrisas.id}" role="button" aria-expanded="false" aria-controls="medicinesBibliography${infoDisplayOrisas.id}">Bibliography of Verse ${infoDisplayOrisas.id}</a></p>        
        
         <div class="collapse" id="medicinesBibliography${infoDisplayOrisas.id}">				
            <div class="card text-center" style="width: 100%;   margin-bottom: 50px;">
                <img src="${infoDisplayOrisas.ISBN.coverbookPicture}" class="card-img-top" alt="${infoDisplayOrisas.ISBN.nameOftheBook}"style="width:200px; height:270px; margin-left:auto;
                margin-right:auto; margin-top: 20px;">
                <div class="card-body">
                    <h3 class="card-title" style="text-align: center;">${infoDisplayOrisas.ISBN.nameOftheBook}</h3>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><b>Author:</b> ${infoDisplayOrisas.ISBN.Author}</li>
                    <li class="list-group-item"><b>Editor:</b> ${infoDisplayOrisas.ISBN.editor}</li>
                    <li class="list-group-item"><b>Publisher:</b> ${infoDisplayOrisas.ISBN.publisher}</li>
                    <li class="list-group-item"><b>ISBN-10:</b> ${infoDisplayOrisas.ISBN.isbnTen}</li>
                    <li class="list-group-item"><b>ISBN-13:</b> ${infoDisplayOrisas.ISBN.isbnThirteen}</li>
                    <li class="list-group-item"><b>On The Page Number:</b> ${infoDisplayOrisas.ISBN.pageNumber}</li>
                </ul>
                <div class="card-body" style="text-align: center;">
                    <a href="${infoDisplayOrisas.ISBN.url}" class="card-link" style="font-weight: bolder;">Buy This Book.</a>
                </div>
            </div>
         </div>
            
            `;
         })
         .join('');//transform the HTML in a string
         //console.log(orisashtmlOutPut) //log to grab all the info and put it into the HTML--- this can be deleted.
         document
             .querySelector('#orisasDataInEnglish') //id where to put the info
             .insertAdjacentHTML("afterbegin" , orisashtmlOutPut);// insert the text exactly after the id declared above
        //end of the orisas in ENGLISH

        //start of the orisas consagration in ENGLISH
        orisasConsagrationhtmlOutPut = dataFromJSON[oduForTheJSON]['orisasConsagration'].map(infoDisplayOrisasConsagration => { //route to retreieve the information --- can be change but need to be update on all the places.
            //below code "return" the HTML code
            return `
        
            
            <b>${infoDisplayOrisasConsagration.id} </b>${infoDisplayOrisasConsagration.translation.ENG}<br>
            <br><p><a  data-bs-toggle="collapse" href="#medicinesBibliography${infoDisplayOrisasConsagration.id}" role="button" aria-expanded="false" aria-controls="medicinesBibliography${infoDisplayOrisasConsagration.id}">Bibliography of Verse ${infoDisplayOrisasConsagration.id}</a></p>        
        
         <div class="collapse" id="medicinesBibliography${infoDisplayOrisasConsagration.id}">				
            <div class="card text-center" style="width: 100%;   margin-bottom: 50px;">
                <img src="${infoDisplayOrisasConsagration.ISBN.coverbookPicture}" class="card-img-top" alt="${infoDisplayOrisasConsagration.ISBN.nameOftheBook}"style="width:200px; height:270px; margin-left:auto;
                margin-right:auto; margin-top: 20px;">
                <div class="card-body">
                    <h3 class="card-title" style="text-align: center;">${infoDisplayOrisasConsagration.ISBN.nameOftheBook}</h3>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><b>Author:</b> ${infoDisplayOrisasConsagration.ISBN.Author}</li>
                    <li class="list-group-item"><b>Editor:</b> ${infoDisplayOrisasConsagration.ISBN.editor}</li>
                    <li class="list-group-item"><b>Publisher:</b> ${infoDisplayOrisasConsagration.ISBN.publisher}</li>
                    <li class="list-group-item"><b>ISBN-10:</b> ${infoDisplayOrisasConsagration.ISBN.isbnTen}</li>
                    <li class="list-group-item"><b>ISBN-13:</b> ${infoDisplayOrisasConsagration.ISBN.isbnThirteen}</li>
                    <li class="list-group-item"><b>On The Page Number:</b> ${infoDisplayOrisasConsagration.ISBN.pageNumber}</li>
                </ul>
                <div class="card-body" style="text-align: center;">
                    <a href="${infoDisplayOrisasConsagration.ISBN.url}" class="card-link" style="font-weight: bolder;">Buy This Book.</a>
                </div>
            </div>
         </div>
            
            `;
         })
         .join('');//transform the HTML in a string
         //console.log(orisasConsagrationhtmlOutPut) //log to grab all the info and put it into the HTML--- this can be deleted.
         document
             .querySelector('#orisasConsagrationDataInEnglish') //id where to put the info
             .insertAdjacentHTML("afterbegin" , orisasConsagrationhtmlOutPut);// insert the text exactly after the id declared above
        //end of the orisas consagration in ENGLISH

    


        
    
    
    }//closer for dataFromJSON         
    )//Ending of the .then  
    //start of the catch error    
    .catch(error => {
        console.log(error);
    });
    //end of the catch error


}





