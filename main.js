// variables for querySelectors below
const characterCards = document.querySelector('#characterBox'); //adjust id name
const populateCheckboxList = document.querySelector('#populateCheckbox');
const selectCharacters = document.querySelector('#selectCharacters');
const renderCheckBoxMenu = document.querySelector('#checkboxMenu');
const getCheckBoxInput = document.querySelector('form');
const getSearchBoxInput = document.querySelector('#searchInput');
const randomCheckbox = document.querySelector('#randomCheckbox');
// const randomNumberText = document.querySelector('#randomNumberText');

// global variables below
let renderCharacterList = []; //refactor

// event listeners below
window.addEventListener('load', getRandomCharactersOnWindowLoad);
getCheckBoxInput.addEventListener('submit', getCharactersOnSubmit);
getSearchBoxInput.addEventListener('input', searchCharacters);
selectCharacters.addEventListener('click', toggleCharacterMenu);

function getRandomCharactersOnWindowLoad() {
  getRandomCharacters();
}

function getCharactersOnSubmit(event) {
  event.preventDefault();
  randomCheckbox.checked ? getRandomCharacters() : getCheckedCharacter();
}

function getRandomCharacters() {
  const randomNumbers = [];
  const randomCharacters = [];
  // console.log('a=', randomCharacters);
  createRandomNumbers(randomNumbers);
  convertRandomNumbersToCharacters(randomNumbers, randomCharacters);
  getEachCharacterFromMarvelAPI(randomCharacters); 
  getSearchBoxInput.value = "";
  createCharacterCheckboxList(characters);
  renderCharacterList = [];
}

function createRandomNumbers(randomNumbers) {
  // const randomCount = window.prompt();
  const randomCount = 8;
  for (let i = 0; i < randomCount; i++) {
    randomNumbers.push(Math.floor(Math.floor(Math.random() * characters.length)));
  }
  // console.log(randomNumberText);
  // randomNumberText.innerText = `Get ${randomCount} Random Characters`;
}

function inputNumberOfCharacters() {
  //create
}

function convertRandomNumbersToCharacters(randomNumbers, randomCharacters) {
  randomNumbers.forEach(number => randomCharacters.push(characters[number]));
}

function createCharacterCheckboxList(currentCharacters) {
  let currentCharacterDropDownList = '';
  for (let i = 0; i < currentCharacters.length; i++) {
    currentCharacterDropDownList += 
      `
      <label>
        <input type='checkbox' id='checkBox' value='${currentCharacters[i]}'>
        ${currentCharacters[i]}
      </label>
      <br>
      `;
    }
  renderDropdownList(currentCharacterDropDownList);
}

function renderDropdownList(currentCharacterDropDownList) {
  populateCheckboxList.innerHTML = currentCharacterDropDownList;
}

function getCheckedCharacter() {
  const checkedCharacters = document.querySelectorAll('#checkBox');
  renderCharacterList = [];
  for (let i = 0; i < checkedCharacters.length; i++) {
    if (checkedCharacters[i].checked && !randomCheckbox.checked) {
      let abc = getCharacterDataFromMarvelAPI(checkedCharacters[i].value); // this is the character characterList
    }
  }
}

function getEachCharacterFromMarvelAPI(data) {
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

function createCharacterListDetails(response) { //what is this doing? === creating the array of character objects
  response.data.results.forEach(character => renderCharacterList.push(character));
  createCharacterCards(renderCharacterList);
};

function createCharacterCards(data) { //what is this doing? === creating the character characterCards to render in the DOM
  // console.log('c=', data);
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

function renderCharacterCards(renderCharacterCards) {
  characterCards.innerHTML = renderCharacterCards;
}

function searchCharacters() {
  const searchCharactersDropDownList = [];
  characters.forEach(character => {
    if (character.toUpperCase().includes(getSearchBoxInput.value.toUpperCase())) {
      searchCharactersDropDownList.push(character)  
    };
  })
  createCharacterCheckboxList(searchCharactersDropDownList);
  randomCheckbox.checked ? randomCheckbox.checked = false : randomCheckbox.checked;
}
  
function toggleCharacterMenu() {
  renderCheckBoxMenu.classList.toggle('show');
  randomCheckbox.checked = false;
  createCharacterCheckboxList(characters);
}