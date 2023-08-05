const body = document.querySelector('body');
const div1 = document.createElement('div');
const list = document.createElement('ol');
const button = document.createElement('button');
const listSpan = document.createElement('span');
div1.setAttribute('id', 'main');

body.append(div1);
div1.append(button);
div1.prepend(listSpan);
listSpan.append(list);
listSpan.style.display = none;

button.innerText = 'Click Me!';

const onClick = () => {
  for (let i = 0; i < 5; i++) {
    const item = document.createElement('li');
    item.setAttribute('id', `item${i}`);
    item.innerText = 'yes';
    list.append(item);

  }
  button.removeEventListener('click', onClick);
}

button.addEventListener('click', onClick);
