console.log('I am connected!')
const gameBoard = (() => {
  const array = []
  const getArray = () => array
  const addItem = (item) => array.push(item)

  return { getArray, addItem }
})();

const displayController = (() => {

})();

const playerFactory = (name) => {

  return { name };
};