const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(arr) {
  let superBowl = arr.find(game => game.result == 'W')
  if (superBowl) {
    return superBowl.year
  } else {
    return superBowl
  }
}