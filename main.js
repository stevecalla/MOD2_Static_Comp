// variables for querySelectors below
let cards = document.querySelector('#box');
let dropDownList = document.querySelector('#populateCheckbox');
let selectCharacters = document.querySelector('#selectCharacters');
let renderCheckBoxMenu = document.querySelector('#checkboxMenu');

// global variables below

// event listeners below
window.addEventListener('load', loadCards);
selectCharacters.addEventListener('click', toggleCharacterMenu);


//functions below
function loadCards() {
  createCharacterCards();
  createCharacterDropDownList();
  //   test3();
  //   setTimeout(() => {
    //     console.log("second")
    //     createCharacterCards();
    // }, 1000)
  }
  
function toggleCharacterMenu() {
  renderCheckBoxMenu.classList.toggle('show');
}

function createCharacterCards() {
  let characterCards = '';
  for (let i = 0; i < marvelCharacters.length; i++) {
    characterCards += 
      `
      <article class='character-box' id="box">          
        <div class='tint-overlay'></div>
        <div class='image-box'>
          <div class='text-overlay-1'>VIEWS</div>
          <div class='text-overlay-2'>04</div>
          <img class='container-image' src ="${marvelCharacters[i].image_url}"
            alt="${marvelCharacters[i].image_alt}">
        </div>
        <h2 class='name-text'>${marvelCharacters[i].name}</h2>
        <p class='description-text'>${marvelCharacters[i].desc}</p>
        <a class='text url-box' href="${marvelCharacters[i].urls[0].url}" target="_blank">Link to profile</a>
        <a class='text url-box' href="${marvelCharacters[i].urls[1].url}" target="_blank">Link to comics</a>
        <p class='count-text'>Comic Count: ${marvelCharacters[i].comics}</p>
        <p class='count-text'>Stories Count: ${marvelCharacters[i].stories}</p>
      </article>  
      `;
  }
  renderCharacterCards(characterCards);
}

function renderCharacterCards(renderCards) {
  cards.innerHTML = renderCards;
}

//------------------------------ SETUP FETCH API REQUEST --------------------

// fetch("https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=e2deecaf6c770a3c085bbc7ed4b93986&hash=5f76c2f28fdd90fe55091d98e6de3f43")
//   .then(response => response.json())
//   .then(data => console.log(data))

//   fetch("https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=e2deecaf6c770a3c085bbc7ed4b93986&hash=5f76c2f28fdd90fe55091d98e6de3f43")
//   .then(response => response.json())
//   .then(response => response.data.results.map(characters => characters))
//   .then(characters => console.log(characters))

//   fetch("https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=e2deecaf6c770a3c085bbc7ed4b93986&hash=5f76c2f28fdd90fe55091d98e6de3f43")
//   .then(response => response.json())
//   .then(response => response.data.results.map(character => ({name: character.name, image: character.thumbnail.path, desc: character.description, urls: character.urls, comics: character.comics.available , stories: character.stories.available, })))
//   .then(character => console.log(character))

  //------------------------------

  // function test3() {
  //   const test = ['Falcon', 'Spider-Man', 'Black Widow', 'Adam Warlock', "Agent Zero", "3-D Man", "Absorbing Man", "Spider-Girl (May Parker)", "Spider-Ham (Larval Earth)", "Spider-Woman (Mattie Franklin)"];
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

//   let testArray = []; 
//   let abc;

//   function test7(response) {
//     console.log('test7', response)
//     abc = response.data.results.map(character => (
//       {name: character.name, 
//         image: character.thumbnail.path, 
//         desc: character.description, 
//         urls: character.urls, 
//         comics: character.comics.available , 
//         stories: character.stories.available, 
//       }));
//     testArray.push(abc);
//     console.log(testArray);
//     return testArray;
//     // createCharacterCards(testArray);
//   };
//   // test5();
  
//    function test3() {
//     // const test = ['Falcon', 'Spider-Man', 'Black Widow', 'Adam Warlock', 'Agent Zero', '3-D Man', 'Absorbing Man', 'Spider-Girl (May Parker)', 'Spider-Ham (Larval Earth)', 'Spider-Woman (Mattie Franklin)'];
//     const test = ['Spider-Girl (May Parker)', 'Black Widow'];
//     for (let i = 0; i < test.length; i++) {
//       let abc = test2(test[i]);
//     }
//   }
//   // test3();

//   function test2(help) {
//     fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${help}&limit=1&ts=1&apikey=e2deecaf6c770a3c085bbc7ed4b93986&hash=5f76c2f28fdd90fe55091d98e6de3f43`)
//     .then(response => response.json())
//     //.then(response => response.data.results.map(character => ({name: character.name, image: character.thumbnail.path, desc: character.description, urls: character.urls, comics: character.comics.available , stories: character.stories.available, })))
//     .then(response => test7(response))
//     .then(character => console.log('tag1=', character));
//   }

//   function createCharacterCards() {
//     let characterCards = '';
//     console.log('cards1=', testArray);
//     // console.log('cards 0=', testArray[0]);
//     // console.log('cards length=', testArray.length);
//     for (let i = 0; i < testArray.length; i++) {
//       characterCards += 
//         `
//         <article class='character-box' id="box">          
//           <div class='tint-overlay'></div>
//           <div class='image-box'>
//             <div class='text-overlay-1'>VIEWS</div>
//             <div class='text-overlay-2'>04</div>
//             <img class='container-image' src ="${testArray[i][0].image}/landscape_medium.jpg"
//               alt="${testArray[i][0].name}">
//           </div>
//           <h2 class='name-text'>${testArray[i][0].name}</h2>
//           <p class='description-text'>${testArray[i][0].desc}</p>
//           <a class='text url-box' href="${testArray[i][0].urls[0].url}" target="_blank">Link to profile</a>
//           <a class='text url-box' href="${testArray[i][0].urls[0].url}" target="_blank">Link to comics</a>
//           <p class='count-text'>Comic Count: ${testArray[i][0].comics}</p>
//           <p class='count-text'>Stories Count: ${testArray[i][0].stories}</p>
//         </article>  
//         `;
//     }
//     renderCharacterCards(characterCards);
//     // console.log('cards2=', characterCards);
//   }

// function renderCharacterCards(renderCards) {
//   cards.innerHTML = renderCards;
// }

function createCharacterDropDownList() {
  // const test = ['Spider-Girl (May Parker)', 'Black Widow'];
  var list = '';
  for (let i = 0; i < marvelCharacters.length; i++) {
    list += 
      `
      <input type="checkbox" id="coding" name="interest" value="coding">
      <label for="coding">${marvelCharacters[i].name}</label>
      <br>
      `;
  }
  renderDropdownList(list);
}

function renderDropdownList(list) {
  dropDownList.innerHTML = list;
}

{/* <input type="checkbox" id="scales" name="scales">
<label for="scales">${marvelCharacters[i].name}</label>
<br> */}

{/* <form>
  <fieldset>
  <legend>Choose your interests</legend>
    <div>
      <input type="checkbox" id="coding" name="interest" value="coding">
      <label for="coding">Coding</label>
    </div>
    <div>
      <button type="submit">Submit form</button>
    </div>
  </fieldset>
</form> */}


