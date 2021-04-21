// variables for querySelectors below
const cards = document.querySelector('#box');
const dropDownList = document.querySelector('#populateCheckbox');
const selectCharacters = document.querySelector('#selectCharacters');
const renderCheckBoxMenu = document.querySelector('#checkboxMenu');
const getCheckBoxInput = document.querySelector('form');
const getSearchBoxValue = document.querySelector('#searchInput')
let checkedCharacters = document.querySelectorAll('#coding');
const randomCheckbox = document.querySelector('#randomCheckbox');

// global variables below

// event listeners below
window.addEventListener('load', loadDropDownAndCardsOnWindow);
selectCharacters.addEventListener('click', toggleCharacterMenu);
getSearchBoxValue.addEventListener('input', searchCharacters);

getCheckBoxInput.addEventListener('submit', getRandomCharactersOnSubmit);
getCheckBoxInput.addEventListener('submit', submitCharacter);

//functions below w/out API
//-----------//
//-----------//

// function searchCharacters() {
//   const test10 = [];
//   for (let i = 0; i < marvelCharacters.length; i++) {
//     if (marvelCharacters[i].name.toUpperCase().includes(getSearchBoxValue.value.toUpperCase())) {
//       test10.push(marvelCharacters[i].name)
//     }
//   }
//   createCharacterDropDownList2(test10);
// }

// function submitCharacter(event) {
//   event.preventDefault();
//   checkedCharacters = document.querySelectorAll('#coding');
//   console.log('a', checkedCharacters);
//   testArray = [];
//   const test9 = [];
//   for (let i = 0; i < checkedCharacters.length; i++) { 
//     if (checkedCharacters[i].checked) {
//       marvelCharacters.forEach(character => {
//         if (character.name === checkedCharacters[i].value) {
//           test9.push(character);
//         }
//       });
//     }
//   }
//   console.log('test9', test9);  
//   if (!randomCheckbox.checked) {
//     createCharacterCards(test9);
//   }
// }

// function getRandomCharactersOnSubmit(event) {
//   event.preventDefault();
//   //generate array with random numbers for the length of the array
//   const randomNumberList = [];
//   for (let i = 0; i < 3; i++) {
//     let randomNumber = Math.floor(Math.floor(Math.random() * marvelCharacters.length));
//     console.log(randomNumber)
//     randomNumberList.push(randomNumber);
//   }
//   console.log(randomNumberList)

//   //grab those characters from the array if randomCheckbox Selected
//   const test9 = [];
//   for (let i = 0; i < randomNumberList.length; i++) { 
//     test9.push(marvelCharacters[randomNumberList[i]]);
//   };
//   console.log('test9', test9);  
//   createCharacterCards(test9);

//   //all other checkboxes set to false
//   if(randomCheckbox.checked) {
//     for (var i = 0; i < checkedCharacters.length; i++) { 
//       checkedCharacters[i].checked = false;
//     };
//   }
// }

// function loadDropDownAndCardsOnWindow() {
//   createCharacterDropDownList();
//   createCharacterCards(marvelCharacters);
//   }
  
// function toggleCharacterMenu() {
//   renderCheckBoxMenu.classList.toggle('show');
// }

// function createCharacterCards(data) {
//   let characterCards = '';
//   for (let i = 0; i < data.length; i++) {
//     characterCards += 
//       `
//       <article class='character-box' id='box'>          
//         <div class='tint-overlay'></div>
//         <div class='image-box'>
//           <div class='text-overlay-1'>VIEWS</div>
//           <div class='text-overlay-2'>04</div>
//           <img class='container-image' src ='${data[i].image_url}'
//             alt='${data[i].image_alt}'>
//         </div>
//         <h2 class='name-text'>${data[i].name}</h2>
//         <p class='description-text'>${data[i].desc}</p>
//         <a class='text url-box' href='${data[i].urls[0].url}' target='_blank'>Link to profile</a>
//         <a class='text url-box' href='${data[i].urls[1].url}' target='_blank'>Link to comics</a>
//         <p class='count-text'>Comic Count: ${data[i].comics}</p>
//         <p class='count-text'>Stories Count: ${data[i].stories}</p>
//       </article>  
//       `;
//   }
//   renderCharacterCards(characterCards);
// }

// function renderCharacterCards(renderCards) {
//   cards.innerHTML = renderCards;
// }

// function createCharacterDropDownList() { //what is this doing? creating the character dropdown list from the list of characters
//   var list = '';
//   for (let i = 0; i < marvelCharacters.length; i++) {
//     list += 
//       `
//       <input type='checkbox' id='coding' name='interest' value='${marvelCharacters[i].name}'>
//       <label for='coding'>${marvelCharacters[i].name}</label>
//       <br>
//       `;
//   }
//   renderDropdownList(list);
// }

