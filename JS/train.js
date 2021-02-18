var names = [
    {Name: 'Bert', Sex: "Male", Good: 0, Wrong: 0},
    {Name: 'Chantal', Sex: "Female", Good: 0, Wrong: 0},
    {Name: 'Defvin', Sex: "Male", Good: 0, Wrong: 0},
    {Name: 'Freek', Sex: "Male", Good: 0, Wrong: 0},
    {Name: 'Gerda', Sex: "Female", Good: 0, Wrong: 0},
    {Name: 'Hanneke', Sex: "Female", Good: 0, Wrong: 0},
    {Name: 'Hans', Sex: "Male", Good: 0, Wrong: 0},
    {Name: 'Irma', Sex: "Female", Good: 0, Wrong: 0},
    {Name: 'Karen', Sex: "Female", Good: 0, Wrong: 0},
    {Name: 'Kees', Sex: "Male", Good: 0, Wrong: 0},
    {Name: 'Lidia', Sex: "Female", Good: 0, Wrong: 0}
];
var number;
var rightname;

var answers = [];

var progressbarId;
var progressbarWidth = 1;

console.log('Correct number: ' + number);
console.log('Correct name: ' + rightname);

reload();

function getNames() {
    number = Math.floor(Math.random() * names.length);
    rightname = names[number].Name;

    console.log(answers);
}

function showName(name) {
    console.log('In function showImage');

    var namebox = document.createElement('h4');
    namebox.innerHTML = name;

    document.getElementById('name').appendChild(namebox);
}

function createAnswers(correctName) {
    console.log('In function createAnswers');

    answers.push(rightname);

    while (answers.length !== 3) {
        var randomName = names[Math.floor(Math.random() * names.length)].Name;
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

        document.getElementById('imagerow').appendChild(coldiv);

        var img = document.createElement('img');
        img.id = answers[i];
        img.className = 'images';
        img.src = 'Images/' + answers[i] + '.jfif';
        img.onclick = function () {
            registerAnswer(this.id);
        };

        coldiv.appendChild(img);
    }
}

function registerAnswer(answer) {
    console.log('In function registerAnswer');
    if (answer === rightname) {
        console.log('Correct answer');
        alert('Correct answer');

        for (var i = 0; i < names.length; i++){
            if (names[i].Name === rightname) {
                console.log('Good +1');

                names[i].Good += 1;

                progressbarWidth = 100;
                clearInterval(progressbarId);
            }
        }

        reload();
    } else {
        console.log('Wrong answer');
        alert('Wrong answer');
        for (var u = 0; u < names.length; u++){
            if (names[u].Name === rightname) {
                console.log('Wrong +1');

                names[u].Wrong += 1;

                progressbarWidth = 100;
                clearInterval(progressbarId);
            }
        }
        
        reload();
    }
}

function fillScoreboard() {
    var scoreboard = document.getElementById('scoreboard');

    for (var i = 0; i < names.length; i++){
        var person = document.createElement('div')
        person.className = 'row';

        scoreboard.appendChild(person);

        var obj = names[i];

        for (const item in obj){
            if (item !== 'Sex') {
                var col = document.createElement('div');
                col.className = 'col';


                col.innerHTML = obj[item];

                person.appendChild(col);
            }
        }
    }
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

function reload() {
    var y = 0;
    if (y == 0) {
        y = 1;
        var elem = document.getElementById("myBar");
        progressbarWidth = 1;
        progressbarId = setInterval(frame, 100);
        function frame() {
            if (progressbarWidth >= 100) {
                clearInterval(progressbarId);
                y = 0;
                registerAnswer('')
            } else {
                progressbarWidth++;
                elem.style.width = progressbarWidth + "%";
            }
        }
    }

    document.getElementById('name').innerHTML = '';
    document.getElementById('imagerow').innerHTML = '';
    document.getElementById('scoreboard').innerHTML = '';
    answers = [];

    getNames();
    showName(rightname);
    createAnswers(rightname);
    fillScoreboard();
}