let n1 = Math.floor(Math.random()*6+1);
let n2 = Math.floor(Math.random()*6+1);
console.log ('${n1} , ${n2}');
let img1 = 'images/dice'+n1+'.png';
let img2 = 'images/dice'+n2+'.png';
document.querySelector('.img1').setAttribute('src',img1);
document.querySelector('.img2').setAttribute('src',img2);
console.log (img1);
console.log (img2);
if(n1 > n2) {
    document.querySelector('h1').textContent = 'Player 1 WINS!!!'
}else if (n1 < n2){
    document.querySelector('h1').textContent = 'Player 2 WINS!!!'
}else{
    document.querySelector('h1').textContent = 'Draw'
}