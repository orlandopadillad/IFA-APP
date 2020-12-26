//json configuration for the new autocomplete searchbox
const search = document.getElementById('search'); //the searchbox...orlandop
const matchList = document.getElementById('match-list');//the result of the search...orlandop


   //search the values.json and filter it
   const searchStates = async searchText =>{
      const res = await fetch('data/state_capitals.json'); // location of the json file
      const states = await res.json(); //bring the rough data (all the data from the json file)

      // get matches to current text input, this means meanwhile we type the letters will be part of the search
         let matches = states.filter(state =>{  //states.filter create an arra with the result, we need to change the word states for the correct variable in our project
           const regex = new RegExp(`^${searchText}`,'gi') ; //create a regular expresion wih the starts storaged on the search text... the gi matches the lower or high.
           return state.name.match(regex) || state.abbr.match(regex); //return the values of the json on the location state.name or the value on the location state.abbr.
         });
         
            if (searchText.length === 0) { //this clean the data if the values on the search box is empty
               matches = []; // this declare an emtpy array if the value of the search box is empty
               matchList.innerHTML = '';
            }
      // get matches to current text input, this means meanwhile we type the letters will be part of the search
      outputHtml(Matches); //this function will output the values of matches in the dom
   };

   //develop of the function outputHtml
      const outputHtml = Matches =>{
         if (matches.length > 0 ){ // when the text in the search box have a match
             const html = matches.map(match => //ths wil return an array from an array and we are going to write those array with strings
               `<div class"card card-body mb-1">
               <h4>${match.name} (${match.abbr}<span class="text-primary"> ${match.capital} </span></h4>
               <small>Lat: ${match.lat} / Long: ${match.long}</small> 
               <div>
               `
               )
               .join(''); 
               
               matchList.innerHTML = html;
         }
      };
   //develop of the function outputHtml
   
   
   
   //search the values.json and filter it

  
   search.addEventListener('input', () => searchStates(search.value)); //function searchStates need to be change to "searchOdu"

//json configuration for the new autocomplete searchbox


oduIndex = odus.indexOf(odu);// give the index of the default odu of the opon.
console.log (odu, " ", oduIndex + 1); // print the default odu this can be deleted.
function findOduIndex() {
   oduIndex = odus.indexOf(odu);
    
console.log(odu, " ", oduIndex); // print the odu after the function is called

}




