// variables for querySelectors below
const cards = document.querySelector('#box'); //adjust id name
const populateCheckboxList = document.querySelector('#populateCheckbox');
const selectCharacters = document.querySelector('#selectCharacters');
const renderCheckBoxMenu = document.querySelector('#checkboxMenu');
const getCheckBoxInput = document.querySelector('form');
const getSearchBoxInput = document.querySelector('#searchInput');
const randomCheckbox = document.querySelector('#randomCheckbox');

// global variables below

// event listeners below
window.addEventListener('load', loadDropDownAndCardsOnWindow);
selectCharacters.addEventListener('click', toggleCharacterMenu);
getSearchBoxInput.addEventListener('input', searchCharacters);
getCheckBoxInput.addEventListener('submit', getRandomCharactersOnSubmit);
getCheckBoxInput.addEventListener('submit', submitCharacter);


function loadDropDownAndCardsOnWindow() {
  createCharacterCheckboxList(characters);
  getRandomCharactersOnWindowLoad();
}

function createCharacterCheckboxList(currentCharacters) {
  let currentCharacterList = '';
  for (let i = 0; i < currentCharacters.length; i++) {
    currentCharacterList += 
      `
      <label>
        <input type='checkbox' id='checkBox' value='${currentCharacters[i]}'>
        ${currentCharacters[i]}
      </label>
      <br>
      `;
  }
  renderDropdownList(currentCharacterList);
}

function renderDropdownList(currentCharacterList) {
  populateCheckboxList.innerHTML = currentCharacterList;
}

function getRandomCharactersOnWindowLoad() {
  //generate array with random numbers for the length of the array
  const randomNumberList = [];
  for (let i = 0; i < 8; i++) {
    let randomNumber = Math.floor(Math.floor(Math.random() * characters.length));
    randomNumberList.push(randomNumber);
  }

  //grab those characters from the array if randomCheckbox Selected
  const test9 = [];
  for (let i = 0; i < randomNumberList.length; i++) { 
    test9.push(characters[randomNumberList[i]]);
  };
  getEachCharacter(test9); 
}

function getRandomCharactersOnSubmit(event) {
  event.preventDefault();
  //generate array with random numbers for the length of the array
  const randomNumberList = [];
  for (let i = 0; i < 8; i++) {
    let randomNumber = Math.floor(Math.floor(Math.random() * characters.length));
    randomNumberList.push(randomNumber);
  }

  //grab those characters from the array if randomCheckbox Selected
  const test15 = [];
  // console.log('a', randomCheckbox);
  if (randomCheckbox.checked) {
    // console.log('b', randomCheckbox);
    for (let i = 0; i < randomNumberList.length; i++) { 
      test15.push(characters[randomNumberList[i]]);
    };
    // console.log('test15', test15); 
    getEachCharacter(test15); 
  }

  // all other checkboxes set to false
  const checkedCharacters = document.querySelectorAll('#checkBox');
  if(randomCheckbox.checked) {
    for (var i = 0; i < checkedCharacters.length; i++) { 
      checkedCharacters[i].checked = false;
    };
  }

  //set search value = "";
  getSearchBoxInput.innerText.value = "";
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
  for (let i = 0; i < characters.length; i++) {
    if (characters[i].toUpperCase().includes(getSearchBoxInput.value.toUpperCase())) {
      test10.push(characters[i])
    }
  }
  createCharacterCheckboxList(test10);
}

function submitCharacter(event) {
  event.preventDefault();
  const checkedCharacters = document.querySelectorAll('#checkBox');
  testArray = [];
  for (let i = 0; i < checkedCharacters.length; i++) {
    if (checkedCharacters[i].checked && !randomCheckbox.checked) {
      let abc = getCharacterDataFromMarvelAPI(checkedCharacters[i].value); // this is the character characterList
    }
  }
}
  
function toggleCharacterMenu() {
  renderCheckBoxMenu.classList.toggle('show');
}