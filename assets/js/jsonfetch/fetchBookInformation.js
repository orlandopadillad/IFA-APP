var bookJSONaddress = 'data\\books\\booksData.json';

function fetchBibliography (isbnvalue,  divToOutputOrisasFetchedInformation){

    //Start of the fetch
    fetch (bookJSONaddress).then(response =>{ //url of the json
        //console.log(response);//load if the json was loaded --- this can be deleted.
        if (!response.ok){
            throw Error ("ERROR");
        }
        return response.json();
    })
    //end of the fetch
    .then(booksJSONData =>{ 

        for (let i = 0; i < booksJSONData.books.length; i++) {
               const element = booksJSONData.books[i];
               //console.log(booksJSONData.books[i]);
               if ((element.isbnThirteen == isbnvalue) || (element.isbnTen == isbnvalue)) {
                   
                   bibliographyOutput = 
                    `
                       <img src="${element.coverbookPicture}" class="card-img-top" alt="${element.nameOftheBook}"style="width:200px; height:270px; margin-left:auto;
                       margin-right:auto; margin-top: 20px;">
                       <div class="card-body">
                           <h3 class="card-title" style="text-align: center;">${element.nameOftheBook}</h3>
                       </div>
                       <ul class="list-group list-group-flush">
                           <li class="list-group-item"><b>Author:</b> ${element.Author}</li>
                           <li class="list-group-item"><b>Editor:</b> ${element.editor}</li>
                           <li class="list-group-item"><b>Publisher:</b> ${element.publisher}</li>
                           <li class="list-group-item"><b>ISBN-10:</b> ${element.isbnTen}</li>
                           <li class="list-group-item"><b>ISBN-13:</b> ${element.isbnThirteen}</li>
                       </ul>
                       <div class="card-body" style="text-align: center;">
                           <a href="${element.url}" target="_blank" class="card-link" style="font-weight: bolder;">Buy This Book.</a>
                       </div>
                   `;
                   
                   document
                   .querySelector(`#${divToOutputOrisasFetchedInformation}`) //id where to put the info
                   .insertAdjacentHTML("beforebegin" , bibliographyOutput);
               } 
            
            
            
           }
               
        
        
        }//closer for dataFromJSON  
        )//Ending of the .then  
        //start of the catch error    
        .catch(error => {
            console.log(error);
        });
        //end of the catch error
    
    
    
    
    }

function fetchBibliographySpanish (isbnvalue,  divToOutputOrisasFetchedInformation){

    //Start of the fetch
    fetch (bookJSONaddress).then(response =>{ //url of the json
        //console.log(response);//load if the json was loaded --- this can be deleted.
        if (!response.ok){
            throw Error ("ERROR");
        }
        return response.json();
    })
    //end of the fetch
    .then(booksJSONData =>{ 

        for (let i = 0; i < booksJSONData.books.length; i++) {
               const element = booksJSONData.books[i];
               //console.log(booksJSONData.books[i]);
               if ((element.isbnThirteen == isbnvalue) || (element.isbnTen == isbnvalue)) {
                   
                   bibliographyOutput = 
                    `
                       <img src="${element.coverbookPicture}" class="card-img-top" alt="${element.nameOftheBook}"style="width:200px; height:270px; margin-left:auto;
                       margin-right:auto; margin-top: 20px;">
                       <div class="card-body">
                           <h3 class="card-title" style="text-align: center;">${element.nameOftheBook}</h3>
                       </div>
                       <ul class="list-group list-group-flush">
                           <li class="list-group-item"><b>Autor:</b> ${element.Author}</li>
                           <li class="list-group-item"><b>Editor:</b> ${element.editor}</li>
                           <li class="list-group-item"><b>Editorial:</b> ${element.publisher}</li>
                           <li class="list-group-item"><b>ISBN-10:</b> ${element.isbnTen}</li>
                           <li class="list-group-item"><b>ISBN-13:</b> ${element.isbnThirteen}</li>
                       </ul>
                       <div class="card-body" style="text-align: center;">
                           <a href="${element.url}" target="_blank" class="card-link" style="font-weight: bolder;">Comprar El Libro.</a>
                       </div>
                   `;
                   
                   document
                   .querySelector(`#${divToOutputOrisasFetchedInformation}`) //id where to put the info
                   .insertAdjacentHTML("beforebegin" , bibliographyOutput);
               } 
            
            
            
           }
               
        
        
        }//closer for dataFromJSON  
        )//Ending of the .then  
        //start of the catch error    
        .catch(error => {
            console.log(error);
        });
        //end of the catch error
    
    
    
    
    }