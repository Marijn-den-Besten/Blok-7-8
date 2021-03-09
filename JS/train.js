var names = [
    {Name: 'Bert', Good: 0, Tries: 0},
    {Name: 'Chantal', Good: 0, Tries: 0},
    {Name: 'Defvin', Good: 0, Tries: 0},
    {Name: 'Freek', Good: 0, Tries: 0},
    {Name: 'Gerda', Good: 0, Tries: 0},
    {Name: 'Hanneke', Good: 0, Tries: 0},
    {Name: 'Hans', Good: 0, Tries: 0},
    {Name: 'Irma', Good: 0, Tries: 0},
    {Name: 'Karen', Good: 0, Tries: 0},
    {Name: 'Kees', Good: 0, Tries: 0},
    {Name: 'Lidia', Good: 0, Tries: 0}
];

localStorage.setItem('seconds', 10);
localStorage.setItem('imagesamount', 3);

var answers = [];

var rightname;
var progressbarId;
var progressbarWidth = 1;

var toprow = document.getElementById('toprow');

openSettings();

function startTrainer() {
    document.getElementById('toprow').innerHTML = '';

    createTrainingCard();
    createScoreboard();
    createSettingsCard();
}

function createTrainingCard() {
    var firstCol = document.createElement('div');
    firstCol.className = 'col-6';

    toprow.appendChild(firstCol);

    var card = document.createElement('div');
    card.className = 'card';

    firstCol.appendChild(card);

    var cardheader = document.createElement('div');
    cardheader.className = 'card-header';

    card.appendChild(cardheader);

    var namediv = document.createElement('div');
    namediv.className = 'col';
    namediv.id = 'name';

    cardheader.appendChild(namediv);

    var cardbody = document.createElement('div');
    cardbody.className = 'card-body';

    card.appendChild(cardbody);

    var imagerow = document.createElement('div');
    imagerow.className = 'row';
    imagerow.id = 'imagerow';

    cardbody.appendChild(imagerow);

    var cardfooter = document.createElement('div');
    cardfooter.className = 'card-footer';

    card.appendChild(cardfooter);

    var progress = document.createElement('div');
    progress.id = 'myProgress';

    cardfooter.appendChild(progress);

    var bar = document.createElement('div');
    bar.id = 'myBar';

    progress.appendChild(bar);
}

function createScoreboard() {
    var firstCol = document.createElement('div');
    firstCol.className = 'col-3';

    toprow.appendChild(firstCol);

    var card = document.createElement('div');
    card.className = 'card';

    firstCol.appendChild(card);

    var cardheader = document.createElement('div');
    cardheader.className = 'card-header';

    card.appendChild(cardheader);

    var titlerow = document.createElement('div');
    titlerow.className = 'row';

    cardheader.appendChild(titlerow);

    var titlecol = document.createElement('div');
    titlecol.className = 'col-8';

    titlerow.appendChild(titlecol);

    var h4 = document.createElement('h4');
    h4.innerHTML = 'Scoreboard';

    titlecol.appendChild(h4);

    var buttoncol = document.createElement('div');
    buttoncol.className = 'col-4 ml-0';

    titlerow.appendChild(buttoncol);

    var button = document.createElement('button');
    button.className = 'btn btn-block btn-primary';
    button.onclick = function () {history.back()};
    button.innerHTML = 'Return';

    buttoncol.appendChild(button);

    var cardbody = document.createElement('div');
    cardbody.className = 'card-body';
    cardbody.id = 'scoreboard';

    card.appendChild(cardbody);
}

function createSettingsCard() {
    var firstCol = document.createElement('div');
    firstCol.className = 'col-3';

    toprow.appendChild(firstCol);

    var card = document.createElement('div');
    card.className = 'card';

    firstCol.appendChild(card);

    var cardheader = document.createElement('div');
    cardheader.className = 'card-header';

    card.appendChild(cardheader);

    var titlerow = document.createElement('div');
    titlerow.className = 'row';

    cardheader.appendChild(titlerow);

    var titlecol = document.createElement('div');
    titlecol.className = 'col-8';

    titlerow.appendChild(titlecol);

    var h4 = document.createElement('h4');
    h4.innerHTML = 'Settings';

    titlecol.appendChild(h4);

    var buttoncol = document.createElement('div');
    buttoncol.className = 'col-4';

    titlerow.appendChild(buttoncol);

    var cardbody = document.createElement('div');
    cardbody.className = 'card-body';

    card.appendChild(cardbody);

    var timerow = document.createElement('div');
    timerow.className = 'row';

    cardbody.appendChild(timerow);

    var time = document.createElement('div');
    time.className = 'col-4';
    time.innerHTML = 'Time:';

    timerow.appendChild(time);

    var timeamount = document.createElement('div');
    timeamount.className = 'col-8';
    timeamount.innerHTML = localStorage.getItem('seconds');

    timerow.appendChild(timeamount);

    var imageamountrow = document.createElement('div');
    imageamountrow.className = 'row';

    cardbody.appendChild(imageamountrow);

    var image = document.createElement('div');
    image.className = 'col-4';
    image.innerHTML = 'Imageamount:';

    imageamountrow.appendChild(image);

    var imageamount = document.createElement('div');
    imageamount.className = 'col-8';
    imageamount.innerHTML = localStorage.getItem('imagesamount');

    imageamountrow.appendChild(imageamount);

    var button = document.createElement('button');
    button.className = 'btn btn-block btn-primary';
    button.id = 'settingsbutton';
    button.innerHTML = 'Settings';
    button.onclick = function (){
        openSettings();

        progressbarWidth = 100;
        clearInterval(progressbarId);
    };

    buttoncol.appendChild(button);
}

