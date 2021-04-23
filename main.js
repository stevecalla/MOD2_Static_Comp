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

function getEachCharacter(data) {
  for (let i = 0; i < data.length; i++) {
    let abc = getCharacterDataFromMarvelAPI(data[i]);
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
  createCharacterCards(testArray);
};

function createCharacterCards(data) { //what is this doing? === creating the character cards to render in the DOM
  let characterCards = '';
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