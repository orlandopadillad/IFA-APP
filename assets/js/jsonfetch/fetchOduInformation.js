
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
    var verseshtmlOutPut = document.getElementById("versesData").innerHTML="";//delete the text from the previous execution
    fetch (oduJSONAddress).then(response =>{ //url of the json
        //console.log(response);//load if the json was loaded --- this can be deleted.
        if (!response.ok){
            throw Error ("ERROR");
        }
        return response.json();
    })
    //start verses process
    .then(dataFromJSONForVerses =>{ //acces to all the information on the JSON under the name dataFromJSONForVerses --- can be change but need to be update on all the places.
        //console.log(dataFromJSONForVerses[oduForTheJSON]['verses']);//retrive  information information to the console, --- this can be deleted.
          verseshtmlOutPut = dataFromJSONForVerses[oduForTheJSON]['verses'].map(infoDisplayForVerses => { //route to retreieve the information --- can be change but need to be update on all the places.
           //below code "return" the HTML code
           return `
           <b>Verso  ${infoDisplayForVerses.id}</b><br><blockquote>\"${infoDisplayForVerses.translation.Yoruba}\"</blockquote>${infoDisplayForVerses.translation.SPA}
           <br><p style="margin-bottom: 10px;"><u>Bibliografia</u></p> 
           
           <p><img src="${infoDisplayForVerses.ISBN.coverbookPicture}" style="width:100px;height:130px;/>
           </div><br>
        
           
           
           `;//to display otherlanguages modify the .SPA to the require language
        })
        .join('');//transform the HTML in a string
        //console.log(verseshtmlOutPut) //log to grab all the info and put it into the HTML--- this can be deleted.
        document
            .querySelector('#versesData') //id where to put the info
            .insertAdjacentHTML("afterbegin" , verseshtmlOutPut);// insert the text exactly after the id declared above
    }).catch(error => {
        console.log(error);
    });
    //end verses process


}

fetchVersesDataSpa ()
