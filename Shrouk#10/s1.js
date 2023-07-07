// let main = document.querySelector('.main-container');
// let btnContainer = document.querySelector('.btn-container');
// let crslContainer = document.querySelector('.carousel-container');
// let crsl = document.querySelector('.carousel');
// let btn_increase = document.getElementById('btn-plus');
// let btn_decrease = document.getElementById('btn-mins');
// let current = 0;
// let index;
// btn_increase.addEventListener('click', inc);
// btn_decrease.addEventListener('click', dec);

// document.body.append(main);
// main.append(btnContainer, crslContainer);
// crslContainer.append(crsl);

// // let images= document.querySelectorAll(`img`);
// // crsl.append(images[current])

// let images = ['../m1.jpg', '../m2.jpg', '../m3.jpg']
// var rotator = document.getElementById('rotator');  // change to match image ID

// function inc() {
//     current+=1

//     if (current > images.length-1) {
//         current = 0;
//         console.log(images[current]);
//         rotator.src = images[current];

//     } else {
//         console.log(images[current]);
//         rotator.src = images[current];

//     }
// }
// function dec() {
//     current-=1

//     if (current <0) {
//         current = images.length-1;
//         console.log(images[current]);
//         rotator.src = images[current];

//     } else {
//         console.log(images[current]);
//         rotator.src = images[current];

//     }
// }


var carousel = document.querySelector('.carousel');
var prevBtn = document.querySelector('.carousel i:nth-child(1)');
var nextBtn = document.querySelector('.carousel i:nth-child(2)');

var index = 0;
var carousel_container=['assets/m2.jpg' , 'assets/m3.jpg' , 'assets/m1.jpg' ];

nextBtn.addEventListener('click', inc);
prevBtn.addEventListener('click', dec);

function inc() {
    carousel.style.backgroundImage = `url(${carousel_container[index]})`
    index++;
    if (index > carousel_container.length-1) {
        index=0;
    } 
}

function dec() {
    carousel.style.backgroundImage = `url(${carousel_container[index]})`
    index--;
    if (index < 0) {
        index=2 ;
    } 
}







