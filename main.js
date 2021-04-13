// variables for querySelectors below
let cards = document.querySelector('#box');

// global variables below

// event listeners below
window.addEventListener('load', loadCards);

//functions below
function loadCards() {
  createCharacterCards();
  // test3();
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

  //------------------------------

//   let testArray = []; 

//   function test7(response) {
//     console.log('test7', response)
//     const a = response.data.results.map(character => (
//       {name: character.name, 
//         image: character.thumbnail.path, 
//         desc: character.description, 
//         urls: character.urls, 
//         comics: character.comics.available , 
//         stories: character.stories.available, 
//       }));
//     testArray.push(a);
//     console.log('testArray=', testArray);
//     createCharacterCards(testArray);
//   };
//   // test5();
  
//    function test3() {
//     // const test = ['Falcon', 'Spider-Man', 'Black Widow', 'Adam Warlock', 'Agent Zero', '3-D Man', 'Absorbing Man', 'Spider-Girl (May Parker)', 'Spider-Ham (Larval Earth)', 'Spider-Woman (Mattie Franklin)'];
//     const test = ['Falcon'];
//     for (let i = 0; i < test.length; i++) {
//       let abc = test2(test[i]);
//     }
//   }
//   // test3();

//   function test2(help) {
//     fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${help}&limit=1&ts=1&apikey=e2deecaf6c770a3c085bbc7ed4b93986&hash=5f76c2f28fdd90fe55091d98e6de3f43`)
//     .then(response => response.json())
//     // .then(response => response.data.results.map(character => ({name: character.name, image: character.thumbnail.path, desc: character.description, urls: character.urls, comics: character.comics.available , stories: character.stories.available, })))
//     .then(response => test7(response))
//     .then(character => console.log('tag1=', character));
//   }

//   function createCharacterCards(testArray) {
//     let characterCards = '';
//     console.log('cards=', testArray);
//     console.log('cards 0=', testArray[0]);
//     console.log('cards length=', testArray.length);
//     for (let i = 0; i < testArray.length; i++) {
//       characterCards += 
//         `
//         <article class='character-box' id="box">          
//           <div class='tint-overlay'></div>
//           <div class='image-box'>
//             <div class='text-overlay-1'>VIEWS</div>
//             <div class='text-overlay-2'>04</div>
//             <img class='container-image' src ="${testArray[i].image_url}"
//               alt="${testArray[i].name}">
//           </div>
//           <h2 class='name-text'>${testArray[i].name}</h2>
//           <p class='description-text'>${testArray[i].desc}</p>
//           <a class='text url-box' href="${testArray[i].urls[0].url}" target="_blank">Link to profile</a>
//           <a class='text url-box' href="${marvelCharacters[i].urls[1].url}" target="_blank">Link to comics</a>
//           <p class='count-text'>Comic Count: ${testArray[i].comics}</p>
//           <p class='count-text'>Stories Count: ${testArray[i].stories}</p>
//         </article>  
//         `;
//     }
//     renderCharacterCards(characterCards);
//     console.log(characterCards);
//   }

// function renderCharacterCards(renderCards) {
//   cards.innerHTML = renderCards;
// }
