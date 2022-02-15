// 1st plm.........
const sectionTitle = document.getElementsByClassName('section-title');
for (let i = 0; i < sectionTitle.length; i++) {
    sectionTitle[i].style.color = 'blue';
}

// 2nd plm.............
const players = document.getElementsByClassName('player');
for (let i = 0; i < players.length; i++) {
    players[i].style.backgroundColor = 'rgba(62, 0, 242, 0.47)';
    players[i].style.margin = '3px';
    players[i].style.padding = '3px';
}

// 3rd plm.............
function addElement() {
    const actInput = document.getElementById('act-input');
    const actText = actInput.value;
    actInput.value = '';
    let ul = document.getElementById('ul-act');
    const ulParent = ul.parentNode;
    let li = document.createElement('li');
    li.innerText = actText;
    ulParent.replaceChild(li, ul);
    li.appendChild(ul);
}
function removeElement() {
    const rmv = document.getElementById('ul-act');
    rmv.innerText = '';
}
document.getElementById('add-btn').addEventListener('click', function () {
    addElement();
})
document.getElementById('dlt-btn').addEventListener('click', function () {
    removeElement();

})

// 4th plm...........
document.getElementById('plus-btn').addEventListener('click', function () {
    const inputField = document.getElementById('up-to-input');
    const plusBtn = document.getElementById('plus-btn');
    if (inputField.value < 5) {
        const inputText = parseInt(inputField.value) + 1;
        inputField.value = inputText;
    }
    else {
        plusBtn.disabled = true;
    }
})
document.getElementById('minus-btn').addEventListener('click', function () {
    const inputField = document.getElementById('up-to-input');
    const minusBtn = document.getElementById('minus-btn');
    if (inputField.value > 0) {
        // minusBtn.disabled = false;
        const inputText = parseInt(inputField.value) - 1;
        inputField.value = inputText;
    }
    else {
        minusBtn.disabled = true;
    }
})