//default functions runners
fetchEboDataEng ()
fetchVersesDataEng ()
fetchGeneralDescriptionDataENG ();
fetchTaboosDataENG ()
//default functions runners

// templates

// templates



function globalOduFetchFunction(){
    fetchEboDataEng ();
    fetchVersesDataEng ();
    fetchGeneralDescriptionDataENG ();
    fetchTaboosDataENG ()
}






function fetchEboDataEng (){
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
           <br><p><a  data-bs-toggle="collapse" href="#bibliographyForEbo${infoDisplayForEbo.translation.id}" role="button" aria-expanded="false" aria-controls="bibliography${infoDisplayForEbo.translation.id}">Bibliography of Verse ${infoDisplayForEbo.id}</a></p>
           
           <div class="collapse" id="bibliographyForEbo${infoDisplayForEbo.translation.id}">				
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


function fetchVersesDataEng (){
    var verseshtmlOutPut = document.getElementById("verseDataInEnglish").innerHTML="";//delete the text from the previous execution
    fetch (oduJSONAddress).then(response =>{ //url of the json
        //console.log(response);//load if the json was loaded --- this can be deleted.
        if (!response.ok){
            throw Error ("ERROR");
        }
        return response.json();
    })
    //start verses process
    .then(dataFromJSONForVerses =>{ //acces to all the information on the JSON under the name dataFromJSONForVerses --- can be change but need to be update on all the places.
        //console.log(dataFromJSONForVerses[oduForTheJSON]);//retrive  information information to the console, --- this can be deleted.
          verseshtmlOutPut = dataFromJSONForVerses[oduForTheJSON]['verses'].map(infoDisplayForVerses => { //route to retreieve the information --- can be change but need to be update on all the places.
           //below code "return" the HTML code
           return `

           
           <b>Verse  ${infoDisplayForVerses.id}</b><br><blockquote>\"${infoDisplayForVerses.translation.Yoruba}\"</blockquote>${infoDisplayForVerses.translation.ENG}<br>
           <br><p><a  data-bs-toggle="collapse" href="#bibliographyForVerses${infoDisplayForVerses.id}" role="button" aria-expanded="false" aria-controls="bibliographyForVerses${infoDisplayForVerses.id}">Bibliography of Verse ${infoDisplayForVerses.id}</a></p>        

        <div class="collapse" id="bibliographyForVerses${infoDisplayForVerses.id}">				
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
    //end verses process


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
    //start verses process
    .then(dataFromJSONForgeneralDescription =>{ //acces to all the information on the JSON under the name dataFromJSONForVerses --- can be change but need to be update on all the places.
        //console.log(dataFromJSONForVerses[oduForTheJSON]);//retrive  information information to the console, --- this can be deleted.
        generalDescriptionhtmlOutPut = dataFromJSONForgeneralDescription[oduForTheJSON]['generalDescription'].map(infoDisplayForgeneralDescription => { //route to retreieve the information --- can be change but need to be update on all the places.
           //below code "return" the HTML code
           return `

           
           <b>${infoDisplayForgeneralDescription.id} </b>${infoDisplayForgeneralDescription.translation.ENG}<br>
           <br><p><a  data-bs-toggle="collapse" href="#bibliography${infoDisplayForgeneralDescription.id}" role="button" aria-expanded="false" aria-controls="bibliography${infoDisplayForgeneralDescription.id}">Bibliography of Verse ${infoDisplayForgeneralDescription.id}</a></p>        

        <div class="collapse" id="bibliography${infoDisplayForgeneralDescription.id}">				
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
    //end verses process


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
    //start verses process
    .then(dataFromJSONForgeneralDescription =>{ //acces to all the information on the JSON under the name dataFromJSONForVerses --- can be change but need to be update on all the places.
        //console.log(dataFromJSONForVerses[oduForTheJSON]);//retrive  information information to the console, --- this can be deleted.
        tabooshtmlOutPut = dataFromJSONForgeneralDescription[oduForTheJSON]['generalDescription'].map(infoDisplayForgeneralDescription => { //route to retreieve the information --- can be change but need to be update on all the places.
           //below code "return" the HTML code
           return `

           
           <b>${infoDisplayForgeneralDescription.id} </b>${infoDisplayForgeneralDescription.translation.ENG}<br>
           <br><p><a  data-bs-toggle="collapse" href="#bibliography${infoDisplayForgeneralDescription.id}" role="button" aria-expanded="false" aria-controls="bibliography${infoDisplayForgeneralDescription.id}">Bibliography of Verse ${infoDisplayForgeneralDescription.id}</a></p>        

        <div class="collapse" id="bibliography${infoDisplayForgeneralDescription.id}">				
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
        //console.log(tabooshtmlOutPut) //log to grab all the info and put it into the HTML--- this can be deleted.
        document
            .querySelector('#taboosDataInEnglish') //id where to put the info
            .insertAdjacentHTML("afterbegin" , tabooshtmlOutPut);// insert the text exactly after the id declared above
    }).catch(error => {
        console.log(error);
    });
    //end verses process


}


