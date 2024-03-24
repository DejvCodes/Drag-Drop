// Proměnné
let lists = document.getElementsByClassName('list');
let leftBox = document.getElementById('left');
let rightBox = document.getElementById('right');
let selected = null;

// Funkce pro manipulaci s přetahovanou položkou
function handleDrop(targetBox) {
    if (selected !== null) {
        targetBox.appendChild(selected);
        selected = null;
    }
}

// Přidání posluchačů událostí pro leftBox a rightBox
// Posluchači událostí pro leftBox
leftBox.addEventListener('dragover', function(e){
    e.preventDefault();
})
leftBox.addEventListener('drop', function(e) {
    handleDrop(leftBox);
})

// Posluchači událostí pro rightBox
rightBox.addEventListener('dragover', function(e){
    e.preventDefault();
})
rightBox.addEventListener('drop', function(e) {
    handleDrop(rightBox);
})

// Posluchač události "dragstart" pro položky s třídou 'list'
for (let list of lists) {
    list.addEventListener("dragstart", function(e){
        selected = e.target;
    })
}