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
  input.value = '';
  input.focus();
}

function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item-row');
  itemRow.innerHTML = `
  <div class="item">
    <span class="item__description">${text}</span>
    <button class="item__delete">
      <i class="fas fa-trash-alt"></i>
    </button>
  </div>
  <div class="line"></div>
  `;
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

