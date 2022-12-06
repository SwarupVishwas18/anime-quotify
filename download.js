var charCont = document.querySelector('#charCont');
var nameCont = document.querySelector('#nameCont');
var quoteCont = document.querySelector('#quoteCont');
var loadQuote = function(){
    if(localStorage.getItem('quote')){
        quoteCont.textContent = localStorage.getItem('quote');
        nameCont.textContent = localStorage.getItem('name');
        charCont.textContent = localStorage.getItem('char');
    } else {
    }
}

document.body.addEventListener('load', loadQuote());

// Download Image

var card = document.querySelector('#card');
var bodyBack = ["#fff","#fff","#fff","#fff"];
var cardBack = ["#76cbe4","#22d3a9","#ff6f7c","#fbf4db"];
var textCol = ["#320b2d","#231e20","#231e20","#231e20"]
var shadowCol = ["#c73b4a","#181818","#1a0f0d","#b3b3b3"]
var i = 0

document.querySelector('.cpy').textContent = "Swarup's Quotify"

function changeCol(){
    document.body.style.backgroundColor = bodyBack[i];
    card.style.backgroundColor = cardBack[i];
    document.body.style.color = textCol[i];
    i++;
    if(i>=bodyBack.length){
        i=0
    }
}

card.onclick = changeCol

var secBtn = document.querySelector('#select');

secBtn.addEventListener('click', function(e){
    // if(opCont.style.display == 'flex'){
    //     scrollTo(0,700);
    //     return;
    // }
    html2canvas(document.querySelector("#card")).then(canvas => {
        if(document.querySelector('#canvas')){
            const element = document.getElementById("canvas");
element.remove();
        }
        document.getElementById('op').appendChild(canvas);
        var canvas = document.querySelector('canvas');
        canvas.setAttribute('id', 'canvas');

    }).then(
        link => {
            var link = document.createElement('a');
            var name = charCont.textContent;
            link.download = name+'.png';
            link.href = document.getElementById('canvas').toDataURL()
            link.click();
    })
});
