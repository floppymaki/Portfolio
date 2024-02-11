
document.addEventListener('DOMContentLoaded', function () {
    var inputs = document.querySelectorAll('#tic-tac-toe input');
    inputs.forEach(function (input) {
        input.value = '';
    });
});

var field = ['', '', '', '', '', '', '', '', ''];    

function play(cell){
    if(!field.includes('')){
        // console.log('field is full');
        return;
    }

    id = Number(cell.id.replace('c', ''));

    if (isFilled(id)) return;
    
    field[id] = 'x';
    cell.value = '✖️';

    toggleStatus();

    if(gameOver()){
        // console.log('PC: Well played!')
        return;
    }

    setTimeout(function(){
        pcPlay();
    }, 1000);
}

function pcPlay(){
    if(!field.includes('')){
        // console.log('field is full');
        return;
    }

    var id = Math.floor(Math.random() * 9);

    while(isFilled(id)){
        var id = Math.floor(Math.random() * 9);
        // regenerate new id number until it found empty cell
    }
    
    field[id] = 'o';
    cell = document.getElementById('c' + id);
    cell.value = '⭕';
    
    if(gameOver()){
        console.log('PC: Well played!')
        return;
    }

    toggleStatus();
}

// disables and enables the inputs
function toggleStatus(){
    var cells = document.querySelectorAll('#tic-tac-toe input');

    cells.forEach(function(cell) {
        cell.disabled = cell.disabled ? false : true;
    });
}

// checks if cell is already occupied
function isFilled(i){
    if(field[i] !== ''){
        return true;
    };
}

function gameOver(){
    var lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    for(let i = 0; i < lines.length; i++){
        index0 = lines[i][0];
        index1 = lines[i][1];
        index2 = lines[i][2];

        c0 = field[index0];
        c1 = field[index1];
        c2 = field[index2];

        if(c0 == c1 && c1 == c2 && c0 !== ''){
            // var text = c0 == 'x' ? 'Player won!' : 'Pc won!';

            if(c0 == 'x') {
                new Audio('https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-18146/zapsplat_foley_party_whistle_horn_blow_funny_da_da_da_002_19406.mp3').play();
            }

            // console.log(text);

            // make it strike through
            // c0div = document.getElementById('c' + index0);
            // c1div = document.getElementById('c' + index1);
            // c2div = document.getElementById('c' + index2);

            // c0div.style.backgroundColor = 'blue';
            // c1div.style.backgroundColor = 'blue';
            // c2div.style.backgroundColor = 'blue';

            return true;
        } 
    }
}


function openModal() {
    const imageSrc = this.src

    document.getElementById("modalImage").src = imageSrc;

    document.getElementById("imageModal").classList.add("show");
    document.getElementById("imageModal").style.display = "block";
    document.body.classList.add("modal-open");
}

function closeModal() {
    document.getElementById("imageModal").classList.remove("show");
    document.getElementById("imageModal").style.display = "none";
    document.body.classList.remove("modal-open");
}

function addClickEventToImages() {
    const images = document.querySelectorAll('img');

    images.forEach(image => {
        console.log(image.src);
        image.addEventListener('click', openModal);
    });
}

addClickEventToImages();