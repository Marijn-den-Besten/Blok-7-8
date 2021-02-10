console.log('hello world!');

var names = ['bert', 'chantal', 'freek'];

names.forEach(showNames)

function showNames(item) {
    document.getElementById('namecol').innerHTML += 'Name:' + '<br>';
    document.getElementById('itemcol').innerHTML += item  + '<br>';

    var img = document.createElement('img');
    img.src = '/Jaar%202/Blok%207%20+%208/Images/'+item+'.jfif';
    img.width = 100;
    img.height = 100;
    document.getElementById('images').appendChild(img);
}