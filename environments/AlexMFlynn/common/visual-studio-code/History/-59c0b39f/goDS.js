//actual URL
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
const body = document.querySelector('body');
const h1 = document.createElement('h1');
h1.innerHTML = '<b>My Favorite Pokemon Generations</b>';
h1.style.textAlign = 'center';
body.appendChild(h1);
body.style.backgroundColor = 'darkcyan';

const section = document.createElement('section');
section.id = 'container';
h1.insertAdjacentElement('afterend', section);

const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

const region = num => {
  if (num === 1) {
    const h2 = document.createElement('h2');
    h2.innerHTML = '<i>Kanto Pokemon</i> (Gen I)';
    h2.style.textAlign = 'center';
    section.prepend(h2);
  }
  if (num === 152) {
    section.append(document.createElement('hr'));
    const h2 = document.createElement('h2');
    h2.innerHTML = '<i>Johto Pokemon</i> (Gen II)';
    h2.style.textAlign = 'center';
    section.append(h2);
  }
  if (num === 252) {
    section.append(document.createElement('hr'));
    const h2 = document.createElement('h2');
    h2.innerHTML = '<i>Hoenn Pokemon</i> (Gen III)';
    h2.style.textAlign = 'center';
    section.append(h2);
  }
}

for (let i = 1; i <= 386; i++) {
  region(i);
  const pokemon = document.createElement('div');
  pokemon.classList.add('pokemon');
  const label = document.createElement('span');
  label.innerText = `#${i}`;
  const newImg = document.createElement('img');
  newImg.src = `${baseURL}${i}.png`


  pokemon.appendChild(newImg);
  pokemon.appendChild(label);
  container.appendChild(pokemon)
}