function openSettings() {
    document.getElementById('toprow').innerHTML = '';

    var extraCol = document.createElement('div');
    extraCol.className = 'col-3';

    toprow.appendChild(extraCol);

    var firstCol = document.createElement('div');
    firstCol.className = 'col-6';

    toprow.appendChild(firstCol);

    var card = document.createElement('div');
    card.className = 'card';

    firstCol.appendChild(card);

    var cardheader = document.createElement('div');
    cardheader.className = 'card-header';

    card.appendChild(cardheader);

    var titlediv = document.createElement('div');
    titlediv.className = 'col';

    cardheader.appendChild(titlediv);

    var settingsbox = document.createElement('h4');
    settingsbox.innerHTML = 'Settings';

    titlediv.append(settingsbox);

    var cardbody = document.createElement('div');
    cardbody.className = 'card-body';

    card.appendChild(cardbody);

    var timerow = document.createElement('div');
    timerow.className = 'row';

    cardbody.appendChild(timerow);

    var time = document.createElement('div');
    time.className = 'col-4';
    time.innerHTML = 'Time:';

    timerow.appendChild(time);

    var timeamountdiv = document.createElement('div');
    timeamountdiv.className = 'col-8';

    timerow.appendChild(timeamountdiv);

    var timeamountinput = document.createElement('input');
    timeamountinput.type = 'number';
    timeamountinput.id = 'timeinput';
    timeamountinput.placeholder = localStorage.getItem('seconds');

    timeamountdiv.appendChild(timeamountinput);

    var imageamountrow = document.createElement('div');
    imageamountrow.className = 'row';

    cardbody.appendChild(imageamountrow);

    var image = document.createElement('div');
    image.className = 'col-4';
    image.innerHTML = 'Imagesamount:';

    imageamountrow.appendChild(image);

    var imageamountdiv = document.createElement('div');
    imageamountdiv.className = 'col-8';

    imageamountrow.appendChild(imageamountdiv);

    var imageamountinput = document.createElement('input');
    imageamountinput.type = 'number';
    imageamountinput.id = 'timeinput';
    imageamountinput.placeholder = localStorage.getItem('imagesamount');

    imageamountdiv.appendChild(imageamountinput);

    var cardfooter = document.createElement('div');
    cardfooter.className = 'card-footer';

    card.appendChild(cardfooter);

    var startTraining = document.createElement('button');
    startTraining.className = 'btn btn-block btn-primary';
    startTraining.innerHTML = 'Start training';
    startTraining.onclick = function () {
        if (timeamountinput.value !== ''){
            localStorage.setItem('seconds', timeamountinput.value);
        } else {
            localStorage.setItem('seconds', localStorage.getItem('seconds'));
        }

        if (imageamountinput.value !== ''){
            localStorage.setItem('imagesamount', imageamountinput.value);
        } else {
            localStorage.setItem('imagesamount', localStorage.getItem('imagesamount'));
        }


        startTrainer();
        reload();
    }

    cardfooter.appendChild(startTraining);
}

function getName() {
    var number = Math.floor(Math.random() * names.length);
    rightname = names[number].Name;

    var namebox = document.createElement('h4');
    namebox.innerHTML = rightname;

    document.getElementById('name').appendChild(namebox);
}

function createAnswers(correctName) {
    console.log('In function createAnswers');

    answers.push(rightname);

    while (answers.length != localStorage.getItem('imagesamount')) {
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
        alert('Correct answer');

        for (var i = 0; i < names.length; i++){
            if (names[i].Name === rightname) {
                console.log('Good +1');

                names[i].Good += 1;
                names[i].Tries += 1;

                progressbarWidth = 100;
                clearInterval(progressbarId);
            }
        }

        reload();
    } else if(answer === 'timeout'){
        console.log('To late');
        alert('To late');
        for (var t = 0; t < names.length; t++){
            if (names[t].Name === rightname) {

                names[t].Tries += 1;

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

                names[u].Tries += 1;
            }
        }
    }
}

function fillScoreboard() {
    var scoreboard = document.getElementById('scoreboard');

    for (var i = 0; i < names.length; i++){
        var person = document.createElement('div');
        person.className = 'row';

        scoreboard.appendChild(person);

        var obj = names[i];

        for (const item in obj){
            var col = document.createElement('div');
            col.className = 'col';


            col.innerHTML = obj[item];

            person.appendChild(col);
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
    if (y === 0) {
        y = 1;
        var elem = document.getElementById("myBar");
        progressbarWidth = 1;
        progressbarId = setInterval(frame, localStorage.getItem('seconds') * 10);
        function frame() {
            if (progressbarWidth >= 100) {
                clearInterval(progressbarId);
                y = 0;
                registerAnswer('timeout')
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

    getName();
    createAnswers(rightname);
    fillScoreboard();
}