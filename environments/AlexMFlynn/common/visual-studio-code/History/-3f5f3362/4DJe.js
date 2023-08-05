const body = document.querySelector('body');
const div1 = document.createElement('div');
const list = document.createElement('ol');
const button = document.createElement('button');
const listSpan = document.createElement('span');

body.append(div1);
div1.append(button);
div1.prepend(listSpan);
listSpan.append(list);

body.style.alignContent = 'center';
body.style.display = 'flex';
button.innerText = 'Click Me!';
button.addEventListener('click', () => {
  for (let i = 0; i < 5; i++) {
    const item = document.createElement('li');
    item.setAttribute('id', `item${i}`);
    item.innerText = 'yes';
    list.append(item);
  }
});
