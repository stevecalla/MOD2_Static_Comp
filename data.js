const marvelCharacters = [
  { name: "Adam Warlock",
    desc: "Adam Warlock is an artificially created human who was born in a cocoon at a scientific complex called The Beehive to be part of a race of super humans who would abolish war, illness, and crime. He uses his immense and formidable powers to safeguard the universe.",
    comics: 188,
    stories: 217,
    image_url: "https://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860.jpg",
    image_alt: "Adam Warlock is an artificially created human",
    urls: [
      {type: "detail", url: "https://marvel.com/universe/Warlock,_Adam?utm_campa…piRef&utm_source=e2deecaf6c770a3c085bbc7ed4b93986"},
      {type: "comiclink", url: "https://marvel.com/comics/characters/1010354/adam_w…piRef&utm_source=e2deecaf6c770a3c085bbc7ed4b93986"},
    ],
  },
  { name: "Agents of Atlas",
    desc: "One of the most inscrutable, pervasive and enduring secret societies on Earth, the Atlas Foundation traditionally pursued world domination but currently uses its covert power and influence for humanity's greater good.",
    comics: 45,
    stories: 52,
    image_url: "https://i.annihil.us/u/prod/marvel/i/mg/9/a0/4ce18a834b7f5.jpg",
    image_alt: "Collection of Atlas Foundation superheros",
    urls: [
      {type: "wiki", url: "https://marvel.com/universe/Agents_of_Atlas?utm_cam…piRef&utm_source=e2deecaf6c770a3c085bbc7ed4b93986"},
      {type: "comiclink", url: "https://marvel.com/comics/characters/1011198/agents…piRef&utm_source=e2deecaf6c770a3c085bbc7ed4b93986"},
    ],
  },
  { name: "Agent Zero",
    desc: "Born in the former East Germany, Christoph Nord aka Agent Zero was an idealist who fought against the communist regime as a freedom fighter for the West German Cell Six.",
    comics: 28,
    stories: 30,
    image_url: "https://i.annihil.us/u/prod/marvel/i/mg/f/60/4c0042121d790.jpg",
    image_alt: "Agent Zero",
    urls: [
      {type: "detail", url: "https://marvel.com/characters/102/agent_zero?utm_ca…piRef&utm_source=e2deecaf6c770a3c085bbc7ed4b93986"},
      {type: "comiclink", url: "https://marvel.com/comics/characters/1009150/agent_…piRef&utm_source=e2deecaf6c770a3c085bbc7ed4b93986"},
    ],
  },

  { name: "A-Bomb (HAS)",
    desc: "Rick Jones has been Hulk's best bud since day one. But now he's more than a friend...he's a teammate after being transformed by a Gamma energy explosion.",
    comics: 3,
    stories: 7,
    image_url: "https://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg",
    image_alt: "A-Bomb",
    urls: [
      {type: "detail", url: "https://marvel.com/characters/76/a-bomb?utm_campaig…piRef&utm_source=e2deecaf6c770a3c085bbc7ed4b93986"},
      {type: "comiclink", url: "https://marvel.com/comics/characters/1017100/a-bomb…piRef&utm_source=e2deecaf6c770a3c085bbc7ed4b93986"},
    ],
  },
  { name: "3-D Man",
    desc: "The 3-D Man was a hero who came about through the unique merger of two brothers, Hal and Chuck Chandler. Chuck was a test pilot who was abducted by alien Skrulls. Chuck resisted and escaped, accidentally causing the explosion of the Skrull spacecraft in the process. While his brother Hal watched, the radiation from the explosion seemingly disintegrated Chuck. Hal later discovered, however, that the light burst had imprinted an image of Chuck on each lens of Hal's eyeglasses. Through concentration, Hal could merge the images and cause Chuck to reappear as a three-dimensional man.",
    comics: 12,
    stories: 21,
    image_url: "https://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg",
    image_alt: "3-D Man",
    urls: [
      {type: "detail", url: "https://marvel.com/characters/74/3-d_man?utm_campai…piRef&utm_source=e2deecaf6c770a3c085bbc7ed4b93986"},
      {type: "comiclink", url: "https://marvel.com/comics/characters/1011334/3-d_ma…piRef&utm_source=e2deecaf6c770a3c085bbc7ed4b93986"},
    ],
  },
  { name: "Absorbing Man",
    desc: "Loki, the Asgardian god of mischief slipped an enchanted potion into Creel's drinking water. Filled with power, Creel found himself in conflict with Thor. He found he could absorb the properties of Thor's hammer as well as Thor himself, and Creel, calling himself the Absorbing Man, managed to force Thor to flee.",
    comics: 91,
    stories: 104,
    image_url: "https://i.annihil.us/u/prod/marvel/i/mg/1/b0/5269678709fb7.jpg",
    image_alt: "Absorbing Man",
    urls: [
      {type: "detail", url: "https://marvel.com/characters/84/absorbing_man?utm_…piRef&utm_source=e2deecaf6c770a3c085bbc7ed4b93986"},
      {type: "comiclink", url: "https://marvel.com/comics/characters/1009148/absorb…piRef&utm_source=e2deecaf6c770a3c085bbc7ed4b93986"},
    ],
  },
  { name: "Ajak",
    desc: "Ajak is a member of the Polar Eternal. He possesses conventional powers including superhuman strength enabling him to lift 25 tons, complete control over the atoms of his body allowing him to regenerate after virtually any injury, the ability to project cosmic energy from his eyes or hands in the form of heat, light or concussive force, teleportation, flight at the speed of sound and the ability to rearrange the molecular structure of objects.",
    comics: 4,
    stories: 8,
    image_url: "https://i.annihil.us/u/prod/marvel/i/mg/2/80/4c002f35c5215.jpg",
    image_alt: "Ajak",
    urls: [
      {type: "detail", url: "https://marvel.com/characters/111/ajak?utm_campaign…piRef&utm_source=e2deecaf6c770a3c085bbc7ed4b93986"},
      {type: "comiclink", url: "https://marvel.com/comics/characters/1011176/ajak?u…piRef&utm_source=e2deecaf6c770a3c085bbc7ed4b93986"},
    ],
  },


  { name: "Ajaxis",
    desc: "Other than leaving his Subterranean race of Lava Men for the surface world, nothing is known about Ajaxis prior to him joining the Thunderbolts",
    comics: 0,
    stories: 0,
    image_url: "https://i.annihil.us/u/prod/marvel/i/mg/b/70/4c0035adc7d3a.jpg",
    image_alt: "Ajaxis",
    urls: [
      {type: "detail", url: "https://marvel.com/characters/113/ajaxis?utm_campai…piRef&utm_source=e2deecaf6c770a3c085bbc7ed4b93986"},
      {type: "comiclink", url: "https://marvel.com/comics/characters/1010870/ajaxis…piRef&utm_source=e2deecaf6c770a3c085bbc7ed4b93986"},
    ],
  },

]
