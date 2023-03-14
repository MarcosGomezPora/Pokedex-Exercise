let pokemons = []

const fetchPokemons = async () => {
  for (let i = 1; i <= 151; i++) {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const dataPokemon = await resp.json();
    pokemons.push(dataPokemon);
  }

}

const printPokemon = (pokemons) => {
  for (const pokemon of pokemons) {
    let image$$ = document.createElement('img')
    image$$.src = pokemon.sprites.other.home.front_default
    image$$.className = 'images'
    
    let divImage$$ = document.createElement('div')
    divImage$$.appendChild(image$$)
    divImage$$.className = 'cardImage'
    
    let id$$ = document.createElement('p')
    id$$.textContent = pokemon.id
    id$$.className = 'cardSubtitle'

    let name$$ = document.createElement('h2')
    name$$.textContent = pokemon.name
    name$$.className = 'card-title'


    let buttonCheck$$ = document.createElement('button')
    buttonCheck$$.setAttribute("type", "submit")
    buttonCheck$$.innerHTML = "Check"
    buttonCheck$$.className = 'Checking'

    let input$$ = document.createElement('input')
    input$$.setAttribute("type", "text")
    input$$.setAttribute("placeholder", "¿Cuál es este pokémon?")
    input$$.className = 'inputGame'

    const typesDiv$$ = document.createElement('div')
    typesDiv$$.classList.add('typesDiv')
    for (const type of pokemon.types) {
    const type$$ = document.createElement('p');
    type$$.textContent = type.type.name;
    type$$.classList.add(type.type.name, 'cardText');
    typesDiv$$.appendChild(type$$);

    
}

    let card$$ = document.createElement('li')
    card$$.className = 'card'
    card$$.appendChild(id$$)
    card$$.appendChild(divImage$$)
    card$$.appendChild(name$$)
    card$$.appendChild(typesDiv$$)
    card$$.appendChild(input$$)
    card$$.appendChild(buttonCheck$$)
    
    
    const pokedex$$ = document.querySelector('#pokedex')
    pokedex$$.appendChild(card$$)

    const guessing = () => {
      if (input$$.value.toLowerCase() === pokemon.name.toLowerCase()) {
        li.querySelector('.images').style.filter = 'brightness(50%)'
        li.querySelector('h2').style.display = 'block'
      }
    }


  }
}
document.addEventListener("DOMContentLoaded", function(){
  fetchPokemons().then(() => {
    printPokemon(pokemons);
  });
});

const searchbar$$ = document.querySelector('.searchbar');
const search = () => {
  const pokemonNameFilter = pokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(searchbar$$.value.toLowerCase());
  });
  const pokedex$$ = document.querySelector('#pokedex');
  pokedex$$.innerHTML = '';
  printPokemon(pokemonNameFilter);
}
searchbar$$.addEventListener("input", search);


const game$$ = document.querySelector('.game');
game$$.addEventListener('click', () => {
  const pokedex$$ = document.querySelector('#pokedex');
  const liElements = pokedex$$.querySelectorAll('li');
  
  liElements.forEach(li => li.style.display = 'none')
  
  const randomLi = [];
  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * liElements.length);
    randomLi.push(liElements[randomIndex]);
  }
  randomLi.forEach(li => 
    {li.style.display = 'block';
    li.querySelector('h2').style.display = 'none';

    li.querySelector('.inputGame').style.display = 'block'

    li.querySelector('.Checking').style.display = 'block'

    li.querySelector('.images').style.filter = 'brightness(0%)'

    li.querySelector('.cardSubtitle').style.display = 'none'

    li.querySelector('.cardImage').style.margin = '60px 0px 0px 0px'
    
    const typesDiv$$ = li.querySelectorAll('.cardText');
        typesDiv$$.forEach(type => type.style.display = 'none');

    });
});