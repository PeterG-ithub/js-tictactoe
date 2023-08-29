console.log('I am connected!')
const gameBoard = (() => {
  const array = Array(9).fill('')
  const getArray = () => array
  const addItem = (item, index) => array[index] = item
  
  return { getArray, addItem }
})();

const displayController = (() => {
  const cell = document.querySelectorAll('.square')

  cell.forEach((element) => {
    element.addEventListener('click', () => {
      index = parseInt(element.getAttribute('id')) - 1;
      gameBoard.addItem('X', index);
      updateDisplay();
    });
  });
  
  let turn = 'X'
  const turnController = () => {

  }

  const updateDisplay = () => {
    array = gameBoard.getArray()
    for (let i = 0; i < 9; i ++) {
      cell[i].innerHTML = array[i]
    }
  }

})();

const playerFactory = (name) => {

  return { name };
};

