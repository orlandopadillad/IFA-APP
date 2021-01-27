function fetchOduData (){
    fetch ("https://raw.githubusercontent.com/orlandopadillad/IFA-APP/master/data/oduData/mejis/ejiogbe.json").then(response =>{ //url of the json
        console.log(response);//load if the json was loaded --- this can be deleted.
        if (!response.ok){
            throw Error ("ERROR");
        }
        return response.json();
    })
    .then(datas =>{ //acces to load the info the name DATA --- can be change but need to be update on all the places.
        console.log(datas.ejiogbe.ebbos);//retreieved  information information to the console, --- this can be deleted.
        const htmltwo = datas.ejiogbe.ebbos.parse(useless => { //route to retreieve the information --- can be change but need to be update on all the places.
           //below code "return" the HTML code
            return `
            <p>Full Name: ${useless.translation}</p>
            `;
        })
        .join('');//transform the HTML in a string
        console.log(htmltwo) //log to grab all the info and put it into the HTML
        document
            .querySelector('#oduData') //id where to put the info
            .insertAdjacentHTML("afterbegin" , htmltwo);// insert the text exactly after the id declared above
    }).catch(error => {
        console.log(error);
    });
}
fetchOduData ()