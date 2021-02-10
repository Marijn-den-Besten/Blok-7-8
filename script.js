var names = ["vvd", "pvda", "sgp", "groenlinks"];

names.forEach(showNames);

function showNames(item) {
    document.getElementById('showbox').innerHTML += 'Name: ' + item + '<br>';
}