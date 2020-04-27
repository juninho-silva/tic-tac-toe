const player1 = 'X'
const player2 = 'O'
const boxes = document.getElementsByTagName('input')
const restart = document.getElementById('restart')
const player = document.getElementById('player')
const score = document.getElementById('round')

let _player = '_'
let win = '_'

const state = {
    count: 0
}

for (let i = 0; i < 9; i++) {
    boxes[i].addEventListener('click', () => {
        if ((event.target.value == '_') && (win == '_')) {
            event.target.value = _player
            event.target.style.color = 'black'

            changePlayer()

            win = winplayer()

            if (win != '_') {
                player.innerText = `${win} you win!`
            }
        }
    })
}

restart.addEventListener('click', (event) => {
    for (let i = 0; i < 9; i++) {
        boxes[i].value = '_'
        boxes[i].style.color = 'white'
        boxes[i].style.backgroundColor = 'white'
    }

    state.count += 1
    
    win = '_'

    randomPlayer()
})

function randomPlayer() {
    if (Math.floor(Math.random() * 2) == 0) {
        _player = player2
        player.innerText = "Player: " + player2
    } else {
        _player = player1
        player.innerText = "Player: " + player1
    }

    score.innerText = "Round: " + state.count
}

randomPlayer()

const changePlayer = () => {
    if (_player == player1) {
        _player = player2
        player.innerText = "Player: " + player2
        //player.style.color = '#F00'
    } else {
        _player = player1
        player.innerText = "Player: " + player1
        //player.style.color = '#OOF'
    }
}

const winplayer = () => {
    if ((boxes[0].value == boxes[1].value) &&
        (boxes[1].value == boxes[2].value) && boxes[0].value != '_') {
        boxes[0].style.backgroundColor = '#0F0';
        boxes[1].style.backgroundColor = '#0F0';
        boxes[2].style.backgroundColor = '#0F0';

        return boxes[0].value;
    }
    else if ((boxes[3].value == boxes[4].value) &&
             (boxes[4].value == boxes[5].value) && boxes[3].value != '_') {
        boxes[3].style.backgroundColor = '#0F0';
        boxes[4].style.backgroundColor = '#0F0';
        boxes[5].style.backgroundColor = '#0F0';

        return boxes[3].value;
    }
    else if ((boxes[6].value == boxes[7].value) &&
             (boxes[7].value == boxes[8].value) && boxes[6].value != '_') {
        boxes[6].style.backgroundColor = '#0F0';
        boxes[7].style.backgroundColor = '#0F0';
        boxes[8].style.backgroundColor = '#0F0';

        return boxes[6].value;
    }
    else if((boxes[0].value == boxes[3].value) && 
            (boxes[3].value==boxes[6].value) && boxes[0].value != '_' ) {
        boxes[0].style.backgroundColor='#0F0';
        boxes[3].style.backgroundColor='#0F0';
        boxes[6].style.backgroundColor='#0F0';

        return boxes[0].value;

    }else if((boxes[1].value == boxes[4].value) && 
             (boxes[4].value == boxes[7].value) && boxes[1].value != '_' ) {
        boxes[1].style.backgroundColor='#0F0';
        boxes[4].style.backgroundColor='#0F0';
        boxes[7].style.backgroundColor='#0F0';

        return boxes[1].value;

    }else if((boxes[2].value == boxes[5].value) && 
             (boxes[5].value == boxes[8].value) && boxes[2].value != '_' ) {
        boxes[2].style.backgroundColor='#0F0';
        boxes[5].style.backgroundColor='#0F0';
        boxes[8].style.backgroundColor='#0F0';

        return boxes[2].value;

    }else if((boxes[0].value == boxes[4].value) && 
             (boxes[4].value == boxes[8].value) && boxes[0].value != '_' ) {
        boxes[0].style.backgroundColor='#0F0';
        boxes[4].style.backgroundColor='#0F0';
        boxes[8].style.backgroundColor='#0F0';

        return boxes[0].value;

    }else if((boxes[2].value == boxes[4].value) && 
             (boxes[4].value == boxes[6].value) && boxes[2].value != '_' ) {
        boxes[2].style.backgroundColor='#0F0';
        boxes[4].style.backgroundColor='#0F0';
        boxes[6].style.backgroundColor='#0F0';

        return boxes[2].value;
    }

    return '_';
}