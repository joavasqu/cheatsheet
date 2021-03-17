alert('Hello World');
let link1 = document.getElementById('link1');

function holaMundo (){
    link1.style.backgroundColor = 'yellow';
    document.body.style.backgroundColor = 'green';
}

link1.onclick = holaMundo;

