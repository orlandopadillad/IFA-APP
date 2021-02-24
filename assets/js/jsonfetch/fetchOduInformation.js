
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
var orisasConsagrationhtmlOutPut = document.getElementById("otherOduNames").innerHTML="";


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
        var orisashtmlOutPut = orisasHtmlOutputENG();
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

        //start of the orisas consagration in ENGLISH
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
        //end of the orisas consagration in ENGLISH

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
         .join('');//transform the HTML in a string
         //console.log(otherNameshtmlOutPut) //log to grab all the info and put it into the HTML--- this can be deleted.
            document
                .querySelector('#otherOduNames') //id where to put the info
                .insertAdjacentHTML("afterbegin" , otherNameshtmlOutPut);// insert the text exactly after the id declared above
        //end of the orisas consagration in ENGLISH


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






//end spanish information request
    


        
    
    
    }//closer for dataFromJSON         
    )//Ending of the .then  
    //start of the catch error    
    .catch(error => {
        console.log(error);
    });
    //end of the catch error


}