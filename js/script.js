const t = [
    'MAKSLEBEDONKO\n',
];

function typeText() {
    let line = 0;
    let count = 0;
    let out = '';
    let htmlOut = document.querySelector('.preload');


    function typeLine() {
        let interval = setTimeout(function () {
            out += t[line][count];
            htmlOut.innerHTML = out + '|';
            count++;

            if (count >= t[line].length) {
                count = 0;

                line++;
                if (line == t.length) {
                    clearTimeout(interval);
                    return true;
                }
            }
            typeLine();
        }, 200);
    }
    typeLine();
}

typeText();


setTimeout(function () {
    document.getElementById('fade-out').style.display = 'none';
}, 4000);



document.querySelector('.text').onclick = function () {
    document.getElementById('text').classList.toggle('hidden');
}


document.querySelector('.sect').onclick = function () {
    document.getElementById('first-word').classList.toggle('close');
}
