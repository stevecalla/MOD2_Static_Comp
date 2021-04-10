// variables for querySelectors below
let cards = document.querySelector('#box');

// global variables below
// var currentGame;

// event listeners below
window.addEventListener('load', loadCards);

//functions below
function loadCards() {
  createCharacterCards();
  console.log(characters);
}

function createCharacterCards() {
  let characterCards = '';
  for (let i = 0; i < characters.length; i++) {
    characterCards += 
      `
      <article class='box1' id="box">          
        <div class='tint-overlay'></div>
        <div class='image-box'>
          <div class='text-overlay-1'>VIEWS</div>
          <div class='text-overlay-2'>04</div>
          <img class='text-overlay-3 arrow-image' src ="./assets/arrow-right-1.1s-200px.png"
          alt="${characters[i].image_alt}">
          <img class='container-image' src ="${characters[i].image_url}"
            alt="Edna Marie E Mode">
        </div>
        <h5 class='text name-text'>${characters[i].character_name}</h5>
        <h6 class='text'>${characters[i].date_of_birth}</h6>
        <a class='text url-box' href="${characters[i].info_url}" target="_blank">${characters[i].info_text}</a>
        <h6 class='text'>PLAYLIST</h6>
        <h5 class='text'>Edna's "${characters[i].playlist_description}</h5>
        <h5 class='text attachment-text'>ATTACHMENTS</h5>
        <div class='text attachment-number'>${characters[i].attachment_count}</div>
      </article>  
      `;
  }
  renderCharacterCards(characterCards);
  console.log(characterCards);
}

function renderCharacterCards(renderCards) {
  // console.log(renderCards)
  cards.innerHTML = renderCards;
}