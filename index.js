
/*  PART IV : SAVE THE CURRENT QUOTE  */

var getQuote = function(){
    if(localStorage.getItem('quote')){
        quoteCont.textContent = localStorage.getItem('quote');
        nameCont.textContent = localStorage.getItem('name');
        charCont.textContent = localStorage.getItem('char');
        return true;
    } else {
        return false;
    }
    }

/*  PART I : GENERATE ON LOAD  */

const colors = [{
    bgCol : "#76cbe4",
    textCol : "#320b2d",
    btnBg: "#c73b4a",
    btnCol: "#fcfefe"
},
{
    bgCol : "#22d3a9",
    textCol : "#231e20",
    btnBg: "#444f45",
    btnCol: "#fffefd"
},
{
    bgCol : "#22d3a9",
    textCol : "#191819",
    btnBg: "#4e565f",
    btnCol: "#eff3f8"
},
{
    bgCol : "#ff6f7c",
    textCol : "#231e20",
    btnBg: "#70a4be",
    btnCol: "#f0efee"
},
{
    bgCol : "#fbf4db",
    textCol : "#231e20",
    btnBg: "#c84d61",
    btnCol: "#fbf4db"
},
{
    bgCol : "#94bdbb",
    textCol : "#231e20",
    btnBg: "#f36a4b",
    btnCol: "#fbffff"
},
{
    bgCol : "#dca9a6",
    textCol : "#231e20",
    btnBg: "#7095dd",
    btnCol: "#fdffff"
},
{
    bgCol : "#4ebfda",
    textCol : "#231e20",
    btnBg: "#f4cf0e",
    btnCol: "#231e20"
}
];

var modal = document.querySelector('#modal-bg');
var r = document.querySelector(':root');
var quoteCont = document.querySelector('#quote');
var nameCont = document.querySelector('#name-anime');
var charCont = document.querySelector('#name-char');
// Create a function for setting a variable value
function myFunction_set() {
    var currentCol = colors[parseInt(Math.random()*8)];
    var bgCol = currentCol.bgCol;
    var textCol = currentCol.textCol;
    var btnBg = currentCol.btnBg;
    var btnCol = currentCol.btnCol;
    r.style.setProperty('--bgCol', bgCol);
    r.style.setProperty('--textCol', textCol);
    r.style.setProperty('--btnBg', btnBg);
    r.style.setProperty('--btnCol', btnCol);

    var label = getQuote();
    if(!label){

    fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then( quote => {
        console.log(quote);
        quoteCont.textContent = quote.quote;
        nameCont.textContent = quote.anime;
        charCont.textContent = quote.character;
        localStorage.setItem('quote', quoteCont.textContent);
        localStorage.setItem('name', nameCont.textContent);
        localStorage.setItem('char', charCont.textContent);
    
    });
}

    
   
}


document.body.addEventListener('load', myFunction_set())

/*  PART II : FULL SCREEN  */

var elem = document.querySelector('#main');
var exitFscreen = document.querySelector('#fscreen-exit');
var gen = document.querySelector('#generate');
var share = document.querySelector('#share');
var fscreen = document.querySelector('#fscreen');
fscreen.addEventListener('click', function(){
    if (elem.requestFullscreen) {
        myFunction_set()
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
      }
      fscreen.style.display = 'none';
      gen.style.display = 'none';
      share.style.display = 'none';
      exitFscreen.style.display = 'inline';

});

exitFscreen.addEventListener('click', function(){
    fscreen.style.display = 'inline';
    exitFscreen.style.display = 'none';
    gen.style.display = 'inline';
    share.style.display = 'inline';
    document.exitFullscreen()
});

/*  PART III : COPY TO CLIP  */

document.querySelector('#clip').addEventListener('click', function(){
    navigator.clipboard.writeText(document.querySelector('#quote').textContent);
    alert('Quote Copied Successfully..!!')
})

/*  PART IV : GENERATE ON CLICK  */
var gen = document.getElementById('generate');

gen.addEventListener('click', function(){
    var currentCol = colors[parseInt(Math.random()*8)];
    var bgCol = currentCol.bgCol;
    var textCol = currentCol.textCol;
    var btnBg = currentCol.btnBg;
    var btnCol = currentCol.btnCol;
    r.style.setProperty('--bgCol', bgCol);
    r.style.setProperty('--textCol', textCol);
    r.style.setProperty('--btnBg', btnBg);
    r.style.setProperty('--btnCol', btnCol);

    fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then( quote => {
        console.log(quote);
        quoteCont.textContent = quote.quote;
        nameCont.textContent = quote.anime;
        charCont.textContent = quote.character;
        localStorage.setItem('quote', quoteCont.textContent);
        localStorage.setItem('name', nameCont.textContent);
        localStorage.setItem('char', charCont.textContent);
     
    });
});

document.querySelector('#share').addEventListener('click', function(){
    modal.style.display = 'flex';
});

document.querySelector('#exit-modal').addEventListener('click', function(){
    modal.style.display = 'none';
});

// Whatsapp Sharing

document.getElementById('whatsapp').addEventListener('click', function(){
    var text = "*"+document.querySelector('#quote').textContent + "* " + '\n\nCreated By Quotify';
    var link = `https://wa.me?text=${text}`;
    // alert('click to ho raha hain');
    window.open(link, '_blank');
});

document.getElementById('download').addEventListener('click', function(){
    window.open('/anime-quotify/download.html', '_blank');
})

// NAVBAR

var lines = document.querySelector('#lines');
var links = document.querySelector('#nav-links');
var x = document.querySelector('#x');
lines.addEventListener('click', function(){
    if(links.style.display == 'none'){
        links.style.display = 'flex';
        x.style.display = 'block';
        lines.style.display = 'none';
    }else{
        links.style.display = 'none';
        x.style.display = 'none';
        lines.style.display = 'flex';
    }
});

x.addEventListener('click', function(){
    if(links.style.display == 'none'){
        links.style.display = 'flex';
        x.style.display = 'block';
        lines.style.display = 'none';
    }else{
        links.style.display = 'none';
        x.style.display = 'none';
        lines.style.display = 'flex';
    }
})
