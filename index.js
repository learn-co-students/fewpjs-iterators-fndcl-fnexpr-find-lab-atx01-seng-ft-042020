
function superbowlWin(array) {
  const wonGame = array.find( ({result}) => result === 'W');
  
  return wonGame ? wonGame.year : undefined;
}
