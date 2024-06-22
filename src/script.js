
var initt = -1;

//função de mudar imagem pelo id e pela url
function changeImage(id, url) {
  document.getElementById(id).src = url;
}
//função de mudar texto pelo id e pelo texto
function changeText(id, text) {
  document.getElementById(id).innerText = text;
}

// mudar de cor
function changeColor(id,color){
  document.getElementById(id).style.backgroundColor = color;
}

//rotação
function rodar(id){
  document.querySelector(id).classList.toggle('rotation')
}

// o código para resolver o desafio
function previousPokemon() {
  rodar('.card');
  pegarPokemons(2);
  console.log("Pokemon Anterior");
}

function nextPokemon() {
  rodar('.card');
  pegarPokemons(1);
  console.log("Pokemon Seguinte");
}

//pegar nome,imagem,tipo e cor
async function pegarPokemons(op){
  const poks = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1292');
  const poksDados = await poks.json();
  if(op === 1){
    if(initt+1 < poksDados.results.length){ 
      initt++;
    }else{
      initt=0;
    }
  }else if( op === 2){
    if(initt - 1 >=0){
      initt--;
    }else{
      initt = poksDados.results.length-1;
    }
  }
  
  const nameP = poksDados.results[initt].name;
  const urlP = poksDados.results[initt].url;
  const poksInfo = await fetch(urlP);
  const poksresults = await poksInfo.json();
  var image = poksresults.sprites.front_default;
  const tipo = poksresults.types.map(typesi => typesi.type.name);

  tipo.forEach(tipo => {
    switch (tipo) {
      case 'normal':
        changeColor('page', '#A8A878');
        break;
      case 'fire':
        changeColor('page', '#F08030');
        break;
      case 'water':
        changeColor('page', '#6890F0');
        break;
      case 'grass':
        changeColor('page', '#78C850');
        break;
      case 'electric':
        changeColor('page', '#F8D030');
        break;
      case 'ice':
        changeColor('tipagepo', '#98D8D8');
        break;
      case 'fighting':
        changeColor('page', '#C03028');
        break;
      case 'poison':
        changeColor('page', '#A040A0');
        break;
      case 'ground':
        changeColor('page', '#E0C068');
        break;
      case 'flying':
        changeColor('page', '#A890F0');
        break;
      case 'psychic':
        changeColor('page', '#F85888');
        break;
      case 'bug':
        changeColor('page', '#A8B820');
        break;
      case 'rock':
        changeColor('page', '#B8A038');
        break;
      case 'ghost':
        changeColor('page', '#705898');
        break;
      case 'dragon':
        changeColor('page', '#7038F8');
        break;
      case 'dark':
        changeColor('page', '#705848');
        break;
      case 'steel':
        changeColor('page', '#B8B8D0');
        break;
      case 'fairy':
        changeColor('page', '#EE99AC');
        break;
      default:
        changeColor('page', '#808080');
        break;
    }
  });

  if(image == null){
    image ="../assets/pngwing.com.png";
  }
  
  changeImage('img_sprite_front_default', image);
  changeText('name',nameP);
  changeText('tipo',tipo);
}




