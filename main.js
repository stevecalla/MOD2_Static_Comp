// variables for querySelectors below
let cards = document.querySelector('#box');

// global variables below

// event listeners below
window.addEventListener('load', loadCards);

//functions below
function loadCards() {
  createCharacterCards();
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
  //   fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${help}&limit=100&ts=1&apikey=e2deecaf6c770a3c085bbc7ed4b93986&hash=5f76c2f28fdd90fe55091d98e6de3f43`)
  //   .then(response => response.json())
  //   .then(response => response.data.results.map(character => ({name: character.name, image: character.thumbnail.path, desc: character.description, urls: character.urls, comics: character.comics.available , stories: character.stories.available, })))
  //   .then(character => console.log(character));
  // }

  //------------------------------

  // function test7(response) {
  //   console.log('test7', response)
  //   return response.data.results.map(character => (
  //     {name: character.name, 
  //       image: character.thumbnail.path, 
  //       desc: character.description, 
  //       urls: character.urls, 
  //       comics: character.comics.available , 
  //       stories: character.stories.available, 
  //     }))
  // };
  // // test5();

  // function test7() {
  //   const test10 = ['Falcon', 'Spider-Man', 'Black Widow', 'Adam Warlock', "Agent Zero", "3-D Man", "Absorbing Man", "Spider-Girl (May Parker)", "Spider-Ham (Larval Earth)", "Spider-Woman (Mattie Franklin)"];
  //   for (let i = 0; i < test10.length; i++) {
  //     let abc = test5(test10[i]);
  //   }
  // }
  // test7();

  // function test5(help) {
  //   fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${help}&limit=100&ts=1&apikey=e2deecaf6c770a3c085bbc7ed4b93986&hash=5f76c2f28fdd90fe55091d98e6de3f43`)
  //   .then(response => response.json())
  //   .then(response => test7(response))
  // } 

