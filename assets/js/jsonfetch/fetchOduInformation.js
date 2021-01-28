function fetchOduData (){
    var htmlOutPut = document.getElementById("oduData").innerHTML="";//delete the text from the previous execution
    fetch (oduInfoAddress).then(response =>{ //url of the json
        console.log(response);//load if the json was loaded --- this can be deleted.
        if (!response.ok){
            throw Error ("ERROR");
        }
        return response.json();
    })
    .then(datas =>{ //acces to load the info the name DATA --- can be change but need to be update on all the places.
        console.log(eboDisplayinformation);//retreieved  information information to the console, --- this can be deleted.
        var htmlOutPut = eboDisplayinformation.map(infoDisplay => { //route to retreieve the information --- can be change but need to be update on all the places.
           //below code "return" the HTML code
            return `
            <p>${infoDisplay.translation.ENG}</p>
            `;
        })
        .join('');//transform the HTML in a string
        console.log(htmlOutPut) //log to grab all the info and put it into the HTML
        document
            .querySelector('#oduData') //id where to put the info
            .insertAdjacentHTML("afterbegin" , htmlOutPut);// insert the text exactly after the id declared above
    }).catch(error => {
        console.log(error);
    });
}
fetchOduData ()
