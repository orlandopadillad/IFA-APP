
function fetchEboDataSpa (){
    var ebohtmlOutPut = document.getElementById("eboData").innerHTML="";//delete the text from the previous execution
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
           <b>ẹbọ  ${infoDisplayForEbo.id}</b><br><p>${infoDisplayForEbo.translation.SPA}</p>`;//to display otherlanguages modify the .SPA to the require language
        })
        .join('');//transform the HTML in a string
        //console.log(ebohtmlOutPut) //log to grab all the info and put it into the HTML--- this can be deleted.
        document
            .querySelector('#eboData') //id where to put the info
            .insertAdjacentHTML("afterbegin" , ebohtmlOutPut);// insert the text exactly after the id declared above
    }).catch(error => {
        console.log(error);
    });
    //end ebo process


}

fetchEboDataSpa ()






function fetchVersesDataSpa (){
    var verseshtmlOutPut = document.getElementById("dataInEnglish").innerHTML="";//delete the text from the previous execution
    fetch (oduJSONAddress).then(response =>{ //url of the json
        //console.log(response);//load if the json was loaded --- this can be deleted.
        if (!response.ok){
            throw Error ("ERROR");
        }
        return response.json();
    })
    //start verses process
    .then(dataFromJSONForVerses =>{ //acces to all the information on the JSON under the name dataFromJSONForVerses --- can be change but need to be update on all the places.
        console.log(dataFromJSONForVerses[oduForTheJSON]);//retrive  information information to the console, --- this can be deleted.
          verseshtmlOutPut = dataFromJSONForVerses[oduForTheJSON]['verses'].map(infoDisplayForVerses => { //route to retreieve the information --- can be change but need to be update on all the places.
           //below code "return" the HTML code
           return `

           
           <b>Verse  ${infoDisplayForVerses.id}</b><br><blockquote>\"${infoDisplayForVerses.translation.Yoruba}\"</blockquote>${infoDisplayForVerses.translation.ENG}<br>
           <br><p><a  data-bs-toggle="collapse" href="#bibliography${infoDisplayForVerses.id}" role="button" aria-expanded="false" aria-controls="bibliography${infoDisplayForVerses.id}">Bibliography of Verse ${infoDisplayForVerses.id}</a></p>
            
          


            

        <div class="collapse" id="bibliography${infoDisplayForVerses.id}">				
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
            .querySelector('#dataInEnglish') //id where to put the info
            .insertAdjacentHTML("afterbegin" , verseshtmlOutPut);// insert the text exactly after the id declared above
    }).catch(error => {
        console.log(error);
    });
    //end verses process


}

fetchVersesDataSpa ()




