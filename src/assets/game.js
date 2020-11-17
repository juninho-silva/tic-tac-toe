const round = 0
let current = 'X'

const plays = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const $boxes = document.getElementsByClassName('box');

for (let index = 0; index < 9; index++) {
  $boxes[index].addEventListener('click', function (event) {
    if (event.target.value === null || event.target.value === undefined) {
      if (current === 'X') {
        event.target.innerText = current
        current = 'O'
      } else {
        event.target.innerText = current
        current = 'X'
      }

      resultPlay($boxes)
    }
  });
}

function resultPlay(boxes) {
  plays.forEach(play => {
    if ((boxes[play[0]].value == boxes[play[1]].value) &&
      (boxes[play[1]].value == boxes[play[2]].value) && boxes[play[0]].value !== undefined) {
      boxes[play[0]].style.backgroundColor = '#0F0'
      boxes[play[1]].style.backgroundColor = '#0F0'
      boxes[play[2]].style.backgroundColor = '#0F0'
      console.log('Ganhou!')
    }
  })
}
