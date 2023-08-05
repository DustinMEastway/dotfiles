const body = document.querySelector('body');
const div1 = document.createElement('div');
const list = document.createElement('ol');
const button = document.createElement('button');

body.append(div1);
div1.append(button);

button.innerText = 'Click Me!';
button.prepend(list);
button.addEventListener('click', () => {
  for (let i = 0; i < 5; i++) {
    const item = document.createElement('li').setAttribute('id', `item${i}`);
    item.innerText = 'yes';
    list.append(item);
  }
});
