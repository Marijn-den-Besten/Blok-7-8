var names = ['Bert', 'Chantal', 'Defvin', 'Freek', 'Gerda', 'Gert', 'Hanneke', 'Hans', 'Irma', 'Karen', 'Kees', 'Lidia'];

var number = Math.floor(Math.random() * names.length);
var name = names[number]

console.log('Correct number: ' + number);
console.log('Correct name: ' + name);

showImage(name);
createAnswers(name);

function showImage(image) {
    console.log('In function showImage');

    var img = document.createElement('img');

    img.src = 'Images/' + image + '.jfif';
    img.width = 500;
    img.height = 500;

    document.getElementById('image').appendChild(img);
}

function createAnswers(correctName) {
    console.log('In function createAnswers');

    var answers = [correctName];

    while (answers.length !== 3) {
        var randomName = names[Math.floor(Math.random() * names.length)];
        if (randomName !== correctName) {
            if (randomName !== answers[1]) {
                answers.push(randomName);
            }
        }
    }

    answers = shuffleArray(answers);

    for (var i = 0; i < answers.length; i++) {
        var coldiv = document.createElement('div');
        coldiv.className = 'col';

        document.getElementById('answersrow').appendChild(coldiv);

        var button = document.createElement('button');
        button.id = answers[i];
        button.className = 'btn-primary btn-block';
        button.innerHTML = answers[i];
        button.onclick = function () {
            registerAnswer(this.id);
        };

        coldiv.appendChild(button);
    }
}

function registerAnswer(answer) {
    console.log('In function registerAnswer');
    console.log(answer);
}

function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}