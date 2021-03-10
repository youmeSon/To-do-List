const input = document.querySelector('.footer__input');
const items = document.querySelector('.items');
const btn = document.querySelector('.footer__btn');

//1. 입력된 텍스트받기 
//2. 입력된 텍스트로 아이템 만들기 
//3. 만들어진 아이템을 items에 추가하기 
//4. input 초기화하기 

function onAdd() {
  const text = input.value;
  const item = createItem(text);
  items.appendChild(item);
  item.scrollIntoView({block: "center", behavior: "smooth"});
  input.value = '';
  input.focus();
}

let id = 0;
function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item-row');
  itemRow.setAttribute('data-id', id);
  itemRow.innerHTML = `
  <div class="item">
    <span class="item__description">${text}</span>
    <button class="item__delete">
      <i class="fas fa-trash-alt" data-id="${id}"></i>
    </button>
  </div>
  <div class="line"></div>
  `;
  id++;
  return itemRow;
}

btn.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keydown', e => {
  if(e.key == "Enter") {
    onAdd();
  }
});

items.addEventListener('click', event => {
  const id = event.target.dataset.id;
  if(id) {
    const toBeDeleted = document.querySelector(`.item-row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
})


