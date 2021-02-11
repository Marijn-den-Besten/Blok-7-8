var names = ['Bert', 'Chantal', 'Defvin', 'Freek', 'Gerda', 'Gert', 'Hanneke', 'Hans', 'Irma', 'Karen', 'Kees', 'Lidia'];

var number = Math.floor(Math.random() * 12);
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
        var randomName = names[Math.floor(Math.random() * 12)];
        if (randomName !== correctName) {
            if (randomName !== answers[1]) {
                answers.push(randomName);
            }
        }
    }

    for (var i = 0; i < answers.length; i++) {
        var coldiv = document.createElement('div');
        coldiv.className = 'col-4';

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