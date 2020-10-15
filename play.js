const round = 0
const players = ['player_x', 'player_y']

const $boxes = document.getElementsByClassName('box');

for (let index = 0; index < 9; index++) {
    $boxes[index].addEventListener('click', function(event) {
        if (event.innerText == null || event.innerText == undefined) {
            event.innerText = 'x'
        }
    });
}