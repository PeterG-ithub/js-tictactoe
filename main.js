console.log('I am connected!')
const gameBoard = (() => {
  const array = Array(9).fill('')
  const getArray = () => array
  const addItem = (item, index) => array[index] = item
  
  return { getArray, addItem }
})();

const displayController = (() => {
  const cell = document.querySelectorAll('.square')
  let turn = 'X'

  cell.forEach((element) => {
    element.addEventListener('click', () => {
      index = parseInt(element.getAttribute('id')) - 1;
      if (cellEmpty(index)) {
        gameBoard.addItem(turn, index);
        turnSwitcher();
        updateDisplay();
      }
    });
  });
  
  const turnSwitcher = () => {
    if (turn == 'X') {
      turn = 'O'
    } else {
      turn = 'X'
    }
  }

  const updateDisplay = () => {
    array = gameBoard.getArray()
    for (let i = 0; i < 9; i ++) {
      cell[i].innerHTML = array[i]
    }
  }

  const cellEmpty = (index) => {
    array = gameBoard.getArray()
    if (array[index] == '') {
      return true
    } else {
      return false
    }
  }
  
})();

const gameModule = (() => {
  const playerFactory = (name, symbol) => {
    const getName = () => name;
    const getSymbol = () => symbol;
    return { getName, getSymbol };
  };
  
  const gameStart = () => {
    const player1 = playerFactory('Zach', 'X')
    const player2 = playerFactory('Zorian', 'O')
    console.log(player1.getName())
    console.log(player2.getName())
  }

  return { gameStart }
})();

