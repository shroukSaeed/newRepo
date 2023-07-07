var carousel = document.querySelector('.carousel');
var txt = document.querySelector('.heading');
var imgHolder = document.querySelectorAll('.container__images')
var pointers = document.querySelectorAll('.diiv')
var po
var index = 0;
// var carousel_container=['assets/m2.jpg' , 'assets/m3.jpg' , 'assets/m1.jpg' ];
// var txt_container = [`slidder 1` , `slidder 2 ` , `slidder 3`]



for (let i = 0; i < imgHolder.length; i++) {
    imgHolder[i].addEventListener('click', function (e) {
        // pointers[i].classList.add(`active`);

        console.log(e.target.getAttribute('data-target'));
        const imgSrc = e.target.getAttribute('data-target');
        carousel.style.backgroundImage = `url(${imgSrc})`
        pointers[i].classList.add("active");


        // function toggleActiveState() {
        //     let allBolts = [...pointers];
        
        //     allBolts.map((pointers[i]) => {
        //         pointers[i].classList.remove("active");
        //     });
        
        //     pointers[i].classList.add("active");
        // }
        // toggleActiveState();

    })
}