// function createCharacterDropDownList2(data) { //what is this doing? creating the character dropdown list from the list of characters
//   var list = '';
//   for (let i = 0; i < data.length; i++) {
//     list += 
//       `
//       <input type='checkbox' id='coding' name='interest' value='${data[i]}'>
//       <label for='coding'>${data[i]}</label>
//       <br>
//       `;
//   }
//   renderDropdownList(list);
// }

// function renderDropdownList(list) { //what is this doing? === rendering the character drop down selection list
//   dropDownList.innerHTML = list;
// }

//functions above w/out API
//-----------//
//-----------//

//------------------------------ SETUP FETCH API REQUEST --------------------

// fetch('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=e2deecaf6c770a3c085bbc7ed4b93986&hash=5f76c2f28fdd90fe55091d98e6de3f43')
//   .then(response => response.json())
//   .then(data => console.log(data))

//   fetch('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=e2deecaf6c770a3c085bbc7ed4b93986&hash=5f76c2f28fdd90fe55091d98e6de3f43')
//   .then(response => response.json())
//   .then(response => response.data.results.map(characters => characters))
//   .then(characters => console.log(characters))

//   fetch('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=e2deecaf6c770a3c085bbc7ed4b93986&hash=5f76c2f28fdd90fe55091d98e6de3f43')
//   .then(response => response.json())
//   .then(response => response.data.results.map(character => ({name: character.name, image: character.thumbnail.path, desc: character.description, urls: character.urls, comics: character.comics.available , stories: character.stories.available, })))
//   .then(character => console.log(character))

  //------------------------------

  // function test3() {
  //   const test = ['Falcon', 'Spider-Man', 'Black Widow', 'Adam Warlock', 'Agent Zero', '3-D Man', 'Absorbing Man', 'Spider-Girl (May Parker)', 'Spider-Ham (Larval Earth)', 'Spider-Woman (Mattie Franklin)'];
  //   for (let i = 0; i < test.length; i++) {
  //     let abc = test2(test[i]);
  //   }
  // }
  // test3();

  // function test2(help) {
  //   fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${help}&limit=1&ts=1&apikey=e2deecaf6c770a3c085bbc7ed4b93986&hash=5f76c2f28fdd90fe55091d98e6de3f43`)
  //   .then(response => response.json())
  //   .then(response => response.data.results.map(character => ({name: character.name, image: character.thumbnail.path, desc: character.description, urls: character.urls, comics: character.comics.available , stories: character.stories.available, })))
  //   .then(character => console.log(character));
  // }

  //------------------------------ CODE WORKS TO GRAB SPECIFIC CHARACTERS BUT CAN'T GET THE TESTARRAY TO FILL IN THE CREATE CARDS FUNCTION ----

  //------------//
  //-------------//
  //functions below with API

function loadDropDownAndCardsOnWindow() { //on window load
  createCharacterDropDownList();
  getRandomCharactersOnWindowLoad(); //load random characters
}

function createCharacterDropDownList() { //what is this doing? creating the character dropdown list from the list of characters
  var list = '';
  for (let i = 0; i < test.length; i++) {
    list += 
      `
      <input type='checkbox' id='coding' name='interest' value='${test[i]}'>
      <label for='coding'>${test[i]}</label>
      <br>
      `;
  }
  renderDropdownList(list);
}

function renderDropdownList(list) { //what is this doing? === rendering the character drop down selection list
  dropDownList.innerHTML = list;
}

function getRandomCharactersOnWindowLoad() {
  //generate array with random numbers for the length of the array
  const randomNumberList = [];
  for (let i = 0; i < 8; i++) {
    let randomNumber = Math.floor(Math.floor(Math.random() * test.length));
    randomNumberList.push(randomNumber);
  }

  //grab those characters from the array if randomCheckbox Selected
  const test9 = [];
  for (let i = 0; i < randomNumberList.length; i++) { 
    test9.push(test[randomNumberList[i]]);
  };
  // console.log('test9', test9); 
  getEachCharacter(test9); 
}

function getRandomCharactersOnSubmit(event) {
  event.preventDefault();
  //generate array with random numbers for the length of the array
  const randomNumberList = [];
  for (let i = 0; i < 8; i++) {
    let randomNumber = Math.floor(Math.floor(Math.random() * test.length));
    randomNumberList.push(randomNumber);
  }

  //grab those characters from the array if randomCheckbox Selected
  const test15 = [];
  // console.log('a', randomCheckbox);
  if (randomCheckbox.checked) {
    // console.log('b', randomCheckbox);
    for (let i = 0; i < randomNumberList.length; i++) { 
      test15.push(test[randomNumberList[i]]);
    };
    // console.log('test15', test15); 
    getEachCharacter(test15); 
  }

  // all other checkboxes set to false
  if(randomCheckbox.checked) {
    for (var i = 0; i < checkedCharacters.length; i++) { 
      checkedCharacters[i].checked = false;
    };
  }
}

