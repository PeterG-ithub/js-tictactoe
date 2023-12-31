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
        gameBoard.addItem(turn, index)
        turnSwitcher()
        updateDisplay()
        if (gameModule.winCondition()) {
          winDisplay()
        } else if (gameModule.drawCondition()) {
          drawDisplay()
        }
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


  const winText = document.querySelector('.win-text')
  const modalContainer = document.querySelector('.modal-container')
  const winModal = document.querySelector('.win-modal')
  const winDisplay = () => {
    winText.innerHTML = 'Congratulations! You won? But, Who are you?'
    modalContainer.classList.add('modal-show')
    winModal.classList.add('modal-show')
  }

  const drawText = document.querySelector('.draw-text')
  const drawModal = document.querySelector('.draw-modal')
  const drawDisplay = () => {
    drawText.innerHTML = 'Its a Draw!!!!'
    modalContainer.classList.add('modal-show')
    drawModal.classList.add('modal-show')
  }

  const exitButton = document.querySelectorAll('.close-modal')
  
  const closeModal = () => {
    console.log('close modal')
    modalContainer.classList.remove('modal-show')
    winModal.classList.remove('modal-show')
    drawModal.classList.remove('modal-show')
    gameModule.resetGame()
  }
  exitButton.forEach(element => {element.addEventListener('click', closeModal)} )

  const cellEmpty = (index) => {
    array = gameBoard.getArray()
    if (array[index] == '') {
      return true
    } else {
      return false
    }
  }
  
  return {
    updateDisplay
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

  const array = gameBoard.getArray();
  const winCondition = () => {
    if (winHorizontal() || winDiagonal() || winVertical()) {
      console.log('WINNER!!!!')
      return true
    } else {
      return false
    }
  }

  const winHorizontal = () => {
    let temp = false
    console.log(gameBoard.getArray())
    for (let i = 0; i < 3; i++) {
      console.log(i)
      if ((array[3*i] === 'X' || array[3*i] === 'O') && array[3*i] === array[3*i + 1] && array[3*i] === array[3*i + 2]) {
        console.log('win hori')
        temp = true
        break
      } else {
        temp = false
      }
    }
    return temp
  }
  const winVertical = () => {
    let temp = false
    for (let i = 0; i < 3; i++) {
      if ((array[i] === 'X' || array[i] === 'O') && array[i] === array[i + 3] && array[i] === array[i + 6]) {
        console.log('win vert')
        temp = true
        break
      } else {
        temp = false
      }
    }
    return temp
  }

  const winDiagonal = () => {
    if (((array[0] === 'X' || array[0] === 'O') && array[0] === array[4] && array[0] === array[8])
      || (array[6] === 'X' || array[6] === 'O') && array[6] === array[4] && array[6] === array[2]) {
      console.log('win dia')
      return true
    } else {
      return false
    }
  }

  
  const resetGame = () => {
    console.log('Reset game!')
    for (let i = 0; i < 9; i++) {
      gameBoard.addItem('', i)
    }
    displayController.updateDisplay()
  }

  const resetButton = document.querySelector('.reset-button')
  resetButton.addEventListener('click', resetGame)

  const drawCondition = () => {
    if (!array.includes('')) {
      console.log('draw')
      return true
    }
    
  }

  return { gameStart, winCondition, resetGame, drawCondition }
})();

