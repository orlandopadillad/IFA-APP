
//default functions declaration
//fetchGeneralDescriptionDataENG (); //y commented this because it will run the function as default nad is not neede it due the values received on the url






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
                    <p><b>${infoFilteredForgeneralDescription.id}. </b>${infoFilteredForgeneralDescription.translation.ENG}                  
                    <a 
             
                    data-bs-toggle="collapse" 
                    href="#generalDescriptionBibliographyFetched${infoFilteredForgeneralDescription.id}"  
                    role="button" 
                    aria-expanded="false" 
                    aria-controls="generalDescriptionBibliography${infoFilteredForgeneralDescription.id}" 
                    onclick="fetchBibliography(${infoFilteredForgeneralDescription.translation.ISBN}, 'idgeneralDescriptionBibliographyFetched${infoFilteredForgeneralDescription.id}');">Bibliography</a></li>
               
                <div class="collapse" id="generalDescriptionBibliographyFetched${infoFilteredForgeneralDescription.id}">				
                    <div class="card text-center" style="width: 100%;   margin-bottom: 50px;">
                         <div id="idgeneralDescriptionBibliographyFetched${infoFilteredForgeneralDescription.id}"></div>
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
                    <b>Verse  ${infoDisplayForVerses.id}</b><br><blockquote>\"${infoDisplayForVerses.translation.Yoruba}\"</blockquote>${infoDisplayForVerses.translation.ENG}                 
                    <a
                    data-bs-toggle="collapse" 
                    href="#versesBibliographyFetched${infoDisplayForVerses.id}"  
                    role="button" 
                    aria-expanded="false" 
                    aria-controls="versesBibliography${infoDisplayForVerses.id}" 
                    onclick="fetchBibliography(${infoDisplayForVerses.translation.ISBN}, 'idversesBibliographyFetched${infoDisplayForVerses.id}');">Bibliography</a></p>
               
                <div class="collapse" id="versesBibliographyFetched${infoDisplayForVerses.id}">				
                    <div class="card text-center" style="width: 100%;   margin-bottom: 50px;">
                         <div id="idversesBibliographyFetched${infoDisplayForVerses.id}"></div>
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
                    <b>Ẹbọ   ${infoDisplayForEbo.id}</b><br>${infoDisplayForEbo.translation.ENG}
                                    
                    <a 
             
                    data-bs-toggle="collapse" 
                    href="#eboBibliographyFetched${infoDisplayForEbo.id}"  
                    role="button" 
                    aria-expanded="false" 
                    aria-controls="eboBibliography${infoDisplayForEbo.id}" 
                    onclick="fetchBibliography(${infoDisplayForEbo.translation.ISBN}, 'ideboBibliographyFetched${infoDisplayForEbo.id}');">Bibliography</a></p>
               
                <div class="collapse" id="eboBibliographyFetched${infoDisplayForEbo.id}">				
                    <div class="card text-center" style="width: 100%;   margin-bottom: 50px;">
                         <div id="ideboBibliographyFetched${infoDisplayForEbo.id}"></div>
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
 
            
            <b>Taboo ${infoDisplayTaboos.id}</b><br>${infoDisplayTaboos.translation.ENG}
            <p>
                <a 
                    data-bs-toggle="collapse" 
                    href="#tabooBibliographyFetched${infoDisplayTaboos.id}"  
                    role="button" 
                    aria-expanded="false" 
                    aria-controls="tabooBibliography${infoDisplayTaboos.id}" 
                    onclick="fetchBibliography(${infoDisplayTaboos.translation.ISBN}, 'idtabooBibliographyFetched${infoDisplayTaboos.id}');">Bibliography</a></p>
            
                <div class="collapse" id="tabooBibliographyFetched${infoDisplayTaboos.id}">				
                    <div class="card text-center" style="width: 100%;   margin-bottom: 50px;">
                         <div id="idtabooBibliographyFetched${infoDisplayTaboos.id}"></div>
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
        
            
            <b>Name ${infoDisplayNames.id} </b><br><blockquote>\"${infoDisplayNames.translation.Yoruba}\"</blockquote>${infoDisplayNames.translation.ENG}
            <br>
            <p>       
            <a 
                data-bs-toggle="collapse" 
                href="#namesBibliographyFetched${infoDisplayNames.id}"  
                role="button" 
                aria-expanded="false" 
                aria-controls="namesBibliography${infoDisplayNames.id}" 
                onclick="fetchBibliography(${infoDisplayNames.translation.ISBN}, 'idnamesBibliographyFetched${infoDisplayNames.id}');">Bibliography</a></p>
    
            <div class="collapse" id="namesBibliographyFetched${infoDisplayNames.id}">				
                <div class="card text-center" style="width: 100%;   margin-bottom: 50px;">
                     <div id="idnamesBibliographyFetched${infoDisplayNames.id}"></div>
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
 
            
            <b>Medicine ${infoDisplayMedicines.id} </b><br>${infoDisplayMedicines.translation.ENG}
            <p>
            <a 
                data-bs-toggle="collapse" 
                href="#medicinesBibliographyFetched${infoDisplayMedicines.id}"  
                role="button" 
                aria-expanded="false" 
                aria-controls="medicinesBibliography${infoDisplayMedicines.id}" 
                onclick="fetchBibliography(${infoDisplayMedicines.translation.ISBN}, 'idmedicinesBibliographyFetched${infoDisplayMedicines.id}');">Bibliography</a></p>

            <div class="collapse" id="medicinesBibliographyFetched${infoDisplayMedicines.id}">				
                <div class="card text-center" style="width: 100%;   margin-bottom: 50px;">
                     <div id="idmedicinesBibliographyFetched${infoDisplayMedicines.id}"></div>
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
        orisashtmlOutPut = orisasHtmlOutputENG();
        function orisasHtmlOutputENG(){
        document.getElementById('orisasDataInEnglish').innerHTML = "";
        for (var i = dataFromJSON[oduForTheJSON].orisas.length - 1; i >= 0; i--) { //reverse loop to keep the order of the json after a map iteration
            const loopToAllTheOrisasCreated = dataFromJSON[oduForTheJSON].orisas[i].reasonsENG; //iterates to all the reasons on all the orisas created
            const loopToAllTheISBNCreated = dataFromJSON[oduForTheJSON].orisas[i].reasonsISBN;


            var firstLevelOfLoopedInformationForAllTheOrisasCreated =`
            <b>${dataFromJSON[oduForTheJSON].orisas[i].id}. Òrisà  / Irúnmolè : </b><a href="${dataFromJSON[oduForTheJSON].orisas[i].orisaURL}">${dataFromJSON[oduForTheJSON].orisas[i].orisaName}</a> ${dataFromJSON[oduForTheJSON].orisas[i].otherNames}<br>
            <b>Reasons:</b>
            <ul>
            <div id="reasons${dataFromJSON[oduForTheJSON].orisas[i].id}"></div>
            </ul>`;
            document
              .querySelector('#orisasDataInEnglish') //id where to put the info
              .insertAdjacentHTML("afterbegin" , firstLevelOfLoopedInformationForAllTheOrisasCreated)
        
              valuesOfreasonsLoopENG = Object.values(loopToAllTheOrisasCreated);//iterates to all the values of the reasons

              //console.log(dataFromJSON[oduForTheJSON].orisas[i])
        for (var j = valuesOfreasonsLoopENG.length - 1; j >= 0; j--){

        const elementlooped = `<li>${valuesOfreasonsLoopENG[j][1]} <a 
         
        data-bs-toggle="collapse" 
        href="#Orisa${dataFromJSON[oduForTheJSON].orisas[i].orisaNonSpecialCharactername}Bibliography${valuesOfreasonsLoopENG[j][0]}Fetched"  
        role="button" 
        aria-expanded="false" 
        aria-controls="Orisa${dataFromJSON[oduForTheJSON].orisas[i].orisaNonSpecialCharactername}Bibliography${valuesOfreasonsLoopENG[j][0]}Fetched" 
        onclick="fetchBibliography(${valuesOfreasonsLoopENG[j][2]}, 'idOrisa${dataFromJSON[oduForTheJSON].orisas[i].orisaNonSpecialCharactername}BibliographyFetched${valuesOfreasonsLoopENG[j][0]}');">Bibliography</a></li>
           
            <div class="collapse" id="Orisa${dataFromJSON[oduForTheJSON].orisas[i].orisaNonSpecialCharactername}Bibliography${valuesOfreasonsLoopENG[j][0]}Fetched">				
            <div class="card text-center" style="width: 100%;   margin-bottom: 50px;">
                 <div id="idOrisa${dataFromJSON[oduForTheJSON].orisas[i].orisaNonSpecialCharactername}BibliographyFetched${valuesOfreasonsLoopENG[j][0]}"></div>
            </div>
            </div>
    
        `;    
        
          document
          .querySelector(`#reasons${dataFromJSON[oduForTheJSON].orisas[i].id}`) //id where to put the info
          .insertAdjacentHTML("afterbegin" , elementlooped);
    
          //console.log(`${elementlooped}`);
                
              }
          
        } 
        
        
        
        }
         //end of the orisas in ENGLISH

        //start of the orisas consagration in ENGLISH
        orisasConsagrationhtmlOutPut = dataFromJSON[oduForTheJSON]['orisasConsagration'].map(infoDisplayOrisasConsagration => { //route to retreieve the information --- can be change but need to be update on all the places.
            //below code "return" the HTML code
            return `
        
            
            <b>${infoDisplayOrisasConsagration.id} </b>${infoDisplayOrisasConsagration.translation.ENG}<br>
            <br>
            <p>
                <a 
                data-bs-toggle="collapse" 
                href="#orisasConsagrationBibliographyFetched${infoDisplayOrisasConsagration.id}"  
                role="button" 
                aria-expanded="false" 
                aria-controls="orisasConsagrationBibliography${infoDisplayOrisasConsagration.id}" 
                onclick="fetchBibliography(${infoDisplayOrisasConsagration.translation.ISBN}, 'idorisasConsagrationBibliographyFetched${infoDisplayOrisasConsagration.id}');">Bibliography</a></p>

            <div class="collapse" id="orisasConsagrationBibliographyFetched${infoDisplayOrisasConsagration.id}">				
                <div class="card text-center" style="width: 100%;   margin-bottom: 50px;">
                     <div id="idorisasConsagrationBibliographyFetched${infoDisplayOrisasConsagration.id}"></div>
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