function getEachCharacter(data) { //what is this doing? === submitting each character to the marvel api
  for (let i = 0; i < data.length; i++) {
    let abc = getCharacterDataFromMarvelAPI(data[i]); // this is the character list
  }
}

function getCharacterDataFromMarvelAPI(characterName) { //what is this doing? === fetching the data for each character from the marvel api
  fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${characterName}&limit=1&ts=1&apikey=e2deecaf6c770a3c085bbc7ed4b93986&hash=5f76c2f28fdd90fe55091d98e6de3f43`)
  .then(response => response.json())
  .then(response => createCharacterListDetails(response))
  .then(character => character);
}

let testArray = []; 

function createCharacterListDetails(response) { //what is this doing? === creating the array of character objects
  response.data.results.forEach(character => testArray.push(character));
  // console.log('testarray', testArray);
  createCharacterCards(testArray);
};

function createCharacterCards(data) { //what is this doing? === creating the character cards to render in the DOM
  let characterCards = '';
  // console.log('data', data);
  for (let i = 0; i < data.length; i++) {
    characterCards += 
      `
      <article class='character-box' id='box'>          
        <div class='tint-overlay'></div>
        <div class='image-box'>
          <img class='container-image' src ='${data[i].thumbnail.path}.${data[i].thumbnail.extension}'
            alt='${data[i].name}'>
        </div>
        <h2 class='name-text'>${data[i].name}</h2>
        <p class='description-text'>${data[i].description}</p>
        <a class='text url-box' href='${data[i].urls[0].url}' target='_blank'>Link to profile</a>
        <a class='text url-box' href='${data[i].urls[1].url}' target='_blank'>Link to comics</a>
        <p class='count-text'>Comic Count: ${data[i].comics.available}</p>
        <p class='count-text'>Stories Count: ${data[i].stories.available}</p>
      </article>  
      `;
  }
  renderCharacterCards(characterCards);
}

function renderCharacterCards(renderCards) { //what is this doing? === rendering the character cards
  cards.innerHTML = renderCards;
}

function searchCharacters() {
  const test10 = [];
  for (let i = 0; i < test.length; i++) {
    if (test[i].toUpperCase().includes(getSearchBoxValue.value.toUpperCase())) {
      test10.push(test[i])
    }
  }
  createCharacterDropDownList2(test10);
}

function createCharacterDropDownList2(data) { //what is this doing? creating the character dropdown list from the list of characters
  var list = '';
  for (let i = 0; i < data.length; i++) {
    list += 
      `
      <input type='checkbox' id='coding' name='interest' value='${data[i]}'>
      <label for='coding'>${data[i]}</label>
      <br>
      `;
  }
  renderDropdownList(list);
}

function renderDropdownList(list) { //what is this doing? === rendering the character drop down selection list
  dropDownList.innerHTML = list;
}

function submitCharacter(event) {
  event.preventDefault();
  checkedCharacters = document.querySelectorAll('#coding');
  testArray = [];
  for (let i = 0; i < checkedCharacters.length; i++) {
    if (checkedCharacters[i].checked && !randomCheckbox.checked) {
      let abc = getCharacterDataFromMarvelAPI(checkedCharacters[i].value); // this is the character list
    }
  }
}
  
function toggleCharacterMenu() {
  renderCheckBoxMenu.classList.toggle('show');
}

//------------//
//-------------//
//functions above with API



//GET CHARACTER NAMES COPY FROM CONSOLE//

// function alphabetList() { //what is this doing? === submitting each character to the marvel api
//   const alphabet = ['y', 'z'];
//   // const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
//   for (let i = 0; i < alphabet.length; i++) {
//     let abc = getCharactersStartingWithAlphabet(alphabet[i]); // this is the character list
//   }
// }

// function getCharactersStartingWithAlphabet(letter) {
//   console.log(letter);
//   fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${letter}&limit=100&ts=1&apikey=e2deecaf6c770a3c085bbc7ed4b93986&hash=5f76c2f28fdd90fe55091d98e6de3f43`)
//   .then(response => response.json())
//   // .then(response => response.data.results.map(characters => characters.name))
//   .then(response => createCharacaterListByName(response))
//   .then(characters => console.log(characters))
// }

// let testArray = []; 

// function createCharacaterListByName(name) {
//   console.log('test7', name.data.results[0].name)
//   name.data.results.map(character => testArray.push(character.name));
//   console.log(testArray);
//   // return testArray;
//   // createCharacterCards(testArray);
// };
// alphabetList();
