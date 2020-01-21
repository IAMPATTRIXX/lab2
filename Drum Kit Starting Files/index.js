// document.querySelector('button').addEventListener('click',function(){
//     console.log('button clicked!!!')
// });
let buttons = document.querySelectorAll('button');
for (let i =0;i < buttons.length; i++){
    buttons[i].addEventListener('click',function(){
        // console.log(this);
        let key = this.innerHTML;
        console.log(`button ${key} clicked!!!`)

        let audio = new Audio('./sounds/tom-2.mp3');
        makeSound(key);
    });
}

document.addEventListener('keydown',function(event){
    console.log(event.key);
    makeSound(event.key);
})

function makeSound(key) {
    switch(key){
        case 'w':
        let s1 = new Audio('./sounds/crash.mp3')
        s1.play();
        break;
        case 'a':
        let s2 = new Audio('./sounds/kick-bass.mp3')
        s2.play();
        break;
        case 's':
        let s3 = new Audio('./sounds/snare.mp3')
        s3.play();
        break;
        case 'd':
        let s4 = new Audio('./sounds/tom-1.mp3')
        s4.play();
        break;
        case 'j':
        let s5 = new Audio('./sounds/tom-2.mp3')
        s5.play();
        break;
        case 'k':
        let s6 = new Audio('./sounds/tom-3.mp3')
        s6.play();
        break;
        case 'l':
        let s7 = new Audio('./sounds/tom-4.mp3')
        s7.play();
        break;
        
    }
}