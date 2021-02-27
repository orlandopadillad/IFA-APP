
//default functions declaration
//fetchGeneralDescriptionDataENG (); //y commented this because it will run the function as default nad is not neede it due the values received on the url






function fetchGeneralDescriptionDataENG (){
//Start of deleters(delete the text from the previous function execution)
var otherNameshtmlOutPut = document.getElementById("otherOduNames").innerHTML="";

var generalDescriptionhtmlOutPut = document.getElementById("generalDescriptionDataInEnglish").innerHTML="";
var verseshtmlOutPut  = document.getElementById("verseDataInEnglish").innerHTML="";
var ebohtmlOutPut = document.getElementById("eboDataInEnglish").innerHTML="";
var tabooshtmlOutPut  = document.getElementById("taboosDataInEnglish").innerHTML="";
var nameshtmlOutPut = document.getElementById("namesDataInEnglish").innerHTML="";
var medicineshtmlOutPut = document.getElementById("medicinesDataInEnglish").innerHTML="";
var orisashtmlOutPut = document.getElementById("orisasDataInEnglish").innerHTML="";
var orisasConsagrationhtmlOutPut = document.getElementById("orisasConsagrationDataInEnglish").innerHTML="";
var professionshtmlOutPut = document.getElementById("ProfessionsInEnglish").innerHTML="";
var itanifahtmlOutPut = document.getElementById("itanIfaInEnglish").innerHTML="";

var generalDescriptionhtmlOutPutSpanish = document.getElementById("generalDescriptionDataInSpanish").innerHTML="";
var verseshtmlOutPutSpanish = document.getElementById("verseDataInSpanish").innerHTML="";
var ebohtmlOutPutSpanish = document.getElementById("eboDataInSpanish").innerHTML="";
var tabooshtmlOutPutSpanish = document.getElementById("taboosDataInSpanish").innerHTML="";
var nameshtmlOutPutSpanish = document.getElementById("namesDataInSpanish").innerHTML="";
var medicineshtmlOutPutSpanish = document.getElementById("medicinesDataInSpanish").innerHTML="";
var orisashtmlOutPutSpanish = document.getElementById("orisasDataInSpanish").innerHTML="";
var orisasConsagrationhtmlOutPutSpanish = document.getElementById("orisasConsagrationDataInSpanish").innerHTML="";
var professionshtmlOutPutSpanish = document.getElementById("ProfessionsInSpanish").innerHTML="";
var itanifahtmlOutPutSpanish = document.getElementById("itanIfaInEnglish").innerHTML="";

var generalDescriptionhtmlPortugues = document.getElementById("generalDescriptionDataInPortugues").innerHTML="";
var verseshtmlOutPutPortugues = document.getElementById("verseDataInPortugues").innerHTML="";
var ebohtmlOutPutPortugues = document.getElementById("eboDataInPortugues").innerHTML="";
var tabooshtmlOutPutPortugues = document.getElementById("taboosDataInPortugues").innerHTML="";
var nameshtmlOutPutPortugues = document.getElementById("namesDataInPortugues").innerHTML="";
var medicineshtmlOutPutPortugues = document.getElementById("medicinesDataInPortugues").innerHTML="";
var orisasConsagrationhtmlOutPutPortugues = document.getElementById("orisasConsagrationDataInPortugues").innerHTML="";
var orisashtmlOutPutPortugues = document.getElementById("orisasDataInPortugues").innerHTML="";
var professionshtmlOutPutPortugues = document.getElementById("ProfessionsInPortugues").innerHTML="";
var itanifahtmlOutPutPortugues = document.getElementById("itanIfaInEnglish").innerHTML="";



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
                    <b>Ẹbọ   ${infoDisplayForEbo.id}</b>: ${infoDisplayForEbo.translation.ENG}
                                    
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
 
            
            <b>Taboo ${infoDisplayTaboos.id}:</b> ${infoDisplayTaboos.translation.ENG}
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
        for (let i = dataFromJSON[oduForTheJSON].orisas.length - 1; i >= 0; i--) { //reverse loop to keep the order of the json after a map iteration
            const loopToAllTheOrisasCreated = dataFromJSON[oduForTheJSON].orisas[i].reasonsENG; //iterates to all the reasons on all the orisas created

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
        for (let j = valuesOfreasonsLoopENG.length - 1; j >= 0; j--){

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

        //start of the professions consagration in ENGLISH
        professionshtmlOutPut = dataFromJSON[oduForTheJSON]['professions'].map(infoDisplayprofessions => { //route to retreieve the information --- can be change but need to be update on all the places.
            //below code "return" the HTML code
            return `
        
            
            <b>${infoDisplayprofessions.id}. </b>${infoDisplayprofessions.translation.ENG}
                <a 
                data-bs-toggle="collapse" 
                href="#professionsBibliographyFetched${infoDisplayprofessions.id}"  
                role="button" 
                aria-expanded="false" 
                aria-controls="professionsBibliography${infoDisplayprofessions.id}" 
                onclick="fetchBibliography(${infoDisplayprofessions.translation.ISBN}, 'idprofessionsBibliographyFetched${infoDisplayprofessions.id}');">Bibliography</a></p>

            <div class="collapse" id="professionsBibliographyFetched${infoDisplayprofessions.id}">				
                <div class="card text-center" style="width: 100%;   margin-bottom: 50px;">
                     <div id="idprofessionsBibliographyFetched${infoDisplayprofessions.id}"></div>
                </div>
            </div>
            
            `;
         })
         .join('');//transform the HTML in a string
         //console.log(professionshtmlOutPut) //log to grab all the info and put it into the HTML--- this can be deleted.
            document
                .querySelector('#ProfessionsInEnglish') //id where to put the info
                .insertAdjacentHTML("afterbegin" , professionshtmlOutPut);// insert the text exactly after the id declared above
        //end of the professions consagration in ENGLISH

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
    //start spanish information request
        //start of the orisas consagration in ENGLISH
        otherNameshtmlOutPut = dataFromJSON[oduForTheJSON]['oduNames'].map(infoDisplayoduNames => { //route to retreieve the information --- can be change but need to be update on all the places.
            //below code "return" the HTML code
            return `${infoDisplayoduNames}`;
         })
         .join(', ');//transform the HTML in a string
         //console.log(otherNameshtmlOutPut) //log to grab all the info and put it into the HTML--- this can be deleted.
            document
                .querySelector('#otherOduNames') //id where to put the info
                .insertAdjacentHTML("afterbegin" , otherNameshtmlOutPut);// insert the text exactly after the id declared above
        //end of the orisas consagration in ENGLISH
    //start of the ITAN IFA in ENGLISH
        itanifahtmlOutPut = dataFromJSON[oduForTheJSON]['itanIfa'].map(infoDisplayitanIfa => { //route to retreieve the information --- can be change but need to be update on all the places.
            //below code "return" the HTML code
            return `
        
            
            <b>${infoDisplayitanIfa.id} </b>${infoDisplayitanIfa.translation.ENG}
                <a 
                data-bs-toggle="collapse" 
                href="#itanIfaBibliographyFetched${infoDisplayitanIfa.id}"  
                role="button" 
                aria-expanded="false" 
                aria-controls="itanIfaBibliography${infoDisplayitanIfa.id}" 
                onclick="fetchBibliography(${infoDisplayitanIfa.translation.ISBN}, 'iditanIfaBibliographyFetched${infoDisplayitanIfa.id}');">Bibliography</a></p>

            <div class="collapse" id="itanIfaBibliographyFetched${infoDisplayitanIfa.id}">				
                <div class="card text-center" style="width: 100%;   margin-bottom: 50px;">
                     <div id="iditanIfaBibliographyFetched${infoDisplayitanIfa.id}"></div>
                </div>
            </div>
            
            `;
         })
         .join('');//transform the HTML in a string
        //console.log(itanifahtmlOutPut) //log to grab all the info and put it into the HTML--- this can be deleted.
            document
                .querySelector('#itanIfaInEnglish') //id where to put the info
                .insertAdjacentHTML("afterbegin" , itanifahtmlOutPut);// insert the text exactly after the id declared above
    //end of the ITAN IFA in ENGLISH

//start spanish information request7

        //start of the General Description OUTPUT in SPANISH
    
        generalDescriptionhtmlOutPutSpanish = dataFromJSON[oduForTheJSON]['generalDescription'].map(infoFilteredForgeneralDescriptionSpanish => { //route to retreieve the information --- can be change but need to be update on all the places.
            //below code "return" the HTML code
            return `
                     <p><b>${infoFilteredForgeneralDescriptionSpanish.id}. </b>${infoFilteredForgeneralDescriptionSpanish.translation.SPA}                  
                     <a 
              
                     data-bs-toggle="collapse" 
                     href="#generalDescriptionSpanishBibliographyFetched${infoFilteredForgeneralDescriptionSpanish.id}"  
                     role="button" 
                     aria-expanded="false" 
                     aria-controls="generalDescriptionSpanishBibliography${infoFilteredForgeneralDescriptionSpanish.id}" 
                     onclick="fetchBibliographySpanish(${infoFilteredForgeneralDescriptionSpanish.translation.ISBN}, 'idgeneralDescriptionSpanishBibliographyFetched${infoFilteredForgeneralDescriptionSpanish.id}');">Bibliography</a></li>
                
                 <div class="collapse" id="generalDescriptionSpanishBibliographyFetched${infoFilteredForgeneralDescriptionSpanish.id}">				
                     <div class="card text-center" style="width: 100%;   margin-bottom: 50px;">
                          <div id="idgeneralDescriptionSpanishBibliographyFetched${infoFilteredForgeneralDescriptionSpanish.id}"></div>
                     </div>
                 </div>
         `;})
              .join('');//transform the HTML in a string
              //console.log(generalDescriptionhtmlOutPut) //log to grab all the info and put it into the HTML--- this can be deleted.
              document
                  .querySelector('#generalDescriptionDataInSpanish') //id where to put the info
                  .insertAdjacentHTML("afterbegin" , generalDescriptionhtmlOutPutSpanish);// insert the text exactly after the id declared above

         //End of the General Description OUTPUT in SPANISH

        //start of the verses OUTPUT in SPANISH
        verseshtmlOutPutSpanish = dataFromJSON[oduForTheJSON]['verses'].map(infoDisplayForVersesSpanish => { //route to retreieve the information --- can be change but need to be update on all the places.
            //below code "return" the HTML code
            return `
                    <b>Verso  ${infoDisplayForVersesSpanish.id}</b><br><blockquote>\"${infoDisplayForVersesSpanish.translation.Yoruba}\"</blockquote>${infoDisplayForVersesSpanish.translation.SPA}                 
                    <a
                    data-bs-toggle="collapse" 
                    href="#versesSpanishBibliographyFetched${infoDisplayForVersesSpanish.id}"  
                    role="button" 
                    aria-expanded="false" 
                    aria-controls="versesSpanishBibliography${infoDisplayForVersesSpanish.id}" 
                    onclick="fetchBibliographySpanish(${infoDisplayForVersesSpanish.translation.ISBN}, 'idversesSpanishBibliographyFetched${infoDisplayForVersesSpanish.id}');">Bibliography</a></p>
               
                <div class="collapse" id="versesSpanishBibliographyFetched${infoDisplayForVersesSpanish.id}">				
                    <div class="card text-center" style="width: 100%;   margin-bottom: 50px;">
                         <div id="idversesSpanishBibliographyFetched${infoDisplayForVersesSpanish.id}"></div>
                    </div>
                </div>
            `;
         })
         .join('');//transform the HTML in a string
         //console.log(verseshtmlOutPutSpanish) //log to grab all the info and put it into the HTML--- this can be deleted.
            document
                .querySelector('#verseDataInSpanish') //id where to put the info
                .insertAdjacentHTML("afterbegin" , verseshtmlOutPutSpanish);// insert the text exactly after the id declared above
        //En of the verses OUTPUT in SPANISH

        //start of the ebo in SPANISH
        ebohtmlOutPutSpanish = dataFromJSON[oduForTheJSON]['ebo'].map(infoDisplayForEboSpanish => { //route to retreieve the information --- can be change but need to be update on all the places.
            //below code "return" the HTML code
            return `
                    <b>Ẹbọ   ${infoDisplayForEboSpanish.id}</b>: ${infoDisplayForEboSpanish.translation.SPA}
                                    
                    <a 
             
                    data-bs-toggle="collapse" 
                    href="#eboSpanishBibliographyFetched${infoDisplayForEboSpanish.id}"  
                    role="button" 
                    aria-expanded="false" 
                    aria-controls="eboBibliography${infoDisplayForEboSpanish.id}" 
                    onclick="fetchBibliographySpanish(${infoDisplayForEboSpanish.translation.ISBN}, 'ideboSpanishBibliographyFetched${infoDisplayForEboSpanish.id}');">Bibliography</a></p>
               
                <div class="collapse" id="eboSpanishBibliographyFetched${infoDisplayForEboSpanish.id}">				
                    <div class="card text-center" style="width: 100%;   margin-bottom: 50px;">
                         <div id="ideboSpanishBibliographyFetched${infoDisplayForEboSpanish.id}"></div>
                    </div>
                </div>
                `;//to display otherlanguages modify the .SPA to the require language
         
         })
         .join('');//transform the HTML in a string
         //console.log(ebohtmlOutPut) //log to grab all the info and put it into the HTML--- this can be deleted.
            document
                .querySelector('#eboDataInSpanish') //id where to put the info
                .insertAdjacentHTML("afterbegin" , ebohtmlOutPutSpanish);// insert the text exactly after the id declared above
        //end of the ebo in SPANISH

        //start of the taboos in SPANISH
        tabooshtmlOutPutSpanish = dataFromJSON[oduForTheJSON]['taboos'].map(infoDisplayTaboos => { //route to retreieve the information --- can be change but need to be update on all the places.
            //below code "return" the HTML code
            return `
 
            
            <b>Tabú ${infoDisplayTaboos.id}:</b> ${infoDisplayTaboos.translation.SPA}
                <a 
                    data-bs-toggle="collapse" 
                    href="#tabooSpanishBibliographyFetched${infoDisplayTaboos.id}"  
                    role="button" 
                    aria-expanded="false" 
                    aria-controls="tabooSpanishBibliography${infoDisplayTaboos.id}" 
                    onclick="fetchBibliographySpanish(${infoDisplayTaboos.translation.ISBN}, 'idtabooSpanishBibliographyFetched${infoDisplayTaboos.id}');">Bibliography</a></p>
            
                <div class="collapse" id="tabooSpanishBibliographyFetched${infoDisplayTaboos.id}">				
                    <div class="card text-center" style="width: 100%;   margin-bottom: 50px;">
                         <div id="idtabooSpanishBibliographyFetched${infoDisplayTaboos.id}"></div>
                    </div>
                </div>
           
            
            `;
         })
         .join('');//transform the HTML in a string
         //console.log(tabooshtmlOutPut) //log to grab all the info and put it into the HTML--- this can be deleted.
            document
                .querySelector('#taboosDataInSpanish') //id where to put the info
                .insertAdjacentHTML("afterbegin" , tabooshtmlOutPutSpanish);// insert the text exactly after the id declared above
        //end of the taboos in SPANISH

        //start of the names in SPANISH
        nameshtmlOutPutSpanish = dataFromJSON[oduForTheJSON]['names'].map(infoDisplayNamesSpanish => { //route to retreieve the information --- can be change but need to be update on all the places.
            //below code "return" the HTML code
            return `
        
            
            <b>Nombre ${infoDisplayNamesSpanish.id} </b><br><blockquote>\"${infoDisplayNamesSpanish.translation.Yoruba}\"</blockquote>${infoDisplayNamesSpanish.translation.SPA}       
            <a 
                data-bs-toggle="collapse" 
                href="#namesSpanishBibliographyFetched${infoDisplayNamesSpanish.id}"  
                role="button" 
                aria-expanded="false" 
                aria-controls="namesSpanishBibliography${infoDisplayNamesSpanish.id}" 
                onclick="fetchBibliographySpanish(${infoDisplayNamesSpanish.translation.ISBN}, 'idnamesSpanishBibliographyFetched${infoDisplayNamesSpanish.id}');">Bibliography</a></p>
    
            <div class="collapse" id="namesSpanishBibliographyFetched${infoDisplayNamesSpanish.id}">				
                <div class="card text-center" style="width: 100%;   margin-bottom: 50px;">
                     <div id="idnamesSpanishBibliographyFetched${infoDisplayNamesSpanish.id}"></div>
                </div>
            </div>

            
            `;
         })
         .join('');//transform the HTML in a string
         //console.log(nameshtmlOutPut) //log to grab all the info and put it into the HTML--- this can be deleted.
            document
                .querySelector('#namesDataInSpanish') //id where to put the info
                .insertAdjacentHTML("afterbegin" , nameshtmlOutPutSpanish);// insert the text exactly after the id declared above
        //end of the names in SPANISH

        //start of the medicines in ENGLISH
        medicineshtmlOutPutSpanish = dataFromJSON[oduForTheJSON]['medicines'].map(infoDisplayMedicinesSpanish => { //route to retreieve the information --- can be change but need to be update on all the places.

            //below code "return" the HTML code
            return `
 
            
            <b>Medicina ${infoDisplayMedicinesSpanish.id} </b><br>${infoDisplayMedicinesSpanish.translation.SPA}
            <p>
            <a 
                data-bs-toggle="collapse" 
                href="#medicinesSpanishBibliographyFetched${infoDisplayMedicinesSpanish.id}"  
                role="button" 
                aria-expanded="false" 
                aria-controls="medicinesSpanishBibliography${infoDisplayMedicinesSpanish.id}" 
                onclick="fetchBibliographySpanish(${infoDisplayMedicinesSpanish.translation.ISBN}, 'idmedicinesSpanishBibliographyFetched${infoDisplayMedicinesSpanish.id}');">Bibliography</a></p>

            <div class="collapse" id="medicinesSpanishBibliographyFetched${infoDisplayMedicinesSpanish.id}">				
                <div class="card text-center" style="width: 100%;   margin-bottom: 50px;">
                     <div id="idmedicinesSpanishBibliographyFetched${infoDisplayMedicinesSpanish.id}"></div>
                </div>
            </div>
 

            
            `;
         })
         .join('');//transform the HTML in a string
         //console.log(medicineshtmlOutPutSpanish) //log to grab all the info and put it into the HTML--- this can be deleted.
            document
                .querySelector('#medicinesDataInSpanish') //id where to put the info
                .insertAdjacentHTML("afterbegin" , medicineshtmlOutPutSpanish);// insert the text exactly after the id declared above
        //end of the medicines in ENGLISH
        //start of the orisas consagration in ENGLISH
        orisasConsagrationhtmlOutPutSpanish = dataFromJSON[oduForTheJSON]['orisasConsagration'].map(infoDisplayOrisasConsagration => { //route to retreieve the information --- can be change but need to be update on all the places.
        //below code "return" the HTML code
        return `
    
        
        <b>${infoDisplayOrisasConsagration.id} </b>${infoDisplayOrisasConsagration.translation.SPA}<br>
        <br>
        <p>
            <a 
            data-bs-toggle="collapse" 
            href="#orisasConsagrationSpanishBibliographyFetched${infoDisplayOrisasConsagration.id}"  
            role="button" 
            aria-expanded="false" 
            aria-controls="orisasConsagrationSpanishBibliography${infoDisplayOrisasConsagration.id}" 
            onclick="fetchBibliographySpanish(${infoDisplayOrisasConsagration.translation.ISBN}, 'idorisasConsagrationSpanishBibliographyFetched${infoDisplayOrisasConsagration.id}');">Bibliography</a></p>

        <div class="collapse" id="orisasConsagrationSpanishBibliographyFetched${infoDisplayOrisasConsagration.id}">				
            <div class="card text-center" style="width: 100%;   margin-bottom: 50px;">
                 <div id="idorisasConsagrationSpanishBibliographyFetched${infoDisplayOrisasConsagration.id}"></div>
            </div>
        </div>
        
        `;
        })
        .join('');//transform the HTML in a string
        //console.log(orisasConsagrationhtmlOutPutSpanish) //log to grab all the info and put it into the HTML--- this can be deleted.
            document
                .querySelector('#orisasConsagrationDataInSpanish') //id where to put the info
                .insertAdjacentHTML("afterbegin" , orisasConsagrationhtmlOutPutSpanish);// insert the text exactly after the id declared above
        //end of the orisas consagration in ENGLISH

        //start of the orisas in ENGLISH
        orisashtmlOutPutSpanish = orisasHtmlOutputSPA();
        function orisasHtmlOutputSPA(){
        document.getElementById('orisasDataInSpanish').innerHTML = "";
        for (let i = dataFromJSON[oduForTheJSON].orisas.length - 1; i >= 0; i--) { //reverse loop to keep the order of the json after a map iteration
            const loopToAllTheOrisasCreatedESP = dataFromJSON[oduForTheJSON].orisas[i].reasonsSPA; //iterates to all the reasons on all the orisas created

            var firstLevelOfLoopedInformationForAllTheOrisasCreatedSPA =`
            <b>${dataFromJSON[oduForTheJSON].orisas[i].id}. Òrisà  / Irúnmolè : </b><a href="${dataFromJSON[oduForTheJSON].orisas[i].orisaURL}">${dataFromJSON[oduForTheJSON].orisas[i].orisaName}</a> ${dataFromJSON[oduForTheJSON].orisas[i].otherNames}<br>
            <b>Reasons:</b>
            <ul>
            <div id="reasonsSpanish${dataFromJSON[oduForTheJSON].orisas[i].id}"></div>
            </ul>`;
            document
              .querySelector('#orisasDataInSpanish') //id where to put the info
              .insertAdjacentHTML("afterbegin" , firstLevelOfLoopedInformationForAllTheOrisasCreatedSPA)
        
              valuesOfreasonsLoopSPA = Object.values(loopToAllTheOrisasCreatedESP);//iterates to all the values of the reasons

              //console.log(valuesOfreasonsLoopSPA)
        for (let j = valuesOfreasonsLoopSPA.length - 1; j >= 0; j--){

        const elementloopedSpanish = `<li>${valuesOfreasonsLoopSPA[j][1]} <a 
         
        data-bs-toggle="collapse" 
        href="#OrisaSpanish${dataFromJSON[oduForTheJSON].orisas[i].orisaNonSpecialCharactername}Bibliography${valuesOfreasonsLoopSPA[j][0]}Fetched"  
        role="button" 
        aria-expanded="false" 
        aria-controls="OrisaSpanish${dataFromJSON[oduForTheJSON].orisas[i].orisaNonSpecialCharactername}Bibliography${valuesOfreasonsLoopSPA[j][0]}Fetched" 
        onclick="fetchBibliographySpanish(${valuesOfreasonsLoopSPA[j][2]}, 'idOrisaSpanish${dataFromJSON[oduForTheJSON].orisas[i].orisaNonSpecialCharactername}BibliographyFetched${valuesOfreasonsLoopSPA[j][0]}');">Bibliography</a></li>
           
            <div class="collapse" id="OrisaSpanish${dataFromJSON[oduForTheJSON].orisas[i].orisaNonSpecialCharactername}Bibliography${valuesOfreasonsLoopSPA[j][0]}Fetched">				
            <div class="card text-center" style="width: 100%;   margin-bottom: 50px;">
                 <div id="idOrisaSpanish${dataFromJSON[oduForTheJSON].orisas[i].orisaNonSpecialCharactername}BibliographyFetched${valuesOfreasonsLoopSPA[j][0]}"></div>
            </div>
            </div>
    
        `;    
        
          document
          .querySelector(`#reasonsSpanish${dataFromJSON[oduForTheJSON].orisas[i].id}`) //id where to put the info
          .insertAdjacentHTML("afterbegin" , elementloopedSpanish);
    
          //console.log(`${elementloopedSpanish}`);
                
              }
          
        } 
        
        
        
        }
         //end of the orisas in ENGLISH
        //start of the orisas consagration in ENGLISH
        professionshtmlOutPutSpanish = dataFromJSON[oduForTheJSON]['professions'].map(infoDisplayprofessionsSpanish => { //route to retreieve the information --- can be change but need to be update on all the places.
            //below code "return" the HTML code
            return `
        
            
            <b>${infoDisplayprofessionsSpanish.id}. </b>${infoDisplayprofessionsSpanish.translation.SPA}
                <a 
                data-bs-toggle="collapse" 
                href="#professionsSpanishBibliographyFetched${infoDisplayprofessionsSpanish.id}"  
                role="button" 
                aria-expanded="false" 
                aria-controls="professionsSpanishBibliography${infoDisplayprofessionsSpanish.id}" 
                onclick="fetchBibliographySpanish(${infoDisplayprofessionsSpanish.translation.ISBN}, 'idprofessionsSpanishBibliographyFetched${infoDisplayprofessionsSpanish.id}');">Bibliography</a></p>

            <div class="collapse" id="professionsSpanishBibliographyFetched${infoDisplayprofessionsSpanish.id}">				
                <div class="card text-center" style="width: 100%;   margin-bottom: 50px;">
                     <div id="idprofessionsSpanishBibliographyFetched${infoDisplayprofessionsSpanish.id}"></div>
                </div>
            </div>
            
            `;
         })
         .join('');//transform the HTML in a string
         //console.log(professionshtmlOutPutSpanish) //log to grab all the info and put it into the HTML--- this can be deleted.
            document
                .querySelector('#ProfessionsInSpanish') //id where to put the info
                .insertAdjacentHTML("afterbegin" , professionshtmlOutPutSpanish);// insert the text exactly after the id declared above
        //end of the orisas consagration in ENGLISH

        //start of the ITAN IFA in Spanish
        itanifahtmlOutPutSpanish = dataFromJSON[oduForTheJSON]['itanIfa'].map(infoDisplayitanIfaSpanish => { //route to retreieve the information --- can be change but need to be update on all the places.
            //below code "return" the HTML code
            return `
        
            
            <b>${infoDisplayitanIfaSpanish.id} </b>${infoDisplayitanIfaSpanish.translation.SPA}
                <a 
                data-bs-toggle="collapse" 
                href="#itanIfaBibliographySpanishFetched${infoDisplayitanIfaSpanish.id}"  
                role="button" 
                aria-expanded="false" 
                aria-controls="itanIfaBibliographySpanish${infoDisplayitanIfaSpanish.id}" 
                onclick="fetchBibliographySpanish(${infoDisplayitanIfaSpanish.translation.ISBN}, 'iditanIfaBibliographySpanishFetched${infoDisplayitanIfaSpanish.id}');">Bibliography</a></p>

            <div class="collapse" id="itanIfaBibliographySpanishFetched${infoDisplayitanIfaSpanish.id}">				
                <div class="card text-center" style="width: 100%;   margin-bottom: 50px;">
                     <div id="iditanIfaBibliographySpanishFetched${infoDisplayitanIfaSpanish.id}"></div>
                </div>
            </div>
            
            `;
         })
         .join('');//transform the HTML in a string
        //console.log(itanifahtmlOutPutSpanish) //log to grab all the info and put it into the HTML--- this can be deleted.
            document
                .querySelector('#itanIfaInSpanish') //id where to put the info
                .insertAdjacentHTML("afterbegin" , itanifahtmlOutPutSpanish);// insert the text exactly after the id declared above
        //end of the ITAN IFA in Spanish
//end spanish information request



//Start Portugues information request


 //start of the General Description OUTPUT in Portugues
    
        generalDescriptionhtmlPortugues = dataFromJSON[oduForTheJSON]['generalDescription'].map(infoFilteredForgeneralDescriptionPortugues => { //route to retreieve the information --- can be change but need to be update on all the places.
            //below code "return" the HTML code
            return `
                     <p><b>${infoFilteredForgeneralDescriptionPortugues.id}. </b>${infoFilteredForgeneralDescriptionPortugues.translation.POR}                  
                     <a 
              
                     data-bs-toggle="collapse" 
                     href="#generalDescriptionPortuguesBibliographyFetched${infoFilteredForgeneralDescriptionPortugues.id}"  
                     role="button" 
                     aria-expanded="false" 
                     aria-controls="generalDescriptionPortuguesBibliography${infoFilteredForgeneralDescriptionPortugues.id}" 
                     onclick="fetchBibliographyPortugues(${infoFilteredForgeneralDescriptionPortugues.translation.ISBN}, 'idgeneralDescriptionPortuguesBibliographyFetched${infoFilteredForgeneralDescriptionPortugues.id}');">Bibliography</a></li>
                
                 <div class="collapse" id="generalDescriptionPortuguesBibliographyFetched${infoFilteredForgeneralDescriptionPortugues.id}">				
                     <div class="card text-center" style="width: 100%;   margin-bottom: 50px;">
                          <div id="idgeneralDescriptionPortuguesBibliographyFetched${infoFilteredForgeneralDescriptionPortugues.id}"></div>
                     </div>
                 </div>
         `;})
              .join('');//transform the HTML in a string
              //console.log(generalDescriptionhtmlOutPut) //log to grab all the info and put it into the HTML--- this can be deleted.
              document
                  .querySelector('#generalDescriptionDataInPortugues') //id where to put the info
                  .insertAdjacentHTML("afterbegin" , generalDescriptionhtmlPortugues);// insert the text exactly after the id declared above

         //End of the General Description OUTPUT in Portugues

        //start of the verses OUTPUT in Portugues
        verseshtmlOutPutPortugues = dataFromJSON[oduForTheJSON]['verses'].map(infoDisplayForVersesPortugues => { //route to retreieve the information --- can be change but need to be update on all the places.
            //below code "return" the HTML code
            return `
                    <b>Verso  ${infoDisplayForVersesPortugues.id}</b><br><blockquote>\"${infoDisplayForVersesPortugues.translation.Yoruba}\"</blockquote>${infoDisplayForVersesPortugues.translation.POR}                 
                    <a
                    data-bs-toggle="collapse" 
                    href="#versesPortuguesBibliographyFetched${infoDisplayForVersesPortugues.id}"  
                    role="button" 
                    aria-expanded="false" 
                    aria-controls="versesPortuguesBibliography${infoDisplayForVersesPortugues.id}" 
                    onclick="fetchBibliographyPortugues(${infoDisplayForVersesPortugues.translation.ISBN}, 'idversesPortuguesBibliographyFetched${infoDisplayForVersesPortugues.id}');">Bibliography</a></p>
               
                <div class="collapse" id="versesPortuguesBibliographyFetched${infoDisplayForVersesPortugues.id}">				
                    <div class="card text-center" style="width: 100%;   margin-bottom: 50px;">
                         <div id="idversesPortuguesBibliographyFetched${infoDisplayForVersesPortugues.id}"></div>
                    </div>
                </div>
            `;
         })
         .join('');//transform the HTML in a string
         //console.log(verseshtmlOutPutPortugues) //log to grab all the info and put it into the HTML--- this can be deleted.
            document
                .querySelector('#verseDataInPortugues') //id where to put the info
                .insertAdjacentHTML("afterbegin" , verseshtmlOutPutPortugues);// insert the text exactly after the id declared above
        //En of the verses OUTPUT in Portugues

        //start of the ebo in Portugues
        ebohtmlOutPutPortugues = dataFromJSON[oduForTheJSON]['ebo'].map(infoDisplayForEboPortugues => { //route to retreieve the information --- can be change but need to be update on all the places.
            //below code "return" the HTML code
            return `
                    <b>Ẹbọ   ${infoDisplayForEboPortugues.id}</b>: ${infoDisplayForEboPortugues.translation.POR}
                                    
                    <a 
             
                    data-bs-toggle="collapse" 
                    href="#eboPortuguesBibliographyFetched${infoDisplayForEboPortugues.id}"  
                    role="button" 
                    aria-expanded="false" 
                    aria-controls="eboBibliography${infoDisplayForEboPortugues.id}" 
                    onclick="fetchBibliographyPortugues(${infoDisplayForEboPortugues.translation.ISBN}, 'ideboPortuguesBibliographyFetched${infoDisplayForEboPortugues.id}');">Bibliography</a></p>
               
                <div class="collapse" id="eboPortuguesBibliographyFetched${infoDisplayForEboPortugues.id}">				
                    <div class="card text-center" style="width: 100%;   margin-bottom: 50px;">
                         <div id="ideboPortuguesBibliographyFetched${infoDisplayForEboPortugues.id}"></div>
                    </div>
                </div>
                `;//to display otherlanguages modify the .SPA to the require language
         
         })
         .join('');//transform the HTML in a string
         //console.log(ebohtmlOutPutPortugues) //log to grab all the info and put it into the HTML--- this can be deleted.
            document
                .querySelector('#eboDataInPortugues') //id where to put the info
                .insertAdjacentHTML("afterbegin" , ebohtmlOutPutPortugues);// insert the text exactly after the id declared above
        //end of the ebo in Portugues

        //start of the taboos in Portugues
        tabooshtmlOutPutPortugues = dataFromJSON[oduForTheJSON]['taboos'].map(infoDisplayTaboos => { //route to retreieve the information --- can be change but need to be update on all the places.
            //below code "return" the HTML code
            return `
 
            
            <b>Tabú ${infoDisplayTaboos.id}:</b> ${infoDisplayTaboos.translation.POR}
                <a 
                    data-bs-toggle="collapse" 
                    href="#tabooPortuguesBibliographyFetched${infoDisplayTaboos.id}"  
                    role="button" 
                    aria-expanded="false" 
                    aria-controls="tabooPortuguesBibliography${infoDisplayTaboos.id}" 
                    onclick="fetchBibliographyPortugues(${infoDisplayTaboos.translation.ISBN}, 'idtabooPortuguesBibliographyFetched${infoDisplayTaboos.id}');">Bibliography</a></p>
            
                <div class="collapse" id="tabooPortuguesBibliographyFetched${infoDisplayTaboos.id}">				
                    <div class="card text-center" style="width: 100%;   margin-bottom: 50px;">
                         <div id="idtabooPortuguesBibliographyFetched${infoDisplayTaboos.id}"></div>
                    </div>
                </div>
           
            
            `;
         })
         .join('');//transform the HTML in a string
         //console.log(tabooshtmlOutPut) //log to grab all the info and put it into the HTML--- this can be deleted.
            document
                .querySelector('#taboosDataInPortugues') //id where to put the info
                .insertAdjacentHTML("afterbegin" , tabooshtmlOutPutPortugues);// insert the text exactly after the id declared above
        //end of the taboos in Portugues

        //start of the names in Portugues
        nameshtmlOutPutPortugues = dataFromJSON[oduForTheJSON]['names'].map(infoDisplayNamesPortugues => { //route to retreieve the information --- can be change but need to be update on all the places.
            //below code "return" the HTML code
            return `
        
            
            <b>Nombre ${infoDisplayNamesPortugues.id} </b><br><blockquote>\"${infoDisplayNamesPortugues.translation.Yoruba}\"</blockquote>${infoDisplayNamesPortugues.translation.POR}       
            <a 
                data-bs-toggle="collapse" 
                href="#namesPortuguesBibliographyFetched${infoDisplayNamesPortugues.id}"  
                role="button" 
                aria-expanded="false" 
                aria-controls="namesPortuguesBibliography${infoDisplayNamesPortugues.id}" 
                onclick="fetchBibliographyPortugues(${infoDisplayNamesPortugues.translation.ISBN}, 'idnamesPortuguesBibliographyFetched${infoDisplayNamesPortugues.id}');">Bibliography</a></p>
    
            <div class="collapse" id="namesPortuguesBibliographyFetched${infoDisplayNamesPortugues.id}">				
                <div class="card text-center" style="width: 100%;   margin-bottom: 50px;">
                     <div id="idnamesPortuguesBibliographyFetched${infoDisplayNamesPortugues.id}"></div>
                </div>
            </div>

            
            `;
         })
         .join('');//transform the HTML in a string
         //console.log(nameshtmlOutPut) //log to grab all the info and put it into the HTML--- this can be deleted.
            document
                .querySelector('#namesDataInPortugues') //id where to put the info
                .insertAdjacentHTML("afterbegin" , nameshtmlOutPutPortugues);// insert the text exactly after the id declared above
        //end of the names in Portugues

        //start of the medicines in ENGLISH
        medicineshtmlOutPutPortugues = dataFromJSON[oduForTheJSON]['medicines'].map(infoDisplayMedicinesPortugues => { //route to retreieve the information --- can be change but need to be update on all the places.

            //below code "return" the HTML code
            return `
 
            
            <b>Medicina ${infoDisplayMedicinesPortugues.id} </b><br>${infoDisplayMedicinesPortugues.translation.POR}
            <p>
            <a 
                data-bs-toggle="collapse" 
                href="#medicinesPortuguesBibliographyFetched${infoDisplayMedicinesPortugues.id}"  
                role="button" 
                aria-expanded="false" 
                aria-controls="medicinesPortuguesBibliography${infoDisplayMedicinesPortugues.id}" 
                onclick="fetchBibliographyPortugues(${infoDisplayMedicinesPortugues.translation.ISBN}, 'idmedicinesPortuguesBibliographyFetched${infoDisplayMedicinesPortugues.id}');">Bibliography</a></p>

            <div class="collapse" id="medicinesPortuguesBibliographyFetched${infoDisplayMedicinesPortugues.id}">				
                <div class="card text-center" style="width: 100%;   margin-bottom: 50px;">
                     <div id="idmedicinesPortuguesBibliographyFetched${infoDisplayMedicinesPortugues.id}"></div>
                </div>
            </div>
 

            
            `;
         })
         .join('');//transform the HTML in a string
         //console.log(medicineshtmlOutPutPortugues) //log to grab all the info and put it into the HTML--- this can be deleted.
            document
                .querySelector('#medicinesDataInPortugues') //id where to put the info
                .insertAdjacentHTML("afterbegin" , medicineshtmlOutPutPortugues);// insert the text exactly after the id declared above
        //end of the medicines in ENGLISH
        //start of the orisas consagration in ENGLISH
        orisasConsagrationhtmlOutPutPortugues = dataFromJSON[oduForTheJSON]['orisasConsagration'].map(infoDisplayOrisasConsagration => { //route to retreieve the information --- can be change but need to be update on all the places.
        //below code "return" the HTML code
        return `
    
        
        <b>${infoDisplayOrisasConsagration.id} </b>${infoDisplayOrisasConsagration.translation.POR}<br>
        <br>
        <p>
            <a 
            data-bs-toggle="collapse" 
            href="#orisasConsagrationPortuguesBibliographyFetched${infoDisplayOrisasConsagration.id}"  
            role="button" 
            aria-expanded="false" 
            aria-controls="orisasConsagrationPortuguesBibliography${infoDisplayOrisasConsagration.id}" 
            onclick="fetchBibliographyPortugues(${infoDisplayOrisasConsagration.translation.ISBN}, 'idorisasConsagrationPortuguesBibliographyFetched${infoDisplayOrisasConsagration.id}');">Bibliography</a></p>

        <div class="collapse" id="orisasConsagrationPortuguesBibliographyFetched${infoDisplayOrisasConsagration.id}">				
            <div class="card text-center" style="width: 100%;   margin-bottom: 50px;">
                 <div id="idorisasConsagrationPortuguesBibliographyFetched${infoDisplayOrisasConsagration.id}"></div>
            </div>
        </div>
        
        `;
        })
        .join('');//transform the HTML in a string
        //console.log(orisasConsagrationhtmlOutPutPortugues) //log to grab all the info and put it into the HTML--- this can be deleted.
            document
                .querySelector('#orisasConsagrationDataInPortugues') //id where to put the info
                .insertAdjacentHTML("afterbegin" , orisasConsagrationhtmlOutPutPortugues);// insert the text exactly after the id declared above
        //end of the orisas consagration in ENGLISH

        //start of the orisas in ENGLISH
        orisashtmlOutPutPortugues = orisasHtmlOutputPOR();
        function orisasHtmlOutputPOR(){
        document.getElementById('orisasDataInPortugues').innerHTML = "";
        for (let i = dataFromJSON[oduForTheJSON].orisas.length - 1; i >= 0; i--) { //reverse loop to keep the order of the json after a map iteration
            const loopToAllTheOrisasCreatedESP = dataFromJSON[oduForTheJSON].orisas[i].reasonsPOR; //iterates to all the reasons on all the orisas created

            var firstLevelOfLoopedInformationForAllTheOrisasCreatedPOR =`
            <b>${dataFromJSON[oduForTheJSON].orisas[i].id}. Òrisà  / Irúnmolè : </b><a href="${dataFromJSON[oduForTheJSON].orisas[i].orisaURL}">${dataFromJSON[oduForTheJSON].orisas[i].orisaName}</a> ${dataFromJSON[oduForTheJSON].orisas[i].otherNames}<br>
            <b>Reasons:</b>
            <ul>
            <div id="reasonsPortugues${dataFromJSON[oduForTheJSON].orisas[i].id}"></div>
            </ul>`;
            document
              .querySelector('#orisasDataInPortugues') //id where to put the info
              .insertAdjacentHTML("afterbegin" , firstLevelOfLoopedInformationForAllTheOrisasCreatedPOR)
        
              valuesOfreasonsLoopPOR = Object.values(loopToAllTheOrisasCreatedESP);//iterates to all the values of the reasons

              //console.log(valuesOfreasonsLoopPOR)
        for (let j = valuesOfreasonsLoopPOR.length - 1; j >= 0; j--){

        const elementloopedPortugues = `<li>${valuesOfreasonsLoopPOR[j][1]} <a 
         
        data-bs-toggle="collapse" 
        href="#OrisaPortugues${dataFromJSON[oduForTheJSON].orisas[i].orisaNonSpecialCharactername}Bibliography${valuesOfreasonsLoopPOR[j][0]}Fetched"  
        role="button" 
        aria-expanded="false" 
        aria-controls="OrisaPortugues${dataFromJSON[oduForTheJSON].orisas[i].orisaNonSpecialCharactername}Bibliography${valuesOfreasonsLoopPOR[j][0]}Fetched" 
        onclick="fetchBibliographyPortugues(${valuesOfreasonsLoopPOR[j][2]}, 'idOrisaPortugues${dataFromJSON[oduForTheJSON].orisas[i].orisaNonSpecialCharactername}BibliographyFetched${valuesOfreasonsLoopPOR[j][0]}');">Bibliography</a></li>
           
            <div class="collapse" id="OrisaPortugues${dataFromJSON[oduForTheJSON].orisas[i].orisaNonSpecialCharactername}Bibliography${valuesOfreasonsLoopPOR[j][0]}Fetched">				
            <div class="card text-center" style="width: 100%;   margin-bottom: 50px;">
                 <div id="idOrisaPortugues${dataFromJSON[oduForTheJSON].orisas[i].orisaNonSpecialCharactername}BibliographyFetched${valuesOfreasonsLoopPOR[j][0]}"></div>
            </div>
            </div>
    
        `;    
        
          document
          .querySelector(`#reasonsPortugues${dataFromJSON[oduForTheJSON].orisas[i].id}`) //id where to put the info
          .insertAdjacentHTML("afterbegin" , elementloopedPortugues);
    
          //console.log(`${elementloopedPortugues}`);
                
              }
          
        } 
        
        
        
        }
         //end of the orisas in ENGLISH
        //start of the orisas consagration in ENGLISH
        professionshtmlOutPutPortugues = dataFromJSON[oduForTheJSON]['professions'].map(infoDisplayprofessionsPortugues => { //route to retreieve the information --- can be change but need to be update on all the places.
            //below code "return" the HTML code
            return `
        
            
            <b>${infoDisplayprofessionsPortugues.id}. </b>${infoDisplayprofessionsPortugues.translation.POR}
                <a 
                data-bs-toggle="collapse" 
                href="#professionsPortuguesBibliographyFetched${infoDisplayprofessionsPortugues.id}"  
                role="button" 
                aria-expanded="false" 
                aria-controls="professionsPortuguesBibliography${infoDisplayprofessionsPortugues.id}" 
                onclick="fetchBibliographyPortugues(${infoDisplayprofessionsPortugues.translation.ISBN}, 'idprofessionsPortuguesBibliographyFetched${infoDisplayprofessionsPortugues.id}');">Bibliography</a></p>

            <div class="collapse" id="professionsPortuguesBibliographyFetched${infoDisplayprofessionsPortugues.id}">				
                <div class="card text-center" style="width: 100%;   margin-bottom: 50px;">
                     <div id="idprofessionsPortuguesBibliographyFetched${infoDisplayprofessionsPortugues.id}"></div>
                </div>
            </div>
            
            `;
         })
         .join('');//transform the HTML in a string
         //console.log(professionshtmlOutPutPortugues) //log to grab all the info and put it into the HTML--- this can be deleted.
            document
                .querySelector('#ProfessionsInPortugues') //id where to put the info
                .insertAdjacentHTML("afterbegin" , professionshtmlOutPutPortugues);// insert the text exactly after the id declared above
        //end of the orisas consagration in ENGLISH

        //start of the ITAN IFA in Portugues
        itanifahtmlOutPutPortugues = dataFromJSON[oduForTheJSON]['itanIfa'].map(infoDisplayitanIfaPortugues => { //route to retreieve the information --- can be change but need to be update on all the places.
            //below code "return" the HTML code
            return `
        
            
            <b>${infoDisplayitanIfaPortugues.id} </b>${infoDisplayitanIfaPortugues.translation.POR}
                <a 
                data-bs-toggle="collapse" 
                href="#itanIfaBibliographyPortuguesFetched${infoDisplayitanIfaPortugues.id}"  
                role="button" 
                aria-expanded="false" 
                aria-controls="itanIfaBibliographyPortugues${infoDisplayitanIfaPortugues.id}" 
                onclick="fetchBibliographyPortugues(${infoDisplayitanIfaPortugues.translation.ISBN}, 'iditanIfaBibliographyPortuguesFetched${infoDisplayitanIfaPortugues.id}');">Bibliography</a></p>

            <div class="collapse" id="itanIfaBibliographyPortuguesFetched${infoDisplayitanIfaPortugues.id}">				
                <div class="card text-center" style="width: 100%;   margin-bottom: 50px;">
                     <div id="iditanIfaBibliographyPortuguesFetched${infoDisplayitanIfaPortugues.id}"></div>
                </div>
            </div>
            
            `;
         })
         .join('');//transform the HTML in a string
        //console.log(itanifahtmlOutPutPortugues) //log to grab all the info and put it into the HTML--- this can be deleted.
            document
                .querySelector('#itanIfaInPortugues') //id where to put the info
                .insertAdjacentHTML("afterbegin" , itanifahtmlOutPutPortugues);// insert the text exactly after the id declared above
        //end of the ITAN IFA in Portugues


//End Portugues information request


        
    
    
    }//closer for dataFromJSON         
    )//Ending of the .then  
    //start of the catch error    
    .catch(error => {
        console.log(error);
    });
    //end of the catch error


}